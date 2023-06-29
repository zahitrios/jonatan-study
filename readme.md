Tipos de programación que veremos en el curso:

1. Web / Mobile -> Para acercarnos a los está viviendo el mundo real
2. Desktop -> Nos va a servir para desarrollar la lógica de programación

---

28 Junio

COMANDOS GIT

-   Clonar (copiar todos los archivos) el repositorio a tu máquina
    `git clone https://github.com/zahitrios/jonatan-study.git`

-   Hacer un branch (esto lo hará a partir de la rama en la que estás posicionado)
    `git branch -b jonas-branch`

-   Moverte entre ramas
    `git checkout NOMBRE_DE_LA_RAMAS`

-   Hacer un stage (en este ejemplo el . significa todos los archivos)
    `git add .`

-   Hacer un commit (el mensaje es una breve descripción de lo que estás subiendo)
    `git commit -m 'mensaje de tu commit'`

-   "Empujar" tu código al respositorio
    `git push`

-   "Jalar" el código del repositorio
    `git pull`

-   Verificar que archivos se han modificad
    `git status`

-   Verificar en que rama estás
    `git status`

---

21 Junio

-   Sandbox: zona de pruebas o de juego https://codesandbox.io/
-   padding: sangria, del elemento hacia adentro
-   margin: margen, del elemento hacia afuera

-   Hay propiedad en css que tiene valores de: top right bottom left
    estas propiedades se pueden abreviar con solo dos valores: topRight bottomLeft
    o con un solo valor si todos van a ocupar lo mismo

-   boilerplate: es la repetición de código

-   clases anidadas CSS

TODO:
Investigar la diferencia entre unidades rem, virtual, pixeles y porcentajes
Instalar git en la computadora
Replicar el siguiente diseño: https://zahit-todo-react.netlify.app/
Mantener el código identado

Extensiones de VSCODE:
https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css

---

19 Junio (Web y Mobile)

-   Navegador (Chrome, Safari,Firefox, Edge, Brave, Opera)
-   HTML, CSS y Javascript

    -   HTML - Lenguaje?
        Hypertext Markup Language
        """""para que pudiera ser un lenguaje debería de tener estructuras de control"""""

        -   Las estructuras de control en los lenguajes básicas son:

            -   IF (decisión entre verdadero y falso)
            -   Ciclos ( WHILE (hacer hasta), DO WHILE (hacer mientras) )

        -   Todas las etiquetas de html tienen la siguente estructura
            <nombreEtiqueta>CONTENIDO</nombreEtiqueta>
            inicio - contenido - cierre
        -   Todo siempre va dentro de una etiqueta, no hay elementos "volando"
        -   Las etiquetas pueden tener propiedades, que a su vez tienen nombre y valor,
            <nombreEtiqueta prop1="value1" prop2="value1" prop3="value3">CONTENIDO</nombreEtiqueta>
        -   Hay etiquetas que se pueden cerrar de una forma abreviada
            <nombreEtiqueta />

    -   Cascading StyleSheets
        -   Dar estilo al HTML: Poner color de letras, tamaños, imágenes, tipografías, etc.
        -   Una clase en CSS es un bloque de código que muchos elementos de html pueden tomar

-   Devtools
-   Ejercicios

-   Todas las interacciones comienzan con el cliente (osea el navegador)
    -   Websockets es un escenario particular que puede hacer que el servidor detone la comunicación

TODO:

-   Investigar que es camell case y snake case
