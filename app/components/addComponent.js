import { getModel } from "./../models/models.js";
import { jsonService } from './jsonService.js'
import { Swal } from "./sweetAlert.js";
//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/
`
<h1>Formulario de Transacciones</h1>
    <form action="procesar_formulario.php" method="post">
    <label for="id">ID:</label>
    <input type="text" id="id" name="id" required><br>

    <label for="CodTransaccion">Código de Transacción:</label>
    <input type="text" id="CodTransaccion" name="CodTransaccion" required><br>

    <label for="NroFormulario">Número de Formulario:</label>
    <input type="text" id="NroFormulario" name="NroFormulario" required><br>

    <!-- Agrega los demás campos aquí -->
    <!-- Por ejemplo: -->
    <label for="idMarca">ID de Marca:</label>
    <input type="text" id="idMarca" name="idMarca" required><br>

    <label for="idCategoria">ID de Categoría:</label>
    <input type="text" id="idCategoria" name="idCategoria" required><br>

    <!-- Continúa con los demás campos -->

    <input type="submit" value="Enviar">
    </form>
`

//Estructura Básica de un web component
export class addComponent extends HTMLElement {
    
    constructor(){
        super();
        this.render();
    }

    

    render(){
        //load Component and template
        const html = template.content.cloneNode((true));
        html.appendChild(this.loadSelects(this.createForm()))
        this.appendChild(html);

    };   

    createForm(){
        //Verificar si es Crear uno Nuevo o editar
        const idObject = this.getAttribute('id');
        const isEdit = idObject? jsonService.loadDataId(idObject):false

        //Cargar el Modelo Dependiendo de lo que se requiera
        const typeAdd = this.getAttribute('type')
        const formContent = document.createElement('form')
        formContent.id = typeAdd
        const dataObject = new getModel(typeAdd)
        formContent.innerHTML = dataObject.template

        //Crear el Botón para editar o guardar Dependiendo
        const button = document.createElement('button')
        button.classList.add('button', 'btn-success', 'full-width');

        button.textContent = isEdit? "Actualizar":"Guardar"
        if (isEdit) {
            button.addEventListener('click', (e)=>{

            })
        }else{
            button.addEventListener('click', (e)=>{
                // Evitar que se envíe el formulario
                e.preventDefault();

                // Obtener el formulario por su ID
                const form = document.getElementById(typeAdd);

                // Obtener los valores de los inputs y selects
                const formData = {};
                const inputs = form.querySelectorAll('input');
                const selects = form.querySelectorAll('select');

                // Iterar sobre los inputs y añadir sus valores al objeto formData
                inputs.forEach(input => {
                    formData[input.id] = input.value;
                });

                // Iterar sobre los selects y añadir sus valores al objeto formData
                selects.forEach(select => {
                    formData[select.id] = select.value;
                });

                // Guardar los datos utilizando jsonService.saveData
                jsonService.saveData(typeAdd, formData).then(response => {
                    Swal.fire(response)
                    document.getElementById('dialog').close();
                });


            })
        }
        formContent.appendChild(button);
        return formContent
    }

}
// Custom Element registrado (el navegador ya lo conoce)
customElements.define("add-component", addComponent);