function multiMax(multi){
    return multi * Math.max.apply(Math, arguments.slice(1)); 
}
//multiMax(3,1,2,3) 报错 Uncaught TypeError: arguments.slice is not a function


//强制用Array的slice()方法将arguments参数视为一个真正的数组
function multiMax2(multi){
    return multi*Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
}
