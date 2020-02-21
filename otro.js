var myArray = [
    {
        "Tipo": "Software Upgrade",
        "Nombre": "BCS and PCBA Software Reverse Engineering",
        "Referencia": "detail.html?id=0",
        "Imagen":"<img src= \"images/p00.jpg\" alt=\"\" />",
        "Resumen": "Analysis with OllyDbg to a customer developed aplicattion with source code missing",
        "Tools":"OllyDBG & ASM",
        "Cliente": "Navico, Ensenada",
        "Fecha":"January 2020",
        "Roles":"Analyst, Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":"In the last two years, Navico had migrated all their DB servers from SQL Server 2015 to 2019.<br>"+
        "The main requirement was to keep one server with its old DBs structures to keep their old labelling applications running.<br>"+ 
        "My job was to disassemble and analyze current executable files by using Ollydbg and add  new DB connection strings, then reassemble and deploy the modified files<br>"
    },
    {
        "Tipo": "Sofware Upgrade",
        "Nombre": "SATO labels on automated weighing System",
        "Referencia": "detail.html?id=2",
        "Imagen":"<video src=\"images/v01.mp4\" autoplay muted loop></video>",
        "Resumen": "Software upgrade on Avery Weightronix Devices",
        "Tools":" Ztools AWT Basic, SATO E Pro  ",
        "Cliente": "Grupo Bafar, Chihuahua",
        "Fecha":"September, 2019",
        "Roles":" Developer, Tester, Deployment",
        "ProjectSize": "Small, product owner and one developer",
        "Descripcion":"Weighing software migration from E1310 Avery Weightronics(AWT) to ZM510 AWT.<br>"+
        "Upgrade label templates to include new TIF regulations and SATO Automated Printers<br>"+
        "Also create different label sizes with QRCode web page link to automated registration<br>"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QRCode DeviceID Label Printing",
        "Referencia": "detail.html?id=1",
        "Imagen":"<img src= \"images/p02.jpg\" alt=\"\" />",
        "Resumen": "Device ID Generator and QRCode Label printing",
        "Tools":"Visual studio 2013 VB .NET, SQL SERVER",
        "Cliente": "Navico, Ensenada",
        "Fecha":"July 2019",
        "Roles":"Analyst, Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":"The most of Navico devices have an on powering method to register device with a unique 12 characters Device ID.<br>"+
        "Low Cost models, don't have this automatic method. This software generate the Device ID encoding part number, serial and family<br>"+
        "Also create different label sizes with QRCode web page link to automated registration<br>"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Control de Bombas Punta Faro",
        "Referencia": "detail.html?id=2",
        "Imagen":"<a href = \"http://fcm.ens.uabc.mx/~bombas/\" target=\"_blank\"> <img src= \"images/p03.jpg\" alt=\"\" /></a>+",
        "Resumen": "Real Time Monitoring automated sea water pump station",
        "Tools": "Visual studio 2008 VB .NET, HTML, PHP, Rockwell Studio, Advanced HMI, MySQL",
        "Cliente": "UABC, Ensenada",
        "Fecha":"April 2015",
        "Roles":"Desktop & Web Developer, Tester, Deployment",
        "ProjectSize": "Medium, product ownwe, one sw developer and one hw developer",
        "Descripcion":"Real Time Monitoring sea water pump station, automated by Allen Bradley 1769-L33ER PLC.<br>"+
        "The pump station send water to three sea water tanks. The water is used for aquaculture research.<br>"+
        "My Job was to develop software to load and config operation parameter, receive control and data signals from PLC to store on MySQL DB and"+
        "<a href = \"http://fcm.ens.uabc.mx/~bombas/\" target=\"_blank\"> web page</a> developed with PHP to Show system current state."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "RPM Navico Shopfloor Control",
        "Referencia": "detail.html?id=3",
        "Imagen":"<img src= \"images/p04.jpg\" alt=\"\" /></a>+",
        "Resumen": "Real time Monitoring produccion process, Packing, QA, Reports",
        "Tools": "Visual studio 2012 C#,VB .NET, HTML, ASP, MySQL, SQL Server",
        "Cliente": "Navico, Ensenada",
        "Fecha":"February 2015 - September 2016",
        "Roles":"Project Manager, Analyst, Desktop Developer, Tester, Deployment",
        "ProjectSize": "Big, 10 stakeholders, one product owner, one documentary and three developers",
        "Descripcion":"Designed and developed a custom MRP System that among other things automates the "+
        "processing of production data that is used for their metrics to better plan their production."+
        "Included modules were: production shift management, production planning, production "+
        "results, product catalogs and reports"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Order Receipt",
        "Referencia": "detail.html?id=5",
        "Imagen":"images/p05.jpg" ,
        "Resumen": "Software for handheld terminal MC3190, scan an store data information from orders received",
        "Tools": "Visual studio 2013,VB .NET, SQL Server CE, Windows CE, windows 6.0",
        "Cliente": "QDL, Chihuahua",
        "Fecha":"May 2014",
        "Roles":"Analyst, hand held Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":""
    }]

const urlParams = new URLSearchParams(window.location.search.substring(1));
var  idProject = urlParams.get("id");


document.getElementById("Tipo").innerHTML = myArray[idProject].Tipo
document.getElementById("Proyecto").innerHTML = myArray[idProject].Nombre;
document.getElementById("Titulo").innerHTML = myArray[idProject].Nombre;
document.getElementById("Cliente").innerHTML = myArray[idProject].Cliente;
document.getElementById("Descripcion").innerHTML = myArray[idProject].Descripcion;
document.getElementById("Fecha").innerHTML = myArray[idProject].Fecha;
document.getElementById("Tools").innerHTML = myArray[idProject].Tools;
document.getElementById("Roles").innerHTML = myArray[idProject].Roles;
document.getElementById("Imagen").innerHTML = myArray[idProject].Imagen;
document.getElementById("Tama").innerHTML = myArray[idProject].ProjectSize;

