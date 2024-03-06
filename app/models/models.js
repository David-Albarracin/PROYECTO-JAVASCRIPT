// Modelo para activos
export class Activo {
    constructor(id, CodTransaccion, NroFormulario, idMarca, idCategoria, idTipo, ValorUnitario, idProveedor, NroSerial, idEmpresaResponsable, idEstado) {
        this.id = id;
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

// Modelo para Categoría de Activo
export class CategoriaActivo {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
}

// Modelo para Marcas
export class Marca {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
}

// Modelo para Tipo de Persona
class TipoPersona {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
}

// Modelo para Tipo de Movimiento de Activo
export class TipoMovimientoActivo {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
}

// Modelo para Tipo de Activo
export class TipoActivo {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
}

// Modelo para Estado
export class Estado {
    constructor(id, Nombre) {
        this.id = id;
        this.Nombre = Nombre;
    }
}

// Modelo para Proveedor
export class Proveedor {
    constructor(id, Nombre, Email) {
        this.id = id;
        this.Nombre = Nombre;
        this.Email = Email;
    }
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
}

// Modelo para Teléfono de Persona
export class TelefonoPersona {
    constructor(id, Nro, ubicacion, idPersona) {
        this.id = id;
        this.Nro = Nro;
        this.ubicacion = ubicacion;
        this.idPersona = idPersona;
    }
}

// Modelo para Asignación
export class Asignacion {
    constructor(id, Fecha, idResponsable) {
        this.id = id;
        this.Fecha = Fecha;
        this.idResponsable = idResponsable;
    }
}

// Modelo para Personas
export class Persona {
    constructor(id, Nombre, Email, idTipoPersona) {
        this.id = id;
        this.Nombre = Nombre;
        this.Email = Email;
        this.idTipoPersona = idTipoPersona;
    }
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
}
