function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //I (Es para que afecte tanto mayusculas como minusculas) --i
    //G (Es para toda la linea o direccion)--g
    //M (Es para que afecte a multiples lineas o parrafo )--m
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgder").style.display = "none"; 
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("texto2").innerHTML = txtCifrado; 
    document.getElementById("copy").style.display = "show"; 
    document.getElementById("copy").style.display = "inherit";
} 

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //I (Es para que afecte tanto mayusculas como minusculas) --i
    //G (Es para toda la linea o direccion)--g
    //M (Es para que afecte a multiples lineas o parrafo )--m
    var txtCifrado = texto.replace(/"enter"/igm,"e");
    var txtCifrado = texto.replace(/ober/igm,"o");
    var txtCifrado = texto.replace(/imes/igm,"i");
    var txtCifrado = texto.replace(/ai/igm,"a");
    var txtCifrado = texto.replace(/ufat/igm,"u");

    document.getElementById("imgder").style.display = "none"; 
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("texto2").innerHTML = txtCifrado; 
    document.getElementById("copy").display = "show"; 
    document.getElementById("copy").style.display = "inherit";
    
} 

function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copio!");
}
