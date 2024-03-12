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

    

    async render(){
        //load Component and template
        const html = template.content.cloneNode((true));
        html.appendChild(this.loadSelects(await this.createForm()))
       
        this.appendChild(html);
        

    };

    loadSelects(createForm) {
        const selects = createForm.querySelectorAll('select');
        selects.forEach(async select => {
            await jsonService.loadData(select.id)
                .then(data => {
                    data.forEach(element => {
                        const option = document.createElement("option");
                        option.value = element.id;
                        option.textContent = element.Nombre? element.Nombre: element.id;
                        select.appendChild(option);
                    });
                })
                .catch(error => {
                    console.error(`Error al cargar los datos para ${propName}:`, error);
                });
        });
        return createForm;
    }
    

    async createForm(){
        const typeAdd = this.getAttribute('type')
        //Verificar si es Crear uno Nuevo o editar
        const idObject = this.getAttribute('id');
        const onlyView = this.getAttribute('show');
        const isEdit = idObject? await jsonService.loadDataId(typeAdd, idObject):false

        //Cargar el Modelo Dependiendo de lo que se requiera
        const formContent = document.createElement('form')
        formContent.id = typeAdd
        const dataObject = new getModel(typeAdd)
        formContent.innerHTML = dataObject.template

        formContent.querySelector('#id').value =  await jsonService.loadData(typeAdd).then(e => Number(e.pop().id )+ 1)
        if (isEdit) {
            const inputs = formContent.querySelectorAll('input');
            const selects = formContent.querySelectorAll('select');
            // Iterar sobre los inputs y añadir sus valores al objeto formData
            inputs.forEach(input => {
                input.value = isEdit[input.id];
                input.disabled = onlyView? true: false
            });

            // Iterar sobre los selects y añadir sus valores al objeto formData
            selects.forEach(select => {
                select.value = isEdit[select.id];
                select.disabled = onlyView? true: false
            });
        }
        if (!onlyView) {
            //Crear el Botón para editar o guardar Dependiendo
            const button = document.createElement('button')
            button.classList.add('button', 'btn-success', 'full-width');
            button.textContent = isEdit? "Actualizar":"Guardar"
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
                    formData[input.id] = input.value.toLowerCase();
                });
    
                // Iterar sobre los selects y añadir sus valores al objeto formData
                selects.forEach(select => {
                    formData[select.id] = select.value.toLowerCase();
                });
    
                // Guardar los datos utilizando jsonService.saveData
                if (isEdit) {
                    jsonService.updateData(typeAdd, formData).then(response => {
                        Swal.fire(response)
                        document.getElementById('dialog').close();
                    });
                } else {
                    jsonService.saveData(typeAdd, formData).then(response => {
                        Swal.fire(response)
                        document.getElementById('dialog').close();
                    });
                }
            })
            formContent.appendChild(button);
        }
        return formContent
    }

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("add-component", addComponent);