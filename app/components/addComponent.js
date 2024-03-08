import { getModel } from "./../models/models.js";
import { jsonService } from './jsonService.js'
import { Swal } from "./sweetAlert.js";
//TEMPLATE
const template = document.createElement("template");


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

    loadSelects(createForm) {
        const selects = createForm.querySelectorAll('select');
        selects.forEach(select => {
            const propName = select.id.replace('id', '').toLocaleLowerCase(); // Eliminar 'id' del ID del select para obtener el nombre de la propiedad
            jsonService.loadData(propName)
                .then(data => {
                    data.forEach(element => {
                        const option = document.createElement("option");
                        option.value = element.id;
                        option.textContent = element.nombre;
                        select.appendChild(option);
                    });
                })
                .catch(error => {
                    console.error(`Error al cargar los datos para ${propName}:`, error);
                });
        });
        return createForm;
    }
    

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