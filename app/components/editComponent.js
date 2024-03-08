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
                <input class="form-control" id="search-input" placeholder="Buscar ${type}">
                <button id="search">
                    <i class='bx bx-search-alt-2'></i>
                </button>
            </div>
        </section>
        `
        const html = template.content.cloneNode((true));
        html.querySelector('#search').addEventListener('click', async (e) => {
            const search = document.querySelector('#search-input');
            const objectFind = data.find(element => element.nombre.includes(search));
            this.innerHTML = `
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
                <button id="edit" class="button btn-info">
                    <i class='bx bx-edit-alt' ></i>
                </button>
            </div>
            `
        })
        this.appendChild(html);

    };

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("edit-component", editComponent);