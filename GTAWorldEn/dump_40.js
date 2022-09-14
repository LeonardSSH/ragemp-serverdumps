{
﻿mp.events.add('enableInteriorProp', (propName, x, y, z, colors) => {
	interiorid = mp.game.interior.getInteriorAtCoords(x, y, z);

	if (interiorid === 0) {
		mp.gui.chat.push("!{Red}Your Property's interior could not be located based on its entrance position. Use /pentrance to move the entrance further inside the property.");
	}

	mp.game.interior.enableInteriorProp(interiorid, propName);
	if(colors){
		mp.game.invoke("0xC1F1920BAF281317", interiorid, propName, 1);
	}
	mp.game.interior.refreshInterior(interiorid);
});

mp.events.add('disableInteriorProp', (propName, x, y, z) => {
	interiorid = mp.game.interior.getInteriorAtCoords(x, y, z);
	mp.game.interior.disableInteriorProp(interiorid, propName);
	mp.game.interior.refreshInterior(interiorid);
});

mp.events.add('loadInteriorProps', (toSpawn, toDespawn, x, y, z, colors) => {
	var i;
	interiorid = mp.game.interior.getInteriorAtCoords(x, y, z);

	if (interiorid === 0) {
		mp.gui.chat.push("!{Red}Your Property's interior could not be located based on its entrance position. Use /pentrance to move the entrance further inside the property.");
	}
	
	for (i = 0; i < toSpawn.length; i++) {
		mp.game.interior.enableInteriorProp(interiorid, toSpawn[i]);
		if(colors){
			mp.game.invoke("0xC1F1920BAF281317", interiorid, toSpawn[i], 1);
		}
	}
	
	for (i = 0; i < toDespawn.length; i++) {
		mp.game.interior.disableInteriorProp(interiorid, toDespawn[i]);
	}
	
	mp.game.interior.refreshInterior(interiorid);
});
}탞ʺ