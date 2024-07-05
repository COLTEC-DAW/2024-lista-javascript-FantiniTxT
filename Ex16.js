function construtorMatriz(matriz, condicao) {
    console.log(matriz);
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = condicao(i, j);
            console.log(matriz);
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

let matriz = Array(5).fill(Array(5));

console.log(construtorMatriz(matriz, somaIndices));
console.log(construtorMatriz(matriz, multiplicaIndices));
console.log(construtorMatriz(matriz, comparaIndices));
console.log(construtorMatriz(matriz, calculaIndices));
console.log(construtorMatriz(matriz, comparaIncrementadoIndices));