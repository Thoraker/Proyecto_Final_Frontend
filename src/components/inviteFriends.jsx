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
        <>
            <div style={{ paddingTop: '8rem' }}>
                <Button
                    variant="primary"
                    onClick={handleShowModal}
                    className="btn border border-success bg-transparent text-success fw-bold fst-italic">
                    Invite Friends
                </Button>
            </div>            
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
        </ >
    );
};

export default InviteFriends;
