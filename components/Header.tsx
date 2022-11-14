import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[];
}

function Header({ socials }:Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icon */}
        {socials?.map((social,index) => {
          return (
            <SocialIcon
              key={index}
              className="heroButton"
              style={{ height: 40, width: 40 }}
              url={social?.url}
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
              rel="noopener noreferrer"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
