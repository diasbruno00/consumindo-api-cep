import promptSync from "prompt-sync";
import getDados from "./funcoes/index.js";

let cep;
console.log('Digite 0 para finalizar !!')
const start = async () => {
  while (cep != 0) {
    const input = promptSync();

    cep = input("Digite o CEP: ");

    await getDados(cep);

    if (cep === 0) {
      console.log("Programa finalizado");
    }
  }
};


start()