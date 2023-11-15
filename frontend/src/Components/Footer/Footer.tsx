import React from 'react'
import './footer.scss'
type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='footer'>
      <span className='footer_left' >©F-CRM  2023</span>
      <div className='footer_right'>
        <div className='footer_right_text'>
          <span>Поддержка</span>
          <span>|</span>
          <span>Контакты</span>
        </div>
        <div className='footer_right_text'>
          <img src='./img/telegram.svg' alt='icon'/>
          <img src='./img/mail.svg' alt='icon'/>
        </div>
      </div>
    </div>
  )
}