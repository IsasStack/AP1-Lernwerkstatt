const fs=require('fs');const vm=require('vm');
const ctx={T:[],console};vm.createContext(ctx);
const files=fs.readdirSync(require('path').join(__dirname,'data')).filter(f=>f.endsWith('.js')).sort();
let src='';for(const f of files)src+=fs.readFileSync(require('path').join(__dirname,'data',f),'utf8')+'\n';
src=src.replace(/\bconst (CASES|ABK|ANL|EXAMS|KEEP_CHOICE|KEY_OVR|REWORD|KEY_HIT)\s*=/g,'$1 =');
vm.runInContext(src+'\n;this.CASES=typeof CASES!=="undefined"?CASES:[];this.ABK=typeof ABK!=="undefined"?ABK:[];this.ANL=typeof ANL!=="undefined"?ANL:[];this.EXAMS=typeof EXAMS!=="undefined"?EXAMS:[];',ctx);
fs.writeFileSync(require('path').join(__dirname,'data.json'),JSON.stringify({T:ctx.T,CASES:ctx.CASES,ABK:ctx.ABK,ANL:ctx.ANL,EXAMS:ctx.EXAMS}));
console.log(ctx.T.length,ctx.CASES.length,ctx.ABK.length,ctx.ANL.length);
