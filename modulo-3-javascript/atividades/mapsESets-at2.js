const  array = [30, 30, 40, 40, 5, 223, 223, 2049, 3034, 5];

function unicos(arr){
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(unicos(array))