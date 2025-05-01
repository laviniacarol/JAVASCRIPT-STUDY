//forma alternativa de escrever uma função
//const nomeDaFuncao = (parametro) => { return ...}
//não precisa nomear nem arrow function nem função



//function soma(a, b) {
//    return a + b;
//  }
const soma = (a, b) => a + b;
console.log (soma(10,3))
  
const iniciarContador = (tempo) => {
    let segundosRestantes = tempo;
    
    const atualizadorContador = setInterval(() => {
    console.log(segundosRestantes);
    if (segundosRestantes <= 0) {
        console.log('Tempo Esgotado!');
    } else {
        segundosRestantes--;
    }
    }, 1000);
};

iniciarContador(10)