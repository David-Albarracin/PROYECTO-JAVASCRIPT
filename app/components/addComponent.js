//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
    <button> Guardado Info
    </button>
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
        this.appendChild(html);

    };

    saveData(){
        
    }
}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("add-component", addComponent);