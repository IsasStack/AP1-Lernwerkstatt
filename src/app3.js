/* ====================== Erweiterung 2: Glossar, Anlagen, Pseudocode, KI-Bewertung ====================== */

/* ---------- Glossar ---------- */
let GL = { tab: "abk", q: "", letter: "" };
function renderGlossar(app) {
  const terms = ALLC.map(c => ({ a: c.f, b: c.b, t: TBY[c.tid] })).sort((x, y) => x.a.localeCompare(y.a, "de"));
  const src = GL.tab === "abk" ? ABK.map(x => ({ a: x[0], full: x[1], b: x[2] })) : terms;
  const q = GL.q.trim().toLowerCase();
  const list = src.filter(x => (!q || (x.a + " " + (x.full || "") + " " + x.b).toLowerCase().includes(q)) && (!GL.letter || x.a.toUpperCase().replace(/^[^A-Z0-9ÄÖÜ]*/, "").startsWith(GL.letter)));
  const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  app.innerHTML = `<h1>📖 Glossar</h1><p class="sub">${ABK.length} Abkürzungen und ${terms.length} Begriffe & Fakten aus allen Themen. Tipp: Abkürzungen nur benutzen, wenn du sie in einem Satz erklären kannst – die Prüfer werten die Erklärung.</p>
  <div class="row" style="justify-content:space-between;margin-bottom:12px">
    <div class="seg"><button class="${GL.tab === "abk" ? "on" : ""}" onclick="GL.tab='abk';GL.letter='';render()">🔤 Abkürzungen (${ABK.length})</button><button class="${GL.tab === "terms" ? "on" : ""}" onclick="GL.tab='terms';GL.letter='';render()">📚 Begriffe (${terms.length})</button></div>
    <div class="row"><button class="btn sm pri" onclick="startAbkCards()">🃏 Abkürzungen als Karteikarten</button><button class="btn sm" onclick="startTrainer('abk')">🎯 Abkürzungs-Quiz</button></div>
  </div>
  <div class="search"><input id="gq" placeholder="Suchen, z. B. DHCP, Puffer, TOM …" value="${esc(GL.q)}" oninput="GL.q=this.value;renderGlossarList()"></div>
  <div class="row" style="gap:4px;margin:10px 0">${["", ...letters].map(l => `<button class="btn sm ${GL.letter === l ? "pri" : ""}" style="min-width:32px;padding:4px 8px" onclick="GL.letter='${l}';render()">${l || "Alle"}</button>`).join("")}</div>
  <div id="glist"></div>`;
  renderGlossarList(list);
  const i = $("#gq"); if (GL.q) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
}
function renderGlossarList(pre) {
  const out = $("#glist"); if (!out) return;
  let list = pre;
  if (!list) { const q = GL.q.trim().toLowerCase(); const src = GL.tab === "abk" ? ABK.map(x => ({ a: x[0], full: x[1], b: x[2] })) : ALLC.map(c => ({ a: c.f, b: c.b, t: TBY[c.tid] })).sort((x, y) => x.a.localeCompare(y.a, "de")); list = src.filter(x => (!q || (x.a + " " + (x.full || "") + " " + x.b).toLowerCase().includes(q)) && (!GL.letter || x.a.toUpperCase().replace(/^[^A-Z0-9ÄÖÜ]*/, "").startsWith(GL.letter))); }
  out.innerHTML = list.length ? `<div class="small dim" style="margin-bottom:6px">${list.length} Einträge</div><div class="card" style="padding:4px 0">${list.map(x => GL.tab === "abk"
    ? `<div class="hit"><div class="row" style="gap:10px;flex-wrap:nowrap;align-items:baseline"><b class="mono" style="color:var(--cy);min-width:110px">${esc(x.a)}</b><div><b>${esc(x.full)}</b>${x.b ? `<div class="small muted">${esc(x.b)}</div>` : ""}</div></div></div>`
    : `<div class="hit"><div class="row" style="justify-content:space-between;flex-wrap:nowrap;gap:8px"><b>${esc(x.a)}</b><span class="pill" style="flex:none;cursor:pointer" onclick="topicTab='wissen';go('t-${x.t.id}')">${x.t.icon} ${esc(x.t.title)}</span></div><div class="small muted" style="margin-top:3px">${esc(x.b)}</div></div>`).join("")}</div>` : `<div class="empty">Keine Treffer.</div>`;
}
const ABKC = ABK.map(x => ({ f: x[0], b: x[1] + (x[2] ? " – " + x[2] : ""), k: "g" + hash(x[0]), tid: "__abk" }));
function startAbkCards() {
  let list = ABKC.filter(c => !S.c[c.k] || S.c[c.k].d <= Date.now());
  list = shuffle(list).slice(0, 30);
  if (!list.length) list = shuffle(ABKC).slice(0, 30);
  CS = { list, i: 0, flip: false, ok: 0, no: 0 }; go("karten");
}
function abkNorm(s) { return String(s || "").toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[^a-z0-9]/g, ""); }
function abkVariants(full) {
  const v = new Set([full, full.replace(/\([^)]*\)/g, ""), full.replace(/[()]/g, "")]);
  return [...v].map(abkNorm).filter(Boolean);
}
function lev(a, b) {
  const m = a.length, n = b.length; let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
function abkOk(v, full) {
  const x = abkNorm(v); if (x.length < 2) return false;
  return abkVariants(full).some(a => lev(x, a) <= Math.floor(a.length / 9));
}
const ABK_ALT = { CIA: ["Vertraulichkeit, Integrität, Verfügbarkeit"], SMART: ["Specific, Measurable, Achievable, Realistic, Time-bound"], KVM: ["Keyboard, Video, Maus"] };
const ABK_Q = ABK.filter(x => !x[0].includes("/") && !x[1].includes(" / ") && x[1].length > 3);
TRAINERS.push({ id: "abk", cat: "Planung", icon: "🔤", t: "Abkürzungen", d: "Ausschreiben: Wofür steht …? – 4 pro Runde", gen() {
  const sel = shuffle(ABK_Q).slice(0, 4);
  return { q: "Schreibe aus, wofür diese Abkürzungen stehen:", hint: "Groß-/Kleinschreibung, Leerzeichen und Bindestriche sind egal, kleine Tippfehler werden toleriert. Klammerteile darfst du weglassen.", fields: sel.map(x => ({ l: x[0], ans: x[1], alt: ABK_ALT[x[0]] || [], type: "abk" })), sol: sel.map(x => `<b>${esc(x[0])}</b> = ${esc(x[1])}${x[2] ? " – " + esc(x[2]) : ""}`).join("\n") };
}});
TRBY.abk = TRAINERS[TRAINERS.length - 1];

/* ---------- Anlagen-Aufgaben ---------- */
function renderAnl(app) {
  if (FS && FS.kind === "anl") return renderCaseRun(app);
  S.cs = S.cs || {};
  app.innerHTML = `<h1>📎 Aufgaben mit Anlagen</h1><p class="sub">Wie in der echten AP1: Du bekommst ein Datenblatt, einen englischen Text, einen Netzwerkplan, eine Konsolenausgabe, ein Log oder ein Angebot und leitest daraus deine Antworten ab. Erst die Frage lesen, dann gezielt in der Anlage suchen.</p>
  <div class="grid g2">${ANL.map(c => { const s = S.cs[c.id]; return `<div class="card click" onclick="startCase('${c.id}')"><div class="row" style="justify-content:space-between"><b>${c.icon} ${esc(c.title)}</b>${s ? `<span class="pill ${s.pct >= 80 ? "gr" : s.pct >= 50 ? "am" : "rd"}">${s.pct}%</span>` : `<span class="pill">neu</span>`}</div><div class="small muted" style="margin:6px 0 8px">${esc(c.sit.slice(0, 140))}…</div><div class="row" style="gap:5px">${c.tags.map(t => `<span class="pill cy">${t}</span>`).join("")}<span class="pill">${c.steps.length} Aufgaben</span></div></div>`; }).join("")}</div>`;
}

/* ---------- Pseudocode-Trainer ---------- */
const PSEUDO = [
 { t: "Summe von 1 bis n", code: "FUNKTION summe(n): Ganzzahl\n    s ← 0\n    FÜR i ← 1 BIS (1)\n        s ← (2)\n    ENDE FÜR\n    RÜCKGABE s\nENDE FUNKTION", gaps: [["n", "n − 1", "i", "s"], ["s + i", "s * i", "i + 1", "s + n"]], sol: "(1) n – die Schleife läuft von 1 bis einschließlich n.\n(2) s + i – in jedem Durchlauf wird der Zähler addiert." },
 { t: "Größten Wert finden", code: "max ← liste[0]\nFÜR i ← 1 BIS länge(liste) − 1\n    WENN (1) DANN\n        (2)\n    ENDE WENN\nENDE FÜR\nAUSGABE max", gaps: [["liste[i] > max", "liste[i] < max", "i > max", "max > liste[i]"], ["max ← liste[i]", "liste[i] ← max", "max ← i", "i ← max"]], sol: "(1) liste[i] > max – ist der aktuelle Wert größer als das bisherige Maximum?\n(2) max ← liste[i] – neues Maximum merken." },
 { t: "Gerade Zahlen zählen", code: "anzahl ← 0\nFÜR JEDE zahl IN zahlen\n    WENN zahl (1) 2 = 0 DANN\n        anzahl ← (2)\n    ENDE WENN\nENDE FÜR", gaps: [["MOD", "DIV", "*", "/"], ["anzahl + 1", "anzahl + zahl", "1", "zahl"]], sol: "(1) MOD – Rest der Division durch 2 ist 0 bei geraden Zahlen.\n(2) anzahl + 1 – Zähler erhöhen (nicht die Zahl addieren)." },
 { t: "Login mit 3 Versuchen", code: "versuche ← 0\nerfolgreich ← falsch\nSOLANGE versuche < 3 UND (1)\n    EINGABE pw\n    WENN pw = gespeichertesPW DANN\n        erfolgreich ← wahr\n    SONST\n        (2)\n    ENDE WENN\nENDE SOLANGE\nWENN NICHT erfolgreich DANN\n    AUSGABE \"Konto gesperrt\"\nENDE WENN", gaps: [["NICHT erfolgreich", "erfolgreich", "versuche > 3", "pw = gespeichertesPW"], ["versuche ← versuche + 1", "versuche ← 0", "erfolgreich ← wahr", "versuche ← versuche − 1"]], sol: "(1) NICHT erfolgreich – sonst würde nach erfolgreicher Anmeldung weiter abgefragt.\n(2) versuche ← versuche + 1 – Fehlversuch zählen, sonst Endlosschleife." },
 { t: "Rabatt ab 1.000 €", code: "// Ab einem Bestellwert von 1.000 € gibt es 5 % Rabatt\nEINGABE betrag\nWENN betrag (1) 1000 DANN\n    rabatt ← betrag * (2)\nSONST\n    rabatt ← 0\nENDE WENN\nAUSGABE betrag − rabatt", gaps: [[">=", ">", "<=", "<"], ["0.05", "5", "0.5", "1.05"]], sol: "(1) >= – „ab 1.000 €“ schließt 1.000 € ein.\n(2) 0.05 – 5 % = 0,05 (× 1,05 wäre ein Aufschlag)." },
 { t: "Durchschnitt berechnen", code: "summe ← 0\nFÜR i ← 0 BIS länge(werte) − 1\n    summe ← summe + werte[i]\nENDE FÜR\nschnitt ← (1)\nWENN schnitt (2) grenzwert DANN\n    AUSGABE \"Warnung: Grenzwert überschritten\"\nENDE WENN", gaps: [["summe / länge(werte)", "summe * länge(werte)", "summe / i", "länge(werte) / summe"], [">", "<", "=", "MOD"]], sol: "(1) summe / länge(werte).\n(2) > – „überschritten“ heißt größer als." }
];
const PFEHLER = [
 { t: "Notendurchschnitt", code: "1  summe ← 0\n2  FÜR i ← 0 BIS länge(noten)\n3      summe ← summe + noten[i]\n4  ENDE FÜR\n5  schnitt ← summe / länge(noten)", line: 2, fix: "FÜR i ← 0 BIS länge(noten) − 1", opts: ["FÜR i ← 0 BIS länge(noten) − 1", "FÜR i ← 1 BIS länge(noten)", "summe ← 1", "schnitt ← summe * länge(noten)"], why: "Off-by-one: Der Index läuft bis länge(noten) und greift damit über das letzte Element (Index länge − 1) hinaus." },
 { t: "Countdown", code: "1  i ← 10\n2  SOLANGE i > 0\n3      AUSGABE i\n4      i ← i + 1\n5  ENDE SOLANGE", line: 4, fix: "i ← i − 1", opts: ["i ← i − 1", "i ← 0", "SOLANGE i < 0", "AUSGABE i + 1"], why: "Endlosschleife: i wird größer statt kleiner, die Bedingung i > 0 bleibt immer wahr." },
 { t: "Volljährigkeit", code: "1  EINGABE alter\n2  WENN alter > 18 DANN\n3      AUSGABE \"volljährig\"\n4  SONST\n5      AUSGABE \"minderjährig\"\n6  ENDE WENN", line: 2, fix: "WENN alter >= 18 DANN", opts: ["WENN alter >= 18 DANN", "WENN alter < 18 DANN", "WENN alter = 18 DANN", "WENN alter > 17,5 DANN"], why: "Mit 18 ist man volljährig – > schließt 18 aus. Richtig ist >=." },
 { t: "Niedrigste Temperatur", code: "1  // messwerte enthält nur positive Temperaturen, z. B. 12, 15, 9\n2  min ← 0\n3  FÜR JEDEN wert IN messwerte\n4      WENN wert < min DANN\n5          min ← wert\n6      ENDE WENN\n7  ENDE FÜR", line: 2, fix: "min ← messwerte[0]", opts: ["min ← messwerte[0]", "min ← 100", "WENN wert > min DANN", "min ← min + wert"], why: "Mit 0 initialisiert, ist kein positiver Wert kleiner – Ergebnis bleibt 0. Mit dem ersten Element initialisieren." },
 { t: "Werte tauschen", code: "1  // Werte von a und b tauschen\n2  hilf ← a\n3  a ← b\n4  b ← a", line: 4, fix: "b ← hilf", opts: ["b ← hilf", "a ← hilf", "hilf ← b", "b ← b"], why: "a wurde in Zeile 3 schon überschrieben – der alte Wert steckt in hilf." },
 { t: "Admin-Zugang mit MFA", code: "1  // Zugang nur für Admins, die MFA nutzen\n2  WENN rolle = \"Admin\" ODER mfa = wahr DANN\n3      zugang ← wahr\n4  SONST\n5      zugang ← falsch\n6  ENDE WENN", line: 2, fix: "WENN rolle = \"Admin\" UND mfa = wahr DANN", opts: ["WENN rolle = \"Admin\" UND mfa = wahr DANN", "WENN rolle = \"Admin\" DANN", "WENN mfa = falsch DANN", "WENN NICHT rolle = \"Admin\" DANN"], why: "Beide Bedingungen müssen erfüllt sein → UND. Mit ODER bekäme jeder Nutzer mit MFA Zugang." },
 { t: "Fußgesteuerte Eingabeprüfung", code: "1  // Zahl zwischen 1 und 10 abfragen, bis sie gültig ist\n2  WIEDERHOLE\n3      EINGABE zahl\n4  BIS zahl < 1 ODER zahl > 10", line: 4, fix: "BIS zahl >= 1 UND zahl <= 10", opts: ["BIS zahl >= 1 UND zahl <= 10", "BIS zahl = 10", "SOLANGE zahl < 1", "BIS zahl > 1 ODER zahl < 10"], why: "BIS nennt die Abbruchbedingung – abbrechen, wenn die Zahl GÜLTIG ist (1 bis 10)." }
];
TRAINERS.push({ id: "pseudo", cat: "Planung", icon: "🧩", t: "Pseudocode: Lücken & Fehler", d: "Algorithmus ergänzen oder fehlerhafte Zeile finden", gen() {
  if (Math.random() < .5) {
    const p = pick(PSEUDO);
    return { q: `<b>${esc(p.t)}</b> – ergänze die Lücken:\n<pre class="code">${esc(p.code)}</pre>`, fields: p.gaps.map((g, i) => ({ l: `Lücke (${i + 1})`, ans: g[0], opts: shuffle(g) })), sol: esc(p.sol) };
  }
  const f = pick(PFEHLER);
  return { q: `<b>${esc(f.t)}</b> – der Algorithmus enthält genau einen Fehler:\n<pre class="code">${esc(f.code)}</pre>`, fields: [{ l: "Fehlerhafte Zeile (Nummer)", ans: f.line, type: "num" }, { l: "Korrektur", ans: f.fix, opts: shuffle(f.opts) }], sol: `Zeile ${f.line} → <span class="mono">${esc(f.fix)}</span>\n${esc(f.why)}` };
}});
TRBY.pseudo = TRAINERS[TRAINERS.length - 1];

/* ---------- KI-Bewertung offener Antworten ---------- */
let SAMPLE = null, SAMPLE_TRIED = false;
(async () => { try { if (window.claude && typeof window.claude.use === "function") SAMPLE = await window.claude.use("sample"); } catch (e) {} SAMPLE_TRIED = true; })();
function aiRef(kind, idx) {
  if (kind === "case") { const s = FS.c.steps[idx], st = FS.st[idx]; return { item: st, q: s.q, p: s.p, a: s.a, ans: st.ans, sit: FS.c.sit + (FS.c.att ? "\n\n[Anlage vorhanden – siehe Aufgabe]" : "") }; }
  const it = QS.items[idx]; return { item: it, q: it.q.q, p: it.q.p, a: it.q.a, ans: it.ans, sit: "" };
}
function aiPanel(kind, idx) {
  const r = aiRef(kind, idx), it = r.item;
  if (it.aiLoading) return `<div class="fb inf" style="margin-top:10px"><h4>🤖 KI bewertet deine Antwort …</h4><div class="small muted">Dauert meist 5–30 Sekunden.</div></div>`;
  if (it.ai) { const a = it.ai; return `<div class="fb ${a.punkte >= r.p * 0.8 ? "ok" : a.punkte >= r.p / 2 ? "inf" : "no"}" style="margin-top:10px"><h4>🤖 KI-Bewertung: ${fmt(a.punkte, 1)} / ${r.p} Punkte</h4>${a.urteil ? `<div>${esc(a.urteil)}</div>` : ""}${(a.gut || []).length ? `<div style="margin-top:6px"><b class="small" style="color:var(--gr)">✓ Gut:</b><ul style="margin:2px 0 0;padding-left:20px">${a.gut.map(x => `<li class="small">${esc(x)}</li>`).join("")}</ul></div>` : ""}${(a.fehlt || []).length ? `<div style="margin-top:6px"><b class="small" style="color:var(--rd)">✗ Fehlt/ungenau:</b><ul style="margin:2px 0 0;padding-left:20px">${a.fehlt.map(x => `<li class="small">${esc(x)}</li>`).join("")}</ul></div>` : ""}${a.tipp ? `<div class="small" style="margin-top:6px"><b>Tipp:</b> ${esc(a.tipp)}</div>` : ""}<div class="small dim" style="margin-top:6px">Du kannst die Punkte oben noch anpassen.</div></div>`; }
  if (it.aiErr) return `<div class="fb no" style="margin-top:10px">${esc(it.aiErr)}</div>`;
  return "";
}
function aiButton(kind, idx, label = "🤖 KI bewerten") { if (!HAS_AI) return ""; const it = aiRef(kind, idx).item; if (it.ai || it.aiLoading) return ""; return `<button class="btn" onclick="runAi('${kind}',${idx})">${label}</button>`; }
async function runAi(kind, idx) {
  if (kind === "quiz") { const el = $("#opin"); if (el) QS.items[idx].ans = el.value; }
  if (kind === "case") { const el = document.getElementById("co" + idx); if (el) FS.st[idx].ans = el.value; }
  const r = aiRef(kind, idx), it = r.item;
  if (!String(r.ans || "").trim()) return toast("Erst eine Antwort schreiben");
  if (!SAMPLE) { toast(SAMPLE_TRIED ? "KI-Bewertung ist hier nicht verfügbar – bitte in Claude öffnen." : "KI wird noch geladen – gleich nochmal versuchen."); return; }
  if (kind === "quiz" || kind === "case") it.done = true;
  it.aiLoading = true; it.aiErr = null; render();
  const prompt = `Du bist erfahrene:r IHK-Prüfer:in für die Abschlussprüfung Teil 1 der IT-Berufe („Einrichten eines IT-gestützten Arbeitsplatzes“). Bewerte die Antwort eines Prüflings streng, aber fair – so wie in der echten Prüfung.

Regeln:
- Maßstab ist der Erwartungshorizont. Andere fachlich richtige Antworten, die dort nicht stehen, zählen ebenfalls.
- Beachte den Operator: „Nennen“ = Stichworte reichen; „Beschreiben/Erläutern/Begründen“ = Zusammenhang bzw. Begründung mit Bezug zur Situation nötig. Fehlt die Begründung, gibt es nur Teilpunkte.
- Fachlich falsche Aussagen geben keine Punkte. Bei „Nennen Sie drei …“ zählen nur die ersten drei Nennungen.
- Halbe Punkte sind erlaubt. Maximal ${r.p} Punkte.
- Rechtschreibung ist egal, Fachbegriffe müssen stimmen.
${r.sit ? `\nAusgangssituation:\n${r.sit}\n` : ""}
Aufgabe (${r.p} Punkte):
${r.q}

Erwartungshorizont:
${r.a}

Antwort des Prüflings:
"""
${String(r.ans).slice(0, 4000)}
"""

Antworte NUR mit JSON in genau diesem Format (Deutsch, kurz):
{"punkte": 2.5, "urteil": "ein Satz Gesamturteil", "gut": ["was richtig ist"], "fehlt": ["was fehlt oder falsch ist"], "tipp": "ein konkreter Satz, wie man volle Punkte bekommt"}`;
  try {
    const res = await SAMPLE.json(prompt, { modelTier: "default" });
    let p = Number(res && res.punkte); if (!isFinite(p)) throw { code: "invalid_json" };
    p = Math.max(0, Math.min(r.p, Math.round(p * 2) / 2));
    it.ai = { punkte: p, urteil: String(res.urteil || ""), gut: Array.isArray(res.gut) ? res.gut.map(String).slice(0, 6) : [], fehlt: Array.isArray(res.fehlt) ? res.fehlt.map(String).slice(0, 6) : [], tipp: String(res.tipp || "") };
    it.aiLoading = false;
    if (kind === "quiz") { if (it.pts == null) { gradeOpen(p); return; } it.pts = p; it.ok = p >= r.p / 2; S.q[it.q.k].l = it.ok ? 1 : 0; save(); }
    else if (kind === "case") { it.pts = p; save(); }
    else { it.pts = p; it.ok = p >= r.p / 2; }
  } catch (e) {
    it.aiLoading = false;
    const c = e && e.code;
    it.aiErr = c === "not_granted" ? "KI-Bewertung wurde nicht erlaubt. Du kannst selbst anhand der Musterlösung bewerten." : c === "rate_limited" ? "Gerade zu viele Anfragen bzw. Nutzungslimit erreicht – bitte später erneut versuchen." : c === "sampling_disabled" ? "KI ist für deinen Account hier nicht verfügbar." : "Die Bewertung hat nicht geklappt – bitte erneut versuchen.";
    if (c === "not_granted" || c === "sampling_disabled") SAMPLE = null;
  }
  render();
}
async function aiGradeAllExam() {
  const idxs = QS.items.map((x, i) => i).filter(i => QS.items[i].q.t === "open" && !QS.items[i].ai && String(QS.items[i].ans || "").trim());
  if (!idxs.length) return toast("Keine (unbewerteten) Antworten vorhanden");
  for (const i of idxs) { if (!QS || !QS.finished) return; await runAi("exam", i); if (QS.items[i].aiErr) break; }
  QS.items.forEach(x => { if (x.q.t === "open" && x.pts == null && !String(x.ans || "").trim()) { x.pts = 0; x.ok = false; } });
  render();
}

route();
