import { Conta } from './Conta';

let minhaConta:Conta = new Conta();

minhaConta.titular.nome = "Karen";
minhaConta.saldo = 1000.0;

console.log("Dono da conta: " + minhaConta.titular.nome);
console.log("Saldo atual: " + minhaConta.saldo);

if(minhaConta.saca(500)){
    console.log("Saldo atual: " + minhaConta.saldo);
} else {
    console.log("Valor de saque maior que o saldo atual.");
}

minhaConta.deposita(2000);
console.log("Saldo atual: " + minhaConta.saldo);

if(minhaConta.saca(3000)) {
    console.log("Saldo atual: " + minhaConta.saldo);
} else {
    console.log("Valor de saque maior que o saldo atual.");
}
