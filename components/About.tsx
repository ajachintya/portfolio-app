import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Link from "next/link";

interface Props {
    
}

export default function About({}: Props): ReactElement {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
         justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl">
          About
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
          src="https://media.tenor.com/flflC6GFzO8AAAAM/sultan-alrefaei-programmer.gif"
          className="-mb-20 mt-10 md:mt-0 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg 
                md:w-64 md:h-95 xl:w-[250px] xl:h-[250px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl font-semibod">
            Here is a{" "}
            <span className="underline decoration-[#7FAB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/11M0TYwywEwT2gZ6ilALWTCNJVSP5WdjI/view?usp=sharing"
          >
            <button className="heroButton mt-10">
              Download CV
            </button>
          </a>
        </div>
      </motion.div>
    );
}
