export class Person {
    //实例的属性必须定义在类的方法里
    constructor(name, sex, age) {
        this.name = name || '';
        this._sex = sex || 0;
        this._age = age || 18;
    }
    draw() {
        console.log(`${this.name}今年${this.age}性别${this.sex}`);
    }
    get age() {
        return this._age + 1;
    }
    get sex() {
        return this._sex === 1 ? '男' : '女';
    }
    set age(a) {
        this._age = a;
    }
    set sex(sex) {
        this._sex = sex;
    }
    //静态方法不可用实例化对象调用
    static laugh() {
        let s = 0.1 + 0.2;
        alert(s.toFixed(2))
    }
    
}
//静态的或原型的数据属性必须定义在类定义的外面。
Person.s_param = "2";
