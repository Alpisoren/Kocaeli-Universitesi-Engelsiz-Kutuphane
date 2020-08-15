
 
function boyutdegistir(kaynak,deger)
{
var hedef=document.getElementById(kaynak);
var hedeffont=parseInt(hedef.style.fontSize,10)
hedef.style.fontSize = (hedeffont+parseInt(deger,10)) + 'px';
}
function varsayılanboyut(kaynak)
{
var hedef=document.getElementById(kaynak);
var hedeffont=parseInt(hedef.style.fontSize,10)
hedef.style.fontSize = (17) + 'px';
document.getElementById("icerik").style.backgroundColor="#000000";
document.getElementById("icerik").style.color="#FF0";
}

	
var renksay=0;
function renkdegistir()
{
renksay++;
if(renksay%2==0)
{
	document.getElementById("icerik").style.backgroundColor="#ffffff";
document.getElementById("icerik").style.color="#000000";
	}else{
document.getElementById("icerik").style.backgroundColor="#000000";
document.getElementById("icerik").style.color="#ffffff";
		}

if(renksay>4)
{
	renksay==0;
	}
}


//ses js
var sesackapasay=0;
function tooglebuttonstartstop(ses)
{
	
	sesackapasay++;
var audio = document.getElementById(ses);
  if(sesackapasay==1)
{
        
        audio.play();
}

else
{
	audio.pause();
	
	}

if(sesackapasay==2)
{
	sesackapasay=0;
	}

}

function start(ses)
{
  
        var audio = document.getElementById(ses);
        audio.play();
 
}
function pause(ses)
{
        var audio = document.getElementById(ses);
        audio.pause();
  
}


//ses js