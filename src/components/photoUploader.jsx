import React, { useContext, useEffect, useRef } from 'react'
import '../resources/Flux.js'
import { AppContext } from '../routes/App.jsx'

const PhotoUploader = () => {
	const cloudinaryRef = useRef()
	const widgetRef = useRef()
	const state = useContext(AppContext)

	useEffect(() => {
		cloudinaryRef.current = window.cloudinary
		widgetRef.current = cloudinaryRef.current.createUploadWidget(
			{
				cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
				uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
			},
			function (error, result) {
				if (!error && result && result.event === 'success') {
					console.log('Done! Here is the image info: ', result)
					state.actions.createPetPhoto(result.info.secure_url)
				} else if (error) {
					console.log(error)
				}
			}
		)
	}, [])
	return (
<<<<<<< HEAD
		<div>
			<h5 className='p-6'>Subir Foto</h5>
			<button className='w-25 me-2 btn btn-outline-light rounded-pill' onClick={() => widgetRef.current.open()}>
				<i className="bi bi-upload"></i>
			</button>
		</div>

=======
		<button
			className='w-50 btn btn-outline-light rounded-pill mx-4'
			type='button'
			onClick={() => widgetRef.current.open()}
		>
			Subir Foto
		</button>
>>>>>>> 96f2fc3a9e4372f2fab8e3a7f8431ab1569148e4
	)
}

export default PhotoUploader
