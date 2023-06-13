import { Link, useRouteError } from 'react-router-dom'
import React from 'react'
const ErrorPage = () => {
	const error = useRouteError()
	console.log(error)

	return (
		<>
			<div className='card w-75 mb-3'>
				<div className='card-body'>
					<h2 className='card-title'>Oh ohh</h2>
					<p className='card-text'>Ha ocurrido un error inesperado</p>
					<Link to='/' className='btn btn-primary'>
						Inicio
					</Link>
				</div>
			</div>
		</>
	)
}

export default ErrorPage
