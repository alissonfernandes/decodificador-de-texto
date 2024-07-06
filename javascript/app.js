function criptografar() {
    let texto = document.getElementById('texto_entrada').value.trim().toLowerCase();
    let textoCriptografado = texto
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');
    console.log(textoCriptografado);
}