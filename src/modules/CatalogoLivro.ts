import { Livro } from './Livro';

export class CatalogoLivros {
    private livros: Livro[];

    constructor() {
        this.livros = [];
    }

    public adicionarItem(livro: Livro): void {
        this.livros.push(livro);
    }

    public buscarItemPorCod(codItem: number): Livro | undefined {
        return this.livros.find(livro => livro.CodItem === codItem);
    }
}
