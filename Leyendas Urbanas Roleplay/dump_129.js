{
/*
    vending.js
    Autor: noyzxc

    Descripci�n: Contiene el men� de las m�quinas de vending
*/
let menu_vending = null;
// Eventos men�s
mp.events.add("mostrar_menu_vending", function (obj) {
    mostrar_menu_vending(obj);
});

// Funci�n para mostrar el men� de jugador
function mostrar_menu_vending(obj) {
    menu_vending = crearMenuConDistancia(4, "Expendedora", "");
    let objetos = JSON.parse(obj);
    objetos.forEach(obj => {
        menuVendingItem = new UIMenuItem("" + obj.nombreObjeto + "");
        menuVendingItem.SetRightLabel("" + obj.precio + " ~g~$");
        menu_vending.AddItem(menuVendingItem);
    });
    menu_vending.AddItem(new UIMenuItem("Cerrar", "Cierra el men� actual"));

    menu_vending.ItemSelect.on((item, index) => {
        if (item.Text != "Cerrar") {
            mp.events.callRemote("comprar_vending_machine", objetos[index].idObjeto, objetos[index].precio);
        }

        menu_vending?.Close();
    });

    menu_vending.MenuClose.on(() => {
        menu_con_distancia = null;
        menu_vending = null;
    });
}

}