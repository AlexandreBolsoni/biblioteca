import { Membro } from './Membro';
import { Item } from './Item';

export class Locacao {
    private codLocacao: number;
    private membro: Membro;
    private item: Item;
    private dataLocacao: Date;
    private dataDevolucao: Date | null; // Armazena a data de devolução, se o item foi devolvido
    private dataPrevistaDevolucao: Date; // Data limite para devolver o item

    constructor(codLocacao: number, membro: Membro, item: Item, dataLocacao: Date, dataPrevistaDevolucao: Date) {
        this.codLocacao = codLocacao;
        this.membro = membro;
        this.item = item;
        this.dataLocacao = dataLocacao;
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
        this.dataDevolucao = null;
    }

    public getCodLocacao(): number {
        return this.codLocacao;
    }

    public setCodLocacao(codLocacao: number): void {
        this.codLocacao = codLocacao;
    }

    public getMembro(): Membro {
        return this.membro;
    }

    public setMembro(membro: Membro): void {
        this.membro = membro;
    }

    public getItem(): Item {
        return this.item;
    }

    public setItem(item: Item): void {
        this.item = item;
    }

    public getDataLocacao(): Date {
        return this.dataLocacao;
    }

    public setDataLocacao(dataLocacao: Date): void {
        this.dataLocacao = dataLocacao;
    }

    public getDataPrevistaDevolucao(): Date {
        return this.dataPrevistaDevolucao;
    }

    public setDataPrevistaDevolucao(dataPrevistaDevolucao: Date): void {
        this.dataPrevistaDevolucao = dataPrevistaDevolucao;
    }

    public getDataDevolucao(): Date | null {
        return this.dataDevolucao;
    }

    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    // Lógica para devolver o item
    public devolver(): void {
        this.dataDevolucao = new Date(); // Define a data de devolução como a data atual
        console.log(`Item '${this.item.Titulo}' devolvido pelo membro '${this.membro.Nome}' na data ${this.dataDevolucao.toLocaleDateString()}.`);
    }

    // Lógica para emprestar o item
    public emprestar(): void {
        console.log(`Item '${this.item.Titulo}' emprestado ao membro '${this.membro.Nome}' na data ${this.dataLocacao.toLocaleDateString()}. A devolução deve ocorrer até ${this.dataPrevistaDevolucao.toLocaleDateString()}.`);
    }

    // Lógica para notificar atraso na devolução
    public notificarAtraso(): string {
        const dataAtual = new Date();
        
        if (this.dataDevolucao === null && this.dataPrevistaDevolucao !== undefined && dataAtual > this.dataPrevistaDevolucao) {
            const diasAtraso = Math.floor((dataAtual.getTime() - this.dataPrevistaDevolucao.getTime()) / (1000 * 3600 * 24));
            return `Atenção! O item '${this.item?.Titulo}' está atrasado em ${diasAtraso} dias para devolução. Membro: '${this.membro?.Nome}'.`;
        } else if (this.dataDevolucao !== null && this.dataDevolucao > this.dataPrevistaDevolucao) {
            const diasAtraso = Math.floor((this.dataDevolucao.getTime() - this.dataPrevistaDevolucao.getTime()) / (1000 * 3600 * 24));
            return `O item '${this.item?.Titulo}' foi devolvido com ${diasAtraso} dias de atraso pelo membro '${this.membro?.Nome}'.`;
        } else {
            return `Nenhum atraso na devolução do item '${this.item?.Titulo}'.`;
        }
    }

    
    public toString(): string {
        return `
        LOCAÇÃO \nCódigo: ${this.codLocacao}\nMembro: ${this.membro.Nome}\nItem: ${this.item.Titulo}\nData de Locação: ${this.dataLocacao.toLocaleDateString()}\nData Prevista para Devolução: ${this.dataPrevistaDevolucao.toLocaleDateString()}\n${this.dataDevolucao ? "Devolvido em: " + this.dataDevolucao.toLocaleDateString() : "Não Devolvido"}`;
    }
}
