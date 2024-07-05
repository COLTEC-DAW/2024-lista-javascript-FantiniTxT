let numero = Number(prompt("Numero"));

var verificador = function (num, parametro) {
    return parametro(num);
};

function impar(num){
    if (num%2 !== 0) return true;
    return false;
}

function primo(num){
    if(num <= 1) return false;
    for(let i = 2; i < num; i++) {
        if(num%i === 0) return false;
    }
    return true;
}

console.log("O numero " + numero + "...");
console.log("Eh impar " + verificador(numero, impar));
console.log("Eh primo " + verificador(numero, primo));