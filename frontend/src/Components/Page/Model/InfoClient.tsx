import React from 'react'
import './InfoClient.scss'

const InfoClient = () => {
  return (
    <div className='infoClient'>
        <div className='infoClient_titel'>
              <p>Чек: </p><select className='infoClient_titel_input' />
        </div>
        <div className='infoClient_block'>
            <h2>Сводка по клиентам</h2>
            <p className='infoClient_block_text'>Всего клиентов: 1</p>
            <p className='infoClient_block_text'>Посещение: 1</p>
            <p className='infoClient_block_text'>Общей чек: 1</p>
        </div>
        <div className='infoClient_input'>
            <h2>Фильтрация</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <p >От</p>
                <input className='infoClient_input_input' />
            </div>
            <div style={{ display: 'flex',gap:'10px'}}>
                <p>До</p>
                <input className='infoClient_input_input' />
            </div>
            
        </div>
        <button className='infoClient_button'>Применить</button>
    </div>
  )
}

export default InfoClient
