{
const a11_0x5ada=['setFadeInAfterLoad','setActive','~r~','DestroyBrowser','MCRP.state.register\x20=\x20','show','C_RequestNewCharacter','C_RegResendCode','MCRP.state.forgotPassword.email_send\x20=\x201','MCRP.state.login\x20=\x20','browser','C_ShowRegConfirm','APP.sendNotifyMessage(\x27We\x20have\x20sent\x20a\x20confirmation\x20code\x20to\x20your\x20email\x27)','MCRP.state.register.step\x20=\x202','C_ConfirmPasswordCode','execute','add','callRemote','lastseen','crossingRoad','auth:request:password','auth:show:password','C_ShowMFA','Vector3','call','requestNewCharacter','authResponse','MCRP.state.forgotUsername.email_send\x20=\x201','events','C_ShowBannedScreen','MCRP.state.register.opened\x20=\x20true','chat','stringify','C_RequestUsername','C_ShowForgotPageUsername','activate','C_ShowLoginPage','~g~','C_ShowChangePassword','MCRP.state.forgotPassword.show\x20=\x20false','false','C_Notify','setFadeInAfterDeathArrest','getStreetNameFromHashKey','cursor','C_ShowForgotPage','APP.sendNotifyMessage(\x22','MCRP.state.login.username\x20=\x20\x27','submitMFACode','MCRP.state.forgotUsername.show\x20=\x20false','position','C_CameraBackToPlayer','default','players','C_HideAuthPage','MCRP.state.forgotUsername\x20=\x20','pathfind','C_ChangePassword','auth:confirm:passwordcode','C_SetLastUsername','C_RegCodeConfirm','playerAuth2fa','MCRP.state.login.show\x20=\x20false','C_DeleteCharacter','zone','parse','C_AuthCamera','APP.sendErrorMessage(\x22','local','displayRadar','ignoreNextRestart','streetName','game','getLabelText','C_SelectCharacter','APP.sendNotifyMessage(\x27You\x20have\x20successfully\x20changed\x20your\x20password!\x27)','now','map','playerAuth','renderScriptCams','gui','setFadeOutAfterDeath','MCRP.state.register.show\x20=\x20false','freezePosition','camera','Destroy','login','auth:confirm:changepassword','getStreetNameAtCoord','destroy','MCRP.state.forgotPassword.email_send\x20=\x202','MCRP.state.login.show\x20=\x20true','pointAtCoord','C_RequestPassword','cam','C_CharacterCreatorCamera','gameplay'];(function(_0x3824ae,_0x5adae9){const _0x240998=function(_0x3e1f60){while(--_0x3e1f60){_0x3824ae['push'](_0x3824ae['shift']());}};_0x240998(++_0x5adae9);}(a11_0x5ada,0x150));const a11_0x2409=function(_0x3824ae,_0x5adae9){_0x3824ae=_0x3824ae-0x0;let _0x240998=a11_0x5ada[_0x3824ae];return _0x240998;};let localplayer=mp[a11_0x2409('0x8')][a11_0x2409('0x17')];let loginCamera=null;let password_attempt=0x0;global['AuthOpen']=![];mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0xe'),_0xe0a44f=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x2')+_0xe0a44f+'\x27');});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x30'),_0x15f4b7=>{mp[a11_0x2409('0x50')]['callRemote'](a11_0x2409('0x48'),JSON[a11_0x2409('0x54')]({'email':_0x15f4b7}));});mp[a11_0x2409('0x50')]['add'](a11_0x2409('0x55'),_0x2d69f8=>{mp['events']['callRemote']('auth:request:username',JSON[a11_0x2409('0x54')]({'email':_0x2d69f8}));});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x49'),()=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x40'));auth_browser[a11_0x2409('0x43')](a11_0x2409('0x3c'));});mp['events'][a11_0x2409('0x44')]('auth:show:username',()=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x40'));auth_browser[a11_0x2409('0x43')](a11_0x2409('0x4f'));});mp[a11_0x2409('0x50')]['add'](a11_0x2409('0xc'),_0x11cbe4=>{mp[a11_0x2409('0x50')][a11_0x2409('0x45')](a11_0x2409('0x2a'),_0x11cbe4);});mp[a11_0x2409('0x50')][a11_0x2409('0x44')]('C_ChangePasswordSuccess',()=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x1e'));auth_browser['execute']('MCRP.state.forgotPassword.email_send\x20=\x200');auth_browser['execute'](a11_0x2409('0x5b'));auth_browser[a11_0x2409('0x43')](a11_0x2409('0x2e'));});mp[a11_0x2409('0x50')]['add'](a11_0x2409('0x5a'),()=>{auth_browser[a11_0x2409('0x43')]('MCRP.state.forgotPassword.opened\x20=\x20true');auth_browser['execute'](a11_0x2409('0x2d'));});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x42'),_0x182d26=>{mp['events']['callRemote'](a11_0x2409('0xd'),_0x182d26);});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x15'),()=>{mp[a11_0x2409('0x1b')]['ui'][a11_0x2409('0x18')](![]);mp['game'][a11_0x2409('0x33')]['disableAutomaticRespawn'](!![]);mp['game']['gameplay'][a11_0x2409('0x19')](!![]);mp[a11_0x2409('0x1b')][a11_0x2409('0x33')][a11_0x2409('0x5e')](![]);mp[a11_0x2409('0x1b')][a11_0x2409('0x33')][a11_0x2409('0x24')](![]);mp[a11_0x2409('0x1b')]['gameplay'][a11_0x2409('0x34')](![]);localplayer[a11_0x2409('0x5')]=new mp[(a11_0x2409('0x4b'))](-1772.057861328125,-1128.8157958984375,35.48954772949219);loginCamera=client[a11_0x2409('0x27')]['Create'](a11_0x2409('0x29'),[-1762.057861328125,-1118.8157958984375,36.48954772949219,-13.48175048828125,0x0,-71.84672546386719,0x32]);setTimeout(()=>{mp[a11_0x2409('0x23')][a11_0x2409('0x53')][a11_0x2409('0x39')](![]);mp['gui'][a11_0x2409('0x53')][a11_0x2409('0x57')](![]);mp[a11_0x2409('0x23')][a11_0x2409('0x60')]['show'](!![],!![]);},0x3e8);localplayer[a11_0x2409('0x26')](!![]);let _0x54b2a1={'username':'','password':'','opened':!![],'show':!![]};auth_browser[a11_0x2409('0x43')](a11_0x2409('0x3d')+JSON[a11_0x2409('0x54')](_0x54b2a1));AuthOpen=!![];mp['events'][a11_0x2409('0x4c')](a11_0x2409('0x32'));});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x3f'),()=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x41'));auth_browser['execute'](a11_0x2409('0x52'));auth_browser[a11_0x2409('0x43')]('APP.sendNotifyMessage(\x27We\x20have\x20sent\x20a\x20confirmation\x20code\x20to\x20your\x20email\x27)');});mp['events']['add'](a11_0x2409('0xf'),_0x8f96d=>{mp['events'][a11_0x2409('0x45')]('authConfirm',_0x8f96d);});mp['events']['add'](a11_0x2409('0x3b'),()=>{mp['events'][a11_0x2409('0x45')]('authRequestResend');});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x12'),_0x505316=>{mp[a11_0x2409('0x50')][a11_0x2409('0x45')]('deleteCharacter',_0x505316);});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x5d'),_0x5a21b8=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x1')+_0x5a21b8+'\x22)');});let lastRequestAuth=0x0;let authTimer;mp[a11_0x2409('0x50')][a11_0x2409('0x44')]('C_Auth',(_0xdcce99,_0x4aee6a)=>{if(Date[a11_0x2409('0x1f')]()-lastRequestAuth<0x3e8)return;if(authTimer)clearTimeout(authTimer);lastRequestAuth=Date[a11_0x2409('0x1f')]();auth_browser[a11_0x2409('0x43')]('MCRP.state.login.opened\x20=\x20false');mp[a11_0x2409('0x50')]['callRemote'](a11_0x2409('0x21'),_0xdcce99,_0x4aee6a);});mp[a11_0x2409('0x50')]['add'](a11_0x2409('0x9'),()=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x11'));auth_browser['execute'](a11_0x2409('0x25'));auth_browser[a11_0x2409('0x43')](a11_0x2409('0x5b'));auth_browser[a11_0x2409('0x43')](a11_0x2409('0x4'));AuthOpen=![];});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x58'),()=>{auth_browser['execute'](a11_0x2409('0x2e'));auth_browser[a11_0x2409('0x43')](a11_0x2409('0x25'));auth_browser[a11_0x2409('0x43')]('MCRP.state.forgotPassword.show\x20=\x20false');auth_browser[a11_0x2409('0x43')](a11_0x2409('0x4'));});mp[a11_0x2409('0x50')]['add']('C_ShowRegisterPage',()=>{auth_browser[a11_0x2409('0x43')]('MCRP.state.login.show\x20=\x20false');let _0x30cb33={'step':0x1,'username':'','password':'','password2':'','email':'','opened':!![],'show':!![]};auth_browser[a11_0x2409('0x43')](a11_0x2409('0x38')+JSON['stringify'](_0x30cb33));});mp['events']['add'](a11_0x2409('0x0'),()=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x11'));let _0x127d87={'email':'','email_code':'','email_send':0x0,'password':'','password2':'','changepassword':![],'resend_opened':![],'opened':!![],'show':!![]};auth_browser[a11_0x2409('0x43')]('MCRP.state.forgotPassword\x20=\x20'+JSON[a11_0x2409('0x54')](_0x127d87));});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x56'),()=>{auth_browser[a11_0x2409('0x43')](a11_0x2409('0x11'));let _0x25beb9={'email':'','email_code':'','email_send':0x0,'password':'','password2':'','changepassword':![],'username':'','resend_opened':![],'opened':!![],'show':!![]};auth_browser['execute'](a11_0x2409('0xa')+JSON[a11_0x2409('0x54')](_0x25beb9));});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x3'),_0x162677=>{mp[a11_0x2409('0x50')][a11_0x2409('0x45')](a11_0x2409('0x10'),_0x162677);});mp[a11_0x2409('0x50')]['add'](a11_0x2409('0x4a'),()=>{auth_browser[a11_0x2409('0x43')]('MCRP.state.login.mfa_open\x20=\x20true');auth_browser[a11_0x2409('0x43')]('MCRP.state.login.opened\x20=\x20true');});mp['events'][a11_0x2409('0x44')](a11_0x2409('0x51'),(_0x35e75d,_0x46d54d=0x1)=>{auth_browser['execute'](a11_0x2409('0x11'));let _0x5de9ed={'type':_0x46d54d,'ban_data':_0x35e75d,'show':!![]};auth_browser['execute']('MCRP.state.banned\x20=\x20'+JSON['stringify'](_0x5de9ed));});mp[a11_0x2409('0x50')]['add']('C_ShowCharacterList',(_0x18fccf,_0x51440c)=>{if(authTimer)clearTimeout(authTimer);auth_browser[a11_0x2409('0x43')](a11_0x2409('0x11'));_0x51440c=JSON[a11_0x2409('0x14')](_0x51440c)[a11_0x2409('0x20')](_0x5d0412=>{let _0xe93cb4=null;let _0x264986=null;let _0xa41cff=mp[a11_0x2409('0x1b')][a11_0x2409('0xb')][a11_0x2409('0x2b')](_0x5d0412['lastseen']['x'],_0x5d0412['lastseen']['y'],_0x5d0412['lastseen']['z'],0x0,0x0);_0x264986=mp[a11_0x2409('0x1b')]['ui'][a11_0x2409('0x1c')](mp['game'][a11_0x2409('0x13')]['getNameOfZone'](_0x5d0412[a11_0x2409('0x46')]['x'],_0x5d0412['lastseen']['y'],_0x5d0412[a11_0x2409('0x46')]['z']));_0xe93cb4=mp[a11_0x2409('0x1b')]['ui'][a11_0x2409('0x5f')](_0xa41cff[a11_0x2409('0x1a')]);if(_0xa41cff[a11_0x2409('0x47')]&&_0xa41cff['crossingRoad']!=_0xa41cff[a11_0x2409('0x1a')])_0xe93cb4+='\x20/\x20'+mp[a11_0x2409('0x1b')]['ui'][a11_0x2409('0x5f')](_0xa41cff['crossingRoad']);_0x5d0412['lastseen']=_0xe93cb4+',\x20'+_0x264986;return _0x5d0412;});let _0x5c8f12={'charSlot':_0x18fccf,'charList':_0x51440c,'show':!![]};auth_browser[a11_0x2409('0x43')]('MCRP.state.characterSelect\x20=\x20'+JSON['stringify'](_0x5c8f12));});mp[a11_0x2409('0x50')]['add']('C_AuthError',_0x5eec41=>{auth_browser['execute'](a11_0x2409('0x16')+_0x5eec41+'\x22)');});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x1d'),_0x237b92=>{if(Date[a11_0x2409('0x1f')]()-lastRequestAuth<0x3e8)return;lastRequestAuth=Date[a11_0x2409('0x1f')]();mp[a11_0x2409('0x50')][a11_0x2409('0x45')]('requestCharacterSpawn',_0x237b92);});mp[a11_0x2409('0x50')][a11_0x2409('0x44')](a11_0x2409('0x3a'),()=>{if(Date[a11_0x2409('0x1f')]()-lastRequestAuth<0x3e8)return;lastRequestAuth=Date[a11_0x2409('0x1f')]();mp[a11_0x2409('0x50')][a11_0x2409('0x45')](a11_0x2409('0x4d'));});mp['events'][a11_0x2409('0x44')](a11_0x2409('0x6'),(_0x3cbccd=![])=>{auth_browser[a11_0x2409('0x43')]('MCRP.state.characterSelect.show\x20=\x20false');if(loginCamera)client[a11_0x2409('0x27')][a11_0x2409('0x28')](a11_0x2409('0x29'));if(_0x3cbccd)return;loginCamera=mp['cameras']['new'](a11_0x2409('0x7'),new mp[(a11_0x2409('0x4b'))](23.445695877075195,-580.3161010742188,4500.093597412109),new mp[(a11_0x2409('0x4b'))](0x0,0x0,0x0),0x28);loginCamera[a11_0x2409('0x2f')](20.50064468383789,-583.344482421875,0.6960144042969);mp[a11_0x2409('0x1b')][a11_0x2409('0x31')][a11_0x2409('0x22')](!![],![],0x0,!![],![]);loginCamera[a11_0x2409('0x35')](!![]);setTimeout(function(){if(loginCamera)loginCamera[a11_0x2409('0x2c')]();mp['game'][a11_0x2409('0x31')][a11_0x2409('0x22')](![],!![],0xbb8,!![],![]);},0xc8);});mp[a11_0x2409('0x50')]['add'](a11_0x2409('0x4e'),(_0xbc6c38,_0x531d2b,_0xb29973)=>{if(_0xbc6c38==a11_0x2409('0x5c')){hasAttempt=![];mp[a11_0x2409('0x1b')]['ui']['notifications'][a11_0x2409('0x39')](a11_0x2409('0x36')+_0x531d2b,![],0x6,0x2);return;}if(_0xbc6c38=='true'){mp[a11_0x2409('0x1b')]['ui']['notifications'][a11_0x2409('0x39')](a11_0x2409('0x59')+_0x531d2b,![],0xf,0x14);client[a11_0x2409('0x3e')][a11_0x2409('0x37')]('login');client['uimanager']['removeUi'](a11_0x2409('0x29'));}});
}