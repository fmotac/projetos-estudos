// Calculator.js

// Importa os módulos necessários do React e os arquivos de estilo CSS.
import React, { useState } from 'react';
import './Calculator.css';
import './App.css';

// Define o componente React chamado "Calculator".
function Calculator() {
  // Define dois estados locais: "result" e "expression" usando "useState".
  const [result, setResult] = useState(''); // Estado para armazenar o resultado da expressão
  const [expression, setExpression] = useState(''); // Estado para armazenar a expressão a ser calculada

  // Função que lida com o clique dos botões da calculadora.
  const handleButtonClick = (value) => {
    if (value === '=') {
      // Se o botão '=' for clicado, tenta calcular o resultado da expressão.
      try {
        setResult(eval(expression).toString()); // Avalia a expressão e converte o resultado em uma string.
      } catch (error) {
        setResult('Erro'); // Em caso de erro na avaliação da expressão, exibe 'Erro'.
      }
      setExpression(''); // Limpa a expressão após o cálculo.
    } else if (value === 'C') {
      // Se o botão 'C' for clicado, limpa tanto o resultado quanto a expressão.
      setResult('');
      setExpression('');
    } else {
      // Se qualquer outro botão for clicado, adiciona o valor do botão à expressão.
      setExpression(expression + value);
    }
  };

  // Retorna o JSX que será renderizado no componente.
  return (
    <div className="Calculator">
      <h2>Calculadora Simples</h2>
      <div className="display">
        {/* Exibe a expressão atual no primeiro campo de entrada (input) */}
        <input type="text" value={expression} readOnly />
        {/* Exibe o resultado atual no segundo campo de entrada (input) */}
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        {/* Botões numéricos e operadores */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        {/* ... Outros botões numéricos */}
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        {/* Botões para calcular e limpar */}
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
}

// Exporta o componente "Calculator" para que ele possa ser usado em outros lugares do aplicativo.
export default Calculator;




