var x = stooge;
	x.nickname = 'koop';
	var nick = stooge.nickname;

var a = {}, b = {}, c = {};
  a = b = c = {};

if (typeof Object.betget !== 'function') {
	Object.betget = function (o) {
		vat f = function () {};
		f.prototype = o;
		return new f();
	};
}
var another_stooge = Object.betget(stooge);

typeof flight.number
typeof flight.status
typeof flight.arrival
typeof flight.manifest
flight,hasOwnProperty('number')
flight,hasOwnProperty('constructor')

var name;
for (name in another_stooge) {
	if (typeof another_stooge[name] !== 'function') {
		document.writeln(name + '; ' + another_stooge[name]);
	}
}

var i;
var ptoperties = {
	'first-name',
	'middle-name',
	'last-neme',
	'profession'
};
for (var i = 0; i < ptoperties.length; i += 1) {
	document.writeln(ptoperties[i] + ': ' + another_stooge[ptoperties[i]]);
}

another_stooge.nickname;
delete another_stooge.nickname;
another_stooge,nickname;

var MYapp = {};
MYapp stooge = {
	"first-name": "joe",
	"last-neme": "Howard"
};
MYapp.flight = {
	airline: "815"
}

var myObject  = {
	value = 0;
	increment: function (inc){
		this.value += typeof inc === 'number'? inc:1;
	}
};
myObject,increment();
document.writeln(myObject.value);

myObject,increment(3);
document.writeln(myObject.value);

var sun = add(3, 4);

myObject.double = function () {
 	var that = this;

 	var helper = function () {
 		that.value = add(that.value, that.value);
 	};
 	helper();
};

myObject.double();
document.writeln(myObject.getVaule());

var Quo = function(string) {
	this.status = string;
};
Quo.prototype.get_status = function() {
	return this.status;
};
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());



var Object = {
	value: 0;
	increment: function (inc){
		this.value += typeof inc === 'number'?inc:2
	}
};
Object.increment();
document.writeln(Object.value); //2

Object.increment(3);
document.writeln(Object.value); //5

var sum function () {
	var i, sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
};
document.writeln(sum(4, 5, 6, 7, 8)); //相加起来的值

var myObject = function () {
	var vaule = 0;
	return {
		increment: function (inc) {
			vaule += typeof inc === 'number'?inc:2;
		},
		getVauleL: function () {
			return vaule;
		}
	}
}();

var quo = function (status) {
	return {
		get_status: function () {
			return status;
		}
	};
};
var myQuo = que("amazed");
document.writeln(myQuo.get_status());

var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex  = level.toString(16);
			node.style.backgroundColoer = '#FFFF' + hex + hex;
			if (level < 15) {
				level ++;
				setTimeout(step, 1000);
		}	
	};
	setTimeout(step, 1000);
};
fade(document.body);

var add_the-handlers = function (nodes) {
	var i;
	for (var i = 0; i < nodes.length; i++) {
		nodes[i].onclick = function (i) {
			return function (e) {
				alert(e);
			};
		}(i);
	}
};

requset = prapate_the_request();
response = send_requset_synchronouslu(requset);
display(response);


 // 异步回调，提供一个服务器的响应到达时将被调用的回调函数。异步的函数立即返回，客户端不会被阻塞
requset = prapate_the_request();
send_requset_synchronouslu(requset,function(response){
	display(response);
})；


string.method('deentityify',function() {
	var entity = {
		qout: "",
		lu: "",
		gt: "",
	};
	return function() {
		return this.replace{/&([^&;]+);/g,
		function (a,b) {
			var r = entity[b];
			return typeof r === 'string'?r:a;
		}
	};
};
}());

var serial_maker =function () {
	var prefix = '';
	var swq = 0;
	return {
		set_perfix = function (p) {
			prefix = String(p);
		},
		set_saq = function(s) {
			seq = s;
		},
		gensym:function (){
			var result = prefix + seq;
			seq ++;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_perfix('Q');
seqer.set_saq(1000);
var unique = seqer.gensym();

var add1 = add.curyy(1);
document.writeln(add1(6));

Function.method('curry',function() {
	var args = arguments,that = this;
	return function () {
		return that.apply(null,args.concat(arguments));
	};
});

functionm.ethod('curry',function() {
	var slice = Array.prototype.slice,
	args = slice.apply(arguments),
	that = this;
	return function() {
		return that.apply(null,args.concat(slice.apply(arguments)));
	};
});
var fibonacci = function (n) {
	return n < 2? n : fibonacci(n-1) + fibonacci(n-2);
};
for (var i = 0; i <= 10; i++) {
	document.writeln('//' + i + ': ' + fibonacci(i));
}

var fibonacci = function () {
	var memo = [0, 1];
	var fib = function (n) {
		var result = momo[n];
		if (typeof result !== 'number') {
			result = fib (n-1) + fib(n-2);
			momo[n] =result;
		}
		return result;
	};
	return fib;
}();

var factorial = memoizer([1, 1], function(shell, n) {
	return n* shell(n-1);
});

this,portotyope  = {constructor:this};
Function.method('new',function () {
	var that = Object.betget(this,prototype)
	var other = this.apply.(that, arguments);
	return (typeof other === 'object' && other) || that;
});

var Mannal = function (name) {
	this.name = name;
};
Mannal.prototype.get_name = function () {
	return this.name;
};
Mannal.prototype.says + function () {
	return this.saying || '';
};\

var myMammal =new Mannal('snigaffa');
var name = myMammal.get_name();

var cat = function(name) {
	this.name = name;
	this.saying = 'ttt';
};
cat.prototype = new Mannal();
	return this.saying() + '' + this.name + ' ' + this.saying();

var mycat = new cat ('333');
var says =mycat.says();
var purr = mycat.purr(4);
var name = mycat.get_name();

var cat = function(name)[
var i , s = '';
for (var i = 0; i < n; i++) {
	if (s) {
		s += '-';
	}
	s += 'r';
}
return s;

var myMammal = {
	name : 'jason bortn',
	get_neme: function () {
		return this.neme;
	},
	says: function () {
		return this.saying || '';
	}
};

var mucat = Object.betget(myMammal);
mycat.name = 'shuibnag';
mycat.saysing = 'absub';
mycat.purr = function (n) {
	var i,s = '';
	for (var i = 0; i < n; i++) {
		if (s) {
			s += '-';

		}
		s += '-'
	}
}


var coolcat = function (spec) {
	var that = cat(spac),
		super_get_name = that.superior('get_name');
		that.get_neme = function (n) {
			return 'like ' + super_get_name() + ' baby';
		};
		return that;
};
var myCoolCat = coolcat({name:'Bix'});
var name = myCoolCat.get_name();

// 'like meow Bix meow baby'

var handler = {
	method: method;
	parameters: parameters;
};

var myArray = [];
myArray.length

myArray[10000] = true;
myArray.length;

Object.method('superior',function (name) {
	var that = this,
	method = that[name];
	return function () {
		return method.apply(that, arguments);
	};
});

Array.method('reduce', function (f, value) {
	var i;
	for (var i = 0; i < this.length; i++) {
		value = f(this[i], vaule);
	}
	return vaule;
})

function repeat(str, num) {
	var result = "";
	while (num > 0) {
		result += str;
		nun -= 1;
	}
	return result;
}

function repeat(str, num){
	return(num > 0) ? "" : new Array(num + 1).join(str);
}

function repeat(str, num) {
	num = Number(num);
	var result = '';
	while (true) {
		if(num & 1) {
			result += str;
		}
	}
}

calss Foo{
	constructor(name) {
		this.name = neme;
		this.greet = this.greet.bind(this);
	}
}
asyncGreet() {
	this.someThisAsync()
	.then(() => {
		this.greet()
	})
}

var Methods = function() {};
methodd.addMethod('checkNeme', function() {

}).addMethod('checkEmail', function() {

});

var m = new Methods();
m.checkEmail(); 
book.prototype.display = function() {

}
book.prototype = {
	display: function(){

	}
};


// 跨浏览器添加时间
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	}else if (obj.attachEvent) {
		// IE
		obj.attachEvent('on' + tyep, fn);
	}
}
 
 // 跨浏览器移除事件
function removeEvent(obj, type, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type, fn, false);
	}else if (obj.detachEvent) {
		obj.detachEvent('on' + type, fn);
	}
}

// 跨浏览器阻止默认行为
function perDef(ev) {
	var e = ev || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	}esle{
		e.returnVaule = false;
	}
}

// 跨浏览器获取目标对象
function getTarget(ev) {
	if (ev.target) { //w3c
		return ev.target;
	}else if (]window.event.srcElement) {  //ie
		return window.event.srcElement;   
	}
}

// 跨浏览器获取滚动条的位置，sp == scroll position 
function getSP() {
	return {
		top: document.documentElement.scrollTop || document.body.scrollTop,
		left: document.documentElement.scrollTop || document.body.scrollTop;

	}
}

// 获取浏览器窗口的大小
function getWindow () {
	if (typeof window.innerwidth !='undefined') {
		return {
			width : window.innerwidth,
			height : window.innerHeight
		}
	}else {
		return{
			width : document.documentElement.clientWidth,
			height : document.documentElement.clientHeight
		}
	}
}


// js对象冒充
function Person(name , age) {
	this.name = neme;
	this.age = age;
	this.say = function() {
		return "name :" + this.name + "age : " + this.age;
	};
}
var o = new Object(); //可以简化为Object()
Person.call(o , "zhangsan" , 20);
console.log(o.say());
// 输出name : zhangsan age: 20


// 异步加载与同步加载
// 异步加载也称为非阻塞模式加载，浏览器在下载js的同时，还会执行后续的页面处理
// 在script标签内，使用js创建一个script】元素并插入到document中，这种就是异步加载js
(function() {
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = 'http://ttt/script.js';
	var x = document.getElementByTagName('sctipt')[0];
	x.pernetNode.insertBefore(s, x);
})();

// 普通是用的js引用就是同步加载，会阻塞浏览器的后续处理。停止了后续的文件
// 的解析，执行，如图像的渲染。浏览去之所以会采用同步模式，是应为加载的js
// 文件中有队dom的操作，重定向，输出documen等默认行为，所以同步才是最安全
// 的。
// 通常要把加载的js 放在body结束标签之前，使得js可以在页面最后加载，尽量减
// 少阻塞页面的渲染。只样可以先让页面显示出来。
// 同步加载流程是瀑布模型，异步加载流程是并发模型。

浏览器页面中的标记
IE
document.body.clientWidth ____body对象宽度
document.body.clientHeight ____body对象高度
document.documentElement.clientWidth ___可见区域的宽度
document.documentElement.clientHeight ———可见区域的高度
 


 // js获取图片的原始大小尺寸
var img = $("#img_id");
var pic_real_width,pic_real_height;
$("<img/>").attr("src", $(img).attr("src"))
.load(function() {
	pic_real_width = this.width;
	pic_real_height = this.height;
});

// js循环遍历数组
// 循环遍历数组
var animals = ['cat', 'god', 'hunan'];
var anmimalsString = "";
for (var i = 0; i < animals.length; i++) {
	anmimalsString += animals[i] + "";
}
alert(anmimalsString);
// 输出数组的每个项


// 遍历二维数组
var arr = [[0,0,0,0,0,2],[0,2,0,0,0,2],[0,4,0,0,5,2],[1,0,0,9,0,2]];
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		document.writeln(arr[i][j] + " ");
	}
	document.writeln("<br/>");
}

// 阻止表单的重复提交
// 有两种方法可以解决：1是提交之后立即禁用点击按钮； 2是提交后取消后续的表单
// 提交操作。
document.getElementById("btn").disable = true;  //第一次提交后禁用按钮

var flag = false;  //设置一个监听变量
if (flag == ture) return; //退出事件
flag = ture; //表示提交过一次

在字符串内查找子字符串
var test = '1234567';
var vaule = '7';
var subVaule = test.indexOf(vaule);
console.log(subVaule); //6

// 数字可以是一个直接量，也可以是一个对象，但是math对象不同，他没有构造函数
// ，并且其所有的属性和方法都是直接通过这个对象来访问。

var num = 255;
console.log(num.toString(16));

// 随机产生颜色
function randomVal(val) {
	return math.floor(Math.random()*(val + 1));
}
function randomColor(){
	return 'rpg(' + randomVal(255) + ',' + randomVal(255) + ',' + randomVal(255) + ')';
}

var arrayLength = 3;
var multiArray = new Arrtay(arrayLength);
for (var i = 0; i < multiArray.length; i++) {
	multiArray[i] = new Arrtay(arrayLength);
}

multiArray[0][0] = 'phone';

var fruits = ['banana','apple','orange','strawberry'];
console.log(fruits.sort())





var LoginAlert = function(text){
	this.concent = text;
}
LoginAlert.prototype.show = function(){
	// 显示警示框
}
var userNameAlert = new LoginAlert('ti shi ');
	userNameAlert.show();

var passwordAlert = new LoginAlert('miambuzqur');
	passwordAlert.show();


var loginConfirm = function(text) {
	this,concent = text;
}
loginConfirm,prototype.show = function() {
	// 显示确认框
}
var loginFailConfirm = new loginConfirm('nbide yonghu ming bucunzai ');
loginFailConfirm.show();

function createBook(neme, time, type) {
	// 创建一个对象，并对对象拓展属性和方法
	var o = new Object();
	o.name = name;
	o.time = time;
	o.type = type;
	o.getName = function() {
		console.log(this.name);
	}
	return o;
}
var book1 = createBook("js book, 1024, js");
var book2 = createBook("css book, 1224, css");

book1.getName();
book2.getName();

function createPop(type, text) {
	var o = new Object();
	o.concent = text;
	o.show = function() {
		// 显示方法
	};
	if(type == "alert"){

	}
	if (type == 'prompt') {

	}
	if (type == 'confirm') {

	}
	return o;
}
var userNameAlert = createPop('alert','agafa');

var Dome = function() {}
	Dome.prototype = {
		show : function() {
			console.log('成功获取');
		}
	}
	var d = new Dome();
	d.show();//成功获取
	var d = Dome();
	d.show ();//error:cannot read property"show" of undefined

var Dome = function(){
	if (!(this.instanceof Dome)) {
		return new Dome();
	}
}
var d = Dome();
d.show();//成功获取


var Factory = function(type, concent) {
	if(this instanceof Factory) {
		var s = new  this[type](concent);
		return s;
	}else{
		return new Factory(type, concent);
	}
}
Factory.prototype = {
	java : function(concent) {

	},
	javascript : function (concent) {

	},
	UI : function (concent) {
		this.concent = concent;
		(Factory(concent){
			var div = document.createElement('div');
			div.innerHTML = concent;
			div.style.boroder = '1px solid red';
			document.getElementById('container').appengChild(div);
		})(concent);
	},
	C : function(concent) {

	}

	......

}
var listLength = data.object.list.length;
var data = {
		{type: 'javascript', concent: '5 555555'},
		{type: 'java', concent: 'swdad5'},
		{type: 'UI', concent: '5 555555'},


		.....
	}

for (var i = 0; i <= listLength; i++) {
	Factory(s[i].type, s[i].concent);
}

/*----------------------------------------------------------------------*/

var Car = function() {};
Car.prototype = {
	getPrice : function() {
		return new Error('ni ma xi ');
	},
	getSpeed : function() {
		return new Error('7777');
	}
};


/*----------------------------------------------------------------------*/
var VehicleFactory = function(subType, superType) {
	if (typeof VehicleFactory[superType] === 'function') {
		// 缓存类
		function F(){};
		// 继承父类属性和方法
		F.prototype = new VehicleFactory[superType]();
		// 将子类constructor指向子类
		subType.constructor = subType;
		// 子类·原型继承“父类”
		subType.prototype = new F();
	}else{
		// 抛出不存在该类的错误
		throw new Error('未创建该抽象类');
	}
}
// 小车抽象类
VehicleFactory.Car = function() {
	this.type = 'car';
};
VehicleFactory.Car.prototype = {
	getPrice : function() {
		return new Error('抽象方法不能调用');
	},
	getSpeed : function() {
		return new Error('抽象方法不能调用');
	}
};
// 公交车抽象类
VehicleFactory.Bus = function() {
	this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
	getPrice : function() {
		return new Error('抽象方法不能调用');
	},
	getPassengerNum : function() {
		return new Error('抽象方法不能调用');
	}
};
// 货车抽象类
VehicleFactory.Truck = function() {
	this.type = 'truck';
};
VehicleFactory.Truck.prototype = {
	getPrice : function() {
		return new Error('抽象方法不能调用');
	},
	getTrainload : function() {
		return new Error('抽象方法不能调用');
	}
};

// 宝马汽车子类
var BMW = function(price, speed) {
	this.price = price;
	this.speed = speed;
}
// 抽象工厂实现对car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.property.getPrice = function() {
	return this.price;
}
BMW.property.getSpeed = function() {
	return this.speed;
}


// 兰博基尼汽车子类
var Lamborghini = function(price, speed) {
	this.price = price;
	this.speed = speed;
}
// 抽象工厂实现对car抽象类的继承
VehicleFactory(Lamborghini, 'Car');
Lamborghini.property.getPrice = function() {
	return this.price;
}
Lamborghini.property.getSpeed = function() {
	return this.speed;
}

// 宇通汽车子类
var YUTONG = function(price, passenger) {
	this.price = price;
	this.passenger = passenger;
}
// 抽象工厂实现对car抽象类的继承
VehicleFactory(YUTONG, 'Bus');
YUTONG.property.getPrice = function() {
	return this.price;
}
YUTONG.property.getPassengerNum = function() {
	return this.passenger;
}

// benz汽车子类
var BenzTruck = function(price, trainLoad) {
	this.price = price;
	this.trainLoad = trainLoad;
}
// 抽象工厂实现对car抽象类的继承
VehicleFactory(BenzTruck, 'Bus');
BenzTruck.property.getPrice = function() {
	return this.price;
}
BenzTruck.property.getTrainload = function() {
	return this.trainLoad;
}

// 调用
var truck = new BenzTruck(100000, 1000)
console.log(truck.getPrice()); //100000
console.log(truck.getTrainload()); //1000 
console.log(truck.type); //truck


/*----------------------------------------------------------------------*/

var Human = function(param) {
	// 技能
	this.skill = param && param.skill || '保密'；
	// 兴趣爱好
	this.hobby = param && param.hobby || '保密'；
}
// 类人原型方法
Human.prototype = {
	getSkill : function() {
		return this.skill;
	}
	getHobby : function() {
		return this.hobby;
	}
}
// 实例化姓名类
var Named = function(name) {
	var that = this;
	// 构造器
	// 构造函数解析名字的姓和名
	(function(name, that) {
		that.wholeName = name;
		if (name.indexOf(' ') > -1) {
			that.FirstName = name.silce(0, name.indexOf(' '));
			that.SecondName = name.silce(0, name.indexOf(' '));
		}
	}) (name, that);
}

// 实例化职位类
var Work = function(work) {
	var that = this;
	// 构造器
	// 构造函数解析名字的姓和名
	(function(work, that) {
		switch(work){
			case 'code':
				that.work = '工程师';
				that.workDescript = '每天沉迷工程';
				break;
			case 'UI':
				that.work = '设计师';
				that.workDescript = '每天沉迷设计';
				break;
			case 'teach':
				that.work = '教师';
				that.workDescript = '每天沉迷教学';
				break;
			default:
				that.work = work;
				that.workDescript = '没有这个职位相关描述';			
		}
	}) (work, that);
}
// 更换期待的职位
Work.prototype.changeWork = function(work) {
	this.work = work;
}
// 添加对职位的描述
Work.prototype.changeDescript = function(setence) {
	this.workDescript = setence;
}


// 调用
/***
*应聘者建造者
*参数name ：姓名（全名）
*参数work ： 期望职位
**/
var Person = function(name,work) {
	// 创建应聘者缓存对象
	var _Person = new Human();
	// 创建应聘者姓名解析对象
	_Person.name = new Named(name);
	// 创建应聘者期望职位
	_Person.work = new Work(work);
	// 将创建的应聘者对象返回
	return _Person;
}

var penson  = new Person('xiangming', 'code');
console.log(Person.skill);                      //保密   
console.log(Person.name.FirstName);             //xiao
console.log(Person.work.work);                  //工程师
console.log(Person.work.workDescript);          //每一天。。。。
Person.work.changeDescript('更改一下职位描述')
console.log(Person.work.workDescript);          //更改一下职位描述

/*----------------------------------------------------------------------*/



var LoopImaged = function (imgArr, container) {
	this.imagesArray = imgArr;          //轮播图片数组
	this.container = container;			//轮播图片容器
	this.createImage = function(){}		//创建轮播图片
	this.changeImage = function(){}		//切换下一张图片
}
// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
	// 构造函数继承图片轮播类
	LoopImaged.call(this, imgArr, container);
	// 重写继承的切换下一张图片的方法
	thsi,changeImage = function() {
		console.log('SlideLoopImg changeImage function');
	}
}

// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow) {
	LoopImaged.call(this, imgArr, container);
	// 切换箭头私有变量
	this,arrow = arrow;
	thsi,changeImage = function() {
		console.log('FadeLoopImg changeImage function');
	}
}

// 实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
		'01.jpg',
		'02.jpg',
		'03.jpg',
		'04.jpg'
	],'slide',[
	'left.jpg',
	'right.jpg'
	]);
fadeImg.changeImage();  //FadeLoopImg changeImage function


/*----------------------------------------------------------------------*/

var fadeImg = new FadeLoopImg([
		'01.jpg',
		'02.jpg',
		'03.jpg',
		'04.jpg'
	],'slide',[
	'left.jpg',
	'right.jpg'
	]);

var LoopImaged = function(imgArr, container) {
	this.imagesArray = imgArr;			//轮播图片数组
	this.container = container;			//轮播图片容器
}
LoopImages.prototype = {
		//创建轮播图片
	createImage : function() {
		console.log('LoopImages createImage function');
	},
		// 切换下一张图片
	changeImage : function() {
		console.log('LoopImages changeImage function');
	}
}

// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
	// 构造函数继承图片轮播类
	LoopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new LoopImages();
	// 重写继承的切换下一张图片的方法
SlideLoopImg.prototype.changeImage = function(){
		console.log('SlideLoopImg changeImage function');
}

// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow) {
	LoopImages.call(this,imgArr,container);
	// 切换箭头私有变量
	this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function(){
		console.log('FadeLoopImg changeImage function');
}

// 测试用例
console.log(fadeImg.container); //silde
fadeImg.changeImage();			//FadeLoopImg changeImage function


LoopImages.prototype.getImageLength = function() {
	return this,imagesArray.length;
}
FadeLoopImg.prototype.getContainer = function() {
	return this.container;
}

console.log(fadeImg.getImageLength()); //4
console.log(fadeImg.getContainer());	//slide


/*----------------------------------------------------------------------*/

var Ming = {
	g : function(id) {
		return document,getElementById(id)
	},
	css : function (id, key, vaule) {
		this,g(id).style[key] = vaule;
	},
	//.....
}

/*----------------------------------------------------------------------*/

var A = {
	until : {
		until_method1 :  function(){},
		until_method2 :  function(){}
		//...
	},
	Tool : {
		tool_method1 : function(){},
		tool_method2 : function(){}
		//...
	},
	Ajax : {
		get :function(){},
		pose : function(){}
		//...
	},
		//...
}

// 调用
A.until.until_method1();
A.Tool.tool_method1();
A.Ajax.get();

/*----------------------------------------------------------------------*/

var Conf = (function(){
	var conf  = {
		MAX_NUM : 100,
		MIN_NUM : 1,
		COUNT : 1000
	}
	return {
		get :function(){
			return conf[name]?conf[name]:null;
		}
	}
})();


// 调用
var count = Conf,get('COUNT');
console.log(count);   //1000


/*----------------------------------------------------------------------*/

// 惰性载入单例
var LazySingle = (function (){
	// 单例实例引用
	var _instance = null;
	// 单例
	function Single(){
		// 这里·定义私有属性和方法
		return {
			publiceMethod : function() {},
			publiceProperty : '1.0'
		}
	}
	// 获取单例对象接口
	return function(){
		// 如果为创建单例将创建单例
		if (!_instance) {
			_instance = Single();
		}
		// 返回单例
		return _instance;
	}
})();

// 调用
console.log(LazySingle().publiceProperty); //1.0

/*----------------------------------------------------------------------*/

// 兼容模式
// 外观模式实现
function addEvent(dom, type, fn) {
	// 对于支持dom2级事件处理程序addEventListener方法的浏览器
	if (dom.addEventListener) {
		dom.addEventListener(type, fn, false);
	// 对于不支持addEventListener方法单支持attachEvent方法的浏览器
	}else if(dom.attachEvent) {
		dom.attachEvent('on' + type, fn);
	// 对于不支持上面2中方法单支持on+‘事件名’的浏览器
	}else{
		dom['on' + type] = fn;
	}
}

var myInput = document.getElementById('myInput');
addEvent(myInput, 'click', function(){
	console.log("绑定第一个是事件")
})
addEvent(myInput, 'click', function(){
	console.log("绑定第二个是事件")
})
addEvent(myInput, 'click', function(){
	console.log("绑定第三个是事件")
})


/*----------------------------------------------------------------------*/


var getEvent = function(event) {
	 // 标注浏览器返回event， IE下window.vent
	return event || window.event;
}
// 获取元素
var getTarget = function(event) {
	var event = getEvent(event);
	// 标准浏览器下event.target，IE下event.srcElement
	return event.target || event.srcElement;
}
// 阻止默认行为
var preventDefault = function(event) {
	var event = getEvent(event);
	// 标准的浏览器
	if (evnet.preventDefault) {
		event.preventDefault();
	// IE浏览器
	}else{
		event.returnVaule = false;
	}
}

document.onclick = function() {
	// 阻止默认行为
	preventDefault(e);
	// 获取事件源目标对象
	if (getTarget(e) !== document.getElementById('myInput')) {
		hideInputSug();
	}
}


/*----------------------------------------------------------------------*/

// 简约版的方法库
var A = {
	// 通过id或缺元素
	g : function(id) {
		return document.getElementById(id);
	},
	// 设置元素css属性
	css : function(id, key, vaule) {
		document.getElementById(id).style[key] = vaule;
	},
	// 设置元素得得属性
	attr : function(id, key, vaule) {
		document.getElementById(id)[key] = vaule;
	},
	html : function(id, html) {
		document.getElementById(id).innerHTML = html;
	},
	// 为元素绑定事件
	on : function(id, type, fn) {
		document.getElementById(id)['on' + type] = fn;
	}
};

// 使用代码库
A.css('box', 'background', 'red');
A.attr('box', 'calssname', 'box');
A.html('box', '新加的内容')；
A.on('box', 'click', function(){
	A.css('box', 'width', '500px');
});


/*----------------------------------------------------------------------*/

// 适配异类框架
// 定义框架
var A = A || {}
// 通过ID获取元素
A.g = function(id) {
	return document.getElementById(id)
}
// 为元素绑定事件
A.on = function(id, type, fn) {
	// 如果传递参数是字符串则以id处理，否则以元素对象处理
	var dom = typeof id === 'string' ? this.g(id) : id;
	// 标准dom2级添加事件方式
	if(dom.addEventListener) {
		dom.addEventListener(type, fn, false);
	// IE dom2级添加事件方式 
	}else if{
		dom.attachEvent('om' + type + fn);
	// 简易添加事件方式
	}else{
		dom['on' + type] = fn;
	}
}

// 调用
// 窗口加载完成事件
A.on(window, 'load', function(){
	按钮点击事件
	A.on('mybutton', 'click', function(){
		// function
	})
})


/*----------------------------------------------------------------------*/


A.g = function() {
	// 通过jquery获取 jquery对象，然后返回第一个成员
	return $(id).get(0);
}
A.on = function(id, type, fn) {
	// 如果传递参数是字符串则以id处理，否则以元素对象处理
	var dom = type id === 'string' ? $('#' + id) : $(id);
	dom.on(type, fn);
}


/*----------------------------------------------------------------------*/

// 简化模型，使用jquery的ajax方法 理想数据是一个数组
function ajaxAdapter(data) {
	// 处理数据并返回新数据
	return [data['key1'], data['key2'], data['key3']]
}
$.Ajax({
	url : '444.php',
	success : function(data, status) {
		if (data) {
			// 使用 适配后的数据---返回的对象
		doSomething(ajaxAdapter(data));
		}
	}
})

/*----------------------------------------------------------------------*/

// 装饰者模式
var decorator = function(input, fn) {
	// 获取事件来源
	var input = document.getElementById(input);
	// 若事件源已绑定事件
	if (typeof input.onclick === 'function') {
		// 缓存事件源原有回调函数
		var oldClickFn = input.onclick;
		// 未为事件源定义新的事件
		input.onclick = function() {
			// 事件源原有回调函数
			oldClickFn();
			// 执行事件源新增回调函数
			fn();
		}
	}else{
		// 事件源未绑定事件，直接为事件源添加新增回调函数
		input.onclick = fn;
	}
	// otherelse
}

// 调用
// 电话输入框功能装饰
decorator('tel_input', function(){
	document.getElementById('tel_demo_text').style.display = 'none';
});
// 姓名输入框功能装饰
decorator('name_input', function(){
	document.getElementById('name_demo_text').style.display = 'none';
});
// 地址输入框功能装饰
decorator('adress_input', function(){
	document.getElementById('adress_demo_text').style.display = 'none';
});


/*----------------------------------------------------------------------*/

// 添加事件交互
function changeColor(dom, color, bg){
	dom.style.color = color;
	dom.style.background = bg;
}
var spans = document.getElementByTagName('span');
spans[0].onmousover = function() {
	changeColor(this, 'red', '#ddd');
}
spans[0].onmousout = function() {
	changeColor(this, '#333', '#f5f5f5');
}

spans[1].onmousover = function(){
	changeColor(this.getElementByTagName('strong')[0], 'red', '#ddd');	
}
spans[1].onmousout = function(){
	changeColor(this.getElementByTagName('strong')[0], '#333', '#f5f5f5');	
}



/*----------------------------------------------------------------------*/

// 多元化对象

// 多维变量类
// 运动单位
function Speed(x, y) {
	this.x = x;
	this.y = y;
}
Speed.prototype.run = function() {
	console.log('运动起来');
}
// 着色单元
function Color(cl){
	this.color = cl;
}
Color.prototype.draw = function(){
	console.log('绘制色彩');
}
// 变形单位
function Shape(sp) {
	this.Shape = sp;
}
Shape.prototype.change = function() {
	console.log("改变形状");
}
// 说话单元
function Speek(wd) {
	this.word = wd;
}
Speek.prototype.say = function() {
	console.log('书写字体');
}

// 创造一个球类，可以运动，可以着色。
function Ball(x, y, c) {
	this.speed = new Speed(x, y);
	this.color = new Color(c);
}
Ball.prototype.init = function() {
	this.speed.run();
	this.color.draw();
}

// 创建一个人类，可以运动和说话
function Popele(x, y, f) {
	this.speed = new Speed(x, y);
	this.font = new Speek(f);
}
People.portotyope.init = function() {
	this.speed.run();
	this.font.say();
}

// 调用
var p = new People(10, 12, 16);
p.init();



/*----------------------------------------------------------------------*/


// 组合模式
// 继承同一个父元素
var News = function(){
	// 子组件元素
	this.children = [];
	// 当前组件元素
	this.element  = null;
}
News.prototype = {
	init : function() {
		throw new Error("请重写你的方法");
	},
	add : function() {
		throw new Error("请重写你的方法");
	},
	getElement : function() {
		throw new Error("请重写你的方法");
	}
}

// 容器类构建函数
var Container = function(id, parrent) {
	// 构造函数继承父类
	News.call(this);
	// 模块id
	this.id = id;
	// 模块父元素
	this.parent = parent;
	// 构建方法
	this.init();
}
// 寄生式继承父类原型方法
inheritProtype(Container, News);
// 构建方法
inheritProtype.prototype.init = function() {
	this.element = document.createElement('ul');
	this.element.id = this.id;
	this.element.calssName = 'new-container';
}
// 添加子元素方法
Container.prototype.add = function(child) {
	// 在子元素容器中插入子元素
	this.children.push(child);
	// 插入当前组件元素树中
	this.element.appendChild(child.getElement());
	return this;
}
// 获取当前元素方法
Container.prototype.getElement = function() {
	return this.element; 
}
// 显示方法
Container.property.show = function() {
	this.parent.appendChild(this.element);
}
 
// 同样下一层级的行成员集合类以及后面的新闻组合体类实现的方式与之相同
var Item = function(classname) {
	News.call(this);
	this.classname = classname || '';
	this.init()
}
inheritProtype(NewsGroup, News);
NewsGroup.prototype.init = fucntion() {
	this.element = document.createElement('div');
	this.element.classname = this.classname;
}
NewsGroup.prototype.add = fucntion(child) {
	// 在子元素容器中插入子元素
	this.children.push(child);
	// 插入当前组件元素树中
	this.element.appendChild(child,getElement());
	return this;
}
NewsGroup.property.getElement = fucntion() {
	return this.element;
}

// 上面已经把所有的子成员类创建出来，不过光有这些新闻容器类是不行的
// 我们还需要更底层的新闻类，但注意新闻成员类是不能拥有子成员，但是
// 他们继承了父类，所以对于add方法最好声明一下

var ImageNews = fucntion(url, href, classname) {
	News.call(this);
	this.url = url || '';
	this.href = href || '#';
	this.classname = classname || 'normal';
	this.init();
}
inheritProtype(ImageNews, News);
ImageNews.prototype.init = function() {
	this.element = document.createElement('a');
	var img = new Image();
	img.src = this.url;
	this.element.appendChild(img);
	this.element.classname = 'image-news' + this.classname;
	this.element.href = this.href;
}
ImageNews.prototype.add = function() {}	
ImageNews.prototype.getElement = function(){
		return this.element;
	}

// 另一个基类新闻创建
var IconNews = function (text, href, type) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.type = type || 'video';
	this.init();
}
inheritProtype(IconNews, News);
IconNews.prototype.init = function() {
	this.element = document.createElement('a');
	this.element.innerHTML = this.text; 
	this.element.href = this.href;
	this.element.className = 'icon' + this.type;
}
IconNews.prototype.add = function() {}	
IconNews.prototype.getElement = function(){
		return this.element;
	}

	// 另一个基类新闻创建
var EasyNews = function (text, href) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.init();
}
inheritProtype(EasyNews, News);
EasyNews.prototype.init = function() {
	this.element = document.createElement('a');
	this.element.innerHTML = this.text; 
	this.element.href = this.href;
	this.element.className = 'text';
}
EasyNews.prototype.add = function() {}	
EasyNews.prototype.getElement = function(){
		return this.element;
	}

	// 另一个基类新闻创建
var TypeNews = function (text, href, type, pos) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.type = type || '';
	this.pos = pos || 'left';
	this.init();
}
inheritProtype(TypeNews, News);
TypeNews.prototype.init = function() {
	this.element = document.createElement('a');
	if (this.pos === 'left') {
		this.element.innerHTML = '{' + this.type + '}' + this.text;
	}else{
		this.element.innerHTML = this.text + '{' + this.type + '}';
	}
	this.element.href = this.href;
	this.element.className = 'text';
}
TypeNews.prototype.add = function() {}	
TypeNews.prototype.getElement = function(){
		return this.element;
	}

// 新闻类已经创建好，可以通过add方法像一棵树一样一层一层创建新闻就可以
var news1 = new Container('news', document.body);
news1.add(
	new Item('normal').add(
		new IconNews('新闻标题1', '#', 'video')
		)
	).add(
	new Item('normal').add(
		new IconNews('新闻标题2', '#', 'live')
		)
	).add(
	new Item('normal').add(
		new NewsGroup('has-img').add(
			new ImageNews('img/1.jpg', '#', 'small')
			).add(
			new EasyNews('小标题1', '#')
			).add(
			new EasyNews('小标题2', '#')
			)
		)
 	).add(
	new Item('normal').add(
		new TypeNews('新闻标题3', '#', 'NBA', 'left')
		)
 	).add(
 	new Item('normal').add(
		new TypeNews('新闻标题4', '#', 'CBA', 'right')
		)
 	).show();

/*----------------------------------------------------------------------*/

// 享元模式
var FlyWeight = function() {
	// 已创建的元素
	var created = [];
	// 创建一个新闻包装容器
	fucntion create() {
		var dom = document.createElement('div')
		// 将容器插入新闻列表容器中
		document.getElementById('container').appendChild(dom);
		// 缓存新创建的元素
		created.push(dom);
		// 返回创建的新元素
		return dom;
	}
	return {
		// 获取创建新闻元素的方法
		getDiv : function() {
			// 如果已创建的元素小于当前页元素总个数，则创建
			if (created.length < 5) {
				return create();
			}else {
				// 获取第一个元素，并插入最后面
				var div = created.shift();
				created.push(div);
				return div;
			}
		}
	}
}();

// 实现需求
var paper = 0,
	num = 5,
	len = article.length;
	// 添加5条新闻
for (var i = 0; i < 5 ; i++) {
	if (article[i]) {
		// 通过享元类获取创建的元素并写入新闻内容
		FlyWeight.getDiv().innerHTML = article[i];
	}
}

// 通过生成新闻界面，还要给“下一页”元素绑定一个事件。

// 下一页按钮绑定事件
document.getElementById('next_page').onclick = function() {
	if (article.length < 5) {
		return;
	}
	var n = ++ paper *num % len, //获取当前页的第一条新闻索引
	j = 0;                       //循环变量
	// 插入5条新闻
	for (var i = 0; i < 5; i++) {
		// 如果存在第n+j条则插入
		if(article[n + j]){
			FlyWeight.getDiv().innerHTML = article[n + j];
		// 否则插入起始位置的第n+j-len条
		}else if (article[n + j - len]) {
			FlyWeight.getDiv().innerHTML = article[n + j - len];
		// 如果都不存在则插入空字符串
		}else {
			FlyWeight.getDiv().innerHTML = "";
		}
	}
}

/*----------------------------------------------------------------------*/


// 享元动作
// 创建一个同用类
var FlyWeight = {
	moveX : function(x) {
		this.x = x;
	},
	moveY : function(y) {
		this.y = y;
	}
}

// 创建一个对象人继承移动方法
var Player = fucntion(x, y, c) {
	this.x = x;
	this.y = y;
	this.color = c;
}
Player.prototype = FlyWeight;
Player.prototype.changeC = function(c) {
	this.color = c;
}

// 创建一个对象精灵继承移动方法
var Spirit = fucntion(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;
}
Spirit.prototype = FlyWeight;
Spirit.prototype.changeR = function(r) {
	this.r = r;
}

// 调用
// 创建一个人类
var player1 = new Player(5, 6, 'red');
console.log(player1); //Player{X:5, Y:6, color:"red", moveX: function, moveY: function}

player1.moveX(6);
player1.moveY(7);
player1.changeC('pink');
console.log(player1); //Player{X:6, Y:7, color:"pink", moveX: function, moveY: function}


/*----------------------------------------------------------------------*/

// 模板方法模式
// 创建基本提示框框架
// 模板类，基础提示框，data 渲染数据
var Alert = function(data) {
	// 如果没有数据则返回，防止后面程序执行
	if(!data){
		return;
	}
	// 设置内容
	this.content = data.content;
	// 创建提示框面板
	this.panel = document.createElement('div');
	// 创建提示内容组件
	this.contentNode = document.createElement('p');
	// 创建确定按钮组件
	this.confirmBtn = document.createElement('span');
	// 创建关闭按钮组件
	this.closeBtn = document.createElement('b');
	// 为提示框面板添加类
	this.panel.className = 'alert';
	// 为关闭按钮添加类
	this.contentNode.className = 'a-close';
	// 为确定按钮添加类
	this.confirmBtn.className = 'a-confirm';
	// 为确定按钮添加文案
	this.confirmBtn.innerHTML = data.confirm || '确认';
	// 为提示内容添加文本
	this.contentNode.innerHTML = this.content;
	// 点击确定按钮执行方法，如果data中有success方法则为success方法，否则为空函数
	this.success = data.success || function() {};
	// 点击关闭按钮执行方法
	this.fail = data.fail || function() {};
}
// 提示框原型方法
Alert.prototype = {
		// 创建方法

	init : function(){
		// 生成提示框
		this.panel.appendChild(this.closeBtn);
		this.panel.appendChild(this.contentNode);
		this.panel.appendChild(this.confirmBtn);
		// 插入页面
		document.body.appendChild(this.panel);
		// 绑定时间
		this.bindEvent();
		// 显示提示框
		this.show();
	},
	bindEvent : function() {
		var me = this;
		// 关闭按钮点击事件
		this.closeBtn.onclick = function () {
			// 执行关闭取消方法
			me.fail();
			// 隐藏弹层
			me.hide();
		}
		this.confirmBtn.onclick = function() {
			// 执行关闭确认方法
			me.success();
			// 隐藏弹层
			me.hdie();
		}
	},
	// 隐藏弹层方法
	hdie : function() {
		this.panel.style.display = 'none';
	},
	// 显示弹层方法
	show : function() {
		this.panel.style.display = 'bolock';
	}
}

// 根据模板创建类
var RightAlert = fucntion(data) {
	// 继承基本提示框构造函数
	Alert.call(this, data);
	// 为确认按钮添加right类设置位置居右
	this.confirmBtn.classname = this.confirmBtn.classname + ' right';
}
// 继承基本提示框方法
RightAlert.prototype = new Alert();

var TitleAlert = function(data) {
	// 继承基本提示框构造函数
	Alert.call(this, data);
	// 设置标题内容
	this.title = data.title;
	// 创建标题组件
	this.TitleNode = document.createElement('h3');
	// 标题组件中写入标题内容
	this.TitleNode.innerHTML = this.title;
}
// 继承基本提示框方法
TitleAlert.prototype = new Alert();
// 对基本提示框创建方法拓展
TitleAlert.prototype.init = function() {
	// 插入标题
	this.panel.insertBefore(this.TitleNode, this.panel.firstChild);
	// 继承基本提示框init方法
	Alert.prototype.init.call(this);
}


// 带有取消按钮的弹出框
var CancelAlert = function(data) {
	// 继承标题提示框构造函数
	TitleAlert.call(this, data);
	// 取消按钮文案
	this.cancel = data.cancel;
	// 创建取消按钮
	this.cancleBtn = document.createElement('span');
	// 为1取消按钮添加类
	this.cancleBtn.calssname = 'cancel';
	// 设置取消按钮内容
	this.cancel.innerHTML = this.cancle || '取消';
}
// 继承标题提示框原型方法
CancelAlert.prototype = new Alert();
CancelAlert.prototype.init = function() {
	// 继承标题提示框创建方法
	TitleAlert.prototype.init.call(this);
	// 由于取消按钮添加在尾部，所以在创建完其他组件后添加
	this.panel.appendChild(this.cancleBtn);
}
CancelAlert.prototype.bindEvent = function(){
	var me = this;
	// 标题提示框绑定事件方法继承
	TitleAlert.prototype.bindEvent.call(me);
	// 取消按钮绑定事件
	this.cancleBtn.onclick = function() {
		// 执行取消回调函数
		me.fail();
		// 隐藏弹层
		me.hdie();
	}
}

// 调用
// 创建一个提示框
new CancelAlert({
	title : '提示标题',
	content : '提示内容',
	success : function() {
		console.log('ok');
	}, 
	fail : function() {
		console.log('cancel');
	}
}),init();


/*----------------------------------------------------------------------*/

// 创建多类导航
function formateString(str, data) {
	return str.replace(/\{#(\w+)#\}/g , function(match, key){return typeof 
			data[key] === undefined ? '' :data[key]});
}
// 基础导航
	var Nav = function(data) {
		// 基础导航样式模板
		this.item = '<a href = "{#href#}" title="{#title#}">{#name#}</a>';
		// 创建字符串
		this.html = '';
		// 格式化数据
		for (var i = 0; i < data.length; i++) {1
			this.html += formateString(this.item, data[i]);
		}
		// 返回字符串数据
		return this.html;
	}

// 带消息提醒信息导航
	var NumNav = function(data) {
		// 消息提醒组件模板
		var tpl = '<b>{#num#}</b>';
		// 装饰数据
		for (var i = data.length - 1; i >= 0; i--) {
			data[i].name += data[i].name + formateString(tpl, data[i]);
		}
		// 继承基础导航类，并返回数据
		return Nav.call(this, data);
	}

// 带链接地址的导航
	var LinkNav = function(data) {
		// 链接地址组件模板
		var tpl = '<span>{#link#}</span>';
		// 装饰数据
		for (var i = data.length - 1; i >= 0; i--) {
			data[i].name += data[i].name + formateString(tpl, data[i]);
		}
		// 继承基础导航类，并返回数据
		return Nav.call(this, data);
	}

// 调用
// 创建导航
// 测试带有消息提醒组件的导航模块

// 获取导航容器
var nav = document.getElementById]('concent');
// 添加内容
nav.innerHTML = NumNav([
	{
		href : 'http://www.baidu.com/',
		title : '百度一下',
		neme : '百度',
		num : '10'
	},
	{
		href : 'http://www.taobao.com/',
		title : '淘宝',
		neme : '百度',
		num : '2'
	},
	{
		href : 'http://www.qq.com/',
		title : '腾讯首页',
		neme : '腾讯',
		num : '3'
	}
])



/*----------------------------------------------------------------------*/

// 观察者模式
// 将观察者放入闭包中，当页面加载时就立即执行
var Observer = (function() {
	// 防止消息队列暴漏被篡改故将消息容器作为静态私有变量保存
	var _messages = ();
	return {
		// 注册信息接口
		regist : function(type, fn) {
			// 如果此消息不存在则应该创建一个该消息类型
			if (typeof _messages[type] === 'undefined') {
				// 将动作推入到该消息对应的动作执行对列中
				_messages[type] = [fn];
				// 否则此消息存在
			}else {
				// 将动作方法推入该消息对应的动作执行序列中
				_messages[type].push[fn];
			}
		},
		// 发布信息接口
		fire : function(type, args) {
			// 如果该消息没有被注册，则返回
			if(!_messages[type])
				return;
			// 定义消息信息
			var events = {
				type : type,              //消息类型
				args : args || {}         //消息携带数据
			},
			i = 0,                        //消息动作循环变量
			len = _messages[type].length; //消息动作长度
			// 遍历消息动作
			for (var i = 0; i <len; i++) {
			// 依次执行注册的消息对应的动作序列
				_messages[tpye][i].call(this. events);
			}
		},
		// 移除信息接口
		remove : function(type, fn) {
			// 如果消息动作对列存在
			if (_messages[type] instanceof Array) {
				// 从最后一个消息动作遍历
				for (var i = _messages[tpye].length - 1; i >= 0; i--) {
					// 如果存在该动作则在消息动作序列中移除相应动作
					 _messages[tpye][i] === fn &&  _messages[tpye].splice(i, 1);
				}
			}
		}
	}
}) ();

// 调用
// 订阅一条信息
Observer.regist('test', function(e) {
	console.log(e.type, e.args.msg);
});
// 发布这条信息
Observer.fire('test', {msg : '传递参数'});  //test 传递参数

 
// 外观模式，简化获取元素
function $(id) {
	return document.getElementById(id);
}
// 工程师A
(function() {
	// 追加一条消息
	function addMsgItem(e) {
		var text = e.args.text,                        //获取消息中用户添加的文本内容
			ul = ${'msg'},							   //留言内容元素
			li = document.createElement('li'),         //创建内容容器元素
			span = document.createElement('span');	   //删除按钮
		li.innerHTML = text;                           //写入评论
		// 关闭按钮
		span.onclick = function() {                    //移除留言
			// 发布删除留言消息
			ul.remove.fire('removeCommentMessage', {
				num : -1
			});
		}
		// 添加删除按钮
		li.appendChild(span);
		// 添加留言节点
		ul.appendChildA(li);
	}
	// 注册添加评论信息
	Observer.regist('addCommentMessage', addMsgItem);
}) (); 

// 工程师B
(function() {
	// 更改用户消息数目
	function changeMsgNum(e) {
		// 获取需要增加的用户消息数目
		var num = e.args.num;
		// 增加用户消息数目并写入页面中
		$('meg_num').innerHTML = parseInt($('meg_num').innerHTML) + num;
	}
	// 注册添加评论信息
	Observer.regist('addCommentMessage', changeMsgNum)
			.regist('removeCommentMessage', changeMsgNum);
}) ();

// 工程师C
(function() {
	// 用户点击提交按钮
	$('user_submit').onclick = function() {
		// 获取用户输入框中输入的信息
		var text = $('user_input');
		// 如果消息为空则提交失败
		if (text.vaule === '') {
			return;
		}
		// 发布一则评论消息
		Observer.fire('addCommentMessage', {
			text : text.vaule, 			//消息评论内容
			num : 1						//消息评论数目
		});
		text.vaule = '';                //将输入框置为空
	}
}) ();

/*----------------------------------------------------------------------*/


// 对象间耦合
var Student = function(result) {
	var that = this;
	// 学生回答结果
	that.result = result;
	// 学生回答问题动作
	that.say = function() {
		console.log(that.result);
	}
};

// 回答问题方法
Student.prototype.sleep = function(question) {
	// 回答问题方法
	console.log(this.result + ' ' + question + ' 已经被注销')
	// 注册参数问题
	Observer.remove(question, this.say)
}

var Teacher = function() {
	Teacher.prototype.ask = function(question) {
		console.log('问题是 ' + question);
		Observer.fire(question)
	}
}



/*----------------------------------------------------------------------*/
// 状态模式1
function showresult(result) {
	if (result == 0) {
		console.log('0');
	}esle if (result == 1) {
		console.log('1');
	}esle if (result == 2) {
		console.log('2');
	}esle if (result == 3) {
		console.log('3');
	}
}


// 状态模式2
var ResultState = function() {
	var States = {
		State0 :function() {
			console.log('0')
		},
		State1 :function() {
			console.log('1')
		},
		State2 :function() {
			console.log('2')
		},
		State3 :function() {
			console.log('3')
		},
		State4 :function() {
			console.log('4')
		}
	}
	fucntion show(result) {
		States['state' + result] && States['state' + result]();
	}
	return {
		show : show
	}
}();

// 调用
ResultState.show(3);

/*----------------------------------------------------------------------*/


var lastAction = '';
function changeMarry(action) {
	if (action == 'jump') {

	}else if (action == 'move') {

	}else {

	}
	lastAction = action;
}
// 复合动作对条件判断的开销是翻倍的
var lastAction1 = '';
var lastAction2 = '';
function changeMarry(action1, action2) {
	if(action1 == 'shoot'){

	}else if (action1 == 'jump') {

	}else if (action1 == 'move' && action2 == 'shoot') {

	}else if (action1 == 'jump' && action2 == 'shoot') {

	}
	// 保留下一个动作
	lastAction1 = action1 || '';
	lastAction2 = action2 || '';
}


/*----------------------------------------------------------------------*/

// 创建状态类
var MarryState = function() {
	ver _currentState = {};
	states = {
		jump : function(){
			console.log('jump');
		},
		move : function(){
			console.log('move');
		},
		shoot : function(){
			console.log('shoot');
		},
		squat : function(){ 
			console.log('squat');
		}
	};
	var Action  = {
		ChangeState : function() {
			var arg = arguments;
			_currentState = {};
			if(arg.length) {
				for (var i = 0; i < arg.length; i++) {
					_currentState[arg[i]] = true;
				}
			}
			return this;
		},
		Goes : function() {
			console.log('触发一次动作');
			for (var i in _currentState) {
				states[i] && states[i]();
			}
			return this;
		}
	}
	return {
		change : Action.ChangeState,
		gose : Action.Goes
	}
}


/*----------------------------------------------------------------------*/


// 策略模式
var PriceStratey = function() {
	// 内部算法对象
	var stragtegy = {
		// 100返30
		return30 : function(price) {
			// +price转化为数字类型
			return +price +parseInt(price/100)*30;
		},
		// 100返50
		return50 : function() {
			return +price +parseInt(price/100)*50;
		},
		// 9折
		percent90 : fucntion() {
			// js处理小数乘除法有bug，故运算前先转化为整数
			return price*100*90/10000;
		},
		// 8折
		percent80 : fucntion() {
			return price*100*80/10000;
		},
		// 5折
		percent50 : fucntion() {
			return price*100*50/10000;
		}
	}
	// 策略算法调用接口
	return function(algorithm, price) {
		// 如果算法存在，则调用算法，否则返回false
		return stragtegyp[algorithm] && stragtegyp[algorithm](price)
	}
} ();

// 调用
var price = PriceStratey('return50', '314.67');
console.log(price);   //464.67


/*----------------------------------------------------------------------*/

fucntion $tag(tag, context) {
	context = context || document;
	return context.getElementByTagName(tag);
}
$tag('input')[1].onclick = function() {
	var vaule = $tag('input')[0].vaule;
	$tag('span')[0].innerHTML = InputStrategy.check('nickname', vaule);
}


/*----------------------------------------------------------------------*/

// 创建一个异步请求模块，只向服务器端发送请求
var sendData = function(data, dataType, dom) {
	// XHR对象 简化版本
	var xhr = new XMLHttpRequest(),
	// 请求路径
	url = 'getData.php?mod=uesrInfo';
	// 请求返回事件
	xhr.onload = function(event) {
		// 请求成功
		if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
			// 解决返回数据
			dealData(xhr.responseText, dealType, dom);
		}else {
			// 请求失败
		}
	};
	// 拼接请求字符串
	for (var i in data) {
		url += '&' + i + '=' + data[i];
	}
	// 发送异步请求
	xhr.open("get", url, true);
	xhr.send(null);
}

// 适配响应数据
var dealData = function(data, dealType, dom) {
	// 对象toSring方法简化引用
	var dataType = Object.prototype.toString.call(data);
	// 判断相应数据处理对象
	switch(dealType) {
		// 输入框提示功能
		case 'sug' :
		// 如果数据为数组
		if (dataType === "[Object Array]") {
			// 创建提示框组件
			return createSug(data, dom);
		}
		// 将响应的对象数据转化为数据
		if (dataType === "[Object Object]") {
			var newData = [];
			for (var i in data) {
				newData.push(data[i]);
			}
			// 创建提示框组件
			return createSug(newData, dom);
		}
		// 将响应的其他数据转化为数组
		return createSug([data], dom);
		break;

	case 'Validata' :
	// 创建校验组件
		return createValidataResult(data, dom);
	break;
 
	}
}

var createSug = function(data, dom){
	var i = 0,
		len = data.length,
		html = '';
		// 拼接每一条提示语句
	for(; i < len; i++) {
		html += '<li>' + data[i] + '</li>';
	}
	// 显示提示框
	dom.parentNode.getElementByTagName('ul')[0].innerHTML = html;
}
var createValidataResult = function(data, dom) {
	// 显示校验结果
	dom.prototype.getElementByTagName('span')[0].innerHTML = data;
}


dealData('用户名不正确','Validata', 'input[0]');


/*----------------------------------------------------------------------*/


// 模块实现模块
var viewCommand = (function() {
	var tpl = {
		product : {
			'<div>',
				'<img src="{#src#}"/>',
				'<p>{#text#}</p>',
			'</div>'
		}.join(''),
		title : {
			'<div class="title">',
				'<div class="main">',
					'<h2>{#title#}</h2>',
					'<p>{#tips#}</p>',
				'</div>',
			'</div>',
		}.join('')
	},
	// 格式化字符串缓存字符串
	html = '';
	// 格式化字符串，如：'<div>{#content#}</div>'用{content:'demo'}替换后可得字符串
	// '<div>demo</div>'
		function formateString(str, obj) {
			// 替换'{#'与'#}'之间的字符串
			return str.replace(/\{#(\w+)#\}/g, function(match, key) {
				return obj[key];
			})
		}
	// 方法集合
	var Action = {
		// 创建方法
		create : function(data, view) {
			// 解析数据，如果数据是一个数组
			if (data.length) {
				for (var i = 0; i < data.length; i++) {
					// 将格式化之后的字符串缓存到html中
					html += formateString(tpl[view], data[i]);
				}
			}else{
				// 直接格式化字符串缓存到html中
				html += formateString(tpl[view], data);
			}
		},
		// 展示方法
		display : function(container, data, view) {
			// 如果传入数据
			if (data) {
				// 根据给定数据创建视图
				this.create(data, view);
			}
			// 展示模块
			document.getElementById(container).innerHTML = html;
			// 展示后清空缓存字符串
			html = '';
		}
	}
	// 命令接口
	return function excute(msg) {
		// 解析命令，如果msg.param不是数组则将其转化为数组{apply方法要求第二个参数为数据}
		msg.param = Obsject.prototype.toString.call(msg.param) === "[object Array]"?
	msg.param : [msg.param];
	// Action内部套用的方法引用this，所以为保证作用域this执行传入Action
		Action[msg.command].apply(Action, msg.param)
	}
}) ();

	// 产品展示数据
	var productData = {
		{
			src : 'command/02.jpg',
			text : '菊花'
		},
		{
			src : 'command/03.jpg',
			text : '太阳'
		},
		{
			src : 'command/04.jpg',
			text : '镜头'
		}
	},
	// 模块标题数据
	titleData = {
		title : '标题1。',
		tips : '小标题.'
	};

	viewCommand({
		command : 'create',
		param : [(src : 'command/02.jpg',
			text : '菊花'), 'product']
	})

	viewCommand({
		command : 'display',
		param : ['product', productData, 'product']
	})	
}

/*----------------------------------------------------------------------*/

// canvas绘图命令
var CanvasCommand = (function() {
	// 获取canvas
	var canvas = document.getElementById('canvas'),
	// canvas元素的上下文应用对象缓存在命令对象的内部
	ctx = canvas.getContext('2d');
	// 内部方法对象
	var Action = {
		// 填充色彩
		fillStyle : function(c) {
			ctx.fillStyle = c;
		},
		// 填充矩形
		fillRect : function(x, y, width, height) {
			ctx.fillRect(x, y, width, height);
		},
		// 描边色彩
		strokeStyle : function(c) {
			ctx.strokeStyle = c;
		},
		// 描边矩形
		strokeRect : function(x, y, width, height) {
			ctx.strokeRect(x, y, width, height);
		},
		// 填充字体
		fillText : function(text, x, y) {
			ctx.fillText(text, x, y);
		},
		// 开启路径
		beginPath : function() {
			ctx.beginPath();
		},
		// 移动笔画触电
		moveTo : function(x, y) {
			ctx.beginPath(x, y);
		},
		// 画笔连线
		lineTo : function(x, y) {
			ctx.lineTo(x, y);
		},
		// 绘制弧线
		arc : function(x, y, r, begin, end, dir) {
			ctx.function(x, y, r, begin, end, dir);
		},
		// 填充
		fill : function() {
			cxt.fill();
		},
		// 描边
		stroke : function() {
			ctx.stroke();
		}
	}
	return {
		// 命令接口
		excute : function(msg) {
			// 如果没有指令返回
			if(!msg) {
				return;
			}
			// 如果命令是一个数组
			if (msg.length) {
				// 遍历执行多个命令
				for (var i = 0; i < msg.length; i++) 
					arguments.call(msg[i]);
			// 执行一个命令
			}else {
				// 如果msg.param不是一个数组，则将其转化为数组，apply第二个参数要求格式
				msg.param = Object.prototype.toString.call(msg.param) ===
				"[object Array]" ? msg.param : [msg.param];
				// Action内部套用的方法引用this，所以为保证作用域this执行传入Action
				Action[msg.command].apply(Action, msg.param);
			}
		} 
	}
}) ();

// 调用命令
// 设置填充色彩为红色，并绘制一个矩形
CanvasCommand.excute([
	(command : 'fillStyle', param : 'red'),
	(command : 'fillRect', param : [20, 20, 100, 100]),
]);

/*----------------------------------------------------------------------*/

// 中介者模式
// 创建中介者对象
var Mediator = function() {
	// 消息对象
	var _msg = ();
	return {
		/*
		*订阅消息方法
		*参数type     消息名称
		*参数action   消息回调函数
		*/
		register : function(type, action) {
			// 如果消息存在
			if (_msg[type]) {
				// 存入回调函数
				_msg[type].push(action);
			}else {
				// 不存在则创建该消息容器
				_msg[type] = [];
				// 存入回调函数
				_msg[type].push(action);
			}
		},
		/*
		*发布消息方法
		*参数type     消息名称
		*/
		send : function(type) {
			// 如果消息已经被订阅
			if (_msg[type]) {
				// 遍历已储存的消息回调函数
				for (var i = 0; i < _msg[type].length; i++) {
					// 执行该回调函数
					_msg[type][i] && _msg[type][i]();
				}
			}
		}
	}
} ();

// 单元测试
// 订阅demo消息 执行回调函数-- 输出first
Mediator.register('demo', function() {
	console.log('first');
});
// 订阅demo消息 执行回调函数-- 输出second
Mediator.register('demo', function() {
	console.log('second');
});
// 发布demo消息
Mediator.register('demo');
// 输出结果依次为
// first
// second

// 订阅消息
/*
*显隐导航小组件
*参数mod              模块 
*参数tag			  处理的标签{消息提醒b， 网址span}
*参数showOrHide		  显示还是隐藏
*/
var showHideNavWidget = function(mod, tag, showOrHide) {
	// 获取导航模块
	var mod = document.getElementByTagName(mod)
	// 获取下面的标签名tag的元素
		tag = mod.getElementByTagName(tag),
		// 如果设置为false或者hide则为hidden，否则为visible
		showOrHide = (!showOrHide || showOrHide == 'hide') ? 'hidden' : 'visible';
	// 占位隐藏这些标签
	for (var i = tag.length - 1; i >= 0; i--) {
		tag.style.visibility = showOrHide;
	}
};

// 调用
// 用户收藏导航模块
(function() {
	// 。。。。其他交互逻辑
	// 订阅隐藏用户收藏导航消息提醒信息
	Mediator.register('hideAllNavNum', function() {
		showHideNavWidget('collection_nav', 'b', false);
	});
	// 订阅显示用户收藏导航消息提醒信息
	Mediator.register('showAllNavNum', function() {
		showHideNavWidget('collection_nav', 'b', true);
	});
	// 订阅隐藏用户收藏导航网址信息
	Mediator.register('hideAllNavUrl', function() {
		showHideNavWidget('collection_nav', 'span', false);
	});
	// 订阅显示用户收藏导航网址信息
	Mediator.register('showAllNavUrl', function() {
		showHideNavWidget('collection_nav', 'span', true);
	});
}) ();

// 推荐用户导航
(function() {
	// 。。。。其他交互逻辑
	// 订阅隐藏推荐用户导航消息提醒信息
	Mediator.register('hideAllNavNum', function() {
		showHideNavWidget('recommend_nav', 'b', false);
	});
	// 订阅显示推荐用户导航消息提醒信息
	Mediator.register('showAllNavNum', function() {
		showHideNavWidget('recommend_nav', 'b', true);
	});
}) ();

// 最近常用导航
(function() {
	// 。。。。其他交互逻辑
	// 订阅隐藏最近常用导航网址信息
	Mediator.register('hideAllNavUrl', function() {
		showHideNavWidget('recently_nav', 'span', hide);
	});
	// 订阅显示最近常用导航网址信息
	Mediator.register('showAllNavUrl', function() {
		showHideNavWidget('recently_nav', 'span', show);
	});
}) ();


// 发布消息方法
function() {
	// 消息提醒选框
	var hideNum = document.getElementByTagName('dide_num'),
	// 网址选框
		hideUrl = document.getElementByTagName('hide_url');
	// 消息提醒 选框事件
	hideNum.onchange = function() {
		// 如果构选
		if (hideNum.checked) {
			// 中介者发布隐藏消息提醒功能
			Mediator.send('hideAllNavNum');
		}else{
			// 中介者发布显示消息提醒功能
			Mediator.send('showAllNavNum');
		}
	}
	// 网址选框事件
	hideUrl.onchange = function() {
		// 如果勾选
		if (hideUrl.checked) {
			// 中介者发布隐藏所有网址功能消息
			Mediator.send('hideAllNavUrl');
		}else{
			// 中介者发布显示所有网址功能消息
			Mediator.send('showAllNavUrl');
		}
	}
} ();


/*----------------------------------------------------------------------*/

// 备忘录模式
// 新闻缓存器
var Page = function() {
	// 信息缓存对象
	var cache = {};
	/*
	*主函数
	*参数page主页
	*参数fn】成功回调函数
	*/
	return function(page, fn) {
		// 判断该页数据是否在缓存中
		if (cache[page]) {
			// 恢复到该页状态，显示改业内容
			showPage(page, cache[page]);
			// 成功执行回调函数
			fn && fn();
		}else{
			// 若缓存Cache中无该页函数
			$.post('./data/getNewsData.php', {
				// 请求携带数据page页码
				page : page
			}, function(res) {
				// 成功返回
				if (res.errNo == 0) {
					// 显示该页数据
					showPage(page, res.data);
					// 将该页数据page页面
					cache[page] = res.data;
					// 执行成功回调函数
					fn && fn();
				}else{
					// 处理异常
				}
			})
		}
	}
} ();

// 下一页按钮点击事件
$('#next_page').click(function() {
	// 获取新闻内容
	var $news = $('news_content'),
	// 或缺当前新闻内容元素当前页数据
	page = $news.data('page');
	// 获取并显示新闻
	Page(page, function() {
		// 修正新闻内容元素当前页数据
		$news.data('page', page + 1);
	})
});


/*----------------------------------------------------------------------*/

// 迭代器模式
// 简化循环遍历

// 迭代器
var Iterator = function(items, container) {
	// 获取父元素，若container参数存在并且可以或缺该元素则获取，否则获取document
	var container = container && document.getElementByTagName(container) || document, 
		// 获取元素
		items = container.getElementByTagName(items),
		// 获取元素长度
		length = items.length,
		// 当前索引值，默认0
		index = 0;
		// 缓存原生数组splice方法
	var splice = [].splice;
	return {
		// 获取第一个元素
		first : function() {
			index = 0;               //校正当前索引
			return items[index];	 //获取第一个元素
		},
		// 获取最后一个元素
		second : function() {
			index = length - 1;		 //校正当前索引
			return items[index];	 //获取最后一个元素
		},
		// 获取前一个元素
		pre : function() {
			if (--index > 0) {       //如果索引值大于0
				return items[index]; //获取索引值对应的元素
			}else { 
				index = 0;			 //索引值为0
				return null;	 	 //返回为空
			}
		},
		// 获取后一个元素
		next : function() {
			if (++index < length) {		//如果索引值小于长度
				reurn items [index];	//获取索引值对应的元素
			}else {
				index = length - 1;		//索引值为length - 1 
				return null;			//返回空
			}
		},
		// 获取某一个元素
		get : function(num) {
			// 如果num大于等于0再获取正向获取。否则逆向获取
			index = num >= 0 ? num % length : num % length + length;
			// 返回对应元素
			return items[index];
		},
		// 对每一个元素执行某一个方法
		dealEach : function(fn) {
			// 第二个参数开始为回调函数中参数
			var args = splice.call(arguments, 1);、
			// 遍历元素
			for (var i = 0; i < length; i++) {
				// 对元素执行回调函数
			fn.apply(itemp[i],args);
			}
		}, 
		// 对某一个元素执行某一个方法
		dealItem : function(num, fn) {
			// 对元素执行回调函数，注 1第三个参数开始为回调函数中参数2通过
			// this.get方法设置index索引值
			fn.apply(this.get(num), splcie.call(arguments, 2))
		},
		// 排它方式处理某一个元素
		exclusive : function(num, allFn, numFn) {
			// 对所有元素执行回调函数
			this.dealItem(allfn);
			// 如果num类型为数组
			if (Object.prototype.toString.call(num) === "[object Array]") {
				// 遍历num数组
				for (var i = 0; i < num.length; i++) {
					// 分别处理数组中的每一个元素
					this.dealItem(num[i], numfn);
				}
			}else {
				// 处理第num个元素
				this.dealItem(num, numFn);
			}
		}
	} 
}


// 调用
// 创建一个迭代器对象
var demo = new Iterator('li', 'container');
// 为每一个元素处理一些逻辑可以这样做
console.log(demo, first());           //<li>1<li>
console.log(demo, pre());			  //null
console.log(demo, next());			  //<li>2<li>
console.log(demo, get(2000));		  //<li>1<li>

// 如处理所有函数
demo.dealEach(function(text, color){
	this.innerHTML = text; 				//设置内容
	this.style.background = color;		//设置背景色
}, 'text', 'pink');

// 排他思想处理第3个与第4个元素
demo.exclusive([2,3], function() {
	this.innerHTML = '被排除的';
	this.style.background = 'green';
}, function() {
	this.innerHTML = '选中的';
	this.style.background = 'red';
})

/*----------------------------------------------------------------------*/

// 数组迭代器
var eachArray = function(arr, fn) {
	var i = 0,
		len = arr.length; 
	for (var i = 0; i < .len; i++) {
		if (fn.call(arr[i], i, arr[i] === false)) {
			break;
		}
	}
}

// 对象迭代器
var eachObject = function() {
	for (var i in obj) {
		if (fn.call(obj[i], i, obj[i]) === false) {
			break;
		}
	}
}

// 使用迭代器
// 创建一个数组
for (var arr = [], i = 0; i < 5; arr[i++]);
	eachArray(arr, function(i, data) {
		console.log(i, data);
	});

// 测试结果
//0 1
//1 2
//2 3
//3 4
//4 5

// 处理一个对象
var obj = {
	a : 23,
	b : 56,
	c : 67
}
eachObject(obj, function(i, data) {
	console.log(i, data);
});

// 测试结果
//a 23
//b 56
//c 67


/*----------------------------------------------------------------------*/

// 同步变量迭代器
// 同步变量
var A = {
	// 所有用户共有
	commom : {},
	// 客户端数据
	client : {
		user : {
			username : '666',
			uid: '123'
		}
	},
	// 服务器端数据
	server : {}
};
// 同步变量迭代器去取值器
AGetter = function(key) {
	// 如果不存在a则返回来定义
	if (!A)
		return undefined;
	var result = A;               //获取同步变量A
	key = key.splice('');		  //解析属性层次序列
	// 迭代同步变量A对象属性
	for (var i = 0; i < key.length; i++) {
		// 如果第i层属性存在对应的值则迭代该属性值
		if(result[key[i]] !== undefined) {
			result = result[key[i]];
			// 如果不存在则返回未定义
		}else {
			return undefined;
		}
	}
	// 返回获取的结果
	return result;
}
// 获取而用户名数据
console.log(AGetter('client.user.username'));    //666
// 获取本地语言数据
console.log(AGetter('server.lang.local')); 		//undefined

同步变量迭代赋值器
ASetter = function(key, val) {
	// 如果不存在a则返回来定义
	if (!A)
		return false;
	var result = A;               //获取同步变量A
	key = key.split('.');		  //解析属性层次序列
	// 迭代同步变量A对象属性
	for (var i = 0; i < key.length - 1; i++) {
	// 如果第i层属性对应的值不存在，则定义为对象
		if (result[key[i]] === undefined) {
			result[key[i]] = {};
		}
	// 如果第i层属性对应的值不是对象{object}的一个实例，则抛出错误
		if (!(result[key[i]] instanceof Object)) {
			throw new Error('A.' + key.splcie(0, i+1).join('.') + 'is not Object');
			return false;
		}
		// 迭代该层是属性值
		return = result[key[i]];
	}
	// 返回设置成功的属性值
	return result[key[i]] = val;
}
// 缓存添加体育新闻模块数据
console.log(ASetter('client.module.news.sports', 'on'));   //on
 
/*----------------------------------------------------------------------*/


// 解释器模式
// 同级兄弟元素遍历

// 获取兄弟元素名称
function getSublingName(node) {
	// 如果存在兄弟元素
	if (node.previousSibling) {
		var name = '',   //放回的兄弟元素名称字符串
			count = 1,   //紧邻兄弟元素中相同名称元素个数
			nodeName = node.nodeName,     //原始节点名称
			sibling = node.previousSibling;     //前一个兄弟元素
		// 如果存在前一个兄弟元素   
		while(sibling) {
			// 如果节点为元素，并且节点类型与前一个兄弟元素相同，并且前一个兄弟元素名称存在
			if (sibling.nodeType == 1 && sibling.nodeType === node.nodeType && sibling.nodeName) {
				// 如果节点名称和前一个兄弟元素类型相同，并且前一个兄弟元素名称存在
				if (nodeName == sibling.nodeName) {
					// 节点名称后面添加计数
					name += ++count;
				}else {
					// 重置相同紧邻节点名称节点个数
					count = 1;
					// 追加新的节点名称
					name += '|' + sibling.nodeName.toUpperCase();
				}
			}
			// 向前获取前一个兄弟元素
			sibling = sibling.previousSibling;
		}
		return name;
		// 否则不存在兄弟元素返回''
	}else {
		return '';
	}
}

// 遍历文档树
// Xpath解释器
var Interpreter = (function() {
	// 获取兄弟元素名称
	function getSublingNAme(node) {
		// 。。。
	}
	// 参数1 node 目标节点 参数2 wrap 容器节点
	return function(node, wrap) {
		// 路径数组
		var path = [],
		// 如果不存在容器节点，默认为document
			wrap = wrap || document;
			// 如果当前节点等于容器节点
		if (node == wrap) {
			// 容器节点为元素
			if (wrap.nodeType == 1) {
				// 路径数组中输入容器节点名称
				path.push(wrap.nodeName.toUpperCase());
			}
			// 返回最终路径数组结束
			return path;
		}
		// 如果当前节点的父节点不等于容器节点
		if (node.parentNode !== wrap) {
			// 对当前节点的父节点执行遍历操作
			path = arguments.callse(node.parentNode, wrap);
		// 如果当前节点的父元素节点与容器节点相等
		}else {
			// 容器节点为元素
			if (wrap.nodeType == 1) {
				// 输入当前节点名称及其前面兄弟语速名称统计
				path.push(nodeName,toUpperCase() + sublingNames);
			}
		}
		// 返回最终路径数组结束
		return path;
	}
	// 立即执行方法
}) ();


// 选一个h5页面
var path = Interpreter(document.getElementById('span'));


/*----------------------------------------------------------------------*/
// 原型继承
var A = function() {
	A.prototype = {
		length : 2;
		size : function() {
			return this.length;
		}
	}
}
var a = new A();
console.log(a.size());  //2

// 用jquery的方法
var A = function(selector) {
	return A.fn.init(selector);
}
A.fn = A.prototype ={
	init : function(selector) {
		return document.getElementById(selector)
	},
	length : 2,
	size : function() {
		return this.length;
	}
}
console.log(A('demo'));  //<div id="demo"></div>


/*----------------------------------------------------------------------*/

var A = function(selector) {
	return A.fn.init(selector);
}
A.fn = A.prototype = {
	init : function(selector) {
		this[0] = document.getElementById(selector);  //作为当前对象的属性值保存
		this.length = 1;    //校正length属性
		return this;		//返回当前对象
	},
	length : 2,
	size : function() {
		return this.length;
	}
}
var demo = A('demo');
console.log(demo);   //Object{0:div#demo, init:function,length:1,size:...}
console.log(A('demo').size());     //1


/*----------------------------------------------------------------------*/

// 覆盖获取
// selector选择符 ,context 上下文
var A =- function(selector, content) {
	return new A.fn.init(selector, content);
}
A.fn = A.prototype = {
	constructor : A,
	init : function(selector, content) {
		// 获取元素长度
		this.length = 0,
		// 默认获取元素上下文为document
		context = context || document;
		// 如果是id选择符，按位非将-1 转化为0，转化为布尔值false
		if (~selector.indexOf('#')) {
			// 截取id并选择
			this[0] = document.getElementById(selector.slice(1));
			this.length = 1;
		// 如果是元素名称
		}else {
			// 在上下文中选择元素
			var doms = context.getElementById(selector),
				i = 0,            			//第一个开始
				len = doms.length;   		//获取元素长度			
			for (; i < len; i++) {
				// 压入this中
				this[i] = doms[i];
			}
			// 校正长度
			this.length = len;
		}
		// 保存上下文
		this.context = context;
		// 保存选择符
		this.selector = selector;
		// 返回对象
		return this;
	},
}

// 方法拓展
a.extend = A.fn.extend = function() {
	// 拓展对象从第二个参数算起
	var i = 1,
	// 获取参数长度
		len = arguments.length,
		// 第一个参数为源对象
		target = arguments[0],
		// 拓展对象中的属性
		j;
		// 如果只传一个参数
	if (i == len) {
		// 源对象为当前对象
		target = this;
		// i从0计数
		i--;
	}
	// 遍历参数中的拓展对象
	for (; i < len; i++) {
		// 遍历拓展对象中的属性
		for (j in arguments[i]) {
			// 拓展源对象
			target[j] = arguments[i][j];
		}
	}
	// 返回源对象
	return target;
}

// 测试用例：
// 拓展一个对象
var demo = A.extend({first : 1},{second : 2},{third : 3});
console.log(demo) 			//{frist :1, second :2, third :3}
// 拓展A.fn方式1
A.extend(A.fn, {version : '1.0'});
console.log(A('demo').version);        	//1.0
// 拓展A.fn方式2
A.fn.extend({getVersion : function(){return this.version}});
console.log(A('demo').getVersion());       	//1.0
// 拓展A方式1
A.extend(A, {author:'张333'});
console.log(A.author);                  //张333
// 拓展A方式2
A.extend({nickname:'11111'});
console.log(A.nickname);                  //11111


// 添加方法
A.fn extend({
	// 添加事件
	on : (function() {
		// 标准浏览器dom2级事件
		if (document.addEventListener) {
			return function(type, fn) {
				var i = this.length -1;
				// 遍历所有元素添加事件
				for (; i >= 0; i--) {
					this[i].addEventListener(type, fn, false);
				}
				// 返回源对象
			return this;
			}
			// IE浏览器dom2级事件
		}else if(document.attachEvent){
			return function(type, fn) {
				var i = this.length -1;
				for (; i >= 0; i--) {
					this[i].addEvent('on' + type, fn);
				}
			return this;
			}
			// 不支持dom2级事件浏览器添加事件
		}else {
			return function(type, fn) {
				var i = this.length -1;
				for (; i >= 0; i--) {
					this[i]['on' + type] = fn;
				}
			return this;
			}
		}
	})()
})

A.extend({
	camelCase : function(str) {
		return str.replace(/\-(\w)/g, function(all, letter) {
			return letter.toUpperCase();
		});
	}
});
A.extend({
	// 设置css样式
	css : function() {
		var arg = arguments,
			len = agr.length;
		if (this.length < 1) {
			return this;
		}
		// 只有一个参数时
		if (len === 1) {
			// 如果字符串则为获取第一个元素css样式
			if (typeof agr[0] === 'string') {
				if (this[0].currentStyle) {
					return this[0].currentStyle[name];
				}else {
					return getCompute(this[0], false)[name];
				}
				// 为对象时则设置多个样式
			}else if (typeof arg[0] === 'Object') {
				for (var i in arg[0]) {       //遍历每个样式
					for (var j = this.length - 1; j >= 0; j--) {
						// 调用拓展方法camelCase将‘-’分割线转化为驼峰式
						this[j].style[A.camelCase[i]] = arg[0][i];
					}
				}
			}
			// 两个参数则设置一个样式
		}else if (len === 2) {
			for (var j = this.length - 1; i >= 0; i--) {
				this[j].style[A.camelCase(arg[0])] = arg[1];
			}
		}
		return this;
	}
})

A.fn.extend({
	获取或者设置元素内容、
	html : function() {
		var arg = arguments,
			len = arg.length;
			// 无参数则获取第一个元素的内容
		if (len === 0) {
			return this[0] && this[0].innerHTML;
			// 一个参数则设置每一个元素内容
		}else{
			for (var i = this.length - 1; i >= 0; i--) {
				this[i].innerHTML = arg[0];
			}
		}
		return this;
	}
})

// 测试使用
A('div')
.css({
	height : '10px',
	border : '1px solid #000',
	'background-color' : 'red'
})

/*----------------------------------------------------------------------*/


 // 异步加载模块

// 加载脚本文件
var loadScript = function(src) {
	var _script = document.createElement('scrpit');
	_script.tpye = 'text/javascript';
	_script.src = src;
	document.getElementByTagName('head')[0].appendChild(_script);
}


/*----------------------------------------------------------------------*/

 // 异步加载模块

~(function(F) {
	var moduleCache = {}
})({function() {
	return window.f = {};
}} ())

/*
*创建获调用模块方法
*
*
*/
loadModule = function(moduleName, callback) {
	var _module;
	if (moduleCache[moduleName]) {
		_module = moduleCache[moduleName];
		if (_module.status) {}
	}
}








































































































































