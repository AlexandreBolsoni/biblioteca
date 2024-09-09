import { Membro } from "./Membro";

export class Dependente  extends Membro{
    constructor(codMembros: number, nome: string, statusAssociacao: number) {
        super(codMembros, nome, statusAssociacao.toString());
    }
}