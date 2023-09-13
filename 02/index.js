const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesComLetrasMaiores = cidades.reduce((acumulador,elementoAtual) =>{
    let maior = acumulador

    if(maior.length < elementoAtual.length){
        maior = elementoAtual
    }

    return maior
})

console.log(cidadesComLetrasMaiores)