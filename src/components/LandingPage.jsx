import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Openings", "Presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] w-[8vw] rounded-md h-[6vw] relative bg-red-500"
                ></motion.div>
              )}
              <h1 className="pt-[2vw] -mb-[3vw] uppercase text-[9vw] leading-[1] font-['Founders_Grotesk_X'] font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none px-20" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-400 font-light text-sm uppercase rounded-full">
            Start the project
          </div>
          <div className="h-10 w-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
