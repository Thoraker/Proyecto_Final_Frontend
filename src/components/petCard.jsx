import React from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'

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
		<div className='row g-0'>
			<div className='col-md-4'>
				<Carousel photos={pet.Fotos} />
			</div>
			<div className='col-md-8'>
				<div className='card-body'>
					<h4 className='card-title'>{pet.Nombre}</h4>
					<h5 className='card-subtitle mb-2 text-body-secondary'>{Specie(pet.Especie)}</h5>
					<p className='card-text'>Tamaño: {Size(pet.Tamano)}</p>
					<p className='card-text'>Edad : {pet.Edad}</p>
					<p className='card-text'>{pet.Necesita_Patio ? 'Necesita Patio' : 'No Necesita Patio'}</p>
				</div>
			</div>
		</div>
	)
}

export default PetCard

PetCard.propTypes = {
	pet: PropTypes.object,
}
