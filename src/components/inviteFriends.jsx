import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { BsTrash3 } from "react-icons/bs";
import { Modal, Button } from 'react-bootstrap';

const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};

const InviteFriends = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center mt-5 p-4 rounded border border-1 w-50"
                style={{
                    background: 'linear-gradient(90deg, rgba(234,225,224,1) 34%, rgba(181,96,82,1) 98%)',
                }}>

                <button type="button"
                    className="btn btn-success"
                    id='formbtn'
                    onClick={handleShowModal}>
                    Invite friends <i className='bi bi-share-fill'></i>
                </button>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton className="text-center">
                        <Modal.Title className="mx-auto">Invite friends</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                await new Promise(() => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                                handleCloseModal();
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
                                                                    placeholder="Peter"
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
                                                                    placeholder="peter@gmail.com"
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
                                                <button
                                                    type="button"
                                                    className="btn btn-link"
                                                    onClick={() => push({ name: '', email: '' })}
                                                >
                                                    <i className="bi bi-person-plus-fill"></i>Agregar Amigos
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-outline-success">
                                            Invitar <i className="bi bi-envelope-check-fill"></i>
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default InviteFriends;
