"use client";
import { useState } from "react";
import styles from "./ThankYou.module.css";
import Image from "next/image";

import About1 from "../../assets/icons/about-1.svg";
import About22 from "../../assets/icons/about-22.svg";
import ContactEmoji from "../../assets/icons/contact-emoji.svg";

export default function ThankYou() {
  const [isHovered, setIsHovered] = useState(false);
  const line1 = "thank you";
  const line2 = "so much";

  const renderLetters = (word, startIndex) => {
    return word.split("").map((char, index) => {
      const globalIndex = startIndex + index;
      const delay = globalIndex * 0.055;

      return (
        <span
          key={index}
          className={styles.animatedChar}
          style={{
            animationDelay: `${delay}s`,
            color: "#ffffff",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  return (
    <section className={styles.thankYou}>
      {/* SVG ink-bleed displacement filter */}
      <svg className={styles.svgFilters} aria-hidden="true">
        <defs>
          <filter id="ink-bleed-ty" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="4"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="0.3" result="softened" />
            <feComposite in="softened" in2="SourceGraphic" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.titleContainer}>
            <div className={styles.thankYouLine}>
              {renderLetters(line1, 0)}
            </div>
            <div className={styles.soMuchLine}>
              {renderLetters(line2, line1.length)}
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.imageAndTextContainer}>
            <div className={styles.imageBox}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <Image src={About1} alt="Sujita" className={styles.mainImage} />
                </div>
                <div className={styles.flipCardBack}>
                  <Image src={About22} alt="Sujita hover" className={styles.mainImage} />
                </div>
              </div>
            </div>
            <div className={styles.textCard}>
              <Image src={ContactEmoji} alt="emoji" className={styles.emojiImage} />
              <p className={styles.bioText}>
                I’m Sujita Kumari, a person who loves drawing, crafting, playing guitar, and travelling. I have an interest in modelling and acting, and I’m straightforward by nature with a strong sense of ownership in everything I do.
              </p>
            </div>
          </div>
        </div>

        <p className={styles.subtitle}>
          thank you so much <br />
          for scrolling all the way down here !
        </p>
      </div>

      <footer className={styles.footer}>
        designed and developed by Sujita Kumari 🤍
      </footer>
    </section>
  );
}
