// JavaScript Document
var r = 0;
  var img0;
  var img1;
  var img2;
  var img3; 
  var pi1,pi2,pi3,pi4;
  var int;
  
   onload=function(){
      img0 = document.getElementById("img1");
      img1 = document.getElementById("img2");
      img2 = document.getElementById("img3");
	  img3 = document.getElementById("img4");
	
	  pi1 = document.getElementById("pi1");
	  pi2 = document.getElementById("pi2");
	  pi3 = document.getElementById("pi3");
	  pi4 = document.getElementById("pi4");
 }
  function huan(){
      if(r==0){
		  img0.style.display = "block";
		  img1.style.display = "none";
		  img2.style.display = "none";
		  img3.style.display = "none";
		
		  pi1.style.backgroundColor = "#FFF";
	      pi2.style.backgroundColor = "#CCC";
	      pi3.style.backgroundColor = "#CCC";
	      pi4.style.backgroundColor = "#CCC";
		  r++;}
	  else if(r==1){
		  img0.style.display = "none";
		  img1.style.display = "block";
		  img2.style.display = "none";
		  img3.style.display = "none";
		  
		  pi1.style.backgroundColor = "#CCC";
	      pi2.style.backgroundColor = "#FFF";
	 	  pi3.style.backgroundColor = "#CCC";
	 	  pi4.style.backgroundColor = "#CCC";
		  r++; }
	else if(r==2){
		  img0.style.display = "none";
		  img1.style.display = "none";
		  img2.style.display = "block";
		  img3.style.display = "none";
		  
		  pi1.style.backgroundColor = "#CCC";
		  pi2.style.backgroundColor = "#CCC";
	 	  pi3.style.backgroundColor = "#FFF";
		  pi4.style.backgroundColor = "#CCC";	 
		  r++; 	  
		  }
	else if(r==3){
		  img0.style.display = "none";
		  img1.style.display = "none";
		  img2.style.display = "none";
		  img3.style.display = "block";
		  pi1.style.backgroundColor = "#CCC";
	 	  pi2.style.backgroundColor = "#CCC";
	      pi3.style.backgroundColor = "#CCC";
	      pi4.style.backgroundColor = "#FFF";
	   
		 
		  r=r-3; }	  
		  }
	int = setInterval("huan()",2000);
  function jixu(){
      int = setInterval("huan()",2000);
  }
  function huan1(){
	  clearInterval(int);
      img0.style.display = "block";
	  img1.style.display = "none";
	  img2.style.display = "none";
	  img3.style.display = "none";
	  pi1.style.backgroundColor = "#fff";
	  pi2.style.backgroundColor = "#ccc";
	  pi3.style.backgroundColor = "#ccc";
	  pi4.style.backgroundColor = "#ccc";
	
	  r = 0;
  }
   function huan2(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "block";
	  img2.style.display = "none";
	  img3.style.display = "none";
	  pi1.style.backgroundColor = "#ccc";
	  pi2.style.backgroundColor = "#fff";
	  pi3.style.backgroundColor = "#ccc";
	  pi4.style.backgroundColor = "#ccc";
	
	  r = 1;
  }
   function huan3(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "none";
	  img2.style.display = "block";
	  img3.style.display = "none";
	  pi1.style.backgroundColor = "#ccc";
	  pi2.style.backgroundColor = "#ccc";
	  pi3.style.backgroundColor = "#fff";
	  pi4.style.backgroundColor = "#ccc";
	
	  r = 2;
  }
   function huan4(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "none";
	  img2.style.display = "none";
	  img3.style.display = "block";
	  pi1.style.backgroundColor = "#ccc";
	  pi2.style.backgroundColor = "#ccc";
	  pi3.style.backgroundColor = "#ccc";
	  pi4.style.backgroundColor = "#fff";
	
	  r = 3;
  }