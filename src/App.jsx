import React, { useState } from 'react';
import './App.css'

function App() {
  // Estado para armazenar o valor do CEP
  const [cep, setCep] = useState('');
  // Estado para armazenar os dados do endereço
  const [endereco, setEndereco] = useState({});
  // Estado para armazenar mensagens de erro
  const [erro, setErro] = useState(null);

  // Função para consultar o CEP
  const consultarCep = async () => {
    try {
      // Faz uma requisição à API dos Correios
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      // Obtém os dados do endereço a partir da resposta
      const data = await response.json();
      // Atualiza o estado com os dados do endereço
      setEndereco(data);
      // Limpa mensagens de erro
      setErro(null);
    } catch (error) {
      // Em caso de erro, limpa os dados do endereço e exibe a mensagem de erro
      setEndereco({});
      setErro(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Consulta de CEP</h1>
      <div>
        {/* Input para digitar o CEP */}
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        {/* Botão para consultar o CEP */}
        <button onClick={consultarCep}>Consultar</button>
      </div>
      {erro && <p className="erro">{erro}</p>}
      <div>
        <h2>Dados do Endereço</h2>
        <p>CEP: {endereco.cep}</p>
        <p>Logradouro: {endereco.logradouro}</p>
        <p>Bairro: {endereco.bairro}</p>
        <p>Cidade: {endereco.localidade}</p>
        <p>Estado: {endereco.uf}</p>
      </div>
    </div>
  );
}

export default App;

