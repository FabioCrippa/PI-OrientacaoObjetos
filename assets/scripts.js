//class pai
class contaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;/*quando cria um getter e setter, usa-se underline(_),
        com isso, a função saldo terá o nome saldo, mas a propriedade não terá o nome saldo*/
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = this.saldo;
    }

    //método sacar
    sacar(valor) {
        if (valor > this._saldo) {
            return "Saldo insuficiente";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    //método depositar
    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

//class filha
class contaCorrente extends contaBancaria {
    constructor (agencia, numero, cartaoCredito) {
       super (agencia, numero);//pegar todas as propriedades da class ContaBancaria(pai) 
       
       this.tipo = "corrente";
       this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
       return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }
}

//class filha
class contaPoupanca extends contaBancaria {
    constructor (agencia, numero) {
       super (agencia, numero);//pegar todas as propriedades da class ContaBancaria(pai) 
       this.tipo = "poupança";
    }
}

//class filha
class contaUniversitaria extends contaBancaria{
    constructor (agencia, numero) {
       super (agencia, numero);//pegar todas as propriedades da class ContaBancaria(pai) 
       this.tipo = "universitária";
    }

    sacar (valor) {
        if (valor > 500) {
            return "Limite para saque até 500"
        }

        this._saldo - valor;
    }
}