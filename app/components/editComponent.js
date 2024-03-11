import { jsonService } from './jsonService.js'
//TEMPLATE
const template = document.createElement("template");


//Estructura Básica de un web component
export class editComponent extends HTMLElement {

    constructor(data) {
        super();
        this.render();
    }

    async render() {
        const type = this.getAttribute("type")
        const data = await jsonService.loadData(type)
        //load Component and template  
        template.innerHTML =  /*HTML*/`
        <section>
            <div class="form-group">
                <label class="d-none" for="id">ID</label>
                <input class="form-control" id="search-input" placeholder="Buscar ${jsonService.mapKeys(type)}">
                <button id="search">
                    <i class='bx bx-search-alt-2'></i>
                </button>
            </div>
        </section>
        <section id="result-search">
        </section>
        `
        const html = template.content.cloneNode((true));
        html.querySelector('#search').addEventListener('click', async (e) => {
            const search = document.querySelector('#search-input').value;
            const objectFind = data.find(element => element.Nombre? 
                element.Nombre.includes(search):
                element.id.includes(search));
            if (!objectFind) {
                document.querySelector('#result-search').innerHTML = `
                <div class="table-container">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>No se Encontró:</th>
                                <td>${search}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `
                return
            }
            document.querySelector('#result-search').innerHTML = `
            <div class="table-container">
                <table class="table">
                    <tbody>
                        ${Object.entries(objectFind).map(([key, value]) => `
                            <tr>
                                <th>${key}:</th>
                                <td>${value}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <button id="edit-button" data-id='[${objectFind.id}]' class="button btn-info">
                    <i class='bx bx-edit-alt' ></i>
                </button>
            </div>
            `
            document.querySelector('#edit-button').addEventListener('click', (e) => {
                const id = JSON.parse(e.target.dataset.id)
                document.querySelector('#result-search').innerHTML = `
                    <add-component type="${type}" id="${id[0]}"></add-component>
                `
            })
        })
      
        this.appendChild(html);

    };

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("edit-component", editComponent);