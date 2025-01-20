# Eventigo

Este proyecto es una aplicación web creada para ayudar a los organizadores de eventos a diseñar y personalizar entradas para sus festivales y eventos. Permite crear entradas de forma interactiva, eligiendo categorías, completando formularios con detalles del evento, y generando una vista previa de la entrada. Al final, el usuario puede compartir la entrada en redes sociales.

## Características

- **Landing Page**: Página de bienvenida donde los usuarios pueden empezar a crear su entrada. Con el botón "Crear entrada", se accede a la siguiente página en la que se pueden rellenar los datos.
![Es una captura de pantalla del landing de la web](landing-captura.png)
- **Elige una categoría**: La aplicación permite elegir entre tres categorías (gastronomía, cine y música). Dependiendo de la selección, el fondo de la entrada cambia para reflejar la categoría elegida.
- **Rellena el formulario**: En esta sección, puedes rellenar diferentes campos que se verán reflejados en la entrada. Los campos incluyen nombre del evento, precio, ubicación, fechas, etc.
![Es una captura de pantalla del formulario de la web](formulario-captura.png)
- **Vista Previa en Tiempo Real**: Mientras rellenas el formulario, puedes ver los cambios reflejados en tiempo real tanto en los campos como en el fondo y tipografía de la entrada según la categoría seleccionada.
- **Opción para Compartir**: Una vez completado el formulario, puedes compartir la entrada. Si todos los campos están correctamente rellenados, se abrirá un link con la entrada en una nueva ventana a pantalla completa. Si algún campo está vacío, aparecerá un mensaje de error y se te pedirá que completes todos los campos.
![Es una captura de pantalla del apartado de comparte de la web](comparte-captura.png)
- **Botón de Reset**: Hemos añadido un botón de reset que limpia por completo todos los campos del formulario y la tarjeta de previsualización, permitiéndote empezar de nuevo con el formulario.

## Tecnologías Usadas

- **HTML**: Estructura de la página. Se han utilizado *partials* para dividir el código en componentes más pequeños y facilitar su comprensión.
- **SCSS**: Se ha usado SCSS para desarrollar el diseño y estilo visual, aprovechando *partials*, variables y mixins para facilitar futuros cambios en colores o tipografías.
- **JavaScript**: La parte interactiva de la web está construida en JavaScript. También hemos utilizado *partials* para organizar mejor el código según las distintas funcionalidades y páginas del proyecto.

## Instalación

Sigue estos pasos para instalar el proyecto en tu máquina local:

1. Clona el repositorio:
   **git clone** https://github.com/Clautropolis/project-promo-B-module-2-team-2.git

2. Una vez clonado el repositorio, debes instalar el proyecto con **npm install** y para verlo en tiempo real debes escribir en la consola **npm start**.

## Autoras
Este proyecto ha sido realizado por:
- Tania Salvatella
- Maria José García
- Andrea Buezas
- Ainara Hermoso
- Claudia Rodríguez
