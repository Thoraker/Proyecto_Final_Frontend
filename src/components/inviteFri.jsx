import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { BsTrash3 } from "react-icons/bs";

const initialValues = {
	friends: [
		{
			name: '',
			email: '',
		},
	],
};

const InviteFriends = () => {
	return (
		<div className="container">
			<div className="d-flex flex-column align-items-center mt-5 p-4 bg-success-subtle border border-success rounded border border-1 w-50">
				<h1 className="text-center">Invite friends</h1>
				<Formik
					initialValues={initialValues}
					onSubmit={async (values) => {
						await new Promise(() => setTimeout(r, 500));
						alert(JSON.stringify(values, null, 2));
					}}
				>
					{({ values }) => (
						<Form className="w-100">
							<FieldArray name="friends">
								{({ insert, remove, push }) => (
									<div>
										{values.friends.length > 0 &&
											values.friends.map((friend, index) => (
												<div className="row mb-3 " key={index}>
													<div className="col">
														<label htmlFor={`friends.${index}.name`}>Nombre</label>
														<Field
															className="form-control"
															name={`friends.${index}.name`}
															placeholder="Jane Doe"
															type="text"
														/>
														<ErrorMessage
															name={`friends.${index}.name`}
															component="div"
															className="field-error"
														/>
													</div>
													<div className="col">
														<label htmlFor={`friends.${index}.email`}>Email</label>
														<Field
															className="form-control"
															name={`friends.${index}.email`}
															placeholder="jane@acme.com"
															type="email"
														/>
														<ErrorMessage
															name={`friends.${index}.email`}
															component="div"
															className="field-error"
														/>
													</div>
													<div className="col position-relative ">
														<button
															type="button"
															className="btn btn-danger position-absolute bottom-0"
															onClick={() => remove(index)}
														>
															<BsTrash3 />
														</button>
													</div>
												</div>
											))}
										<button type="button"
											className="btn btn-link"
											onClick={() => push({ name: '', email: '' })}>Agrega Amigos</button>
									</div>
								)}
							</FieldArray>
							<div className="text-center mt-4">
								<button type="submit" className="btn btn-outline-success">
									Invitar
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
};

export default InviteFriends;
