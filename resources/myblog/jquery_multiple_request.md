#使用jquery多个ajax顺序调用的问题 jQuery Promise Deferred
如果不需要自行控制ajax流程的话使用$.ajax返回的promise对象即可，例如：

    $.ajax({}).then(function(){
        console.log('1 success');
        return $.ajax({})
    }).then(function(){
        console.log('2 success');
        return $.ajax({})
    }).then(function(){
        console.log('3 success');
    })

但是在实际情况中有可能会有要我们自己来判断是否执行下一个请求：比如返回code为0时才算请求成功，这时候我们就需要用到jquery的Deferred对象，例如：

        var s1Dtd = $.Deferred();
        var s2Dtd = $.Deferred();
        var s1 = function (dtd) {
            $.ajax({
                url: common.API.url1,
                dataType: 'json',
                success: function (info) {
                    if (info.code == 0) {
                        dtd.reject(info)
                    } else {
                        dtd.resolve(info)
                    }
                },
                error: function () {
                    dtd.reject();
                }
            });
            return dtd;
        };
        var s2 = function (dtd) {
            $.ajax({
                url: common.API.url2,
                dataType: 'json',
                success: function (info) {
                    if (info.code == 0) {
                        dtd.reject(info)
                    } else {
                        dtd.resolve(info)
                    }
                },
                error: function () {
                    dtd.reject();
                }
            });
            return dtd;
        };
        s1(s1Dtd).then(function () {
            console.log('1 success')
            return s2(s2Dtd)
        }, function () {
            console.log('1 error')
        }).then(function () {
            console.log('2 success');
        },function () {
            console.log('2 error');
        });

        //如果第二个接口请求不成功则返回：
        //1 success
        //2 error

使用es6的promise对象的实现：

        function getS(f) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: common.API.recall + '17095220851',
                    dataType: 'json',
                    cache: false,
                    success: function (info) {
                        if(f){
                            if (info.code == 0) {
                                resolve(info)
                            } else {
                                reject(info)
                            }
                        }else{
                            if (info.code == 0) {
                                reject(info)
                            } else {
                                resolve(info)
                            }
                        }
                    },
                    error: function () {
                        reject();
                    }
                });
            });
        }

        getS(false).then(function (info) {
            console.log('1 success',info)
            return getS(true)
        }, function (info) {
            console.log('1 error',info)
        }).then(function (info) {
            console.log('2 success',info);
        }, function (info) {
            console.log('2 error',info);
        });
        //1 error Object {code: 0, msg: "OK", value: Object}
        //2 success undefined

        //使用Deferred和promise的区别：Deferred对象执行reject方法之后会执行之后所有then回调方法中的reject的方法，而promise会回调之后then中的第一个回调方法即resolve方法