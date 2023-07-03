//throw

const sayMyName = (name = "") => {
  if (name === "") {
    throw "Nome é obrigatório";
  }
  console.log(name);
};

//try...catch
try {
  sayMyName("Douglas");
} catch (e) {
  console.log(e);
}
console.log("após o try/catch");
