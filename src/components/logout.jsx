import React from 'react'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Logout({ clase }) {
	const history = useNavigate()

	const handleLogout = () => {
		history('/home')
		// OJJJJOOO : O usar history.replace('/home') en lugar de history.push si deseas reemplazar la página actual en lugar de agregarla al historial de navegación.
	}

	return (
		<div>
			<button className={clase} onClick={handleLogout}>
				Cerrar sesión
			</button>
		</div>
	)
}

export default Logout
