//* recerba um vetor de numeros filtre o numero 3.se achar retorne true, se não achar retorne false.

let numeros =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function buscaNumero(numeros) {
    for (let valor of numeros){
        if (valor === 3){
            return true;  
        }
    }
    return false;
}

buscaNumero(numeros);
console.log(numeros);
console.log(buscaNumero(numeros));


