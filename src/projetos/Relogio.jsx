// Clock.js

// Importa os módulos necessários do React e os arquivos de estilo CSS.
import React, { useState, useEffect } from 'react';
import './Clock.css';
import './App.css';

// Define o componente React chamado "Clock".
function Clock() {
  // Define um estado local chamado "time" e uma função "setTime" usando o "useState".
  // Inicializa "time" com a data e hora atuais.
  const [time, setTime] = useState(new Date());

  // Utiliza o hook "useEffect" para realizar efeitos colaterais no componente.
  useEffect(() => {
    // Cria um intervalo que atualiza o estado "time" a cada 1000 milissegundos (1 segundo).
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Retorna uma função de limpeza que será executada quando o componente for desmontado.
    // Ela desliga o intervalo para evitar vazamentos de memória.
    return () => {
      clearInterval(intervalId);
    };
  }, []); // O segundo argumento vazio significa que o efeito é executado apenas uma vez, após a montagem inicial.

  // Retorna o JSX que será renderizado no componente.
  return (
    <div className="Clock">
      <h2>Relógio Digital</h2>
      {/* Exibe a hora atual formatada usando "toLocaleTimeString()" */}
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

// Exporta o componente "Clock" para que ele possa ser usado em outros lugares do aplicativo.
export default Clock;



