import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import useWindowSize from "../hooks/useWindowSize";

interface Props {
  content: string;
}

const Terminal = ({ content }: Props) => {
  const [hover, setHover] = useState(false);
  const [value, copy] = useCopyToClipboard();

  const { width, height } = useWindowSize();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="w-full bg-[#3D4451] text-white px-8 py-4 rounded-xl"
    >
      {width > 600 && (
        <div className="flex mb-4 gap-3">
          <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
          <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
          <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
        </div>
      )}
      <div className="flex items-center overflow-x-scroll whitespace-nowrap">
        <span className="font-code mr-4 text-slate-500">{">"}</span>
        <code className="font-code">{content} </code>
        <AnimatePresence>
          {hover && (
            <motion.span
              whileTap={{
                scale: 0.9,
                transition: {
                  type: "tween",
                  duration: 0.1,
                  ease: "easeInOut",
                },
              }}
              onClick={() => copy(content)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="ml-auto text-2xl hover:cursor-pointer "
            >
              <HiOutlineClipboardList />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Terminal;
