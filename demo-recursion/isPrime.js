function isPrime(value){
    if(!isPrime.anwers) isPrime.answers = {};
    if(isPrime.answers[value] != null) {
        return isPrime.answers[value];
    }
    var prime = value !=1;
    for(var i =2;i<value;i++){
        if(value % i == 0){
            prime = false;
            break;
        }
    } 
    return isPrime.answers[value] = prime;
}

console.log(isPrime(5))

//缓存dom，提升性能
function getElements(name) {
    if(!getElements.cache) getElements.cache = {};
    return getElements.cache[name] = getElements.cache[name] || document.getElementsByTagName(name)
}