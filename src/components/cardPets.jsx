import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'bootstrap';

const Card = ({ name, specie, age, size, needBackyard }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <Carousel />
            <p>Especie: {specie}</p>
            <p>Edad: {age}</p>
            <p>Tamaño: {size}</p>
            <p>Necesita un jardín amplio: {needBackyard ? 'Sí' : 'No'}</p>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    specie: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    needBackyard: PropTypes.bool.isRequired,
};

export default Card;
