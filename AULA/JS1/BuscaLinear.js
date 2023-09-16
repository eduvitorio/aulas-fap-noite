funcition buscaLinear(Array, elementoBuscado){
    for(let i=0; i < Array.length; i++){
        if(array[i] === elementoBuscado){
            return i;
        }
    }
    return -1;
}

const ListaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;

const indiceEncontrado = buscaLinear(ListaNumeros, elementoProcurado);

if (indiceEncontrado !== -1){
    console.log(`O elemento ${elementoProcurado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
    console.log(`O elemento ${elementoProcurado} não foi encontrado na listsa.`)
}