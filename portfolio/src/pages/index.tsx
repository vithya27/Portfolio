import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Intro from "components/Intro";
import About from "components/About";
import Experience from "components/Experience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-bg-blue text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Vithya's portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Intro */}
      <section id="intro" className="snap-start">
        <Intro />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
