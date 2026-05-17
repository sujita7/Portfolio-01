import styles from "./Hero.module.css";
import { fontInter, fontHurricane, fontHelvetica } from "@/styles/font";
import { colorAccentRed, black } from "@/styles/color";

export default function Hero() {
  const welcomeText = "welcome";
  const toMyText = "to my";
  const portfolioText = "portfolio";

  // Map specific characters to special connection classes
  const getSpecialClass = (word, char, charIndex) => {
    // The 't' in 'to my' pulls left to touch 'l' above
    if (word === "to my" && char === "t" && charIndex === 0) return styles.connectT;
    return "";
  };

  const renderLetters = (word, startIndex) => {
    return word.split("").map((char, index) => {
      const globalIndex = startIndex + index;
      const delay = globalIndex * 0.055;
      const specialClass = getSpecialClass(word, char, index);

      return (
        <span
          key={index}
          className={`${styles.animatedChar} ${specialClass}`}
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
    <section className={styles.hero}>
      {/* SVG ink-bleed displacement filter for analog rough texture */}
      <svg className={styles.svgFilters} aria-hidden="true">
        <defs>
          <filter id="ink-bleed" x="-5%" y="-5%" width="110%" height="110%">
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

      <div className={styles.heroContent}>
        <div className={styles.titleContainer}>
          <div className={styles.welcomeLine}>
            {renderLetters(welcomeText, 0)}
          </div>
          <div className={styles.toMyLine}>
            {renderLetters(toMyText, welcomeText.length)}
          </div>
          <div className={styles.portfolioLine}>
            {renderLetters(portfolioText, welcomeText.length + toMyText.length)}
          </div>
        </div>

        <p
          className={styles.subtitle}
          style={{
            fontFamily: fontHurricane,
            color: "#ffffff",
          }}
        >
          Full Stack Developer
        </p>

        <div className={styles.badges}>
          <a
            href="https://drive.google.com/file/d/18ANCh1TJw8v03Gz99AEtv7wXoUwIof27/view"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadResumeButton}
            style={{ fontFamily: fontInter }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
