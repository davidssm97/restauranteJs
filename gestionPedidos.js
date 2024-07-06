// gestionPedidos.js

// Productos disponibles en el restaurante
const productos = {
    entrada: [
        { nombre: "Sopa", precio: 5000 },
        { nombre: "Ensalada", precio: 4000 },
        { nombre: "Bruschetta", precio: 6000 },
        { nombre: "Empanadas", precio: 5000 },
        { nombre: "Patacones", precio: 4500 },
        { nombre: "Arepas", precio: 5500 },
        { nombre: "Chorizo", precio: 7000 },
        { nombre: "Yuca Frita", precio: 4000 },
        { nombre: "Ceviche", precio: 8000 },
        { nombre: "Queso Fundido", precio: 6500 }
    ],
    plato_principal: [
        { nombre: "Pasta", precio: 12000 },
        { nombre: "Pizza", precio: 10000 },
        { nombre: "Pollo", precio: 15000 },
        { nombre: "Bandeja Paisa", precio: 16000 },
        { nombre: "Ajiaco", precio: 14000 },
        { nombre: "Lechona", precio: 15000 },
        { nombre: "Sancocho", precio: 13000 },
        { nombre: "Cazuela de Mariscos", precio: 18000 },
        { nombre: "Lomo Saltado", precio: 17000 },
        { nombre: "Arroz con Pollo", precio: 11000 }
    ],
    postre: [
        { nombre: "Tiramisú", precio: 7000 },
        { nombre: "Helado", precio: 5000 },
        { nombre: "Fruta", precio: 4000 },
        { nombre: "Flan", precio: 6000 },
        { nombre: "Pastel de Tres Leches", precio: 7500 },
        { nombre: "Arroz con Leche", precio: 5500 },
        { nombre: "Brownie", precio: 6500 },
        { nombre: "Cheesecake", precio: 8000 },
        { nombre: "Mousse de Chocolate", precio: 7000 },
        { nombre: "Gelatina", precio: 3500 }
    ]
};

// Pedidos realizados durante el día
let pedidos = [];

// Acumulado de ingresos por tipo de comida
let ingresos = {
    entrada: 0,
    plato_principal: 0,
    postre: 0
};

// Contador de pedidos por mesa
let pedidosPorMesa = {};

function realizarPedido(numeroMesa, itemsPedido) {
    let total = 0;
    let detalle = [];

    itemsPedido.forEach(item => {
        const categoria = item.categoria;
        const producto = productos[categoria].find(p => p.nombre === item.nombre);
        if (producto) {
            detalle.push({ ...producto });
            total += producto.precio;
            ingresos[categoria] += producto.precio;
        }
    });

    pedidos.push({ numeroMesa, detalle, total });

    if (pedidosPorMesa[numeroMesa]) {
        pedidosPorMesa[numeroMesa]++;
    } else {
        pedidosPorMesa[numeroMesa] = 1;
    }
}

function mostrarPedidos() {
    let output = "Listado de todos los pedidos realizados:\n";
    pedidos.forEach(pedido => {
        output += `Mesa: ${pedido.numeroMesa}, Pedido: ${JSON.stringify(pedido.detalle)}, Total a pagar: ${pedido.total} COP\n`;
    });
    document.getElementById("output").innerText = output;
}

function mostrarIngresos() {
    const ingresosOrdenados = Object.entries(ingresos).sort((a, b) => b[1] - a[1]);
    let output = "Ingresos por tipo de comida:\n";
    ingresosOrdenados.forEach(([categoria, total]) => {
        output += `${categoria}: ${total} COP\n`;
    });
    document.getElementById("output").innerText = output;
}

function mostrarPedidosPorMesa() {
    const pedidosOrdenados = Object.entries(pedidosPorMesa).sort((a, b) => b[1] - a[1]);
    let output = "Cantidad de pedidos por mesa:\n";
    pedidosOrdenados.forEach(([mesa, cantidad]) => {
        output += `Mesa ${mesa}: ${cantidad} pedidos\n`;
    });
    document.getElementById("output").innerText = output;
}
