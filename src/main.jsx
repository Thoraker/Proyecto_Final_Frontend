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
import InvitePage from './routes/InvitePage'
import RegisterPage from './routes/RegisterPage'
import RegisterForm from './components/registerForm'
import AdoptMe from './routes/AdoptMe'
import './index.css'

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
				element: <PetPage />,
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
				path: '/invite',
				element: <InvitePage />,
			},
			{
				path: '/user',
				element: <UserPage />,
			},
			{
				path: '/prueba',
				element: <InviteFriends />,
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
