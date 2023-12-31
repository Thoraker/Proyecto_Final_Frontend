import { useContext, useState } from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'
import { AppContext } from '../routes/App'
import Modal from 'react-bootstrap/Modal'

const PetAdoptionCard = ({ pet }) => {
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
		<div className='card h-100 marine'>
			<h4 className='card-title text-center'>{pet.name}</h4>
			<div className='col w-100'>
				<Carousel photos={pet.photos} />
			</div>
			<div className='col'>
				<div className='card-body p-2'>
					<h5 className='card-subtitle m-3 text-body-secondary'>{Specie(pet.specie)}</h5>
					<p className='card-text m-1'>Tamaño: {Size(pet.size)}</p>
					<p className='card-text m-1'>Edad : {pet.age}</p>
					<p className='card-text m-1'>Info : {pet.messages[0].message}</p>
					<p className='card-text m-1'>{pet.need_backyard ? 'Necesita Patio' : 'No Necesita Patio'}</p>
				</div>
			</div>
			<button className='btn shadow forest text-light w-50 align-self-end m-3' onClick={handleShow}>
				Comentarios
			</button>

			<Modal show={show} onHide={handleClose} backdrop='static' keyboard={false} size='lg'>
				<Modal.Header closeButton className='gradiente100 shadow'>
					<Modal.Title>{pet.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
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
				</Modal.Body>
				<Modal.Body className='gradiente100 rounded-bottom shadow'>
					<form
						className='form-group'
						onSubmit={(e) => {
							e.preventDefault()
							state.actions.sendMessage(message)
						}}
					>
						<textarea
							className='form-control my-3 shadow'
							placeholder='Comentarios'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button className='btn shadow forest text-light ' onClick={handleClose}>
							Close
						</button>
						<button className='btn shadow forest text-light' type='submit'>
							Enviar
						</button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default PetAdoptionCard

PetAdoptionCard.propTypes = {
	pet: PropTypes.object,
}
