{
function Lerp(a, b, t) {
	return a + (b - a) * t
}

function VecLerp(x1, y1, z1, x2, y2, z2, l) {
    let x = Lerp(x1, x2, l)
    let y = Lerp(y1, y2, l)
    let z = Lerp(z1, z2, l)
    return new mp.Vector3(x, y, z)
}

let cablecar;
let cablecarController;
let cablecarIsRunning = false;
let cablecarAudioId = mp.game.invoke('0x430386FE9BF80B45');
mp.game.audio.requestScriptAudioBank("CABLE_CAR", false)
mp.game.audio.requestScriptAudioBank("CABLE_CAR_SOUNDS", false);
mp.game.audio.loadStream("CABLE_CAR_SOUNDS", "CABLE_CAR");
var cablecarRunTimer;
var cablecarSyncTimer;



mp.events.add('cablecar', (cablecarId) => {
	cablecar = mp.objects.atRemoteId(cablecarId)
	cablecar.notifyStreaming = true;
	cablecar.streamingRange = 500
});


mp.events.add('cablecarController', () => {
	cablecarController = true
});


mp.events.add("entityStreamIn", (entity) => {
    if (entity === cablecar) {
		mp.events.callRemote('cablecarStreamIn')
		cablecar.setLodDist(1000);
	}
});

mp.events.add("entityStreamOut", (entity) => {
    if (entity === cablecar) {
		if (cablecarController === false) clearInterval(cablecarRunTimer);
	}
});

mp.events.add("playerQuit", (player) => {
	if (cablecarController === true) mp.events.callRemote('cablecarUpdateSegment', cablecar.position)
});


mp.events.add('cablecarUp', () => {
	mp.events.call('cablecarDoorsClosed')
	mp.game.audio.playSoundFromEntity(-1, "Leave_Station", cablecar.handle, "CABLE_CAR_SOUNDS", false, 0);
	mp.game.audio.playSoundFromEntity(cablecarAudioId, "Running", cablecar.handle, "CABLE_CAR_SOUNDS", false, 0);
	if (cablecarIsRunning === false) {
		cablecarIsRunning = true;
		
	setTimeout(() => {
		if (cablecarController === true) {
			cablecarSyncTimer = setInterval(() => {
				mp.events.callRemote('cablecarPosUpdate', cablecar.position)
			}, 30000);
		}
	}, 5000);

	cablecarRunTimer = setInterval(() => {
		mp.events.call("cablecarAttach")
        dist1 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -740.911, 5599.341, 47.25)
        dist2 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -739.557, 5599.346, 46.997)
        dist3 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -581.009, 5596.517, 77.379)
        dist4 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -575.717, 5596.388, 79.22)
        dist5 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -273.805, 5590.844, 240.795)
        dist6 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -268.707, 5590.744, 243.395)
        dist7 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 6.896, 5585.668, 423.614)
        dist8 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 11.774, 5585.591, 426.711)
        dist9 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 236.82, 5581.445, 599.642)
        dist10 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 241.365, 5581.369, 603.183)
        dist11 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 412.855, 5578.216, 774.401)
        dist12 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 417.541, 5578.124, 777.688)
        dist13 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 444.93, 5577.589, 786.535)
        dist14 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 446.288, 5577.59, 786.75)

		vehDist = mp.game.system.vdist(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, cablecar.position.x, cablecar.position.y, cablecar.position.z) 
		if (vehDist < 6 && mp.players.local.vehicle) mp.game.controls.disableControlAction(27, 75, true);
		
		if (dist2 < 2) { posx = -739.557, posy = 5599.346, posz = 46.997, speed = 0.1/dist2 }
		if (dist3 < 162) { posx = -581.009, posy = 5596.517, posz = 77.379, speed = 0.1/dist3 }
		if (dist4 < 6) { posx = -575.717, posy = 5596.388, posz = 79.22, speed = 0.1/dist4 }
		if (dist5 < 343) { posx = -273.805, posy = 5590.844, posz = 240.795, speed = 0.1/dist5 }
		if (dist6 < 6) { posx = -268.707, posy = 5590.744, posz = 243.395, speed = 0.1/dist6 }
		if (dist7 < 330) { posx = 6.896, posy = 5585.668, posz = 423.614, speed = 0.1/dist7 }
		if (dist8 < 6) { posx = 11.774, posy = 5585.591, posz = 426.71, speed = 0.1/dist8 }
		if (dist9 < 284) { posx = 236.82, posy = 5581.445, posz = 599.642, speed = 0.1/dist9 }
		if (dist10 < 6) { posx = 241.365, posy = 5581.369, posz = 603.183, speed = 0.1/dist10 }
		if (dist11 < 243) { posx = 412.855, posy = 5578.216, posz = 774.401, speed = 0.1/dist11 }
		if (dist12 < 6) { posx = 417.541, posy = 5578.124, posz = 777.688, speed = 0.1/dist12 }
		if (dist13 < 29) { posx = 444.93, posy = 5577.589, posz = 786.535, speed = 0.1/dist13 }
		if (dist14 < 2) { posx = 446.288, posy = 5577.59, posz = 786.75, speed = 0.1/dist14 }
		if (dist14 < 0.1) { posx = 446.288, posy = 5577.59, posz = 786.75, speed = 0.0
			clearInterval(cablecarRunTimer);
			mp.game.invoke("0xA3B0C41BA5CC0BB5", cablecarAudioId);
			mp.game.audio.playSoundFromEntity(-1, "Arrive_Station", cablecar.handle, "CABLE_CAR_SOUNDS", false, 0);
			mp.events.call('cablecarDoorsOpened')
			mp.events.call("cablecarDetach")
			if (cablecarController === true) {
				mp.events.callRemote('cablecarUpdateSegment', cablecar.position)
				cablecarController = false;
				clearInterval(cablecarSyncTimer);
			}
			cablecarIsRunning = false;
		}
		cablecar.position = VecLerp(cablecar.position.x, cablecar.position.y, cablecar.position.z, posx, posy, posz, speed)
	}, 10);
	}
})

mp.events.add('cablecarDown', () => {
	mp.events.call('cablecarDoorsClosed')
	mp.game.audio.playSoundFromEntity(-1, "Leave_Station", cablecar.handle, "CABLE_CAR_SOUNDS", false, 0);
	mp.game.audio.playSoundFromEntity(cablecarAudioId, "Running", cablecar.handle, "CABLE_CAR_SOUNDS", false, 0);
	if (cablecarIsRunning === false) {
		cablecarIsRunning = true;
		
	setTimeout(() => {
		if (cablecarController === true) {
			cablecarSyncTimer = setInterval(() => {
				mp.events.callRemote('cablecarPosUpdate', cablecar.position)
			}, 30000);
		}
	}, 5000);
	
	cablecarRunTimer = setInterval(() => {
		mp.events.call("cablecarAttach")
        dist1 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -740.911, 5599.341, 47.25)
        dist2 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -739.557, 5599.346, 46.997)
        dist3 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -581.009, 5596.517, 77.379)
        dist4 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -575.717, 5596.388, 79.22)
        dist5 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -273.805, 5590.844, 240.795)
        dist6 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, -268.707, 5590.744, 243.395)
        dist7 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 6.896, 5585.668, 423.614)
        dist8 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 11.774, 5585.591, 426.711)
        dist9 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 236.82, 5581.445, 599.642)
        dist10 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 241.365, 5581.369, 603.183)
        dist11 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 412.855, 5578.216, 774.401)
        dist12 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 417.541, 5578.124, 777.688)
        dist13 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 444.93, 5577.589, 786.535)
        dist14 = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, 446.288, 5577.59, 786.75)

		vehDist = mp.game.system.vdist(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, cablecar.position.x, cablecar.position.y, cablecar.position.z) 
		if (vehDist < 6 && mp.players.local.vehicle) mp.game.controls.disableControlAction(27, 75, true);
		
		if (dist13 < 2) { posx = 444.93, posy = 5577.589, posz = 786.535, speed = 0.1/dist13 }	
		if (dist12 < 29) { posx = 417.541, posy = 5578.124, posz = 777.688, speed = 0.1/dist12 }	
		if (dist11 < 6) { posx = 412.855, posy = 5578.216, posz = 774.401, speed = 0.1/dist11 }	
		if (dist10 < 243) { posx = 241.365, posy = 5581.369, posz = 603.183, speed = 0.1/dist10 }	
		if (dist9 < 6) { posx = 236.82, posy = 5581.445, posz = 599.642, speed = 0.1/dist9 }	
		if (dist8 < 284) { posx = 11.774, posy = 5585.591, posz = 426.71, speed = 0.1/dist8 }	
		if (dist7 < 6) { posx = 6.896, posy = 5585.668, posz = 423.614, speed = 0.1/dist7 }	
		if (dist6 < 330) { posx = -268.707, posy = 5590.744, posz = 243.395, speed = 0.1/dist6 }
		if (dist5 < 6) { posx = -273.805, posy = 5590.844, posz = 240.795, speed = 0.1/dist5 }		
		if (dist4 < 343) { posx = -575.717, posy = 5596.388, posz = 79.22, speed = 0.1/dist4 }			
		if (dist3 < 6) { posx = -581.009, posy = 5596.517, posz = 77.379, speed = 0.1/dist3 }			
		if (dist2 < 162) { posx = -739.557, posy = 5599.346, posz = 46.997, speed = 0.1/dist2 }	
		if (dist1 < 2) { posx = -740.911, posy = 5599.341, posz = 47.25, speed = 0.1/dist1 }
		if (dist1 < 0.1) { posx = -740.911, posy = 5599.341, posz = 47.25, speed = 0.0
			clearInterval(cablecarRunTimer);
			mp.game.invoke("0xA3B0C41BA5CC0BB5", cablecarAudioId);
			mp.game.audio.playSoundFromEntity(-1, "Arrive_Station", cablecar.handle, "CABLE_CAR_SOUNDS", false, 0);
			mp.events.call('cablecarDoorsOpened')
			mp.events.call("cablecarDetach")
			if (cablecarController === true) {
				mp.events.callRemote('cablecarUpdateSegment', cablecar.position)
				cablecarController = false;
				clearInterval(cablecarSyncTimer);
			}
			cablecarIsRunning = false;
		}
		cablecar.position = VecLerp(cablecar.position.x, cablecar.position.y, cablecar.position.z, posx, posy, posz, speed)
	}, 10);
	}
})





mp.objects.new('hei_prop_bank_alarm_01', new mp.Vector3(-741.97, 5597.6, 41.49));
mp.objects.new('hei_prop_bank_alarm_01', new mp.Vector3(447.35, 5575.74, 781.18));
let cablecarKeyBind = false;

mp.events.add("cablecarDownButton", () => {
	if (cablecarKeyBind === false) mp.events.call("cablecarKeyBind");
	if (!mp.game.object.getClosestObjectOfType(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, 4, mp.game.joaat("p_cablecar_s"), false, false, false)) {
		mp.game.ui.setTextComponentFormat('STRING');
		mp.game.ui.addTextComponentSubstringPlayerName('Press ~INPUT_CONTEXT~ to call the cable car.');
		mp.game.ui.displayHelpTextFromStringLabel(0, false, true, 10000);
	}
	else {
		mp.game.ui.setTextComponentFormat('STRING');
		mp.game.ui.addTextComponentSubstringPlayerName('Press ~INPUT_CONTEXT~ to ride the cable car, but wait for players to be ready.');
		mp.game.ui.displayHelpTextFromStringLabel(0, false, true, 10000);
	};
});

mp.events.add("cablecarUpButton", () => {
	if (cablecarKeyBind === false) mp.events.call("cablecarKeyBind");
	if (!mp.game.object.getClosestObjectOfType(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, 4, mp.game.joaat("p_cablecar_s"), false, false, false)) {
		mp.game.ui.setTextComponentFormat('STRING');
		mp.game.ui.addTextComponentSubstringPlayerName('Press ~INPUT_CONTEXT~ to call the cable car.');
		mp.game.ui.displayHelpTextFromStringLabel(0, false, true, 10000);
	}
	else {
		mp.game.ui.setTextComponentFormat('STRING');
		mp.game.ui.addTextComponentSubstringPlayerName('Press ~INPUT_CONTEXT~ to ride the cable car, but wait for players to be ready.');
		mp.game.ui.displayHelpTextFromStringLabel(0, false, true, 10000);
	};
});

mp.events.add('cablecarKeyBind', () => {
	cablecarKeyBind = true;
	mp.keys.bind(0x45, true, function() {
		if (cablecarKeyBind === true) {
		if (!mp.players.local.isTypingInTextChat) {
		distUp = mp.game.system.vdist(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, 446.288, 5577.59, 786.75) 
		distDown = mp.game.system.vdist(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, -740.911, 5599.341, 47.25) 
		
		if (!mp.players.local.isTypingInTextChat && distUp < 6.5 && !mp.game.object.getClosestObjectOfType(446.288, 5577.59, 786.75, 1, mp.game.joaat("p_cablecar_s"), false, false, false)) {
			mp.events.call("cablecarNotify");
			mp.events.callRemote('cablecarSegmentUp');
		}
		
		if (!mp.players.local.isTypingInTextChat && distDown < 6.5 && !mp.game.object.getClosestObjectOfType(-740.911, 5599.341, 47.25, 1, mp.game.joaat("p_cablecar_s"), false, false, false)) {
			mp.events.call("cablecarNotify");
		    mp.events.callRemote('cablecarSegmentDown');
	    }
		
		if (!mp.players.local.isTypingInTextChat && distUp < 6 && mp.game.object.getClosestObjectOfType(446.288, 5577.59, 786.75, 1, mp.game.joaat("p_cablecar_s"), false, false, false)) mp.events.callRemote('cablecarSegmentDown')
		if (!mp.players.local.isTypingInTextChat && distDown < 6 && mp.game.object.getClosestObjectOfType(-740.911, 5599.341, 47.25, 1, mp.game.joaat("p_cablecar_s"), false, false, false)) mp.events.callRemote('cablecarSegmentUp')
		}
	    cablecarKeyBind = false;
		}
	});
});

mp.events.add('cablecarNotify', () => {
	mp.game.ui.setTextComponentFormat('STRING');
	mp.game.ui.addTextComponentSubstringPlayerName('If you wish to wait, a cable car will arrive shortly.');
	mp.game.ui.displayHelpTextFromStringLabel(0, false, true, 10000);
});

mp.events.add('cablecarNotifyInUse', () => {
	mp.game.ui.setTextComponentFormat('STRING');
	mp.game.ui.addTextComponentSubstringPlayerName('The cable car is in use, please try again later.');
	mp.game.ui.displayHelpTextFromStringLabel(0, false, true, 10000);
});





mp.events.add('cablecarAttach', () => {
	mp.players.forEachInStreamRange((player, id) => {
		dist = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, player.position.x, player.position.y, player.position.z)
		if (!player.vehicle && !player.isAttached()) {
			if (dist < 6.150) mp.game.invoke("0x6B9BBD38AB0796DF", player.handle, cablecar.handle, 0, player.position.x - cablecar.position.x, player.position.y - cablecar.position.y, player.position.z - cablecar.position.z, player.getRotation(0).x, player.getRotation(0).y, player.getRotation(0).z, 0, 0, 0, 1, 0, 0);
		}
		if (player.vehicle && !player.vehicle.isAttached()) {
			if (dist < 5.925) mp.game.invoke("0x6B9BBD38AB0796DF", player.vehicle.handle, cablecar.handle, 0, player.vehicle.position.x - cablecar.position.x, player.vehicle.position.y - cablecar.position.y, player.vehicle.position.z - cablecar.position.z, player.vehicle.getRotation(0).x, player.vehicle.getRotation(0).y, player.vehicle.getRotation(0).z, 0, 0, 0, 1, 0, 0);		
		}
	});
	
	mp.vehicles.forEachInStreamRange((vehicle, id) => {
		dist = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, vehicle.position.x, vehicle.position.y, vehicle.position.z)
		if (!vehicle.isAttached()) {
			if (dist < 6.6) mp.game.invoke("0x6B9BBD38AB0796DF", vehicle.handle, cablecar.handle, 0, vehicle.position.x - cablecar.position.x, vehicle.position.y - cablecar.position.y, vehicle.position.z - cablecar.position.z, vehicle.getRotation(0).x, vehicle.getRotation(0).y, vehicle.getRotation(0).z, 0, 0, 0, 1, 0, 0);
		}
	});
});

mp.events.add('cablecarDetach', () => {
	mp.players.forEachInStreamRange((player, id) => {
		dist = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, player.position.x, player.position.y, player.position.z)
		if (!player.vehicle && player.isAttached()) player.detach(true, false);
		if (player.vehicle && player.vehicle.isAttached()) player.vehicle.detach(true, false);
	});
	
	mp.vehicles.forEachInStreamRange((vehicle, id) => {
		dist = mp.game.system.vdist(cablecar.position.x, cablecar.position.y, cablecar.position.z, vehicle.position.x, vehicle.position.y, vehicle.position.z)
		if (vehicle.isAttached()) vehicle.detach(true, false)
	});
});





let cablecar_doorLL = mp.objects.new(mp.game.joaat('p_cablecar_s_door_left'), new mp.Vector3(-740.911, 5599.341, 4.2));
let cablecar_doorLR = mp.objects.new(mp.game.joaat('p_cablecar_s_door_right'), new mp.Vector3(-740.911, 5599.341, 4.2));			
let cablecar_doorRL = mp.objects.new(mp.game.joaat('p_cablecar_s_door_left'), new mp.Vector3(-740.911, 5599.341, 4.2));
let cablecar_doorRR = mp.objects.new(mp.game.joaat('p_cablecar_s_door_right'), new mp.Vector3(-740.911, 5599.341, 4.2));

try{
	cablecar_doorLL.streamingRange = 1000
	cablecar_doorLR.streamingRange = 1000
	cablecar_doorRL.streamingRange = 1000
	cablecar_doorRR.streamingRange = 1000
} catch {

}

mp.events.add("cablecarDoorsClosed", () => {
	cablecar_doorLL.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, true, false, 0, true);
	cablecar_doorLR.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, true, false, 0, true)
	cablecar_doorRL.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 180.0, false, false, true, false, 0, true);
	cablecar_doorRR.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 180.0, false, false, true, false, 0, true);	
});

mp.events.add("cablecarDoorsOpened", () => {
	cablecar_doorLL.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, true, false, 0, true);
	cablecar_doorLR.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, true, false, 0, true)
	cablecar_doorRL.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 180.0, false, false, true, false, 0, true);
	cablecar_doorRR.attachTo(cablecar.handle, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 180.0, false, false, true, false, 0, true);	
	cablecar_doorLL.detach(true, true)
	cablecar_doorLR.detach(true, true)
	cablecar_doorRL.detach(true, true)
	cablecar_doorRR.detach(true, true)	
	cablecar_doorLL.slide(cablecar.position.x +0.8, cablecar.position.y, cablecar.position.z, 10.0, 0.0, 0.0, true);
	cablecar_doorLR.slide(cablecar.position.x -0.8, cablecar.position.y, cablecar.position.z, 10.0, 0.0, 0.0, true);
	cablecar_doorRL.slide(cablecar.position.x -0.8, cablecar.position.y, cablecar.position.z, 10.0, 0.0, 0.0, true);
	cablecar_doorRR.slide(cablecar.position.x +0.8, cablecar.position.y, cablecar.position.z, 10.0, 0.0, 0.0, true);
});
}