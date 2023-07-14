import React, { useState, useEffect, useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import PhotoUploader from './photoUploader'
import { AppContext } from '../routes/App'
import './formStyles.css'

const PetForm = () => {
	const state = useContext(AppContext)
	const [progress, setProgress] = useState(0)
	const [successMessage, setSuccessMessage] = useState('')
	const [mostrarFormulario, setMostrarFormulario] = useState(true);

	const cerrarFormulario = () => {
		setMostrarFormulario(false);
	};

	if (!mostrarFormulario) {
		return null; // No muestra el formulario si mostrarFormulario es false
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('El nombre es requerido.'),
		age: Yup.string().required('La edad es requerida.'),
		specie: Yup.string().required('La especie es requerida.'),
		size: Yup.string().required('El tamaño es requerido.'),
		message: Yup.string().required('La descripción es requerida.'),
	})

	const formik = useFormik({
		initialValues: {
			name: '',
			age: '',
			specie: '',
			size: '',
			message: '',
			needBackyard: false,
			forAdoption: false,
		},
		validationSchema,
		onSubmit: (values) => {
			state.actions.createPet(values)
			setSuccessMessage('Se ha publicado tu mascota')
			setTimeout(() => {
				// Redireccionar al usuario a otra página aquí
			}, 5000)
		},
	})

	useEffect(() => {
		progressUpdate()
	}, [formik.values])

	const progressUpdate = () => {
		const { name, age, specie, size, message } = formik.values
		const fullFields = [name, age, specie, size, message]
		const newProgress = (fullFields.filter((field) => field !== '').length / 5) * 100
		setProgress(newProgress)
	}

	return (
		<div className='container p-5'>
			<div
				className='container fst-italic rounded-3'
				style={{
					background: 'linear-gradient(90deg, rgba(234,225,224,1) 34%, rgba(181,96,82,1) 98%)',
				}}
			>
				<form className='p-3 m-3' onSubmit={formik.handleSubmit}>
					<div className="formulario-header d-flex justify-content-between align-items-center">
						<div className="text-center flex-grow-1">
							<h3>Cuéntanos acerca de la Mascota</h3>
						</div>
						<a href="/"
							type="button"
							className="btn-close custom-button"
							aria-label="Close"
							onClick={cerrarFormulario}
						></a>
					</div>

					<div className='form-group pb-2'>
						<input
							type='text'
							className='form-control'
							placeholder='Nombre'
							name='name'
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.errors.name && formik.touched.name && (
							<div className='error-message'>{formik.errors.name}</div>
						)}
					</div>
					<div className='form-group pb-2'>
						<input
							type='text'
							className='form-control'
							placeholder='Edad'
							name='age'
							value={formik.values.age}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.errors.age && formik.touched.age && (
							<div className='error-message'>{formik.errors.age}</div>
						)}
					</div>
					<div className='form-group pb-2'>
						<div className='row'>
							<div className='col'>
								<select
									className='form-select'
									name='specie'
									value={formik.values.specie}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								>
									<option value=''>Especie</option>
									<option value='1'>Perros</option>
									<option value='2'>Gatos</option>
									<option value='3'>Aves</option>
									<option value='4'>Otros</option>
								</select>
								{formik.errors.specie && formik.touched.specie && (
									<div className='error-message'>{formik.errors.specie}</div>
								)}
							</div>
							<div className='col'>
								<select
									className='form-select'
									name='size'
									value={formik.values.size}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								>
									<option value=''>Tamaño</option>
									<option value='1'>Pequeño</option>
									<option value='2'>Mediano</option>
									<option value='3'>Grande</option>
								</select>
								{formik.errors.size && formik.touched.size && (
									<div className='error-message'>{formik.errors.size}</div>
								)}
							</div>
						</div>
					</div>
					<div className='form-group pb-2 d-flex flex-column align-items-center'>
						<textarea
							className='form-control'
							id='Message'
							placeholder='Su Historia'
							rows='3'
							name='message'
							value={formik.values.message}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							maxLength={100}
						></textarea>
						<p>Remaining characters: {100 - formik.values.message.length}</p>
						{formik.errors.message && formik.touched.message && (
							<div className='error-message'>{formik.errors.message}</div>
						)}
					</div>
					<div className='form-group pb-2'>
						<div className='row'>
							<form onSubmit={formik.handleSubmit} />
							<div className='form-group pb-2'>
								<div className='row'>
									<div className='col'>
										<div>
											<label>
												<input
													type='checkbox'
													name='needBackyard'
													checked={formik.values.needBackyard}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												Se da en adopción
											</label>
										</div>
										<div>
											<label>
												<input
													type='checkbox'
													name='upForAdoption'
													checked={formik.values.upForAdoption}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
												/>
												Necesita patio
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='progress mb-3 pb-2 mx-auto'
						style={{
							width: `${progress}%`,
							height: '8px',
							backgroundColor: '#0a5b1a',
							transition: 'width 0.5s ease-in-out',
							transformOrigin: 'center',
						}}
					></div>
					<div className='pb-2 text-center'>
						<div>
							<PhotoUploader />
						</div>
						<div>
							<button
								type='submit'
								className='w-50 btn btn-outline-light rounded-pill border-dark text-dark fw-bold'
								id='formbtn'
								style={{ borderColor: '#654321' }}
							>
								Publicar <i className='bi bi-upload'></i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PetForm
