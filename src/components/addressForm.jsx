import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../routes/App';
import './formStyles.css';
import { FaMapMarkerAlt } from "react-icons/fa";


const AddressForm = () => {
	const state = useContext(AppContext);
	const [street, setStreet] = useState('');
	const [buildingNumber, setBuildingNumber] = useState('');
	const [departmentNumber, setDepartmentNumber] = useState('');
	const [region, setRegion] = useState('');
	const [commune, setCommune] = useState('');
	const [hasBackyard, setHasBackyard] = useState(false);
	const [progress, setProgress] = useState(0);
	

	const [errors, setErrors] = useState({
		street: '',
		buildingNumber: '',
		departmentNumber: '',
		region: '',
		commune: ''
	});

	useEffect(() => {
		progressUpdate();
	}, [region, commune]);

	const progressUpdate = () => {
		const fullFields = [street, buildingNumber, departmentNumber, commune, region].filter((field) => field.trim() !== '');
		const newProgress = (fullFields.length / 5) * 100;
		setProgress(newProgress);
	};

	const handleValidation = () => {
		let formIsValid = true;

		if (street.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				street: 'La calle es requerida.'
			}));
			formIsValid = false;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				street: ''
			}));
		}

		if (buildingNumber.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				buildingNumber: 'El número es requerido.'
			}));
			formIsValid = false;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				buildingNumber: ''
			}));
		}

		if (departmentNumber.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				departmentNumber: 'El número es requerido.'
			}));
			formIsValid = false;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				departmentNumber: ''
			}));
		}

		if (region.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				region: 'La región es requerida.'
			}));
			formIsValid = false;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				region: ''
			}));
		}

		if (commune.trim() === '') {
			setErrors((prevErrors) => ({
				...prevErrors,
				commune: 'La comuna es requerida.'
			}));
			formIsValid = false;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				commune: ''
			}));
		}

		return formIsValid;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (handleValidation()) {
			state.actions.createPet({ street, buildingNumber, departmentNumber, commune, region, hasBackyard });
			navigate('/user'); 
		}
	};

	return (
		<div className="container pt-5">
			<div
				className="container fst-italic rounded-3"
				style={{
					background: 'linear-gradient(90deg, rgba(234,225,224,1) 34%, rgba(181,96,82,1) 98%)'
				}}
			>
				<form className="p-3 m-3" onSubmit={handleSubmit}>
					<h3 className="text-center">Indicanos la dirección</h3>
					<div className="row">
						<div className="col-lg-6">
							<div className="form-group pb-2">
								<input
									type="text"
									className="form-control"
									placeholder="Nombre"
									value={street}
									onChange={(ev) => {
										setStreet(ev.target.value);
										progressUpdate();
									}}
								/>
								{errors.street && <div className="error">{errors.street}</div>}
							</div>

							<div className="form-group pb-2">
								<input
									type="text"
									className="form-control"
									placeholder="Número"
									value={buildingNumber}
									onChange={(ev) => {
										setBuildingNumber(ev.target.value);
										progressUpdate();
									}}
								/>
								{errors.buildingNumber && <div className="error">{errors.buildingNumber}</div>}
							</div>

							<div className="form-group pb-2">
								<input
									type="text"
									className="form-control"
									placeholder="Dep. Número"
									value={departmentNumber}
									onChange={(ev) => {
										setDepartmentNumber(ev.target.value);
										progressUpdate();
									}}
								/>
								{errors.departmentNumber && <div className="error">{errors.departmentNumber}</div>}
							</div>

							<div className="form-group pb-2">
								<input
									type="text"
									className="form-control"
									placeholder="Comuna"
									value={commune}
									onChange={(ev) => {
										setCommune(ev.target.value);
										progressUpdate();
									}}
								/>
								{errors.commune && <div className="error">{errors.commune}</div>}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-group pb-2">
								<div className="d-flex align-items-center">
									<select
										className="form-select"
										value={region}
										onChange={(ev) => {
											setRegion(ev.target.value);
											progressUpdate();
										}}
									>
										<option value="" defaultValue>
											Selecciona la región <FaMapMarkerAlt />
										</option>
										<option value="1">1 Tarapacá</option>
										<option value="2">2 Antofagasta</option>
										<option value="3">3 Atacama</option>
										<option value="4">4 Coquimbo</option>
										<option value="5">5 Valparaiso</option>
										<option value="6">6 O`Higgins</option>
										<option value="7">7 Maule</option>
										<option value="8">8 Bio - Bio</option>
										<option value="9">9 Araucania</option>
										<option value="10">10 Los Lagos</option>
										<option value="11">11 Aysén</option>
										<option value="12">12 Magallanes Y Antártica</option>
										<option value="13">13 Metropolitana</option>
										<option value="14">14 Los Rios</option>
										<option value="15">15 Arica y Parinacota</option>
									</select>
								</div>
								{errors.region && <div className="error">{errors.region}</div>}
							</div>

							<div className="form-check my-3">
								<input
									type="checkbox"
									name="myCheckbox"
									checked={hasBackyard}
									onChange={(ev) => {
										setHasBackyard(ev.target.checked);
										progressUpdate();
									}}
								/>
								<label className="form-check-label">Tengo un jardín amplio para mi mascota</label>
							</div>
						</div>
					</div>

					<div
						className="progress mb-3 pb-2 mx-auto"
						style={{
							width: `${progress}%`,
							height: '8px',
							backgroundColor: '#0a5b1a',
							transition: 'width 0.5s ease-in-out',
							transformOrigin: 'center'
						}}
					></div>

					<div className="pb-2 text-center">
						<button
							type="submit"
							id="formbtn"
							className="w-50 me-2 btn btn-outline-light rounded-pill border-dark text-dark fw-bold"
							style={{ borderColor: '#654321' }}
						>
							Publicar <i className='bi bi-upload'></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddressForm;
