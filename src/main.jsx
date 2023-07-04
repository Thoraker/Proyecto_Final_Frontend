import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import './index.css'
import App from './routes/App.jsx'
import LoginPage from './routes/LoginPage'
import LandingPage from './routes/LandingPage'
import UserPage from './routes/UserPage'
import PetPage from './routes/PetPage'
import FoundationsPage from './routes/FoundationsPage'
import InviteFriends from './components/inviteFri'
import RegisterPage from './routes/RegisterPage'

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
				path: '/foundations',
				element: <FoundationsPage />,
			},
			{
				path: '/user',
				element: <UserPage />,
			},
			{
				path: '/prueba',
				element: <InviteFriends />,
			},
		],
	},
])

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
