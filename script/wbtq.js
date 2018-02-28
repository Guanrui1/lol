// JavaScript Document
var r = 0;
  var img0;
  var img1;
  var pi1,pi2;
  var int;
   onload=function(){
      img0 = document.getElementById("img1");
      img1 = document.getElementById("img2");
	  pi1 = document.getElementById("pi1");
	  pi2 = document.getElementById("pi2");
	  }
	 function huan(){
      if(r==0){
		  img0.style.display = "block";
		  img1.style.display = "none";
		  pi1.style.backgroundColor = "#FFF";
	      pi2.style.backgroundColor = "#faad29";
		  r++;}
		  else if(r==1){
		  img0.style.display = "none";
		  img1.style.display = "block";
		  pi1.style.backgroundColor = "#faad29";
	      pi2.style.backgroundColor = "#FFF";
		  r=r-1;}
		  		  }
	int = setInterval("huan()",2000);
  function jixu(){
      int = setInterval("huan()",2000);}
	  function huan1(){
	  clearInterval(int);
      img0.style.display = "block";
	  img1.style.display = "none";
	  pi1.style.backgroundColor = "#faad29";
	  pi2.style.backgroundColor = "#fff";
	  r=0;}
	   function huan2(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "block";
	  pi1.style.backgroundColor = "#fff";
	  pi2.style.backgroundColor = "#faad29";
	  r=0;}
	  
	  
 function span(x){
	var sp=document.getElementById(x); 
	sp.style.color="#11aaf1"
	 }
 function spa(x){
	var sp=document.getElementById(x)
	sp.style.color="#333333"}
 var zz = 0;
 function dian(){
    var tab1 = document.getElementById("tab1");
	var tab2 = document.getElementById("tab2");
	if(zz==0){
	    tab1.style.display = "none";
	    tab2.style.display = "block";
		zz++;
	}else{
	    tab1.style.display = "block";
	    tab2.style.display = "none";
		zz-=1;
	}
 }