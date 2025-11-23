export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?",
    options: ["Watt (W)", "Newton (N)", "Joule (J)", "Pascal (Pa)"],
    correctAnswer: 1,
    explanation: "En el SI, la fuerza se mide en Newtons (N)."
  },
  {
    id: 2,
    question: "¿Qué magnitud mide el cambio de posición de un objeto?",
    options: ["Tiempo", "Distancia", "Velocidad", "Aceleración"],
    correctAnswer: 1,
    explanation: "La distancia es la medida del desplazamiento o cambio de posición de un objeto."
  },
  {
    id: 3,
    question: "¿El movimiento rectilíneo uniforme (MRU) se caracteriza por?",
    options: ["Velocidad constante", "Aceleración constante", "Aceleración variable", "Movimiento circular"],
    correctAnswer: 0,
    explanation: "En MRU la velocidad es constante y la aceleración es cero."
  },
  {
    id: 4,
    question: "¿Cuál es la unidad de medida de la aceleración?",
    options: ["m/s", "m/s²", "km/h", "N·s"],
    correctAnswer: 1,
    explanation: "La aceleración se mide en metros por segundo al cuadrado (m/s²)."
  },
  {
    id: 5,
    question: "¿Qué describe la primera Ley de Newton?",
    options: [
      "Acción y reacción",
      "Inercia",
      "Relación entre masa y energía",
      "Igualdad de presión"
    ],
    correctAnswer: 1,
    explanation: "La primera ley describe el principio de inercia."
  },
  {
    id: 6,
    question: "La fuerza resultante es cero cuando un cuerpo está:",
    options: ["En caída libre", "En MRUA", "En reposo o MRU", "Oscilando"],
    correctAnswer: 2,
    explanation: "Si la fuerza neta es cero, el cuerpo está en reposo o en movimiento rectilíneo uniforme."
  },
  {
    id: 7,
    question: "¿Cuál es la fórmula del trabajo mecánico?",
    options: ["W = F · d", "W = m · a", "W = m · v", "W = P · t"],
    correctAnswer: 0,
    explanation: "El trabajo es el producto de la fuerza por la distancia recorrida en su dirección."
  },
  {
    id: 8,
    question: "¿Qué tipo de energía posee un objeto por su movimiento?",
    options: ["Energía potencial", "Energía cinética", "Energía solar", "Energía térmica"],
    correctAnswer: 1,
    explanation: "La energía cinética depende de la masa y la velocidad del objeto."
  },
  {
    id: 9,
    question: "En caída libre, la aceleración cerca de la superficie terrestre es aproximadamente:",
    options: ["2 m/s²", "5.8 m/s²", "9.8 m/s²", "15 m/s²"],
    correctAnswer: 2,
    explanation: "La aceleración de gravedad es aproximadamente 9.8 m/s²."
  },
  {
    id: 10,
    question: "La velocidad instantánea es:",
    options: [
      "La velocidad promedio en un intervalo",
      "La velocidad en un punto específico del tiempo",
      "La velocidad mínima posible",
      "Siempre constante"
    ],
    correctAnswer: 1,
    explanation: "La velocidad instantánea es la velocidad en un momento exacto."
  },
  {
    id: 11,
    question: "Un vector se caracteriza por:",
    options: [
      "Solo magnitud",
      "Solo dirección",
      "Magnitud y dirección",
      "Magnitud y volumen"
    ],
    correctAnswer: 2,
    explanation: "Un vector tiene magnitud, dirección y sentido."
  },
  {
    id: 12,
    question: "¿Cuál es la unidad de trabajo en el Sistema Internacional?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "El trabajo se mide en Joules (J)."
  },
  {
    id: 13,
    question: "¿Qué describe la tercera Ley de Newton?",
    options: [
      "La fuerza neta es igual a masa por aceleración",
      "Todo cuerpo permanece en reposo hasta que actúe una fuerza",
      "A toda acción corresponde una reacción igual y opuesta",
      "La energía no se crea ni se destruye"
    ],
    correctAnswer: 2,
    explanation: "La tercera ley establece el principio de acción y reacción."
  },
  {
    id: 14,
    question: "La energía potencial gravitacional depende de:",
    options: [
      "Masa y velocidad",
      "Masa, gravedad y altura",
      "Tiempo y aceleración",
      "Potencia y fuerza"
    ],
    correctAnswer: 1,
    explanation: "Epg = m · g · h."
  },
  {
    id: 15,
    question: "Un choque perfectamente elástico se caracteriza porque:",
    options: [
      "Se pierde energía mecánica",
      "Se deforma el cuerpo",
      "Se conserva la energía mecánica",
      "No hay fuerzas aplicadas"
    ],
    correctAnswer: 2,
    explanation: "En choques elásticos se conserva el momento y la energía mecánica."
  },
  {
    id: 16,
    question: "La cantidad de movimiento (momentum) se define como:",
    options: ["p = m / v", "p = m · v", "p = m · a", "p = F · t"],
    correctAnswer: 1,
    explanation: "El momentum es masa multiplicada por velocidad."
  },
  {
    id: 17,
    question: "¿Qué mide la potencia mecánica?",
    options: [
      "El trabajo realizado por unidad de tiempo",
      "El impulso total",
      "La distancia recorrida",
      "El cambio de energía térmica"
    ],
    correctAnswer: 0,
    explanation: "P = W / t."
  },
  {
    id: 18,
    question: "Un objeto de 10 kg se mantiene en reposo sobre una mesa. La fuerza normal es:",
    options: ["0 N", "10 N", "49 N", "98 N"],
    correctAnswer: 3,
    explanation: "La normal es igual al peso: N = m·g ≈ 10 × 9.8 = 98 N."
  },
  {
    id: 19,
    question: "En movimiento circular uniforme, la aceleración siempre apunta hacia:",
    options: [
      "El exterior de la trayectoria",
      "La dirección del movimiento",
      "El centro de la trayectoria",
      "La dirección opuesta a la velocidad"
    ],
    correctAnswer: 2,
    explanation: "La aceleración centrípeta apunta hacia el centro del círculo."
  },
  {
    id: 20,
    question: "En ausencia de fuerzas externas, el momento lineal total de un sistema:",
    options: [
      "Aumenta con el tiempo",
      "Disminuye con el tiempo",
      "Permanece constante",
      "Se convierte en energía"
    ],
    correctAnswer: 2,
    explanation: "El momento total se conserva si no hay fuerzas externas."
  }
];
