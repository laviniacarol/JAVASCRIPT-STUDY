//array é uma lista de dados/objetos, é declarada entre [ ] ou chamando a função array ()
// ex: const armario = ['gaveta1', 'gaveta2', 'gaveta3', 'gaveta4']
const armario = [
    {item: 'camisetas'},
    {item: 'pijamas'},
    {item: 'calças'},
    {item: 'meias'}
]

armario.push({item:'cuecas'})
//para adicionar um novo item no FIM do array usamos push
armario.pop();
//pop retira o último item adicionado no array

armario [3] = { item: 'calcinhas'};
//altera o objeto 3 (as meias)
console.log(armario)

console.log(armario.length)
//cita o numero de itens do array

console.log(armario[armario.length -1])
//para acessar o último item da lista

console.log(armario.indexOf('calcinhas'))
//para descobrir a posição do item no array
//quando o item não está no array, ele retorna -1



//forEach é uma alternativa para o for e for of
armario.forEach((item) => {
    console.log(item)
})

armario.unshift('cuecas')
//unshift adiciona um novo item no INICIO do array
//pode ser usado quantas vezess quiser, o último unshift declarado sempre ficara no inicio

armario.shift();
//remove o primeiro item

const itemRemovido = armario.shift();
console.log(itemRemovido)
//maneira de visualizar o item removido
//também pode ser usado para o pop

armario.push('sapatos');

const novoArmario = armario.map((itemArmario) => {
    return (itemArmario === 'sapatos') ? {name: itemArmario, isDirty: true} : { name: itemArmario, isDirty: false}
})
//usamos o metódo mapping para modificar todos os itens ou um em especifico num novo array

