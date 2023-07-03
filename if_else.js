// IF / ELSE - Passar uma condição entre parenteses
// e uma ação dentro das chaves

// let age = 29;

// if (age >= 17) {
//   console.log('Você é maior de idade!');
// } else {
//   console.log('Você ainda é de menor FDP!!');
// }

//Ex:

// let age = 80;

// if (age >= 18) {
//   if (age < 60) {
//     console.log('Você é um adulto!');
//   } else {
//     console.log('Você é um garotinho!');
//   }
// }

//Ex 2:

// let age = 80;

// if (age >= 17 && age < 60) {
//   console.log('Você é maior de idade!');
// }

// Toda condicional é individual, sempre repetir a variável
// em cada condicional

// let age = 80;

// if (age > 17 && age < 60) {
//   console.log('Você é maior de idade!');
// }

// Quando u sar o "||" (barra em pé) independente de qual condicional
//der CERTO, ele irá entrar.

//-----------------------------
// Condição dupla é chamada de (else if)

// let age = 55

// if (age > 17 && age < 49) {
//   console.log('Você é um adulto!');
// } else if (age > 49 && age < 60) {
//   console.log('Vocé é um coroa!');
// } else if (age > 64 && age < 120) {
//   console.log('Você é um idoso!');
// }

//IF ELSE

let temperature = 40;

if (temperature >= 36.6 && temperature <= 36.9) {
  console.log("Ele está febril");
} else if (temperature >= 37 && temperature <= 38) {
  console.log("Ele está com febre");
} else if (temperature >= 39) {
  console.log("Ele está com febre alta");
} else {
  console.log("Ele está normal");
}
