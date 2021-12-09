import { useState, useEffect } from 'react';
import useInView from 'react-cool-inview';
import { motion } from 'framer-motion';

const Destination = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.1,
    // unobserveOnEnter: true,
  });
  if (inView)
    document.getElementById('destinations').classList.remove('active');

  useEffect(() => {}, [inView]);

  return (
    <section
      ref={observe}
      id='destinations'
      className='destinations container active'
    >
      <h1 className='dest-Heading'>View Destinations</h1>
      <div className=' grid'>
        <motion.div
          className='locations loc-1'
          animate={inView ? { y: [-100, 0], opacity: [0, 1] } : {}}
        >
          <div className='content'>
            {' '}
            <p className=''>Lorem, ipsum.</p>
            <a className='dest-btn' href=''>
              Lorem lorem
            </a>
          </div>
        </motion.div>
        <motion.div
          className='locations loc-2'
          animate={inView ? { y: [-100, 0], opacity: [0, 1] } : {}}
        >
          <div className='content'>
            {' '}
            <p className=''>Lorem, ipsum.</p>
            <a className='dest-btn' href=''>
              Lorem lorem
            </a>
          </div>
        </motion.div>
        <motion.div
          className='locations loc-3'
          animate={inView ? { y: [-100, 0], opacity: [0, 1] } : {}}
        >
          <div className='content'>
            {' '}
            <p className=''>Lorem, ipsum.</p>
            <a className='dest-btn' href=''>
              Lorem lorem
            </a>
          </div>
        </motion.div>
        <motion.div
          className='locations loc-4'
          animate={inView ? { y: [-100, 0], opacity: [0, 1] } : {}}
        >
          <div className='content'>
            {' '}
            <p className=''>Lorem, ipsum.</p>
            <a className='dest-btn' href=''>
              Lorem lorem
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
// <h1 className={.logo}>logo</h1>

// < MenuIcon fontSize='large' />
export default Destination;
