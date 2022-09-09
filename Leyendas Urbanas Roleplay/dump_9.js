{
/* --------------------------------------------------------------------------------
 * red.js
 *
 * Autor: Doomer
 *
 * Descripci�n: Sistema de control de la red en el servidor (cliente)
 *
 * -------------------------------------------------------------------------------- */
// L�mite de ping
var LIMITE_PING = 600;
// N�mero m�ximo de advertencias antes de la expulsi�n del jugador
var MAX_ADVERTENCIAS = 3;

// N�mero de advertencias dadas por ping alto
var advertencias = 0;

// Disparado cada tic
setInterval(() => {
    if (logueado) {
        if (miembroStaff == false) {
            // Comprobamos la latencia del jugador cada 30 segundos, y si es mayor a la permitida, le damos advertencias o expulsamos
            var ping = player_local.ping;
            if (ping >= LIMITE_PING) {
                advertencias++;
                if (advertencias >= MAX_ADVERTENCIAS) {
                    mp.events.callRemote('expulsar', "Ping demasiado alto.");
                    return;
                }
                //mp.gui.chat.colors = true;
                //mp.gui.chat.push("~r~[!] ~w~Tu ping (" + ping + " ms) es demasiado alto y ha superado el l�mite de " + LIMITE_PING + " ms. Mejora tu conexi�n o terminar�s siendo expulsado.");
                mostrarAviso("info", 5000, "<span style='color:red;'>[!]</span> Tu ping (" + ping + " ms) es demasiado alto y ha superado el l�mite de " + LIMITE_PING + " ms. Mejora tu conexi�n o terminar�s siendo expulsado");
            }
            else {
                if (advertencias > 0) {
                    advertencias--;
                }
            }
        }
    }
}, 30000);
//# sourceMappingURL=red.js.map
}