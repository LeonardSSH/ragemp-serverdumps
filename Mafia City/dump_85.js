{
const a101_0x4e40=['openInventoryUI','playerIsSearchingInventory','cefInventoryMoveAllFromAlt','updateInventoryUIStash','inventory.factoryInv','cursor','players','inventory.isFrisked','browserUpdateData','playerUseInventoryItem','callRemote','cefInventoryFocus','updateInventoryUIVehicle','add','events','frisked','exists','updateInventoryUIGround','Please\x20enter\x20the\x20amount\x20you\x27d\x20like\x20to\x20move','Close_Inventory','updateInventoryUIIdentification','visible','disableControlAction','inventory.isVeh','setCollision','cefGetInvItems','cefInventoryBlur','invoke','warehouse','stash','updateInventoryUIFriskedBag','friskedbag','/inventory','factory','getInput','inventory.playerInv','updateInventoryUIFriskedIdentification','druglab','property','INPUT','friskedidentification','playerMoveItemFromAlt','Open_Inventory','inventory.altCur','inventory.altInv','reloadInventory','render','playerOpenInventory','uimanager','cefInventoryMoveItemToAlt','browserCreate','playerMoveItemToAlt','isOpened','nocollide','keybinding','updateInventoryUIFactory','call','updateInventoryUIFriskedKeys','identification','inventoryUpdateQuitJob','playerRequestAltInv','vehicle','updateInventoryUIOtherPlayer','updateInventoryUIBag','inventory.drugLabInv','removeUi','inventory','getIsTaskActive','inventory.playerCur','game','browserDestroy','Inventory_Toggle_Stack_Move','objects','cefInventoryUseItem','runningCancellableAction','ignoreEscape','bag','inventory.hasBag','inventory.hasFriskedBag','inventory.curInv','keys','checkFriskedDistance','isFalling','ground','None','controls','cefplayerQuitJob','updateInventoryUIDrugLab','inventory.altMax','addUi','inventory.hasStash','hotkeyManager','updateInventoryUI','startFriskedDistanceCheck','updateInventoryUIWarehouse','inventory.playerMax','getVariable','getKey','bind','0xDCCFD3F106C36AB4','friskedkeys','gui','cefInventoryClose'];(function(_0x5546d3,_0x4e400d){const _0x4377e3=function(_0x4327fc){while(--_0x4327fc){_0x5546d3['push'](_0x5546d3['shift']());}};_0x4377e3(++_0x4e400d);}(a101_0x4e40,0x1ca));const a101_0x4377=function(_0x5546d3,_0x4e400d){_0x5546d3=_0x5546d3-0x0;let _0x4377e3=a101_0x4e40[_0x5546d3];return _0x4377e3;};client[a101_0x4377('0x8')]['bind'](client['hotkeyManager']['getKey'](a101_0x4377('0x63')),()=>{if(!client[a101_0x4377('0x2')]['isBlockingButtons']()&&!client[a101_0x4377('0x2')][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp['events'][a101_0x4377('0x43')](a101_0x4377('0x1'));}else if(client[a101_0x4377('0x2')]['isOpened'](a101_0x4377('0x14'))&&!client[a101_0x4377('0x3a')]){closeInventory();}});client[a101_0x4377('0x8')][a101_0x4377('0x34')](client[a101_0x4377('0x2d')]['getKey']('Close_Inventory'),closeInventory);client['ignoreEscape']=![];mp['events']['add'](a101_0x4377('0x0'),()=>{if(client[a101_0x4377('0x2')][a101_0x4377('0x6')](a101_0x4377('0x14'))||client[a101_0x4377('0x1c')]||client[a101_0x4377('0x1d')]){ignoreEscape=!![];mp[a101_0x4377('0x17')][a101_0x4377('0x27')][a101_0x4377('0x4f')](0xd,0xc8,!![]);}});client[a101_0x4377('0x8')][a101_0x4377('0x34')](client['hotkeyManager'][a101_0x4377('0x33')](a101_0x4377('0x4c')),function(){if(client[a101_0x4377('0x1d')])client[a101_0x4377('0x1d')]=![];});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x39'),(_0x2217fe,_0x1e2dcd,_0x48bc5d,_0x228a3f,_0x4f4e90,_0x1e2128,_0x450af1,_0x332ca3,_0x36f2e3,_0x575847,_0xf5934,_0x46fd4b)=>{openInventory();mp['events']['call'](a101_0x4377('0x41'),'inventory',a101_0x4377('0x16'),_0x2217fe,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.playerMax',_0x1e2dcd,!![]);mp['events'][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x64'),0x0,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x2a'),0x0,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.data',_0x48bc5d,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x50'),_0x228a3f,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x1f'),_0x450af1,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.isProp',_0x1e2128,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x40'),_0x4f4e90,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x20'),_0x332ca3,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),'inventory',a101_0x4377('0x2c'),_0x36f2e3,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.warehouseInv',_0x46fd4b,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x3d'),_0x575847,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x12'),_0xf5934,!![]);});mp[a101_0x4377('0x47')][a101_0x4377('0x46')]('updatePlayerInv',_0x49bae7=>{mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x5c'),_0x49bae7,!![]);});mp[a101_0x4377('0x47')][a101_0x4377('0x46')]('updateAltInv',_0x156fcd=>{mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x65'),_0x156fcd,!![]);});mp['events'][a101_0x4377('0x46')](a101_0x4377('0x2e'),(_0x34d3bc,_0x46e5ad)=>{if(client['uimanager'][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x16'),_0x46e5ad,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x31'),_0x34d3bc,!![]);}});let curInv='';mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x45'),(_0x22ac83,_0x121f3b)=>{if(client[a101_0x4377('0x2')]['isOpened']('inventory')){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x22ac83,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.altMax',_0x121f3b,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x21'),a101_0x4377('0xf'),![]);curInv='vehicle';}});mp[a101_0x4377('0x47')]['add']('updateInventoryUIProperty',(_0x33e3db,_0x8ca246)=>{if(client['uimanager'][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x33e3db,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.altMax',_0x8ca246,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x21'),a101_0x4377('0x5f'),![]);curInv=a101_0x4377('0x5f');}});mp['events'][a101_0x4377('0x46')](a101_0x4377('0x30'),(_0x5be146,_0x5aeb13)=>{if(client[a101_0x4377('0x2')]['isOpened'](a101_0x4377('0x14'))){mp['events'][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x64'),_0x5be146,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x2a'),_0x5aeb13,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x21'),a101_0x4377('0x55'),![]);curInv=a101_0x4377('0x55');}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x10'),(_0x3bc56d,_0x18afec,_0x1a7a91)=>{if(client[a101_0x4377('0x2')][a101_0x4377('0x6')]('inventory')){mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),'inventory',a101_0x4377('0x64'),_0x18afec,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.altMax',_0x1a7a91,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),'inventory',a101_0x4377('0x21'),a101_0x4377('0x48'),![]);curInv=a101_0x4377('0x48');}});mp[a101_0x4377('0x47')]['add'](a101_0x4377('0x4a'),(_0xdb066,_0x59221c)=>{if(client[a101_0x4377('0x2')][a101_0x4377('0x6')]('inventory')){mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0xdb066,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x2a'),_0x59221c,!![]);mp['events'][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),'inventory.curInv',a101_0x4377('0x25'),![]);curInv='ground';}});mp[a101_0x4377('0x47')]['add'](a101_0x4377('0x11'),(_0x50f287,_0x1cfbc9)=>{if(client[a101_0x4377('0x2')][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x50f287,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x2a'),_0x1cfbc9,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x21'),a101_0x4377('0x1e'),![]);curInv=a101_0x4377('0x1e');}});mp[a101_0x4377('0x47')]['add']('updateInventoryUIKeys',(_0xb86670,_0x530cbb)=>{if(client['uimanager'][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.altCur',_0xb86670,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x2a'),_0x530cbb,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.curInv',a101_0x4377('0x22'),![]);curInv=a101_0x4377('0x22');}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x4d'),(_0x1abd20,_0x4ac6f4)=>{if(client[a101_0x4377('0x2')]['isOpened']('inventory')){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x1abd20,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x2a'),_0x4ac6f4,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x21'),a101_0x4377('0xc'),![]);curInv='keys';}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x57'),(_0x54d313,_0x59fb96)=>{if(client[a101_0x4377('0x2')]['isOpened'](a101_0x4377('0x14'))){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x54d313,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.altMax',_0x59fb96,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x21'),'friskedbag',![]);curInv=a101_0x4377('0x58');}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0xb'),(_0x244a34,_0x218705)=>{if(client[a101_0x4377('0x2')][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x244a34,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x2a'),_0x218705,!![]);mp[a101_0x4377('0x47')]['call']('browserUpdateData','inventory',a101_0x4377('0x21'),'friskedkeys',![]);curInv=a101_0x4377('0x36');}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x5d'),(_0x334e51,_0x5e3e30)=>{if(client[a101_0x4377('0x2')]['isOpened']('inventory')){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x334e51,!![]);mp['events'][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x2a'),_0x5e3e30,!![]);mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x21'),a101_0x4377('0x61'),![]);curInv=a101_0x4377('0x61');}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x9'),(_0x3b9173,_0x10717a)=>{if(client['uimanager'][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp[a101_0x4377('0x47')]['call']('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x64'),_0x3b9173,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x2a'),_0x10717a,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory','inventory.curInv',a101_0x4377('0x5a'),![]);curInv=a101_0x4377('0x5a');}});mp[a101_0x4377('0x47')]['add'](a101_0x4377('0x3c'),(_0x4382a0,_0x4c3731)=>{if(client['uimanager'][a101_0x4377('0x6')](a101_0x4377('0x14'))){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x64'),_0x4382a0,!![]);mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.altMax',_0x4c3731,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),'inventory',a101_0x4377('0x21'),a101_0x4377('0x56'),![]);curInv='stash';}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x29'),(_0x593bc9,_0x2d56b4)=>{if(client['uimanager'][a101_0x4377('0x6')]('inventory')){mp[a101_0x4377('0x47')][a101_0x4377('0xa')]('browserUpdateData',a101_0x4377('0x14'),a101_0x4377('0x64'),_0x593bc9,!![]);mp['events']['call'](a101_0x4377('0x41'),'inventory',a101_0x4377('0x2a'),_0x2d56b4,!![]);mp['events'][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),a101_0x4377('0x21'),a101_0x4377('0x5e'),![]);curInv=a101_0x4377('0x5e');}});mp['events'][a101_0x4377('0x46')](a101_0x4377('0x38'),()=>{closeInventory();});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x44'),()=>{client['playerIsSearchingInventory']=!![];});mp['events']['add'](a101_0x4377('0x53'),()=>{client[a101_0x4377('0x3a')]=![];});mp['events'][a101_0x4377('0x46')](a101_0x4377('0x1b'),_0x165f63=>{if(!mp[a101_0x4377('0x3f')]['local'][a101_0x4377('0x24')]()){if(mp[a101_0x4377('0x3f')]['local'][a101_0x4377('0xf')]&&mp[a101_0x4377('0x3f')]['local'][a101_0x4377('0x15')](0x2)!=0x1)return mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0x42'),_0x165f63);if(mp[a101_0x4377('0x17')][a101_0x4377('0x54')](a101_0x4377('0x35'),mp[a101_0x4377('0x3f')]['local'])!=0x1)return;mp['events']['callRemote']('playerUseInventoryItem',_0x165f63);}});let manualMove=![];client[a101_0x4377('0x8')][a101_0x4377('0x34')](client['hotkeyManager']['getKey'](a101_0x4377('0x19')),()=>{manualMove=!![];});client[a101_0x4377('0x8')]['bind'](client['hotkeyManager'][a101_0x4377('0x33')]('Inventory_Toggle_Stack_Move'),()=>{manualMove=![];},!![]);mp[a101_0x4377('0x47')]['add']('cefInventoryMoveItemFromAlt',(_0x134e49,_0x120e39)=>{if(manualMove){mp[a101_0x4377('0x17')]['ui'][a101_0x4377('0x5b')](a101_0x4377('0x60'),[a101_0x4377('0x4b')],(_0x2ce6f8,_0x266137)=>{if(_0x2ce6f8){mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0x66'),_0x120e39);return;}if(isNaN(parseInt(_0x266137[0x0]))||parseInt(_0x266137[0x0])==0x0){mp[a101_0x4377('0x47')][a101_0x4377('0x43')]('reloadInventory',_0x120e39);return;}mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0x62'),_0x134e49,_0x120e39,parseInt(_0x266137[0x0]));mp[a101_0x4377('0x37')][a101_0x4377('0x3e')][a101_0x4377('0x4e')]=!![];});}else{mp['events'][a101_0x4377('0x43')](a101_0x4377('0x62'),_0x134e49,_0x120e39,0x1);}});mp['events']['add']('cefInventoryMoveAllToAlt',_0x2127fa=>{mp['events']['callRemote']('playerMoveAllToAlt',_0x2127fa);});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x3b'),_0x55674c=>{mp[a101_0x4377('0x47')][a101_0x4377('0x43')]('playerMoveAllFromAlt',_0x55674c);});mp['events'][a101_0x4377('0x46')](a101_0x4377('0x3'),(_0x79949,_0x3ba0fe)=>{if(manualMove){mp['game']['ui'][a101_0x4377('0x5b')](a101_0x4377('0x60'),[a101_0x4377('0x4b')],(_0x2299ad,_0x485581)=>{if(_0x2299ad){mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0x66'),_0x3ba0fe);return;}if(isNaN(parseInt(_0x485581[0x0]))||parseInt(_0x485581[0x0])==0x0){mp[a101_0x4377('0x47')]['callRemote'](a101_0x4377('0x66'),_0x3ba0fe);return;}mp[a101_0x4377('0x47')]['callRemote'](a101_0x4377('0x5'),_0x79949,_0x3ba0fe,parseInt(_0x485581[0x0]));mp[a101_0x4377('0x37')][a101_0x4377('0x3e')][a101_0x4377('0x4e')]=!![];});}else{mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0x5'),_0x79949,_0x3ba0fe,0x1);}});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x52'),_0x355321=>{mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0xe'),_0x355321);});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x66'),_0x3d0cbd=>{mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0x66'),_0x3d0cbd);});mp[a101_0x4377('0x47')][a101_0x4377('0x46')](a101_0x4377('0x28'),_0x50e203=>{mp[a101_0x4377('0x47')][a101_0x4377('0x43')]('playerQuitJob',_0x50e203);});mp[a101_0x4377('0x47')]['add'](a101_0x4377('0xd'),_0x193e82=>{if(_0x193e82==0x1){mp[a101_0x4377('0x47')][a101_0x4377('0xa')](a101_0x4377('0x41'),a101_0x4377('0x14'),'inventory.data.job1',a101_0x4377('0x26'),![]);}else if(_0x193e82==0x2){mp['events']['call'](a101_0x4377('0x41'),'inventory','inventory.data.job2',a101_0x4377('0x26'),![]);}});function closeInventory(){if(client[a101_0x4377('0x2')][a101_0x4377('0x6')](a101_0x4377('0x14'))&&!client[a101_0x4377('0x3a')]){mp[a101_0x4377('0x47')]['call'](a101_0x4377('0x18'),a101_0x4377('0x14'));mp[a101_0x4377('0x37')][a101_0x4377('0x3e')]['visible']=![];mp[a101_0x4377('0x47')][a101_0x4377('0x43')]('playerCloseInventory',curInv);client[a101_0x4377('0x2')][a101_0x4377('0x13')]('inventory');if(friskedDistanceCheckInterval!=null){clearInterval(friskedDistanceCheckInterval);friskedDistanceCheckInterval=null;}}}function openInventory(){if(!client[a101_0x4377('0x2')][a101_0x4377('0x6')]('inventory')){client[a101_0x4377('0x3a')]=![];mp['events']['call'](a101_0x4377('0x4'),a101_0x4377('0x14'),a101_0x4377('0x59'),!![],!![]);mp[a101_0x4377('0x37')][a101_0x4377('0x3e')][a101_0x4377('0x4e')]=!![];client[a101_0x4377('0x2')][a101_0x4377('0x2b')](a101_0x4377('0x14'));}}let friskedDistanceCheckInterval=null;mp[a101_0x4377('0x47')]['add'](a101_0x4377('0x2f'),()=>{if(friskedDistanceCheckInterval==null){friskedDistanceCheckInterval=setInterval(()=>{mp[a101_0x4377('0x47')][a101_0x4377('0x43')](a101_0x4377('0x23'));},0x7d0);}});setInterval(()=>{mp[a101_0x4377('0x1a')]['forEach'](_0x513fc3=>{if(mp['objects'][a101_0x4377('0x49')](_0x513fc3)&&_0x513fc3!=null&&_0x513fc3[a101_0x4377('0x32')](a101_0x4377('0x7'))){_0x513fc3[a101_0x4377('0x51')](![],![]);}});},0x7d0);
}