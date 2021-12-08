import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const Navbar = function () {
  let [onClick, setClass] = useState(true);
  const [effect, setEffect] = useState(true);

  // setClass = () => {
  //   document.getElementById('manueItems').classList.toggle(active);

  //   setEffect(!effect);
  // };

  useEffect(() => {}, [effect]);

  return (
    <nav id='navbar' className='navbar'>
      <div className='container flex'>
        <div>
          <h1 className='logo'>UI-Project</h1>
        </div>

        <div id='manueItems'>
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
          </ul>
        </div>

        <li className='lastLink'>
          <a href=''> Test test</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
