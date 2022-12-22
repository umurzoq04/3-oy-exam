var hisob1=0;var hisob_name="";
function hisob(a){
  
if(a==1){
document.getElementById('bg1').style.backgroundColor='yellowgreen';
document.getElementById('bg2').style.backgroundColor='white';
document.getElementById('bg3').style.backgroundColor='white';
hisob1=10;
hisob_name="25sm";
}
if(a==2){
    document.getElementById('bg2').style.backgroundColor='yellowgreen';
document.getElementById('bg1').style.backgroundColor='white';
document.getElementById('bg3').style.backgroundColor='white';
hisob1=12;
hisob_name="30sm";

}
if(a==3){
    document.getElementById('bg3').style.backgroundColor='yellowgreen';
document.getElementById('bg2').style.backgroundColor='white';
document.getElementById('bg1').style.backgroundColor='white';
hisob1=15;
hisob_name="35sm";

}


}


var hisob3=0; var hisob3_name="";
var i11=0;var i12=0;

function uch(c){


    if(c==1){i11++;
        if(i11%2==1)
{   hisob3+=3; hisob3_name+="Peper ";}
if(i11%2==0){ hisob3-=3;  hisob3_name=hisob3_name.replace("Peper",'').trim();}

     
    }
  


        if(c==2){i12++;
            if(i12%2==1)
    {   hisob3+=3; hisob3_name+="Sausages ";}
    if(i12%2==0){   hisob3-=3; hisob3_name=hisob3_name.replace("Sausages",'').trim();}
    
         
        }
    
    }   

var hisob2=0; hisob2_name="";
var i1=0;var i2=0;var i3=0;var i4=0;var i5=0; var i6=0;
function ikki(b){


    if(b==1){i1++;
        if(i1%2==1)
{   hisob2+=5; hisob3_name+="Tomato ";}
if(i1%2==0){   hisob2-=5; hisob3_name=hisob3_name.replace("Tomato",'').trim();}

     
    }


    if(b==2){i2++;
        if(i2%2==1)
{   hisob2+=5; hisob3_name+="Turkey meat";}
if(i2%2==0){   hisob2-=5; hisob3_name=hisob3_name.replace("Turkey meat",'').trim();}

     
    }
    
    if(b==3){i3++;
        if(i3%2==1)
{   hisob2+=5; hisob3_name+="Olive";}
if(i3%2==0){   hisob2-=5; hisob3_name=hisob3_name.replace("Olive",'').trim();}

     
    }
    
    if(b==4){i4++;
        if(i4%2==1)
{   hisob2+=5; hisob3_name+="Picled cucumber";}
if(i4%2==0){   hisob2-=5; hisob3_name=hisob3_name.replace("Picled cucumber",'').trim();}

     
    }
    
    if(b==5){i5++;
        if(i5%2==1)
{   hisob2+=5;  hisob3_name+="Mushroom";}
if(i5%2==0){   hisob2-=5; hisob3_name=hisob3_name.replace("Mushroom",'').trim();}

     
    }
    
    if(b==6){i6++;
        if(i6%2==1)
{   hisob2+=5; hisob3_name+="Hourse meat";}
if(i6%2==0){   hisob2-=5; hisob3_name=hisob3_name.replace("Hours meat",'').trim();}

     
    }
    
   








}
function save(){

let ism=document.getElementById('ism').value;
let tel=document.getElementById('tel').value;
let address=document.getElementById('address').value;
let choose=document.getElementById('choose').value;
var choose_name="";
if(choose==10){
    choose_name="Thin";
    }
    if(choose==12){
        choose_name="Medium";
        }
        if(choose==15){
            choose_name="Thick";
            }
var a=Number(hisob1);
var b=Number(hisob2);
var c=Number(hisob3);
var d=Number(choose);
var jami=a+c+b+d;
document.getElementById('chiqar').innerHTML=hisob3_name+"  "+choose_name+" "+hisob_name+" "+choose+"$ "+hisob1+"$   "+hisob2+"$  "+hisob3+"$"+jami+"$";

}