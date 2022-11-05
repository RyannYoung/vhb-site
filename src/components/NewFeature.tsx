import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiFillStar, AiFillCloseCircle } from "react-icons/ai";
import useWindowSize from "../hooks/useWindowSize";

interface Props extends React.ComponentPropsWithRef<"div"> {
  title: string;
}

const NewFeature = ({ title, ...rest }: Props) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const { width, height } = useWindowSize();

  return (
    <div {...rest}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            exit={{ opacity: 0 }}
            className="text-orange-50 shadow font-secondary px-2 py-1 lg:px-4 lg:py-2 gap-1 lg:gap-2 rounded-xl bg-green-500 flex items-center w-fit font-normal"
          >
            <AiFillStar className="text-xs lg:text-xl" />
            <span className="text-xs lg:text-sm">
              New Feature{width > 600 && `: ${title}`}
            </span>
            {width > 600 && (
              <>
                <button
                  onClick={() => setIsVisible(false)}
                  className="ml-auto text-lg"
                >
                  <AiFillCloseCircle className="text-xs lg:text-xl" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewFeature;
