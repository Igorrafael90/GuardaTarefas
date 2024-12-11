"use client"

import Image from "next/image";
import { use, useState } from "react";

export default function Home() {
  const [title, settitle] = useState ('')
  const [content, setcontent] = useState ('')
  let data = new Date()//data.GetDay()

  return (
    <>
      <header>
      </header>
      <main>
        <section>
          <div>
            <input type="text" name="" id=""/>
            <input type="text" name="" id="" />
            <input type="date" name="" id=""/>
          </div>
          <div>

          </div>
        </section>
      </main>
    </>
  );
}
