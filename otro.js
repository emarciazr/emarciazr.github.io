var myArray = [
    {
        "Tipo": "Software Upgrade",
        "Nombre": "BCS & PBCBA Software Reverse Engineering",
        "Referencia": "detail.html?id=0",
        "Imagen":"images/p01.jpg",
        "Resumen": "Analysis with OllyDbg to a customer developed aplicattion with source code missing"  ,
        "Tools":"OllyDBG & ASM",
        "Cliente": "Navico",
        "Fecha":"January 2020",
        "Descripcion":"In the last two years Navico migrate all DB Servers from SQL Server 2015 to SQL Server 2019.<br>"+
                     "The min were obligated to mantain one Server with and old database, because they have two old applications, with connections to this old database. <br>"+
                     "I analyse the exe files with Ollydbg to add a new db connection string and re-assemble the exe file. "
    },
    {
        "Tipo": "Sofware Development",
        "Nombre": "QRCode DeviceID Label Printing",
        "Referencia": "detail.html?id=1",
        "Imagen":"images/pic02.jpg",
        "Resumen": "Device ID Generator and QRCode Label printing",
        "Tools":"OllyDBG & ASM",
        "Cliente": "Navico",
        "Fecha":"January 2020",
        "Descripcion":"kkk<br> jjjjjjjj <br>ggggg"
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

const urlParams = new URLSearchParams(window.location.search.substring(1));
var  idProject = urlParams.get("id");


document.getElementById("Tipo").innerHTML = myArray[idProject].Tipo
document.getElementById("Nombre").innerHTML = myArray[idProject].Nombre;
document.getElementById("Cliente").innerHTML = myArray[idProject].Cliente;
document.getElementById("Descripcion").innerHTML = myArray[idProject].Descripcion;
document.getElementById("Fecha").innerHTML = myArray[idProject].Fecha;
document.getElementById("Tools").innerHTML = myArray[idProject].Tools;
document.getElementById("Imagen").innerHTML = '<img src= "'+myArray[idProject].Imagen+'" alt="" />';

