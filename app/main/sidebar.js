import { jsonService } from "../components/jsonService.js";

const homeTemplate = `
<h1>Gracias Por Preferirnos</h2>


`

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#content-data')
	main.innerHTML = homeTemplate
})

//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
<!-- SIDEBAR -->
	<section id="sidebar">
		<a href="#" class="brand">
      <img id="imgLogo" class="sidebar-logo" src="./img/logoWhite.png" alt="logo"></img>
    </a>
		<ul class="side-menu">
			<li><a data-link='["i"]' href="#" class="active"><i class='bx bxs-dashboard icon' ></i>INICIO</a></li>
			<li class="divider" data-text="main">Formularios</li>
			<li>
				<a id="noEvent" href="#"><i class='bx bxs-inbox icon' ></i>Asignación <i class='bx bx-chevron-right icon-right' ></i></a>
				<ul class="side-dropdown">
					<li><a data-link='["asignacionCreate"]' href="#">Crear Asignación</a></li>
					<li><a data-link='["asignacionActivo"]' href="#">Asignar Activo</a></li>
					<li><a data-link='["asignacionRetorn"]' href="#">Retornar Activo</a></li>
				</ul>
			</li>
			<li><a data-link='["idActivo"]' href="#"><i class='bx bxs-chart icon' ></i> Activos</a></li>
			<li><a data-link='["idMarca"]' href="#"><i class='bx bxs-widget icon' ></i> Marcas</a></li>
			<li><a data-link='["idResponsable"]' href="#"><i class='bx bxs-widget icon' ></i> Personas</a></li>
			<li><a data-link='["idEstado"]' href="#"><i class='bx bxs-widget icon' ></i> Estados</a></li>
			<li class="divider" data-text="table and forms">Consultar</li>

			<li><a data-link='["TipoPersona"]' href="#"><i class='bx bx-table icon' ></i> Tipo Persona</a></li>
			<li><a data-link='["TipoMovimientoActivo"]' href="#"><i class='bx bx-table icon' ></i> Tipo Movimiento Activo</a></li>
			<li><a data-link='["idTipo"]' href="#"><i class='bx bx-table icon' ></i> Tipo Activo</a></li>
		</ul>
	</section>
<!-- SIDEBAR -->

`

//Estructura Básica de un web component
export class sideBar extends HTMLElement {
    
    constructor(){
        super();
        this.render();
    }

    render(){
        //load Component and template  
        const html = template.content.cloneNode((true));
		const tagA = html.querySelectorAll('a')
		tagA.forEach(a => {
            if(a.id != "noEvent"){
                a.addEventListener('click', (e) => {
                    tagA.forEach(link => {
                        link == e.target? link.classList.add("active") : link.classList.remove('active');
                    });
                    const url = JSON.parse(e.target.dataset.link)
                    const main = document.querySelector('#content-data')
                    switch (url[0]) {
                        case 'i':
                            main.innerHTML = homeTemplate;
                            break;
                        case 'asignacionCreate':
                            main.innerHTML = `
                            <div class="content-data">
                                <div class="head">
                                    <h3>Crear Una Asignacion</h3>
                                </div>
                                <table-component type="idActivo"></table-component>
                            </div>
                            `;
                            break;
    
                        default:
                            main.innerHTML = `
                            <div class="content-data">
                                <div class="head">
                                    <h3>Manejo de ${jsonService.mapKeys(url[0])}</h3>
                                </div>
                                <table-component type="${url[0]}" id=""></table-component>
                            </div>
                            `;
                            break;
                    };
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                });
            }
        });
        this.appendChild(html);
    };

}

// Custom Element registrado (el navegador ya lo conoce)
customElements.define("side-bar", sideBar);