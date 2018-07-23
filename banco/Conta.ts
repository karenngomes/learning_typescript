/*import * as readline from 'readline-sync';

let name = readline.question("What is your name? ");

console.log("Hi " + name + ", nice to meet you.");
*/
export class Conta {
    numero: number;
    titular: Cliente = new Cliente();
    saldo: number;
    limite: number;

    saca (quantidade:number):boolean {
        if(this.saldo < quantidade) 
            return false;
        else {
            let novoSaldo: number = this.saldo - quantidade;
            this.saldo = novoSaldo;
            return true;
        } 
    }

    deposita(quantidade:number) {
        this.saldo += quantidade;
    }

    transfere(destino: Conta, valor:number):boolean {
        let retirou: boolean = this.saca(valor);
        if(retirou) {
            destino.deposita(valor);
            return true;
        }
        return false;
    }

}

class Cliente {
    nome: string;
    sobrenome: string;
    cpf: string;
}
