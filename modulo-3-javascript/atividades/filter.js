function filterDePares(array){
    return array.filter(function(filtro){
        return filtro % 2 ===0;
    })
}

const oArray = [1, 4 , 8, 12, 13, 15, 16, 18, 558]

console.log(filterDePares(oArray))