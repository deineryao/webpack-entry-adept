//内部匿名函数如何访问到old和fn，需深入理解闭包
function addMethod(object, name ,fn) {
    var old = object[name];
    object[name] = function() {
        if(fn.length == arguments.length)
            return fn.apply(this, arguments);
        else if (typeof old == 'function')    
            return old.apply(this, arguments);
    }
}

var ninjas = {
    values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};

addMethod(ninjas, "find", function(){
    return  this.values;
});

addMethod(ninjas, "find", function(name){
    var ret = [];
    for(var i = 0; i< this.values.length; i++){
        if(this.values[i].indexOf(name) == 0) {
            ret.push(this.values[i]);
        }
    }
    return ret;
});

addMethod(ninjas, "find", function(first, last){
    var ret = [];
    for(var i=0; i<this.values.length;i++){
        if(this.values[i] == (first+" "+last)){
            ret.push(this.values[i])
        }
    }
    return ret;
});

console.log(ninjas.find().length);
console.log(ninjas.find("Sam").length);
console.log(ninjas.find("Dean","Edwards").length);
console.log(ninjas.find("Alex","Russell","Jr"));
