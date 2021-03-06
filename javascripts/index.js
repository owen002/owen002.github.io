(function () {
    var pageTitles = [], pageContext = [], pageAddr = [], sorts = ['工具', '前端', '问题', 'vue', 'RxJs'], sortsIndex = {};
    sortsIndex = {
        0: [0],
        1: [1, 2, 4, 10, 11],
        2: [3, 5, 6, 7],
        3: [12],
        4: [8, 9]
    };
    //markdown语法0
    pageTitles.push('markdown语法');
    pageContext.push('markdown的基本使用方法');
    pageAddr.push('https://owen002.github.io/pages/myblog/Markdown.html');
    //css画三角形1
    pageTitles.push('css画三角形');
    pageContext.push('使用纯css画一个三角形');
    pageAddr.push('https://owen002.github.io/pages/myblog/triangle-css.html');
    //数组去重2
    pageTitles.push('数组去重');
    pageContext.push('js数组去重的几种方法');
    pageAddr.push('https://owen002.github.io/pages/myblog/arr_repeat.html');
    //module_not_found_pro3
    pageTitles.push('module_not_found问题');
    pageContext.push('使用webpack构建react项目报错Module not found: Error: Cannot resolve module...');
    pageAddr.push('https://owen002.github.io/pages/myblog/module_not_found_problem.html');
    //ES6_React_constructor4
    pageTitles.push('ES6_React_constructor');
    pageContext.push('使用ES6编写React组件');
    pageAddr.push('https://owen002.github.io/pages/myblog/ES6_React_constructor.html');
    //ie8修复5
    pageTitles.push('ie8 遇到的不支持es5修复以及项目中遇到的问题');
    pageContext.push('ie8 遇到的不支持es5修复以及项目中遇到的问题');
    pageAddr.push('https://github.com/owen002/bugs-fixed-collection');
    //search-input先后顺序问题6
    pageTitles.push('输入框实时显示搜索结果优化');
    pageContext.push('输入框实时显示搜索结果优化');
    pageAddr.push('https://owen002.github.io/pages/myblog/search_input_type.html');
    //jquery多个顺序请求的问题7
    pageTitles.push('使用jQuery发送多个顺序的ajax请求时，promise和deferred对象的使用方法');
    pageContext.push('使用jQuery发送多个顺序的ajax请求时，promise和deferred对象的使用方法');
    pageAddr.push('https://owen002.github.io/pages/myblog/jquery_multiple_request.html');
    //rxjs解决连续请求ajax的问题8
    pageTitles.push('rxjs解决连续请求ajax的问题');
    pageContext.push('rxjs解决连续请求ajax的问题');
    pageAddr.push('https://owen002.github.io/pages/myblog/rxjs_ajax.html');
    //rxjs operator简介9
    pageTitles.push('rxjs operator简介');
    pageContext.push('rxjs operator简介');
    pageAddr.push('https://owen002.github.io/pages/myblog/RxJs_opetators.html');
    //前端优化方案10
    pageTitles.push('常见的前端优化方案');
    pageContext.push('前端优化方案介');
    pageAddr.push('https://owen002.github.io/pages/myblog/youhua.html');
    //html5 meta11
    pageTitles.push('html5 常见的meta');
    pageContext.push('html5 常见的meta');
    pageAddr.push('https://owen002.github.io/pages/myblog/html5-meta.html');
    //vue组件之间的通信 12
    pageTitles.push('vue组件之间的通信');
    pageContext.push('vue组件之间的通信');
    pageAddr.push('https://owen002.github.io/pages/myblog/vue-component-comu.html');

    var $sideBar = $('#sidebar');
    var page = {
        init: function () {
            page.drawContent();
            page.drawSide();
            page.bind();
        },
        drawContent: function (sort) {
            var pageDom = '', sortArr;
            if (sort || sort === 0) {
                sortArr = sortsIndex[sort];
            }
            for (var i = 0, j = pageTitles.length; i < j; i++) {
                if (sortArr) {
                    if (sortArr.indexOf(i) >= 0) {
                        pageDom += '<a href="' + pageAddr[i] + '"><div class="article"><h3>' + pageTitles[i] + '</h3><p>' + pageContext[i] + '</p></div></a>'
                    }
                } else {
                    pageDom += '<a href="' + pageAddr[i] + '"><div class="article"><h3>' + pageTitles[i] + '</h3><p>' + pageContext[i] + '</p></div></a>'
                }
            }
            $('#main-content').html(pageDom);
        },
        drawSide: function () {
            var sideDom = '';
            for (var i = 0, j = sorts.length; i < j; i++) {
                sideDom += '<p class="side-sorts" data-id="' + i + '"><a>' + sorts[i] + '</a></p>'
            }
            $sideBar.html(sideDom);
        },
        bind: function () {
            $sideBar.on('click', '.side-sorts', function () {
                var $this = $(this);
                page.drawContent($this.data('id'));
            })
        }
    };

    page.init();
})();