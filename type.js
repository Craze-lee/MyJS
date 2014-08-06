var person = {
	name : 'Craze',
	age : '21'
};
alert(person.name);

/**
 * 工厂模式
 * @param  {[type]} name 类的属性
 * @param  {[type]} age  类的属性
 * @param  {[type]} job  类的属性
 * @return {[type]}      类
 */
function createPeason (name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function () {
		alert(this.name);
	};
	return o;
}
var peason1 = createPeason("Lee", 21, "Software Engineer");
peason1.sayName();

/**
 * 构造函数模式
 * @param {[type]} name [description]
 * @param {[type]} age  [description]
 * @param {[type]} job  [description]
 */
function Peason2 (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;

	this.sayName = function() {
		alert(this.name);
	};
}
var peason2 = new Peason2("Nicholas", 28, "Professior");
peason2.sayName();

//对比上面，将函数提取出去
//函数即对象，在上面，如果创建多个对象，则sayName创建多个，在下面则不会。
function Peason3 (name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;     
}
function sayName() {
		alert(this.name);
}
var peason3 = new Peason3("Grace", 22, "Doctor");
peason3.sayName();

/**
 * 原型模式
 * 用途：构造一个原型，让所有实例共享它所包含的属性和方法。
 */
function Peason4 () {
}
Peason4.prototype.name = 'Jack';
Peason4.prototype.age = 12;
Peason4.prototype.job = 'policeman';
Peason4.prototype.sayName = function () {
	alert(this.name);
};

var peason41 = new Peason4();
var peason42 = new Peason4();

peason42.name='lucy';      //覆盖掉原型的name
peason41.sayName();     //来自原型
peason42.sayName();     //来自实例

alert(peason42.hasOwnProperty("name"));     //检测属性是存在于实例还是原型

delete peason42.name;     //删除覆盖
peason42.sayName();

alert(peason42.hasOwnProperty("name"));

/**
 * 更简单的原型模式
 */
function Peason5 () {
}
Peason5.prototype = {
	name : 'Hello',
	sayName : function () {
		alert(this.name);
	}
}