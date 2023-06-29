import React, { useContext } from 'react'
// import { useNavigate } froms 'react-router-dom'
import { AppContext } from '../routes/App'

// eslint-disable-next-line react/prop-types
function Logout() {
	const state = useContext(AppContext)
	// const history = useNavigate

	const handleLogout = () => {
		state.actions.clearData()
		// OJJJJOOO : O usar history.replace('/home') en lugar de history.push si deseas reemplazar la página actual en lugar de agregarla al historial de navegación.
	}

	return (
		<div>
			<button className='btn btn-outline-danger' onClick={(ev) => handleLogout()}>
				Cerrar sesión
			</button>
		</div>
	)
}

export default Logout
