import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import * as formik from 'formik'
import * as yup from 'yup'
import ProgressBar from 'react-bootstrap/ProgressBar'

function NewForm() {
	const { Formik } = formik

	const schema = yup.object().shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		userName: yup.string().required(),
		city: yup.string().required(),
		terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
	})

	return (
		<Formik
			validationSchema={schema}
			onSubmit={console.log}
			initialValues={{
				firstName: '',
				lastName: '',
				userName: '',
				city: '',
				terms: false,
			}}
		>
			{({ handleSubmit, handleChange, values, touched, errors }) => {
				const completedFields = Object.values(values).filter((value) => value !== '').length
				const totalFields = Object.keys(values).length
				const completedPercentage = (completedFields / totalFields) * 100

				return (
					<Form noValidate onSubmit={handleSubmit} className='bg-secondary p-3 bg-gradient '>
						<Row className='mb-3 '>
							<Form.Group as={Col} md='4' controlId='validationFormik01'>
								<Form.Label>First name</Form.Label>
								<Form.Control
									type='text'
									name='firstName'
									value={values.firstName}
									onChange={handleChange}
									isValid={touched.firstName && !errors.firstName}
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md='4' controlId='validationFormik02'>
								<Form.Label>Last name</Form.Label>
								<Form.Control
									type='text'
									name='lastName'
									value={values.lastName}
									onChange={handleChange}
									isValid={touched.lastName && !errors.lastName}
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md='4' controlId='validationFormik03'>
								<Form.Label>User</Form.Label>
								<InputGroup hasValidation>
									<InputGroup.Text id='inputGroupPrepend'></InputGroup.Text>
									<Form.Control
										type='text'
										placeholder='UserName'
										aria-describedby='inputGroupPrepend'
										name='UserName'
										value={values.userName}
										onChange={handleChange}
										isInvalid={touched.userName && !errors.userName}
									/>
									<Form.Control.Feedback type='invalid'>{errors.userName}</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Row>
						<Row className='mb-3'>
							<Form.Group as={Col} md='6' controlId='validationFormik04'>
								<Form.Label>City</Form.Label>
								<Form.Control
									type='text'
									placeholder='City'
									name='city'
									value={values.city}
									onChange={handleChange}
									isInvalid={!!errors.city}
								/>
								<Form.Control.Feedback type='invalid'>{errors.city}</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Form.Group className='mb-3'>
							<Form.Check
								required
								name='terms'
								label='Agree to terms and conditions'
								onChange={handleChange}
								isInvalid={!!errors.terms}
								feedback={errors.terms}
								feedbackType='invalid'
								id='validationFormik0'
							/>
						</Form.Group>
						<div className='mt-3 w-75 mx-auto mb-2'>
							<ProgressBar
								variant='success'
								now={completedPercentage}
								label={`${completedPercentage}%`}
								visuallyHidden
								style={{ transition: 'width 0.5s ease-in-out' }}
							/>
						</div>
						<Button type='submit'>Submit form</Button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default NewForm
