import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiFillStar, AiFillCloseCircle } from "react-icons/ai";

interface Props {
  title: string;
}

const NewFeature = ({ title }: Props) => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          className="text-orange-50 shadow font-secondary px-4 py-2 gap-2 rounded-xl bg-green-500 flex items-center w-fit font-normal"
        >
          <AiFillStar className="text-xl" />
          <span className="text-sm">New Feature: {title}</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-auto text-lg"
          >
            <AiFillCloseCircle />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewFeature;
