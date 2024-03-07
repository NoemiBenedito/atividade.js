import {mostProbablyQuestion, todosBancos} from './can-i-answer.js';

let pergunta = "o que voce gosta?";
let palavrasPergunta
if(pergunta[pergunta.length -1] === "?"){
    pergunta = pergunta.slice(0,-1)
    palavrasPergunta = pergunta.toLowerCase().split(" ")
}
palavrasPergunta = pergunta.toLowerCase().split(" ")

function compararPergunta(banco){
    const tamanhoBanco = banco.probablyWords.length
    for(let i = 0; i < tamanhoBanco; ++i){
        palavrasPergunta.forEach((palavra) =>{
            if(banco.probablyWords[i] === palavra){
                banco.matched++
            }
        })
    }
}

function compararTodos(){
    todosBancos.forEach((banco) =>{
        compararPergunta(banco)
    })
}

compararTodos()

mostProbablyQuestion()