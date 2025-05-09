//some = verifica se pelo menos um elemento do array satisfaz uma condição
//every = verifica se todos os elementos do array satisfazem uma condição

//some
array.some((elemento) => {
    // condição a ser verificada
    return // expressão booleana
    })

const numeros = [1, 2, 3, 4, 5];
const temNumeroMaiorQue3 = numeros.some(num => num > 3);
console.log(temNumeroMaiorQue3); // true
//retorna true quando pelo menos um numero é maior que 3


//every
lista.every((item) => {
    //verifica se todos os itens da lista satisfazem uma condição
    return true || false
})

const numeros1 = [2, 4, 6, 8, 10];
const todosPares = numeros1.every(num => num % 2 === 0);
console.log(todosPares); // true
//retorna true porque todos os itens do array são pares
