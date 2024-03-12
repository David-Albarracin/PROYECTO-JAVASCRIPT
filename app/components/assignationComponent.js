import { getModel } from "./../models/models.js";
import { jsonService } from './jsonService.js'
import { Swal } from "./sweetAlert.js";
//TEMPLATE
const template = document.createElement("template");


//Estructura Básica de un web component
export class assignationComponent extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    async render() {
        
        //load Component and template
        const data = await jsonService.loadData('activos')
        const dataFilter = data.filter(e => e.idEstado == "1")
        if (dataFilter.length) {
            dataFilter.forEach(element => {
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
                            <tr>
                                <button data-id='[${element.id}]' class="button btn-danger" data-target-id="${element.id}">
                                    RETORNAR
                                </button>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `
                const button = document.querySelector(`[data-target-id="${element.id}"]`);
                button.addEventListener('click', async (e) => {
                    e.stopImmediatePropagation()
                    const activo = await jsonService.loadDataId("activos", e.target.data.id)
                    activo.idEstado = "0"
                    jsonService.updateData("activos", activo).then(response => {
                        Swal.fire(response)
                        document.getElementById('dialog').close();
                    });
                });
            });
        }else{
            template.innerHTML += `
                <div class="table-container">
                    <table class="table">
                        <tbody>
                            <tr>
                                <h3>No se Encontraron Activos Asignados</h3>
                            </tr>
                        </tbody>
                    </table>
                </div>
                ` 
        }

        const html = template.content.cloneNode((true));

        this.appendChild(html);


        
       
    };

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("assignation-component", assignationComponent);