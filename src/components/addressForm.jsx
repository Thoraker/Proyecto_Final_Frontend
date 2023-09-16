import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../routes/App'
import Data from '../resources/data.json'

const AddressForm = () => {
	const state = useContext(AppContext)
	const [street, setStreet] = useState('')
	const [buildingNumber, setBuildingNumber] = useState('')
	const [departmentNumber, setDepartmentNumber] = useState('')
	const [region, setRegion] = useState('')
	const [commune, setCommune] = useState('')
	const [hasBackyard, setHasBackyard] = useState(false)
	const [progress, setProgress] = useState(0)

	const [errors, setErrors] = useState({
		street: '',
		buildingNumber: '',
		departmentNumber: '',
		region: '',
		commune: '',
	})

	useEffect(() => {
		progressUpdate()
	}, [region, commune])

	const progressUpdate = () => {
		const fullFields = [street, buildingNumber, departmentNumber, commune, region].filter(
			(field) => field.trim() !== ''
		)
		const newProgress = (fullFields.length / 5) * 100
		setProgress(newProgress)
	}

	const handleValidation = () => {
		let formIsValid = true

		if (street.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				street: 'La calle es requerida.',
			}))
			formIsValid = false
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				street: '',
			}))
		}

		if (buildingNumber.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				buildingNumber: 'El número es requerido.',
			}))
			formIsValid = false
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				buildingNumber: '',
			}))
		}

		if (departmentNumber.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				departmentNumber: 'El número es requerido.',
			}))
			formIsValid = false
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				departmentNumber: '',
			}))
		}

		if (region.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				region: 'La región es requerida.',
			}))
			formIsValid = false
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				region: '',
			}))
		}

		if (commune.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				commune: 'La comuna es requerida.',
			}))
			formIsValid = false
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				commune: '',
			}))
		}

		return formIsValid
	}

	const closeForm = () => {
		setStreet('')
		setBuildingNumber('')
		setDepartmentNumber('')
		setRegion('')
		setCommune('')
		setHasBackyard(false)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (handleValidation()) {
			state.actions.createAddress({ street, buildingNumber, departmentNumber, commune, region, hasBackyard })
		}
	}

	return (
		<div className='container pt-5'>
			<div
				className='container fst-italic rounded-3 gradiente100 shadow'
				// style={{
				// 	background: 'linear-gradient(90deg, rgba(234,225,224,1) 34%, rgba(181,96,82,1) 98%)',
				// }}
			>
				<form className='p-3 m-3' onSubmit={handleSubmit}>
					<div className='formulario-header d-flex justify-content-between align-items-center'>
						<div className='text-center flex-grow-1'>
							<h3>
								Indícanos tu ubicación <i className='bi bi-geo-alt-fill'></i>{' '}
							</h3>
						</div>
						<a
							href='/'
							type='button'
							className='btn-close custom-button'
							aria-label='Close'
							onClick={closeForm}
						></a>
					</div>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Calle/Av.'
									value={street}
									onChange={(ev) => {
										setStreet(ev.target.value)
										progressUpdate()
									}}
								/>
								{errors.street && <div className='error error-red'>{errors.street}</div>}
							</div>
							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Número'
									value={buildingNumber}
									onChange={(ev) => {
										setBuildingNumber(ev.target.value)
										progressUpdate()
									}}
								/>
								{errors.buildingNumber && (
									<div className='error error-red'>{errors.buildingNumber}</div>
								)}
							</div>
							<div className='form-group pb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Dep. Número'
									value={departmentNumber}
									onChange={(ev) => {
										setDepartmentNumber(ev.target.value)
										progressUpdate()
									}}
								/>
								{errors.departmentNumber && (
									<div className='error error-red'>{errors.departmentNumber}</div>
								)}
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='form-group pb-2'>
								<select
									className='form-select'
									aria-label='Selecciona una Región'
									value={region}
									onChange={(e) => setRegion(e.target.value)}
								>
									<option value=''>Selecciona la Región</option>
									{Data.map((region, index) =>
										region.region_number > 0 ? (
											<option key={index} value={region.region_number}>
												{region.region}
											</option>
										) : null
									)}
								</select>
							</div>
							<div className='form-group pb-2'>
								<select
									className='form-select'
									aria-label='Selecciona una Comuna'
									value={commune}
									onChange={(e) => setCommune(e.target.value)}
								>
									<option value=''>Selecciona la Comuna</option>
									{region === ''
										? null
										: Data[region - 1].comunas.map((comuna, index) => {
												return (
													<option key={index} value={comuna.code}>
														{comuna.name}
													</option>
												)
										  })}
								</select>
							</div>
							<div className='form-check my-3'>
								<input
									type='checkbox'
									name='myCheckbox'
									checked={hasBackyard}
									onChange={(ev) => {
										setHasBackyard(ev.target.checked)
										progressUpdate()
									}}
								/>
								<label className='form-check-label'>Tengo un jardín amplio para mi mascota</label>
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
						<button
							type='submit'
							id='formbtn'
							className='w-50 me-2 btn btn-outline-light rounded-pill border-dark text-dark fw-bold'
							style={{ borderColor: '#654321' }}
						>
							Publicar <i className='bi bi-upload'></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddressForm
