import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Project';
// import Education from '../components/Education/Education';
import Technologies from '../components/Technologies/Technologies';
import Hobbies from '../components/Hobbies/Hobbies';
import Contact from '../components/Contact/Contact';
import ThankYou from '../components/ThankYou/ThankYou';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* <Education /> */}
      <Technologies />
      <Hobbies />
      <Contact />
      <ThankYou />
    </main>
  );
}

