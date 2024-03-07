import {jsonService} from './jsonService.js'

//TEMPLATE
const template = document.createElement("template");



//Estructura Básica de un web component
export class tableComponent extends HTMLElement {

    type = this.getAttribute('type');
    constructor(){
        super();
        this.render();
    }

    async render(){
        //load Component and template
        const data = await jsonService.loadData(this.type)
        template.innerHTML =  /*HTML*/`
        <nav class="nav-content">
                <button id="add" class="button btn-success">
                    Agregar
                </button>
                <button id="edit" class="button btn-info">
                    Editar
                </button>
                <button id="del" class="button btn-danger">
                    Eliminar
                </button>
                <button id="search" class="button btn-primary">
                    Buscar
                </button>
        </nav>

        `
        const html = template.content.cloneNode((true));
        html.querySelector('#add').addEventListener('click', (e) => {
            this.openDialog('add')
        })
        this.appendChild(html);

    };


    openDialog(component){
        const dialog = document.getElementById('dialog');
        dialog.innerHTML = `
        
            <${component}-component type="${this.type}"></${component}-component>
        
        `;
        dialog.showModal();
    }

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("table-component", tableComponent);