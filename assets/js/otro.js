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
        "My job was to disassemble and analyze current executable files by using Ollydbg and add  new DB connection strings, then reassemble and deploy the modified files.<br>"
    },
    {
        "Tipo": "Software Upgrade",
        "Nombre": "SATO labels on automatic weighing System",
        "Referencia": "detail.html?id=1",
        "Imagen":"<video src=\"images/v01.mp4\" autoplay muted loop></video>",
        "Resumen": "Software upgrade on Avery Weightronix Devices",
        "Tools":" Ztools AWT Basic, SATO E Pro  ",
        "Cliente": "Grupo Bafar, Chihuahua",
        "Fecha":"September, 2019",
        "Roles":" Developer, Tester, Deployment",
        "ProjectSize": "Small, product owner and one developer",
        "Descripcion":"Weighing software migration from E1310 Avery Weightronics(AWT) to ZM510 AWT.<br>"+
        "Upgrade label templates to include new TIF regulations and SATO Automated Printers<br>"+
        "Also create different label sizes with QRCode web page link to automated registration.<br>"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QRCode DeviceID Label Printing",
        "Referencia": "detail.html?id=2",
        "Imagen":"<img src= \"images/p02.jpg\" alt=\"\" />",
        "Resumen": "Device ID Generator and QRCode Label printing",
        "Tools":"Visual studio 2013 VB .NET, SQL SERVER",
        "Cliente": "Navico, Ensenada",
        "Fecha":"July 2019",
        "Roles":"Analyst, Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":"The most of Navico devices have an on powering method to register device with a unique 12 characters Device ID.<br>"+
        "Low Cost models, don't have this automatic method. This software generate the Device ID encoding part number, serial and family<br>"+
        "Also create different label sizes with QRCode web page link to automated registration.<br>"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Control de Bombas Punta Faro",
        "Referencia": "detail.html?id=3",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><a href = \"http://fcm.ens.uabc.mx/~bombas/\" target=\"_blank\"><img src=\"images/p03.jpg\" alt=\"\" /></a></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p03_1.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p03_2.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
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
        "Referencia": "detail.html?id=4",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p04.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p04_1.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p04_2.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p04_3.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p04_4.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p04_5.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Real time Monitoring produccion process, Packing, QA, Reports",
        "Tools": "Visual studio 2012 C#,VB .NET, HTML, ASP, MySQL, SQL Server",
        "Cliente": "Navico, Ensenada",
        "Fecha":"February 2015 - September 2016",
        "Roles":"Project Manager, Analyst, Desktop Developer, Tester, Deployment",
        "ProjectSize": "Big, 10 stakeholders, one product owner, one documentary and three developers",
        "Descripcion":"Designed and developed a custom MRP System that among other things automates the "+
        "processing of production data that is used for their metrics to better plan their production."+
        " Included modules were: production shift management, production planning, production "+
        "results, product catalogs and reports."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Order Receipt",
        "Referencia": "detail.html?id=5",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p05_1.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p05_2.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p05_3.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Software for handheld terminal MC3190, scan an store data information from orders received.",
        "Tools": "Visual studio 2013,VB .NET, SQL Server CE, Windows CE, windows 6.0",
        "Cliente": "QDL, Chihuahua",
        "Fecha":"May 2014",
        "Roles":"Analyst, hand held Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":"Weighing Dinamyc Application for dairy industry, process work order, weight rejects and Desktop software to send/receive data from scale."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Weighing & labeling Software",
        "Referencia": "detail.html?id=6",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p06.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p06_1.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p06_2.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p06_3.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Dynamic weighing system and labeling in dairy manufacturing.",
        "Tools": "E1310 Simposer, visual studio 20005,VB .NET, Paradox tables",
        "Cliente": "QDL, Chihuahua",
        "Fecha":"June 2013",
        "Roles":"Analyst, weighing device and desktop Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":"Weighing Dinamyc Application for dairy industry, process work order, weight rejects and Desktop software to send/receive data from scale."
    },
    {
        "Tipo": "Software Upgrade",
        "Nombre": "Navico Process Integration",
        "Referencia": "detail.html?id=7",
        "Imagen":"<img src= \"images/p07.jpg\" alt=\"\" /></a>",
        "Resumen": "Quality proccess validation connecting Packing, Content Assurance and Electical Test software",
        "Tools": "Visual studio 2005,VB .NET, SQL Server",
        "Cliente": "Navico, Ensenada",
        "Fecha":"August 2013",
        "Roles":"Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":"Unit validation in packing software to confirm that packed units passing from other validation process<br>"+
        "Navico Packing communicates with:<br>"+
        "-Content Assurance Software to verify than the unit has all the elements in the pack box<br>"+
        "-QSOFT SPEA Software to validate Test electrical Results<br>"+
        "-Weighing Device to validate unit weight.<br>"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Bafar 920i Rice Lake Integration devices",
        "Referencia": "detail.html?id=8",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p08.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Integrate new hardware in Bafar SICOBA System, TCPIP/Sockets Comunnication.",
        "Tools":"iRev Rice Lake (Pascal), TCP/IP Sockets ",
        "Cliente": "Grupo Bafar, Chihuahua",
        "Fecha":"August, 2010",
        "Roles":"Weighing Devices Developer",
        "ProjectSize": "Medium, product owner and two developer, multiple devices",
        "Descripcion":"Programming 920i Rice Lake Weighing Device for high precision dynamic weighing<br>"+
        "Update SICOBA communication protocol to send/receive data fron scales using TCPIP/Sockets"+
        "Migrate code form E1310 AWT to 920i RL"
    },
    {
        "Tipo": "Software Consulting",
        "Nombre": "Plantronics Innovation Team",
        "Referencia": "detail.html?id=9",
        "Imagen":"<img src= \"images/p09.jpg\" alt=\"\" /></a>",
        "Resumen": "Research on Wifi Technologies",
        "Tools": "Visual studio 2005,VB .NET, C++",
        "Cliente": "Plantronics, Tijuana",
        "Fecha":"November 2011 - January 2013",
        "Roles":"Researcher, Analyst",
        "ProjectSize": "Medium, three developer and five PHD Researchers",
        "Descripcion":"Member of R&D team in Design Center<br>"+
        "• Research on Wi-Fi Direct Technologies applied on wireless headsets.<br>"+
        "• Project documentation to submit government federal funds<br>"+
        "• Implementation of a Wi-Fi headset Prototype with text to voice cloud services.<br>"
    },
    {
        "Tipo": "Software Reengineering",
        "Nombre": "Navico Packing 2.0",
        "Referencia": "detail.html?id=10",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p10.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p10_1.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p10_2.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p10_3.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Reenginering and Optimization Software for serial and print ID labels in packing proccess",
        "Tools": "Visual studio 2005,VB .NET, SQL Server",
        "Cliente": "Navico, Ensenada",
        "Fecha":"October 2010",
        "Roles":"Developer",
        "ProjectSize": "Small, one Developer",
        "Descripcion":"Navico Packing is a customer application for counting and labeling all the units that will be shipping to an other Navico logistic centers.<br"+
        "This applicationn was developed on 2007 without code optimization. My job  consits on code optimaztion and template manager to esay integrartion of new labels formats."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "XDCRS Software Serial Labels",
        "Referencia": "detail.html?id=11",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p11.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Software for serial and print ID labels for transducers",
        "Tools": "Visual studio 2005,VB .NET, SQL Server",
        "Cliente": "Navico, Ensenada",
        "Fecha":"March 2010",
        "Roles":"Developer",
        "ProjectSize": "Small, one Developer",
        "Descripcion":"The first version of this software was created on 2010 to create labels for a new tracking laber for transducers part numbers."+
        "The product design the product has been changing over the years. New versions create serial and units on main manufacturing ERP. "
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Bafar EDI Automated Weighing System",
        "Referencia": "detail.html?id=12",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><video src=\"images/bafar.mp4\" autoplay muted loop></video></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p12_1.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p12_3.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "EDI System between more than 20 Avery Weightronic scales and SAP  ",
        "Tools":"Visual Studio 2005, C# .NET, Web Services, E1310 AWT Simposer, FTP, TCPIP/sockets",
        "Cliente": "Grupo Bafar, Chihuahua",
        "Fecha":"August, 2010",
        "Roles":" Analyst, Weighing devices Developer, Tester and Deployment",
        "ProjectSize": "Big, product owner, two developer, multiple devices",
        "Descripcion":"Designed and developed a tailored EDI System (SICOBA) to automate the weighing of products at "+
        "Bafar’s processing plant. Included modules were: weight scale, production results, product"+
        " catalogs and reports."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Recycle Center Weighing System",
        "Referencia": "detail.html?id=13",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p13.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p13_1.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p13_2.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/p13_3.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Software control inventory and Buy/Sell recycle materials with data transfers to truck and floor scales",
        "Tools":"Visual Studio 2005, C# .NET, E1310 AWT Simposer, FTP, TCPIP/sockets",
        "Cliente": "Centro de Reciclaje de Mexicali, Mexicali",
        "Fecha":"March, 2009",
        "Roles":" Analyst, Weighing devices Developer, Tester and Deployment",
        "ProjectSize": "Big, product owner, two developer, multiple devices",
        "Descripcion":" This software was implemented on three diferents places in Mexicali. We Build a tailored system that included"+
        " Management Information and TransactionProcessing modules.<br>"+
        "- Custom module to calculate TAX ."+
        "- Developed a communication interface that transferred data between the truck scales"+
        "digital indicators and the Transaction system, data includes client, user and product"+
        "catalogs as well as transactions."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Early years Weighing Systems",
        "Referencia": "detail.html?id=14",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/peso/01.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/peso/02.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/peso/03.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/peso/04.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Resume of weighing applications developed in 2007-2009",
        "Tools":"Visual Studio 2005, E1310 AWT Simposer, FTP, TCPIP/sockets",
        "Cliente": "Basculas Internacionales de Mexico, Empacadora Rosarito, Qualimentos, Camel Back, Black\&Decker, Plantronics, RSI",
        "Fecha":"June 2007 - February 2009",
        "Roles":"General Manager, Analyst, Weighing devices Developer, Tester and Deployment",
        "ProjectSize": "Medium and small",
        "Descripcion":"In 2005, I was invited to join like General Manager to a local Company specialized in supplying world class scale equipment and services to the Mexican market."
        +" In addition to managing staff, also has  the responsabilitie to know and explode the capabilities in the custom program devices."
        +" We offer multiple aplications with small databases to control products, process and user for Checkweighin, Labeling, Truck Scales, counting"
        +" automated weighing."
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Early years Control and Automated Systems",
        "Referencia": "detail.html?id=15",
        "Imagen":"<div class=\"box alt\"><div class=\"row gtr-50 gtr-uniform\">"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image004.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image006.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image008.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image010.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image012.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image014.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image016.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image020.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image022.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image024.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image026.jpg\" alt=\"\" /></span></div>"+
        "<div class=\"col-4\"><span class=\"image fit\"><img src=\"images/auto/image028.jpg\" alt=\"\" /></span></div>"+
        "</div></div>",
        "Resumen": "Resume of control, machine vision, electrical test and data monitoring applications 1998-2005",
        "Tools":"Delphi, C++ Builder, Lview (National Instrumenst), Agilent, Matrox Imaging",
        "Cliente": "ASTEC America, Bourns, Saft, Kyocera, Packard Hughes. Tijuana B.C.",
        "Fecha":"June 2007, February 2009",
        "Roles":"Analyst, Weighing devices Developer, Tester and Deployment",
        "ProjectSize": "Small",
        "Descripcion":"When I finish my academic preparation in 1998, i join to my first small company in Tijuana,"
        +"who offers control and automation services to manufacturing Industry. This was an exciting experience and a big oportunity "
        +" to develop skill on customer relations and programming data acquisition, image adquisition and control devices."
        +" In 2000, I join to Astec America like Electrical Test Engineerig and I continued to develop industrial software solutions."
        
    }
]


const urlParams = new URLSearchParams(window.location.search.substring(1));
var  idProject =  urlParams.get("id")

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

