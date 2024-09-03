import React from 'react';
import { motion } from 'framer-motion';
import './Tech.css'; // Import custom CSS for styling
import tml from './image/html.png';
import css from './image/css.png';
import js from './image/js1.png';
import php from './image/php1.png';
import mongo from './image/mongodb1.png';
import react from './image/react1.png';
import notion from './image/notion1.png';
import java from './image/java.png';

const Tech = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide-track">
          {/* Original Slides */}
          <div className="slide">
            <img src={tml} height="100" width="250" alt="HTML" />
          </div>
          <div className="slide">
            <img src={css} height="100" width="250" alt="CSS" />
          </div>
          <div className="slide">
            <img src={js} height="100" width="250" alt="JavaScript" />
          </div>
          <div className="slide">
            <img src={react} height="100" width="250" alt="React" />
          </div>
          <div className="slide">
            <img src={php} height="100" width="250" alt="PHP" />
          </div>
          <div className="slide">
            <img src={mongo} height="100" width="250" alt="MongoDB" />
          </div>
          <div className="slide">
            <img src={notion} height="100" width="250" alt="Notion" />
          </div>
          <div className="slide">
            <img src={java} height="100" width="250" alt="Java" />
          </div>
          {/* Duplicated Slides for Seamless Looping */}
          <div className="slide">
            <img src={tml} height="100" width="250" alt="HTML" />
          </div>
          <div className="slide">
            <img src={css} height="100" width="250" alt="CSS" />
          </div>
          <div className="slide">
            <img src={js} height="100" width="250" alt="JavaScript" />
          </div>
          <div className="slide">
            <img src={react} height="100" width="250" alt="React" />
          </div>
          <div className="slide">
            <img src={php} height="100" width="250" alt="PHP" />
          </div>
          <div className="slide">
            <img src={mongo} height="100" width="250" alt="MongoDB" />
          </div>
          <div className="slide">
            <img src={notion} height="100" width="250" alt="Notion" />
          </div>
          <div className="slide">
            <img src={java} height="100" width="250" alt="Java" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;

