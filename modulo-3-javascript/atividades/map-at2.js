function mapSemThis(array){
    return array.map(function(item){// o item é o que tiver dentro do array
        return item * 2;
    });
}

const nums = [1, 2, 25, '5']; //esse é o array que vai servi de parametro
console.log(mapSemThis(nums));
