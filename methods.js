// let person = {
//   name: "douglas",
//   age: "29",
//   goals() {
//     console.log(`Meu nome é: ${person.name} e minha idade é: ${person.age}`);
//   },
// };

// console.log(person);
// person.goals();

//Funções recursivas

const divide = (num) => {
  console.log(num);
  if (num % 2 === 0) {
    divide(num / 2);
  } else {
    return num;
  }
};

// divide(40);

const fatorial = (num) => {
  console.log("Número: " + num);
  if (num == 0) {
    // caso base
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * ! " + (num - 1));
    return num * fatorial(num - 1);
  }
};

// console.log(fatorial(5));
