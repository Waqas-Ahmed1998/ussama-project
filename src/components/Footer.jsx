import { useEffect } from 'react';
import useInView from 'react-cool-inview';
import { motion } from 'framer-motion';

const Footer = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
  });
  if (inView) document.getElementById('footer').classList.remove('active');
  useEffect(() => {}, [inView]);

  return (
    <section ref={observe} id='footer' className='footer active'>
      <div className='container'>
        <div className='grid'>
          <motion.div
            className='logo-content'
            animate={inView ? { y: [1000, 0], opacity: [0, 1] } : {}}
          >
            <h2>UI-PROJECT</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              dignissimos est officiis numquam harum velit in eligendi,
            </p>
          </motion.div>

          <motion.div
            className='items'
            animate={inView ? { y: [-1000, 0], opacity: [0, 1] } : {}}
          >
            {' '}
            <p>Contact Us</p>
            <li>
              {' '}
              <a href=''>Contact</a>
            </li>
            <li>
              {' '}
              <a href=''>Support</a>
            </li>
            <li>
              {' '}
              <a href=''>Destinations</a>
            </li>
            <li>
              {' '}
              <a href=''>Sponsorships</a>
            </li>
          </motion.div>
          <motion.div
            className='items'
            animate={inView ? { y: [1000, 0], opacity: [0, 1] } : {}}
          >
            <p>Videos</p>
            <li>
              {' '}
              <a href=''>Submit Videos</a>
            </li>
            <li>
              {' '}
              <a href=''>Ambassadors</a>
            </li>
            <li>
              {' '}
              <a href=''>Agency</a>
            </li>
            <li>
              {' '}
              <a href=''>Influencer</a>
            </li>
          </motion.div>

          <motion.div
            className='items'
            animate={inView ? { y: [-1000, 0], opacity: [0, 1] } : {}}
          >
            <p>Social Media</p>
            <li>
              {' '}
              <a href=''>Istagram</a>
            </li>
            <li>
              {' '}
              <a href=''>Facebook</a>
            </li>
            <li>
              {' '}
              <a href=''>YouTube</a>
            </li>
            <li>
              {' '}
              <a href=''>twitter</a>
            </li>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
