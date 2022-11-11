import React, { ReactElement } from "react";
import Skill from "../components/Skill";
import { motion } from "framer-motion";

interface Props {}

export default function Skills({}: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flow-row max-w-[300px] xl:px-10
      min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl">
        &#60;Skills/&#62;
      </h3>
      <p className="text-gray-500 uppercase tracking-[10px] text-xs">
        Languages
      </p>
      <div className="pt-5 pb-5 grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
      <p className="text-gray-500 uppercase tracking-[10px] text-xs">Tools</p>
      <div className="pt-5 grid grid-cols-4 gap-5">
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
      </div>
    </motion.div>
  );
}
