import { useState, useEffect } from 'react';
import useInView from 'react-cool-inview';
import { motion } from 'framer-motion';
import video from '../components/video/video.mp4';
const Landing = function () {
  const { observe, inView, scrollDirection } = useInView({
    threshold: 0.25,
    // unobserveOnEnter: true,
  });
  let [onClick, setClass] = useState(true);

  // setClass = () => {
  //   document.getElementById('manueItems').classList.toggle(active);

  //   setEffect(!effect);
  // };

  useEffect(() => {}, [inView]);

  return (
    <section ref={observe} className='landing'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <div className='content'>
        <motion.h2 animate={inView ? { y: [100, 0], opacity: [0, 1] } : {}}>
          LOREM LOREM
        </motion.h2>
        <motion.h3 animate={inView ? { y: [100, 0], opacity: [0, 1] } : {}}>
          LOREM LOREM LOREM
        </motion.h3>
        {console.log(inView)}
        <motion.a
          className='landingBtn'
          href=''
          animate={inView ? { y: [100, 0], opacity: [0, 1] } : {}}
        >
          Test test
        </motion.a>
      </div>
    </section>
  );
};

export default Landing;
