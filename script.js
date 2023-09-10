document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Enviar los datos en formato JSON al servidor
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Los datos se enviaron correctamente. Consulta la consola para ver la respuesta del servidor.');
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert('Ocurrió un error al enviar los datos.');
    });
});
