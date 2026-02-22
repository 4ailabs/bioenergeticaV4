export const stats = [
  { value: 19.5, unit: 'hrs', label: 'Horas de Formación' },
  { value: 15, unit: '', label: 'Módulos Técnicos' },
  { value: 10, unit: '', label: 'Fases de Sesión Clínica' },
]

export const profileCards = [
  'Sientes que algo te frena —en relaciones, en dinero, en decisiones— pero no logras identificar qué es.',
  'Repites los mismos patrones aunque conscientemente no quieras. Sabes lo que deberías hacer, pero no lo haces.',
  'Eres terapeuta, coach o profesional de salud y quieres incorporar herramientas corporales concretas a tu práctica.',
  'Te interesa entender por qué el cuerpo guarda memorias emocionales y cómo eso afecta tu vida cotidiana.',
]

export interface JornadaSession {
  time: string
  items: string[]
}

export interface JornadaData {
  num: string
  date: string
  title: string
  subtitle: string
  sessions: JornadaSession[]
}

export const jornadas: JornadaData[] = [
  {
    num: '01',
    date: '21 FEBRERO',
    title: 'El Cuerpo como Sistema de Inteligencia Distribuida',
    subtitle: 'Aprende a leer las señales que tu cuerpo ya te está enviando',
    sessions: [
      {
        time: 'Bloque I',
        items: [
          'Introducción a la Bioenergética V4 — TAME: Aproximación Tecnológica a la Mente en Todas Partes',
          'La inteligencia no es una propiedad exclusiva del cerebro: células, tejidos y órganos como sistemas cognitivos',
          'Bioelectricidad: el sistema de comunicación eléctrica presente en todas las células del cuerpo',
          'El campo bioeléctrico colectivo: cómo cada célula toma decisiones basadas en la inteligencia del tejido',
          'Aislamiento bioeléctrico: qué ocurre cuando el campo se fragmenta por trauma o conflicto emocional no resuelto',
        ],
      },
      {
        time: 'Bloque II',
        items: [
          'Test muscular: principio, tipos y protocolo de calibración',
          'Técnicas de acceso al inconsciente: test muscular, péndulo, O-ring, test bilateral y cuestionamiento mental',
          'Comunicación con el inconsciente: preguntas, calibración y lectura de respuestas',
          'Cartografía de las Dinámicas de una Vivencia: el inconsciente como motor de búsqueda',
          'Métodos de rastreo: sistema de niveles temporales (presente, pasado personal, transgeneracional, sistema actual)',
          'Rangos temporales de precisión: 0–7, 7–14, 14–21 años y etapa gestacional',
        ],
      },
    ],
  },
  {
    num: '02',
    date: '7 MARZO',
    title: 'Improntas de Supervivencia',
    subtitle: 'Identifica el patrón que más te frena en relaciones, decisiones y dinero',
    sessions: [
      {
        time: 'Bloque I',
        items: [
          'Los 7 Patrones de Supervivencia: estructura, lógica y función biológica',
          'Impronta de Supervivencia Defensiva',
          'Impronta de Supervivencia Relacional',
          'Impronta de Supervivencia por Insuficiencia',
          'Impronta de Supervivencia Reactiva',
          'Emoción central, correlato físico y momento de origen de cada impronta',
        ],
      },
      {
        time: 'Bloque II',
        items: [
          'Impronta de Supervivencia por Fractura',
          'Impronta de Supervivencia por Rendición',
          'Mapeo relacional: identificación de las personas involucradas en el patrón (nuclear, extendida, figuras de autoridad)',
          'Prohibiciones y operadores modales: mandatos inconscientes y creencias limitantes',
          'Dimensión transgeneracional: duelo no resuelto, exclusión y secreto familiar',
          'Terapia a distancia: método frecuencial — fundamentos y aplicación práctica',
        ],
      },
    ],
  },
  {
    num: '03',
    date: '21 MARZO',
    title: 'Protocolo de Sesión e Integración',
    subtitle: 'Conduce una sesión completa: del patrón identificado a la transformación',
    sessions: [
      {
        time: 'Bloque I',
        items: [
          'Protocolo de sesión en 5 fases: apertura, identificación, rastreo temporal, localización corporal y frase de actualización',
          'Las 7 coordenadas de Cartografía de las Dinámicas de una Vivencia: construcción sistemática del escenario energético completo',
          'Identificación de la creencia limitante instalada por el patrón',
          'La dinámica actual de la expresión corporal: ¿qué está organizando hoy en tu experiencia? Las 6 funciones principales',
        ],
      },
      {
        time: 'Bloque II',
        items: [
          'Construcción de la frase de actualización de la información completa desde las 7 coordenadas',
          'Métodos energéticos de reprocesamiento y reintegración de la información',
          'Técnicas de Reestructuración Simbólica Somato-Emocional',
          'El facilitador como acompañante: fundamentos del encuadre de la sesión',
          'Cierre del curso',
        ],
      },
    ],
  },
]

export const faqItems = [
  {
    question: '¿Necesito experiencia previa en terapia o bioenergética?',
    answer: 'No. El programa empieza desde cero y está diseñado para que cualquier persona pueda seguirlo. Los conceptos se explican desde sus fundamentos en cada jornada.',
  },
  {
    question: '¿Es terapia? ¿Tengo que hablar de mis problemas personales?',
    answer: 'No es terapia clínica. Es formación en un protocolo. Aprenderás a trabajar con patrones de forma sistemática —en ti y en otros— pero no es un espacio de exposición personal obligatoria.',
  },
  {
    question: '¿Puedo tomar el curso desde otro país o ciudad?',
    answer: 'Sí. Hay conexión online simultánea en tiempo real. No es una grabación: participas en vivo con el grupo presencial desde donde estés.',
  },
]

export const marqueeItems = [
  'TRANSFORMA LO QUE TE DETIENE',
  'LIBERA LOS PATRONES QUE TE LIMITAN',
  'RECONECTA CON TU INTELIGENCIA INNATA',
  'CARTOGRAFÍA DEL CAMPO ENERGÉTICO',
  'IMPRONTAS DE SUPERVIVENCIA',
]

export const modalidadPanels = [
  {
    title: '¿Quién puede asistir?',
    text: 'Terapeutas, profesionales de la salud, estudiantes y cualquier persona interesada en el bienestar profundo que desee aprender desde cero. Inicio absoluto.',
  },
  {
    title: '¿Qué incluye?',
    text: 'Manual oficial Bioenergética V4.0 (digital) y Certificado de participación con valor curricular (10:00 a 18:00 h cada jornada).',
  },
  {
    title: 'Información General',
    text: 'Modalidad Híbrida: Presencial en el Instituto o conexión Online simultánea. Material oficial incluido.',
  },
]
