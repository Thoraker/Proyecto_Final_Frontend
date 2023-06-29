import React, { useContext, useEffect, useRef } from 'react'
import AppContext from '../routes/App'
import '../resources/Flux.js'

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
					state.actions.getPetPhoto(result.info.url)
					console.log('Done! Here is the image info: ', result)
				} else if (error) {
					console.log(error)
				}
			}
		)
	}, [])
	return (
		<button className='btn btn-primary' onClick={() => widgetRef.current.open()}>
			Upload Photo
		</button>
	)
}

export default PhotoUploader
