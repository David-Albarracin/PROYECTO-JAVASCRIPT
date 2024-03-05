//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/``

//Estructura Básica de un web component
export class delComponent extends HTMLElement {
    
    constructor(){
        super();
        this.render();
    }

    render(){
        //load Component and template  
        const html = template.content.cloneNode((true));
        this.appendChild(html);

    };

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("del-component", delComponent);