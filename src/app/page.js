"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Mohan");
  const changeName = (value) => {
    setName(value);
    alert(`After chengin you name is ${name}`);
  };
  return (
    <main className={styles.main}>
      <h1>Event function and state {name}</h1>
      <button onClick={() => changeName("Vishal")}>click</button>
      <InnerComponent  />
    </main>
  );
}


const InnerComponent = ()=>{
    return <h2>Inner Component</h2>
}