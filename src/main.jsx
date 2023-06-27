import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import './index.css'
import App from './routes/App.jsx'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import LandingPage from './routes/LandingPage'
import UserPage from './routes/UserPage'
import DataPage from './routes/DataPage'
import AddressPage from './routes/AddressPage'
import PetPage from './routes/PetPage'
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
				path: '/',
				element: <LandingPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/user',
				element: <UserPage />,
				children: [
					{
						path: '/user/data',
						element: <DataPage />,
					},
					{
						path: '/user/address',
						element: <AddressPage />,
					},
					{
						path: '/user/pet',
						element: <PetPage />,
					},
				],
			},
			{
				path: '/prueba',
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
