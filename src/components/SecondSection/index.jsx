import React from "react";
import styles from "./styles.module.scss";

import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";

export default function SecondSection() {
  return (
    <section className={styles.container}>
      <h1> Services</h1>
      <h2>
        What am I <strong>great</strong> at?
      </h2>

      <ul className={styles.cardItem}>
        <li>
          <h1>Mobile</h1>
          <h2>Development</h2>
          <AiOutlineMobile color="#fff" size={60} />
          <h3>ANDROID | IOS</h3>
        </li>
        <li>
          <h1>Web</h1>
          <h2>Development</h2>
          <BsCodeSlash color="#fff" size={60} />
          <h3>STATIC | DYNAMIC</h3>
        </li>
        <li>
          <h1>Database</h1>
          <h2>Development</h2>
          <HiOutlineDatabase color="#fff" size={60} />
          <h3>CLOUD DATABASE</h3>
        </li>
      </ul>

      <h1>technologies</h1>

      <h3>
        I develop websites with JavaScript, ReactJS and NextJs. I develop
        applications with React-Native and create databases with NodeJs and
        express.
      </h3>
    </section>
  );
}
