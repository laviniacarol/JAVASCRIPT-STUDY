let frutas = ['banana','limao', 'pessego', 'laranja']
for (let fruta of frutas) {
    console.log(fruta)
}

//FOR OF = LISTAS
//FOR IN = OBJETOS



//let person = {name:'Louise', age: 21, nationality:'french'}
//for (let key of person) {
    //console.log(key)
//} ... ENTREGARÁ UM ERRO

//objetos comuns como let person = {name:'Louise', age: 21, nationality:'french'} NÃO SÃO ITERÁVEIS COM FOR OF
//O LOOP FOR OF *SÓ FUNCIONA* COM ESTRUTURAS QUE SÃO ITERÁVEIS: ARRAYS, STRINGS, MAPS E QUALQUER TIPO DE OBJETO ITERAVEL

let person = { name: 'Louise', age: 21, nationality: 'french' };
for (let key of Object.keys(person)) {
    console.log(key); // Mostra: "name", "age", "nationality"
    console.log(person[key]); // Mostra os valores: "Louise", 21, "french"
}

let total = 0; //é importante inicializar o total com 0, caso não seja inicializada com um valor +
               //a variavel é considerada undefined e a operação com numeros não é realizada
               //quando você tenta somar undefined + cartItem.price, o resultado é NaN (Not a Number).
let cart = [
    {name: 'ARMANI COAT', price: 1200},
    {name: 'TOMMY HILFIGER TSHIRT', price: 930},
    {name: 'BALENCIAGA SHOES', price: 3200},
];

for (let cartItem of cart) {
    total = total + cartItem.price 
    //cartItem mostra cada objeto 
    //cartItem.price acessa o preço de cada item do carrinho
}

console.log(total);