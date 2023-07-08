import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App.jsx'
import ErrorPage from './routes/ErrorPage'
import LandingPage from './routes/LandingPage'
import LoginPage from './routes/LoginPage'
import UserPage from './routes/UserData'
import PetPage from './routes/PetPage'
import FoundationsPage from './routes/FoundationsPage'
import InviteFriends from './components/inviteFri'
import RegisterPage from './routes/RegisterPage'
import RegisterForm from './components/registerForm'
import AdoptMe from './routes/AdoptMe'
import './index.css'
import AddressPage from './routes/AddressPage.jsx'
import PetForm from './components/petForm.jsx'
import PetCard from './components/petCard.jsx'

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
				path: '/pet',
				element: <PetCard />,
			},
			{
				path: '/adoption',
				element: <AdoptMe />,
			},
			{
				path: '/foundations',
				element: <FoundationsPage />,
			},
			{
				path: '/address',
				element: <InviteFriends />,
			},
			{
				path: '/user',
				element: <UserPage />,
			},
			{
				path: '/prueba',
				element: <PetForm />,
			},
			{
				path: '/post',
				element: <RegisterForm />,
			},
			

		],
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
