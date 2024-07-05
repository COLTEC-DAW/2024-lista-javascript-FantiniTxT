const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let string = prompt("Digite uma palavra ou frase");

function criptografador(string, criptografia) {
    return criptografia(string);
}

function cifraDeCesar (string){
    string = string.toLowerCase();
    let numAndado = Number(prompt("Digite numero de diferenca entre a letra atual e a nova"));
    let newString = "";
    for(let i = 0; i < string.length; i++){
        let indice = letras.indexOf(string[i]);
        if (indice === -1){
            newString += string[i];
        } else {
            if((indice + numAndado) < letras.length) {
                newString += letras[indice+numAndado];
            } else {
                novoIndice = indice + numAndado;
                while (novoIndice >= letras.length){
                    novoIndice = novoIndice-letras.length;
                }
                newString += letras[novoIndice];
            }
        }
    }
    return newString.toUpperCase();
}

console.log(criptografador(string, cifraDeCesar));