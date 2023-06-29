import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import './index.css'
import App from './routes/App.jsx'
import LoginPage from './routes/LoginPage'
// import Carousel from './components/carousel'
import PetForm from './components/petForm'
// import Formulario from './components/formRegister'
// import InviteFriends from './components/inviteFri'
// import RegisterPage from './routes/RegisterPage'
import LandingPage from './routes/LandingPage'
import FundationsPage from './routes/FundationsPage'
import FormRegister from './components/registroForm'
import FundacionesDeAdopcion from './components/Fundaciones'


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
				element: <FormRegister />,
			},
			{
				path: '/pet_form',
				element: <PetForm />,
			},
			{
				path: '/fundations',
				element: <FundacionesDeAdopcion />,
			},
			
			
		],
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
