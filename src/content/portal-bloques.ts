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
    subtitle: 'Technological Approach to Mind Everywhere — Michael L., Tufts University',
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

  // ═══════════════════════════════════════════════
  // JORNADA 02 — Improntas de Supervivencia
  // ═══════════════════════════════════════════════

  {
    id: 'bloque-b9',
    num: 'B09',
    title: 'La Creencia como Evento Biológico',
    subtitle: 'Placebo, nocebo y por qué entender no cambia',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'La creencia no es un pensamiento que desciende al cuerpo \u2014 es un estado distribuido que involucra simultáneamente electricidad celular, química, tensión muscular, memoria implícita y narrativa. La terapia debe intervenir en el nivel donde el patrón está almacenado, no solo donde se piensa.',
    },
    sections: [
      {
        heading: 'La creencia vive en 4 niveles',
        type: 'niveles-grid',
        items: [
          { title: 'N4 \u2014 Declarativa', text: 'Lo que dices que crees. Modificable con argumentos. Es lo que la psicoterapia verbal trabaja.' },
          { title: 'N3 \u2014 Implícita (Impronta)', text: 'Lo que tu cuerpo aprendió y no olvida. Resistente al diálogo. Aquí viven los patrones de supervivencia.' },
          { title: 'N2 \u2014 Homeostática', text: 'Impulsos profundos, tono vagal, respuestas inmunes automáticas. Opera sin consciencia.' },
          { title: 'N1 \u2014 Celular', text: 'Voltaje de membrana, comunicación eléctrica intercelular. La biología básica.' },
        ],
      },
      {
        heading: 'Placebo y nocebo: la expectativa como biología',
        type: 'concepto-cards',
        items: [
          { title: 'El placebo no es magia', text: 'La corteza prefrontal genera predicciones que reorganizan la arquitectura neuroquímica. El 35% de pacientes mejoran con placebo abierto \u2014 saben que es placebo y aún así funciona.' },
          { title: 'El nocebo es una impronta verbal', text: 'Un diagnóstico médico sin acompañamiento adecuado inyecta certeza de deterioro. El acto de diagnosticar puede instalar un segundo conflicto biológico.' },
        ],
      },
      {
        heading: 'El error clínico más común',
        type: 'concepto-list',
        items: [
          { title: 'Error de nivel', text: 'Intentar modificar un patrón del N3 (inconsciente corporal) con herramientas del N4 (diálogo racional). Es como hablarle en español a alguien que solo habla mandarín.' },
          { title: 'Por qué \u201Centender\u201D no cambia', text: 'Puedes entender perfectamente por qué tienes miedo a las arañas. Tu N4 lo sabe. Pero cuando ves una araña, tu cuerpo salta. El N3 no responde a argumentos \u2014 responde a experiencia.' },
        ],
      },
    ],
    fraseClave: '\u201CLa creencia es un estado distribuido. La terapia debe intervenir en el nivel donde el patrón está almacenado y no solo donde se piensa.\u201D',
  },
  {
    id: 'bloque-b10',
    num: 'B10',
    title: 'Las 13 Improntas de Supervivencia',
    subtitle: 'Mapa completo de los patrones de protección del sistema nervioso',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 2L2 12l10 10 10-10L12 2z"/><circle cx="12" cy="12" r="3"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'Una impronta de supervivencia es un programa que tu cuerpo instaló durante un evento que fue demasiado para procesarlo. Fue la solución perfecta entonces \u2014 pero sigue corriendo hoy, fuera de contexto. Se nombran por el MECANISMO que el sistema activó, no por la herida.',
    },
    sections: [
      {
        heading: 'Las 13 improntas',
        type: 'concepto-list',
        items: [
          { title: 'I1 \u2014 DESACOPLE', text: 'Fragmentar la experiencia para sobrevivir al impacto. Somática: vértigo, cefalea, bruxismo. Vivencial: piloto automático, fuera del cuerpo.' },
          { title: 'I2 \u2014 ACORAZAMIENTO', text: 'Blindar la zona vulnerable ante la traición. Somática: dolor dorsal-occipital. Vivencial: cuidar la espalda, no entregarse.' },
          { title: 'I3 \u2014 RETRACCIÓN', text: 'Retirar la exposición ante el juicio. Somática: dolor lumbar, problemas articulares. Vivencial: no ser suficiente, vergüenza.' },
          { title: 'I4 \u2014 FIJACIÓN EXTERNA', text: 'Redirigir energía hacia un culpable externo. Somática: disfunción hepatobiliar, inflamación. Vivencial: injusticia, deuda pendiente.' },
          { title: 'I5 \u2014 COMPRESIÓN', text: 'Cerrar el canal expresivo. Somática: tiroides, garganta, reflujo. Vivencial: mi voz no importa.' },
          { title: 'I6 \u2014 CAMUFLAJE', text: 'Activar invisibilidad ante la vergüenza. Somática: piel, dermatitis, psoriasis. Vivencial: deseo de desaparecer.' },
          { title: 'I7 \u2014 HIBERNACIÓN', text: 'Reducir al mínimo vital cuando el dolor supera la capacidad. Somática: autoinmunidad, fatiga crónica. Vivencial: ya no tiene sentido.' },
          { title: 'I8 \u2014 RESERVA', text: 'Acumular recursos por miedo a la escasez vincular. Somática: obesidad, retención, hiperglucemia. Vivencial: siempre me dejan.' },
          { title: 'I9 \u2014 CONFLUENCIA', text: 'Fusionarse con el otro para asegurar la existencia. Somática: arritmias, taquicardia. Vivencial: sin ti no existo.' },
          { title: 'I10 \u2014 VINCULACIÓN', text: 'Mantener el síntoma como forma de pertenecer al sistema. Somática: cronicidad, recaídas. Vivencial: no merezco sanar.' },
          { title: 'I11 \u2014 SUPERPOSICIÓN', text: 'Operar dos programas biológicos simultáneamente. Somática: depresión sin causa, fatiga. Vivencial: no soy completamente yo.' },
          { title: 'I12 \u2014 DESARRAIGO', text: 'Emergencia permanente sin territorio seguro. Somática: riñón, retención, edema. Vivencial: no pertenezco a ningún lugar.' },
          { title: 'I13 \u2014 ENCAPSULAMIENTO', text: 'Aislar el dolor cardíaco en una cápsula protectora. Somática: Takotsubo, arritmias, dolor precordial. Vivencial: mi corazón está cerrado.' },
        ],
      },
      {
        heading: 'Triple expresión',
        type: 'concepto-grid',
        items: [
          { title: 'Somática', text: 'Dónde vive en el cuerpo: la zona, el dolor, la disfunción. Cada impronta tiene una topografía corporal característica.' },
          { title: 'Conductual', text: 'Cómo se expresa en la conducta: los patrones relacionales, las decisiones que se repiten, los ciclos.' },
          { title: 'Vivencial', text: 'Cómo se experimenta por dentro: la narrativa interna, la sensación de vida, lo que \u201Csiempre ha sido así\u201D.' },
        ],
      },
    ],
    fraseClave: '\u201CNo decimos \u2018abandono\u2019 \u2014 decimos \u2018desacople\u2019. Nombrar la herida centra en el dolor. Nombrar el mecanismo centra en la inteligencia del sistema.\u201D',
    tarea: 'Durante las próximas 2 semanas, observa reacciones desproporcionadas. Para cada una: ¿dónde en el cuerpo? ¿qué forma/peso/temperatura? NO interpretar \u2014 solo observar y registrar.',
  },
  {
    id: 'bloque-b11',
    num: 'B11',
    title: 'Improntas I1 a I5 \u2014 Alta Activación',
    subtitle: 'El sistema está luchando: fragmentación, blindaje, retiro, fijación, compresión',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'Las primeras 5 improntas son respuestas de alta activación: el sistema está luchando activamente. Hay energía disponible \u2014 pero está dirigida a la protección, no a la vida.',
    },
    sections: [
      {
        heading: 'I1 \u2014 DESACOPLE',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Fragmentación súbita para sobrevivir al impacto. El evento fue tan repentino que el sistema no tuvo tiempo de procesar \u2014 se fracturó para no colapsar completamente.' },
          { title: 'Shock originario', text: 'Accidente, muerte súbita, agresión inesperada, diagnóstico devastador. La variable principal es la subitedad.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema se desacopló para sobrevivir. Ante el impacto, la única forma de protegerte fue separar lo que sentías de lo que pensabas. Hoy vamos a reconectar esas partes.\u201D' },
        ],
      },
      {
        heading: 'I2 \u2014 ACORAZAMIENTO',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Blindaje permanente ante la traición de una figura de apego. El sistema detectó: \u201Cla persona en quien confío me atacó por la espalda.\u201D La neurocepción se recalibra: personas cercanas = amenaza.' },
          { title: 'Shock originario', text: 'Traición de pareja, padre, madre, hermano, amigo cercano. Ataque desde la retaguardia \u2014 no lo vio venir.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema se acorazó por la espalda. Cuando alguien en quien confiabas atacó desde ahí, la respuesta fue blindar esa zona para siempre. Hoy vamos a descomprimir esa tensión.\u201D' },
        ],
      },
      {
        heading: 'I3 \u2014 RETRACCIÓN',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Retraerse para no exponerse al juicio. La lógica: \u201Csi me expongo, confirmo que soy insuficiente.\u201D El sistema se encoge para no ser visto.' },
          { title: 'Shock originario', text: 'Fracaso, evaluación negativa, crítica constante, ridículo público, bullying. La devaluación se registra como verdad identitaria.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema se retrajo para protegerte del juicio. Cuando exponerte significaba fracasar, la solución fue ya no exponerte más. Hoy vamos a descomprimir esa carga.\u201D' },
        ],
      },
      {
        heading: 'I4 \u2014 FIJACIÓN EXTERNA',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Mantener un culpable identificado. La injusticia fue real, la reparación nunca llegó. El sistema necesita organizar el dolor en algún lugar \u2014 y mantener al responsable cumple esa función.' },
          { title: 'Shock originario', text: 'Injusticia vivida donde la causa se identifica claramente fuera. Castigo injusto, despojo, guerra, acto involuntario que produce daño real.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema fijó la causa afuera cuando la injusticia ocurrió. Mantenerte identificando un responsable fue la forma de sobrevivir. Hoy vamos a descomprimir esa fijación.\u201D' },
        ],
      },
      {
        heading: 'I5 \u2014 COMPRESIÓN',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Clausurar el canal de expresión. La experiencia enseñó que expresarse es inútil o peligroso. \u201CMi expresión no tiene efecto \u2192 es inútil \u2192 me inhibo.\u201D' },
          { title: 'Shock originario', text: '\u201CNo llores / no grites\u201D, el secreto impuesto, el castigo por expresarse, el mind-planing (invalidación sistemática).' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema aprendió que expresarse generaba invalidación o castigo. El resultado fue clausurar el canal de salida. Hoy vamos a restaurar esa capacidad expresiva.\u201D' },
        ],
      },
    ],
    fraseClave: '\u201CLas primeras 5 improntas son de alta activación \u2014 el sistema está luchando. A partir de la I6, la progresión es hacia el colapso.\u201D',
  },
  {
    id: 'bloque-b12',
    num: 'B12',
    title: 'Improntas I6 a I9 \u2014 Colapso y Protección',
    subtitle: 'El sistema se apaga, se esconde, acumula o se fusiona',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12h8"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'A partir de la I6, el sistema ya no lucha \u2014 colapsa progresivamente. La I7 (Hibernación) es el punto de quiebre: el sistema se rinde. Las improntas I8 y I9 son estrategias de supervivencia desde la rendición.',
    },
    sections: [
      {
        heading: 'I6 \u2014 CAMUFLAJE',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Activar invisibilidad. La vergüenza hizo que ser visto fuera peligroso. La piel \u2014 la frontera con el mundo exterior \u2014 se convierte en el campo de batalla.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema activó el camuflaje. Cuando ser visible significaba ser atacado, la solución fue desaparecer. Hoy vamos a descomprimir esa necesidad de ocultarte.\u201D' },
        ],
      },
      {
        heading: 'I7 \u2014 HIBERNACIÓN',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Reducir al mínimo vital. El punto de quiebre: cuando la lucha ya no produce resultado, el sistema se apaga globalmente. No es depresión clínica \u2014 es un programa de ahorro de energía extremo.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema entró en hibernación. Cuando el esfuerzo dejó de producir resultado, la solución fue apagarse. Hoy vamos a reactivar lo que se cerró.\u201D' },
        ],
      },
      {
        heading: 'I8 \u2014 RESERVA',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Acumular todo por miedo a la escasez. El sistema aprendió que los recursos (amor, dinero, comida, atención) pueden desaparecer sin aviso. La solución: retener todo, no soltar nada.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema entró en modo reserva. Cuando la experiencia le enseñó que los recursos podían desaparecer sin aviso, la solución fue acumular todo. Hoy vamos a descomprimir esa alerta.\u201D' },
        ],
      },
      {
        heading: 'I9 \u2014 CONFLUENCIA',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Fusionarse con el otro para existir. Los límites del Yo no se desarrollaron completamente. La existencia propia dependió de la presencia de otro \u2014 como dos ríos que se funden perdiendo sus cauces.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema entró en confluencia con el otro. Cuando tu sentido de ser dependió completamente de alguien, la solución fue fusionarte. Hoy vamos a actualizar tu sistema para que pueda existir por sí mismo.\u201D' },
        ],
      },
    ],
    fraseClave: '\u201CLa hibernación (I7) es el punto de quiebre. Antes de ella, el sistema lucha. Después, se rinde y busca formas de sobrevivir desde la rendición.\u201D',
  },
  {
    id: 'bloque-b13',
    num: 'B13',
    title: 'Improntas I10 a I13 \u2014 Sistémicas y Existenciales',
    subtitle: 'Lealtad al síntoma, cargas ajenas, pérdida de territorio, corazón sellado',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'Las últimas 4 improntas son las más profundas. Involucran el sistema familiar (I10, I11), el territorio existencial (I12) y el corazón como centro del ser (I13). Empezamos con el sistema fragmentándose (I1) y terminamos con el corazón encapsulándose (I13).',
    },
    sections: [
      {
        heading: 'I10 \u2014 VINCULACIÓN',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Mantener el síntoma como forma de pertenecer al sistema familiar. El paciente no mejora \u2014 no por resistencia, sino porque sanar equivale a traicionar a alguien del sistema.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema se vinculó al síntoma como forma de pertenecer. En algún momento, mantenerte así fue la forma de ser fiel a algo importante. Hoy vamos a actualizar esa lealtad.\u201D' },
        ],
      },
      {
        heading: 'I11 \u2014 SUPERPOSICIÓN',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Operar dos programas biológicos simultáneamente. La persona carga información que no es suya \u2014 de un gemelo perdido, un ancestro, un duelo no resuelto del sistema. La tristeza es real pero la pérdida no fue suya.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema está en superposición: vive dos vidas simultáneamente. Parte de tu energía está dedicada a alguien que ya no está. Hoy vamos a distinguir lo que es tuyo de lo que no lo es.\u201D' },
        ],
      },
      {
        heading: 'I12 \u2014 DESARRAIGO',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'Emergencia existencial permanente sin territorio. Migración forzada, pérdida del hogar, exclusión del grupo. Sin territorio, el sistema entra en modo de emergencia y nunca sale.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema está en desarraigo. Cuando perdiste tu territorio, entró en emergencia existencial y nunca salió de ahí. Hoy vamos a enviarle la señal de que ya encontró un lugar seguro.\u201D' },
        ],
      },
      {
        heading: 'I13 \u2014 ENCAPSULAMIENTO',
        type: 'concepto-cards',
        items: [
          { title: 'Mecanismo', text: 'El corazón recibió un impacto directo y la solución fue sellarlo. No es separación (I8), ni fusión (I9), ni lealtad (I10) \u2014 es un IMPACTO con cierre posterior. El síndrome de Takotsubo demuestra que se puede morir literalmente de un corazón roto.' },
          { title: 'Frase terapéutica', text: '\u201CTu sistema encapsuló el dolor del corazón. Cuando el impacto fue demasiado, la solución fue sellar la zona para proteger al resto. Hoy vamos a descomprimir ese dolor para que el corazón pueda volver a abrirse.\u201D' },
        ],
      },
    ],
    frasesList: [
      { text: 'I9 se muere por acercarse. I13 se muere por alejarse.' },
      { text: 'En I10, el síntoma es propio pero lo mantiene por otro. En I11, el síntoma es de otro pero lo expresa la persona.' },
      { text: 'Las 13 improntas son 13 formas que tiene el sistema de protegerse.' },
    ],
  },
  {
    id: 'bloque-b14',
    num: 'B14',
    title: 'Síntesis, Sensaciones Viscerales y Cierre',
    subtitle: 'El vocabulario somático, las señales de vagotonia y el puente al Módulo 3',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'Las 20 sensaciones viscerales son un vocabulario para que el consultante pueda nombrar lo que siente en el cuerpo. Cada sensación tiene una señal primitiva \u2014 la función biológica original de esa sensación en un contexto de supervivencia animal. Las señales de vagotonia indican que el sistema está liberando carga.',
    },
    sections: [
      {
        heading: 'Las 20 sensaciones viscerales',
        type: 'concepto-list',
        items: [
          { title: 'Abandono', text: 'Señal primitiva: separación de la manada, retención de recursos.' },
          { title: 'Agresión', text: 'Señal primitiva: territorio invadido, preparación para lucha.' },
          { title: 'Vacío', text: 'Señal primitiva: pérdida de cría o pareja, hueco interno.' },
          { title: 'Soledad', text: 'Señal primitiva: aislamiento del grupo, desaceleración metabólica.' },
          { title: 'Frustración', text: 'Señal primitiva: bloqueo en la caza, tensión sin descarga.' },
          { title: 'Impotencia', text: 'Señal primitiva: parálisis de presa, no hay escape posible.' },
          { title: 'Insatisfacción', text: 'Señal primitiva: hambre que no sacia, búsqueda sin fin.' },
          { title: 'Vulnerabilidad', text: 'Señal primitiva: sin refugio, expuesto a depredadores.' },
          { title: 'Hambre', text: 'Señal primitiva: escasez de alimento, movilización de reservas.' },
          { title: 'Persecución', text: 'Señal primitiva: presa acechada, hipervigilancia crónica.' },
          { title: 'Amor difícil', text: 'Señal primitiva: vínculo con peligro, apego a lo que daña.' },
          { title: 'Angustia', text: 'Señal primitiva: amenaza invisible, opresión sin objeto.' },
          { title: 'Ira', text: 'Señal primitiva: defensa territorial, preparación para lucha.' },
          { title: 'Infelicidad', text: 'Señal primitiva: territorio estéril, sistema de recompensa apagado.' },
          { title: 'Desvalorización', text: 'Señal primitiva: posición inferior en jerarquía, encogerse.' },
          { title: 'Traición', text: 'Señal primitiva: ataque desde dentro de la manada.' },
          { title: 'Rendición / Me quiero morir', text: 'Señal primitiva: programa de muerte, apagado de sistemas.' },
          { title: 'Casi muerte', text: 'Señal primitiva: roce con depredador, hipervigilancia extrema.' },
          { title: 'Humillación', text: 'Señal primitiva: expulsión de la manada, muerte social.' },
          { title: 'Desvalorización estética', text: 'Señal primitiva: rechazo de apareamiento, vergüenza corporal.' },
        ],
      },
      {
        heading: 'Señales de vagotonia \u2014 indicadores positivos',
        type: 'concepto-grid',
        items: [
          { title: 'Llanto', text: 'Descarga emocional \u2014 no interrumpir.' },
          { title: 'Suspiros profundos', text: 'Liberación diafragmática \u2014 el sistema se regula.' },
          { title: 'Bostezos', text: 'Descarga vagal \u2014 reequilibrio parasimpático.' },
          { title: 'Temblores', text: 'Descarga del SNA \u2014 no interrumpir.' },
          { title: 'Cambios de temperatura', text: 'Redistribución vascular \u2014 el sistema se reorganiza.' },
          { title: 'Ruidos intestinales', text: 'Activación parasimpática digestiva \u2014 retorno al equilibrio.' },
        ],
      },
      {
        heading: 'Regla de oro',
        type: 'concepto-cards',
        items: [
          { title: 'No interrumpir la descarga', text: 'Cuando el sistema está descargando: acompañar, permitir, sostener. El error más común del facilitador novato es interrumpir: pasar el pañuelo, decir \u201Ctranquilo\u201D, preguntar si está bien.' },
          { title: 'Vagotonia vs. Crisis', text: 'Vagotonia: la persona llora/tiembla pero está PRESENTE y REGULADA \u2014 el sistema procesa. Crisis: la persona pierde el contacto con el aquí y ahora, se disocia, tiene pánico \u2014 el sistema está desbordado. En vagotonia: acompañar. En crisis: intervenir.' },
        ],
      },
    ],
    fraseClave: '\u201CHoy conocieron las 13 formas que tiene el sistema de protegerse. En el Módulo 3 van a aprender a trabajar con ellas: a identificar el escenario, construir la frase, y acompañar el proceso de actualización. Lo que aprendieron hoy es el QUÉ. Lo que van a aprender es el CÓMO.\u201D',
    reflexion: 'De las 13 improntas, ¿cuál resonó más contigo? ¿Cuál reconoces en tus pacientes? ¿Cuál te cuesta más diferenciar de otra?',
    tarea: 'Observar reacciones desproporcionadas durante las próximas 2 semanas. Registrar: dónde en el cuerpo, forma/peso/temperatura. NO interpretar. NO intentar trabajar la impronta. Solo observar y registrar.',
  },

  // ═══════════════════════════════════════════════
  // JORNADA 03 — Protocolo de Sesión e Integración
  // ═══════════════════════════════════════════════

  {
    id: 'bloque-b15',
    num: 'B15',
    title: 'El Protocolo Clínico Completo',
    subtitle: 'Estado Cero \u00B7 Protocolo Nuclear \u00B7 Calibración \u00B7 Reglas del Rastreo',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'Antes de cualquier técnica hay un protocolo invariable: preparar al terapeuta (Estado Cero), calibrar el test muscular, y ejecutar los 3 pasos nucleares. Si solo aprendes estos tres pasos, ya puedes trabajar.',
    },
    sections: [
      {
        heading: 'Estado Cero \u2014 Preparación del terapeuta',
        type: 'concepto-list',
        items: [
          { title: '1. Pies en la tierra', text: 'Sentir las plantas de los pies en el suelo. Contacto real, no ejercicio mental. Ahora.' },
          { title: '2. Respiración 4-7-8', text: 'Inhalar 4 tiempos, sostener 7, exhalar 8. Cinco respiraciones son suficientes para activar el vago ventral.' },
          { title: '3. Intención clara', text: 'Definir en una frase qué se va a buscar: \u201CQuiero ser sensible para buscar las improntas.\u201D Sin intención, el rastreo es adivinación.' },
        ],
      },
      {
        heading: 'Protocolo Nuclear \u2014 Los 3 pasos invariables',
        type: 'pilar-cards',
        items: [
          { subtitle: 'Paso 1', title: 'Identificar la impronta', text: '\u00BFCuál es el programa que está corriendo? Test muscular con las 13 improntas hasta obtener respuesta positiva.' },
          { subtitle: 'Paso 2', title: 'Buscar el instante', text: '\u00BFCuándo se instaló? Embudo de recesión de edad: hoy \u2192 20 días \u2192 año \u2192 quinquenios \u2192 gestación \u2192 transgeneracional.' },
          { subtitle: 'Paso 3', title: 'Conectar con la sensación', text: '\u00BFCómo se siente en el cuerpo? \u201C\u00BFDónde lo sientes? \u00BFQué forma tiene? \u00BFQué temperatura? \u00BFQué peso?\u201D' },
        ],
      },
      {
        heading: 'Calibración del test muscular',
        type: 'concepto-cards',
        items: [
          { title: 'Convención', text: 'Definir con el sistema: \u00BFqué es un sí? \u00BFqué es un no? El terapeuta establece el código de comunicación antes de empezar.' },
          { title: 'Test de validación', text: 'Nombre verdadero = sí. Nombre falso = no. Si el sistema dice sí a \u201C\u00BFEres Superman?\u201D \u2014 la calibración falló. Todo lo que se busque después será inválido.' },
          { title: 'Cuándo recalibrar', text: 'Respuestas ambiguas, cambio de posición del paciente, mucho tiempo transcurrido, sospecha de que el terapeuta se está proyectando.' },
        ],
      },
      {
        heading: 'Las 5 reglas de oro del rastreo',
        type: 'concepto-list',
        items: [
          { title: '1. Todo en binario', text: 'El cuerpo no puede decir \u201Ces la 3 y la 4 combinadas.\u201D Solo sí o no.' },
          { title: '2. Una variable por pregunta', text: 'No: \u201C\u00BFcuál es la impronta, la sensación y el instante?\u201D Sí: una cosa a la vez.' },
          { title: '3. No asumir', text: 'Si la intuición dice \u201Cdos\u201D, igual rastrea desde la uno. La intuición orienta, el test confirma.' },
          { title: '4. Ante la duda, recalibrar', text: 'Reorientarse y verificar antes de seguir. Mejor perder 30 segundos que perder toda la sesión.' },
          { title: '5. El test es una puerta, no un diagnóstico', text: 'Es para entrar al fenómeno. Lo que importa es lo que sucede una vez dentro.' },
        ],
      },
    ],
    frasesList: [
      { text: 'Un terapeuta con nervio vago presente regula. No necesita ser bueno \u2014 necesita estar presente.' },
      { text: 'Si en sesiones consecutivas aparece siempre la misma impronta para distintos pacientes, es probable que sea la impronta del propio terapeuta.' },
    ],
  },
  {
    id: 'bloque-b16',
    num: 'B16',
    title: 'Context Engineering \u2014 Las 7 Coordenadas',
    subtitle: 'El sistema diagnóstico del inconsciente biológico',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    ideaCentral: {
      label: 'Principio fundamental',
      text: 'Mientras más contexto específico se proporciona al inconsciente biológico, más precisa es la información que devuelve. Una pregunta vaga activa millones de archivos. Una pregunta con 7 coordenadas activa exactamente el archivo necesario.',
    },
    sections: [
      {
        heading: 'Las 7 coordenadas del escenario neurofisiológico',
        type: 'concepto-list',
        items: [
          { title: 'Fase 1 \u2014 TEMPORAL', text: '\u00BFCuándo se activó? Se encuentra con el embudo de recesión de edad: hoy \u2192 20 días \u2192 año \u2192 quinquenios \u2192 gestación \u2192 transgeneracional (línea materna y paterna).' },
          { title: 'Fase 2 \u2014 PATRÓN', text: '\u00BFQué impronta se instaló? Test muscular recorriendo las 13 improntas hasta obtener respuesta.' },
          { title: 'Fase 3 \u2014 SOMÁTICO', text: '\u00BFQué sensación se grabó? \u201C\u00BFDónde lo sientes en el cuerpo? \u00BFQué forma, peso, temperatura tiene?\u201D La ínsula anterior mapea el cuerpo desde adentro.' },
          { title: 'Fase 4 \u2014 RELACIONAL', text: '\u00BFQuién estuvo involucrado? Test: \u00BFmamá? \u00BFpapá? \u00BFpareja? \u00BFhermano? \u00BFotro? Se identifica la figura vincular del evento.' },
          { title: 'Fase 5 \u2014 EVENTO', text: '\u00BFQué pasó? No revivir \u2014 solo localizar la categoría: \u00BFfue pérdida? \u00BFtraición? \u00BFviolencia? \u00BFabandono? \u00BFinjusticia? \u00BFinvalidación?' },
          { title: 'Fase 6 \u2014 SIGNIFICADO', text: '\u00BFQué creencia se instaló? \u201C\u00BFQué concluyó el cuerpo?\u201D No lo que piensa hoy \u2014 lo que el N3 decidió en ese momento: \u201Cno soy suficiente\u201D, \u201Cel mundo es peligroso\u201D, \u201Cme van a dejar.\u201D' },
          { title: 'Fase 7 \u2014 FUNCIÓN', text: '\u00BFPara qué sirve hoy? \u201C\u00BFDe qué te protege este patrón?\u201D El patrón siempre tiene una función adaptativa actual \u2014 si no la tuviera, ya se habría extinguido.' },
        ],
      },
      {
        heading: 'La frase terapéutica integrativa',
        type: 'concepto-cards',
        items: [
          { title: 'Estructura', text: '\u201CA los [CUÁNDO], cuando [QUIÉN] hizo [QUÉ PASÓ], mi sistema activó un patrón de [IMPRONTA] y sentí [SENSACIÓN]. La creencia que se grabó fue [SIGNIFICADO]. Hoy este patrón me permite [FUNCIÓN].\u201D' },
          { title: 'Cómo funciona', text: 'Al repetir la frase 5-10 veces, se activan simultáneamente todos los nodos de la red de memoria asociada al conflicto. Emergen señales de vagotonia: llanto, suspiros, bostezos, temblores. Eso indica que el N3 está procesando.' },
          { title: 'Regla clave', text: 'Cada palabra de la frase fue verificada por test muscular. No se inventa, no se interpreta, no se asume. La frase es síntesis del archivo neurofisiológico, no narrativa del trauma.' },
        ],
      },
    ],
    fraseClave: '\u201CContext Engineering no diagnostica enfermedades. Localiza archivos. La diferencia es fundamental.\u201D',
  },
  {
    id: 'bloque-b17',
    num: 'B17',
    title: 'La Técnica Mínima de Descompresión',
    subtitle: 'Los 5 pasos: del reconocimiento a la transformación',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M12 2a3 3 0 0 0-3 3v3h6V5a3 3 0 0 0-3-3z"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'La técnica mínima es el corazón del trabajo con improntas. Identifica la sensación, la externaliza, dialoga con ella y la transforma. Un patrón de supervivencia solo persiste porque no se completó. La técnica inicia ese proceso de completación.',
    },
    sections: [
      {
        heading: 'Los 5 pasos de la técnica mínima',
        type: 'concepto-list',
        items: [
          { title: 'Paso 0 \u2014 Frase de reconocimiento', text: 'El facilitador lee frases. El participante elige la que el cuerpo reconoce \u2014 no la que suena correcta, sino la que \u201Ccae\u201D en el cuerpo. Se repite 2-3 veces con una mano en la zona de la sensación. Observar: suspiro, cambio de postura, ojos humedecidos = momento de entrada.' },
          { title: 'Paso 1 \u2014 Localización', text: '\u201CLleva la atención al lugar del cuerpo donde encontramos esa sensación. No la analices. Solo obsérvala como si fueras un testigo externo.\u201D' },
          { title: 'Paso 2 \u2014 Externalización', text: '\u201CSi esa sensación tuviera una forma, \u00BFqué forma tendría? \u00BFTemperatura? \u00BFColor?\u201D Luego: \u201CPonlo frente a ti, a un brazo de distancia. Que flote ahí.\u201D' },
          { title: 'Paso 3 \u2014 Reconocimiento sin fusión', text: '\u201CObserva eso que flota. Fue lo que el sistema hizo para sobrevivir ese instante. No falló \u2014 te protegió. Solo ya no necesita estar dentro.\u201D' },
          { title: 'Paso 4 \u2014 Transformación', text: '\u201CImagina que hay una luz del color que necesite, que envuelve eso que flota. No lo elimina. Lo transforma. Observa qué pasa.\u201D Silencio de 60-90 segundos. Observar señales de descarga.' },
        ],
      },
      {
        heading: 'Señales de descarga válidas',
        type: 'concepto-grid',
        items: [
          { title: 'Suspiro profundo', text: 'Liberación diafragmática espontánea.' },
          { title: 'Cambio de temperatura', text: 'Calor o frío en la zona de la sensación.' },
          { title: 'Tensión que cede', text: 'Los hombros bajan, la mandíbula se afloja.' },
          { title: 'Ojos humedecidos', text: 'Sin llanto necesariamente \u2014 solo humedad.' },
          { title: 'Bostezo profundo', text: 'Descarga vagal, reequilibrio parasimpático.' },
          { title: 'Más espacio', text: 'Sensación de que el pecho o vientre se expande.' },
        ],
      },
    ],
    fraseClave: '\u201CTiempo mínimo por zona: 90 segundos. Cuando una persona conecta realmente con lo que siente, el cuerpo toma 90 segundos para empezar a procesarlo.\u201D',
  },
  {
    id: 'bloque-b18',
    num: 'B18',
    title: 'El Acto de Quiebre Somático',
    subtitle: 'La pieza que faltaba \u2014 actualización irreversible de la impronta',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'La técnica mínima descomprime. Pero todo lo que se descomprime es reversible. El Acto de Quiebre produce la actualización irreversible: el cuerpo HACE lo que la impronta dice que no puede hacer \u2014 y sobrevive. Esa información no se borra.',
    },
    sections: [
      {
        heading: '\u00BFPor qué la descompresión sola no basta?',
        type: 'concepto-cards',
        items: [
          { title: 'El problema', text: 'La técnica mínima externaliza y transforma \u2014 pero todo ocurre en la representación mental. El paciente imagina la luz, visualiza el cambio. Y todo eso puede deshacerse. El N3 necesita una experiencia FÍSICA que contradiga su predicción.' },
          { title: 'La solución', text: 'Reconsolidación de memoria: cuando una memoria está activa (ya lo está tras los pasos 0-4), una experiencia que contradice su predicción central la actualiza permanentemente. No se borra \u2014 se reescribe.' },
        ],
      },
      {
        heading: 'Los 13 actos de quiebre',
        type: 'concepto-list',
        items: [
          { title: 'I1 Desacople', text: 'Predicción: \u201CSi lo siento, me destruye.\u201D Acto: sentirlo 90 seg con presencia. Frase: \u201CLo estoy sintiendo y sigo aquí.\u201D' },
          { title: 'I2 Acorazamiento', text: 'Predicción: \u201CSi me ablando, me atacan.\u201D Acto: soltar la tensión con alguien presente detrás. Frase: \u201CSuelto la guardia. Estoy seguro aquí.\u201D' },
          { title: 'I3 Retracción', text: 'Predicción: \u201CSi me muestro, me rechazan.\u201D Acto: erguirse, abrir brazos, ocupar espacio. Frase: \u201CEstoy aquí. Ocupo este lugar.\u201D' },
          { title: 'I4 Fijación Externa', text: 'Predicción: \u201CSi suelto al culpable, no hay explicación.\u201D Acto: abrir los puños lentamente. Frase: \u201CSuelto esto. Mi dolor es real sin necesitar un culpable.\u201D' },
          { title: 'I5 Compresión', text: 'Predicción: \u201CSi hablo, me castigan.\u201D Acto: decir en voz alta lo no dicho. Frase: \u201CMi voz existe. Alguien la escuchó.\u201D' },
          { title: 'I6 Camuflaje', text: 'Predicción: \u201CSi me ven, me destruyen.\u201D Acto: contacto visual con el terapeuta 30 seg. Frase: \u201CMe están viendo y estoy bien.\u201D' },
          { title: 'I7 Hibernación', text: 'Predicción: \u201CNo tengo fuerza.\u201D Acto: empujar la pared con toda la fuerza 15-20 seg. Frase: \u201CMi cuerpo tiene fuerza. Puedo empujar.\u201D' },
          { title: 'I8 Reserva', text: 'Predicción: \u201CSi suelto, me quedo sin nada.\u201D Acto: abrir las manos, soltar. Frase: \u201CSolté y sigo teniendo. No me quedé vacío.\u201D' },
          { title: 'I9 Confluencia', text: 'Predicción: \u201CSin el otro no existo.\u201D Acto: sentir los bordes del propio cuerpo. Frase: \u201CExisto sin necesitar a nadie para ser.\u201D' },
          { title: 'I10 Vinculación', text: 'Predicción: \u201CSi mejoro, traiciono.\u201D Acto: respirar bienestar, permitir una sonrisa. Frase: \u201CEstoy bien en este momento y nadie se muere por eso.\u201D' },
          { title: 'I11 Superposición', text: 'Predicción: \u201CCargo algo que no es mío.\u201D Acto: sacudir el cuerpo vigorosamente 15-20 seg. Frase: \u201CLo que no es mío, lo devuelvo.\u201D' },
          { title: 'I12 Desarraigo', text: 'Predicción: \u201CNo tengo territorio.\u201D Acto: pisar fuerte, sentir el piso. Frase: \u201CEste suelo me sostiene. Estoy parado en mi lugar.\u201D' },
          { title: 'I13 Encapsulamiento', text: 'Predicción: \u201CSi abro el corazón, me destruye.\u201D Acto: mano en pecho, sentir el latido 30 seg en silencio. Frase: \u201CMi corazón sigue latiendo. Puede abrirse un milímetro.\u201D' },
        ],
      },
      {
        heading: 'Los 6 criterios \u2014 \u00BFfuncionó el acto?',
        type: 'concepto-grid',
        items: [
          { title: '1. Fue ejecutado', text: 'El cuerpo se movió. No fue imaginado.' },
          { title: '2. Contradijo la predicción', text: 'El cuerpo hizo lo que \u201Cno podía hacer.\u201D' },
          { title: '3. Fue testificado', text: 'El facilitador lo presenció. No fue en soledad.' },
          { title: '4. Produjo respuesta', text: 'Suspiro, temblor, calor, lágrimas, cambio postural.' },
          { title: '5. Fue nombrado', text: 'La frase se dijo DURANTE el acto, no después.' },
          { title: '6. Dentro de la ventana', text: 'La impronta estaba reactivada en los pasos previos.' },
        ],
      },
    ],
    fraseClave: '\u201CLo irreversible no es un objeto roto \u2014 es que el cuerpo HIZO lo que \u2018no podía hacer\u2019 y sobrevivió. Esa información no se borra.\u201D',
  },
  {
    id: 'bloque-b19',
    num: 'B19',
    title: 'Los 5 Pasos Post-Escenario',
    subtitle: 'Concientizar \u2192 Descomprimir \u2192 Reprocesar \u2192 Resignificar \u2192 Actualizar',
    isTame: false,
    iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    ideaCentral: {
      label: 'Idea central',
      text: 'Los 5 pasos post-escenario integran todo lo aprendido en una secuencia clínica completa. Es el flujo que conecta Context Engineering con la Técnica Mínima y el Acto de Quiebre en un solo protocolo.',
    },
    sections: [
      {
        heading: 'La secuencia completa',
        type: 'pilar-cards',
        items: [
          { subtitle: 'Paso 1', title: 'CONCIENTIZAR', text: 'Hacer consciente lo que el N3 almacena. Herramienta: la frase terapéutica integrativa (7 coordenadas), repetida 5-10 veces hasta vagotonia.' },
          { subtitle: 'Paso 2', title: 'DESCOMPRIMIR', text: 'Liberar la energía retenida. Herramienta: Técnica Mínima (Pasos 0-4: reconocimiento \u2192 localización \u2192 externalización \u2192 transformación).' },
          { subtitle: 'Paso 3', title: 'REPROCESAR', text: 'Producir el quiebre irreversible. Herramienta: Acto de Quiebre Somático (60-120 seg). El cuerpo hace lo que \u201Cno podía\u201D y sobrevive.' },
          { subtitle: 'Paso 4', title: 'RESIGNIFICAR', text: 'Nueva conclusión del sistema. \u201CSi el sistema de entonces hubiera tenido lo que sabes hoy, \u00BFqué conclusión diferente habría sacado?\u201D Construir con las palabras del paciente, no imponer.' },
          { subtitle: 'Paso 5', title: 'ACTUALIZAR', text: 'Instalar la nueva predicción. Frase de actualización + anclaje somático en la zona del cuerpo que respondió. Verificar con test muscular.' },
        ],
      },
      {
        heading: 'El flujo completo de sesión',
        type: 'concepto-list',
        items: [
          { title: 'Preparación', text: 'Estado Cero del terapeuta (pies, respiración, intención) \u2192 Calibración del test muscular.' },
          { title: 'Diagnóstico', text: 'Context Engineering: rastrear las 7 coordenadas del escenario neurofisiológico.' },
          { title: 'Intervención', text: 'Frase terapéutica (5-10x) \u2192 Técnica Mínima (Pasos 0-4) \u2192 Acto de Quiebre (Paso 4.5) \u2192 Resignificar \u2192 Actualizar.' },
          { title: 'Verificación', text: 'Test muscular: \u00BFla impronta sigue activa en ese instante? Si sí: buscar otra capa. Si no: cierre.' },
          { title: 'Cierre', text: 'Mano en pecho, pies en el suelo, 3 respiraciones. \u201CLo que se movió hoy continúa reorganizándose.\u201D' },
        ],
      },
    ],
    fraseClave: '\u201CEn el Módulo 2 aprendieron el QUÉ \u2014 las 13 formas de protección. Hoy aprendieron el CÓMO \u2014 el protocolo completo para encontrar el archivo, activarlo, descomprimirlo, y producir el quiebre que lo actualiza para siempre.\u201D',
    reflexion: '\u00BFEn qué paso del protocolo te sientes más seguro? \u00BFEn cuál necesitas más práctica? \u00BFQué fue lo más sorprendente del Acto de Quiebre?',
    tarea: 'Practicar el protocolo completo con 2-3 personas (familia, amigos, pacientes). Registrar: impronta encontrada, coordenadas, acto de quiebre aplicado, señales de descarga. NO trabajar I13 sin supervisión.',
  },
]
