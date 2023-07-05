<<<<<<< HEAD
// import React from 'react';
// import PropTypes from 'prop-types';
// import InviteFriends from './inviteFri';
=======
import React from 'react'
>>>>>>> 96f2fc3a9e4372f2fab8e3a7f8431ab1569148e4

const Modal = (text) => {
	return (
		<div className='modal' tabIndex='-1'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Respuesta</h5>
						<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
					</div>
					<div className='modal-body'>
						<p>{text}</p>
					</div>
					<div className='modal-footer'>
						<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
							Close
						</button>
						{/* <button type='button' className='btn btn-primary'>
							Save changes
						</button> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
