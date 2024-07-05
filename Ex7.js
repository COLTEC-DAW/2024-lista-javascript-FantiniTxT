function countChars(frase, c){
    let igual = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase.toLowerCase().charAt(i) === c){
            igual++;
        }
    }
    return igual;
}

let string = prompt("Digite uma frase");
let caractere = prompt("Digite um caractere");

console.log("O caractere aparece " + countChars(string, caractere) + " vezes na frase");