"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Membro = void 0;
class Membro {
    constructor(codMembro, nome, statusAssociacao) {
        this.codMembro = codMembro;
        this.nome = nome;
        this.statusAssociacao = statusAssociacao;
    }
    getCodMembro() {
        return this.codMembro;
    }
    setCodMembro(codMembro) {
        this.codMembro = codMembro;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getStatusAssociacao() {
        return this.statusAssociacao;
    }
    setStatusAssociacao(statusAssociacao) {
        this.statusAssociacao = statusAssociacao;
    }
    toString() {
        return `Membro:\nNome: ${this.nome}\nCódigo: ${this.codMembro}\nStatus: ${this.statusAssociacao === 1 ? "Ativo" : "Inativo"}`;
    }
}
exports.Membro = Membro;
//# sourceMappingURL=Membro.js.map