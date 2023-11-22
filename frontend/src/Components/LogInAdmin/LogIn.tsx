import React from 'react';
import './logIn.scss'
const LogIn:any =() => {
    return (
    <div className='form'>
            <h2 className='form_div_header'>Вход в CRM систему</h2>
        <div className='form_div'>
                <div className='form_div_body'>
                <label className='form_div_body_labale' htmlFor="username" >Логин</label>
                <input className='form_div_body_input' id='username' type='text' />
            </div>
            
            <div className='form_div_body'>
                <label className='form_div_body_labale' htmlFor="password" >пороль</label>
                <input className='form_div_body_input' type='password' id='password' />
            </div>
            
            <button className='form_div_body_button'>Войти</button>
            
        </div>
    </div>
    )
}

export default LogIn; 