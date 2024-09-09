export  abstract class Membro {
    private codMembro: number;
    private nome: string;
    private statusAssociacao: string;

    constructor(codMembro: number, nome: string, statusAssociacao: string) {
        this.codMembro = codMembro;
        this.nome = nome;
        this.statusAssociacao = statusAssociacao;
    }

     get CodMembro(): number {
        return this.codMembro;
    }

    set CodMembro(codMembro: number) {
        this.codMembro = codMembro;
    }

     get Nome(): string {
        return this.nome;
    }

    set Nome(nome: string) {
        this.nome = nome;
    }

     get StatusAssociacao(): string {
        return this.statusAssociacao;
    }

   set StatusAssociacao(statusAssociacao: string) {
       this.statusAssociacao = statusAssociacao;
   }
     public toString(): string {
        return `Membro:\nCódigo: ${this.codMembro}\nNome: ${this.nome}\nStatus: ${this.statusAssociacao}`;
    }
}
