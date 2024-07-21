const textoInput = document.getElementById('texto');
const textoEncriptadoInput = document.getElementById('textoEncriptado');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');

function encriptarTexto() {
    const texto = textoInput.value;
    // Implementar algoritmo de encriptación aquí (por ejemplo, César, Base64, etc.)
    const textoEncriptado = "Texto Encriptado"; // Reemplazar con el texto encriptado
    textoEncriptadoInput.value = textoEncriptado;
}

function desencriptarTexto() {
    const textoEncriptado = textoEncriptadoInput.value;
    // Implementar algoritmo de desencriptación aquí (inverso al de encriptación)
    const texto = "Texto Descifrado"; // Reemplazar con el texto descifrado
    textoInput.value = texto;
}

btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
