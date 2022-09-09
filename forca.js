const palavras = ["BANANA", "KIWI", "MANGA", "CAJU", "BALA", "ESCOLA", "AMIGO", "BONECA", "GARRAFA", "ROUPA"];
var quantidadeErros = 0;
var acertos = 0;
var tentativas = "";
palavraSecreta = palavras[Math.floor(Math.random() * 10)];

var forca = document.getElementById("canvas");
var forcatx = forca.getContext("2d");

//desenhabase();
desenhaPoste();
desenhaBarraSuperior();
desenhaApoio();
desenhaTracos();

window.onkeypress = teclaPressionada;

function teclaPressionada() {
    if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())) {
        adicionaTentativa();
        for(var i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] == (event.key).toUpperCase()) {
                forcatx.font = "50px Arial";
                forcatx.fillText((event.key).toUpperCase(), 340 + (50 * i), 490);
                acertos++;
                
            }
        }
    } else {
        adicionaTentativa();
        quantidadeErros++;
        desenhaBoneco(quantidadeErros);
    }
    
    verificaFimJogo();
}

function adicionaTentativa() {
    if (!tentativas.includes(event.key)) {
        tentativas = tentativas + event.key;
        forcatx.font = "25px Arial";
        forcatx.fillText("Tentativas: " + tentativas.toUpperCase(), 340, 550);
    }
}

function verificaFimJogo() {
    if (quantidadeErros >= 6) {
        forcatx.font = "20px Arial";
        forcatx.fillText("Você Perdeu!! A palavra era: " + palavraSecreta, 300, 50);
        window.onkeypress = null;
        return;
    }
    if (acertos == palavraSecreta.length) {
        forcatx.font = "20px Arial";
        forcatx.fillText("Você ganhou!", 300, 50);
        window.onkeypress = null;
        return;
    }
}

/*function desenhaBase() {
    forcatx.moveTo();
    forcatx.lineTo();
    forcatx.stroke();
}*/

function desenhaPoste() {
    forcatx.moveTo(400,100);
    forcatx.lineTo(400,400);
    forcatx.stroke();
}

function desenhaBarraSuperior() {
    forcatx.moveTo(400,100);
    forcatx.lineTo(500,100);
    forcatx.stroke();
}

function desenhaApoio() {
    forcatx.moveTo(500,100);
    forcatx.lineTo(500,150);
    forcatx.stroke();
}

function desenhaTracos() {
    for (var i = 0; i < palavraSecreta.length; i++) {
        forcatx.moveTo(340 + (50 * i), 500);
        forcatx.lineTo(380 + (50 * i), 500);
        forcatx.stroke();
        
    }
}

function desenhaBoneco(quantidadeErros) {
    switch (quantidadeErros) {
        case 1 :
            desenhaCabeca();
            break;
        case 2 :
            desenhaTronco();
            break;
        case 3 :
            desenhaBracoEsquerdo();
            break;
        case 4 :
            desenhaBracoDireito();
            break;
        case 5 :
           desenhaPernaEsquerda()
           break;
        case 6 :
            desenhaPernaDireita();
            break;
    }

}

function desenhaCabeca() {
    forcatx.beginPath();
    forcatx.arc(500, 180, 30, 0, 2 * Math.PI);
    forcatx.stroke();

}

function desenhaTronco() {
    forcatx.moveTo(500,210);
    forcatx.lineTo(500,300);
    forcatx.stroke();

}

function desenhaBracoEsquerdo() {
    forcatx.moveTo(500,220);
    forcatx.lineTo(460,240);
    forcatx.stroke();

}

function desenhaBracoDireito() {
    forcatx.moveTo(500,220);
    forcatx.lineTo(540,240);
    forcatx.stroke();

}

function desenhaPernaEsquerda() {
    forcatx.moveTo(500,300);
    forcatx.lineTo(460,340);
    forcatx.stroke();

}

function desenhaPernaDireita() {
    forcatx.moveTo(500,300);
    forcatx.lineTo(540,340);
    forcatx.stroke();

}

