let pessoa = {
    name: 'Ana',
    age: 24,
    height: 156,
    document: 911267097,
}

//FOR-IN *NÃO* FOI FEITO PARA ITERAR SOB ARRAYS, FOI FEITO PARA ITERAR SOB PROPRIEDADES ENUMERAVEIS DE OBJETOS.

//for (let chave in objeto) {
    //executar a iteração sobre a propriedade do objeto
//}

for (let chave in pessoa) {
 console.log(chave) //name,age,height,document
}

for (let chave in pessoa) {
    console.log(pessoa[chave]) //ana,24,156,911267097
}

//herança Object.protype.exemplo = 'teste'
//todo objeto declarado na folha herda o item teste