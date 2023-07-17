import React, { useContext, useState } from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'
import { AppContext } from '../routes/App'
import Button from 'react-bootstrap/Button'

const PetCard = ({ pet }) => {
	const state = useContext(AppContext)
	const [show, setShow] = useState(false)
	const [message, setMessage] = useState('')

	const handleClose = () => setShow(false)
	const handleShow = () => {
		setShow(true)
		state.actions.addPet(pet)
	}

	const Specie = (specie) => {
		if (specie === 1) {
			return 'Perro'
		} else if (specie === 2) {
			return 'Gato'
		} else if (specie === 3) {
			return 'Ave'
		} else if (specie === 4) {
			return 'Otro'
		}
	}

	const Size = (size) => {
		if (size === 1) {
			return 'Pequeño'
		} else if (size === 2) {
			return 'Mediano'
		} else if (size === 3) {
			return 'Grande'
		}
	}

	return (
		<div className='row '>
			<div className='card col-5 m-3 h-100 marine shadow'>
				<h4 className='card-title text-center'>{pet.name}</h4>
				<div className='col w-100'>
					<Carousel photos={pet.photos} />
				</div>
				<div className='col'>
					<div className='card-body p-2'>
						<h5 className='card-subtitle m-3 text-body-secondary'>{Specie(pet.specie)}</h5>
						<p className='card-text'>Tamaño: {Size(pet.size)}</p>
						<p className='card-text'>Edad : {pet.age}</p>
						<p className='card-text'>Info : {pet.messages[0].message}</p>
						<p className='card-text'>{pet.need_backyard ? 'Necesita Patio' : 'No Necesita Patio'}</p>
					</div>
				</div>
			</div>
			<div className='card col-6 h-100 marine p-3 m-3 shadow'>
				<div>
					{pet.messages.map((message, index) => {
						return (
							<div key={index} className='row'>
								<div className='col-3'>
									<div className='col margin-secondary m-2 rounded-pill'>
										<img src={message.user.avatar} alt='avatar' className='img-fluid w-25 mx-2' />
										<span>{message.user.user}</span>
									</div>
								</div>
								<div className='col my-auto'>: {message.message}</div>
							</div>
						)
					})}
				</div>
				<form
					className='form-group'
					onSubmit={(e) => {
						e.preventDefault()
						state.actions.sendMessage(message)
					}}
				>
					<textarea
						className='form-control'
						placeholder='Comentarios'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' type='submit'>
						Enviar
					</Button>
				</form>
			</div>
		</div>
	)
}

export default PetCard

PetCard.propTypes = {
	pet: PropTypes.object,
}
