{
const a113_0x29a3=['vineyard:keypress:Y:animationstart','position','new','chat','game','events','you\x20realise\x20your\x20ATV\x20is\x20full\x20and\x20cannot\x20fit\x20anymore\x20grapes\x20inside','you\x20realise\x20you\x20have\x20no\x20grapes\x20to\x20sell\x20so\x20you\x20are\x20told\x20to\x20leave...','notify','exists','vineyard:clearAllBlips','destroy','vineyard:keypress:Y:sellharvest','add','Range','random','freezePosition','You\x20dont\x20even\x20work\x20here...','~g~You\x20have\x20completely\x20filled\x20your\x20ATV!\x20Head\x20to\x20the\x20$\x20to\x20sell\x20your\x20harvest!','Vector3','vineyard:keypress:Y:job','getVariable','vehicle','players','floor','Welcome\x20to\x20the\x20Vineyard!\x20Head\x20to\x20the\x20flag\x20icon\x20with\x20your\x20ATV\x20then\x20get\x20out\x20and\x20press\x20Y\x20to\x20interact\x20with\x20the\x20harvest.\x20Head\x20to\x20the\x20$\x20to\x20sell\x20your\x20harvest(s)\x20at\x20any\x20time!','~g~You\x20have\x20completed\x20a\x20harvest!\x20Either\x20head\x20to\x20the\x20$\x20to\x20sell\x20or\x20head\x20to\x20the\x20next\x20flag!','interactionPressed','Coord','v_totalCollectedGrapes','v_workingVineyard','gui','vineyard:addChatDo','~g~You\x20have\x20begun\x20working\x20the\x20Vineyard\x20job.\x20Approach\x20your\x20ATV\x20to\x20start\x20working!','v_vineyardVehicle','sqrt','vineyard:completedHarvest','you\x20realise\x20the\x20grapes\x20at\x20this\x20location\x20have\x20not\x20fully\x20riped','you\x20would\x20stop\x20collecting\x20grapes\x20as\x20your\x20back\x20hurts','vineyard:keypress:Y:successharvest','callRemote','you\x20would\x20hand\x20over\x20all\x20your\x20grapes\x20in\x20to\x20the\x20sales\x20man','local','vineyard:keypress:Y:animationend','blips','length','you\x20would\x20begin\x20collecting\x20grapes\x20from\x20this\x20location'];(function(_0x43df21,_0x29a3e0){const _0x4729f6=function(_0x35b338){while(--_0x35b338){_0x43df21['push'](_0x43df21['shift']());}};_0x4729f6(++_0x29a3e0);}(a113_0x29a3,0x181));const a113_0x4729=function(_0x43df21,_0x29a3e0){_0x43df21=_0x43df21-0x0;let _0x4729f6=a113_0x29a3[_0x43df21];return _0x4729f6;};let mainVineyardJob=new mp[(a113_0x4729('0xa'))](-0x760,0x802,0x8c);let sellingArea=new mp[(a113_0x4729('0xa'))](-0x783,0x800,0x8c);let worksAtVineyard;let vehiclePosition;let maxATVSpace=0xa;let isPicking=![];let currentHarvestBlip;let currentSellBlip;let allHarvestSpots=[{'Coord':new mp[(a113_0x4729('0xa'))](-0x754,0x858,0x82),'Range':0x28},{'Coord':new mp[(a113_0x4729('0xa'))](-0x715,0x84b,0x82),'Range':0x28},{'Coord':new mp[(a113_0x4729('0xa'))](-0x6ea,0x831,0x82),'Range':0x41},{'Coord':new mp[(a113_0x4729('0xa'))](-0x742,0x897,0x69),'Range':0x28},{'Coord':new mp['Vector3'](-0x6d5,0x884,0x73),'Range':0x4b},{'Coord':new mp[(a113_0x4729('0xa'))](-0x74c,0x8d6,0x5a),'Range':0x28},{'Coord':new mp['Vector3'](-0x6f3,0x8cd,0x56),'Range':0x2d},{'Coord':new mp[(a113_0x4729('0xa'))](-0x6c2,0x92b,0x41),'Range':0x46},{'Coord':new mp[(a113_0x4729('0xa'))](-0x659,0x8d2,0x50),'Range':0x41},{'Coord':new mp[(a113_0x4729('0xa'))](-0x6af,0x7c0,0x82),'Range':0x37},{'Coord':new mp['Vector3'](-0x6cf,0x779,0x96),'Range':0x32},{'Coord':new mp[(a113_0x4729('0xa'))](-0x76c,0x758,0xaf),'Range':0x41},{'Coord':new mp['Vector3'](-0x77f,0x797,0xa5),'Range':0x32}];let playerNextHarvest=allHarvestSpots[Math[a113_0x4729('0xf')](Math['random']()*allHarvestSpots[a113_0x4729('0x24')])];let notificationSystem=_0x3347f7=>{mp[a113_0x4729('0x2a')]['graphics'][a113_0x4729('0x2e')](''+_0x3347f7);};let chatNotificationSystem=_0x3f305f=>{mp[a113_0x4729('0x16')][a113_0x4729('0x29')]['push'](''+_0x3f305f);};let calcDistanceBetweenTwoVectors=(_0x1a723b,_0x13ae0f)=>{let _0x3b41f1=new mp[(a113_0x4729('0xa'))](_0x1a723b['x']-_0x13ae0f['x'],_0x1a723b['y']-_0x13ae0f['y'],_0x1a723b['z']-_0x13ae0f['z']);return Math[a113_0x4729('0x1a')](_0x3b41f1['x']*_0x3b41f1['x']+_0x3b41f1['y']*_0x3b41f1['y']+_0x3b41f1['z']*_0x3b41f1['z']);};let checkIfPlayerIsWithinRange=_0x2d536c=>{for(const _0x3181fc in allHarvestSpots){if(calcDistanceBetweenTwoVectors(allHarvestSpots[_0x3181fc][a113_0x4729('0x13')],_0x2d536c)<=allHarvestSpots[_0x3181fc][a113_0x4729('0x5')]){return!![];}}return![];};let startEndJob=_0x29cd7c=>{if(_0x29cd7c[a113_0x4729('0xc')](a113_0x4729('0x15'))==![]){mp[a113_0x4729('0x2b')][a113_0x4729('0x1f')](a113_0x4729('0xb'));}else if(_0x29cd7c['getVariable']('v_workingVineyard')==!![]){mp['events'][a113_0x4729('0x1f')](a113_0x4729('0xb'));notificationSystem('~r~You\x20have\x20ended\x20your\x20job\x20at\x20the\x20vineyard.');mp[a113_0x4729('0x2b')]['call'](a113_0x4729('0x1'));}};let startJobServerNotification=()=>{notificationSystem(a113_0x4729('0x18'));chatNotificationSystem(a113_0x4729('0x10'));currentSellBlip=mp[a113_0x4729('0x23')]['new'](0xcf,new mp[(a113_0x4729('0xa'))](-0x783,0x800,0x8c));currentHarvestBlip=mp[a113_0x4729('0x23')]['new'](0xa4,playerNextHarvest[a113_0x4729('0x13')]);};let mainHarvest=(_0x21082b,_0x15a578)=>{vehiclePosition=_0x21082b[a113_0x4729('0xc')](a113_0x4729('0x19'))[a113_0x4729('0x27')];if(!_0x21082b[a113_0x4729('0xd')]){if(calcDistanceBetweenTwoVectors(vehiclePosition,_0x15a578)<=0xf){if(calcDistanceBetweenTwoVectors(playerNextHarvest[a113_0x4729('0x13')],_0x15a578)<=playerNextHarvest[a113_0x4729('0x5')]){if(!(_0x21082b[a113_0x4729('0xc')](a113_0x4729('0x14'))>maxATVSpace-0x1)){if(!isPicking){isPicking=!![];mp[a113_0x4729('0x2b')]['callRemote'](a113_0x4729('0x17'),a113_0x4729('0x25'));mp[a113_0x4729('0x2b')]['callRemote'](a113_0x4729('0x26'));_0x21082b[a113_0x4729('0xc')](a113_0x4729('0x19'))['freezePosition'](!![]);}else{mp[a113_0x4729('0x2b')]['callRemote'](a113_0x4729('0x22'));_0x21082b[a113_0x4729('0xc')](a113_0x4729('0x19'))[a113_0x4729('0x7')](![]);mp[a113_0x4729('0x2b')]['callRemote'](a113_0x4729('0x17'),a113_0x4729('0x1d'));isPicking=![];}}else{mp[a113_0x4729('0x2b')][a113_0x4729('0x1f')]('vineyard:addChatDo',a113_0x4729('0x2c'));}}else{mp['events'][a113_0x4729('0x1f')](a113_0x4729('0x17'),a113_0x4729('0x1c'));}}else{mp['events'][a113_0x4729('0x1f')](a113_0x4729('0x17'),'you\x20realise\x20the\x20ATV\x20is\x20too\x20far\x20away\x20to\x20carry\x20the\x20next\x20harvest');}}else{mp[a113_0x4729('0x2b')]['callRemote'](a113_0x4729('0x17'),'you\x20notice\x20you\x20cannot\x20see\x20if\x20the\x20grapes\x20are\x20good\x20to\x20harvest\x20from\x20the\x20ATV');}};let sellingHarvest=_0x2a6f7c=>{if(_0x2a6f7c[a113_0x4729('0xc')](a113_0x4729('0x14'))>=0x1){mp[a113_0x4729('0x2b')][a113_0x4729('0x1f')](a113_0x4729('0x3'));mp[a113_0x4729('0x2b')][a113_0x4729('0x1f')](a113_0x4729('0x17'),a113_0x4729('0x20'));}else{mp[a113_0x4729('0x2b')]['callRemote']('vineyard:addChatDo',a113_0x4729('0x2d'));}};mp['events'][a113_0x4729('0x4')](a113_0x4729('0x12'),()=>{let _0x4bbdcb=mp[a113_0x4729('0xe')][a113_0x4729('0x21')];let _0x903cfd=_0x4bbdcb[a113_0x4729('0x27')];if(calcDistanceBetweenTwoVectors(mainVineyardJob,_0x903cfd)<=0x2){startEndJob(_0x4bbdcb);}else if(checkIfPlayerIsWithinRange(_0x903cfd)){worksAtVineyard=mp['players'][a113_0x4729('0x21')][a113_0x4729('0xc')](a113_0x4729('0x15'));if(worksAtVineyard){mainHarvest(_0x4bbdcb,_0x903cfd);}else{chatNotificationSystem(a113_0x4729('0x8'));}}else if(calcDistanceBetweenTwoVectors(sellingArea,_0x903cfd)<=0x3){sellingHarvest(_0x4bbdcb);}});mp[a113_0x4729('0x2b')][a113_0x4729('0x4')](a113_0x4729('0x1b'),()=>{mp[a113_0x4729('0x2b')]['callRemote'](a113_0x4729('0x22'));player['getVariable'](a113_0x4729('0x19'))[a113_0x4729('0x7')](![]);mp['events'][a113_0x4729('0x1f')](a113_0x4729('0x1e'));lastPickLocation=player[a113_0x4729('0x27')];let _0xc6a7f3=allHarvestSpots[Math[a113_0x4729('0xf')](Math[a113_0x4729('0x6')]()*allHarvestSpots[a113_0x4729('0x24')])];while(_0xc6a7f3==playerNextHarvest){_0xc6a7f3=allHarvestSpots[Math['floor'](Math[a113_0x4729('0x6')]()*allHarvestSpots[a113_0x4729('0x24')])];}playerNextHarvest=_0xc6a7f3;currentHarvestBlip[a113_0x4729('0x2')]();currentHarvestBlip=mp[a113_0x4729('0x23')][a113_0x4729('0x28')](0xa4,playerNextHarvest[a113_0x4729('0x13')]);if(!(player[a113_0x4729('0xc')](a113_0x4729('0x14'))>=maxATVSpace-0x1)){notificationSystem(a113_0x4729('0x11'));}else{notificationSystem(a113_0x4729('0x9'));}isPicking=![];});mp['events'][a113_0x4729('0x4')](a113_0x4729('0x1'),()=>{if(currentHarvestBlip!=null&&mp['blips'][a113_0x4729('0x0')](currentHarvestBlip)){currentHarvestBlip[a113_0x4729('0x2')]();currentHarvestBlip=null;}if(currentSellBlip!=null&&mp[a113_0x4729('0x23')][a113_0x4729('0x0')](currentSellBlip)){currentSellBlip[a113_0x4729('0x2')]();currentSellBlip=null;}});mp[a113_0x4729('0x2b')][a113_0x4729('0x4')]('startJobServerNotification',startJobServerNotification);
}