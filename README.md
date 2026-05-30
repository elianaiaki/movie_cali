# 🎬 MovieCali

> Plataforma web de reseñas y trailers de películas y series. Explorá fichas técnicas, mirá trailers y leé o escribí opiniones de la comunidad cinéfila.

<div align="center">
  <img width="3780" height="1890" alt="logo" src="https://github.com/user-attachments/assets/ce2322cd-c755-40d8-bd2d-2bb648a47c71" />

  Plataforma web de reseñas y trailers de películas y series. Explorá fichas técnicas, mirá trailers y leé o escribí opiniones de la comunidad cinéfila.
</div>


---

## Descripción del Proyecto

**MovieCali** es una aplicación web orientada a los amantes del cine que quieren informarse antes de decidir qué ver. La plataforma **no es un servicio de streaming**: su propósito es ser una guía comunitaria donde los usuarios pueden explorar fichas técnicas completas, ver trailers oficiales y leer o escribir reseñas sobre películas y series.

La idea central es que la comunidad sea el motor del sitio. Cualquier visitante puede navegar el catálogo y leer opiniones; quienes se registran pueden participar activamente calificando títulos, publicando sus propias reseñas y guardando favoritos para armar su historial personal.

El sitio está organizado en tres entornos claramente diferenciados:

| Entorno | Descripción | Acceso |
|--------|-------------|--------|
| **Internet** | Portal público de exploración, trailers y reseñas | Cualquier visitante |
| **Extranet** | Espacio personal para usuarios registrados | Usuarios con cuenta |
| **Intranet** | Panel de administración y gestión de contenido | Administradores |

---

## Integrantes

| Nombre | Rol |
|--------|-----|
| Eliana Salvo | Desarrollo Extranet / internet |
| Alan Walker | Desarrollo Internet / internet |
| Gabriel Mayor | Desarrollo Internet |
| Diego Ponce | Desarrollo Extranet |
| Gisella Jara | Desarrollo Intranet |
| Brenda Pavez | Desarrollo Intranet |

---

## Entornos y Funcionalidades

### 🔓 Internet — Entorno Público

Accesible sin registro. El objetivo es que cualquier persona pueda descubrir contenido, ver trailers y leer lo que la comunidad opina de cada título, sin barreras de entrada.

**Página de inicio**
- Carrusel de películas y series destacadas con póster, título, sinopsis breve y botón para ver más
- Navegación principal con buscador, acceso al catálogo de películas y series, y menú desplegable

**Catálogo de películas y series**
- Organizado por géneros, cada uno como sección independiente
- Tarjetas interactivas con póster, título, calificación general y duración (o número de temporadas en el caso de series)
- Cada tarjeta redirige a la página de detalle del título

**Página de detalle de película / serie**
- Póster en tamaño destacado junto con título y sinopsis completa
- Datos técnicos: género, año, duración, director, productores, calificación general, clasificación por edad y plataforma donde está disponible
- Sección de **trailer** embebido, reproducible directamente en la página
- Sección de **elenco** con fotos circulares y nombres de los actores
- **Reseñas destacadas** de la comunidad con acceso al listado completo
- **Contenido relacionado**: sugerencias de títulos similares al pie de página

**Buscador con filtros**
- Búsqueda por título
- Filtros por género, año de estreno, calificación, reparto y clasificación por edad

**Reseñas de usuarios**
- Cualquier visitante puede leer todas las reseñas de un título sin necesidad de cuenta
- Para escribir, reaccionar (Me gusta / No me gusta), comentar o reportar una reseña, se requiere iniciar sesión

---

### 🔐 Extranet — Entorno Privado (Usuarios Registrados)

Requiere inicio de sesión. Convierte al usuario en un participante activo de la comunidad, permitiéndole generar contenido propio e interactuar con el de otros.

#### Autenticación
- Inicio de sesión con usuario/email y contraseña, o mediante Google
- Registro con usuario, correo electrónico, contraseña y confirmación
- Recuperación de contraseña desde la pantalla de login

#### Mi Perfil
Centro de control del usuario. Muestra un resumen completo de su actividad en la plataforma:
- Foto de perfil, nombre de usuario y biografía
- Estadísticas: número de reseñas publicadas, promedio de calificaciones, mejor nota otorgada y películas vistas en el año
- Vista previa de las cuatro secciones principales (Calificaciones, Favoritas, Mis Reseñas, Reseñas Favoritas) con acceso rápido a cada una
- Botón **Editar Perfil**

#### Editar Perfil
- Cambio de foto de perfil
- Actualización de nombre de usuario, email, contraseña (con confirmación) y biografía
- Gestión de géneros favoritos mediante etiquetas que pueden agregarse o eliminarse individualmente
- Botón **Guardar cambios** o cancelar para volver al perfil sin modificaciones

#### Mis Calificaciones
El usuario puede calificar películas y series con un puntaje del 1 al 10 sin necesidad de escribir una reseña. El sistema organiza automáticamente las calificaciones en secciones:
- ⭐⭐⭐⭐⭐ **Excelentes** — puntaje 8 a 10
- ⭐⭐⭐⭐ **Muy buenas** — puntaje 6 a 7
- ⭐⭐⭐ **Buenas** — puntaje 4 a 5
- ⭐⭐ **Regular o menos** — puntaje 1 a 3

Permite ordenar el contenido por fecha más reciente, mayor nota o título alfabético.

#### Mis Películas Favoritas
- Grilla de todas las películas guardadas como favoritas, con la fecha en que fueron agregadas
- Botón `+` al final de la lista para agregar nuevos títulos directamente desde esta sección, sin necesidad de ir al catálogo
- Ordenamiento por fecha de agregado, título o calificación

#### Mis Reseñas
- Tarjetas con el póster del título, la calificación otorgada y un extracto del comentario
- Botón **Ver más** que abre un modal con la reseña completa, permitiendo:
  - Volver a calificar el título
  - **Editar** la reseña (abre un formulario dentro del mismo modal)
  - **Eliminar** la reseña
- Las reseñas son públicas: otros usuarios pueden darle Me gusta, No me gusta y comentar

#### Reseñas Favoritas
- Reseñas de otros usuarios guardadas para consultarlas más tarde
- Se distinguen visualmente con un ícono de ⭐ dorada en la esquina superior de cada tarjeta
- Botón **Borrar** individual para eliminarla de la lista
- Ordenamiento por fecha guardada, mayor nota o título

#### Aside de Sugerencias
- Panel lateral presente en todas las páginas del entorno Extranet
- Muestra recomendaciones personalizadas basadas en los géneros favoritos configurados en el perfil
- Cada sugerencia incluye imagen, género y título; al presionar redirige a la página de detalle

---

### 🛠️ Intranet — Panel de Administración

Acceso exclusivo para administradores y moderadores. Gestión integral del catálogo de contenido y los usuarios del sitio.

#### Inicio de sesión (Intranet)
- Formulario independiente de usuario/correo y contraseña
- Al autenticarse, redirige directamente al panel de administración

#### Mi Perfil (Administrador)
- Dashboard central con estadísticas globales: total de catálogos, cantidad de películas, revisiones pendientes
- Resumen de usuarios gestionados, usuarios activos y administradores totales
- Historial de actividad reciente del sistema
- Acceso directo a Gestión de Catálogo y Administración de Usuarios

#### Gestión de Catálogo — ABM de Películas y Series
- **Películas / Series pendientes de revisión**: formulario completo por título con sinopsis, reparto, trailer, género, duración, año, calificaciones y plataformas disponibles
- **Nuevas solicitudes de alta**: revisión y aprobación o rechazo de contenido nuevo enviado al sistema
- **Agregar nueva película / serie**: formulario de carga desde cero
- **Agregar nuevo actor**: gestión del elenco de forma independiente
- **Filtros avanzados** sobre el listado de contenido
- **Panel de actividad reciente**: registro de últimas ediciones, aprobaciones y cambios en el catálogo
- **Switch de publicación**: control de estado borrador → pendiente de autorización → publicado y visible para el usuario final

#### Administración de Usuarios
- **Gestión de perfiles y roles**: listado completo de usuarios con opciones de editar, eliminar y ver historial detallado
- **Panel de alta de perfiles**: solicitudes de nuevos usuarios con opciones de Dar Alta, Denegar o Ver Perfil
- **Crear nuevo perfil**: alta manual de personal o administradores sin depender del registro público
- **Panel de gestión de reportes de reseñas**: los reportes se organizan por tipo (spoiler, spam, lenguaje inapropiado, etc.) y estado (pendiente / en revisión / resuelto). Cada reporte muestra el contenido reportado, el usuario denunciante y el usuario reportado, con acciones rápidas para ignorar, sancionar o eliminar la reseña

---

## 🗂️ Contenido Gestionado por el Sistema

Cada entrada del catálogo (película o serie) almacena:

| Campo | Detalle |
|-------|---------|
| Título | Nombre oficial del contenido |
| Sinopsis | Descripción de la trama |
| Género | Uno o varios géneros asociados |
| Año de estreno | Año de lanzamiento |
| Duración | En minutos (películas) |
| Cantidad de temporadas | Solo para series |
| Director | Nombre del director |
| Productores | Créditos de producción |
| Reparto / Elenco | Actores principales con foto |
| Calificación general | Promedio de las calificaciones de usuarios |
| Clasificación por edad | Apta para todo público, +13, +16, etc. |
| Trailer | URL del trailer oficial |
| Imágenes | Póster y material visual asociado |
| Plataforma | Servicio donde está disponible para ver |

---

## ✅ Reglas de Negocio Principales

- No se pueden cargar títulos sin nombre ni género
- El año de estreno debe ser un valor válido; la duración se expresa en minutos
- Cada entrada del catálogo debe tener al menos un recurso multimedia (imagen o trailer)
- No se permiten títulos duplicados en el sistema
- Las calificaciones deben estar entre 1 y 10
- El email de cada usuario debe ser único
- Un usuario solo puede editar o eliminar sus propias reseñas y calificaciones
- No se permiten duplicados en la lista de favoritos
- No se pueden escribir reseñas sin estar autenticado
- Las acciones de reaccionar, comentar y reportar reseñas también requieren sesión activa

---

## 🎨 Diseño y Maquetado

Las maquetas fueron desarrolladas en dos etapas:

1. **Maquetado Estructural** — wireframes en blanco y negro que definen la disposición y jerarquía de los elementos en cada pantalla
2. **Maquetado Visual** — aplicación de la paleta de colores (azules y grises con acentos dorados), tipografía y estilos definitivos

El **header** es consistente en todos los entornos. El único elemento variable es el menú desplegable, que adapta sus opciones según el estado de sesión:

| Estado | Opciones del desplegable |
|--------|--------------------------|
| Sin sesión (Internet) | Iniciar Sesión / Crear Cuenta |
| Con sesión (Extranet) | Mi Perfil · Mis Calificaciones · Mis Reseñas · Mis Películas Favoritas · Reseñas Favoritas · Cerrar Sesión |
| Administrador (Intranet) | Perfil · Películas Pendientes de Revisión · Nuevas Solicitudes de Alta · Gestión de Perfiles y Roles · Crear Nuevo Perfil · Cerrar Sesión |

---

## 📁 Estructura del Proyecto

```
MovieCali/
│
├── .vscode/                        # Configuración del editor
│
├── estilos/                        # Hojas de estilo CSS separadas por entorno
│   ├── internet/
│   ├── extranet/
│   └── intranet/
│
├── extranet/                       # Páginas HTML del entorno Extranet
│    └── funcionalidades/        # específicos por funcionalidad (perfil, reseñas, favoritos, etc.)
│
├── internet/                       # Páginas HTML del entorno Internet
│    └── detalles/                  # detalles especificos de cada pelicula
│
├── intranet/                       # Páginas HTML del entorno Intranet
│
├── recursos/                       # Archivos estáticos del sitio
│   ├── archivos/
│   ├── imagenes/
│   └── videos/
│
├── scripts/                        # Archivos JavaScript separados por entorno
│   ├── internet_scrips/
│   ├── extranet_scrips/
│   └── intranet_scrips/
│
└── index.html                      # Punto de entrada principal (página de bienvenida)
```

---

> _MovieCali — Trabajo Práctico de Programación Web 1_
