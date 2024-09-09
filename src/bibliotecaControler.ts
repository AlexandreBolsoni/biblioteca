import { ICatalogo } from './Icatalogo';
import { CatalogoLivros } from './modules/CatalogoLivro';
import { CatalogoRevistas } from './modules/CatalogoRevista';
import { Membro } from './modules/Membro';
import { Locacao } from './modules/Locacao';
import { Livro } from './modules/Livro';
import { Revista } from './modules/Revista';

export class BibliotecaController {
    private catalogoLivros: CatalogoLivros;
    private catalogoRevistas: CatalogoRevistas;
    private membros: Membro[];
    private locacoes: Locacao[];

    constructor() {
        this.catalogoLivros = new CatalogoLivros();
        this.catalogoRevistas = new CatalogoRevistas();
        this.membros = [];
        this.locacoes = [];
    }

    // Métodos relacionados a livros
    public adicionarLivro(livro: Livro): void {
        this.catalogoLivros.adicionarItem(livro);
    }

    public buscarLivroPorCod(codItem: number): Livro | undefined {
        return this.catalogoLivros.buscarItemPorCod(codItem);
    }

    // Métodos relacionados a revistas
    public adicionarRevista(revista: Revista): void {
        this.catalogoRevistas.adicionarItem(revista);
    }

    public buscarRevistaPorCod(codItem: number): Revista | undefined {
        return this.catalogoRevistas.buscarItemPorCod(codItem);
    }

    // Métodos relacionados a membros
    public adicionarMembro(membro: Membro): void {
        this.membros.push(membro);
    }

    public buscarMembroPorCod(codMembro: number): Membro | undefined {
        return this.membros.find(membro => membro.getCodMembro() === codMembro);
    }

    // Métodos relacionados a locações
    public realizarLocacao(locacao: Locacao): void {
        this.locacoes.push(locacao);
        locacao.emprestar();
    }

    public devolverItem(locacao: Locacao): void {
        locacao.devolver();
    }

    public notificarAtrasoLocacao(locacao: Locacao): void {
        locacao.notificarAtraso();
    }

    public listarLocacoes(): Locacao[] {
        return this.locacoes;
    }
}
