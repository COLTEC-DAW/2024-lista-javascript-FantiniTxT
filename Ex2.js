let linha;
let qLinhas;

qLinhas = prompt("Quantidade de linhas");

for(let i = 0; i < qLinhas; i++) {
    if (i%2 === 0) {
        linha = "# # # #";
    } else {
        linha = " # # # #";
    }
    console.log(linha);
}