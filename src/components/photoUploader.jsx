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
				console.log(state.store, 'state')
				if (!error && result && result.event === 'success') {
					console.log('Done! Here is the image info: ', result.info)
				} else if (error) {
					console.log(error)
				}
			}
		)
	}, [])
	return <button onClick={() => widgetRef.current.open()}>Upload Photo</button>
}

export default PhotoUploader
