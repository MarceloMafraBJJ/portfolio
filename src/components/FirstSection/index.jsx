import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import me from "../../assets/me.png";

export default function FirstSection() {
  return (
    <section className={styles.container}>
      <ul>
        <li className={styles.firstLi}>
          <h2>I'm</h2>
          <h1>Marcelo Mafra</h1>
          <div className={styles.line} />
          <h3>
            Full-stack developer from Florianópolis, Brazil. I create custom
            websites and apps especially for your business!
          </h3>
        </li>

        <li className={styles.secondLi}>
          <div>
            <div className={styles.image}>
              <Image src={me} />
            </div>
          </div>
        </li>

        <li className={styles.thirdLi}>
          <h3>About me</h3>
          <h2>
            I'm sixteen years old, I'm a jiu-jitsu athlete and a software
            developer. I love technology and I can help you with your digital
            business.
          </h2>
        </li>
      </ul>
    </section>
  );
}
