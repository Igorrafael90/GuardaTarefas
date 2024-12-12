"use client"

import { useEffect, useState } from "react";
import { Task, addTask } from "@/utils/function";

export default function Home() {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [DataF, setDataF] = useState('');
  const [Tasks, setTasks] = useState<Task[]>([]);  // Tipifique o estado Tasks como um array de objetos do tipo Task
  
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

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
            <button onClick={() => addTask(Title, Content, DataF, Tasks, setTasks, setTitle, setContent, setDataF)}>
            Adicionar Tarefa
          </button>
          </div>
          <div>

          </div>
        </section>
      </main>
    </>
  );
}
