import React, { useContext, useState } from 'react'
import { AppContext } from '../routes/App'

const MessageBoard = () => {
	const state = useContext(AppContext)
	const [pet, setPet] = useState(0)

	return (
		<div className='card'>
			<div className='d-flex align-items-start'>
				<h4 className='card-title'>Mensajes enviados <i className="bi bi-send-check"></i></h4>
				<div
					className='nav flex-column nav-pills me-3'
					id='v-addresses-tab'
					role='addresses'
					aria-orientation='vertical'
				>
					{state.store.User.Mensajes.length === 0 ? (
						<h3> No tienes mensajes </h3>
					) : (
						state.store.User.Mensajes.map((message, index) => {
							return (
								<li className='nav-item' key={index} role='presentation'>
									<button
										className='nav-link px-5 m-2 w-100'
										id='profile-tab'
										data-bs-toggle='tab'
										data-bs-target='#profile-tab-pane'
										type='button'
										role='tab'
										onClick={() => {
											setPet(index)
										}}
										aria-selected='false'
									>
										{message.Titulo}
									</button>
								</li>
							)
						})
					)}
				</div>
				<div className='tab-content' id='v-addresses-tabContent'></div>
				<div></div>
			</div>
			<div className='d-flex align-items-start'>
				<h4 className='card-title'>Mensajes Recibidos   </h4>
				<div
					className='nav flex-column nav-pills me-3'
					id='v-addresses-tab'
					role='addresses'
					aria-orientation='vertical'
				>
					{state.store.User.Mascotas.map((mascota, index) => {
						return mascota.Mensajes.length > 0 ? (
							<li className='nav-item' key={index} role='presentation'>
								<button
									className='nav-link px-5 m-2 w-100'
									id='profile-tab'
									data-bs-toggle='tab'
									data-bs-target='#profile-tab-pane'
									type='button'
									role='tab'
									onClick={() => {
										setPet(index)
									}}
									aria-selected='false'
								>
									{mascota.Mensajes.map((message, index) => {
										return <h3 key={index}>{message.Titulo}</h3>
									})}
								</button>
							</li>
						) : null
					})}
				</div>
				<div className='tab-content' id='v-addresses-tabContent'></div>
				<div></div>
			</div>
		</div>
	)
}

export default MessageBoard
