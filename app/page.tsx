"use client"

import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [Task, setTask] = useState({//Vai colocar todos os inputs em  um só
    title: '',
    content: '',
    dataF: ''
  })
  const [Tasks, setTasks] = useState([])
  let dataC = new Date()//dataC.GetDay(
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTask({
      ...Task,
      [name]: value
    })
  }

  return (
    <>
      <header>
      </header>
      <main>
        <section>
          <div>
            <input name="title" value={Task.title} onChange={handleChange} type="text"/>
            <input name="content" value={Task.content} onChange={handleChange} type="text"/>
            <input name="dataF" value={Task.dataF} onInput={handleChange} type="date" />
          </div>
          <div>

          </div>
        </section>
      </main>
    </>
  );
}
