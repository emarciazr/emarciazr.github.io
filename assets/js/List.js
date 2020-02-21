var myArray = [
    {
        "Tipo": "Consulting Service",
        "Nombre": "Software Reverse Engineering",
        "Referencia": "detail.html?id=0",
        "Imagen":"images/p00.jpg",
        "Resumen": "Analysis with OllyDbg to a customer developed aplicattion with source code missing"   
    },
    {
        "Tipo": "Sofware Upgrade",
        "Nombre": "SATO labels on automated weighing system",
        "Referencia": "detail.html?id=1",
        "Imagen":"images/p01.jpg",
        "Resumen": "Software upgrade on Avery Weightronix Devices",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QRCode Device ID Label Printing",
        "Referencia": "detail.html?id=2",
        "Imagen":"images/p02.jpg",
        "Resumen": "Device ID Generator and QRCode Label printing",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Control de Bombas Punta Faro",
        "Referencia": "detail.html?id=3",
        "Imagen":"images/p03.jpg",
        "Resumen": "Real Time Monitoring automated sea water pump station",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "RPM Navico Shopfloor Control",
        "Referencia": "detail.html?id=4",
        "Imagen":"images/p04.jpg",
        "Resumen": "Real time Monitoring produccion process, Packing, QA, Reports"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Order Receipt",
        "Referencia": "detail.html?id=5",
        "Imagen":"images/p05.jpg" ,
        "Resumen": "Software for handheld terminal MC3190, scan an store data information from orders received"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Weighing & labeling Software",
        "Referencia": "detail.html?id=6",
        "Imagen":"images/p06.jpg" ,
        "Resumen": "Software for E1310 Avery Weightronix for dynamic weihging and aumatic labeling in dairy manufacturing.",
    },
    {
            "Tipo": "Software Upgrade",
            "Nombre": "Navico Process Integration",
            "Referencia": "detail.html?id=7",
            "Imagen":"images/p07.jpg" ,
            "Resumen": "Quality proccess validation connecting Packing, Content Assurance and Electical Test software",
    },
    {
        "Tipo": "Sofware Development",
        "Nombre": "Bafar Integration 920i scale in Automated Weighing System",
        "Referencia": "detail.html?id=8",
        "Imagen":"images/p08.jpg" ,
        "Resumen": "Programming 920i Rice Lake Weighing Device for high precision in dynamics weighing",
    },
    {
        "Tipo": "Software Consulting",
        "Nombre": "Plantronics Innovation Team",
        "Referencia": "detail.html?id=9",
        "Imagen":"images/p09.jpg" ,
        "Resumen": "Research on Wifi Technologies",
},
    {
        "Tipo": "Software Reengineering",
        "Nombre": "Navico Packing 2.0",
        "Referencia": "detail.html?id=10",
        "Imagen":"images/p10.jpg" ,
        "Resumen": "Reenginering and Optimization Software for serial and print ID labels in packing proccess",
    },
    {
        "Tipo": "Software Development",
        "Nombre": "XDCRS Software Serial Labels",
        "Referencia": "detail.html?id=11",
        "Imagen":"images/p11.jpg" ,
        "Resumen": "Software for serial and print ID labels for transducers",
    },
    {
        "Tipo": "Sofware Development",
        "Nombre": "Bafar EDI Automated Weighing System",
        "Referencia": "detail.html?id=12",
        "Imagen":"images/12.jpg" ,
        "Resumen": "EDI System between more than 20 Avery Weightronic scales and SAP  ",
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





