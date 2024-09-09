import { BibliotecaController } from './bibliotecaControler';
import { Livro } from './modules/Livro';
import { Revista } from './modules/Revista';
import { Membro } from './modules/Membro';
import { Locacao } from './modules/Locacao';
import { Titular } from './modules/Titular';
import { Dependente } from './modules/Dependente';


//Inicializando o controlador da biblioteca
const bibliotecaController = new BibliotecaController();

// Criando alguns livros
const livro1 = new Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien", 9788578273696, "Fantasia");
const livro2 = new Livro(2, "1984", "George Orwell", 9780451524935, "Ficção Científica");
const livro3 = new Livro(3, "A Revolução dos Bichos", "George Orwell", 9780451526342, "Fábula Política");
const livro4 = new Livro(4, "O Pequeno Príncipe", "Antoine de Saint-Exupéry", 9788525057800, "Fábula");
const livro5 = new Livro(5, "Dom Quixote", "Miguel de Cervantes", 9780199537891, "Clássico");
const livro6 = new Livro(6, "A Princesa", "Antoine de Saint-Exupéry", 9788525057800, "Fábula");

// Criando algumas revistas
const revista1 = new Revista(6, "National Geographic", "National Geographic Society", 9781426217777, new Date("2024-01-01"));
const revista2 = new Revista(7, "Scientific American", "Springer Nature", 9780385495325, new Date("2024-02-01"));
const revista3 = new Revista(8, "TIME", "Time Inc.", 9781618930037, new Date("2024-03-01"));
const revista4 = new Revista(9, "The New York Times", "The New York Times Company", 9781451649310, new Date("2024-04-01"));

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

// Criando alguns titulares


//criando dependentes


//add titular a dependentes 


// Adicionando membros à biblioteca



// Realizando algumas locações


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