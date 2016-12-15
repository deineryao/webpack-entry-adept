//html 片段
//<input id="first" />
//<input id="second" />

var elems = {
    length: 0,
    add: function(elem) {
        //用call()方法强制讲对象扮演成上下文
        Array.prototype.push.call(this, elem);
    },
    gather: function(id){
        this.add(document.getElementById(id));
    }
};

console.log(elems);

elems.gather("father");
console.log(elems);