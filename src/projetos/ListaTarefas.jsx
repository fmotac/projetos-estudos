// Importa o módulo React e o hook useState, bem como o arquivo de estilo CSS.
import React, { useState } from 'react';
import './ListaDeTarefas.css';
import './App.css';

// Define o componente React chamado "ListaDeTarefas".
function ListaDeTarefas() {
  // Define dois estados locais: "tarefas" para armazenar a lista de tarefas e "textoTarefa" para armazenar o texto da tarefa.
  const [tarefas, setTarefas] = useState([]); // Inicializa com uma lista vazia.
  const [textoTarefa, setTextoTarefa] = useState(''); // Inicializa com uma string vazia.

  // Função para adicionar uma tarefa à lista quando o botão "Adicionar" é clicado.
  const adicionarTarefa = () => {
    if (textoTarefa) {
      // Verifica se o texto da tarefa não está vazio.
      setTarefas([...tarefas, textoTarefa]); // Adiciona a tarefa à lista "tarefas" usando uma nova matriz com a tarefa adicionada.
      setTextoTarefa(''); // Limpa o texto da tarefa para o próximo item.
    }
  };

  // Renderiza o JSX que será exibido no componente.
  return (
    <div className="ListaDeTarefas">
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          // Mapeia cada tarefa na lista "tarefas" para um elemento de lista (<li>) com uma chave única (index).
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

// Exporta o componente "ListaDeTarefas" para que ele possa ser utilizado em outros lugares do aplicativo React.
export default ListaDeTarefas;
