import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = function () {
  let [onClick, setClass] = useState(true);
  const [effect, setEffect] = useState(true);

  setClass = () => {
    document.getElementById('manueItems').classList.toggle('manueActive');

    setEffect(!effect);
  };

  useEffect(() => {}, [effect]);

  return (
    <nav id='navbar' className='navbar'>
      <div className='container flex'>
        <div>
          <h1 className='logo'>UI-Project</h1>
        </div>

        <div id='manueItems' className='manueItemss'>
          <ul className='linkItems'>
            <li>
              <a href='#destinations'>Trips</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#why'>Carrers</a>
            </li>{' '}
            <li className=''>
              {' '}
              <a href='#Offer'>Contact</a>
            </li>
            <li className='lastLink'>
              {' '}
              <a href='#Offer'>Book a Flight</a>
            </li>
          </ul>
        </div>
        <div className='lastButton'>
          {' '}
          <li className=''>
            <a href=''> Test test</a>
          </li>
        </div>

        <div className='manue'>
          <motion.p whileTap={{ scale: 1.2 }} onClick={setClass}>
            {effect ? (
              <FontAwesomeIcon
                style={{ color: 'white' }}
                icon={faStream}
                size='2x'
              />
            ) : (
              // <CloseIcon fontSize='large' />
              <FontAwesomeIcon
                style={{ color: 'white' }}
                icon={faTimes}
                size='2x'
              />
            )}
          </motion.p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
