import styles from "./About.module.css";
import Image from "next/image";
import AboutSection1 from "../../assets/images/sujitaKumariProfile11.jpg";
import AboutSection2 from "../../assets/images/sujita_pic2.jpg";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Infinite scrolling marquee header */}
      <div className={styles.marqueeHeader}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
        </div>
        <div className={styles.marqueeTrack} aria-hidden="true">
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
          <span className={styles.marqueeItem}>ABOUT</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.aboutCard}>
          <div className={styles.cardContent}>
            <div className={styles.cardLeft}>
              <h2 className={styles.greeting}>hello ! my name is sujita kumari</h2>
              <p className={styles.bio}>
                Hii , I'm Sujita Kumari ,<br/>
                a MERN Stack Developer from Indore,India (Born in 2003).<br/>
                My goal is to deliver unique and impactful web applications with seamless frontends and robust backend systems that resonate with audience
              </p>
              
              <h3 className={styles.sectionTitle}>education</h3>
              <p className={styles.degree}>Bachelor of Engineering (CSE - Data Science)</p>
              <p className={styles.college}>Lakshmi Narain College of Technology, Excellence</p>
              <p className={styles.duration}>
                <span>2021–2025 | </span>
                <span>CGPA: 8.17</span>
              </p>

              <h3 className={styles.sectionTitle}>experience</h3>
              <p className={styles.experienceItem}>
                MERN Stack Developer | Dec 2025 - Current<br/>
                at Design of Time Company
              </p>
            </div>

            <div className={styles.cardRight}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <Image
                      src={AboutSection1}
                      alt="About Sujita"
                      className={styles.profileImage}
                    />
                  </div>
                  <div className={styles.flipCardBack}>
                    <Image
                      src={AboutSection2}
                      alt="About Sujita Flip"
                      className={styles.profileImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
