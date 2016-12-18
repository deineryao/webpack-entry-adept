function addMethod(object, name ,fn) {
    var old = object[name];
    object[name] = function() {
        console.log('begin ======');
        console.log(fn);
        console.log(arguments);
        console.log(fn.length == arguments.length);
        console.log('end ======');

        if(fn.length == arguments.length)
            return fn.apply(this, arguments);
        else if (typeof old == 'function')    
            return old.apply(this, arguments);
    }
}

var ninja = {};
addMethod(ninja, 'whatever', function(){/* do something */});
addMethod(ninja, 'whatever', function(a){/* do something */});
addMethod(ninja, 'whatever', function(a,b){/* do something */})