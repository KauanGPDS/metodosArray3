const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const ordernaNumeros1 = numeros.sort((a,b) =>{
   return a - b
})

console.log(ordernaNumeros1)


const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const ordernaNumeros2 = numeros2.sort((a,b) =>{
    return b - a
})

console.log(ordernaNumeros2)

const numeros3 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]


console.log(numeros3.sort())


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


const ordernarFrutas = frutas.sort((a,b) =>{
    return a.localeCompare(b)
})

console.log(frutas)

const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


const ordernarFrutas2 = frutas2.sort((a,b) =>{
    return b.localeCompare(a)
})

console.log(ordernarFrutas2)


const frutasLength = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const ordernarTamanhoDeCaractere = frutasLength.reduce((a,b) =>{
    let maior = a

    if(maior.length > b.length){
        maior = b
    }

    return a
})

console.log(ordernarTamanhoDeCaractere)

