global.chatActive = false;਍最氀漀戀愀氀⸀氀漀最最攀搀椀渀 㴀 昀愀氀猀攀㬀ഀഀ
global.localplayer = mp.players.local;਍最氀漀戀愀氀⸀瀀氀愀礀攀爀栀攀愀搀椀渀最 㴀 爀攀焀甀椀爀攀⠀∀⸀⼀氀椀戀⼀戀愀挀欀⼀樀猀⼀爀漀琀愀琀漀爀瀀氀愀礀攀爀⸀樀猀∀⤀㬀ഀഀ
global.ConstrolsBrowser = mp.browsers.new('http://package/systems/GLOBAL/FRONT/controls.html');਍ഀഀ
require("./FrontendSide/browser.js")਍最氀漀戀愀氀⸀氀漀愀搀䄀渀椀洀 㴀 昀甀渀挀琀椀漀渀⠀搀椀挀琀⤀ഀഀ
{਍ऀ渀攀眀 倀爀漀洀椀猀攀⠀⠀爀攀猀漀氀瘀攀Ⰰ 爀攀樀攀挀琀⤀ 㴀㸀 笀ഀഀ
਍ऀऀ挀漀渀猀琀 琀椀洀攀爀 㴀 猀攀琀䤀渀琀攀爀瘀愀氀⠀⠀⤀ 㴀㸀 笀ഀഀ
਍ऀऀऀ椀昀⠀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀栀愀猀䄀渀椀洀䐀椀挀琀䰀漀愀搀攀搀⠀搀椀挀琀⤀⤀ഀഀ
			{਍ऀऀऀऀ⼀⼀洀瀀⸀最甀椀⸀挀栀愀琀⸀瀀甀猀栀⠀怀䄀渀椀洀 ␀笀搀椀挀琀紀 栀愀猀 戀攀攀渀 氀漀愀搀攀搀℀怀⤀㬀ഀഀ
				clearInterval(timer);਍ऀऀऀऀ爀攀猀漀氀瘀攀⠀⤀㬀⼀⼀ഀഀ
			}਍ऀऀऀ攀氀猀攀ഀഀ
			{਍ऀऀऀऀ⼀⼀洀瀀⸀最甀椀⸀挀栀愀琀⸀瀀甀猀栀⠀怀䄀渀椀洀 ␀笀搀椀挀琀紀 椀猀 渀漀琀 氀漀愀搀攀搀怀⤀㬀ഀഀ
				mp.game.streaming.requestAnimDict(dict);਍ऀऀऀ紀ഀഀ
਍ऀऀ紀Ⰰ ㌀　　⤀㬀ഀഀ
	});਍紀㬀ഀഀ
਍最氀漀戀愀氀⸀一攀眀䔀瘀攀渀琀 㴀 笀ഀഀ
  callRemote: mp.events.callRemote਍紀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀刀攀洀漀琀攀 㴀 甀渀搀攀昀椀渀攀搀㬀ഀഀ
਍ഀഀ
mp.dist = (a, b, c, d, e, f) => {਍    瘀愀爀 最 㴀 䴀愀琀栀⸀瀀漀眀㬀ഀഀ
    return Math.sqrt(g(a - d, 2) + g(b - e, 2) + g(c - f, 2))਍紀㬀ഀഀ
mp.gui.execute("window.location = 'package://systems/player/HUD/FRONT/hud.html'");਍椀昀 ⠀洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最 㴀㴀 甀渀搀攀昀椀渀攀搀⤀ 笀ഀഀ
    mp.storage.data.chatcfg = {਍ऀऀ琀椀洀攀猀琀愀洀瀀㨀 　Ⰰഀഀ
		chatsize: 0,਍ऀऀ昀漀渀琀猀琀攀瀀㨀 　Ⰰഀഀ
		alpha: 1਍ऀ紀㬀ഀഀ
    mp.storage.flush();਍紀ഀഀ
mp.events.add("ManyHealth", (toggle) => {਍ऀ⼀⼀愀搀洀椀渀最洀 㴀 琀漀最最氀攀㬀ഀഀ
	localplayer.setInvincible(toggle);਍ऀ⼀⼀洀瀀⸀最愀洀攀⸀最爀愀瀀栀椀挀猀⸀渀漀琀椀昀礀⠀琀漀最最氀攀 㼀 ✀䜀䴀㨀 縀最縀䔀渀愀戀氀攀搀✀ 㨀 ✀䜀䴀㨀 縀爀縀䐀椀猀愀戀氀攀搀✀⤀㬀ഀഀ
});਍猀攀琀吀椀洀攀漀甀琀⠀昀甀渀挀琀椀漀渀 ⠀⤀ 笀 ഀഀ
    //mp.gui.execute(`newcfgss(0,${mp.storage.data.chatcfg.timestamp}); newcfg(1,${mp.storage.data.chatcfg.chatsize}); newcfg(2,${mp.storage.data.chatcfg.fontstep}); newcfg(3,${mp.storage.data.chatcfg.alpha});`);਍ऀ洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀⠀✀猀栀漀眀䠀唀䐀✀Ⰰ 昀愀氀猀攀⤀㬀 ഀഀ
}, 1000);਍ഀഀ
setInterval(function () {਍    瘀愀爀 渀愀洀攀 㴀 ⠀氀漀挀愀氀瀀氀愀礀攀爀⸀最攀琀嘀愀爀椀愀戀氀攀⠀✀刀䔀䴀伀吀䔀开䤀䐀✀⤀ 㴀㴀 甀渀搀攀昀椀渀攀搀⤀ 㼀 怀ᴀ㔄 　㈄䈄㸄䀄㠄㜄㸄㈄〄㴄怄 㨀 怀᠀㌄䀄㸄㨄 ᘀ␡笀氀漀挀愀氀瀀氀愀礀攀爀⸀最攀琀嘀愀爀椀愀戀氀攀⠀∀刀䔀䴀伀吀䔀开䤀䐀∀⤀紀怀㬀 ഀഀ
	mp.discord.update('Nexus Role Play', name);਍紀Ⰰ ㄀　　　　⤀㬀ഀഀ
਍瘀愀爀 瀀攀搀猀愀礀椀渀最 㴀 渀甀氀氀㬀ഀഀ
var pedtext = "";਍瘀愀爀 瀀攀搀琀攀砀琀㈀ 㴀 渀甀氀氀㬀ഀഀ
var pedtimer = false;਍ഀഀ
var friends = {};਍ഀഀ
var pressedraw = false;਍瘀愀爀 瀀攀渀琀氀漀愀搀攀搀 㴀 昀愀氀猀攀㬀ഀഀ
var emsloaded = false;਍⼀⼀洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀 㴀 ⠀渀愀洀攀⤀ 㴀㸀 洀瀀⸀最愀洀攀⸀椀渀瘀漀欀攀⠀∀　砀㌀䄀䌀䄀㐀䘀㜀㈀㜀䄀䌀㐀㘀　㘀䔀∀Ⰰ 渀愀洀攀⤀㬀ഀഀ
const moods = [null,"mood_aiming_1", "mood_angry_1", "mood_drunk_1", "mood_happy_1", "mood_injured_1", "mood_stressed_1"];਍猀攀琀吀椀洀攀漀甀琀⠀昀甀渀挀琀椀漀渀⠀⤀笀ഀഀ
    try{਍    瘀愀爀 愀渀椀洀氀漀愀搀攀搀 㴀 最氀漀戀愀氀⸀愀渀椀洀愀琀椀漀渀䰀椀猀琀⸀昀椀渀搀⠀砀㴀㸀砀⸀椀搀 㴀㴀 㜀⤀㬀ഀഀ
    animloaded.animations.forEach(x=>{਍        洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀砀⸀猀琀礀氀攀⤀㬀ഀഀ
    });਍    紀挀愀琀挀栀笀紀ഀഀ
},10000);਍ഀഀ
var admingm = false;਍ഀഀ
mp.game.object.doorControl(mp.game.joaat("prop_ld_bankdoors_02"), 232.6054, 214.1584, 106.4049, false, 0.0, 0.0, 0.0);਍洀瀀⸀最愀洀攀⸀漀戀樀攀挀琀⸀搀漀漀爀䌀漀渀琀爀漀氀⠀洀瀀⸀最愀洀攀⸀樀漀愀愀琀⠀∀瀀爀漀瀀开氀搀开戀愀渀欀搀漀漀爀猀开　㈀∀⤀Ⰰ ㈀㌀㄀⸀㔀　㜀㔀Ⰰ ㈀㄀㘀⸀㔀㄀㐀㠀Ⰰ ㄀　㘀⸀㐀　㐀㤀Ⰰ 昀愀氀猀攀Ⰰ 　⸀　Ⰰ 　⸀　Ⰰ 　⸀　⤀㬀ഀഀ
mp.game.audio.setAudioFlag("DisableFlightMusic", true);਍ഀഀ
global.NativeUI = require("./utils/nativeui.js");਍最氀漀戀愀氀⸀䴀攀渀甀 㴀 一愀琀椀瘀攀唀䤀⸀䴀攀渀甀㬀ഀഀ
global.UIMenuItem = NativeUI.UIMenuItem;਍最氀漀戀愀氀⸀唀䤀䴀攀渀甀䰀椀猀琀䤀琀攀洀 㴀 一愀琀椀瘀攀唀䤀⸀唀䤀䴀攀渀甀䰀椀猀琀䤀琀攀洀㬀ഀഀ
global.UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;਍最氀漀戀愀氀⸀唀䤀䴀攀渀甀匀氀椀搀攀爀䤀琀攀洀 㴀 一愀琀椀瘀攀唀䤀⸀唀䤀䴀攀渀甀匀氀椀搀攀爀䤀琀攀洀㬀ഀഀ
global.BadgeStyle = NativeUI.BadgeStyle;਍最氀漀戀愀氀⸀倀漀椀渀琀 㴀 一愀琀椀瘀攀唀䤀⸀倀漀椀渀琀㬀ഀഀ
global.ItemsCollection = NativeUI.ItemsCollection;਍最氀漀戀愀氀⸀䌀漀氀漀爀 㴀 一愀琀椀瘀攀唀䤀⸀䌀漀氀漀爀㬀ഀഀ
global.ListItem = NativeUI.ListItem;਍ഀഀ
਍猀攀琀䤀渀琀攀爀瘀愀氀⠀⠀⤀ 㴀㸀 笀ഀഀ
  mp.game.gameplay.setFadeOutAfterDeath(false);਍紀Ⰰ ㄀　　　⤀㬀ഀഀ
਍愀猀礀渀挀 昀甀渀挀琀椀漀渀 匀攀琀圀愀氀欀匀琀礀氀攀⠀攀渀琀椀琀礀Ⰰ 眀愀氀欀猀琀礀氀攀⤀ 笀ഀഀ
    try {਍        椀昀 ⠀℀眀愀氀欀猀琀礀氀攀⤀ 笀ഀഀ
            entity.resetMovementClipset(0.0);਍        紀 攀氀猀攀 笀ഀഀ
            if (!mp.game.streaming.hasClipSetLoaded(walkstyle)) {਍                洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀眀愀氀欀猀琀礀氀攀⤀㬀ഀഀ
            }਍            攀渀琀椀琀礀⸀猀攀琀䴀漀瘀攀洀攀渀琀䌀氀椀瀀猀攀琀⠀眀愀氀欀猀琀礀氀攀Ⰰ 　⸀　⤀㬀ഀഀ
        }਍    紀ഀഀ
    catch (e) {਍    紀ഀഀ
}਍ഀഀ
function SetMood(entity, mood) {਍ऀ琀爀礀 笀ഀഀ
		if (mood == null) entity.clearFacialIdleAnimOverride();਍ऀऀ攀氀猀攀 洀瀀⸀最愀洀攀⸀椀渀瘀漀欀攀⠀✀　砀䘀䘀䌀㈀㐀䈀㤀㠀㠀䈀㤀㌀㠀䈀㌀㠀✀Ⰰ 攀渀琀椀琀礀⸀栀愀渀搀氀攀Ⰰ 洀漀漀搀Ⰰ 　⤀㬀ഀഀ
	} catch (e) { }਍紀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀挀栀愀琀挀漀渀昀椀最✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀愀挀琀椀漀渀Ⰰ 洀攀猀猀愀最攀⤀ 笀ഀഀ
	switch (action) {਍ऀऀ挀愀猀攀 ✀一攀砀甀猀吀栀攀䈀攀猀琀✀㨀ഀഀ
			mp.events.call('notify', 2, 9, message, 6000);਍ऀऀ戀爀攀愀欀㬀ഀഀ
		default:਍ऀऀऀ⼀⼀ 䤀琀✀猀 攀洀瀀琀礀 㴀ᓘෞഀ
		break;਍ऀ紀ഀഀ
});਍ഀഀ
mp.events.add('setFriendList', function (friendlist) {਍ऀ昀爀椀攀渀搀猀 㴀 笀紀㬀ഀഀ
	friendlist.forEach(friend => {਍ऀऀ昀爀椀攀渀搀猀嬀昀爀椀攀渀搀崀 㴀 琀爀甀攀㬀ഀഀ
    });਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀琀䌀氀椀攀渀琀刀漀琀愀琀椀漀渀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀瀀氀愀礀攀爀Ⰰ 爀漀琀猀⤀ 笀ഀഀ
	if (player !== undefined && player != null && localplayer != player) player.setRotation(0, 0, rots, 2, true);਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀琀圀漀爀氀搀䰀椀最栀琀猀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀琀漀最最氀攀⤀ 笀ഀഀ
	try {਍ऀऀ洀瀀⸀最愀洀攀⸀最爀愀瀀栀椀挀猀⸀爀攀猀攀琀䰀椀最栀琀猀匀琀愀琀攀⠀⤀㬀ഀഀ
		for (let i = 0; i <= 16; i++) {਍ऀऀऀ椀昀⠀椀 ℀㴀 㘀 ☀☀ 椀 ℀㴀 㜀⤀ 洀瀀⸀最愀洀攀⸀最爀愀瀀栀椀挀猀⸀猀攀琀䰀椀最栀琀猀匀琀愀琀攀⠀椀Ⰰ 琀漀最最氀攀⤀㬀ഀഀ
		}਍ऀ紀 挀愀琀挀栀 笀 紀ഀഀ
});਍ഀഀ
mp.events.add('setDoorLocked', function (model, x, y, z, locked, angle) {਍    洀瀀⸀最愀洀攀⸀漀戀樀攀挀琀⸀搀漀漀爀䌀漀渀琀爀漀氀⠀洀漀搀攀氀Ⰰ 砀Ⰰ 礀Ⰰ 稀Ⰰ 氀漀挀欀攀搀Ⰰ 　Ⰰ 　Ⰰ 愀渀最氀攀⤀㬀ഀഀ
});਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀挀栀愀渀最攀䌀栀愀琀匀琀愀琀攀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀猀琀愀琀攀⤀ 笀ഀഀ
    chatActive = state;਍紀⤀㬀ഀഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀倀爀攀猀猀䔀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀琀漀最最氀攀⤀ 笀ഀഀ
   mp.gui.execute(`HUD.buttonHold=${toggle}`)਍紀⤀㬀ഀഀ
mp.events.add('InPlant', function (toggle) {਍    洀瀀⸀最甀椀⸀攀砀攀挀甀琀攀⠀怀䠀唀䐀⸀椀渀倀氀愀渀琀㴀␀笀琀漀最最氀攀紀怀⤀ഀഀ
 });਍⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ഀഀ
require('./utils/locale/language.js');਍爀攀焀甀椀爀攀⠀✀甀琀椀氀猀⼀欀攀礀猀⸀樀猀✀⤀㬀 ഀഀ
require('./utils/checkpoints.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀愀昀欀猀礀猀琀攀洀⸀樀猀✀⤀㬀ഀഀ
require('./utils/main.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀挀漀渀昀椀最猀⼀瀀攀搀猀⸀樀猀✀⤀㬀 ഀഀ
require('./configs/animList.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀挀漀渀昀椀最猀⼀戀愀挀欀瀀愀挀欀猀⸀樀猀✀⤀㬀ഀഀ
require('./configs/validtorsos.js');਍⼀⼀爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀攀渀琀攀爀瘀攀栀椀挀氀攀⸀樀猀✀⤀㬀ഀഀ
਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀愀搀洀椀渀匀礀猀⼀愀搀洀攀猀瀀⸀樀猀✀⤀㬀 ഀഀ
require('./systems/adminSys/AdminPanel/BACK/adminpanel.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀愀搀洀椀渀匀礀猀⼀昀氀礀⸀樀猀✀⤀㬀 ഀഀ
require('./systems/adminSys/index.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀愀搀洀椀渀匀礀猀⼀猀瀀洀攀渀甀⸀樀猀✀⤀㬀 ഀഀ
require('./systems/adminSys/wtp.js'); ਍ഀഀ
require('./utils/sync/basicsync.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀猀礀渀挀⼀漀戀樀攀挀琀猀礀渀挀⸀樀猀✀⤀㬀 ഀഀ
require('./utils/sync/radiosync.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀椀渀琀攀爀愀挀琀椀漀渀⸀樀猀✀⤀㬀ഀഀ
require('./utils/sync/vehiclesync.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀瘀漀椀挀攀⸀樀猀✀⤀㬀 ഀഀ
require('./systems/houses/info/BACK/houses.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀氀椀昀琀⼀䈀䄀䌀䬀⼀氀椀昀琀⸀樀猀✀⤀㬀ഀഀ
require('./systems/petrol/BACK/petrol.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀戀甀猀椀渀攀猀猀⼀椀渀昀漀⼀䈀䄀䌀䬀⼀戀椀稀椀渀昀漀⸀樀猀✀⤀㬀ഀഀ
require('./systems/business/tablet/BACK/businessTablet.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀戀愀渀欀⼀䈀䄀䌀䬀⼀䈀愀渀欀⸀樀猀✀⤀㬀ഀഀ
require('./systems/atm/BACK/atm.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀伀䰀䐀开䜀䰀伀䈀䄀䰀⼀䈀䄀䌀䬀⼀洀攀渀甀猀⸀樀猀✀⤀㬀ഀഀ
require('./systems/reportSystem/BACK/report.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀挀愀猀椀渀漀⼀挀栀椀瀀匀栀漀瀀⼀䈀䄀䌀䬀⼀挀栀椀瀀匀栀漀瀀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/News/adverts/BACK/adverts.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀栀漀甀猀攀猀⼀爀攀愀氀琀漀爀⼀䈀䄀䌀䬀⼀爀攀愀氀琀漀爀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/Goverment/Army/clothesMenu/BACK/armyClothesMenu.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀猀栀漀瀀猀⼀猀栀漀瀀㈀㐀⼀䈀䄀䌀䬀⼀猀栀漀瀀㈀㐀⸀樀猀✀⤀㬀ഀഀ
require('./systems/jobs/fishSell/BACK/fishsellshop.js');਍⼀⼀爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀樀漀戀猀⼀昀椀猀栀攀爀洀愀渀⼀䈀䄀䌀䬀⼀昀椀猀栀攀爀洀愀渀⸀樀猀✀⤀㬀ഀഀ
require('./systems/shops/clothesShop/BACK/clothShop.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀猀栀漀瀀猀⼀最氀漀戀愀氀猀栀漀瀀⼀最氀漀戀愀氀猀栀漀瀀⸀樀猀✀⤀㬀ഀഀ
require('./systems/shops/globalshop/QuestShop.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀瀀氀愀礀攀爀⼀戀甀礀吀爀愀渀猀瀀漀爀琀䰀椀挀攀渀猀攀⼀䈀䄀䌀䬀⼀戀甀礀吀爀愀渀猀瀀漀爀琀䰀椀挀攀渀猀攀⸀樀猀✀⤀㬀ഀഀ
//਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀瀀氀愀礀攀爀⼀椀渀瘀攀渀琀漀爀礀⼀䈀䄀䌀䬀⼀椀渀瘀攀渀琀漀爀礀⸀樀猀✀⤀㬀ഀഀ
require('./systems/login/characterEditor/BACK/character.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀瀀氀愀礀攀爀⼀䠀唀䐀⼀䈀䄀䌀䬀⼀爀栀漀洀戀甀猀䴀攀渀甀⸀樀猀✀⤀㬀ഀഀ
require('./systems/player/MarketMenu/BACK/index.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀瀀氀愀礀攀爀⼀昀椀渀最攀爀⸀樀猀✀⤀㬀ഀഀ
require('./systems/player/gamertag.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀昀爀愀挀琀椀漀渀猀⼀䜀漀瘀攀爀洀攀渀琀⼀愀爀爀攀猀琀匀礀猀琀攀洀⼀䈀䄀䌀䬀⼀愀爀爀攀猀琀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/Goverment/SearchPlayer/search.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀昀爀愀挀琀椀漀渀猀⼀䜀漀瘀攀爀洀攀渀琀⼀一倀䌀⼀洀愀椀渀渀瀀挀⸀樀猀✀⤀㬀ഀഀ
require('./systems/player/HUD/BACK/hud.js');਍⼀⼀爀攀焀甀椀爀攀⠀✀⸀⼀瀀氀愀礀攀爀⼀瀀愀搀⸀樀猀✀⤀㬀ഀഀ
require('./systems/player/phone/BACK/phone.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀昀愀洀椀氀椀攀猀⼀挀爀攀愀琀椀漀渀⼀䈀䄀䌀䬀⼀昀愀洀椀氀椀攀猀⸀樀猀✀⤀㬀ഀഀ
require('./systems/player/animations/BACK/animation.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀瀀氀愀礀攀爀⼀洀攀渀甀䘀㄀　⼀䈀䄀䌀䬀⼀洀攀渀甀䘀㄀　⸀樀猀✀⤀㬀ഀഀ
require('./systems/player/documents/BACK/license.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀昀爀愀挀琀椀漀渀猀⼀琀愀戀氀攀琀⼀䈀䄀䌀䬀⼀䌀漀渀琀爀漀氀猀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/tablet/BACK/houseTablet.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀昀爀愀挀琀椀漀渀猀⼀琀愀戀氀攀琀⼀䈀䄀䌀䬀⼀䜀漀瘀倀愀搀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/tablet/BACK/FamilyPad.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀樀漀戀猀⼀琀愀砀椀⼀䈀䄀䌀䬀⼀琀愀砀椀⸀樀猀✀⤀㬀ഀഀ
require('./systems/jobs/trasher/BACK/trasherGame.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀樀漀戀猀⼀攀氀攀挀琀爀椀挀⼀䈀䄀䌀䬀⼀攀氀攀挀琀爀椀挀⸀樀猀✀⤀㬀ഀഀ
require('./systems/jobs/trucker/BACK/trucker.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀樀漀戀猀⼀戀甀椀氀搀攀爀⼀䈀䄀䌀䬀⼀戀甀椀氀搀攀爀⸀樀猀✀⤀㬀ഀഀ
require('./systems/jobs/lumberjack/BACK/lumberjack.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀樀漀戀猀⼀昀愀爀洀⼀䈀䄀䌀䬀⼀昀愀爀洀⸀樀猀✀⤀㬀ഀഀ
require('./systems/vehicle/Info/BACK/info.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀挀漀渀昀椀最猀⼀戀愀爀戀攀爀倀爀椀挀攀猀⸀樀猀✀⤀㬀ഀഀ
//require('./actionColshape.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀渀愀琀椀瘀攀猀⸀樀猀✀⤀㬀ഀഀ
//require('./casino_slots_c.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀挀漀渀昀椀最猀⼀琀愀琀琀漀漀⸀樀猀✀⤀㬀ഀഀ
//require('./indexca.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀琀椀洀攀爀⸀樀猀✀⤀㬀ഀഀ
require('./configs/tuning.js');਍⼀⼀爀攀焀甀椀爀攀⠀✀⸀⼀爀漀甀氀攀琀琀攀⸀樀猀✀⤀㬀ഀഀ
//require('./luckywheel.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀挀愀猀椀渀漀⼀爀漀甀氀攀琀琀攀⼀䈀䄀䌀䬀⼀爀漀甀氀攀琀琀攀⸀樀猀✀⤀㬀ഀഀ
//require('./state/animals.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀攀氀攀挀琀椀漀渀猀⸀樀猀✀⤀㬀ഀഀ
require('./utils/environment.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀一伀吀开䤀䴀倀䰀䔀䴀䔀一吀䔀䐀⼀昀甀爀渀椀琀甀爀攀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/Crime/gangwars/BACK/gangzones');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀琀甀渀椀渀最⼀䈀䄀䌀䬀⼀氀猀挀甀猀琀漀洀⸀樀猀✀⤀㬀ഀഀ
//require('./state/blackjack.js');਍⼀⼀爀攀焀甀椀爀攀⠀✀⸀⼀猀琀愀琀攀⼀猀氀漀琀猀⸀樀猀✀⤀㬀ഀഀ
require('./utils/fire.js');਍⼀⼀爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀䴀愀爀欀攀爀㌀搀⸀樀猀✀⤀㬀ഀഀ
require('./systems/player/Quest/BACK/blipmanager.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀愀搀洀椀渀匀礀猀⼀䄀搀洀椀渀刀攀瀀漀爀琀⼀䈀䄀䌀䬀⼀愀搀洀椀渀刀攀瀀漀爀琀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/Crime/Mafia/BACK/mafia.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀樀漀戀猀⼀昀椀猀栀攀爀洀愀渀⼀䈀䄀䌀䬀⼀昀椀猀栀攀爀洀愀渀⸀樀猀✀⤀㬀ഀഀ
require('./systems/fractions/Crime/RobberyQuest/robbery.js');਍ഀഀ
require('./systems/player/SellingMenu/BACK/sellingmenu.js');਍⼀⼀爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀猀栀漀瀀猀⼀一攀眀夀攀愀爀⼀渀攀眀礀攀愀爀猀栀漀瀀⸀樀猀✀⤀㬀ഀഀ
require('./utils/sync/attachmentObject.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀猀礀渀挀⼀眀攀愀瀀漀渀猀礀渀挀⸀樀猀✀⤀㬀ഀഀ
਍ഀഀ
require('./systems/vehicle/VehicleNumberShop/BACK/NumberMenu.js');਍ഀഀ
਍⼀⼀爀攀焀甀椀爀攀⠀∀⸀⼀甀琀椀氀猀⼀洀愀琀栀⸀樀猀∀⤀㬀ഀഀ
require('./spa/browser.js'); ਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀瀀愀爀欀椀渀最猀⼀䈀愀挀欀⼀瀀愀爀欀椀渀最猀⸀樀猀✀⤀㬀ഀഀ
਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀愀甀挀琀椀漀渀匀礀猀琀攀洀⼀䈀䄀䌀䬀⼀愀甀挀琀椀漀渀⸀樀猀✀⤀㬀ഀഀ
// require('./utils/nonrpdrive.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀礀猀琀攀洀猀⼀樀漀戀猀⼀搀爀甀最䐀攀愀氀攀爀⼀䈀䄀䌀䬀⼀搀爀甀最搀攀愀氀攀爀⸀樀猀✀⤀㬀ഀഀ
require('./utils/CustomShape.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀甀琀椀氀猀⼀䌀甀猀琀漀洀䴀愀爀欀攀爀⸀樀猀✀⤀㬀ഀഀ
require('./utils/TestDrive.js');਍ഀഀ
਍爀攀焀甀椀爀攀⠀✀⸀⼀瀀愀爀琀椀挀氀攀䘀砀⼀椀渀搀攀砀✀⤀㬀ഀഀ
਍ഀഀ
// // // // // // //਍ഀഀ
if (mp.storage.data.friends == undefined) {਍    洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀昀爀椀攀渀搀猀 㴀 笀紀㬀ഀഀ
    mp.storage.flush();਍紀ഀഀ
mp.game.ui.setMinimapComponent(6, !0, -1); // "Vespucci Beach lifeguard building"਍洀瀀⸀最愀洀攀⸀甀椀⸀猀攀琀䴀椀渀椀洀愀瀀䌀漀洀瀀漀渀攀渀琀⠀㜀Ⰰ ℀　Ⰰ ⴀ㄀⤀㬀 ⼀⼀ ∀䈀攀愀洀 䴀攀 唀瀀 ⠀䜀爀愀渀搀 匀攀渀漀爀愀 䐀攀猀攀爀琀⤀∀ഀഀ
mp.game.ui.setMinimapComponent(8, !0, -1); // "Paleto Bay fire station building"਍洀瀀⸀最愀洀攀⸀甀椀⸀猀攀琀䴀椀渀椀洀愀瀀䌀漀洀�