function validação(arr, tamanho){
    try {
        if(!arr && !tamanho) 
    throw new ReferenceError("Envie os Parametros")

    if(typeof arr !== 'object')
    throw new TypeError('Array precisa do tipo object')

    if(typeof tamanho !== 'number')
    throw new TypeError('Tamanho precisa do tipo number')

    if(arr.length !== tamanho) 
    throw new RangeError('Tamanho invalido!')

    return arr
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!')
            console.log(error. message)
        } else if(error instanceof TypeError){
            console.log('Este erro é um TypeErrorr!')
            console.log(error. message)
        } else if(error instanceof RangeError){
            console.log('Este erro é um ReferenceError!')
            console.log(error. message)
        } else {
            console.log('Tipo de erro não esperado:' + e)
        }
    }
}


console.log(validação([1,2,3,4,], 5))