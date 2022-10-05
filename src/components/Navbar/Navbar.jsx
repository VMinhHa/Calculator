import useDarkMode from 'components/useDarkMode';
import React from 'react'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import './navbar.css';

const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className='navbar'>
        <h1>Calculator</h1>
		{isDarkMode ? (
          <BsSunFill className='navbar__icon' 
            onClick={ () => toggleDarkMode(!isDarkMode)} />
		) : (
			<FaMoon className='navbar__icon'
            onClick={ () => toggleDarkMode(!isDarkMode)}/>
		)}
    </div>
  )
}

export default Navbar