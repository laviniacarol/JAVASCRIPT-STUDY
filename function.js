
// function nomeDaFuncao(parametro1, parametro2){
// Corpo da função
// let resultado = parametro1 + parametro2;
// return resultado;
//}


// QUANDO SE DECLARA UMA FUNÇÃO, O ITEM ENTRE PARENTESES SE CHAMA DE *PARAMETRO*
// QUANDO ESTAMOS CHAMANDO A FUNÇÃO, O ITEM ENTRE PARENTESES SE CHAMA *ARGUMENTO*

//function de soma simples de valores
//function somaValores(valor1, valor2) { 
 //   return valor1 + valor2;
//     }

//console.log(somaValores(5,9))

//iterando sob listas com function
function somaValores (listaValores) {
   let total = 0;
  for (let valor of listaValores) {
      total += valor;
   };

    return total;
}

console.log(somaValores([45, 45, 100, 32, 90]))


//verifica se é par (minha resolução)
// function verificaPar(valor) {
  //  if (valor % 2 == 0) {
  //  return true;} 
// else { return false; }
//}

//resolução do curso DNC
function verificaPar (valor) {
    console.log(valor % 2 == 0)
    return valor % 2 === 0
}
console.log(verificaPar(30))



//DNC CONTADOR
iniciarContador(10); 
function iniciarContador(tempo) {
  let segundosRestantes = tempo;

  const atualizadorContador = setInterval(function() {
    console.log(segundosRestantes);
    
    if (segundosRestantes <= 0) {
      clearInterval(atualizadorContador);
      console.log("Tempo esgotado!");
    } else {
      segundosRestantes--;
    }
  }, 1000);
}

// 1 - chamamos a função com um argumento, no caso o 10
// 2 - declaramos a função
// 3 - criamos através do let uma variavel que armazena o valor inicial do contador
// 4 - usamos o setInterval para executar o código repetidamente no intervalo de tempo de 1 segundo +
// + ou como está ali 1000 ms; significa que entre o 10 e o 9 temos um tempo de 1s
// 5 - usamos const atualizadorContador para criar uma id do setInterval +
// assim podemos para a execução quando for necessário; usamos o const porque apesar do valor do setInterval mudar +
// a id dele segue sendo a mesma do contrário o codigo não teria fim
// 6 - o código mostra os segundos restantes após executar o -1
// 7 - uso de if para verificar se o tempo chegou 0. SE SIM usamos o clearInterval p/ parar a execução
// + Uuamos a referência armazenada em atualizadorContador para identificar qual intervalo parar
// 8 - else, continua dimiuindo o valor e exibindo o atual


function soma (){
 const Valor1 = Number(prompt('Digite um numero para soma: '));
 const Valor2 = Number(prompt('Digite mais um numero para somar: '));
 const soma = Valor1 + Valor2;
 console.log ('O resultado é: ${soma}')
 return soma;
}

function ehPar () {
  let numero = Number(prompt('Digite o número para conferir se é par: '));
  if (numero % 2 === 0){
    return true;
  } else { 
    return false;
  }
}

function saudacao () {
  const Nome = (prompt("Digite o seu nome: "));
  console.log ('Seja bem-vindo ${Nome}')
}

function fatorial(n) {
  if (n === 0 || n === 1) {
  return 1;
  }
  return n * fatorial(n-1);
}

function contarVogais(str) {
  const vogais = 'aeiouAEIOU';
  let contador = 0;
  for (let char of str) {
  if (vogais.includes(char)) {
  contador++;
  }
  }
  return contador;
  }