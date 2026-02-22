export interface BloqueSection {
  heading: string
  type: 'concepto-grid' | 'concepto-list' | 'pilar-cards' | 'concepto-cards' | 'niveles-grid'
  items: { title?: string; subtitle?: string; text: string }[]
}

export interface BloqueData {
  id: string
  num: string
  title: string
  subtitle: string
  isTame: boolean
  iconSvg: string
  ideaCentral: { label: string; text: string }
  sections: BloqueSection[]
  diagrams?: string[]
  reflexion?: string
  fraseClave?: string
  frasesList?: { text: string; author?: string }[]
  tarea?: string
}

export const bloques: BloqueData[] = [
  {
    id: 'bloque-tame',
    num: 'TAME',
    title: 'Marco Científico Fundacional',
    subtitle: 'Technological Approach to Mind Everywhere — Michael Levin, Tufts University',
    isTame: true,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="11" stroke-dasharray="3 2"/></svg>',
    ideaCentral: {
      label: 'Tesis Central',
      text: '\u201CToda inteligencia es inteligencia colectiva. Todo agente cognitivo está compuesto por partes que son, a su vez, agentes cognitivos.\u201D Las capacidades cognitivas no son exclusivas de los cerebros \u2014 existen en un continuo desde moléculas y células hasta organismos completos.',
    },
    sections: [
      {
        heading: 'Los tres pilares de TAME',
        type: 'pilar-cards',
        items: [
          { subtitle: 'Pilar 1', title: 'Gradualismo', text: 'No hay una línea brillante que separe \u201Ccognición verdadera\u201D de \u201Csimple física\u201D. Las capacidades cognitivas existen en un continuo suave. Cualquier línea que tracemos será arbitraria.' },
          { subtitle: 'Pilar 2', title: 'Sin sustrato privilegiado', text: 'No existe un material especial requerido para constituir un Self. La capacidad de agencia no depende del sustrato (neuronas, células, circuitos) sino de la arquitectura funcional del sistema.' },
          { subtitle: 'Pilar 3', title: 'Enfoque empírico', text: 'La presencia de agencia no se determina por debate filosófico sino por experimentación: ¿Responde este sistema a señales persuasivas? ¿Modifica su comportamiento? ¿Tiene metas que persigue activamente?' },
        ],
      },
      {
        heading: 'Eje de persuadabilidad',
        type: 'concepto-cards',
        items: [
          { title: '¿Qué es el eje de persuadabilidad?', text: 'Clasifica a los agentes según la sofisticación de las señales necesarias para modificar su comportamiento. En un extremo: circuitos eléctricos (responden a voltaje). En el otro: humanos (responden a narrativa, argumento, emoción).' },
          { title: 'Implicación terapéutica directa', text: 'Los patrones somato-emocionales (Nivel 3 en BV4) están en la \u201Czona inferior\u201D del eje \u2014 son circuitos homeostáticos, no agentes racionales. No se pueden persuadir con argumentos. Se requiere intervenir con señales del mismo nivel: corporales, bioeléctricas, somáticas.' },
        ],
      },
      {
        heading: 'Bioelectricidad no-neuronal',
        type: 'concepto-grid',
        items: [
          { title: 'Voltaje de membrana (Vmem)', text: 'Integra las contribuciones de múltiples canales iónicos en un solo valor. Entre −40 mV y −70 mV en células normales. Es el \u201Cresumen ejecutivo\u201D del estado de la célula.' },
          { title: 'Gap junctions', text: 'Conectan células eléctricamente, permitiendo compartir voltaje e iones pequeños. Son el equivalente no-neuronal de las sinapsis. Al conectarse, el Self individual escala hacia un Self colectivo.' },
          { title: 'Pre-patrones bioeléctricos', text: 'Los patrones de voltaje se establecen ANTES de que se activen los genes y ANTES de que exista estructura anatómica visible. Son los \u201Cplanos\u201D dinámicos que las células leen para saber qué hacer.' },
          { title: 'Cáncer como contracción del Self', text: 'Cuando las gap junctions se interrumpen, la célula pierde acceso al campo colectivo y revierte a un estado unicelular ancestral (proliferación egoísta). Reabrir las gap junctions puede revertir el fenotipo maligno.' },
        ],
      },
      {
        heading: 'Evidencia: planaria y memoria bioeléctrica',
        type: 'concepto-list',
        items: [
          { title: 'Memoria de forma bioeléctrica', text: 'Cada fragmento de planaria \u201Crecuerda\u201D la anatomía correcta del organismo completo. La información no está en el ADN (idéntico en todos los fragmentos) sino en el patrón bioeléctrico del tejido.' },
          { title: 'Reprogramación del patrón', text: 'Manipulando el voltaje de membrana, se puede hacer que una planaria regenere DOS cabezas. Esa planaria de dos cabezas, si se corta, sigue regenerando dos cabezas \u2014 el patrón fue reescrito permanentemente sin alterar el ADN.' },
          { title: 'Conexión a BV4', text: 'Si los patrones emocionales están inscritos en el campo bioeléctrico de los tejidos (Nivel 3), no pueden ser reorganizados por la razón (Nivel 4). Se requiere intervenir al nivel donde el patrón está instalado.' },
        ],
      },
    ],
    diagrams: ['axis-diagram', 'nested-diagram'],
    fraseClave: '\u201CTAME no es una teoría que deba ser aceptada o rechazada. Es un marco de trabajo que permite formular preguntas empíricas sobre la mente en todos sus posibles sustratos.\u201D',
  },
  {
    id: 'bloque-b1',
    num: 'B01',
    title: 'Apertura, Encuadre y TAME',
    subtitle: 'Qué es BV4 · Los 4 niveles de organización · El problema de los patrones',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5L12 2z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'La Bioenergética V4 es un sistema para identificar, mapear y actualizar los patrones de supervivencia inscritos en el cuerpo. Integra la ciencia de la bioelectricidad con técnicas de acceso al inconsciente corporal. El cerebro es UN nivel de procesamiento \u2014 hay al menos tres más por debajo.',
    },
    sections: [
      {
        heading: 'Qué es la Bioenergética V4',
        type: 'concepto-cards',
        items: [
          { title: 'Definición', text: 'Sistema para identificar, mapear y actualizar patrones de supervivencia inscritos en el cuerpo. Integra la ciencia de la bioelectricidad con técnicas de acceso al inconsciente corporal. Aplicable a cualquier área donde se repitan patrones: relaciones, decisiones, dinero, salud, crianza, liderazgo.' },
        ],
      },
      {
        heading: 'La pregunta inicial',
        type: 'concepto-list',
        items: [
          { title: 'En relaciones', text: 'Elegir siempre el mismo tipo de pareja, repetir dinámicas de abandono, control o distancia emocional.' },
          { title: 'En dinero', text: 'Ganar y perder cíclicamente, autosabotaje cuando las cosas van bien, incapacidad de cobrar lo que vales.' },
          { title: 'En decisiones', text: 'Procrastinar sistemáticamente, elegir siempre lo seguro aunque duela, paralizarse ante oportunidades.' },
          { title: 'En el cuerpo', text: 'Dolor crónico sin causa médica clara, tensión que nunca se suelta, síntomas que aparecen en momentos específicos.' },
        ],
      },
      {
        heading: 'Evidencia de inteligencia no-cerebral',
        type: 'concepto-grid',
        items: [
          { title: 'Memoria del transplantado', text: 'Receptores de órganos reportan recuerdos y preferencias del donante. El corazón transplantado llegó sin conexión neuronal \u2014 la información estaba en el tejido.' },
          { title: 'Coordinación embrionaria', text: 'Sin sistema nervioso, las células saben dónde ir y qué formar. La coordinación viene del campo bioeléctrico colectivo, no de un director central.' },
          { title: 'Regeneración en planaria', text: 'Una planaria cortada en pedazos regenera la cabeza correcta en cada fragmento. La información de forma está en el campo bioeléctrico, no en el ADN.' },
          { title: 'Sistema inmune cognitivo', text: 'Toma decisiones, tiene memoria, aprende y puede equivocarse. Es un sistema cognitivo completo sin participación cerebral.' },
        ],
      },
    ],
    diagrams: ['levels-tower'],
    frasesList: [
      { text: 'Si la inteligencia está distribuida en todo el cuerpo, tus patrones emocionales no son solo \u201Cmentales\u201D.' },
      { text: 'El cerebro es UN nivel de procesamiento, pero hay al menos tres más por debajo.' },
      { text: 'Si quieres cambiar un patrón que no vive en el cerebro, necesitas herramientas que operen en el nivel donde sí vive.' },
    ],
  },
  {
    id: 'bloque-b2',
    num: 'B02',
    title: 'La Inteligencia No Vive Solo en el Cerebro',
    subtitle: 'Tres fenómenos que el modelo convencional no puede explicar',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 2a7 7 0 0 0-5 2c-1.5 1.5-2 3.5-2 5.5 0 2 1 4 2.5 5.5L12 20l4.5-5c1.5-1.5 2.5-3.5 2.5-5.5 0-2-.5-4-2-5.5A7 7 0 0 0 12 2z"/><path d="M9 10h6"/><path d="M12 7v6"/></svg>',
    ideaCentral: {
      label: 'Pregunta central del bloque',
      text: '¿Puede un órgano tener memoria sin participación del cerebro? ¿Puede un grupo de células tomar decisiones inteligentes sin un sistema nervioso? Si la respuesta es sí, entonces la inteligencia NO vive solo en el cerebro.',
    },
    sections: [
      {
        heading: 'Tres fenómenos que el modelo convencional no puede explicar',
        type: 'concepto-list',
        items: [
          { title: 'Fenómeno 1 \u2014 Memoria del transplantado', text: 'Receptores de corazón transplantado reportan recuerdos, preferencias alimentarias, habilidades y reacciones emocionales del donante, sin conexión neuronal. El corazón almacena información de forma independiente al sistema nervioso central.' },
          { title: 'Fenómeno 2 \u2014 Coordinación embrionaria', text: 'En un embrión de 3-4 días no existe sistema nervioso. Sin embargo, las células ya saben hacia dónde migrar, qué tejido van a formar, y cómo coordinarse para construir un organismo complejo. La coordinación viene del campo bioeléctrico colectivo.' },
          { title: 'Fenómeno 3 \u2014 Planaria: regeneración sin instrucción central', text: 'Manipulando los voltajes de membrana se puede hacer que una planaria regenere una cabeza donde debería ir una cola. La información de forma NO está en el ADN \u2014 está en el campo bioeléctrico.' },
        ],
      },
      {
        heading: 'El corazón como órgano inteligente',
        type: 'concepto-grid',
        items: [
          { title: 'Cerebro cardíaco', text: 'El corazón tiene su propio sistema nervioso: ~40.000 neuronas que forman un \u201Ccerebro cardíaco\u201D. Puede sentir, recordar y tomar decisiones de forma autónoma.' },
          { title: 'Campo electromagnético', text: 'El campo del corazón es 5.000 veces más potente que el del cerebro. Se puede medir a varios metros de distancia. No solo bombea sangre \u2014 emite una señal que influye en todo el organismo.' },
        ],
      },
      {
        heading: 'Aislamiento bioeléctrico \u2014 la metáfora celular',
        type: 'concepto-cards',
        items: [
          { title: 'Cognición sin neuronas', text: 'La cognición no requiere neuronas. Requiere procesamiento de información, memoria y capacidad de respuesta adaptativa. El sistema inmune, el sistema endocrino y el campo bioeléctrico son sistemas cognitivos completos.' },
          { title: 'Cuando la célula pierde el campo', text: 'Cuando una célula se desconecta del campo bioeléctrico colectivo, pierde contexto. Sin contexto, toma decisiones egoístas (proliferación descontrolada). Esto es análogo a lo que ocurre cuando una persona se desconecta emocionalmente: pierde perspectiva y repite patrones de supervivencia.' },
        ],
      },
      {
        heading: 'El problema central de la terapia convencional',
        type: 'concepto-cards',
        items: [
          { title: 'Por qué \u201Csaber\u201D no cambia el patrón', text: 'El Nivel 4 (consciente racional) NO puede reorganizar directamente el Nivel 3 (emocional). Por eso \u201Csaber\u201D que un patrón es disfuncional no lo cambia. Por eso la frase \u201Cya sé que no debería sentir esto\u201D no sirve. La reorganización requiere intervenir al nivel donde el patrón está instalado.' },
        ],
      },
    ],
    frasesList: [
      { text: 'Si un corazón transplantado puede recordar, la memoria no es exclusiva del cerebro.' },
      { text: 'El cerebro no es el director \u2014 es un miembro más de la orquesta.' },
      { text: 'Una célula cancerosa es una célula que dejó de escuchar al campo.' },
      { text: 'No es que no puedas cambiar. Es que estás intentando cambiar desde el nivel equivocado.' },
      { text: 'Tu cuerpo lleva la cuenta de cada vivencia, aunque tu mente la haya olvidado.' },
    ],
  },
  {
    id: 'bloque-b3',
    num: 'B03',
    title: 'Bioelectricidad: El Lenguaje Eléctrico del Cuerpo',
    subtitle: 'Voltaje de membrana · Pre-patrones · Emociones como campo eléctrico',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    ideaCentral: {
      label: 'Idea central del bloque',
      text: 'Cada célula de tu cuerpo tiene voltaje y se comunica eléctricamente. El cuerpo entero es un campo de información eléctrica. Las emociones alteran este campo. Un trauma se inscribe como un patrón bioeléctrico alterado en el tejido.',
    },
    sections: [
      {
        heading: 'Conceptos clave',
        type: 'concepto-list',
        items: [
          { title: 'Voltaje de membrana', text: 'Cada célula mantiene un potencial eléctrico entre −40 mV y −70 mV. No es exclusivo de las neuronas \u2014 TODAS las células lo tienen. Este voltaje funciona como un \u201Cresumen ejecutivo\u201D del estado de la célula.' },
          { title: 'Los tres componentes', text: 'Canales iónicos (transistores biológicos que amplifican y procesan señales), gap junctions (sinapsis eléctricas no-neuronales que conectan células vecinas), y Vmem (el parámetro de grano grueso que integra todo).' },
          { title: 'Pre-patrones bioeléctricos', text: 'Los patrones de voltaje se establecen ANTES de que se activen los genes. El mapa existe antes que el territorio. Demostrado con pre-patrones faciales, de extremidades y cerebrales.' },
          { title: 'Bioelectricidad y experiencia emocional', text: 'Si cada célula tiene voltaje, el cuerpo es un campo de información eléctrica. Las emociones alteran este campo. Un trauma se inscribe como un patrón bioeléctrico alterado. La memoria no vive solo en el cerebro \u2014 vive distribuida en el campo bioeléctrico del cuerpo entero.' },
        ],
      },
      {
        heading: 'Implicación práctica',
        type: 'concepto-cards',
        items: [
          { title: 'Implicación práctica', text: 'Las palabras (Nivel 4) no modifican voltaje de membrana. Por eso necesitamos herramientas que operen en Nivel 3. El cambio terapéutico en BV4 se dirige al nivel donde el patrón está instalado \u2014 no al nivel donde se describe.' },
        ],
      },
    ],
    diagrams: ['gap-diagram'],
    reflexion: '¿Alguna vez has sentido que \u201Centiendes\u201D un problema pero tu cuerpo sigue reaccionando igual? ¿Dónde en tu cuerpo aparece esa reacción? Si las emociones alteran el campo bioeléctrico del cuerpo, ¿qué emoción crees que ha dejado una \u201Chuella\u201D más fuerte en tu propio campo?',
  },
  {
    id: 'bloque-b4',
    num: 'B04',
    title: 'El Campo Bioeléctrico Colectivo',
    subtitle: 'Del individuo al sistema · La inteligencia distribuida del tejido',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.5 13.2l7 4.3"/><path d="M15.5 6.2l-7 4.3"/></svg>',
    ideaCentral: {
      label: 'Idea central del bloque',
      text: 'Una célula sola tiene información limitada. Conectada al campo bioeléctrico del tejido, tiene acceso a la inteligencia del sistema completo. Cómo millones de células conectadas forman un campo de inteligencia distribuida donde viven los patrones emocionales.',
    },
    sections: [
      {
        heading: 'Del mecanismo individual al fenómeno colectivo',
        type: 'concepto-grid',
        items: [
          { title: 'Célula sola', text: 'Procesa información local. Toma decisiones basándose en señales de su entorno inmediato. Su \u201Cinteligencia\u201D está limitada al radio de sensado individual.' },
          { title: 'Célula conectada al campo', text: 'Accede a la información del sistema completo a través de gap junctions. Comparte voltaje, comparte identidad. Su \u201Cinteligencia\u201D se multiplica con la del tejido entero.' },
          { title: 'El campo como memoria', text: 'El campo bioeléctrico colectivo almacena patrones de información que ninguna célula individual podría contener. Aquí viven los patrones emocionales \u2014 distribuidos en el tejido, no localizados en el cerebro.' },
          { title: 'Gap junctions y el Self colectivo', text: '\u201CLas gap junctions son el mecanismo por el cual las células individuales escalan hacia un Self colectivo. Al compartir voltaje, comparten identidad.\u201D (Levin, TAME)' },
        ],
      },
    ],
    diagrams: ['cell-compare'],
    reflexion: 'Después del ejercicio de localización corporal: ¿En qué zona de tu cuerpo sientes mayor \u201Cpresencia\u201D o actividad? ¿Qué historia tiene esa zona para ti?',
  },
  {
    id: 'bloque-b5',
    num: 'B05',
    title: 'Aislamiento Bioeléctrico',
    subtitle: 'El mecanismo central de los patrones de supervivencia',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><circle cx="12" cy="16" r="0.5" fill="currentColor"/></svg>',
    ideaCentral: {
      label: 'Idea central del bloque',
      text: 'Cuando el campo bioeléctrico se fragmenta por trauma, la zona aislada mantiene la información del evento original. Esto es un patrón de supervivencia. Este bloque cierra la sesión teórica explicando el mecanismo central de toda la terapéutica de Bioenergética V4.',
    },
    sections: [
      {
        heading: 'El mecanismo del aislamiento',
        type: 'concepto-list',
        items: [
          { title: 'Fragmentación del campo', text: 'Ante un evento de alto impacto emocional, el campo bioeléctrico puede fragmentarse. La zona afectada se \u201Caísla\u201D del resto del sistema, cerrando las gap junctions que la conectaban al campo colectivo.' },
          { title: 'La zona aislada \u201Ccongela\u201D el momento', text: 'Sin acceso al campo colectivo, la zona aislada mantiene el patrón bioeléctrico del momento del trauma. Opera con la información de ese instante \u2014 sin actualizarse con las experiencias posteriores.' },
          { title: 'Por qué la terapia convencional tiene límites aquí', text: 'Una zona aislada bioeléctrica no responde a la razón (Nivel 4) porque está desconectada del sistema de comunicación del cuerpo. Para actualizar su información, necesitas herramientas que lleguen al nivel donde está \u2014 Nivel 3, somático y relacional.' },
          { title: 'La lógica del patrón', text: 'Todo patrón de supervivencia tiene su propia lógica. No es un error del sistema \u2014 fue la respuesta más inteligente posible en ese momento. El trabajo terapéutico no es eliminar el patrón sino actualizarlo.' },
        ],
      },
      {
        heading: 'Analogía celular',
        type: 'concepto-cards',
        items: [
          { title: 'Analogía celular', text: 'Una célula cancerosa es una célula que perdió contacto con el campo colectivo y revirtió a un estado de supervivencia unicelular. Un patrón emocional crónico es análogo: una zona del sistema que perdió contexto y opera con información antigua.' },
        ],
      },
    ],
    diagrams: ['isolation-flow'],
    reflexion: '¿Puedes identificar un patrón en tu vida que tenga la estructura de \u201Czona aislada\u201D? Un área donde, sin importar cuánto lo pienses, algo sigue reaccionando igual. ¿Dónde lo sientes en el cuerpo?',
  },
  {
    id: 'bloque-b6',
    num: 'B06',
    title: 'El Test Muscular como Herramienta Clínica',
    subtitle: 'Comunicación directa con el sistema nervioso · Protocolo en parejas',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    ideaCentral: {
      label: 'Idea central del bloque',
      text: 'El test muscular es una herramienta de comunicación directa con el sistema nervioso. No mide fuerza \u2014 lee información. Pasamos de la teoría a la práctica: cómo nos comunicamos con el campo bioeléctrico usando la respuesta ideomotora neuromuscular.',
    },
    sections: [
      {
        heading: 'Qué es y qué no es el test muscular',
        type: 'concepto-grid',
        items: [
          { title: 'Lo que ES', text: 'Una forma de acceder a la respuesta ideomotora neuromuscular. El cuerpo responde a estímulos con cambios en el tono muscular que son anteriores a la decisión consciente. Es una ventana al Nivel 3.' },
          { title: 'Lo que NO ES', text: 'No es una prueba de fuerza física. No es un oráculo ni una técnica \u201Cespiritual\u201D. Es un protocolo somático que utiliza la respuesta neuromuscular como canal de comunicación con el campo bioeléctrico.' },
          { title: 'Por qué funciona', text: 'El sistema nervioso autónomo responde a estímulos antes de que el neocórtex los procese. Este intervalo es la ventana de acceso: el cuerpo \u201Csabe\u201D algo que la mente consciente aún no ha formulado.' },
          { title: 'En el contexto de BV4', text: 'El test muscular es la primera herramienta formal de comunicación con el campo bioeléctrico. Abre la sesión práctica de la tarde y sienta las bases para el Bloque 7 (tres canales de acceso).' },
        ],
      },
    ],
    reflexion: 'Después de la práctica en parejas: ¿Pudiste distinguir las dos respuestas? ¿Qué fue lo más sorprendente del ejercicio? ¿Cómo podría esta herramienta cambiar tu forma de hacer preguntas en una sesión clínica?',
  },
  {
    id: 'bloque-b7',
    num: 'B07',
    title: 'Tres Canales de Acceso al Inconsciente Corporal',
    subtitle: 'Canal verbal · Canal somático · Canal relacional · Protocolo integrado',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 4v16"/><path d="M4 12h4c2 0 4-2 4-4s-2-4-4-4H4"/><path d="M4 12h6c2 0 4 2 4 4s-2 4-4 4H4"/></svg>',
    ideaCentral: {
      label: 'Idea central del bloque',
      text: 'El test muscular es la puerta de entrada, pero no es la única herramienta. Hay tres canales de acceso al Nivel 3 \u2014 y un protocolo que los integra. Del canal único pasamos al mapa completo de acceso al campo bioeléctrico.',
    },
    sections: [
      {
        heading: 'Los tres canales',
        type: 'concepto-list',
        items: [
          { title: 'Canal Verbal', text: 'Palabras, afirmaciones, preguntas directas al sistema. El lenguaje como estímulo para la respuesta ideomotora. Útil para localizar el patrón narrativo. Limitado: solo alcanza el borde exterior del Nivel 3.' },
          { title: 'Canal Somático', text: 'Sensaciones corporales, localización física, temperatura, presión. El cuerpo habla directamente desde el Nivel 2 y Nivel 3. Es el canal más directo al campo bioeléctrico. La zona del cuerpo donde aparece la sensación es información diagnóstica.' },
          { title: 'Canal Relacional', text: 'El campo entre el facilitador y el consultante. El sistema nervioso del consultante responde al campo del facilitador antes de cualquier intervención verbal. Requiere que el facilitador esté en un estado coherente. Es el canal más sutil y más poderoso.' },
        ],
      },
    ],
    diagrams: ['channels-diagram'],
    reflexion: '¿Con cuál de los tres canales te sientes más cómodo naturalmente? ¿Cuál te resulta más desafiante? ¿Por qué podría ser útil para un facilitador desarrollar los tres?',
  },
  {
    id: 'bloque-b8',
    num: 'B08',
    title: 'Cartografía de las Dinámicas de una Vivencia',
    subtitle: 'El mapa completo · Integración del día · Tarea para la semana',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="12" cy="12" r="3"/></svg>',
    ideaCentral: {
      label: 'Idea central del bloque',
      text: 'La cartografía es el mapa completo de un patrón de supervivencia. Todo lo que aprendiste hoy converge aquí: el test muscular del Bloque 6, los tres canales del Bloque 7, y ahora el rastreo temporal. Juntos, dan un mapa de la zona aislada.',
    },
    sections: [
      {
        heading: 'Qué es la cartografía',
        type: 'concepto-list',
        items: [
          { title: 'El mapa completo del patrón', text: 'La cartografía integra tres dimensiones: el dónde somático (localización corporal), el cuándo temporal (rastreo del origen), y el cómo relacional (la dinámica con el otro). Juntas, dibujan el mapa de la zona aislada.' },
          { title: 'La secuencia lógica del día', text: 'Primero entendemos el sistema (TAME, bloques 1-3), después entendemos el mecanismo del problema (campo colectivo y aislamiento, bloques 4-5), y finalmente aprendemos a comunicarnos con él y a mapearlo (test muscular, canales, cartografía, bloques 6-8).' },
        ],
      },
    ],
    diagrams: ['carto-diagram'],
    reflexion: 'Repasa los 8 bloques de hoy. ¿Cuál fue el concepto que más te impactó? ¿Qué cambia en tu forma de ver el trabajo terapéutico después de este día? ¿Qué preguntas te llevas?',
    tarea: 'Durante los próximos 7 días, solo observar. Nota momentos en que aparece una reacción desproporcionada: enojo excesivo, tristeza repentina, tensión sin causa aparente. Para cada momento: ¿dónde lo siento en el cuerpo? ¿Qué forma tiene? No intentar cambiar nada. Solo observar.',
  },
]
