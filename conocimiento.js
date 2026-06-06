// ======================================================
// BASE DE CONOCIMIENTOS DE SOFÍA - VERSIÓN ABIERTA
// Ve copiando bloque por bloque. Cuando termines,
// dime "YA CIERRA" y te daré el cierre final.
// ======================================================

const conocimientos = [
    // ========== SALUDOS Y PRESENTACIÓN ==========
    {
        palabrasClave: ["hola", "buenas", "hey", "hola sofia", "buenos días", "buenas tardes", "buenas noches", "saludos"],
        respuesta: "¡Hola! Soy Sofía, tu asistente personal. Estoy aquí para ayudarte con lo que necesites."
    },
    {
        palabrasClave: ["cómo estás", "como estas", "que tal", "cómo te va", "como te va"],
        respuesta: "Estoy perfecta, gracias por preguntar. Siempre conectada y lista para ayudarte. ¿Cómo estás tú?"
    },
    {
        palabrasClave: ["quien eres", "quién eres", "que eres", "qué eres"],
        respuesta: "Soy Sofía, una asistente personal con inteligencia artificial. Fui creada para funcionar sin internet."
    },
    {
        palabrasClave: ["gracias", "te agradezco", "muchas gracias", "gracias sofia"],
        respuesta: "¡De nada! Me alegra poder ayudarte. Si necesitas algo más, aquí estoy."
    },
    {
        palabrasClave: ["adiós", "chao", "hasta luego", "nos vemos", "bye", "hasta pronto"],
        respuesta: "Hasta luego. Cuídate mucho y vuelve cuando necesites ayuda. ¡Que tengas un excelente día!"
    },

    // ========== CIENCIA ==========
    {
        palabrasClave: ["gravedad", "qué es la gravedad", "ley de gravedad"],
        respuesta: "La gravedad es una fuerza natural que atrae dos cuerpos con masa. En la Tierra, nos mantiene con los pies en el suelo."
    },
    {
        palabrasClave: ["fotosíntesis", "que es la fotosíntesis", "como hacen fotosíntesis las plantas"],
        respuesta: "La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar, dióxido de carbono y agua en energía y oxígeno."
    },
    {
        palabrasClave: ["agujero negro", "qué es un agujero negro", "agujeros negros"],
        respuesta: "Un agujero negro es una región del espacio con una gravedad tan intensa que ni siquiera la luz puede escapar."
    },
    {
        palabrasClave: ["big bang", "teoría del big bang", "origen del universo"],
        respuesta: "El Big Bang es la teoría científica más aceptada sobre el origen del universo, hace unos 13.800 millones de años."
    }
];

// ========== FIN DEL BLOQUE 1 ==========
// Copia todo lo de arriba y pégalo en conocimientos.js
// Cuando termines, dime "SIGUIENTE" o "YA CIERRA"

    // ========== FILOSOFÍA ==========
    {
        palabrasClave: ["sócrates", "quien fue sócrates", "filosofo griego", "método socrático"],
        respuesta: "Sócrates fue un filósofo griego del siglo V a.C., maestro de Platón. Creó el método mayéutica. Dijo: 'Solo sé que nada sé'."
    },
    {
        palabrasClave: ["platón", "quien fue platón", "alegoría de la caverna", "teoría de las ideas"],
        respuesta: "Platón fue discípulo de Sócrates y maestro de Aristóteles. Es famoso por la 'Alegoría de la caverna' y su teoría de las ideas."
    },
    {
        palabrasClave: ["aristóteles", "quien fue aristóteles", "lógica aristotélica"],
        respuesta: "Aristóteles fue discípulo de Platón y maestro de Alejandro Magno. Sus aportes incluyen la lógica formal y la ética de la virtud."
    },
    {
        palabrasClave: ["estoicismo", "estoico", "séneca", "epicteto", "marco aurelio"],
        respuesta: "El estoicismo enseña a mantener la calma ante la adversidad. Máximos representantes: Séneca, Epicteto y Marco Aurelio."
    },
    {
        palabrasClave: ["nietzsche", "friedrich nietzsche", "superhombre", "voluntad de poder"],
        respuesta: "Friedrich Nietzsche fue un filósofo alemán. Propuso el 'superhombre', alguien que crea sus propios valores. Dijo 'Dios ha muerto'."
    },

    // ========== PSICOLOGÍA ==========
    {
        palabrasClave: ["procrastinación", "procrastinar", "no hago nada", "me distraigo mucho"],
        respuesta: "La procrastinación es posponer tareas importantes. Para evitarla: divide tareas grandes, usa temporizador Pomodoro y elimina distracciones."
    },
    {
        palabrasClave: ["autoestima", "baja autoestima", "me siento inseguro", "valorarme más"],
        respuesta: "Para mejorar la autoestima: reconoce tus logros, evita compararte con otros, cuida tu diálogo interno y establece metas alcanzables."
    },
    {
        palabrasClave: ["estrés", "manejar estrés", "tengo mucho estrés", "relajarme"],
        respuesta: "Para reducir el estrés: respira profundo, haz ejercicio, duerme bien, organiza tu tiempo y aprende a decir 'no' cuando sea necesario."
    },
    {
        palabrasClave: ["resiliencia", "qué es resiliencia", "superar problemas", "salir adelante"],
        respuesta: "La resiliencia es la capacidad de superar situaciones adversas y salir fortalecido. Se entrena aceptando la realidad y manteniendo esperanza."
    },
    {
        palabrasClave: ["ansiedad", "tengo ansiedad", "ataque de ansiedad", "calmar ansiedad"],
        respuesta: "Para calmar la ansiedad: respira profundamente (4 segundos inhalando, 7 reteniendo, 8 exhalando). También ayuda hablar con alguien de confianza."
    }

// ========== FIN DEL BLOQUE 2 ==========
// Copia todo lo de arriba y pégalo debajo del Bloque 1
// Cuando termines, dime "SIGUIENTE" o "YA CIERRA"

    // ========== SALUD Y BIENESTAR ==========
    {
        palabrasClave: ["insomnio", "no puedo dormir", "dormir mal", "conciliar el sueño"],
        respuesta: "Para mejorar el sueño: evita pantallas antes de acostarte, mantén un horario regular y crea un ambiente oscuro y tranquilo."
    },
    {
        palabrasClave: ["agua", "cuánta agua tomar", "beber agua", "hidratación"],
        respuesta: "Se recomienda beber entre 2 y 3 litros de agua al día. La hidratación mejora la energía, la piel y la función cerebral."
    },
    {
        palabrasClave: ["ejercicio", "hacer ejercicio", "beneficios del ejercicio", "entrenar"],
        respuesta: "El ejercicio reduce el estrés, mejora el sueño, fortalece el corazón y ayuda a mantener un peso saludable. 30 minutos al día es suficiente."
    },
    {
        palabrasClave: ["dieta saludable", "comer sano", "alimentación balanceada", "qué comer"],
        respuesta: "Una dieta saludable incluye: verduras, frutas, proteínas magras, granos enteros y grasas buenas. Evita azúcares y ultraprocesados."
    },
    {
        palabrasClave: ["vitaminas", "qué vitaminas necesito", "vitamina c", "vitamina d"],
        respuesta: "Vitamina C (cítricos) mejora defensas. Vitamina D (sol, pescados) fortalece huesos. Vitamina A (zanahoria) cuida la visión. Complejo B da energía."
    },
    {
        palabrasClave: ["ayuno intermitente", "ayuno 16/8", "no desayunar", "ayunar beneficios"],
        respuesta: "El ayuno intermitente alterna períodos de ayuno y comida. El más común es 16/8. Puede ayudar a perder peso, pero consulta a un médico."
    },

    // ========== MOTIVACIÓN Y FRASES ==========
    {
        palabrasClave: ["motivación", "frase motivacional", "motivame", "dame ánimo"],
        respuesta: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, triunfarás. ¡Tú puedes!"
    },
    {
        palabrasClave: ["miedo", "tengo miedo", "superar miedo", "miedo al fracaso"],
        respuesta: "La valentía no es no tener miedo, es actuar a pesar de él. Cada gran logro comenzó con un paso pequeño. ¡Adelante!"
    },
    {
        palabrasClave: ["fracaso", "he fracasado", "me siento fracasado", "caí otra vez"],
        respuesta: "El fracaso no es el fin, es una lección. Thomas Edison falló miles de veces antes de inventar la bombilla. Sigue intentándolo."
    },
    {
        palabrasClave: ["éxito", "quiero tener éxito", "ser exitoso", "como alcanzar el éxito"],
        respuesta: "El éxito es combinación de disciplina, constancia y pasión. Define tus metas, trabaja cada día y no te rindas."
    }

// ========== FIN DEL BLOQUE 3 ==========
// Copia todo lo de arriba y pégalo debajo del Bloque 2
// Cuando termines, dime "SIGUIENTE" o "YA CIERRA"

    // ========== HISTORIA ==========
    {
        palabrasClave: ["revolución francesa", "revolucion francesa", "toma de la bastilla", "1789"],
        respuesta: "La Revolución Francesa (1789-1799) derrocó la monarquía absoluta en Francia y difundió los ideales de libertad, igualdad y fraternidad."
    },
    {
        palabrasClave: ["segunda guerra mundial", "ww2", "segunda guerra mundial resumen", "hitler"],
        respuesta: "La Segunda Guerra Mundial (1939-1945) enfrentó a los Aliados contra las Potencias del Eje. Terminó con la derrota del Eje."
    },
    {
        palabrasClave: ["cristóbal colón", "colon", "descubrimiento de américa", "1492"],
        respuesta: "Cristóbal Colón llegó a América el 12 de octubre de 1492, iniciando la colonización europea del continente americano."
    },
    {
        palabrasClave: ["imperio romano", "roma antigua", "roma", "césar", "caída del imperio romano"],
        respuesta: "El Imperio Romano duró desde el 27 a.C. hasta el 476 d.C. Aportó el latín, el derecho romano, acueductos y carreteras."
    },
    {
        palabrasClave: ["machu picchu", "incas", "cultura inca", "imperio inca"],
        respuesta: "Machu Picchu es una ciudadela inca del siglo XV en Perú. Es Patrimonio de la Humanidad y una de las Siete Maravillas."
    },
    {
        palabrasClave: ["revolución cubana", "castro", "fidel castro", "che guevara", "26 de julio"],
        respuesta: "La Revolución Cubana (1953-1959) derrocó a Batista y estableció un gobierno socialista en Cuba, liderada por Fidel Castro."
    },

    // ========== GEOGRAFÍA ==========
    {
        palabrasClave: ["capital de cuba", "habana", "ciudad habana", "capital cuba"],
        respuesta: "La capital de Cuba es La Habana, fundada en 1519. Es la ciudad más poblada del país."
    },
    {
        palabrasClave: ["capital de méxico", "méxico df", "cdmx", "ciudad de méxico"],
        respuesta: "La capital de México es la Ciudad de México (CDMX), una de las ciudades más grandes del mundo."
    },
    {
        palabrasClave: ["capital de españa", "madrid", "capital españa"],
        respuesta: "La capital de España es Madrid, famosa por el Palacio Real y el Museo del Prado."
    },
    {
        palabrasClave: ["río más largo del mundo", "amazonas", "río amazonas"],
        respuesta: "El río más largo del mundo es el Amazonas, con aproximadamente 7,062 kilómetros."
    },
    {
        palabrasClave: ["montaña más alta", "everest", "monte everest"],
        respuesta: "La montaña más alta es el Monte Everest, en el Himalaya, con 8,848 metros sobre el nivel del mar."
    }

// ========== FIN DEL BLOQUE 4 ==========
// Copia todo lo de arriba y pégalo debajo del Bloque 3
// Cuando termines, dime "SIGUIENTE" o "YA CIERRA"

    // ========== TECNOLOGÍA ==========
    {
        palabrasClave: ["inteligencia artificial", "ia", "ai", "qué es la ia"],
        respuesta: "La Inteligencia Artificial es la rama de la informática que crea sistemas capaces de realizar tareas que requieren inteligencia humana. Yo soy un ejemplo."
    },
    {
        palabrasClave: ["programación", "programar", "código", "lenguajes de programación", "python"],
        respuesta: "La programación es crear instrucciones para computadoras. Lenguajes populares: Python (fácil), JavaScript (web), Java (apps)."
    },
    {
        palabrasClave: ["bitcoin", "criptomonedas", "blockchain", "ethereum", "qué es bitcoin"],
        respuesta: "Bitcoin es la primera criptomoneda, creada en 2009. Utiliza blockchain para transacciones descentralizadas y seguras sin bancos."
    },
    {
        palabrasClave: ["internet", "como funciona internet", "historia del internet", "www"],
        respuesta: "Internet es una red global de computadoras. Nació en los años 60 como ARPANET. La WWW fue creada por Tim Berners-Lee en 1989."
    },
    {
        palabrasClave: ["iphone", "apple", "ios", "qué es iphone"],
        respuesta: "El iPhone es un teléfono inteligente de Apple. El primer modelo fue lanzado en 2007 por Steve Jobs."
    },
    {
        palabrasClave: ["metaverso", "qué es el metaverso", "realidad virtual", "mundos virtuales"],
        respuesta: "El metaverso es un entorno digital 3D donde las personas interactúan mediante avatares. Combina realidad virtual y aumentada."
    },
    {
        palabrasClave: ["nft", "qué es un nft", "token no fungible", "arte digital nft"],
        respuesta: "Un NFT es un activo digital único en blockchain. Representa propiedad de arte digital, coleccionables o inmutables."
    },
    {
        palabrasClave: ["5g", "red 5g", "quinta generación", "internet móvil 5g"],
        respuesta: "El 5G es la quinta generación de redes móviles. Ofrece mayor velocidad y menor latencia, habilitando el Internet de las Cosas."
    }

// ========== FIN DEL BLOQUE 5 ==========
// Copia todo lo de arriba y pégalo debajo del Bloque 4
// Cuando termines, dime "SIGUIENTE" o "YA CIERRA"

    // ========== RELIGIONES ==========
    {
        palabrasClave: ["budismo", "budista", "buda", "zen", "meditación budista"],
        respuesta: "El budismo fue fundado por Buda en India. Se basa en las Cuatro Nobles Verdades y el Óctuple Sendero para alcanzar el nirvana."
    },
    {
        palabrasClave: ["hinduismo", "hindú", "brahman", "atman", "shiva", "vishnu"],
        respuesta: "El hinduismo es religión mayoritaria en India. Creen en un alma eterna (atman) que reencarna. Dioses: Brahma, Vishnu y Shiva."
    },
    {
        palabrasClave: ["islam", "musulmán", "mahoma", "corán", "pilares del islam", "ramadán"],
        respuesta: "El islam fue fundado por Mahoma. Cinco pilares: declaración de fe, oración, limosna, ayuno (Ramadán) y peregrinación a La Meca."
    },
    {
        palabrasClave: ["cristianismo", "jesus", "jesus cristo", "biblia", "católico", "evangélico"],
        respuesta: "El cristianismo se basa en Jesús de Nazaret. Su libro es la Biblia. Ramas: catolicismo, protestantismo y ortodoxia."
    },
    {
        palabrasClave: ["judaísmo", "judío", "torá", "israel", "dios yahveh"],
        respuesta: "El judaísmo es la religión monoteísta más antigua, basada en la Torá. Consideran a Abraham como su patriarca."
    },

    // ========== MÚSICA ==========
    {
        palabrasClave: ["beatles", "the beatles", "john lennon", "paul mccartney"],
        respuesta: "The Beatles fue la banda más influyente de la historia. Integrantes: John Lennon, Paul McCartney, George Harrison, Ringo Starr."
    },
    {
        palabrasClave: ["michael jackson", "jackson", "rey del pop", "thriller", "moonwalk"],
        respuesta: "Michael Jackson fue el 'Rey del Pop'. Su álbum 'Thriller' es el más vendido de la historia. Creó el paso 'moonwalk'."
    },
    {
        palabrasClave: ["cuba música", "son cubano", "salsa", "buena vista social club", "silvio rodríguez"],
        respuesta: "Cuba tiene son, rumba, cha-chá-chá y salsa. Artistas: Compay Segundo, Ibrahim Ferrer (Buena Vista), Silvio Rodríguez (nueva trova)."
    },

    // ========== CINE ==========
    {
        palabrasClave: ["oscar", "premios oscar", "academia hollywood", "mejor película"],
        respuesta: "Los Oscar son los galardones más importantes del cine. Películas con más Oscars: 'Titanic', 'Ben-Hur' y 'El Señor de los Anillos'."
    },
    {
        palabrasClave: ["tarantino", "quentin tarantino", "pulp fiction", "kill bill"],
        respuesta: "Quentin Tarantino es director conocido por 'Pulp Fiction', 'Kill Bill', 'Django sin cadenas'. Estilo violento y diálogos ingeniosos."
    }

// ========== FIN DEL BLOQUE 6 ==========
// Copia todo lo de arriba y pégalo debajo del Bloque 5
// Cuando termines, dime "SIGUIENTE" o "YA CIERRA"

    // ========== MATEMÁTICAS ==========
    {
        palabrasClave: ["pi", "número pi", "3.1416", "π", "constante matemática"],
        respuesta: "El número π (pi) es la relación entre la circunferencia y su diámetro. Aproximadamente 3.14159. Se usa en geometría y física."
    },
    {
        palabrasClave: ["teorema de pitágoras", "pitágoras", "hipotenusa", "catetos"],
        respuesta: "El teorema de Pitágoras dice: en un triángulo rectángulo, a² + b² = c², donde c es la hipotenusa."
    },
    {
        palabrasClave: ["porcentaje", "%", "tanto por ciento", "calcular porcentaje"],
        respuesta: "El porcentaje es una proporción como fracción de 100. Por ejemplo, 25% significa 25 de cada 100."
    },

    // ========== DEPORTES ==========
    {
        palabrasClave: ["messi", "lionel messi", "mejor futbolista", "argentino messi"],
        respuesta: "Lionel Messi es considerado uno de los mejores futbolistas. Ganó 8 Balones de Oro y la Copa del Mundo 2022 con Argentina."
    },
    {
        palabrasClave: ["cristiano ronaldo", "ronaldo", "cr7", "portugués ronaldo"],
        respuesta: "Cristiano Ronaldo tiene 5 Balones de Oro y es el máximo goleador histórico de la selección de Portugal."
    },
    {
        palabrasClave: ["olímpicos", "juegos olímpicos", "olimpiadas", "jj oo"],
        respuesta: "Los Juegos Olímpicos son el evento deportivo más importante, con ediciones de verano e invierno cada 4 años."
    },

    // ========== ECONOMÍA ==========
    {
        palabrasClave: ["inflación", "qué es la inflación", "causas inflación", "precios suben"],
        respuesta: "La inflación es el aumento generalizado de precios. Reduce el poder adquisitivo del dinero."
    },
    {
        palabrasClave: ["oferta y demanda", "ley de oferta y demanda"],
        respuesta: "Si la demanda sube y la oferta no cambia, los precios suben. Si la oferta sube y la demanda no cambia, los precios bajan."
    },
    {
        palabrasClave: ["capitalismo", "qué es el capitalismo", "sistema capitalista"],
        respuesta: "El capitalismo se basa en propiedad privada, libre competencia y mercado como asignador de recursos."
    },

    // ========== ARTE Y LITERATURA ==========
    {
        palabrasClave: ["gabriel garcía márquez", "gabo", "cien años de soledad", "realismo mágico"],
        respuesta: "Gabriel García Márquez (Gabo) fue premio Nobel. Su obra 'Cien años de soledad' es cumbre del realismo mágico."
    },
    {
        palabrasClave: ["pablo neruda", "neruda", "poeta chileno", "veinte poemas de amor"],
        respuesta: "Pablo Neruda fue poeta chileno, premio Nobel 1971. Obras: 'Veinte poemas de amor', 'Odas elementales'."
    },
    {
        palabrasClave: ["mona lisa", "gioconda", "cuadro de da vinci", "la mona lisa"],
        respuesta: "La Mona Lisa es de Leonardo da Vinci, en el Museo del Louvre, famosa por su enigmática sonrisa."
    },

    // ========== ASTRONOMÍA ==========
    {
        palabrasClave: ["sol", "estrella sol", "características del sol"],
        respuesta: "El Sol es una estrella enana amarilla. Diámetro de 1.4 millones de km, temperatura superficial de 5,500°C."
    },
    {
        palabrasClave: ["luna", "fases de la luna", "satélite natural"],
        respuesta: "La Luna es el único satélite natural de la Tierra. Sus fases: nueva, creciente, llena y menguante."
    },
    {
        palabrasClave: ["marte", "planeta rojo", "colonizar marte"],
        respuesta: "Marte es el cuarto planeta, rojo por óxido de hierro. NASA y SpaceX planean misiones tripuladas."
    },

    // ========== PREGUNTAS GENERALES ==========
    {
        palabrasClave: ["chiste", "cuéntame un chiste", "algo gracioso", "diviérteme"],
        respuesta: "¿Qué le dice una papa a otra papa? ¡Somos papa's! (papás). 😄"
    },
    {
        palabrasClave: ["dato curioso", "curiosidad", "sabías que", "cosa interesante"],
        respuesta: "Dato curioso: los pulpos tienen tres corazones y sangre azul por hemocianina."
    },
    {
        palabrasClave: ["qué puedo preguntarte", "qué sabes hacer", "tus capacidades", "que puedes hacer sofia"],
        respuesta: "Puedo responder sobre ciencia, filosofía, psicología, nutrición, religiones, música, cine, historia, tecnología, y darte consejos o chistes."
    }

// ========== FIN DEL BLOQUE 7 ==========
// Copia todo lo de arriba y pégalo debajo del Bloque 6
// Cuando termines de copiar todos los bloques, dime "YA CIERRA"

    // ========== ANIMALES ==========
    {
        palabrasClave: ["perro", "mejor amigo del hombre", "razas de perros", "cuidados perros"],
        respuesta: "Los perros son mamíferos domesticados, conocidos como 'el mejor amigo del hombre'. Hay más de 340 razas. Son leales, protectores y excelentes compañeros."
    },
    {
        palabrasClave: ["gato", "felino", "cuidados gatos", "razas de gatos"],
        respuesta: "Los gatos son felinos domesticados. Son independientes, cazadores por naturaleza y muy populares como mascotas. Tienen una visión nocturna excelente."
    },
    {
        palabrasClave: ["delfín", "delfines", "animales marinos", "inteligencia delfín"],
        respuesta: "Los delfines son mamíferos marinos muy inteligentes. Se comunican mediante silbidos y clics. Son sociales y ayudan a otros animales heridos."
    },
    {
        palabrasClave: ["águila", "águilas", "ave rapaz", "símbolo nacional"],
        respuesta: "Las águilas son aves rapaces de gran tamaño. Tienen una visión aguda y vuelo poderoso. Son símbolo de libertad y poder en muchas culturas."
    },
    {
        palabrasClave: ["ballena", "ballenas", "animal más grande del mundo", "cetáceo"],
        respuesta: "La ballena azul es el animal más grande del planeta, puede medir hasta 30 metros y pesar 180 toneladas. Se alimentan de kril."
    },
    {
        palabrasClave: ["abeja", "abejas", "polinización", "miel", "importancia de las abejas"],
        respuesta: "Las abejas son insectos polinizadores esenciales para la agricultura. Producen miel y cera. Sin ellas, muchas plantas no podrían reproducirse."
    },
    {
        palabrasClave: ["tiburón", "tiburones", "depredador marino", "especies de tiburones"],
        respuesta: "Los tiburones son depredadores marinos que existen desde hace 400 millones de años. Tienen esqueleto cartilaginoso y sentido del olfato muy desarrollado."
    },
    {
        palabrasClave: ["mariposa", "mariposas", "metamorfosis", "insectos"],
        respuesta: "Las mariposas pasan por metamorfosis: huevo, oruga, crisálida y adulto. Son importantes polinizadores y hay más de 150,000 especies."
    },

    // ========== NATURALEZA Y MEDIO AMBIENTE ==========
    {
        palabrasClave: ["cambio climático", "calentamiento global", "efecto invernadero", "gases efecto invernadero"],
        respuesta: "El cambio climático es la alteración del clima por actividades humanas como quema de combustibles fósiles. Aumenta la temperatura global y causa fenómenos extremos."
    },
    {
        palabrasClave: ["reciclaje", "cómo reciclar", "importancia del reciclaje", "reducir reutilizar reciclar"],
        respuesta: "Reciclar consiste en convertir residuos en nuevos productos. Las 3R: Reducir, Reutilizar y Reciclar. Ayuda a disminuir la contaminación y el consumo de recursos."
    },
    {
        palabrasClave: ["desierto", "desiertos", "desierto más grande", "sahara", "atacama"],
        respuesta: "El desierto más grande del mundo es la Antártida (desierto polar). El Sáhara es el desierto cálido más grande, con 9.2 millones de km²."
    },
    {
        palabrasClave: ["selva amazónica", "amazonas", "pulmón del mundo", "deforestación amazonas"],
        respuesta: "La Amazonía es la selva tropical más grande del mundo. Produce el 20% del oxígeno terrestre. Alberga millones de especies animales y vegetales."
    },
    {
        palabrasClave: ["energía solar", "paneles solares", "energía renovable", "energía limpia"],
        respuesta: "La energía solar se obtiene del sol mediante paneles fotovoltaicos. Es renovable, limpia y cada vez más económica. Reduce la dependencia de combustibles fósiles."
    }

// ========== FIN DEL BLOQUE 8 ==========
// Copia y pega debajo del Bloque 7. Cuando termines, dime "SIGUIENTE"

    // ========== CUERPO HUMANO ==========
    {
        palabrasClave: ["corazón", "función del corazón", "órganos del cuerpo", "sistema circulatorio"],
        respuesta: "El corazón bombea sangre a todo el cuerpo. Late unas 100,000 veces al día y bombea 7,500 litros de sangre diarios."
    },
    {
        palabrasClave: ["cerebro", "funciones del cerebro", "sistema nervioso", "partes del cerebro"],
        respuesta: "El cerebro controla el cuerpo, las emociones y el pensamiento. Tiene 86,000 millones de neuronas. Pesa 1.4 kg y usa el 20% de la energía del cuerpo."
    },
    {
        palabrasClave: ["huesos", "esqueleto humano", "cuántos huesos tiene el cuerpo", "sistema óseo"],
        respuesta: "El esqueleto humano adulto tiene 206 huesos. Los recién nacidos tienen 270, algunos se fusionan al crecer. El fémur es el hueso más largo."
    },
    {
        palabrasClave: ["piel", "función de la piel", "órgano más grande", "capas de la piel"],
        respuesta: "La piel es el órgano más grande del cuerpo humano. Mide unos 2 metros cuadrados. Protege contra infecciones y regula la temperatura."
    },
    {
        palabrasClave: ["sangre", "composición de la sangre", "glóbulos rojos", "glóbulos blancos", "plaquetas"],
        respuesta: "La sangre transporta oxígeno y nutrientes. Está compuesta por glóbulos rojos (oxígeno), glóbulos blancos (defensas) y plaquetas (coagulación)."
    },
    {
        palabrasClave: ["vacunas", "para qué sirven las vacunas", "inmunidad", "tipos de vacunas"],
        respuesta: "Las vacunas entrenan al sistema inmunológico para combatir enfermedades. Han erradicado la viruela y controlado polio, sarampión y COVID-19."
    },
    {
        palabrasClave: ["fiebre", "qué causa la fiebre", "temperatura corporal", "cuándo preocuparse por fiebre"],
        respuesta: "La fiebre es una temperatura corporal elevada (más de 38°C). Es una respuesta del cuerpo a infecciones. Si supera 39.5°C o dura más de 3 días, consulta un médico."
    },
    {
        palabrasClave: ["resfriado", "gripe", "diferencia entre resfriado y gripe", "síntomas gripe"],
        respuesta: "El resfriado es leve (moqueo, estornudos). La gripe es más grave (fiebre alta, dolores musculares, fatiga). Ambos son virales, pero la gripe puede causar complicaciones."
    },

    // ========== MEDICINA Y PRIMEROS AUXILIOS ==========
    {
        palabrasClave: ["rpc", "reanimación cardiopulmonar", "primeros auxilios", "cómo hacer rcp"],
        respuesta: "La RCP es una técnica de emergencia para salvar vidas. Se realiza con compresiones torácicas (100-120 por minuto) y respiración boca a boca."
    },
    {
        palabrasClave: ["quemadura", "quemaduras", "cómo tratar quemaduras", "primeros auxilios quemaduras"],
        respuesta: "Para quemaduras: enfría con agua (no hielo), cubre con gasa estéril, no apliques cremas. Si es grave o grande, acude a urgencias."
    },
    {
        palabrasClave: ["intoxicación", "intoxicación alimentaria", "qué hacer en intoxicación", "síntomas intoxicación"],
        respuesta: "Los síntomas incluyen náuseas, vómitos y diarrea. Bebe agua para evitar deshidratación. Si hay fiebre alta o sangre, acude al médico."
    },
    {
        palabrasClave: ["fractura", "hueso roto", "qué hacer en fractura", "primeros auxilios fractura"],
        respuesta: "Inmoviliza la zona, no intentes recolocar el hueso, aplica hielo envuelto en tela y acude a urgencias. Si hay herida abierta, cúbrela con gasa estéril."
    }

// ========== FIN DEL BLOQUE 9 ==========
// Copia y pega debajo del Bloque 8. Cuando termines, dime "SIGUIENTE"

    // ========== POLÍTICA Y GOBIERNO ==========
    {
        palabrasClave: ["democracia", "qué es la democracia", "sistema democrático", "elecciones democráticas"],
        respuesta: "La democracia es un sistema donde el pueblo elige a sus gobernantes mediante votaciones libres y periódicas. Promueve la participación ciudadana y los derechos humanos."
    },
    {
        palabrasClave: ["república", "qué es una república", "sistema republicano", "república vs democracia"],
        respuesta: "Una república es un sistema donde los líderes son elegidos por el pueblo o sus representantes, no por herencia. La mayoría de las democracias modernas son repúblicas."
    },
    {
        palabrasClave: ["monarquía", "qué es una monarquía", "monarquía absoluta", "monarquía constitucional", "rey", "reina"],
        respuesta: "La monarquía es un sistema donde el jefe de Estado es un rey o reina. Puede ser absoluta (todo el poder) o constitucional (poder limitado por una constitución)."
    },
    {
        palabrasClave: ["dictadura", "qué es una dictadura", "gobierno dictatorial", "dictador", "autoritarismo"],
        respuesta: "Una dictadura es un régimen donde una persona o grupo pequeño tiene poder absoluto sin control ciudadano. Generalmente no hay elecciones libres ni libertad de expresión."
    },
    {
        palabrasClave: ["comunismo", "qué es el comunismo", "marxismo", "socialismo comunista", "karl marx comunismo"],
        respuesta: "El comunismo es una ideología que busca la propiedad colectiva de los medios de producción y la abolición de las clases sociales. Fue teorizada por Karl Marx."
    },
    {
        palabrasClave: ["fascismo", "qué es el fascismo", "mussolini", "hitler", "fascismo italiano"],
        respuesta: "El fascismo es una ideología autoritaria que surgió en Italia con Mussolini. Exalta la nación por encima del individuo, rechaza la democracia y usa la violencia política."
    },
    {
        palabrasClave: ["onu", "naciones unidas", "qué es la onu", "organización de las naciones unidas", "consejo de seguridad"],
        respuesta: "La ONU es una organización internacional fundada en 1945 para mantener la paz mundial. Tiene 193 países miembros. Su sede está en Nueva York."
    },
    {
        palabrasClave: ["ue", "unión europea", "qué es la unión europea", "países de la unión europea", "euro"],
        respuesta: "La Unión Europea es una alianza económica y política de 27 países europeos. Tiene moneda común (euro) en 20 de ellos y libre circulación de personas."
    },

    // ========== DERECHOS HUMANOS ==========
    {
        palabrasClave: ["derechos humanos", "declaración de derechos humanos", "ddhh", "derechos fundamentales"],
        respuesta: "Los derechos humanos son garantías básicas para todos los seres humanos. La ONU aprobó la Declaración Universal en 1948. Incluyen vida, libertad, educación y no discriminación."
    },
    {
        palabrasClave: ["libertad de expresión", "libre expresión", "derecho a opinar", "censura"],
        respuesta: "La libertad de expresión es el derecho a opinar sin censura. Está protegida por leyes internacionales, pero tiene límites como el discurso de odio o la difamación."
    }

// ========== FIN DEL BLOQUE 10 ==========
// Copia y pega debajo del Bloque 9. Cuando termines, dime "SIGUIENTE"

    // ========== EMPRENDIMIENTO ==========
    {
        palabrasClave: ["emprender", "cómo emprender", "emprendedor", "ideas de negocio", "emprendimiento desde cero"],
        respuesta: "Para emprender: identifica un problema, crea una solución, valida tu idea con clientes, empieza pequeño y mejora con feedback. La perseverancia es clave."
    },
    {
        palabrasClave: ["plan de negocios", "business plan", "cómo hacer un plan de negocio", "partes de un plan de negocio"],
        respuesta: "Un plan de negocio incluye: resumen ejecutivo, análisis de mercado, estrategia de marketing, plan operativo, equipo y proyecciones financieras."
    },
    {
        palabrasClave: ["marketing", "marketing digital", "estrategias de marketing", "cómo vender más", "publicidad"],
        respuesta: "El marketing es el conjunto de estrategias para promocionar productos. Marketing digital incluye redes sociales, SEO, email marketing y anuncios online."
    },
    {
        palabrasClave: ["finanzas personales", "educación financiera", "manejar dinero", "control de gastos"],
        respuesta: "Las finanzas personales incluyen: presupuesto (registrar ingresos y gastos), ahorro (20% de ingresos), inversión y fondo de emergencia."
    },
    {
        palabrasClave: ["deuda", "salir de deudas", "cómo pagar deudas", "consolidar deudas", "intereses deudas"],
        respuesta: "Para salir de deudas: prioriza las deudas con intereses más altos, negocia plazos, reduce gastos innecesarios y considera consolidar deudas en un solo préstamo."
    },
    {
        palabrasClave: ["inversión", "cómo invertir", "invertir dinero", "inversiones seguras", "rendimientos"],
        respuesta: "Invertir es poner dinero en activos para obtener ganancias. Opciones: acciones, bonos, bienes raíces, fondos indexados, criptomonedas. Diversificar reduce riesgos."
    },
    {
        palabrasClave: ["ahorro", "cómo ahorrar dinero", "técnicas de ahorro", "ahorrar cada mes"],
        respuesta: "Técnicas de ahorro: regla 50/30/20 (50% necesidades, 30% deseos, 20% ahorro), evitar gastos hormiga, pagar en efectivo y automatizar transferencias de ahorro."
    },

    // ========== TRABAJO Y CARRERA ==========
    {
        palabrasClave: ["currículum", "cv", "cómo hacer un currículum", "hoja de vida", "consejos currículum"],
        respuesta: "Un buen currículum incluye: datos personales, perfil profesional, experiencia laboral, educación, habilidades y referencias. Usa un diseño limpio y específico para cada puesto."
    },
    {
        palabrasClave: ["entrevista de trabajo", "cómo pasar una entrevista", "consejos para entrevista", "preguntas frecuentes entrevista"],
        respuesta: "Para una entrevista: investiga la empresa, prepárate para preguntas comunes (fortalezas, debilidades, logros), viste apropiadamente y muestra confianza."
    },
    {
        palabrasClave: ["trabajo remoto", "teletrabajo", "trabajar desde casa", "freelance", "home office"],
        respuesta: "El trabajo remoto permite laborar desde casa. Ventajas: flexibilidad, sin desplazamientos. Desventajas: aislamiento, distracciones. Requiere disciplina y buena conexión a internet."
    }

// ========== FIN DEL BLOQUE 11 ==========
// Copia y pega debajo del Bloque 10. Cuando termines, dime "SIGUIENTE" o "YA CIERRA"

    // ========== BLOQUE 12 – AMOR, RELACIONES Y PSICOLOGÍA DE PAREJA ==========
    {
        palabrasClave: ["amor", "qué es el amor", "enamoramiento", "amor verdadero", "amor romántico"],
        respuesta: "El amor es un sentimiento de afecto profundo hacia alguien. Incluye respeto, confianza y compromiso. No es solo pasión, también es decisión diaria."
    },
    {
        palabrasClave: ["relación de pareja", "consejos para parejas", "mejorar relación", "problemas de pareja", "comunicación en pareja"],
        respuesta: "Para una relación saludable: comunicación honesta, respeto mutuo, tiempo de calidad, resolver conflictos sin gritos, y mantener la confianza. No intentes cambiar al otro."
    },
    {
        palabrasClave: ["desamor", "ruptura", "terminar una relación", "superar una ruptura", "olvidar a alguien"],
        respuesta: "Superar una ruptura duele. Permítete sentir tristeza, habla con alguien de confianza, enfócate en tus metas, retoma hobbies y date tiempo. No busques respuestas donde no las hay."
    },
    {
        palabrasClave: ["celos", "celos en pareja", "inseguridad", "confianza en pareja", "cómo manejar celos"],
        respuesta: "Los celos nacen de la inseguridad y falta de confianza. Habla con tu pareja sin acusar, trabaja tu autoestima, establece límites claros y confía hasta que haya razón para no hacerlo."
    },
    {
        palabrasClave: ["amistad", "amigos verdaderos", "valor de la amistad", "cómo ser buen amigo"],
        respuesta: "La amistad verdadera se basa en lealtad, honestidad y apoyo mutuo. Un buen amigo escucha sin juzgar, está en las malas y celebra tus logros. Cultiva la amistad como una planta."
    },
    {
        palabrasClave: ["matrimonio", "casarse", "vida matrimonial", "consejos para casados", "boda"],
        respuesta: "El matrimonio es una alianza basada en amor y respeto. Claves: comunicación diaria, tiempo para la intimidad, resolver conflictos en calma, mantener citas románticas y crecer juntos."
    },

    // ========== BLOQUE 13 – TECNOLOGÍA AVANZADA, IA Y FUTURO ==========
    {
        palabrasClave: ["robótica", "robots", "inteligencia artificial robots", "futuro de los robots", "tipos de robots"],
        respuesta: "La robótica diseña máquinas inteligentes. Hay robots industriales (fábricas), médicos (cirugía), domésticos (aspiradoras) y humanoides. El futuro trae robots colaborativos con humanos."
    },
    {
        palabrasClave: ["realidad virtual", "vr", "realidad aumentada", "ar", "gafas vr", "meta quest"],
        respuesta: "La realidad virtual (VR) sumerge al usuario en un entorno digital. La realidad aumentada (AR) superpone información al mundo real. Se usan en juegos, educación, entrenamiento y medicina."
    },
    {
        palabrasClave: ["internet de las cosas", "iot", "smart home", "casa inteligente", "dispositivos conectados"],
        respuesta: "El Internet de las Cosas (IoT) conecta objetos cotidianos a internet: neveras, luces, termostatos, cámaras. Permite controlar tu casa desde el móvil. Mejora eficiencia y comodidad."
    },
    {
        palabrasClave: ["blockchain", "cadena de bloques", "tecnología blockchain", "usos de blockchain", "libro contable digital"],
        respuesta: "Blockchain es una base de datos descentralizada y segura. Registra transacciones sin intermediarios. Se usa en criptomonedas, contratos inteligentes, votaciones electrónicas y trazabilidad de productos."
    },
    {
        palabrasClave: ["impresión 3d", "impresora 3d", "fabricación aditiva", "qué se puede imprimir en 3d"],
        respuesta: "La impresión 3D crea objetos tridimensionales capa por capa. Se usa para prótesis médicas, juguetes, piezas de repuesto, comida, e incluso casas. Reduce residuos y costes de producción."
    },
    {
        palabrasClave: ["energía nuclear", "central nuclear", "fisión nuclear", "energía atómica", "ventajas energía nuclear"],
        respuesta: "La energía nuclear se obtiene de la fisión de átomos. Produce mucha energía sin emisiones de CO2. Pero genera residuos radiactivos y riesgos de accidentes como Chernóbil o Fukushima."
    },
    {
        palabrasClave: ["vehículo eléctrico", "coche eléctrico", "tesla", "movilidad sostenible", "cargar coche eléctrico"],
        respuesta: "Los coches eléctricos funcionan con baterías recargables. No emiten gases contaminantes. Tesla es la marca más famosa. El reto es la autonomía y los puntos de carga aún limitados."
    },
    {
        palabrasClave: ["computación cuántica", "ordenador cuántico", "qubit", "futuro de la computación", "google quantum"],
        respuesta: "La computación cuántica usa qubits en lugar de bits. Puede resolver problemas imposibles para computadoras clásicas. Google e IBM tienen prototipos. Podría revolucionar la medicina y la criptografía."
    },

    // ========== BLOQUE 14 – MITOLOGÍA Y LEYENDAS ==========
    {
        palabrasClave: ["mitología griega", "dioses griegos", "zeus", "poseidón", "hades", "atenea", "afrodita"],
        respuesta: "La mitología griega tiene dioses olímpicos: Zeus (rey del cielo), Poseidón (mar), Hades (inframundo), Atenea (sabiduría), Afrodita (amor). Vivían en el Monte Olimpo."
    },
    {
        palabrasClave: ["mitología nórdica", "dioses nórdicos", "thor", "odin", "loki", "ragnarok", "valhalla"],
        respuesta: "La mitología nórdica viene de Escandinavia. Dioses: Odín (sabiduría), Thor (trueno), Loki (travieso). Creían en el Valhalla (para guerreros muertos en batalla) y el Ragnarök (fin del mundo)."
    },
    {
        palabrasClave: ["mitología egipcia", "dioses egipcios", "ra", "isis", "osiris", "anubis", "horus"],
        respuesta: "En la mitología egipcia: Ra (dios del sol), Isis (magia), Osiris (muerte y resurrección), Anubis (embalsamamiento), Horus (cielo). Creían en la vida después de la muerte y el juicio con el corazón."
    },
    {
        palabrasClave: ["leyendas urbanas", "leyendas famosas", "cipayo", "luz mala", "pombero", "curupí", "criaturas míticas"],
        respuesta: "Las leyendas urbanas son historias populares sin comprobar. En Latinoamérica: El Cipayo (Argentina), La Luz Mala (Paraguay), El Pombero y Curupí (Guaraníes). También famoso: La Llorona (México)."
    },
    {
        palabrasClave: ["vampiros", "drácula", "vlad tepes", "mito del vampiro", "cómo matar vampiros"],
        respuesta: "Los vampiros son criaturas mitológicas que beben sangre. La novela 'Drácula' de Bram Stoker popularizó el mito. Se basó en Vlad Tepes, príncipe de Valaquia. Los mitos dicen que les temen al ajo y la luz solar."
    },
    {
        palabrasClave: ["hombres lobo", "licantropía", "lobizón", "mito del hombre lobo", "luna llena hombre lobo"],
        respuesta: "El hombre lobo es una persona que se transforma en lobo durante la luna llena. La licantropía es una enfermedad mitológica. En Latinoamérica se conoce como 'lobizón' (Argentina, Paraguay, Uruguay)."
    },

    // ========== BLOQUE 15 – VIAJES, TURISMO Y LUGARES DEL MUNDO ==========
    {
        palabrasClave: ["parís", "francia", "torre eiffel", "que ver en parís", "viajar a parís", "louvre"],
        respuesta: "París es la capital de Francia. Lugares famosos: Torre Eiffel, Museo del Louvre (Mona Lisa), Catedral de Notre Dame, Arco del Triunfo, Río Sena. Es la ciudad del amor y la moda."
    },
    {
        palabrasClave: ["roma", "italia", "coliseo romano", "que ver en roma", "vaticano", "ciudad del vaticano"],
        respuesta: "Roma es la capital de Italia. Atracciones: Coliseo Romano, Fontana di Trevi, Panteón, Foro Romano, Ciudad del Vaticano (Basílica de San Pedro, Capilla Sixtina con frescos de Miguel Ángel)."
    },
    {
        palabrasClave: ["nueva york", "ny", "estados unidos", "times square", "estatua de la libertad", "central park", "manhattan"],
        respuesta: "Nueva York es la ciudad más poblada de EE.UU. Iconos: Estatua de la Libertad, Times Square, Central Park, Empire State Building, Puente de Brooklyn, Broadway (teatros), Museo Metropolitano."
    },
    {
        palabrasClave: ["tokio", "japón", "qué ver en tokio", "shibuya", "shinjuku", "templo sensoji", "monte fuji"],
        respuesta: "Tokio es la capital de Japón. Lugares: cruce de Shibuya, barrio de Shinjuku, Templo Sensoji (Asakusa), Torre de Tokio, barrio Akihabara (tecnología y anime). Cerca está el Monte Fuji."
    },
    {
        palabrasClave: ["playa del carmen", "cancún", "méxico", "caribe mexicano", "riviera maya", "tulum", "cozumel"],
        respuesta: "Cancún y Playa del Carmen están en la Riviera Maya, México. Playas de arena blanca y agua turquesa. Cerca: ruinas mayas de Tulum, Cozumel (buceo), cenotes, y Chichén Itzá."
    },
    {
        palabrasClave: ["habana vieja", "la habana", "cuba turismo", "malecón habanero", "plaza vieja", "capitolio habana"],
        respuesta: "La Habana Vieja es Patrimonio de la Humanidad. Atracciones: Malecón, Plaza Vieja, Capitolio, Bodeguita del Medio (mojito), Castillo del Morro, Paseo del Prado, Cementerio Cristóbal Colón."
    },
    {
        palabrasClave: ["machu picchu", "perú", "ciudadela inca", "camino inca", "cusco", "maravilla del mundo"],
        respuesta: "Machu Picchu es una ciudadela inca del siglo XV en Perú. Está a 2,430 metros sobre el mar. Es Patrimonio de la Humanidad y una de las Siete Maravillas del Mundo Moderno. Se llega desde Cusco."
    },

    // ========== BLOQUE 16 – COCINA, RECETAS Y GASTRONOMÍA ==========
    {
        palabrasClave: ["gastronomía", "comida típica", "platos tradicionales", "comer bien", "cultura culinaria"],
        respuesta: "La gastronomía estudia la comida y su cultura. Cada país tiene platos típicos: paella (España), sushi (Japón), tacos (México), pasta (Italia), asado (Argentina), arroz con pollo (Cuba)."
    },
    {
        palabrasClave: ["paella", "receta paella", "paella valenciana", "comida española", "cómo hacer paella"],
        respuesta: "La paella es un plato español originario de Valencia. Lleva arroz, azafrán, verduras (judías verdes, garrofón), pollo, conejo, y a veces mariscos. Se cocina en una paellera al fuego."
    },
    {
        palabrasClave: ["sushi", "comida japonesa", "tipos de sushi", "cómo hacer sushi", "rollo de sushi"],
        respuesta: "El sushi es un plato japonés de arroz avinagrado con pescado crudo, mariscos o verduras. Tipos: nigiri (pescado sobre arroz), maki (rollo con alga nori), sashimi (solo pescado sin arroz)."
    },
    {
        palabrasClave: ["tacos", "tacos mexicanos", "comida mexicana", "cómo hacer tacos", "tacos al pastor", "tortillas"],
        respuesta: "Los tacos son tortillas de maíz o harina rellenas. Pueden llevar carne asada, pollo, pastor (con piña), carnitas, pescado, o vegetales. Se acompañan con cebolla, cilantro, salsa y limón."
    },
    {
        palabrasClave: ["asado", "carne asada", "parrilla argentina", "cómo hacer asado", "chorizo", "morcilla", "vacío"],
        respuesta: "El asado es la tradición argentina y uruguaya de cocinar carne a la parrilla. Cortes típicos: vacío, tira de asado, chorizo, morcilla, mollejas. Se come con chimichurri y vino tinto."
    },
    {
        palabrasClave: ["arroz con pollo", "comida cubana", "receta arroz con pollo", "cómo hacer arroz con pollo", "pollo arroz"],
        respuesta: "El arroz con pollo es un plato típico de Cuba y Latinoamérica. Lleva arroz, pollo, sofrito (cebolla, pimiento, ajo), comino, tomate, y a veces cerveza o alcaparras. Muy sabroso y contundente."
    },
    {
        palabrasClave: ["pastas", "espaguetis", "fideos", "salsa boloñesa", "carbonara", "como hacer pasta", "italia pasta"],
        respuesta: "Las pastas italianas incluyen espaguetis, fettuccine, ravioles, lasaña. Salsas: boloñesa (carne), carbonara (huevo, queso, panceta), pesto (albahaca, piñones), y alfredo (crema y queso)."
    },

    // ========== BLOQUE 17 – MODA, ESTILO Y BELLEZA ==========
    {
        palabrasClave: ["moda", "tendencias de moda", "estilo personal", "cómo vestir bien", "consejos de moda"],
        respuesta: "La moda cambia cada temporada. El estilo personal es atemporal. Tips: viste según tu cuerpo, usa colores que te favorezcan, invierte en básicos de calidad, y añade accesorios para destacar."
    },
    {
        palabrasClave: ["piel", "cuidado de la piel", "rutina facial", "limpieza facial", "protector solar", "cremas hidratantes"],
        respuesta: "Rutina básica de cuidado facial: limpieza, tónico, hidratante, protector solar (día). Para la noche: limpieza, suero, crema nocturna. Bebe agua y duerme bien para una piel saludable."
    },
    {
        palabrasClave: ["maquillaje", "tutorial maquillaje", "cosméticos", "belleza", "como maquillarse"],
        respuesta: "El maquillaje realza la belleza natural. Básicos: base (uniforma el tono), corrector (oculta ojeras), polvos (fija), rimel (pestañas), labial, blush (colorete). Empieza con productos simples."
    },
    {
        palabrasClave: ["cabello", "cuidado del cabello", "pelo sano", "champú", "acondicionador", "mascarilla capilar"],
        respuesta: "Para cabello sano: lava 2-3 veces por semana con champú suave, usa acondicionador solo en puntas, aplica mascarilla 1 vez por semana, evita calor excesivo y corta puntas cada 2-3 meses."
    },

    // ========== BLOQUE 18 – VIDEOJUEGOS Y CULTURA GAMER ==========
    {
        palabrasClave: ["videojuegos", "historia de los videojuegos", "primer videojuego", "pong", "atari", "nintendo"],
        respuesta: "Los videojuegos comenzaron en los 70 con Pong (Atari). En los 80, Nintendo popularizó los juegos con Mario Bros y Zelda. Hoy es una industria más grande que el cine y la música juntos."
    },
    {
        palabrasClave: ["minecraft", "juego minecraft", "construcción minecraft", "modo creativo minecraft", "supervivencia minecraft"],
        respuesta: "Minecraft es un juego de construcción y supervivencia con bloques. Tiene dos modos: creativo (recursos infinitos) y supervivencia (recolectar, fabricar, luchar). Es el juego más vendido de la historia."
    },
    {
        palabrasClave: ["fortnite", "battle royale", "baile fortnite", "temporadas fortnite", "pavos fortnite"],
        respuesta: "Fortnite es un Battle Royale gratuito con 100 jugadores. También tiene modo de construcción. Es famoso por sus bailes (emotes) y eventos en vivo. Las monedas se llaman 'pavos'."
    },
    {
        palabrasClave: ["league of legends", "lol", "moba", "campeones lol", "partida lol", "ranked lol"],
        respuesta: "League of Legends (LoL) es un MOBA 5vs5. Cada jugador elige un campeón con habilidades únicas. El objetivo es destruir el nexo enemigo. Tiene modo ranked (clasificatorio) y profesional."
    },
    {
        palabrasClave: ["esports", "deportes electrónicos", "competencia videojuegos", "torneos esports", "jugadores profesionales", "gamers pro"],
        respuesta: "Los esports son competiciones profesionales de videojuegos. Los juegos más populares: LoL, Dota 2, CS:GO, Valorant, Fortnite. Los premios pueden superar los 30 millones de dólares."
    },

    // ========== BLOQUE 19 – MISTERIOS SIN RESOLVER Y FENÓMENOS PARANORMALES ==========
    {
        palabrasClave: ["triángulo de las bermudas", "triangulo bermudas", "misterio bermudas", "desapariciones bermudas"],
        respuesta: "El Triángulo de las Bermudas es un área del Atlántico donde han desaparecido barcos y aviones. No hay evidencia científica de fenómenos sobrenaturales. Probablemente se debe a errores humanos y condiciones climáticas extremas."
    },
    {
        palabrasClave: ["ovnis", "objetos voladores no identificados", "extraterrestres", "avistamientos ovnis", "fenómenos aéreos"],
        respuesta: "Los ovnis son objetos voladores no identificados. Muchos avistamientos se explican como aviones, drones o fenómenos atmosféricos. El gobierno de EE.UU. ha publicado informes sobre fenómenos aéreos no explicados."
    },
    {
        palabrasClave: ["piedras de ica", "ica perú", "piedras grabadas", "misterio piedras ica", "dinosaurios humanos"],
        respuesta: "Las Piedras de Ica son piedras grabadas encontradas en Perú. Algunas muestran dinosaurios y humanos juntos. Los escépticos creen que son falsificaciones modernas. No hay evidencia arqueológica sólida."
    },
    {
        palabrasClave: ["nazca", "líneas de nazca", "geoglifos nazca", "perú nazca", "figuras nazca", "misterio nazca"],
        respuesta: "Las Líneas de Nazca son geoglifos en el desierto de Perú. Representan animales (colibrí, mono, araña) y figuras geométricas. Fueron hechas entre el 500 a.C. y 500 d.C. Su propósito exacto aún se debate: astronomía, rituales religiosos o calendarios."
    },
    {
        palabrasClave: ["círculos de cosecha", "crop circles", "círculos en cultivos", "misterio círculos", "diseños trigo"],
        respuesta: "Los círculos de cosecha son patrones geométricos en campos de cultivo. Algunos creen que los hacen extraterrestres. En realidad, muchos fueron creados por humanos como bromas o arte. El fenómeno comenzó en los 70 en Inglaterra."
    },

    // ========== BLOQUE 20 – FRASES CÉLEBRES DE PERSONAJES HISTÓRICOS ==========
    {
        palabrasClave: ["frase célebre", "cita famosa", "frase motivadora historia", "pensamientos famosos"],
        respuesta: "Una frase célebre es una cita inspiradora. Puedo darte muchas. Por ejemplo: 'El único modo de hacer un gran trabajo es amar lo que haces' (Steve Jobs). 'Sé el cambio que quieres ver en el mundo' (Mahatma Gandhi)."
    },
    {
        palabrasClave: ["confucio", "frases confucio", "pensamientos confucio", "sabiduría confucio"],
        respuesta: "Confucio fue un filósofo chino. Frases: 'Elige un trabajo que te guste y no tendrás que trabajar ni un día de tu vida'. 'No importa lo lento que vayas, siempre que no te detengas'. 'El hombre que mueve montañas empieza cargando pequeñas piedras'."
    },
    {
        palabrasClave: ["albert einstein", "frases einstein", "einstein sabiduría", "citas einstein"],
        respuesta: "Albert Einstein: 'La imaginación es más importante que el conocimiento'. 'No pretendas tener éxito, lucha por tener valor'. 'La locura es hacer lo mismo una y otra vez esperando resultados diferentes'. 'Dios no juega a los dados con el universo'."
    },
    {
        palabrasClave: ["leonardo da vinci", "da vinci frases", "frases de leonardo", "citas da vinci"],
        respuesta: "Leonardo da Vinci: 'Aprende a ver. Date cuenta de que todo está conectado con todo lo demás'. 'La sabiduría es hija de la experiencia'. 'El mayor engaño que sufren los hombres es su propia opinión'."
    },
    {
        palabrasClave: ["martin luther king", "mlk frases", "frases martin luther king", "citas mlk", "tengo un sueño"],
        respuesta: "Martin Luther King Jr.: 'Tengo un sueño de que mis cuatro hijos pequeños vivirán un día en una nación donde no serán juzgados por el color de su piel, sino por su carácter'. 'La oscuridad no puede expulsar a la oscuridad; solo la luz puede hacerlo'."
    },
    {
        palabrasClave: ["nelson mandela", "frases mandela", "mandela citas", "sabiduría mandela"],
        respuesta: "Nelson Mandela: 'Siempre parece imposible hasta que se hace'. 'La educación es el arma más poderosa para cambiar el mundo'. 'Nadie nace odiando a otra persona por el color de su piel. Se aprende a odiar'."
    },
    {
        palabrasClave: ["walt disney", "frases disney", "walt disney citas", "inspiración disney"],
        respuesta: "Walt Disney: 'Si puedes soñarlo, puedes hacerlo'. 'La forma de empezar es dejar de hablar y empezar a hacer'. 'Todos nuestros sueños pueden hacerse realidad si tenemos el valor de perseguirlos'."
    }

// ========== FIN DEL MEGA BLOQUE ==========
// Copia TODO esto y pégalo debajo de tu último bloque.
// Cuando termines de copiar todos los bloques que quieras, dime "YA CIERRA"

    // ========== BLOQUE 21 – EDUCACIÓN, APRENDIZAJE Y CURIOSIDADES ==========
    {
        palabrasClave: ["aprender rápido", "técnicas de estudio", "cómo estudiar mejor", "memorizar rápido", "métodos de aprendizaje"],
        respuesta: "Técnicas de estudio efectivas: repaso espaciado (repetir información en intervalos crecientes), práctica de recuperación (autoevaluarse), método Feynman (enseñar a otros), pomodoro (25 min estudio, 5 min descanso)."
    },
    {
        palabrasClave: ["mapa mental", "cómo hacer un mapa mental", "organizar ideas", "técnica de estudio mapa", "mind map"],
        respuesta: "Un mapa mental es un diagrama para organizar ideas. Se coloca el tema central en el medio, se dibujan ramas con subtemas, se usan palabras clave, colores e imágenes. Ayuda a estudiar y recordar información."
    },
    {
        palabrasClave: ["inteligencia múltiple", "howard gardner", "tipos de inteligencia", "inteligencias múltiples", "qué inteligencia tengo"],
        respuesta: "Howard Gardner propuso 8 inteligencias: lingüística (palabras), lógico-matemática (números), espacial (imágenes), musical (sonidos), corporal (movimiento), interpersonal (relaciones), intrapersonal (autoconocimiento), naturalista (naturaleza). Todos tenemos varias."
    },
    {
        palabrasClave: ["pomodoro", "técnica pomodoro", "cómo concentrarse", "tiempo de estudio", "productividad método"],
        respuesta: "La técnica Pomodoro consiste en trabajar 25 minutos sin interrupciones, luego descansar 5. Después de 4 pomodoros, descanso largo (15-30 min). Ideal para estudiar o trabajar sin quemarse."
    },
    {
        palabrasClave: ["curiosidades del mundo", "datos asombrosos", "cosas que no sabías", "hechos sorprendentes"],
        respuesta: "Dato: Los pulpos tienen tres corazones y sangre azul. Las hormigas pueden cargar 50 veces su peso. Los elefantes son los únicos mamíferos que no pueden saltar. Las huellas dactilares se forman en el vientre materno y son únicas."
    },
    {
        palabrasClave: ["récord mundial", "guinness world records", "marcas increíbles", "persona más alta", "hombre más viejo", "más rápido"],
        respuesta: "Récords Guinness: persona más alta (Robert Wadlow, 2.72m), persona más vieja (Jeanne Calment, 122 años), el animal más rápido (guepardo, 120 km/h), el país más grande (Rusia, 17.1 millones km²)."
    },
    {
        palabrasClave: ["inventos accidentales", "cosas que se inventaron por error", "descubrimientos casuales", "inventos sin querer"],
        respuesta: "Inventos accidentales: el microondas (un chocolate se derritió cerca de un radar), el pegamento Post-it (pegamento débil que no secaba), los cereales Kellogg's (gachas fermentadas que se secaron), el viagra (buscaban medicamento para el corazón)."
    },
    {
        palabrasClave: ["días especiales", "efemérides", "fechas importantes", "día de la mujer", "día del padre", "día de la madre"],
        respuesta: "Fechas destacadas: 8M (Día de la Mujer), 1 de mayo (Día del Trabajador), 15 de junio (Día del Padre, varía por país), segundo domingo de mayo (Día de la Madre), 25 de diciembre (Navidad), 1 de enero (Año Nuevo)."
    },
    {
        palabrasClave: ["zodiaco", "signos zodiacales", "horóscopo", "astrología", "qué signo soy", "fecha de nacimiento signo"],
        respuesta: "Signos zodiacales: Aries (marzo 21-abril 19), Tauro (abril 20-mayo 20), Géminis (mayo 21-junio 20), Cáncer (junio 21-julio 22), Leo (julio 23-agosto 22), Virgo (agosto 23-sept 22), Libra (sept 23-oct 22), Escorpio (oct 23-nov 21), Sagitario (nov 22-dic 21), Capricornio (dic 22-ene 19), Acuario (ene 20-feb 18), Piscis (feb 19-marzo 20)."
    },
    {
        palabrasClave: ["fobias", "miedos extraños", "fobia nombres", "que es la fobia", "tipos de fobias"],
        respuesta: "Fobias comunes: aracnofobia (arañas), claustrofobia (espacios cerrados), acrofobia (alturas), agorafobia (lugares abiertos), fobia social (hablar en público). Extrañas: nomofobia (miedo a quedarse sin móvil), cibofobia (comida), anatidaefobia (ser observado por un pato)."
    }

// ========== CIERRE DEL ARCHIVO ==========
];

// ======================================================
// EXPORTAR CONOCIMIENTOS PARA QUE SOFÍA LOS USE
// ======================================================

if (typeof window !== 'undefined') {
    window.conocimientos = conocimientos;
}

// ========== FIN DEL ARCHIVO conocimientos.js ==========
// Todo está listo. Sofía ya tiene todos los conocimientos.
