(function () {
    var pageTitles = [], pageContext = [], pageAddr = [], sorts = ['工具', '前端', '问题'], sortsIndex = {};
    sortsIndex = {
        0: [0],
        1: [1, 2, 4],
        2: [3]
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