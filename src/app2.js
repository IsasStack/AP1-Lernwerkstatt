/* ====================== Erweiterung: Fallstudien, Rechner, UML ====================== */
const val = id => { const el = document.getElementById(id); return el ? el.value : ""; };
const num = id => parseNum(val(id));
const ok = x => typeof x === "number" && isFinite(x);
const row = (k, v) => `<tr><th>${k}</th><td class="mono">${v}</td></tr>`;
const bin8 = n => n.toString(2).padStart(8, "0");
const ipBin = ip => ip.split(".").map(o => bin8(+o)).join(".");
function validIp(ip) { const p = ip.trim().split("."); return p.length === 4 && p.every(o => /^\d{1,3}$/.test(o) && +o <= 255); }
function maskToPrefix(m) { if (!validIp(m)) return NaN; const n = ip2n(m); const b = n.toString(2).padStart(32, "0"); if (!/^1*0*$/.test(b)) return NaN; return b.indexOf("0") < 0 ? 32 : b.indexOf("0"); }

/* ---------- Fallstudien ---------- */
let FS = null;
function renderCases(app) {
  if (FS && FS.kind !== "anl") return renderCaseRun(app);
  S.cs = S.cs || {};
  app.innerHTML = `<h1>🏢 Fallstudien</h1><p class="sub">So ist die AP1 aufgebaut: Eine Firma, eine Ausgangssituation, mehrere Teilaufgaben. Du entscheidest, welche Hardware, welches Betriebssystem, welche Lizenzen, welches Netz und welche Sicherheitsmaßnahmen passen – und begründest es. Grundlagen dazu im Thema <a href="#t-auswahl" onclick="topicTab='wissen'">🛒 Produktauswahl & Lizenzierung</a>.</p>
  <div class="grid g2">${CASES.map(c => { const s = S.cs[c.id]; return `<div class="card click" onclick="startCase('${c.id}')"><div class="row" style="justify-content:space-between"><b>${c.icon} ${esc(c.title)}</b>${s ? `<span class="pill ${s.pct >= 80 ? "gr" : s.pct >= 50 ? "am" : "rd"}">${s.pct}%</span>` : `<span class="pill">neu</span>`}</div><div class="small muted" style="margin:6px 0 8px">${esc(c.sit.slice(0, 150))}…</div><div class="row" style="gap:5px">${c.tags.map(t => `<span class="pill cy">${t}</span>`).join("")}<span class="pill">${c.steps.length} Aufgaben</span></div></div>`; }).join("")}</div>`;
}
function startCase(id) { const isA = ANL.some(x => x.id === id); const c = CASES.concat(ANL).find(x => x.id === id); FS = { kind: isA ? "anl" : "fall", c, st: c.steps.map(s => ({ ans: s.t === "mc" ? [] : null, done: false, ok: null, pts: null, ord: s.o ? shuffle(s.o.map((_, i) => i)) : null })) }; const v = isA ? "anlagen" : "fall"; if (view === v) render(); else go(v); }
function stepPts(s) { return s.t === "open" ? s.p : s.t === "mc" ? 3 : 2; }
function renderCaseRun(app) {
  const c = FS.c;
  const html = c.steps.map((s, i) => {
    const st = FS.st[i]; let body = "", fb = "";
    if (s.t === "sc" || s.t === "mc") {
      body = st.ord.map((oi, pos) => { const sel = s.t === "sc" ? st.ans === oi : st.ans.includes(oi); let cls = sel ? "sel" : ""; if (st.done) { const r = s.t === "sc" ? oi === s.a : s.a.includes(oi); cls = r ? "right" : sel ? "wrong" : ""; } return `<button class="opt ${cls}" ${st.done ? "disabled" : ""} onclick="casePick(${i},${oi})"><span class="k">${s.t === "mc" ? (sel ? "✓" : "") : "ABCDE"[pos]}</span><span>${esc(s.o[oi])}</span></button>`; }).join("");
      if (s.t === "mc" && !st.done) body += `<button class="btn sm pri" onclick="caseCheck(${i})">Prüfen</button>`;
    } else if (s.t === "num") {
      body = `<div class="row" style="flex-wrap:nowrap"><input id="cn${i}" inputmode="decimal" style="max-width:220px;font-family:var(--mono)" value="${esc(st.ans || "")}" ${st.done ? "disabled" : ""} onkeydown="if(event.key==='Enter')caseCheck(${i})"> <span class="muted">${esc(s.unit || "")}</span>${st.done ? "" : `<button class="btn sm pri" onclick="caseCheck(${i})">Prüfen</button>`}</div>`;
    } else {
      body = `<textarea id="co${i}" ${st.done ? "disabled" : ""} placeholder="Antwort mit Begründung formulieren …">${esc(st.ans || "")}</textarea>${st.done ? "" : `<div class="row" style="margin-top:8px">${HAS_AI ? `<button class="btn sm pri" onclick="runAi('case',${i})">🤖 KI bewerten</button>` : ""}<button class="btn sm ${HAS_AI ? "" : "pri"}" onclick="caseCheck(${i})">Musterlösung zeigen</button></div>`}`;
    }
    if (st.done) {
      if (s.t === "open") fb = `<div class="fb inf"><h4>Musterlösung (${s.p} P)</h4><div class="sol">${esc(s.a)}</div><div class="pts">${Array.from({ length: s.p + 1 }, (_, p) => `<button class="btn sm ${st.pts === p ? "pri" : ""}" onclick="FS.st[${i}].pts=${p};render()">${p}</button>`).join("")}</div><div class="row" style="margin-top:8px">${aiButton("case", i, "🤖 Von KI bewerten lassen")}</div></div>${aiPanel("case", i)}`;
      else fb = `<div class="fb ${st.ok ? "ok" : "no"}"><h4>${st.ok ? "✓ Richtig" : "✗ Falsch"}${s.t === "num" ? ` – Lösung: <span class="mono">${fmt(s.a, 3)} ${esc(s.unit || "")}</span>` : ""}</h4>${s.e ? `<div class="muted">${esc(s.e)}</div>` : ""}</div>`;
    }
    return `<div class="card" style="margin-bottom:12px"><div class="row" style="justify-content:space-between"><b>Aufgabe ${i + 1}</b><span class="pill vi">${stepPts(s)} Punkte</span></div><div class="qtext" style="font-size:16px">${esc(s.q)}</div>${body}${fb}</div>`;
  }).join("");
  const all = FS.st.every((st, i) => st.done && (c.steps[i].t !== "open" || st.pts != null));
  let res = "";
  if (all) {
    const max = c.steps.reduce((a, s) => a + stepPts(s), 0), got = c.steps.reduce((a, s, i) => a + (s.t === "open" ? FS.st[i].pts : FS.st[i].ok ? stepPts(s) : 0), 0), pct = Math.round(100 * got / max);
    if (!FS.saved) { S.cs = S.cs || {}; S.cs[c.id] = { pct, got, max, d: Date.now() }; FS.saved = true; activity(c.steps.length); save(); }
    res = `<div class="card" style="text-align:center"><h2 style="margin-top:0">${got} / ${max} Punkte (${pct} %)</h2><div class="row" style="justify-content:center"><button class="btn pri" onclick="startCase('${c.id}')">↻ Nochmal</button><button class="btn" onclick="FS=null;render()">Alle Fallstudien</button></div></div>`;
  }
  app.innerHTML = `<div class="qbox"><div class="qhead"><button class="btn sm" onclick="FS=null;render()">← ${FS.kind === "anl" ? "Anlagen" : "Fallstudien"}</button><span class="row" style="gap:5px">${c.tags.map(t => `<span class="pill cy">${t}</span>`).join("")}</span></div>
  <h1>${c.icon} ${esc(c.title)}</h1>
  <div class="card" style="background:linear-gradient(135deg,#132131,#151c25);margin-bottom:16px"><div class="small dim" style="font-weight:700;letter-spacing:.05em">AUSGANGSSITUATION</div><div style="margin-top:6px;line-height:1.6">${esc(c.sit)}</div></div>
  ${c.att ? `<div class="card" style="margin-bottom:16px;border-color:#fbbf2455"><div class="small" style="font-weight:700;letter-spacing:.05em;color:var(--am);margin-bottom:8px">📎 ANLAGE</div>${c.att}</div>` : ""}
  ${html}${res}</div>`;
}
function casePick(i, oi) { const s = FS.c.steps[i], st = FS.st[i]; if (st.done) return; if (s.t === "sc") { st.ans = oi; caseCheck(i); } else { const p = st.ans.indexOf(oi); p >= 0 ? st.ans.splice(p, 1) : st.ans.push(oi); render(); } }
function caseCheck(i) {
  const s = FS.c.steps[i], st = FS.st[i];
  if (s.t === "num") { st.ans = val("cn" + i); if (!st.ans.trim()) return toast("Bitte Ergebnis eingeben"); st.ok = numOk(st.ans, s.a, s.tol); }
  else if (s.t === "mc") { if (!st.ans.length) return toast("Bitte auswählen"); st.ok = [...st.ans].sort().join() === [...s.a].sort().join(); }
  else if (s.t === "sc") st.ok = st.ans === s.a;
  else st.ans = val("co" + i);
  st.done = true; activity(); save(); render();
}

/* ---------- Taschenrechner (sicherer Parser, kein eval) ---------- */
function calcExpr(src) {
  const s = src.replace(/,/g, ".").replace(/×/g, "*").replace(/÷/g, "/").replace(/\bmod\b/gi, "%").replace(/\s+/g, "");
  let i = 0;
  const F = { sqrt: Math.sqrt, wurzel: Math.sqrt, ln: Math.log, log: Math.log10, log10: Math.log10, log2: Math.log2, abs: Math.abs, round: Math.round, ceil: Math.ceil, floor: Math.floor, sin: x => Math.sin(x * Math.PI / 180), cos: x => Math.cos(x * Math.PI / 180) };
  const C = { pi: Math.PI, e: Math.E };
  const peek = () => s[i];
  function expr() { let v = term(); while (peek() === "+" || peek() === "-") { const o = s[i++]; const r = term(); v = o === "+" ? v + r : v - r; } return v; }
  function term() { let v = power(); while ("*/%".includes(peek()) && peek()) { const o = s[i++]; const r = power(); v = o === "*" ? v * r : o === "/" ? v / r : v % r; } return v; }
  function power() { const b = unary(); if (peek() === "^") { i++; return Math.pow(b, power()); } return b; }
  function unary() { if (peek() === "-") { i++; return -unary(); } if (peek() === "+") { i++; return unary(); } return prim(); }
  function prim() {
    if (peek() === "(") { i++; const v = expr(); if (s[i++] !== ")") throw "Klammer fehlt"; return post(v); }
    const m = s.slice(i).match(/^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i);
    if (m) { i += m[0].length; return post(parseFloat(m[0])); }
    const id = s.slice(i).match(/^[a-zäöü][a-z0-9äöü]*/i);
    if (id) { const n = id[0].toLowerCase(); i += id[0].length; if (F[n]) { if (s[i++] !== "(") throw "( nach " + n; const v = expr(); if (s[i++] !== ")") throw "Klammer fehlt"; return post(F[n](v)); } if (n in C) return post(C[n]); throw "Unbekannt: " + n; }
    throw "Unerwartetes Zeichen" + (peek() ? ": " + peek() : "");
  }
  function post(v) { while (peek() === "!") { i++; let f = 1; for (let k = 2; k <= v; k++) f *= k; v = f; } return v; }
  if (!s) throw "leer";
  const v = expr(); if (i < s.length) throw "Unerwartetes Zeichen: " + s[i]; return v;
}

/* ---------- Rechner ---------- */
const CALCS = [
{ id: "subnet", cat: "Netzwerk", icon: "🔢", t: "Subnetz-Rechner", d: "Netz, Broadcast, Hosts, Maske, Binärdarstellung",
  ui: () => `<div class="tr-fields"><div><label>IP-Adresse (auch 10.0.0.5/22)</label><input id="c_ip" value="192.168.10.77" oninput="runCalc()"></div><div><label>Präfix /n oder Maske</label><input id="c_pf" value="26" oninput="runCalc()"></div></div>`,
  run() {
    let ip = val("c_ip").trim(), pf = val("c_pf").trim();
    if (ip.includes("/")) { [ip, pf] = ip.split("/"); }
    pf = pf.replace("/", "");
    const p = pf.includes(".") ? maskToPrefix(pf) : parseInt(pf, 10);
    if (!validIp(ip) || !(p >= 0 && p <= 32)) return `<div class="fb no">Bitte gültige IPv4-Adresse und Präfix (0–32) bzw. Maske eingeben.</div>`;
    const x = netInfo(ip, p), m = maskN(p), wc = n2ip(~m >>> 0), total = Math.pow(2, 32 - p);
    const o1 = +ip.split(".")[0], cls = o1 < 128 ? "A" : o1 < 192 ? "B" : o1 < 224 ? "C" : o1 < 240 ? "D (Multicast)" : "E";
    const n = ip2n(ip), priv = (n >>> 24 === 10) || (n >>> 20 === 0xAC1) || (n >>> 16 === 0xC0A8), special = o1 === 127 ? "Loopback" : (n >>> 16 === 0xA9FE) ? "APIPA/Link-Local" : priv ? "privat (RFC 1918)" : "öffentlich";
    const oct = Math.min(4, Math.max(1, Math.ceil(p / 8) || 1)), mo = +x.mask.split(".")[oct - 1], block = 256 - mo;
    const hostsTxt = p === 32 ? "1 (Host-Route)" : p === 31 ? "2 (Punkt-zu-Punkt, RFC 3021)" : fmt(x.hosts, 0);
    return `<table class="info-tbl">${row("Adresse", ip + "/" + p)}${row("Subnetzmaske", x.mask)}${row("Wildcard", wc)}${row("Netzadresse", x.net)}${row("Broadcast", x.bc)}${p <= 30 ? row("Erster Host", x.first) + row("Letzter Host", x.last) : ""}${row("Nutzbare Hosts", hostsTxt)}${row("Adressen gesamt", fmt(total, 0))}${row("Klasse (historisch)", cls)}${row("Typ", special)}</table>
    <h3 style="margin:14px 0 6px;font-size:15px">Binär</h3><pre class="code">IP     ${ipBin(ip)}\nMaske  ${ipBin(x.mask)}\nNetz   ${ipBin(x.net)}\nBC     ${ipBin(x.bc)}</pre>
    <div class="fb inf"><h4>Rechenweg</h4><div class="sol">Hostbits = 32 − ${p} = ${32 - p} → 2^${32 - p} = ${fmt(total, 0)} Adressen${p <= 30 ? `, − 2 = ${fmt(x.hosts, 0)} Hosts` : ""}.\n${p % 8 && p < 32 ? `Interessantes Oktett: ${oct}. (Maskenwert ${mo}) → Blockgröße 256 − ${mo} = ${block}. Netze in diesem Oktett: 0, ${block}, ${2 * block}, … → ${ip.split(".")[oct - 1]} liegt im Block ab ${x.net.split(".")[oct - 1]}.` : "Präfix liegt auf einer Oktettgrenze – Netz = Oktette mit Maske 255 übernehmen, Rest 0."}</div></div>`;
  }},
{ id: "split", cat: "Netzwerk", icon: "✂️", t: "Netz aufteilen", d: "Gleich große Subnetze mit Liste",
  ui: () => `<div class="tr-fields"><div><label>Basisnetz</label><input id="c_b" value="192.168.50.0/24" oninput="runCalc()"></div><div><label>Anzahl Subnetze</label><input id="c_n" value="4" oninput="runCalc()"></div></div>`,
  run() {
    const [ip, ps] = val("c_b").trim().split("/"), p = parseInt(ps, 10), k = parseInt(val("c_n"), 10);
    if (!validIp(ip) || !(p >= 0 && p <= 30) || !(k >= 1)) return `<div class="fb no">Format: 192.168.50.0/24 und Anzahl ≥ 1.</div>`;
    const bits = Math.ceil(Math.log2(k)), np = p + bits; if (np > 30) return `<div class="fb no">Zu viele Subnetze für dieses Netz (Präfix wäre /${np}).</div>`;
    const size = Math.pow(2, 32 - np), base = ip2n(netInfo(ip, p).net), cnt = Math.pow(2, bits);
    const rows = []; for (let i = 0; i < Math.min(cnt, 64); i++) { const n = base + i * size; rows.push(`<tr><td>${i + 1}</td><td class="mono">${n2ip(n)}/${np}</td><td class="mono">${n2ip(n + 1)} – ${n2ip(n + size - 2)}</td><td class="mono">${n2ip(n + size - 1)}</td></tr>`); }
    return `<div class="fb inf"><div class="sol">${k} Subnetze → 2^${bits} = ${cnt} ≥ ${k} → ${bits} Bit leihen → <b>/${np}</b> (Maske ${n2ip(maskN(np))}).\nJe Subnetz ${size} Adressen, <b>${size - 2} Hosts</b>.${cnt > k ? `\nHinweis: Es entstehen ${cnt} Subnetze (Zweierpotenz), ${cnt - k} bleiben als Reserve.` : ""}</div></div>
    <div class="gridwrap"><table class="info-tbl"><tr><th>#</th><th>Netz</th><th>Hostbereich</th><th>Broadcast</th></tr>${rows.join("")}</table></div>${cnt > 64 ? `<div class="small dim">… nur die ersten 64 angezeigt.</div>` : ""}`;
  }},
{ id: "vlsm", cat: "Netzwerk", icon: "🧩", t: "VLSM – Netze nach Hostbedarf", d: "Unterschiedlich große Subnetze passend vergeben",
  ui: () => `<div class="tr-fields"><div><label>Basisnetz</label><input id="c_vb" value="10.10.0.0/24" oninput="runCalc()"></div><div><label>Hostbedarf je Abteilung (Komma)</label><input id="c_vh" value="60, 28, 12, 2" oninput="runCalc()"></div></div>`,
  run() {
    const [ip, ps] = val("c_vb").trim().split("/"), p = parseInt(ps, 10);
    const req = val("c_vh").split(/[,;\s]+/).map(Number).filter(n => n > 0);
    if (!validIp(ip) || !(p >= 0 && p <= 30) || !req.length) return `<div class="fb no">Bitte Basisnetz und Hostzahlen angeben.</div>`;
    const list = req.map((h, i) => ({ h, i })).sort((a, b) => b.h - a.h);
    let cur = ip2n(netInfo(ip, p).net); const end = cur + Math.pow(2, 32 - p); const out = [];
    for (const r of list) { let hb = 2; while (Math.pow(2, hb) - 2 < r.h) hb++; const size = Math.pow(2, hb); if (cur % size) cur = Math.ceil(cur / size) * size; if (cur + size > end) { out.push(`<tr><td>${r.i + 1}</td><td>${r.h}</td><td colspan="4" style="color:var(--rd)">passt nicht mehr ins Basisnetz</td></tr>`); continue; } out.push(`<tr><td>${r.i + 1}</td><td>${r.h}</td><td class="mono">${n2ip(cur)}/${32 - hb}</td><td class="mono">${n2ip(maskN(32 - hb))}</td><td class="mono">${n2ip(cur + 1)} – ${n2ip(cur + size - 2)}</td><td>${size - 2}</td></tr>`); cur += size; }
    return `<div class="fb inf"><div class="sol">Vorgehen: Bedarfe absteigend sortieren, je Bedarf kleinstes n mit 2^n − 2 ≥ Hosts wählen, Netze lückenlos hintereinander vergeben.</div></div><div class="gridwrap"><table class="info-tbl"><tr><th>Abt.</th><th>Bedarf</th><th>Netz</th><th>Maske</th><th>Hosts von–bis</th><th>nutzbar</th></tr>${out.join("")}</table></div><div class="small muted">Verbraucht: ${fmt(cur - ip2n(netInfo(ip, p).net), 0)} von ${fmt(Math.pow(2, 32 - p), 0)} Adressen.</div>`;
  }},
{ id: "ipv6", cat: "Netzwerk", icon: "6️⃣", t: "IPv6-Rechner", d: "Kürzen, ausschreiben, Typ, Präfix",
  ui: () => `<div class="tr-fields"><div><label>IPv6-Adresse (optional /Präfix)</label><input id="c_6" value="2001:0db8:0000:0000:0a00:0000:0000:0042/64" oninput="runCalc()"></div></div>`,
  run() {
    const [a, pr] = val("c_6").trim().split("/"), full = expand6(a);
    if (!full) return `<div class="fb no">Keine gültige IPv6-Adresse.</div>`;
    const short = compress6(full), b = full.replace(/:/g, ""), first = parseInt(b.slice(0, 4), 16);
    const typ = full === "0000:0000:0000:0000:0000:0000:0000:0001" ? "Loopback (::1)" : /^fe[89ab]/.test(b) ? "Link-Local (fe80::/10)" : /^f[cd]/.test(b) ? "Unique Local (fc00::/7)" : /^ff/.test(b) ? "Multicast (ff00::/8)" : b.startsWith("20010db8") ? "Dokumentation (2001:db8::/32)" : (first >> 13) === 1 ? "Global Unicast (2000::/3)" : "sonstige/reserviert";
    let pre = "";
    const p = parseInt(pr, 10);
    if (p >= 0 && p <= 128) { const bits = b.split("").map(h => parseInt(h, 16).toString(2).padStart(4, "0")).join(""); const nb = bits.slice(0, p).padEnd(128, "0"); const hex = nb.match(/.{4}/g).map(x => parseInt(x, 2).toString(16)).join("").match(/.{4}/g).join(":"); pre = row("Netzpräfix", compress6(hex) + "/" + p) + row("Subnetz-/Hostanteil", `${p} Bit Netz, ${128 - p} Bit Interface-ID`) + (p <= 64 ? row("Anzahl /64-Subnetze darin", "2^" + (64 - p) + " = " + fmt(Math.pow(2, 64 - p), 0)) : ""); }
    return `<table class="info-tbl">${row("Gekürzt", short)}${row("Ausgeschrieben", full)}${row("Typ", typ)}${pre}${row("Interface-ID (letzte 64 Bit)", compress6("0000:0000:0000:0000:" + full.split(":").slice(4).join(":")).replace(/^::/, "::"))}</table>
    <div class="fb inf"><div class="sol">Regeln: führende Nullen je Block weglassen; die längste Folge von ≥ 2 Null-Blöcken einmal durch :: ersetzen (bei Gleichstand die erste).</div></div>`;
  }},
{ id: "zahl", cat: "Zahlen & Daten", icon: "🔁", t: "Zahlensystem-Umrechner", d: "Dezimal, Binär, Hex, Oktal",
  ui: () => `<div class="tr-fields"><div><label>Zahl</label><input id="c_z" value="182" oninput="runCalc()"></div><div><label>Eingabe ist …</label><select id="c_zb" onchange="runCalc()"><option value="10">dezimal</option><option value="2">binär</option><option value="16">hexadezimal</option><option value="8">oktal</option></select></div></div>`,
  run() {
    const raw = val("c_z").trim().replace(/\s/g, "").replace(/^0x|^0b|^0o/i, ""), base = +val("c_zb");
    const ok_ = { 10: /^\d+$/, 2: /^[01]+$/, 16: /^[0-9a-f]+$/i, 8: /^[0-7]+$/ }[base].test(raw);
    if (!ok_) return `<div class="fb no">Ungültige Ziffern für dieses Zahlensystem.</div>`;
    const n = parseInt(raw, base); if (!isFinite(n) || n > Number.MAX_SAFE_INTEGER) return `<div class="fb no">Zahl zu groß.</div>`;
    const b = n.toString(2), pad = b.padStart(Math.ceil(b.length / 4) * 4, "0").match(/.{4}/g).join(" ");
    const steps = []; let k = n; if (n && n < 100000) { while (k > 0) { steps.push(`${k} : 2 = ${Math.floor(k / 2)} Rest ${k % 2}`); k = Math.floor(k / 2); } }
    return `<table class="info-tbl">${row("Dezimal", fmt(n, 0))}${row("Binär", pad)}${row("Hexadezimal", "0x" + n.toString(16).toUpperCase())}${row("Oktal", n.toString(8))}${row("Benötigte Bits", b.length)}</table>
    ${steps.length && steps.length <= 20 ? `<div class="fb inf"><h4>Dezimal → Binär (Restwertmethode, Reste von unten lesen)</h4><div class="sol mono small">${steps.join("\n")}</div></div>` : ""}`;
  }},
{ id: "einheit", cat: "Zahlen & Daten", icon: "📏", t: "Datenmengen umrechnen", d: "Bit/Byte, SI (kB, MB) und IEC (KiB, MiB)",
  ui: () => `<div class="tr-fields"><div><label>Wert</label><input id="c_ev" value="1" oninput="runCalc()"></div><div><label>Einheit</label><select id="c_eu" onchange="runCalc()">${UNITS.map(u => `<option ${u[0] === "TB" ? "selected" : ""}>${u[0]}</option>`).join("")}</select></div></div>`,
  run() {
    const v = num("c_ev"), u = UNITS.find(x => x[0] === val("c_eu")); if (!ok(v)) return "";
    const bits = v * u[1];
    return `<div class="gridwrap"><table class="info-tbl"><tr><th>Einheit</th><th>Wert</th><th>Einheit</th><th>Wert</th></tr>${[["bit", "Byte"], ["kbit", "kB"], ["Mbit", "MB"], ["Gbit", "GB"], ["Tbit", "TB"], ["KiB", "MiB"], ["GiB", "TiB"]].map(([a, b]) => `<tr><td>${a}</td><td class="mono">${fmt(bits / UNITS.find(x => x[0] === a)[1], 6)}</td><td>${b}</td><td class="mono">${fmt(bits / UNITS.find(x => x[0] === b)[1], 6)}</td></tr>`).join("")}</table></div><div class="small muted">SI: Faktor 1000 · IEC: Faktor 1024 · 1 Byte = 8 Bit</div>`;
  }},
{ id: "transfer", cat: "Zahlen & Daten", icon: "📡", t: "Übertragungszeit", d: "Datenmenge ÷ Datenrate, mit Overhead",
  ui: () => `<div class="tr-fields"><div><label>Datenmenge</label><input id="c_tm" value="4,7" oninput="runCalc()"></div><div><label>Einheit</label><select id="c_tu" onchange="runCalc()">${UNITS.map(u => `<option ${u[0] === "GB" ? "selected" : ""}>${u[0]}</option>`).join("")}</select></div><div><label>Datenrate</label><input id="c_tr" value="100" oninput="runCalc()"></div><div><label>Einheit</label><select id="c_tru" onchange="runCalc()">${["kbit", "Mbit", "Gbit", "kB", "MB", "GB"].map(u => `<option ${u === "Mbit" ? "selected" : ""}>${u}</option>`).join("")}</select><div class="small dim">pro Sekunde</div></div><div><label>Protokoll-Overhead %</label><input id="c_to" value="0" oninput="runCalc()"></div></div>`,
  run() {
    const m = num("c_tm"), r = num("c_tr"), o = num("c_to") || 0; if (!ok(m) || !ok(r) || r <= 0) return "";
    const bits = m * UNITS.find(x => x[0] === val("c_tu"))[1], rate = r * UNITS.find(x => x[0] === val("c_tru"))[1] * (1 - o / 100), t = bits / rate;
    const hms = `${Math.floor(t / 3600)} h ${Math.floor(t % 3600 / 60)} min ${fmt(t % 60, 1)} s`;
    return `<table class="info-tbl">${row("Datenmenge in Bit", fmt(bits, 0))}${row("Effektive Rate (Bit/s)", fmt(rate, 0))}${row("Zeit", fmt(t, 2) + " s")}${row("= Minuten", fmt(t / 60, 2))}${row("= h/min/s", hms)}</table><div class="fb inf"><div class="sol">t = ${fmt(bits, 0)} Bit ÷ ${fmt(rate, 0)} Bit/s = ${fmt(t, 2)} s</div></div>`;
  }},
{ id: "medien", cat: "Zahlen & Daten", icon: "🖼️", t: "Bild-, Video-, Audiogröße", d: "Speicherbedarf unkomprimiert oder per Bitrate",
  ui: () => `<div class="seg" style="margin-bottom:10px"><button id="mb1" class="on" onclick="CALCST.m='bild';runCalcUi()">Bild</button><button id="mb2" onclick="CALCST.m='video';runCalcUi()">Video</button><button id="mb3" onclick="CALCST.m='audio';runCalcUi()">Audio</button><button id="mb4" onclick="CALCST.m='rate';runCalcUi()">Bitrate</button></div>
  ${(() => { const m = CALCST.m || "bild"; setTimeout(() => ["bild", "video", "audio", "rate"].forEach((k, i) => { const b = document.getElementById("mb" + (i + 1)); if (b) b.classList.toggle("on", k === m); }), 0);
    if (m === "audio") return `<div class="tr-fields"><div><label>Abtastrate Hz</label><input id="c_ah" value="44100" oninput="runCalc()"></div><div><label>Bittiefe</label><input id="c_ab" value="16" oninput="runCalc()"></div><div><label>Kanäle</label><input id="c_ak" value="2" oninput="runCalc()"></div><div><label>Dauer (s)</label><input id="c_ad" value="60" oninput="runCalc()"></div></div>`;
    if (m === "rate") return `<div class="tr-fields"><div><label>Bitrate (Mbit/s)</label><input id="c_rb" value="8" oninput="runCalc()"></div><div><label>Dauer (min)</label><input id="c_rd" value="90" oninput="runCalc()"></div></div>`;
    return `<div class="tr-fields"><div><label>Breite px</label><input id="c_w" value="1920" oninput="runCalc()"></div><div><label>Höhe px</label><input id="c_h" value="1080" oninput="runCalc()"></div><div><label>Farbtiefe Bit</label><input id="c_b2" value="24" oninput="runCalc()"></div>${m === "video" ? `<div><label>fps</label><input id="c_f" value="25" oninput="runCalc()"></div><div><label>Dauer (s)</label><input id="c_s" value="60" oninput="runCalc()"></div>` : ""}</div>`; })()}`,
  run() {
    const m = CALCST.m || "bild", o = by => `${row("Byte", fmt(by, 0))}${row("MB (10⁶)", fmt(by / 1e6, 3))}${row("MiB (2²⁰)", fmt(by / 1048576, 3))}${row("GB (10⁹)", fmt(by / 1e9, 4))}`;
    if (m === "audio") { const by = num("c_ah") * num("c_ab") * num("c_ak") * num("c_ad") / 8; if (!ok(by)) return ""; return `<table class="info-tbl">${o(by)}</table><div class="fb inf"><div class="sol">${val("c_ah")} Hz × ${val("c_ab")} Bit × ${val("c_ak")} Kanäle × ${val("c_ad")} s ÷ 8 = ${fmt(by, 0)} Byte</div></div>`; }
    if (m === "rate") { const by = num("c_rb") * 1e6 * num("c_rd") * 60 / 8; if (!ok(by)) return ""; return `<table class="info-tbl">${o(by)}</table><div class="fb inf"><div class="sol">${val("c_rb")} Mbit/s × ${fmt(num("c_rd") * 60, 0)} s = ${fmt(by * 8 / 1e6, 0)} Mbit ÷ 8 = ${fmt(by / 1e6, 1)} MB</div></div>`; }
    const img = num("c_w") * num("c_h") * num("c_b2") / 8; if (!ok(img)) return "";
    if (m === "video") { const by = img * num("c_f") * num("c_s"); if (!ok(by)) return ""; return `<table class="info-tbl">${row("Einzelbild", fmt(img, 0) + " Byte")}${o(by)}${row("Datenrate", fmt(img * num("c_f") * 8 / 1e6, 1) + " Mbit/s")}</table>`; }
    return `<table class="info-tbl">${o(img)}${row("Farben", "2^" + val("c_b2") + " = " + fmt(Math.pow(2, num("c_b2")), 0))}</table><div class="fb inf"><div class="sol">${val("c_w")} × ${val("c_h")} × ${val("c_b2")} Bit ÷ 8 = ${fmt(img, 0)} Byte</div></div>`;
  }},
{ id: "chmod", cat: "Zahlen & Daten", icon: "🐧", t: "chmod-Rechner", d: "rwx ↔ Oktal",
  ui: () => `<div class="tr-fields"><div><label>Oktal (z. B. 750) oder rwxr-x---</label><input id="c_cm" value="754" oninput="runCalc()"></div></div>`,
  run() {
    const v = val("c_cm").trim(); let d;
    if (/^[0-7]{3}$/.test(v)) d = v.split("").map(Number);
    else if (/^[r-][w-][x-][r-][w-][x-][r-][w-][x-]$/.test(v)) d = [0, 3, 6].map(i => (v[i] === "r" ? 4 : 0) + (v[i + 1] === "w" ? 2 : 0) + (v[i + 2] === "x" ? 1 : 0));
    else return `<div class="fb no">3 Oktalziffern oder 9 Zeichen rwx/-.</div>`;
    const sym = d.map(x => (x & 4 ? "r" : "-") + (x & 2 ? "w" : "-") + (x & 1 ? "x" : "-"));
    return `<table class="info-tbl"><tr><th></th><th>Besitzer (u)</th><th>Gruppe (g)</th><th>Andere (o)</th></tr><tr><th>Oktal</th>${d.map(x => `<td class="mono">${x}</td>`).join("")}</tr><tr><th>Symbolisch</th>${sym.map(x => `<td class="mono">${x}</td>`).join("")}</tr></table><pre class="code">chmod ${d.join("")} datei   →   -${sym.join("")}</pre>`;
  }},
{ id: "strom", cat: "Technik", icon: "⚡", t: "Strom & Energiekosten", d: "P = U·I, kWh, Kosten, USV-Größe",
  ui: () => `<div class="tr-fields"><div><label>Leistung pro Gerät (W)</label><input id="c_pw" value="120" oninput="runCalc()"></div><div><label>Anzahl Geräte</label><input id="c_pn" value="1" oninput="runCalc()"></div><div><label>Stunden pro Tag</label><input id="c_ph" value="8" oninput="runCalc()"></div><div><label>Tage pro Jahr</label><input id="c_pd" value="220" oninput="runCalc()"></div><div><label>Strompreis €/kWh</label><input id="c_pp" value="0,35" oninput="runCalc()"></div><div><label>Leistungsfaktor cos φ (für USV)</label><input id="c_pc" value="0,9" oninput="runCalc()"></div></div>
  <div class="tr-fields"><div><label>Spannung U (V)</label><input id="c_u" value="230" oninput="runCalc()"></div><div><label>Strom I (A)</label><input id="c_i" value="0,5" oninput="runCalc()"></div></div>`,
  run() {
    const w = num("c_pw"), n = num("c_pn"), h = num("c_ph"), d = num("c_pd"), pr = num("c_pp"), cp = num("c_pc"), U = num("c_u"), I = num("c_i");
    const P = w * n, kwh = P / 1000 * h * d, cost = kwh * pr;
    return `<table class="info-tbl">${row("Gesamtleistung", fmt(P) + " W")}${row("Energie/Jahr", fmt(kwh) + " kWh")}${row("Kosten/Jahr", fmt(cost) + " €")}${row("Kosten/Monat", fmt(cost / 12) + " €")}${ok(cp) && cp > 0 ? row("USV-Scheinleistung S = P / cos φ", fmt(P / cp, 0) + " VA") : ""}${ok(U) && ok(I) ? row("P = U × I", `${fmt(U)} V × ${fmt(I)} A = ${fmt(U * I)} W`) : ""}</table>
    <div class="fb inf"><div class="sol">${fmt(P)} W = ${fmt(P / 1000, 3)} kW × ${fmt(h)} h × ${fmt(d, 0)} Tage = ${fmt(kwh)} kWh × ${fmt(pr)} € = ${fmt(cost)} €</div></div>`;
  }},
{ id: "sla", cat: "Technik", icon: "📈", t: "Verfügbarkeit / SLA", d: "Prozent ↔ erlaubte Ausfallzeit",
  ui: () => `<div class="tr-fields"><div><label>Verfügbarkeit %</label><input id="c_sv" value="99,9" oninput="runCalc()"></div><div><label>Zeitraum</label><select id="c_sz" onchange="runCalc()"><option value="8760">Jahr (365 Tage)</option><option value="720">Monat (30 Tage)</option><option value="168">Woche</option><option value="24">Tag</option></select></div><div><label>… oder Ausfall in Stunden</label><input id="c_sa" placeholder="optional" oninput="runCalc()"></div></div>`,
  run() {
    const v = num("c_sv"), z = +val("c_sz"), a = num("c_sa");
    let html = "";
    if (ok(v)) { const h = z * (100 - v) / 100; html += `<table class="info-tbl">${row("Erlaubter Ausfall", fmt(h, 3) + " h")}${row("= Minuten", fmt(h * 60, 1))}${row("Verfügbare Zeit", fmt(z - h, 2) + " h")}</table>`; }
    if (ok(a)) html += `<table class="info-tbl" style="margin-top:10px">${row(`Verfügbarkeit bei ${fmt(a)} h Ausfall`, fmt(100 * (z - a) / z, 4) + " %")}</table>`;
    return html + `<div class="fb inf"><div class="sol">Ausfall = Gesamtzeit × (100 % − Verfügbarkeit). Verfügbarkeit = (Gesamtzeit − Ausfall) ÷ Gesamtzeit.</div></div>`;
  }},
{ id: "lizenz", cat: "Lizenzen", icon: "🪪", t: "Windows-Server-Lizenzen & CALs", d: "Kernlizenzen, VMs, User- vs. Device-CAL",
  ui: () => `<div class="tr-fields"><div><label>Prozessoren (Sockel)</label><input id="c_ls" value="2" oninput="runCalc()"></div><div><label>Kerne pro Prozessor</label><input id="c_lk" value="10" oninput="runCalc()"></div><div><label>Windows-Server-VMs</label><input id="c_lv" value="6" oninput="runCalc()"></div><div><label>Benutzer</label><input id="c_lu" value="45" oninput="runCalc()"></div><div><label>Geräte</label><input id="c_ld" value="70" oninput="runCalc()"></div><div><label>davon: Personen an geteilten Geräten / Anzahl geteilte Geräte</label><input id="c_lsh" value="25/12" oninput="runCalc()"></div></div>`,
  run() {
    const s = num("c_ls"), k = num("c_lk"), vm = num("c_lv"), u = num("c_lu"), d = num("c_ld");
    if (![s, k, vm].every(ok)) return "";
    const phys = s * k, lic = Math.max(16, s * Math.max(8, k)), stacks = Math.max(1, Math.ceil(vm / 2)), std = lic * stacks;
    const p16 = Math.floor(lic / 16), p2 = (lic - p16 * 16) / 2;
    const sh = val("c_lsh").split("/").map(Number), shP = sh[0] || 0, shD = sh[1] || 0;
    let cal = "";
    if (ok(u) && ok(d)) cal = `${row("Nur User-CALs", fmt(u + shP, 0))}${row("Nur Device-CALs", fmt(d, 0))}${shD ? row("Optimal gemischt", `${fmt(u, 0)} User + ${fmt(shD, 0)} Device = <b>${fmt(u + shD, 0)}</b>`) : ""}`;
    return `<table class="info-tbl">${row("Physische Kerne", phys)}${row("Kernlizenzen (min. 8/CPU, 16/Server)", `<b>${lic}</b> = ${p16} × 16er-Paket${p2 ? " + " + p2 + " × 2er-Paket" : ""}`)}${row("Standard: Lizenzierungen für " + vm + " VMs", `${stacks} × ${lic} = <b>${std}</b> Kernlizenzen (2 VMs je Lizenzierung)`)}${row("Datacenter", `<b>${lic}</b> Kernlizenzen, unbegrenzt VMs`)}${cal}</table>
    <div class="fb inf"><div class="sol">Faustregel: Ab ca. 10–12 VMs pro Host ist Datacenter meist günstiger als gestapelte Standard-Lizenzen.\nUser-CAL für Personen mit mehreren Geräten, Device-CAL für Geräte mit mehreren Personen (Schicht). Für Remotedesktop zusätzlich RDS-CALs.</div></div>`;
  }},
{ id: "kosten", cat: "Wirtschaft", icon: "💶", t: "Abo-/Lizenzkosten vergleichen", d: "Pro Benutzer/Monat, Jahressumme, mehrere Pläne",
  ui: () => `<div class="tr-fields"><div><label>Benutzer</label><input id="c_ku" value="25" oninput="runCalc()"></div><div><label>Laufzeit (Monate)</label><input id="c_km" value="36" oninput="runCalc()"></div><div><label>Plan A: Name / €/Nutzer/Monat</label><input id="c_ka" value="Business Standard / 11,70" oninput="runCalc()"></div><div><label>Plan B</label><input id="c_kb" value="Business Premium / 20,60" oninput="runCalc()"></div><div><label>Kauflizenz: € einmalig/Nutzer (optional)</label><input id="c_kk" value="Office LTSC / 450" oninput="runCalc()"></div></div><div class="small dim">Preise sind Beispielwerte – trage die Zahlen aus der Aufgabe ein.</div>`,
  run() {
    const u = num("c_ku"), m = num("c_km"); if (!ok(u) || !ok(m)) return "";
    const parse = s => { const [n, p] = s.split("/"); return { n: (n || "").trim(), p: parseNum(p) }; };
    const a = parse(val("c_ka")), b = parse(val("c_kb")), k = parse(val("c_kk"));
    const rows = [a, b].filter(x => ok(x.p)).map(x => row(esc(x.n), `${fmt(x.p * u)} €/Monat · ${fmt(x.p * u * 12)} €/Jahr · <b>${fmt(x.p * u * m)} €</b> in ${m} Mon.`)).join("");
    return `<table class="info-tbl">${rows}${ok(k.p) ? row(esc(k.n) + " (Kauf)", `<b>${fmt(k.p * u)} €</b> einmalig`) : ""}</table>${ok(a.p) && ok(b.p) ? `<div class="fb inf"><div class="sol">Differenz über ${m} Monate: ${fmt(Math.abs(a.p - b.p) * u * m)} €${ok(k.p) && ok(a.p) ? `\nKauf lohnt sich gegenüber ${esc(a.n)} nach ${fmt(k.p / a.p, 1)} Monaten (ohne neue Funktionen/Cloud-Dienste).` : ""}</div></div>` : ""}`;
  }},
{ id: "amort", cat: "Wirtschaft", icon: "⏳", t: "Amortisation", d: "Investition ÷ Einsparung, mit Verlauf",
  ui: () => `<div class="tr-fields"><div><label>Investition €</label><input id="c_ai" value="12000" oninput="runCalc()"></div><div><label>Laufende Kosten alt (pro Periode)</label><input id="c_ao" value="900" oninput="runCalc()"></div><div><label>Laufende Kosten neu (pro Periode)</label><input id="c_an" value="500" oninput="runCalc()"></div><div><label>Periode</label><select id="c_ap" onchange="runCalc()"><option>Monat</option><option>Jahr</option></select></div></div>`,
  run() {
    const i = num("c_ai"), o = num("c_ao"), n = num("c_an"), per = val("c_ap"); if (![i, o, n].every(ok)) return "";
    const s = o - n; if (s <= 0) return `<div class="fb no">Keine Einsparung – die Investition amortisiert sich nie.</div>`;
    const t = i / s, rows = []; for (let k = 1; k <= Math.min(Math.ceil(t) + 2, 60); k++) rows.push(`<tr><td>${k}</td><td class="mono">${fmt(s * k)} €</td><td class="mono" style="color:${s * k >= i ? "var(--gr)" : "var(--tx2)"}">${fmt(s * k - i)} €</td></tr>`);
    return `<table class="info-tbl">${row("Einsparung je " + per, fmt(s) + " €")}${row("Amortisationszeit", `<b>${fmt(t, 2)} ${per === "Monat" ? "Monate" : "Jahre"}</b>`)}</table><div class="fb inf"><div class="sol">${fmt(i)} € ÷ ${fmt(s)} € = ${fmt(t, 2)}</div></div><div class="gridwrap"><table class="info-tbl"><tr><th>${per}</th><th>kum. Einsparung</th><th>Saldo</th></tr>${rows.join("")}</table></div>`;
  }},
{ id: "breakeven", cat: "Wirtschaft", icon: "⚖️", t: "Kostenvergleich / Break-even", d: "Fix + variabel, ab welcher Menge lohnt sich was?",
  ui: () => `<div class="tr-fields"><div><label>A: Fixkosten €</label><input id="c_fa" value="800" oninput="runCalc()"></div><div><label>A: variabel €/Stück</label><input id="c_va" value="0,04" oninput="runCalc()"></div><div><label>B: Fixkosten €</label><input id="c_fb" value="200" oninput="runCalc()"></div><div><label>B: variabel €/Stück</label><input id="c_vb" value="0,07" oninput="runCalc()"></div><div><label>Erwartete Menge (optional)</label><input id="c_xm" value="30000" oninput="runCalc()"></div></div>`,
  run() {
    const fa = num("c_fa"), va = num("c_va"), fb = num("c_fb"), vb = num("c_vb"), x = num("c_xm"); if (![fa, va, fb, vb].every(ok)) return "";
    if (va === vb) return `<div class="fb inf">Gleiche variable Kosten – es gibt keinen Schnittpunkt; günstiger ist immer die Variante mit den niedrigeren Fixkosten.</div>`;
    const be = (fb - fa) / (va - vb);
    return `<table class="info-tbl">${row("Break-even-Menge", `<b>${fmt(be, 2)}</b>`)}${row("Darüber günstiger", va < vb ? "A (geringere variable Kosten)" : "B (geringere variable Kosten)")}${ok(x) ? row(`Kosten bei ${fmt(x, 0)}`, `A: ${fmt(fa + va * x)} € · B: ${fmt(fb + vb * x)} € → ${fa + va * x < fb + vb * x ? "A" : "B"} günstiger`) : ""}</table><div class="fb inf"><div class="sol">${fmt(fa)} + ${fmt(va)}·x = ${fmt(fb)} + ${fmt(vb)}·x → x = (${fmt(fb)} − ${fmt(fa)}) ÷ (${fmt(va)} − ${fmt(vb)}) = ${fmt(be, 2)}</div></div>`;
  }},
{ id: "kalk", cat: "Wirtschaft", icon: "🧾", t: "Bezugspreis & USt", d: "Rabatt, Skonto, Bezugskosten, Brutto/Netto",
  ui: () => `<div class="tr-fields"><div><label>Listenpreis netto €</label><input id="c_lp" value="2000" oninput="runCalc()"></div><div><label>Rabatt %</label><input id="c_rb" value="10" oninput="runCalc()"></div><div><label>Skonto %</label><input id="c_sk" value="2" oninput="runCalc()"></div><div><label>Bezugskosten €</label><input id="c_bk" value="30" oninput="runCalc()"></div><div><label>USt %</label><input id="c_us" value="19" oninput="runCalc()"></div><div><label>Menge</label><input id="c_me" value="1" oninput="runCalc()"></div></div>`,
  run() {
    const lp = num("c_lp"), rb = num("c_rb") || 0, sk = num("c_sk") || 0, bk = num("c_bk") || 0, us = num("c_us") || 0, me = num("c_me") || 1; if (!ok(lp)) return "";
    const L = lp * me, z = L * (1 - rb / 100), b = z * (1 - sk / 100), bez = b + bk;
    return `<pre class="code">  Listenpreis       ${fmt(L).padStart(12)} €\n− Rabatt ${String(rb).padEnd(4)}%     ${fmt(L - z).padStart(12)} €\n= Zieleinkaufspreis ${fmt(z).padStart(11)} €\n− Skonto ${String(sk).padEnd(4)}%     ${fmt(z - b).padStart(12)} €\n= Bareinkaufspreis  ${fmt(b).padStart(11)} €\n+ Bezugskosten      ${fmt(bk).padStart(11)} €\n= Bezugspreis netto ${fmt(bez).padStart(11)} €\n+ USt ${us} %          ${fmt(bez * us / 100).padStart(11)} €\n= Brutto            ${fmt(bez * (1 + us / 100)).padStart(11)} €</pre><div class="small muted">Netto aus Brutto: Brutto ÷ ${fmt(1 + us / 100)} (nicht × ${fmt(1 - us / 100)}!)</div>`;
  }},
{ id: "kaufleasing", cat: "Wirtschaft", icon: "🤝", t: "Kauf vs. Leasing vs. Miete", d: "Gesamtkosten über die Laufzeit + Abschreibung",
  ui: () => `<div class="tr-fields"><div><label>Kaufpreis €</label><input id="c_kp" value="1500" oninput="runCalc()"></div><div><label>Wartung bei Kauf €/Monat</label><input id="c_kw" value="10" oninput="runCalc()"></div><div><label>Leasingrate €/Monat</label><input id="c_lr" value="45" oninput="runCalc()"></div><div><label>Sonderzahlung Leasing €</label><input id="c_ls2" value="0" oninput="runCalc()"></div><div><label>Miete €/Monat</label><input id="c_mi" value="60" oninput="runCalc()"></div><div><label>Laufzeit Monate</label><input id="c_lz" value="36" oninput="runCalc()"></div><div><label>Nutzungsdauer AfA (Jahre)</label><input id="c_nd" value="3" oninput="runCalc()"></div></div>`,
  run() {
    const kp = num("c_kp"), kw = num("c_kw") || 0, lr = num("c_lr"), ls = num("c_ls2") || 0, mi = num("c_mi"), lz = num("c_lz"), nd = num("c_nd"); if (![kp, lz].every(ok)) return "";
    const kauf = kp + kw * lz, leas = ok(lr) ? ls + lr * lz : NaN, miete = ok(mi) ? mi * lz : NaN, best = Math.min(...[kauf, leas, miete].filter(ok));
    const c = v => ok(v) ? `${fmt(v)} €${v === best ? " ✅" : ""}` : "–";
    return `<table class="info-tbl">${row("Kauf (inkl. Wartung)", c(kauf))}${row("Leasing", c(leas))}${row("Miete", c(miete))}${ok(nd) && nd > 0 ? row("Lineare AfA pro Jahr (Kauf)", fmt(kp / nd) + " €") : ""}</table><div class="fb inf"><div class="sol">Rein rechnerisch günstigste Variante markiert. In der Begründung zusätzlich: Liquidität, Flexibilität, Aktualität der Technik, Service, Eigentum.</div></div>`;
  }},
{ id: "prozent", cat: "Wirtschaft", icon: "％", t: "Prozentrechnung", d: "Zwei Werte eingeben – der dritte wird berechnet",
  ui: () => `<div class="tr-fields"><div><label>Grundwert G</label><input id="c_g" value="250" oninput="runCalc()"></div><div><label>Prozentsatz p %</label><input id="c_p" value="19" oninput="runCalc()"></div><div><label>Prozentwert W</label><input id="c_w2" placeholder="leer lassen = berechnen" oninput="runCalc()"></div></div>`,
  run() {
    const G = num("c_g"), p = num("c_p"), W = num("c_w2");
    if (ok(G) && ok(p) && !ok(W)) return `<table class="info-tbl">${row("Prozentwert W = G × p / 100", fmt(G * p / 100, 4))}${row("G + W (Erhöhung)", fmt(G * (1 + p / 100), 4))}${row("G − W (Minderung)", fmt(G * (1 - p / 100), 4))}</table>`;
    if (ok(G) && ok(W) && !ok(p)) return `<table class="info-tbl">${row("p = W / G × 100", fmt(W / G * 100, 4) + " %")}</table>`;
    if (ok(p) && ok(W) && !ok(G)) return `<table class="info-tbl">${row("G = W / p × 100", fmt(W / p * 100, 4))}</table>`;
    return `<div class="small muted">Genau ein Feld leer lassen.</div>`;
  }},
{ id: "nwa", cat: "Planung", icon: "📊", t: "Nutzwertanalyse-Rechner", d: "Eigene Kriterien, Gewichte und Punkte",
  ui: () => { const st = CALCST.nwa || (CALCST.nwa = { offers: ["A", "B", "C"], rows: [["Preis", 40, [8, 6, 7]], ["Leistung", 35, [5, 9, 7]], ["Service", 25, [7, 6, 8]]] });
    return `<div class="gridwrap"><table class="gridtbl"><tr><th>Kriterium</th><th>Gewicht %</th>${st.offers.map((o, j) => `<th><input style="width:80px" value="${esc(o)}" oninput="CALCST.nwa.offers[${j}]=this.value;runCalc()"></th>`).join("")}<th></th></tr>${st.rows.map((r, i) => `<tr><td><input style="width:130px;text-align:left" value="${esc(r[0])}" oninput="CALCST.nwa.rows[${i}][0]=this.value"></td><td><input value="${r[1]}" oninput="CALCST.nwa.rows[${i}][1]=parseNum(this.value);runCalc()"></td>${st.offers.map((o, j) => `<td><input value="${r[2][j] ?? ""}" oninput="CALCST.nwa.rows[${i}][2][${j}]=parseNum(this.value);runCalc()"></td>`).join("")}<td><button class="btn sm" onclick="CALCST.nwa.rows.splice(${i},1);runCalcUi()">✕</button></td></tr>`).join("")}</table></div>
    <div class="row"><button class="btn sm" onclick="CALCST.nwa.rows.push(['Kriterium',0,CALCST.nwa.offers.map(()=>5)]);runCalcUi()">+ Kriterium</button><button class="btn sm" onclick="CALCST.nwa.offers.push(String.fromCharCode(65+CALCST.nwa.offers.length));CALCST.nwa.rows.forEach(r=>r[2].push(5));runCalcUi()">+ Angebot</button>${st.offers.length > 2 ? `<button class="btn sm" onclick="CALCST.nwa.offers.pop();CALCST.nwa.rows.forEach(r=>r[2].pop());runCalcUi()">− Angebot</button>` : ""}</div>`; },
  run() {
    const st = CALCST.nwa, sumW = st.rows.reduce((a, r) => a + (r[1] || 0), 0);
    const tot = st.offers.map((o, j) => st.rows.reduce((a, r) => a + (r[1] || 0) / 100 * (r[2][j] || 0), 0));
    const best = Math.max(...tot);
    return `${sumW !== 100 ? `<div class="fb no">Summe der Gewichte = ${fmt(sumW)} % (sollte 100 % sein)</div>` : ""}<table class="info-tbl">${st.offers.map((o, j) => row("Nutzwert " + esc(o), `${st.rows.map(r => `${fmt((r[1] || 0) / 100)}×${r[2][j] ?? 0}`).join(" + ")} = <b>${fmt(tot[j], 2)}</b>${tot[j] === best ? " 🏆" : ""}`)).join("")}</table>`;
  }},
{ id: "netzplan", cat: "Planung", icon: "🕸️", t: "Netzplan-Rechner", d: "Vorgänge eingeben → FAZ/FEZ/SAZ/SEZ/Puffer/kritischer Pfad",
  ui: () => `<label class="small muted" style="font-weight:600">Eine Zeile pro Vorgang: <span class="mono">Name; Dauer; Vorgänger (Komma)</span></label><textarea id="c_np" style="font-family:var(--mono);min-height:150px" oninput="runCalc()">A; 3;
B; 2; A
C; 4; A
D; 1; B
E; 3; C, D
F; 1; E</textarea><div class="row" style="margin-top:6px"><label class="chk"><input type="checkbox" id="c_n1" onchange="runCalc()"> Start bei 1 statt 0</label></div>`,
  run() {
    const lines = val("c_np").split("\n").map(l => l.trim()).filter(Boolean), T2 = {}, order = [];
    for (const l of lines) { const [n, d, p] = l.split(";").map(x => (x || "").trim()); if (!n || !ok(parseNum(d))) return `<div class="fb no">Zeile ungültig: ${esc(l)}</div>`; T2[n] = { n, d: parseNum(d), pre: p ? p.split(/[,\s]+/).filter(Boolean) : [] }; order.push(n); }
    for (const t of Object.values(T2)) for (const p of t.pre) if (!T2[p]) return `<div class="fb no">Unbekannter Vorgänger „${esc(p)}“ bei ${esc(t.n)}</div>`;
    const done = new Set(), seq = []; let guard = 0;
    while (seq.length < order.length && guard++ < 1000) for (const n of order) if (!done.has(n) && T2[n].pre.every(p => done.has(p))) { done.add(n); seq.push(n); }
    if (seq.length < order.length) return `<div class="fb no">Zyklus in den Abhängigkeiten.</div>`;
    const s1 = document.getElementById("c_n1") && document.getElementById("c_n1").checked, off = s1 ? 1 : 0;
    seq.forEach(n => { const t = T2[n]; t.faz = t.pre.length ? Math.max(...t.pre.map(p => T2[p].fez)) + off : off; t.fez = t.faz + t.d - off; });
    const end = Math.max(...seq.map(n => T2[n].fez));
    [...seq].reverse().forEach(n => { const t = T2[n], succ = seq.filter(m => T2[m].pre.includes(n)); t.sez = succ.length ? Math.min(...succ.map(m => T2[m].saz)) - off : end; t.saz = t.sez - t.d + off; t.gp = t.saz - t.faz; t.fp = succ.length ? Math.min(...succ.map(m => T2[m].faz)) - t.fez - off : end - t.fez; });
    const crit = seq.filter(n => T2[n].gp === 0);
    return `<div class="gridwrap"><table class="info-tbl"><tr><th>Vorgang</th><th>D</th><th>Vorgänger</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr>${seq.map(n => { const t = T2[n]; return `<tr><td><b>${esc(n)}</b></td><td>${fmt(t.d)}</td><td>${t.pre.join(", ") || "–"}</td><td>${fmt(t.faz)}</td><td>${fmt(t.fez)}</td><td>${fmt(t.saz)}</td><td>${fmt(t.sez)}</td><td style="${t.gp === 0 ? "color:var(--rd);font-weight:700" : ""}">${fmt(t.gp)}</td><td>${fmt(t.fp)}</td></tr>`; }).join("")}</table></div>
    <table class="info-tbl">${row("Projektdauer", fmt(end - off + (s1 ? 1 : 0)) + " Zeiteinheiten (Ende " + fmt(end) + ")")}${row("Kritische Vorgänge (GP = 0)", crit.map(esc).join(" → "))}</table>
    <div class="fb inf"><div class="sol">Vorwärts: FAZ = größter FEZ der Vorgänger${s1 ? " + 1" : ""}, FEZ = FAZ + D${s1 ? " − 1" : ""}.\nRückwärts: SEZ = kleinster SAZ der Nachfolger${s1 ? " − 1" : ""}, SAZ = SEZ − D${s1 ? " + 1" : ""}.\nGP = SAZ − FAZ · FP = kleinster FAZ der Nachfolger − FEZ${s1 ? " − 1" : ""}.</div></div>`;
  }},
{ id: "rechner", cat: "Allgemein", icon: "🧮", t: "Taschenrechner", d: "Formeln mit Klammern, Potenzen, Wurzel, log2, MOD",
  ui: () => `<div class="tr-fields"><div style="grid-column:1/-1"><label>Ausdruck</label><input id="c_x" style="font-family:var(--mono);font-size:18px" value="2^(32-26)-2" oninput="runCalc()" onkeydown="if(event.key==='Enter'){calcHist()}"></div></div>
  <div class="row" style="gap:6px">${["(", ")", "^", "sqrt(", "log2(", " mod ", "pi", "%", "!"].map(k => `<button class="btn sm mono" onclick="const i=document.getElementById('c_x');i.value+=${JSON.stringify(k).replace(/"/g, "'")};i.focus();runCalc()">${k.trim()}</button>`).join("")}<button class="btn sm" onclick="document.getElementById('c_x').value='';runCalc()">C</button></div>
  <div class="small dim" style="margin-top:8px">Komma oder Punkt · <span class="mono">^</span> Potenz · <span class="mono">mod</span> bzw. <span class="mono">%</span> Rest · Funktionen: sqrt, log2, log (10), ln, abs, round, ceil, floor · Enter speichert in den Verlauf</div>`,
  run() {
    let r; try { r = calcExpr(val("c_x")); } catch (e) { return `<div class="fb no">${esc(String(e))}</div>`; }
    const h = (CALCST.hist || []).map(x => `<div class="hit mono small" style="cursor:pointer" onclick="document.getElementById('c_x').value=${JSON.stringify(x[0]).replace(/"/g, "&quot;")};runCalc()">${esc(x[0])} = <b>${esc(x[1])}</b></div>`).join("");
    return `<div class="stat card" style="background:var(--bg2)"><div class="v mono">${ok(r) ? fmt(r, 10) : "–"}</div>${ok(r) && Number.isInteger(r) && r >= 0 && r < 2 ** 32 ? `<div class="l mono">bin ${r.toString(2)} · hex 0x${r.toString(16).toUpperCase()}</div>` : ""}</div>${h ? `<h3 style="font-size:14px;margin:14px 0 4px">Verlauf</h3><div class="card" style="padding:4px 0">${h}</div>` : ""}`;
  }}
];
const UNITS = [["bit", 1], ["Byte", 8], ["kbit", 1e3], ["kB", 8e3], ["Mbit", 1e6], ["MB", 8e6], ["Gbit", 1e9], ["GB", 8e9], ["Tbit", 1e12], ["TB", 8e12], ["KiB", 8 * 1024], ["MiB", 8 * 1048576], ["GiB", 8 * 1073741824], ["TiB", 8 * 1099511627776]];
let CALC = null; const CALCST = {};
function calcHist() { const x = val("c_x"); try { const r = calcExpr(x); CALCST.hist = [[x, fmt(r, 10)]].concat(CALCST.hist || []).slice(0, 10); runCalc(); } catch (e) {} }
function renderCalcHome(app) {
  if (CALC) return renderCalcRun(app);
  const cats = [...new Set(CALCS.map(c => c.cat))];
  app.innerHTML = `<h1>🧰 Rechner</h1><p class="sub">Werkzeuge zum Nachrechnen und Kontrollieren – mit Rechenweg. Zum <b>Üben</b> ohne Hilfe gibt es die <a href="#trainer">Rechentrainer</a>; in der Prüfung hast du nur deinen Taschenrechner.</p>
  ${cats.map(c => `<h2>${c}</h2><div class="grid g3">${CALCS.filter(x => x.cat === c).map(x => `<div class="card click" onclick="CALC='${x.id}';render()"><b>${x.icon} ${x.t}</b><div class="small muted" style="margin-top:4px">${x.d}</div></div>`).join("")}</div>`).join("")}`;
}
function renderCalcRun(app) {
  const c = CALCS.find(x => x.id === CALC);
  app.innerHTML = `<div class="qbox"><div class="qhead"><button class="btn sm" onclick="CALC=null;render()">← Rechner</button><b>${c.icon} ${c.t}</b><span></span></div>
  <div class="card"><div id="cui">${c.ui()}</div><div id="cout" style="margin-top:12px"></div></div>
  <div class="row" style="margin-top:12px">${CALCS.filter(x => x.cat === c.cat && x.id !== c.id).map(x => `<button class="btn sm" onclick="CALC='${x.id}';render()">${x.icon} ${x.t}</button>`).join("")}</div></div>`;
  runCalc();
}
function runCalcUi() { const c = CALCS.find(x => x.id === CALC); const u = document.getElementById("cui"); if (u) u.innerHTML = c.ui(); runCalc(); }
function runCalc() { const c = CALCS.find(x => x.id === CALC); const o = document.getElementById("cout"); if (!c || !o) return; try { o.innerHTML = c.run(); } catch (e) { o.innerHTML = `<div class="fb no">Eingabe prüfen.</div>`; } }

/* ---------- UML-Trainer ---------- */
const UML_SHAPES = ["Startknoten", "Endknoten", "Ablaufende", "Aktion", "Verzweigung", "Zusammenführung (Merge)", "Gabelung (Fork)", "Vereinigung (Join)"];
const UML_SCEN = [
 { t: "Login mit Wiederholung", nodes: [{ k: "start" }, { k: "act", x: "Zugangsdaten eingeben" }, { k: "dec", yes: "[Daten korrekt]", no: "[Daten falsch]", side: ["Fehlermeldung anzeigen"], sideEnd: "loop", loopTo: 1, gap: { shape: 1, no: 2 } }, { k: "act", x: "Startseite anzeigen" }, { k: "end", gap: { shape: 3 } }],
   q: { 2: ["[Daten falsch]", "[Daten korrekt]", "[Benutzer gesperrt]", "[immer]"] } },
 { t: "Onboarding neuer Mitarbeitender", nodes: [{ k: "start" }, { k: "act", x: "Arbeitsvertrag erfassen" }, { k: "fork", a: "Benutzerkonto anlegen", b: "Notebook vorbereiten", gap: { shape: 1, b: 2, join: 3 } }, { k: "act", x: "Einweisung durchführen" }, { k: "end" }],
   q: { 2: ["Notebook vorbereiten", "Mitarbeitenden kündigen", "Ende", "[ja]"] } },
 { t: "Nächtliches Backup", nodes: [{ k: "start", gap: { shape: 1 } }, { k: "act", x: "Backup starten" }, { k: "dec", yes: "[erfolgreich]", no: "[fehlgeschlagen]", side: ["Admin benachrichtigen"], sideEnd: "flowend", gap: { yes: 2, sideEnd: 3 } }, { k: "act", x: "Protokoll speichern" }, { k: "end" }],
   q: { 2: ["[erfolgreich]", "[fehlgeschlagen]", "[Backup starten]", "Protokoll"] } },
 { t: "Störungsmeldung im Service Desk", nodes: [{ k: "start" }, { k: "act", x: "Störung erfassen", gap: {} }, { k: "dec", yes: "[Standardproblem]", no: "[sonst]", main: ["1st Level löst Problem"], side: ["An 2nd Level eskalieren", "Spezialist löst Problem"], sideEnd: "merge", gap: { side0: 1, merge: 2 } }, { k: "act", x: "Ticket schließen" }, { k: "end", gap: { shape: 3 } }],
   q: { 1: ["An 2nd Level eskalieren", "Ticket schließen", "[sonst]", "Kunde informieren und Ticket löschen"] } },
 { t: "Bestellfreigabe", nodes: [{ k: "start" }, { k: "act", x: "Bestellanforderung erfassen" }, { k: "dec", yes: "[Betrag ≤ 1.000 €]", no: "[Betrag > 1.000 €]", main: ["Teamleitung genehmigt"], side: ["Geschäftsführung genehmigt"], sideEnd: "merge", gap: { shape: 1, no: 2 } }, { k: "act", x: "Bestellung auslösen", gap: { text: 3 } }, { k: "end" }],
   q: { 2: ["[Betrag > 1.000 €]", "[Betrag ≤ 1.000 €]", "[Betrag ≥ 1.000 €]", "[Bestellung]"], 3: ["Bestellung auslösen", "[genehmigt]", "Startknoten", "Fork"] } }
];
function umlSvg(sc) {
  const W = 640, cx = 210, sx = 450, out = [], gapsInfo = {};
  let y = 24;
  const A = (pts) => out.push(`<polyline points="${pts.map(p => p.join(",")).join(" ")}" fill="none" stroke="#93a1b3" stroke-width="1.5" marker-end="url(#ua)"/>`);
  const T = (x, yy, t, c = "#d7dee8", anchor = "middle", w = 400) => out.push(`<text x="${x}" y="${yy}" fill="${c}" font-size="12.5" text-anchor="${anchor}" font-family="Inter,sans-serif" ${w ? "" : ""}>${esc(t)}</text>`);
  const gapBox = (x, yy, n, w = 68) => { out.push(`<rect x="${x - w / 2}" y="${yy - 15}" width="${w}" height="30" rx="8" fill="#fbbf2414" stroke="#fbbf24" stroke-dasharray="5 4"/>`); T(x, yy + 4, `(${n})`, "#fbbf24"); };
  const act = (x, yy, t, g) => { const w = Math.max(150, t.length * 7 + 24); out.push(`<rect x="${x - w / 2}" y="${yy - 17}" width="${w}" height="34" rx="15" fill="#1b2430" stroke="${g ? "#fbbf24" : "#38bdf8"}"/>`); T(x, yy + 4, g ? `(${g})` : t, g ? "#fbbf24" : "#d7dee8"); return w; };
  const startN = (x, yy, g) => g ? gapBox(x, yy, g) : out.push(`<circle cx="${x}" cy="${yy}" r="10" fill="#d7dee8"/>`);
  const endN = (x, yy, g) => g ? gapBox(x, yy, g) : out.push(`<circle cx="${x}" cy="${yy}" r="11" fill="none" stroke="#d7dee8" stroke-width="2"/><circle cx="${x}" cy="${yy}" r="6.5" fill="#d7dee8"/>`);
  const flowEnd = (x, yy, g) => g ? gapBox(x, yy, g) : out.push(`<circle cx="${x}" cy="${yy}" r="10" fill="none" stroke="#d7dee8" stroke-width="2"/><line x1="${x - 7}" y1="${yy - 7}" x2="${x + 7}" y2="${yy + 7}" stroke="#d7dee8" stroke-width="2"/><line x1="${x + 7}" y1="${yy - 7}" x2="${x - 7}" y2="${yy + 7}" stroke="#d7dee8" stroke-width="2"/>`);
  const dia = (x, yy, g) => g ? gapBox(x, yy, g) : out.push(`<polygon points="${x},${yy - 18} ${x + 22},${yy} ${x},${yy + 18} ${x - 22},${yy}" fill="#1b2430" stroke="#fbbf24"/>`);
  const bar = (x, yy, w, g) => g ? gapBox(x, yy, g, w) : out.push(`<rect x="${x - w / 2}" y="${yy - 4}" width="${w}" height="8" rx="2" fill="#d7dee8"/>`);
  const ypos = [];
  let prevBottom = null;
  sc.nodes.forEach((n, i) => {
    const g = n.gap || {};
    const link = (top) => { if (prevBottom != null) A([[cx, prevBottom], [cx, top - 2]]); };
    if (n.k === "start") { ypos[i] = y; startN(cx, y, g.shape); prevBottom = y + (g.shape ? 15 : 10); y += 56; }
    else if (n.k === "end") { link(y - (g.shape ? 15 : 11)); ypos[i] = y; endN(cx, y, g.shape); y += 40; }
    else if (n.k === "act") { link(y - 17); ypos[i] = y; act(cx, y, n.x, g.text); prevBottom = y + 17; y += 62; }
    else if (n.k === "dec") {
      link(y - 18); ypos[i] = y; dia(cx, y, g.shape);
      const dy = y;
      T(cx + 10, dy + 36, g.yes ? `(${g.yes})` : n.yes, g.yes ? "#fbbf24" : "#34d399", "start");
      T(cx + 46, dy - 8, g.no ? `(${g.no})` : n.no, g.no ? "#fbbf24" : "#f87171", "start");
      const aw = t => Math.max(150, t.length * 7 + 24); let sy = dy; A([[cx + 22, dy], [sx - aw(n.side[0]) / 2 - 2, dy]]);
      n.side.forEach((t, j) => { if (j) { A([[sx, sy + 17], [sx, sy + 46]]); sy += 62; } act(sx, sy, t, g["side" + j]); });
      const sideBottom = sy + 17;
      let my = dy + 18;
      if (n.main) { n.main.forEach((t, j) => { const ay = dy + 62 + j * 62; A([[cx, my], [cx, ay - 19]]); act(cx, ay, t); my = ay + 17; }); }
      if (n.sideEnd === "loop") { const ty = ypos[n.loopTo]; const tw = aw(sc.nodes[n.loopTo].x || ""); out.push(`<polyline points="${sx + aw(n.side[n.side.length - 1]) / 2},${sy} ${sx + 150},${sy} ${sx + 150},${ty} ${cx + tw / 2 + 2},${ty}" fill="none" stroke="#93a1b3" stroke-width="1.5" marker-end="url(#ua)"/>`); prevBottom = dy + 18; y = dy + 80; }
      else if (n.sideEnd === "flowend" || n.sideEnd === "end") { A([[sx, sideBottom], [sx, sideBottom + 26]]); (n.sideEnd === "end" ? endN : flowEnd)(sx, sideBottom + 38, g.sideEnd); prevBottom = dy + 18; y = dy + 80; }
      else { const mY = Math.max(my, sideBottom) + 40; A([[cx, my], [cx, mY - 20]]); out.push(`<polyline points="${sx},${sideBottom} ${sx},${mY} ${cx + 24},${mY}" fill="none" stroke="#93a1b3" stroke-width="1.5" marker-end="url(#ua)"/>`); dia(cx, mY, g.merge); prevBottom = mY + 18; y = mY + 62; }
    }
    else if (n.k === "fork") {
      const off = 120, bw = 320, fh = g.shape ? 15 : 4, jh = g.join ? 15 : 4;
      link(y - fh); ypos[i] = y; bar(cx, y, bw, g.shape); const fy = y;
      const ay = fy + 58; A([[cx - off, fy + fh], [cx - off, ay - 19]]); A([[cx + off, fy + fh], [cx + off, ay - 19]]);
      act(cx - off, ay, n.a, g.a); act(cx + off, ay, n.b, g.b);
      const jy = ay + 58; A([[cx - off, ay + 17], [cx - off, jy - jh - 2]]); A([[cx + off, ay + 17], [cx + off, jy - jh - 2]]);
      bar(cx, jy, bw, g.join); prevBottom = jy + jh; y = jy + 62;
    }
  });
  const H = y + 10;
  return `<div class="uml" style="background:#0f141b;border:1px solid var(--line);border-radius:12px;padding:8px;overflow-x:auto;margin:10px 0"><svg viewBox="0 0 ${W} ${H}" width="100%" style="min-width:520px;max-height:640px"><defs><marker id="ua" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#93a1b3"/></marker></defs>${out.join("")}</svg></div>`;
}
function umlSymbolSvg(kind) {
  const s = { "Startknoten": `<circle cx="50" cy="30" r="12" fill="#d7dee8"/>`, "Endknoten": `<circle cx="50" cy="30" r="13" fill="none" stroke="#d7dee8" stroke-width="2"/><circle cx="50" cy="30" r="7.5" fill="#d7dee8"/>`, "Ablaufende": `<circle cx="50" cy="30" r="12" fill="none" stroke="#d7dee8" stroke-width="2"/><line x1="42" y1="22" x2="58" y2="38" stroke="#d7dee8" stroke-width="2"/><line x1="58" y1="22" x2="42" y2="38" stroke="#d7dee8" stroke-width="2"/>`, "Aktion": `<rect x="10" y="14" width="80" height="32" rx="14" fill="#1b2430" stroke="#38bdf8"/>`, "Verzweigung": `<line x1="50" y1="0" x2="50" y2="10" stroke="#93a1b3"/><polygon points="50,10 70,30 50,50 30,30" fill="#1b2430" stroke="#fbbf24"/><line x1="50" y1="50" x2="50" y2="60" stroke="#93a1b3"/><line x1="70" y1="30" x2="95" y2="30" stroke="#93a1b3"/>`, "Zusammenführung (Merge)": `<line x1="50" y1="0" x2="50" y2="10" stroke="#93a1b3"/><line x1="5" y1="30" x2="30" y2="30" stroke="#93a1b3"/><polygon points="50,10 70,30 50,50 30,30" fill="#1b2430" stroke="#fbbf24"/><line x1="50" y1="50" x2="50" y2="60" stroke="#93a1b3"/>`, "Gabelung (Fork)": `<line x1="50" y1="0" x2="50" y2="26" stroke="#93a1b3"/><rect x="10" y="26" width="80" height="7" fill="#d7dee8"/><line x1="25" y1="33" x2="25" y2="60" stroke="#93a1b3"/><line x1="75" y1="33" x2="75" y2="60" stroke="#93a1b3"/>`, "Vereinigung (Join)": `<line x1="25" y1="0" x2="25" y2="26" stroke="#93a1b3"/><line x1="75" y1="0" x2="75" y2="26" stroke="#93a1b3"/><rect x="10" y="26" width="80" height="7" fill="#d7dee8"/><line x1="50" y1="33" x2="50" y2="60" stroke="#93a1b3"/>` }[kind];
  return `<svg viewBox="0 0 100 60" width="110" height="66" style="background:#0f141b;border:1px solid var(--line);border-radius:10px">${s}</svg>`;
}
TRAINERS.push({ id: "uml", cat: "Planung", icon: "🔀", t: "UML-Aktivitätsdiagramm", d: "Symbole erkennen, Lücken in Diagrammen füllen", gen() {
  if (Math.random() < .35) {
    const ks = shuffle(UML_SHAPES).slice(0, 3);
    return { q: `Benenne die drei Symbole aus dem UML-Aktivitätsdiagramm:\n<div class="row" style="gap:14px;margin-top:8px">${ks.map((k, i) => `<div style="text-align:center">${umlSymbolSvg(k)}<div class="small" style="color:var(--am)">(${i + 1})</div></div>`).join("")}</div>`,
      fields: ks.map((k, i) => ({ l: `Symbol (${i + 1})`, ans: k, opts: UML_SHAPES })),
      sol: ks.map((k, i) => `(${i + 1}) ${k}: ${{ "Startknoten": "Beginn des Ablaufs", "Endknoten": "Ende der gesamten Aktivität", "Ablaufende": "Ende nur dieses Zweigs", "Aktion": "eine Tätigkeit (abgerundetes Rechteck)", "Verzweigung": "ein Eingang, mehrere Ausgänge mit Guards [ ]", "Zusammenführung (Merge)": "mehrere Eingänge, ein Ausgang", "Gabelung (Fork)": "startet parallele Abläufe", "Vereinigung (Join)": "wartet, bis alle parallelen Zweige fertig sind" }[k]}`).join("\n") };
  }
  const sc = pick(UML_SCEN), fields = [], sol = [];
  sc.nodes.forEach(n => { const g = n.gap || {}; Object.entries(g).forEach(([kind, nr]) => {
    let ans, opts;
    if (kind === "shape") ans = { start: "Startknoten", end: "Endknoten", dec: "Verzweigung", fork: "Gabelung (Fork)", act: "Aktion" }[n.k];
    else if (kind === "join") ans = "Vereinigung (Join)";
    else if (kind === "merge") ans = "Zusammenführung (Merge)";
    else if (kind === "sideEnd") ans = n.sideEnd === "flowend" ? "Ablaufende" : "Endknoten";
    else if (kind === "yes") ans = n.yes; else if (kind === "no") ans = n.no;
    else if (kind === "text") ans = n.x; else if (kind === "a") ans = n.a; else if (kind === "b") ans = n.b; else if (kind.startsWith("side")) ans = n.side[+kind.slice(4)];
    opts = sc.q[nr] ? shuffle(sc.q[nr]) : UML_SHAPES;
    fields[nr - 1] = { l: `Lücke (${nr})`, ans, opts };
    sol[nr - 1] = `(${nr}) ${ans}`;
  }); });
  return { q: `<b>${esc(sc.t)}</b> – fülle die markierten Lücken:${umlSvg(sc)}`, fields: fields.filter(Boolean), sol: sol.filter(Boolean).join("\n") + "\n\nMerke: Guards stehen in [eckigen Klammern] an den Ausgängen einer Verzweigung und schließen sich gegenseitig aus. Fork/Join = dicke Balken für Parallelität, Merge = Raute zum Zusammenführen alternativer Zweige." };
}});
TRBY.uml = TRAINERS[TRAINERS.length - 1];

