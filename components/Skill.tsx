import React, { ReactElement } from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity';
import { Skill } from '../typings';

type Props = {
    directionLeft?: boolean,
    skill:Skill
}

export default function SkillC({ directionLeft,skill }:Props): ReactElement {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -110 : 110,
                    opacity:0
                }}
                transition={{ duration: 1 }}
                whileInView={{opacity:1,x:0}}

                className="rounded-full border border-gray-500 object-cover w-24 h-16 xl:w-32 xl:h-11
                filter group-hover:grayscale transition duration-300 ease-in-out"
          src={urlFor(skill?.image).url()}
          alt=""
        />
      </div>
    );
}
