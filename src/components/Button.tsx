import React from "react";
import { motion } from "framer-motion";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: any;
}

const Button = (props: Props) => {
  return (
    <motion.button
      onClick={props.onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgb(154 52 18)",
        transition: { duration: 0.2 },
      }}
      className="bg-orange-700 px-4 flex items-center py-2 rounded-lg uppercase font-secondary text-white tracking-wider"
    >
      {props.icon && <div className="mr-1">{props.icon}</div>}
      {props.text}
    </motion.button>
  );
};

export default Button;