function mod(num, mod){
    return num%mod === 0;
}

function mod2(number){
    return mod(number, 2);
}

let number = Number(prompt("Numero"));

if(mod2(number)){
    console.log("O numero eh divisivel por 2");
} else {
    console.log("O numero nao eh divisivel por 2");
}