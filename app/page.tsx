"use client"

import { useEffect, useState } from "react";
import { Task, addTask, clearTasks, deleteTask } from "@/utils/function";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <header className="w-full bg-Cinza h-10 flex  justify-between items-center rounded-md">
        <div className="flex space-x-2 items-center">
          <FontAwesomeIcon className="ml-2 h-9 text-green-700" icon={faClock} />
          <h1 className="text-white font-bold">Guarda tarefa</h1>
        </div>
        <button onClick={() => clearTasks(setTasks)}>
          <FontAwesomeIcon className="mr-2 text-red-700" icon={faTrash}/>
        </button>
      </header>
      <main className="w-full h-full flex items-center justify-center max-sm:flex-col">
        <section className="w-full flex mt-10 space-x-1">
          <div className="flex flex-col items-center text-white bg-CinzaM w-2/4 h-64 pl-2 max-w-80 min-w-72 rounded-xl shadow-green-800 shadow-inner ">
            <label className="mt-5 font-bold">Titulo</label>
            <input className="block bg-Cinza w-64 h-8 rounded-md" name="title" value={Title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <label className="font-bold">Tarefa</label>
            <input className="block bg-Cinza w-64 h-8 rounded-md" name="content" value={Content} onChange={(e) => setContent(e.target.value)} type="text" />
            <label className="font-bold">Data Final</label>
            <input className="block bg-Cinza w-32 rounded-md" name="dataF" value={DataF} onChange={(e) => setDataF(e.target.value)} type="date" />
            <button className="bg-green-800 p-2 mt-3 rounded-md w-44 font-bold" onClick={() => addTask(Title, Content, DataF, Tasks, setTasks, setTitle, setContent, setDataF)}>
              Adicionar
            </button>
          </div>
          
          <div className="bg-CinzaM w-3/4 h-auto rounded-lg shadow-green-800 shadow-inner grid grid-cols-3 max-smd:grid-cols-2 max-smd:w-3/5 p-3">
            {Tasks.length == 0 ? (
              <p className="text-white font-extrabold">Não existe tarefas</p>
            ) : (
              Tasks.map((task, index) => (
                <div key={index} className="bg-Cinza w-80 h-48 rounded-lg flex flex-col p-2 mb-5 shadow-md shadow-black transition ease-out hover:scale-100 hover:-translate-y-1 duration-200">
                  <h1 className="font-extrabold text-white text-xl">{task.Title}</h1>
                  <p className="break-words text-white text-xs h-40 py-2">{task.Content}</p>
                  <div className="flex justify-between">
                    <p className="text-white font-extrabold text-sm">{task.dataCriacao}</p>
                    <p className="text-white font-extrabold text-sm">{task.DataF}</p>
                    <button onClick={() => deleteTask(task.id, Tasks, setTasks)}>
                      <FontAwesomeIcon className="text-red-700" icon={faTrash}/>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}
