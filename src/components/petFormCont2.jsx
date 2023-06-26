const petForm = document.getElementById('petForm');

petForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const especie = document.getElementById("especie");
    const tamano = document.getElementById("tamano");

    if (nombre.value === "" || edad.value === "" || especie.value === "" || tamano.value === "") {
        alert("message", "Ensure you input a value in both fields!");
        // throw error
    } else {
        const formData = {
            nombre: nombre.value,
            edad: edad.value,
            especie: especie.value,
            tamano: tamano.value,
        };
        alert("mensaje", "This form has been successfully submitted!");
        try {
            const response = await fetch("http://127.0.0.1:3000/pet", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.text();
            console.log(result);

            alert("¡El formulario se ha enviado exitosamente!");

            // Limpiar los campos del formulario
            nombre.value = "";
            edad.value = "";
            especie.value = "";
            tamano.value = "";
            
        } catch (error) {
            console.log('error', error);
            alert("Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.");
        }
    }
});
        

// const formData = new FormData(form);
// const input = {};
// for (let [key, value] of formData.entries()) {
//     input[key] = value;
// }
// createPet(input);
// });