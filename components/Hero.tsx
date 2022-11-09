import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles';
import Link from 'next/link';

export default function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi", "My name is Aj", "Nice to meet you"],
        loop: true,
        delaySpeed: 2000
    });


    return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://media.tenor.com/flflC6GFzO8AAAAM/sultan-alrefaei-programmer.gif"
          alt=""
        />
        <div>
          <h2 className="text-xs uppercase text-gray-500 pb-2 tracking-[15px]">
            Software Engineer
          </h2>
          <h1 className="text-4xl lg:text-5xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experiece</button>
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
