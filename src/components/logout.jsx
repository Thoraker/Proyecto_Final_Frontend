import React from 'react';

// eslint-disable-next-line react/prop-types
function Logout({ onLogout }) {
    const handleLogout = () => {
        // Lógica para cerrar sesión
        onLogout();
    };

    return (
        <div>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default Logout;