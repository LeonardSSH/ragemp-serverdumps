{
var cef_antimando = require("./LURP/cef.js");

var antimando_cefId = -1;

mp.events.add({
    "antimando:mostrar": () => {
        if (antimando_cefId < 0) {
            antimando_cefId = cef_antimando.crearCef("package://LURP/cef/antimando/antimando.html", {
                mostrarCursor: false,
                puedeCerrar: false
            }, true);

            mp.gui.chat.push("!{red} Tus controles de ataque est�n desactivados. Entra de nuevo al servidor para recupearlos. Recuerda que el uso del mando para disparar no est� permitido.")
        }
    },
    "antimando:cerrar": () => {
        if (antimando_cefId >= 0) {
            cef_antimando.cerrarCef(antimando_cefId, false);
            antimando_cefId = -1;
        }
    }
})
}