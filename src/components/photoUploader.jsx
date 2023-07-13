import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../routes/App'

const PhotoUploader = () => {
	const state = useContext(AppContext)
	const cloudinaryRef = useRef()
	const widgetRef = useRef()

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
					state.actions.newPetPhoto(result.info.url)
				} else if (error) {
					console.log(error)
				}
			}
		)
	}, [])

	return (
		<div className='pb-2 text-center'>
			<button
				className='w-50 btn btn-outline-light rounded-pill border-dark text-dark fw-bold'
				id='formbtn'
				style={{ borderColor: '#654321' }}
				onClick={() => widgetRef.current.open()}
			>
				Subir Foto/video <i className='bi bi-camera-fill'></i>
			</button>
		</div>
	)
}

export default PhotoUploader
