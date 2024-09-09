import { Item } from './Item';

export class Livro extends Item {
    private categoria: string;

    constructor(codItem: number, titulo: string, autor: string, ISBN: number, categoria: string) {
        super(codItem, titulo, autor, ISBN);
        this.categoria = categoria;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }
    public toString(): string {
        return `Livro:\nTítulo: ${this.Titulo}\nCategoria: ${this.categoria}\nAutor: ${this.Autor}\nISBN: ${this.isbn}`;
    }
}
