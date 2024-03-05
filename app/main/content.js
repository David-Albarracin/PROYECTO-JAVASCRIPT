//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
<h2>Content component</h2>


`

//Estructura Básica de un web component
export class content extends HTMLElement {
    
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
customElements.define("content-component", content);