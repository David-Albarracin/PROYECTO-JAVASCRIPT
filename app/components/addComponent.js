//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/
`
<h1>Formulario de Transacciones</h1>
    <form action="procesar_formulario.php" method="post">
    <label for="id">ID:</label>
    <input type="text" id="id" name="id" required><br>

    <label for="CodTransaccion">Código de Transacción:</label>
    <input type="text" id="CodTransaccion" name="CodTransaccion" required><br>

    <label for="NroFormulario">Número de Formulario:</label>
    <input type="text" id="NroFormulario" name="NroFormulario" required><br>

    <!-- Agrega los demás campos aquí -->
    <!-- Por ejemplo: -->
    <label for="idMarca">ID de Marca:</label>
    <input type="text" id="idMarca" name="idMarca" required><br>

    <label for="idCategoria">ID de Categoría:</label>
    <input type="text" id="idCategoria" name="idCategoria" required><br>

    <!-- Continúa con los demás campos -->

    <input type="submit" value="Enviar">
    </form>
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
        updateData()
    }
}

function CartegoriaActivo() {
    template.innerHTML = `
    <div>
    `
  }
  
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }

  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }
  function Marcas() {
    template.innerHTML = `
    <div>
    `
  }

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("add-component", addComponent);