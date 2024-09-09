"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const Item_1 = require("./Item");
class Livro extends Item_1.Item {
    constructor(codItem, titulo, autor, ISBN, categoria) {
        super(codItem, titulo, autor, ISBN);
        this.categoria = categoria;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    toString() {
        return `Livro:\nTítulo: ${this.getTitulo()}\nCategoria: ${this.categoria}\nAutor: ${this.getAutor()}\nISBN: ${this.getISBN()}`;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map