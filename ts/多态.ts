/** 多态 */
// 父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
    class Animal{
        eat(){
            console.log("animal eat")
        }
    }
    class Cat extends Animal{
        eat(){
            return `this is cat`
        }
    }
    class Dog extends Animal{
        eat(){
            return `this is dog`
        }
    }
    let chi1 = new Cat()
    chi1.eat()

/** 抽象类abstract、抽象方法 */
// 抽象类做为其它派生类的基类(父类)使用,一般不会直接被实例化
// 抽象方法只能包含再抽象类中,抽象类可包含抽象方法和普通方法
// 子类继承抽象类,实现抽象方法      
    abstract class Cxl { // 抽象类
        abstract eat(); // 不能实现,因为是抽象方法
        run(){ return `this run`}; // 普通方法
    }
    class Cxl2 extends Cxl {
        eat(){ return `this eat`} // 一定要实现这个方法,因为是抽象方法,除非把这个子类本身也变成抽象类
    }
    