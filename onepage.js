var seenew=function(id){
	var coll=document.getElementsByClassName('stuff')
	var i= coll.length;
	for (j=0;j<i;j++){
		coll[j].style.display="none";
}

	document.getElementById(id).style.display="block";
	}