import axios from "axios";

// abrir a conexão com a api
export const api = axios.create({
  // passar a url da api
  baseURL: "http://localhost:5000",
});

// buscar dados
export const busca = async (url, setDado) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};
