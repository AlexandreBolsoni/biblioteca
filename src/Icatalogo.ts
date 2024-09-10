import { Item } from "./modules/Item";


export interface ICatalogo extends Item {
    adicionarItem(item: Item): void;
    buscarItemPorCod(codItem: number): Item | undefined;


}
