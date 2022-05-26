class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar() {
        if(this.saldo >= valor) {
            this._saldo = this._saldo - valor;
            return this._saldo;
        } else {
            return 'Operação negada';
        }
    }

    depositar(valor) {
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPopanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Popanca';
    }
}

class ContaUniversitária extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Popanca';
    }

    sacar(valor) {
        if(this._saldo >= valor){
            if(valor <= 500) {
                this._saldo = this._saldo - valor;
                return this._saldo;
            } else {
                return 'Valor superior a 500 reais! Tente um valor inferior!'
            }
        } else {
            return 'Operação negada! Saldo insufiente!';
        }
    }
}