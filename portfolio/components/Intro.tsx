import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Vithya", "Blah blah blah", "Meh Meh MEh"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C4D03AQErpFbQxz3jfA/profile-displayphoto-shrink_200_200/0/1517368992595?e=1679529600&v=beta&t=Yi6wpWaoM8Nlhv5zkR8JYPzgUs4Glx9ZkqVXgCPKbGM"
        alt="profile"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
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
