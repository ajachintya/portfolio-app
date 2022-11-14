import React, { ReactElement } from "react";
import SkillC from "../components/Skill";
import { motion } from "framer-motion";
import { Skill } from "../typings";

type Props = {
  skills:Skill[]
}

export default function Skills({skills}: Props): ReactElement {
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
      <div className="pt-5 grid grid-cols-4 gap-5">
        {skills?.slice(0,skills.length/2).map((skill,index) => {
          return <SkillC key={index} skill={skill} />;
        })}
      </div>
      <div className="pt-5 grid grid-cols-4 gap-5">
        {skills?.slice((skills.length/2),skills.length).map((skill,index) => {
          return <SkillC key={index} directionLeft={true} skill={skill} />;
        })}
      </div>
    </motion.div>
  );
}
