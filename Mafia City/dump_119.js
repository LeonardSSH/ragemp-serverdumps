{
const a160_0x29dc=['admin:reports:openedReportsUi','admin:reports:updateReportsNotification','DLC_HEIST_HACKING_SNAKE_SOUNDS','local','gui','audio','cef:reports:create','Car\x20stuck\x20on\x20parking\x20/\x20Can\x27t\x20see\x20cars\x20on\x20my\x20phone','hud.pendingReports','cef:reports:takeReport','events','hasReportOpen','game','player:reports:createReport','/reports/create','browserUpdateData','players','admin:reports:closedReportsUi','drawText','Vehicle\x20Stuck','cef:reports:closeReport','My\x20firearm\x20is\x20missing!','hotkeyManager','/reports/list','uimanager','browserDestroy','cancelReportReminder','add','totalled','REPORTS\x20PENDING\x20EXCESS\x20OF\x2020\x20MINUTES','isOpened','admin:reports:updateReports','staff','playSoundFrontend','Beep_Red','graphics','addUi','admin:reports:closeReport','assignedTo','Reload\x20Tattoos','removeUi','player:reports:autoScriptFail','player:reports:closeReportCreate','bind','reports','player:reports:autoScriptSuccess','tattoos','call','player:reports:openReportCreate','parking','callRemote','reports.menuState','chat','admin:reports:openReportsList','hud','No\x20EMS\x20on\x20duty','admin:reports:takeReport','browserCreate','Staff_Open_Reports','cef:reports:createDMReport','push','Fell\x20through\x20the\x20floor\x20/\x20wrong\x20dimension\x20/\x20no\x20icons\x20on\x20map','keybinding','ems','reports.text','cef:reports:closeReportsList','reports.allReports','admin:reports:toggleReportsScreen','firearm','player:reports:autoscript:','admin:reports:attemptOpen','getVariable','reports.autoScriptOptions','getKey'];(function(_0x247b00,_0x29dcec){const _0x2ff187=function(_0x34aac8){while(--_0x34aac8){_0x247b00['push'](_0x247b00['shift']());}};_0x2ff187(++_0x29dcec);}(a160_0x29dc,0xfd));const a160_0x2ff1=function(_0x247b00,_0x29dcec){_0x247b00=_0x247b00-0x0;let _0x2ff187=a160_0x29dc[_0x247b00];return _0x2ff187;};let updateTime=0x0;let updateTimer=null;let lastTimeSoundPlayed=null;let displayScreenText=![];let cancelReportReminder;mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x46')](a160_0x2ff1('0x16'),_0x143797=>{if(!client[a160_0x2ff1('0x43')]['isOpened'](a160_0x2ff1('0xd'))){mp['events'][a160_0x2ff1('0x10')](a160_0x2ff1('0x1a'),a160_0x2ff1('0xd'),a160_0x2ff1('0x42'),!![],!![]);mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),a160_0x2ff1('0xd'),a160_0x2ff1('0x23'),_0x143797,!![]);client[a160_0x2ff1('0x43')][a160_0x2ff1('0x5')]('reports');mp['events'][a160_0x2ff1('0x13')](a160_0x2ff1('0x2b'));}});mp['events']['add'](a160_0x2ff1('0x0'),_0x33d6df=>{if(client[a160_0x2ff1('0x43')][a160_0x2ff1('0x49')](a160_0x2ff1('0xd'))){mp['events'][a160_0x2ff1('0x10')]('browserUpdateData','reports',a160_0x2ff1('0x23'),_0x33d6df,!![]);}});mp[a160_0x2ff1('0x35')]['add'](a160_0x2ff1('0x11'),()=>{if(!client['uimanager']['isOpened'](a160_0x2ff1('0xd'))){let _0x1ed30e=[{'fancyName':a160_0x2ff1('0x32'),'event':a160_0x2ff1('0x12')},{'fancyName':'Car\x20totalled','event':a160_0x2ff1('0x47')},{'fancyName':a160_0x2ff1('0x3e'),'event':'flipped'},{'fancyName':a160_0x2ff1('0x1e'),'event':'dimension'},{'fancyName':a160_0x2ff1('0x40'),'event':a160_0x2ff1('0x25')},{'fancyName':a160_0x2ff1('0x18'),'event':a160_0x2ff1('0x20')},{'fancyName':'I\x20was\x20DM\x27ed\x20/\x20VDM\x27ed!','event':'dm'},{'fancyName':'Staff/Human\x20Support','event':a160_0x2ff1('0x1')},{'fancyName':a160_0x2ff1('0x8'),'event':a160_0x2ff1('0xf')}];mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x1a'),'reports',a160_0x2ff1('0x39'),!![],!![]);mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),'reports',a160_0x2ff1('0x14'),0x1,!![]);mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),a160_0x2ff1('0xd'),a160_0x2ff1('0x29'),JSON['stringify'](_0x1ed30e),!![]);client[a160_0x2ff1('0x43')][a160_0x2ff1('0x5')](a160_0x2ff1('0xd'));}});mp[a160_0x2ff1('0x35')]['add'](a160_0x2ff1('0x22'),()=>{if(client['uimanager'][a160_0x2ff1('0x49')]('reports')){mp['events'][a160_0x2ff1('0x10')](a160_0x2ff1('0x44'),'reports');client['uimanager'][a160_0x2ff1('0x9')](a160_0x2ff1('0xd'));mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x13')](a160_0x2ff1('0x3c'));}});mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x46')](a160_0x2ff1('0xb'),()=>{if(client[a160_0x2ff1('0x43')]['isOpened'](a160_0x2ff1('0xd'))){mp['events'][a160_0x2ff1('0x10')](a160_0x2ff1('0x44'),a160_0x2ff1('0xd'));client[a160_0x2ff1('0x43')][a160_0x2ff1('0x9')](a160_0x2ff1('0xd'));}});mp['events'][a160_0x2ff1('0x46')](a160_0x2ff1('0x31'),_0x14ef01=>{mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')]('browserUpdateData','reports','reports.menuState',0x2,!![]);mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x13')](a160_0x2ff1('0x38'),_0x14ef01);});mp['events']['add'](a160_0x2ff1('0x1c'),_0x1e307a=>{mp['events'][a160_0x2ff1('0x10')]('browserUpdateData','reports','reports.menuState',0x2,!![]);mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x13')](a160_0x2ff1('0x38'),_0x1e307a,!![]);});mp[a160_0x2ff1('0x35')]['add'](a160_0x2ff1('0x34'),_0x4fb3a2=>{mp['events'][a160_0x2ff1('0x13')](a160_0x2ff1('0x19'),_0x4fb3a2);});mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x46')](a160_0x2ff1('0x3f'),_0x47391d=>{mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x13')](a160_0x2ff1('0x6'),_0x47391d);});mp['events']['add'](a160_0x2ff1('0xb'),()=>{if(client[a160_0x2ff1('0x43')][a160_0x2ff1('0x49')](a160_0x2ff1('0xd'))){mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x44'),'reports');client[a160_0x2ff1('0x43')][a160_0x2ff1('0x9')]('reports');}});mp['events']['add'](a160_0x2ff1('0x2c'),_0x7e22bc=>{if(_0x7e22bc<=0x0){clearInterval(updateTimer);if(client[a160_0x2ff1('0x43')]['isOpened'](a160_0x2ff1('0x17')))mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),'hud',a160_0x2ff1('0x33'),0x0,![]);return;}updateTime=_0x7e22bc;if(client[a160_0x2ff1('0x43')][a160_0x2ff1('0x49')](a160_0x2ff1('0x17')))mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),a160_0x2ff1('0x17'),'hud.pendingReports',updateTime,![]);});mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x46')]('admin:reports:playBeepSound',_0x2b173f=>{if(_0x2b173f>=0x258){if(lastTimeSoundPlayed==null){lastTimeSoundPlayed=_0x2b173f;mp['game']['audio']['playSoundFrontend'](-0x1,a160_0x2ff1('0x3'),a160_0x2ff1('0x2d'),!![]);}if(_0x2b173f-lastTimeSoundPlayed>=0x3c){lastTimeSoundPlayed=_0x2b173f;mp[a160_0x2ff1('0x37')][a160_0x2ff1('0x30')][a160_0x2ff1('0x2')](-0x1,a160_0x2ff1('0x3'),a160_0x2ff1('0x2d'),!![]);}}});mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x46')](a160_0x2ff1('0x24'),_0x2673b4=>{displayScreenText=_0x2673b4;});client[a160_0x2ff1('0x1f')][a160_0x2ff1('0xc')](client[a160_0x2ff1('0x41')][a160_0x2ff1('0x2a')](a160_0x2ff1('0x1b')),()=>{if(mp[a160_0x2ff1('0x3b')]['local'][a160_0x2ff1('0x28')]('isTyping'))return;mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x13')](a160_0x2ff1('0x27'));});mp['events'][a160_0x2ff1('0x46')]('render',()=>{if(displayScreenText){mp[a160_0x2ff1('0x37')][a160_0x2ff1('0x4')][a160_0x2ff1('0x3d')](a160_0x2ff1('0x48'),[0.5,0.005],{'font':0x2,'color':[0xc0,0x0,0x0,0xb9],'scale':[1.2,1.2],'outline':!![]});}});mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x46')]('player:reports:triggerAutoScript',_0x26a9f6=>{mp['events'][a160_0x2ff1('0x13')](a160_0x2ff1('0x26')+_0x26a9f6);});mp[a160_0x2ff1('0x35')]['add'](a160_0x2ff1('0xe'),_0x3933b7=>{mp['events'][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),a160_0x2ff1('0xd'),a160_0x2ff1('0x14'),0x4,!![]);mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),'reports','reports.text',_0x3933b7);});mp['events'][a160_0x2ff1('0x46')](a160_0x2ff1('0xa'),_0x30fe06=>{mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')]('browserUpdateData',a160_0x2ff1('0xd'),a160_0x2ff1('0x14'),0x5,!![]);mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x10')](a160_0x2ff1('0x3a'),'reports',a160_0x2ff1('0x21'),_0x30fe06);});mp[a160_0x2ff1('0x35')][a160_0x2ff1('0x46')](a160_0x2ff1('0x45'),_0x266490=>{if(_0x266490){cancelReportReminder=setInterval(()=>{let _0x17fcc7=mp[a160_0x2ff1('0x3b')][a160_0x2ff1('0x2e')];if(!_0x17fcc7[a160_0x2ff1('0x28')](a160_0x2ff1('0x36'))||_0x17fcc7[a160_0x2ff1('0x28')](a160_0x2ff1('0x36'))==null)return clearInterval(cancelReportReminder);if(_0x17fcc7['getVariable'](a160_0x2ff1('0x36'))[a160_0x2ff1('0x7')]==null){mp[a160_0x2ff1('0x2f')][a160_0x2ff1('0x15')][a160_0x2ff1('0x1d')]('Do\x20you\x20still\x20need\x20support?\x20If\x20not\x20use\x20/cancelreport\x20to\x20close\x20your\x20request.\x20Staff\x20will\x20be\x20with\x20you\x20as\x20soon\x20as\x20possible,\x20we\x20apologize\x20for\x20the\x20wait');}},0x2bf20);}else{if(cancelReportReminder)clearInterval(cancelReportReminder);}});
}