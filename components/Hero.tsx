import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles';

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
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor />
          </h1>
        </div>
      </div>
    );
}
