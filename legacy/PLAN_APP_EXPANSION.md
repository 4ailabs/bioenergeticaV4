# Plan de Expansión — App Bioenergética V4

**Fecha:** 21 Feb 2026
**Autor:** Claude para Dr. Miguel Ojeda Rios

---

## Inventario de contenido disponible

| Bloque | Base Conocimiento | Manual Alumno | Prompts (M2+M3) | Presentación |
|--------|:-:|:-:|:-:|:-:|
| TAME | ✅ | — | ✅ | ✅ .pptx + .pdf |
| Bloque 1 | ✅ | ✅ | ✅ | ✅ .pptx + .pdf (×2) |
| Bloque 2 | ✅ | ✅ | ✅ | ✅ .pptx + .pdf |
| Bloque 3 | ✅ | ✅ | ✅ | ✅ .pptx + .pdf |
| Bloque 4 | ✅ | ✅ | ✅ | ✅ .pptx + .pdf (×2) |
| Bloque 5 | ✅ | ✅ | ✅ | ❌ pendiente |
| Bloque 6 | ✅ | ✅ | ✅ | ❌ pendiente |
| Bloque 7 | ✅ | ✅ | ✅ | ❌ pendiente |
| Bloque 8 | ✅ | ✅ | ✅ | ❌ pendiente |

**Total: 47 archivos de contenido listos.**

---

## Propuesta: 3 líneas de trabajo

### LÍNEA 1 — Reestructurar el Portal de Alumnos

**Problema actual:** 6 tarjetas genéricas con enlaces muertos (`href="#"`).
**Solución:** Reemplazar con estructura real que refleje las 3 jornadas y sus bloques.

**Nueva estructura del portal:**

```
Portal Alumnos
├── Bienvenida + instrucciones
├── JORNADA 01 — El Cuerpo como Sistema (21 Feb)
│   ├── TAME: Marco Científico Fundacional
│   ├── Bloque 1: Inteligencia Distribuida
│   ├── Bloque 2: Cuatro Niveles de Procesamiento
│   ├── Bloque 3: Bioelectricidad No-Neuronal
│   ├── Bloque 4: Campo Bioeléctrico Colectivo
│   ├── Bloque 5: Aislamiento y Patrones de Supervivencia
│   ├── Bloque 6: Test Muscular como Herramienta Clínica
│   ├── Bloque 7: Tres Canales de Acceso al Nivel 3
│   └── Bloque 8: Cartografía de las Dinámicas
├── JORNADA 02 — Improntas de Supervivencia (7 Mar)  [bloqueada]
├── JORNADA 03 — Protocolo e Integración (21 Mar)    [bloqueada]
└── Recursos Generales
    ├── Manual completo
    ├── Consultas WhatsApp
    └── Glosario interactivo
```

**Cada tarjeta de bloque incluye:**
- Título del bloque
- Descripción en 1 línea
- Botones: 📄 Manual del Alumno · 📊 Presentación · 📚 Base de Conocimiento
- Estado: Disponible / Próximamente
- Los archivos se alojan en la carpeta `Modulo 1/Bloque X/` y se enlazan directamente

**Implementación:** Modificar `alumnos.html` directamente (es autocontenido, CSS+JS inline).

**Esfuerzo estimado:** ~2 horas de trabajo de código.

---

### LÍNEA 2 — Crear página dedicada por Módulo (opcional)

**Idea:** Una página `modulo1.html` que funcione como "aula virtual" del Día 1.

**Contenido:**
- Línea de tiempo visual del día (MAÑANA → TARDE, 8 bloques)
- Cada bloque expandible con resumen + enlaces a materiales
- Sección de práctica con instrucciones de la tarea semanal
- Glosario interactivo con todos los términos técnicos del día

**Ventaja:** Experiencia más rica que solo tarjetas con descargas.
**Desventaja:** Más código que mantener. Solo vale la pena si se van a crear módulos 2 y 3 después.

**Recomendación:** Hacerlo SOLO si quieres que el portal sea una experiencia de aprendizaje, no solo un repositorio de archivos. Si es repositorio → Línea 1 es suficiente.

**Esfuerzo estimado:** ~3-4 horas por módulo.

---

### LÍNEA 3 — Mejorar la Landing Page

**Mejoras posibles al `index.html`:**

1. **Sección "El Facilitador"** — Bio del Dr. Miguel Ojeda Rios con foto, credenciales, enfoque. Genera confianza antes de la inscripción.

2. **Testimonios / Resultados** — Si hay testimonios de versiones anteriores (V1-V3), agregar sección con quotes.

3. **Actualizar countdown** — Hoy es 21 Feb 2026, que es la fecha del curso (`COURSE_DATE`). Si ya pasó la Jornada 01, el countdown debería apuntar a Jornada 02 (7 Mar) o mostrar "Jornada 01 completada".

4. **Actualizar cupo** — Los 6 lugares del hero pueden necesitar actualización.

5. **Sección "Qué dicen los alumnos"** — Social proof para futuras ediciones.

**Esfuerzo estimado:** ~1-2 horas según cuántas secciones.

---

## Recomendación de prioridades

| Prioridad | Tarea | Impacto | Esfuerzo |
|:-:|---|---|---|
| 🔴 1 | Reestructurar portal con bloques reales (Línea 1) | Alto — los alumnos acceden HOY | ~2h |
| 🟡 2 | Actualizar countdown y cupo en landing (Línea 3.3-3.4) | Medio — coherencia del sitio | ~15min |
| 🟢 3 | Sección "Facilitador" en landing (Línea 3.1) | Medio — confianza | ~30min |
| 🔵 4 | Página por módulo (Línea 2) | Alto si escalas a M2 y M3 | ~3-4h |

---

## Lo que puedo hacer YO vs lo que necesitas TÚ

| Yo puedo | Tú necesitas |
|---|---|
| Escribir todo el HTML/CSS/JS | Subir a GitHub (`git push`) |
| Crear nuevas páginas | Desplegar en Vercel (`vercel`) |
| Restructurar el portal completo | Decidir si los .docx/.pdf se sirven desde el repo o desde otro hosting |
| Agregar secciones a la landing | Proveer foto/bio para sección facilitador |
| Actualizar textos, fechas, cupo | Proveer testimonios si los hay |

**Nota sobre archivos:** Los .docx y .pdf se pueden servir directamente desde el repo de GitHub/Vercel. Basta con ponerlos en la carpeta y enlazarlos con rutas relativas como `Modulo 1/Bloque 1/Bloque1_Manual_Alumno.docx`. Vercel los sirve como archivos estáticos.

---

## ¿Siguiente paso?

Dime cuál línea quieres que ejecute primero y arranco.
