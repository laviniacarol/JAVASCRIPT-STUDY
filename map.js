//função parecida com for each, com a diferença que o map retorna algo novo

const lista = [1,2,3,4,5];

const novaLista = lista.map((item) => {
    return { number : item}
})

console.log(novaLista)

//percorreu a lista original e retornou um objeto com uma propriedade chamada number e o valor o item da lista original

