function construtorMatriz(linhas, colunas, metodo) {
    let matriz = new Array(linhas).fill().map(()=> new Array(colunas));
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = metodo(i, j);
        } 
    }
    return matriz;
}

function somaIndices(i, j) {
    return i + j;
}

function multiplicaIndices(i, j){
    return i * j;
}

function comparaIndices(i, j){
    return i == j ? 1 : 0;
}

function calculaIndices(i, j){
    return i^2 / (j+1);
}

function comparaIncrementadoIndices(i, j){
    return i > j ? 1 : (i < j ? 5 : 0);
}


let linhas = Number(prompt("Quantidade de linhas"));
let colunas = Number(prompt("Quantidade de colunas"));

console.log("Soma indices");
console.log(construtorMatriz(linhas, colunas, somaIndices));
console.log("Multiplica indices");
console.log(construtorMatriz(linhas, colunas, multiplicaIndices));
console.log("Compara indices");
console.log(construtorMatriz(linhas, colunas, comparaIndices));
console.log("Calcula indices");
console.log(construtorMatriz(linhas, colunas, calculaIndices));
console.log("Compara incrementado indices");
console.log(construtorMatriz(linhas, colunas, comparaIncrementadoIndices));