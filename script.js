/* Función para codificar el texto */
function encodeText() {
    // Obtener el texto del área de entrada
    const inputText = document.getElementById('inputText').value;
    // Codificar el texto (simplemente reemplazar letras como ejemplo)
    const encodedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
    // Mostrar el texto codificado en el área de salida
    document.getElementById('outputText').value = encodedText;
}

/* Función para decodificar el texto */
function decodeText() {
    // Obtener el texto del área de entrada
    const inputText = document.getElementById('inputText').value;
    // Decodificar el texto (simplemente reemplazar códigos como ejemplo)
    const decodedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
    // Mostrar el texto decodificado en el área de salida
    document.getElementById('outputText').value = decodedText;
}
