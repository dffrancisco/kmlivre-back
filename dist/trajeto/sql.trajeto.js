'use strict';const _0x13d4dd=_0x3cee;(function(_0x126c10,_0x40005f){const _0x3dddf4=_0x3cee,_0x28cde1=_0x126c10();while(!![]){try{const _0x2d95dd=parseInt(_0x3dddf4(0xcf))/0x1+parseInt(_0x3dddf4(0xd5))/0x2*(parseInt(_0x3dddf4(0xd8))/0x3)+parseInt(_0x3dddf4(0xdb))/0x4+parseInt(_0x3dddf4(0xd6))/0x5+-parseInt(_0x3dddf4(0xd0))/0x6*(-parseInt(_0x3dddf4(0xc8))/0x7)+-parseInt(_0x3dddf4(0xcb))/0x8+parseInt(_0x3dddf4(0xdc))/0x9*(-parseInt(_0x3dddf4(0xce))/0xa);if(_0x2d95dd===_0x40005f)break;else _0x28cde1['push'](_0x28cde1['shift']());}catch(_0x38eebb){_0x28cde1['push'](_0x28cde1['shift']());}}}(_0xbdca,0xc5750));var __importDefault=this&&this[_0x13d4dd(0xcd)]||function(_0x43efc5){const _0x5ba0f6=_0x13d4dd;return _0x43efc5&&_0x43efc5[_0x5ba0f6(0xda)]?_0x43efc5:{'default':_0x43efc5};};Object[_0x13d4dd(0xd2)](exports,'__esModule',{'value':!![]});const prepareSql_1=__importDefault(require('../db/prepareSql')),mysqlConnect_1=__importDefault(require(_0x13d4dd(0xd7)));function _0x3cee(_0x276774,_0x2c216f){const _0xbdcab=_0xbdca();return _0x3cee=function(_0x3ceed1,_0x133c10){_0x3ceed1=_0x3ceed1-0xc8;let _0x7ddf23=_0xbdcab[_0x3ceed1];return _0x7ddf23;},_0x3cee(_0x276774,_0x2c216f);}function _0xbdca(){const _0x1b4d5b=['defineProperty','INSERT\x20into\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(id_user,\x20b_km,\x20b_data,\x20b_hora,\x20b_latitude,\x20b_longitude)\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20values\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(:id_user,\x20:km,\x20:data,\x20:hora,\x20:latitude,\x20:longitude)','SELECT\x20id_router,\x20id_user,\x20b_km,\x20DATE_FORMAT(b_data,\x20\x27%Y-%m-%d\x27)\x20b_data,\x20b_hora,\x20b_latitude,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20b_longitude,\x20f_km,\x20DATE_FORMAT(f_data,\x20\x27%Y-%m-%d\x27)\x20f_data,\x20f_hora,\x20f_latitude,\x20f_longitude\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id_user\x20=\x20','30574THnLaN','4268615ZpIYTF','../db/mysqlConnect','123YowXAz','SELECT\x20id_router,\x20id_user,\x20b_km,\x20DATE_FORMAT(b_data,\x20\x27%Y-%m-%d\x27)\x20b_data,\x20b_hora,\x20b_latitude,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20b_longitude,\x20f_km,\x20DATE_FORMAT(f_data,\x20\x27%Y-%m-%d\x27)\x20f_data,\x20f_hora,\x20f_latitude,\x20f_longitude\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id_user\x20=\x20:id_user','__esModule','6359764chqBWD','110169feSPah','6461aSQMeD','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20f_data\x20IS\x20null','query','11544864PYYmoe','default','__importDefault','2630gbvbeq','1464922MMyyys','6084rNdHRL','prepareSQL'];_0xbdca=function(){return _0x1b4d5b;};return _0xbdca();}exports[_0x13d4dd(0xcc)]={'getTrajetos':_0x22db70=>{const _0x5916db=_0x13d4dd;let _0x503189=_0x5916db(0xd9);return _0x503189=prepareSql_1['default'][_0x5916db(0xd1)](_0x503189,_0x22db70),mysqlConnect_1[_0x5916db(0xcc)][_0x5916db(0xca)](_0x503189);},'getTrajetoAberto':_0xc333f1=>{const _0xdedaad=_0x13d4dd;let _0x1cabbb=_0xdedaad(0xd4)+_0xc333f1+_0xdedaad(0xc9);return mysqlConnect_1[_0xdedaad(0xcc)][_0xdedaad(0xca)](_0x1cabbb);},'iniciaTrajeto'(_0x2a41ed){const _0x8086fe=_0x13d4dd;let _0x5eb2f2=_0x8086fe(0xd3);return _0x5eb2f2=prepareSql_1[_0x8086fe(0xcc)][_0x8086fe(0xd1)](_0x5eb2f2,_0x2a41ed),mysqlConnect_1[_0x8086fe(0xcc)][_0x8086fe(0xca)](_0x5eb2f2);},'finalizarTrajeto'(_0xd48cb8){const _0xf9f04a=_0x13d4dd;let _0x48053c='UPDATE\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20f_km\x20=\x20:km,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_data\x20=\x20:data,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_hora=\x20:hora,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_latitude\x20=\x20:latitude,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_longitude\x20=\x20:longitude\x09\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id_user\x20=\x20:id_user';return _0x48053c=prepareSql_1['default'][_0xf9f04a(0xd1)](_0x48053c,_0xd48cb8),mysqlConnect_1[_0xf9f04a(0xcc)][_0xf9f04a(0xca)](_0x48053c);}};