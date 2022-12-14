import React, { ReactElement } from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { Experience } from '../typings';

type Props = {
    experiences:Experience[]
}

export default function WorkExperience({ experiences }: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col overflow-hidden relative h-screen text-center md:text-left 
            md:flex-row max-w-full px-10
         justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 text-gray-500 uppercase md:tracking-[20px] tracking-[15px] sm:text-sm md:text-lg lg:text-2xl">
        &#60;Experience/&#62;
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20
         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin h-108"
      >
        {experiences?.map((experience, index) => {
          return <ExperienceCard key={index} experience={experience} />;
        })}
      </div>
    </motion.div>
  );
}
