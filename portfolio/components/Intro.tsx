import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Vithya",
      "Coding Enthusiast",
      "Fullstack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-40 w-40 mx-auto object-cover border-line-blue border-4"
        src="https://i.imgur.com/TGl1Djr.jpg"
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-muted-blue pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="introButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="introButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="introButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="introButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
