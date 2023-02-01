import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

interface ResumeProps {
  src: string;
  role: string;
  company: string;
  dates: string;
  description: [string];
}

export default function Experience({
  src,
  role,
  company,
  dates,
  description,
}: ResumeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {/* Experience Card*/}

        <ExperienceCard />

        {/* Experience Card*/}

        <ExperienceCard />

        {/* Experience Card*/}

        <ExperienceCard />

        {/* Experience Card*/}

        <ExperienceCard />
      </div>
    </motion.div>
  );
}
