import { useState, useEffect } from 'react';
import useInView from 'react-cool-inview';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons';
const Testimonials = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
    // unobserveOnEnter: true,
  });
  if (inView) document.getElementById('about').classList.remove('active');
  useEffect(() => {}, [inView]);

  return (
    <section ref={observe} id='about' className='testimonials container active'>
      <motion.div
        className='heading'
        animate={inView ? { x: [-100, 0], opacity: [0, 1] } : {}}
        transition={{ duration: 0.4 }}
      >
        <p>Testimonials</p>
        <h2>What people are saying </h2>
      </motion.div>
      <div className='grid'>
        <div className='content'>
          <motion.div
            className=''
            animate={inView ? { x: [-100, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.6 }}
          >
            {' '}
            <FontAwesomeIcon
              style={{ color: 'pink' }}
              icon={faCheckCircle}
              size='2x'
            />
            <h2>Person name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              impedit dignissimos ratione delectus in quos suscipit perferendis
              modi mollitia exercitationem eum iusto, quod quisquam adipisci
              laboriosam id consequatur a officiis?
            </p>
          </motion.div>
          <motion.div
            className=''
            animate={inView ? { x: [-100, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.8 }}
          >
            {' '}
            <FontAwesomeIcon
              style={{ color: 'orange' }}
              icon={faLightbulb}
              size='2x'
            />
            <h2>Person name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              impedit dignissimos ratione delectus in quos suscipit perferendis
              modi mollitia exercitationem eum iusto, quod quisquam adipisci
              laboriosam id consequatur a officiis?
            </p>
          </motion.div>
        </div>
        <div className='imagePart'>
          {' '}
          <motion.div
            className='image pic1'
            animate={inView ? { y: [-100, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.6 }}
          ></motion.div>
          <motion.div
            className='image pic2'
            animate={inView ? { y: [-100, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
