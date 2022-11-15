import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
  experience:Experience
}

export default function ExperienceCard({experience}:Props): ReactElement {
    return (
      <article
        className="flex flex-col mt-5 rounded-lg items-center md:space-y-7 space-y-0 flex-shrink-0 
        w-[295px] sm:w-[500px] md:w-[730px] xl:w-[1100px] snap-center bg-[#292929] md:p-10 md:pt-10 hover:opacity-100 opacity-40
        cursor-pointer transition-opacity duration-200"
      >
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src={urlFor(experience?.companyImage?.asset._ref).url()}
          alt="company logo"
        />
        <div>
          <h4 className="text-xl font-light">{experience?.jobTitle}</h4>
          <p className="font-bold text-md mt-1">{experience?.company}</p>
          <div className="flex space-x-2 my-2 justify-center md:justify-start">
            {experience?.technologies?.map((technology, index) => {
              return (
                <img
                  key={index}
                  className="h-6 w-6 rounded-full"
                  src={urlFor(technology.image).url()}
                  alt={technology.title}
                />
              );
            })}
          </div>
          <p className="uppercase py-5 text-gray-300">
            {new Date(experience?.dateStarted).toDateString()} -{" "}
            {experience?.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience?.dateEnded).toDateString()}
          </p>
          <ul className="list-disc ml-5 text-sm">
            {experience?.points?.map((point, index) => {
              return <li key={index}> {point} </li>;
            })}
          </ul>
        </div>
      </article>
    );
}
