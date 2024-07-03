let tamanho = Number(prompt("Tamanho do array"));
let array = [];
for (let i = 0; i < tamanho; i++){
    let valor = Number(prompt("Numero " + i));
    array.push(valor);
}

var bubbleSort = function (array, compare) {
    var length = array.length;
    for (var j = 0; j < array.length; j++) {
      for (var i = 0; i < array.length-j-1; i++) {
        if (compare(array[i], array[i+1])) {//array[i] > array[i+1]
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
      }
    }
    return array;
};

function crescente(a, b){
    if (a > b) return true;
}

function decrescente(a, b){
    if (a < b) return true;
}

function crescenteImpar(a, b){
    if (a > b && ((a%2 !== 0) && (b%2 !== 0))) return true;
    if (((a%2 === 0) && (b%2 !== 0))) return true;
}

function decrescentePar(a, b){
    if (a < b && ((a%2 === 0) && (b%2 === 0))) return true;
    if (((a%2 !== 0) && (b%2 === 0))) return true;
}

console.log(array);
console.log("Crescente: " + bubbleSort(array, crescente));
console.log("Decrescente: " + bubbleSort(array, decrescente));
console.log("Crescente impar: " + bubbleSort(array, crescenteImpar));
console.log("Decrescente par: " + bubbleSort(array, decrescentePar));