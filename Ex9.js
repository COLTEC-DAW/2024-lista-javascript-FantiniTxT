function reverseArray(array){
    let arrayR = [];
    for(let i = array.length - 1; i >= 0; i--){
        arrayR.push(array[i]);
    }
    return arrayR;
}

let tamanho = Number(prompt("Tamanho do array"));
let array = [];
for (let i = 0; i < tamanho; i++){
    let valor = prompt("Valor " + i);
    array.push(valor);
}

console.log(reverseArray(array));