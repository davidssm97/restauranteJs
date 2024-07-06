Gestión de Pedidos en un Restaurante
Este proyecto es una aplicación simple desarrollada en HTML, CSS y JavaScript que permite a un restaurante gestionar los pedidos de sus clientes. Los clientes pueden realizar pedidos combinando diferentes tipos de comida (entradas, platos principales, postres), y al finalizar el día se pueden generar reportes de los pedidos realizados, ingresos por tipo de comida y cantidad de pedidos por mesa.

Funcionalidades
Realizar Pedidos:

Los clientes pueden seleccionar entradas, platos principales y postres desde formularios desplegables.
Cada pedido se asocia con un número de mesa ingresado manualmente.
Reportes:

Mostrar un listado de todos los pedidos realizados durante el día, incluyendo el número de mesa, detalle del pedido y total a pagar.
Mostrar ingresos acumulados por tipo de comida (entradas, platos principales, postres), ordenados de mayor a menor.
Mostrar la cantidad de pedidos realizados por cada mesa, ordenados de mayor a menor.
Tecnologías Utilizadas
HTML5
CSS3 (incluyendo Flexbox para el diseño)
JavaScript (ES6)
Estructura del Proyecto
|-- index.html        # Archivo principal HTML que contiene la estructura de la página
|-- styles.css        # Hoja de estilos CSS para estilizar la aplicación
|-- app.js            # Archivo JavaScript que contiene la lógica de la aplicación
|-- gestionPedidos.js # Archivo JavaScript con datos de productos y funciones para gestionar pedidos
|-- README.md         # Archivo actual que estás leyendo

Cómo Interactuar con la Aplicación
Realizar un Pedido:

Abre index.html en tu navegador.
Ingresa el número de mesa en el campo correspondiente.
Selecciona una entrada, un plato principal y un postre de las opciones disponibles en los desplegables.
Haz clic en "Realizar Pedido". Los detalles del pedido se mostrarán en la lista de pedidos realizados.
Generar Reportes:

Después de realizar pedidos, puedes generar diferentes tipos de reportes:
Mostrar Pedidos: Muestra un listado detallado de todos los pedidos realizados.
Mostrar Ingresos: Muestra los ingresos totales acumulados por tipo de comida.
Mostrar Pedidos por Mesa: Muestra la cantidad de pedidos realizados por cada mesa.
Personalización
Puedes personalizar los productos disponibles y sus precios editando el archivo gestionPedidos.js.
Para ajustar el diseño y la apariencia, modifica el archivo styles.css.