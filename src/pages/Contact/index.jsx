import React from "react";
import Head from "next/head";

import styles from "./styles.module.scss";
import Header from "../../components/Header";

import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title> Marcelo Mafra - Contact</title>
      </Head>
      <main className={styles.container}>
        <Header />

        <h1 className={styles.title}>get in touch</h1>
        <h2>Let's start a project together</h2>

        <ul className={styles.list}>
          <li>
            <FiMail color="#fff" size={30} />
            <Link href="mailto:marcelomafradev@gmail.com" target="_blank">
              <h1>marcelomafradev@gmail.com</h1>
            </Link>
          </li>
          <li>
            <BiPhone color="#fff" size={30} />
            <Link href="tel:+55(48)99975-9801" target="_blank">
              <h1> +55 (48) 99975-9801</h1>
            </Link>
          </li>
          <li>
            <FaWhatsapp color="#fff" size={30} />
            <Link
              href="https://api.whatsapp.com/send?phone=5548999759801&text=Hello%2C%20I%20came%20across%20your%20site%20and%20would%20like%20to%20share%20my%20thoughts!"
              target="_blank"
            >
              <h1>Start a conversation</h1>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
