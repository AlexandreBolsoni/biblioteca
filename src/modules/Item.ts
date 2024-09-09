export abstract class Item {
    private codItem: number;
    private titulo: string;
    private autor: string;
    private ISBN: number;

    constructor(codItem: number, titulo: string, autor: string, ISBN: number) {
        this.codItem = codItem;
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
    }

    get CodItem(): number {
        return this.codItem;
    }

    set CodItem(codItem: number) {
        this.codItem = codItem;
    }

    get Titulo(): string {
        return this.titulo;
    }

    set Titulo(titulo: string) {
        this.titulo = titulo;
    }

    get Autor(): string {
        return this.autor;
    }

    set Autor(autor: string) {
        this.autor = autor;
    }

    get isbn(): number {
        return this.ISBN;
    }

    set isbn(isbn: number) {
        this.ISBN = isbn;
    }

    
}