//Exemplo de pergunta: "Me recomende alguns desenhos"
const desenhosRecomendados = {
    probablyWords:
    ["recomendar", "sugerir", "indicar",  "assistir", "comecar"],
    matched: 0,
}

//Exemplo de pergunta: "Qual é o melhor desenho?"
const desenhosMaisAvaliados = {
    probablyWords:
    ["snoppy", "melhor", "mais", "bem", "avaliado"],
    matched: 0,
}

//Exemplo de pergunta: "Qual é o seu desenho preferido?"
const desenhoPreferido = {
    probablyWords: 
    ["snoppy", "favorito", "preferido", "seu","amo"],
    matched: 0,
}

//Exemplo de pergunta: "Onde eu posso ver desenhos?"
const verDesenhos = {
    probablyWords:
    ["assistir", "ver", "plataformas", "snoppy", "posso"],
    matched: 0,
}

//Caso ocorra perguntas fora do tema acima 
const papoFurado = {
    probablyWords: 
    [ "sua", "onde", "gosta", "política", "tecnologia"],
    matched: 0,
}

export const todosBancos = [desenhosRecomendados,desenhosMaisAvaliados,desenhoPreferido,verDesenhos,papoFurado]

//Respostas :)
function showAnswer(index) {
    switch (index) {
        case 0:
            return console.log("recomendo assistir ! ")
        case 1:
            return console.log("atualmente o desenho do snoppy é o mais avaliado !")
        case 2:
            return console.log("amo o desenho do snoppy!")
        case 3:
            return console.log(" snoopy tem em seguintes plataformas, YouTube e Disney Plus ")
        default:
            return console.log("infelizmente não posso ajudar ,pois não entendo desse tema !")
    }
}

//Deduzir resposta
export function mostProbablyQuestion() {
    let matches = [
        desenhosRecomendados.matched, 
        desenhosMaisAvaliados.matched, 
        desenhoPreferido.matched,
        verDesenhos.matched, 
        papoFurado.matched
    ]

    return showAnswer(matches.indexOf(Math.max(...matches)))
}