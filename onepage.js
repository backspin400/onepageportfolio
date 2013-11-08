var seenew=function(id){
	var coll=document.getElementsByClassName('container')
	var i= coll.length;
	for (j=0;j<i;j++){
		coll[j].style.display="none";
}

	document.getElementById(id).style.display="block";
	}

document.ready(){
	seenew("splash");
}