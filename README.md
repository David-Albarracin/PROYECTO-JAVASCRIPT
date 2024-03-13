![css](https://raw.githubusercontent.com/David-Albarracin/README_MATERIALS/main/css-html-js.png)

# Proyecto JavaScript Inventario CampusLands

---
## Integrantes:

Jorge Luis Osorio Silva

Edgar Benjamin David Albarracin Sanabria 

---

## Descripción

Esta aplicación se diseña para implementar un manejo mas detallado del inventario de CampusLand con funciones para crear nuevos activos asignarlos y llevar el historial de estos movimientos


---

## Características

1. **Creación de Activos**: Los usuarios pueden crear fácilmente nuevos activos los cuales tienen su categoría la cual es creada dinámicamente.

   ```
   export class Activo {
       constructor(id,Nombre, CodTransaccion, NroFormulario, idMarca, idCategoria, idTipo, ValorUnitario, idProveedor, NroSerial, idEmpresaResponsable, idEstado) {
       
           this.id = id;
           this.Nombre = Nombre;
           this.CodTransaccion = CodTransaccion;
           this.NroFormulario = NroFormulario;
           this.idMarca = idMarca;
           this.idCategoria = idCategoria;
           this.idTipo = idTipo;
           this.ValorUnitario = ValorUnitario;
           this.idProveedor = idProveedor;
           this.NroSerial = NroSerial;
           this.idEmpresaResponsable = idEmpresaResponsable;
           this.idEstado = idEstado;
       }
   }
   ```

   Esta es la estructura del objeto que vamos a manejar los idMarca hace referencia a otros objetos que podemos encontrar en el modulo models

2. **Asignar**: Los clientes pueden crear asignaciones dentro del sistema para controlar el estado y la ubicación de los activos.

       export class Asignacion {
           constructor(id, Fecha, idResponsable) {
               this.id = id;
               this.Fecha = Fecha;
               this.idResponsable = idResponsable;
           }

3. **jsonService**: Este módulo contiene funciones que facilitan la gestión de la conexión del servidor y permiten la edición del archivo JSON, así como la capacidad de guardar los cambios.

   ``````
   
       async loadData(endPoint){
           try {
               const data = await fetch(`${this.URL_API}${this.mapKeys(endPoint)}`,{
                   method: "GET",
                   headers: this.HEADERS
               }).then(data => data.json())
               return data
           } catch (error) {
               return []
           }
   
       }
   ``````

   La función `loadData` está diseñada para cargar archivos según la necesidad, mediante la especificación de un `endPoint` como parámetro. Realiza una solicitud GET al servidor utilizando el `endPoint` proporcionado, procesa los datos recibidos en formato JSON y los devuelve para su uso posterior. En caso de error durante la solicitud, la función devuelve un arreglo vacío.

4. **sweetAlert**: Este modulo nos ayuda a implementar una alerta para dar informacion al usuario de cuanto se realiza una accion del usuario 

5. **tableComponents**: Este módulo se encarga de mostrar en pantalla las opciones de edición y búsqueda. Para lograr esto, crea dinámicamente los botones y les asigna un evento que carga de manera dinámica el `addComponent` o `editComponent`, dependiendo de lo que se requiera en ese momento.

   ```
   template.innerHTML =  /*HTML*/`
           <div class="row g-2">
                   <div class="col-md-3">
                       <button id="add" class="button btn-success">
                           Agregar
                       </button>
                   </div>
                   <div class="col-md-3">
                       <button id="edit" class="button btn-info">
                           Editar
                       </button>
                   </div>
                   <div class="col-md-3">
                       <button id="del" class="button btn-danger">
                           Eliminar
                       </button>
                   </div>
                   <div class="col-md-3">
                       <button id="search" class="button btn-primary">
                           Buscar
                       </button>
                   </div>
           </div>
           `
           
   ```

Ahora Hablemos de los documentos css

6. **bootstrap-grid**: En este módulo, se incluye el sistema de grid de Bootstrap, el cual facilita la creación de una página web responsiva. El sistema de grid permite organizar el diseño de la página en filas y columnas, lo que simplifica la adaptación del contenido a diferentes tamaños de pantalla, mejorando así la experiencia del usuario en dispositivos móviles y de escritorio.

   ``````
   .container,
   .container-fluid,
   .container-xxl,
   .container-xl,
   .container-lg,
   .container-md,
   .container-sm {
     --bs-gutter-x: 1.5rem;
     --bs-gutter-y: 0;
     width: 100%;
     padding-right: calc(var(--bs-gutter-x) * 0.5);
     padding-left: calc(var(--bs-gutter-x) * 0.5);
     margin-right: auto;
     margin-left: auto;
   }
   ``````

   

7. **base**: Este módulo contiene todos los estilos de reinicio (reset) de los estilos por defecto del HTML, así como estilos básicos para elementos como botones. El reinicio de estilos garantiza que todos los navegadores comiencen desde una misma base, evitando inconsistencias en la presentación del contenido. Además, los estilos para botones proporcionan una apariencia consistente y agradable en toda la aplicación.

   ``````
    
   *{
       box-sizing: border-box;
       padding: 0;
       margin: 0;
   }
   
   html{
       scroll-behavior: smooth;
       overflow-x: hidden;
   }
   
   body,
   button,
   input{
       font-family: var(--body-font);
       font-size: var(--normal-font-size);
   }
   
   ``````

Por ultimo Demos un Vistaso a la Estructura del json

* ``````
  {
    "activos": [
      {
        "id": "1",
        "Nombre": "Mesa",
        "CodTransaccion": "",
        "NroFormulario": "",
        "idMarca": "",
        "idCategoria": "",
        "idTipo": "",
        "ValorUnitario": "",
        "idProveedor": "",
        "NroSerial": "",
        "idEmpresaResponsable": "",
        "idEstado": ""
      }
    ],
    "categoriaActivos": [
      { "id": "1", "Nombre": "equipo de computo" },
      { "id": "2", "Nombre": "electrodomestico" },
      { "id": "3", "Nombre": "juego" }
    ],
    "marcas": [
      { "id": "1", "Nombre": "lg" },
      { "id": "2", "Nombre": "compumax" },
      { "id": "3", "Nombre": "logitech" },
      { "id": "4", "Nombre": "benq" },
      { "id": "5", "Nombre": "asus" },
      { "id": "6", "Nombre": "lenovo" },
      { "id": "7", "Nombre": "hp" }
    ],
    "tipoPersonas": [
      {
        "id": "1",
        "Nombre": "natural"
      }
    ],
    "tipoMovActivos": [
      {
        "id": "1",
        "Nombre": "mov ac"
      }
    ],
    "tipoActivos": [
      { "id": "1", "Nombre": "monitor" },
      { "id": "2", "Nombre": "cpu" },
      { "id": "3", "Nombre": "teclado" },
      { "id": "4", "Nombre": "mouse" },
      { "id": "5", "Nombre": "aire acondicionado" },
      { "id": "6", "Nombre": "portatil" },
      { "id": "7", "Nombre": "impresora" }
    ],
    "estados": [
      { "id": "0", "Nombre": "no asignado" },
      { "id": "1", "Nombre": "asignado" },
      { "id": "2", "Nombre": "dado de baja por daño" },
      { "id": "3", "Nombre": "en reparación y/o garantia" }
    ],
    "proveedores": [
      {
        "id": "1",
        "Nombre": "lg",
        "Email": "test@gmail.com"
      }
    ],
    "historialActivos": [
      {
        "id": "1",
        "idActivo": "1",
        "Fecha": "",
        "idResponsable": "1",
        "idEstado": "1"
      }
    ],
    "telefonoPersonas": [
      {
        "id": "1",
        "Nro": "11",
        "ubicacion": "1",
        "idPersona": "1"
      }
    ],
    "asignaciones": [
      {
        "id": "1",
        "Fecha": "",
        "idResponsable": ""
      }
    ],
    "personas": [
      {
        "id": "1",
        "Nombre": "pepe",
        "Email": "",
        "idTipoPersona": "1"
      }
    ],
    "detalleMovimiento": [
      {
        "id": "1",
        "Fecha": "",
        "idActivo": "",
        "Comentario": "",
        "idAsignacion": ""
      }
    ]
  }
  
  ``````

Recuerda instalar las dependencias necesarias como es json-server
