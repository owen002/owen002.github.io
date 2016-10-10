#数组去重复

后台将所有要出售的手机的信息用一个接口返回，其中包含很多参数，例如手机的品牌、型号、颜色、容量等等，我们需要根据这个将SKU页面展示出来。这里面就涉及到了一个数组去重的问题

例如有这样的一个数组["16G","32G","64G","16G","64G"],我们要将容量数据去重。
> 首先想到的是创建一个临时数组，然后分别循环旧数组和新数组

	function removeReptArr1(a){
		var arr = [];
		for(var i=0,j=a.length;i<j;i++){
			var rFlag = false;
			for(var m=0;m<arr.length;m++){
				if(a[i] === arr[m]){
					rFlag = true;
					break;
				}
			}
			if(!rFlag){
				arr.push(a[i]);
			}
		}
		return arr;
	}
arr里面就存放了去重之后的数据,这里看到是做了两次for循环，其实我们可以使用indexOf来替换
>使用indexOf

	function removeReptArr2(a){
		var arr = [];
		for(var i=0,j=a.length;i<j;i++){
			if(arr.indexOf(a[i]) < 0){
				arr.push(a[i])
			}
		}
		return arr;
	}

>利用js object对象键值对去重

	function removeReptArr3(a){
		var arr = [],newObj = {};
		for(var i=0,j=a.length;i<j;i++){
			if(!newObj[a[i]]){
				newObj[a[i]] = 1;
				arr.push(a[i]);
			}
		}
		return arr;
	}

>ES6中有引入Set对象，可以利用Set集合的去重特性

	function removeReptArr4(a){
		let set = new Set();
		for(let i=0,j=a.length;i<j;i++){
			//if(set.has(a[i])){}
			set.add(a[i]);
		}
		return set;
	}

再使用date做一个性能测试,分别用存20w数据的数组(纯数字、英文、中文),在chrome V8下运行:
 
	var a1 = [],a2=[],a3=[],b=["a","b","c"],c=["颜色","容量","加个"];
    for(var i=0;i<200000;i++){
        a1.push(parseInt(Math.random()*100));
    }
	for(var i=0;i<200000;i++){
        a2.push(parseInt(Math.random()*100)+''+b[parseInt(Math.random()*3)]);
    }
	for(var i=0;i<200000;i++){
        a3.push(parseInt(Math.random()*100)+''+b[parseInt(Math.random()*3)]+c[parseInt(Math.random()*3)]);
    }
	
	function test(call,param){
		var d1 = new Date().getTime();
		call(param);
		var d2 = new Date().getTime();
		return d2-d1;
	}

	var r11 = test(removeReptArr1,a1);
	var r12 = test(removeReptArr2,a1);
	var r13 = test(removeReptArr3,a1);
	var r14 = test(removeReptArr4,a1);

	var r21 = test(removeReptArr1,a2);
	var r22 = test(removeReptArr2,a2);
	var r23 = test(removeReptArr3,a2);
	var r24 = test(removeReptArr4,a2);
	
	var r31 = test(removeReptArr1,a3);
	var r32 = test(removeReptArr2,a3);
	var r33 = test(removeReptArr3,a3);
	var r34 = test(removeReptArr4,a3);

	console.log(r11,r12,r13,r14)
	console.log(r21,r22,r23,r24)
	console.log(r31,r32,r33,r34)

	//得到的结果：
	//32 17 2 40
	//2 261 124 12 18
	//3 2090 1671 16 18

###由此可见方法3、4性能最好

测试中发现3不能区分数组中的元素的类型，即元素类型为字符串和数字的如果值相等会覆盖比如"11"和11