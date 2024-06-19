function range(min, max, i = 1){
    if(i > 0){
        let intervalo = [];
        for(let j = min; j <= max; j += i){
            intervalo.push(j);
        }
        return intervalo;
    } else {
        console.log("Intervalo de variacao invalido");
    }
}

let min = Number(prompt("Numero minimo"));
let max = Number(prompt("Numero maximo"));
let i = Number(prompt("Intervalo de variação"));

console.log(range(min, max, i));