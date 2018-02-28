// JavaScript Document
var s;
var pic;
var picg;
window.onload=function(){
	
s=document.getElementsByName("s");

pic=document.getElementsByName("f");
picg=document.getElementsByName("g");
}
	function chec(){
		if(s[1].checked){
			for(var a=20;a<60;a++){pic[a].style.display="none";picg[a].style.display="none";}
			}
		if(s[0].checked){
			for(var i=0;i<60;i++){pic[i].style.display="inline";picg[i].style.display="block";}
			}
		if(s[2].checked){
			for(var f=10;f<60;f++){pic[f].style.display="none";picg[f].style.display="none";}
			}
		if(s[3].checked){
			for(var j=40;j<60;j++){pic[j].style.display="none";picg[j].style.display="none";}
			}
		if(s[4].checked){
			for(var c=8;c<60;c++){pic[c].style.display="none";picg[c].style.display="none";}
			}
		if(s[5].checked){
			for(var e=16;e<60;e++){pic[e].style.display="none";picg[e].style.display="none";}
			}
		if(s[6].checked){
			for(var d=29;d<60;d++){pic[d].style.display="none";picg[d].style.display="none";}
			}
}