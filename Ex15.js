let string = prompt("Digite uma palavra ou frase");

function isVogal(letra){
    let estado;
    switch (letra) {
        case "A":
        case "a":
        case "E":
        case "e":
        case "I":
        case "i":
        case "O":
        case "o":
        case "U":
        case "u":
            estado = true;
            break;
        default:
            estado = false;
            break;
    }
    return estado;
}

var modificador = function (string, parametro) {
    return parametro(string);
};

function caixaAltaVogal(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(isVogal(string.charAt(i))){
            newString += string.charAt(i).toUpperCase();
        } else {
            newString += string.charAt(i);
        }
    }
    return newString;
}
function caixaBaixaVogal(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(isVogal(string.charAt(i))){
            newString += string.charAt(i).toLowerCase();
        } else {
            newString += string.charAt(i);
        }
    }
    return newString;
}
function caixaAltaConsoante(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(!(isVogal(string.charAt(i)))){
            newString += string.charAt(i).toUpperCase();
        } else {
            newString += string.charAt(i);
        }
    }
    return newString;
}
function caixaBaixaConsoante(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(!(isVogal(string.charAt(i)))){
            newString += string.charAt(i).toLowerCase();
        } else {
            newString += string.charAt(i);
        }
    }
    return newString;
}

console.log(modificador(string, caixaAltaVogal));
console.log(modificador(string, caixaBaixaVogal));
console.log(modificador(string, caixaAltaConsoante));
console.log(modificador(string, caixaBaixaConsoante));