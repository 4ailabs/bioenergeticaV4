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
    ideaCentral: 'El tejido cardíaco acumula memoria bioeléctrica de las experiencias relacionales más significativas. El duelo no elaborado y el trauma de abandono crean configuraciones estables de Vmem que el sistema mantiene como referencia homeostática aunque sean disfuncionales — como un termostato fijado en frío. Esta técnica trabaja directamente sobre esos patrones de memoria tisular para restablecer la permeabilidad bioeléctrica del campo cardíaco.',
    indicaciones: ['Duelo no resuelto', 'Trauma de abandono', 'Corazón cerrado', 'Incapacidad de confiar'],
    protocolo: [
      { title: 'Localización y contacto:', description: 'Guiar la atención hacia el corazón anatómico. Invitar a sentir temperatura, peso y textura. Esperar a que el cliente confirme contacto somático real — no imaginario.' },
      { title: 'Extracción simbólica:', description: 'Usar la imagen de luz como instrumento de precisión. Extraer la carga emocional congelada capa a capa, nombrando lo que emerge sin amplificarlo.' },
      { title: 'Limpieza y espacio:', description: 'Localizar el contenido emocional específico con la mayor precisión posible. Sostener el vacío como posibilidad — no como pérdida.' },
      { title: 'Instalación del tejido nuevo:', description: 'Preguntar qué necesita ese espacio ahora. Instalar el recurso que el cliente identifica. Nunca dejar un campo vacío.' },
      { title: 'Propagación sistémica:', description: 'El nuevo patrón cardíaco se expande: ojos, manos, pies. El cuerpo entero actualiza su referencia bioeléctrica.' },
      { title: 'Cierre:', description: 'Cerrar capas en orden inverso, sellando con luz dorada. Anclar el estado con un gesto físico.' },
    ],
    fraseClave: '\u201CEste corazón nuevo tiene una relación diferente con el dolor. Puede sentir \u2014 sin quedar atrapado. Puede amar \u2014 sin hacerlo desde el miedo.\u201D',
    practicasCasa: [
      'Mano sobre el pecho cada noche, 3 minutos. Respirar hacia el contacto — sin analizar lo que emerge.',
      'Registrar durante la semana: ¿en qué momentos el corazón \u201Cse cierra\u201D? ¿Qué lo activa? ¿Cuánto tarda en reabrirse?',
      'Escrito breve: \u201CSi mi corazón pudiera hablar, diría...\u201D',
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
    ideaCentral: 'El SNA opera como el principal regulador bioeléctrico del Nivel 2. En estados de amenaza crónica, el setpoint de activación se desplaza permanentemente hacia el polo simpático — el sistema aprende que la hipervigilancia es lo normal. La pendulación trabaja sobre esa memoria del setpoint: al oscilar deliberadamente entre activación y recurso, el campo bioeléctrico recalibra su rango adaptativo.',
    indicaciones: ['Ansiedad crónica', 'PTSD', 'Hipervigilancia', 'Insomnio de activación'],
    protocolo: [
      { title: 'Mapeo del estado actual:', description: 'Escaneo corporal de pies a cabeza. Nivel de activación 0-10. Localizar la zona más activa y observar cómo se siente desde adentro.' },
      { title: 'Identificación del recurso:', description: 'Encontrar un lugar, postura o sensación que represente calma genuina para este cliente. Amplificar hasta que sea somáticamente vívido.' },
      { title: 'El dial / pendulación:', description: 'Visualizar un dial de 0 a 10. Moverse intencionalmente hacia la activación (20-30 seg) y luego hacia el recurso (60 seg). Repetir 3-6 ciclos.' },
      { title: 'Descarga:', description: 'Observar y acompañar las respuestas físicas espontáneas: temblor, suspiro, movimiento. No interrumpir — son señales de regulación, no de descontrol.' },
      { title: 'Nuevo setpoint:', description: 'Instalar que este estado es el estado de referencia natural del sistema. Anclar con gesto + frase: \u201CMi sistema puede aquí.\u201D' },
    ],
    fraseClave: '\u201CEl termostato se quedó atascado en \u201Calto\u201D. No es una falla \u2014 fue una respuesta de supervivencia que funcionó. Hoy vamos a devolverlo a su rango natural.\u201D',
    practicasCasa: [
      'Práctica del dial: 3 veces al día, 2 minutos cada vez. Antes de las comidas es el momento más efectivo.',
      'Registro de activaciones: ¿a qué hora del día el dial sube a 7 o más? ¿Qué lo precede?',
      'Escaneo de cierre: cada noche, recorrer el cuerpo de cabeza a pies y respirar hacia cada zona de tensión encontrada.',
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
    ideaCentral: 'Las \u201Cpartes\u201D son subsistemas bioeléctricos con patrones de Vmem propios — no metáforas, sino campos con lógica de supervivencia diferenciada. El conflicto interno es la expresión de dos campos compitiendo con metas incompatibles. El rol de la Silla C — el Self como árbitro — es activar el Nivel 4: la capacidad de observar el sistema completo sin ser capturado por ninguna de sus partes.',
    indicaciones: ['Conflictos internos', 'Ambivalencia crónica', 'Auto-sabotaje', 'Autocrítica severa'],
    protocolo: [
      { title: 'Identificación de las partes:', description: 'Identificar el conflicto central y nombrar las dos voces. Asignar sillas físicas — el espacio físico importa.' },
      { title: 'Silla A \u2014 Primera parte:', description: 'Hablar desde esa parte en primera persona: qué quiere, qué teme, desde cuándo existe. El facilitador acompaña sin intervenir.' },
      { title: 'Silla B \u2014 Segunda parte:', description: 'La segunda parte responde. Sostener 2-3 ciclos hasta que cada una exprese su necesidad más profunda.' },
      { title: 'Silla C \u2014 El Self como mediador:', description: 'Desde el observador, ver ambas partes con curiosidad. Preguntar: ¿qué necesitan de verdad? ¿Pueden colaborar en lugar de bloquearse mutuamente?' },
      { title: 'Acuerdo y cierre:', description: 'Formular un acuerdo entre partes — aunque sea provisional. Cerrar con un gesto físico de integración.' },
    ],
    fraseClave: '\u201CAmbas partes fueron escuchadas. Y cuando una parte se siente escuchada, deja de necesitar gritar.\u201D',
    practicasCasa: [
      'Carta desde el Self: escrita a la parte más crítica, desde el observador compasivo — sin defender ni atacar.',
      'Diario de partes durante 3 días: anotar cuándo aparece cada parte, qué quiere y qué teme.',
      'Ante conflicto interno durante la semana: hacer pausa y preguntar \u201C¿cuáles son las dos partes activas ahora mismo?\u201D',
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
    ideaCentral: 'Los gap junctions permiten el flujo de información bioeléctrica entre células — son las juntas del campo distribuido. Cuando el sistema no puede procesar señales emocionales a la velocidad que llegan, reducen su permeabilidad: el tejido queda \u201Csaturado\u201D. El dolor crónico sin causa orgánica, la pesadez difusa y el embotamiento emocional son expresiones somáticas frecuentes de esta saturación acumulada.',
    indicaciones: ['Saturación emocional', 'Embotamiento', 'Dolor crónico sin causa', 'Pesadez física'],
    protocolo: [
      { title: 'Estado del filtro:', description: '¿Qué tan lleno está, de 0 a 10? ¿De qué? Localizar en el cuerpo con especificidad: color, temperatura, peso, textura.' },
      { title: 'Proceso de limpieza:', description: 'Visualizar el filtro físicamente. Limpiarlo capa a capa, enjuagando con luz clara. Dar tiempo — este paso no se apresura.' },
      { title: 'Descarga:', description: 'Acompañar exhalaciones largas y movimiento sutil. No dirigir la descarga — sostener el espacio para que ocurra.' },
      { title: 'Restauración:', description: '¿Qué color o sensación tiene el filtro cuando está limpio? Amplificar la sensación de capacidad restaurada.' },
      { title: 'Anclaje:', description: '\u201CEl filtro está limpio, puedo procesar.\u201D Gesto físico de acceso al estado.' },
    ],
    fraseClave: '\u201CLo que entra puede procesarse. Lo que se procesa puede soltarse. El sistema recupera su capacidad de flujo.\u201D',
    practicasCasa: [
      'Limpieza vespertina antes de cenar, 5 minutos. \u201C¿Qué me llevo del día que no es mío?\u201D Soltar con cada exhalación.',
      'Registro del estado del filtro: mañana y noche (0-10) durante 7 días. Identificar el patrón semanal.',
      'Localizar el principal \u201Ccontaminante\u201D: ¿qué persona, situación o pensamiento llena el filtro con mayor frecuencia?',
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
    ideaCentral: 'Las creencias limitantes son atractores bioeléctricos estables: configuraciones de Vmem que el sistema prefiere mantener porque representan la ruta de menor energía. Desinstalarlas no es un acto de voluntad — es un proceso de reescritura del código que dirige el atractor. La nueva creencia necesita ser específica, somáticamente instalada y repetida hasta construir un atractor alternativo de suficiente estabilidad.',
    indicaciones: ['Creencias limitantes', 'Narrativas rígidas', 'Voz crítica interna', 'Baja autoestima'],
    protocolo: [
      { title: 'Identificación del software viejo:', description: 'Identificar la creencia con la máxima precisión posible. Cuanto más específica, más efectiva la desinstalación.' },
      { title: 'Rastreo del origen:', description: '¿Cuándo se instaló? ¿Quién lo instaló? ¿Para qué sirvió en su momento? Reconocer su función sin justificarla.' },
      { title: 'Desinstalación simbólica:', description: 'Visualizar el software como código visible con etiqueta. Extraerlo, reconocer su función original y archivarlo — no destruirlo.' },
      { title: 'Escritura del nuevo software:', description: 'Nueva creencia: específica, positiva, somáticamente verificable y verdadera. Barra de instalación: 25%... 50%... 100%.' },
      { title: 'Instalación multimodal:', description: 'Verbal (se dice en voz alta), somático (se respira hacia el cuerpo), visual (se imagina actuando desde ella en una situación concreta).' },
      { title: 'Verificación:', description: '¿Hay resistencia? Explorarla antes de cerrar. Anclar el estado de instalación con gesto físico.' },
    ],
    fraseClave: '\u201CFue útil en su momento \u2014 cumplió una función real. Pero el sistema que instaló ese programa ya no es el sistema que eres hoy.\u201D',
    practicasCasa: [
      'Leer la nueva creencia en voz alta 3 veces cada mañana, con la mano sobre el pecho. Observar dónde hay apertura y dónde resistencia.',
      'Diario de evidencias: cada noche, una situación del día que demuestre que la nueva creencia es posible.',
      'Notar cuándo el software viejo intenta activarse. Solo registrar: \u201CAhí está el programa viejo\u201D — sin fusionarse con él.',
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
    ideaCentral: 'El trauma genera respuestas motoras incompletas: el cuerpo inició un movimiento defensivo o de escape que no pudo completar. Esas respuestas quedan codificadas como tensiones residuales en el Vmem del tejido muscular y fascial — las posturas que adoptamos crónicamente son el mapa visible de esa historia. Completar la respuesta interrumpida permite que el campo reorganice su arquitectura de base.',
    indicaciones: ['Tensión crónica', 'Posturas de protección', 'Armadura corporal', 'Restricción de movimiento'],
    protocolo: [
      { title: 'Mapeo de arquitectura:', description: 'Escaneo completo. Zonas de tensión habitual, posturas automáticas, zonas \u201Cmuertas\u201D o sin sensación. El mapa corporal es el diagnóstico.' },
      { title: 'Exploración de la zona:', description: 'Amplificar suavemente la tensión — ir hacia ella, no luchar contra ella. \u201CSi esta zona pudiera moverse libremente, ¿en qué dirección iría?\u201D' },
      { title: 'Diálogo con la zona:', description: '¿Qué está protegiendo esta tensión? ¿Cuándo aprendió a estar así? Escuchar sin corregir.' },
      { title: 'Remodelación activa:', description: 'Movimiento consciente y respiración dirigida hacia la zona. No forzar — invitar. El temblor espontáneo es señal de éxito, no de descontrol.' },
      { title: 'Instalación:', description: 'Encontrar la nueva postura natural. Anclar con respiración y silencio. \u201CEl cuerpo recuerda otra forma.\u201D' },
    ],
    fraseClave: '\u201CEse temblor es el sistema soltando energía de supervivencia que guardó por años. No hay nada que detener \u2014 solo acompañar.\u201D',
    practicasCasa: [
      'Check-in postural tres veces al día: hombros, mandíbula, abdomen. Sin corregir — solo notar.',
      'El movimiento de remodelación elegido en sesión: 5 minutos cada mañana durante 7 días.',
      'Al final del día: ¿en qué situaciones regresó la armadura? ¿Qué la activó? ¿Cuánto tardó en ceder?',
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
    ideaCentral: 'El trauma congela el campo bioeléctrico en el estado del momento abrumador — literalmente, el Vmem queda bloqueado en la configuración de la amenaza. El tiempo subjetivo se detiene. La titulación — exposición en dosis pequeñas, desde el borde — permite que el campo complete la transición interrumpida sin desbordarse nuevamente. Es la técnica de mayor perfil de riesgo del programa y requiere presencia regulatoria completa del facilitador.',
    indicaciones: ['Memorias traumáticas', 'Flashbacks somáticos', 'Respuestas de freeze', 'Procesamiento incompleto'],
    protocolo: [
      { title: 'Recursos y contención:', description: 'Establecer un lugar seguro somático con sólida especificidad sensorial ANTES de acercarse a la memoria. Sin recurso consolidado, no se inicia.' },
      { title: 'Acceso titulado:', description: 'Aproximarse desde el borde de la memoria — no desde el centro. Sin narración de detalles. Si la activación sube a 7 o más, ampliar la distancia o regresar al recurso.' },
      { title: 'Localización somática:', description: '¿Dónde se siente en el cuerpo? ¿Forma, temperatura, peso, textura? Trabajar sobre la sensación — no sobre el relato.' },
      { title: 'Extracción simbólica:', description: 'Extraer la carga energética con el símbolo elegido por el cliente. Voz lenta. La presencia regulatoria del facilitador es un componente activo de la técnica.' },
      { title: 'Descarga y completación:', description: 'Sostener el espacio para que el cuerpo complete la respuesta interrumpida. Sin urgencia. \u201CComo el primer deshielo \u2014 lento, inevitable, ordenado.\u201D' },
      { title: 'Integración:', description: 'Ayudar a construir nuevo significado. \u201CEsa experiencia puede guardarse en el pasado \u2014 donde pertenece. El presente es diferente.\u201D' },
    ],
    fraseClave: '\u201CEl campo se quedó congelado en ese momento \u2014 como si el tiempo no hubiera podido seguir. No tiene que quedarse así.\u201D',
    practicasCasa: [
      'Visitar el lugar seguro todos los días, 5 minutos. Antes de seguir procesando, el recurso debe estar completamente consolidado.',
      'Registrar reactivaciones: cuándo ocurren, ante qué estímulos, cuánto tiempo duran. Sin intentar procesarlas en solitario.',
      'El movimiento de completación elegido en sesión: repetirlo 3 veces al día brevemente, como señal de integración.',
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
    ideaCentral: 'Los recursos emocionales — coraje, confianza, calma, autocompasión — son patrones de Vmem que el sistema puede aprender a mantener. Cuando una persona imagina a alguien que encarna un recurso específico, el campo bioeléctrico propio comienza a resonar con ese patrón. El trasplante no transfiere nada externo: activa en el receptor una capacidad que ya existía en latencia.',
    indicaciones: ['Ausencia de recursos', 'Sensación de vacío', 'Desconexión de fortalezas', 'Post-trauma'],
    protocolo: [
      { title: 'Identificación del recurso:', description: '¿Qué cualidad específica necesita este sistema ahora? Con la mayor precisión posible — no \u201Cfuerza\u201D genérica, sino qué tipo de fuerza y para qué.' },
      { title: 'Identificación del donante:', description: 'Un momento real donde SÍ tuvo ese recurso, o alguien — real o simbólico — que lo encarne de forma convincente para este cliente.' },
      { title: 'Construcción sensorial:', description: 'Amplificar la imagen del donante con máxima especificidad: qué ve, qué oye, qué siente en su presencia. Extraer una \u201Cmuestra\u201D vivida.' },
      { title: 'El trasplante:', description: 'Imaginar la cualidad trasplantándose hacia la zona del cuerpo que más la necesita. Observar cómo se propaga desde ese punto hacia el resto del sistema.' },
      { title: 'Anclaje:', description: 'Establecer un gesto físico específico de acceso al recurso. \u201CComo un músculo \u2014 se desarrolla cuando se ejercita.\u201D' },
    ],
    fraseClave: '\u201CEl sistema la recibe... la reconoce... la integra como propia. No como algo ajeno \u2014 como algo que siempre estuvo en latencia.\u201D',
    practicasCasa: [
      'Activar el anclaje 3 veces al día, incluso cuando no se necesita. El anclaje se consolida por repetición, no por urgencia.',
      'Llevar el recurso a una situación de reto menor durante la semana. Observar qué cambia en la respuesta.',
      'Escrito breve: \u201C¿Cómo actúo diferente cuando este recurso está disponible?\u201D',
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
    ideaCentral: 'Los patrones habituales son atractores bioeléctricos — como un río que siempre toma el mismo cauce porque es la ruta de menor resistencia. Crear rutas nuevas no es \u201Cpensar positivo\u201D: es construir atractores alternativos con suficiente energía para competir con los existentes. La neuroplasticidad requiere repetición: 30-40 recorridos del nuevo circuito para que comience a ser tan accesible como el antiguo.',
    indicaciones: ['Patrones automáticos', 'Reactividad', 'Loops de ansiedad', 'Catastrofismo'],
    protocolo: [
      { title: 'Circuito antiguo:', description: 'Estímulo \u2192 Respuesta automática. Identificar la secuencia completa con precisión: ¿qué dispara, qué ocurre en el cuerpo, qué hace o dice el cliente?' },
      { title: 'Punto de bifurcación:', description: 'Localizar el momento exacto entre el estímulo y la respuesta donde todavía existe la posibilidad de elegir. Ese punto es el objetivo de trabajo.' },
      { title: 'Diseño de nueva respuesta:', description: 'La nueva ruta debe ser ligeramente diferente — no radicalmente opuesta. Los cambios radicales no compiten con atractores consolidados.' },
      { title: 'Práctica en imaginería:', description: 'Recorrer el circuito completo 4-7 veces con máxima especificidad sensorial. La imaginería activa los mismos campos que la acción real.' },
      { title: 'Instalación somática:', description: '¿Cómo se siente la nueva ruta en el cuerpo? Amplificar esa sensación. Anclar con gesto físico.' },
    ],
    fraseClave: '\u201CNo bloqueamos el camino viejo \u2014 solo construimos otro. Con el tiempo, ese camino nuevo se vuelve igual de rápido. Cada repetición es un ladrillo del nuevo cauce.\u201D',
    practicasCasa: [
      'Recorrer el circuito nuevo en imaginería 5 veces antes de dormir. El sueño consolida los nuevos atractores.',
      'Ante el estímulo real: el objetivo no es ejecutar perfectamente — es identificar el punto de bifurcación. Solo eso ya es progreso.',
      'Registro semanal: ¿cuántas veces llegaste al punto de bifurcación? ¿Cuántas pudiste desviar? Ambos datos son válidos.',
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
    ideaCentral: 'Las relaciones y situaciones no resueltas crean bucles bioeléctricos abiertos: el sistema continúa asignando recursos de atención y energía a algo que ya no existe en el presente. El ritual funciona como señal formal de finalización — comunicación multimodal al Nivel 4 de que el ciclo se ha completado y los recursos pueden redistribuirse.',
    indicaciones: ['Ciclos no cerrados', 'Duelo sin cierre', 'Asuntos pendientes', 'Transiciones de vida'],
    protocolo: [
      { title: 'Verificación:', description: '¿Hay algo que necesite decirse y que no ha tenido espacio? Este es el momento. Sin este paso, el ritual puede quedar incompleto.' },
      { title: 'Invocación:', description: 'Invocar simbólicamente la presencia del ciclo que se cierra — la persona, la etapa, la situación. Dar tiempo para que la presencia simbólica sea real.' },
      { title: 'Expresión completa:', description: 'En orden o libremente: lo que se agradece, lo que se lamenta, lo que se aprendió, lo que se devuelve, lo que se queda.' },
      { title: 'Escucha:', description: 'Recibir la respuesta simbólica del otro lado. Es opcional — el cliente puede decidir que no la necesita.' },
      { title: 'Gesto de cierre:', description: 'Acto físico elegido por el cliente: cortar una cuerda, soltar una esfera de luz, apagar una vela. 15-20 segundos de silencio completo.' },
      { title: 'Lo que se lleva:', description: 'Identificar qué se lleva de este ciclo hacia el siguiente. Formularlo con claridad.' },
    ],
    fraseClave: '\u201CEl ciclo está completo. Lo que necesitaba decirse, se dijo. Lo que necesitaba soltarse, se soltó. Los recursos que estaban ahí \u2014 están libres ahora.\u201D',
    practicasCasa: [
      'Escrito de cierre: \u201CLo que se cerró. Lo que me llevo. Lo que queda libre.\u201D Leerlo en voz alta una vez.',
      'Observar durante la semana si emerge ligereza, tristeza residual o resistencia. Todas son información válida.',
      'Si el ciclo no se cerró completamente: está bien. Identificar qué falta antes del próximo encuentro — el proceso es el contenido.',
    ],
  },
]
