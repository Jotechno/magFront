const express = require('express');
const app = express();
const path  = require('path');
const hbs = require('hbs');


const port = 8081;

// Definición carpeta documentos estáticos
app.use(express.static('public'));

// Configuración motor de plantillas
app.set('views', path.join(__dirname + '/public/views'));

app.set('view engine', 'hbs');

// Definición ruta de documentos parciales
hbs.registerPartials(__dirname + '/public/views/partials');

app.listen(port, () => {
    console.log('listening on port ' + port);
});

// Página de login

app.get('/', (req, res) => {
    
    res.render('login', { 
        titulo: 'CosmeTIC',
        user_name: 'Julian Carreño', 
        consecutivo: 'Login'
    });
})


// Página de login

app.get('/dashboard', (req, res) => {
    
    res.render('dashboard', { 
        titulo: 'CosmeTIC',
        user_name: 'Julian Carreño', 
        consecutivo: 'Login',
        subtitulo:'Dashboard'
    });
})

// Página de inicio

app.get('/home', (req, res) => {
    
    res.render('home', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'Home'
    });
})


// Página de Registro de empleado

app.get('/registroEmpleados', (req, res) => {
    
    res.render('Empleados/registroEmpleados', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'registroEmpleados',
        subtitulo:'Registro de Empleados'
    });
})

// Página de Registro de producto
app.get('/registroProductos', (req, res) => {
    
    res.render('Productos/registroProductos', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'registroProductos',
        subtitulo:'Registro de Productos'
    });
})

// Página de Empleados

app.get('/empleados', (req, res) => {

    const empleados = [
    { 
        id_Empleado: 1, 
        cedula:11519353,
        nombre_Empleado: 'julian',  
        correo:'julian@gmail.com',
        direccion:'avenida 32#49a-135',
        telefono:'315809981',
        estado_Empleado: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Empleado: 2, 
        cedula:11519353,
        nombre_Empleado: 'julian',  
        correo:'julian@gmail.com',
        direccion:'avenida 32#49a-135',
        telefono:'3158099813',
        estado_Empleado: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Empleado: 3, 
        cedula:11519353,
        nombre_Empleado: 'julian',  
        correo:'julian@gmail.com',
        direccion:'avenida 32#49a-135',
        telefono:'3158099813',
        estado_Empleado: 'Activo',
        observacion:'esta laborando actualmente'
    }];
    res.render('Empleados/empleados', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'Empleados',
        lista_empleados: empleados
    });
})

// Página de Productos

app.get('/productos', (req, res) => {

    const productos = [
    { 
        id_Producto: 1, 
        id_Categoria: 1, 
        nombre_Producto: 'labial',  
        cantidad:6,
        stock_Maximo:30,
        stock_Minimo:10,
        precio_Costo:10000,
        precio_Venta:15000,
        ganancia:5000,
        estado_Producto: 'Activo'
    },{ 
        id_Producto: 1, 
        id_Categoria: 1, 
        nombre_Producto: 'base',  
        cantidad:6,
        stock_Maximo:30,
        stock_Minimo:10,
        precio_Costo:10000,
        precio_Venta:15000,
        ganancia:5000,
        estado_Producto: 'Activo'
    },{ 
        id_Producto: 1, 
        id_Categoria: 1, 
        nombre_Producto: 'pestañina',  
        cantidad:6,
        stock_Maximo:30,
        stock_Minimo:10,
        precio_Costo:10000,
        precio_Venta:15000,
        ganancia:5000,
        estado_Producto: 'Activo'
    }];
    res.render('Productos/productos', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'Productos',
        lista_productos: productos
    });

    
})

//pagina registro Catergoria
app.get('/registroCategorias', (req, res) => {
    
    res.render('Categorias/registroCategorias', { 
        titulo : 'CosmeTIC',
        user_name : 'Marcela Morales', 
        consecutivo: 'registroCategorias'
    });
})



// pagina de categorias

app.get('/categorias', (req, res) => {

    const Categorias = [
    { 
        id_proveedor: 1,
        nombre_categoria: 'Labiales',  
        estado_categoria: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_proveedor: 2,
        nombre_categoria: 'Bases',  
        estado_categoria: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_proveedor: 3,
        nombre_categoria: 'Cuidado Personal',  
        estado_categoria: 'Activo',
        observacion:'esta laborando actualmente'
    }];
    res.render('Categorias/categorias', { 
        titulo : 'CosmeTIC | Categorias',
        user_name : 'Marcela Morales', 
        consecutivo: 'Categorias',
        lista_categorias: Categorias
    });
})

// compras

app.get('/compras', (req, res) => {

    const compras = [
    { 
        id_compra: 1, 
        id_proveedor: 'Marcela Morales', 
        numero_factura: 1229,  
        fecha_compra:02-05-2023,
        fecha_registro:03-05-2023,
        total_compra:102.000,
        estado_compra: 'Activo'
    },{ 
        id_compra: 2, 
        id_proveedor: 'Natalia Marulanda', 
        numero_factura: 1230,  
        fecha_compra:02-03-2023,
        fecha_registro:03-03-2023,
        total_compra:234.000,
        estado_compra: 'Activo'
    },{ 
        id_compra: 3, 
        id_proveedor: 'Andres Jaramillo', 
        numero_factura: 1231,  
        fecha_compra:05-04-2023,
        fecha_registro:06-04-2023,
        total_compra:420.000,
        estado_compra: 'Activo'
    }];
    res.render('Compras/compras', { 
        titulo : 'CosmeTIC | Productos',
        user_name : 'Marcela Morales', 
        consecutivo: 'Compras',
        lista_compras: compras
    });
})

// Página de Compra
app.get('/registrarCompra', (req, res) => {
    
    res.render('Compras/registrarCompra', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'registrarCompra',
        subtitulo:'Registro Compras'
    });
})

//Página de proveeedores
app.get('/proveedores', (req, res) => {

    const proveedores = [
    ];
    res.render('Proveedores/proveedores', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'Proveedores',
        lista_proveedores: proveedores
    });
})

app.get('/registroProveedores', (req, res) => {
    
    res.render('Proveedores/registroProveedores', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'registroProveedores',
        subtitulo:'Registro Proveedores '
    });
})

app.get('/editarProveedores', (req, res) => {
    res.render('Proveedores/editarProveedores', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'editarProveedores',
        subtitulo:'Editar Proveedores'
    });
})
//Página de pagos

app.get('/pagos', (req, res) => {

    const pagos = [
];
    res.render('Pagos/pagos', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'Pagos',
        lista_pagos: pagos
    });
})

app.get('/registroPagos', (req, res) => {
    
    res.render('Pagos/registroPagos', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'registroPagos',
        subtitulo:'Registro Pagos'
    });
})

app.get('/editarPagos', (req, res) => {
    res.render('Pagos/editarPagos', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'editarPagos',
        subtitulo:'Editar Pagos'
    });
})

//pagina de comisioines

app.get('/comisiones', (req, res) => {

    const comisiones = [
    ];
    res.render('Comisiones/comisiones', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'Comisiones',
        lista_comisiones: comisiones
    });
})

app.get('/registroComisiones', (req, res) => {
    
    res.render('Comisiones/registroComisiones', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'registroComisiones',
        subtitulo:'Registro Comisiones'
    });
})

app.get('/editarComisiones', (req, res) => {
    res.render('Comisiones/editarComisiones', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'editarComisiones',
        subtitulo:'Editar Comisiones'
    });
})


// Página de Usuarios

app.get('/usuarios', (req, res) => {

    const usuarios = [
    { 
        id_Usuario: 1, 
        id_Rol:1,
        id_Empleado: 1,  
        nombre_Usuario:'magasi10',
        correo_Usuario :'mariana@gmail.com',
        estado_Usuario: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Usuario: 2, 
        id_Rol:2,
        id_Empleado: 2,  
        nombre_Usuario:'macelita9',
        correo_Usuario :'marcela@gmail.com',
        estado_Usuario: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Usuario: 3, 
        id_Rol:3,
        id_Empleado: 3,  
        nombre_Usuario:'julianC1',
        correo_Usuario :'julian@gmail.com',
        estado_Usuario: 'Activo',
        observacion:'esta laborando actualmente'
    }];
    res.render('Usuarios/usuarios', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'Usuarios',
        lista_usuarios: usuarios
    });
})


// Página de clientes

app.get('/clientes', (req, res) => {

    const clientes = [
    { 
        id_Cliente: 1, 
        nit_O_Cedula_Cliente :1000438876,
        nombre_Cliente: 'Carlos Emilio ',  
        apellido_Cliente:'Jaramillo Caicedo',
        correo_Cliente :'carlos@gmail.com',
        telefono_Cliente: 3218505801,
        direccion_Cliente:'calle 55 #44-56',
        estado_Cliente: 'Activo',
        observacion:'ninguna'
    },{ 
        id_Cliente: 2, 
        nit_O_Cedula_Cliente :9830438876,
        nombre_Cliente: 'Variedades la negra ',  
        apellido_Cliente:'Variedades la negra',
        correo_Cliente :'variedadeslanegra@gmail.com',
        telefono_Cliente: 3218505802,
        direccion_Cliente:'calle 44 #64-56',
        estado_Cliente: 'Activo',
        observacion:'ninguna'
    },{ 
        id_Cliente: 3, 
        nit_O_Cedula_Cliente :9693456723,
        nombre_Cliente: 'Casa de lau ',  
        apellido_Cliente:'Casa de lau',
        correo_Cliente :'casadelau@gmail.com',
        telefono_Cliente: 3218505861,
        direccion_Cliente:'calle 13 #44-56',
        estado_Cliente: 'Activo',
        observacion:'ninguna'
    }];
    res.render('Clientes/clientes', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'Clientes',
        lista_clientes: clientes
    });
})


// Página de devoluciones

app.get('/devoluciones', (req, res) => {

    const devoluciones = [
    { 
        id_Devolucion: 1, 
        fecha_Devolucion:'10/05/2023',
        id_Detalle_Venta: 1,  
        id_Producto:1,
        cantidad_Devuelta :1,
        motivo_Devolucion: 'Malo',
        devolver_Inventario:'Si'
    },{ 
        id_Devolucion: 2, 
        fecha_Devolucion:'11/05/2023',
        id_Detalle_Venta: 2,  
        id_Producto:2,
        cantidad_Devuelta :2,
        motivo_Devolucion: 'Malo',
        devolver_Inventario:'Si'
    },{ 
        id_Devolucion: 3, 
        fecha_Devolucion:'12/05/2023',
        id_Detalle_Venta: 3,  
        id_Producto:3,
        cantidad_Devuelta :3,
        motivo_Devolucion: 'Quebrado',
        devolver_Inventario:'Si'
    }];
    res.render('Devoluciones/devoluciones', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'Devoluciones',
        lista_devoluciones: devoluciones
    });
})

// Página de Registro de usuario

app.get('/registroUsuario', (req, res) => {
    
    res.render('Usuarios/registroUsuario', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'registroUsuario',
        subtitulo:'Registro de Usuario'
    });
})


//Registro de Clientes 
app.get('/registroClientes', (req, res) => {
    
    res.render('Clientes/registroClientes', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'registroClientes',
        subtitulo:'Registro Clientes'
    });
})


//Registro de Devoluciones 
app.get('/registroDevoluciones', (req, res) => {
    
    res.render('Devoluciones/registroDevoluciones', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'registroDevoluciones',
        subtitulo:'Registro Devoluciones'
    });
})

// Página de Roles

app.get('/roles', (req, res) => {

    const roles = [
        { 
            id_rol: 1, 
            nombre_rol: 'Administrador', 
            descripcion_rol: 'El administrador se encarga del manejo total del sistema', 
            estado_rol: 'Activo'
        },{ 
            id_rol: 2, 
            nombre_rol: 'Secretaria',   
            descripcion_rol: 'La secretaria se encarga del manejo de contabilidad', 
            estado_rol: 'Activo'
        },{ 
            id_rol: 3, 
            nombre_rol: 'Vendedor',  
            descripcion_rol: 'El vendedor se encarga de la realización de ventas', 
            estado_rol: 'Activo'
        }];
    res.render('Roles/roles', { 
        titulo : 'CosmeTIC | Roles',
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Roles',
        lista_roles : roles
    });
})

app.get('/registroRoles', (req, res) => {

    const modulos = [
        { 
            nombre_modulo: 'Dashboard'
        },{ 
            nombre_modulo: 'Usuarios'
        },{ 
            nombre_modulo: 'Proveedores'
        },{ 
            nombre_modulo: 'Compras'
        },{ 
            nombre_modulo: 'Categorias de Productos'
        },{ 
            nombre_modulo: 'Productos'
        },{ 
            nombre_modulo: 'Clientes'
        },{ 
            nombre_modulo: 'Empleados'
        },{ 
            nombre_modulo: 'Pedidos'
        },{ 
            nombre_modulo: 'Ventas'
        },{ 
            nombre_modulo: 'Pagos'
        },{ 
            nombre_modulo: 'Devoluciones'
        },{ 
            nombre_modulo: 'Comisiones'
        }];
    res.render('Roles/registroRoles', { 
        titulo : 'CosmeTIC | Nuevo Rol', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Roles',
        lista_modulos : modulos
    });
})

// Página de Pedidos

app.get('/pedidos', (req, res) => {

    const pedidos = [
        { 
            id_pedido: 1,
            num_pedido: 1, 
            cliente: 'Variedades la negra',  
            empleado: 'Cristian Urrego', 
            fecha_pedido: '14/03/2023', 
            fecha_entrega: '15/03/2023', 
            tipo_pago: 'Crédito', 
            total_pedido: 250000, 
            estado_pedido: 'Entregado'
        },{ 
            id_pedido: 2,
            num_pedido: 2, 
            cliente: 'Makro',  
            empleado: 'Marcela Morales', 
            fecha_pedido: '09/05/2023', 
            fecha_entrega: '', 
            tipo_pago: 'Crédito', 
            total_pedido: 450000, 
            estado_pedido: 'Por entregar'
        },{ 
            id_pedido: 3,
            num_pedido: 3, 
            cliente: 'Papelería Colores',  
            empleado: 'Alejandro Cañas', 
            fecha_pedido: '10/05/2023', 
            fecha_entrega: '10/05/2023', 
            tipo_pago: 'Contado', 
            total_pedido: 100000, 
            estado_pedido: 'Entregado'
        }];
    res.render('Pedidos/pedidos', { 
        titulo : 'CosmeTIC | Pedidos', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Pedidos',
        lista_pedidos : pedidos
    });
})

app.get('/registroPedidos', (req, res) => {

    res.render('Pedidos/registroPedidos', { 
        titulo : 'CosmeTIC | Nuevo Pedido', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Registrar Pedido',
    });
})

// Página de Ventas

app.get('/ventas', (req, res) => {

    const ventas = [
        {   
            id_venta: 1,
            id_pedido: 1,
            num_pedido: 1, 
            cliente: 'Variedades la negra',  
            empleado: 'Cristian Urrego', 
            fecha_venta: '15/03/2023', 
            tipo_pago: 'Crédito', 
            total_venta: 250000, 
            estado_venta: 'Por pagar'
        },{   
            id_venta: 2,
            id_pedido: 2,
            num_pedido: 2, 
            cliente: 'MAKRO',  
            empleado: 'Marcela Morales', 
            fecha_venta: '10/05/2023', 
            tipo_pago: 'Crédito', 
            total_venta: 450000, 
            estado_venta: 'Por pagar'
        },{   
            id_venta: 3,
            id_pedido: 3,
            num_pedido: 3   , 
            cliente: 'Papeleria Colores',  
            empleado: 'Alejandro Cañas', 
            fecha_venta: '10/05/2023', 
            tipo_pago: 'Contado', 
            total_venta: 100000, 
            estado_venta: 'Pagado'
        }];
    res.render('Ventas/ventas', { 
        titulo : 'CosmeTIC | Ventas', 
        user_name : 'Alejandro Cañas', 
        consecutivo: 'Ventas',
        lista_ventas : ventas
    });
})

