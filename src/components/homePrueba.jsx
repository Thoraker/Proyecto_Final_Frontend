import React from 'react'

const HomePage = () => {
	return (
		<div className='container-fluid mx-0 px-0 g-5' style={{ paddingTop: '6rem' }}>
			<div className='row g-0 mx-0 px-0 mb-5'>
				<div className='col-4 m-0' style={{ backgroundColor: 'rgba(0, 100, 150, 0.5)' }}>
					<h3>Bienvenidos</h3>
				</div>
				<div className='col m-0'>
					<img src='src/assets/perro_callejero.jpg' alt='' className='img-fluid vw-100' />
				</div>
			</div>
			<div className='row g-0 mx-0 px-0 mt-5'>
				<div className='col m-0'>
					<img src='src/assets/cachorro_callejero2.jpg' alt='' className='img-fluid vw-100' />
				</div>
				<div className='col-4 m-0' style={{ backgroundColor: 'rgba(0, 100, 150, 0.5)' }}>
					<h3>Bienvenidos</h3>
				</div>
			</div>
		</div>
	)
}

export default HomePage
