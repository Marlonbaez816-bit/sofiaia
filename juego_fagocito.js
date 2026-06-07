// ======================================================
// JUEGO: FAGOCITO
// Eres una célula que debe devorar otras células.
// Cada vez que comes, creces y te vuelves más lento.
// Si creces demasiado, te vuelves blanco fácil.
// El éxito te hace vulnerable.
// ======================================================

let juegoFagocitoActivo = false;
let tamanio = 10; // tamaño inicial
let velocidad = 10; // velocidad inicial (más alto = más rápido)
let turno = 1;
let enemigosDerrotados = 0;

function reiniciarJuegoFagocito() {
    juegoFagocitoActivo = true;
    tamanio = 10;
    velocidad = 10;
    turno = 1;
    enemigosDerrotados = 0;
    return "🦠 JUEGO INICIADO: FAGOCITO\n\nEres una célula pequeña. Debes devorar otras células para sobrevivir. Cada vez que comes, creces y te vuelves más lento. Si creces demasiado, te vuelves blanco fácil.\n\nNIVEL 1: EL CALDO PRIMORDIAL\nVes tres células pequeñas a tu alrededor:\n1. CÉLULA AZUL (tamaño 5, débil, fácil de cazar)\n2. CÉLULA ROJA (tamaño 8, normal, daña si te descuidas)\n3. CÉLULA VERDE (tamaño 12, más grande que tú, peligrosa)\n\n¿A cuál atacas? (elige: azul, roja, verde, huir)";
}

window.jugarFagocito = function(comando) {
    const cmd = comando.toLowerCase();
    
    if (!juegoFagocitoActivo) {
        if (cmd.includes("iniciar") || cmd.includes("empezar")) {
            return reiniciarJuegoFagocito();
        } else {
            return "❓ El juego no está activo. Escribe 'iniciar fagocito' para empezar.";
        }
    }
    
    // ========== NIVEL 1 ==========
    if (turno === 1) {
        if (cmd.includes("azul")) {
            enemigosDerrotados++;
            tamanio += 2;
            velocidad -= 1;
            turno = 2;
            return "🔵 Atacas a la célula AZUL. Es débil. La absorbes fácilmente.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nTe sientes más grande, pero un poco más lento.\n\nNIVEL 2: APARECE UN DEPREDADOR\nUna célula enorme (tamaño 25) te observa. Si te ve moviéndote, te ataca. Solo puedes moverte cuando ella mira hacia otro lado.\n\nOpciones: mover, esconderte, atacar";
        }
        else if (cmd.includes("roja")) {
            enemigosDerrotados++;
            tamanio += 3;
            velocidad -= 2;
            turno = 2;
            return "🔴 Atacas a la célula ROJA. Opone resistencia, pero la vences.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nAhora eres más lento. El depredador te mira.\n\nNIVEL 2: APARECE UN DEPREDADOR\nUna célula enorme (tamaño 25) te observa. Si te ve moviéndote, te ataca. Solo puedes moverte cuando ella mira hacia otro lado.\n\nOpciones: mover, esconderte, atacar";
        }
        else if (cmd.includes("verde")) {
            enemigosDerrotados++;
            tamanio += 5;
            velocidad -= 3;
            turno = 2;
            return "🟢 Atacas a la célula VERDE. Es más grande que tú. Luchas, pero logras devorarla.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nAhora eres significativamente más lento. El depredador te tiene en la mira.\n\nNIVEL 2: APARECE UN DEPREDADOR\nUna célula enorme (tamaño 25) te observa. Si te ve moviéndote, te ataca. Solo puedes moverte cuando ella mira hacia otro lado.\n\nOpciones: mover, esconderte, atacar";
        }
        else if (cmd.includes("huir")) {
            turno = 2;
            return "🏃‍♂️ Huyes. No comes nada. Tu tamaño sigue siendo " + tamanio + ".\n\nEl depredador te persigue.\n\nNIVEL 2: APARECE UN DEPREDADOR\nUna célula enorme (tamaño 25) te observa. Si te ve moviéndote, te ataca. Solo puedes moverte cuando ella mira hacia otro lado.\n\nOpciones: mover, esconderte, atacar";
        }
        else {
            return "❓ En nivel 1 debes elegir: azul, roja, verde o huir";
        }
    }
    
    // ========== NIVEL 2 ==========
    else if (turno === 2) {
        if (cmd.includes("mover")) {
            turno = 3;
            if (velocidad < 5) {
                return "🏃‍♂️ Intentas moverte. El depredador te ve. Eres demasiado lento para escapar.\n\nTe atrapa.\n\n💀 JUEGO TERMINADO (Te devoraron) 💀\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            } else {
                return "🏃‍♂️ Te mueves rápido. El depredador no te alcanza. Llegas a una zona de células en descomposición.\n\nNIVEL 3: CAMPO DE RESTOS\nHay células muertas flotando. Puedes comerlas sin riesgo, pero no te nutren bien.\n\nOpciones: comer restos, buscar células vivas, esconderte";
            }
        }
        else if (cmd.includes("esconderte")) {
            turno = 3;
            return "🫣 Te escondes detrás de un resto de célula. El depredador pasa de largo.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nNIVEL 3: CAMPO DE RESTOS\nHay células muertas flotando. Puedes comerlas sin riesgo, pero no te nutren bien.\n\nOpciones: comer restos, buscar células vivas, esconderte";
        }
        else if (cmd.includes("atacar")) {
            turno = 3;
            if (tamanio > 20) {
                return "⚔️ Atacas al depredador. Eres casi tan grande como él. La batalla es intensa.\n\nLo devoras, pero sufres heridas. Tu velocidad baja aún más.\n\nTU TAMAÑO: " + (tamanio + 8) + " | VELOCIDAD: " + (velocidad - 2) + "\n\nNIVEL 4: EL ENjambre\nDocenas de células pequeñas te rodean. Quieren devorarte por partes.\n\nOpciones: defender, huir, contraatacar";
            } else {
                return "⚔️ Atacas al depredador. Eres demasiado pequeño.\n\nTe devora.\n\n💀 JUEGO TERMINADO (Ambicioso pero débil) 💀\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            }
        }
        else {
            return "❓ En nivel 2 debes elegir: mover, esconderte o atacar";
        }
    }
    
    // ========== NIVEL 3 ==========
    else if (turno === 3) {
        if (cmd.includes("comer restos")) {
            enemigosDerrotados += 2;
            tamanio += 1;
            turno = 4;
            return "🍽️ Comes restos. Apenas te nutren. Creces un poco, pero no ganas velocidad.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nNIVEL 4: EL ENjambre\nDocenas de células pequeñas te rodean. Quieren devorarte por partes.\n\nOpciones: defender, huir, contraatacar";
        }
        else if (cmd.includes("buscar células vivas")) {
            turno = 4;
            if (velocidad > 6) {
                return "🔍 Buscas células vivas. Encuentras un grupo pequeño. Las atacas.\n\nLas devoras. Aumentas de tamaño.\n\nTU TAMAÑO: " + (tamanio + 3) + " | VELOCIDAD: " + (velocidad - 1) + "\n\nNIVEL 4: EL ENjambre\nDocenas de células pequeñas te rodean. Quieren devorarte por partes.\n\nOpciones: defender, huir, contraatacar";
            } else {
                return "🔍 Buscas células vivas. Eres lento. Te detectan antes de que puedas atacar.\n\nTe hieren. Escapas con vida, pero herido.\n\nTU TAMAÑO: " + (tamanio - 2) + " | VELOCIDAD: " + velocidad + "\n\nNIVEL 4: EL ENjambre\nDocenas de células pequeñas te rodean. Quieren devorarte por partes.\n\nOpciones: defender, huir, contraatacar";
            }
        }
        else if (cmd.includes("esconderte")) {
            turno = 4;
            return "🫣 Te escondes entre los restos. Las células vivas no te encuentran.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nNIVEL 4: EL ENjambre\nDocenas de células pequeñas te rodean. Quieren devorarte por partes.\n\nOpciones: defender, huir, contraatacar";
        }
        else {
            return "❓ En nivel 3 debes elegir: comer restos, buscar células vivas o esconderte";
        }
    }
    
    // ========== NIVEL 4 ==========
    else if (turno === 4) {
        if (cmd.includes("defender")) {
            turno = 5;
            if (tamanio > 15) {
                return "🛡️ Te defiendes. Tu tamaño asusta a algunas células. Muchas huyen.\n\nLogras sobrevivir al enjambre.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nNIVEL 5: LA CÉLULA MADRE\nUna célula gigante te llama. 'Devórame y serás el rey. O déjame vivir y te enseñaré el camino'.\n\nOpciones: devorar, escuchar, huir";
            } else {
                return "🛡️ Te defiendes. Eres pequeño. Las células te superan en número.\n\nTe devoran.\n\n💀 JUEGO TERMINADO (Devorado por el enjambre) 💀\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            }
        }
        else if (cmd.includes("huir")) {
            turno = 5;
            if (velocidad > 7) {
                return "🏃‍♂️ Huyes rápido. El enjambre no puede alcanzarte.\n\nLlegas a una zona tranquila.\n\nTU TAMAÑO: " + tamanio + " | VELOCIDAD: " + velocidad + "\n\nNIVEL 5: LA CÉLULA MADRE\nUna célula gigante te llama. 'Devórame y serás el rey. O déjame vivir y te enseñaré el camino'.\n\nOpciones: devorar, escuchar, huir";
            } else {
                return "🏃‍♂️ Intentas huir. Eres demasiado lento.\n\nEl enjambre te alcanza.\n\n💀 JUEGO TERMINADO (Atrapado por la lentitud) 💀\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            }
        }
        else if (cmd.includes("contraatacar")) {
            turno = 5;
            if (tamanio > 18) {
                return "⚔️ Contraatacas. Tu tamaño impone respeto. Devoras a varias células del enjambre.\n\nTU TAMAÑO: " + (tamanio + 4) + " | VELOCIDAD: " + (velocidad - 2) + "\n\nNIVEL 5: LA CÉLULA MADRE\nUna célula gigante te llama. 'Devórame y serás el rey. O déjame vivir y te enseñaré el camino'.\n\nOpciones: devorar, escuchar, huir";
            } else {
                return "⚔️ Contraatacas. Eres pequeño. Las células te rodean.\n\nTe devoran.\n\n💀 JUEGO TERMINADO (Contraataque fallido) 💀\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            }
        }
        else {
            return "❓ En nivel 4 debes elegir: defender, huir o contraatacar";
        }
    }
    
    // ========== NIVEL 5 (FINAL) ==========
    else if (turno === 5) {
        if (cmd.includes("devorar")) {
            juegoFagocitoActivo = false;
            if (tamanio > 25) {
                return "🐺 Devoras a la célula madre. Te conviertes en el ser más grande del ecosistema.\n\nNadie puede desafiarte. Eres el rey.\n\n🏆 ¡HAS GANADO (Final Rey) 🏆\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            } else if (tamanio > 15) {
                return "🐺 Devoras a la célula madre. Apenas puedes con ella. Quedas herido, pero vivo.\n\nTU TAMAÑO: " + (tamanio + 5) + " | VELOCIDAD: " + (velocidad - 3) + "\n\nEres enorme, pero muy lento.\n\n🏆 ¡HAS GANADO (Final Coloso) 🏆\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            } else {
                return "🐺 Intentas devorar a la célula madre. Eres demasiado pequeño. Te aplasta.\n\n💀 JUEGO TERMINADO (Avaricia fatal) 💀\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            }
        }
        else if (cmd.includes("escuchar")) {
            juegoFagocitoActivo = false;
            return "👂 Escuchas a la célula madre. Te enseña el camino hacia un lugar sin depredadores, donde puedes vivir en paz.\n\nNo eres el más grande. No eres el más fuerte. Pero sobrevives.\n\n🏆 ¡HAS GANADO (Final Sabio) 🏆\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
        }
        else if (cmd.includes("huir")) {
            juegoFagocitoActivo = false;
            if (velocidad > 5) {
                return "🏃‍♂️ Huyes. La célula madre te observa irte. No te persigue.\n\nVives el resto de tus días con la duda de qué habría pasado si te hubieras quedado.\n\n🏆 ¡HAS GANADO (Final Cobarde) 🏆\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            } else {
                return "🏃‍♂️ Intentas huir. Eres demasiado lento. La célula madre te alcanza.\n\nTe devora.\n\n💀 JUEGO TERMINADO (Demasiado lento para huir) 💀\n\n(Escribe 'reiniciar fagocito' para volver a empezar.)";
            }
        }
        else {
            return "❓ En nivel 5 debes elegir: devorar, escuchar o huir";
        }
    }
    
    return "❓ Error en el juego. Escribe 'reiniciar fagocito' para volver a empezar.";
};

// ========== INTEGRACIÓN CON SOFÍA ==========
window.agregarConocimiento({
    palabrasClave: ["juego fagocito", "fagocito", "jugar fagocito", "iniciar fagocito"],
    respuesta: "🦠 ¡Vamos a jugar 'Fagocito'! Eres una célula que debe devorar otras células. Cada vez que comes, creces y te vuelves más lento. El éxito te hace vulnerable. Escribe 'iniciar fagocito' para empezar."
});

window.agregarConocimiento({
    palabrasClave: ["iniciar fagocito", "empezar fagocito"],
    respuesta: () => reiniciarJuegoFagocito()
});

window.agregarConocimiento({
    palabrasClave: ["reiniciar fagocito", "reset fagocito"],
    respuesta: () => reiniciarJuegoFagocito()
});

console.log("✅ Juego 'Fagocito' cargado correctamente");
