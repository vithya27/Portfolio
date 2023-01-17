import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Intro from "components/Intro";
import About from "components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
