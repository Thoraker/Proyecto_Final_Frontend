// import React, { useState } from 'react';

// const AnimalCarousel = () => {
//     const [pets, setPets] = useState([]);

//     const handleCreatePet = async (input) => {
//         try {
//             const response = await fetch("http://127.0.0.1:3000/pet", {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': 'Bearer ' + this.state.token,
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(input)
//             });
//             const result = await response.json();
//             setPets([...pets, result]); 
//         } catch (error) {
//             console.log('error', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Animales en adopción</h1>
//             <form onSubmit={handleCreatePet}>
//                 {/* Agrega tus campos de formulario aquí */}
//                 <button type="submit">Guardar</button>
//             </form>
//             <div>
//                 {pets.map((pet) => (
//                     <div key={pet.id}>
//                         <img src={pet.photo} alt={pet.name} />
//                         <p>Nombre: {pet.name}</p>
//                         <p>Edad: {pet.age}</p>
//                         <p>Contacto: {pet.contact}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AnimalCarousel;
