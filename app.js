const palabraInput = document.getElementById("palabra");
const palabraEncriptadaInput = document.getElementById("palabraEncriptada");

function encriptar() {
    const palabra = palabraInput.value.toLowerCase();
    const palabraEncriptada = palabra.replace(/a/g, "ai")
                                    .replace(/e/g, "enter")
                                    .replace(/i/g, "imes")
                                    .replace(/o/g, "ober")
                                    .replace(/u/g, "ufat");
    palabraEncriptadaInput.value = palabraEncriptada;
}
