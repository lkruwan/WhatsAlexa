let WhatsAlexa = require('../events');
let {MessageType,Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'mp4audio', fromMe: true, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    

    var _0x55f3fd=_0x55eb;(function(_0x11085c,_0x8c2ca8){var _0x40f309=_0x55eb,_0x206091=_0x11085c();while(!![]){try{var _0x4cee0e=parseInt(_0x40f309(0x1c1))/0x1+-parseInt(_0x40f309(0x1ba))/0x2+-parseInt(_0x40f309(0x1ab))/0x3+parseInt(_0x40f309(0x1ae))/0x4*(-parseInt(_0x40f309(0x1a7))/0x5)+-parseInt(_0x40f309(0x1c4))/0x6+-parseInt(_0x40f309(0x1b6))/0x7+parseInt(_0x40f309(0x1b1))/0x8;if(_0x4cee0e===_0x8c2ca8)break;else _0x206091['push'](_0x206091['shift']());}catch(_0x30c428){_0x206091['push'](_0x206091['shift']());}}}(_0x42db,0xeb281));if(message['reply_message']===![])return await message[_0x55f3fd(0x1a8)][_0x55f3fd(0x1b4)](message[_0x55f3fd(0x1be)],Lang[_0x55f3fd(0x1bf)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x55f3fd(0x1c2),...message[_0x55f3fd(0x1be)]?{'remoteJid':_0x55f3fd(0x1c0)}:{}},'message':{'imageMessage':{'url':_0x55f3fd(0x1b5),'mimetype':'image/jpeg','caption':_0x55f3fd(0x1b0),'fileSha256':_0x55f3fd(0x1c7),'fileLength':_0x55f3fd(0x1a5),'height':0x438,'width':0x437,'mediaKey':_0x55f3fd(0x1b8),'fileEncSha256':_0x55f3fd(0x1c6),'directPath':_0x55f3fd(0x1b9),'mediaKeyTimestamp':_0x55f3fd(0x1ac),'jpegThumbnail':fs['readFileSync'](_0x55f3fd(0x1a6))}}}});function _0x42db(){var _0x226a7e=['sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','28777','./src/image/WhatsAlexa.png','145evGJeC','client','withNoVideo','downloadAndSaveMediaMessage','3879897zhzVdW','1610993486','text','30652jWncGX','image/jpeg','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','50043392AKFzBo','audio','quotedMessage','sendMessage','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','12320168uThDPo','deleteMessage','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','2383620weXCkc','output.mp3','end','key','jid','MP4TOAUDİO_NEEDREPLY','status@broadcast','732089ZGHvzP','0@s.whatsapp.net','reply_message','9341712YLuYjK','readFileSync'];_0x42db=function(){return _0x226a7e;};return _0x42db();}var downloading=await message[_0x55f3fd(0x1a8)]['sendMessage'](message[_0x55f3fd(0x1be)],Lang['MP4TOAUDİO'],MessageType[_0x55f3fd(0x1ad)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x55f3fd(0x1c2),...message[_0x55f3fd(0x1be)]?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x55f3fd(0x1b5),'mimetype':_0x55f3fd(0x1af),'caption':_0x55f3fd(0x1b0),'fileSha256':_0x55f3fd(0x1c7),'fileLength':_0x55f3fd(0x1a5),'height':0x438,'width':0x437,'mediaKey':_0x55f3fd(0x1b8),'fileEncSha256':_0x55f3fd(0x1c6),'directPath':_0x55f3fd(0x1b9),'mediaKeyTimestamp':_0x55f3fd(0x1ac),'jpegThumbnail':fs[_0x55f3fd(0x1c5)]('./src/image/WhatsAlexa.png')}}}}),location=await message[_0x55f3fd(0x1a8)][_0x55f3fd(0x1aa)]({'key':{'remoteJid':message['reply_message'][_0x55f3fd(0x1be)],'id':message[_0x55f3fd(0x1c3)]['id']},'message':message[_0x55f3fd(0x1c3)]['data'][_0x55f3fd(0x1b3)]});function _0x55eb(_0x271264,_0x40b139){var _0x42db11=_0x42db();return _0x55eb=function(_0x55eb28,_0x1ca244){_0x55eb28=_0x55eb28-0x1a5;var _0xd7283a=_0x42db11[_0x55eb28];return _0xd7283a;},_0x55eb(_0x271264,_0x40b139);}ffmpeg(location)[_0x55f3fd(0x1a9)]()['save'](_0x55f3fd(0x1bb))['on'](_0x55f3fd(0x1bc),async()=>{var _0x51b06b=_0x55f3fd;await message[_0x51b06b(0x1a8)][_0x51b06b(0x1b4)](message[_0x51b06b(0x1be)],fs[_0x51b06b(0x1c5)](_0x51b06b(0x1bb)),MessageType[_0x51b06b(0x1b2)],{'mimetype':Mimetype['mp4Audio'],'ptt':![],'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x51b06b(0x1c2),...message[_0x51b06b(0x1be)]?{'remoteJid':_0x51b06b(0x1c0)}:{}},'message':{'imageMessage':{'url':_0x51b06b(0x1b5),'mimetype':_0x51b06b(0x1af),'caption':_0x51b06b(0x1b0),'fileSha256':_0x51b06b(0x1c7),'fileLength':_0x51b06b(0x1a5),'height':0x438,'width':0x437,'mediaKey':_0x51b06b(0x1b8),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':'1610993486','jpegThumbnail':fs[_0x51b06b(0x1c5)](_0x51b06b(0x1a6))}}}});});return await message[_0x55f3fd(0x1a8)][_0x55f3fd(0x1b7)](message[_0x55f3fd(0x1be)],{'id':downloading[_0x55f3fd(0x1bd)]['id'],'remoteJid':message['jid'],'fromMe':!![]});
    }));

    WhatsAlexa.addCommand({pattern: 'photo', fromMe: true, desc: Lang.STİCKER_DESC}, (async (message, match) => {  

    function _0x4cbb(_0x5415c0,_0xa828e){var _0xe7ece5=_0xe7ec();return _0x4cbb=function(_0x4cbb66,_0x17b87d){_0x4cbb66=_0x4cbb66-0xe9;var _0x5bbe08=_0xe7ece5[_0x4cbb66];return _0x5bbe08;},_0x4cbb(_0x5415c0,_0xa828e);}var _0x1213e7=_0x4cbb;(function(_0x16b9be,_0x48d908){var _0x126803=_0x4cbb,_0x399e33=_0x16b9be();while(!![]){try{var _0x361063=-parseInt(_0x126803(0xef))/0x1*(-parseInt(_0x126803(0x10c))/0x2)+parseInt(_0x126803(0xeb))/0x3*(-parseInt(_0x126803(0xf3))/0x4)+-parseInt(_0x126803(0x102))/0x5+parseInt(_0x126803(0x105))/0x6*(parseInt(_0x126803(0x10e))/0x7)+-parseInt(_0x126803(0x104))/0x8+parseInt(_0x126803(0xf6))/0x9+-parseInt(_0x126803(0xfc))/0xa*(parseInt(_0x126803(0xf4))/0xb);if(_0x361063===_0x48d908)break;else _0x399e33['push'](_0x399e33['shift']());}catch(_0x41205e){_0x399e33['push'](_0x399e33['shift']());}}}(_0xe7ec,0x37eff));if(message[_0x1213e7(0xfa)]===![])return await message[_0x1213e7(0x107)][_0x1213e7(0xf0)](message[_0x1213e7(0xf1)],Lang[_0x1213e7(0xf5)],MessageType[_0x1213e7(0x10a)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x1213e7(0x100),...message[_0x1213e7(0xf1)]?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x1213e7(0xfe),'mimetype':_0x1213e7(0x10b),'caption':_0x1213e7(0xff),'fileSha256':_0x1213e7(0x103),'fileLength':_0x1213e7(0x108),'height':0x438,'width':0x437,'mediaKey':_0x1213e7(0xf8),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':_0x1213e7(0x101),'mediaKeyTimestamp':_0x1213e7(0xed),'jpegThumbnail':fs['readFileSync'](_0x1213e7(0x110))}}}});var downloading=await message[_0x1213e7(0x107)][_0x1213e7(0xf0)](message[_0x1213e7(0xf1)],Lang[_0x1213e7(0x10d)],MessageType[_0x1213e7(0x10a)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...message[_0x1213e7(0xf1)]?{'remoteJid':_0x1213e7(0xee)}:{}},'message':{'imageMessage':{'url':'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','mimetype':_0x1213e7(0x10b),'caption':_0x1213e7(0xff),'fileSha256':_0x1213e7(0x103),'fileLength':_0x1213e7(0x108),'height':0x438,'width':0x437,'mediaKey':_0x1213e7(0xf8),'fileEncSha256':_0x1213e7(0x10f),'directPath':_0x1213e7(0x101),'mediaKeyTimestamp':_0x1213e7(0xed),'jpegThumbnail':fs['readFileSync'](_0x1213e7(0x110))}}}}),location=await message[_0x1213e7(0x107)][_0x1213e7(0xf9)]({'key':{'remoteJid':message[_0x1213e7(0xfa)][_0x1213e7(0xf1)],'id':message['reply_message']['id']},'message':message[_0x1213e7(0xfa)][_0x1213e7(0x109)][_0x1213e7(0xea)]});ffmpeg(location)['fromFormat'](_0x1213e7(0xf2))['save'](_0x1213e7(0xec))['on'](_0x1213e7(0xf7),async()=>{var _0x21f3cd=_0x1213e7;await message[_0x21f3cd(0x107)]['sendMessage'](message[_0x21f3cd(0xf1)],fs[_0x21f3cd(0xfd)](_0x21f3cd(0xec)),MessageType['image'],{'mimetype':Mimetype['png'],'caption':_0x21f3cd(0x106),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x21f3cd(0x100),...message[_0x21f3cd(0xf1)]?{'remoteJid':_0x21f3cd(0xee)}:{}},'message':{'imageMessage':{'url':_0x21f3cd(0xfe),'mimetype':_0x21f3cd(0x10b),'caption':_0x21f3cd(0xff),'fileSha256':_0x21f3cd(0x103),'fileLength':_0x21f3cd(0x108),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':_0x21f3cd(0x10f),'directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':_0x21f3cd(0xed),'jpegThumbnail':fs[_0x21f3cd(0xfd)](_0x21f3cd(0x110))}}}});});return await message[_0x1213e7(0x107)][_0x1213e7(0xe9)](message['jid'],{'id':downloading[_0x1213e7(0xfb)]['id'],'remoteJid':message[_0x1213e7(0xf1)],'fromMe':!![]});function _0xe7ec(){var _0x1371c8=['+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','3124392nozGcY','2047218QhoiAZ','*Made\x20By\x20WhatsAlexa*','client','28777','data','text','image/jpeg','53054yCUpgC','STİCKER','7GXwIAg','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','./src/image/WhatsAlexa.png','deleteMessage','quotedMessage','860253GtTzhd','output.jpg','1610993486','status@broadcast','17skVIZF','sendMessage','jid','webp_pipe','4QNNZDj','11RpPfux','STİCKER_NEEDREPLY','2913579iaDrQz','end','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','downloadAndSaveMediaMessage','reply_message','key','1903730IksLoQ','readFileSync','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','0@s.whatsapp.net','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','95505GMwAvW'];_0xe7ec=function(){return _0x1371c8;};return _0xe7ec();}
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'mp4audio', fromMe: false, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    

    var _0x55f3fd=_0x55eb;(function(_0x11085c,_0x8c2ca8){var _0x40f309=_0x55eb,_0x206091=_0x11085c();while(!![]){try{var _0x4cee0e=parseInt(_0x40f309(0x1c1))/0x1+-parseInt(_0x40f309(0x1ba))/0x2+-parseInt(_0x40f309(0x1ab))/0x3+parseInt(_0x40f309(0x1ae))/0x4*(-parseInt(_0x40f309(0x1a7))/0x5)+-parseInt(_0x40f309(0x1c4))/0x6+-parseInt(_0x40f309(0x1b6))/0x7+parseInt(_0x40f309(0x1b1))/0x8;if(_0x4cee0e===_0x8c2ca8)break;else _0x206091['push'](_0x206091['shift']());}catch(_0x30c428){_0x206091['push'](_0x206091['shift']());}}}(_0x42db,0xeb281));if(message['reply_message']===![])return await message[_0x55f3fd(0x1a8)][_0x55f3fd(0x1b4)](message[_0x55f3fd(0x1be)],Lang[_0x55f3fd(0x1bf)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x55f3fd(0x1c2),...message[_0x55f3fd(0x1be)]?{'remoteJid':_0x55f3fd(0x1c0)}:{}},'message':{'imageMessage':{'url':_0x55f3fd(0x1b5),'mimetype':'image/jpeg','caption':_0x55f3fd(0x1b0),'fileSha256':_0x55f3fd(0x1c7),'fileLength':_0x55f3fd(0x1a5),'height':0x438,'width':0x437,'mediaKey':_0x55f3fd(0x1b8),'fileEncSha256':_0x55f3fd(0x1c6),'directPath':_0x55f3fd(0x1b9),'mediaKeyTimestamp':_0x55f3fd(0x1ac),'jpegThumbnail':fs['readFileSync'](_0x55f3fd(0x1a6))}}}});function _0x42db(){var _0x226a7e=['sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','28777','./src/image/WhatsAlexa.png','145evGJeC','client','withNoVideo','downloadAndSaveMediaMessage','3879897zhzVdW','1610993486','text','30652jWncGX','image/jpeg','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','50043392AKFzBo','audio','quotedMessage','sendMessage','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','12320168uThDPo','deleteMessage','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','2383620weXCkc','output.mp3','end','key','jid','MP4TOAUDİO_NEEDREPLY','status@broadcast','732089ZGHvzP','0@s.whatsapp.net','reply_message','9341712YLuYjK','readFileSync'];_0x42db=function(){return _0x226a7e;};return _0x42db();}var downloading=await message[_0x55f3fd(0x1a8)]['sendMessage'](message[_0x55f3fd(0x1be)],Lang['MP4TOAUDİO'],MessageType[_0x55f3fd(0x1ad)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x55f3fd(0x1c2),...message[_0x55f3fd(0x1be)]?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x55f3fd(0x1b5),'mimetype':_0x55f3fd(0x1af),'caption':_0x55f3fd(0x1b0),'fileSha256':_0x55f3fd(0x1c7),'fileLength':_0x55f3fd(0x1a5),'height':0x438,'width':0x437,'mediaKey':_0x55f3fd(0x1b8),'fileEncSha256':_0x55f3fd(0x1c6),'directPath':_0x55f3fd(0x1b9),'mediaKeyTimestamp':_0x55f3fd(0x1ac),'jpegThumbnail':fs[_0x55f3fd(0x1c5)]('./src/image/WhatsAlexa.png')}}}}),location=await message[_0x55f3fd(0x1a8)][_0x55f3fd(0x1aa)]({'key':{'remoteJid':message['reply_message'][_0x55f3fd(0x1be)],'id':message[_0x55f3fd(0x1c3)]['id']},'message':message[_0x55f3fd(0x1c3)]['data'][_0x55f3fd(0x1b3)]});function _0x55eb(_0x271264,_0x40b139){var _0x42db11=_0x42db();return _0x55eb=function(_0x55eb28,_0x1ca244){_0x55eb28=_0x55eb28-0x1a5;var _0xd7283a=_0x42db11[_0x55eb28];return _0xd7283a;},_0x55eb(_0x271264,_0x40b139);}ffmpeg(location)[_0x55f3fd(0x1a9)]()['save'](_0x55f3fd(0x1bb))['on'](_0x55f3fd(0x1bc),async()=>{var _0x51b06b=_0x55f3fd;await message[_0x51b06b(0x1a8)][_0x51b06b(0x1b4)](message[_0x51b06b(0x1be)],fs[_0x51b06b(0x1c5)](_0x51b06b(0x1bb)),MessageType[_0x51b06b(0x1b2)],{'mimetype':Mimetype['mp4Audio'],'ptt':![],'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x51b06b(0x1c2),...message[_0x51b06b(0x1be)]?{'remoteJid':_0x51b06b(0x1c0)}:{}},'message':{'imageMessage':{'url':_0x51b06b(0x1b5),'mimetype':_0x51b06b(0x1af),'caption':_0x51b06b(0x1b0),'fileSha256':_0x51b06b(0x1c7),'fileLength':_0x51b06b(0x1a5),'height':0x438,'width':0x437,'mediaKey':_0x51b06b(0x1b8),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':'1610993486','jpegThumbnail':fs[_0x51b06b(0x1c5)](_0x51b06b(0x1a6))}}}});});return await message[_0x55f3fd(0x1a8)][_0x55f3fd(0x1b7)](message[_0x55f3fd(0x1be)],{'id':downloading[_0x55f3fd(0x1bd)]['id'],'remoteJid':message['jid'],'fromMe':!![]});
    }));

    WhatsAlexa.addCommand({pattern: 'photo', fromMe: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {   

    function _0x4cbb(_0x5415c0,_0xa828e){var _0xe7ece5=_0xe7ec();return _0x4cbb=function(_0x4cbb66,_0x17b87d){_0x4cbb66=_0x4cbb66-0xe9;var _0x5bbe08=_0xe7ece5[_0x4cbb66];return _0x5bbe08;},_0x4cbb(_0x5415c0,_0xa828e);}var _0x1213e7=_0x4cbb;(function(_0x16b9be,_0x48d908){var _0x126803=_0x4cbb,_0x399e33=_0x16b9be();while(!![]){try{var _0x361063=-parseInt(_0x126803(0xef))/0x1*(-parseInt(_0x126803(0x10c))/0x2)+parseInt(_0x126803(0xeb))/0x3*(-parseInt(_0x126803(0xf3))/0x4)+-parseInt(_0x126803(0x102))/0x5+parseInt(_0x126803(0x105))/0x6*(parseInt(_0x126803(0x10e))/0x7)+-parseInt(_0x126803(0x104))/0x8+parseInt(_0x126803(0xf6))/0x9+-parseInt(_0x126803(0xfc))/0xa*(parseInt(_0x126803(0xf4))/0xb);if(_0x361063===_0x48d908)break;else _0x399e33['push'](_0x399e33['shift']());}catch(_0x41205e){_0x399e33['push'](_0x399e33['shift']());}}}(_0xe7ec,0x37eff));if(message[_0x1213e7(0xfa)]===![])return await message[_0x1213e7(0x107)][_0x1213e7(0xf0)](message[_0x1213e7(0xf1)],Lang[_0x1213e7(0xf5)],MessageType[_0x1213e7(0x10a)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x1213e7(0x100),...message[_0x1213e7(0xf1)]?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x1213e7(0xfe),'mimetype':_0x1213e7(0x10b),'caption':_0x1213e7(0xff),'fileSha256':_0x1213e7(0x103),'fileLength':_0x1213e7(0x108),'height':0x438,'width':0x437,'mediaKey':_0x1213e7(0xf8),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':_0x1213e7(0x101),'mediaKeyTimestamp':_0x1213e7(0xed),'jpegThumbnail':fs['readFileSync'](_0x1213e7(0x110))}}}});var downloading=await message[_0x1213e7(0x107)][_0x1213e7(0xf0)](message[_0x1213e7(0xf1)],Lang[_0x1213e7(0x10d)],MessageType[_0x1213e7(0x10a)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...message[_0x1213e7(0xf1)]?{'remoteJid':_0x1213e7(0xee)}:{}},'message':{'imageMessage':{'url':'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','mimetype':_0x1213e7(0x10b),'caption':_0x1213e7(0xff),'fileSha256':_0x1213e7(0x103),'fileLength':_0x1213e7(0x108),'height':0x438,'width':0x437,'mediaKey':_0x1213e7(0xf8),'fileEncSha256':_0x1213e7(0x10f),'directPath':_0x1213e7(0x101),'mediaKeyTimestamp':_0x1213e7(0xed),'jpegThumbnail':fs['readFileSync'](_0x1213e7(0x110))}}}}),location=await message[_0x1213e7(0x107)][_0x1213e7(0xf9)]({'key':{'remoteJid':message[_0x1213e7(0xfa)][_0x1213e7(0xf1)],'id':message['reply_message']['id']},'message':message[_0x1213e7(0xfa)][_0x1213e7(0x109)][_0x1213e7(0xea)]});ffmpeg(location)['fromFormat'](_0x1213e7(0xf2))['save'](_0x1213e7(0xec))['on'](_0x1213e7(0xf7),async()=>{var _0x21f3cd=_0x1213e7;await message[_0x21f3cd(0x107)]['sendMessage'](message[_0x21f3cd(0xf1)],fs[_0x21f3cd(0xfd)](_0x21f3cd(0xec)),MessageType['image'],{'mimetype':Mimetype['png'],'caption':_0x21f3cd(0x106),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x21f3cd(0x100),...message[_0x21f3cd(0xf1)]?{'remoteJid':_0x21f3cd(0xee)}:{}},'message':{'imageMessage':{'url':_0x21f3cd(0xfe),'mimetype':_0x21f3cd(0x10b),'caption':_0x21f3cd(0xff),'fileSha256':_0x21f3cd(0x103),'fileLength':_0x21f3cd(0x108),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':_0x21f3cd(0x10f),'directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':_0x21f3cd(0xed),'jpegThumbnail':fs[_0x21f3cd(0xfd)](_0x21f3cd(0x110))}}}});});return await message[_0x1213e7(0x107)][_0x1213e7(0xe9)](message['jid'],{'id':downloading[_0x1213e7(0xfb)]['id'],'remoteJid':message[_0x1213e7(0xf1)],'fromMe':!![]});function _0xe7ec(){var _0x1371c8=['+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','3124392nozGcY','2047218QhoiAZ','*Made\x20By\x20WhatsAlexa*','client','28777','data','text','image/jpeg','53054yCUpgC','STİCKER','7GXwIAg','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','./src/image/WhatsAlexa.png','deleteMessage','quotedMessage','860253GtTzhd','output.jpg','1610993486','status@broadcast','17skVIZF','sendMessage','jid','webp_pipe','4QNNZDj','11RpPfux','STİCKER_NEEDREPLY','2913579iaDrQz','end','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','downloadAndSaveMediaMessage','reply_message','key','1903730IksLoQ','readFileSync','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','0@s.whatsapp.net','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','95505GMwAvW'];_0xe7ec=function(){return _0x1371c8;};return _0xe7ec();}
    }));
}