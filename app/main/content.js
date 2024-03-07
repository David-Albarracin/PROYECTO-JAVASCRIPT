//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
<!-- NAVBAR -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class='bx bx-menu toggle-sidebar' ></i>
			<form action="#">
				
			</form>
			
			<span class="divider"></span>
			<div class="profile">
				<img src="./img/logo.png" alt="logo">
				<ul class="profile-link">
					<li><a href="#"><i class='bx bxs-user-circle icon' ></i> Profile</a></li>
					<li><a href="#"><i class='bx bxs-cog' ></i> Settings</a></li>
					<li><a href="#"><i class='bx bxs-log-out-circle' ></i> Logout</a></li>
				</ul>
			</div>
		</nav>
		<!-- NAVBAR -->

		<!-- MAIN -->
		<main>
			<h1 class="title">Dashboard</h1>
			<ul class="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li class="divider">/</li>
				<li><a href="#" class="active">Dashboard</a></li>
			</ul>
			<div id="content-data" class="data">
			</div>
		</main>
		<!-- MAIN -->
	</section>
<!-- NAVBAR -->



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