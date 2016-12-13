var ninja = {
	chirp: function(n) {
		return n>1 ? this.chirp(n-1) + "-chirp" : "chirp";
	}
};
var samurai = {chirp: ninja.chirp};
//方法内用this,不介意断开引用
ninja = {};

try{
	if(samurai.chirp(3)=="chirp-chirp-chirp") console.log('is this go wo work?');
}
catch(e){
	console.log("'oh no,it's not good!");
}
