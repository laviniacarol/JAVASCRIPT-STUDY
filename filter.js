//cria um novo array com todos os elementos que satisfazem uma condição
//age literalmente como um filtro

const armario = [
    {name: 'camiseta', cor: 'vermelha'},
    {name: 'camiseta', cor: 'vermelha'},
    {name: 'camiseta', cor: 'azul'},
    {name: 'camiseta', cor: 'amarela'},
    {name: 'camiseta', cor: 'vermelha'}
]

const novoArmario = armario.filter((item) => {
    return item.cor === 'vermelha' 
} )
console.log(novoArmario)