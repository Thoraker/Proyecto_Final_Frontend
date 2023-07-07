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
		<button
			className='w-50 btn btn-outline-light rounded-pill mx-4'
			type='button'
			onClick={() => widgetRef.current.open()}
			style={{ background: '#465084' }}
		>
			Subir Foto
		</button>
	)
}

export default PhotoUploader
