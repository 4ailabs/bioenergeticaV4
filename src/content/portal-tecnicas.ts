export interface TecnicaData {
  id: string
  num: string
  title: string
  iconSvg: string
  badges: { label: string; variant?: 'amber' | 'jade' }[]
  ideaCentral: string
  indicaciones: string[]
  protocolo: { title: string; description: string }[]
  fraseClave: string
  practicasCasa: string[]
}

export const tecnicas: TecnicaData[] = [
  {
    id: 'tecnica-01',
    num: 'T01',
    title: 'Cirugía del Corazón Emocional',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    badges: [
      { label: 'TAME 3-4', variant: 'amber' },
      { label: '25-35 min' },
    ],
    ideaCentral: 'Trabaja sobre los campos bioeléctricos del tejido cardíaco. El duelo no resuelto y el trauma de abandono crean \u201Cpatrones de memoria tisular\u201D: configuraciones estables de Vmem que el sistema mantiene como referencia homeostática, aunque sean disfuncionales.',
    indicaciones: ['Duelo no resuelto', 'Trauma de abandono', 'Corazón cerrado', 'Incapacidad de confiar'],
    protocolo: [
      { title: 'Localización y contacto:', description: 'Llevar la atención al corazón anatómico. Activar sensaciones somáticas reales. Identificar la herida.' },
      { title: 'Extracción simbólica:', description: 'Con luz como bisturí, extraer la carga emocional congelada capa por capa.' },
      { title: 'Limpieza y espacio:', description: 'Localizar el contenido emocional específico. El cliente experimenta el vacío como posibilidad.' },
      { title: 'Instalación del tejido nuevo:', description: 'Instalar amor propio, apertura o el recurso necesario. Nunca dejar un campo vacío.' },
      { title: 'Propagación sistémica:', description: 'El pulso del corazón nuevo se expande: ojos, manos, pies. Todo el campo recibe la información.' },
      { title: 'Cierre:', description: 'Cerrar capas en orden inverso, sellando con luz dorada. Anclar el estado.' },
    ],
    fraseClave: '\u201CEste corazón nuevo tiene diferente relación con el dolor. Puede sentir \u2014 pero ya no está atrapado. Puede amar \u2014 pero ya no desde el miedo.\u201D',
    practicasCasa: [
      'Mano sobre el pecho 3 minutos antes de dormir. Observar sin analizar.',
      'Notar en el día cuándo el corazón \u201Cse cierra\u201D \u2014 situación, sensación, respuesta automática.',
      'Escribir: \u201C¿Qué le diría a mi corazón si pudiera hablarle directamente?\u201D',
    ],
  },
  {
    id: 'tecnica-02',
    num: 'T02',
    title: 'Recalibración del Sistema Nervioso',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    badges: [
      { label: 'TAME 2-3', variant: 'amber' },
      { label: '20-30 min' },
    ],
    ideaCentral: 'El SNA opera como regulación bioeléctrica de Nivel 2. En clientes con ansiedad crónica, el setpoint se ha desplazado hacia la hiperactivación permanente. La pendulación reconfigura el setpoint del Vmem hacia un rango adaptativo.',
    indicaciones: ['Ansiedad crónica', 'PTSD', 'Hipervigilancia', 'Insomnio de activación'],
    protocolo: [
      { title: 'Mapeo del estado actual:', description: 'Escaneo corporal. Nivel de activación 0-10. Localización anatómica.' },
      { title: 'Identificación del recurso:', description: 'Lugar, postura o sensación que represente calma. Amplificar hasta que sea vívido.' },
      { title: 'El dial / pendulación:', description: 'Imaginar un dial 0-10. Oscilar entre activación (30s) y recurso (60s). Repetir 3-6 veces.' },
      { title: 'Descarga:', description: 'Permitir respuestas físicas: temblor, suspiro, movimiento. No interrumpir.' },
      { title: 'Nuevo setpoint:', description: 'Instalar que este estado de calma es el estado natural. Anclar con gesto + frase: \u201CMi sistema puede aquí.\u201D' },
    ],
    fraseClave: '\u201CTu termostato se quedó atascado en \u201Calto\u201D. No es una falla. Es una respuesta de supervivencia que funcionó en algún momento. Hoy vamos a recalibrarlo.\u201D',
    practicasCasa: [
      'Práctica del dial: 3 veces al día, 2 minutos. Antes de comer es ideal.',
      'Registrar en qué momentos del día el dial sube a 7 o más. ¿Qué lo activa?',
      'Antes de dormir: escaneo de pies a cabeza. Notar qué está tenso y respirar hacia ese lugar.',
    ],
  },
  {
    id: 'tecnica-03',
    num: 'T03',
    title: 'Diálogo de Silla Vacía con Partes',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="8" y="14" width="8" height="7"/></svg>',
    badges: [
      { label: 'TAME 3-4', variant: 'amber' },
      { label: '30-45 min' },
    ],
    ideaCentral: 'Las \u201Cpartes\u201D son subsistemas bioeléctricos con patrones de Vmem propios. El conflicto interno es dos campos bioeléctricos con metas diferentes compitiendo. La Silla C (Self como mediador) activa el Nivel 4: el sistema completo como árbitro.',
    indicaciones: ['Conflictos internos', 'Ambivalencia crónica', 'Auto-sabotaje', 'Autocrítica severa'],
    protocolo: [
      { title: 'Identificación de las partes:', description: 'Identificar el conflicto y las dos voces principales. Nombrarlas. Asignar una silla a cada una.' },
      { title: 'Silla A \u2014 Primera parte:', description: 'Dar voz a esa parte en primera persona: qué quiere, qué teme, cuándo apareció.' },
      { title: 'Silla B \u2014 Segunda parte:', description: 'La segunda parte responde. 2-3 ciclos hasta que expresen su necesidad central.' },
      { title: 'Silla C \u2014 El Self como mediador:', description: 'Desde el observador, ver ambas partes y preguntar: ¿pueden colaborar en lugar de competir?' },
      { title: 'Acuerdo y cierre:', description: 'Nivel de entendimiento. Cerrar con gesto físico de integración.' },
    ],
    fraseClave: '\u201CEl Self ha hablado. Y ambas partes fueron escuchadas. Eso es lo que hace posible el cambio.\u201D',
    practicasCasa: [
      'Carta desde el Self: escribir una carta dirigida a la parte más crítica, desde el observador compasivo.',
      'Diario de partes: 3 días, anotar cuándo aparece cada parte y qué quiere.',
      'Práctica del observador: al surgir conflicto interno, pausar y preguntar: ¿cuáles son las dos partes?',
    ],
  },
  {
    id: 'tecnica-04',
    num: 'T04',
    title: 'Limpieza del Filtro Emocional',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"/></svg>',
    badges: [
      { label: 'TAME 2-3', variant: 'amber' },
      { label: '20-25 min' },
    ],
    ideaCentral: 'Cuando las señales emocionales no pueden procesarse, los gap junctions reducen su permeabilidad causando acumulación local: el tejido queda \u201Csaturado\u201D. El dolor crónico sin causa orgánica es frecuentemente la expresión somática de esta saturación.',
    indicaciones: ['Saturación emocional', 'Embotamiento', 'Dolor crónico sin causa', 'Pesadez física'],
    protocolo: [
      { title: 'Estado del filtro:', description: '¿Cuánto está lleno (0-10)? ¿De qué? Localizar en el cuerpo: color, temperatura, textura.' },
      { title: 'Proceso de limpieza:', description: 'Imaginar el filtro físicamente. Limpiar capa por capa. Enjuagar con luz clara.' },
      { title: 'Descarga:', description: 'Exhalaciones largas, movimiento sutil. No dirigir \u2014 acompañar.' },
      { title: 'Restauración:', description: '¿Qué color tiene el filtro limpio? Amplificar la sensación de capacidad restaurada.' },
      { title: 'Anclaje:', description: '\u201CEl filtro está limpio, puedo procesar.\u201D Gesto físico de acceso.' },
    ],
    fraseClave: '\u201CLo que entra, se procesa. Lo que se procesa, sale. Sin acumulación.\u201D',
    practicasCasa: [
      'Limpieza vespertina: 5 min antes de la cena. \u201C¿Qué me llevo del día que no es mío?\u201D Soltar con exhalación.',
      'Registro del estado del filtro: mañana y noche (0-10). Observar patrón semanal.',
      'Identificar el \u201Ccontaminante\u201D más frecuente: ¿qué o quién llena más el filtro?',
    ],
  },
  {
    id: 'tecnica-05',
    num: 'T05',
    title: 'Actualización de Software Mental',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9l6 6m0-6l-6 6"/></svg>',
    badges: [
      { label: 'TAME 3-4', variant: 'amber' },
      { label: '15-40 min' },
    ],
    ideaCentral: 'Las creencias limitantes son \u201Catractores bioeléctricos\u201D estables: configuraciones de Vmem que el sistema prefiere mantener porque representan energía mínima. No destruimos el sistema \u2014 reescribimos el programa que lo dirige.',
    indicaciones: ['Creencias limitantes', 'Narrativas rígidas', 'Voz crítica interna', 'Baja autoestima'],
    protocolo: [
      { title: 'Identificación del software viejo:', description: 'Identificar la creencia con precisión. Cuanto más específica, más efectivo.' },
      { title: 'Rastreo del origen:', description: '¿Cuándo se instaló? ¿Quién lo instaló? \u201CEse programa tiene [X] años corriendo.\u201D' },
      { title: 'Desinstalación simbólica:', description: 'Ver el software como código con etiqueta. Extraerlo, reconocer su función, archivarlo.' },
      { title: 'Escritura del nuevo software:', description: 'Nueva creencia: específica, positiva, verificable y verdadera. Barra de progreso: 25%... 100%.' },
      { title: 'Instalación multimodal:', description: 'Verbal (se dice), somático (se respira), visual (se imagina actuando desde ella).' },
      { title: 'Verificación:', description: '¿Hay resistencia? Anclar con gesto físico.' },
    ],
    fraseClave: '\u201CFue útil en su momento \u2014 te protegió de algo. Pero ya no es la versión que tu sistema necesita hoy.\u201D',
    practicasCasa: [
      'Leer la nueva creencia en voz alta 3 veces cada mañana. Observar dónde hay apertura y dónde resistencia.',
      'Diario de evidencias: cada día, anotar una situación que sea evidencia de la nueva creencia.',
      'Identificar cuándo el software viejo intenta activarse. Solo notar: \u201CAhí está el viejo programa.\u201D',
    ],
  },
  {
    id: 'tecnica-06',
    num: 'T06',
    title: 'Remodelación de Arquitectura Corporal',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/></svg>',
    badges: [
      { label: 'TAME 2-3', variant: 'amber' },
      { label: '25-35 min' },
    ],
    ideaCentral: 'El trauma crea \u201Crespuestas motoras incompletas\u201D: movimientos defensivos que el sistema inició pero no pudo completar. Quedan codificadas como tensiones residuales en el Vmem del tejido muscular y fascial. Completar la respuesta permite al campo reorganizarse.',
    indicaciones: ['Tensión crónica', 'Posturas de protección', 'Armadura corporal', 'Restricción de movimiento'],
    protocolo: [
      { title: 'Mapeo de arquitectura:', description: 'Escaneo corporal. Zonas de tensión habitual, posturas automáticas, zonas \u201Cmuertas\u201D.' },
      { title: 'Exploración de la zona:', description: 'Amplificar suavemente la tensión. \u201CSi pudiera moverse, ¿en qué dirección iría?\u201D' },
      { title: 'Diálogo con la zona:', description: '¿Qué está protegiendo? ¿Cuándo aprendió a estar así?' },
      { title: 'Remodelación activa:', description: 'Movimiento consciente, respiración dirigida. No forzar \u2014 invitar. El temblor es señal de éxito.' },
      { title: 'Instalación:', description: 'Nueva postura natural. Anclar con respiración. \u201CHay otra forma.\u201D' },
    ],
    fraseClave: '\u201CEse temblor es el sistema liberando energía de supervivencia que guardó. Es correcto. Permítelo.\u201D',
    practicasCasa: [
      'Check-in postural 3 veces al día: ¿cómo están los hombros? ¿La mandíbula? ¿El abdomen?',
      'Un movimiento de remodelación elegido en sesión: practicarlo 5 minutos cada mañana.',
      'Al final del día: ¿en qué situaciones la armadura regresó? ¿Qué la activó?',
    ],
  },
  {
    id: 'tecnica-07',
    num: 'T07',
    title: 'Extracción de Memorias Congeladas',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><circle cx="12" cy="12" r="6" stroke-dasharray="4 2"/></svg>',
    badges: [
      { label: 'TAME 3', variant: 'amber' },
      { label: '30-45 min' },
      { label: 'Alto cuidado', variant: 'amber' },
    ],
    ideaCentral: 'El trauma \u201Ccongela\u201D el campo bioeléctrico en el estado del momento de la experiencia abrumadora. La titulación (dosis pequeñas) permite que el campo complete la transición que quedó interrumpida. Es la técnica de perfil de riesgo más alto de las 10.',
    indicaciones: ['Memorias traumáticas', 'Flashbacks somáticos', 'Respuestas de freeze', 'Procesamiento incompleto'],
    protocolo: [
      { title: 'Recursos y contención:', description: 'Establecer un \u201Clugar seguro\u201D somático ANTES de acceder a la memoria.' },
      { title: 'Acceso titulado:', description: 'Acercarse desde el borde \u2014 no el centro. Sin contar detalles. Si activación >7, ampliar distancia.' },
      { title: 'Localización somática:', description: '¿Dónde se siente en el cuerpo? ¿Forma? ¿Temperatura? ¿Peso?' },
      { title: 'Extracción simbólica:', description: 'Sacar la carga energética con luz, color, sustancia. Voz lenta y presencia reguladora.' },
      { title: 'Descarga y completación:', description: 'Permitir que el cuerpo complete la respuesta interrumpida. \u201CComo el primer deshielo de primavera.\u201D' },
      { title: 'Integración:', description: 'Nuevo significado. \u201CAhora puede guardarse en el pasado, donde pertenece.\u201D' },
    ],
    fraseClave: '\u201CEsa memoria está congelada \u2014 como si el tiempo se hubiera detenido en ese momento. No tiene que quedarse así.\u201D',
    practicasCasa: [
      'Visitar el lugar seguro cada día durante 5 minutos. Consolidar el recurso antes de seguir procesando.',
      'Notar reactivaciones: cuándo y ante qué estímulos sube la carga. Sin intentar procesarla sola.',
      'Movimiento de completación elegido en sesión: repetirlo 3 veces al día brevemente.',
    ],
  },
  {
    id: 'tecnica-08',
    num: 'T08',
    title: 'Transplante de Recursos Internos',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4"/><path d="M5 21h14"/></svg>',
    badges: [
      { label: 'TAME 3-4', variant: 'amber' },
      { label: '20-30 min' },
    ],
    ideaCentral: 'Los recursos emocionales (coraje, calma, confianza) son patrones de Vmem que el sistema puede aprender a mantener. Al imaginar la cualidad en el donante, el propio campo bioeléctrico comienza a resonar con ese patrón.',
    indicaciones: ['Ausencia de recursos', 'Sensación de vacío', 'Desconexión de fortalezas', 'Post-trauma'],
    protocolo: [
      { title: 'Identificación del recurso:', description: '¿Qué necesita? Con la mayor especificidad posible.' },
      { title: 'Identificación del donante:', description: 'Momento real donde SÍ tuvo ese recurso, o un modelo que lo encarne.' },
      { title: 'Construcción sensorial:', description: 'Amplificar con máxima especificidad: qué ve, oye, siente. Extraer una muestra.' },
      { title: 'El transplante:', description: 'Imaginar el recurso transplantándose a la zona que más lo necesita. Observar la propagación.' },
      { title: 'Anclaje:', description: 'Gesto específico para acceder al recurso. \u201CComo músculo \u2014 se desarrolla cuando la ejercitas.\u201D' },
    ],
    fraseClave: '\u201CEl sistema la recibe... la reconoce... la integra como propia.\u201D',
    practicasCasa: [
      'Activar el anclaje 3 veces al día, incluso cuando no se necesita. Se consolida con la práctica.',
      'Llevar el recurso a una situación de reto menor durante la semana. Observar qué cambia.',
      'Escribir: ¿cómo actúo diferente cuando tengo este recurso disponible?',
    ],
  },
  {
    id: 'tecnica-09',
    num: 'T09',
    title: 'Reorganización de Red Neural',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 3v18"/><path d="M18 3v18"/><path d="M6 8c6 0 6 4 12 4"/><path d="M6 16c6 0 6-4 12-4"/></svg>',
    badges: [
      { label: 'TAME 3-4', variant: 'amber' },
      { label: '20-40 min' },
    ],
    ideaCentral: 'Los patrones habituales son \u201Catractores\u201D bioeléctricos \u2014 como un río que siempre toma el mismo cauce. Crear nuevas rutas no es \u201Cpensar positivo\u201D: es construir nuevos atractores mediante repetición. 30-40 repeticiones para que el nuevo patrón compita con el antiguo.',
    indicaciones: ['Patrones automáticos', 'Reactividad', 'Loops de ansiedad', 'Catastrofismo'],
    protocolo: [
      { title: 'Circuito antiguo:', description: 'Estímulo \u2192 Respuesta automática. Identificar la secuencia con precisión.' },
      { title: 'Punto de bifurcación:', description: 'El momento exacto entre estímulo y respuesta donde todavía es posible elegir.' },
      { title: 'Diseño de nueva respuesta:', description: 'Ligeramente diferente \u2014 no radicalmente opuesta. Señal de DESVÍO al inicio.' },
      { title: 'Práctica en imaginería:', description: 'Recorrer el circuito completo 4-7 veces con máxima especificidad sensorial.' },
      { title: 'Instalación somática:', description: '¿Cómo se siente la nueva ruta en el cuerpo? Amplificar. Gesto físico.' },
    ],
    fraseClave: '\u201CNo bloqueamos el camino \u2014 solo ponemos la opción de tomar otro. Después de 30-40 veces, el camino nuevo empieza a ser tan rápido como el viejo.\u201D',
    practicasCasa: [
      'Práctica mental diaria: recorrer el circuito 5 veces antes de dormir. El sueño consolida los nuevos atractores.',
      'Ante el estímulo real: solo identificar el punto de bifurcación. No se requiere ejecutar perfectamente.',
      'Registro: anotar cada vez que llegue al punto de bifurcación. La conciencia del punto ya es progreso.',
    ],
  },
  {
    id: 'tecnica-10',
    num: 'T10',
    title: 'Ritual de Cierre de Ciclo',
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    badges: [
      { label: 'TAME 4', variant: 'amber' },
      { label: '25-40 min' },
    ],
    ideaCentral: 'Las relaciones no resueltas crean \u201Cbucles bioeléctricos abiertos\u201D: el sistema continúa asignando recursos a una situación que ya no existe. El ritual funciona como señal formal de finalización \u2014 comunicación multimodal que activa el Nivel 4.',
    indicaciones: ['Ciclos no cerrados', 'Duelo sin cierre', 'Asuntos pendientes', 'Transiciones de vida'],
    protocolo: [
      { title: 'Verificación:', description: '¿Hay algo que necesite decirse que no ha tenido espacio? Este es el momento.' },
      { title: 'Invocación:', description: 'Invocar simbólicamente la presencia del ciclo que se cierra.' },
      { title: 'Expresión completa:', description: 'Lo que agradece, lo que lamenta, lo que aprendió, lo que devuelve, lo que se queda.' },
      { title: 'Escucha:', description: 'Recibir la respuesta simbólica del otro lado. Opcional \u2014 el cliente puede decir que no.' },
      { title: 'Gesto de cierre:', description: 'Acto físico elegido por el cliente: cortar una cuerda, soltar una esfera de luz. 15-20s de silencio.' },
      { title: 'Lo que se lleva:', description: 'Identificar qué se lleva del ciclo cerrado hacia adelante.' },
    ],
    fraseClave: '\u201CEl ciclo está completo. Lo que necesitaba decirse, se dijo. Lo que necesitaba soltarse, se soltó.\u201D',
    practicasCasa: [
      'Escribir: \u201CLo que se cerró. Lo que me llevo. Lo que queda libre.\u201D Leerlo en voz alta una vez.',
      'Observar durante la semana si hay ligereza o resistencia. Ambas son información válida.',
      'Si el ciclo no se cierra completamente: está bien. Identificar qué falta para el próximo encuentro.',
    ],
  },
]
