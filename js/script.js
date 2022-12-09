function cripto(){
    var textoCampo = document.querySelector("#campoTexto");
    var texto = String(textoCampo.value);

    var resposta =  texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/a/g,"ai").replace(/u/g,"ufat");

    

   if(campoResposta.innerHTML = resposta){
        document.querySelector(".botao-cripto").value = "Criptografado"
   }

   setInterval (function(){
    document.querySelector(".botao-cripto").value = "Criptografar";
   },3000);

}

function descripto(){
    var textoCampo= document.querySelector("#campoTexto");
    var texto= String(textoCampo.value);

    var resposta = texto.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");

    if (campoResposta.innerHTML = resposta){
        document.querySelector(".botao-descripto").value = "Descriptografado";
    }

    setInterval (function() {
        document.querySelector(".botao-descripto").value = "Descriptografar";
    },3000);




}

function copiar(){
    var textoCopiado = document.querySelector("#campoResposta");

    if(navigator.clipboard.writeText(textoCopiado.value)){
        document.getElementById("botaoCopiado").value = "Copiado";
    }

    setInterval (function() {
        document.getElementById("botaoCopiado").value = "Copiar";
    },3000);

   

    
    
}