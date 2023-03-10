import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src: string;
  alt: string;
};

function Skill({ directionLeft, src, alt }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        className="rounded-full border border-muted-blue object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-highlight-blue h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-bold text-line-blue opacity-100">{alt}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
