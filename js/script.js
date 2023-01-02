function criptografar(){
    var textoCampo = document.querySelector("#campoTexto");
    var texto = String(textoCampo.value);

    var resposta = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/a/g,"ai").replace(/u/g,"ufat");


    if(campoResposta.innerHTML = resposta){
        document.querySelector(".botao-criptografar").value = "Criptografado"
    }

    setInterval (function(){
    document.querySelector(".botao-criptografar").value = "Criptografar";
    }, 3000);

}

function descriptografar(){
    var textoCampo= document.querySelector("#campoTexto");
    var texto= String(textoCampo.value);

    var resposta = texto.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");

    if (campoResposta.innerHTML = resposta){
        document.querySelector(".botao-descriptografar").value = "Descriptografado";
    }

    setInterval (function() {
        document.querySelector(".botao-descriptografar").value = "Descriptografar";
    }, 3000);




}

function copiar(){
    var textoCopiado = document.querySelector("#campoResposta");

    if(navigator.clipboard.writeText(textoCopiado.value)){
        document.getElementById("botaoCopiar").value = "Copiado";
    }

    setInterval (function() {
        document.getElementById("botaoCopiar").value = "Copiar";
    }, 3000);

    
}
