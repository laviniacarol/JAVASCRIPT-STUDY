//o método sort () serve como ferramenta para ordenar itens de um array, number ou str


//ATENÇÃO: O MÉTODO ALTERA O ARRAY INICIAL
//PARA EVITAR PODEMOS FAZER UMA CÓPIA PRIMEIRO
//EX: const novoArray = [...arrayOriginal].sort();


//exemplo básico de sua utilização com numeros
let lista = [3, 1, 4, 1, 5, 9];
lista.sort();
console.log(lista); // [1, 1, 3, 4, 5, 9]


let frutas = ['banana', 'maçã', 'laranja', 'uva'];
lista.sort();
console.log(frutas); // ['banana', 'laranja', 'maçã', 'uva']

//podemos passar uma função de comparação como argumento para sort
lista.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
    });

//exemplo do método com comparação personalizada 
    frutas.sort(function(frutaA, frutaB) {
        if (frutaA < frutaB) {
          return -1; // frutaA vem antes de frutaB
        }
        if (frutaA > frutaB) {
          return 1; // frutaB vem antes de frutaA
        }
        return 0; // mantém na mesma ordem
      });
//ordena as frutas por ordem alfabetica e retorna a palavra cuja primeira letra inicial seja a mais proxima de A no alfabeto


//versão simplificada com arrow func.
frutas.sort((a, b) => a.localeCompare(b));
//O método localeCompare() já retorna:
//Número negativo se a vem antes de b
//Positivo se a vem depois de b
//0 se forem iguais