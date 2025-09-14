import { RiReactjsLine, RiJavascriptLine } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiMongodb, SiMysql, SiDocker } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  const IconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  const icons = [
    // Frontend
    { Component: RiReactjsLine, color: "text-cyan-400", iconVariants: 4 },
    { Component: TbBrandNextjs, color: "text-[#0070f3]", iconVariants: 4 },
    { Component: RiJavascriptLine, color: "text-[#f0db4f]", iconVariants: 3 },
    {
      Component: TbBrandTypescript,
      color: "text-[#3178c6]",
      iconVariants: 3.5,
    },

    { Component: FaNodeJs, color: "text-green-500", iconVariants: 4 },

    // Database
    { Component: SiMysql, color: "text-[#00758f]", iconVariants: 3.5 },
    { Component: SiMongodb, color: "text-green-500", iconVariants: 4 },

    // DevOps
    { Component: SiDocker, color: "text-[#1d63ed]", iconVariants: 3.5 },

    // Languages / Tools
    { Component: TbBrandPython, color: "text-[#ffde57]", iconVariants: 3.5 },
  ];
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {icons.map(({ Component, color, iconVariants }, index) => (
          <motion.div
            variants={IconVariants(iconVariants)}
            initial="initial"
            animate="animate"
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Component className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
