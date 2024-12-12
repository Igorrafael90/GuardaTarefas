"use client"

import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [Tasks, setTasks] = useState([])
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [dataF, setdataF] = useState('')

  return (
    <>
      <header>
      </header>
      <main>
        <section>
          <div>
            <input name="title" value={title} onChange={(e) => settitle(e.target.value)} type="text"/>
            <input name="content" value={content} onChange={(e) => setcontent(e.target.value)} type="text"/>
            <input name="dataF" value={dataF} onChange={(e) => setdataF(e.target.value)} type="date" />
          </div>
          <div>

          </div>
        </section>
      </main>
    </>
  );
}
