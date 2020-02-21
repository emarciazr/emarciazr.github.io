var myArray = [
    {
        "Tipo": "Consulting Service",
        "Nombre": "Software Reverse Engineering",
        "Referencia": "detail.html?id=0",
        "Imagen":"images/p01.jpg",
        "Resumen": "Analysis with OllyDbg to a customer developed aplicattion with source code missing"   
    },
    {
        "Tipo": "Sofware Development 01",
        "Nombre": "QRCode DeviceID Label Printing",
        "Referencia": "detail.html?id=1",
        "Imagen":"images/pic02.jpg",
        "Resumen": "Device ID Generator and QRCode Label printing"
    },
    {
        "Tipo": "Sofware Development 02",
        "Nombre": "QRCode DeviceID Label Printing",
        "Referencia": "detail.html?id=1",
        "Imagen":"images/pic02.jpg",
        "Resumen": "Device ID Generator and QRCode Label printing"
    },
    {
        "Tipo": "Sofware Development 03",
        "Nombre": "QRCode DeviceID Label Printing",
        "Referencia": "detail.html?id=1",
        "Imagen":"images/pic02.jpg",
        "Resumen": "Device ID Generator and QRCode Label printing"
    }]

var itm0 = Item(0)
var itm1 = Item(1)
var itm2 = Item(2)
var itm3 = Item(3)
var foo = AllItems()

document.getElementById("itm0").innerHTML = itm0;
document.getElementById("itm1").innerHTML = itm1;
document.getElementById("itm2").innerHTML = itm2;
document.getElementById("itm3").innerHTML = itm3;
 document.getElementById("foo").innerHTML = foo;
 function AllItems()
 {
    var txt='<section class="posts">';
    for (var i = 0 ; i<myArray.length ; i++)
    {
        txt = txt +  
        '<article>' +
        '<header>' +
            '<span class="date">'+myArray[i].Tipo+'</span>'+
            '<h2><a href="'+myArray[i].Referencia+'">'+myArray[i].Nombre+'</a></h2>'+
        '</header>'+
        '<a href="'+myArray[i].Referencia+'" class="image fit"><img src="'+myArray[i].Imagen+'" alt="" /></a>'+
        '<p>'+myArray[i].Resumen+'.</p>'+
        '<ul class="actions special">'+
            '<li><a href="'+myArray[i].Referencia+'" class="button">View More</a></li>'+
        '</ul>'+
        '</article>';
    }
    txt = txt +'</section>'
    return txt;
}
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





