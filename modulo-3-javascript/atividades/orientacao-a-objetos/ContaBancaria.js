/*Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.*/

class ContaBancaria {
    constructor (agencia, numero, tipo, saldo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = saldo    
    }
    set saldo(saldoDaConta){
        this._saldo = saldoDaConta
    }
    get saldo(){
        return saldoDaConta
    }
    sacar(){
        
    }
    deposito(){

    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, tipo  = 'Conta corrente', saldo, cartaoCredito){
        super(agencia, numero, tipo, saldo)
        this.cartaoCredito = cartaoCredito
    }
    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
    set tipo(conta){
        this._tipo = conta
    }
    get tipo(){
        return this._tipo
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, tipo, saldo)
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, tipo, saldo)
    }
}




let a = new ContaPoupanca(101,2880,'Conta teste','R$ 500,20')
console.log(a)