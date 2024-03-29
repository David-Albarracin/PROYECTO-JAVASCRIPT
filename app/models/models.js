//import {jsonService} from './../components/jsonService.js'

// Modelo para activos
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
    template = `
        <div class="form-group">
            <label for="id">ID</label>
            <input class="form-control" id="id" placeholder="Ingresa el ID" disabled>
        </div>

        <div class="form-group">
            <label for="Nombre">Nombre</label>
            <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre del producto">
        </div>

        <div class="form-group">
            <label for="NroSerial">Nª Serial</label>
            <input class="form-control" id="NroSerial" placeholder="Ingresa el Numero de Serial">
        </div>
        
        <div class="form-group">
            <label for="CodTransaccion">Código de Transaccion</label>
            <input class="form-control" id="CodTransaccion" placeholder="Ingresa Código de Transaccion">
        </div>
        
        <div class="form-group">
            <label for="NroFormulario">Nª Formulario</label>
            <input class="form-control" id="NroFormulario" placeholder="Ingresa el Numero del Formulario">
        </div>

        <div class="form-group">
            <label for="ValorUnitario">Valor Unitario</label>
            <input value="" class="form-control" id="ValorUnitario" placeholder="Ingresa el valor por unidad">
        </div>
        
        <div class="form-group">
            <label for="idMarca">Selecciona la Marca</label>
            <select class="form-control" id="idMarca" placeholder="Marcas...">
            </select>
        </div>
        
        <div class="form-group">
            <label for="idCategoria">Selecciona la Categoria</label>
            <select class="form-control" id="idCategoria" placeholder="Marcas...">
            </select>
        </div>
        
        <div class="form-group">
            <label for="idTipo">Selecciona el Tipo</label>
            <select class="form-control" id="idTipo" placeholder="Tipo de Producto">
            </select>
        </div>
        

        
        <div class="form-group">
            <label for="idProveedor">Selecciona el Proveedor</label>
            <select class="form-control" id="idProveedor" placeholder="Proveedores">
            </select>
        </div>
        
        
        
        <div class="form-group">
            <label for="idEmpresaResponsable">Selecciona el ID del Responsable</label>
            <select class="form-control" id="idEmpresaResponsable" placeholder="Responsable">
            </select>
        </div>
        
        <div class="form-group">
            <label for="idEstado">Estado</label>
            <select class="form-control" id="idEstado" placeholder="ESTADO DEL PRODUCTO">
            </select>
        </div>
    `
}

// Modelo para Categoría de Activo
export class CategoriaActivo {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
    template = `
    <div class="form-group">
        <label for="id">ID</label>
        <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
    </div>

    <div class="form-group">
        <label for="Nombre">Nombre</label>
        <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre de la Categoria">
    </div>
    
    `
}

// Modelo para Marcas
export class Marca {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
    template = `
    <div class="form-group">
        <label for="id">ID</label>
        <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
    </div>

    <div class="form-group">
        <label for="Nombre">Nombre</label>
        <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre de la Marca">
    </div>
    
    `
}

// Modelo para Tipo de Persona
export class TipoPersona {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
    template = `
    <div class="form-group">
        <label for="id">ID</label>
        <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
    </div>

    <div class="form-group">
        <label for="Nombre">Nombre</label>
        <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre de Tipo Persona">
    </div>
    
    `
}

// Modelo para Tipo de Movimiento de Activo
export class TipoMovimientoActivo {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
    template = `
    <div class="form-group">
        <label for="id">ID</label>
        <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
    </div>

    <div class="form-group">
        <label for="Nombre">Nombre</label>
        <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre de Tipo Movimiento Activo">
    </div>
    
    `
}

// Modelo para Tipo de Activo
export class TipoActivo {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
    template = `
    <div class="form-group">
        <label for="id">ID</label>
        <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
    </div>

    <div class="form-group">
        <label for="Nombre">Nombre</label>
        <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre de Tipo Activo">
    </div>
    
    `
}

// Modelo para Estado
export class Estado {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
    template = `
    <div class="form-group">
        <label for="id">ID</label>
        <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
    </div>

    <div class="form-group">
        <label for="Nombre">Nombre</label>
        <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre de Tipo Activo">
    </div>
    
    `
}

// Modelo para Proveedor
export class Proveedor {
    constructor(id, Nombre, Email) {
        this.id = id;
        this.Nombre = Nombre;
        this.Email = Email;
    }
    template = `
    <div class="form-group">
        <label for="id">ID</label>
        <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
    </div>

    <div class="form-group">
        <label for="Nombre">Nombre</label>
        <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre de Tipo Activo">
    </div>

    <div class="form-group">
        <label for="Email">Email</label>
        <input class="form-control" id="Email" placeholder="Ingresa el Correo Electrónico">
    </div>
    
    `
}

// Modelo para Historial de Activo
export class HistorialActivo {
    constructor(id, idActivo, Fecha, idResponsable, idEstado) {
        this.id = id;
        this.idActivo = idActivo;
        this.Fecha = Fecha;
        this.idResponsable = idResponsable;
        this.idEstado = idEstado;
    }
    template = `
        <div class="form-group">
            <label for="id">ID</label>
            <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
        </div>

        <div class="form-group">
            <label for="fecha">Fecha</label>
            <input type="date" class="form-control" id="fecha" placeholder="Ingresa la Fecha">
        </div>

        <div class="form-group">
            <label for="idResponsable">Responsable</label>
            <select class="form-control" id="idResponsable">
                <!-- Opciones del select -->
            </select>
        </div>

        <div class="form-group">
            <label for="estado">Estado</label>
            <select class="form-control" id="estado">
                <!-- Opciones del select -->
            </select>
        </div>
    `;
}

// Modelo para Teléfono de Persona
export class TelefonoPersona {
    constructor(id, Nro, ubicacion, idPersona) {
        this.id = id;
        this.Nro = Nro;
        this.ubicacion = ubicacion;
        this.idPersona = idPersona;
    }
    template = `
        <div class="form-group">
            <label for="id">ID</label>
            <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
        </div>

        <div class="form-group">
            <label for="numero">Número</label>
            <input class="form-control" id="numero" placeholder="Ingresa el Número de Teléfono">
        </div>

        <div class="form-group">
            <label for="ubicacion">Ubicación</label>
            <input class="form-control" id="ubicacion" placeholder="Ingresa la Ubicación">
        </div>

        <div class="form-group">
            <label for="persona">Persona</label>
            <input class="form-control" id="persona" placeholder="Ingresa el ID de la Persona">
        </div>
    `;
}

// Modelo para Asignación
export class Asignacion {
    constructor(id, Fecha, idResponsable) {
        this.id = id;
        this.Fecha = Fecha;
        this.idResponsable = idResponsable;
    }
    template = `
        <div class="form-group">
            <label for="id">ID</label>
            <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
        </div>

        <div class="form-group">
            <label for="fecha">Fecha</label>
            <input type="date" class="form-control" id="fecha" placeholder="Ingresa la Fecha">
        </div>

        <div class="form-group">
            <label for="idResponsable">ID RESPONSABLE</label>
            <select class="form-control" id="idResponsable">
                <!-- Opciones del select -->
            </select>
        </div>
    `;
}

// Modelo para Personas
export class Persona {
    constructor(id, Nombre, Email, idTipoPersona) {
        this.id = id;
        this.Nombre = Nombre;
        this.Email = Email;
        this.idTipoPersona = idTipoPersona;
    }
    template = `
        <div class="form-group">
            <label for="id">ID</label>
            <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
        </div>

        <div class="form-group">
            <label for="Nombre">Nombre</label>
            <input class="form-control" id="Nombre" placeholder="Ingresa el Nombre">
        </div>

        <div class="form-group">
            <label for="Email">Email</label>
            <input class="form-control" id="Email" placeholder="Ingresa el Correo Electrónico">
        </div>

        <div class="form-group">
            <label for="idTipoPersona">Tipo Persona</label>
            <select class="form-control" id="idTipoPersona">
                <!-- Opciones del select -->
            </select>
        </div>
    `;
}

// Modelo para Detalle de Movimiento
export class DetalleMovimiento {
    constructor(id, Fecha, idActivo, Comentario, idAsignacion) {
        this.id = id;
        this.Fecha = Fecha;
        this.idActivo = idActivo;
        this.Comentario = Comentario;
        this.idAsignacion = idAsignacion;
    }
    template = `
        <div class="form-group">
            <label for="id">ID</label>
            <input disabled class="form-control" id="id" placeholder="Ingresa el ID">
        </div>

        <div class="form-group">
            <label for="fecha">Fecha</label>
            <input type="date" class="form-control" id="fecha" placeholder="Ingresa la Fecha">
        </div>

        <div class="form-group">
            <label for="idActivo">ID ACTIVO</label>
            <select class="form-control" id="idActivo">
                <!-- Opciones del select -->
            </select>
        </div>

        <div class="form-group">
            <label for="Comentario">Comentario</label>
            <input class="form-control" id="Comentario" placeholder="Ingresa el Comentario">
        </div>

        <div class="form-group">
            <label for="idAsignacion">ID ASIGNACION</label>
            <select class="form-control" id="idAsignacion">
                <!-- Opciones del select -->
            </select>
        </div>
    `;
}

export function getModel(type) {
    
    switch (type) {
        case 'idActivo':
            return new Activo();
        case 'CategoriaActivo':
            return new CategoriaActivo();
        case 'idMarca':
            return new Marca();
        case 'TipoPersona':
            return new TipoPersona();
        case 'TipoMovimientoActivo':
            return new TipoMovimientoActivo();
        case 'TipoActivo':
            return new TipoActivo();
        case 'idEstado':
            return new Estado();
        case 'Proveedor':
            return new Proveedor();
        case 'HistorialActivo':
            return new HistorialActivo();
        case 'TelefonoPersona':
            return new TelefonoPersona();
        case 'Asignacion':
            return new Asignacion();
        case 'idResponsable':
            return new Persona();
        case 'DetalleMovimiento':
            return new DetalleMovimiento();
        default:
            throw new Error(`Modelo '${type}' no encontrado`);
    }
}