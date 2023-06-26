const form = document.getElementById('petForm');

// Agrega un controlador de eventos para el evento de envío del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const input = {};
    for (const [key, value] of formData.entries()) {
        input[key] = value;
    }

    createPet(input);
});

async function createPet(input) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + this.state.token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(input);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch("http://127.0.0.1:3000/pet", requestOptions);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.log('error', error);
    }
}
