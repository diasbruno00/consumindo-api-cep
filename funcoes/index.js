import axios from "axios";

export default async function getDados(cep) {
  try {
    const response = await axios.get(
      `https://brasilapi.com.br/api/cep/v2/${cep}`
    );

    if (!response.data.error) {
      const dados = response.data;
      imprimirDados(dados);
    } else {
      console.log(`CEP: ${cep} não encontrado`);
    }
  } catch (error) {
    console.log("erro na requisição");
  }
}

function imprimirDados(dados) {
  console.log(`
    CEP: ${dados.cep}
    Bairro: ${dados.street}
    Localidade: ${dados.neighborhood}
    Cidade: ${dados.city}
    UF: ${dados.state}
    `);
}
