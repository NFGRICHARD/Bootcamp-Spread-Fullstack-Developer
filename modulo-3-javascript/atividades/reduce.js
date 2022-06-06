/*const lista = [3, 2]

function somaValor(array){
   return array.reduce(function(prev, current){
       console.log({prev})
       console.log({current})
        return prev + current;
    }, 2)
}

console.log(somaValor(lista))

*/

const listaDePreco = [
    {
        nome: 'sabao',
        preco: 30
    },
    {
        nome: 'cafe',
        preco: 12
    },
    {
        nome: 'carne',
        preco: 30
    }
];

const saldo = 100;

function sublist(array,saldo){
    return array.reduce(function(prev, current){
        return prev - current.preco// prev = acumulo / current.preco => esta pegando da listaDePreco o preco 
    }, saldo)
}

console.log(sublist(listaDePreco,saldo))