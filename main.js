function rango()
{
  var a=Number(document.getElementById('atk').value);
  var aacc=Number(document.getElementById('aac').value);
  var atabl=Number(document.getElementById('atab').value);
  var atot=a+aacc+atabl;


  var p=Number(document.getElementById('pot').value);
  var ptabl=Number(document.getElementById('ptab').value);
  var ptot=p+ptabl;



  var au=Number(document.getElementById('aum').value);
  var ob=Number(document.getElementById('obj').value);
  var c = document.getElementById('cri').checked
  {
    if(c == true) {c = 1.5;}
    else {c = 1;}
  }
  var s = document.getElementById('sup').checked
  {
    if(s == true) {s = 2;}
    else {s = 1;}
  }
  var pr=Number(document.getElementById('pru').value);
  var res=Math.floor(atot*ptot/pr)*ob*au*c*s);
  document.getElementById('res').value = res;
  var red=Math.floor(parseInt(atot*ptot/pr)*ob*au*c*s);
  document.getElementById('red').value = red;

  var val1=Math.floor(res*0.99);
  document.getElementById('val1').value = val1;
  var val2=Math.floor(res*0.98);
  document.getElementById('val2').value = val2;
  var val3=Math.floor(res*0.97);
  document.getElementById('val3').value = val3;
  var val4=Math.floor(res*0.96);
  document.getElementById('val4').value = val4;
  var val5=Math.floor(res*0.95);
  document.getElementById('val5').value = val5;
  var val6=Math.floor(res*0.94);
  document.getElementById('val6').value = val6;
  var val7=Math.floor(res*0.93);
  document.getElementById('val7').value = val7;
  var val8=Math.floor(res*0.92);
  document.getElementById('val8').value = val8;
  var val9=Math.floor(res*0.91);
  document.getElementById('val9').value = val9;
  var val10=Math.floor(res*0.90);
  document.getElementById('val10').value = val10;
  var vali=Math.floor(res*0.90);
  document.getElementById('vali').value = vali;

}
