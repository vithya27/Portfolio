import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 mb-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">About</h3>
      <div>
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-56 h-56 rounded-full object-cover mt-32 md:mt-10 md:w-96 md:h-96"
          src="https://i.imgur.com/NnDN1QK.jpg?1"
        />
      </div>

      <div className="space-y-6 px-0 md:px-10 overflow-y-auto">
        <h4 className="text-4xl font-semibold">
          Here is a little
          <span className="underline decoration-highlight-blue">
            background
          </span>
        </h4>
        <p className="text-base text-font-blue text-justify ">
          A spark ignited in me the first time I wrote a line of code to print
          &aposHello World&apos on a webpage. I decided to take the plunge into
          the field of software engineering from that moment. Web development is
          a culmination of all my passions. It allows me to use my creativity to
          problem solve and I thoroughly enjoy the sense of fulfilment which
          comes when I manage to solve the issue. My specialties include quickly
          learning programming languages, responsive designs and problem
          solving. I look forward to learning more programming languages,
          frameworks or principles which can aid in making efficient code.
          <br /> <br />
        </p>
      </div>
    </motion.div>
  );
}

export default About;
