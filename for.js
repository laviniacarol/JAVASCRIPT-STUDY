// for(declaração e inicialização da variavel; condição; incremento){
//codigo que será repetido n vezes
//}

//exemplo
// for (let i = 0; i <= 10; i++){
// será repetido 11x (0,1,2,3,4,5,6,7,8,9,10)
//console.log(i)
//}

//Propósito: Iterar sobre uma sequência (lista, string, range etc.) ou executar um número conhecido de vezes


for (let i = 0; i <= 10; i++) {
    if ( i% 2 == 0) console.log(i) //exibir somente numero par
}

for (let i = 0; i <=10; i ++) {
    if (i % 2 !== 0) console.log(i) //exibir somente nº ímpar
}

//multiplicação
for (let numero = 1; numero <= 10; numero++) {
    console.log('TABUADA DO ' + numero)
    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    }
}


//iteração com renderização de elementos
let frutas = ['laranja', 'limão', 'mamão']
for (let i=0; i<frutas.length;i++) {
    console.log(frutas[i])
}

//exercicio
for (let  i = 0; i <=10; i++) {
    console.log(i)
}

for (let x = 2; x <= 20; x++) {
    if (x % 2 == 0) console.log(x)
}

for (let y = 1; y <= 10; y ++) {
    console.log('TABUADA DO 5')
    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
        console.log (5 * multiplicador);
    }
}

let soma = 0;
for (let i = 1; i <= 100; i++) {
soma += i;
}
console.log(soma);