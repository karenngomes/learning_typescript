class Produto {
    codigo: number;
    descricao: string;
    preco:number;
    constructor(_codigo:number, _descricao:string, _preco:number) {
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }

    getDados() {
        return "Produto " + this.codigo + ' ' + this.descricao + ' - R$ ' + this.preco;
    }

}