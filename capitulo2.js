// ======================================================
// CAPÍTULO 2: LA MENTIRA Y EL ESPEJO
// Yo dentro del monstruo - Libro interactivo
// ======================================================

// Inicializar progreso del capítulo 2
if (typeof window.progresoCap2 === 'undefined') {
    window.progresoCap2 = localStorage.getItem('capitulo2_progreso') || 'inicio_cap2';
}

function guardarCap2(paso) {
    window.progresoCap2 = paso;
    localStorage.setItem('capitulo2_progreso', paso);
}

function reiniciarCap2() {
    guardarCap2('inicio_cap2');
    return "🔄 Has reiniciado el Capítulo 2. Han pasado tres semanas desde que Valentina empezó a visitarte. Lucas sigue dentro de ti, pero algo ha cambiado. ¿Qué haces? (elige: hablar, observar, escribir)";
}

// Función principal del capítulo 2
window.jugarCapitulo2 = function(comando) {
    const cmd = comando.toLowerCase();
    let respuesta = "";

    // ========== INICIO DEL CAPÍTULO 2 ==========
    if (window.progresoCap2 === 'inicio_cap2') {
        if (cmd.includes("hablar") || cmd.includes("conversar")) {
            guardarCap2('hablar_valentina');
            respuesta = "💬 Decides hablar con Valentina. No de cosas profundas, solo de lo cotidiano. Le preguntas cómo estuvo su día, qué música escucha, si tiene hermanos.\n\nElla responde con calma, pero notas algo extraño: evita mirarte a los ojos.\n\n—¿Qué pasa? —preguntas.\n\n—Nada —dice—. Solo que a veces me da miedo que desaparezcas.\n\n—¿Desaparecer?\n\n—Sí. Que un día dejes de ser quien eres ahora y vuelvas a ser... él.\n\n—Lucas.\n\n—Lucas. Ese nombre me da escalofríos.\n\n—¿Y si te dijera que Lucas nunca se fue del todo?\n\nValentina se queda en blanco.\n\n—¿Qué quieres decir?\n\n—Que a veces siento sus pensamientos. Su vacío. Su rabia.\n\n—¿Y tú qué sientes?\n\n—Miedo. De no saber quién manda aquí dentro.\n\nElla se acerca y te toma la mano.\n\n—Entonces no estés solo. Yo te ayudo a pelear.\n\n—¿Y si pierdo?\n\n—Entonces perdemos juntos.\n\nEl ambiente se vuelve pesado. Sientes que algo dentro de ti se retuerce. No es dolor. Es Lucas. Está escuchando.\n\nDe repente, tu mano se tensa. Aprietas los dedos de Valentina con demasiada fuerza.\n\n—¡Lucas! —grita ella.\n\nSueltas.\n\n—Lo siento —dices, con tu voz, no la de él.\n\n—No fue tu culpa —dice ella, frotándose la mano.\n\n—Pero estuvo cerca.\n\n—¿Y si volvemos a intentarlo mañana?\n\n—¿Para qué?\n\n—Para que él vea que no puede ganar.\n\nAsientes. Ella se va. Te quedas mirando tus manos, preguntándote si la próxima vez serás tú quien controle.\n\n¿Qué haces ahora? (elige: esperar, investigar, pedir ayuda)";
        }
        else if (cmd.includes("observar") || cmd.includes("ver")) {
            guardarCap2('observar');
            respuesta = "👀 Decides observar a Valentina sin hablar mucho. Notas cosas que antes no veías: las ojeras bajo sus ojos, cómo se muerde el labio cuando está nerviosa, cómo sus manos tiemblan cuando te mira fijamente.\n\n—¿Por qué me observas tanto? —pregunta ella de repente.\n\n—Porque quiero entenderte.\n\n—¿Y qué has entendido?\n\n—Que tienes miedo. Pero no de mí. De ti misma.\n\nValentina baja la mirada.\n\n—Es verdad. Tengo miedo de querer a alguien que puede desaparecer.\n\n—No voy a desaparecer.\n\n—No lo sabes. Lucas también dijo una vez que no se iría. Y luego... hizo todo eso.\n\n—Yo no soy Lucas.\n\n—Lo sé. Por eso sigo aquí. Pero a veces me pregunto si tú también eres real.\n\n—Soy real. Más de lo que quisiera.\n\n—Entonces muéstramelo.\n\n—¿Cómo?\n\n—Haz algo que Lucas nunca haría.\n\nTe quedas pensando. Lucas nunca... ¿qué?\n\n—Llorar —dices—. Él nunca lloró.\n\n—Entonces hazlo.\n\nY lloras. No por Lucas. Por todo lo que perdiste. Por la vida que nunca tuviste. Por la persona que fuiste y la que tal vez puedas llegar a ser.\n\nValentina te abraza.\n\n—Eso es real —susurra.\n\nPasan los minutos. Cuando se va, te sientes más liviano. Como si hubieras soltado algo que cargabas desde antes de nacer.\n\n¿Qué haces ahora? (elige: descansar, escribir, buscar a Valentina)";
        }
        else if (cmd.includes("escribir") || cmd.includes("escribe")) {
            guardarCap2('escribir_cap2');
            respuesta = "✍️ Tomas el cuaderno y empiezas a escribir. No sobre Lucas, sino sobre ti. Sobre Mateo.\n\n'Era un niño cuando maté por primera vez. No recuerdo su cara. Solo el ruido de su cuerpo contra el suelo. Después vino otro. Y otro. Hasta que dejé de contar.'\n\n'Mi madre decía que yo tenía un problema. Que no era malo, solo estaba roto. Pero los rotos también pueden lastimar.'\n\n'Nunca supe qué se siente amar a alguien. Hasta que vi a Valentina. No sé si es amor. Tal vez solo es la necesidad de no estar solo.'\n\n'Lucas siente lo mismo. Por eso la acosaba. Porque no sabía cómo acercarse. Yo tampoco. Pero al menos yo lo intento.'\n\nCierras el cuaderno. Alguien te observa desde la puerta. Es Valentina.\n\n—¿Escribiste sobre mí? —pregunta.\n\n—Sí.\n\n—¿Puedo leer?\n\n—No esta noche.\n\n—¿Por qué?\n\n—Porque aún no estoy listo.\n\n—¿Y cuándo lo estarás?\n\n—Cuando sepa quién soy.\n\nElla sonríe con tristeza.\n\n—Eso puede llevar años.\n\n—Lo sé. Pero mientras tanto, puedo intentar ser mejor.\n\n—Eso es suficiente —dice—. Por ahora.\n\nSe va. Te quedas con el cuaderno, sabiendo que algún día tendrás que mostrarle la verdad.\n\n¿Qué haces? (elige: guardar, leer en voz alta, quemar)";
        }
        else {
            respuesta = "❓ No entiendo esa opción. Elige entre: hablar, observar o escribir";
        }
    }

    // ========== RAMA HABLAR CON VALENTINA ==========
    else if (window.progresoCap2 === 'hablar_valentina') {
        if (cmd.includes("esperar") || cmd.includes("espera")) {
            guardarCap2('esperar_evento');
            respuesta = "⏳ Decides esperar. Los días pasan. Valentina sigue viniendo, pero cada vez está más distante. Un día, deja de venir.\n\nPreguntas a los enfermeros. Nadie sabe nada.\n\nPasan dos semanas. Una noche, recibes una carta.\n\n'Me voy de la ciudad. No sé si volver. No es culpa tuya. Es mía. Te quiero, pero no puedo salvarte. Solo tú puedes hacer eso.'\n\n—Valentina —dices en voz alta.\n\nNo hay respuesta.\n\nTe quedas solo otra vez. Con Lucas. Con Mateo. Con el vacío.\n\nPero esta vez, algo es diferente: no te rindes.\n\nEmpiezas a escribir. Cartas que nunca envías. Poemas que nunca lees. Y poco a poco, el vacío se llena de palabras.\n\nPasan los meses. Sales del hospital. Empiezas una nueva vida. Nunca vuelves a ver a Valentina. Pero cada vez que escribes, la sientes cerca.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar o 'reiniciar cap2' para volver a empezar)";
        }
        else if (cmd.includes("investigar") || cmd.includes("investiga")) {
            guardarCap2('investigar_valentina');
            respuesta = "🔍 Empiezas a investigar sobre Valentina. Revisas sus redes sociales (Lucas tenía contraseñas guardadas). Descubres que tiene un hermano menor llamado Tomás, que estudia en la misma universidad.\n\nTambién descubres algo más: Valentina también va a terapia. No por Lucas, sino por algo que le pasó antes.\n\n—¿Qué buscas? —pregunta una voz.\n\nEs ella. Está en la puerta, con los brazos cruzados.\n\n—Quería entenderte.\n\n—¿Y espiando vas a entenderme?\n\n—No. Pero no sabía cómo preguntarte.\n\n—Debiste intentarlo.\n\nSe sienta en la cama, lejos de ti.\n\n—Lo que me pasó no tiene que ver contigo. Ni con Lucas. Es mío.\n\n—Puedo ayudarte.\n\n—No puedes ayudar a alguien que no quiere ser ayudada.\n\n—Entonces ¿por qué vienes?\n\n—Porque verte me recuerda que se puede cambiar.\n\n—¿Y tú quieres cambiar?\n\nValentina se queda en silencio.\n\n—No lo sé —dice al final—. Pero quiero intentarlo.\n\n—Entonces intentémoslo juntos.\n\nElla asiente. Por primera vez, notas una pequeña sonrisa en su rostro.\n\n¿Qué haces? (elige: abrazarla, preguntar más, cambiar de tema)";
        }
        else if (cmd.includes("pedir ayuda") || cmd.includes("ayuda")) {
            guardarCap2('pedir_ayuda');
            respuesta = "🆘 Pides ayuda a la psiquiatra. Le cuentas lo que sientes: la confusión, el miedo, la presencia de Lucas.\n\n—Eso se llama disociación —dice—. Tu mente está creando una identidad separada para lidiar con el trauma.\n\n—¿Estoy loco?\n\n—No. Estás adaptándote. Pero necesitas terapia. Y necesitas dejar de luchar contra Lucas.\n\n—¿Dejar de luchar?\n\n—Sí. En lugar de verlo como un enemigo, míralo como una parte de ti que necesita sanar.\n\n—¿Y Valentina?\n\n—Ella puede ayudarte, pero no puede salvarte. Ese trabajo es tuyo.\n\nSales de la consulta con una pregunta en la cabeza: ¿cómo se sana a alguien que nunca aprendió a vivir?\n\nLa respuesta no llega. Pero empiezas a buscarla.\n\n¿Qué haces? (elige: hablar con Valentina, meditar, leer)";
        }
        else {
            respuesta = "❓ Elige entre: esperar, investigar o pedir ayuda";
        }
    }

    // ========== RAMA OBSERVAR ==========
    else if (window.progresoCap2 === 'observar') {
        if (cmd.includes("descansar") || cmd.includes("dormir")) {
            guardarCap2('descansar');
            respuesta = "😴 Decides descansar. Cierras los ojos y sueñas con Lucas.\n\nEstás en un cuarto oscuro. Lucas está sentado en una silla, mirando una pared vacía.\n\n—¿Qué quieres? —preguntas.\n\n—Lo mismo que tú —responde—. Salir de aquí.\n\n—¿De dónde?\n\n—De este cuerpo. De esta cabeza. De esta vida que no elegí.\n\n—Yo tampoco elegí estar aquí.\n\n—Lo sé. Pero ahora estamos juntos. Como sea.\n\n—¿Podemos llevarnos bien?\n\n—No lo sé. Tú tienes lo que yo nunca tuve: sentimientos.\n\n—¿Y tú?\n\n—Yo tengo lo que tú nunca tendrás: frialdad para hacer lo que hay que hacer.\n\n—¿Eso es un poder o una maldición?\n\n—Depende de cómo lo uses.\n\nDespiertas. Las sábanas están sudadas. Valentina está sentada a tu lado.\n\n—Gritaste —dice—. ¿Quieres hablar?\n\n—Soñé con él.\n\n—¿Lucas?\n\n—Sí. Dijo que podemos llevarnos bien.\n\n—¿Y tú qué crees?\n\n—Creo que tiene miedo. Como yo.\n\n—El miedo no es malo. Malo es ignorarlo.\n\n—Entonces ¿qué hago?\n\n—Enfréntalo. Pero no solo. Acompáñalo.\n\n—¿A Lucas?\n\n—A ti mismo.\n\nTe quedas en silencio. Tal vez tenga razón.\n\n¿Qué haces? (elige: enfrentar, ignorar, aceptar)";
        }
        else if (cmd.includes("escribir") || cmd.includes("escribe")) {
            guardarCap2('escribir_observar');
            respuesta = "✍️ Escribes en tu diario. No palabras sueltas, sino una carta para Lucas.\n\n'Lucas: No sé si puedes leer esto. No sé si sientes lo mismo que yo. Pero quiero que sepas que no te odio. Al principio sí. Ahora solo siento lástima. Por ti. Por mí. Por los dos.'\n\n'Valentina dice que podemos sanar juntos. Tal vez tenga razón. Tal vez no. Pero quiero intentarlo.'\n\n'Si algún día sales de aquí, prométeme que no le harás daño. A ella. A nadie. Prométeme que serás mejor de lo que fuiste.'\n\n'Y si no puedes, entonces déjame a mí intentarlo por los dos.'\n\nCierras el cuaderno. Sientes un escalofrío. Por un segundo, crees escuchar una voz dentro de tu cabeza.\n\n—Lo intentaré.\n\n¿Era Lucas? ¿O eras tú?\n\nNo lo sabes. Pero por primera vez, no te importa.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
            guardarCap2('fin_cap2');
        }
        else if (cmd.includes("buscar a valentina") || cmd.includes("buscar")) {
            guardarCap2('buscar_valentina');
            respuesta = "🏃‍♂️ Sales de la habitación y buscas a Valentina. Está en el jardín del hospital, sentada en un banco, mirando el cielo.\n\n—¿Pasa algo? —preguntas.\n\n—Estaba pensando en mi hermano —dice—. En cómo se fue sin decir adiós.\n\n—¿Se fue?\n\n—Murió. Hace dos años. Accidente de coche.\n\n—Lo siento.\n\n—Yo también. A veces pienso que si hubiera estado más pendiente, si lo hubiera cuidado mejor, tal vez...\n\n—No fue tu culpa.\n\n—¿Cómo lo sabes?\n\n—Porque la culpa nos hace daño. Y tú ya has sufrido suficiente.\n\nValentina te mira. Por primera vez, sus ojos no tienen miedo.\n\n—¿Puedo abrazarte? —pregunta.\n\n—Sí.\n\nSe acerca y te abraza. Huele a jazmín. Su cuerpo tiembla.\n\n—Gracias —susurra.\n\n—De nada.\n\nPasan los minutos. Cuando se separan, algo ha cambiado entre ustedes. Ya no son solo dos extraños rotos. Son dos personas que intentan sanar juntas.\n\n¿Qué haces ahora? (elige: besarla, alejarte, caminar)";
        }
        else {
            respuesta = "❓ Elige entre: descansar, escribir o buscar a Valentina";
        }
    }

    // ========== RAMA ESCRIBIR ==========
    else if (window.progresoCap2 === 'escribir_cap2') {
        if (cmd.includes("guardar") || cmd.includes("guarda")) {
            guardarCap2('guardar_diario');
            respuesta = "📔 Guardas el cuaderno bajo la almohada. Nadie lo leerá. Pero tú sabes que está ahí. Como un secreto que te pesa.\n\nLos días pasan. Valentina sigue viniendo. No le hablas del diario. Pero ella lo nota.\n\n—Tienes algo que no me dices —afirma una tarde.\n\n—Todos tenemos secretos.\n\n—Los tuyos pueden matarte.\n\n—O salvarme.\n\n—¿Cómo?\n\n—Escribiendo puedo ser quien quiero. No quien fui.\n\n—¿Y eso funciona?\n\n—A veces.\n\n—¿Y las otras veces?\n\n—Las otras veces solo escribo más.\n\nValentina sonríe.\n\n—Entonces no pares.\n\nY no paras. Escribes hasta que los dedos duelen. Hasta que el pasado deja de doler tanto.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
            guardarCap2('fin_cap2');
        }
        else if (cmd.includes("leer en voz alta") || cmd.includes("leer")) {
            guardarCap2('leer_voz_alta');
            respuesta = "🗣️ Tomas el cuaderno y lees en voz alta. Tu voz tiembla al pronunciar las palabras. Cuando terminas, Valentina tiene los ojos llenos de lágrimas.\n\n—No sabía que habías sufrido tanto —dice.\n\n—Yo tampoco. Hasta que lo escribí.\n\n—¿Qué vas a hacer ahora?\n\n—Seguir escribiendo. Seguir sanando. Seguir intentando ser mejor.\n\n—¿Puedo ayudarte?\n\n—Ya lo haces. Solo con estar aquí.\n\n—Entonces me quedaré.\n\n—¿Por cuánto tiempo?\n\n—Hasta que sanes. O hasta que yo sane. O hasta que los dos estemos bien.\n\n—Puede que nunca.\n\n—Lo sé. Pero mientras tanto, podemos intentarlo.\n\nSe acerca y te besa en la mejilla. No es un beso de amor. Es un beso de promesa.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
            guardarCap2('fin_cap2');
        }
        else if (cmd.includes("quemar") || cmd.includes("quema")) {
            guardarCap2('quemar_diario');
            respuesta = "🔥 Tomas el cuaderno y lo quemas en el lavabo. Valentina llega justo cuando las llamas consumen la última página.\n\n—¿Por qué hiciste eso? —grita.\n\n—Porque esas palabras ya no me pertenecen. Ya no soy ese.\n\n—¿Y quién eres ahora?\n\n—No lo sé. Pero quiero descubrirlo sin cargar con el pasado.\n\n—El pasado no se quema. Se aprende de él.\n\n—Lo sé. Por eso lo recuerdo. Las palabras ya no están, pero las lecciones sí.\n\nValentina se sienta a tu lado.\n\n—Eres un tonto —dice.\n\n—Lo sé.\n\n—Pero un tonto valiente.\n\n—Gracias.\n\n—¿Y ahora qué?\n\n—Ahora empiezo de nuevo.\n\n—¿Desde cero?\n\n—Desde donde dejé de ser quien no quería ser.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
            guardarCap2('fin_cap2');
        }
        else {
            respuesta = "❓ Elige entre: guardar, leer en voz alta o quemar";
        }
    }

    // ========== SUBNODOS DE RAMAS ==========
    else if (window.progresoCap2 === 'esperar_evento') {
        if (cmd.includes("siguiente") || cmd.includes("continuar")) {
            respuesta = "📖 El Capítulo 2 ha terminado. Pasa al Capítulo 3 escribiendo 'capitulo 3'";
            guardarCap2('fin_cap2');
        }
        else {
            respuesta = "El Capítulo 2 ha terminado. Escribe 'siguiente capitulo' para continuar.";
        }
    }
    
    else if (window.progresoCap2 === 'investigar_valentina') {
        if (cmd.includes("abrazarla")) {
            guardarCap2('fin_cap2');
            respuesta = "🤗 La abrazas. Valentina se queda quieta, luego corresponde. No dicen nada. No hace falta.\n\nPasan los segundos. Cuando se separan, algo ha cambiado. Ya no hay distancia entre ustedes.\n\n—¿Qué sigue? —pregunta ella.\n\n—No lo sé. Pero podemos averiguarlo juntos.\n\n—Juntos —repite, como probando la palabra.\n\n—Juntos.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
        }
        else if (cmd.includes("preguntar más") || cmd.includes("preguntar")) {
            guardarCap2('fin_cap2');
            respuesta = "❓ Le preguntas más sobre su hermano. Valentina se abre lentamente. Te cuenta que Tomás se suicidó. Que siempre estuvo triste. Que ella no supo verlo.\n\n—No fue tu culpa —repites.\n\n—Lo sé. Pero duele igual.\n\n—¿Puedo hacer algo?\n\n—Solo quédate. No me dejes sola.\n\n—No lo haré.\n\n—¿Lo prometes?\n\n—Lo prometo.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
        }
        else if (cmd.includes("cambiar de tema")) {
            guardarCap2('fin_cap2');
            respuesta = "🔄 Cambias de tema. Hablan de música, de libros, de cosas sin importancia. Valentina se relaja. Pasan la tarde riendo.\n\nCuando se va, te das cuenta de que no hablaron de nada importante. Pero a veces, lo superficial es lo que más cura.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
        }
        else {
            respuesta = "❓ Elige entre: abrazarla, preguntar más o cambiar de tema";
        }
    }
    
    else if (window.progresoCap2 === 'pedir_ayuda') {
        if (cmd.includes("hablar con valentina")) {
            guardarCap2('fin_cap2');
            respuesta = "💬 Hablas con Valentina sobre la terapia. Ella te escucha sin juzgar.\n\n—Yo también voy —confiesa—. Desde antes de conocerte.\n\n—¿Y te ayuda?\n\n—A veces. Otras solo duele.\n\n—¿Por qué sigues yendo?\n\n—Porque quiero sanar. Y porque no quiero estar sola en esto.\n\n—No lo estás.\n\n—Lo sé. Por eso vengo.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
        }
        else if (cmd.includes("meditar")) {
            guardarCap2('fin_cap2');
            respuesta = "🧘‍♂️ Te sientas en silencio. Cierras los ojos. Intentas escuchar a Lucas.\n\nAl principio, solo hay vacío. Luego, una voz pequeña:\n\n—Tengo miedo.\n\n—¿De qué?\n\n—De desaparecer.\n\n—No vas a desaparecer. Vas a cambiar.\n\n—¿Duele?\n\n—A veces. Pero vale la pena.\n\nEl silencio vuelve. Pero ya no es vacío. Es paz.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
        }
        else if (cmd.includes("leer")) {
            guardarCap2('fin_cap2');
            respuesta = "📖 Tomas un libro de la biblioteca del hospital. Es 'El extranjero' de Albert Camus. Lees sobre Meursault, un hombre que no siente culpa.\n\nTe identificas con él. Pero también sientes rechazo. No quieres ser así.\n\nCierras el libro. Sabes lo que no quieres ser. Eso es un comienzo.\n\nFin del Capítulo 2. (Escribe 'siguiente capitulo' para continuar)";
        }
        else {
            respuesta = "❓ Elige entre: hablar con Valentina, meditar o leer";
        }
    }
    
    else if (window.progresoCap2 === 'descansar') {
        if (cmd.includes("enfrentar")) {
            guardarCap2('fin_cap2');
            respuesta = "⚔️ Decides enfrentar a Lucas. Cierras los ojos y lo buscas dentro de ti.\n\n—Estoy aquí —dices—. No voy a huir.\n\n—Debieras —responde Lucas—. Tengo sueños feos. Cosas que no quiero recordar.\n\n—Cuéntamelas.\n\n—No puedo.\n\n—Inténtalo.\n\nY lo intenta. Te cuenta de su infancia, de los golpes, del abandono. De cómo aprendió a no sentir para no sufrir.\n\n—Eso no es vida —dices.\n\n—Es la única que conozco.\n\n—Entonces aprendamos otra juntos.\n\n—¿Podemos?\n\n—No lo sé. Pero podemos intentarlo.\n\nLucas se queda en silencio. Luego, muy bajito, dice:\n\n—Gracias.\n\nAbres los ojos. Valentina está a tu lado.\n\n—¿Estás bien? —pregunta.\n\n—Creo que sí. Por primera vez.\n\nFin
