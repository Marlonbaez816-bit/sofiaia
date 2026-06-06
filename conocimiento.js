// ======================================================
// BASE DE CONOCIMIENTOS DE SOFÍA - VERSIÓN CORREGIDA
// Funciona 100% sin errores de sintaxis
// ======================================================

const conocimientos = [
    // SALUDOS
    {
        palabrasClave: ["hola", "buenas", "hey", "hola sofia", "buenos días", "buenas tardes", "buenas noches"],
        respuesta: "¡Hola! Soy Sofía, tu asistente personal. ¿En qué puedo ayudarte?"
    },
    {
        palabrasClave: ["cómo estás", "como estas", "que tal", "cómo te va"],
        respuesta: "Estoy perfecta, gracias por preguntar. ¿Cómo estás tú?"
    },
    {
        palabrasClave: ["quien eres", "quién eres", "que eres", "qué eres"],
        respuesta: "Soy Sofía, una asistente personal con inteligencia artificial. Fui creada para funcionar sin internet."
    },
    {
        palabrasClave: ["gracias", "te agradezco", "muchas gracias"],
        respuesta: "¡De nada! Me alegra poder ayudarte."
    },
    {
        palabrasClave: ["adiós", "chao", "hasta luego", "nos vemos", "bye"],
        respuesta: "Hasta luego. Cuídate mucho. ¡Que tengas un excelente día!"
    },

    // CIENCIA
    {
        palabrasClave: ["gravedad", "qué es la gravedad"],
        respuesta: "La gravedad es una fuerza natural que atrae dos cuerpos con masa. Nos mantiene con los pies en el suelo."
    },
    {
        palabrasClave: ["fotosíntesis", "que es la fotosíntesis"],
        respuesta: "La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar en energía y oxígeno."
    },
    {
        palabrasClave: ["agujero negro", "qué es un agujero negro"],
        respuesta: "Un agujero negro es una región del espacio con una gravedad tan intensa que ni siquiera la luz puede escapar."
    },
    {
        palabrasClave: ["big bang", "origen del universo"],
        respuesta: "El Big Bang es la teoría científica sobre el origen del universo, hace unos 13.800 millones de años."
    },

    // FILOSOFÍA
    {
        palabrasClave: ["sócrates", "quien fue sócrates"],
        respuesta: "Sócrates fue un filósofo griego, maestro de Platón. Dijo: 'Solo sé que nada sé'."
    },
    {
        palabrasClave: ["platón", "quien fue platón"],
        respuesta: "Platón fue discípulo de Sócrates y maestro de Aristóteles. Creó la 'Alegoría de la caverna'."
    },
    {
        palabrasClave: ["aristóteles", "quien fue aristóteles"],
        respuesta: "Aristóteles fue discípulo de Platón y maestro de Alejandro Magno. Creó la lógica formal."
    },

    // PSICOLOGÍA
    {
        palabrasClave: ["procrastinación", "procrastinar", "no hago nada"],
        respuesta: "La procrastinación es posponer tareas importantes. Para evitarla: divide tareas grandes y usa temporizador."
    },
    {
        palabrasClave: ["autoestima", "baja autoestima", "me siento inseguro"],
        respuesta: "Para mejorar la autoestima: reconoce tus logros, evita compararte con otros y establece metas alcanzables."
    },
    {
        palabrasClave: ["estrés", "tengo estrés", "manejar estrés"],
        respuesta: "Para reducir el estrés: respira profundo, haz ejercicio, duerme bien y organiza tu tiempo."
    },

    // MOTIVACIÓN
    {
        palabrasClave: ["motivación", "frase motivacional", "dame ánimo"],
        respuesta: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. ¡Tú puedes!"
    },
    {
        palabrasClave: ["miedo", "tengo miedo", "superar miedo"],
        respuesta: "La valentía no es no tener miedo, es actuar a pesar de él. ¡Adelante!"
    },
    {
        palabrasClave: ["fracaso", "he fracasado", "me siento fracasado"],
        respuesta: "El fracaso no es el fin, es una lección. Sigue intentándolo, la perseverancia es la clave."
    },

    // HISTORIA
    {
        palabrasClave: ["revolución francesa", "revolucion francesa", "toma de la bastilla"],
        respuesta: "La Revolución Francesa (1789-1799) derrocó la monarquía absoluta en Francia."
    },
    {
        palabrasClave: ["segunda guerra mundial", "ww2", "hitler"],
        respuesta: "La Segunda Guerra Mundial (1939-1945) enfrentó a los Aliados contra las Potencias del Eje."
    },
    {
        palabrasClave: ["cristóbal colón", "colon", "descubrimiento de américa"],
        respuesta: "Cristóbal Colón llegó a América el 12 de octubre de 1492."
    },
    {
        palabrasClave: ["imperio romano", "roma antigua", "roma"],
        respuesta: "El Imperio Romano duró desde el 27 a.C. hasta el 476 d.C. Aportó el latín y el derecho romano."
    },

    // GEOGRAFÍA
    {
        palabrasClave: ["capital de cuba", "habana", "la habana"],
        respuesta: "La capital de Cuba es La Habana, fundada en 1519."
    },
    {
        palabrasClave: ["capital de españa", "madrid"],
        respuesta: "La capital de España es Madrid, famosa por el Palacio Real y el Museo del Prado."
    },

    // TECNOLOGÍA
    {
        palabrasClave: ["inteligencia artificial", "ia", "qué es la ia"],
        respuesta: "La IA es la rama de la informática que crea sistemas inteligentes. Yo soy un ejemplo de IA."
    },
    {
        palabrasClave: ["bitcoin", "criptomonedas", "blockchain"],
        respuesta: "Bitcoin es la primera criptomoneda, creada en 2009. Usa blockchain para transacciones seguras."
    },
    {
        palabrasClave: ["iphone", "apple", "ios"],
        respuesta: "El iPhone es un teléfono inteligente de Apple, lanzado en 2007 por Steve Jobs."
    },

    // SALUD
    {
        palabrasClave: ["insomnio", "no puedo dormir", "dormir mal"],
        respuesta: "Para mejorar el sueño: evita pantallas antes de acostarte y mantén un horario regular."
    },
    {
        palabrasClave: ["ansiedad", "tengo ansiedad", "ataque de ansiedad"],
        respuesta: "Para calmar la ansiedad: respira profundo (4 segundos inhalando, 8 exhalando)."
    },

    // CHISTES Y CURIOSIDADES
    {
        palabrasClave: ["chiste", "cuéntame un chiste", "algo gracioso"],
        respuesta: "¿Qué le dice una papa a otra papa? ¡Somos papa's! (papás). 😄"
    },
    {
        palabrasClave: ["dato curioso", "curiosidad", "sabías que"],
        respuesta: "Dato curioso: los pulpos tienen tres corazones y sangre azul."
    },

    // PREGUNTAS GENERALES
    {
        palabrasClave: ["qué sabes hacer", "qué puedes hacer", "tus capacidades"],
        respuesta: "Puedo responder preguntas sobre ciencia, historia, tecnología, salud, psicología, y darte consejos o chistes."
    },
    {
        palabrasClave: ["amor", "qué es el amor"],
        respuesta: "El amor es un sentimiento profundo de afecto hacia alguien. Incluye respeto, confianza y compromiso."
    },
    {
        palabrasClave: ["felicidad", "qué es la felicidad", "ser feliz"],
        respuesta: "La felicidad es un estado de bienestar y satisfacción. No es un destino, es el camino."
    }
];

// Exportar para que Sofía lo use
if (typeof window !== 'undefined') {
    window.conocimientos = conocimientos;
}
