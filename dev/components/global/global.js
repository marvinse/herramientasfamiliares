$(document).ready(function(){
	var keys = Object.keys(APP);
	for (var i = 0; i < keys.length ; i++) {
		var route = keys[i];
		APP[route].init();
	}
});