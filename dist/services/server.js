'use strict';function _0x48ab(){const _0x4a3ac8=['cnMgZ','log','app','HxGLz','static','dVwyN','__esModule','Origin','use','7ayGVIP','9VynvNf','4|3|2|0|1','X-Access-Token','HTTP','giKBu','createServer','9457AmCFGb','CPrfL','4907706VRVmmx','Authorization','httpServer','../routes/index','http\x20\x20running\x20on\x20port:','26721JoPXAl','join','cors','default','listen','express','split','defineProperty','2268116ChUtSj','path','136wwMWgu','14240yxoyHZ','__importDefault','GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE','../public','setCors','http','5331910JPeABQ','708980nNspDb'];_0x48ab=function(){return _0x4a3ac8;};return _0x48ab();}const _0x42e96c=_0x53ee;(function(_0x3b9ccb,_0x3c450b){const _0x2e06ba=_0x53ee,_0x44b171=_0x3b9ccb();while(!![]){try{const _0x4d0c63=parseInt(_0x2e06ba(0xe1))/0x1+parseInt(_0x2e06ba(0xfa))/0x2*(parseInt(_0x2e06ba(0xdb))/0x3)+-parseInt(_0x2e06ba(0xf0))/0x4+-parseInt(_0x2e06ba(0xf3))/0x5+-parseInt(_0x2e06ba(0xe3))/0x6*(-parseInt(_0x2e06ba(0xda))/0x7)+parseInt(_0x2e06ba(0xf2))/0x8*(-parseInt(_0x2e06ba(0xe8))/0x9)+-parseInt(_0x2e06ba(0xf9))/0xa;if(_0x4d0c63===_0x3c450b)break;else _0x44b171['push'](_0x44b171['shift']());}catch(_0xca8ec4){_0x44b171['push'](_0x44b171['shift']());}}}(_0x48ab,0xb4039));var __importDefault=this&&this[_0x42e96c(0xf4)]||function(_0x54dd95){const _0x470c56=_0x42e96c;return _0x54dd95&&_0x54dd95[_0x470c56(0xd7)]?_0x54dd95:{'default':_0x54dd95};};Object[_0x42e96c(0xef)](exports,'__esModule',{'value':!![]});const path_1=__importDefault(require(_0x42e96c(0xf1))),http_1=__importDefault(require(_0x42e96c(0xf8))),cors_1=__importDefault(require(_0x42e96c(0xea))),express_1=__importDefault(require(_0x42e96c(0xed))),index_1=__importDefault(require(_0x42e96c(0xe6)));function _0x53ee(_0xf9920c,_0x569489){const _0x48ab7b=_0x48ab();return _0x53ee=function(_0x53ee53,_0x464520){_0x53ee53=_0x53ee53-0xd7;let _0x56e050=_0x48ab7b[_0x53ee53];return _0x56e050;},_0x53ee(_0xf9920c,_0x569489);}class StartApp{constructor(){const _0x1d86a2=_0x42e96c,_0x7baa5f={'IoZIu':_0x1d86a2(0xdc)},_0xd8e3ed=_0x7baa5f['IoZIu'][_0x1d86a2(0xee)]('|');let _0x2f01fd=0x0;while(!![]){switch(_0xd8e3ed[_0x2f01fd++]){case'0':this[_0x1d86a2(0xf7)]();continue;case'1':this['app']['use'](express_1[_0x1d86a2(0xeb)]['json']());continue;case'2':this[_0x1d86a2(0xe5)]=http_1['default'][_0x1d86a2(0xe0)](this[_0x1d86a2(0xfd)]);continue;case'3':this[_0x1d86a2(0xfd)]=(0x0,express_1[_0x1d86a2(0xeb)])();continue;case'4':this['HTTP']=0xfc8;continue;}break;}}[_0x42e96c(0xf7)](){const _0xa9b4aa=_0x42e96c,_0x4988d3={'fNdUg':_0xa9b4aa(0xd8),'dVwyN':'X-Requested-With','AcKsM':'Content-Type','cirbj':'Accept','cnMgZ':_0xa9b4aa(0xdd),'giKBu':_0xa9b4aa(0xe4),'FtPUb':_0xa9b4aa(0xf5)},_0xfb9fb={'allowedHeaders':[_0x4988d3['fNdUg'],_0x4988d3[_0xa9b4aa(0x100)],_0x4988d3['AcKsM'],_0x4988d3['cirbj'],_0x4988d3[_0xa9b4aa(0xfb)],_0x4988d3[_0xa9b4aa(0xdf)]],'credentials':!![],'methods':_0x4988d3['FtPUb'],'origin':'*','preflightContinue':![]};this['app']['use']((0x0,cors_1[_0xa9b4aa(0xeb)])(_0xfb9fb));}[_0x42e96c(0xec)](){const _0x4b2454=_0x42e96c,_0x5ed059={'HxGLz':_0x4b2454(0xe7),'CPrfL':_0x4b2454(0xf6)};this[_0x4b2454(0xfd)]['use']('/',index_1[_0x4b2454(0xeb)]),this[_0x4b2454(0xfd)][_0x4b2454(0xd9)]('/',express_1[_0x4b2454(0xeb)][_0x4b2454(0xff)](path_1[_0x4b2454(0xeb)][_0x4b2454(0xe9)](__dirname,_0x5ed059[_0x4b2454(0xe2)]))),this['httpServer'][_0x4b2454(0xec)](this[_0x4b2454(0xde)],()=>{const _0x261b51=_0x4b2454;console[_0x261b51(0xfc)](_0x5ed059[_0x261b51(0xfe)],this['HTTP']);});}}exports[_0x42e96c(0xeb)]=StartApp;