import { Item } from './Item';

export class Revista extends Item {
    private dataLancamento: Date;

    constructor(codItem: number, titulo: string, autor: string, ISBN: number, dataLancamento: Date) {
        super(codItem, titulo, autor, ISBN);
        this.dataLancamento = dataLancamento;
    }

    public getDataLancamento(): Date {
        return this.dataLancamento;
    }

    public setDataLancamento(dataLancamento: Date): void {
        this.dataLancamento = dataLancamento;
    }
    public toString(): string {
        return `Revista:\nTítulo: ${this.Titulo}\nData de Lançamento: ${this.dataLancamento.toLocaleDateString()}\nAutor: ${this.Autor}\nISBN: ${this.isbn}`;
    }
}
