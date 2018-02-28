// JavaScript Document
var r1 = 135;
  var r2 = 135;
  var r3 = 135;
  var r4 = 135;
  var int1,in2,int3,int4;
  var mt1,mt2,mt3,mt4;
  var mar1,mar2,mar3,mar4;
  var mar11,mar12,mar13,mar14;
  var z = 0;
  /*..........................................huan1.............................................*/
  function huan1(){
	  r1-=5;
	  if(r1>=0){
	      mar1.style.marginTop = ""+r1+"px";
	  }else{
	      clearInterval(int1);
		  r1 = 0;
	  }
  }
  function qie1(){
	  mar1 = document.getElementById("jieshao1");
	  clearInterval(mt1);
      int1 = setInterval("huan1()",1);
  }
  function hui1(){
	  r1+=5;
	  if(r1<=135){
	      mar11.style.marginTop = ""+r1+"px";
	  }else{
	      clearInterval(mt1);
		  r1 = 135;
	  }
  }
  function qiehui1(){
	  mar11 = document.getElementById("jieshao1");
	  clearInterval(int1);
      mt1 = setInterval("hui1()",1);
  }
  /*..........................................huan1.............................................*/
  
  /*..........................................huan2.............................................*/
  function huan2(){
	  r2-=5;
	  if(r2>=0){
	      mar2.style.marginTop = ""+r2+"px";
	  }else{
	      clearInterval(int2);
		  r2 = 0;
	  }
  }
  function qie2(){
	  mar2 = document.getElementById("jieshao2");
	  clearInterval(mt2);
      int2 = setInterval("huan2()",1);
  }
  function hui2(){
	  r2+=5;
	  if(r2<=135){
	      mar12.style.marginTop = ""+r2+"px";
	  }else{
	      clearInterval(mt2);
		  r2 = 135;
	  }
  }
  function qiehui2(){
	  mar12 = document.getElementById("jieshao2");
	  clearInterval(int2);
      mt2 = setInterval("hui2()",1);
  }
  /*..........................................huan2.............................................*/
  
  /*..........................................huan3.............................................*/
  function huan3(){
	  r3-=5;
	  if(r3>=0){
	      mar3.style.marginTop = ""+r3+"px";
	  }else{
	      clearInterval(int3);
		  r3 = 0;
	  }
  }
  function qie3(){
	  mar3 = document.getElementById("jieshao3");
	  clearInterval(mt3);
      int3 = setInterval("huan3()",1);
  }
  function hui3(){
	  r3+=5;
	  if(r3<=135){
	      mar13.style.marginTop = ""+r3+"px";
	  }else{
	      clearInterval(mt3);
		  r3 = 135;
	  }
  }
  function qiehui3(){
	  mar13 = document.getElementById("jieshao3");
	  clearInterval(int3);
      mt3 = setInterval("hui3()",1);
  }
  /*..........................................huan3.............................................*/
  
  /*..........................................huan4.............................................*/
  function huan4(){
	  r4-=5;
	  if(r4>=0){
	      mar4.style.marginTop = ""+r4+"px";
	  }else{
	      clearInterval(int4);
		  r4 = 0;
	  }
  }
  function qie4(){
	  mar4 = document.getElementById("jieshao4");
	  clearInterval(mt4);
      int4 = setInterval("huan4()",1);
  }
  function hui4(){
	  r4+=5;
	  if(r4<=135){
	      mar14.style.marginTop = ""+r4+"px";
	  }else{
	      clearInterval(mt4);
		  r4 = 135;
	  }
  }
  function qiehui4(){
	  mar14 = document.getElementById("jieshao4");
	  clearInterval(int4);
      mt4 = setInterval("hui4()",1);
  }
  /*..........................................huan4.............................................*/
  
  /*..........................................zhongh.............................................*/
  function zhongh(){
	  var div1 = document.getElementById("div1");
	  var div2 = document.getElementById("div2");
	  var div3 = document.getElementById("div3");
	  var div4 = document.getElementById("div4");
	  var div5 = document.getElementById("div5");
	  var dv1,dv2,dv3,dv4,dv5;
	      if(z==0){
			  dv1 = div1.style.backgroundImage;
		      dv2 = div2.style.backgroundImage;
			  dv3 = div3.style.backgroundImage;
			  dv4 = div4.style.backgroundImage;
			  dv5 = div5.style.backgroundImage;
			  div1.style.backgroundImage = dv2;
			  div2.style.backgroundImage = dv3;
			  div3.style.backgroundImage = dv4;
			  div4.style.backgroundImage = dv5;
			  div5.style.backgroundImage = dv1;
			  z++;
		  }else if(z==1){
		      dv1 = div1.style.backgroundImage;
		      dv2 = div2.style.backgroundImage;
			  dv3 = div3.style.backgroundImage;
			  dv4 = div4.style.backgroundImage;
			  dv5 = div5.style.backgroundImage;
			  div1.style.backgroundImage = dv2;
			  div2.style.backgroundImage = dv3;
			  div3.style.backgroundImage = dv4;
			  div4.style.backgroundImage = dv5;
			  div5.style.backgroundImage = dv1;
			  r++;
		  }else if(z==2){
			  dv1 = div1.style.backgroundImage;
		      dv2 = div2.style.backgroundImage;
			  dv3 = div3.style.backgroundImage;
			  dv4 = div4.style.backgroundImage;
			  dv5 = div5.style.backgroundImage;
			  div1.style.backgroundImage = dv2;
			  div2.style.backgroundImage = dv3;
			  div3.style.backgroundImage = dv4;
			  div4.style.backgroundImage = dv5;
			  div5.style.backgroundImage = dv1;
			  z++;
		  }else if(z==3){
		      dv1 = div1.style.backgroundImage;
		      dv2 = div2.style.backgroundImage;
			  dv3 = div3.style.backgroundImage;
			  dv4 = div4.style.backgroundImage;
			  dv5 = div5.style.backgroundImage;
			  div1.style.backgroundImage = dv2;
			  div2.style.backgroundImage = dv3;
			  div3.style.backgroundImage = dv4;
			  div4.style.backgroundImage = dv5;
			  div5.style.backgroundImage = dv1;
			  z++;
		  }else{
		      dv1 = div1.style.backgroundImage;
		      dv2 = div2.style.backgroundImage;
			  dv3 = div3.style.backgroundImage;
			  dv4 = div4.style.backgroundImage;
			  dv5 = div5.style.backgroundImage;
			  div1.style.backgroundImage = dv2;
			  div2.style.backgroundImage = dv3;
			  div3.style.backgroundImage = dv4;
			  div4.style.backgroundImage = dv5;
			  div5.style.backgroundImage = dv1;
			  z-=4;
		  }
  }
  var zh;
  function zhonghting(){
	  var ceshilu = document.getElementById("ceshilu");
      var tinglu = document.getElementById("tinglu");
      clearInterval(zh);
	  ceshilu.style.display = "block";
	  tinglu.style.display = "none";
  }
  function zhonghjixu(){
	  var ceshilu = document.getElementById("ceshilu");
      var tinglu = document.getElementById("tinglu");
      zh = setInterval("zhongh()",100);
	  ceshilu.style.display = "none";
	  tinglu.style.display = "block";
  }
  /*..........................................zhongh.............................................*/
