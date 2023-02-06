import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="min-h-screen flex relative flex-col text-center md:text-left xl:flelx-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="sectionHeader">Skills</h3>
    </motion.div>
  );
}
