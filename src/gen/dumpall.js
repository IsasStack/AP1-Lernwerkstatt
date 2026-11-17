const fs=require('fs'),vm=require('vm'),path=require('path');
const ctx={T:[],console};vm.createContext(ctx);
const dir=path.join(__dirname,'..','data');
let src='';for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.js')).sort())src+=fs.readFileSync(path.join(dir,f),'utf8')+'\n';
src=src.replace(/\bconst (CASES|ABK|ANL|EXAMS|KEEP_CHOICE|KEY_OVR|REWORD|KEY_HIT)\s*=/g,'$1 =');
vm.runInContext(src+';this.CASES=CASES;this.ABK=ABK;this.ANL=ANL;this.EXAMS=EXAMS;',ctx);
const strip=s=>String(s).replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
fs.mkdirSync('/tmp/chk',{recursive:true});
for(const t of ctx.T){
 let o=`### ${t.id}\n## KARTEN\n`;
 t.cards.forEach((c,i)=>o+=`K${i}: ${strip(c[0])} :: ${strip(c[1])}\n`);
 o+=`## FRAGEN\n`;
 t.qs.forEach((q,i)=>{const {t:ty,q:qq,...r}=q; o+=`Q${i} [${ty}] ${strip(qq)}\n   ${JSON.stringify(r).replace(/<[^>]+>/g,'')}\n`;});
 fs.writeFileSync(`/tmp/chk/${t.id}.txt`,o);
}
fs.writeFileSync('/tmp/chk/_abk.txt',ctx.ABK.map(a=>a.join(' | ')).join('\n'));
fs.writeFileSync('/tmp/chk/_cases.json',JSON.stringify(ctx.CASES,null,1));
fs.writeFileSync('/tmp/chk/_anl.json',JSON.stringify(ctx.ANL,null,1));
fs.writeFileSync('/tmp/chk/_exams.json',JSON.stringify(ctx.EXAMS,null,1));
console.log(ctx.T.map(t=>t.id+':'+t.cards.length+'/'+t.qs.length).join(' '));
