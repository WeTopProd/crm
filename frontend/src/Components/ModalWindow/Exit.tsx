import React from 'react'
import './model.scss'
const Exit = () => {
    return (
           
        <div className='modal'>
            <h2 className='modal_header'>Вы уверены, что хотите выйти?</h2>
            <div className='modal_div'>
                <button className='modal_div_button'>Нет</button>
                <button className='modal_div_button'>Да</button>
            </div>
            
        </div>  
    );
}

export default Exit;
