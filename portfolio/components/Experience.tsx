import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import resumeData from "./resumeData";
import { Roboto_Flex } from "@next/font/google";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="sectionHeader">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-screen">
        {/* Experience Card*/}

        {resumeData.map((e: any) => {
          return (
            <ExperienceCard
              src={e.src}
              role={e.role}
              company={e.company}
              dates={e.dates}
              description={e.description}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
