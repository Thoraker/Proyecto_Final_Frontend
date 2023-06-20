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
        // NO ESTA CAMBIANDO LA BARRA PROGRESS OJOOOOOOOOOOOOOOO
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
                <form className="formpet pb-2">
                    <p>Publica tu Mascota</p>

                    <div className="form-group pb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre de tu mascota"
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                    </div>

                    <div className="form-group pb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Edad"
                            value={edad}
                            onChange={handleEdadChange}
                        />
                    </div>

                    <div className="form-group pb-2">
                        <div className="d-flex align-items-center">
                            <select className="form-select me-2" value={especie} onChange={handleEspecieChange}>
                                <option value="">Especie</option>
                                <option value="Perros">Perros</option>
                                <option value="Gatos">Gatos</option>
                                <option value="Aves">Aves</option>
                                <option value="Otros">Otros</option>
                            </select>

                            <select className="form-select" value={tamano} onChange={handleTamanoChange}>
                                <option value="">Tamaño</option>
                                <option value="Pequeño">Pequeño</option>
                                <option value="Mediano">Mediano</option>
                                <option value="Grande">Grande</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group pb-2 d-flex flex-column align-items-center">
                        <textarea
                            className="form-control"
                            id="Descripction1"
                            placeholder="Descripción"
                            rows="3"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                            maxLength={100}
                        ></textarea>
                        <p>Remaining characters: {100 - descripcion.length}</p>
                    </div>


                    <div className="progress mb-3" >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${progreso}%` }}
                            aria-valuenow={progreso}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>

                    <div className="pb-2">
                        <button type="submit" className="btn-Petform">
                            Publicar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PetForm;
