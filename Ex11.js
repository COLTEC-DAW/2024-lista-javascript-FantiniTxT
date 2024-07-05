function deepEquals(obj1, obj2) {
    let array1 = Object.keys(obj1);
    let array2 = Object.keys(obj2);

    let tamanho;
    if (array1.length > array2.length){
        tamanho = array1.length;
    } else {
        tamanho = array2.length;
    }

    for(let i = 0; i < tamanho; i++) {
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}

let obj1 = {Nome: "Alita", Letras: 5};
let obj2 = {Nome: "Palita", Letras: 5};

console.log(deepEquals(obj1, obj2));