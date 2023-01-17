import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Intro from "components/Intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Vithya's portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Intro */}
      <section id="intro" className="snap-center">
        <Intro />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
