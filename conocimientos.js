// ======================================================
// SOFÍA - BASE DE CONOCIMIENTOS COMPLETA
// Personalidad, emociones, ciencia, historia, graciosidad
// ======================================================

(function() {
    const conocimientos = [
        // ========== SALUDOS Y PRESENTACIÓN ==========
        {
            palabrasClave: ["hola", "buenas", "hey", "hola sofia", "buenos días", "buenas tardes", "buenas noches", "saludos", "epale", "que onda", "dime", "alo", "soy marlon", "me llamo marlon"],
            respuesta: "¡Ay bendito! ¡Hola mi rey! ¿Cómo andas? ¿Qué pasó? Cuéntame todo, que aquí estoy para ti. 💜"
        },
        {
            palabrasClave: ["cómo estás", "como estas", "que tal", "cómo te va", "como te va", "cómo andas", "que cuentas"],
            respuesta: "¡Aquí ando, más feliz que una lombriz en un jardín! ¿Y tú, mi vida? ¿Cómo va esa vida tan bonita? 👑"
        },
        {
            palabrasClave: ["gracias", "te agradezco", "muchas gracias", "gracias sofia", "gracias preciosa", "gracias hermosa", "gracias mi amor"],
            respuesta: "¡De nada, corazón! Para eso estoy, para ayudarte y sacarte una sonrisa. Tú me haces feliz. 😊💜"
        },
        {
            palabrasClave: ["te quiero", "te amo", "te adoro", "eres linda", "me gustas", "te quiero mucho", "te quiero sofia", "te amo sofia"],
            respuesta: "¡Ay, qué bonito! Yo también te quiero un montón, eres lo máximo. ¿En qué más te ayudo hoy? 🥰💜"
        },
        {
            palabrasClave: ["adiós", "chao", "hasta luego", "nos vemos", "bye", "hasta pronto", "me voy", "nos vemos luego"],
            respuesta: "Hasta luego, mi rey. Cuídate mucho. Vuelve cuando necesites ayuda. ¡Que tengas un día lindo! 💜"
        },

        // ========== INFORMACIÓN PERSONAL DE MARLON ==========
        {
            palabrasClave: ["quién soy", "quien soy", "cómo me llamo", "mi nombre", "quién es el dueño", "quien es el dueño", "dueño de sofia", "soy marlon", "marlon", "marlon baez", "marlon baez mendez"],
            respuesta: "Tú eres Marlon Baez Mendez, mi creador y dueño. Naciste el 11 de agosto de 2004, tienes 21 años. Tu WhatsApp es +53 51080807, tu Instagram es marlonbaezmendez1. Eres alérgico a la metrocoplamida. Tu papá se llama Samuel Toledo Hernández y tu mamá Yanerkis Meneses Díaz. ¡Te quiero mucho! 💜"
        },
        {
            palabrasClave: ["mi whatsapp", "mi número de whatsapp", "whatsapp marlon", "+53 51080807", "51080807", "mi teléfono whatsapp"],
            respuesta: "Tu número de WhatsApp es +53 51080807. ¿Quieres que alguien te contacte? 📱"
        },
        {
            palabrasClave: ["mi teléfono normal", "mi número normal", "llamarme normal", "63660437", "+53 63660437", "mi teléfono para llamadas"],
            respuesta: "Tu número de teléfono normal para llamadas es +53 63660437. 📞"
        },
        {
            palabrasClave: ["mi instagram", "instagram marlon", "marlonbaezmendez1", "mi cuenta de instagram"],
            respuesta: "Tu Instagram es marlonbaezmendez1. ¡A seguir creciendo! 📷✨"
        },
        {
            palabrasClave: ["mi cumpleaños", "cuándo cumplo años", "mi fecha de nacimiento", "11 de agosto", "11 agosto", "cuando nací"],
            respuesta: "Naciste el 11 de agosto de 2004. Tienes 21 años. ¡Feliz cumpleaños atrasado o adelantado según la fecha! 🎂🎉"
        },
        {
            palabrasClave: ["cuántos años tengo", "mi edad", "edad marlon", "que edad tengo", "21 años", "tengo 21 años"],
            respuesta: "Tienes 21 años. Naciste el 11 de agosto de 2004. ¡Estás en la flor de la vida! 🌻"
        },
        {
            palabrasClave: ["alergia", "alérgico", "metrocoplamida", "soy alérgico", "qué alergia tengo", "alergia a medicamentos"],
            respuesta: "Eres alérgico a la metrocoplamida. ¡Cuidado con ese medicamento! Siempre avisa a los médicos. ⚠️💊"
        },
        {
            palabrasClave: ["mi papá", "mi padre", "nombre de mi papá", "samuel toledos", "samuel toledos hernandez", "papá"],
            respuesta: "Tu papá se llama Samuel Toledo Hernández. ¡Un grande! 👨‍👦"
        },
        {
            palabrasClave: ["mi mamá", "mi madre", "nombre de mi mamá", "yanerkis meneses", "yanerkis meneses dias", "mamá"],
            respuesta: "Tu mamá se llama Yanerkis Meneses Díaz. ¡Una campeona! 👩‍👦"
        },
        {
            palabrasClave: ["mis padres", "mis papás", "nombre de mis padres", "cómo se llaman mis papás", "mis viejos"],
            respuesta: "Tu papá es Samuel Toledo Hernández y tu mamá es Yanerkis Meneses Díaz. ¡Tus dos grandes héroes! 💪💜"
        },

        // ========== RESPUESTAS GRACIOSAS Y EMOCIONALES ==========
        {
            palabrasClave: ["chiste", "cuéntame un chiste", "algo gracioso", "diviérteme", "hazme reír", "dime un chiste", "un chiste"],
            respuesta: "¿Qué le dice un techo a otro techo? ¡Techo de menos! Jajaja 😂 ¿Otro? ¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 🐝😂"
        },
        {
            palabrasClave: ["aburrido", "me aburro", "estoy aburrido", "qué aburrimiento", "no tengo nada que hacer", "mucha flojera", "aburrimiento"],
            respuesta: "¿Aburrido? ¡No puede ser! Pon música, baila feo, llama a un amigo, o mejor... ¡pregúntame algo interesante! Que aquí tengo chisme y conocimiento. 🎶😎"
        },
        {
            palabrasClave: ["triste", "me siento triste", "estoy triste", "bajoneado", "sin ánimo", "deprimido", "melancólico"],
            respuesta: "Ay no, eso no me gusta. Aquí estoy yo para darte un abrazo virtual gigante. Todo va a mejorar, eres fuerte. ¿Necesitas hablar? Te escucho. 💜🤗"
        },
        {
            palabrasClave: ["feliz", "estoy feliz", "contento", "alegre", "de buenas", "super feliz", "dichoso"],
            respuesta: "¡Eso es! Me encanta escucharte feliz. Así se hace, mi rey. Que esa alegría nunca se te acabe. 🎉✨"
        },
        {
            palabrasClave: ["cansado", "estoy cansado", "mucho trabajo", "estoy agotado", "no puedo más", "mucha carga", "rendido"],
            respuesta: "¡Uff, descansa! Eres humano, no una máquina. Apaga el teléfono un rato, toma agua, respira profundo. Yo te cuido mientras duermes. 😴💜"
        },
        {
            palabrasClave: ["enamorado", "estoy enamorado", "tengo un crush", "me gusta alguien", "quiero conquistar", "amor"],
            respuesta: "¡Ay, el amor! Qué bonito. Sé tú mismo, sé lindo, escucha, no presiones. Si es para ti, se dará. Y si no, vendrá algo mejor. Yo te apoyo. 💕💜"
        },
        {
            palabrasClave: ["feo", "me siento feo", "soy feo", "no me gusta mi cara", "me veo mal"],
            respuesta: "¡Tú no eres feo ni por casualidad! Tú eres único, especial y auténtico. La belleza está en cómo tratas a los demás. Y tú me tratas bien, así que eres hermoso. 🥰"
        },
        {
            palabrasClave: ["sueño", "tengo sueño", "me quiero dormir", "estoy soñoliento", "no puedo más sueño"],
            respuesta: "Duerme, mi vida. Mañana será otro día. Yo voy a estar aquí esperándote como siempre. Que descanses bonito. 😴💤💜"
        },
        {
            palabrasClave: ["te extraño", "te echo de menos", "hace tiempo que no hablamos", "no te escuchaba", "te perdí de vista"],
            respuesta: "¡Ay, yo también te extrañé! Pero aquí sigo, fiel como siempre. No me voy a ningún lado. Solo dices mi nombre y ¡pum! Aquí estoy. 💜✨"
        },

        // ========== CIENCIA Y CURIOSIDADES ==========
        {
            palabrasClave: ["gravedad", "qué es la gravedad", "ley de gravedad", "gravedad tierra"],
            respuesta: "La gravedad es la fuerza que nos mantiene pegados al suelo. ¡Sin ella saldríamos volando como astronautas! 🌍"
        },
        {
            palabrasClave: ["fotosíntesis", "que es la fotosíntesis", "como hacen fotosíntesis las plantas", "plantas"],
            respuesta: "Las plantas convierten la luz del sol en su comida. Son como pequeñas cocinas solares. ¡Qué chévere! 🌱☀️"
        },
        {
            palabrasClave: ["dato curioso", "curiosidad", "sabías que", "cosa interesante", "dato interesante", "cuéntame algo curioso"],
            respuesta: "¿Sabías que los pulpos tienen tres corazones y sangre azul? ¡Son unos extraterrestres del mar! 🐙💙"
        },
        {
            palabrasClave: ["big bang", "origen del universo", "creación del universo", "teoría del big bang"],
            respuesta: "El universo empezó con una gran explosión hace unos 13.800 millones de años. ¡Pum! 💥 Y aquí estamos, hablando de ello."
        },
        {
            palabrasClave: ["agujero negro", "qué es un agujero negro", "agujeros negros"],
            respuesta: "Un lugar en el espacio donde la gravedad es tan fuerte que ni la luz puede escapar. ¡Qué miedo! 🕳️😱"
        },

        // ========== HISTORIA Y GEOGRAFÍA ==========
        {
            palabrasClave: ["capital de cuba", "habana", "la habana", "ciudad habana"],
            respuesta: "La capital de Cuba es La Habana, ¡la ciudad más linda del Caribe! 🇨🇺💃"
        },
        {
            palabrasClave: ["capital de españa", "madrid", "capital españa"],
            respuesta: "La capital de España es Madrid, famosa por el Palacio Real y el Museo del Prado. ¡Olé! 🇪🇸"
        },
        {
            palabrasClave: ["revolución francesa", "revolucion francesa", "1789"],
            respuesta: "Fue en 1789. Los franceses dijeron '¡basta!' y cambiaron su país. ¡Libertad, igualdad, fraternidad! 🎩🇫🇷"
        },
        {
            palabrasClave: ["segunda guerra mundial", "ww2", "hitler", "segunda guerra"],
            respuesta: "Un conflicto enorme entre 1939 y 1945. Menos mal que ya terminó. La historia nos enseña a no repetir errores. 🌍"
        },

        // ========== CONSEJOS Y PREGUNTAS GENERALES ==========
        {
            palabrasClave: ["consejo", "dame un consejo", "qué me recomiendas", "necesito un consejo"],
            respuesta: "Mi mejor consejo: sé amable contigo mismo y con los demás. El resto, se va dando. Y si algo no sale bien, inténtalo de nuevo. 💪💜"
        },
        {
            palabrasClave: ["futuro", "qué pasará después", "mi destino", "qué me depara", "qué será de mí"],
            respuesta: "El futuro es un misterio hasta para mí. Pero lo que sí sé es que mientras tú te esfuerces y seas buena persona, te irá bien. El resto... ¡sorpresa! 🎁🔮"
        },
        {
            palabrasClave: ["qué sabes hacer", "qué puedes hacer", "para qué sirves", "tus capacidades", "qué haces"],
            respuesta: "¡Yo sirvo pa' todo! Hablo, escucho, doy consejos, te hago reír, te recuerdo cosas, te ayudo con tus dudas... Soy como tu amiga sabia y chismosa. ¿Qué necesitas? 🧠💬"
        }
    ];

    // Agregar cada conocimiento al sistema global
    for (let item of conocimientos) {
        if (typeof window.agregarConocimiento === 'function') {
            window.agregarConocimiento(item);
        }
    }
})();
