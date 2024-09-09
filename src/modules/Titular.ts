import { Membro } from './Membro';
import { Dependente } from './Dependente';

export class Titular extends Membro {
    private listaDependente: Dependente[];

  constructor(codMembro: number, nome: string, statusAssociacao: number, listaDependente: Dependente[]) {
      super(codMembro, nome, statusAssociacao.toString());
      this.listaDependente = listaDependente;
  }

    public getListaDependente(): Dependente[] {
        return this.listaDependente;
    }

    public setListaDependente(listaDependente: Dependente[]): void {
        this.listaDependente = listaDependente;
    }
}