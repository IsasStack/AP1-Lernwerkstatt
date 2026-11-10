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

/* ---------- Pseudocode-Trainer (freie Eingabe wie in der Prüfung) ---------- */
/* gaps: je Lücke [Musterlösung, weitere akzeptierte Schreibweisen …] */
const PSEUDO = [
 { t: "Summe von 1 bis n", code: "FUNKTION summe(n): Ganzzahl\n    s ← 0\n    FÜR i ← 1 BIS (1)\n        s ← (2)\n    ENDE FÜR\n    RÜCKGABE s\nENDE FUNKTION", gaps: [["n"], ["s + i", "i + s"]], sol: "(1) n – die Schleife läuft von 1 bis einschließlich n.\n(2) s + i – in jedem Durchlauf wird der Zähler addiert." },
 { t: "Größten Wert finden", code: "max ← liste[0]\nFÜR i ← 1 BIS länge(liste) − 1\n    WENN (1) DANN\n        (2)\n    ENDE WENN\nENDE FÜR\nAUSGABE max", gaps: [["liste[i] > max", "max < liste[i]"], ["max ← liste[i]"]], sol: "(1) liste[i] > max – ist der aktuelle Wert größer als das bisherige Maximum?\n(2) max ← liste[i] – neues Maximum merken (den Wert, nicht den Index)." },
 { t: "Gerade Zahlen zählen", code: "anzahl ← 0\nFÜR JEDE zahl IN zahlen\n    WENN zahl (1) 2 = 0 DANN\n        anzahl ← (2)\n    ENDE WENN\nENDE FÜR", gaps: [["MOD", "%", "modulo"], ["anzahl + 1", "1 + anzahl"]], sol: "(1) MOD – Rest der Division durch 2 ist 0 bei geraden Zahlen.\n(2) anzahl + 1 – Zähler erhöhen (nicht die Zahl addieren)." },
 { t: "Login mit 3 Versuchen", code: "versuche ← 0\nerfolgreich ← falsch\nSOLANGE versuche < 3 UND (1)\n    EINGABE pw\n    WENN pw = gespeichertesPW DANN\n        erfolgreich ← wahr\n    SONST\n        (2)\n    ENDE WENN\nENDE SOLANGE\nWENN NICHT erfolgreich DANN\n    AUSGABE \"Konto gesperrt\"\nENDE WENN", gaps: [["NICHT erfolgreich", "erfolgreich = falsch", "!erfolgreich", "erfolgreich <> wahr"], ["versuche ← versuche + 1", "versuche++", "versuche += 1", "versuche ← 1 + versuche"]], sol: "(1) NICHT erfolgreich – sonst würde nach erfolgreicher Anmeldung weiter abgefragt.\n(2) versuche ← versuche + 1 – Fehlversuch zählen, sonst Endlosschleife." },
 { t: "Rabatt ab 1.000 €", code: "// Ab einem Bestellwert von 1.000 € gibt es 5 % Rabatt\nEINGABE betrag\nWENN betrag (1) 1000 DANN\n    rabatt ← betrag * (2)\nSONST\n    rabatt ← 0\nENDE WENN\nAUSGABE betrag − rabatt", gaps: [[">="], ["0.05", "5 / 100", "0.050"]], sol: "(1) >= – „ab 1.000 €“ schließt 1.000 € ein.\n(2) 0.05 – 5 % = 0,05 (× 1,05 wäre ein Aufschlag)." },
 { t: "Durchschnitt berechnen", code: "summe ← 0\nFÜR i ← 0 BIS länge(werte) − 1\n    summe ← summe + werte[i]\nENDE FÜR\nschnitt ← (1)\nWENN schnitt (2) grenzwert DANN\n    AUSGABE \"Warnung: Grenzwert überschritten\"\nENDE WENN", gaps: [["summe / länge(werte)"], [">"]], sol: "(1) summe / länge(werte) – Summe durch Anzahl der Werte.\n(2) > – „überschritten“ heißt größer als." },
 { t: "Lineare Suche", code: "// Sucht den Wert „gesucht“ in der Liste und bricht ab, sobald er gefunden ist\ngefunden ← falsch\ni ← 0\nSOLANGE i < länge(liste) UND (1)\n    WENN liste[i] = gesucht DANN\n        gefunden ← wahr\n    SONST\n        (2)\n    ENDE WENN\nENDE SOLANGE", gaps: [["NICHT gefunden", "gefunden = falsch", "!gefunden", "gefunden <> wahr"], ["i ← i + 1", "i++", "i += 1", "i ← 1 + i"]], sol: "(1) NICHT gefunden – nur weitersuchen, solange der Wert noch nicht gefunden wurde.\n(2) i ← i + 1 – zum nächsten Element gehen." },
 { t: "Passwortlänge prüfen", code: "// Ein Passwort muss mindestens 12 Zeichen lang sein\nEINGABE pw\nWENN länge(pw) (1) 12 DANN\n    AUSGABE \"Passwort zu kurz\"\nSONST\n    AUSGABE \"Passwort (2)\"\nENDE WENN", gaps: [["<"], ["ok", "gültig", "in Ordnung", "akzeptiert", "lang genug", "okay", "gueltig"]], sol: "(1) < – „mindestens 12“ bedeutet: alles unter 12 ist zu kurz, 12 selbst ist erlaubt.\n(2) ok – der SONST-Zweig behandelt das gültige Passwort." },
 { t: "Speicherplatz-Warnung", code: "// Warnung, wenn weniger als 10 % des Datenträgers frei sind\nEINGABE frei, gesamt\nfreiProzent ← (1)\nWENN freiProzent (2) 10 DANN\n    AUSGABE \"Warnung: Datenträger fast voll\"\nENDE WENN", gaps: [["frei / gesamt * 100", "frei * 100 / gesamt", "100 * frei / gesamt", "(frei / gesamt) * 100", "100 * (frei / gesamt)", "frei / (gesamt / 100)"], ["<"]], sol: "(1) frei / gesamt * 100 – Anteil des freien Speichers in Prozent.\n(2) < – „weniger als 10 %“." },
 { t: "Messwerte über Grenzwert zählen", code: "anzahl ← 0\nFÜR i ← 0 BIS (1)\n    WENN temp[i] > 30 DANN\n        (2)\n    ENDE WENN\nENDE FÜR\nAUSGABE anzahl", gaps: [["länge(temp) − 1"], ["anzahl ← anzahl + 1", "anzahl++", "anzahl += 1", "anzahl ← 1 + anzahl"]], sol: "(1) länge(temp) − 1 – der letzte gültige Index ist immer Länge − 1.\n(2) anzahl ← anzahl + 1 – Treffer zählen." },
 { t: "Ampelstatus der Serverauslastung", code: "// über 90 % = rot, über 70 % = gelb, sonst grün\nWENN auslastung > 90 DANN\n    status ← \"rot\"\nSONST WENN auslastung (1) 70 DANN\n    status ← \"gelb\"\nSONST\n    status ← (2)\nENDE WENN", gaps: [[">"], ["\"grün\"", "gruen"]], sol: "(1) > – „über 70 %“.\n(2) \"grün\" – der letzte SONST-Zweig fängt alle übrigen Fälle ab." },
 { t: "Funktion: Bruttopreis", code: "FUNKTION brutto(netto, ust): Kommazahl\n    RÜCKGABE (1)\nENDE FUNKTION\n\npreis ← brutto(200, 19)\nAUSGABE preis      // Ausgabe: (2)", gaps: [["netto * (1 + ust / 100)", "netto + netto * ust / 100", "netto * (100 + ust) / 100", "netto + netto / 100 * ust", "netto * (ust / 100 + 1)", "netto + (netto * ust / 100)", "netto + ust / 100 * netto", "(1 + ust / 100) * netto"], ["238", "238.00", "238,00"]], sol: "(1) netto * (1 + ust / 100) – Netto plus Umsatzsteuer.\n(2) 238 – 200 × 1,19." }
];
/* fix: [Musterlösung, weitere akzeptierte Korrekturen …] */
const PFEHLER = [
 { t: "Notendurchschnitt", code: "1  summe ← 0\n2  FÜR i ← 0 BIS länge(noten)\n3      summe ← summe + noten[i]\n4  ENDE FÜR\n5  schnitt ← summe / länge(noten)", line: 2, fix: ["FÜR i ← 0 BIS länge(noten) − 1", "FÜR i ← 0 BIS länge(noten) - 1"], why: "Off-by-one: Der Index läuft bis länge(noten) und greift damit über das letzte Element (Index länge − 1) hinaus." },
 { t: "Countdown", code: "1  i ← 10\n2  SOLANGE i > 0\n3      AUSGABE i\n4      i ← i + 1\n5  ENDE SOLANGE", line: 4, fix: ["i ← i − 1", "i--", "i -= 1"], why: "Endlosschleife: i wird größer statt kleiner, die Bedingung i > 0 bleibt immer wahr." },
 { t: "Volljährigkeit", code: "1  EINGABE alter\n2  WENN alter > 18 DANN\n3      AUSGABE \"volljährig\"\n4  SONST\n5      AUSGABE \"minderjährig\"\n6  ENDE WENN", line: 2, fix: ["WENN alter >= 18 DANN", "WENN alter > 17 DANN"], why: "Mit 18 ist man volljährig – > schließt 18 aus. Richtig ist >=." },
 { t: "Niedrigste Temperatur", code: "1  // messwerte enthält nur positive Temperaturen, z. B. 12, 15, 9\n2  min ← 0\n3  FÜR JEDEN wert IN messwerte\n4      WENN wert < min DANN\n5          min ← wert\n6      ENDE WENN\n7  ENDE FÜR", line: 2, fix: ["min ← messwerte[0]"], why: "Mit 0 initialisiert, ist kein positiver Wert kleiner – das Ergebnis bleibt 0. Mit dem ersten Element initialisieren." },
 { t: "Werte tauschen", code: "1  // Werte von a und b tauschen\n2  hilf ← a\n3  a ← b\n4  b ← a", line: 4, fix: ["b ← hilf"], why: "a wurde in Zeile 3 schon überschrieben – der alte Wert steckt in hilf." },
 { t: "Admin-Zugang mit MFA", code: "1  // Zugang nur für Admins, die MFA nutzen\n2  WENN rolle = \"Admin\" ODER mfa = wahr DANN\n3      zugang ← wahr\n4  SONST\n5      zugang ← falsch\n6  ENDE WENN", line: 2, fix: ["WENN rolle = \"Admin\" UND mfa = wahr DANN", "WENN rolle = \"Admin\" UND mfa DANN", "WENN mfa = wahr UND rolle = \"Admin\" DANN", "WENN mfa UND rolle = \"Admin\" DANN"], why: "Beide Bedingungen müssen erfüllt sein → UND. Mit ODER bekäme jeder Nutzer mit MFA Zugang." },
 { t: "Fußgesteuerte Eingabeprüfung", code: "1  // Zahl zwischen 1 und 10 abfragen, bis sie gültig ist\n2  WIEDERHOLE\n3      EINGABE zahl\n4  BIS zahl < 1 ODER zahl > 10", line: 4, fix: ["BIS zahl >= 1 UND zahl <= 10", "BIS zahl <= 10 UND zahl >= 1", "BIS NICHT (zahl < 1 ODER zahl > 10)", "BIS zahl > 0 UND zahl < 11", "BIS zahl > 0 UND zahl <= 10", "BIS zahl >= 1 UND zahl < 11"], why: "BIS nennt die Abbruchbedingung – abbrechen, wenn die Zahl GÜLTIG ist (1 bis 10)." },
 { t: "Durchschnittliche Antwortzeit", code: "1  // Durchschnittliche Antwortzeit in ms – mit Nachkommastellen\n2  summe ← 0\n3  FÜR JEDE zeit IN zeiten\n4      summe ← summe + zeit\n5  ENDE FÜR\n6  schnitt ← summe DIV länge(zeiten)", line: 6, fix: ["schnitt ← summe / länge(zeiten)"], why: "DIV ist die ganzzahlige Division und schneidet die Nachkommastellen ab. Für den Durchschnitt wird / benötigt." },
 { t: "Summe der geraden Zahlen", code: "1  // Summe aller geraden Zahlen von 1 bis 10\n2  summe ← 0\n3  FÜR i ← 1 BIS 10\n4      WENN i MOD 2 = 1 DANN\n5          summe ← summe + i\n6      ENDE WENN\n7  ENDE FÜR", line: 4, fix: ["WENN i MOD 2 = 0 DANN", "WENN i MOD 2 <> 1 DANN"], why: "i MOD 2 = 1 trifft auf ungerade Zahlen zu. Gerade Zahlen haben den Rest 0." },
 { t: "Maximum merken", code: "1  max ← liste[0]\n2  FÜR i ← 1 BIS länge(liste) − 1\n3      WENN liste[i] > max DANN\n4          max ← i\n5      ENDE WENN\n6  ENDE FÜR", line: 4, fix: ["max ← liste[i]"], why: "Gespeichert wird der Index i statt des Wertes liste[i]." },
 { t: "Maximal drei Versuche", code: "1  // Der Benutzer hat maximal 3 Versuche\n2  versuche ← 0\n3  SOLANGE versuche <= 3\n4      EINGABE pw\n5      versuche ← versuche + 1\n6  ENDE SOLANGE", line: 3, fix: ["SOLANGE versuche < 3", "SOLANGE versuche <= 2"], why: "Off-by-one: 0, 1, 2 und 3 ergeben vier Durchläufe. Richtig ist < 3." },
 { t: "Byte in MiB umrechnen", code: "1  // Dateigröße von Byte in MiB umrechnen\n2  EINGABE bytes\n3  mib ← bytes / 1000 / 1000\n4  AUSGABE mib", line: 3, fix: ["mib ← bytes / 1024 / 1024", "mib ← bytes / (1024 * 1024)", "mib ← bytes / 1048576", "mib ← bytes / 2^20", "mib ← bytes / (1024 ^ 2)"], why: "1 MiB = 1024 × 1024 Byte (2²⁰). Mit 1000 × 1000 rechnet man in MB." }
];
const PSEUDO_HINT = "Schreibe wie im Pseudocode der Aufgabe. Den Zuweisungspfeil ← kannst du als <- oder = tippen; Leerzeichen und Groß-/Kleinschreibung sind egal.";
TRAINERS.push({ id: "pseudo", cat: "Planung", icon: "🧩", t: "Pseudocode: Lücken & Fehler", d: "Lücken selbst ausfüllen oder die fehlerhafte Zeile korrigieren", gen() {
  if (Math.random() < .5) {
    const p = pick(PSEUDO);
    return { q: `<b>${esc(p.t)}</b> – ergänze die Lücken:\n<pre class="code">${esc(p.code)}</pre>`, hint: PSEUDO_HINT, fields: p.gaps.map((g, i) => ({ l: `Lücke (${i + 1})`, ans: g[0], alt: g.slice(1), type: "code" })), sol: esc(p.sol) };
  }
  const f = pick(PFEHLER);
  return { q: `<b>${esc(f.t)}</b> – der Algorithmus enthält genau einen Fehler:\n<pre class="code">${esc(f.code)}</pre>`, hint: PSEUDO_HINT, fields: [{ l: "Fehlerhafte Zeile (Nummer)", ans: f.line, type: "num" }, { l: "Korrigierte Zeile (ohne Zeilennummer)", ans: f.fix[0], alt: f.fix.slice(1), type: "code" }], sol: `Zeile ${f.line} → <span class="mono">${esc(f.fix[0])}</span>\n${esc(f.why)}` };
}});
TRBY.pseudo = TRAINERS[TRAINERS.length - 1];

/* ---------- KI-Bewertung offener Antworten ---------- */
let SAMPLE = null, SAMPLE_TRIED = false;
(async () => { try { if (window.claude && typeof window.claude.use === "function") SAMPLE = await window.claude.use("sample"); } catch (e) {} SAMPLE_TRIED = true; })();
function aiRef(kind, idx) {
  if (kind === "case") { const s = FS.c.steps[idx], st = FS.st[idx]; return { item: st, q: s.q, p: s.p, a: s.a, ans: st.ans, sit: (FS.c.sit + "\n" + [FS.c.att, ...FS.c.steps.slice(0, idx + 1).filter(x => x.ctx || x.att).slice(-2).flatMap(x => [x.ctx, x.att])].filter(Boolean).map(h => String(h).replace(/<\/(tr|p|div|pre|h\d)>|<br>/g, "\n").replace(/<\/t[dh]>/g, " | ").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")).join("\n")).slice(0, 5000) }; }
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
