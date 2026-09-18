// src/human/data/anatomyData.ts

export const ORGAN_SECTIONS = [
  {
    key: "brain",
    eyebrow: "Primera parada · Cerebro",
    title: "La nicotina llega al cerebro en unos diez segundos",
    paragraphs: [
      "Ese golpe rápido de dopamina es lo que engancha. Con el tiempo, el cerebro deja de producirla con tanta facilidad por sí solo y empieza a necesitar el cigarro para sentirse bien, aunque sea un momento.",
      "Fumar también duplica el riesgo de sufrir un ictus, y eso no depende de cuánto lleves fumando, sino de que sigas haciéndolo."
    ]
  },
  {
    key: "boca",
    eyebrow: "Boca y garganta",
    title: "Todo pasa primero por aquí",
    paragraphs: [
      "El humo mancha los dientes, reseca las encías y va apagando el sentido del gusto y del olfato, casi sin que te des cuenta.",
      "Esa irritación constante es también la razón por la que fumar aumenta el riesgo de cáncer de boca, laringe y esófago."
    ]
  },
  {
    key: "pulmones",
    eyebrow: "Pulmones",
    title: "Aquí es donde más se nota, tarde o temprano",
    paragraphs: [
      "El alquitrán se va acumulando en las vías respiratorias y reduce, caladita a caladita, la capacidad de los pulmones para llenarse de aire.",
      "Con los años esto se traduce en tos que no se va, bronquitis de repetición y, en muchos casos, enfermedad pulmonar obstructiva crónica."
    ]
  },
  {
    key: "corazon",
    eyebrow: "Corazón",
    title: "El corazón nota cada cigarro al momento",
    paragraphs: [
      "La nicotina acelera el pulso y sube la tensión de inmediato. El monóxido de carbono del humo, mientras tanto, ocupa en la sangre el lugar que le corresponde al oxígeno.",
      "Por eso fumar está entre las causas evitables más comunes de infarto, incluso en personas jóvenes."
    ]
  },
  {
    key: "circulacion",
    eyebrow: "Sistema circulatorio",
    title: "La sangre también carga con esto",
    paragraphs: [
      "El tabaco endurece y estrecha las arterias, así que cuesta más que la sangre llegue bien hasta las manos y los pies.",
      "Con el tiempo, esto aumenta el riesgo de coágulos y de enfermedad arterial periférica, sobre todo en las piernas."
    ]
  },
  {
    key: "piel",
    eyebrow: "Piel",
    title: "Esto es lo que se ve desde fuera",
    paragraphs: [
      "Fumar reduce el riego sanguíneo de la piel y descompone el colágeno, así que las arrugas suelen aparecer antes de tiempo, sobre todo alrededor de los labios y los ojos.",
      "Las heridas también tardan más en cicatrizar, algo que se nota especialmente después de una operación."
    ]
  },
  {
    key: "estomago",
    eyebrow: "Aparato digestivo",
    title: "Más abajo, el estómago y los intestinos también pagan la cuenta",
    paragraphs: [
      "Fumar relaja el músculo que separa el estómago del esófago, así que el ácido sube con más facilidad y aparece el reflujo.",
      "También debilita las defensas naturales del estómago, lo que aumenta el riesgo de úlceras a lo largo de todo el tubo digestivo."
    ]
  },
  {
    key: "huesos",
    eyebrow: "Última parada · Huesos",
    title: "Hasta los huesos lo notan",
    paragraphs: [
      "Fumar reduce poco a poco la densidad ósea, lo que hace los huesos más frágiles con la edad y las fracturas más lentas de curar.",
      "Es uno de los efectos menos conocidos del tabaco, y también uno de los que más limita la independencia con los años."
    ]
  }
];

export const TIMELINE = [
  { time: "20 min", text: "El pulso y la tensión empiezan a bajar a niveles normales." },
  { time: "12 horas", text: "El monóxido de carbono en sangre vuelve a lo normal y el oxígeno vuelve a circular con soltura." },
  { time: "2–12 semanas", text: "La circulación mejora y los pulmones empiezan a funcionar mejor. Toser y respirar cuesta menos." },
  { time: "1 año", text: "El riesgo de sufrir un infarto se reduce a una fracción del que tenía un fumador." },
  { time: "5 años", text: "El riesgo de ictus se acerca cada vez más al de alguien que nunca ha fumado." }
];

export const ZOOMS: Record<string, { cx: number, cy: number, scale: number }> = {
  intro: { cx: 150, cy: 300, scale: 1 },
  brain: { cx: 150, cy: 60, scale: 3.4 },
  boca: { cx: 150, cy: 120, scale: 2.9 },
  pulmones: { cx: 150, cy: 200, scale: 1.9 },
  corazon: { cx: 150, cy: 215, scale: 2.7 },
  circulacion: { cx: 90, cy: 250, scale: 2.1 },
  piel: { cx: 150, cy: 280, scale: 1.05 },
  estomago: { cx: 148, cy: 300, scale: 1.7 },
  huesos: { cx: 150, cy: 560, scale: 1.55 },
  timeline: { cx: 150, cy: 400, scale: 1 },
  cta: { cx: 150, cy: 400, scale: 1 }
};

export const DAMAGE = [193, 98, 43];
export const HEALTH = [79, 166, 140];