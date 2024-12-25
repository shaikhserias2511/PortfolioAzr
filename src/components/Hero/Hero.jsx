import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,<br /> I'm Azruddin Shekh</h1>
        <p className={styles.description}>
          Front End Developer / Full Stack Developer
        </p>
        <a href="mailto:azruddin20oct1999@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/azrphoto.jpg")}
        alt="Hero image of me"
        className={styles.azrphoto}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
