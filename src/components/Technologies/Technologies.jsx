import styles from "./Technology.module.css";
import Image from "next/image";
import python from "../../assets/icons/python.svg";
import cplaus from "../../assets/icons/cplus.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import react from "../../assets/icons/react.svg";
import expo from "../../assets/icons/expo.svg";
import next from "../../assets/icons/next.svg";
import vite from "../../assets/icons/vitejs.svg";
import tailwind from "../../assets/icons/tailwindcss.svg";
import express from "../../assets/icons/express.svg";
import node from "../../assets/icons/nodejs.svg";
import postman from "../../assets/icons/postman.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import sql from "../../assets/icons/sql.svg";
import redux from "../../assets/icons/redux.svg";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import SkillsEmoji from "../../assets/icons/skills-emoji.svg";

export default function Technologies() {
  return (
    <section id="skills" className={styles.technologies}>
      <div className={styles.marqueeHeader}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
        </div>
        <div className={styles.marqueeTrack} aria-hidden="true">
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
          <span className={styles.marqueeItem}>SKILLS</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>Technologies I Work With</h2>
          <Image
            src={SkillsEmoji}
            alt="Skills Emoji"
            className={styles.skillsEmoji}
          />
        </div>
        <div className={styles.timeline}>
          <div className={styles.item}>
            <div className={styles.textContent}>
              <h3 className={styles.tech}>Technologies : </h3>
              <div className={styles.imageWrapper}>
                {[
                  { img: python, name: "Python" },
                  { img: cplaus, name: "C++" },
                  { img: html, name: "HTML" },
                  { img: css, name: "CSS" },
                  { img: tailwind, name: "Tailwind" },
                  { img: js, name: "JavaScript" },
                ].map((tech, idx) => (
                  <div key={idx} className={styles.iconContainer}>
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      className={styles.techIcon}
                    />
                    <span className={styles.iconText}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.textContent}>
              <h3 className={styles.tech}>Development : </h3>
              <div className={styles.imageWrapper}>
                {[
                  { img: react, name: "React" },
                  { img: expo, name: "Expo" },
                  {
                    img: next,
                    name: "Next.js",
                    customClass: styles.nextIcon,
                  },
                  { img: express, name: "Express", customClass: styles.expressIcon },
                  { img: node, name: "Node.js" },
                ].map((tech, idx) => (
                  <div key={idx} className={styles.iconContainer}>
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      className={`${styles.techIcon} ${tech.customClass || ''}`}
                    />
                    <span className={styles.iconText}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.textContent}>
              <h3 className={styles.tech}>Databases : </h3>
              <div className={styles.imageWrapper}>
                {[
                  { img: mongodb, name: "MongoDB" },
                  { img: sql, name: "SQL" },
                ].map((tech, idx) => (
                  <div key={idx} className={styles.iconContainer}>
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      className={styles.techIcon}
                    />
                    <span className={styles.iconText}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.textContent}>
              <h3 className={styles.tech}>Developer Tools : </h3>
              <div className={styles.imageWrapper}>
                {[
                  { img: postman, name: "Postman" },
                  { img: redux, name: "Redux" },
                  { img: git, name: "Git" },
                  { img: github, name: "GitHub" },
                  { img: vite, name: "Vite" },
                ].map((tech, idx) => (
                  <div key={idx} className={styles.iconContainer}>
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      className={styles.techIcon}
                    />
                    <span className={styles.iconText}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
