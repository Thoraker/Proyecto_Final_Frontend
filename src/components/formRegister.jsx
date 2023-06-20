import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './form2.css';


const Formulario = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    lastname: '',
                    email: ''
                }}
                validate={(valores) => {
                    const errors = {};
                    if (!valores.name) {
                        errors.name = 'Por favor ingresa un nombre'
                        // ErrorMessage.name = 'Por fav.... '
                        // ErrorMessage = 'Por favor ingresa un nombre'
                        console.log('Favor ingresa un nombre')
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                        errors.name = 'El nombre solo puede ocntener letras y espacios'
                    }

                    if (!valores.lastname) {
                        errors.lastname = 'Por favor ingresa un apellido'
                        // ErrorMessage.lastname = 'Por fav.... '
                        // ErrorMessage = 'Por favor ingresa un apellido'
                        console.log('Favor ingresa un apellido')
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastname)) {
                        errors.lastname = 'El apellido solo puede contener letras y espacios'
                    }
                    if (!valores.email) {
                        errors.email = 'Por favor ingresa un correo'
                        // ErrorMessage.email = 'Por fav.... '
                        // ErrorMessage = 'Por favor ingresa un correo'
                        console.log('Favor ingresa un correo')
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errors.email = 'El correo solo puede ocntener letras, numeros, puntos, guiones y guion bajo'
                    }

                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 4000);
                    console.log('Formulario enviado');
                }}
            >
                {({ errors }) => (
                    <Form className='formulario'>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <Field
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Bev'

                            ></Field>
                            <ErrorMessage name='name' component={() => (<div className='error'>{errors.name}</div>
                            )}></ErrorMessage>

                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <Field
                                type='text'
                                id='lastname'
                                name='lastname'
                                placeholder='Poni'
                            ></Field>
                            <ErrorMessage name='lastname' component={() => (
                                <div className='error'>{errors.lastname}</div>
                            )}></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="text"
                                id="email"
                                name="email"
                                placeholder='correo@correo.com'
                            ></Field>
                            <ErrorMessage name='email' component={() => (
                                <div className='error'>{errors.email}</div>
                            )}></ErrorMessage>
                        </div>
                        <div>
                            <Field name='pais' as='select'>
                                <option value="Chile">Chile</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Venezuela">Venezuela</option>
                            </Field>
                        </div>
                        <div>
                            <label>
                                <Field type='radio' name='sexo' value='Hombre' />Hombre
                            </label>
                            <label>
                                <Field type='radio' name='sexo' value='Mujer' />Mujer
                            </label>
                        </div>

                        <div>
                            <Field name='mensaje' as='textarea' placeholder='Description' />
                        </div>

                        <div><button type='submit'>Enviar</button></div>
                        {formularioEnviado && <p className='exito'>Formulario enviado con éxito!</p>}
                    </Form>

                )}




                    </Formik >
            </>
            )
}
            export default Formulario;
