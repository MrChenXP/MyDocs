/** 泛型 */
// 
    function printarr<T>(arr:T[]):void{
        for(let item of arr){
            console.log(item)
        }
    }
    printarr<number>([1,2,3]);
    printarr<string>(['1','2','3']);
// 泛型类
    class myArrayList<T>{
        public name: T;
        public list:T[] = [];
        add(val:T):void{
            this.list.push(val)
        }
    }
    let arr = new myArrayList<number>();
    arr.add(11);
    // arr.add('22'); 报错,指定了number类型
    console.log(arr.list);
// 泛型接口
    interface Iadd<T>{
        (x:T,y:T):T;
    }
    let ad: Iadd<number>
    ad = function(x:number, y: number){
        return 11
    }
