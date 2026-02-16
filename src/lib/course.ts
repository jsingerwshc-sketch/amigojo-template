export type Theme = "aztec" | "mayan" | "andean" | "mexicocity";

export type Item =
  | { type: "multiple_choice"; prompt: string; answer: string; choices: string[]; tip?: string }
  | { type: "fill_blank"; prompt: string; answer: string; tip?: string };

export type Lesson = {
  id: string;
  title: string;
  theme: Theme;
  items: Item[];
};

export type Unit = {
  id: string;
  title: string;
  lessons: Lesson[];
};

const themes: Theme[] = ["mexicocity", "aztec", "mayan", "andean"];

function mc(prompt: string, answer: string, choices: string[], tip?: string): Item {
  return { type: "multiple_choice", prompt, answer, choices, tip };
}

function fb(prompt: string, answer: string, tip?: string): Item {
  return { type: "fill_blank", prompt, answer, tip };
}

export const course: Unit[] = [
  {
    id: "u0",
    title: "Unit 0: Getting Started",
    lessons: [
      {
        id: "l1",
        title: "Hello & Goodbye",
        theme: themes[0],
        items: [
          mc('Translate: "Hello"', "Hola", ["Hola", "Adiós", "Gracias"], "“Hola” = Hello/Hi."),
          mc('Translate: "Goodbye"', "Adiós", ["Por favor", "Adiós", "Buenos días"], "“Adiós” = Goodbye."),
          fb('Type: "Good morning"', "Buenos días", "Two words: buenos + días."),
          mc('Translate: "Good night" (as a goodbye)', "Buenas noches", ["Buenas noches", "Buenas tardes", "Buenos días"]),
          mc('Translate: "How are you?" (informal)', "¿Cómo estás?", ["¿Cómo estás?", "¿Qué hora es?", "¿Dónde está?"]),
          fb('Type: "Hi!"', "¡Hola!", "Exclamation marks are common in Spanish."),
          mc('Translate: "See you later"', "Hasta luego", ["Hasta luego", "De nada", "Lo siento"]),
          mc('Translate: "See you tomorrow"', "Hasta mañana", ["Hasta mañana", "Buenas noches", "Mucho gusto"])
        ]
      },
      {
        id: "l2",
        title: "Polite Words",
        theme: themes[1],
        items: [
          mc('Translate: "Please"', "Por favor", ["Por favor", "Porque", "Perdón"]),
          mc('Translate: "Thank you"', "Gracias", ["Gracias", "Buenas", "Gustos"]),
          mc('Translate: "You’re welcome"', "De nada", ["De nada", "Lo siento", "Está bien"]),
          mc('Translate: "Excuse me" (to get attention)', "Disculpe", ["Disculpe", "Hasta", "Gracias"]),
          mc('Translate: "Sorry"', "Lo siento", ["Lo siento", "Lo sé", "Lo hago"]),
          fb('Type: "Thank you very much"', "Muchas gracias", "Muchas = many/a lot."),
          mc('Translate: "No problem"', "No hay problema", ["No hay problema", "No hay tiempo", "No hay agua"]),
          fb('Type: "Please" (again)', "Por favor")
        ]
      },
      {
        id: "l3",
        title: "Yes / No + Basics",
        theme: themes[2],
        items: [
          mc('Translate: "Yes"', "Sí", ["Sí", "Si", "No"], "Sí has an accent."),
          mc('Translate: "No"', "No", ["No", "Sí", "Yo"]),
          mc('Translate: "Okay"', "Está bien", ["Está bien", "Está mal", "Es grande"]),
          mc('Translate: "What?"', "¿Qué?", ["¿Qué?", "¿Quién?", "¿Cuándo?"]),
          mc('Translate: "I don’t understand"', "No entiendo", ["No entiendo", "No espero", "No entro"]),
          fb('Type: "I understand"', "Entiendo"),
          mc('Translate: "I don’t know"', "No sé", ["No sé", "No soy", "No salgo"]),
          fb('Type: "Yes, please"', "Sí, por favor")
        ]
      },
      {
        id: "l4",
        title: "Names & Nice to Meet You",
        theme: themes[3],
        items: [
          mc('Translate: "What is your name?" (informal)', "¿Cómo te llamas?", ["¿Cómo te llamas?", "¿Cómo estás?", "¿Dónde vives?"]),
          mc('Translate: "My name is…" ', "Me llamo…", ["Me llamo…", "Tengo…", "Soy…"]),
          mc('Translate: "Nice to meet you"', "Mucho gusto", ["Mucho gusto", "Mucho gracias", "Mucho tiempo"]),
          fb('Type: "I am Joe"', "Soy Joe", "Soy = I am (identity)."),
          mc('Translate: "And you?"', "¿Y tú?", ["¿Y tú?", "¿Y yo?", "¿Y él?"]),
          mc('Translate: "I’m from Mexico"', "Soy de México", ["Soy de México", "Estoy México", "Tengo México"]),
          fb('Type: "Me llamo AmigoJoe"', "Me llamo AmigoJoe"),
          mc('Translate: "Where are you from?"', "¿De dónde eres?", ["¿De dónde eres?", "¿Qué eres?", "¿Dónde estás?"])
        ]
      }
    ]
  },

  {
    id: "u1",
    title: "Unit 1: Basics 1",
    lessons: [
      {
        id: "l5",
        title: "Pronouns (yo/tú/él/ella)",
        theme: themes[0],
        items: [
          mc('Translate: "I"', "Yo", ["Yo", "Tú", "Ella"]),
          mc('Translate: "You" (informal)', "Tú", ["Tú", "Yo", "Usted"]),
          mc('Translate: "He"', "Él", ["Él", "Ella", "Ellos"], "Él has an accent."),
          mc('Translate: "She"', "Ella", ["Ella", "Él", "Usted"]),
          mc('Translate: "We"', "Nosotros", ["Nosotros", "Vosotros", "Ustedes"]),
          fb('Type: "You" (formal)', "Usted"),
          mc('Translate: "They"', "Ellos", ["Ellos", "Ellas", "Él"]),
          fb('Type: "She is…" starts with', "Ella es")
        ]
      },
      {
        id: "l6",
        title: "SER Basics (am/is/are)",
        theme: themes[1],
        items: [
          mc('Translate: "I am"', "Yo soy", ["Yo soy", "Yo estoy", "Yo tengo"]),
          mc('Translate: "You are" (informal)', "Tú eres", ["Tú eres", "Tú estás", "Tú tienes"]),
          mc('Translate: "He is"', "Él es", ["Él es", "Él está", "Él tiene"]),
          mc('Translate: "We are"', "Nosotros somos", ["Nosotros somos", "Nosotros estamos", "Nosotros tenemos"]),
          fb('Type: "They are"', "Ellos son"),
          mc('Translate: "I am a student"', "Soy estudiante", ["Soy estudiante", "Estoy estudiante", "Tengo estudiante"]),
          mc('Translate: "You are Joe"', "Tú eres Joe", ["Tú eres Joe", "Tú estás Joe", "Tú tienes Joe"]),
          fb('Type: "AmigoJoe is…" ', "AmigoJoe es")
        ]
      },
      {
        id: "l7",
        title: "Numbers 0–10",
        theme: themes[2],
        items: [
          mc('Translate: "one"', "uno", ["uno", "dos", "tres"]),
          mc('Translate: "two"', "dos", ["dos", "once", "diez"]),
          mc('Translate: "three"', "tres", ["tres", "cuatro", "cinco"]),
          mc('Translate: "five"', "cinco", ["seis", "cinco", "siete"]),
          mc('Translate: "ten"', "diez", ["diez", "doce", "dieciséis"]),
          fb('Type: "zero"', "cero"),
          mc('Translate: "seven"', "siete", ["siete", "seis", "ocho"]),
          fb('Type: "four"', "cuatro")
        ]
      },
      {
        id: "l8",
        title: "Simple Phrases",
        theme: themes[3],
        items: [
          mc('Translate: "Good"', "Bueno", ["Bueno", "Malo", "Grande"]),
          mc('Translate: "Bad"', "Malo", ["Malo", "Alto", "Bajo"]),
          mc('Translate: "Big"', "Grande", ["Grande", "Pequeño", "Nuevo"]),
          mc('Translate: "Small"', "Pequeño", ["Pequeño", "Grande", "Largo"]),
          fb('Type: "Very good"', "Muy bueno", "Muy = very."),
          mc('Translate: "More or less"', "Más o menos", ["Más o menos", "Mucho o poco", "Bien o mal"]),
          mc('Translate: "So-so" (same idea)', "Más o menos", ["Más o menos", "Muchas gracias", "De nada"]),
          fb('Type: "Okay, thanks"', "Está bien, gracias")
        ]
      }
    ]
  },

  {
    id: "u2",
    title: "Unit 2: Basics 2",
    lessons: [
      {
        id: "l9",
        title: "Family",
        theme: themes[0],
        items: [
          mc('Translate: "mother"', "madre", ["madre", "padre", "hermano"]),
          mc('Translate: "father"', "padre", ["padre", "tío", "hijo"]),
          mc('Translate: "brother"', "hermano", ["hermano", "hermana", "abuelo"]),
          mc('Translate: "sister"', "hermana", ["hermana", "prima", "madre"]),
          mc('Translate: "grandmother"', "abuela", ["abuela", "abuelo", "tía"]),
          fb('Type: "my family"', "mi familia"),
          mc('Translate: "son"', "hijo", ["hijo", "hija", "sobrino"]),
          fb('Type: "daughter"', "hija")
        ]
      },
      {
        id: "l10",
        title: "Colors",
        theme: themes[1],
        items: [
          mc('Translate: "red"', "rojo", ["rojo", "verde", "azul"]),
          mc('Translate: "blue"', "azul", ["azul", "morado", "negro"]),
          mc('Translate: "green"', "verde", ["verde", "blanco", "gris"]),
          mc('Translate: "black"', "negro", ["negro", "naranja", "rosa"]),
          fb('Type: "white"', "blanco"),
          mc('Translate: "yellow"', "amarillo", ["amarillo", "marrón", "rojo"]),
          mc('Translate: "pink"', "rosa", ["rosa", "roja", "rosado"]),
          fb('Type: "gray"', "gris")
        ]
      },
      {
        id: "l11",
        title: "Describing People",
        theme: themes[2],
        items: [
          mc('Translate: "tall"', "alto", ["alto", "bajo", "gordo"]),
          mc('Translate: "short" (height)', "bajo", ["bajo", "alto", "joven"]),
          mc('Translate: "young"', "joven", ["joven", "viejo", "nuevo"]),
          mc('Translate: "old"', "viejo", ["viejo", "joven", "grande"]),
          mc('Translate: "pretty"', "bonito", ["bonito", "barato", "rápido"]),
          fb('Type: "very tall"', "muy alto"),
          mc('Translate: "smart"', "inteligente", ["inteligente", "interesante", "importante"]),
          fb('Type: "she is tall"', "ella es alta", "Alta agrees with ella.")
        ]
      },
      {
        id: "l12",
        title: "Numbers 11–20",
        theme: themes[3],
        items: [
          mc('Translate: "eleven"', "once", ["once", "doce", "trece"]),
          mc('Translate: "twelve"', "doce", ["doce", "diez", "veinte"]),
          mc('Translate: "fifteen"', "quince", ["quince", "catorce", "dieciséis"]),
          mc('Translate: "sixteen"', "dieciséis", ["dieciséis", "diecisiete", "dieciocho"]),
          fb('Type: "thirteen"', "trece"),
          mc('Translate: "nineteen"', "diecinueve", ["diecinueve", "diecisiete", "veintiuno"]),
          mc('Translate: "twenty"', "veinte", ["veinte", "doce", "treinta"]),
          fb('Type: "fourteen"', "catorce")
        ]
      }
    ]
  },

  {
    id: "u3",
    title: "Unit 3: Daily Life",
    lessons: [
      {
        id: "l13",
        title: "Days & Time",
        theme: themes[0],
        items: [
          mc('Translate: "today"', "hoy", ["hoy", "mañana", "ayer"]),
          mc('Translate: "tomorrow"', "mañana", ["mañana", "noche", "tarde"]),
          mc('Translate: "yesterday"', "ayer", ["ayer", "ahora", "aquí"]),
          mc('Translate: "morning"', "la mañana", ["la mañana", "la noche", "la tarde"]),
          fb('Type: "at one o’clock"', "a la una"),
          mc('Translate: "What time is it?"', "¿Qué hora es?", ["¿Qué hora es?", "¿Qué día es?", "¿Qué es?"]),
          mc('Translate: "It is two o’clock"', "Son las dos", ["Son las dos", "Es las dos", "Soy dos"]),
          fb('Type: "It is one o’clock"', "Es la una")
        ]
      },
      {
        id: "l14",
        title: "TENER / QUERER / NECESITAR",
        theme: themes[1],
        items: [
          mc('Translate: "I have"', "Tengo", ["Tengo", "Soy", "Estoy"]),
          mc('Translate: "I want"', "Quiero", ["Quiero", "Queso", "Queda"]),
          mc('Translate: "I need"', "Necesito", ["Necesito", "Necesaria", "Necesitas"]),
          mc('Translate: "Do you have water?"', "¿Tienes agua?", ["¿Tienes agua?", "¿Eres agua?", "¿Estás agua?"]),
          fb('Type: "I want coffee"', "Quiero café"),
          mc('Translate: "I have a problem"', "Tengo un problema", ["Tengo un problema", "Soy un problema", "Estoy un problema"]),
          mc('Translate: "I need help"', "Necesito ayuda", ["Necesito ayuda", "Necesito agua", "Necesito amigo"]),
          fb('Type: "Do you want…?" (informal)', "¿Quieres…?")
        ]
      },
      {
        id: "l15",
        title: "-AR Verbs (hablar/trabajar)",
        theme: themes[2],
        items: [
          mc('Translate: "I speak Spanish"', "Hablo español", ["Hablo español", "Habla español", "Hablas español"]),
          mc('Translate: "You speak"', "Hablas", ["Hablas", "Hablo", "Hablan"]),
          mc('Translate: "He speaks"', "Habla", ["Habla", "Hablas", "Hablo"]),
          mc('Translate: "We work"', "Trabajamos", ["Trabajamos", "Trabajo", "Trabajan"]),
          fb('Type: "I work"', "Trabajo"),
          mc('Translate: "Do you work?"', "¿Trabajas?", ["¿Trabajas?", "¿Trabajo?", "¿Trabaja?"]),
          mc('Translate: "They speak"', "Hablan", ["Hablan", "Hablas", "Hablo"]),
          fb('Type: "We speak"', "Hablamos")
        ]
      },
      {
        id: "l16",
        title: "Places in Town",
        theme: themes[3],
        items: [
          mc('Translate: "the market"', "el mercado", ["el mercado", "el aeropuerto", "la escuela"]),
          mc('Translate: "the bank"', "el banco", ["el banco", "el baño", "el barco"]),
          mc('Translate: "the school"', "la escuela", ["la escuela", "la escalera", "la escena"]),
          mc('Translate: "the hospital"', "el hospital", ["el hospital", "el hotel", "el hostal"]),
          fb('Type: "Where is the bathroom?"', "¿Dónde está el baño?"),
          mc('Translate: "I’m at the airport"', "Estoy en el aeropuerto", ["Estoy en el aeropuerto", "Soy en el aeropuerto", "Tengo en el aeropuerto"]),
          mc('Translate: "near"', "cerca", ["cerca", "lejos", "lento"]),
          fb('Type: "far"', "lejos")
        ]
      }
    ]
  },

  {
    id: "u4",
    title: "Unit 4: Food & Ordering",
    lessons: [
      {
        id: "l17",
        title: "Ordering",
        theme: themes[0],
        items: [
          mc('Translate: "I would like…" (polite)', "Quisiera…", ["Quisiera…", "Quiero…", "Tengo…"]),
          mc('Translate: "For me…" ', "Para mí…", ["Para mí…", "Para yo…", "Para tú…"]),
          mc('Translate: "the menu"', "el menú", ["el menú", "la mesa", "el mes"]),
          mc('Translate: "water"', "agua", ["agua", "jugo", "leche"]),
          fb('Type: "I would like water"', "Quisiera agua"),
          mc('Translate: "Check, please"', "La cuenta, por favor", ["La cuenta, por favor", "El cuento, por favor", "La cuenta, porque"]),
          mc('Translate: "delicious"', "delicioso", ["delicioso", "difícil", "divertido"]),
          fb('Type: "Thank you"', "Gracias")
        ]
      },
      {
        id: "l18",
        title: "Food & Drinks",
        theme: themes[1],
        items: [
          mc('Translate: "coffee"', "café", ["café", "té", "leche"]),
          mc('Translate: "tea"', "té", ["té", "ti", "tu"]),
          mc('Translate: "milk"', "leche", ["leche", "carne", "pan"]),
          mc('Translate: "bread"', "pan", ["pan", "pez", "papel"]),
          fb('Type: "I want bread"', "Quiero pan"),
          mc('Translate: "chicken"', "pollo", ["pollo", "polla", "polo"]),
          mc('Translate: "vegetables"', "verduras", ["verduras", "verdad", "verde"]),
          fb('Type: "juice"', "jugo")
        ]
      },
      {
        id: "l19",
        title: "Likes & Preferences",
        theme: themes[2],
        items: [
          mc('Translate: "I like"', "Me gusta", ["Me gusta", "Yo gusto", "Me gustas"]),
          mc('Translate: "I don’t like"', "No me gusta", ["No me gusta", "No gusta", "Me no gusta"]),
          mc('Translate: "Do you like coffee?"', "¿Te gusta el café?", ["¿Te gusta el café?", "¿Te gustas el café?", "¿Te gusta café?"]),
          mc('Translate: "I love it"', "Me encanta", ["Me encanta", "Me encontro", "Me enciende"]),
          fb('Type: "I like water"', "Me gusta el agua"),
          mc('Translate: "too much"', "demasiado", ["demasiado", "despacio", "delgado"]),
          mc('Translate: "a little"', "un poco", ["un poco", "un pollo", "un poco de"]),
          fb('Type: "I don’t like milk"', "No me gusta la leche")
        ]
      },
      {
        id: "l20",
        title: "Quantities",
        theme: themes[3],
        items: [
          mc('Translate: "a lot"', "mucho", ["mucho", "poco", "mudo"]),
          mc('Translate: "a little"', "poco", ["poco", "paco", "pico"]),
          mc('Translate: "more"', "más", ["más", "menos", "mes"]),
          mc('Translate: "less"', "menos", ["menos", "manos", "menos de"]),
          fb('Type: "more water"', "más agua"),
          mc('Translate: "I want a little coffee"', "Quiero un poco de café", ["Quiero un poco de café", "Quiero poco café", "Quiero un café poco"]),
          mc('Translate: "How much?"', "¿Cuánto?", ["¿Cuánto?", "¿Cuándo?", "¿Cuántos?"]),
          fb('Type: "How many?"', "¿Cuántos?")
        ]
      }
    ]
  },

  {
    id: "u5",
    title: "Unit 5: Travel & Directions",
    lessons: [
      {
        id: "l21",
        title: "Where is…?",
        theme: themes[0],
        items: [
          mc('Translate: "Where is…?"', "¿Dónde está…?", ["¿Dónde está…?", "¿Qué está…?", "¿Quién está…?"]),
          mc('Translate: "here"', "aquí", ["aquí", "allí", "ahí"]),
          mc('Translate: "there"', "allí", ["allí", "aquí", "antes"]),
          mc('Translate: "near"', "cerca", ["cerca", "lejos", "corto"]),
          fb('Type: "It is here"', "Está aquí"),
          mc('Translate: "It is near"', "Está cerca", ["Está cerca", "Es cerca", "Soy cerca"]),
          mc('Translate: "far"', "lejos", ["lejos", "lento", "largo"]),
          fb('Type: "Where is the metro?"', "¿Dónde está el metro?")
        ]
      },
      {
        id: "l22",
        title: "Directions",
        theme: themes[1],
        items: [
          mc('Translate: "left"', "izquierda", ["izquierda", "derecha", "recto"]),
          mc('Translate: "right"', "derecha", ["derecha", "izquierda", "derecho"]),
          mc('Translate: "straight"', "recto", ["recto", "rápido", "rico"]),
          mc('Translate: "turn"', "gire", ["gire", "giree", "giro"]),
          fb('Type: "Turn left"', "Gire a la izquierda"),
          mc('Translate: "Turn right"', "Gire a la derecha", ["Gire a la derecha", "Gire la derecha", "Gira a la derecha"]),
          mc('Translate: "Go straight"', "Siga recto", ["Siga recto", "Sigo recto", "Sigue recto"]),
          fb('Type: "near here"', "cerca de aquí")
        ]
      },
      {
        id: "l23",
        title: "Transportation",
        theme: themes[2],
        items: [
          mc('Translate: "bus"', "el autobús", ["el autobús", "el avión", "el barco"]),
          mc('Translate: "subway/metro"', "el metro", ["el metro", "el método", "el meter"]),
          mc('Translate: "taxi"', "el taxi", ["el taxi", "el tazón", "la tasa"]),
          mc('Translate: "train"', "el tren", ["el tren", "el triángulo", "el trono"]),
          fb('Type: "I need a taxi"', "Necesito un taxi"),
          mc('Translate: "ticket"', "el boleto", ["el boleto", "la boleta", "el billete"]),
          mc('Translate: "station"', "la estación", ["la estación", "la estancia", "la estatua"]),
          fb('Type: "Where is the station?"', "¿Dónde está la estación?")
        ]
      },
      {
        id: "l24",
        title: "At the Hotel",
        theme: themes[3],
        items: [
          mc('Translate: "hotel"', "el hotel", ["el hotel", "el hostal", "el hospital"]),
          mc('Translate: "reservation"', "una reserva", ["una reserva", "un reservorio", "una receta"]),
          mc('Translate: "room"', "la habitación", ["la habitación", "la habición", "el cuarto"]),
          mc('Translate: "key"', "la llave", ["la llave", "la lluvia", "la leve"]),
          fb('Type: "I have a reservation"', "Tengo una reserva"),
          mc('Translate: "One night"', "una noche", ["una noche", "un noche", "una nota"]),
          mc('Translate: "Two nights"', "dos noches", ["dos noches", "dos noche", "dos notas"]),
          fb('Type: "Where is my room?"', "¿Dónde está mi habitación?")
        ]
      }
    ]
  },

  {
    id: "u6",
    title: "Unit 6: Conversations",
    lessons: [
      {
        id: "l25",
        title: "Question Words",
        theme: themes[0],
        items: [
          mc('Translate: "what"', "qué", ["qué", "quién", "cuándo"]),
          mc('Translate: "who"', "quién", ["quién", "qué", "dónde"]),
          mc('Translate: "when"', "cuándo", ["cuándo", "cuánto", "cuál"]),
          mc('Translate: "where"', "dónde", ["dónde", "donde", "desde"]),
          fb('Type: "Why?"', "¿Por qué?"),
          mc('Translate: "How?"', "¿Cómo?", ["¿Cómo?", "¿Qué?", "¿Cuál?"]),
          mc('Translate: "Which?"', "¿Cuál?", ["¿Cuál?", "¿Quién?", "¿Qué?"]),
          fb('Type: "How much?"', "¿Cuánto?")
        ]
      },
      {
        id: "l26",
        title: "-ER/-IR Basics (comer/vivir)",
        theme: themes[1],
        items: [
          mc('Translate: "I eat"', "Como", ["Como", "Comes", "Come"], "Como = I eat / I’m eating."),
          mc('Translate: "You eat"', "Comes", ["Comes", "Come", "Como"]),
          mc('Translate: "He eats"', "Come", ["Come", "Comen", "Comes"]),
          mc('Translate: "I live"', "Vivo", ["Vivo", "Vives", "Vive"]),
          fb('Type: "You live"', "Vives"),
          mc('Translate: "We eat"', "Comemos", ["Comemos", "Comimos", "Comer"]),
          mc('Translate: "They live"', "Viven", ["Viven", "Vive", "Vivo"]),
          fb('Type: "We live"', "Vivimos")
        ]
      },
      {
        id: "l27",
        title: "Routines (always/sometimes/never)",
        theme: themes[2],
        items: [
          mc('Translate: "always"', "siempre", ["siempre", "a veces", "nunca"]),
          mc('Translate: "sometimes"', "a veces", ["a veces", "siempre", "nunca"]),
          mc('Translate: "never"', "nunca", ["nunca", "nunca más", "siempre"]),
          mc('Translate: "every day"', "cada día", ["cada día", "cada noche", "cada vez"]),
          fb('Type: "I always study"', "Siempre estudio"),
          mc('Translate: "I sometimes eat"', "A veces como", ["A veces como", "A veces comes", "A veces come"]),
          mc('Translate: "I never work"', "Nunca trabajo", ["Nunca trabajo", "Nunca trabajas", "Nunca trabaja"]),
          fb('Type: "every week"', "cada semana")
        ]
      },
      {
        id: "l28",
        title: "Making Plans",
        theme: themes[3],
        items: [
          mc('Translate: "Let’s go!"', "¡Vamos!", ["¡Vamos!", "Vimos", "Vemos"]),
          mc('Translate: "Do you want to go?"', "¿Quieres ir?", ["¿Quieres ir?", "¿Quiero ir?", "¿Quieres ido?"]),
          mc('Translate: "today"', "hoy", ["hoy", "ayer", "mañana"]),
          mc('Translate: "tomorrow"', "mañana", ["mañana", "manzana", "mañana no"]),
          fb('Type: "We are going"', "Vamos"),
          mc('Translate: "I’m going to eat"', "Voy a comer", ["Voy a comer", "Voy comer", "Veo a comer"]),
          mc('Translate: "Do you want coffee?"', "¿Quieres café?", ["¿Quieres café?", "¿Quieres cafè?", "¿Quieres el café?"]),
          fb('Type: "Let’s go to the market"', "Vamos al mercado")
        ]
      }
    ]
  },

  {
    id: "u7",
    title: "Unit 7: Past (lite)",
    lessons: [
      {
        id: "l29",
        title: "Past: fui (I went / I was)",
        theme: themes[0],
        items: [
          mc('Translate: "I went"', "Fui", ["Fui", "Fue", "Fuiste"]),
          mc('Translate: "I was (in a place)"', "Fui", ["Fui", "Era", "Estuve"], "Fui can mean I went / I was."),
          mc('Translate: "Yesterday I went to the market"', "Ayer fui al mercado", ["Ayer fui al mercado", "Ayer voy al mercado", "Ayer fui el mercado"]),
          mc('Translate: "last night"', "anoche", ["anoche", "antes", "año"]),
          fb('Type: "I went to the hotel"', "Fui al hotel"),
          mc('Translate: "I went to Mexico City"', "Fui a Ciudad de México", ["Fui a Ciudad de México", "Voy a Ciudad de México", "Fui en Ciudad de México"]),
          mc('Translate: "I went with my friend"', "Fui con mi amigo", ["Fui con mi amigo", "Fui con amigo mi", "Fui a mi amigo"]),
          fb('Type: "Yesterday"', "Ayer")
        ]
      },
      {
        id: "l30",
        title: "Past: common verbs",
        theme: themes[1],
        items: [
          mc('Translate: "I ate"', "Comí", ["Comí", "Como", "Comía"]),
          mc('Translate: "I drank"', "Bebí", ["Bebí", "Bebo", "Bebía"]),
          mc('Translate: "I saw"', "Vi", ["Vi", "Veo", "Veía"]),
          mc('Translate: "I spoke"', "Hablé", ["Hablé", "Hablo", "Hablaba"]),
          fb('Type: "I worked"', "Trabajé"),
          mc('Translate: "I lived"', "Viví", ["Viví", "Vivo", "Vivía"]),
          mc('Translate: "I had"', "Tuve", ["Tuve", "Tengo", "Tenía"]),
          fb('Type: "I did"', "Hice")
        ]
      },
      {
        id: "l31",
        title: "Time Phrases (past)",
        theme: themes[2],
        items: [
          mc('Translate: "last week"', "la semana pasada", ["la semana pasada", "la semana próxima", "el pasado semana"]),
          mc('Translate: "last month"', "el mes pasado", ["el mes pasado", "el mes próximo", "el pasado mes"]),
          mc('Translate: "two days ago"', "hace dos días", ["hace dos días", "por dos días", "dos días antes"]),
          mc('Translate: "ago"', "hace", ["hace", "tarde", "antes"]),
          fb('Type: "last year"', "el año pasado"),
          mc('Translate: "yesterday morning"', "ayer por la mañana", ["ayer por la mañana", "ayer la mañana", "ayer en mañana"]),
          mc('Translate: "I ate yesterday"', "Comí ayer", ["Comí ayer", "Como ayer", "Comía ayer"]),
          fb('Type: "I went last week"', "Fui la semana pasada")
        ]
      },
      {
        id: "l32",
        title: "Mini Stories (easy)",
        theme: themes[3],
        items: [
          mc('Choose the best: "Yesterday I ate tacos."', "Ayer comí tacos.", ["Ayer como tacos.", "Ayer comí tacos.", "Ayer comer tacos."]),
          mc('Choose the best: "I went to the market."', "Fui al mercado.", ["Voy al mercado.", "Fui al mercado.", "Fui en el mercado."]),
          mc('Choose the best: "I drank coffee."', "Bebí café.", ["Bebo café.", "Bebí café.", "Bebí el café."]),
          mc('Choose the best: "I saw my friend."', "Vi a mi amigo.", ["Vi mi amigo.", "Vi a mi amigo.", "Veo a mi amigo."]),
          fb('Type: "Yesterday I worked"', "Ayer trabajé"),
          mc('Choose the best: "I spoke Spanish."', "Hablé español.", ["Hablo español.", "Hablé español.", "Hablar español."]),
          mc('Choose the best: "Last week I went."', "La semana pasada fui.", ["La semana pasada voy.", "La semana pasada fui.", "La semana pasada ir."]),
          fb('Type: "I lived in Peru"', "Viví en Perú")
        ]
      }
    ]
  },

  {
    id: "u8",
    title: "Unit 8: Real-World Boost",
    lessons: [
      {
        id: "l33",
        title: "Shopping",
        theme: themes[0],
        items: [
          mc('Translate: "How much does it cost?"', "¿Cuánto cuesta?", ["¿Cuánto cuesta?", "¿Cuánto costó?", "¿Cuánto cuesta a?"]),
          mc('Translate: "cheap"', "barato", ["barato", "bonito", "caro"]),
          mc('Translate: "expensive"', "caro", ["caro", "claro", "caro de"]),
          mc('Translate: "I want this"', "Quiero esto", ["Quiero esto", "Quiero esta", "Quiero ese"]),
          fb('Type: "Do you have this?"', "¿Tienes esto?"),
          mc('Translate: "size"', "talla", ["talla", "taza", "tabla"]),
          mc('Translate: "Where can I pay?"', "¿Dónde puedo pagar?", ["¿Dónde puedo pagar?", "¿Dónde pago puedo?", "¿Dónde puedo pagas?"]),
          fb('Type: "I need a smaller size"', "Necesito una talla más pequeña")
        ]
      },
      {
        id: "l34",
        title: "Health Basics",
        theme: themes[1],
        items: [
          mc('Translate: "pharmacy"', "la farmacia", ["la farmacia", "la fábrica", "la familia"]),
          mc('Translate: "I feel bad"', "Me siento mal", ["Me siento mal", "Yo siento mal", "Me siento malo"]),
          mc('Translate: "It hurts"', "Me duele", ["Me duele", "Me duelo", "Yo duele"]),
          mc('Translate: "head"', "la cabeza", ["la cabeza", "la cabra", "la cabina"]),
          fb('Type: "My head hurts"', "Me duele la cabeza"),
          mc('Translate: "stomach"', "el estómago", ["el estómago", "el estado", "el estante"]),
          mc('Translate: "I need a doctor"', "Necesito un doctor", ["Necesito un doctor", "Necesito doctor", "Necesito un doctora"]),
          fb('Type: "I need medicine"', "Necesito medicina")
        ]
      },
      {
        id: "l35",
        title: "Weather",
        theme: themes[2],
        items: [
          mc('Translate: "It’s hot"', "Hace calor", ["Hace calor", "Está calor", "Soy calor"]),
          mc('Translate: "It’s cold"', "Hace frío", ["Hace frío", "Está frío", "Es frío"]),
          mc('Translate: "It’s sunny"', "Hace sol", ["Hace sol", "Está sol", "Es sol"]),
          mc('Translate: "It’s raining"', "Está lloviendo", ["Está lloviendo", "Es lloviendo", "Llove"]),
          fb('Type: "Today it’s hot"', "Hoy hace calor"),
          mc('Translate: "tomorrow"', "mañana", ["mañana", "manzana", "mañana de"]),
          mc('Translate: "windy"', "hace viento", ["hace viento", "está viento", "es viento"]),
          fb('Type: "It’s cold today"', "Hoy hace frío")
        ]
      },
      {
        id: "l36",
        title: "Phone + Social",
        theme: themes[3],
        items: [
          mc('Translate: "Can you help me?"', "¿Me ayudas?", ["¿Me ayudas?", "¿Me ayudo?", "¿Me ayuda tú?"]),
          mc('Translate: "Of course"', "Claro", ["Claro", "Caro", "Cerca"]),
          mc('Translate: "I’m busy"', "Estoy ocupado", ["Estoy ocupado", "Soy ocupado", "Tengo ocupado"]),
          mc('Translate: "Call me"', "Llámame", ["Llámame", "Llamo", "Llama me"]),
          fb('Type: "Text me"', "Escríbeme"),
          mc('Translate: "See you soon"', "Hasta pronto", ["Hasta pronto", "Hasta tarde", "Hasta antes"]),
          mc('Translate: "Where are you?"', "¿Dónde estás?", ["¿Dónde estás?", "¿Dónde eres?", "¿Dónde está?"]),
          fb('Type: "I’m here"', "Estoy aquí")
        ]
      }
    ]
  },

  {
    id: "u9",
    title: "Unit 9: Early-Intermediate Bridge",
    lessons: [
      {
        id: "l37",
        title: "Comparisons",
        theme: themes[0],
        items: [
          mc('Translate: "more than"', "más que", ["más que", "menos que", "más de"]),
          mc('Translate: "less than"', "menos que", ["menos que", "menos de", "más que"]),
          mc('Translate: "bigger than"', "más grande que", ["más grande que", "más grande de", "grande más que"]),
          mc('Translate: "smaller than"', "más pequeño que", ["más pequeño que", "pequeño más", "menos pequeño que"]),
          fb('Type: "I’m more tired"', "Estoy más cansado"),
          mc('Translate: "better than"', "mejor que", ["mejor que", "bueno que", "más bueno que"]),
          mc('Translate: "worse than"', "peor que", ["peor que", "más malo que", "mal que"]),
          fb('Type: "It’s cheaper"', "Es más barato")
        ]
      },
      {
        id: "l38",
        title: "Near Future (voy a…)",
        theme: themes[1],
        items: [
          mc('Translate: "I’m going to eat"', "Voy a comer", ["Voy a comer", "Voy comer", "Veo a comer"]),
          mc('Translate: "I’m going to go"', "Voy a ir", ["Voy a ir", "Voy ir", "Vaya a ir"]),
          mc('Translate: "We’re going to study"', "Vamos a estudiar", ["Vamos a estudiar", "Vamos estudiar", "Vamos a estudias"]),
          mc('Translate: "tomorrow I’m going to work"', "Mañana voy a trabajar", ["Mañana voy a trabajar", "Mañana voy trabajar", "Mañana fui a trabajar"]),
          fb('Type: "I’m going to the market"', "Voy al mercado"),
          mc('Translate: "This weekend"', "este fin de semana", ["este fin de semana", "esta fin de semana", "este final semana"]),
          mc('Translate: "later"', "más tarde", ["más tarde", "más temprano", "tarde más"]),
          fb('Type: "Tonight I’m going to eat"', "Esta noche voy a comer")
        ]
      },
      {
        id: "l39",
        title: "Opinions",
        theme: themes[2],
        items: [
          mc('Translate: "I think that…" ', "Pienso que…", ["Pienso que…", "Penso que…", "Piensa que…"]),
          mc('Translate: "For me…" ', "Para mí…", ["Para mí…", "Para yo…", "Para me…"]),
          mc('Translate: "It’s important"', "Es importante", ["Es importante", "Está importante", "Soy importante"]),
          mc('Translate: "It’s interesting"', "Es interesante", ["Es interesante", "Está interesante", "Soy interesante"]),
          fb('Type: "I think it’s good"', "Pienso que es bueno"),
          mc('Translate: "I prefer coffee"', "Prefiero café", ["Prefiero café", "Prefero café", "Prefieres café"]),
          mc('Translate: "I agree"', "Estoy de acuerdo", ["Estoy de acuerdo", "Soy de acuerdo", "Tengo acuerdo"]),
          fb('Type: "I don’t agree"', "No estoy de acuerdo")
        ]
      },
      {
        id: "l40",
        title: "Boss Review (Mixed)",
        theme: themes[3],
        items: [
          mc('Translate: "Where is the bathroom?"', "¿Dónde está el baño?", ["¿Dónde está el baño?", "¿Dónde es el baño?", "¿Dónde está la baño?"]),
          mc('Translate: "I would like coffee"', "Quisiera café", ["Quisiera café", "Quiero café", "Quise café"]),
          mc('Translate: "Yesterday I went to the market"', "Ayer fui al mercado", ["Ayer fui al mercado", "Ayer voy al mercado", "Ayer fui en el mercado"]),
          mc('Translate: "Turn right"', "Gire a la derecha", ["Gire a la derecha", "Gire a la derecha.", "Gira a la derecha"]),
          fb('Type: "Thank you very much"', "Muchas gracias"),
          mc('Translate: "I need help"', "Necesito ayuda", ["Necesito ayuda", "Necesito agua", "Necesito amigo"]),
          mc('Translate: "I’m going to eat"', "Voy a comer", ["Voy a comer", "Voy comer", "Fui a comer"]),
          fb('Type: "Nice to meet you"', "Mucho gusto")
        ]
      }
    ]
  }
];

export function findLesson(lessonId: string): Lesson | undefined {
  for (const unit of course) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}
