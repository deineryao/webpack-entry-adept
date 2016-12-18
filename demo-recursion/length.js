//通过length属性，可知道声明了多少个命名参数
//通过arguments.length，可知道在调用时传入了多少参数
function makeNinja(name) {}
function makeSamurai(name, rank) {}
console.log(makeNinja.length) // 1
console.log(makeSamurai.length) // 2

//利用参数个数进行重载
var ninja = {
    whatever: function() {
        switch (arguments.length) {
            case 0:
                //do something
                break;
            case 1:
                //do something
                break;
            case 2:
                //do something
                break;
            //and so on                
        }
    }
}