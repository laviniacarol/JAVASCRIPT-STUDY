//também é uma função
//o argumento dela é uma outra função
//usado para executar trecho de código após um evento que não sabemos quando acaba, acabar

const soma = (a, b, callback) => {
    const resultado = a + b;
    callback(resultado); // Executa a função callback com o resultado
    return resultado;
};

// Chamando a função soma com callback
soma(10, 3, (resultado) => {
    console.log(`O resultado da soma é ${resultado}`);
});