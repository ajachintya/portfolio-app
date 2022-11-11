import React, { ReactElement } from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?:boolean
}

export default function Skill({ directionLeft }:Props): ReactElement {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity:0
                }}
                transition={{ duration: 1 }}
                whileInView={{opacity:1,x:0}}

                className="rounded-full border border-gray-500 object-cover w-24 h-16 xl:w-32 xl:h-11
                filter group-hover:grayscale transition duration-300 ease-in-out"
          src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
          alt=""
        />
      </div>
    );
}
