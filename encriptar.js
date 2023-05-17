function encriptarTexto() {
  var texto = document.getElementById("texto").value.toLowerCase();

  var textoEncriptado = texto.replace(/e/gim, "enter");
  var textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
  var textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
  var textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");

  document.getElementById("desencriptado").innerHTML = textoEncriptado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptarTexto() {
  var texto = document.getElementById("texto").value.toLowerCase();

  var textoEncriptado = texto.replace(/enter/gim, "e");
  var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
  var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
  var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");

  document.getElementById("desencriptado").innerHTML = textoEncriptado;
}

function copiar() {
  var copiarTexto = document.querySelector("#desencriptado");
  copiarTexto.select();
  document.execCommand("copy");
}
