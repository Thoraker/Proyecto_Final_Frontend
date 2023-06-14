import React from 'react'
import './carousel.css'

const Carousel = ({ photos }) => {
	const [index, setIndex] = React.useState(0)

	const carouselStyles = {
		backgroundImage: `url(${photos[index].url})`,
		height: '100%',
		with: '100%',
		borderRadius: '10px',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}

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
		<div id='parent'>
			<div className='leftArrowStyles' onClick={goToNext}>
				<i className='bi bi-caret-left'></i>
			</div>
			<div style={carouselStyles}></div>
			<div className='rightArrowStyles' onClick={goToPrev}>
				<i className='bi bi-caret-right'></i>
			</div>
			<div className='squares-container'>
				{photos.map((slide, index) => (
					<div key={index} className='square' onClick={() => goTo(index)}>
						<i className='bi bi-square-fill'></i>
					</div>
				))}
			</div>
		</div>
	)
}

export default Carousel
