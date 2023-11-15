import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';



const Header:any = () => {
  const [language, setLanguage] = useState('RU');
 
  const handleLanguageChange = () => {
    if (language === 'EN') {
      setLanguage('RU');
    } else {
      setLanguage('EN');
    }
  };

  const [active ,setActive] = useState(false)
    
  return (
    <div className='header'>
      <div className='header_icon'> 
        <img src='/img/logo.svg' alt='e' />
      </div>

      <div className='header_link'>
        <Link to="/projects">
          <p className='header_link_text'>Проекты</p>
        </Link>

        <Link to="/clients">
          <p className='header_link_text'>Клиенты</p>
        </Link>

        <Link to="/proposals">
          <p className='header_link_text'>Предложения</p>
        </Link>

        <Link to="/about">
          <p className='header_link_text'>О приложении</p>
        </Link>
      </div>

      <div className='headerButton'>
        <span className='headerButton_icon' onClick={handleLanguageChange}>{language}</span>
        <img className='headerButton_icon' src="/img/moon.svg" alt="" />
        <Link to='/exite'>
          <img src="/img/exit.svg" alt="" />
        </Link>
        
        
      </div>
      
    </div>
  )
}

export default Header