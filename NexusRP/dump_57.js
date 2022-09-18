{
mp.events.add('CityHall:Npc:ChangName:Wallet',()=>{
    ChangeName(true);
});
mp.events.add('CityHall:Npc:ChangeName:Bank',()=>{
    ChangeName(false);
});

function ChangeName(IsWallet){
    mp.events.call('NPCDialogue.End');
    Nexus.callRemote('Customization:Wallet:ChangeName',IsWallet);
}

mp.events.add('EMS:Npc:ChangCustom:Wallet',()=>{
    ChangCustom(true);
});
mp.events.add('EMS:Npc:ChangCustom:Bank',()=>{
    ChangCustom(false);
});
function ChangCustom(IsWallet){
    mp.events.call('NPCDialogue.End');
    Nexus.callRemote('Customization:Wallet:ChangeCustomization',IsWallet);
}
//NPCDialogue.End
}