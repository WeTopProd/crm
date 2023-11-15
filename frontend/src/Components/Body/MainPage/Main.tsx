import React from 'react'
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
		<div className='main_input'>
			<div className='main_input_big'>
				<img className='main_input_big_icon' src="./img/search.svg" alt="" />
				<input className='main_input_big_input' placeholder='Поиск клиента по имени'/>
			</div>
			
			<div className='main_input_div'>
				<img src="./img/adduser.svg" alt="" />
				<p>Добавить</p>
			</div>
		</div>
		<div className='main_button'>

			<div className='main_button_div'>
				<img src="./img/users.svg" alt="" />
				<p>Все клиенты</p>
			</div>

			<div className='main_button_div'>
				<img src="./img/layers.svg" alt="" />
				<p>Проекты</p>
			</div>

			<div className='main_button_div'>
				<img src="./img/gift.svg" alt="" />
				<p>Предложения</p>
			</div>
		</div>
    </div>
  )
}

export default Main
