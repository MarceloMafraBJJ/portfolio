import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function ThirdSection() {
  return (
    <section className={styles.container}>
      <h2>Need a Developer?</h2>
      <Link href="/Contact">
        <h1>{"Let's work together! ⇢"}</h1>
      </Link>
    </section>
  );
}
