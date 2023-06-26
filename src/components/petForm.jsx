import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../routes/App'
import { FontStyle } from '@cloudinary/url-gen/qualifiers'
import { border } from '@cloudinary/url-gen/qualifiers/background'
import { justify } from '@cloudinary/url-gen/qualifiers/textAlignment'
// import './petForm.css'

const PetForm = () => {
	const [nombre, setNombre] = useState('')
	const [edad, setEdad] = useState('')
	const [especie, setEspecie] = useState('')
	const [tamano, setTamano] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [progreso, setProgreso] = useState(0)
	useEffect(() => actualizarProgreso(), [especie, tamano])

	const { actions } = useContext(AppContext)

	const actualizarProgreso = () => {
		const camposLlenos = [nombre, edad, especie, tamano, descripcion].filter((campo) => campo !== '')
		const nuevoProgreso = (camposLlenos.length / 5) * 100 // Suponiendo 5 campos en total
		console.log(especie)
		setProgreso(nuevoProgreso)
	}

	const handleNombreChange = (event) => {
		setNombre(event.target.value)
		actualizarProgreso()
	}

	const handleEdadChange = (event) => {
		setEdad(event.target.value)
		actualizarProgreso()
	}

	const handleEspecieChange = (event) => {
		setEspecie((especie) => event.target.value)
	}

	const handleTamanoChange = (event) => {
		setTamano(event.target.value)
		actualizarProgreso()
	}

	const handleDescripcionChange = (event) => {
		const inputValue = event.target.value
		if (inputValue.length <= 100) {
			setDescripcion(inputValue)
			actualizarProgreso()
		}
	}

	const enviarDatos = (e) => {
		e.preventDefault();
		console.log(nombre, edad, especie, tamano, descripcion)
		actions.createPet({
			nombre, edad, especie, tamano, descripcion
		})
	}

	return (
		<section >
			<div className='containerForm m-2'
				style={{					
					background: 'rgb(102, 177, 87)',
					backgroundSize: 'cover',
					borderRadius: '15px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}} >
				<form className='formpet shadow w-50 p-2' id="petForm" onSubmit={(e) => enviarDatos(e)}>
					<p className='pb-2 d-flex justify-content-center'>Publica tu Mascota</p>
					<div className='form-group pb-2'>
						<input
							type='text'
							className='form-control'
							placeholder='Nombre de tu mascota'
							value={nombre}
							onChange={handleNombreChange}
						/>
					</div>
					<div className='form-group pb-2'>
						<input
							type='text'
							className='form-control'
							placeholder='Edad'
							value={edad}
							onChange={handleEdadChange}
						/>
					</div>
					<div className='form-group pb-2'>
						<div className='d-flex align-items-center'>
							<select className='form-select me-2' value={especie} onChange={handleEspecieChange}>
								<option value=''>Especie</option>
								<option value='Perros'>Perros</option>
								<option value='Gatos'>Gatos</option>
								<option value='Aves'>Aves</option>
								<option value='Otros'>Otros</option>
							</select>
							<select className='form-select' value={tamano} onChange={handleTamanoChange}>
								<option value=''>Tamaño</option>
								<option value='Pequeño'>Pequeño</option>
								<option value='Mediano'>Mediano</option>
								<option value='Grande'>Grande</option>
							</select>
						</div>
					</div>
					<div className='form-group pb-2 d-flex flex-column align-items-center'>
						<textarea
							className='form-control'
							id='Descripction1'
							placeholder='Descripción'
							rows='3'
							value={descripcion}
							onChange={handleDescripcionChange}
							maxLength={100}
						></textarea>
						<p>Remaining characters: {100 - descripcion.length}</p>
					</div>
					<div className='progress mb-3 pb-2 d-flex justify-content-center' style={{
						width: `${progreso}%`,
						height: '8px',
						backgroundColor: '#0a5b1a',
						transition: 'width 0.5s ease-in-out',
						transform: `translateX(-50%) scaleX(2)`,
						transformOrigin: 'center'
					}}
					>
						<div
							className='progress-bar'
							role='progressbar'
							aria-valuenow={progreso}
							aria-valuemin='0'
							aria-valuemax='100'
						></div>
					</div>
					<div className='pb-2 d-flex justify-content-center'>
						<button
							type='submit'
							className='btn btn-Petform font-weight-bold btn-hover btn-hover-red'
							style={{
								border: 'none',
								borderRadius: '8px',
								borderBottom: '0',
								height: '40px',
								width: '120px',
								backgroundColor: 'rgb(4, 79, 33)',
								color: 'white',
								cursor: 'pointer',
								transition: 'background-color 0.3s'
							}}>
							Publicar
						</button>
					</div>
				</form>
			</div>
		</section >
	)
}

export default PetForm
