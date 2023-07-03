// let fruitList = ["Banana", "Maça", "Laranja", "Abacaxi"];

// let profileList = {
//   name: "Douglas",
//   age: 29,
//   nationality: "Brasil",
//   race: "brown",
// };

// alert(profileList.age);
//-----------------------------------------------------
//exercício

// let car = "ferrari";

// let cakePrice = 19.99;

// let cidade = "São Paulo";

// console.log(`${car}`);
// console.log(`${cakePrice}`);
// console.log(`${cidade}`);
//---------------------------------------------------
//Array

// let colors = ["yellow", ["back", "blue"]];

// console.log(colors[0]);

// let secondColors = colors[1];

// console.log(secondColors[0]);

// -------------------------------------------------------
// let fruits = ["Laranja", "Banana", "Pêra", "Maça"];

// if (fruits.includes("Uva")) {
//   console.log("Tem uva!!");
// } else {
//   console.log("Acabou a Uva!!");
// }

// fruits[fruits.length - 4] = "Pêra";

// console.log(fruits);

// pop = remove o último item do array
// shift = remove o primeiro item do array

// let cars = ["BMW", "Ferrari", "Mercedes"];

// let carName = cars[1];

// cars[1] = "Audi";

// cars.push("Volvo");
// console.log(cars);
// console.log(cars.length);
// -------------------------------------------------------------

// let cars = [
//   { brand: "Fiat", year: 2022 },
//   { brand: "Bmw", year: 20218 },
//   { brand: "Ferrari", year: 2020 },
// ];

// cars.sort((a, b) => {
//   return b.year - a.year;
// });

// const shoppingList = [];
// console.log(shoppingList);

// shoppingList[0] = "Olá";
// shoppingList[1] = "Hello";
// shoppingList[2] = 5;

// console.log(shoppingList);

// let arr = ["a", "d", "c"];

// const include = arr.includes("b");
// console.log(arr);
// console.log(include);

// if (include === true) {
//   console.log("Inclui este elemento no Array");
// } else {
//   console.log("Não Inclui este elemento no Array");
// }

// let fila = [];
// let opcao = "";

// do {
//   let pacientes = "";
//   for (let i = 0; i < fila.length; i++) {
//     pacientes += i + 1 + "-" + fila[i] + "\n";
//   }

//   opcao = prompt(
//     "Pacientes:\n" +
//       pacientes +
//       "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
//   );

//   switch (opcao) {
//     case "1":
//       const novoPaciente = prompt("Qual é o nome do paciente?");
//       fila.push(novoPaciente);
//       break;
//     case "2":
//       const pacienteConsultado = fila.shift();
//       if (pacienteConsultado) {
//         alert(pacienteConsultado + " foi removido da fila.");
//       } else if (pacienteConsultado === undefined) {
//         alert("Não tem paciente na fila.");
//       }
//       break;
//     case "3":
//       alert("Encerrando...");
//       break;
//     default:
//       alert("Opção Inválida!");
//   }
// } while (opcao !== "3");
// const arr = [
//   "nivel 1",
//   ["nivel 2", 5, true],
//   [["nivel 3, item 1"], ["nivel 3, item 2"]],
// ];
// console.log(arr[2][1]);
