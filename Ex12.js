let tamanho = Number(prompt("Tamanho do array"));
let array = [];
for (let i = 0; i < tamanho; i++){
    let valor = prompt("Numero " + i);
    array.push(valor);
}

array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(array);