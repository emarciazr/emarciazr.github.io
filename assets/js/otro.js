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
        "Also create different label sizes with QRCode web page link to automated registration<br>"
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
        "Also create different label sizes with QRCode web page link to automated registration<br>"
    },
    {
        "Tipo": "Software Development",
        "Nombre": "Control de Bombas Punta Faro",
        "Referencia": "detail.html?id=3",
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
        "Referencia": "detail.html?id=4",
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
        "Imagen":"<img src= \"images/p05.jpg\" alt=\"\" /></a>+",
        "Resumen": "Software for handheld terminal MC3190, scan an store data information from orders received",
        "Tools": "Visual studio 2013,VB .NET, SQL Server CE, Windows CE, windows 6.0",
        "Cliente": "QDL, Chihuahua",
        "Fecha":"May 2014",
        "Roles":"Analyst, hand held Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":""
    },
    {
        "Tipo": "Software Development",
        "Nombre": "QDL Weighing & labeling Software",
        "Referencia": "detail.html?id=6",
        "Imagen":"<img src= \"images/p06.jpg\" alt=\"\" /></a>",
        "Resumen": "Software for E1310 Avery Weightronix for dynamic weihging and aumatic labeling in dairy manufacturing.",
        "Tools": "E1310 Simposer, visual studio 20005,VB .NET, Paradox tables",
        "Cliente": "QDL, Chihuahua",
        "Fecha":"June 2013",
        "Roles":"Analyst, weighing device and desktop Developer, Tester, Deployment",
        "ProjectSize": "Small, one developer",
        "Descripcion":""
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
        "Descripcion":""
    },
    {
        "Tipo": "Sofware Development",
        "Nombre": "Bafar Integration 920i scale in Automated Weighing System",
        "Referencia": "detail.html?id=8",
        "Imagen":"<img src= \"images/p08.jpg\" alt=\"\" /></a>",
        "Resumen": "Programming 920i Rice Lake Weighing Device for high precision in dynamics weighing",
        "Tools":"iRev Rice Lake (Pascal) ",
        "Cliente": "Grupo Bafar, Chihuahua",
        "Fecha":"August, 2010",
        "Roles":"Weighing Devices Developer",
        "ProjectSize": "Medium, product owner and two developer, multiple devices",
        "Descripcion":""
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
        "Descripcion":""
    },
    {
        "Tipo": "Software Reengineering",
        "Nombre": "Navico Packing 2.0",
        "Referencia": "detail.html?id=10",
        "Imagen":"<img src= \"images/p10.jpg\" alt=\"\" /></a>",
        "Resumen": "Reenginering and Optimization Software for serial and print ID labels in packing proccess",
        "Tools": "Visual studio 2005,VB .NET, SQL Server",
        "Cliente": "Navico, Ensenada",
        "Fecha":"October 2010",
        "Roles":"Developer",
        "ProjectSize": "Small, one Developer",
        "Descripcion":""
    },
    {
        "Tipo": "Software Development",
        "Nombre": "XDCRS Software Serial Labels",
        "Referencia": "detail.html?id=11",
        "Imagen":"<img src= \"images/p11.jpg\" alt=\"\" /></a>",
        "Resumen": "Software for serial and print ID labels for transducers",
        "Tools": "Visual studio 2005,VB .NET, SQL Server",
        "Cliente": "Navico, Ensenada",
        "Fecha":"March 2010",
        "Roles":"Developer",
        "ProjectSize": "Small, one Developer",
        "Descripcion":""
    },
    {
        "Tipo": "Sofware Development",
        "Nombre": "Bafar EDI Automated Weighing System",
        "Referencia": "detail.html?id=12",
        "Imagen":"<img src= \"images/p12.jpg\" alt=\"\" /></a>",
        "Resumen": "EDI System between more than 20 Avery Weightronic scales and SAP  ",
        "Tools":"Visual Studio 2005, C# .NET, Web Services, E1310 AWT Simposer, FTP, TCPIP/sockets",
        "Cliente": "Grupo Bafar, Chihuahua",
        "Fecha":"August, 2010",
        "Roles":" Analyst, Weighing devices Developer, Tester and Deployment",
        "ProjectSize": "Big, product owner, two developer, multiple devices",
        "Descripcion":"Designed and developed a tailored EDI System to automate the weighing of products at"+
        "Bafar’s processing plant. Included modules were: weight scale, production results, product"+
        "catalogs and reports"
    },
    {
        "Tipo": "Sofware Development",
        "Nombre": "Recycle Center Weighing System",
        "Referencia": "detail.html?id=13",
        "Imagen":"<img src= \"images/p13.jpg\" alt=\"\" /></a>",
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
        "Tipo": "Sofware Development",
        "Nombre": "Early years Weighing Systems",
        "Referencia": "detail.html?id=14",
        "Imagen":"<img src= \"images/p14.jpg\" alt=\"\" /></a>",
        "Resumen": "Resume of weighing applications developed in 2007-2009",
        "Tools":"Visual Studio 2005, E1310 AWT Simposer, FTP, TCPIP/sockets",
        "Cliente": "Basculas Internacionales de Mexico, Empacadora Rosarito, Qualimentos, Camel Back, Black\&Decker, Plantronics, RSI",
        "Fecha":"June 2007, February 2009",
        "Roles":"General Manager, Analyst, Weighing devices Developer, Tester and Deployment",
        "ProjectSize": "Medium and small",
        "Descripcion":""
    },
    {
        "Tipo": "Sofware Development",
        "Nombre": "Early years Control and Automated Systems",
        "Referencia": "detail.html?id=15",
        "Imagen":"<img src= \"images/p15.jpg\" alt=\"\" /></a>",
        "Resumen": "Resume of control, machine vision, electrical test and data monitoring applications 1998-2005",
        "Tools":"Delphi, C++ Builder, Lview (National Instrumenst), Agilent, Matrox Imaging",
        "Cliente": "ASTEC America, Bourns, Kyocera, Packard Hughes, ",
        "Fecha":"June 2007, February 2009",
        "Roles":"Analyst, Weighing devices Developer, Tester and Deployment",
        "ProjectSize": "Small",
        "Descripcion":""
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

