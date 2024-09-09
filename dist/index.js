"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotecaControler_1 = require("./bibliotecaControler");
const Livro_1 = require("./modules/Livro");
const Revista_1 = require("./modules/Revista");
const Membro_1 = require("./modules/Membro");
const Locacao_1 = require("./modules/Locacao");
//Inicializando o controlador da biblioteca
const bibliotecaController = new bibliotecaControler_1.BibliotecaController();
// Criando alguns livros
const livro1 = new Livro_1.Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien", 9788578273696, "Fantasia");
const livro2 = new Livro_1.Livro(2, "1984", "George Orwell", 9780451524935, "Ficção Científica");
const livro3 = new Livro_1.Livro(3, "A Revolução dos Bichos", "George Orwell", 9780451526342, "Fábula Política");
const livro4 = new Livro_1.Livro(4, "O Pequeno Príncipe", "Antoine de Saint-Exupéry", 9788525057800, "Fábula");
const livro5 = new Livro_1.Livro(5, "Dom Quixote", "Miguel de Cervantes", 9780199537891, "Clássico");
const livro6 = new Livro_1.Livro(6, "A Princesa", "Antoine de Saint-Exupéry", 9788525057800, "Fábula");
// Criando algumas revistas
const revista1 = new Revista_1.Revista(6, "National Geographic", "National Geographic Society", 9781426217777, new Date("2024-01-01"));
const revista2 = new Revista_1.Revista(7, "Scientific American", "Springer Nature", 9780385495325, new Date("2024-02-01"));
const revista3 = new Revista_1.Revista(8, "TIME", "Time Inc.", 9781618930037, new Date("2024-03-01"));
const revista4 = new Revista_1.Revista(9, "The New York Times", "The New York Times Company", 9781451649310, new Date("2024-04-01"));
// Adicionando livros ao catálogo
bibliotecaController.adicionarLivro(livro1);
bibliotecaController.adicionarLivro(livro2);
bibliotecaController.adicionarLivro(livro3);
bibliotecaController.adicionarLivro(livro4);
bibliotecaController.adicionarLivro(livro5);
bibliotecaController.adicionarLivro(livro6);
// Adicionando revistas ao catálogo
bibliotecaController.adicionarRevista(revista1);
bibliotecaController.adicionarRevista(revista2);
bibliotecaController.adicionarRevista(revista3);
bibliotecaController.adicionarRevista(revista4);
// Criando alguns membros
const membro1 = new Membro_1.Membro(1, "João Silva", 1); // Titular
const membro2 = new Membro_1.Membro(2, "Maria Souza", 1); // Dependente
const membro3 = new Membro_1.Membro(3, "Carlos Pereira", 1); // Titular
const membro4 = new Membro_1.Membro(4, "Ana Oliveira", 1); // Titular
const membro5 = new Membro_1.Membro(5, "Paula Fernandes", 1); // Titular
const membro6 = new Membro_1.Membro(6, "Maria Fernandes", 1); // Titular
// Adicionando membros à biblioteca
bibliotecaController.adicionarMembro(membro1);
bibliotecaController.adicionarMembro(membro2);
bibliotecaController.adicionarMembro(membro3);
bibliotecaController.adicionarMembro(membro4);
bibliotecaController.adicionarMembro(membro5);
bibliotecaController.adicionarMembro(membro6);
// Realizando algumas locações
const locacao1 = new Locacao_1.Locacao(1, membro1, livro1, new Date(), new Date("2024-09-01"));
const locacao2 = new Locacao_1.Locacao(2, membro2, revista1, new Date(), new Date("2024-08-31"));
const locacao3 = new Locacao_1.Locacao(3, membro3, livro3, new Date(), new Date("2024-09-05"));
const locacao4 = new Locacao_1.Locacao(4, membro4, revista2, new Date(), new Date("2024-09-07"));
const locacao5 = new Locacao_1.Locacao(5, membro5, livro5, new Date(), new Date("2024-09-10"));
const locacao6 = new Locacao_1.Locacao(6, membro6, revista4, new Date("2024-09-06"), new Date("2024-09-06"));
bibliotecaController.realizarLocacao(locacao1);
bibliotecaController.realizarLocacao(locacao2);
bibliotecaController.realizarLocacao(locacao3);
bibliotecaController.realizarLocacao(locacao4);
bibliotecaController.realizarLocacao(locacao5);
bibliotecaController.realizarLocacao(locacao6);
// Devolvendo itens
locacao1.devolver();
// Notificando atrasos (assumindo que a data atual é após a data de devolução prevista)
locacao2.notificarAtraso();
// Exibindo as locações realizadas com `toString`
console.log("Locações realizadas:");
bibliotecaController.listarLocacoes().forEach(locacao => {
    console.log(locacao.toString());
});
//# sourceMappingURL=index.js.map