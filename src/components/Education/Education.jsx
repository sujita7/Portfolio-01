import styles from './Education.module.css';
import Image from 'next/image';
import CollegeImage from '../../assets/icons/college.svg';
import SchoolImage from '../../assets/icons/school.svg';

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>EDUCATION</h2>
        
        <div className={styles.timeline}>
          <div className={styles.item}>
            <div className={styles.textContent}>
              <h3 className={styles.degree}>Graduation</h3>
              <p className={styles.institution}>Bachelor of Engineering (CSE - Data Science)</p>
              <p className={styles.schoolName}>Lakshmi Narain College of Technology, Excellence</p>
              <p className={styles.duration}>[2021-2025] | CGPA - 8.17</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={CollegeImage} alt="College" className={styles.educationImage} />
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.textContent}>
              <h3 className={styles.degree}>Intermediate (CBSE)</h3>
              <p className={styles.schoolName}>Kendriya Vidyalaya, Patna</p>
              <p className={styles.duration}>[2020-2021] | 90%</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={SchoolImage} alt="School" className={styles.educationImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
