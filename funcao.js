// //função: É um trexo de código independente, quando necessário utilizar,
// //utilizasse

// //Criando uma função
// const gravity = () => {
//   console.log(`A gravidade do planeta é: ${9.8}`);
// };
// // gravity();

// // passando parâmetros para uma função

// const sum = (n1, n2) => {
//   let result = n1 + n2;
//   console.log(`Resultado: ${result}`);
// };

// // sum(10, 15);

// // Retorno de funções
// // ENTRADA -> PROCESSAMENTO -> SAÍDA

// const fullName = (name, lastName) => {
//   return `${name} ${lastName}`;
// };

// let OutputName = fullName("Douglas", "Trindade");
// console.log(`Seu nome completo é: ${OutputName}`);

// // Função com retorno condicional

// const ofLegalAge = (age) => {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let age = 18;
// let verification = ofLegalAge(age);

// if (verification) {
//   console.log("É maior de idade");
// } else {
//   console.log("É menor de idade");
// }

// // functions e variaveis

// let count = 0;

// const add = () => {
//   count++;
// };

// // add();

// // console.log(count);

// // função com retorno condicional

// const maiorDeIdade = (idade) => {
//   if (idade >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let idade = 17;
// let verificacao = maiorDeIdade(idade);

// if (verificacao) {
//   console.log("É maior de idade");
// } else {
//   console.log("É menor de idade");
// }

// // funções dentro de funções

// const square = (x) => {
//   return x * x;
// };

// const addSquares = (a, b) => {
//   let sqrA = square(a);
//   let sqrB = square(b);
//   return sqrA + sqrB;
// };

// // console.log(addSquares(2, 3));

//funções anonimas

// const isTest = (a, b) => {
//   return a + b;
// };

// // console.log(isTest(5, 5));

// // testing();
// testing2();

// const testing = () => {
//   console.log("Olá");
// };

// const testing2 = function () {
//   console.log("Olá2");
// };

//HIGH-ORDER FUNCTIONS

// const calculator = (a, b, operation) => {
//   console.log("Realizando uma operação.");
//   const result = operation(a, b);
//   return result;
// };

// const sum = (x, y) => {
//   console.log("Realizando uma soma.");
//   return x + y;
// };

// console.log(calculator(3, 5, sum));

// console.log(
//   calculator(8, 4, (x, y) => {
//     console.log("Realizando uma subtração.");
//     return x - y;
//   })
// );

// const showElement = (element, index, array) => {
//   console.log({ element, index, array });
// };

// const list = ["Maça", "Banana", "Morango", "Laranja"];

// for (let i = 0; i < list.length; i++) {
//   showElement(list[i], i, list);
// }

// list.forEach(showElement);

// list.forEach((element, index, array) => {
//   console.log({ element, index, array });
// });

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// const nomes = [];

// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome);
// }

const nomes = personagens.map((personagem) => {
  return personagem.nome;
});

// console.log(nomes);

//Filter
// const orcs = [];

// for (let i = 0; i < personagens.length; i++) {
//   if (personagens[i].raca === "Orc") {
//     orcs.push(personagens[i]);
//   }
// }

const orcs = personagens.filter((personagem) => {
  return personagem.raca === "Orc";
});

// console.log(orcs);

// Reduce

const nivelTOtal = personagens.reduce((valorAcumulado, personagem) => {
  return valorAcumulado + personagem.nivel;
}, 0);

// console.log(nivelTOtal);

const racas = personagens.reduce((valorAcumulado, personagem) => {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }

  return valorAcumulado;
}, {});

// console.log(racas);

// sort: ordena os elementos de um array
// a partir de comparações entre duplas de elementos
// 1, 2, 4, 7, 3, 0

const personagensOrdenados = personagens.slice().sort((a, b) => {
  return b.nivel - a.nivel;
});

// console.log(personagens);
// console.log(personagensOrdenados);
