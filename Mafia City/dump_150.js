{
const a57_0x36b9=['controls','requestClipSet','keybinding','waitAsync','resetStrafeClipset','uimanager','callRemote','events','isBlockingButtons','resetMovementClipset','Vector3','move_ped_crouched_strafing','isCrouched','getKey','0x3ACA4F727AC4606E','game','setMovementClipset','handle','add','position','hotkeyManager','player','players','render','setStrafeClipset','getVariable','move_ped_crouched','invoke','toggleCrouch','streaming','hasClipSetLoaded','disableControlAction','local','downed','0x8D4D46230B2C353A'];(function(_0x5e682a,_0x36b9af){const _0x8232e6=function(_0x42190){while(--_0x42190){_0x5e682a['push'](_0x5e682a['shift']());}};_0x8232e6(++_0x36b9af);}(a57_0x36b9,0x1f0));const a57_0x8232=function(_0x5e682a,_0x36b9af){_0x5e682a=_0x5e682a-0x0;let _0x8232e6=a57_0x36b9[_0x5e682a];return _0x8232e6;};const movementClipSet=a57_0x8232('0x14');const strafeClipSet=a57_0x8232('0x5');const clipSetSwitchTime=0.25;mp['game'][a57_0x8232('0x17')][a57_0x8232('0x1e')]=_0x4f8004=>mp[a57_0x8232('0x9')][a57_0x8232('0x15')](a57_0x8232('0x8'),_0x4f8004);const loadClipSet=async _0x564f90=>{mp[a57_0x8232('0x9')][a57_0x8232('0x17')][a57_0x8232('0x1e')](_0x564f90);while(!mp[a57_0x8232('0x9')][a57_0x8232('0x17')][a57_0x8232('0x18')](_0x564f90))await mp[a57_0x8232('0x9')][a57_0x8232('0x20')](0x0);};loadClipSet(movementClipSet);loadClipSet(strafeClipSet);mp['events'][a57_0x8232('0xc')]('entityStreamIn',_0x1cac8c=>{if(_0x1cac8c['type']==='player'&&_0x1cac8c[a57_0x8232('0x13')](a57_0x8232('0x6'))){_0x1cac8c[a57_0x8232('0xa')](movementClipSet,clipSetSwitchTime);_0x1cac8c[a57_0x8232('0x12')](strafeClipSet);}});mp[a57_0x8232('0x1')]['addDataHandler']('isCrouched',(_0x1aafa2,_0x26196e)=>{if(_0x1aafa2[a57_0x8232('0xb')]==0x0)return;if(_0x1aafa2['type']===a57_0x8232('0xf')){if(_0x26196e&&mp[a57_0x8232('0x9')]['invoke'](a57_0x8232('0x1c'))!=0x4){_0x1aafa2[a57_0x8232('0xa')](movementClipSet,clipSetSwitchTime);_0x1aafa2[a57_0x8232('0x12')](strafeClipSet);startCrouchInterval();}else{_0x1aafa2[a57_0x8232('0x3')](clipSetSwitchTime);_0x1aafa2[a57_0x8232('0x21')]();stopCrouchInterval();}}});setInterval(()=>{if(mp[a57_0x8232('0x10')][a57_0x8232('0x1a')][a57_0x8232('0x13')]('isCrouched')&&mp['game'][a57_0x8232('0x15')](a57_0x8232('0x1c'))==0x4){mp[a57_0x8232('0x1')][a57_0x8232('0x0')]('toggleCrouch');}},0x1f4);client[a57_0x8232('0x1f')]['bind'](client[a57_0x8232('0xe')][a57_0x8232('0x7')]('Toggle_Crouch'),()=>{if(mp['players']['local'][a57_0x8232('0x13')](a57_0x8232('0x1b')))return;if(mp[a57_0x8232('0x10')][a57_0x8232('0x1a')]['vehicle'])return;if(!client[a57_0x8232('0x22')][a57_0x8232('0x2')]()){mp[a57_0x8232('0x1')][a57_0x8232('0x0')](a57_0x8232('0x16'));}});let time,tempPosition;function startCrouchInterval(){tempPosition=mp[a57_0x8232('0x10')][a57_0x8232('0x1a')][a57_0x8232('0xd')]['x'];time=setInterval(()=>{if(player['getVariable']('isCrouched')&&tempPosition==mp['players'][a57_0x8232('0x1a')][a57_0x8232('0xd')]['x']){mp[a57_0x8232('0x10')][a57_0x8232('0x1a')][a57_0x8232('0xd')]=new mp[(a57_0x8232('0x4'))](mp[a57_0x8232('0x10')][a57_0x8232('0x1a')]['position']['x'],mp[a57_0x8232('0x10')][a57_0x8232('0x1a')]['position']['y'],mp[a57_0x8232('0x10')][a57_0x8232('0x1a')][a57_0x8232('0xd')]['z']);}tempPosition=mp[a57_0x8232('0x10')][a57_0x8232('0x1a')][a57_0x8232('0xd')]['x'];},0x1388);}function stopCrouchInterval(){clearInterval(time);}mp[a57_0x8232('0x1')][a57_0x8232('0xc')](a57_0x8232('0x11'),()=>{mp[a57_0x8232('0x9')][a57_0x8232('0x1d')][a57_0x8232('0x19')](0x0,0x24,!![]);});
}