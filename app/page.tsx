"use client"

import { useEffect, useState } from "react";

// Defina a interface Task
interface Task {
  id: number;
  Title: string;
  Content: string;
  DataF: string;
}

export default function Home() {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [DataF, setDataF] = useState('');
  
  // Tipifique o estado Tasks como um array de objetos do tipo Task
  const [Tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = () => {
    if (!Title || !Content || !DataF) {
      alert("Preencha todos os campos");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      Title,
      Content,
      DataF
    };

    const updatedTasks = [...Tasks, newTask];
    setTasks(updatedTasks); // Atualiza o estado com as novas tarefas
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Salva no localStorage

    // Limpa os campos após adicionar a tarefa
    setTitle('');
    setContent('');
    setDataF('');
  };

  return (
    <>
      <header>
      </header>
      <main>
        <section>
          <div>
            <input name="title" value={Title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <input name="content" value={Content} onChange={(e) => setContent(e.target.value)} type="text" />
            <input name="dataF" value={DataF} onChange={(e) => setDataF(e.target.value)} type="date" />
          </div>
          <div>

          </div>
        </section>
      </main>
    </>
  );
}
