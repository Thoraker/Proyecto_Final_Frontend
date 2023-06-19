import React, { useState } from 'react';
import './petForm.css';

const PetForm = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [especie, setEspecie] = useState('');
    const [tamano, setTamano] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEdadChange = (event) => {
        setEdad(event.target.value);
    };

    const handleEspecieChange = (event) => {
        setEspecie(event.target.value);
    };

    const handleTamanoChange = (event) => {
        setTamano(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 100) {
            setDescripcion(inputValue);
        }
    };

    return (
        <section>
            <div className="containerForm">
                <h1>Publica tu Mascota</h1>
                <form className='formpet'>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre de tu mascota"
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Edad"
                            value={edad}
                            onChange={handleEdadChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <div className="d-flex">
                            <div><a>Tamaño:</a>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Pequeño
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Mediano
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked></input>
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Grande
                                    </label>
                                </div>
                            </div>                            
                        </div>


                        <div className="dropdown me-2">
                                <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Selecciona una raza
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={() => handleEspecieChange('Perros')}>Perros</a></li>
                                    <li><a className="dropdown-item" onClick={() => handleEspecieChange('Gatos')}>Gatos</a></li>
                                    <li><a className="dropdown-item" onClick={() => handleEspecieChange('Aves')}>Aves</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" onClick={() => handleEspecieChange('Otros')}>Otros</a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            placeholder="Descripción"
                            rows="4"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                            maxLength={100}
                        ></textarea>
                        <p>Remaining characters: {100 - descripcion.length}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Publicar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PetForm;
