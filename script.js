var pontuacao_jogador = 0;
var pontuacao_maquina = 0;

function Jokenpo(opcao) {

    var opcao_maquina = Math.floor(Math.random() * 3) + 1;

    if (opcao == opcao_maquina) {
        console.log(`Empate \n Sua opção : ${opcao} | Máquina : ${opcao_maquina}`)
        document.getElementById('img-jog').setAttribute("src", `IMG/${opcao}.png`)
        document.getElementById('img-maq').setAttribute("src", `IMG/${opcao_maquina}.png`)    
    } else if (opcao == 1 && opcao_maquina == 3 || opcao == 2 && opcao_maquina == 1 || opcao == 3 && opcao_maquina == 2) {
        console.log(`Você venceu \n Sua opção : ${opcao} | Máquina : ${opcao_maquina}`)
        pontuacao_jogador += 1
        document.getElementById('ptn-jogador').innerHTML = pontuacao_jogador
        document.getElementById('img-jog').setAttribute("src", `IMG/${opcao}.png`)
        document.getElementById('img-maq').setAttribute("src", `IMG/${opcao_maquina}.png`)
    } else if (opcao_maquina == 1 && opcao == 3 || opcao_maquina == 2 && opcao == 1 || opcao_maquina == 3 && opcao == 2) {
        console.log(`Máquina venceu \n Sua opção : ${opcao} | Máquina : ${opcao_maquina}`)
        pontuacao_maquina += 1
        document.getElementById('ptn-maquina').innerHTML = pontuacao_maquina
        document.getElementById('img-jog').setAttribute("src", `IMG/${opcao}.png`)
        document.getElementById('img-maq').setAttribute("src", `IMG/${opcao_maquina}.png`)
    }

    console.log(`Pontuação do jogador: ${pontuacao_jogador} \nPontuação da máquina: ${pontuacao_maquina}`)
}


function Jogar(opcao) {
    Jokenpo(opcao)
}