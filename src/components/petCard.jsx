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
					<Carousel photos={pet.Fotos} />
				</div>
				<div className='col-5'>
					<div className='card-body py-5'>
						<h4 className='card-title'>{pet.Nombre}</h4>
						<h5 className='card-subtitle mb-2 text-body-secondary'>{Specie(pet.Especie)}</h5>
						<p className='card-text'>Tamaño: {Size(pet.Tamano)}</p>
						<p className='card-text'>Edad : {pet.Edad}</p>
						<p className='card-text'>{pet.Necesita_Patio ? 'Necesita Patio' : 'No Necesita Patio'}</p>
						<p className='card-text'>
							{pet.En_Adopcion ? 'Se entrega en Adopción' : 'No disponible para Adopción'}
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
