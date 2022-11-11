import React, { ReactElement } from 'react'
import {motion} from 'framer-motion'

interface Props {
    
}

export default function Projects({ }: Props): ReactElement {
    const projects = [1, 2, 3, 4, 5];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex relative flex overflow-hidden flex-col 
            text-left md:flex-row max-w-full 
            justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl">
          Projects
        </h3>
        <div
          className="relative w-full flex overflow-x-scroll overflow-y-hidden 
                snap-x snap-mandatory z-20"
        >
          {projects.map((project, i) => {
            return (
              <div
                className="w-screen flex-shrink-0 snap-center flex flex-col 
                    space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              >
                    <motion.img
                        initial={{
                            opacity: 0,
                            y:-300
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{once:true}}
                  src="https://media.tenor.com/flflC6GFzO8AAAAM/sultan-alrefaei-programmer.gif"
                  alt="project"
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-2xl font-semibold text-center">
                    {" "}
                    {i + 1}. Project Heading
                  </h4>
                  <p className="text-center md:text-left text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full absolute top-[30%] bg-[yellow]/10 left-0 h-[400px] -skew-y-12" />
      </motion.div>
    );
}
