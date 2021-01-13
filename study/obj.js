// function createObj(name) {
//     let person = {};
//     person.name = name;
//     person.greeting = function() {
//         alert(person);
//         alert(`Hi I'm ${this.name}`);
//     }
//     return person;
// }
//构建函数，通常大写开头，无需返回值，类似php的构造函数
function Person(name) {
    this.name = name;
    this.greeting = function(){
        alert(`Hi Iam ${this.name}`);
    }
}
p = new Person('jack');
p['greeting']();
p.origin="jh";
let x = new Object(p);
console.log(x);
// 可以在 constructor 属性的末尾添加一对圆括号（括号中包含所需的参数），从而用这个构造器创建另一个对象实例。毕竟构造器是一个函数，故可以通过圆括号调用；只需在前面添加 new 关键字，便能将此函数作为构造器使用。

let y = new p.constructor();
console.log(y);
