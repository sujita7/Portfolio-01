import Image from 'next/image';
import styles from './Contact.module.css';

// Icons
import MailIcon from '../../assets/icons/mail.svg';
import CallIcon from '../../assets/icons/call.svg';
import LocationIcon from '../../assets/icons/location.svg';
import GithubIcon from '../../assets/icons/github.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import WhatsappIcon from '../../assets/icons/whatsapp-contact.svg';
import WorkEmoji from '../../assets/icons/work-emoji.svg';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      {/* Marquee Header */}
      <div className={styles.marqueeHeader}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
        </div>
        <div className={styles.marqueeTrack} aria-hidden="true">
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
          <span className={styles.marqueeItem}>CONTACT</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            LET'S <span className={styles.hurricane}>Work</span> <br /> TOGETHER
          </h2>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <Image src={MailIcon} alt="Email" width={24} height={24} />
              <span>sujita.kri07@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <Image src={CallIcon} alt="Phone" width={24} height={24} />
              <span>+91 6299626491</span>
            </div>
            <div className={styles.infoItem}>
              <Image src={LocationIcon} alt="Location" width={24} height={24} />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
          </div>

        </div>

        <div className={styles.rightSide}>
          <Image src={WorkEmoji} alt="Work Emoji" className={styles.workEmoji} />
          <div className={styles.socialGrid}>
            <a href="https://github.com/sujita7" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image src={GithubIcon} alt="Github" width={40} height={40} />
              
            </a>
            <a href="https://www.facebook.com/profile.php?id=61558167042383" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image src={FacebookIcon} alt="Facebook" width={40} height={40} />
              
            </a>
            <a href="https://www.linkedin.com/in/sujita-kumari/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image src={LinkedinIcon} alt="Linkedin" width={40} height={40} />
              
            </a>
            <a href="https://wa.me/+916299626491" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image src={WhatsappIcon} alt="Whatsapp" width={40} height={40} />
              
            </a>
          </div>
          <div className={styles.actions}>
            <a 
              href="https://drive.google.com/file/d/18ANCh1TJw8v03Gz99AEtv7wXoUwIof27/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
