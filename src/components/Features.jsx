import { motion } from "framer-motion";
import {Power4} from "gsap/all";
import React, { useState } from "react";

function Features() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"]'>Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[8] leading-none tracking-tighter font-semibold font-[Founder_Grotesk] text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE Project"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[8] leading-none tracking-tighter font-semibold font-[Founder_Grotesk] text-8xl">
                {"VISE".split("").map((item, index) => (
                   <motion.span
                   initial={{ y: "100%" }}
                   animate={isHovering ? { y: "0" } : { y: "100%" }}
                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.06 }}
                   className="inline-block"
                   key={index}
                 >
                   {item}
                 </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="VISE Project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
