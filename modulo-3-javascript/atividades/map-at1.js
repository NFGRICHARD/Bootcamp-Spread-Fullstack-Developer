const maca = {
    value: 2
};

const laranja = {
    value: 3
}

function mapComThis(array, thisArg){
    return array.map(function(item){// o item é o que tiver dentro do array
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2]; //esse é o array que vai servi de parametro
console.log('this - > maçã  ',mapComThis(nums, maca));
console.log('this - > laranja  ',mapComThis(nums, laranja));