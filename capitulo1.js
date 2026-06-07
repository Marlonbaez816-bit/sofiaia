// ======================================================
// CAPÍTULO 1: EL DESPERTAR
// Yo dentro del monstruo - Libro interactivo
// ======================================================

// Inicializar progreso si no existe
if (typeof window.progresoHistoria === 'undefined') {
    window.progresoHistoria = localStorage.getItem('capitulo1_progreso') || 'inicio';
}

// Función para guardar progreso
function guardarProgreso(paso) {
    window.progresoHistoria = paso;
    localStorage.setItem('capitulo1_progreso', paso);
}

// Función para reiniciar el capítulo
window.reiniciarCapitulo1 = function() {
    guardarProgreso('inicio');
    return "🔄 Has reiniciado el Capítulo 1. Te encuentras en la habitación blanca del hospital psiquiátrico. Lucas acaba de despertar. Valentina está por llegar. ¿Qué haces? (elige: esperar, explorar, recordar)";
};

// Función principal del capítulo 1
window.jugarCapitulo1 = function(comando) {
    const cmd = comando.toLowerCase();
    let respuesta = "";
    
    // ========== NODO INICIO ==========
    if (window.progresoHistoria === 'inicio') {
        if (cmd.includes("esperar") || cmd.includes("espera")) {
            guardarProgreso('esperar_valentina');
            respuesta = "⏳ Te quedas sentado en la cama, esperando. El reloj de la pared marca las 3:47 de la tarde. Escuchas pasos en el pasillo. Son lentos, inseguros. La puerta se abre.\n\nValentina entra. Es alta, de pelo negro y ojos verdes. Lleva una chaqueta de cuero y una mochila colgando de un hombro. Te mira fijamente, como si buscara algo en tu cara.\n\n—Lucas —dice—. ¿Puedo sentarme?\n\nAsientes sin hablar. Ella se sienta en la silla de plástico blanca, frente a ti.\n\n—Los médicos dicen que has cambiado —continúa—. Que ya no eres agresivo. Que hasta hablas diferente.\n\n—¿Y tú qué crees? —preguntas con la voz de Lucas.\n\nValentina tarda en responder.\n\n—Creo que no sé quién eres. Pero quiero averiguarlo.\n\nSe inclina hacia adelante. Ahora están muy cerca.\n\n—¿Qué pasó aquella noche? —pregunta—. La noche que me seguiste hasta mi casa.\n\nTu mente se llena de imágenes que no son tuyas. Lucas caminando detrás de ella en la oscuridad. Lucas con las manos temblando. Lucas queriendo decir algo y no pudiendo.\n\n—Quería disculparme —mientes—. Pero no tuve valor.\n\nValentina sonríe con tristeza.\n\n—Eso es lo que siempre digo de ti. Que no tienes valor.\n\nSe levanta.\n\n—Mañana vuelvo. Piensa bien lo que quieres decirme.\n\nY se va.\n\nTe quedas solo, con la cara de Lucas en el espejo y un nudo en el pecho. ¿Qué haces ahora? (elige: reflexionar, escribir, seguir)";
        }
        else if (cmd.includes("explorar") || cmd.includes("explora")) {
            guardarProgreso('explorar_habitacion');
            respuesta = "🔍 Te levantas de la cama. La habitación es pequeña: una cama, una mesita de noche, un espejo empañado, una ventana con rejas. Revisas los cajones. Encuentras un cuaderno viejo con la letra de Lucas.\n\nLees algunas frases:\n\n'No siento nada. Solo vacío. A veces pienso en romper cosas para ver si algo me duele'.\n\n'Valentina me miró hoy. Por un segundo, sentí algo. No sé qué era. Miedo, quizás. O hambre'.\n\n'El médico dice que tengo que escribir lo que siento. Pero no siento nada. Solo a ella'.\n\nCierras el cuaderno. Hay una foto pegada en la última página. Valentina riendo en una cafetería. Lucas la recortó de algún lugar.\n\n—¿Te gusta espiar? —dice una voz.\n\nTe giras. Es la psiquiatra, la misma mujer de antes.\n\n—No —respondes—. Solo quería entender.\n\n—Entender no es lo mismo que justificar —dice ella—. Lo que hizo Lucas estuvo mal. Pero tú no eres Lucas, ¿verdad?\n\nTe quedas en silencio.\n\n—No sé quién soy —dices al final.\n\nLa psiquiatra anota algo.\n\n—Eso es un buen comienzo.\n\nSale de la habitación. Te quedas con el cuaderno en la mano. ¿Qué haces? (elige: leer más, escribir, destruir)";
        }
        else if (cmd.includes("recordar") || cmd.includes("recuerda")) {
            guardarProgreso('recordar_vida');
            respuesta = "🧠 Cierras los ojos. Intentas recordar quién eras antes de Lucas. Tu nombre era Mateo. Tenías 34 años. Mataste a siete personas. No por odio. Porque algo en tu cabeza funcionaba mal.\n\nRecuerdas a tu madre llorando en el juicio. Recuerdas el ruido de las esposas. Recuerdas la pastilla que tomaste esa noche y cómo todo se volvió oscuro.\n\nCuando abres los ojos, Valentina está frente a ti. No sabes desde cuándo.\n\n—Estabas temblando —dice—. ¿Tuviste una pesadilla?\n\n—Algo así —respondes.\n\n—Lucas nunca temblaba. Él siempre estaba frío. Como una estatua.\n\n—¿Y ahora?\n\n—Ahora eres diferente. Más humano. Eso me da miedo.\n\n—¿Por qué?\n\n—Porque si puedes cambiar, significa que él también pudo. Y eso significa que todo este tiempo... tal vez solo necesitaba ayuda.\n\nValentina se sienta en la cama, a tu lado.\n\n—Cuéntame algo de tu vida —pide—. Algo que solo tú sepas.\n\nTu garganta se seca. No puedes decirle que eres un asesino. No puedes decirle que estás atrapado. Solo puedes... (elige: mentir, decir verdad, callar)";
        }
        else {
            respuesta = "❓ No entiendo esa opción. Debes elegir entre: esperar, explorar o recordar";
        }
    }
    
    // ========== NODO ESPERAR VALENTINA ==========
    else if (window.progresoHistoria === 'esperar_valentina') {
        if (cmd.includes("reflexionar") || cmd.includes("reflexiona")) {
            guardarProgreso('reflexion');
            respuesta = "🤔 Te sientas en la cama y cierras los ojos. Piensas en Valentina. En cómo te miró. En cómo dijo 'quiero averiguar quién eres'.\n\nLucas nunca había sentido algo así. Tampoco Mateo. El asesino que fuiste nunca amó a nadie. Solo mató.\n\nPero ahora, en este cuerpo joven y perturbado, sientes algo extraño. No es amor. No es deseo. Es curiosidad. Ganas de saber más de ella.\n\nAbres los ojos. La habitación está vacía. El sol entra por la ventana. Mañana Valentina volverá. Tienes que decidir qué hacer hasta entonces.\n\n¿Qué haces? (elige: preparar, evitar, escribir)";
        }
        else if (cmd.includes("escribir") || cmd.includes("escribe")) {
            guardarProgreso('escribir_diario');
            respuesta = "✍️ Tomas el cuaderno de Lucas y empiezas a escribir. No con su letra, con la tuya.\n\n'Hoy Valentina me miró como si viera a alguien más. Tal vez tenga razón. Tal vez yo sea alguien más. Alguien que no merece estar aquí, pero tampoco merece estar afuera'.\n\n'No sé si puedo cambiar. No sé si quiero. Pero verla me hizo sentir algo que creía muerto'.\n\nCierras el cuaderno. Algo dentro de Lucas se agita. No es violencia. Es... esperanza.\n\nTe duermes. Al día siguiente, Valentina vuelve. Te ve diferente.\n\n—Escribiste —dice, señalando el cuaderno.\n\n—Sí.\n\n—¿Puedo leerlo?\n\nTu corazón late fuerte. ¿Se lo das? (elige: darle, negarle, quemarlo)";
        }
        else if (cmd.includes("seguir") || cmd.includes("continua")) {
            guardarProgreso('seguir_dia');
            respuesta = "🚶‍♂️ Te levantas y caminas por la habitación. No puedes dormir. La cara de Valentina no se va de tu mente.\n\nPasan las horas. La noche se hace larga. Al amanecer, escuchas pasos. No es ella. Es la psiquiatra.\n\n—Lucas, hay alguien que quiere verte —dice.\n\n—¿Quién?\n\n—Un amigo. Bueno, alguien que dice serlo.\n\nEntra un chico de tu edad, pelo revuelto y mirada cansada. Se sienta sin pedir permiso.\n\n—¿Cómo estás, loco? —dice.\n\nNo lo reconoces. Lucas tampoco. El chico se ríe.\n\n—Soy Mateo. ¿No te acuerdas? Tu único amigo en esta pocilga.\n\nTu sangre se hiela. Mateo. Tu nombre.\n\n—¿Qué quieres? —preguntas.\n\n—Quiero saber si sigues siendo el mismo —dice—. O si de verdad cambiaste.\n\nTe mira fijamente. Hay algo en sus ojos que te resulta familiar. Algo oscuro.\n\n¿Qué le dices? (elige: desafiar, huir, mentir)";
        }
        else {
            respuesta = "❓ Opción no válida. Elige: reflexionar, escribir o seguir";
        }
    }
    
    // ========== NODO EXPLORAR HABITACIÓN ==========
    else if (window.progresoHistoria === 'explorar_habitacion') {
        if (cmd.includes("leer más") || cmd.includes("leer")) {
            guardarProgreso('leer_diario');
            respuesta = "📖 Lees más páginas del diario de Lucas.\n\n'Hoy Valentina me sonrió. Por un segundo quise tocarla. No para hacerle daño. Para saber si era real'.\n\n'El médico dice que tengo que tomar las pastillas. Las tomo. No cambian nada. El vacío sigue ahí'.\n\n'Si alguna vez leo esto, quiero que sepan que no elegí ser así. Simplemente no sé ser de otra forma'.\n\nCierras el cuaderno. Entiendes algo: Lucas no era malo. Estaba roto. Como tú.\n\nLa puerta se abre. Valentina entra, sin avisar.\n\n—¿Leíste su diario? —pregunta.\n\n—Sí.\n\n—¿Y?\n\n—Era triste —dices—. Y solitario.\n\nValentina se sienta en la cama.\n\n—Yo también me siento sola a veces. Por eso vine.\n\n—¿Para acompañarme a mí?\n\n—Para que me acompañes tú.\n\nSe acerca. Su mano roza la tuya.\n\n¿Qué haces? (elige: tomar su mano, apartarte, hablar)";
        }
        else if (cmd.includes("escribir") || cmd.includes("escribe")) {
            guardarProgreso('escribir_capitulo1');
            respuesta = "✍️ Tomas el cuaderno vacío de la mesita y empiezas a escribir tu propia historia.\n\n'Me llamo Mateo. Maté a siete personas. Ahora estoy en el cuerpo de Lucas, un chico que no sabe querer. Valentina me mira como si yo fuera su única esperanza. No quiero fallarle. Pero no sé cómo no hacerlo'.\n\n'Si alguien lee esto, que sepa que no todos los monstruos eligen serlo. Algunos nacen así. Otros, como yo, se convierten. Y otros, como Lucas, solo necesitan que alguien los mire de verdad'.\n\nCierras el cuaderno. Sientes que algo dentro de ti se ha liberado.\n\nValentina entra y te ve con el cuaderno.\n\n—¿Escribiste algo? —pregunta.\n\n—Sí.\n\n—¿Puedo leerlo?\n\nTu corazón late fuerte. ¿Se lo das? (elige: darle, negarle, destruirlo)";
        }
        else if (cmd.includes("destruir") || cmd.includes("romper")) {
            guardarProgreso('destruir_diario');
            respuesta = "💥 Tomas el diario de Lucas y lo rompes en pedazos. Las hojas vuelan por la habitación.\n\n—¿Qué haces? —grita Valentina desde la puerta. No la habías oído entrar.\n\n—Nada —dices—. Era basura.\n\n—Era su vida —dice ella—. Y la rompiste como si nada.\n\n—No era mi vida.\n\n—¿De quién es entonces?\n\nTe quedas en silencio.\n\nValentina se acerca a los pedazos y recoge uno. Lee en voz alta:\n\n'No siento nada. Solo vacío'.\n\n—Eso es lo que tú también sientes —dice—. Por eso lo rompiste. Porque te dolió verte reflejado.\n\nSuelta el papel y se va.\n\nTe quedas solo, rodeado de fragmentos de un chico que nunca entendió su propio dolor.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo' para continuar o 'reiniciar capitulo1' para volver a empezar)";
            guardarProgreso('fin_capitulo1');
        }
        else {
            respuesta = "❓ Opción no válida. Elige: leer más, escribir o destruir";
        }
    }
    
    // ========== NODO RECORDAR VIDA ==========
    else if (window.progresoHistoria === 'recordar_vida') {
        if (cmd.includes("mentir") || cmd.includes("miente")) {
            guardarProgreso('mentir_valentina');
            respuesta = "🎭 Le dices a Valentina que fuiste profesor. Que perdiste tu trabajo. Que estás aquí porque tuviste un colapso.\n\nElla te cree. O quiere creerte.\n\n—Yo también he pensado en rendirme —dice—. Pero luego veo el mar y se me pasa.\n\n—¿El mar?\n\n—Sí. Hay un lugar cerca de aquí. Un muelle viejo. Cuando salgas, te llevo.\n\nSonríes. Por primera vez en años, una sonrisa sincera.\n\n—Me gustaría eso —dices.\n\nValentina se levanta.\n\n—Entonces mejórate. No me falles.\n\nSe va.\n\nTe quedas con una promesa que no sabes si podrás cumplir.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo' para continuar o 'reiniciar capitulo1' para volver a empezar)";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("decir verdad") || cmd.includes("verdad")) {
            guardarProgreso('verdad_valentina');
            respuesta = "💔 Le dices la verdad. Que no eres Lucas. Que eres Mateo, un asesino atrapado en este cuerpo.\n\nValentina se queda en blanco.\n\n—¿Estás loco? —susurra.\n\n—Más de lo que crees.\n\n—¿Por qué me lo dices?\n\n—Porque no quiero mentirte. Lucas ya te mintió bastante.\n\nElla se levanta. Camina hacia la puerta. Se detiene.\n\n—No sé si creerte —dice—. Pero gracias por intentarlo.\n\nSe va.\n\nNo vuelve en días. Cuando lo hace, te mira diferente. No con miedo. Con una tristeza que te parte el alma.\n\n—Cuéntame más —dice.\n\nY le cuentas. Todo.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo' para continuar o 'reiniciar capitulo1' para volver a empezar)";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("callar")) {
            guardarProgreso('callar_valentina');
            respuesta = "🤐 No dices nada. Valentina espera. El silencio se alarga.\n\n—No confías en mí —dice al final.\n\n—No confío en nadie.\n\n—Ni siquiera en ti mismo.\n\n—Especialmente en mí.\n\nSe levanta.\n\n—Cuando quieras hablar, aquí estaré.\n\nSe va.\n\nTe quedas solo, con la verdad atragantada en la garganta.\n\nPasan los días. Valentina deja de venir. Un enfermero te dice que se fue de la ciudad.\n\n—Dijo que te diera esto —te entrega una carta.\n\nLa abres. Dice: 'No importa quién eras. Importa quién quieras ser. Te perdono. V.'\n\nLloras. No sabías que podías llorar.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo' para continuar o 'reiniciar capitulo1' para volver a empezar)";
            guardarProgreso('fin_capitulo1');
        }
        else {
            respuesta = "❓ Opción no válida. Elige: mentir, decir verdad o callar";
        }
    }
    
    // ========== RAMAS SECUNDARIAS DEL CAPÍTULO 1 ==========
    else if (window.progresoHistoria === 'reflexion') {
        if (cmd.includes("preparar")) {
            respuesta = "📝 Te preparas para la visita de Valentina. Ensayas lo que le dirás. 'No soy Lucas. Soy otro. Pero quiero ayudarte'.\n\nSuena ridículo incluso en tu cabeza.\n\nAl día siguiente, ella llega temprano. Te ve nervioso.\n\n—¿Qué pasa? —pregunta.\n\n—Nada. Solo quería decirte que...\n\nNo terminas la frase. Ella te toma la mano.\n\n—No hace falta que digas nada. Solo quédate.\n\nY te quedas. En silencio. Pero por primera vez, el silencio no duele.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("evitar")) {
            respuesta = "🚫 Decides evitar a Valentina. Al día siguiente, cuando llega, le dices que no quieres verla.\n\n—¿Por qué? —pregunta.\n\n—Porque no soy quien crees.\n\n—No me importa quién seas.\n\n—Debería.\n\nSe va sin decir nada más.\n\nDías después, recibes una carta: 'Aunque no quieras verme, yo voy a seguir viniendo. Porque todos merecemos una segunda oportunidad. Incluso tú'.\n\nLa guardas bajo la almohada.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else {
            respuesta = "❓ Opción no válida. Elige: preparar o evitar";
        }
    }
    
    else if (window.progresoHistoria === 'escribir_diario') {
        if (cmd.includes("darle")) {
            respuesta = "📖 Le das el cuaderno a Valentina. Ella lo lee en silencio. Al terminar, tiene los ojos brillantes.\n\n—No sabía que te sentías así —dice.\n\n—Ni yo.\n\n—¿Qué vas a hacer ahora?\n\n—No lo sé. Pero quiero intentar ser mejor.\n\n—Eso es suficiente —dice—. Por ahora.\n\nTe da la mano. No la sueltas.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("negarle")) {
            respuesta = "🚫 No le das el cuaderno. Valentina lo respeta, pero se nota decepcionada.\n\n—Confiar es difícil —dice—. Lo entiendo.\n\n—Gracias.\n\n—Pero algún día tendrás que hacerlo. Con alguien.\n\nSe va. Te quedas con el cuaderno en la mano, sabiendo que ella tenía razón.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("quemarlo")) {
            respuesta = "🔥 Tomas el cuaderno y lo quemas en el lavabo de la habitación. Valentina te mira con horror.\n\n—¿Por qué hiciste eso?\n\n—Porque no quiero que nadie sepa quién fui.\n\n—Entonces nunca sabrán quién eres.\n\nSe va. No vuelve.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else {
            respuesta = "❓ Elige: darle, negarle o quemarlo";
        }
    }
    
    else if (window.progresoHistoria === 'seguir_dia') {
        if (cmd.includes("desafiar")) {
            respuesta = "⚔️ Miras al chijo Mateo a los ojos. 'No soy el mismo', dices. 'Y tú tampoco deberías serlo'.\n\nÉl sonríe.\n\n—Veremos.\n\nSe va sin otra palabra.\n\nDías después, te enteras de que también escapó. Nadie sabe dónde está.\n\nA veces, en tus pesadillas, lo ves. Y te preguntas si él también tenía a alguien dentro.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("huir")) {
            respuesta = "🏃‍♂️ Intentas huir, pero Mateo te agarra del brazo.\n\n—Todavía no —dice—. Aún no estás listo.\n\nTe suelta y se va.\n\nTe quedas temblando, con una pregunta en la cabeza: ¿quién es realmente ese chico?\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("mentir")) {
            respuesta = "🎭 Le dices a Mateo que sigues siendo el mismo. Él te cree, o finge creerte.\n\n—Entonces nos veremos pronto —dice.\n\nTe guiña un ojo y se va.\n\nNo sabes si es una amenaza o una promesa.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else {
            respuesta = "❓ Elige: desafiar, huir o mentir";
        }
    }
    
    else if (window.progresoHistoria === 'leer_diario') {
        if (cmd.includes("tomar su mano")) {
            respuesta = "🤝 Tomas la mano de Valentina. Está caliente. También la tuya.\n\n—Quédate —dices—. Al menos un rato.\n\n—Me quedaré —responde.\n\nPasan horas hablando de cosas sin importancia. Del clima, de libros, de música. Nada profundo. Pero suficiente.\n\nCuando se va, te sientes menos vacío.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("apartarte")) {
            respuesta = "🙅‍♂️ Apartas la mano. Valentina lo nota, pero no dice nada.\n\n—No estoy listo —dices.\n\n—Lo sé —responde—. Por eso vine.\n\n—¿Por qué?\n\n—Porque a veces no hay que estar listo. Solo hay que estar.\n\nSe levanta y se va. Te quedas pensando en sus palabras.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else if (cmd.includes("hablar")) {
            respuesta = "💬 Empiezas a hablar. Le cuentas de tu infancia, de tu madre, de los perros que tuviste. Ella escucha sin interrumpir.\n\n—Nunca habías hablado tanto —dice al final.\n\n—Nunca había tenido a quién contárselo.\n\nSonríe. Y por un momento, el mundo parece menos oscuro.\n\nFin del Capítulo 1. (Escribe 'siguiente capitulo')";
            guardarProgreso('fin_capitulo1');
        }
        else {
            respuesta = "❓ Elige: tomar su mano, apartarte o hablar";
        }
    }
    
    else if (window.progresoHistoria === 'escribir_capitulo1') {
        if (cmd.includes("darle")) {
            respuesta = "📖 Le das el cuaderno a Valentina. Lo lee. Cuando termina, te abraza.\n\n—No estás solo —dice—. Yo tampoco.\n\n—¿Y ahora qué?\n\n—Ahora sanamos juntos.\n\nFin del Capítulo 1. (Escribe 'siguiente capit
