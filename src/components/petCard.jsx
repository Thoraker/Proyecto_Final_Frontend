import React from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'
import PhotoUploader from './photoUploader'

const PetCard = ({ pet }) => {
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
		<div className='card bg-info col m-3'>
			<div className='row'>
				<div className='col w-100'>
					<Carousel photos={pet.photos} />
				</div>
				<div className='col-5'>
					<div className='card-body py-5'>
						<h4 className='card-title'>{pet.name}</h4>
						<h5 className='card-subtitle m-3 text-body-secondary'>{Specie(pet.specie)}</h5>
						<p className='card-text'>Tamaño: {Size(pet.size)}</p>
						<p className='card-text'>Edad : {pet.age}</p>
						<p className='card-text'>{pet.need_backyard ? 'Necesita Patio' : 'No Necesita Patio'}</p>
						<p className='card-text'>
							{pet.for_adoption ? 'Se entrega en Adopción' : 'No disponible para Adopción'}
						</p>
					</div>
					<div className='col-12'>
						<PhotoUploader />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PetCard

PetCard.propTypes = {
	pet: PropTypes.object,
}
