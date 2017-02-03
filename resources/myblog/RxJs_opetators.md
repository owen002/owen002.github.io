#RxJs operator

> 创建

####1.from	
将几乎所有的js对象转换成observable对象
####2.fromEvent
Creates an Observable from DOM events, or Node EventEmitter events or others.
####3.fromPromise
Returns an Observable that just emits the Promise's resolved value, then completes.
####4.of
Emits the arguments you provide, then completes.
####5.interval
####6.timer
####7.range
Emits a sequence of numbers in a range.

	var numbers = Rx.Observable.range(1, 10);
	numbers.subscribe(x => console.log(x));
	----
	1，2，3，4，5，6，7，8，9，10

>转换

####1.switchMap
Maps each value to an Observable, then flattens all of these inner Observables using switch.
####2.map
####3.mergeMap
Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.
####4.pluck

>组合

####1.combineLatest
Whenever any input Observable emits a value, it computes a formula using the latest values from all the inputs, then emits the output of that formula.

	----
	var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	var height = Rx.Observable.of(1.76, 1.77, 1.78);
	var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
	bmi.subscribe(x => console.log('BMI is ' + x));
	----
	BMI is 24.212293388429753
	BMI is 23.93948099205209
	BMI is 23.671253629592222
	这里combineLatest只关心最新weight和height的最新的值，height触发的时候weight恒等于75，height触发了3次
	
####2.zip
Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables.

	zip组合流的时候会取每一个流的第n个值进行组合，必须所有的流都有
	---
	let age$ = Rx.Observable.of(27, 25, 29);
	let name$ = Rx.Observable.of('Foo', 'Bar', 'Beer','11');
	let isDev$ = Rx.Observable.of(true, true, false,true);
	
	Rx.Observable
	    .zip(age$,
	        name$,
	        isDev$,
	        (age, name, isDev) => ({ age, name, isDev }))
	    .subscribe(x => console.log(x));
	---
	这里就只显示前三个值，因为age只有3个值

####3.merge
将流组合在一起互不干扰，得到所有流的所有值
	var clicks = Rx.Observable.fromEvent(document, 'click');
	var timer = Rx.Observable.interval(1000);
	var clicksOrTimer = clicks.merge(timer);
	clicksOrTimer.subscribe(x => console.log(x));
	
####4.concat
Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.
	var timer = Rx.Observable.interval(1000).take(4);
	var sequence = Rx.Observable.range(1, 10);
	var result = timer.concat(sequence);
	result.subscribe(x => console.log(x));
	----
	timer触发完了再触发sequence

>过滤

####1.filter
####2.debounce/debounceTime
It's like delay, but passes only the most recent value from each burst of emissions.
类似于函数防抖--n毫秒内没有点击才会执行
####3.take
####4.first
####5.last