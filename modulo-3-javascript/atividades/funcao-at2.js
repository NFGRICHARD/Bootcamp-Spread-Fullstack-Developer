function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa =
    {
        nome: 'João',
        idade: 30,
    };
const pessoa2 = 
    {
        nome: 'Sofia',
        idade: 24,
    };
const pessoa3 =  
        {
        nome: 'Paulo',
        idade: 15,
    };
const pessoa4 = 
        {
        nome: 'Vitor',
        idade: 12,
    };
console.log(calculaIdade.call(pessoa, 10))
console.log(calculaIdade.call(pessoa2, [10]))