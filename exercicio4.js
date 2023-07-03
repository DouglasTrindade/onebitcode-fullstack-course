const vacancies = [];

const vacanciesList = () => {
  const textVacancies = vacancies.reduce((finalText, vacancy, index) => {
    //1. nome, quantidade de candidatos
    finalText += index + ".";
    finalText += vacancy.name;
    finalText += "(" + vacancy.candidates.length + " candidatos)\n";
    return finalText;
  }, "");

  alert(textVacancies);
};

const newVacancy = () => {
  const name = prompt("Informe um nome para a vaga: ");
  const description = prompt("Informe uma descrição para a vaga");
  const limitDate = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga");

  const confirmation =
    confirm(`Deseja criar uma nova vaga com essas informações?
      \nNome: ${name}
      \nDescrição: ${description}
      \nData limite: ${limitDate}`);

  if (confirmation) {
    const newVacancy = { name, description, limitDate, candidates: [] };
    vacancies.push(newVacancy);
    alert("Vaga criada.");
  }
};

const showVacancy = () => {
  const index = prompt("Informe o indice da vaga que deseja exibir: ");
  const vacancy = vacancies[index];

  const textCandidates = vacancies.candidates.reduce((finalText, candidate) => {
    return finalText + "\n - " + candidate;
  }, "");

  alert(
    "Vaga número " +
      index +
      "\nNome: " +
      vacancy.name +
      "\nDescrição: " +
      vacancy.description +
      "\nData Limite: " +
      vacancy.limitDate +
      "\nQuantidade de candidatos" +
      vacancy.candidates.length +
      "\nCandidatos inscritos: " +
      textCandidates
  );
};

const registerCandidates = () => {
  const candidate = prompt("Informe o nome do candidato(a): ");
  const index = prompt(
    "Informe o indice da vaga para qual o candidato deseja se inscrever"
  );
  const vacancy = vacancies[index];

  const confirmation = confirm(
    "Deseja inscrever o candidato " +
      candidate +
      " na vaga " +
      index +
      "?\n" +
      "Nome: " +
      vacancy.name +
      "\nDescrição: " +
      vacancy.description +
      "\nData limite: " +
      vacancy.limitDate
  );

  if (confirmation) {
    vacancy.candidates.push(candidate);
    alert("Inscrição realizada.");
  }
};

const removeVacancy = () => {
  const index = prompt("Informe o indice da vaga que deseja excluir: ");
  const vacancy = vacancies[index];

  const confirmation = confirm(
    "Tem certeza que deseja excluir a vaga, " +
      index +
      "?\n" +
      "Nome: " +
      vacancy.name +
      "\nDescrição: " +
      vacancy.description +
      "\nData limite: " +
      vacancy.limitDate
  );

  if (confirmation) {
    vacancies.splice(index, 1);
    alert("Vaga excluida.");
  }
};

const showMenu = () => {
  const options = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolha umas da opções: " +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um candidato" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return options;
};

const execute = () => {
  let options = "";

  do {
    options = showMenu();

    switch (options) {
      case "1":
        vacanciesList();
        break;
      case "2":
        newVacancy();
        break;
      case "3":
        showVacancy();
        break;
      case "4":
        registerCandidates();
        break;
      case "5":
        removeVacancy();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida");
    }
  } while (options !== "6");
};

execute();
