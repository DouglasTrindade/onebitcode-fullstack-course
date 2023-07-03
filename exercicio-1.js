const calcPct = (n1, n2) => {
  return (n2 / n1) * 100;
};

let x = 50;
let y = 20;

let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
//---------------------------->

const immobileCalc = (metreage, bedrooms) => {
  let m2 = 3000;
  let price = 0;

  switch (bedrooms) {
    case 1:
    default:
      price = metreage * m2;
      break;
    case 2:
      price = metreage * (m2 * 1.2);
      break;
    case 3:
      price = metreage * (m2 * 1.5);
      break;
  }

  return price;
};

let metreage = 10;
let bedrooms = 1;
let price = immobileCalc(metreage, bedrooms);
console.log(`A casa custa R$ ${price}`);

//-------------------------->

const validateLogin = (user, password) => {
  if (user === "pedro" && password === "1234") {
    return true;
  } else {
    return false;
  }
};

let user = "douglas";
let password = "1234";
let validation = validateLogin(user, password);
if (validation) {
  console.log("Acesso concedido!");
} else {
  console.log("Acesso negado!");
}

// Arrow Function

const sobrenome = (sob) => `Douglas ${sob}`;

console.log(sobrenome(`Trindade`));
