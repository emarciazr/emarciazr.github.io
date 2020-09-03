var myArray = [
    {
        "Tipo": "Software Upgrade",
        "Nombre": "BCS and PCBA Software Reverse Engineering",
        "Referencia": "detail.html?id=0",
        "Imagen":"images/p00.jpg",
        "Resumen": "Analysis with OllyDbg to a customer developed application with source code missing."   
    },
    {
        "Tipo": "Software Upgrade",
        "Nombre": "SATO labels on automatic weighing system",
        "Referencia": "detail.html?id=1",
        "Imagen":"images/p01.jpg",
        "Resumen": "Upgrade on Bafar AWT Weighing Software to print labels on SATO Printer.",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QRCode Device ID Label Printing",
        "Referencia": "detail.html?id=2",
        "Imagen":"images/p02.jpg",
        "Resumen": "Device ID Generator and QRCode Label printing fro lowcost devices.",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Control de Bombas Punta Faro",
        "Referencia": "detail.html?id=3",
        "Imagen":"images/p03.jpg",
        "Resumen": "Real Time Monitoring on automatic sea water pump station.",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "RPM Navico Shopfloor Control",
        "Referencia": "detail.html?id=4",
        "Imagen":"images/p04.jpg",
        "Resumen": "Real time Monitoring production process, Packing, QA, FishMarket, Test Results, Reports."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Order Receipt",
        "Referencia": "detail.html?id=5",
        "Imagen":"images/p05.jpg" ,
        "Resumen": "Software for handheld terminal MC3190, scan an store data information from orders received."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Weighing & labeling Software",
        "Referencia": "detail.html?id=6",
        "Imagen":"images/p06.jpg" ,
        "Resumen": "Software for E1310 Avery Weightronix for dynamic weihging and automatic labeling in dairy manufacturing."
    },
    {
        "Tipo": "Software Upgrade",
        "Nombre": "Navico Process Validation Integration",
        "Referencia": "detail.html?id=7",
        "Imagen":"images/pic02.jpg" ,
        "Resumen": "Unit validation on Packing process to look PASS results on Content Assurance SW, weight and Electical Test Stations."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Bafar 920i Rice Lake Integration device",
        "Referencia": "detail.html?id=8",
        "Imagen":"images/p08.jpg" ,
        "Resumen": "Integrate new hardware in Bafar SICOBA System, TCPIP/Sockets Comunnication."
    },
    {
        "Tipo": "Software Consulting",
        "Nombre": "Plantronics Innovation Team",
        "Referencia": "detail.html?id=9",
        "Imagen":"images/p09.jpg" ,
        "Resumen": "Research on Wifi Technologies"  
    },
    {
        "Tipo": "Software Reengineering",
        "Nombre": "Navico Packing 2.0",
        "Referencia": "detail.html?id=10",
        "Imagen":"images/p10.jpg" ,
        "Resumen": "Reenginering and Optimization Software for serial and print ID labels in packing proccess."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "XDCRS Software Serial Labels",
        "Referencia": "detail.html?id=11",
        "Imagen":"images/p11.jpg" ,
        "Resumen": "Software for serialization and print ID labels for transducers products."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Bafar EDI Automated Weighing System",
        "Referencia": "detail.html?id=12",
        "Imagen":"images/p12.jpg" ,
        "Resumen": "EDI System between more than 20 Avery Weightronic scales and SAP."
    } ,
    {
        "Tipo": "Software Development",
        "Nombre": "Recycle Center Weighing System",
        "Referencia": "detail.html?id=13",
        "Imagen":"images/p13.jpg",
        "Resumen": "Software control inventory and Buy/Sell recycle materials with data transfers to truck and floor scales." 
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Early years Weighing Systems",
        "Referencia": "detail.html?id=14",
        "Imagen":"images/p14.jpg",
        "Resumen": "Resume of weighing applications developed in 2007-2009",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Early years Control and Automated Systems",
        "Referencia": "detail.html?id=15",
        "Imagen":"images/p15.jpg",
        "Resumen": "Resume of control, machine vision, electrical test and data monitoring applications 1998-2005",
    }
]

var itm0 = Item(0);
var itm1 = Item(1);
var itm2 = Item(2);
var itm3 = Item(3);
var itm4 = Item(4);
var itm5 = Item(5);
var itm6 = Item(6);
var itm7 = Item(7);
var itm8 = Item(8);
var itm9 = Item(9);
var itm10 = Item(10);
var itm11 = Item(11);
var itm12 = Item(12);
var itm13 = Item(13);
var itm14 = Item(14);
var itm15 = Item(15);
document.getElementById("itm0").innerHTML = itm0;
document.getElementById("itm1").innerHTML = itm1;
document.getElementById("itm2").innerHTML = itm2;
document.getElementById("itm3").innerHTML = itm3;
document.getElementById("itm4").innerHTML = itm4;
document.getElementById("itm5").innerHTML = itm5;
document.getElementById("itm6").innerHTML = itm6;
document.getElementById("itm7").innerHTML = itm7;
document.getElementById("itm8").innerHTML = itm8;
document.getElementById("itm9").innerHTML = itm9;
document.getElementById("itm10").innerHTML = itm10;
document.getElementById("itm11").innerHTML = itm11;
document.getElementById("itm12").innerHTML = itm12;
document.getElementById("itm13").innerHTML = itm13;
document.getElementById("itm14").innerHTML = itm14;
document.getElementById("itm15").innerHTML = itm15;
function Item(i)
{
    var txt="";
 
        txt = 
        //'<article>'+
        '<header>' +
            '<span class="date">'+myArray[i].Tipo+'</span>'+
            '<h2><a href="'+myArray[i].Referencia+'">'+myArray[i].Nombre+'</a></h2>'+
        '</header>'+
        '<a href="'+myArray[i].Referencia+'" class="image fit"><img src="'+myArray[i].Imagen+'" alt="" /></a>'+
        '<p>'+myArray[i].Resumen+'.</p>'+
        '<ul class="actions special">'+
            '<li><a href="'+myArray[i].Referencia+'" class="button">View More</a></li>'+
        '</ul>';
        //+'</article>';
         return txt;

}





