import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">About</h3>

      <motion.img
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://lh3.googleusercontent.com/2h6JCdsisvTpniw05z4gTK51HK4PskO0jvYUnJ79CMoX-NUsTBmF2R29I4p2MbApJeC-vG1MFsIYzbe8RqHLPvTuw-oWYM-tHYXLKn8NXOhuT7Pl59BagWE0qwqmWoK9PSfjkXJqL6z82mNZg4kyT8ofgNwnA1C9rtq3Uk64o8_FQyUFc3cE9pZ5N8ESbQEm9ii-MWdpAkgZNV7YI_eW_piMvl2Y8a_b8Ml4VPiiJbE-sf3JiuKQStqRtCJkYnmyHNvTRS2kLqd0bRSi7quJC3NmN-2YAZVdemUgLo8yEwGXHcp_zHlyrdgGDr8jabRthvJ81bBjBD6K7ZyNEerq8bpC5To4FM09SRVmO4pKcPq2C6ss3wMCNA-PshRoZ-8-yuoDSV3j0RpISjejDAZmlQpDKrYtIBk29wY6ntS6wVC5vxR1l51hsD99jNikHhKVKu81SBVtWzy7Euoisfj_J2ca2Kck9dyrwI-YrotNa1_rqI8cYYDc3INCKXrzcMBsjbrgrVmNwtdIZLr7nbmlx8ytrEwqJinZmKdOtfB_4N2eiPQlfnm4wrvIcvAQLCwFxQhZ586m686a8SxgCiQ_S8NnF7l2X7OIE9czawR_0CKpS3_VEDCLeUyrIuGsVzVRIsPVYU9k4T_OFpY1KibAW1V8_JVLa1wjvMbRQ1YJdbln7ZnzxRimbWF-7z5cGj20yU6SwanEaP-AOXqNjC86H6W9YBBrBq5XT4w5XiFixMg-XtKV0lEemNqhAjustbFNTDbbK3tMVfzYoJzrFtmuPj1ZRYkrUKa1HckDy4XXAaxL0qrVl9Sq8Pc3agAWZ8361ZhZqGlTQk17LFI0Uvsrw5VfwAbTnclssrH9AO3U_SeyL0oqM8h_G0Luqhg6FpjBbgAjuqHAvP7v1hsQglPm6xbBlR9j4O6QnzOaBkSYJrYtXxiB5B-jOsO2S6e6gLkj1VhnRUiP2mO8t1UFRKtx1w=w687-h914-no?authuser=0"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a little{" "}
          <span className="underline decoration-[#DA9840]">background</span>
        </h4>
        <p className="text-base">
          A spark ignited in me the first time I wrote a line of code to print
          "Hello World" on a webpage. I decided to take the plunge into the
          field of software engineering from that moment. Web development is a
          culmination of all my passions. It allows me to use my creativity to
          problem solve and I thoroughly enjoy the sense of fulfilment which
          comes when I manage to solve the issue. My specialties include quickly
          learning programming languages, responsive designs and problem
          solving. I look forward to learning more programming languages,
          frameworks or principles which can aid in making efficient code to my
          repertoire. <br /> <br />
        </p>
      </div>
    </motion.div>
  );
}

export default About;
