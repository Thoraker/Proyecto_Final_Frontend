import React, { useContext } from 'react'
import './carousel.css'
import { AppContext } from '../routes/App'

const Carousel = () => {
	const [index, setIndex] = React.useState(0)
	const state = useContext(AppContext)
	const photos = state.store.slides

	const goToNext = () => {
		const isLastSlide = index === photos.length - 1
		const newIndex = isLastSlide ? 0 : index + 1
		setIndex(newIndex)
	}

	const goToPrev = () => {
		const isFirstSlide = index === 0
		const newIndex = isFirstSlide ? photos.length - 1 : index - 1
		setIndex(newIndex)
	}

	const goTo = (photo) => {
		setIndex(photo)
	}

	return (
		<div className='h-75 position-relative m-5'>
			<div
				className='position-absolute top-50 z-1 start-0 translate-middle-y fs-1 text-light'
				role='button'
				onClick={goToNext}
			>
				<i className='bi bi-caret-left'></i>
			</div>
			<div
				className='h-100 w-100 border-radius-10'
				style={{ backgroundImage: `url(${photos[index].url})`, backgroundSize: 'cover' }}
			></div>
			<div
				className='position-absolute top-50 z-1 end-0 translate-middle-y fs-1 text-light'
				role='button'
				onClick={goToPrev}
			>
				<i className='bi bi-caret-right'></i>
			</div>
			<div className='position-absolute bottom-0 start-50'>
				<div className='d-flex'>
					{photos.map((slide, index) => (
						<div key={index} className='m-1 fs-5 text-light ' role='button' onClick={() => goTo(index)}>
							<i className='bi bi-square-fill'></i>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
