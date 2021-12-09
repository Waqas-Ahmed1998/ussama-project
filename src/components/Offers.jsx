import { useState, useEffect } from 'react';
import useInView from 'react-cool-inview';
import { motion } from 'framer-motion';

const Offers = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });
  if (inView) document.getElementById('Offer').classList.remove('active');
  useEffect(() => {}, [inView]);

  return (
    <section id='Offer' className='offers active'>
      <div ref={observe} className='container'>
        <div className='content'>
          <motion.h1
            animate={inView ? { y: [-100, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            Get Exclusive high Offers{' '}
          </motion.h1>
          <motion.h2
            animate={inView ? { y: [-80, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.7 }}
          >
            Sign up for the newsletter to get exclusive offers
          </motion.h2>
          <motion.div
            className='input'
            animate={inView ? { y: [100, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {' '}
            <input type='text' placeholder='Enter you email' />
            <a href='hello'>Sign Up</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// <motion.div
// className='input'
// animate={inView ? { y: [100, 0], opacity: [0, 1] } : {}}
// transition={{ duration: 0.5 }}
// >
// {' '}
// <input type='text' placeholder='Enter you email' />
// <a href='hello'>Sign Up</a>
// </motion.div>
export default Offers;
