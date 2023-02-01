import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col overflow-y-auto mt-24 sm:mt-28 md:mt-60 h-screen rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-line-blue p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Instructional Associate</h4>
        <p className="font-bold text-2xl mt-1 text-font-blue">
          General Assembly
        </p>
        <p className="uppercase py-5 text-muted-blue">2022 - Present</p>

        <ul className="list-disc space-y-4 ml-5 text-sm text-justify">
          <li>
            Collaborate with Lead Instructor for Software Engineering to guide a
            cohort of 15 students through a three-month rigorous journey towards
            apprenticeship in software development
          </li>
          <li>
            Troubleshoot and debug coding deliverables daily and manage Github
            Enterprise repository
          </li>
          <li>
            Facilitate a safe, supportive, and energetic community that welcomes
            the various needs and learning styles of students.
          </li>
          <li>
            Ensure features on projects/deliverables are operationally ready for
            launch on their deployed applications
          </li>
        </ul>
      </div>
    </article>
  );
}
