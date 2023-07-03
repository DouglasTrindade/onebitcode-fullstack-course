const calculateAreaTriangle = () => {
  const base = prompt("Informe a base do triângulo: ");
  const hight = prompt("Informe a altura do triângulo: ");
  return (base * hight) / 2;
};

const calculateAreaRetangle = () => {
  const base = prompt("Informe a base do retangle: ");
  const hight = prompt("Informe a altura do retangle: ");
  return base * hight;
};

const calculateAreaSquare = () => {
  const side = prompt("Informe o lado do quadrado: ");
  return side * side;
};

const calculateAreaTrapeze = () => {
  const highBase = parseFloat(prompt("Informe a base maior do trapézio: "));
  const smallerBase = parseFloat(prompt("Informe a base menor do trapézio: "));
  const hight = parseFloat(prompt("Informe a altura do trapézio: "));
  return ((highBase + smallerBase) * hight) / 2;
};

const calculateAreaCircle = () => {
  const raio = prompt("informe o raio do círculo: ");
  return 3.14 * raio * raio;
};

const showMenu = () => {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
};

const execute = () => {
  let option = "";

  do {
    option = showMenu();
    let result;

    switch (option) {
      case "1":
        result = calculateAreaTriangle();
        break;
      case "2":
        result = calculateAreaRetangle();
        break;
      case "3":
        result = calculateAreaSquare();
        break;
      case "4":
        result = calculateAreaTrapeze();
        break;
      case "5":
        result = calculateAreaCircle();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }

    if (result) {
      alert("Resultado: " + result);
    }
  } while (option !== "6");
};

execute();
