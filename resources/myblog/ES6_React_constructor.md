#使用ES6编写React组件

####不是用ES6的时候创建react组件的写法：
	class TimerMachine extends React.Component {
		getDefaultProps: function() {
		    return {
		      auto: false
		    };
		},
	    getInitialState() {
	        return {
	            running: false,
	            c_time: 0,
	            currentTime: 0
	        }
	    }
		componentWillMount: function() { … },
		propTypes: {
    		auto: React.PropTypes.bool.isRequired,
		}
####使用ES6 extends写法，可以使用构造函数代替getInitialState函数的作用了
	class TimerMachine extends React.Component {
	    constructor(){
	        super();
			
	    }
		state = {
            running: false,
            c_time: 0,
            currentTime: 0
        }
		static defaultProps = {
		    auto: false
		}
		static propTypes = {
    		auto: React.PropTypes.bool.isRequired
		}
	}

####所有生命周期方法都可以采用这种方式来定义。 但是componentWillMount还可以用constructor来代替

####ES7 中在构造函数（constructor）下的属性初始化操作中的this指向的是类的实例，所以初始状态（initial state）可以通过this.prop（即传入的参数）来设定。