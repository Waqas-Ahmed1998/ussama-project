import { useState, useEffect } from 'react';
import useInView from 'react-cool-inview';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faCoffee,
  faGlobe,
  faGlobeAmericas,
  faPlane,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
const Why = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });
  if (inView) document.getElementById('why').classList.remove('active');
  useEffect(() => {}, [inView]);

  return (
    <section id='why' className='why active'>
      <div ref={observe} className='container'>
        <motion.h1
          className='heading'
          animate={inView ? { x: [-100, 0], opacity: [0, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h1>
        <motion.div
          className='grid'
          animate={inView ? { x: [-100, 0], opacity: [0, 1] } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className='card'>
            <FontAwesomeIcon
              icon={faClock}
              size='3x'
              style={{ color: 'orange' }}
            />
            <h2 className='highlight'>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className='card'>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              size='3x'
              style={{ color: 'gold' }}
            />
            <h2 className='highlight'>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className='card'>
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              size='3x'
              style={{ color: 'blue' }}
            />
            <h2 className='highlight'>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className='card'>
            <FontAwesomeIcon
              style={{ color: 'green' }}
              icon={faCalendar}
              size='3x'
            />
            <h2 className='highlight'>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
