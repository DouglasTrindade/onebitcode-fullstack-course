// const show = () => {
//   const contractList = document.getElementById("contact-list");
//   console.log(contractList);

//   const listElements = document.getElementsByTagName("li");
//   console.log(listElements);

//   const contactsInput = document.getElementsByClassName("contact-input");
//   console.log(contactsInput);

//   const contacts = document.querySelectorAll("#contact-list > li > label");
//   console.log(contacts);

//   const contact1 = document.getElementsByName("contact1");
//   console.log(contact1);

//   const fistContact = document.querySelector("#contact-list > li > label");
//   console.log(fistContact);
// };

//--------------------------------------------------------------------------

//Add novos Elementos
// const addInput = () => {
//   const ul = document.getElementById("inputs");
//   console.log(ul);

//   const newLi = document.createElement("li");
//   newLi.className = "list-item";
//   newLi.innerText = "Novo input: ";

//   const newInput = document.createElement("input");
//   newInput.type = "text";
//   newInput.name = "input";

//   newLi.appendChild(newInput);
//   ul.appendChild(newLi);
//   console.log(newLi);
// };

//--------------------------------------------------------------------------

// const addContact = () => {
//   const contactSection = document.getElementById("contacts-list");

//   const h3 = document.createElement("h3");
//   h3.innerText = "Contato";

//   const ul = document.createElement("ul");

//   const nameLi = document.createElement("li");
//   nameLi.innerText = "Nome: ";
//   const nameInput = document.createElement("input");
//   nameInput.type = "text";
//   nameInput.name = "fullname";
//   nameLi.appendChild(nameInput);
//   ul.appendChild(nameLi);
//   ul.appendChild(document.createElement("br"));

//   const phoneLi = document.createElement("li");
//   phoneLi.innerText = "Telefone: ";
//   const phoneInput = document.createElement("input");
//   phoneInput.type = "text";
//   phoneInput.name = "phone";
//   phoneLi.appendChild(phoneInput);
//   ul.appendChild(phoneLi);
//   ul.appendChild(document.createElement("br"));

//   const addressLi = document.createElement("li");
//   addressLi.innerHTML = '<label for="address">Endereço: </label>';
//   const addressInput = document.createElement("input");
//   addressInput.type = "text";
//   addressInput.name = "address";
//   addressInput.id = "address";
//   addressLi.appendChild(addressInput);
//   ul.appendChild(addressLi);
//   ul.appendChild(document.createElement("br"));

//   contactSection.append(h3, ul);
// };

// const removeContact = () => {
//   const contactSection = document.getElementById("contacts-list");

//   const titles = document.getElementsByTagName("h3");
//   const contacts = document.getElementsByTagName("ul");

//   contactSection.removeChild(titles[titles.length - 1]);
//   contactSection.removeChild(contacts[contacts.length - 1]);
// };

// const addPlayer = () => {
//   const position = document.getElementById("position").value;
//   const name = document.getElementById("name").value;
//   const number = document.getElementById("number").value;

//   const confirmation = confirm(`Escalar ${name} como ${position}?`);
//   if (confirmation) {
//     const teamList = document.getElementById("teamlist");
//     const playerItem = document.createElement("li");
//     playerItem.id = `player-${number}`;
//     playerItem.innerText = `${position}: ${name} (${number})`;
//     teamList.appendChild(playerItem);

//     document.getElementById("position").value = "";
//     document.getElementById("name").value = "";
//     document.getElementById("number").value = "";
//   }
//   console.log({ position, name, number });
// };

// const removePlayer = () => {
//   const number = document.getElementById("numberToRemove").value;
//   const playerToRemove = document.getElementById(`player-${number}`);
//   const confirmation = confirm(
//     `Deseja remover o jogador ${playerToRemove.innerText}?`
//   );

//   if (confirmation) {
//     playerToRemove.remove();
//     document.getElementById("numberToRemove").value = "";
//   }
// };

// const register = (element) => {
//   const username = element.children.username.value;
//   const password = element.children.password.value;
//   const passwordConfirmation = element.children.passwordConfirmation.value;

//   if (password === passwordConfirmation) {
//     alert(`Usuário ${username} registrado!`);
//   } else {
//     alert("As senhas não conferem");
//   }
//   console.log({ username, password, passwordConfirmation });
// };
