//o metodo reduce aplica uma função que pode transformar um array em um unico valor, seja number, string, object ou outro array

//lista.reduce((valorPrevio, ProximoValor)=> {
//trecho de codigo executado para cada item da lista
//return dado manipulado 
//}, acumulador)

const armario = [
    {tipo: 'camiseta', qtd: 25},
    {tipo: 'calças', qtd: 12},
    {tipo: 'bermudas', qtd: 6},
    {tipo: 'blusas', qtd: 7}
]

armario.reduce (()=> {
 console.log(valorPrevio);
 return valorPrevio + proximoValor
 
},0)