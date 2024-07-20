const palabraInput = document.getElementById("palabra");
const resultadoParrafo = document.getElementById("resultado");

function encriptar() {
    const palabra = palabraInput.value.toLowerCase();
    const palabraEncriptada = palabra.replace(/a/g, "ai")
                                    .replace(/e/g, "enter")
                                    .replace(/i/g, "imes")
                                    .replace(/o/g, "ober")
                                    .replace(/u/g, "ufat");
    resultadoParrafo.textContent = "Palabra encriptada: " + palabraEncriptada;
}

function desencriptar() {
    const palabraEncriptada = palabraInput.value.toLowerCase();
    const palabraDesencriptada = palabraEncriptada.replace(/ai/g, "a")
                                                .replace(/enter/g, "e")
                                                .replace(/imes/g, "i")
                                                .replace(/ober/g, "o")
                                                .replace(/ufat/g, "u");
    resultadoParrafo.textContent = "Palabra desencriptada: " + palabraDesencriptada;
}
