// Importa os módulos React e useState, bem como os arquivos de estilo CSS.
import React, { useState } from "react";
import "./IMC.css";
import "./App.css";

// Define o componente React chamado "IMC".
function IMC() {
  // Define estados locais para armazenar peso, altura, IMC e classificação.
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  // Função para calcular o IMC quando o botão "Calcular" é clicado.
  const calcularIMC = () => {
    if (peso > 0 && altura > 0) {
      // Calcula o IMC usando a fórmula: peso (kg) / (altura (m) * altura (m))
      const imcValor = (peso / Math.pow(altura / 100, 2)).toFixed(2);
      setIMC(imcValor); // Define o valor do IMC calculado no estado "imc".
      setClassificacao(obterClassificacao(imcValor)); // Calcula a classificação com base no IMC.
    }
  };

  // Função para obter a classificação com base no valor do IMC.
  const obterClassificacao = (imcValor) => {
    if (imcValor < 18.5) {
      return "Abaixo do Peso";
    } else if (imcValor < 24.9) {
      return "Peso Normal";
    } else if (imcValor < 29.9) {
      return "Sobrepeso";
    } else if (imcValor < 34.9) {
      return "Obesidade Grau I";
    } else if (imcValor < 39.9) {
      return "Obesidade Grau II";
    } else {
      return "Obesidade Grau III";
    }
  };

  // Renderiza o JSX que será exibido no componente.
  return (
    <div className="IMC">
      <h2>Calculadora de Índice de Massa Corporal (IMC)</h2>
      <label>Peso em Kg:</label>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <label>Altura em centímetros:</label>
      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular</button>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

// Exporta o componente "IMC" para ser utilizado em outros lugares do aplicativo.
export default IMC;

