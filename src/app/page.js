"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (name)=>{
    router.push(name)
  }

  return (
    <main>
      <h1>We are at home page</h1>
      <br />
      <br />
      <Link href={"/login"}>Login page</Link>
      <br />
      <br />
      <Link href={"/about"}>About page</Link>
      <br />
      <button onClick={() => navigate("/about")}>Go to About page</button>
      <br />
      <button onClick={() => navigate("/login")}>Go to Loign page</button>
    </main>
  );
}
