//把多个对象的属性合并到一个根对象上

function merge(root) {
    for(var i =1;i<argumens.length;i++){
        for(var key in argumens[i]){
            root[key] = argumens[i][key]
        }
    }
    return root;
}

var merged = merge(
    {name: "Batou"},
    {city: "Niihama"}
);

console.log(merged.name == "Batou");
console.log(merged.city == "Niihama");

