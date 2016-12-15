//Math.min(1,2,3,4) 形式可以求出最小值 但参数写死，长度不可变，利用apply 和array解决

function smallest(array){
    return Math.min.apply(Math, array);
}

function largest(array){
    return Math.max.apply(Math, array);
}

console.log(smallest([0,1,2,4]));
console.log(largest([0,1,2,4]));

//上面讲Math对象作为上下文，是没有必要的，无论上面上下文，Math方法都是可用的