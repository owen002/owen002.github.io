#html css画三角形
首先绘制一个普通的div，给div加上各个边

	<style>
		.normal{
			width:100px;
			height:100px;
			border-left: 50px solid blue;
    		border-top: 50px solid purple;
    		border-right: 50px solid black;
    		border-bottom: 50px solid green;
		}
	</style>    
    <div class="normal"></div>

我们会得到这样的一个图形
![](https://owen002.github.io/images/source/triangle/tr1.png)

然后将width,height设置成0后会得到这样的图
![](https://owen002.github.io/images/source/triangle/tr2.png)

最后可以设置其他三条边的颜色为transparent透明来画出4个角度的三角形

也可以使用css3的transform属性进行角度旋转：

	<style>
		.normal{
			transform:rotate(90deg)
		}
	</style>  