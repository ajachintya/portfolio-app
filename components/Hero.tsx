import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo:PageInfo
}

export default function Hero({pageInfo}:Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My Name is Achintya", "A guy who loves problem solving"],
        loop: true,
        delaySpeed: 2000
    });


    return (
      <div className="h-screen flex flex-col space-y-9 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(pageInfo?.heroImage).url()}
          alt="photo"
        />
        <div className="z-20">
          <h2 className="text-xs uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
            &#60;{pageInfo?.role}/&#62;
          </h2>
          <h1 className="text-xl lg:text-2xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    );
}
