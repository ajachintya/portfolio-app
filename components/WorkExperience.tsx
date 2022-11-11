import React, { ReactElement } from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';

interface Props {
    
}

export default function WorkExperience({}: Props): ReactElement {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col overflow-hidden relative h-screen text-center md:text-left md:flex-row max-w-full px-10
         justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl">
          Experience
        </h3>
        <div className="mt-20">
          <ExperienceCard />
        </div>
      </motion.div>
    );
}
