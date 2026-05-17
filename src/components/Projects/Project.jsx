"use client";
import { useState } from "react";
import styles from "./Project.module.css";
import Image from "next/image";

import Star from "../../assets/icons/star.svg";
import AgilusEmoji from "../../assets/icons/agilus-emoji.svg";
import AkEmoji from "../../assets/icons/ak-footages-emoji.svg";
import LocoEmoji from "../../assets/icons/loco-train-emoji.svg";
import LocoRunningEmoji from "../../assets/icons/loco-running-emoji.svg";

import AgilusMockup from "../../assets/images/agilus-mockup.png";
import LocoMockup from "../../assets/images/locobharat-mockup.png";
import AkMockup from "../../assets/images/akfootage's-mockup.png";
import AgilusFull from "../../assets/images/agilus-full.png";
import AgilusFull1 from "../../assets/images/agilus-full1.png";
import Ak1 from "../../assets/images/ak-1.png";
import Ak2 from "../../assets/images/ak-2.png";

const projectsData = [
  {
    id: "01",
    title: "Agilus Diagnosis Prototype",
    link: "https://agilus-srl.vercel.app/",
    description: "Built the frontend using React.js and Tailwind CSS with a focus on clean design and user-friendly experience.\n• Developed a responsive UI prototype inspired by Agilus Diagnostics.\n• Designed and implemented key sections including Hero Section, Service Cards, Health Concerns.\n• Developed a dummy prototype without backend integration.",
    image: AgilusMockup,
    emoji: AgilusEmoji,
    topEmoji: Star,
  },
  {
    id: "02",
    title: "Ak Footage's",
    link: "https://ak-footages.vercel.app/",
    description: "Web Application made using React, TypeScript, Tailwind CSS\n• Photography portfolio showcasing wedding, haldi, and mehndi services.\n• Designed and developed a photography portfolio website for a client.\n• Integrated Cloudinary CDN for optimized image delivery and Google Forms for seamless client inquiries.",
    image: AkMockup,
    emoji: AkEmoji,
  },
  {
    id: "03",
    title: "LocoBharat",
    link: "https://play.google.com/store/apps/details?id=com.expowhizstudios.LocoBharat",
    description: "Mobile Application using React Native and backend (Spring Boot, PostgreSQL, Azure, Firebase)\n• A team project where i contributed to the frontend part of the mobile application.\n• An application to streamline train searches, bookings, and payments.\n• Developed a comprehensive train ticket booking app.\n• Engineered a segment-wise booking system, enabling users to book tickets for specific parts of a journey.",
    image: LocoMockup,
    emoji: LocoEmoji,
    images: [
      { src: LocoMockup, emoji: LocoEmoji },
      { src: LocoMockup, emoji: LocoRunningEmoji }
    ]
  },
  // {
  //   id: "04",
  //   description: "Worked on NSD (Nurse Service at Doorstep) mobile app using React Native Expo and its web\napplication using Next.js.\n• Developed key UI modules including Address Section, Search Bar, Tab Navigation Bar and complete\nCart functionalities.\n• Integrated frontend with backend using REST APIs and managed asynchronous data.",
  //   image: AgilusMockup, // Fallback if NSD image isn't configured, but keeping it simple
  //   emoji: Star,
  // },
];

export default function Projects() {
  const [agilusSlide, setAgilusSlide] = useState(0);
  const [akSlide, setAkSlide] = useState(0);

  const toggleAgilusSlide = () => {
    setAgilusSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const toggleAkSlide = () => {
    setAkSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className={styles.projectsWrapper}>
      {projectsData.map((project, idx) => (
        <section key={idx} id={idx === 0 ? "projects" : `project-${project.id}`} className={styles.projects}>
          {idx === 0 && (
            <div className={styles.marqueeHeader}>
              <div className={styles.marqueeTrack}>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
              </div>
              <div className={styles.marqueeTrack} aria-hidden="true">
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
                <span className={styles.marqueeItem}>PROJECTS</span>
              </div>
            </div>
          )}

          {idx === 0 ? (
            <div className={styles.sliderContainer}>
              <div 
                className={styles.sliderInner} 
                style={{ transform: `translateX(-${agilusSlide * 100}%)` }}
              >
                {/* Slide 1: Main Project View */}
                <div className={styles.projectSlide}>
                  <div className={styles.container}>
                    <div className={styles.projectCard}>
                      <div className={styles.cardContent}>
                        <div className={styles.cardLeft}>
                          <div className={styles.titleRow}>
                            <span className={styles.projectLabel}>PROJECT</span>
                            <span className={styles.projectId}>{project.id}</span>
                          </div>
                          <h3 className={styles.projectName}>{project.title}</h3>
                          <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                            Live Link ↗
                          </a>
                          <p className={styles.description}>
                            {project.description}
                          </p>
                        </div>

                        <div className={styles.cardRight}>
                          {project.topEmoji && (
                            <Image
                              src={project.topEmoji}
                              alt="top-emoji"
                              className={styles.topEmoji}
                            />
                          )}
                          <div className={styles.imageBox}>
                            <Image
                              src={project.image}
                              alt={`Project ${project.id}`}
                              className={styles.projectImage}
                            />
                          </div>
                          {project.emoji && (
                            <Image
                              src={project.emoji}
                              alt="emoji"
                              className={styles.projectEmoji}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Full View */}
                <div className={styles.projectSlide}>
                  <div className={styles.container}>
                    <div className={styles.projectFullBox}>
                      <Image
                        src={AgilusFull}
                        alt="Agilus Full View 1"
                        className={styles.projectFullImage}
                        priority
                      />
                      <Image
                        src={AgilusFull1}
                        alt="Agilus Full View 2"
                        className={styles.projectFullImage}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Button */}
              <div className={styles.nextPageButton} onClick={toggleAgilusSlide}>
                <div 
                  className={styles.arrowCircle}
                  style={{ 
                    transform: agilusSlide === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.floatingText}>
                  {agilusSlide === 0 ? 'Want to see more ?' : 'back to project 1'}
                </span>
              </div>
            </div>
          ) : idx === 1 ? (
            <div className={styles.sliderContainer}>
              <div 
                className={styles.sliderInner} 
                style={{ transform: `translateX(-${akSlide * 100}%)` }}
              >
                {/* Slide 1: Main Project View */}
                <div className={styles.projectSlide}>
                  <div className={styles.container}>
                    <div className={styles.projectCard}>
                      <div className={styles.cardContent}>
                        <div className={styles.cardLeft}>
                          <div className={styles.titleRow}>
                            <span className={styles.projectLabel}>PROJECT</span>
                            <span className={styles.projectId}>{project.id}</span>
                          </div>
                          <h3 className={styles.projectName}>{project.title}</h3>
                          <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                            Live Link ↗
                          </a>
                          <p className={styles.description}>
                            {project.description}
                          </p>
                        </div>

                        <div className={styles.cardRight}>
                          {project.topEmoji && (
                            <Image
                              src={project.topEmoji}
                              alt="top-emoji"
                              className={styles.topEmoji}
                            />
                          )}
                          <div className={styles.imageBox} style={{ transform: 'scale(1.15)' }}>
                            <Image
                              src={project.image}
                              alt={`Project ${project.id}`}
                              className={styles.projectImage}
                            />
                          </div>
                          {project.emoji && (
                            <Image
                              src={project.emoji}
                              alt="emoji"
                              className={`${styles.projectEmoji} ${styles.emojiTopRight}`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Full View */}
                <div className={styles.projectSlide}>
                  <div className={styles.container}>
                    <div className={styles.projectFullBox}>
                      <Image
                        src={Ak1}
                        alt="Ak Footage Full View 1"
                        className={styles.projectFullImage}
                        priority
                      />
                      <Image
                        src={Ak2}
                        alt="Ak Footage Full View 2"
                        className={styles.projectFullImage}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Button */}
              <div className={styles.nextPageButton} onClick={toggleAkSlide}>
                <div 
                  className={styles.arrowCircle}
                  style={{ 
                    transform: akSlide === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.floatingText}>
                  {akSlide === 0 ? 'Want to see more ?' : 'back to project 2'}
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.projectCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardLeft}>
                    <div className={styles.titleRow}>
                      <span className={styles.projectLabel}>PROJECT</span>
                      <span className={styles.projectId}>{project.id}</span>
                    </div>
                    <h3 className={styles.projectName}>{project.title}</h3>
                    <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                      Live Link ↗
                    </a>
                    <p className={styles.description}>
                      {project.description}
                    </p>
                  </div>

                  <div className={styles.cardRight}>
                    {project.topEmoji && (
                      <Image
                        src={project.topEmoji}
                        alt="top-emoji"
                        className={styles.topEmoji}
                      />
                    )}
                    
                    {project.images ? (
                      <div className={styles.multiImageContainer}>
                        {project.images.map((imgObj, i) => (
                          <div key={i} className={styles.imageBox}>
                            <Image
                              src={imgObj.src}
                              alt={`Project ${project.id} Image ${i}`}
                              className={styles.projectImage}
                            />
                            {imgObj.emoji && (
                              <Image
                                src={imgObj.emoji}
                                alt="emoji"
                                className={`${styles.projectEmoji} ${i === 0 ? styles.emojiBottomLeft : ''}`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={styles.imageBox} style={project.id === "02" ? { transform: 'scale(1.15)' } : {}}>
                        <Image
                          src={project.image}
                          alt={`Project ${project.id}`}
                          className={styles.projectImage}
                        />
                        {project.emoji && (
                          <Image
                            src={project.emoji}
                            alt="emoji"
                            className={`${styles.projectEmoji} ${project.id === "02" ? styles.emojiTopRight : ''}`}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
