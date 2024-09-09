"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(codItem, titulo, autor, ISBN) {
        this.codItem = codItem;
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
    }
    getCodItem() {
        return this.codItem;
    }
    setCodItem(codItem) {
        this.codItem = codItem;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getISBN() {
        return this.ISBN;
    }
    setISBN(ISBN) {
        this.ISBN = ISBN;
    }
}
exports.Item = Item;
//# sourceMappingURL=Item.js.map