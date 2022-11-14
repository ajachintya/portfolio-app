import React, { ReactElement } from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects:Project[]
}

export default function Projects({ projects }: Props): ReactElement {
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
          &#60;Projects/&#62;
        </h3>
        <div
          className="relative w-full flex overflow-x-scroll overflow-y-hidden 
                snap-x snap-mandatory z-20 scrollbar-thin scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        >
          {projects.map((project, i) => {
            return (
              <div
                key="i"
                className="w-screen flex-shrink-0 snap-center flex flex-col 
                    space-y-5 items-center justify-center p-20 md:p-44 h-screen "
              >
                <motion.img
                  initial={{
                    opacity: 0,
                    y: -300,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-44 h-38"
                  src={urlFor(project?.image.asset?._ref).url()}
                  alt="project"
                />
                <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-2xl font-semibold text-center">
                    {" "}
                    {i + 1}. {project?.title}
                  </h4>
                  <div className="flex items-center space-x-2 justify-center ">
                    {project?.technologies?.map(
                      (technology: any, index: number) => {
                        return (
                          <img
                            className="w-10 h-10 rounded-full"
                            key={index}
                            src={urlFor(technology.image.asset._ref).url()}
                          />
                        );
                      }
                    )}
                  </div>
                  <div className="flex items-center space-x-2 justify-center">
                    {project.gitLink ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project?.gitLink}
                      >
                        <button className="heroButton">Open Source 🔥</button>
                      </a>
                    ) : null}
                    {project.liveLink ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project?.liveLink}
                      >
                        <button className="heroButton">Live 📸</button>
                      </a>
                    ) : null}
                  </div>
                  <p className="text-center md:text-left text-md">
                    {project?.summary}
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
