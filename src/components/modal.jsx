import React from 'react'

const Modal = (pet, key) => {
	return (
		<>
			<button type='button' className='btn btn-info btn-lg' data-toggle='modal' data-target={'#myModal' + key}>
				Open Modal {key}
			</button>
			<div className='modal fade bg-info' id={'myModal' + key}>
				<div className='modal-dialog'>
					<h1>Modal</h1>
				</div>
			</div>
		</>
	)
}

export default Modal
