const playerheading = require("src/libs/rotatorplayer.js");਍挀漀渀猀琀 挀愀洀攀爀愀刀漀琀愀琀漀爀 㴀 爀攀焀甀椀爀攀⠀∀戀爀漀眀猀攀爀⼀愀猀猀攀琀猀⼀樀猀⼀瘀椀攀⸀樀猀∀⤀㬀 ⼀⼀爀漀琀愀琀攀ഀ
var needped = [];਍最氀漀戀愀氀⸀搀攀戀漀甀渀挀攀䔀瘀攀渀琀 㴀 ⠀洀猀Ⰰ 琀爀椀最最攀爀䌀漀甀渀猀Ⰰ 昀渀⤀ 㴀㸀 笀ഀ
    let g_swapDate = Date.now();਍    氀攀琀 最开琀爀椀最最攀爀猀䌀漀甀渀琀 㴀 　㬀ഀ
਍    爀攀琀甀爀渀 ⠀⸀⸀⸀愀爀最猀⤀ 㴀㸀 笀ഀ
        if (++g_triggersCount > triggerCouns) {਍            氀攀琀 挀甀爀爀攀渀琀䐀愀琀攀 㴀 䐀愀琀攀⸀渀漀眀⠀⤀㬀ഀ
਍            椀昀 ⠀⠀挀甀爀爀攀渀琀䐀愀琀攀 ⴀ 最开猀眀愀瀀䐀愀琀攀⤀ 㸀 洀猀⤀ 笀ഀ
                g_swapDate = currentDate;਍                最开琀爀椀最最攀爀猀䌀漀甀渀琀 㴀 　㬀ഀ
            } else {਍                爀攀琀甀爀渀 琀爀甀攀㬀 ⼀⼀ 挀愀渀挀攀氀 攀瘀攀渀琀 琀爀椀最最攀爀ഀ
            }਍        紀ഀ
਍        昀渀⠀⸀⸀⸀愀爀最猀⤀㬀ഀ
    };਍紀㬀ഀ
਍⼀⨀ 䔀瘀攀渀琀猀 攀爀爀漀爀 栀愀渀搀氀椀渀最 ⨀⼀ഀ
var train = null;਍最氀漀戀愀氀⸀挀愀洀攀爀愀猀琀愀琀攀 㴀 琀爀甀攀㬀ഀ
const eventsMap = new Map();਍挀漀渀猀琀 攀瘀攀渀琀猀䄀搀搀 㴀 匀礀洀戀漀氀⠀✀攀瘀攀渀琀猀䄀搀搀✀⤀㬀ഀ
const rendersTicks = new Map();਍氀攀琀 爀攀渀搀攀爀䤀搀 㴀 ⴀ㄀㬀ഀ
let isRenderDebugActive = false;਍最氀漀戀愀氀⸀椀猀䜀漀搀䴀漀搀攀䄀挀琀椀瘀攀 㴀 昀愀氀猀攀㬀ഀ
var to = false;਍ഀ
mp.events[eventsAdd] = mp.events.add;਍挀漀渀猀琀 开开攀瘀攀渀琀䄀搀搀开开 㴀 ⠀攀瘀攀渀琀一愀洀攀Ⰰ 攀瘀攀渀琀䘀甀渀挀琀椀漀渀Ⰰ 渀愀洀攀⤀ 㴀㸀 笀ഀ
    if (਍        攀瘀攀渀琀一愀洀攀 㴀㴀㴀 ✀爀攀渀搀攀爀✀ ☀☀ഀ
        (਍            琀礀瀀攀漀昀 渀愀洀攀 ℀㴀㴀 ✀猀琀爀椀渀最✀ 簀簀ഀ
            !name.length਍        ⤀ഀ
    ) {਍        爀攀渀搀攀爀䤀搀⬀⬀㬀ഀ
        name = renderId;਍    紀ഀ
਍    挀漀渀猀琀 瀀爀漀砀礀䔀瘀攀渀琀䘀甀渀挀琀椀漀渀 㴀 渀攀眀 倀爀漀砀礀⠀攀瘀攀渀琀䘀甀渀挀琀椀漀渀Ⰰ 笀ഀ
        apply: (target, thisArg, argumentsList) => {਍            琀爀礀 笀ഀ
                const start = Date.now();਍ഀ
                target.apply(thisArg, argumentsList);਍ഀ
                if (eventName === 'render') {਍                    爀攀渀搀攀爀猀吀椀挀欀猀⸀猀攀琀⠀渀愀洀攀Ⰰ 䐀愀琀攀⸀渀漀眀⠀⤀ ⴀ 猀琀愀爀琀⤀㬀ഀ
                }਍            紀 挀愀琀挀栀⠀攀⤀ 笀ഀ
                mp.game.graphics.notify(`${eventName}:error:1`);਍                洀瀀⸀挀漀渀猀漀氀攀⸀氀漀最䔀爀爀漀爀⠀怀␀笀攀瘀攀渀琀一愀洀攀紀㨀怀 ⬀ 攀⸀琀漀匀琀爀椀渀最⠀⤀⤀㬀ഀ
                mp.gui.chat.push(`${eventName}:` + e.toString());਍            紀ഀ
        }਍    紀⤀㬀ഀ
਍    攀瘀攀渀琀猀䴀愀瀀⸀猀攀琀⠀攀瘀攀渀琀䘀甀渀挀琀椀漀渀Ⰰ 瀀爀漀砀礀䔀瘀攀渀琀䘀甀渀挀琀椀漀渀⤀㬀ഀ
਍    洀瀀⸀攀瘀攀渀琀猀嬀攀瘀攀渀琀猀䄀搀搀崀⠀攀瘀攀渀琀一愀洀攀Ⰰ 瀀爀漀砀礀䔀瘀攀渀琀䘀甀渀挀琀椀漀渀⤀㬀ഀ
};਍ഀ
mp.events.add = (eventNameOrObject, ...args) => {਍    椀昀 ⠀琀礀瀀攀漀昀 攀瘀攀渀琀一愀洀攀伀爀伀戀樀攀挀琀 㴀㴀㴀 ✀漀戀樀攀挀琀✀⤀ 笀ഀ
        mp.events[eventsAdd](eventNameOrObject);਍ഀ
        return;਍    紀ഀ
਍    开开攀瘀攀渀琀䄀搀搀开开⠀攀瘀攀渀琀一愀洀攀伀爀伀戀樀攀挀琀Ⰰ ⸀⸀⸀愀爀最猀⤀㬀ഀ
};਍ഀ
mp.events.add('render', () => {਍    椀昀 ⠀℀椀猀刀攀渀搀攀爀䐀攀戀甀最䄀挀琀椀瘀攀⤀ 笀ഀ
        return;਍    紀ഀ
਍    挀漀渀猀琀 爀攀渀搀攀爀猀吀椀挀欀猀嘀愀氀甀攀猀 㴀 嬀⸀⸀⸀爀攀渀搀攀爀猀吀椀挀欀猀⸀攀渀琀爀椀攀猀⠀⤀崀㬀ഀ
਍    昀漀爀 ⠀氀攀琀 椀 㴀 　㬀 椀 㰀 爀攀渀搀攀爀猀吀椀挀欀猀嘀愀氀甀攀猀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀ
        mp.game.graphics.drawText(`${rendersTicksValues[i][0]} - ${rendersTicksValues[i][1]}ms`,਍            嬀　⸀㔀Ⰰ 　⸀㄀ ⬀ ⠀椀 ⨀ 　⸀　㌀⤀崀Ⰰഀ
            {਍                猀挀愀氀攀㨀 嬀　⸀㌀Ⰰ 　⸀㌀崀Ⰰഀ
                outline: true,਍                挀漀氀漀爀㨀 嬀㈀㔀㔀Ⰰ ㈀㔀㔀Ⰰ ㈀㔀㔀Ⰰ ㈀㔀㔀崀Ⰰഀ
                font: 4਍            紀ഀ
        );਍    紀ഀ
਍紀Ⰰ ✀椀渀搀攀砀ⴀ爀攀渀搀攀爀✀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀搀攀戀甀最⸀爀攀渀搀攀爀✀Ⰰ ⠀⤀ 㴀㸀 笀ഀ
    isRenderDebugActive = !isRenderDebugActive;਍紀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀愀搀洀椀渀⸀琀漀最最氀攀䜀漀搀䴀漀搀攀✀Ⰰ ⠀⤀ 㴀㸀 笀ഀ
    global.isGodModeActive = !global.isGodModeActive;਍ഀ
    mp.players.local.setInvincible(global.isGodModeActive);਍ഀ
    mp.events.call('notify', 4, 9, `GM - ${global.isGodModeActive ? 'включен' : 'выключен'}`, 3000);਍紀⤀㬀ഀ
਍最氀漀戀愀氀⸀挀栀愀琀䄀挀琀椀瘀攀 㴀 昀愀氀猀攀㬀ഀ
global.loggedin = false;਍最氀漀戀愀氀⸀氀漀挀愀氀瀀氀愀礀攀爀 㴀 洀瀀⸀瀀氀愀礀攀爀猀⸀氀漀挀愀氀㬀ഀ
਍洀瀀⸀最甀椀⸀攀砀攀挀甀琀攀⠀∀眀椀渀搀漀眀⸀氀漀挀愀琀椀漀渀 㴀 ✀瀀愀挀欀愀最攀㨀⼀⼀戀爀漀眀猀攀爀⼀洀漀搀甀氀攀猀⼀䠀唀䐀⼀椀渀搀攀砀⸀栀琀洀氀✀∀⤀㬀ഀ
if (mp.storage.data.chatcfg == undefined) {਍    洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最 㴀 笀ഀ
		timestamp: 0,਍ऀऀ挀栀愀琀猀椀稀攀㨀 　Ⰰഀ
		fontstep: 0,਍ऀऀ愀氀瀀栀愀㨀 ㄀ഀ
	};਍    洀瀀⸀猀琀漀爀愀最攀⸀昀氀甀猀栀⠀⤀㬀ഀ
}਍ഀ
setTimeout(function () { ਍    洀瀀⸀最甀椀⸀攀砀攀挀甀琀攀⠀怀渀攀眀挀昀最⠀　Ⰰ␀笀洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀琀椀洀攀猀琀愀洀瀀紀⤀㬀 渀攀眀挀昀最⠀㄀Ⰰ␀笀洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀挀栀愀琀猀椀稀攀紀⤀㬀 渀攀眀挀昀最⠀㈀Ⰰ␀笀洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀昀漀渀琀猀琀攀瀀紀⤀㬀 渀攀眀挀昀最⠀㌀Ⰰ␀笀洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀愀氀瀀栀愀紀⤀㬀怀⤀㬀ഀ
	mp.events.call('showHUD', false); ਍紀Ⰰ ㄀　　　⤀㬀ഀ
਍瘀愀爀 瀀攀搀猀愀礀椀渀最 㴀 渀甀氀氀㬀ഀ
var pedtext = "";਍瘀愀爀 瀀攀搀琀攀砀琀㈀ 㴀 渀甀氀氀㬀ഀ
var pedtimer = false;਍ഀ
var personalLabels = [];਍ഀ
var accessRoding = false;਍瘀愀爀 瀀攀渀琀氀漀愀搀攀搀 㴀 昀愀氀猀攀㬀ഀ
var emsloaded = false;਍瘀愀爀 猀栀漀眀䌀漀爀搀猀 㴀 昀愀氀猀攀㬀ഀ
਍挀漀渀猀琀 眀愀氀欀猀琀礀氀攀猀 㴀 嬀渀甀氀氀Ⰰ∀洀漀瘀攀开洀䀀戀爀愀瘀攀∀Ⰰ∀洀漀瘀攀开洀䀀挀漀渀昀椀搀攀渀琀∀Ⰰ∀洀漀瘀攀开洀䀀搀爀甀渀欀䀀瘀攀爀礀搀爀甀渀欀∀Ⰰ∀洀漀瘀攀开洀䀀猀栀愀搀礀瀀攀搀䀀愀∀Ⰰ∀洀漀瘀攀开洀䀀猀愀搀䀀愀∀Ⰰ∀洀漀瘀攀开昀䀀猀攀砀礀䀀愀∀Ⰰ∀洀漀瘀攀开瀀攀搀开挀爀漀甀挀栀攀搀∀崀㬀ഀ
const moods = [null,"mood_aiming_1", "mood_angry_1", "mood_drunk_1", "mood_happy_1", "mood_injured_1", "mood_stressed_1"];਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀戀爀愀瘀攀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_m@confident");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀搀爀甀渀欀䀀瘀攀爀礀搀爀甀渀欀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_m@shadyped@a");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开洀䀀猀愀搀䀀愀∀⤀㬀ഀ
mp.game.streaming.requestClipSet("move_f@sexy@a");਍洀瀀⸀最愀洀攀⸀猀琀爀攀愀洀椀渀最⸀爀攀焀甀攀猀琀䌀氀椀瀀匀攀琀⠀∀洀漀瘀攀开瀀攀搀开挀爀漀甀挀栀攀搀∀⤀㬀ഀ
var admingm = false;਍ഀ
mp.game.audio.setAudioFlag("DisableFlightMusic", true);਍ഀ
global.NativeUI = require("./src/libs/nativeui");਍最氀漀戀愀氀⸀䴀攀渀甀 㴀 一愀琀椀瘀攀唀䤀⸀䴀攀渀甀㬀ഀ
global.UIMenuItem = NativeUI.UIMenuItem;਍最氀漀戀愀氀⸀唀䤀䴀攀渀甀䰀椀猀琀䤀琀攀洀 㴀 一愀琀椀瘀攀唀䤀⸀唀䤀䴀攀渀甀䰀椀猀琀䤀琀攀洀㬀ഀ
global.UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;਍最氀漀戀愀氀⸀唀䤀䴀攀渀甀匀氀椀搀攀爀䤀琀攀洀 㴀 一愀琀椀瘀攀唀䤀⸀唀䤀䴀攀渀甀匀氀椀搀攀爀䤀琀攀洀㬀ഀ
global.BadgeStyle = NativeUI.BadgeStyle;਍最氀漀戀愀氀⸀倀漀椀渀琀 㴀 一愀琀椀瘀攀唀䤀⸀倀漀椀渀琀㬀ഀ
global.ItemsCollection = NativeUI.ItemsCollection;਍最氀漀戀愀氀⸀䌀漀氀漀爀 㴀 一愀琀椀瘀攀唀䤀⸀䌀漀氀漀爀㬀ഀ
global.ListItem = NativeUI.ListItem;਍最氀漀戀愀氀⸀洀愀琀挀栀 㴀 昀愀氀猀攀㬀ഀ
਍昀甀渀挀琀椀漀渀 匀攀琀圀愀氀欀匀琀礀氀攀⠀攀渀琀椀琀礀Ⰰ 眀愀氀欀猀琀礀氀攀⤀ 笀ഀ
	try {਍ऀऀ椀昀 ⠀眀愀氀欀猀琀礀氀攀 㴀㴀 渀甀氀氀⤀ 攀渀琀椀琀礀⸀爀攀猀攀琀䴀漀瘀攀洀攀渀琀䌀氀椀瀀猀攀琀⠀　⸀　⤀㬀ഀ
		else entity.setMovementClipset(walkstyle, 0.0);਍ऀ紀 挀愀琀挀栀 ⠀攀⤀ 笀 紀ഀ
}਍ഀ
function SetMood(entity, mood) {਍ऀ琀爀礀 笀ഀ
		if (mood == null) entity.clearFacialIdleAnimOverride();਍ऀऀ攀氀猀攀 洀瀀⸀最愀洀攀⸀椀渀瘀漀欀攀⠀✀　砀䘀䘀䌀㈀㐀䈀㤀㠀㠀䈀㤀㌀㠀䈀㌀㠀✀Ⰰ 攀渀琀椀琀礀⸀栀愀渀搀氀攀Ⰰ 洀漀漀搀Ⰰ 　⤀㬀ഀ
	} catch (e) { }਍紀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀挀栀愀琀挀漀渀昀椀最✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀愀Ⰰ 戀⤀ 笀ഀ
	if(a == 0) mp.storage.data.chatcfg.timestamp = b;਍    攀氀猀攀 椀昀⠀愀 㴀㴀 ㄀⤀ 洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀挀栀愀琀猀椀稀攀 㴀 戀㬀ഀ
	else if(a == 2) mp.storage.data.chatcfg.fontstep = b;਍ऀ攀氀猀攀 洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀挀栀愀琀挀昀最⸀愀氀瀀栀愀 㴀 戀㬀ഀ
	mp.storage.flush();਍紀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀琀䌀氀椀攀渀琀刀漀琀愀琀椀漀渀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀瀀氀愀礀攀爀Ⰰ 爀漀琀猀⤀ 笀ഀ
	if (player !== undefined && player != null && localplayer != player) player.setRotation(0, 0, rots, 2, true);਍紀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀猀攀琀圀漀爀氀搀䰀椀最栀琀猀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀琀漀最最氀攀⤀ 笀ഀ
	try {਍ऀऀ洀瀀⸀最愀洀攀⸀最爀愀瀀栀椀挀猀⸀爀攀猀攀琀䰀椀最栀琀猀匀琀愀琀攀⠀⤀㬀ഀ
		for (let i = 0; i <= 16; i++) {਍ऀऀऀ椀昀⠀椀 ℀㴀 㘀 ☀☀ 椀 ℀㴀 㜀⤀ 洀瀀⸀最愀洀攀⸀最爀愀瀀栀椀挀猀⸀猀攀琀䰀椀最栀琀猀匀琀愀琀攀⠀椀Ⰰ 琀漀最最氀攀⤀㬀ഀ
		}਍ऀ紀 挀愀琀挀栀 笀 紀ഀ
});਍ഀ
mp.events.add('changeChatState', function (state) {਍    挀栀愀琀䄀挀琀椀瘀攀 㴀 猀琀愀琀攀㬀ഀ
});਍ഀ
mp.events.add('allowRoding', function (toggle) {਍    愀挀挀攀猀猀刀漀搀椀渀最 㴀 琀漀最最氀攀㬀ഀ
});਍ഀ
mp.events.add('UpdateMoney', function (temp, amount) {਍  洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀⠀✀唀瀀搀愀琀攀䴀漀渀攀礀䠀甀搀✀Ⰰ 琀攀洀瀀Ⰰ 愀洀漀甀渀琀⤀㬀ഀ
  mp.events.call('UpdateMoneyPhone', temp, amount);਍紀⤀㬀ഀ
਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀唀瀀搀愀琀攀䈀愀渀欀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀琀攀洀瀀Ⰰ 愀洀漀甀渀琀⤀ 笀ഀ
  mp.events.call('UpdateBankHud', temp, amount);਍  洀瀀⸀攀瘀攀渀琀猀⸀挀愀氀氀⠀✀唀瀀搀愀琀攀䈀愀渀欀倀栀漀渀攀✀Ⰰ 琀攀洀瀀Ⰰ 愀洀漀甀渀琀⤀㬀ഀ
});਍ഀ
require('./src/libs/animList');਍⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ ⼀⼀ഀ
਍⼀⼀挀氀椀攀渀琀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/client/utils/keys.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀氀椀攀渀琀⼀爀攀渀搀攀爀✀⤀㬀ഀ
//require('./src/client/player/afksystem.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀氀椀攀渀琀⼀瘀漀椀挀攀✀⤀㬀ഀ
require('./src/client/walkie');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀氀椀攀渀琀⼀漀戀樀攀挀琀猀礀渀挀✀⤀㬀ഀ
require('./src/client/utils/utils');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀氀椀攀渀琀⼀戀愀猀椀挀猀礀渀挀✀⤀㬀ഀ
//==============================਍ഀ
require('./src/banks/atm');਍ഀ
//configs=======================਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀漀渀昀椀最猀⼀琀愀琀琀漀漀✀⤀㬀ഀ
require('./src/configs/barber');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀漀渀昀椀最猀⼀挀氀漀琀栀攀猀✀⤀㬀ഀ
require('./src/configs/natives');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀漀渀昀椀最猀⼀琀甀渀椀渀最✀⤀㬀ഀ
//==============================਍ഀ
//admin=========================਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀愀搀洀椀渀⼀昀氀礀✀⤀㬀ഀ
require('./src/admin/admesp');਍爀攀焀甀椀爀攀⠀∀⸀⼀猀爀挀⼀愀搀洀椀渀⼀猀瀀洀攀渀甀∀⤀㬀ഀ
require('./src/admin/adminpanel');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀愀搀洀椀渀⼀爀攀瀀漀爀琀瀀愀渀攀氀✀⤀㬀ഀ
require('./src/admin/tpwp');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
਍⼀⼀挀愀猀椀渀漀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/casino/luckywheel');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀愀猀椀渀漀⼀挀愀爀氀漀琀琀攀爀礀✀⤀㬀ഀ
require('./src/casino/casinomarket/index.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀愀猀椀渀漀⼀戀愀爀⼀椀渀搀攀砀⸀樀猀✀⤀㬀ഀ
require('./src/casino/casino/casino.js');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀挀愀猀椀渀漀⼀戀氀愀挀欀樀愀挀欀⼀戀氀愀挀欀樀愀挀欀⸀樀猀✀⤀㬀ഀ
//==============================਍ഀ
//fractions=====================਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀昀爀愀挀琀椀漀渀猀⼀瘀攀栀椀挀氀攀猀瀀愀眀渀攀爀✀⤀㬀ഀ
require('./src/fractions/gangzones');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀昀爀愀挀琀椀漀渀猀⼀挀爀愀昀琀✀⤀㬀ഀ
require('./src/fractions/changeclothes');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀昀爀愀挀琀椀漀渀猀⼀搀爀漀渀攀✀⤀㬀ഀ
require('./src/fractions/hijacking');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
਍⼀⼀洀愀爀欀攀琀猀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/markets/fish');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀洀愀爀欀攀琀猀⼀洀甀猀栀✀⤀㬀ഀ
require('./src/markets/black');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀洀愀爀欀攀琀猀⼀漀琀栀攀爀✀⤀㬀ഀ
//==============================਍ഀ
//house=========================਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀栀漀甀猀攀⼀昀甀爀渀椀琀甀爀攀✀⤀㬀ഀ
require('./src/house/housemenu');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀栀漀甀猀攀⼀瀀愀爀欀椀渀最✀⤀㬀ഀ
//==============================਍ഀ
//jobs==========================਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀樀漀戀猀⼀琀爀甀挀欀攀爀猀✀⤀㬀ഀ
require('./src/jobs/orange');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀樀漀戀猀⼀搀爀甀最✀⤀㬀ഀ
require('./src/jobs');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀樀漀戀猀⼀昀椀猀栀⼀昀椀猀栀⸀樀猀✀⤀ഀ
//==============================਍ഀ
//modules=======================਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀洀漀搀甀氀攀猀⼀椀猀氀愀渀搀⼀栀攀椀猀琀椀猀氀愀渀搀✀⤀㬀ഀ
require('./src/modules/business');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀洀漀搀甀氀攀猀⼀挀椀渀攀洀愀✀⤀㬀ഀ
require('./src/modules/Pad');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
਍⼀⼀瀀氀愀礀攀爀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/player/circle');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瀀氀愀礀攀爀⼀攀氀攀挀琀椀漀渀猀✀⤀㬀ഀ
require('./src/player/fingerpoints');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瀀氀愀礀攀爀⼀洀攀渀甀猀✀⤀㬀ഀ
require('./src/player/character');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瀀氀愀礀攀爀⼀愀渀椀洀愀琀椀漀渀✀⤀㬀ഀ
require('./src/player/CarryPlayer');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瀀氀愀礀攀爀⼀眀攀愀瀀漀渀䐀愀洀愀最攀✀⤀㬀ഀ
require('./src/player/phone');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瀀氀愀礀攀爀⼀洀愀椀渀✀⤀㬀ഀ
require('./src/player/board');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瀀氀愀礀攀爀⼀栀甀搀✀⤀㬀ഀ
require('./src/player/gamertag');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
਍⼀⼀甀琀椀氀猀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/utils/animator');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀甀琀椀氀猀⼀戀椀最洀愀瀀✀⤀㬀ഀ
require('./src/utils/checkpoints');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀甀琀椀氀猀⼀搀椀猀挀漀爀搀✀⤀㬀ഀ
require('./src/utils/notify');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀甀琀椀氀猀⼀猀挀爀攀攀渀攀昀昀攀挀琀猀✀⤀㬀ഀ
require('./src/utils/RebindKeys');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
਍⼀⼀瘀攀栀椀挀氀攀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/vehicle/vehiclesync');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瘀攀栀椀挀氀攀⼀爀攀渀琀挀愀爀✀⤀㬀ഀ
require('./src/vehicle/autopilot');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瘀攀栀椀挀氀攀⼀氀猀挀甀猀琀漀洀猀✀⤀㬀ഀ
require('./src/vehicle/SpeedCheck');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瘀攀栀椀挀氀攀⼀琀爀甀渀欀✀⤀㬀ഀ
require('./src/vehicle/radiosync');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀瘀攀栀椀挀氀攀⼀挀栀愀渀最攀渀甀洀✀⤀㬀ഀ
require('./src/banks/Deposit');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
਍⼀⼀眀攀愀瀀漀渀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/weapon');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
਍⼀⼀眀漀爀氀搀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
require('./src/world/environment');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀眀漀爀氀搀⼀愀渀椀洀愀氀猀✀⤀㬀ഀ
require('./src/world/peds');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀眀漀爀氀搀⼀搀漀漀爀洀愀渀愀最攀爀✀⤀㬀ഀ
require('./src/world/metro');਍爀攀焀甀椀爀攀⠀✀⸀⼀猀爀挀⼀眀漀爀氀搀⼀椀瀀氀猀✀⤀㬀ഀ
require('./src/world/xmr');਍⼀⼀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀㴀ഀ
// // // // // // // // // // //਍ഀ
if (mp.storage.data.friends == undefined) {਍    洀瀀⸀猀琀漀爀愀最攀⸀搀愀琀愀⸀昀爀椀攀渀搀猀 㴀 笀紀㬀ഀ
    mp.storage.flush();਍紀ഀ
let Sprinter;਍洀瀀⸀攀瘀攀渀琀猀⸀愀搀搀⠀✀䄀刀刀䔀䄀㨀䈀䰀䤀倀匀㨀䴀匀倀刀䤀一吀䔀刀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀猀琀愀琀攀Ⰰ 瀀漀猀⤀ 笀ഀ
	if (state) {਍ऀ   挀漀渀猀琀 戀氀椀瀀 㴀 洀瀀⸀最愀洀攀⸀甀椀⸀愀搀搀䈀氀椀瀀䘀漀爀刀愀搀椀甀猀⠀瀀漀猀⸀砀Ⰰ 瀀漀猀⸀礀Ⰰ 瀀漀猀⸀稀Ⰰ 㐀　⤀㬀ഀ
	   mp.game.invoke(getNative("SET_BLIP_SPRITE"), blip, 4);਍ऀ   洀瀀⸀最愀洀攀⸀椀渀瘀漀欀攀⠀最攀琀一愀琀椀瘀攀⠀∀匀䔀吀开䈀䰀䤀倀开䄀䰀倀䠀䄀∀⤀Ⰰ 戀氀椀瀀Ⰰ ㈀㔀㔀⤀㬀ഀ
	   mp.game.invoke(getNative("SET_BLIP_COLOUR"), blip, 47);਍ऀ   匀瀀爀椀渀琀攀爀 㴀 戀氀椀瀀㬀ഀ
	}਍ऀ攀氀猀攀 ഀ
		mp.game.invoke(getNative("SET_BLIP_ALPHA"), Sprinter, 0);਍紀⤀㬀ऀഀ
// // // // // // //਍挀漀渀猀琀 洀匀倀 㴀 ㌀　㬀ഀ
var prevP = mp.players.local.position;਍瘀愀爀 氀漀挀愀氀圀攀愀瀀漀渀猀 㴀 笀紀㬀ഀ
਍昀甀渀挀琀椀漀渀 搀椀猀琀䄀渀愀氀礀稀攀⠀⤀ 笀ഀ
	if(new Date().getTime() - global.lastCheck < 100) return; ਍ऀ最氀漀戀愀氀⸀氀愀猀琀䌀栀攀挀欀 㴀 渀攀眀 䐀愀琀攀⠀⤀⸀最攀琀吀椀洀攀⠀⤀㬀ഀ
    let temp = mp.players.l