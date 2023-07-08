import React from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'

const PetAdoptionCard = ({ pet }, key) => {
	console.log(pet, 'pet')

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
			<h4 className='card-title text-center'>{pet.Nombre}</h4>
			<div className='col w-100'>
				<Carousel photos={pet.Fotos} />
			</div>
			<div className='col'>
				<div className='card-body p-2'>
					<h5 className='card-subtitle m-3 text-body-secondary'>{Specie(pet.Especie)}</h5>
					<p className='card-text'>Tamaño: {Size(pet.Tamano)}</p>
					<p className='card-text'>Edad : {pet.Edad}</p>
					<p className='card-text'>Info : {pet.Mensajes[0].Mensaje}</p>
					<p className='card-text'>{pet.Necesita_Patio ? 'Necesita Patio' : 'No Necesita Patio'}</p>
				</div>
			</div>

			<button
				type='button'
				className='btn btn-primary'
				data-bs-toggle='modal'
				data-bs-target={'#' + key + 'staticBackdrop'}
			>
				{console.log(pet, 'pet')}
			</button>

			<div
				className='modal fade'
				id={key + 'staticBackdrop'}
				data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='staticBackdropLabel'>
								Modal title
							</h1>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>...</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Understood
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
