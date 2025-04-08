//Propósito: Repetir um bloco de código enquanto uma condição for verdadeira

let numero = 1;

while (numero <= 5) {
    //bloco de codigo que executa quantas x forem necessárias
    console.log(numero);
    numero++;
}

i = 0;
let frutas = ['banana','limao', 'pessego', 'laranja']
while(i < frutas.length) {
    console.log(frutas[i]);
    i++;
}

let x = 10
while (x >= 1) {
    console.log(x);
    x--;
}

//while não usa ponto e vírgula (;) para separar suas partes como o loop for faz.

let y = 1;
while (y <= 20) {
    if (y % 2 !== 0) {
        console.log(y);
    }
    y++;
}