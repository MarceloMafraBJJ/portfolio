import Link from "next/link";
import React from "react";
import { CgUserlane } from "react-icons/cg";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.content}>
          <CgUserlane color="#4cc9f0" size={25} />
          <Link href="/">
            <h1> Mafra </h1>
          </Link>
        </div>

        <ul>
          <li>
            <Link href="https://www.instagram.com/marcelomafrabjj/">
              <a target="_blank">
                <FaInstagram color="#fff" size={25} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/MarceloMafraBJJ">
              <a target="_blank">
                <FaGithub color="#fff" size={25} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/marcelomafrabjj/">
              <a target="_blank">
                <FaLinkedinIn color="#fff" size={25} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
