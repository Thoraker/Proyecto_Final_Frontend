import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import './invite.css';

const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};

const InviteFriends = () => (
    <div className="container">
        <h1 className="text-center">Invite friends</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ values }) => (
                <Form>
                    <FieldArray name="friends">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.friends.length > 0 &&
                                    values.friends.map((friend, index) => (
                                        <div className="row" key={index}>
                                            <div className="col">
                                                <label htmlFor={`friends.${index}.name`}>Name</label>
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
                                            <div className="col">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    onClick={() => remove(index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => push({ name: '', email: '' })}
                                >
                                    Add Friend
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit" className="btn btn-primary">Invite</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default InviteFriends;
