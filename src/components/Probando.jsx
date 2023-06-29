// import React from 'react'
// // import { AppContext } from '../routes/App'
// // import { FontStyle } from '@cloudinary/url-gen/qualifiers'
// // import { border } from '@cloudinary/url-gen/qualifiers/background'
// // import { justify } from '@cloudinary/url-gen/qualifiers/textAlignment'
// // import './petForm.css'

// import { useForm } from './Hooks'


// const PetForm1 = () => {
//     const [inputValues, handleInputChange] = useForm({
//         nombre: "",
//         edad: "",
//         tamano: "",
//         especie: "",
//         descripcion: "",

//     });

//     const { nombre, edad, tamano, especie, descripcion } = inputValues

//     const createUserRequest = async () => {
//         try {
//             await fetch(
//                 "https://3000-66006600-proyectofinalb-0i10yo7gjo0.ws-us101.gitpod.io/mascotas/mascotas",
//                 {
//                     method: "POST",
//                     body: JSON.stringify({
//                         nombre,
//                         edad,
//                         tamano,
//                         especie,
//                         descripcion,
                    
//                     }),
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );
//         } catch (error) {
//             console.log("error", error);
//         };
//     }


//     return (
//         <section >
//             <div className='containerForm m-2'
//                 style={{
//                     background: 'rgb(102, 177, 87)',
//                     backgroundSize: 'cover',
//                     borderRadius: '15px',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }} >
//                 <form className='formpet shadow w-50 p-2' id="petForm">
//                     <p className='pb-2 d-flex justify-content-center'>Publica tu Mascota</p>
//                     <div className='form-group pb-2'>
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='Nombre de tu mascota'
//                             value={nombre}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className='form-group pb-2'>
//                         <input
//                             type='text'
//                             className='form-control'
//                             placeholder='Edad'
//                             value={edad}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className='form-group pb-2'>
//                         <div className='d-flex align-items-center'>
//                             <select className='form-select me-2' value={especie} onChange={handleInputChange}>
//                                 <option value=''>Especie</option>
//                                 <option value='Perros'>Perros</option>
//                                 <option value='Gatos'>Gatos</option>
//                                 <option value='Aves'>Aves</option>
//                                 <option value='Otros'>Otros</option>
//                             </select>
//                             <select className='form-select' value={tamano} onChange={handleInputChange}>
//                                 <option value=''>Tamaño</option>
//                                 <option value='Pequeño'>Pequeño</option>
//                                 <option value='Mediano'>Mediano</option>
//                                 <option value='Grande'>Grande</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className='form-group pb-2 d-flex flex-column align-items-center'>
//                         <textarea
//                             className='form-control'
//                             id='Descripction1'
//                             placeholder='Descripción'
//                             rows='3'
//                             value={descripcion}
//                             onChange={handleInputChange}
//                             maxLength={100}
//                         ></textarea>
//                         <p>Remaining characters: {100 - descripcion.length}</p>
//                     </div>

//                     <div className='pb-2 d-flex justify-content-center'>
//                         <button onClick={createUserRequest}
//                             type='submit'
//                             className='btn btn-Petform font-weight-bold btn-hover btn-hover-red'
//                             style={{
//                                 border: 'none',
//                                 borderRadius: '8px',
//                                 borderBottom: '0',
//                                 height: '40px',
//                                 width: '120px',
//                                 backgroundColor: 'rgb(4, 79, 33)',
//                                 color: 'white',
//                                 cursor: 'pointer',
//                                 transition: 'background-color 0.3s'
//                             }}>
//                             Publicar
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section >
//     )
// }

// export default PetForm1;
