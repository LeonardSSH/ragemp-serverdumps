{
const a60_0x37db=['players','downed','playerResetDeathCountdown','gameplay','playerRespawned','callRemote','local','getVariable','setFadeOutAfterDeath','graphics','disableAllControlActions','Respawn\x20allowed\x20in\x20','second','seconds','game','playerRemoveKilledBy','now','add','\x20/respawn\x20in\x20Chat\x20to\x20respawn','controls','smode','gui','\x20more\x20','Error:\x20','enableControlAction','playerDeath','events','drawText','extendDownedTime','chat','New\x20Life\x20Rule\x20active\x20for\x20','player','push','setInvincible'];(function(_0x51495c,_0x37dba1){const _0x41c2ed=function(_0x55258e){while(--_0x55258e){_0x51495c['push'](_0x51495c['shift']());}};_0x41c2ed(++_0x37dba1);}(a60_0x37db,0x1b9));const a60_0x41c2=function(_0x51495c,_0x37dba1){_0x51495c=_0x51495c-0x0;let _0x41c2ed=a60_0x37db[_0x51495c];return _0x41c2ed;};let deathCountDown=-0x1;let nlrCountdown=-0x1;let isDead=![];let isNLR=![];let milliseconds=null;mp['game'][a60_0x41c2('0x4')][a60_0x41c2('0x9')](![]);function startCountdown(_0x3f6cb1){try{deathCountDown=_0x3f6cb1;isDead=!![];mp['game'][a60_0x41c2('0x20')][a60_0x41c2('0x0')](!![]);milliseconds=Date[a60_0x41c2('0x11')]();}catch(_0x39025a){mp[a60_0x41c2('0x16')][a60_0x41c2('0x1e')][a60_0x41c2('0x21')](a60_0x41c2('0x18')+_0x39025a);}}function startNLRCountdown(_0x378a1d){try{nlrCountdown=_0x378a1d;isNLR=!![];milliseconds=Date[a60_0x41c2('0x11')]();}catch(_0x46db0d){mp[a60_0x41c2('0x16')][a60_0x41c2('0x1e')][a60_0x41c2('0x21')](a60_0x41c2('0x18')+_0x46db0d);}}mp[a60_0x41c2('0x1b')][a60_0x41c2('0x12')](a60_0x41c2('0x1a'),(_0xa08f0a,_0x30955f,_0x40edc0)=>{mp[a60_0x41c2('0xf')][a60_0x41c2('0x4')][a60_0x41c2('0x9')](![]);if(mp[a60_0x41c2('0x1')][a60_0x41c2('0x7')][a60_0x41c2('0x8')](a60_0x41c2('0x15'))!==!![]&&!isDead){isNLR=![];nlrCountdown=-0x1;startCountdown(0x258);mp[a60_0x41c2('0x1b')][a60_0x41c2('0x6')]('playerSetKilledBy',_0x40edc0);}});mp[a60_0x41c2('0x1b')][a60_0x41c2('0x12')]('playerDeathStartCountdown',_0x259266=>{startCountdown(0x258);});mp['events'][a60_0x41c2('0x12')](a60_0x41c2('0x3'),()=>{deathCountDown=-0x1;isDead=![];mp[a60_0x41c2('0xf')]['player'][a60_0x41c2('0x0')](![]);});mp['events']['add'](a60_0x41c2('0x1d'),()=>{if(mp[a60_0x41c2('0x1')][a60_0x41c2('0x7')][a60_0x41c2('0x8')](a60_0x41c2('0x15'))!==!![]&&isDead){startCountdown(deathCountDown+0xa*0x3c);}});mp[a60_0x41c2('0x1b')][a60_0x41c2('0x12')](a60_0x41c2('0x5'),()=>{startNLRCountdown(0x384);mp[a60_0x41c2('0x1b')]['callRemote'](a60_0x41c2('0x10'));});mp['events'][a60_0x41c2('0x12')]('render',()=>{if(mp['players'][a60_0x41c2('0x7')]['getVariable'](a60_0x41c2('0x2'))||isNLR){if(isDead||isNLR){if(milliseconds){if(Date[a60_0x41c2('0x11')]()-milliseconds>0x3e8){deathCountDown>0x0?deathCountDown--:nlrCountdown>0x0?nlrCountdown--:'';milliseconds=Date['now']();if(deathCountDown==0x0||nlrCountdown==0x0){milliseconds=null;if(nlrCountdown==0x0){isNLR=![];}}}}if(isDead){if(deathCountDown>0x0){mp[a60_0x41c2('0xf')][a60_0x41c2('0xa')][a60_0x41c2('0x1c')](a60_0x41c2('0xc')+deathCountDown+'\x20seconds',[0.5,0.9],{'font':0x0,'centre':![],'color':[0xff,0x0,0x0,0xff],'scale':[0.5,0.5],'outline':![]});}else{mp[a60_0x41c2('0xf')][a60_0x41c2('0xa')][a60_0x41c2('0x1c')](a60_0x41c2('0x13'),[0.5,0.9],{'font':0x0,'centre':![],'color':[0xff,0xff,0x0,0xff],'scale':[0.5,0.5],'outline':![]});}}}if(mp['players'][a60_0x41c2('0x7')][a60_0x41c2('0x8')](a60_0x41c2('0x2'))){mp[a60_0x41c2('0xf')]['controls'][a60_0x41c2('0xb')](0x0);mp[a60_0x41c2('0xf')][a60_0x41c2('0x14')][a60_0x41c2('0xb')](0x1);mp[a60_0x41c2('0xf')][a60_0x41c2('0x14')]['disableAllControlActions'](0x2);mp[a60_0x41c2('0xf')][a60_0x41c2('0x14')][a60_0x41c2('0xb')](0x19);mp[a60_0x41c2('0xf')][a60_0x41c2('0x14')]['disableAllControlActions'](0x1b);mp[a60_0x41c2('0xf')]['controls'][a60_0x41c2('0x19')](0x0,0x1,!![]);mp[a60_0x41c2('0xf')][a60_0x41c2('0x14')][a60_0x41c2('0x19')](0x0,0x2,!![]);mp[a60_0x41c2('0xf')][a60_0x41c2('0x14')]['enableControlAction'](0x0,0xc8,!![]);}}if(nlrCountdown>0x0){mp[a60_0x41c2('0xf')][a60_0x41c2('0xa')][a60_0x41c2('0x1c')](a60_0x41c2('0x1f')+nlrCountdown+a60_0x41c2('0x17')+(nlrCountdown===0x1?a60_0x41c2('0xd'):a60_0x41c2('0xe')),[0.5,0.9],{'font':0x0,'centre':![],'color':[0x7f,0xe5,0xf0,0xff],'scale':[0.5,0.5],'outline':![]});}});
}