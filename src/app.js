"use strict";
/* ====================== Grundlagen ====================== */
const EXAM = new Date("2027-02-24T08:00:00+01:00");
const KEY = "ap1-lernwerkstatt-v1";
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const hash = s => { let x = 5381; for (let i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0; return (x >>> 0).toString(36); };
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmt = (n, d = 2) => Number(n).toLocaleString("de-DE", { maximumFractionDigits: d });
const DAY = 864e5;
const today = () => new Date().toISOString().slice(0, 10);
const TYPE_PTS = { sc: 2, mc: 3, num: 3 };

/* Daten aufbereiten */
const TOPICS = T;
const TBY = {};
TOPICS.forEach((t, ti) => {
  t.nr = ti + 1; TBY[t.id] = t;
  t.cards = t.cards.map(c => ({ f: c[0], b: c[1], k: "c" + hash(t.id + c[0]), tid: t.id }));
  t.qs.forEach(q => { q.k = "q" + hash(t.id + q.q); q.tid = t.id; });
});
const ALLQ = TOPICS.flatMap(t => t.qs);
const ALLC = TOPICS.flatMap(t => t.cards);
const QBY = {}; ALLQ.forEach(q => QBY[q.k] = q);

/* ====================== Speicher ====================== */
function blank() { return { v: 1, u: 0, read: {}, c: {}, q: {}, bm: {}, tr: {}, ex: [], days: {}, notes: {}, cs: {} }; }
let S = blank();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}
let remoteRef = null, remoteBusy = false, remoteDirty = false, remoteTimer = null;
function setSync(t) { const el = $("#sync"); if (el) el.textContent = t; }
function save() {
  S.u = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  if (remoteRef) { remoteDirty = true; clearTimeout(remoteTimer); remoteTimer = setTimeout(pushRemote, 2500); }
}
async function pushRemote() {
  if (!remoteRef || remoteBusy || !remoteDirty) return;
  remoteBusy = true; remoteDirty = false;
  try { await remoteRef.set(JSON.parse(JSON.stringify(S))); setSync("☁︎ synchronisiert"); }
  catch (e) { setSync("lokal gespeichert"); if (e && e.code === "invalid_argument") remoteRef = null; }
  remoteBusy = false;
  if (remoteDirty) { clearTimeout(remoteTimer); remoteTimer = setTimeout(pushRemote, 2500); }
}
function activity(n = 1) { const d = today(); S.days[d] = (S.days[d] || 0) + n; }
(async function initRemote() {
  try {
    if (!window.claude || typeof window.claude.use !== "function") return;
    const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
    if (!db || !user) return;
    const id = await user.id();
    if (!id) return;
    const ref = db.doc("data/users/" + id + "/progress");
    const snap = await ref.get();
    if (snap.exists) {
      const r = snap.data();
      if (r && (r.u || 0) > (S.u || 0)) {
        S = Object.assign(blank(), JSON.parse(JSON.stringify(r)));
        try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
        render();
      }
    }
    remoteRef = ref;
    setSync("☁︎ synchronisiert");
    if (!snap.exists || (snap.data().u || 0) < (S.u || 0)) { remoteDirty = true; pushRemote(); }
  } catch (e) { /* bleibt lokal */ }
})();

/* ====================== Statistik ====================== */
const BOX_DAYS = [0, 0, 1, 3, 7, 16];
function cardState(c) { return S.c[c.k]; }
function isDue(c) { const s = cardState(c); return !s || s.d <= Date.now(); }
function topicStats(t) {
  const cn = t.cards.length, qn = t.qs.length;
  let cm = 0, cs = 0; t.cards.forEach(c => { const s = S.c[c.k]; if (s) { cs++; if (s.b >= 3) cm++; } });
  let qa = 0, qr = 0; t.qs.forEach(q => { const s = S.q[q.k]; if (s) { qa++; if (s.l) qr++; } });
  const read = S.read[t.id] ? 1 : 0;
  const score = Math.round(100 * (0.2 * read + 0.4 * (cm / cn) + 0.4 * (qr / qn)));
  return { cn, qn, cm, cs, qa, qr, read, score, acc: qa ? Math.round(100 * qr / qa) : null };
}
function overall() {
  let w = 0, s = 0; TOPICS.forEach(t => { w += t.weight; s += t.weight * topicStats(t).score; });
  return Math.round(s / w);
}
function streak() {
  let n = 0; const d = new Date();
  if (!S.days[today()]) d.setDate(d.getDate() - 1);
  for (;;) { const k = d.toISOString().slice(0, 10); if (S.days[k]) { n++; d.setDate(d.getDate() - 1); } else break; }
  return n;
}
function recordQ(q, ok) {
  const s = S.q[q.k] || { r: 0, w: 0, l: 0 };
  if (ok) s.r++; else s.w++;
  s.l = ok ? 1 : 0; s.t = Date.now(); S.q[q.k] = s; activity(); save();
}
function ihkNote(p) {
  if (p >= 92) return ["1", "sehr gut"]; if (p >= 81) return ["2", "gut"]; if (p >= 67) return ["3", "befriedigend"];
  if (p >= 50) return ["4", "ausreichend"]; if (p >= 30) return ["5", "mangelhaft"]; return ["6", "ungenügend"];
}

/* ====================== Navigation ====================== */
const NAV = [["start", "🏠 Start"], ["themen", "📚 Themen"], ["karten", "🃏 Karteikarten"], ["quiz", "❓ Quiz"], ["fall", "🏢 Fallstudien"], ["anlagen", "📎 Anlagen"], ["rechner", "🧰 Rechner"], ["trainer", "🎯 Rechentrainer"], ["pruefung", "⏱️ Prüfung"], ["merkzettel", "💡 Merkzettel"], ["glossar", "📖 Glossar"], ["suche", "🔎 Suche"], ["plan", "🗓️ Lernplan"]];
let view = "start", topicTab = "wissen";
function go(v) { if (location.hash === "#" + v) route(); else location.hash = v; }
function route() {
  const h = (location.hash || "#start").slice(1);
  if (h.startsWith("t-") && TBY[h.slice(2)]) view = h;
  else view = NAV.some(n => n[0] === h) ? h : "start";
  render(); window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
function renderNav() {
  const cur = view.startsWith("t-") ? "themen" : view;
  $("#nav").innerHTML = NAV.map(([k, l]) => `<button class="${k === cur ? "on" : ""}" onclick="go('${k}')">${l}</button>`).join("");
}
function countdown() {
  const d = Math.ceil((EXAM - Date.now()) / DAY);
  $("#cd").innerHTML = d > 0 ? `⏳ ${d} Tage<span class="cdx"> bis 24.02.2027</span>` : "Prüfung vorbei 🎉";
}
function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove("on"), 1800); }
function render() {
  renderNav(); countdown();
  const app = $("#app");
  if (view.startsWith("t-")) return renderTopic(app, TBY[view.slice(2)]);
  ({ start: renderStart, themen: renderTopics, karten: renderCardsHome, quiz: renderQuizHome, fall: renderCases, anlagen: renderAnl, glossar: renderGlossar, rechner: renderCalcHome, trainer: renderTrainerHome, pruefung: renderExamHome, merkzettel: renderMerk, suche: renderSearch, plan: renderPlan })[view](app);
}

/* ====================== Start ====================== */
function ring(p, color = "var(--cy)") {
  const r = 50, c = 2 * Math.PI * r;
  return `<svg class="ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="${r}" fill="none" stroke="#1b2430" stroke-width="11"/>${p > 0 ? `<circle cx="60" cy="60" r="${r}" fill="none" stroke="${color}" stroke-width="11" stroke-linecap="round" stroke-dasharray="${c * p / 100} ${c}" transform="rotate(-90 60 60)"/>` : ""}<text x="60" y="58" text-anchor="middle" fill="#fff" font-size="26" font-weight="800" font-family="Inter">${p}%</text><text x="60" y="78" text-anchor="middle" fill="#93a1b3" font-size="11" font-family="Inter">bereit</text></svg>`;
}
function recommendation() {
  const unread = TOPICS.find(t => !S.read[t.id]);
  const due = ALLC.filter(c => S.c[c.k] && S.c[c.k].d <= Date.now()).length;
  const wrong = ALLQ.filter(q => S.q[q.k] && !S.q[q.k].l).length;
  const weakest = TOPICS.map(t => ({ t, s: topicStats(t).score - t.weight * 3 })).sort((a, b) => a.s - b.s)[0].t;
  const items = [];
  if (due) items.push(`<button class="btn pri" onclick="startCards('due')">🃏 ${due} fällige Karten wiederholen</button>`);
  if (unread) items.push(`<button class="btn" onclick="topicTab='wissen';go('t-${unread.id}')">${unread.icon} Weiter mit: ${esc(unread.title)}</button>`);
  if (wrong) items.push(`<button class="btn" onclick="startQuiz(ALLQ.filter(q=>S.q[q.k]&&!S.q[q.k].l),'Fehlertraining')">🔁 ${wrong} falsche Fragen nachholen</button>`);
  items.push(`<button class="btn" onclick="topicTab='quiz';go('t-${weakest.id}')">🎯 Schwächstes Thema: ${esc(weakest.title)}</button>`);
  return items.join("");
}
function renderStart(app) {
  const o = overall(), st = streak();
  const days = Math.max(0, Math.ceil((EXAM - Date.now()) / DAY));
  const answered = Object.keys(S.q).length, cardsSeen = Object.keys(S.c).length;
  const lastEx = S.ex[S.ex.length - 1];
  app.innerHTML = `
  <div class="card" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;background:linear-gradient(135deg,#132131,#151c25 60%)">
    ${ring(o)}
    <div style="flex:1;min-width:240px">
      <h1>Noch ${days} Tage bis zur AP1.</h1>
      <p class="sub" style="margin-bottom:12px">Mittwoch, 24.02.2027 · 90 Minuten · 20 % der Gesamtnote. ${TOPICS.length} Themen, ${ALLC.length} Karteikarten, ${ALLQ.length} Prüfungsfragen und ${TRAINERS.length} Rechentrainer, ${CALCS.length} Rechner und ${CASES.length} Fallstudien – alles nach dem AkA-Katalog ab 2025.</p>
      <div class="row">${recommendation()}</div>
      ${STANDALONE && (!S.lastBackup || Date.now() - S.lastBackup > 7 * DAY) && Object.keys(S.q).length + Object.keys(S.c).length > 20 ? `<div class="fb inf" style="margin-top:12px"><b>💾 Tipp:</b> Dein Fortschritt liegt nur in diesem Browser. Sichere ihn ab und zu: <button class="btn sm pri" onclick="saveBackupFile()">Backup speichern</button></div>` : ""}
    </div>
  </div>
  <div class="grid g4" style="margin-top:14px">
    <div class="card stat"><div class="v" style="color:var(--am)">🔥 ${st}</div><div class="l">Tage Lernserie</div></div>
    <div class="card stat"><div class="v">${answered}<span class="dim" style="font-size:15px"> / ${ALLQ.length}</span></div><div class="l">Fragen bearbeitet</div></div>
    <div class="card stat"><div class="v">${cardsSeen}<span class="dim" style="font-size:15px"> / ${ALLC.length}</span></div><div class="l">Karten gelernt</div></div>
    <div class="card stat"><div class="v">${lastEx ? lastEx.pct + "%" : "–"}</div><div class="l">${lastEx ? "Letzte Simulation (Note " + ihkNote(lastEx.pct)[0] + ")" : "Noch keine Prüfungssimulation"}</div></div>
  </div>
  <div class="grid g3" style="margin-top:14px">
    <div class="card click" onclick="go('fall')"><b>🏢 Fallstudien</b><div class="small muted">${Object.keys(S.cs || {}).length}/${CASES.length} bearbeitet – Hardware, OS & Lizenzen für echte Firmen-Szenarien</div></div>
    <div class="card click" onclick="CALC='subnet';go('rechner')"><b>🧰 Subnetz-Rechner</b><div class="small muted">plus VLSM, IPv6, Netzplan, Nutzwert, Lizenzen, Taschenrechner …</div></div>
    <div class="card click" onclick="go('pruefung')"><b>⏱️ Prüfungssimulation</b><div class="small muted">90 Minuten, ~100 Punkte, IHK-Notenschlüssel</div></div>
  </div>
  <h2>Themen nach Fortschritt</h2>
  <div class="grid g2">${TOPICS.map(topicCard).join("")}</div>
  <h2>Aktivität (letzte 10 Wochen)</h2>
  <div class="card">${heatmap()}</div>`;
}
function heatmap() {
  const cells = []; const d = new Date(); d.setDate(d.getDate() - 69);
  for (let i = 0; i < 70; i++) {
    const k = d.toISOString().slice(0, 10), n = S.days[k] || 0;
    const a = n === 0 ? "#1b2430" : n < 10 ? "#0e4a5e" : n < 30 ? "#0f7490" : n < 60 ? "#22a3c9" : "#38bdf8";
    cells.push(`<div title="${k}: ${n} Aktionen" style="width:14px;height:14px;border-radius:3px;background:${a}"></div>`);
    d.setDate(d.getDate() + 1);
  }
  return `<div style="display:grid;grid-template-rows:repeat(7,14px);grid-auto-flow:column;gap:4px;overflow-x:auto">${cells.join("")}</div><div class="small dim" style="margin-top:8px">Jede Karte, Frage und Trainingsaufgabe zählt.</div>`;
}
function topicCard(t) {
  const s = topicStats(t);
  const w = ["", "", "◆◆", "◆◆◆"][t.weight] || "◆";
  return `<div class="card click tcard" onclick="topicTab='wissen';go('t-${t.id}')">
    <div class="ic">${t.icon}</div>
    <div style="flex:1;min-width:0">
      <div class="row" style="justify-content:space-between;gap:6px"><h3>${t.nr}. ${esc(t.title)}</h3><span class="pill ${s.score >= 75 ? "gr" : s.score >= 40 ? "am" : ""}">${s.score}%</span></div>
      <p>${esc(t.summary)}</p>
      <div class="bar"><i style="width:${s.score}%"></i></div>
      <div class="row small dim" style="margin-top:7px;gap:12px">
        <span>${s.read ? "✅ gelesen" : "📖 ungelesen"}</span><span>🃏 ${s.cm}/${s.cn}</span><span>❓ ${s.qr}/${s.qn}</span><span title="Prüfungsrelevanz" style="color:var(--am)">${w}</span>
      </div>
    </div></div>`;
}

/* ====================== Themen ====================== */
function renderTopics(app) {
  const areas = [...new Set(TOPICS.map(t => t.area))];
  app.innerHTML = `<h1>📚 Themen</h1><p class="sub">Sortiert nach den Bereichen des Prüfungskatalogs. ◆◆◆ = sehr häufig in der AP1. Jedes Thema hat Wissen, Karteikarten und Quiz.</p>
  ${areas.map(a => `<h2>${esc(a)}</h2><div class="grid g2">${TOPICS.filter(t => t.area === a).map(topicCard).join("")}</div>`).join("")}`;
}
function renderTopic(app, t) {
  const s = topicStats(t);
  const i = TOPICS.indexOf(t), prev = TOPICS[i - 1], next = TOPICS[i + 1];
  app.innerHTML = `
  <div class="row small"><a href="#themen">← Alle Themen</a><span class="dim">·</span><span class="dim">${esc(t.area)}</span></div>
  <div class="row" style="justify-content:space-between;margin-top:8px">
    <h1>${t.icon} ${t.nr}. ${esc(t.title)}</h1>
    <span class="pill ${s.score >= 75 ? "gr" : s.score >= 40 ? "am" : ""}">Fortschritt ${s.score}%</span>
  </div>
  <p class="sub">${esc(t.summary)}</p>
  <div class="tabs">
    ${[["wissen", "📖 Wissen"], ["karten", `🃏 Karten (${t.cards.length})`], ["quiz", `❓ Quiz (${t.qs.length})`], ["notiz", "📝 Notizen"]].map(([k, l]) => `<button class="${topicTab === k ? "on" : ""}" onclick="topicTab='${k}';render()">${l}</button>`).join("")}
  </div>
  <div id="tbody"></div>
  <div class="row" style="justify-content:space-between;margin-top:30px">
    ${prev ? `<button class="btn" onclick="topicTab='wissen';go('t-${prev.id}')">← ${esc(prev.title)}</button>` : "<span></span>"}
    ${next ? `<button class="btn" onclick="topicTab='wissen';go('t-${next.id}')">${esc(next.title)} →</button>` : ""}
  </div>`;
  const b = $("#tbody");
  if (topicTab === "wissen") {
    b.innerHTML = `<div class="lesson">${t.lesson}</div>
    <div class="card" style="margin-top:24px;max-width:820px">
      <div class="row" style="justify-content:space-between">
        <div><b>${S.read[t.id] ? "✅ Als gelesen markiert" : "Fertig gelesen?"}</b><div class="small muted">Danach: Karten festigen, dann Quiz.</div></div>
        <div class="row">
          <button class="btn ${S.read[t.id] ? "" : "pri"}" onclick="S.read['${t.id}']=!S.read['${t.id}'];activity();save();render()">${S.read[t.id] ? "Markierung entfernen" : "✓ Gelesen"}</button>
          <button class="btn" onclick="topicTab='karten';render()">🃏 Zu den Karten</button>
        </div>
      </div>
    </div>`;
  } else if (topicTab === "karten") {
    const due = t.cards.filter(isDue).length;
    b.innerHTML = `<div class="row" style="margin-bottom:14px"><button class="btn pri" onclick="startCards('topic','${t.id}')">▶ Lernen (${due} fällig/neu)</button><button class="btn" onclick="startCards('topicall','${t.id}')">Alle ${t.cards.length} Karten durchgehen</button></div>
    <div class="card">${t.cards.map(c => { const st = S.c[c.k]; return `<div class="hit"><div class="row" style="justify-content:space-between"><b>${esc(c.f)}</b>${boxPill(st)}</div><div class="muted small" style="margin-top:3px">${esc(c.b)}</div></div>`; }).join("")}</div>`;
  } else if (topicTab === "quiz") {
    const wrong = t.qs.filter(q => S.q[q.k] && !S.q[q.k].l);
    b.innerHTML = `<div class="row" style="margin-bottom:14px">
      <button class="btn pri" onclick="startQuiz(TBY['${t.id}'].qs,'${esc(t.title)}')">▶ Alle ${t.qs.length} Fragen</button>
      <button class="btn" ${wrong.length ? "" : "disabled"} onclick="startQuiz(TBY['${t.id}'].qs.filter(q=>S.q[q.k]&&!S.q[q.k].l),'Fehler: ${esc(t.title)}')">🔁 Nur falsche (${wrong.length})</button>
      <button class="btn" onclick="startQuiz(TBY['${t.id}'].qs.filter(q=>q.t==='open'),'Offene Aufgaben: ${esc(t.title)}')">✍️ Nur offene IHK-Aufgaben</button>
    </div>
    <div class="card">${t.qs.map((q, i) => { const st = S.q[q.k]; return `<div class="hit row" style="justify-content:space-between;flex-wrap:nowrap"><div class="small" style="flex:1">${i + 1}. ${esc(q.q)}</div><span class="pill ${st ? (st.l ? "gr" : "rd") : ""}">${st ? (st.l ? "✓" : "✗") : typeLabel(q)}</span></div>`; }).join("")}</div>`;
  } else {
    b.innerHTML = `<p class="muted small">Eigene Notizen, Eselsbrücken oder Fragen an die Lehrkraft – werden mit deinem Fortschritt gespeichert.</p>
    <textarea id="note" style="min-height:240px" placeholder="z. B. Merksatz, Beispiel aus dem Praktikum …">${esc(S.notes[t.id] || "")}</textarea>
    <div class="row" style="margin-top:10px"><button class="btn pri" onclick="S.notes['${t.id}']=$('#note').value;save();toast('Notiz gespeichert')">Speichern</button></div>`;
  }
}
function typeLabel(q) { return { sc: "Single", mc: "Multi", num: "Rechnen", open: "Offen " + (q.p || "") + "P" }[q.t]; }
function boxPill(st) {
  if (!st) return `<span class="pill">neu</span>`;
  const cls = st.b >= 4 ? "gr" : st.b >= 2 ? "cy" : "rd";
  return `<span class="pill ${cls}">Fach ${st.b}</span>`;
}

/* ====================== Karteikarten ====================== */
let CS = null;
function renderCardsHome(app) {
  if (CS) return renderCardSession(app);
  const due = ALLC.filter(c => S.c[c.k] && S.c[c.k].d <= Date.now()).length;
  const neu = ALLC.filter(c => !S.c[c.k]).length;
  const boxes = [1, 2, 3, 4, 5].map(b => ALLC.filter(c => S.c[c.k] && S.c[c.k].b === b).length);
  app.innerHTML = `<h1>🃏 Karteikarten</h1><p class="sub">Leitner-System: „Gewusst“ schiebt die Karte ein Fach weiter (Wiederholung nach 1, 3, 7, 16 Tagen), „Nochmal“ zurück in Fach 1. Tastatur: <span class="kbd">Leertaste</span> umdrehen, <span class="kbd">1</span> nochmal, <span class="kbd">2</span> gewusst.</p>
  <div class="grid g4">
    <div class="card stat"><div class="v" style="color:var(--am)">${due}</div><div class="l">fällig</div></div>
    <div class="card stat"><div class="v">${neu}</div><div class="l">noch neu</div></div>
    ${boxes.map((n, i) => `<div class="card stat"><div class="v">${n}</div><div class="l">Fach ${i + 1}</div></div>`).join("")}
  </div>
  <div class="row" style="margin:18px 0"><button class="btn pri" onclick="startCards('due')">▶ Fällige + 20 neue lernen</button><button class="btn" onclick="startCards('random')">🎲 30 zufällige Karten</button></div>
  <h2>Nach Thema</h2>
  <div class="grid g3">${TOPICS.map(t => { const s = topicStats(t); const d = t.cards.filter(isDue).length; return `<div class="card click" onclick="startCards('topic','${t.id}')"><div class="row" style="justify-content:space-between"><b>${t.icon} ${esc(t.title)}</b></div><div class="small muted" style="margin:6px 0">${s.cm}/${s.cn} sicher · ${d} fällig/neu</div><div class="bar"><i style="width:${Math.round(100 * s.cm / s.cn)}%"></i></div></div>`; }).join("")}</div>`;
}
function startCards(mode, tid) {
  let list;
  if (mode === "due") { const d = shuffle(ALLC.filter(c => S.c[c.k] && S.c[c.k].d <= Date.now())); const n = ALLC.filter(c => !S.c[c.k]).slice(0, 20); list = d.concat(n); }
  else if (mode === "random") list = shuffle(ALLC).slice(0, 30);
  else if (mode === "topic") { list = TBY[tid].cards.filter(isDue); if (!list.length) list = TBY[tid].cards.slice(); list = shuffle(list); }
  else list = TBY[tid].cards.slice();
  if (!list.length) { toast("Gerade nichts fällig – super! 🎉"); return; }
  CS = { list, i: 0, flip: false, ok: 0, no: 0 };
  if (view === "karten") render(); else go("karten");
}
function renderCardSession(app) {
  if (CS.i >= CS.list.length) {
    app.innerHTML = `<div class="qbox card" style="text-align:center;padding:30px"><div style="font-size:44px">🎉</div><h1>Runde geschafft</h1><p class="sub">${CS.ok} gewusst · ${CS.no} nochmal</p><div class="row" style="justify-content:center"><button class="btn pri" onclick="CS=null;startCards('due')">Weiter lernen</button><button class="btn" onclick="CS=null;render()">Zur Übersicht</button></div></div>`;
    return;
  }
  const c = CS.list[CS.i], t = TBY[c.tid] || { icon: "🔤", title: "Abkürzungen" };
  app.innerHTML = `<div class="qbox">
    <div class="qhead"><button class="btn sm" onclick="CS=null;render()">✕ Beenden</button><span class="small muted">${t.icon} ${esc(t.title)}</span><span class="pill">${CS.i + 1} / ${CS.list.length}</span></div>
    <div class="bar" style="margin-bottom:16px"><i style="width:${100 * CS.i / CS.list.length}%"></i></div>
    <div class="fc-wrap"><div class="fc ${CS.flip ? "flip" : ""}" id="fc" onclick="flipCard()">
      <div class="face front"><span class="lab">Frage ${boxPill(S.c[c.k])}</span><div class="txt">${esc(c.f)}</div><div class="small dim" style="text-align:center;margin-top:16px">antippen zum Umdrehen</div></div>
      <div class="face back"><span class="lab">Antwort</span><div class="txt">${esc(c.b)}</div></div>
    </div></div>
    <div class="row" style="justify-content:center;margin-top:18px">
      ${CS.flip ? `<button class="btn bad" onclick="rateCard(false)">↺ Nochmal <span class="kbd">1</span></button><button class="btn ok" onclick="rateCard(true)">✓ Gewusst <span class="kbd">2</span></button>` : `<button class="btn pri" onclick="flipCard()">Antwort zeigen <span class="kbd" style="color:#06121c;border-color:#06121c55">Leertaste</span></button>`}
    </div></div>`;
}
function flipCard() { CS.flip = !CS.flip; const el = $("#fc"); if (el) el.classList.toggle("flip", CS.flip); setTimeout(render, CS.flip ? 260 : 0); }
function rateCard(ok) {
  const c = CS.list[CS.i]; const s = S.c[c.k] || { b: 0 };
  s.b = ok ? Math.min(5, (s.b || 1) + 1) : 1;
  s.d = Date.now() + BOX_DAYS[s.b] * DAY - (ok ? 0 : 1);
  S.c[c.k] = s; ok ? CS.ok++ : CS.no++;
  if (!ok) CS.list.push(c);
  activity(); save(); CS.i++; CS.flip = false; render();
}

/* ====================== Quiz ====================== */
let QS = null, timerH = null;
function stopTimer() { if (timerH) { clearInterval(timerH); timerH = null; } }
function renderQuizHome(app) {
  if (QS) return renderQuizRun(app);
  const wrong = ALLQ.filter(q => S.q[q.k] && !S.q[q.k].l).length;
  const bm = Object.keys(S.bm).filter(k => QBY[k]).length;
  const unseen = ALLQ.filter(q => !S.q[q.k]).length;
  app.innerHTML = `<h1>❓ Quiz</h1><p class="sub">Lernmodus mit sofortiger Erklärung. Offene Aufgaben (wie in der echten AP1): erst selbst formulieren, dann Musterlösung ansehen und ehrlich Punkte vergeben.</p>
  <div class="grid g3">
    <div class="card click" onclick="startQuiz(shuffle(ALLQ).slice(0,20),'Mix: 20 Fragen')"><b>🎲 Zufallsmix</b><div class="small muted">20 Fragen aus allen Themen</div></div>
    <div class="card click" onclick="startQuiz(shuffle(ALLQ.filter(q=>!S.q[q.k])).slice(0,25),'Neue Fragen')"><b>🆕 Neue Fragen</b><div class="small muted">${unseen} noch nie beantwortet</div></div>
    <div class="card click" onclick="${wrong ? "startQuiz(ALLQ.filter(q=>S.q[q.k]&&!S.q[q.k].l),'Fehlertraining')" : "toast('Keine offenen Fehler 👍')"}"><b>🔁 Fehlertraining</b><div class="small muted">${wrong} zuletzt falsch beantwortet</div></div>
    <div class="card click" onclick="${bm ? "startQuiz(Object.keys(S.bm).map(k=>QBY[k]).filter(Boolean),'Lesezeichen')" : "toast('Noch keine Lesezeichen')"}"><b>🔖 Lesezeichen</b><div class="small muted">${bm} markiert</div></div>
    <div class="card click" onclick="startQuiz(shuffle(ALLQ.filter(q=>q.t==='open')).slice(0,10),'Offene IHK-Aufgaben')"><b>✍️ Offene Aufgaben</b><div class="small muted">10 Aufgaben mit Musterlösung</div></div>
    <div class="card click" onclick="startQuiz(shuffle(ALLQ.filter(q=>q.t==='num')).slice(0,15),'Rechenaufgaben')"><b>🔢 Rechenaufgaben</b><div class="small muted">15 Aufgaben aus dem Fragenpool</div></div>
  </div>
  <h2>Eigene Auswahl</h2>
  <div class="card">
    <div class="row" style="gap:8px" id="qsel">${TOPICS.map(t => `<label class="chk" id="lb-${t.id}"><input type="checkbox" value="${t.id}" onchange="this.parentNode.classList.toggle('on',this.checked)"> ${t.icon} ${esc(t.title)}</label>`).join("")}</div>
    <div class="row" style="margin-top:14px">
      <select id="qcount" style="width:auto"><option value="10">10 Fragen</option><option value="20" selected>20 Fragen</option><option value="40">40 Fragen</option><option value="999">alle</option></select>
      <button class="btn pri" onclick="customQuiz()">▶ Starten</button>
      <button class="btn sm" onclick="document.querySelectorAll('#qsel input').forEach(i=>{i.checked=true;i.parentNode.classList.add('on')})">alle wählen</button>
    </div>
  </div>`;
}
function customQuiz() {
  const ids = [...document.querySelectorAll("#qsel input:checked")].map(i => i.value);
  if (!ids.length) return toast("Bitte mindestens ein Thema wählen");
  const n = +$("#qcount").value;
  startQuiz(shuffle(ALLQ.filter(q => ids.includes(q.tid))).slice(0, n), "Eigene Auswahl");
}
function prepQ(q) {
  const o = { q, ans: null, done: false, ok: null, pts: null };
  if (q.t === "sc" || q.t === "mc") o.ord = shuffle(q.o.map((_, i) => i));
  if (q.t === "mc") o.ans = [];
  return o;
}
function startQuiz(list, title, exam = false) {
  if (!list || !list.length) return toast("Keine Fragen in dieser Auswahl");
  stopTimer();
  QS = { items: list.map(prepQ), i: 0, title, exam, end: exam ? Date.now() + 90 * 60 * 1000 : 0, finished: false };
  if (exam) timerH = setInterval(tick, 1000);
  if (view === "quiz") render(); else go("quiz");
}
function tick() {
  const el = $("#timer"); if (!QS || !QS.exam) return stopTimer();
  const left = QS.end - Date.now();
  if (left <= 0) { stopTimer(); finishExam(); return; }
  if (el) { const m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000); el.textContent = `⏱ ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`; el.classList.toggle("low", left < 10 * 60000); }
}
function parseNums(s) {
  s = String(s).trim().replace(/\s/g, "").replace(/€|%|h$|s$|min$/gi, "");
  if (!s) return [];
  if (s.includes(",") && s.includes(".")) return [parseFloat(s.replace(/\./g, "").replace(",", "."))];
  if (s.includes(",")) return [parseFloat(s.replace(",", "."))];
  if (/^\d{1,3}(\.\d{3})+$/.test(s)) return [parseFloat(s.replace(/\./g, "")), parseFloat(s)];
  return [parseFloat(s)];
}
function parseNum(s) { const a = parseNums(s); return a.length ? a[0] : NaN; }
function numOk(v, a, tol) { const t = tol != null ? tol : Math.max(1e-9, Math.abs(a) * 1e-6); return parseNums(v).some(x => !isNaN(x) && Math.abs(x - a) <= t + 1e-9); }
function checkItem(it) {
  const q = it.q;
  if (q.t === "sc") return it.ans === q.a;
  if (q.t === "mc") { const a = [...it.ans].sort().join(","), b = [...q.a].sort().join(","); return a === b; }
  if (q.t === "num") return numOk(it.ans, q.a, q.tol);
  return null;
}
function renderQuizRun(app) {
  if (QS.finished) return renderExamResult(app);
  if (QS.summary) return renderQuizSummary(app);
  const it = QS.items[QS.i], q = it.q, t = TBY[q.tid], n = QS.items.length;
  const bm = !!S.bm[q.k];
  let body = "";
  const locked = !QS.exam && it.done;
  if (q.t === "sc" || q.t === "mc") {
    body = it.ord.map((oi, pos) => {
      let cls = "";
      const sel = q.t === "sc" ? it.ans === oi : it.ans.includes(oi);
      if (locked) { const right = q.t === "sc" ? oi === q.a : q.a.includes(oi); if (right) cls = "right"; else if (sel) cls = "wrong"; }
      else if (sel) cls = "sel";
      return `<button class="opt ${cls}" ${locked ? "disabled" : ""} onclick="pickOpt(${oi})"><span class="k">${q.t === "mc" ? (sel ? "✓" : "") : "ABCDEFG"[pos]}</span><span>${esc(q.o[oi])}</span></button>`;
    }).join("");
    if (q.t === "mc") body = `<div class="small dim">Mehrere Antworten möglich.</div>` + body;
  } else if (q.t === "num") {
    body = `<div class="row" style="flex-wrap:nowrap"><input id="numin" inputmode="decimal" placeholder="Ergebnis" value="${esc(it.ans || "")}" ${locked ? "disabled" : ""} oninput="QS.items[QS.i].ans=this.value" onkeydown="if(event.key==='Enter')submitQ()" style="max-width:260px;font-family:var(--mono);font-size:17px">${q.unit ? `<span class="muted">${esc(q.unit)}</span>` : ""}</div><div class="small dim" style="margin-top:6px">Komma oder Punkt als Dezimaltrennzeichen. Nebenrechnung auf Papier – wie in der Prüfung.</div>`;
  } else {
    body = `<textarea id="opin" placeholder="Formuliere deine Antwort wie in der Prüfung …" ${locked && it.pts != null ? "disabled" : ""} oninput="QS.items[QS.i].ans=this.value">${esc(it.ans || "")}</textarea>`;
  }
  let fb = "";
  if (locked) {
    if (q.t === "open") {
      fb = `<div class="fb inf"><h4>Musterlösung (${q.p} Punkte)</h4><div class="sol">${esc(q.a)}</div>${q.e ? `<div class="small muted" style="margin-top:6px">${esc(q.e)}</div>` : ""}
      <div style="margin-top:10px"><b class="small">Wie viele Punkte hättest du bekommen?</b><div class="pts">${Array.from({ length: q.p + 1 }, (_, p) => `<button class="btn sm ${it.pts === p ? "pri" : ""}" onclick="gradeOpen(${p})">${p}</button>`).join("")}</div><div class="row" style="margin-top:8px">${aiButton("quiz", QS.i, "🤖 Von KI bewerten lassen")}</div></div>${aiPanel("quiz", QS.i)}</div>`;
    } else {
      const ok = it.ok;
      let right = "";
      if (q.t === "num") right = `Richtig: <b class="mono">${fmt(q.a, 4)}${q.unit ? " " + esc(q.unit) : ""}</b>`;
      fb = `<div class="fb ${ok ? "ok" : "no"}"><h4>${ok ? "✓ Richtig!" : "✗ Leider falsch."}</h4>${right ? `<div>${right}</div>` : ""}${q.e ? `<div class="muted" style="margin-top:4px">${esc(q.e)}</div>` : ""}</div>`;
    }
  }
  const answeredCount = QS.items.filter(x => QS.exam ? x.ans != null && x.ans !== "" && !(Array.isArray(x.ans) && !x.ans.length) : x.done).length;
  let actions;
  if (QS.exam) {
    actions = `<button class="btn" ${QS.i ? "" : "disabled"} onclick="QS.i--;render()">← Zurück</button>${QS.i < n - 1 ? `<button class="btn pri" onclick="QS.i++;render()">Weiter →</button>` : ""}<button class="btn ${QS.i === n - 1 ? "pri" : ""}" onclick="confirmFinish()">Abgeben</button>`;
  } else if (!it.done) {
    actions = q.t === "open" ? (HAS_AI ? `<button class="btn pri" onclick="runAi('quiz',QS.i)">🤖 KI bewerten</button><button class="btn" onclick="submitQ()">Musterlösung zeigen & selbst bewerten</button>` : `<button class="btn pri" onclick="submitQ()">Musterlösung zeigen & selbst bewerten</button>`) : `<button class="btn pri" onclick="submitQ()">Prüfen</button>`;
    actions += `<button class="btn sm" onclick="skipQ()">Überspringen</button>`;
  } else {
    actions = (q.t === "open" && it.pts == null) ? `<span class="small muted">${it.aiLoading ? "KI bewertet …" : "Bitte Punkte wählen."}</span>` : `<button class="btn pri" id="nextbtn" onclick="nextQ()">${QS.i < n - 1 ? "Nächste Frage →" : "Auswertung"}</button>`;
  }
  app.innerHTML = `<div class="qbox">
    <div class="qhead">
      <button class="btn sm" onclick="${QS.exam ? "confirmAbort()" : "QS=null;render()"}">✕ ${QS.exam ? "Abbrechen" : "Beenden"}</button>
      <b class="small">${esc(QS.title)}</b>
      ${QS.exam ? `<span class="timer" id="timer">⏱ --:--</span>` : `<span class="pill">${QS.i + 1} / ${n}</span>`}
    </div>
    <div class="bar"><i style="width:${100 * answeredCount / n}%"></i></div>
    ${QS.exam ? `<div class="qnav">${QS.items.map((x, i) => `<button class="${(x.ans != null && x.ans !== "" && !(Array.isArray(x.ans) && !x.ans.length)) ? "done" : ""} ${i === QS.i ? "cur" : ""}" onclick="QS.i=${i};render()">${i + 1}</button>`).join("")}</div>` : ""}
    <div class="card" style="margin-top:14px">
      <div class="row" style="justify-content:space-between">
        <span class="pill">${t.icon} ${esc(t.title)}</span>
        <div class="row" style="gap:6px"><span class="pill vi">${typeLabel(q)}${QS.exam && q.t !== "open" ? " · " + TYPE_PTS[q.t] + "P" : ""}</span><button class="btn sm" title="Lesezeichen" onclick="toggleBm('${q.k}')">${bm ? "🔖" : "📑"}</button></div>
      </div>
      <div class="qtext">${esc(q.q)}</div>
      ${body}
      ${fb}
      <div class="row" style="margin-top:16px">${actions}</div>
    </div></div>`;
  if (QS.exam) { tick(); if (!timerH) timerH = setInterval(tick, 1000); }
  const ni = $("#numin"); if (ni && !locked) ni.focus();
}
function toggleBm(k) { if (S.bm[k]) delete S.bm[k]; else S.bm[k] = 1; save(); render(); }
function pickOpt(oi) {
  const it = QS.items[QS.i];
  if (!QS.exam && it.done) return;
  if (it.q.t === "sc") { it.ans = oi; if (!QS.exam) submitQ(); else render(); }
  else { const p = it.ans.indexOf(oi); p >= 0 ? it.ans.splice(p, 1) : it.ans.push(oi); render(); }
}
function submitQ() {
  const it = QS.items[QS.i], q = it.q;
  if (q.t === "open") { const el = $("#opin"); if (el) it.ans = el.value; it.done = true; return render(); }
  if (q.t === "num") { const el = $("#numin"); if (el) it.ans = el.value; if (!String(it.ans || "").trim()) return toast("Bitte ein Ergebnis eingeben"); }
  if (q.t === "mc" && !it.ans.length) return toast("Bitte mindestens eine Antwort wählen");
  if (q.t === "sc" && it.ans == null) return toast("Bitte eine Antwort wählen");
  it.ok = checkItem(it); it.done = true; recordQ(q, it.ok); render();
}
function skipQ() { const it = QS.items.splice(QS.i, 1)[0]; QS.items.push(it); render(); }
function gradeOpen(p) { const it = QS.items[QS.i]; const first = it.pts == null; it.pts = p; it.ok = p >= it.q.p / 2; if (first) recordQ(it.q, it.ok); else { S.q[it.q.k].l = it.ok ? 1 : 0; save(); } render(); }
function nextQ() {
  if (QS.i < QS.items.length - 1) { QS.i++; render(); return; }
  QS.summary = true; render();
}
function renderQuizSummary(app) {
  const done = QS.items.filter(x => x.done), ok = done.filter(x => x.ok).length;
  const pct = done.length ? Math.round(100 * ok / done.length) : 0;
  app.innerHTML = `<div class="qbox card" style="text-align:center;padding:30px"><div style="font-size:44px">${pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "📚"}</div><h1>${ok} von ${done.length} richtig (${pct}%)</h1>
  <p class="sub">${pct >= 80 ? "Stark! Das sitzt." : pct >= 50 ? "Solide – die falschen Fragen landen im Fehlertraining." : "Lies die Wissensseiten der Themen noch einmal und wiederhole dann."}</p>
  <div class="card" style="text-align:left;margin:16px 0">${QS.items.map((x, i) => `<div class="hit row" style="justify-content:space-between;flex-wrap:nowrap"><span class="small">${i + 1}. ${esc(x.q.q.slice(0, 110))}${x.q.q.length > 110 ? "…" : ""}</span><span class="pill ${x.ok ? "gr" : "rd"}">${x.ok ? "✓" : "✗"}</span></div>`).join("")}</div>
  <div class="row" style="justify-content:center"><button class="btn pri" onclick="startQuiz(QS.items.filter(x=>!x.ok).map(x=>x.q),'Wiederholung')">🔁 Falsche wiederholen</button><button class="btn" onclick="QS=null;render()">Zur Übersicht</button></div></div>`;
}
document.addEventListener("keydown", e => {
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
  if (view === "karten" && CS && CS.i < CS.list.length) {
    if (e.code === "Space") { e.preventDefault(); flipCard(); }
    else if (CS.flip && e.key === "1") rateCard(false);
    else if (CS.flip && e.key === "2") rateCard(true);
  } else if (view === "quiz" && QS && !QS.exam && !QS.finished) {
    const it = QS.items[QS.i];
    if (!it.done && it.q.t === "sc" && /^[1-6a-f]$/i.test(e.key)) { const pos = isNaN(+e.key) ? "abcdef".indexOf(e.key.toLowerCase()) : +e.key - 1; if (it.ord[pos] != null) pickOpt(it.ord[pos]); }
    else if (e.key === "Enter") { const b = $("#nextbtn"); if (b) b.click(); else if (!it.done && it.q.t === "mc") submitQ(); }
  }
});

/* ====================== Prüfungssimulation ====================== */
let confirmState = null;
function renderExamHome(app) {
  if (QS && QS.exam) return go("quiz");
  const hist = S.ex.slice().reverse();
  app.innerHTML = `<h1>⏱️ Prüfungssimulation</h1>
  <p class="sub">Wie die echte AP1: <b>90 Minuten</b>, ca. <b>100 Punkte</b>, gemischte Themen gewichtet nach Prüfungsrelevanz, rund die Hälfte offene Aufgaben. Kein Feedback während der Bearbeitung – Auswertung am Ende mit IHK-Notenschlüssel. Offene Aufgaben bewertest du selbst anhand der Musterlösung.</p>
  <div class="grid g2">
    <div class="card"><h3 style="margin-top:0">Vollständige Simulation</h3><p class="muted small">90 Minuten · ~100 Punkte · Faustregel 1 Punkt ≈ 1 Minute</p><button class="btn pri" onclick="startExam(100)">▶ Simulation starten</button></div>
    <div class="card"><h3 style="margin-top:0">Kurzprüfung</h3><p class="muted small">Halbe Länge – ~50 Punkte, Timer läuft trotzdem 90 Min. (zum Üben des Formats)</p><button class="btn" onclick="startExam(50)">▶ Kurzprüfung</button></div>
  </div>
  <h2>IHK-Notenschlüssel</h2>
  <div class="card"><table class="info-tbl"><tr><th>Punkte</th><th>Note</th></tr><tr><td>100–92</td><td>1 sehr gut</td></tr><tr><td>91–81</td><td>2 gut</td></tr><tr><td>80–67</td><td>3 befriedigend</td></tr><tr><td>66–50</td><td>4 ausreichend</td></tr><tr><td>49–30</td><td>5 mangelhaft</td></tr><tr><td>29–0</td><td>6 ungenügend</td></tr></table>
  <p class="small muted">Ziel vor der echten Prüfung: dreimal in Folge ≥ 81 % (Note 2) in der Simulation.</p></div>
  <h2>Verlauf</h2>
  <div class="card">${hist.length ? hist.map(h => `<div class="hit row" style="justify-content:space-between"><span>${new Date(h.d).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" })} · ${h.min} Min.</span><span class="pill ${h.pct >= 81 ? "gr" : h.pct >= 50 ? "am" : "rd"}">${h.got}/${h.max} P · ${h.pct}% · Note ${ihkNote(h.pct)[0]}</span></div>`).join("") : `<div class="empty">Noch keine Simulation absolviert.</div>`}</div>`;
}
function startExam(target) {
  const pts = q => q.t === "open" ? q.p : TYPE_PTS[q.t];
  const weighted = [];
  TOPICS.forEach(t => t.qs.forEach(q => { for (let i = 0; i < t.weight; i++) weighted.push(q); }));
  const pool = shuffle(weighted), used = new Set(), sel = [];
  let openPts = 0, total = 0;
  for (const q of pool) { if (q.t === "open" && !used.has(q.k) && openPts + q.p <= target * 0.5) { sel.push(q); used.add(q.k); openPts += q.p; total += q.p; } if (openPts >= target * 0.45) break; }
  for (const q of pool) { if (q.t !== "open" && !used.has(q.k) && total + pts(q) <= target) { sel.push(q); used.add(q.k); total += pts(q); } if (total >= target - 1) break; }
  const ordered = TOPICS.flatMap(t => shuffle(sel.filter(q => q.tid === t.id)));
  startQuiz(ordered, target >= 100 ? "Prüfungssimulation AP1" : "Kurzprüfung", true);
  QS.started = Date.now(); QS.max = total;
}
function confirmFinish() {
  const open = QS.items.filter(x => x.ans == null || x.ans === "" || (Array.isArray(x.ans) && !x.ans.length)).length;
  modal(`<h3>Prüfung abgeben?</h3><p class="muted">${open ? `Noch ${open} Aufgabe(n) ohne Antwort.` : "Alle Aufgaben bearbeitet."}</p>`, [["Weiter bearbeiten", "closeModal()"], ["Abgeben", "closeModal();finishExam()", "pri"]]);
}
function confirmAbort() { modal(`<h3>Simulation abbrechen?</h3><p class="muted">Der Fortschritt dieser Simulation geht verloren.</p>`, [["Weiter", "closeModal()"], ["Abbrechen", "closeModal();stopTimer();QS=null;go('pruefung')", "bad"]]); }
function modal(html, btns) {
  let m = $("#modal"); if (!m) { m = document.createElement("div"); m.id = "modal"; document.body.appendChild(m); }
  m.innerHTML = `<div style="position:fixed;inset:0;background:#000a;z-index:60;display:grid;place-items:center;padding:16px" onclick="if(event.target===this)closeModal()"><div class="card" style="max-width:420px;width:100%">${html}<div class="row" style="justify-content:flex-end;margin-top:12px">${btns.map(b => `<button class="btn ${b[2] || ""}" onclick="${b[1]}">${b[0]}</button>`).join("")}</div></div></div>`;
}
function closeModal() { const m = $("#modal"); if (m) m.innerHTML = ""; }
function finishExam() {
  stopTimer();
  QS.items.forEach(it => { if (it.q.t !== "open") { const has = !(it.ans == null || it.ans === "" || (Array.isArray(it.ans) && !it.ans.length)); it.ok = has ? checkItem(it) : false; it.done = true; recordQ(it.q, it.ok); } });
  QS.finished = true; QS.min = Math.round((Date.now() - QS.started) / 60000); QS.saved = false;
  render();
}
function renderExamResult(app) {
  const items = QS.items;
  const closed = items.filter(x => x.q.t !== "open"), opens = items.filter(x => x.q.t === "open");
  const gotClosed = closed.reduce((s, x) => s + (x.ok ? TYPE_PTS[x.q.t] : 0), 0);
  const gotOpen = opens.reduce((s, x) => s + (x.pts || 0), 0);
  const pending = opens.filter(x => x.pts == null).length;
  const max = QS.max, got = gotClosed + gotOpen, pct = Math.round(100 * got / max);
  if (!pending && !QS.saved) { S.ex.push({ d: Date.now(), got, max, pct, min: QS.min }); QS.saved = true; opens.forEach(x => recordQ(x.q, x.pts >= x.q.p / 2)); save(); }
  const byT = {};
  items.forEach(x => { const p = x.q.t === "open" ? x.q.p : TYPE_PTS[x.q.t]; const g = x.q.t === "open" ? (x.pts || 0) : (x.ok ? p : 0); const b = byT[x.q.tid] || (byT[x.q.tid] = { g: 0, m: 0 }); b.g += g; b.m += p; });
  const [nn, nt] = ihkNote(pct);
  app.innerHTML = `<div class="qbox">
    <h1>Auswertung</h1>
    ${pending ? `<div class="fb inf"><h4>Noch ${pending} offene Aufgabe(n) bewerten</h4>Vergleiche deine Antwort mit der Musterlösung und vergib ehrlich Punkte – erst dann wird das Ergebnis gespeichert.</div>` : ""}
    <div class="card" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">
      ${ring(pct, pct >= 81 ? "var(--gr)" : pct >= 50 ? "var(--am)" : "var(--rd)")}
      <div><div class="stat"><div class="v">${got} / ${max} Punkte</div><div class="l">${pending ? "vorläufig" : `Note ${nn} – ${nt}`} · Bearbeitungszeit ${QS.min} Min.</div></div>
      <div class="row" style="margin-top:10px"><button class="btn" onclick="QS=null;go('pruefung')">Zur Übersicht</button><button class="btn" onclick="startQuiz(QS.items.filter(x=>!x.ok&&x.q.t!=='open').map(x=>x.q),'Fehler aus Simulation')">🔁 Fehler üben</button></div></div>
    </div>
    <h2>Nach Thema</h2>
    <div class="card">${Object.entries(byT).map(([tid, b]) => `<div class="hit"><div class="row" style="justify-content:space-between"><span>${TBY[tid].icon} ${esc(TBY[tid].title)}</span><span class="small mono">${b.g}/${b.m}</span></div><div class="bar" style="margin-top:6px"><i style="width:${100 * b.g / b.m}%"></i></div></div>`).join("")}</div>
    <h2>Offene Aufgaben bewerten</h2>
    ${HAS_AI ? `<div class="row" style="margin-bottom:10px"><button class="btn pri" onclick="aiGradeAllExam()">🤖 Alle offenen Antworten von KI bewerten</button><span class="small muted">oder einzeln selbst anhand der Musterlösung</span></div>` : ""}
    ${opens.map(x => { const ix = items.indexOf(x); return `<div class="card" style="margin-bottom:12px"><div class="small dim">${TBY[x.q.tid].icon} ${esc(TBY[x.q.tid].title)} · ${x.q.p} Punkte</div><div class="qtext" style="font-size:15.5px">${esc(x.q.q)}</div>
      <div class="small muted">Deine Antwort:</div><div class="sol" style="background:var(--bg2);border:1px solid var(--line);border-radius:10px;padding:10px;margin:4px 0 10px">${x.ans ? esc(x.ans) : "<span class='dim'>(keine Antwort)</span>"}</div>
      <div class="fb inf"><h4>Musterlösung</h4><div class="sol">${esc(x.q.a)}</div></div>
      <div class="pts">${Array.from({ length: x.q.p + 1 }, (_, p) => `<button class="btn sm ${x.pts === p ? "pri" : ""}" onclick="QS.items[${ix}].pts=${p};QS.items[${ix}].ok=${p}>=${x.q.p / 2};render()">${p}</button>`).join("")}</div><div class="row" style="margin-top:8px">${aiButton("exam", ix)}</div>${aiPanel("exam", ix)}</div>`; }).join("")}
    <h2>Geschlossene Aufgaben</h2>
    <div class="card">${closed.map(x => `<div class="hit"><div class="row" style="justify-content:space-between;flex-wrap:nowrap"><span class="small">${esc(x.q.q)}</span><span class="pill ${x.ok ? "gr" : "rd"}">${x.ok ? "+" + TYPE_PTS[x.q.t] : "0"}</span></div>${!x.ok ? `<div class="small muted" style="margin-top:4px">Richtig: <b>${esc(correctText(x.q))}</b>${x.q.e ? " – " + esc(x.q.e) : ""}</div>` : ""}</div>`).join("")}</div>
  </div>`;
}
function correctText(q) {
  if (q.t === "sc") return q.o[q.a];
  if (q.t === "mc") return q.a.map(i => q.o[i]).join(" · ");
  if (q.t === "num") return fmt(q.a, 4) + (q.unit ? " " + q.unit : "");
  return "";
}

/* ====================== Merkzettel & Suche ====================== */
function renderMerk(app) {
  const tmp = document.createElement("div");
  const parts = TOPICS.map(t => { tmp.innerHTML = t.lesson; const boxes = [...tmp.querySelectorAll(".merke,.tip")].map(b => `<div class="${b.className}">${b.innerHTML}</div>`); return boxes.length ? `<h2>${t.icon} ${esc(t.title)}</h2><div class="lesson">${boxes.join("")}</div>` : ""; });
  app.innerHTML = `<h1>💡 Merkzettel</h1><p class="sub">Alle Merksätze, Formeln und Prüfungstipps aus der Wissensdatenbank auf einer Seite – ideal für die letzte Woche vor der Prüfung.</p>${parts.join("")}`;
}
let searchQ = "";
function renderSearch(app) {
  app.innerHTML = `<h1>🔎 Suche</h1><p class="sub">Durchsucht Wissensseiten, Karteikarten und Fragen.</p>
  <div class="search"><input id="sq" placeholder="z. B. DHCP, Subnetz, Art. 17, Scrum …" value="${esc(searchQ)}" oninput="searchQ=this.value;doSearch()"></div><div id="sres" style="margin-top:14px"></div>`;
  const i = $("#sq"); i.focus(); i.setSelectionRange(i.value.length, i.value.length); doSearch();
}
const PLAIN = {};
function plainLesson(t) { if (!PLAIN[t.id]) { const d = document.createElement("div"); d.innerHTML = t.lesson; PLAIN[t.id] = d.textContent.replace(/\s+/g, " "); } return PLAIN[t.id]; }
function hl(text, q) { const i = text.toLowerCase().indexOf(q.toLowerCase()); if (i < 0) return esc(text); return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length)); }
function doSearch() {
  const q = searchQ.trim(), out = $("#sres"); if (!out) return;
  if (q.length < 2) { out.innerHTML = `<div class="empty">Mindestens 2 Zeichen eingeben.</div>`; return; }
  const ql = q.toLowerCase(), res = [];
  TOPICS.forEach(t => {
    const p = plainLesson(t), i = p.toLowerCase().indexOf(ql);
    if (i >= 0) res.push(`<div class="hit" style="cursor:pointer" onclick="topicTab='wissen';go('t-${t.id}')"><span class="pill cy">📖 Wissen</span> <b>${esc(t.title)}</b><div class="small muted" style="margin-top:4px">…${hl(p.slice(Math.max(0, i - 80), i + 140), q)}…</div></div>`);
    t.cards.forEach(c => { if ((c.f + " " + c.b).toLowerCase().includes(ql)) res.push(`<div class="hit"><span class="pill gr">🃏 Karte</span> <span class="small dim">${esc(t.title)}</span><div style="margin-top:4px"><b>${hl(c.f, q)}</b></div><div class="small muted">${hl(c.b, q)}</div></div>`); });
    t.qs.forEach(x => { if ((x.q + " " + (x.e || "") + " " + (typeof x.a === "string" ? x.a : "")).toLowerCase().includes(ql)) res.push(`<div class="hit" style="cursor:pointer" onclick="startQuiz([QBY['${x.k}']],'Einzelfrage')"><span class="pill vi">❓ Frage</span> <span class="small dim">${esc(t.title)}</span><div class="small" style="margin-top:4px">${hl(x.q, q)}</div></div>`); });
  });
  out.innerHTML = res.length ? `<div class="small dim" style="margin-bottom:8px">${res.length} Treffer</div><div class="card" style="padding:4px 0">${res.slice(0, 120).join("")}</div>` : `<div class="empty">Keine Treffer.</div>`;
}

/* ====================== Lernplan ====================== */
function renderPlan(app) {
  const now = new Date(), days = Math.ceil((EXAM - now) / DAY);
  const phases = [
    { from: "2026-11-09", to: "2026-12-20", t: "Phase 1 · Fundament", d: "Alle Themen einmal komplett: Wissen lesen → Karten → Quiz. Etwa 3 Themen pro Woche, Reihenfolge nach Relevanz unten. Täglich 15 Min. fällige Karten und Abkürzungen." },
    { from: "2026-12-21", to: "2027-01-06", t: "Phase 2 · Rechnen automatisieren", d: "Jeden Tag 20–30 Min. Rechentrainer: Subnetting, IPv6, Netzplan, Nutzwert, Amortisation, Kalkulation, Übertragungszeit, Schreibtischtest, Pseudocode. Ziel: jede Aufgabenart fehlerfrei in < 5 Min." },
    { from: "2027-01-07", to: "2027-01-26", t: "Phase 3 · Fallstudien, Anlagen & offene Aufgaben", d: "Alle Fallstudien und Anlagen-Aufgaben durcharbeiten, offene Antworten von der KI bewerten lassen, Fehlertraining. 1–2 Prüfungssimulationen. Ziel: vor Schulbeginn keine Themenlücke mehr." },
    { from: "2027-01-27", to: "2027-02-23", t: "Phase 4 · Schule: alte Prüfungen", d: "In der Schule echte AP1-Prüfungen rechnen. Zu Hause die Fehler daraus gezielt in der App nacharbeiten (Suche, Thema, Trainer). Pro Woche 1 Simulation, Merkzettel täglich. Ziel: 3× in Folge ≥ 81 %. Am Vortag nur Merkzettel, früh schlafen." }
  ];
  const order = TOPICS.slice().sort((a, b) => b.weight - a.weight || topicStats(a).score - topicStats(b).score);
  const todayS = today();
  app.innerHTML = `<h1>🗓️ Lernplan bis zur AP1</h1><p class="sub">Noch <b>${days} Tage</b> bis Mittwoch, 24.02.2027, 8:00 Uhr. Anmeldeschluss für die Frühjahrsprüfung ist bei vielen IHKs Mitte November bis 1. Dezember – prüfe deine Anmeldung bzw. die deines Bildungsträgers.</p>
  <div class="card">${phases.map(p => `<div class="phase ${todayS >= p.from && todayS <= p.to ? "now" : ""}"><h4>${p.t} <span class="small dim">${new Date(p.from).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" })}–${new Date(p.to).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" })}</span>${todayS >= p.from && todayS <= p.to ? ' <span class="pill am">jetzt</span>' : ""}</h4><div class="muted small">${p.d}</div></div>`).join("")}</div>
  <h2>Empfohlene Reihenfolge (Relevanz × Schwäche)</h2>
  <div class="card">${order.map((t, i) => { const s = topicStats(t); return `<div class="hit row" style="justify-content:space-between;cursor:pointer" onclick="topicTab='wissen';go('t-${t.id}')"><span>${i + 1}. ${t.icon} ${esc(t.title)} <span style="color:var(--am)" class="small">${"◆".repeat(t.weight)}</span></span><span class="pill ${s.score >= 75 ? "gr" : s.score >= 40 ? "am" : ""}">${s.score}%</span></div>`; }).join("")}</div>
  <h2>Tagesroutine (45–60 Min.)</h2>
  <div class="card"><ol style="margin:0;padding-left:20px"><li>10–15 Min. fällige Karteikarten</li><li>20 Min. ein Thema: Wissen lesen oder Quiz</li><li>10–15 Min. eine Aufgabenart im Rechentrainer</li><li>1 offene Aufgabe schriftlich beantworten</li></ol></div>
  <h2>Offizielle Quellen</h2>
  <div class="card small">
    <div class="hit"><a href="https://www.ihk.de/berlin/pruefungen-lehrgaenge/ausbildungspruefungen/pruefung-fachinformatiker-in-6132404" target="_blank" rel="noopener">IHK – Prüfungstermine Fachinformatiker (AP1 24.02.2027)</a></div>
    <div class="hit"><a href="https://www.ihk.de/hannover/hauptnavigation/ausbildung-und-weiterbildung/ausbildung/ausbildung-a-z/neuordnungen/pruefungskataloge-it-berufe-6438900" target="_blank" rel="noopener">IHK Hannover – Prüfungskataloge IT-Berufe (2. Auflage ab Frühjahr 2025)</a></div>
    <div class="hit"><a href="https://www.ihk-aka.de/" target="_blank" rel="noopener">AkA – Aufgabenstelle für kaufmännische Abschluss- und Zwischenprüfungen</a></div>
    <div class="hit"><a href="https://www.gesetze-im-internet.de/fiausbv/" target="_blank" rel="noopener">Fachinformatiker-Ausbildungsverordnung (FIAusbV) mit Ausbildungsrahmenplan</a></div>
    <div class="hit"><a href="https://learn.microsoft.com/de-de/entra/identity/devices/plan-device-deployment" target="_blank" rel="noopener">Microsoft Learn – Geräte in Microsoft Entra ID (registered / joined / hybrid)</a></div>
    <div class="hit"><a href="https://learn.microsoft.com/de-de/troubleshoot/windows-server/active-directory/active-directory-domain-join-troubleshooting-guidance" target="_blank" rel="noopener">Microsoft Learn – Domänenbeitritt: DNS, Ports, Berechtigungen</a></div>
    <div class="hit"><a href="https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html" target="_blank" rel="noopener">BSI – IT-Grundschutz (Standards 200-1 bis 200-4, Kompendium)</a></div>
    <div class="hit"><a href="https://dsgvo-gesetz.de/" target="_blank" rel="noopener">DSGVO – Gesetzestext (Art. 5, 6, 15–22, 28, 32, 33)</a></div>
    <div class="hit"><a href="https://www.bundesfachstelle-barrierefreiheit.de/" target="_blank" rel="noopener">Bundesfachstelle Barrierefreiheit – BFSG</a></div>
  </div>
  <h2>Daten</h2>
  <div class="card row">${STANDALONE ? `<button class="btn sm pri" onclick="saveBackupFile()">💾 Backup als Datei speichern</button><label class="btn sm" style="cursor:pointer">📂 Backup-Datei laden<input type="file" accept=".json,application/json" style="display:none" onchange="loadBackupFile(this.files[0])"></label>` : ""}<button class="btn sm" onclick="exportData()">📋 Fortschritt kopieren (Backup)</button><button class="btn sm" onclick="importData()">📥 Backup einfügen</button><button class="btn sm bad" onclick="modal('<h3>Fortschritt zurücksetzen?</h3><p class=muted>Alle Karten, Antworten und Simulationen werden gelöscht.</p>',[['Abbrechen','closeModal()'],['Zurücksetzen','closeModal();S=blank();save();render()','bad']])">Zurücksetzen</button></div>`;
}
const STANDALONE = !(window.claude && typeof window.claude.use === "function");
const HAS_AI = !STANDALONE;
function saveBackupFile() {
  const blob = new Blob([JSON.stringify(S)], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "ap1-lernstand-" + today() + ".json";
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  S.lastBackup = Date.now(); save(); toast("Backup gespeichert");
}
function loadBackupFile(f) {
  if (!f) return; const r = new FileReader();
  r.onload = () => { try { const d = JSON.parse(r.result); if (!d || typeof d !== "object" || !("q" in d)) throw 0; S = Object.assign(blank(), d); save(); render(); toast("Lernstand geladen"); } catch (e) { toast("Keine gültige Backup-Datei"); } };
  r.readAsText(f);
}
function exportData() { const t = JSON.stringify(S); navigator.clipboard.writeText(t).then(() => toast("In Zwischenablage kopiert"), () => modal(`<h3>Backup</h3><textarea style="min-height:160px">${esc(t)}</textarea>`, [["Schließen", "closeModal()"]])); }
function importData() { modal(`<h3>Backup einfügen</h3><textarea id="imp" style="min-height:160px" placeholder="JSON hier einfügen"></textarea>`, [["Abbrechen", "closeModal()"], ["Importieren", "doImport()", "pri"]]); }
function doImport() { try { S = Object.assign(blank(), JSON.parse($("#imp").value)); save(); closeModal(); render(); toast("Importiert"); } catch (e) { toast("Ungültige Daten"); } }

/* ====================== Rechentrainer ====================== */
/* Hilfsfunktionen IP */
const ip2n = ip => ip.split(".").reduce((a, o) => a * 256 + +o, 0);
const n2ip = n => [n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255].join(".");
const maskN = p => p === 0 ? 0 : (0xFFFFFFFF << (32 - p)) >>> 0;
function randPrivIp() { const k = rnd(0, 2); if (k === 0) return [10, rnd(0, 255), rnd(0, 255), rnd(1, 254)].join("."); if (k === 1) return [172, rnd(16, 31), rnd(0, 255), rnd(1, 254)].join("."); return [192, 168, rnd(0, 255), rnd(1, 254)].join("."); }
function netInfo(ip, p) {
  const n = ip2n(ip), m = maskN(p), net = (n & m) >>> 0, bc = (net | (~m >>> 0)) >>> 0;
  const hosts = p >= 31 ? 0 : Math.pow(2, 32 - p) - 2;
  return { net: n2ip(net), bc: n2ip(bc), first: n2ip(net + 1), last: n2ip(bc - 1), mask: n2ip(m), hosts };
}
function expand6(a) {
  a = a.trim().toLowerCase(); if (!/^[0-9a-f:]+$/.test(a)) return null;
  const dc = a.split("::"); if (dc.length > 2) return null;
  const L = dc[0] ? dc[0].split(":") : [], R = dc.length === 2 && dc[1] ? dc[1].split(":") : [];
  if (dc.length === 1 && L.length !== 8) return null;
  const fill = 8 - L.length - R.length; if (dc.length === 2 && fill < 1) return null;
  const all = dc.length === 2 ? [...L, ...Array(fill).fill("0"), ...R] : L;
  if (all.some(x => !x || x.length > 4)) return null;
  return all.map(x => x.padStart(4, "0")).join(":");
}
function compress6(full) {
  const b = full.split(":").map(x => x.replace(/^0+(?=.)/, ""));
  let best = -1, bl = 0;
  for (let i = 0; i < 8;) { if (b[i] === "0") { let j = i; while (j < 8 && b[j] === "0") j++; if (j - i > bl) { bl = j - i; best = i; } i = j; } else i++; }
  if (bl < 2) return b.join(":");
  const left = b.slice(0, best).join(":"), right = b.slice(best + bl).join(":");
  return left + "::" + right;
}
const PRED_LETTERS = "ABCDEFGHIJ";

/* Feldtypen: num, str (exakt, ohne Leerzeichen, case-insens.), ip6, list (Buchstabenfolge) */
function fieldOk(f, v) {
  v = String(v || "").trim();
  if (f.type === "num") return numOk(v, f.ans, f.tol);
  if (f.type === "ip6") { const e = expand6(v); return !!e && e === expand6(f.ans) && v.toLowerCase().replace(/\s/g, "") === f.ans; }
  if (f.type === "ip6full") { const e = expand6(v); return !!e && e === f.ans; }
  if (f.type === "list") return v.toUpperCase().replace(/[^A-Z]/g, "") === String(f.ans).toUpperCase().replace(/[^A-Z]/g, "");
  if (f.type === "any") return f.ans.some(a => v.toLowerCase().replace(/\s/g, "") === a.toLowerCase().replace(/\s/g, ""));
  return v.toLowerCase().replace(/\s/g, "") === String(f.ans).toLowerCase().replace(/\s/g, "");
}

const TRAINERS = [
{ id: "subnet", cat: "Netzwerk", icon: "🔢", t: "Subnetting", d: "Netzadresse, Broadcast, Hostbereich, Maske", gen() {
  const ip = randPrivIp(), p = pick([22, 23, 24, 25, 26, 26, 27, 27, 28, 28, 29, 30]), x = netInfo(ip, p);
  const oct = p >= 24 ? 4 : p >= 16 ? 3 : 2, mOct = x.mask.split(".")[oct - 1], block = 256 - +mOct;
  return { q: `Gegeben ist die Adresse <span class="mono">${ip}/${p}</span>. Bestimme:`,
    fields: [{ l: "Subnetzmaske", ans: x.mask }, { l: "Netzadresse", ans: x.net }, { l: "Broadcastadresse", ans: x.bc }, { l: "Erster Host", ans: x.first }, { l: "Letzter Host", ans: x.last }, { l: "Anzahl nutzbarer Hosts", ans: x.hosts, type: "num" }],
    sol: `Hostbits = 32 − ${p} = ${32 - p} → 2^${32 - p} − 2 = <b>${x.hosts}</b> Hosts.\nMaske: ${x.mask}. Interessantes Oktett: ${oct}. → Blockgröße 256 − ${mOct} = ${block}.\nNetz: ${x.net}, Broadcast: ${x.bc}, Hosts ${x.first} – ${x.last}.` };
}},
{ id: "split", cat: "Netzwerk", icon: "✂️", t: "Netz aufteilen", d: "Subnetze nach Anzahl oder Hostbedarf bilden", gen() {
  const base = pick(["192.168." + rnd(0, 255) + ".0", "10." + rnd(0, 255) + "." + rnd(0, 255) + ".0", "172." + rnd(16, 31) + "." + rnd(0, 255) + ".0"]);
  if (Math.random() < .5) {
    const k = pick([1, 2, 3, 4]), nsub = Math.pow(2, k), np = 24 + k, hosts = Math.pow(2, 32 - np) - 2, size = Math.pow(2, 32 - np), parts = base.split(".");
    const second = parts.slice(0, 3).join(".") + "." + size, last = parts.slice(0, 3).join(".") + "." + (256 - size);
    return { q: `Das Netz <span class="mono">${base}/24</span> soll in <b>${nsub}</b> gleich große Subnetze aufgeteilt werden.`,
      fields: [{ l: "Neues Präfix (Zahl)", ans: np, type: "num" }, { l: "Neue Subnetzmaske", ans: n2ip(maskN(np)) }, { l: "Nutzbare Hosts je Subnetz", ans: hosts, type: "num" }, { l: "Netzadresse des 2. Subnetzes", ans: second }, { l: "Netzadresse des letzten Subnetzes", ans: last }],
      sol: `${nsub} = 2^${k} → ${k} Bits leihen → /${24 + k}.\nBlockgröße 256 / ${nsub} = ${size} → Subnetze: .0, .${size}, … , .${256 - size}.\nHosts je Subnetz: 2^${8 - k} − 2 = ${hosts}.` };
  }
  const need = rnd(5, 500); let hb = 2; while (Math.pow(2, hb) - 2 < need) hb++;
  return { q: `In einer Abteilung werden <b>${need}</b> Hosts benötigt. Wie groß muss das Subnetz mindestens sein?`,
    fields: [{ l: "Präfix (Zahl)", ans: 32 - hb, type: "num" }, { l: "Subnetzmaske", ans: n2ip(maskN(32 - hb)) }, { l: "Nutzbare Hosts", ans: Math.pow(2, hb) - 2, type: "num" }],
    sol: `Kleinstes n mit 2^n − 2 ≥ ${need}: n = ${hb} (2^${hb} − 2 = ${Math.pow(2, hb) - 2}).\nPräfix = 32 − ${hb} = /${32 - hb}, Maske ${n2ip(maskN(32 - hb))}.` };
}},
{ id: "cidr", cat: "Netzwerk", icon: "🎭", t: "CIDR ↔ Maske", d: "Präfix, Maske und Hostanzahl umrechnen", gen() {
  const p = rnd(16, 30), m = n2ip(maskN(p)), h = Math.pow(2, 32 - p) - 2;
  if (Math.random() < .5) return { q: `Wie lautet die Subnetzmaske zu <span class="mono">/${p}</span> und wie viele Hosts sind nutzbar?`, fields: [{ l: "Subnetzmaske", ans: m }, { l: "Nutzbare Hosts", ans: h, type: "num" }], sol: `/${p} = ${p} Einsen: ${m}. Hosts: 2^${32 - p} − 2 = ${h}.` };
  return { q: `Welches Präfix gehört zur Maske <span class="mono">${m}</span>?`, fields: [{ l: "Präfix (Zahl)", ans: p, type: "num" }, { l: "Nutzbare Hosts", ans: h, type: "num" }], sol: `Einsen zählen: ${m} = /${p}. Hosts: 2^${32 - p} − 2 = ${h}.` };
}},
{ id: "same", cat: "Netzwerk", icon: "🤝", t: "Gleiches Netz?", d: "Zwei Hosts – direkt oder über Router?", gen() {
  const p = pick([24, 25, 26, 27, 28]), a = randPrivIp(), parts = a.split(".");
  const b = Math.random() < .5 ? parts.slice(0, 3).join(".") + "." + rnd(1, 254) : parts.slice(0, 2).join(".") + "." + rnd(0, 255) + "." + rnd(1, 254);
  const A = netInfo(a, p), B = netInfo(b, p), same = A.net === B.net;
  return { q: `Host 1: <span class="mono">${a}/${p}</span>\nHost 2: <span class="mono">${b}/${p}</span>\nLiegen beide im selben Subnetz? (ja/nein)`,
    fields: [{ l: "Netzadresse Host 1", ans: A.net }, { l: "Netzadresse Host 2", ans: B.net }, { l: "Selbes Netz? (ja/nein)", ans: same ? "ja" : "nein" }],
    sol: `Host 1 → ${A.net}, Host 2 → ${B.net}.\n${same ? "Gleich → direkte Kommunikation über den Switch." : "Verschieden → Kommunikation nur über einen Router (Standardgateway)."}` };
}},
{ id: "ipv6", cat: "Netzwerk", icon: "6️⃣", t: "IPv6 kürzen & erweitern", d: "Führende Nullen und :: korrekt anwenden", gen() {
  const blocks = []; const z0 = rnd(1, 5), zl = rnd(2, 4);
  for (let i = 0; i < 8; i++) blocks.push(i >= z0 && i < z0 + zl ? "0000" : (Math.random() < .25 ? "0000" : rnd(0, 0xffff).toString(16).padStart(4, "0").replace(/^./, c => Math.random() < .5 ? "0" : c)));
  blocks[0] = pick(["2001", "2a02", "fd12", "fe80", "2003"]);
  const full = blocks.join(":"), short = compress6(full);
  if (Math.random() < .6) return { q: `Kürze die IPv6-Adresse maximal:\n<span class="mono">${full}</span>`, fields: [{ l: "Kürzeste Schreibweise", ans: short, type: "ip6" }], sol: `1. Führende Nullen je Block entfernen.\n2. Die längste Folge von Null-Blöcken (mind. 2) einmal durch :: ersetzen.\n→ <b class="mono">${short}</b>` };
  return { q: `Schreibe die IPv6-Adresse vollständig aus (8 Blöcke à 4 Hex-Ziffern):\n<span class="mono">${short}</span>`, fields: [{ l: "Vollständige Adresse", ans: full, type: "ip6full" }], sol: `:: steht für so viele Null-Blöcke, bis es 8 Blöcke sind; jeder Block wird auf 4 Ziffern aufgefüllt.\n→ <b class="mono">${full}</b>` };
}},
{ id: "conv", cat: "Zahlen", icon: "🔁", t: "Zahlensysteme", d: "Dezimal ↔ Binär ↔ Hex", gen() {
  const n = rnd(1, 255), bin = n.toString(2).padStart(8, "0"), hex = n.toString(16).toUpperCase();
  const mode = rnd(0, 2);
  const sol = `${n} = ${bin.slice(0, 4)} ${bin.slice(4)}₂ = 0x${hex}\nStellenwerte: ${bin.split("").map((b, i) => b === "1" ? 128 >> i : null).filter(x => x).join(" + ")} = ${n}`;
  if (mode === 0) return { q: `Wandle <span class="mono">${n}</span> (dezimal) um:`, fields: [{ l: "Binär (8 Bit)", ans: bin, type: "bin" }, { l: "Hexadezimal", ans: hex, type: "hex" }], sol };
  if (mode === 1) return { q: `Wandle <span class="mono">${bin.slice(0, 4)} ${bin.slice(4)}₂</span> um:`, fields: [{ l: "Dezimal", ans: n, type: "num" }, { l: "Hexadezimal", ans: hex, type: "hex" }], sol };
  return { q: `Wandle <span class="mono">0x${hex}</span> um:`, fields: [{ l: "Dezimal", ans: n, type: "num" }, { l: "Binär (8 Bit)", ans: bin, type: "bin" }], sol };
}},
{ id: "chmod", cat: "Zahlen", icon: "🐧", t: "Linux-Rechte (chmod)", d: "Oktal ↔ rwx", gen() {
  const d = [rnd(4, 7), rnd(0, 7), rnd(0, 7)], sym = d.map(x => (x & 4 ? "r" : "-") + (x & 2 ? "w" : "-") + (x & 1 ? "x" : "-")).join("");
  if (Math.random() < .5) return { q: `Welche Rechte setzt <span class="mono">chmod ${d.join("")} datei</span>? (9 Zeichen, z. B. rwxr-x---)`, fields: [{ l: "Symbolisch", ans: sym }], sol: `r=4, w=2, x=1 je Gruppe (Besitzer, Gruppe, Andere): ${d.join(" | ")} → <b class="mono">${sym}</b>` };
  return { q: `<span class="mono">ls -l</span> zeigt <span class="mono">-${sym}</span>. Welcher chmod-Wert entspricht dem?`, fields: [{ l: "Oktal (3 Ziffern)", ans: d.join("") }], sol: `${sym.slice(0, 3)} = ${d[0]}, ${sym.slice(3, 6)} = ${d[1]}, ${sym.slice(6)} = ${d[2]} → <b>${d.join("")}</b>` };
}},
{ id: "transfer", cat: "Zahlen", icon: "📡", t: "Übertragungszeit", d: "Datenmenge ÷ Datenrate", gen() {
  const size = pick([250, 500, 700, 800, 1200, 1500, 2000, 2500, 4000, 4700, 8000]), rate = pick([16, 25, 50, 100, 200, 250, 400, 500, 1000]);
  const sec = size * 8 / rate;
  return { q: `Eine Datei mit <b>${fmt(size)} MB</b> wird über eine Leitung mit <b>${rate} Mbit/s</b> übertragen (dezimale Präfixe, ohne Overhead). Wie lange dauert das?`,
    fields: [{ l: "Zeit in Sekunden", ans: sec, type: "num", tol: 0.5 }],
    sol: `${fmt(size)} MB × 8 = ${fmt(size * 8)} Mbit\n${fmt(size * 8)} Mbit ÷ ${rate} Mbit/s = <b>${fmt(sec)} s</b> (≈ ${fmt(sec / 60)} min)` };
}},
{ id: "image", cat: "Zahlen", icon: "🖼️", t: "Bild- & Videogröße", d: "Breite × Höhe × Farbtiefe", gen() {
  const [w, h] = pick([[1920, 1080], [1280, 720], [800, 600], [1024, 768], [2560, 1440], [3840, 2160], [640, 480]]), bpp = pick([8, 16, 24, 32]);
  const bytes = w * h * bpp / 8;
  if (Math.random() < .7) return { q: `Wie groß ist ein unkomprimiertes Bild mit <b>${w} × ${h}</b> Pixeln und <b>${bpp} Bit</b> Farbtiefe?`, fields: [{ l: "Größe in Byte", ans: bytes, type: "num" }, { l: "Größe in MB (dezimal, 2 Nachkommastellen)", ans: Math.round(bytes / 1e4) / 100, type: "num", tol: 0.011 }], sol: `${w} × ${h} × ${bpp} Bit ÷ 8 = <b>${fmt(bytes, 0)} Byte</b> ≈ ${fmt(bytes / 1e6)} MB (${fmt(bytes / 1048576)} MiB)` };
  const fps = pick([24, 25, 30]), s = pick([1, 2, 5, 10]);
  return { q: `Ein unkomprimiertes Video: <b>${w} × ${h}</b>, <b>${bpp} Bit</b>, <b>${fps} fps</b>, Dauer <b>${s} s</b>. Wie groß ist es in MB (dezimal)?`, fields: [{ l: "Größe in MB", ans: bytes * fps * s / 1e6, type: "num", tol: 0.6 }], sol: `Bild: ${fmt(bytes, 0)} Byte × ${fps} fps × ${s} s = ${fmt(bytes * fps * s, 0)} Byte ≈ <b>${fmt(bytes * fps * s / 1e6)} MB</b>` };
}},
{ id: "power", cat: "Wirtschaft", icon: "⚡", t: "Stromkosten", d: "P × t × Preis", gen() {
  const n = pick([1, 1, 5, 10, 20, 25]), w = pick([45, 60, 80, 120, 150, 200, 250]), h = pick([6, 8, 10, 24]), d = pick([220, 230, 250, 365]), pr = pick([0.28, 0.30, 0.32, 0.35, 0.40]);
  const kwh = n * w / 1000 * h * d, cost = kwh * pr;
  return { q: `${n > 1 ? n + " Geräte mit je" : "Ein Gerät mit"} <b>${w} W</b> laufen <b>${h} h</b> pro Tag an <b>${d} Tagen</b>. Strompreis: <b>${fmt(pr)} €/kWh</b>.`,
    fields: [{ l: "Energie pro Jahr in kWh", ans: kwh, type: "num", tol: 0.05 }, { l: "Kosten pro Jahr in €", ans: cost, type: "num", tol: 0.05 }],
    sol: `${n} × ${w} W = ${n * w} W = ${fmt(n * w / 1000, 3)} kW\n${fmt(n * w / 1000, 3)} kW × ${h} h × ${d} = <b>${fmt(kwh)} kWh</b>\n× ${fmt(pr)} € = <b>${fmt(cost)} €</b>` };
}},
{ id: "amort", cat: "Wirtschaft", icon: "⏳", t: "Amortisation", d: "Wann rechnet sich die Investition?", gen() {
  const inv = pick([3000, 4800, 6000, 7200, 9000, 12000, 15000, 18000, 24000]), oldC = pick([300, 400, 500, 600, 800, 1000]), newC = pick([50, 100, 150, 200]);
  const save = oldC - newC, m = inv / save;
  return { q: `Neue Hardware kostet <b>${fmt(inv)} €</b>. Die laufenden Kosten sinken von <b>${oldC} €</b> auf <b>${newC} €</b> pro Monat. Nach wie vielen Monaten ist die Investition amortisiert?`,
    fields: [{ l: "Monatliche Einsparung in €", ans: save, type: "num" }, { l: "Amortisationszeit in Monaten (1 Nachkommastelle)", ans: Math.round(m * 10) / 10, type: "num", tol: 0.051 }],
    sol: `Einsparung: ${oldC} − ${newC} = ${save} €/Monat\nAmortisation: ${fmt(inv)} ÷ ${save} = <b>${fmt(m, 1)} Monate</b>${m % 1 ? ` → amortisiert im ${Math.ceil(m)}. Monat` : ""}` };
}},
{ id: "breakeven", cat: "Wirtschaft", icon: "⚖️", t: "Kostenvergleich / Break-even", d: "Fix- und variable Kosten gleichsetzen", gen() {
  const fa = pick([500, 800, 1000, 1200, 1500]), fb = pick([100, 200, 300, 400]), va = pick([0.02, 0.03, 0.04, 0.05]), vb = va + pick([0.01, 0.02, 0.03, 0.04]);
  const x = (fa - fb) / (vb - va);
  return { q: `Drucker A: <b>${fa} €</b> Anschaffung + <b>${fmt(va)} €</b>/Seite.\nDrucker B: <b>${fb} €</b> Anschaffung + <b>${fmt(vb)} €</b>/Seite.\nAb wie vielen Seiten sind beide gleich teuer?`,
    fields: [{ l: "Break-even in Seiten", ans: x, type: "num", tol: 1 }, { l: "Günstiger darüber? (A/B)", ans: "A" }],
    sol: `${fa} + ${fmt(va)}x = ${fb} + ${fmt(vb)}x\n${fa - fb} = ${fmt(vb - va)}x → x = <b>${fmt(x, 0)} Seiten</b>\nDarüber ist A günstiger (niedrigere variable Kosten).` };
}},
{ id: "price", cat: "Wirtschaft", icon: "🧾", t: "Bezugspreis", d: "Rabatt, Skonto, Bezugskosten, USt", gen() {
  const lp = pick([800, 1200, 1500, 2000, 2400, 3000, 4500]), rb = pick([5, 10, 15, 20]), sk = pick([2, 3]), bk = pick([0, 25, 40, 50, 80]);
  const ziel = lp * (1 - rb / 100), bar = ziel * (1 - sk / 100), bez = bar + bk;
  return { q: `Listenpreis netto <b>${fmt(lp)} €</b>, Rabatt <b>${rb} %</b>, Skonto <b>${sk} %</b>, Bezugskosten <b>${bk} €</b>.`,
    fields: [{ l: "Zieleinkaufspreis €", ans: ziel, type: "num", tol: 0.01 }, { l: "Bareinkaufspreis €", ans: bar, type: "num", tol: 0.01 }, { l: "Bezugspreis €", ans: bez, type: "num", tol: 0.01 }, { l: "Bezugspreis brutto (19 % USt) €", ans: bez * 1.19, type: "num", tol: 0.01 }],
    sol: `${fmt(lp)} − ${rb} % = ${fmt(ziel)} (Ziel-EP)\n− ${sk} % Skonto = ${fmt(bar)} (Bar-EP)\n+ ${bk} € = <b>${fmt(bez)} €</b> Bezugspreis\nbrutto: × 1,19 = ${fmt(bez * 1.19)} €` };
}},
{ id: "nwa", cat: "Wirtschaft", icon: "📊", t: "Nutzwertanalyse", d: "Gewichtete Punktbewertung", gen() {
  const crit = shuffle(["Preis", "Leistung", "Ergonomie", "Energieverbrauch", "Service", "Garantie", "Lieferzeit"]).slice(0, rnd(3, 4));
  let rest = 100; const w = crit.map((c, i) => { if (i === crit.length - 1) return rest; const v = 5 * rnd(2, Math.max(2, Math.floor((rest - 10 * (crit.length - i - 1)) / 5 / 1.5))); rest -= v; return v; });
  const offers = ["A", "B", "C"].slice(0, rnd(2, 3)), pts = offers.map(() => crit.map(() => rnd(2, 10)));
  const tot = pts.map(p => p.reduce((s, x, i) => s + x * w[i] / 100, 0));
  const best = offers[tot.indexOf(Math.max(...tot))];
  const tbl = `<table class="info-tbl"><tr><th>Kriterium</th><th>Gewicht</th>${offers.map(o => `<th>Angebot ${o}</th>`).join("")}</tr>${crit.map((c, i) => `<tr><td>${c}</td><td>${w[i]} %</td>${pts.map(p => `<td>${p[i]}</td>`).join("")}</tr>`).join("")}</table>`;
  return { q: `Berechne den Gesamtnutzwert (Punkte 1–10):\n${tbl}`,
    fields: offers.map((o, i) => ({ l: `Nutzwert ${o}`, ans: Math.round(tot[i] * 100) / 100, type: "num", tol: 0.011 })).concat([{ l: "Bestes Angebot", ans: best }]),
    sol: offers.map((o, i) => `${o}: ${crit.map((c, j) => `${w[j] / 100}×${pts[i][j]}`).join(" + ")} = <b>${fmt(tot[i])}</b>`).join("\n") + `\n→ Angebot <b>${best}</b>` };
}},
{ id: "sla", cat: "Wirtschaft", icon: "📈", t: "SLA-Verfügbarkeit", d: "Erlaubte Ausfallzeit berechnen", gen() {
  const v = pick([99, 99.5, 99.9, 99.95, 98, 97.5]), per = pick([["Jahr", 8760], ["Monat (30 Tage)", 720], ["Woche", 168]]);
  const h = per[1] * (100 - v) / 100;
  return { q: `Ein SLA garantiert <b>${fmt(v)} %</b> Verfügbarkeit pro ${per[0]}. Wie viele Stunden Ausfall sind maximal erlaubt?`, fields: [{ l: "Ausfall in Stunden (2 Nachkommastellen)", ans: Math.round(h * 100) / 100, type: "num", tol: 0.011 }], sol: `${per[1]} h × ${fmt(100 - v)} % = <b>${fmt(h)} h</b> (= ${fmt(h * 60, 0)} Minuten)` };
}},
{ id: "netzplan", cat: "Planung", icon: "🕸️", t: "Netzplan", d: "FAZ, FEZ, SAZ, SEZ, Puffer, kritischer Pfad", gen() {
  const n = rnd(5, 7), tasks = [];
  for (let i = 0; i < n; i++) {
    const pre = [];
    if (i > 0) { pre.push(rnd(Math.max(0, i - 2), i - 1)); if (i > 1 && Math.random() < .4) { const o = rnd(0, i - 1); if (!pre.includes(o)) pre.push(o); } }
    tasks.push({ id: PRED_LETTERS[i], d: rnd(1, 8), pre });
  }
  tasks.forEach((t, i) => { if (i < n - 1 && !tasks.some(u => u.pre.includes(i))) tasks[n - 1].pre.includes(i) || tasks[n - 1].pre.push(i); });
  tasks.forEach(t => { t.faz = t.pre.length ? Math.max(...t.pre.map(p => tasks[p].fez)) : 0; t.fez = t.faz + t.d; });
  const end = Math.max(...tasks.map(t => t.fez));
  for (let i = n - 1; i >= 0; i--) { const t = tasks[i]; const succ = tasks.filter(u => u.pre.includes(i)); t.sez = succ.length ? Math.min(...succ.map(u => u.saz)) : end; t.saz = t.sez - t.d; t.gp = t.saz - t.faz; }
  const crit = tasks.filter(t => t.gp === 0).map(t => t.id).join("");
  const tbl = `<table class="info-tbl"><tr><th>Vorgang</th><th>Dauer (Tage)</th><th>Vorgänger</th></tr>${tasks.map(t => `<tr><td>${t.id}</td><td>${t.d}</td><td>${t.pre.length ? t.pre.map(p => PRED_LETTERS[p]).join(", ") : "–"}</td></tr>`).join("")}</table>`;
  const grid = { rows: tasks.map(t => t.id), cols: ["FAZ", "FEZ", "SAZ", "SEZ", "GP"], ans: {} };
  tasks.forEach(t => { grid.ans[t.id + "|FAZ"] = t.faz; grid.ans[t.id + "|FEZ"] = t.fez; grid.ans[t.id + "|SAZ"] = t.saz; grid.ans[t.id + "|SEZ"] = t.sez; grid.ans[t.id + "|GP"] = t.gp; });
  return { q: `Berechne den Netzplan (Start bei FAZ = 0):\n${tbl}`, grid,
    fields: [{ l: "Projektdauer (Tage)", ans: end, type: "num" }, { l: "Kritischer Pfad (Buchstaben, z. B. ACE)", ans: crit, type: "list" }],
    sol: `Vorwärts: FAZ = max(FEZ der Vorgänger), FEZ = FAZ + D.\nRückwärts: SEZ = min(SAZ der Nachfolger), SAZ = SEZ − D. GP = SAZ − FAZ.\n<table class="info-tbl"><tr><th></th><th>D</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th></tr>${tasks.map(t => `<tr><td>${t.id}</td><td>${t.d}</td><td>${t.faz}</td><td>${t.fez}</td><td>${t.saz}</td><td>${t.sez}</td><td>${t.gp === 0 ? "<b style='color:var(--rd)'>0</b>" : t.gp}</td></tr>`).join("")}</table>Projektdauer <b>${end}</b> Tage · kritischer Pfad <b>${crit.split("").join(" → ")}</b>` };
}},
{ id: "trace", cat: "Planung", icon: "🧾", t: "Schreibtischtest", d: "Pseudocode von Hand ausführen", gen() {
  const kind = rnd(0, 3);
  if (kind === 0) { const a = rnd(1, 4), lim = rnd(8, 20), st = rnd(2, 4), f = rnd(1, 3); let x = a, s = 0, steps = []; while (x <= lim) { s += x * f; steps.push(`x=${x} → s=${s}`); x += st; }
    return { q: `<pre class="code">x ← ${a}\ns ← 0\nSOLANGE x <= ${lim}\n    s ← s + x * ${f}\n    x ← x + ${st}\nENDE SOLANGE\nAUSGABE s</pre>`, fields: [{ l: "Ausgabe s", ans: s, type: "num" }, { l: "Wert von x am Ende", ans: x, type: "num" }], sol: steps.join("\n") + `\nx=${x} > ${lim} → Ende. Ausgabe <b>${s}</b>` }; }
  if (kind === 1) { const arr = Array.from({ length: rnd(5, 7) }, () => rnd(1, 20)); let c = 0, s = 0; arr.forEach(v => { if (v % 2 === 0) { c++; s += v; } });
    return { q: `<pre class="code">zahlen ← [${arr.join(", ")}]\nanzahl ← 0\nsumme ← 0\nFÜR i ← 0 BIS länge(zahlen) − 1\n    WENN zahlen[i] MOD 2 = 0 DANN\n        anzahl ← anzahl + 1\n        summe ← summe + zahlen[i]\n    ENDE WENN\nENDE FÜR</pre>`, fields: [{ l: "anzahl", ans: c, type: "num" }, { l: "summe", ans: s, type: "num" }], sol: `Gerade Zahlen: ${arr.filter(v => v % 2 === 0).join(", ") || "keine"} → anzahl <b>${c}</b>, summe <b>${s}</b>` }; }
  if (kind === 2) { const arr = Array.from({ length: rnd(5, 7) }, () => rnd(1, 50)); let m = arr[0], p = 0; arr.forEach((v, i) => { if (v > m) { m = v; p = i; } });
    return { q: `<pre class="code">liste ← [${arr.join(", ")}]\nmax ← liste[0]\npos ← 0\nFÜR i ← 1 BIS länge(liste) − 1\n    WENN liste[i] > max DANN\n        max ← liste[i]\n        pos ← i\n    ENDE WENN\nENDE FÜR</pre>(Index beginnt bei 0)`, fields: [{ l: "max", ans: m, type: "num" }, { l: "pos", ans: p, type: "num" }], sol: `Größter Wert ${m} an Index <b>${p}</b> (bei gleichen Werten bleibt der erste, da „>“).` }; }
  const n = rnd(3, 6); let f = 1, k = n, steps = []; while (k > 1) { f *= k; steps.push(`f=${f}, n=${k - 1}`); k--; }
  return { q: `<pre class="code">n ← ${n}\nf ← 1\nSOLANGE n > 1\n    f ← f * n\n    n ← n − 1\nENDE SOLANGE\nAUSGABE f</pre>`, fields: [{ l: "Ausgabe f", ans: f, type: "num" }, { l: "Schleifendurchläufe", ans: n - 1, type: "num" }], sol: steps.join("\n") + `\n→ <b>${f}</b> (= ${n}!)` };
}},
{ id: "backup", cat: "Planung", icon: "💾", t: "Backup-Wiederherstellung", d: "Welche Sicherungen braucht der Restore?", gen() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa"], typ = pick(["inkrementell", "differenziell"]), fail = rnd(1, 5);
  const need = typ === "inkrementell" ? days.slice(0, fail + 1) : (fail === 0 ? ["Mo"] : ["Mo", days[fail]]);
  return { q: `Montag: Vollsicherung. Dienstag bis Samstag: jeweils <b>${typ}e</b> Sicherung am Abend.\nAm ${["", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"][fail]}morgen fällt der Server aus. Welche Sicherungen werden für die Wiederherstellung benötigt? (Kürzel mit Komma, z. B. Mo, Mi)`,
    fields: [{ l: "Benötigte Sicherungen", ans: need.join(","), type: "days" }, { l: "Anzahl Sicherungen", ans: need.length, type: "num" }],
    sol: typ === "inkrementell" ? `Inkrementell = Änderungen seit der letzten Sicherung → Vollsicherung + <b>alle</b> Inkremente: ${need.join(", ")}` : `Differenziell = Änderungen seit der letzten Vollsicherung → Vollsicherung + <b>nur die letzte</b> differenzielle: ${need.join(", ")}` };
}}
];
const TRBY = {}; TRAINERS.forEach(t => TRBY[t.id] = t);
let TRS = null;
function renderTrainerHome(app) {
  if (TRS) return renderTrainerRun(app);
  const cats = [...new Set(TRAINERS.map(t => t.cat))];
  app.innerHTML = `<h1>🧮 Rechentrainer</h1><p class="sub">Unendlich viele, zufällig erzeugte Aufgaben – genau die Rechenarten, die in fast jeder AP1 vorkommen. Erst rechnen, dann prüfen, dann den Lösungsweg ansehen.</p>
  ${cats.map(c => `<h2>${c}</h2><div class="grid g3">${TRAINERS.filter(t => t.cat === c).map(t => { const s = S.tr[t.id]; return `<div class="card click" onclick="startTrainer('${t.id}')"><div class="row" style="justify-content:space-between"><b>${t.icon} ${t.t}</b>${s ? `<span class="pill ${s.r / (s.r + s.w) >= .8 ? "gr" : "am"}">${s.r}/${s.r + s.w}</span>` : ""}</div><div class="small muted" style="margin-top:4px">${t.d}</div></div>`; }).join("")}</div>`).join("")}`;
}
function startTrainer(id) { TRS = { id, task: TRBY[id].gen(), checked: false, showSol: false, vals: {} }; if (view === "trainer") render(); else go("trainer"); }
function fieldOkT(f, v) {
  v = String(v || "").trim();
  if (f.type === "bin") return v.replace(/\s/g, "").replace(/^0b/i, "").padStart(8, "0") === f.ans;
  if (f.type === "hex") return v.replace(/\s/g, "").replace(/^0x/i, "").replace(/^0+(?=.)/, "").toUpperCase() === f.ans;
  if (f.type === "days") { const norm = s => s.split(/[,;\s]+/).filter(Boolean).map(x => x.slice(0, 2).toLowerCase()).sort().join(","); return norm(v) === norm(f.ans); }
  return fieldOk(f, v);
}
function renderTrainerRun(app) {
  const tr = TRBY[TRS.id], k = TRS.task, s = S.tr[tr.id] || { r: 0, w: 0 };
  const inp = (key, f, cls = "") => {
    const v = TRS.vals[key] || ""; let st = "";
    if (TRS.checked) st = fieldOkT(f, v) ? "okf" : "badf";
    if (f.opts) return `<select data-k="${key}" class="${st}" style="${st === "okf" ? "border-color:var(--gr)" : st === "badf" ? "border-color:var(--rd)" : ""}" onchange="TRS.vals['${key}']=this.value"><option value="">– bitte wählen –</option>${f.opts.map(o => `<option ${o === v ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
    return `<input data-k="${key}" class="${st} ${cls}" value="${esc(v)}" oninput="TRS.vals['${key}']=this.value" onkeydown="if(event.key==='Enter')checkTrainer()" autocomplete="off" spellcheck="false">`;
  };
  let grid = "";
  if (k.grid) grid = `<div class="gridwrap"><table class="gridtbl"><tr><th></th>${k.grid.cols.map(c => `<th>${c}</th>`).join("")}</tr>${k.grid.rows.map(r => `<tr><th>${r}</th>${k.grid.cols.map(c => `<td>${inp(r + "|" + c, { ans: k.grid.ans[r + "|" + c], type: "num" })}</td>`).join("")}</tr>`).join("")}</table></div>`;
  app.innerHTML = `<div class="qbox">
    <div class="qhead"><button class="btn sm" onclick="TRS=null;render()">← Trainer</button><b>${tr.icon} ${tr.t}</b><span class="pill">${s.r} ✓ · ${s.w} ✗</span></div>
    <div class="card">
      <div class="tr-q">${k.q}</div>
      ${grid}
      <div class="tr-fields">${k.fields.map((f, i) => `<div><label>${f.l}</label>${inp("f" + i, f)}</div>`).join("")}</div>
      <div class="row"><button class="btn pri" onclick="checkTrainer()">Prüfen</button><button class="btn" onclick="TRS.showSol=!TRS.showSol;render()">${TRS.showSol ? "Lösung ausblenden" : "Lösungsweg zeigen"}</button><button class="btn" onclick="startTrainer('${tr.id}')">🎲 Neue Aufgabe</button></div>
      ${TRS.result != null ? `<div class="fb ${TRS.result ? "ok" : "no"}"><h4>${TRS.result ? "✓ Alles richtig!" : "✗ Noch nicht ganz – rote Felder prüfen."}</h4></div>` : ""}
      ${TRS.showSol ? `<div class="fb inf"><h4>Lösungsweg</h4><div class="sol">${k.sol}</div></div>` : ""}
    </div>
    <p class="small dim" style="margin-top:12px">Tipp: IP-Adressen ohne Leerzeichen eingeben. Dezimalzahlen mit Komma oder Punkt.</p></div>`;
  if (!TRS.checked) { const f = document.querySelector("#app input[data-k]"); if (f && !TRS.task.fields.some(x => x.opts)) f.focus(); }
}
function checkTrainer() {
  document.querySelectorAll("#app [data-k]").forEach(i => TRS.vals[i.dataset.k] = i.value);
  const k = TRS.task; let ok = true;
  k.fields.forEach((f, i) => { if (!fieldOkT(f, TRS.vals["f" + i])) ok = false; });
  if (k.grid) Object.entries(k.grid.ans).forEach(([key, a]) => { if (!numOk(TRS.vals[key], a)) ok = false; });
  const first = !TRS.checked; TRS.checked = true; TRS.result = ok;
  if (first) { const s = S.tr[TRS.id] || { r: 0, w: 0 }; ok ? s.r++ : s.w++; S.tr[TRS.id] = s; activity(); save(); }
  if (ok) TRS.showSol = true;
  render();
}

/* ====================== Start ====================== */
setInterval(countdown, 60000);

