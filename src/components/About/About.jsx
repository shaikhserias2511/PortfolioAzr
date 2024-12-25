import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Get to <span>know</span> me!</h3>
              
              <p>
              Hi, my name is <span>Azruddin Shekh</span> and I am from Kolhapur, India. I'm a <span>Fresher</span> and Completed <span>Btech in Electrical Engineering</span> from D Y Patil, Talsande.I have done an Course as a <span>Full Stack Developer</span> at Arc Technologies.I'm really passionate about programming. I love to create original projects with beautiful designs, you can check out some of my work in the projects section.I am <span>open</span> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
