"use strict";
exports.__esModule = true;
/*import * as readline from 'readline-sync';

let name = readline.question("What is your name? ");

console.log("Hi " + name + ", nice to meet you.");
*/
var Conta = /** @class */ (function () {
    function Conta() {
        this.titular = new Cliente();
    }
    Conta.prototype.saca = function (quantidade) {
        if (this.saldo < quantidade)
            return false;
        else {
            var novoSaldo = this.saldo - quantidade;
            this.saldo = novoSaldo;
            return true;
        }
    };
    Conta.prototype.deposita = function (quantidade) {
        this.saldo += quantidade;
    };
    Conta.prototype.transfere = function (destino, valor) {
        var retirou = this.saca(valor);
        if (retirou) {
            destino.deposita(valor);
            return true;
        }
        return false;
    };
    return Conta;
}());
exports.Conta = Conta;
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
