"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
class Locacao {
    constructor(codLocacao, membro, item, dataLocacao, dataPrevistaDevolucao) {
        this.codLocacao = codLocacao;
        this.membro = membro;
        this.item = item;
        this.dataLocacao = dataLocacao;
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
        this.dataDevolucao = null;
    }
    getCodLocacao() {
        return this.codLocacao;
    }
    setCodLocacao(codLocacao) {
        this.codLocacao = codLocacao;
    }
    getMembro() {
        return this.membro;
    }
    setMembro(membro) {
        this.membro = membro;
    }
    getItem() {
        return this.item;
    }
    setItem(item) {
        this.item = item;
    }
    getDataLocacao() {
        return this.dataLocacao;
    }
    setDataLocacao(dataLocacao) {
        this.dataLocacao = dataLocacao;
    }
    getDataPrevistaDevolucao() {
        return this.dataPrevistaDevolucao;
    }
    setDataPrevistaDevolucao(dataPrevistaDevolucao) {
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
    }
    getDataDevolucao() {
        return this.dataDevolucao;
    }
    setDataDevolucao(dataDevolucao) {
        this.dataDevolucao = dataDevolucao;
    }
    // Lógica para devolver o item
    devolver() {
        this.dataDevolucao = new Date(); // Define a data de devolução como a data atual
        console.log(`Item '${this.item.getTitulo()}' devolvido pelo membro '${this.membro.getNome()}' na data ${this.dataDevolucao.toLocaleDateString()}.`);
    }
    // Lógica para emprestar o item
    emprestar() {
        console.log(`Item '${this.item.getTitulo()}' emprestado ao membro '${this.membro.getNome()}' na data ${this.dataLocacao.toLocaleDateString()}. A devolução deve ocorrer até ${this.dataPrevistaDevolucao.toLocaleDateString()}.`);
    }
    // Lógica para notificar atraso na devolução
    notificarAtraso() {
        const dataAtual = new Date();
        if (!this.dataDevolucao && dataAtual > this.dataPrevistaDevolucao) {
            const diasAtraso = Math.floor((dataAtual.getTime() - this.dataPrevistaDevolucao.getTime()) / (1000 * 3600 * 24));
            return `Atenção! O item '${this.item.getTitulo()}' está atrasado em ${diasAtraso} dias para devolução. Membro: '${this.membro.getNome()}'.`;
        }
        else if (this.dataDevolucao && this.dataDevolucao > this.dataPrevistaDevolucao) {
            const diasAtraso = Math.floor((this.dataDevolucao.getTime() - this.dataPrevistaDevolucao.getTime()) / (1000 * 3600 * 24));
            return `O item '${this.item.getTitulo()}' foi devolvido com ${diasAtraso} dias de atraso pelo membro '${this.membro.getNome()}'.`;
        }
        else {
            return `Nenhum atraso na devolução do item '${this.item.getTitulo()}'.`;
        }
    }
    toString() {
        return `
        LOCAÇÃO \nCódigo: ${this.codLocacao}\nMembro: ${this.membro.getNome()}\nItem: ${this.item.getTitulo()}\nData de Locação: ${this.dataLocacao.toLocaleDateString()}\nData Prevista para Devolução: ${this.dataPrevistaDevolucao.toLocaleDateString()}\n${this.dataDevolucao ? "Devolvido em: " + this.dataDevolucao.toLocaleDateString() : "Não Devolvido"}`;
    }
}
exports.Locacao = Locacao;
//# sourceMappingURL=Locacao.js.map