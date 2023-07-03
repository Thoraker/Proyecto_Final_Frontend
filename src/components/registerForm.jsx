import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../routes/App';

const RegisterForm = () => {
	const state = useContext(AppContext);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [donor, setDonor] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => progressUpdate(), [donor, avatar]);

	const progressUpdate = () => {
		const fullFields = [userName, email, password, firstName, lastName, avatar].filter((field) => field !== '');
		const newProgress = (fullFields.length / 6) * 100;
		setProgress(newProgress);
	};

	return (
		<div className='container fst-italic rounded-3'
			style={{
				backgroundImage: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
			}}
		>
			<form
				className='p-3 m-3'
				onSubmit={(ev) => {
					ev.preventDefault();
					state.actions.createUser({ userName, email, password, firstName, lastName, avatar, donor });
				}}
				autoComplete='off'
			>
				<h3 className='text-center'>Regístrate</h3>
				<div className='row'>
					<div className='col-4'>
						<img
							className='img-fluid rounded-5 p-3'
							src={
								avatar === ''
									? 'https://res.cloudinary.com/dqehz6slh/image/upload/v1688397737/smhqmpxo8pvj3q8pcowx.png'
									: avatar
							}
							alt='Avatar'
						/>
					</div>
					<div className='col-8 p-3'>
						<div className='form-group pb-2'>
							<input
								type='text'
								className='form-control'
								placeholder='Nombre de Usuario'
								value={userName}
								onChange={(ev) => {
									setUserName(ev.target.value);
									progressUpdate();
								}}
								required
								pattern="[a-zA-Z0-9]+"
								title="El nombre de usuario solo puede contener letras y números"
							/>
						</div>

						<div className='form-group pb-2'>
							<input
								type='email'
								className='form-control'
								placeholder='Correo'
								value={email}
								onChange={(ev) => {
									setEmail(ev.target.value);
									progressUpdate();
								}}
								required
								title="Por favor, introduce una dirección de correo válida"
							/>
						</div>

						<div className='form-group pb-2'>
							<input
								type='password'
								className='form-control'
								placeholder='Contraseña'
								value={password}
								onChange={(ev) => {
									setPassword(ev.target.value);
									progressUpdate();
								}}
								required
								minLength={8}
								title="La contraseña debe tener al menos 8 caracteres"
							/>
						</div>

						<div className='form-group pb-2'>
							<input
								type='text'
								className='form-control'
								placeholder='Nombre'
								value={firstName}
								onChange={(ev) => {
									setFirstName(ev.target.value);
									progressUpdate();
								}}
								required
							/>
						</div>

						<div className='form-group pb-2'>
							<input
								type='text'
								className='form-control'
								placeholder='Apellido'
								value={lastName}
								onChange={(ev) => {
									setLastName(ev.target.value);
									progressUpdate();
								}}
								required
							/>
						</div>

						<div className='form-group pb-2'>
							<select
								className='form-select me-2'
								value={avatar}
								onChange={(ev) => {
									setAvatar(ev.target.value);
									progressUpdate();
								}}
								required
							>
								<option value=''>Elige tu Avatar</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397738/okcu1ufijajwgcpx3eu1.png'>
									Avatar 1
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397738/bgartaxungu0bmt8xgfx.png'>
									Avatar 2
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397738/lfydwioaujgmlktnlcki.png'>
									Avatar 3
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397738/gvfdavjl4djqxqv3d4nl.png'>
									Avatar 4
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397738/tmqwv0g0krkldtm6spbl.png'>
									Avatar 5
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397737/hp53n3rdqk0suszd6vlk.png'>
									Avatar 6
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397737/gasewvabuy3ylwnjtf4k.png'>
									Avatar 7
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397737/azjftzcgu890kgtqt7ii.png'>
									Avatar 8
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397737/xhoto8t9ltibj0dfpymx.png'>
									Avatar 9
								</option>
								<option value='https://res.cloudinary.com/dqehz6slh/image/upload/v1688397737/i4ibsthpzo3cfxgp1ewy.png'>
									Avatar 10
								</option>
							</select>
						</div>

						<div className='form-check my-3'>
							<input
								type='checkbox'
								name='myCheckbox'
								checked={donor}
								onChange={(ev) => {
									setDonor(!donor);
									progressUpdate();
								}}
							/>
							<label className='form-check-label'>Quiero dar mascotas en adopción</label>
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
					<button type='submit' className='w-50 me-2 btn btn-outline-light rounded-pill'>
						Publicar
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;