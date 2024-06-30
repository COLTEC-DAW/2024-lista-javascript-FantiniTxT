function min(a, b){
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function max(a, b){
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let a = Number(prompt("Primeiro numero"));
let b = Number(prompt("Segundo numero"));

console.log("O menor numero eh o " + min(a, b));
console.log("O maior numero eh o " + max(a, b));