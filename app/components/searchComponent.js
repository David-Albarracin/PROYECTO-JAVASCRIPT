import { jsonService } from './jsonService.js'
//TEMPLATE
const template = document.createElement("template");

//Estructura Básica de un web component
export class searchComponent extends HTMLElement {
    
    constructor(){
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
            
            const search = document.querySelector('#search-input').value?.toLowerCase();
            const objectsFound = data.filter(element => {
                return (element.Nombre && element.Nombre.includes(search)) ||
                       (element.id && element.id.includes(search));
            });            
            if (!objectsFound) {
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
            document.querySelector('#result-search').innerHTML = ""
            objectsFound.forEach(element => {
                const tableContainer = document.createElement('div');
                tableContainer.classList.add('table-container');

                tableContainer.innerHTML = `
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
                    <button data-id='[${element.id}]' class="button btn-info" data-target-id="${element.id}">
                        <i class='bx bx-show'></i>
                    </button>
                `;

                document.querySelector('#result-search').appendChild(tableContainer);

                const button = tableContainer.querySelector(`[data-target-id="${element.id}"]`);
                button.addEventListener('click', (e) => {
                    const id = JSON.parse(e.target.dataset.id)
                    console.log(id);
                });
            });
        })
      
        this.appendChild(html);

    };

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("search-component", searchComponent);