import React, { useContext } from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'
import { AppContext } from '../routes/App'

const PetAdoptionCard = ({ pet }) => {
	const state = useContext(AppContext)

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
					<h5 className='card-subtitle m-3 text-body-secondary'>{Specie(pet.Especie)}</h5>
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
				onClick={async () => {
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
				<div className='modal-dialog modal-dialog-scrollable'>
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
							<p>
								{state.store.mascotaActiva.messages.map((message) => {
									return (
										<>
											<div className='row' key={message.id}>
												<div className='col-2'>
													<img
														className='img-fluid w-50'
														src={message.user.avatar}
														alt='Avatar'
													/>
												</div>
												<div className='col'>{message.message}</div>
											</div>
											<p className='fs-6 align-left' onClick={() => alert('hola')}>
												Responder
											</p>
											<form
												onSubmit={(ev) => {
													ev.preventDefault()
													alert('enviado')
												}}
											>
												<textarea
													className='form-control'
													id='exampleFormControlTextarea1'
													rows='3'
												></textarea>
												<button type='submit' className='btn btn-primary'>
													Save changes
												</button>
											</form>
										</>
									)
								})}
							</p>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
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
