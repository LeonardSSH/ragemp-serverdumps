{
mp.events.add("medicinas:mostrar_menu_purga", function () { mostrar_medicinas_purga() });

function mostrar_medicinas_purga() {
    
    let medicinasPurga = crearMenu("Medicamentos", "Categorias de medicinas");
    let medicinasItem = new UIMenuItem("Vendaje", "Peque�as vendas para hacerte un apa�o.");
    medicinasItem.SetRightLabel("~o~100 pp");
    medicinasPurga.AddItem(medicinasItem);
    medicinasItem = new UIMenuItem("Opiaceos v�a oral", "Peque�as vendas para hacerte un apa�o.");
    medicinasItem.SetRightLabel("~o~150 pp");
    medicinasPurga.AddItem(medicinasItem);
    medicinasItem = new UIMenuItem("Analg�sico v�a oral", "Peque�as vendas para hacerte un apa�o.");
    medicinasItem.SetRightLabel("~o~150 pp");
    medicinasPurga.AddItem(medicinasItem);
    medicinasItem = new UIMenuItem("Botiqu�n peque�o", "Peque�as vendas para hacerte un apa�o.");
    medicinasItem.SetRightLabel("~o~250 pp");
    medicinasPurga.AddItem(medicinasItem);
    medicinasItem = new UIMenuItem("Botiqu�n grande", "Peque�as vendas para hacerte un apa�o.");
    medicinasItem.SetRightLabel("~o~500 pp");
    medicinasPurga.AddItem(medicinasItem);
    medicinasItem = new UIMenuItem("Jeringa", "Un buen chute para levantar a un (casi) muerto.");
    medicinasItem.SetRightLabel("~o~200 pp");
    medicinasPurga.AddItem(medicinasItem);

    medicinasPurga.ItemSelect.on((item, index) => {
        medicinasPurga?.Close();

        switch (index) {
            case 0:
                mp.events.callRemote("medicinas:purga", 1297, 100);
                break;
            case 1:
                mp.events.callRemote("medicinas:purga", 607, 150);
                break;
            case 2:                
                mp.events.callRemote("medicinas:purga", 606, 150);
                break;
            case 3:
                mp.events.callRemote("medicinas:purga", 126, 250);                         
                break;
            case 4:
                mp.events.callRemote("medicinas:purga", 461, 500);
                break;
            case 5:
                mp.events.callRemote("medicinas:purga", 611, 200);
                break;
        }
    });

    medicinasPurga.MenuClose.on(item => {
        medicinasPurga = null;
    });
}
}