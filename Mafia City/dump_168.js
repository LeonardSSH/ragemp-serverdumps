{
const a109_0x283e=['url','deleteMarker','yellow','You\x20already\x20picked\x20up\x20your\x20order.','callRemote','stopAnimation','uimanager','cursor','browsers','addUi','add','progressStart();','loop','Dump\x20the\x20food\x20you\x20overcooked\x20it.','changeColorofMarker','removeProgressPrisonJob','game','setprisonJobWorking','execute','You\x20started\x20plating\x20the\x20food...','You\x20have\x20completed\x20an\x20order.','If\x20you\x20want\x20to\x20restart\x20your\x20progress\x20or\x20switch\x20jobs\x20use\x20/quitprisonjob.','notify','spawnPrisonMarkers','removeUi','undefined','graphics','gui','You\x20have\x20the\x20food,\x20serve\x20it.','events','red','isMarkerOn','package://roleplay/UI/prisonKitchen/kitchenprogress.html','kitchen','call','chat','active','players','local','prisonKitchen','requestAnimDict','show','stopKitchen','anim@heists@prison_heistig1_p1_guard_checks_bus','addFoodServed','Info:\x20When\x20the\x20bar\x20turns\x20green\x20LEFT\x20CLICK\x20anywhere\x20on\x20screen\x20to\x20get\x20it\x20off\x20the\x20stove.','Dump\x20the\x20food\x20you\x20undercooked\x20it.','You\x20prepared\x20the\x20food\x20grab\x20it\x20off\x20the\x20stove.','You\x20set\x20the\x20food\x20on\x20the\x20stove.','taskPlayAnim','new','QuitCommandUse','push','createMarker','jobKeyPressed','freezePosition','kitchenAddItem','You\x20got\x20the\x20ingredients.','reload'];(function(_0x37ad0b,_0x283e69){const _0x299e03=function(_0x38a4f8){while(--_0x38a4f8){_0x37ad0b['push'](_0x37ad0b['shift']());}};_0x299e03(++_0x283e69);}(a109_0x283e,0x14e));const a109_0x299e=function(_0x37ad0b,_0x283e69){_0x37ad0b=_0x37ad0b-0x0;let _0x299e03=a109_0x283e[_0x37ad0b];return _0x299e03;};let minigameWindow=mp[a109_0x299e('0x1c')][a109_0x299e('0xb')]('package://roleplay/UI/prisonKitchen/kitchenprogress.html\x27)');minigameWindow[a109_0x299e('0x38')]=![];const notDoneColor=[0xff,0x50,0x50,0xff],doneColor=[0x0,0x80,0x0,0xff],progressColor=[0xff,0xd7,0x0,0xff];let doingStuff=![],foodOnStove=![],hasOrder=![],prisonJobWorking=a109_0x299e('0x2d');let time;const prisonJobManager=client['prisonJobManager'];mp[a109_0x299e('0x24')]['streaming'][a109_0x299e('0x1')]('anim@heists@prison_heistig1_p1_guard_checks_bus');mp[a109_0x299e('0x31')]['add'](a109_0x299e('0x3'),_0x5f11ca=>{client[a109_0x299e('0x1a')][a109_0x299e('0x2c')](a109_0x299e('0x0'));mp['players']['local'][a109_0x299e('0x10')](![]);minigameWindow[a109_0x299e('0x13')](!![]);minigameWindow[a109_0x299e('0x38')]=![];mp[a109_0x299e('0x2f')]['cursor'][a109_0x299e('0x2')](![],![]);mp['gui'][a109_0x299e('0x37')][a109_0x299e('0x2')](!![]);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0x19'));foodOnStove=![];doingStuff=![];if(_0x5f11ca==a109_0x299e('0x32')||_0x5f11ca==a109_0x299e('0x16')){prisonJobManager[a109_0x299e('0x15')](0x12);prisonJobManager[a109_0x299e('0x15')](0x13);prisonJobManager[a109_0x299e('0x22')](0x16,notDoneColor);prisonJobManager[a109_0x299e('0xe')](0x16);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0xc'),![]);return _0x5f11ca=='red'?mp[a109_0x299e('0x24')]['graphics'][a109_0x299e('0x2a')](a109_0x299e('0x21')):mp[a109_0x299e('0x24')][a109_0x299e('0x2e')][a109_0x299e('0x2a')](a109_0x299e('0x7'));}foodOnStove=!![];prisonJobManager['changeColorofMarker'](0x13,doneColor);mp[a109_0x299e('0x24')]['graphics'][a109_0x299e('0x2a')](a109_0x299e('0x8'));});mp[a109_0x299e('0x31')][a109_0x299e('0x1e')](a109_0x299e('0xf'),()=>{let _0xa37b5f=prisonJobManager['getClosestDistancePrisonJob']();if(!prisonJobManager[a109_0x299e('0x33')](_0xa37b5f))return;if(doingStuff)return;if(_0xa37b5f==null)return;doingStuff=!![];switch(Number(_0xa37b5f)){case 0x12:if(prisonJobWorking!=a109_0x299e('0x2d'))return mp['game'][a109_0x299e('0x2e')][a109_0x299e('0x2a')](a109_0x299e('0x29'));mp[a109_0x299e('0x31')][a109_0x299e('0x36')](a109_0x299e('0x25'),a109_0x299e('0x35'));mp[a109_0x299e('0x39')]['local'][a109_0x299e('0x10')](!![]);mp['game']['streaming']['requestAnimDict'](a109_0x299e('0x4'));mp['players'][a109_0x299e('0x3a')][a109_0x299e('0xa')]('anim@heists@prison_heistig1_p1_guard_checks_bus','loop',0x8,0x1,-0x1,0x1,0x1,![],![],![]);prisonJobManager[a109_0x299e('0x22')](0x12,doneColor);mp[a109_0x299e('0x31')][a109_0x299e('0x18')]('QuitCommandUse',![]);time=setTimeout(()=>{mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0xc'),!![]);delFlickMarker(0x12);mp['players'][a109_0x299e('0x3a')][a109_0x299e('0x10')](![]);prisonJobManager[a109_0x299e('0xe')](0x13);mp['game'][a109_0x299e('0x2e')][a109_0x299e('0x2a')](a109_0x299e('0x12'));doingStuff=![];},0x1388);break;case 0x13:if(foodOnStove){mp[a109_0x299e('0x24')][a109_0x299e('0x2e')][a109_0x299e('0x2a')](a109_0x299e('0x27'));mp['players'][a109_0x299e('0x3a')][a109_0x299e('0x10')](!![]);foodOnStove=![];mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0xa')]('anim@heists@prison_heistig1_p1_guard_checks_bus',a109_0x299e('0x20'),0x8,0x1,-0x1,0x1,0x1,![],![],![]);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0xc'),![]);time=setTimeout(()=>{mp[a109_0x299e('0x31')][a109_0x299e('0x18')]('QuitCommandUse',!![]);mp[a109_0x299e('0x39')][a109_0x299e('0x3a')]['freezePosition'](![]);mp['events'][a109_0x299e('0x18')](a109_0x299e('0x19'));prisonJobManager['deleteMarker'](0x13);prisonJobManager['createMarker'](0x14);prisonJobManager['changeColorofMarker'](0x13,notDoneColor);doingStuff=![];mp[a109_0x299e('0x24')][a109_0x299e('0x2e')][a109_0x299e('0x2a')](a109_0x299e('0x30'));},0x1388);return;}prisonJobManager[a109_0x299e('0x22')](0x13,progressColor);mp[a109_0x299e('0x39')]['local'][a109_0x299e('0x10')](!![]);mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0xa')]('anim@heists@prison_heistig1_p1_guard_checks_bus',a109_0x299e('0x20'),0x8,0x1,-0x1,0x1,0x1,![],![],![]);mp[a109_0x299e('0x2f')][a109_0x299e('0x37')][a109_0x299e('0xd')](a109_0x299e('0x6'));client['uimanager'][a109_0x299e('0x1d')](a109_0x299e('0x0'),!![],!![]);minigameWindow[a109_0x299e('0x14')]=a109_0x299e('0x34');minigameWindow['active']=!![];mp[a109_0x299e('0x2f')][a109_0x299e('0x1b')][a109_0x299e('0x2')](!![],!![]);minigameWindow[a109_0x299e('0x26')](a109_0x299e('0x1f'));mp[a109_0x299e('0x2f')][a109_0x299e('0x37')][a109_0x299e('0x2')](![]);mp[a109_0x299e('0x24')]['graphics'][a109_0x299e('0x2a')](a109_0x299e('0x9'));break;case 0x14:mp[a109_0x299e('0x39')][a109_0x299e('0x3a')]['freezePosition'](!![]);mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0xa')](a109_0x299e('0x4'),'loop',0x8,0x1,-0x1,0x1,0x1,![],![],![]);prisonJobManager[a109_0x299e('0x22')](0x14,doneColor);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0xc'),![]);time=setTimeout(()=>{mp[a109_0x299e('0x31')][a109_0x299e('0x18')]('QuitCommandUse',!![]);mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0x10')](![]);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0x5'));mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0x19'));delFlickMarker(0x14);mp['events'][a109_0x299e('0x18')]('putInDBprisonjobKitchen');mp[a109_0x299e('0x31')][a109_0x299e('0x36')](a109_0x299e('0x2b'));mp[a109_0x299e('0x31')]['call']('removeProgressPrisonJob');mp[a109_0x299e('0x24')][a109_0x299e('0x2e')][a109_0x299e('0x2a')](a109_0x299e('0x28'));return;},0x7d0);break;case 0x15:doingStuff=![];if(hasOrder)return mp[a109_0x299e('0x24')][a109_0x299e('0x2e')]['notify'](a109_0x299e('0x17'));mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0x11'));mp[a109_0x299e('0x39')][a109_0x299e('0x3a')]['taskPlayAnim'](a109_0x299e('0x4'),'loop',0x8,0x1,-0x1,0x1,0x1,![],![],![]);flickMarker(0x15);hasOrder=!![];setTimeout(()=>{hasOrder=![];},0x927c0);break;case 0x16:mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0x10')](!![]);mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0xa')]('anim@heists@prison_heistig1_p1_guard_checks_bus',a109_0x299e('0x20'),0x8,0x1,-0x1,0x1,0x1,![],![],![]);prisonJobManager[a109_0x299e('0x22')](0x16,doneColor);time=setTimeout(()=>{mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0x10')](![]);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0xc'),!![]);flickMarker(0x16);doingStuff=![];mp[a109_0x299e('0x31')][a109_0x299e('0x36')](a109_0x299e('0x2b'));mp[a109_0x299e('0x31')][a109_0x299e('0x36')]('removeProgressPrisonJob');return mp[a109_0x299e('0x24')][a109_0x299e('0x2e')][a109_0x299e('0x2a')]('You\x20dumped\x20the\x20food.');},0x1388);break;default:doingStuff=![];break;}});function flickMarker(_0x863717){prisonJobManager[a109_0x299e('0x22')](_0x863717,doneColor);setTimeout(()=>{prisonJobManager[a109_0x299e('0x22')](_0x863717,notDoneColor);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0x19'));mp[a109_0x299e('0x39')][a109_0x299e('0x3a')]['freezePosition'](![]);},0x32);}function delFlickMarker(_0x3ea364){prisonJobManager[a109_0x299e('0x22')](_0x3ea364,doneColor);setTimeout(()=>{prisonJobManager['changeColorofMarker'](_0x3ea364,notDoneColor);prisonJobManager['deleteMarker'](_0x3ea364);mp[a109_0x299e('0x31')][a109_0x299e('0x18')](a109_0x299e('0x19'));mp[a109_0x299e('0x39')][a109_0x299e('0x3a')][a109_0x299e('0x10')](![]);},0x32);}mp[a109_0x299e('0x31')]['add'](a109_0x299e('0x23'),()=>{doingStuff=![];foodOnStove=![];prisonJobWorking='undefined';clearTimeout(time);mp[a109_0x299e('0x31')]['callRemote']('QuitCommandUse',!![]);});mp[a109_0x299e('0x31')][a109_0x299e('0x1e')](a109_0x299e('0x25'),_0x432135=>{prisonJobWorking=_0x432135;});
}