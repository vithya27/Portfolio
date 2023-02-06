import React from "react";
import { motion } from "framer-motion";
type ResumeProps = {
  src: string;
  role: string;
  company: string;
  dates: string;
  description: string[];
};

export default function ExperienceCard(props: ResumeProps) {
  return (
    <article className="flex flex-col overflow-y-auto mt-24 sm:mt-28 md:mt-60 h-screen rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-line-blue p-5 hover:opacity-100 opacity-60 cursor-pointer transition-opacity">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={props.src}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{props.role}</h4>
        <p className="font-bold text-2xl mt-1 text-font-blue">
          {props.company}
        </p>
        <p className="uppercase py-5 text-muted-blue">{props.dates}</p>

        <ul className="list-disc space-y-4 ml-5 text-base text-justify">
          {props.description.map((e: any) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
