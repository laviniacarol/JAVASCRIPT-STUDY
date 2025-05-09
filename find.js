//o método fin retorna um unico item que passa em um teste
//ele não modifica o array original mas retorna o primeiro item encontrado na codificação

array.find((elemento) => {
    // condição de busca
    return // expressão booleana
    });

    
const numeros = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 9, 6, 9];
const numeroEncontrado = numeros.find(item => item === 9);
console.log(numeroEncontrado); // Saída: 9


const armario = [
    { name: "cuecas", isDirty: false, color: "azul" },
    { name: "camiseta", isDirty: true, color: "azul" },
    { name: "pijamas", isDirty: false, color: "amarelo" },
    { name: "meia", isDirty: true, color: "azul" },
    { name: "sapato", isDirty: false, color: "azul" }
    ];



//PODEMOS USAR FIND PARA BUSCAR ITENS ESPECIFICOS
const primeiroItemAzul = armario.find(item => item.color === "azul");
console.log(primeiroItemAzul); // Saída: { name: "cuecas", isDirty: false, color: "azul" }



//OBJECT DESTRUCTURING 
const objeto = { nome: "João", idade: 30, documento: "123456" };

// Sem destructuring
const objetoAlterado1 = {
nome: objeto.nome,
idade: objeto.idade,
documento: objeto.documento,
ativo: true
};

// Com destructuring
const objetoAlterado2 = {
...objeto,
ativo: true
};

