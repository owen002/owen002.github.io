##使用webpack构建react项目报错Module not found: Error: Cannot resolve module 'react' ...


####今天在弄项目的时候遇到这样的一个报错信息：Module not found: Error: Cannot resolve module 'react' 

遇到这个错误的第一个反应就是没装react，在本地重装了react之后发现还是报这个问题，在确认了包、webpack配置都正确的情况下在网上找了一圈之后终于在stack上找到了问题所在[http://stackoverflow.com/questions/37015447/module-not-found-error-cannot-resolve-module-react-when-i-use-webpack](http://stackoverflow.com/questions/37015447/module-not-found-error-cannot-resolve-module-react-when-i-use-webpack)
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
大体的意思就是程序需要的是react.js.js和react.js.jsx而不是react.js
webpack中resolve参数extensions属性是用于配置程序可以自行补全哪些文件后缀，空字符串对应的是不需要补全的文件类型
在extensions里面增加了空字符串之后问题得以解决