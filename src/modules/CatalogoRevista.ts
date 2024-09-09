import { Revista } from './Revista';

export class CatalogoRevistas {
    private revistas: Revista[];

    constructor() {
        this.revistas = [];
    }

    public adicionarItem(revista: Revista): void {
        this.revistas.push(revista);
    }

    public buscarItemPorCod(codItem: number): Revista | undefined {
        return this.revistas.find(revista => revista.CodItem === codItem);
    }
}
