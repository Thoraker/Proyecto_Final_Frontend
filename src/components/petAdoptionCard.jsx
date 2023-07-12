import React, { useContext, useState } from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'
import { AppContext } from '../routes/App'

const PetAdoptionCard = ({ pet }) => {
	const state = useContext(AppContext)
	const [messageObject, setMessageObject] = useState(state.store.mascotaActiva.messages[0])
	const [response, setResponse] = useState('')

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
		<div className='card bg-info h-100'>
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

			<button
				type='button'
				className='btn btn-primary'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal'
				onClick={() => {
					state.actions.getPet(pet.id)
				}}
			>
				Launch demo modal
			</button>

			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel'>
								{state.store.mascotaActiva.name}
							</h1>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							{state.store.mascotaActiva.messages.map((message) => {
								return (
									<div className='container-fluid' key={message.id}>
										<div className='row'>
											<div className='col-3'>
												<img
													className='img-fluid w-25 float-start px-2'
													src={message.user.avatar}
													alt='Avatar'
												/>
												<div className='col'>{message.user.user}</div>
											</div>
											<div className='col-9'>{message.message}</div>
										</div>
										<div className='row'>
											<span
												className='text-muted'
												role='button'
												onClick={() => {
													setMessageObject(message)
												}}
											>
												Responder Comentario
											</span>
										</div>
									</div>
								)
							})}
							<form
								onSubmit={(ev) => {
									ev.preventDefault()
									console.log({
										message: response,
										pet_id: messageObject.pet_id,
										id: messageObject.id,
									})
									state.actions.sendMessage({
										message: response,
										pet_id: messageObject.pet_id,
										id: messageObject.id,
									})
								}}
							>
								<label htmlFor=''>Responder a {messageObject.user.user}</label>
								<textarea
									className='form-control'
									id='exampleFormControlTextarea1'
									rows='2'
									value={response}
									onChange={(ev) => {
										setResponse(ev.target.value)
									}}
								></textarea>
								<div className='modal-footer'>
									<button type='submit' className='btn btn-primary'>
										Enviar Comentario
									</button>
									<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
										Close
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PetAdoptionCard

PetAdoptionCard.propTypes = {
	pet: PropTypes.object,
}
