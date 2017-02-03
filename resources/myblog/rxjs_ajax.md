###rxjs解决项目之前遇到的问题

>之前在项目中遇到了一个问题：使用异步方式连续请求两个ajax接口的问题

之前有用jquery库解决过这个问题，今天在研究了rxjs的时候发现使用rxjs可以很好的解决异步的问题

rxjs号称是事件的lodash（[Think of RxJS as Lodash for events](http://reactivex.io/rxjs/manual/overview.html#introduction)）。

	import $ from 'jquery';
	import Rx from 'rxjs/Rx';

有两个请求：
	
	let post1 = function () {
	    return $.ajax({
	        url: '/getCode',
	        dataType: 'json'
	    });
	};
	let post2 = function (param) {
	    return $.ajax({
	        url: '/getInfo',
	        dataType: 'json',
			param:param
	    });
	};

我们需要先请求post1，拿到post1正确的返回数据之后再去请求post2，使用rxjs的switchMap operator可以很好得解决：
	
	Rx.Observable.fromPromise(post1())
		.switchMap(info => {
			console.log(info);
			if(info.code == '0'){
				return Rx.Observable.fromPromise(post2({
					code:info.value
				}))
			}else{
				return Rx.Observable.of(info);
			}
		}).subscribe(
		    v => console.log(v),
		    err => console.log('rxjs err:' + err),
		    () => console.log('rxjs completed')
		);

