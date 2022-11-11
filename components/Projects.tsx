import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Projects({}: Props): ReactElement {
    return (
      <div
            className="h-screen relative flex relative flex overflow-hidden flex-col 
            text-left md:flex-row max-w-full 
            justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl">
                Projects
        </h3>
            <div className="w-full absolute top-[30%] bg-[yellow]/10 left-0 h-[400px] -skew-y-12" /> 
      </div>
    );
}
