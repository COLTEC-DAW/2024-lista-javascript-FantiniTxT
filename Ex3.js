let palavra = prompt("Digite uma palavra");;
let qLetras = palavra.length - 1;
let iguais = true;

let j = qLetras;
for(let i = 0; i < qLetras; i++){
    if(palavra.charAt(i) !== palavra.charAt(j)){
        iguais = false;
    }
    j--;
}

if(iguais === true) {
    console.log("É palíndromo");
} else {
    console.log("Não é palíndromo");
}