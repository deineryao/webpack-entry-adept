//闭包是纯函数式编程语言的一个特性
//本例演示私有变量

function Ninja() {
    
    var feints = 0;

    this.getFeints = function(){
        return feints;
    };

    this.setFeints = function(){
        feints++;
    }
}

var ninja = new Ninja();
ninja.setFeints();

console.log(ninja.getFeints()); //1
console.log(ninja.feints); //undefined
