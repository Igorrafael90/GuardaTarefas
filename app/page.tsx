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
      <header className="w-full bg-Cinza h-10 flex">
        imagem
        <h1>Guarda tarefa</h1>
      </header>
      <main className="w-full h-full flex items-center justify-center">
        <section className="w-full flex mt-10">
          <div className="flex flex-col items-center text-white bg-gray-800 w-2/4 h-64 pl-2 rounded-md">
            <label className="mt-5 font-bold">Titulo</label>
            <input className="block bg-Cinza w-64 h-8 rounded-md" name="title" value={Title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <label className="font-bold">Tarefa</label>
            <input className="block bg-Cinza w-64 h-8 rounded-md" name="content" value={Content} onChange={(e) => setContent(e.target.value)} type="text" />
            <label className="font-bold">Data Final</label>
            <input className="block bg-Cinza w-32 rounded-md" name="dataF" value={DataF} onChange={(e) => setDataF(e.target.value)} type="date" />
            <button className="bg-Verde p-2 mt-3 rounded-md w-44 font-bold" onClick={() => addTask(Title, Content, DataF, Tasks, setTasks, setTitle, setContent, setDataF)}>
            Adicionar
          </button>
          </div>
          <div className="bg-gray-900 w-full">

          </div>
        </section>
      </main>
    </>
  );
}
