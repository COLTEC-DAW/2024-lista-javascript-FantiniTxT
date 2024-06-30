function toList(array){
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }
    return list;
}

let tamanho = Number(prompt("Tamanho do array"));
let array = [];
for (let i = 0; i < tamanho; i++){
    let valor = prompt("Valor " + i);
    array.push(valor);
}

console.log(toList(array));