// JavaScript Document
 var r = 0;
  var img0;
  var img1;
  var img2;
  var img3;
  var img4;
  var pi1,pi2,pi3,pi4,pi5;
  var int;
  onload=function(){
      img0 = document.getElementById("img1");
      img1 = document.getElementById("img2");
      img2 = document.getElementById("img3");
	  img3 = document.getElementById("img4");
	  img4 = document.getElementById("img5");
	  pi1 = document.getElementById("pi1");
	  pi2 = document.getElementById("pi2");
	  pi3 = document.getElementById("pi3");
	  pi4 = document.getElementById("pi4");
	  pi5 = document.getElementById("pi5");
  }
  function huan(){
      if(r==0){
		  img0.style.display = "block";
		  img1.style.display = "none";
		  img2.style.display = "none";
		  img3.style.display = "none";
		  img4.style.display = "none";
		  pi1.style.backgroundColor = "#36AB87";
	      pi2.style.backgroundColor = "#EBEBEB";
	      pi3.style.backgroundColor = "#EBEBEB";
	      pi4.style.backgroundColor = "#EBEBEB";
	      pi5.style.backgroundColor = "#EBEBEB";
		  pi1.style.color = "#FFF";
		  pi2.style.color = "#000";
		  pi3.style.color = "#000";
		  pi4.style.color = "#000";
		  pi5.style.color = "#000";
		  r++;
	  }else if(r==1){
		  img0.style.display = "none";
		  img1.style.display = "block";
		  img2.style.display = "none";
		  img3.style.display = "none";
		  img4.style.display = "none"; 
		  pi1.style.backgroundColor = "#EBEBEB";
	      pi2.style.backgroundColor = "#36AB87";
	 	  pi3.style.backgroundColor = "#EBEBEB";
	 	  pi4.style.backgroundColor = "#EBEBEB";
		  pi5.style.backgroundColor = "#EBEBEB";
		  pi1.style.color = "#000";
		  pi2.style.color = "#FFF";
		  pi3.style.color = "#000";
		  pi4.style.color = "#000";
		  pi5.style.color = "#000";
		  r++; 
	  }else if(r==2){
		  img0.style.display = "none";
		  img1.style.display = "none";
		  img2.style.display = "block";
		  img3.style.display = "none";
		  img4.style.display = "none"; 
		  pi1.style.backgroundColor = "#EBEBEB";
		  pi2.style.backgroundColor = "#EBEBEB";
	 	  pi3.style.backgroundColor = "#36AB87";
		  pi4.style.backgroundColor = "#EBEBEB";
	      pi5.style.backgroundColor = "#EBEBEB";
		  pi1.style.color = "#000";
		  pi2.style.color = "#000";
		  pi3.style.color = "#FFF";
		  pi4.style.color = "#000";
		  pi5.style.color = "#000";
		  r++; 
	  }else if(r==3){
		  img0.style.display = "none";
		  img1.style.display = "none";
		  img2.style.display = "none";
		  img3.style.display = "block";
		  img4.style.display = "none"; 
		  pi1.style.backgroundColor = "#EBEBEB";
	 	  pi2.style.backgroundColor = "#EBEBEB";
	      pi3.style.backgroundColor = "#EBEBEB";
	      pi4.style.backgroundColor = "#36AB87";
	      pi5.style.backgroundColor = "#EBEBEB";
		  pi1.style.color = "#000";
		  pi2.style.color = "#000";
		  pi3.style.color = "#000";
		  pi4.style.color = "#FFF";
		  pi5.style.color = "#000";
		  r++; 
	  }else if(r==4){
		  img0.style.display = "none";
		  img1.style.display = "none";
		  img2.style.display = "none";
		  img3.style.display = "none";
		  img4.style.display = "block"; 
		  pi1.style.backgroundColor = "#EBEBEB";
	      pi2.style.backgroundColor = "#EBEBEB";
	      pi3.style.backgroundColor = "#EBEBEB";
	      pi4.style.backgroundColor = "#EBEBEB";
	      pi5.style.backgroundColor = "#36AB87";
		  pi1.style.color = "#000";
		  pi2.style.color = "#000";
		  pi3.style.color = "#000";
		  pi4.style.color = "#000";
		  pi5.style.color = "#FFF";
		  r = r - 4; 
	  }
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
	  img4.style.display = "none";
	  pi1.style.backgroundColor = "#36AB87";
	  pi2.style.backgroundColor = "#EBEBEB";
	  pi3.style.backgroundColor = "#EBEBEB";
	  pi4.style.backgroundColor = "#EBEBEB";
	  pi5.style.backgroundColor = "#EBEBEB";
	  pi1.style.color = "#FFF";
	  pi2.style.color = "#000";
	  pi3.style.color = "#000";
	  pi4.style.color = "#000";
	  pi5.style.color = "#000";
	  r = 0;
  }
  function huan2(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "block";
	  img2.style.display = "none";
	  img3.style.display = "none";
	  img4.style.display = "none";
	  pi1.style.backgroundColor = "#EBEBEB";
	  pi2.style.backgroundColor = "#36AB87";
	  pi3.style.backgroundColor = "#EBEBEB";
	  pi4.style.backgroundColor = "#EBEBEB";
	  pi5.style.backgroundColor = "#EBEBEB";
	  pi1.style.color = "#000";
	  pi2.style.color = "#FFF";
	  pi3.style.color = "#000";
	  pi4.style.color = "#000";
      pi5.style.color = "#000";
	  r = 1;
  }
  function huan3(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "none";
	  img2.style.display = "block";
	  img3.style.display = "none";
	  img4.style.display = "none";
	  pi1.style.backgroundColor = "#EBEBEB";
	  pi2.style.backgroundColor = "#EBEBEB";
	  pi3.style.backgroundColor = "#36AB87";
	  pi4.style.backgroundColor = "#EBEBEB";
	  pi5.style.backgroundColor = "#EBEBEB";
	  pi1.style.color = "#000";
	  pi2.style.color = "#000";
	  pi3.style.color = "#FFF";
	  pi4.style.color = "#000";
	  pi5.style.color = "#000";
	  r = 2;
  }
  function huan4(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "none";
	  img2.style.display = "none";
	  img3.style.display = "block";
	  img4.style.display = "none";
	  pi1.style.backgroundColor = "#EBEBEB";
	  pi2.style.backgroundColor = "#EBEBEB";
	  pi3.style.backgroundColor = "#EBEBEB";
	  pi4.style.backgroundColor = "#36AB87";
	  pi5.style.backgroundColor = "#EBEBEB";
	  pi1.style.color = "#000";
	  pi2.style.color = "#000";
	  pi3.style.color = "#000";
	  pi4.style.color = "#FFF";
	  pi5.style.color = "#000";
	  r = 3;
  }
  function huan5(){
	  clearInterval(int);
      img0.style.display = "none";
	  img1.style.display = "none";
	  img2.style.display = "none";
	  img3.style.display = "none";
	  img4.style.display = "block";
	  pi1.style.backgroundColor = "#EBEBEB";
	  pi2.style.backgroundColor = "#EBEBEB";
	  pi3.style.backgroundColor = "#EBEBEB";
	  pi4.style.backgroundColor = "#EBEBEB";
	  pi5.style.backgroundColor = "#36AB87";
	  pi1.style.color = "#000";
	  pi2.style.color = "#000";
	  pi3.style.color = "#000";
      pi4.style.color = "#000";
	  pi5.style.color = "#FFF";
	  r = 4;
  }
  function gl1(){
	  var gl1 = document.getElementById("gl1");
      var gl2 = document.getElementById("gl2");
      var gl3 = document.getElementById("gl3");
      var gl4 = document.getElementById("gl4");
	  var glz1 = document.getElementById("glz1");
	  var glz2 = document.getElementById("glz2");
	  var glz3 = document.getElementById("glz3");
	  var glz4 = document.getElementById("glz4");
	  gl1.style.color = "#36AB87";
	  gl1.style.borderBottom = "4px solid #36AB87";
	  gl2.style.color = "#000";
	  gl2.style.borderBottom = "4px solid #EBEBEB";
	  gl3.style.color = "#000";
	  gl3.style.borderBottom = "4px solid #EBEBEB";
	  gl4.style.color = "#000";
	  gl4.style.borderBottom = "4px solid #EBEBEB";
	  glz1.style.display = "block";
	  glz2.style.display = "none";
	  glz3.style.display = "none";
	  glz4.style.display = "none";
  }
  function gl2(){
	  var gl1 = document.getElementById("gl1");
      var gl2 = document.getElementById("gl2");
      var gl3 = document.getElementById("gl3");
      var gl4 = document.getElementById("gl4");
	  var glz1 = document.getElementById("glz1");
	  var glz2 = document.getElementById("glz2");
	  var glz3 = document.getElementById("glz3");
	  var glz4 = document.getElementById("glz4");
	  gl2.style.color = "#36AB87";
	  gl2.style.borderBottom = "4px solid #36AB87";
	  gl1.style.color = "#000";
	  gl1.style.borderBottom = "4px solid #EBEBEB";
	  gl3.style.color = "#000";
	  gl3.style.borderBottom = "4px solid #EBEBEB";
	  gl4.style.color = "#000";
	  gl4.style.borderBottom = "4px solid #EBEBEB";
	  glz1.style.display = "none";
	  glz2.style.display = "block";
	  glz3.style.display = "none";
	  glz4.style.display = "none";
  }
  function gl3(){
	  var gl1 = document.getElementById("gl1");
      var gl2 = document.getElementById("gl2");
      var gl3 = document.getElementById("gl3");
      var gl4 = document.getElementById("gl4");
	  var glz1 = document.getElementById("glz1");
	  var glz2 = document.getElementById("glz2");
	  var glz3 = document.getElementById("glz3");
	  var glz4 = document.getElementById("glz4");
	  gl3.style.color = "#36AB87";
	  gl3.style.borderBottom = "4px solid #36AB87";
	  gl2.style.color = "#000";
	  gl2.style.borderBottom = "4px solid #EBEBEB";
	  gl1.style.color = "#000";
	  gl1.style.borderBottom = "4px solid #EBEBEB";
	  gl4.style.color = "#000";
	  gl4.style.borderBottom = "4px solid #EBEBEB";
	  glz1.style.display = "none";
	  glz2.style.display = "none";
	  glz3.style.display = "block";
	  glz4.style.display = "none";
  }
  function gl4(){
	  var gl1 = document.getElementById("gl1");
      var gl2 = document.getElementById("gl2");
      var gl3 = document.getElementById("gl3");
      var gl4 = document.getElementById("gl4");
	  var glz1 = document.getElementById("glz1");
	  var glz2 = document.getElementById("glz2");
	  var glz3 = document.getElementById("glz3");
	  var glz4 = document.getElementById("glz4");
	  gl4.style.color = "#36AB87";
	  gl4.style.borderBottom = "4px solid #36AB87";
	  gl2.style.color = "#000";
	  gl2.style.borderBottom = "4px solid #EBEBEB";
	  gl3.style.color = "#000";
	  gl3.style.borderBottom = "4px solid #EBEBEB";
	  gl1.style.color = "#000";
	  gl1.style.borderBottom = "4px solid #EBEBEB";
	  glz1.style.display = "none";
	  glz2.style.display = "none";
	  glz3.style.display = "none";
	  glz4.style.display = "block";
  }
  function denglu(){
      var denglu =  document.getElementById("denglu");
	  denglu.style.display = "block";
  }
  function guanbi(){
      var denglu =  document.getElementById("denglu");
	  denglu.style.display = "none";
  }
  function check(){
      var uname = document.getElementById("uname").value;
	  var upass = document.getElementById("upass").value;
	  var res = document.getElementById("res");
	  var span_p1 = document.getElementById("span_p1");
	  var toux = document.getElementById("toux");
	  var denglu =  document.getElementById("denglu");
	  if(uname.length==0){
		  res.innerHTML = "帐号为空，请重新输入！";
	  }else
	  if(upass.length==0){
		  res.innerHTML = "密码为空，请重新输入！";
	  }else
	  if(uname.length>10){
	      res.innerHTML = "您的帐号大于10位，有故意设长的嫌疑，请重新输入！";
	  }else
	  if(uname==window.localStorage.uname&&upass==window.localStorage.upass){
		  denglu.style.display = "none";
	      span_p1.innerHTML = "邢冲，欢迎登录！"
		  toux.src = "img/ali.png";
	  }else{
	      res.innerHTML = "帐号或密码错误";
	  }
  }
  function zhuce(){
      window.localStorage.uname = document.getElementById("uname").value;
	  window.localStorage.upass = document.getElementById("upass").value;
	  alert("注册成功");
  }
  function shipin(){
      var shipin =  document.getElementById("shipin");
	  shipin.style.display = "block";
  }
  function xiaopin(){
      var shipin =  document.getElementById("shipin");
	  shipin.style.display = "none";
  }