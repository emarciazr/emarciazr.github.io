document.getElementById("eltitulo").innerHTML = titulo();

function titulo(){
    const urlParams = new URLSearchParams(window.location.search.substring(1));
    idProject = urlParams.get("id");
    console.log(idProject);
    console.log(myArray[idProject].Nombre);
return '<title>'+myArray[idProject].Nombre+'</title>' 
}