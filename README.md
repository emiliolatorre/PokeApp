![portada](/public/PokeApp-header.png)
# PokeApp
PokeApp es una aplicación diseñada para buscar tus pokemon favoritos y poder crear tu propio pokemon. Los usuarios podrán ver por defecto los principales pokemon o buscar los suyos, pudiendo además ver una vista detalle con los stats de cada uno. PokeApp está desplegada en render. [https://pokeapp-1p4y.onrender.com/](https://pokeapp-1p4y.onrender.com/)

## Objetivos
- ✅ **Diseño del Frontend:** Diseño utilizando la libreria sass por componentes (variables, mixins).
- ✅ **Componentes:**  Generación de componentes solicitados conforme a la estructura de src/componentes.
- ✅ **Generación de Rutas:**  Generación con React-router-dom y redirecciones con Link.
- ✅ **useState:**  Utilización de useState para guardar estados en un componente y sibling-to-sibling.
- ✅ **useEffect:**  Utilización de useEffect para realizar funciones como fetch a la PokeApi.
- ✅ **useContext:**  Utilización de useContext para proveer Context y consumirlo desde otro componente.
- ✅ **Funcionalidades:**  Renderizado por defecto, buscador, vista detalle, y creador de pokemons.
- ✅ **Despliegue:** Despliegue de la aplicación en Render.

## Tecnologías
- ⚙️ **Frontend:** React, JSXm, HTML, librería SASS.
- ⚙️ **Cloud:** Render.
- ⚙️ **Librerias:** React-Hook-Form, Material UI, React-Loader-Spinner.

## Funcionalidades Principales
  - **Renderiza en Home** por defecto de los 20 primeros pokemon.
  - **Buscador** de pokemons, que se van guardando en Home durante la sesión.
  - **Vista general** en Home y **Vista detalle** al seleccionar el nombre del Pokemon
  - **Creador** de tus propios Pokemon en Create your Pokemon, se guardan en Home durante la sesión.
  - **Boton Reset** en Home para vaciar Context y volver a renderizar los 20 primeros pokemon.

## Estructura de Carpetas
- **node_modules/:** Contiene las dependencias del proyecto instaladas con npm.
- **public/:** Carpeta para archivos estáticos públicos.
- **src/:** Carpeta principal del código fuente del proyecto.
    - **components/:** Carpeta que contiene los componentes reutilizables de la aplicación.
        - **Footer/:** Componente de pie de página.
        - **Header/:** Componente de encabezado.
        - **Main/:** Componente principal de la aplicación.
            - **Details/:** Subcomponente que maneja la vista detalle.
            - **Formulario/:** Subcomponente que maneja el formulario para dar de alta pokemons.
            - **Home/:** Subcomponente que maneja la home.
                - **ListaPokemon/:** Subcomponente de Home que maneja la vista general pokemons.
                    - **CardPokemon/:** Subcomponente que maneja las cards pokemon de Home.
                - **Search/:** Subcomponente de Home que maneja el buscador.
    - **context/:** carpeta que contiene los Context inciados.
    - **styles/:** carpeta que continene los stilos SASS por componente.
- **App.jsx:** Componente principal de la aplicación.
- **main.jsx:** Archivo principal para iniciar la aplicación.
- **.eslintrc.cjs:** Archivo de configuración para ESLint.
- **.gitignore:** Archivo para especificar qué archivos y carpetas deben ser ignorados por Git.
- **index.html:** Archivo HTML principal.
- **package-lock.json:** Archivo que mantiene un registro de las versiones exactas de las dependencias instaladas.
- **package.json:** Archivo de configuración del proyecto que contiene scripts y dependencias.
- **README.md:** Archivo de documentación del proyecto.
- **vite.config.js:** Archivo de configuración para Vite.

## Autor
- Emilio Latorre Guerra
