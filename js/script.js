let elementosBotoes = document.querySelectorAll("button"); //seleciona todos os botões
let elementoImagemRatinho = document.querySelector(".js-imagem-ratinho"); //seleciona a imagem

elementosBotoes.forEach((botaoCorrente) => {
    botaoCorrente.addEventListener("click", ()=>{ //barulho do botão
        console.log(botaoCorrente.dataset.botao); //pega o atributo. ex: eita, ratinho, pare
        let musicaParaTocar = document.querySelector(`audio[data-musica="${botaoCorrente.dataset.botao}"]`); //busca a musica especifica. utiliza o tamplate string, case ao contrario pq busca um elemento audio que tem um atributo especifico
                                                        //concatenação do botão clicado junto com o audio
document.
    querySelectorAll("audio").
        forEach((musicaCorrente) => { musicaCorrente.pause();}); //pega todos os elementos de audio e pausa uma musica qnd outra tocar
        musicaParaTocar.currentTime = 0; //toda vez que inicia a música, inicia em zero, do começo
        musicaParaTocar.play();
    });

    botaoCorrente.addEventListener("mouseenter", () => {
        elementoImagemRatinho.classList.add("aparecer");
    });
    
    botaoCorrente.addEventListener("mouseleave", () => {
        elementoImagemRatinho.classList.remove("aparecer");
    });
});