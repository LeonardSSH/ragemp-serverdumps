{
let controls = global.ConstrolsBrowser;
let familycontrols;
var blipsFraction = [];
let showfracplayers = false;
mp.events.add('AddPlayersToList',(e)=>{
    const t = mp.players.atRemoteId(e);
    var a = mp.blips.new(1, new mp.Vector3(t.position.x, t.position.y, t.position.z), {
        color: 74,
        shortRange: false,
        dimension: 0,        
    });
    a.setAlpha(0);
    a.name = global.GetText('Член фракции');
    blipsFraction.push({
        "blip":a,
        "player":e
    })
});
mp.events.add('visiblehunters',(status)=>{
    showfracplayers = status;
})
mp.events.add('Controls:ChangeShowMembers',(e)=>{
    showfracplayers = !showfracplayers;
    let t = showfracplayers ? global.GetText("включено") : global.GetText("выключено");
    mp.events.call('Controls:SetActionValueCallBack',e,t)
    if(!showfracplayers) DisableFracBlips();
})
function DisableFracBlips() {
    try {
        for (let element of blipsFraction) {
            element.blip.setAlpha(0)
        };
    } catch { }
};
setInterval(() => {
    try {
        if (showfracplayers){
            for (let element of blipsFraction) {
                if (mp.players.exists(element.player)) {
                    if(blipsFraction.length < 0) return;
                    const t = mp.players.atRemoteId(element.player);
                    if(t.position.x != 0 && t.position.y != 0 && t.position.z != 0 )//&& mp.game.system.vdist(t.position.x, t.position.y, t.position.z,mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z) < 500)
                    {                        
                        element.blip.setAlpha(255);
                        element.blip.setPosition(new mp.Vector3(t.position.x, t.position.y, t.position.z));
                        element.blip.setCoords(new mp.Vector3(t.position.x, t.position.y, t.position.z));
                    }else{
                        DisableFracBlips();
                    }                    
                } else {
                    element.blip.destroy();
                    blipsFraction.splice(blipsFraction.indexOf(element), 1);
                }
            };
        }  
    } catch { }//
}, 500);
// setData(organizationType,organizationName){
//     this.organizationType = organizationType;
//     this.organizationName = organizationName;
//     window.organizationType = organizationType;
//     window.organizationName = organizationName;
// },
global.OpenedType = null;
mp.events.add('Constrols:OpenFractionPad', (members, count, pages, names, padtype) => {
    controls.execute(`window.locale='${global.Language}'`);
    controls.execute(`openInterface('organization')`);
    controls.execute(`controls.setData('${padtype}','${names}')`);
    OpenedType = padtype;
    global.menuOpen();
    controls.execute(`controls.openMembers(${members},${Number(count)},${Number(pages)})`)
})
mp.events.add('Controls:UpdateMembers',(members,count,pages)=>{
    if(controls != null && global.OpenedType == "fraction"){
            controls.execute(`controls.openMembers(${members},${Number(count)},${Number(pages)})`)
    }
});

mp.events.add('Controls:DeleteMember', (memberID) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:DeleteMember', memberID);
    }else{
        Nexus.callRemote('Controls:FamilyDeleteMember', memberID);
    }
})

mp.events.add('Controls:DeleteMemberCallBack',(members,count)=>{
    if (controls != null && global.OpenedType == "fraction") {
        controls.execute(`controls.members = ${members}`);
        controls.execute(`controls.membersCount = ${count}`);
    }
})
mp.events.add('Controls:SendNotify', (type, layout,msg,time) => {
    if (controls != null) {
        controls.execute(`notify(${type},${layout},"${msg}",${time})`);
    }
})
mp.events.add('Controls:DestroyBrowser',()=>{
    global.menuClose();    
    if(global.OpenedType == "fraction") controls.execute(`closeInterface()`);
    if(global.OpenedType == "family") global.familypad.execute(`closeInterface()`);
    global.OpenedType = null;
})
mp.events.add('Controls:UpdateMember', (member, types) => {
    if (controls != null && global.OpenedType == "fraction") {
            controls.execute(`controls.updateMember(${member})`);
            if (types) {
                controls.execute(`controls.route='members'`);
            }
    }
})
mp.events.add('Controls:SetMemberRank', (type, memberID) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:SetMemberRank', type, memberID);
    }else {
        Nexus.callRemote('Controls:FamilySetMemberRank', type, memberID);
    }
})


mp.events.add('Controls:EditMemberRank', (memberID) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:EditMemberRank', memberID);
    }else{
        Nexus.callRemote('Controls:FamilyEditMemberRank',memberID);
    }

})
mp.events.add('Constrols:openMemberEditor',(editableMember,shortRanks)=>{
    if (controls != null) {
        if (OpenedType == "fraction") {
            controls.execute(`controls.openMemberEditor(${editableMember},${shortRanks})`);
        }
    }
})
mp.events.add('Controls:SetMembersPage',(type,page)=>{
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:SetMembersPage', type, page)
    }else {
        Nexus.callRemote('Controls:FamilySetMembersPage',type, page)
    }
})
mp.events.add('Controls:SetMembersPageCallBack',(newMembers,page)=>{
    if(controls != null){
        if (OpenedType == "fraction") {
            controls.execute(`controls.members=${newMembers}`);
            controls.execute(`controls.membersPage=${page}`);
        }
    }
})

mp.events.add('Controls:SetNavigationTab', (route) => {
    if(OpenedType == "fraction")
    {
        Nexus.callRemote('Controls:SetNavigationTab',route)   
    }
    else
    {
        Nexus.callRemote('Controls:FamilySetNavigationTab',route)  
    }
})

mp.events.add('Controls:SetNavigationTabCallBack',(route,a,b,c)=>{
    if(controls != null){
        if (OpenedType == "fraction") {
            if (route === 'logs') {
                controls.execute(`controls.openLogs(${a},${b},${c})`);
            }
            else if (route === 'ranks') {
                controls.execute(`controls.openRanks(${a},${b})`);
            }
            else if (route === 'vehicles') {
                controls.execute(`controls.openVehicles(${a})`);
            } else if (route == 'actions') {
                let t = showfracplayers ? global.GetText("включено") : global.GetText("выключено");
                a = JSON.parse(a);
                a.find(x => x.id == "showMembers").value = t;
                a = JSON.stringify(a);
                controls.execute(`controls.openActions(${a},${b})`);
            }
        }
    }
})

mp.events.add('Controls:OrganizationMoney',(id,sum)=>{
    if(sum < 0) return;
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:OrganizationMoney', id, sum);
    }else{
        Nexus.callRemote('Controls:FamilyOrganizationMoney', id, sum);
    }

})
mp.events.add('Controls:ChangeVehicleAccess',(vehicleID)=>{
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:ChangeVehicleAccess', vehicleID)
    }else{
        Nexus.callRemote('Controls:FamilyChangeVehicleAccess', vehicleID)
    }
})
mp.events.add('Constrols:openVehicleEditor',(editableVehicle,shortRanks)=>{
    if(controls != null){
    controls.execute(`controls.openVehicleEditor(${editableVehicle},${shortRanks})`);
    }
})
mp.events.add('Controls:TrackDownVehicle', (vehicleID) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:TrackDownVehicle', vehicleID);
    } else {
        Nexus.callRemote('Controls:FamilyTrackDownVehicle', vehicleID);
    }
})
mp.events.add('Controls:VehiclesSetRank', (type, vehicleID) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote("Controls:VehiclesSetRank", type, vehicleID)
    } else {
        Nexus.callRemote("Controls:FamilyVehiclesSetRank", type, vehicleID)
    }
})
mp.events.add('Controls:UpdateVehicle',(vehicle,types)=>{
    if(controls != null && global.OpenedType == "fraction"){
        controls.execute(`controls.updateVehicle(${vehicle})`);        
        if(types){
            controls.execute(`controls.route='vehicles'`);
        }
    }
})
mp.events.add('Controls:DeleteRank', (rankId) => {
    //Nexus.callRemote('console', OpenedType)
    if (OpenedType == "fraction") {
        Nexus.callRemote("Controls:DeleteRank", rankId);
    } else {
        Nexus.callRemote("Controls:FamilyDeleteRank", rankId);
    }
})
mp.events.add('Controls:DeleteRankCallBack',(rankId)=>{
    if(controls != null && global.OpenedType == "fraction"){
        controls.execute(`controls.deleteRank(${rankId})`);
    }    
})
mp.events.add('Controls:AddRank', (rankId) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:AddRank', rankId);
    } else {
        Nexus.callRemote('Controls:FamilyAddRank', rankId);
    }
})


mp.events.add('Controls:AddRankCallBack',(newRank)=>{
    if(controls != null && global.OpenedType == "fraction"){
    controls.execute(`controls.addRank(${newRank})`);
    }
})


mp.events.add('Controls:EditRankName', (rankId) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('controls.openRankNameEditor', rankId);
    } else {
        Nexus.callRemote('controls.FamilyopenRankNameEditor', rankId);
    }
})
mp.events.add('Controls:EditRankNameCallback', (rankId) => {
    if (controls != null && global.OpenedType == "fraction") {
        controls.execute(`controls.openRankNameEditor(${rankId})`);
    }
})

mp.events.add('Controls:setRankName', (rankId, name) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:setRankName', rankId, name);
    } else {
        Nexus.callRemote('Controls:FamilysetRankName', rankId, name);
    }
})
mp.events.add('Controls:setRankNameCallBack', (rankId, rankname, date, time) => {
    if (controls != null && global.OpenedType == "fraction") {
        controls.execute(`controls.updateRankName(${rankId},'${rankname}','${date}','${time}')`);
    }
})

mp.events.add('Controls:rankChangePermissions', (rankId) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:rankChangePermissions', rankId)
    } else {
        Nexus.callRemote('Controls:FamilyrankChangePermissions', rankId)
    }
})
mp.events.add('Controls:rankChangePermissionsCallBack',(rank)=>{
    if(controls != null && global.OpenedType == "fraction"){
    controls.execute(`controls.openRanksEdit(${rank})`);
    }
})
mp.events.add('Controls:rankSetPermissions',(rankID,permissions)=>{
    if (OpenedType == "fraction") {
    Nexus.callRemote('Controls:rankSetPermissions',rankID,permissions);
    }else{
        Nexus.callRemote('Controls:FamilyrankSetPermissions',rankID,permissions);
    }
})


mp.events.add('Controls:SetActionValue', (actionID) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:SetActionValue', actionID);
    } else {
        Nexus.callRemote('Controls:FamilySetActionValue', actionID);
    }
})

mp.events.add('Controls:SetActionValueCallBack', (actionID, newValue) => {
    if (controls != null && global.OpenedType == "fraction") {
        controls.execute(`controls.updateActionValue('${actionID}','${newValue}')`);
    }
})

mp.events.add('Controls:SpawnCars', () => {
    mp.events.call('Controls:SetActionValue', 'SpawnCars')
})
mp.events.add('Controls:IssuanceAward', () => {
    mp.events.call('Controls:SetActionValue', 'IssuanceAward')
})
mp.events.add('Controls:SendAnnouncement', (announcement) => {
    if (OpenedType == "fraction") {
        Nexus.callRemote('Controls:SendAnnouncement', announcement)
    } else {
        Nexus.callRemote('Controls:FamilySendAnnouncement', announcement)
    }
})
}