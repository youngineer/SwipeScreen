import React, { type FC, type JSX } from 'react'
import { motion } from 'framer-motion';

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      animate="animate"
      className="py-4 px-8 rounded-xl font-semibold"
    >
      <div className="overflow-hidden relative">
        <motion.p className="text-[#022D42]">{children}</motion.p>
        <motion.p aria-hidden className="absolute top-0 left-0 text-[#F2FFBD]">
          {children}
        </motion.p>
      </div>
    </motion.button>
  );
};


export default Button;