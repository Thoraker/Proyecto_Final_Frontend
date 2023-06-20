import React, { useState } from 'react';
import './petForm.css';

const PetForm = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [especie, setEspecie] = useState('');
    const [tamano, setTamano] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [progreso, setProgreso] = useState(0);

    const actualizarProgreso = () => {
        const camposLlenos = [nombre, edad, especie, tamano, descripcion].filter((campo) => campo !== '');
        const nuevoProgreso = (camposLlenos.length / 5) * 100; // Suponiendo 5 campos en total

        setProgreso(nuevoProgreso);
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
        actualizarProgreso();
    };

    const handleEdadChange = (event) => {
        setEdad(event.target.value);
        actualizarProgreso();
    };

    const handleEspecieChange = (event) => {
        setEspecie(event.target.value);
        actualizarProgreso();
    };

    const handleTamanoChange = (event) => {
        setTamano(event.target.value);
        actualizarProgreso();
    };

    const handleDescripcionChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 100) {
            setDescripcion(inputValue);
            actualizarProgreso();
        }
    };


    return (
        <section>
            <div className="containerForm">

                <form className='formpet pb-2'>
                    <p>Publica tu Mascota</p>

                    <div className="form-group pb-2">
                        <input
                            type="text pl-3"
                            className="NombreyEdad"
                            placeholder="Nombre de tu mascota"
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                    </div>
                    <div className="form-group pb-2">
                        <input
                            type="text"
                            className="NombreyEdad"
                            placeholder="Edad"
                            value={edad}
                            onChange={handleEdadChange}
                        />
                    </div>
                    <div className="dropdown me-2 pb-2">
                        <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tamaño
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={() => handleTamanoChange('Pequeño')}>Pequeño</a></li>
                            <li><a className="dropdown-item" onClick={() => handleTamanoChange('Mediano')}>Mediano</a></li>
                            <li><a className="dropdown-item" onClick={() => handleTamanoChange('Grande')}>Grande</a></li>
                        </ul>
                    </div>
                    <div className="dropdown me-2 pb-2">
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
                    <div className="form-group pb-2">
                        <textarea
                            className="form-control"
                            placeholder="Descripción"
                            rows="3"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                            maxLength={100}
                        ></textarea>
                        <p>Remaining characters: {100 - descripcion.length}</p>
                    </div>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${progreso}%` }}
                            aria-valuenow={progreso}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>

                    <div className='pb-2'>
                        <button type="submit" className="btn-Petform ">
                            Publicar
                        </button>
                    </div>
                </form>
            </div >
        </section >
    );
};

export default PetForm;
