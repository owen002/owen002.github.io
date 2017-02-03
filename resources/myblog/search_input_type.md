项目中遇到这样一个问题：
####在一个input输入框中输入号码的时候，实时得进行搜索，将搜索到的号码显示在搜索框下供用户选择,在网络情况不好的时候,会返回错误的结果。比如先搜索1707919，再输入1707918，返回的还是7919的内容。

一般情况下就是监听键盘的输入事件
	
	var timer = 0;
	$('#search').on('keyup',function(){
		if(timer){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			$.ajax({
				//....
				success:function(info){
					if(info.code == 0){
						//...渲染dom
					}
				}
			})
		},300)
	})

这里有个问题就是在首先输入1707919之后发起请求，然后又输入1707918发起请求，7919的请求后返回，页面上就会显示7919的结果，而我想要的结果是7918的。

解决方案：
后端增加一个返回参数表示搜索的关键字，将这个关键字和输入的关键字进行比对，一样的话就显示在界面上

	var timer = 0;
	$('#search').on('keyup',function(){
		var searchInput = $(this).val();
		if(timer){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
			$.ajax({
				//....
				success:function(info){
					if(info.code == 0){
						if(info.value.word == searchInput{
							//...渲染dom
						}
					}
				}
			})
		},300)
	})

解决问题