function calcularPrecio() {
    const cantidadPollos = parseInt(document.getElementById('cantidad').value);

    if (isNaN(cantidadPollos) || cantidadPollos <= 0) {
        alert('Ingresa una cantidad válida de pollos.');
        return;
    }

    const precioPollo = 5; // Precio por pollo (cambiar según tus necesidades)
    const total = cantidadPollos * precioPollo;

    document.getElementById('resultado').innerText = `El precio total es: $${total}`;
}
