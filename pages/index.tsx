import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero';
import About from '../components/About'
import WorkExperience from '../components/WorkExperience';
import Skills from "../components/Skills";
import Projects from '../components/Projects'
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0
     overflow-x-hidden scrollbar scroll-bar-track-gray-400/20 scrollbar-thumb-[#]">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Project */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
