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
<<<<<<< HEAD
import RegisterForm from './components/registerForm'
import InvitePage from './routes/InvitePage'
// import UserData from './routes/UserData'
=======
>>>>>>> 96f2fc3a9e4372f2fab8e3a7f8431ab1569148e4

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
