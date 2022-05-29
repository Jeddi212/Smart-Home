//Navigation Hide/Show on Scroll
var prevScrollpos=window.pageYOffset;
window.onscroll=function() {
  var currentScrollPos=window.pageYOffset;
  if (prevScrollpos>currentScrollPos){
    document.getElementById("navigation").style.top="0";
  }else{
    document.getElementById("navigation").style.top="-155px";
  }
  prevScrollpos=currentScrollPos;
}

//Navigation DropDown
function DropDown(){
	var drop=document.getElementById("dropdown").style;
	if(drop.display==="block"){
		drop.display="none";
	}else{
		drop.display="block";
	}
}