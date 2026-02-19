# Bioenergética V4 — Documento Base del Proyecto

**Instituto Centrobioenergetica · Dr. Miguel Ojeda Rios**
Repositorio: https://github.com/4ailabs/bioenergeticaV4

---

## Archivos del Proyecto

| Archivo | Descripción |
|---|---|
| `index.html` | Página principal / landing page pública |
| `styles.css` | Todo el CSS del sitio principal |
| `script.js` | JavaScript: menú, animaciones, countdown, FAQ, tooltips |
| `alumnos.html` | Portal privado de alumnos (login + contenido) |
| `bioenergetica V4.png` | Imagen de fondo del hero |
| `.gitignore` | Excluye archivos que no van al repositorio |

---

## Sistema de Diseño

### Paleta de Colores

| Token | Dark | Light | Uso |
|---|---|---|---|
| `--bg` | `#060b12` | `#f4f1ec` | Fondo principal |
| `--bg-alt` | `#09101c` | `#ede8e0` | Fondo alternativo / cards |
| `--jade` | `#00c9a0` | `#007d64` | Acento principal |
| `--amber` | `#d4834a` | `#a85520` | Acento secundario / fechas |
| `--silver` | `#dde8f0` | `#111827` | Texto principal |
| `--muted` | `#99b0c0` | `#4b5a6e` | Texto secundario |

### Tipografía

| Variable | Fuente | Uso |
|---|---|---|
| `--font-display` | Playfair Display (Google Fonts) | Títulos y headings |
| `--font-mono` | Space Mono (Google Fonts) | Labels, tags, contadores |
| `--font-body` | DM Sans (Google Fonts) | Texto corrido |

### Tema por defecto
- El sitio **inicia en light mode** por defecto
- El usuario puede cambiar con el botón sol/luna (header)
- La preferencia se guarda en `localStorage`

---

## Estructura de la Página Principal (index.html)

### Secciones en orden:

1. **Header / Nav** — Logo, links de navegación, botón Alumnos, toggle de tema, menú hamburguesa móvil
2. **Hero** — Título BIOENERGÉTICA V4, subtítulo, fechas, botón "Ver Programa Completo", barra de cupo limitado
3. **Intro** — Marco conceptual, estadísticas animadas (19.5 hrs, 15 módulos, 10 fases)
4. **¿Este curso es para ti?** — 4 tarjetas con perfiles en lenguaje cotidiano
5. **Marquee animado** — Frases de transformación en bucle
6. **Programa** (3 Jornadas) — Con subtítulos en lenguaje simple y tooltips en términos técnicos
7. **Cartografía de las Dinámicas** — Los 7 patrones de supervivencia (H1–H7)
8. **Modalidad** — Híbrida presencial + online, qué incluye, información general
9. **Áreas de Aplicación** — 8 tags de áreas de vida
10. **¿Ya tomaste una versión anterior?** — Diferencias exclusivas de V4
11. **FAQ** — 5 preguntas frecuentes con accordion
12. **CTA / Inscripción** — Countdown, botón WhatsApp, micro-copy
13. **Footer** — Cita del Dr. Miguel Ojeda Rios
14. **Botón "volver arriba"** — Aparece al bajar 400px

---

## Funcionalidades JavaScript

### Countdown Timer
Apunta a la fecha de inicio del curso. Para actualizarla:
```js
// script.js — línea aprox. 195
const COURSE_DATE = new Date('2026-02-21T10:00:00');
```
Cambiar la fecha cuando haya nueva edición.

### Barra de Cupo Limitado
Texto editable directamente en el HTML:
```html
<!-- index.html -->
<span class="cupo-count">Solo quedan <strong>6 lugares</strong></span>
```
La barra se anima al 70% cuando entra en pantalla.

### Tooltips en Términos Técnicos
Al pasar el cursor (desktop) o tocar (móvil) sobre términos técnicos aparece una definición. Están marcados con:
```html
<span class="term" data-tip="Definición aquí">Término</span>
```
Términos activos: TAME, Bioelectricidad, campo bioeléctrico colectivo, Test muscular, O-ring, transgeneracional, Impronta, Somato-Emocional.

### FAQ Accordion
5 preguntas que se abren/cierran al hacer click. Editar directamente en el HTML en la sección `<!-- FAQ -->`.

### Menú Móvil
Hamburguesa → sidebar desde la derecha. Se cierra tocando el fondo oscuro o el botón X (z-index 1001 para que se vea sobre el sidebar).

---

## Portal de Alumnos (alumnos.html)

### Acceso
- **URL:** `/alumnos.html`
- **Contraseña actual:** `bioenergetica2026`
- Para cambiarla, editar en `alumnos.html`:
```js
const ACCESS_PASSWORD = 'bioenergetica2026';
```

### Sesión
- Usa `sessionStorage` — al cerrar el navegador hay que volver a ingresar
- El tema sigue la misma lógica que el sitio principal (light por defecto)

### Módulos del Portal
| Módulo | Estado actual |
|---|---|
| Manual Bioenergética V4 | Disponible (link pendiente) |
| Grabaciones de Sesiones | Próximamente |
| Protocolos de Sesión | Disponible (link pendiente) |
| Mapeo Relacional | En preparación |
| Las 7 Improntas | Disponible (link pendiente) |
| Consultas WhatsApp | Disponible → wa.me/525579076626 |

Para activar un módulo, cambiar el `href="#"` por el link real y el estado de la tarjeta.

---

## Datos de Contacto e Inscripción

| Dato | Valor |
|---|---|
| WhatsApp | +52 55 7907 6626 |
| Link WhatsApp | `https://wa.me/525579076626` |
| Email | contacto@institutocentrobioenergetica.com |

---

## Fechas del Curso (Edición 2026)

| Jornada | Fecha | Tema |
|---|---|---|
| 01 | Sábado 21 de febrero | El Cuerpo como Sistema de Inteligencia Distribuida |
| 02 | Sábado 7 de marzo | Improntas de Supervivencia |
| 03 | Sábado 21 de marzo | Protocolo de Sesión e Integración |

Horario: 10:00 a 18:00 h · Comida: 14:00 a 15:30 h

---

## GitHub y Despliegue

### Repositorio
```
https://github.com/4ailabs/bioenergeticaV4
```

### Subir cambios
```bash
cd "/Users/miguel/Bioenergetica/Bioenergetica Programa"
git add archivo.html archivo.css archivo.js
git commit -m "descripción del cambio"
git push
```

### Desplegar en Vercel
Vercel CLI ya instalado y autenticado como `4ailabs`.
```bash
cd "/Users/miguel/Bioenergetica/Bioenergetica Programa"
vercel --name bioenergetica-v4
```

---

## Contenido de Referencia

El contenido del programa está en:
- `content.txt` — fuente original del programa (no se sube a GitHub)

---

## Próximos Pasos Pendientes

- [ ] Conectar módulos del portal a contenido real (PDFs, links de grabaciones)
- [ ] Activar despliegue en Vercel con dominio propio
- [ ] Actualizar fechas cuando haya nueva edición
- [ ] Actualizar número de lugares disponibles en la barra de cupo
- [ ] Agregar credenciales individuales por alumno (futura versión del portal)
