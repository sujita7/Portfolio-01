"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hobbies.module.css';

import PaintEmoji from '../../assets/icons/paint-emoji.svg';
import VacationEmoji from '../../assets/icons/vaccation-emoji.svg';

// Painting Icons
import Painting1 from '../../assets/icons/painting1.svg';
import Painting2 from '../../assets/icons/painting2.svg';
import Painting3 from '../../assets/icons/painting3.svg';

// Sketches
import Sketch1 from '../../assets/paintings/sketch_01.jpg';
import Sketch2 from '../../assets/paintings/sketch_02.jpg';
import Sketch3 from '../../assets/paintings/sketch_03.jpg';
import Sketch4 from '../../assets/paintings/sketch_04.jpg';
import Sketch5 from '../../assets/paintings/sketch_05.jpg';
import Sketch6 from '../../assets/paintings/sketch_06.jpg';
import Sketch7 from '../../assets/paintings/sketch_07.jpg';
import Sketch8 from '../../assets/paintings/sketch_08.jpg';
import Sketch9 from '../../assets/paintings/sketch_09.jpg';
import Sketch10 from '../../assets/paintings/sketch_10.jpg';
import Sketch11 from '../../assets/paintings/sketch_11.jpg';
import Sketch12 from '../../assets/paintings/sketch_12.jpg';
import Sketch13 from '../../assets/paintings/sketch_13.jpg';
import Sketch14 from '../../assets/paintings/sketch_14.jpg';
import Sketch15 from '../../assets/paintings/sketch_15.jpg';
import Sketch16 from '../../assets/paintings/sketch_16.jpg';

// Travelling Icons
import Pic1 from '../../assets/icons/pic1.svg';
import Pic2 from '../../assets/icons/pic2.svg';
import Pic3 from '../../assets/icons/pic3.svg';
import Pic4 from '../../assets/icons/pic4.svg';
import Pic5 from '../../assets/icons/pic5.svg';

const sketches = [
  Sketch1, Sketch2, Sketch3, Sketch4,
  Sketch5, Sketch6, Sketch7, Sketch8,
  Sketch9, Sketch10, Sketch11, Sketch12,
  Sketch13, Sketch14, Sketch15, Sketch16
];

export default function Hobbies() {
  const [paintingSlide, setPaintingSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Disable scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxImage]);

  const togglePaintingSlide = () => {
    setPaintingSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxImage(sketches[index]);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (currentIndex < sketches.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setLightboxImage(sketches[nextIdx]);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      setLightboxImage(sketches[prevIdx]);
    }
  };

  // Split sketches into chunks of 8
  const sketchChunks = [
    sketches.slice(0, 8),
    sketches.slice(8, 16)
  ];

  return (
    <section id="hobbies" className={styles.hobbies}>
      {/* Marquee Header */}
      <div className={styles.marqueeHeader}>
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
        </div>
        <div className={styles.marqueeTrack} aria-hidden="true">
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
          <span className={styles.marqueeItem}>HOBBIES</span>
        </div>
      </div>

      {/* Painting Section */}
      <div className={styles.paintingSection}>
        <div className={styles.sliderContainer}>
          <div 
            className={styles.sliderInner} 
            style={{ transform: `translateX(-${paintingSlide * 100}%)` }}
          >
            {/* Slide 1: Painting Intro */}
            <div className={styles.paintingSlide}>
              <div className={styles.slideHeader}>
                <div className={styles.headerContainer}>
                  <h2 className={styles.title}>What I do In my free time?</h2>
                  <h3 className={styles.subtitleLove}>(and love doing)</h3>
                </div>
              </div>
              <div className={styles.itemContainer}>
                <div className={styles.textContent}>
                  <Image src={PaintEmoji} alt="Paint emoji" className={styles.sectionEmoji} />
                  <h3 className={styles.subtitle}>Painting</h3>
                  <p className={styles.description}>
                   Painting is my way of expressing emotions and ideas beyond words. It allows me to explore creativity, bring imagination to life, and find peace in the process of creating something meaningful.
                  </p>
                  <p className={styles.checkNext}>You can check out my artwork on the next slide.</p>
                </div>
                <div className={styles.imageWrapper}>
                  <Image src={Painting2} alt="Painting 2" className={styles.paintImg2} />
                  <Image src={Painting1} alt="Painting 1" className={styles.paintImg1} />
                  <Image src={Painting3} alt="Painting 3" className={styles.paintImg3} />
                </div>
              </div>
            </div>

            {/* Slide 2 & 3: Sketches Grids */}
            {sketchChunks.map((chunk, slideIdx) => (
              <div key={slideIdx} className={styles.paintingSlide}>
                <div className={styles.gridContainer}>
                  {chunk.map((sketch, idx) => {
                    const globalIdx = slideIdx * 8 + idx;
                    return (
                      <div key={idx} className={styles.gridItem} onClick={() => openLightbox(globalIdx)}>
                        <Image 
                          src={sketch} 
                          alt={`Sketch ${globalIdx + 1}`} 
                          fill 
                          style={{ objectFit: 'cover' }} 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={styles.gridImg} 
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Button */}
        <div className={styles.nextButton} onClick={togglePaintingSlide}>
          <div 
            className={styles.arrowCircle}
            style={{ 
              transform: paintingSlide === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={styles.floatingText}>
            {paintingSlide === 0 ? 'see my sketches' : paintingSlide === 1 ? 'more sketches' : 'back to hobbies'}
          </span>
        </div>
      </div>

      {/* Travelling Section */}
      <div className={styles.travellingSection}>
        <div className={styles.itemContainer}>
          <div className={styles.textContent}>
            <Image src={VacationEmoji} alt="Vacation emoji" className={styles.sectionEmoji} />
            <h3 className={styles.subtitle}>Travelling</h3>
            <p className={styles.description}>
             Travelling gives me a chance to explore new places, experience different cultures, and create meaningful memories. I enjoy discovering simple moments, meeting new people, and seeing the world from different perspectives.
            </p>
          </div>
          <div className={styles.travelImageWrapper}>
            <Image src={Pic1} alt="Travel 1" className={styles.travelImg1} />
            <Image src={Pic2} alt="Travel 2" className={styles.travelImg2} />
            <Image src={Pic3} alt="Travel 3" className={styles.travelImg3} />
            <Image src={Pic4} alt="Travel 4" className={styles.travelImg4} />
            <Image src={Pic5} alt="Travel 5" className={styles.travelImg5} />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {currentIndex > 0 && (
              <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            <Image src={lightboxImage} alt="Fullscreen sketch" className={styles.lightboxImg} />

            {currentIndex < sketches.length - 1 && (
              <button className={`${styles.navButton} ${styles.nextNavButton}`} onClick={nextImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
