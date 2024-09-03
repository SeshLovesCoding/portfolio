import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Import custom CSS for styling

const about = 'About Me * ';
const total_about = about.repeat(50);

const ScrollingText = () => {
  return (
    <div className="scroll-container">
      <motion.div
        className="scroll-text"
        initial={{ x: '-100%' }} // Start from the right end
        animate={{ x: '100%' }} // Animate to the left end
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      >
        <span className='stretched-word'>{total_about}</span>
      </motion.div>
    </div>
  );
};

export default ScrollingText;

