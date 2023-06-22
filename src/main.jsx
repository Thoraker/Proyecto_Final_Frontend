import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import './index.css'
import App from './routes/App.jsx'
import LoginPage from './routes/LoginPage'
// import Carousel from './components/carousel'
import PetForm from './components/petForm'
import Formulario from './components/formRegister'


const domNode = document.getElementById('root')
const root = createRoot(domNode)

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/prueba',
				element: <Formulario />,
			},
			{
				path: '/1',
				element: <Formulario />,
			},
			
		],
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
