let elementosBotoes = document.querySelectorAll("button"); //seleciona todos os botões
let elementoImagemRatinho = document.querySelector(".js-imagem-ratinho"); //seleciona a imagem
// console.log(elementoImagemRatinho);

elementosBotoes.forEach((botaoCorrente) => {
    console.log(botaoCorrente);
    botaoCorrente.addEventListener("click", ()=>{ //baralho do botão
        console.log("fire");
    })
});