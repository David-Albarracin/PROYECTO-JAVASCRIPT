import { getModel } from "./../models/models.js";
import { jsonService } from './jsonService.js'
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
        html.appendChild(this.createForm())
        this.appendChild(html);

    };

    saveData(){
        
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

                console.log('guardando');
            })
        }
        formContent.appendChild(button);
        return formContent
    }

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("add-component", addComponent);