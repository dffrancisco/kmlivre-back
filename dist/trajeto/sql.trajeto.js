'use strict';const _0x573010=_0xbee1;function _0xbee1(_0xd841c6,_0xaa4f52){const _0x463ba3=_0x463b();return _0xbee1=function(_0xbee122,_0x31a674){_0xbee122=_0xbee122-0x189;let _0x5a852b=_0x463ba3[_0xbee122];return _0x5a852b;},_0xbee1(_0xd841c6,_0xaa4f52);}(function(_0x5153b9,_0x31c4da){const _0x4d8d53=_0xbee1,_0x3bf239=_0x5153b9();while(!![]){try{const _0x559b6a=parseInt(_0x4d8d53(0x199))/0x1*(parseInt(_0x4d8d53(0x198))/0x2)+-parseInt(_0x4d8d53(0x193))/0x3+parseInt(_0x4d8d53(0x18d))/0x4+-parseInt(_0x4d8d53(0x19a))/0x5+-parseInt(_0x4d8d53(0x190))/0x6*(parseInt(_0x4d8d53(0x196))/0x7)+-parseInt(_0x4d8d53(0x18b))/0x8*(parseInt(_0x4d8d53(0x194))/0x9)+parseInt(_0x4d8d53(0x18f))/0xa*(parseInt(_0x4d8d53(0x18c))/0xb);if(_0x559b6a===_0x31c4da)break;else _0x3bf239['push'](_0x3bf239['shift']());}catch(_0x59a333){_0x3bf239['push'](_0x3bf239['shift']());}}}(_0x463b,0xbae98));var __importDefault=this&&this['__importDefault']||function(_0x2fcdc0){return _0x2fcdc0&&_0x2fcdc0['__esModule']?_0x2fcdc0:{'default':_0x2fcdc0};};Object[_0x573010(0x19c)](exports,_0x573010(0x197),{'value':!![]});const prepareSql_1=__importDefault(require('../db/prepareSql')),mysqlConnect_1=__importDefault(require('../db/mysqlConnect'));function _0x463b(){const _0x203457=['4104JYNumC','9834acVMYl','19280CqsKcF','UPDATE\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20f_km\x20=\x20:km,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_data\x20=\x20:data,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_hora=\x20:hora,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_latitude\x20=\x20:latitude,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f_longitude\x20=\x20:longitude\x09\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id_router\x20=\x20:id_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20id_user\x20=\x20:id_user','28790eCMAJV','8868pmXZys','SELECT\x20id_router,\x20id_user,\x20b_km,\x20DATE_FORMAT(b_data,\x20\x27%Y-%m-%d\x27)\x20b_data,\x20b_hora,\x20b_latitude,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20b_longitude,\x20f_km,\x20DATE_FORMAT(f_data,\x20\x27%Y-%m-%d\x27)\x20f_data,\x20f_hora,\x20f_latitude,\x20f_longitude\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id_user\x20=\x20:id_user','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20f_data\x20IS\x20null','696231XpyARY','18117OOLgQs','prepareSQL','4053wPVCon','__esModule','62ATDhkp','10599JdghYd','105575KkuJXR','query','defineProperty','SELECT\x20id_router,\x20id_user,\x20b_km,\x20DATE_FORMAT(b_data,\x20\x27%Y-%m-%d\x27)\x20b_data,\x20b_hora,\x20b_latitude,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20b_longitude,\x20f_km,\x20DATE_FORMAT(f_data,\x20\x27%Y-%m-%d\x27)\x20f_data,\x20f_hora,\x20f_latitude,\x20f_longitude\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id_user\x20=\x20','default'];_0x463b=function(){return _0x203457;};return _0x463b();}exports[_0x573010(0x18a)]={'getTrajetos':_0x5c6734=>{const _0x585931=_0x573010;let _0x3e0327=_0x585931(0x191);return _0x3e0327=prepareSql_1[_0x585931(0x18a)][_0x585931(0x195)](_0x3e0327,_0x5c6734),mysqlConnect_1[_0x585931(0x18a)][_0x585931(0x19b)](_0x3e0327);},'getTrajetoAberto':_0x5a24f6=>{const _0x525d31=_0x573010;let _0xcbb1e3=_0x525d31(0x189)+_0x5a24f6+_0x525d31(0x192);return mysqlConnect_1[_0x525d31(0x18a)]['query'](_0xcbb1e3);},'iniciaTrajeto'(_0x1daab6){const _0x182092=_0x573010;let _0x1dec0a='INSERT\x20into\x20km_router\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(id_user,\x20b_km,\x20b_data,\x20b_hora,\x20b_latitude,\x20b_longitude)\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20values\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(:id_user,\x20:km,\x20:data,\x20:hora,\x20:latitude,\x20:longitude)';return _0x1dec0a=prepareSql_1[_0x182092(0x18a)]['prepareSQL'](_0x1dec0a,_0x1daab6),mysqlConnect_1['default']['query'](_0x1dec0a);},'finalizarTrajeto'(_0x4fb829){const _0x1e5c5f=_0x573010;let _0x1e31dc=_0x1e5c5f(0x18e);return _0x1e31dc=prepareSql_1[_0x1e5c5f(0x18a)]['prepareSQL'](_0x1e31dc,_0x4fb829),mysqlConnect_1[_0x1e5c5f(0x18a)]['query'](_0x1e31dc);}};