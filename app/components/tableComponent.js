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
        <div class="row g-2">
                <div class="col-md-3">
                    <button id="add" class="button btn-success">
                        Agregar
                    </button>
                </div>
                <div class="col-md-3">
                    <button id="edit" class="button btn-info">
                        Editar
                    </button>
                </div>
                <div class="col-md-3">
                    <button id="del" class="button btn-danger">
                        Eliminar
                    </button>
                </div>
                <div class="col-md-3">
                    <button id="search" class="button btn-primary">
                        Buscar
                    </button>
                </div>
        </div>
        `
        data.forEach(element => {
            template.innerHTML += `
            <div class="table-container">
                <table class="table">
                    <tbody>
                        ${Object.entries(element).map(([key, value]) => `
                            <tr>
                                <th>${key}:</th>
                                <td>${value}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            ` 
        });
        const html = template.content.cloneNode((true));
        html.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.openDialog(e.target.id)
            });
        });
       
        this.appendChild(html);

    };


    openDialog(component){
        const dialog = document.getElementById('dialog');
        dialog.innerHTML = `
        <div class="dialog-buttons">
            <button onclick="dialog.close()" class="button">
                <i class='bx bx-arrow-back'></i>
            </button>
            <h3>${component.toUpperCase()} ${this.type.toUpperCase()}S</h3>
            <button onclick="dialog.close()" class="button">
                <i class='bx bx-x'></i>
            </button>
        </div>
            <${component}-component type="${this.type}"></${component}-component>
        
        `;
        dialog.showModal();
    }

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("table-component", tableComponent);