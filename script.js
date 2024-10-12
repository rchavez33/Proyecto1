// Número de boleta inicial
let boletaCounter = 1;

// Función para inicializar el número de boleta
function initializeBoleta() {
    document.getElementById('boleta').value = boletaCounter.toString().padStart(6, '0');
}

// Función para aumentar el número de boleta y guardarlo
function guardarYEnviar() {
    boletaCounter++;
    alert('Datos guardados exitosamente.');
    initializeBoleta(); // Actualiza el número de boleta
}

// Función para añadir filas dinámicas en la tabla de repuestos
function addRow() {
    const table = document.getElementById('repuestosTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const codigoCell = newRow.insertCell(0);
    const descripcionCell = newRow.insertCell(1);
    const cantidadCell = newRow.insertCell(2);
    const estadoCell = newRow.insertCell(3);
    const observacionesCell = newRow.insertCell(4);

    codigoCell.innerHTML = '<input type="text" name="codigo[]">';
    descripcionCell.innerHTML = '<input type="text" name="descripcion[]">';
    cantidadCell.innerHTML = '<input type="number" name="cantidad[]">';
    estadoCell.innerHTML = '<input type="text" name="estado[]">';
    observacionesCell.innerHTML = '<input type="text" name="observaciones[]">';
}

//Apartado firma y sello 
const canvas = document.getElementById("firmaCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", (event) => {
    if (drawing) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener("mouseout", () => {
    drawing = false;
    ctx.closePath();
});

// Limpiar el canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Inicializar el formulario al cargar la página
window.onload = initializeBoleta;
