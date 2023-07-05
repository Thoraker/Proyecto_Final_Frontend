import React from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'

const PetAdoptionCard = ({ pet }) => {
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
		<div className='card bg-info'>
			<h4 className='card-title text-center'>{pet.Nombre}</h4>
			<div className='row'>
				<div className='col w-100'>
					<Carousel photos={pet.Fotos} />
				</div>
				<div className='col-5'>
					<div className='card-body p-2'>
						<h5 className='card-subtitle m-3 text-body-secondary'>{Specie(pet.Especie)}</h5>
						<p className='card-text'>Tamaño: {Size(pet.Tamano)}</p>
						<p className='card-text'>Edad : {pet.Edad}</p>
						<p className='card-text'>{pet.Necesita_Patio ? 'Necesita Patio' : 'No Necesita Patio'}</p>
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
