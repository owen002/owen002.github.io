# **联系方式**

- 手机/微信号：18944229782 
- Email：hewenraul@126.com
- QQ：294083034
- 住址：苏州工业园区港田路澜调国际19栋

---

# **个人信息**

 - 何文/男/1990/30岁
 - 本科/苏州科技大学(2008.09 - 2012.06)/应用物理学
 - 英语等级：六级
 - 工作年限：7年
 - Github: [https://github.com/owen002](https://github.com/owen002)
 - 期望职位：前端开发
 - 期望城市：苏州

---

# **个人评价**

有1年java、6年前端开发经验，对前端整体应用架构体系有较为深入的理解与实际经验；一直紧跟前端技术趋势的发展，对主流前端技术框架、打包工具十分熟悉，对webpack打包有全面的研究，开发了h5ManifestPlugin、sourceMapTransfer等webpack插件；具备快速理解业务需求的能力，驱动业务快速变现，让业务更有想象力。

有3年的前端TeamLeader经验，目前带领6人团队进行业务变现、技术攻坚；与核心成员定制前端代码规范，使用eslint相关工具链范组内成员的代码；注重团队基础设施建设，包括各类文档、定期codereview、线上问题复盘。

---

# **技能清单**

- 熟练掌握原生js，熟练掌握浏览器运行机制
- 熟悉websocket、http通讯传输协议，具有网络安全意识
- 精通vue技术栈，熟练小程序开发，熟悉react，熟悉typescript，了解Angular
- 熟练nodejs，熟悉express、ws，了解redis
- 熟练掌握jquery、zepto，熟悉bootstrap
- 熟练掌握webpack打包工具，并有webpack打包时间、体积优化经验，熟悉gulp
- 熟练掌握canvas开发
- 熟悉java，理解后端接口实现

---

# **工作经历**

## 同程艺龙（ 2017年3月 ~ 至今 ）

职位：交通事业群 - 慧行研发前端开发owner

工作内容：

+ 前端技术选型，框架改造，基础代码编写
+ 解决团队前端开发痛点
+ 编写各类技术、业务相关文档
+ 线上问题及时止损，复盘，定期codereview
+ 部门内部ppt技术分享
+ 制定组内各个成员季度目标，并纳入kpi考核，每个季度前端技术复盘
+ 小程序、h5相关项目业务代码编写
+ webpack打包性能优化，webpack插件定制开发
+ 首屏加载速度优化


## 苏州游戏蜗牛（2015年8月 ~ 2017年3月）

职位： 蜗牛移动 - 前端开发

工作内容：

+ 蜗牛移动免商店掌厅（移动web端）、免商店pc商户开发（pc端）
+ 蜗牛移动虚拟运营商整个开卡流程开发
+ 编写业务文档方便新的同事快速了解业务

## 苏州宽连十方（ 2014年6月 ~ 2015年7月）

职位：web开发工程师

工作内容：江苏移动12580mo生活移动端页面、江苏移动营销活动开发

## 新大陆软件项目（ 2013年5月 ~ 2014年5月）

职位：java开发工程师

工作内容：负责北京移动网厅易充值、自助终端充值流程后台开发、维护，前端使用jsp、flash开发

---

# **项目经验**

### 1. 微信钱包 - 第三方服务 - 火车票机票小程序

项目介绍：售卖火车票的小程序项目，采用小程序组件开发方案列表页，后续的流程（坐席选择、订单填写、订单详情）使用webview组件内嵌h5的开发，既满足了微信小程序要求又兼顾了发布的及时性，是部门主营项目，目前营收占整个事业部半数左右；
技术栈：vue/vuex/vue-router/vue-cli2/webpack/eslint

- 基于vue-cli2 webpack template搭建项目，兼容多渠道（同程APP、手Q、艺龙APP）同步打包发布
- 使用yapi搭建mock平台，作为接口文档、测试接口提升开发联调效率
- 增加git提交推送、tag发布、狮子座cdn上传等模块，将打包发布部署流程自动化，提高开发效率
- 首屏加载时间优化，增加application cache缓存从2s左右优化到500ms
- 使用nuxt做首页ssr改造试验，大大提高首屏加载速度
- 增加dll模块，使用DllRefrencePlugin将vue相关类库写入dll中，避免重复打包
- 使用eslint+yorkie+lintstaged，配合vscode自动报错提示规范化前端代码格式，自动拦截不符合规范的commit，避免低级bug的产生
- 使用hashchange解决小程序和h5通信难题
- 优化小程序列表页端长列表加载渲染时间从3s左右下降到1s
- 封装eventbus，方便各个组件调用
- 解决vuex返回丢失的问题
- 使用canvas开发天气预报动画，开发canvas弹幕推荐组件
- 前端错误监控，将错误信息上报到埋点信息平台使用sourcemap还原报错信息
- webpack构建速度优化、构建体积优化

### 2. 火车票koi组件库

项目介绍：部门内部的vue组件库

- 参照element的代码风格部门内部编写的组件库
- message弹框组件、mask蒙版组件、城市选择日期选择组件等
- 发布到公司npm源

### 3. kurrami nodejs项目

项目介绍：nodejs项目，主要提供websocket服务器，提供sourcemap源码解析页面，提供时序数据给nodejs客户端给prometheus网关

- 使用ws做websocket服务端，提供websocket接口供客户端连接
- 使用log4js记录服务端日志
- 使用cluster模块做nodejs服务端多进程
- 使用body-parse、错误处理、跨域处理等中间件
- 开发一键提交部署脚本，一键部署
- 使用express提供健康检查接口，提供报错信息sourceMap对应界面
- 使用prom-client提供时序数据给prometheus做页面加载性能的实时监控

### 4. 点到点小程序

项目介绍：使用原生小程序开发提供点到点交通出行查询，火车票、飞机票、汽车票预订功能

- 二次封装get/post方法，封装用户信息查询
- 提供一个全局eventbus供组件之间通信
- 城市选择下拉框展示，日历组件开发
- 根据查询出来的方案结果展示交通方案
- 根据经纬度信息展示行程地图示意
- 签约代扣功能开发

### 5.蜗牛移动免商店掌厅 http://app.snail.com 蜗牛移动免商店商户 http://jxs.snail.com/index.html
免商店客户端免卡部分营销活动，免商店商户客户端免卡业务开发

- 项目原本使用蜗牛内部框架sky、jquery，在新的需求中使用vuejs渐进式开发
- 使用jsbridge和客户端进行交流
- 使用nginx作为本地开发服务器,使用nginx反向代理实现接口的访问
- 使用gulp做打包工具，使用gulp-watch结合gulp的less/cssmin/uglify等插件进行文件实时监控，修改完成后自动重新打包

### 6.蜗牛移动经销商项目 http://jxs.snail.com
经销商项目的开发和维护。使用jquery+bootstrap，解决了ie8+的兼容性的同时也有很好的体验

- 通过activeX调用dll读取sim卡信息
- 使用jquery.form/webuploader/html5 formdata对象进行图片上传
- 列表分页展示(用户点击页码/下拉到底部加载)
- 开发自定义count组件，可以很好的兼容各个页面数量的录入、选择
- 开发公共顶部、边栏、尾部组件并且根据pathname联动高亮显示

### 7.移动mo生活综合版项目 http://hi.12580.com
移动电商手机端网站

- css3、zepto开发界面
- 轮播图touchslider，iscroll.js
- 商城购物车模块(增删改商品、商品计价)
- 通过bridge获取手机经纬度，调用地图api获取城市相关信息传递给讯奇对接酒店机票等

### 8.移动mo生活营销活动项目
移动电商营销活动

- 根据ui效果图，高度还原成网页
- 根据产品提出的运营活动需求，开发活动页面
- 使用canvas修改开源打地鼠游戏项目开发打地鼠小游戏

### 9.北京移动网上营业厅、自助终端、移动轻应用wap http://shop.10086.cn/i/?f=rechargecredit
负责北京移动网厅充值模块前后台、移动wap端前后台、自助终端后端java开发

>使用的技术

- html/js/css、jquery、jqm
- struts、ibatis、spring、oracle、weblogic
