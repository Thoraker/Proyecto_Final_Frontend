import React from 'react'

const Carousel = ({ slides }) => {
	const [index, setIndex] = React.useState(0)

	const parentStyles = {
		height: '100%',
		width: '100%',
		position: 'relative',
	}

	const rightArrowStyles = {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		right: '32px',
		fontSize: '45px',
		color: '#fff',
		zIndex: 1,
		cursor: 'pointer',
	}

	const leftArrowStyles = {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		left: '32px',
		fontSize: '45px',
		color: '#fff',
		zIndex: 1,
		cursor: 'pointer',
	}

	const carouselStyles = {
		backgroundImage: `url(${slides[index].url})`,
		height: '100%',
		with: '100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: '10px',
	}

	return (
		<div style={parentStyles}>
			<div style={leftArrowStyles}>
				<i className='bi bi-caret-right'></i>
			</div>
			<div style={rightArrowStyles}>
				<i className='bi bi-caret-left'></i>
			</div>
			<div style={carouselStyles}></div>
		</div>
	)
}

export default Carousel
