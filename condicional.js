let x = 10;
let y = 5;

console.log(x > y);

let w = "10";
let z = 10;

console.log(w === z);

let a = 10;
let b = 5;

console.log(x != y);

let price = 46;

if (price <= 45) {
  console.log('O preço da carne está barato!')
} else {
  console.log('O preço da carne está caro!')
}

// COndicional ternário //

let isMember = false;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro' : 'Você não é membro');
console.log(`Frete: ${shipping}`);


let age = 15;

let isAdult = ((age >= 18 && age < 60) ? 'Sim' : 'Não');

console.log(isAdult);