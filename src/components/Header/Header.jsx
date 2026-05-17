"use client";
import { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '../../assets/icons/Sujita Kumari-white.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image 
            src={Logo} 
            alt="Sujita Kumari Logo"  
            className={styles.logo}
            priority
          />
        </div>

        {/* Hamburger Button */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>SKILLS</a></li>
            <li><a href="#hobbies" onClick={() => setIsMenuOpen(false)}>HOBBIES</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
