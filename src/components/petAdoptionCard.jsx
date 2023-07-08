import React, { useContext, useState } from 'react'
import Carousel from './carousel'
import PropTypes from 'prop-types'
import { AppContext } from '../routes/App'

const PetAdoptionCard = ({ pet }) => {
	const state = useContext(AppContext)
	const [message, setMessage] = useState('')
	const id = pet.id

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
		<div className='card bg-info'>
			<h4 className='card-title text-center'>{pet.Nombre}</h4>
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
			<button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
				Quiero esta Mascota!!
			</button>
			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			></div>
		</div>
	)
}

export default PetAdoptionCard

PetAdoptionCard.propTypes = {
	pet: PropTypes.object,
}
