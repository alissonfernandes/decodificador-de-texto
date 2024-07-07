function criptografar() {
    let texto = document.getElementById('texto_entrada').value.trim().toLowerCase();
    let textoCriptografado = texto
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');
    mostrarTexto(textoCriptografado);
}

function mostrarTexto(textoCriptografado) {
    let conteudo1 = document.getElementById('conteudo_1').style;
    let conteudo2 = document.getElementById('conteudo_2').style;
    
    if (textoCriptografado.length != 0) {
        conteudo1.display= 'none';
        conteudo2.display= 'flex';
        document.getElementById('texto_saida').value= textoCriptografado;
    } else{
        conteudo1.display= 'flex';
        conteudo2.display= 'none';
    }
}