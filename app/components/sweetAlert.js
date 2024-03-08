class SweetAlert {
    constructor() {
    }

    fire(response) {
        const type = response.ok? "success": "error"
        // Crear un elemento div para la alerta
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', `alert-${type}`);
        alertDiv.textContent = "Se Guardo Correctamente en el servidor";

        // Agregar la alerta al cuerpo del documento
        document.body.appendChild(alertDiv);
 
        // // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
            alertDiv.remove()
        }, 3000);
    }

}

export const Swal = new SweetAlert();
