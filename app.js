// app.js

document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroMesa = document.getElementById('numeroMesa').value;
    const entrada = document.getElementById('entrada').value;
    const platoPrincipal = document.getElementById('platoPrincipal').value;
    const postre = document.getElementById('postre').value;

    const itemsPedido = [];
    if (entrada) itemsPedido.push({ categoria: 'entrada', nombre: entrada });
    if (platoPrincipal) itemsPedido.push({ categoria: 'plato_principal', nombre: platoPrincipal });
    if (postre) itemsPedido.push({ categoria: 'postre', nombre: postre });

    realizarPedido(numeroMesa, itemsPedido);

    // Limpiar selecciones después de enviar el formulario
    document.getElementById('entrada').selectedIndex = 0;
    document.getElementById('platoPrincipal').selectedIndex = 0;
    document.getElementById('postre').selectedIndex = 0;
});

document.getElementById('mostrarPedidos').addEventListener('click', mostrarPedidos);
document.getElementById('mostrarIngresos').addEventListener('click', mostrarIngresos);
document.getElementById('mostrarPedidosPorMesa').addEventListener('click', mostrarPedidosPorMesa);
