import { Item } from "./modules/Item";


export interface ICatalogo {
    adicionarItem(item: Item): void;
    buscarItemPorCod(codItem: number): Item | undefined;
}
