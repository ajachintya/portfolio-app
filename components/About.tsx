import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Link from "next/link";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};


export default function About({ pageInfo }: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
         justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl">
        &#60;About/&#62;
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 mt-10 md:mt-0 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg 
                md:w-64 md:h-95 xl:w-[250px] xl:h-[250px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibod">
          Here is a{" "}
          <span className="underline decoration-[#7FAB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/11M0TYwywEwT2gZ6ilALWTCNJVSP5WdjI/view?usp=sharing"
        >
          <button className="heroButton mt-10">Download CV</button>
        </a>
      </div>
    </motion.div>
  );
}
