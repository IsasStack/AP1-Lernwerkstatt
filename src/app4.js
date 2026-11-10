/* ====================== Erweiterung 2: weitere Trainer und Rechner ====================== */
const r2 = x => Math.round(x * 100) / 100, r1 = x => Math.round(x * 10) / 10;
const eur = x => fmt(x, 2) + " €";

/* ---------- Netzplan: immer mit Puffern, zusätzlich freier Puffer ---------- */
TRBY.netzplan.d = "FAZ, FEZ, SAZ, SEZ, Gesamtpuffer, freier Puffer, kritischer Pfad";
TRBY.netzplan.gen = function () {
  let tasks, n, end;
  for (let tries = 0; tries < 80; tries++) {
    n = rnd(5, 7); tasks = [];
    for (let i = 0; i < n; i++) {
      const pre = [];
      if (i > 0) { pre.push(rnd(Math.max(0, i - 2), i - 1)); if (i > 1 && Math.random() < .5) { const o = rnd(0, i - 1); if (!pre.includes(o)) pre.push(o); } }
      tasks.push({ id: PRED_LETTERS[i], d: rnd(1, 8), pre: pre.sort((a, b) => a - b) });
    }
    tasks.forEach((t, i) => { if (i < n - 1 && !tasks.some(u => u.pre.includes(i))) { if (!tasks[n - 1].pre.includes(i)) tasks[n - 1].pre.push(i); } });
    tasks[n - 1].pre.sort((a, b) => a - b);
    tasks.forEach(t => { t.faz = t.pre.length ? Math.max(...t.pre.map(p => tasks[p].fez)) : 0; t.fez = t.faz + t.d; });
    end = Math.max(...tasks.map(t => t.fez));
    for (let i = n - 1; i >= 0; i--) { const t = tasks[i], succ = tasks.filter(u => u.pre.includes(i)); t.sez = succ.length ? Math.min(...succ.map(u => u.saz)) : end; t.saz = t.sez - t.d; t.gp = t.saz - t.faz; t.fp = (succ.length ? Math.min(...succ.map(u => u.faz)) : end) - t.fez; }
    if (tasks.filter(t => t.gp > 0).length >= 2) break;
  }
  const crit = tasks.filter(t => t.gp === 0).map(t => t.id).join("");
  const tbl = `<table class="info-tbl"><tr><th>Vorgang</th><th>Dauer (Tage)</th><th>Vorgänger</th></tr>${tasks.map(t => `<tr><td>${t.id}</td><td>${t.d}</td><td>${t.pre.length ? t.pre.map(p => PRED_LETTERS[p]).join(", ") : "–"}</td></tr>`).join("")}</table>`;
  const grid = { rows: tasks.map(t => t.id), cols: ["FAZ", "FEZ", "SAZ", "SEZ", "GP", "FP"], ans: {} };
  tasks.forEach(t => { grid.ans[t.id + "|FAZ"] = t.faz; grid.ans[t.id + "|FEZ"] = t.fez; grid.ans[t.id + "|SAZ"] = t.saz; grid.ans[t.id + "|SEZ"] = t.sez; grid.ans[t.id + "|GP"] = t.gp; grid.ans[t.id + "|FP"] = t.fp; });
  return { q: `Berechne den Netzplan (Start bei FAZ = 0). GP = Gesamtpuffer, FP = freier Puffer.\n${tbl}`, grid,
    fields: [{ l: "Projektdauer (Tage)", ans: end, type: "num" }, { l: "Kritische Vorgänge (Buchstaben, z. B. ACE)", ans: crit, type: "list" }],
    sol: `Vorwärts: FAZ = größter FEZ der Vorgänger, FEZ = FAZ + D.\nRückwärts: SEZ = kleinster SAZ der Nachfolger, SAZ = SEZ − D.\nGP = SAZ − FAZ. FP = kleinster FAZ der Nachfolger − FEZ (beim letzten Vorgang: Projektende − FEZ).\n<table class="info-tbl"><tr><th></th><th>D</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr>${tasks.map(t => `<tr><td>${t.id}</td><td>${t.d}</td><td>${t.faz}</td><td>${t.fez}</td><td>${t.saz}</td><td>${t.sez}</td><td>${t.gp === 0 ? "<b style='color:var(--rd)'>0</b>" : t.gp}</td><td>${t.fp}</td></tr>`).join("")}</table>Projektdauer <b>${end}</b> Tage · kritisch (GP = 0): <b>${crit.split("").join(", ")}</b>` };
};

/* ---------- Netz aufteilen: keine doppelte Abfrage bei zwei Subnetzen ---------- */
(function () { const g = TRBY.split.gen; TRBY.split.gen = function () { const k = g.call(this); const f = k.fields; if (f.length >= 2 && String(f[f.length - 1].ans) === String(f[f.length - 2].ans) && /Subnetz/.test(f[f.length - 1].l)) f.pop(); return k; }; })();

/* ---------- Übertragungszeit: mehr Aufgabentypen ---------- */
(function () { const g = TRBY.transfer.gen; TRBY.transfer.d = "Zeit, Datenmenge und nötige Datenrate berechnen";
  TRBY.transfer.gen = function () {
    const kind = rnd(0, 3);
    if (kind === 0) return g.call(this);
    if (kind === 1) { const gb = pick([2, 5, 8, 12, 20, 50]), rate = pick([10, 16, 25, 40, 50, 100]), sec = gb * 8000 / rate;
      return { q: `Ein Backup mit <b>${gb} GB</b> wird über eine Leitung mit <b>${rate} Mbit/s</b> Upload übertragen (dezimale Präfixe, ohne Overhead). Wie lange dauert das?`, fields: [{ l: "Zeit in Minuten (1 Nachkommastelle)", ans: r1(sec / 60), type: "num", tol: 0.06 }], sol: `${gb} GB × 8 = ${fmt(gb * 8)} Gbit = ${fmt(gb * 8000, 0)} Mbit\n÷ ${rate} Mbit/s = ${fmt(sec, 0)} s = <b>${fmt(sec / 60, 1)} min</b>` }; }
    if (kind === 2) { const gib = pick([1, 2, 4, 8]), rate = pick([50, 100, 200]), bits = gib * Math.pow(2, 30) * 8, sec = bits / (rate * 1e6);
      return { q: `Eine Datei mit <b>${gib} GiB</b> (binäres Präfix!) wird mit <b>${rate} Mbit/s</b> übertragen (1 Mbit = 10⁶ Bit). Wie lange dauert das?`, fields: [{ l: "Zeit in Sekunden (1 Nachkommastelle)", ans: r1(sec), type: "num", tol: 0.06 }], sol: `${gib} GiB = ${gib} × 2³⁰ Byte = ${fmt(gib * Math.pow(2, 30), 0)} Byte\n× 8 = ${fmt(bits, 0)} Bit\n÷ ${fmt(rate * 1e6, 0)} Bit/s = <b>${fmt(sec, 1)} s</b>` }; }
    const gb = pick([30, 60, 90, 120, 200]), h = pick([2, 4, 6, 8]), rate = gb * 8000 / (h * 3600);
    return { q: `Jede Nacht müssen <b>${gb} GB</b> innerhalb von <b>${h} Stunden</b> in die Cloud gesichert werden. Welche Upload-Datenrate ist dafür mindestens nötig?`, fields: [{ l: "Datenrate in Mbit/s (1 Nachkommastelle)", ans: r1(rate), type: "num", tol: 0.06 }], sol: `${gb} GB = ${fmt(gb * 8000, 0)} Mbit\n${h} h = ${fmt(h * 3600, 0)} s\n${fmt(gb * 8000, 0)} ÷ ${fmt(h * 3600, 0)} = <b>${fmt(rate, 1)} Mbit/s</b>` };
  }; })();

/* ---------- SLA: auch rückwärts ---------- */
(function () { const g = TRBY.sla.gen; TRBY.sla.d = "Erlaubte Ausfallzeit oder erreichte Verfügbarkeit berechnen";
  TRBY.sla.gen = function () {
    if (Math.random() < .55) return g.call(this);
    const [name, hrs] = pick([["Monat (30 Tage)", 720], ["Jahr (365 Tage)", 8760], ["Woche", 168]]), out = pick(hrs === 8760 ? [4, 8.76, 12, 24, 43.8] : hrs === 720 ? [1.5, 2, 3.6, 6, 7.2] : [0.5, 1, 1.68, 2]), v = (hrs - out) / hrs * 100;
    return { q: `Ein Server ist in einem <b>${name}</b> insgesamt <b>${fmt(out)} Stunden</b> ausgefallen. Welche Verfügbarkeit wurde erreicht?`, fields: [{ l: "Verfügbarkeit in % (2 Nachkommastellen)", ans: r2(v), type: "num", tol: 0.006 }], sol: `Gesamtzeit ${fmt(hrs, 0)} h\n(${fmt(hrs, 0)} − ${fmt(out)}) ÷ ${fmt(hrs, 0)} × 100 = <b>${fmt(v, 2)} %</b>` };
  }; })();

/* ---------- Amortisation: auch in Jahren ---------- */
(function () { const g = TRBY.amort.gen;
  TRBY.amort.gen = function () {
    if (Math.random() < .5) return g.call(this);
    const inv = pick([12000, 18000, 24000, 30000, 45000]), alt = pick([9000, 12000, 15000]), neu = pick([3000, 4500, 6000]), sp = alt - neu;
    return { q: `Eine neue Lösung kostet <b>${fmt(inv, 0)} €</b>. Die jährlichen Betriebskosten sinken von <b>${fmt(alt, 0)} €</b> auf <b>${fmt(neu, 0)} €</b>. Nach wie vielen Jahren hat sich die Investition amortisiert?`, fields: [{ l: "Jährliche Einsparung in €", ans: sp, type: "num" }, { l: "Amortisationszeit in Jahren (1 Nachkommastelle)", ans: r1(inv / sp), type: "num", tol: 0.06 }], sol: `Einsparung: ${fmt(alt, 0)} − ${fmt(neu, 0)} = ${fmt(sp, 0)} € pro Jahr\n${fmt(inv, 0)} ÷ ${fmt(sp, 0)} = <b>${fmt(inv / sp, 1)} Jahre</b>` };
  }; })();

/* ---------- Backup: Ausfall morgens oder abends nach der Sicherung ---------- */
TRBY.backup.gen = function () {
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa"], names = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const diff = Math.random() < .5, f = rnd(2, 5), morning = Math.random() < .5, last = morning ? f - 1 : f;
  const need = diff ? ["Mo", days[last]] : ["Mo", ...days.slice(1, last + 1)];
  return { q: `Montag: Vollsicherung. Dienstag bis Samstag: jeweils <b>${diff ? "differenzielle" : "inkrementelle"}</b> Sicherung am Abend.\nAm <b>${names[f]}${morning ? "morgen" : "abend, direkt nach der Sicherung,"}</b> fällt der Server aus. Welche Sicherungen werden für die Wiederherstellung benötigt? (Kürzel mit Komma, z. B. Mo, Mi)`,
    fields: [{ l: "Benötigte Sicherungen", ans: need.join(","), type: "days" }, { l: "Anzahl Sicherungen", ans: need.length, type: "num" }],
    sol: `Letzte vorhandene Sicherung: ${names[last]}abend.\n${diff ? "Differenziell: Vollsicherung + nur die letzte differenzielle Sicherung." : "Inkrementell: Vollsicherung + alle Inkremente danach, in der richtigen Reihenfolge."}\nBenötigt: <b>${need.join(", ")}</b>` };
};

/* ---------- Neue Trainer ---------- */
function addTrainer(t) { TRAINERS.push(t); TRBY[t.id] = t; }

addTrainer({ id: "vk", cat: "Wirtschaft", icon: "🏷️", t: "Verkaufskalkulation", d: "Vom Bezugspreis zum Listenverkaufspreis", gen() {
  const bp = pick([400, 600, 800, 1000, 1200, 1500]), hk = pick([20, 25, 30, 40]), gw = pick([8, 10, 12, 15]), sk = pick([2, 3]), rb = pick([5, 10, 15, 20]);
  const sko = bp * (1 + hk / 100), bvp = sko * (1 + gw / 100), zvp = bvp / (1 - sk / 100), lvp = zvp / (1 - rb / 100);
  return { q: `Bezugspreis <b>${fmt(bp, 0)} €</b>, Handlungskostenzuschlag <b>${hk} %</b>, Gewinnzuschlag <b>${gw} %</b>, Kundenskonto <b>${sk} %</b>, Kundenrabatt <b>${rb} %</b>. Kalkuliere den Verkaufspreis (netto, auf Cent gerundet).`,
    fields: [{ l: "Selbstkosten €", ans: r2(sko), type: "num", tol: 0.01 }, { l: "Barverkaufspreis €", ans: r2(bvp), type: "num", tol: 0.01 }, { l: "Zielverkaufspreis €", ans: r2(zvp), type: "num", tol: 0.011 }, { l: "Listenverkaufspreis €", ans: r2(lvp), type: "num", tol: 0.011 }],
    sol: `Bezugspreis ${eur(bp)}\n+ ${hk} % Handlungskosten = Selbstkosten <b>${eur(sko)}</b>\n+ ${gw} % Gewinn = Barverkaufspreis <b>${eur(bvp)}</b>\nSkonto im Hundert: ÷ ${fmt(1 - sk / 100)} = Zielverkaufspreis <b>${eur(zvp)}</b>\nRabatt im Hundert: ÷ ${fmt(1 - rb / 100)} = Listenverkaufspreis <b>${eur(lvp)}</b>\nMerke: Skonto und Rabatt zieht der Kunde später vom höheren Preis ab – deshalb teilen statt aufschlagen.`, hint: "Beträge auf Cent runden. Komma oder Punkt als Dezimaltrennzeichen." };
}});

addTrainer({ id: "zins", cat: "Wirtschaft", icon: "🏦", t: "Zinsen & Skonto", d: "Zinsformel, Skontobetrag, Effektivzins", gen() {
  const kind = rnd(0, 2);
  if (kind === 0) { const k = pick([5000, 8000, 12000, 20000, 36000]), p = pick([4, 5, 6, 8, 9]), t = pick([30, 45, 60, 90, 120, 180]), z = k * p * t / 36000;
    return { q: `Ein Betrag von <b>${fmt(k, 0)} €</b> wird <b>${t} Tage</b> zu <b>${p} %</b> pro Jahr verzinst (360 Zinstage pro Jahr). Wie hoch sind die Zinsen?`, fields: [{ l: "Zinsen in €", ans: r2(z), type: "num", tol: 0.01 }], sol: `Z = K × p × t ÷ (100 × 360)\n= ${fmt(k, 0)} × ${p} × ${t} ÷ 36.000 = <b>${eur(z)}</b>` }; }
  if (kind === 1) { const s = pick([2, 3]), ziel = pick([30, 40, 60]), frist = pick([8, 10, 14]), e = s / (ziel - frist) * 360;
    return { q: `Zahlungsbedingung: <b>${s} % Skonto</b> bei Zahlung innerhalb von <b>${frist} Tagen</b>, sonst <b>${ziel} Tage</b> netto. Welchem Jahreszins entspricht der Skonto (Faustformel, 360 Tage)?`, fields: [{ l: "Effektivzins in % (1 Nachkommastelle)", ans: r1(e), type: "num", tol: 0.06 }], sol: `Skontosatz ÷ (Zahlungsziel − Skontofrist) × 360\n= ${s} ÷ (${ziel} − ${frist}) × 360 = <b>${fmt(e, 1)} %</b>\nSkonto zu nutzen lohnt sich fast immer – selbst mit einem Kredit.` }; }
  const b = pick([1190, 2380, 3570, 4760, 5950, 11900]), s = pick([2, 3]), sb = b * s / 100;
  return { q: `Eine Rechnung über <b>${fmt(b, 0)} €</b> brutto darf mit <b>${s} % Skonto</b> bezahlt werden.`, fields: [{ l: "Skontobetrag €", ans: r2(sb), type: "num", tol: 0.01 }, { l: "Überweisungsbetrag €", ans: r2(b - sb), type: "num", tol: 0.01 }], sol: `${fmt(b, 0)} × ${s} % = <b>${eur(sb)}</b> Skonto\n${fmt(b, 0)} − ${fmt(sb)} = <b>${eur(b - sb)}</b>` };
}});

addTrainer({ id: "druck", cat: "Wirtschaft", icon: "🖨️", t: "Seitenkosten", d: "Kosten pro Seite und Druckervergleich", gen() {
  if (Math.random() < .5) { const pr = pick([39, 59, 79, 89, 120]), rw = pick([1300, 2000, 3000, 6000, 8000]), c = pr / rw * 100;
    return { q: `Eine Tonerkartusche kostet <b>${pr} €</b> und reicht für <b>${fmt(rw, 0)} Seiten</b>. Wie hoch sind die Tonerkosten pro Seite?`, fields: [{ l: "Cent pro Seite (2 Nachkommastellen)", ans: r2(c), type: "num", tol: 0.006 }], sol: `${pr} € ÷ ${fmt(rw, 0)} Seiten = ${fmt(pr / rw, 4)} € = <b>${fmt(c, 2)} Cent</b>` }; }
  const a = { an: pick([150, 200, 300]), pr: pick([35, 40, 45]), rw: pick([500, 800, 1000]) }, b = { an: pick([450, 600, 750]), pr: pick([80, 90, 110]), rw: pick([5000, 6000, 8000]) }, vol = pick([500, 1000, 2000]), jahre = 3, seiten = vol * 12 * jahre;
  const ka = a.an + seiten * a.pr / a.rw, kb = b.an + seiten * b.pr / b.rw;
  return { q: `Eine Abteilung druckt <b>${fmt(vol, 0)} Seiten pro Monat</b>, Nutzungsdauer <b>${jahre} Jahre</b>.\nDrucker A: Anschaffung <b>${a.an} €</b>, Patrone <b>${a.pr} €</b> für <b>${fmt(a.rw, 0)} Seiten</b>.\nDrucker B: Anschaffung <b>${b.an} €</b>, Toner <b>${b.pr} €</b> für <b>${fmt(b.rw, 0)} Seiten</b>.\nBerechne die Gesamtkosten (Anschaffung + Verbrauchsmaterial).`,
    fields: [{ l: "Gesamtkosten A €", ans: r2(ka), type: "num", tol: 0.5 }, { l: "Gesamtkosten B €", ans: r2(kb), type: "num", tol: 0.5 }, { l: "Günstiger (A/B)", ans: ka < kb ? "A" : "B" }],
    sol: `Seiten gesamt: ${fmt(vol, 0)} × 12 × ${jahre} = ${fmt(seiten, 0)}\nA: ${a.an} + ${fmt(seiten, 0)} × ${a.pr} ÷ ${fmt(a.rw, 0)} = <b>${eur(ka)}</b>\nB: ${b.an} + ${fmt(seiten, 0)} × ${b.pr} ÷ ${fmt(b.rw, 0)} = <b>${eur(kb)}</b>\nGünstiger: <b>${ka < kb ? "A" : "B"}</b>` };
}});

addTrainer({ id: "liz", cat: "Wirtschaft", icon: "🪪", t: "Server-Lizenzen & CALs", d: "Kernlizenzen, virtuelle Server, User- und Device-CALs", gen() {
  if (Math.random() < .5) { const cpus = pick([1, 2]), cores = pick([4, 6, 8, 10, 12, 16]), vms = pick([2, 4, 6, 8]);
    const per = Math.max(16, cpus * Math.max(8, cores)), times = Math.ceil(vms / 2);
    return { q: `Ein Host hat <b>${cpus} Prozessor${cpus > 1 ? "en" : ""}</b> mit ${cpus > 1 ? "je " : ""}<b>${cores} Kernen</b>. Darauf sollen <b>${vms} virtuelle Windows-Server</b> (Standard-Edition) laufen.\nRegeln: alle physischen Kerne lizenzieren, mindestens 8 pro Prozessor und 16 pro Server. Jede vollständige Lizenzierung erlaubt 2 virtuelle Server.`,
      fields: [{ l: "Kernlizenzen für eine Lizenzierung", ans: per, type: "num" }, { l: "Anzahl Lizenzierungen", ans: times, type: "num" }, { l: "Kernlizenzen insgesamt", ans: per * times, type: "num" }],
      sol: `Physische Kerne: ${cpus} × ${cores} = ${cpus * cores}${cores < 8 ? ` → Minimum 8 pro Prozessor: ${cpus * 8}` : ""}${per > cpus * Math.max(8, cores) ? " → Minimum 16 pro Server" : ""} → <b>${per}</b> Kernlizenzen\n${vms} VMs ÷ 2 = <b>${times}</b> Lizenzierung(en)\n${per} × ${times} = <b>${per * times}</b> Kernlizenzen` }; }
  const office = pick([15, 25, 40, 60]), pers = pick([12, 18, 24, 30]), dev = pick([4, 6, 8, 10].filter(x => x < pers));
  return { q: `Auf den Server greifen zu: <b>${office} Büromitarbeitende</b>, die jeweils PC, Notebook und Smartphone nutzen, sowie <b>${pers} Mitarbeitende im Schichtbetrieb</b>, die sich <b>${dev} Terminals</b> teilen. Wie viele CALs sind bei günstigster Lizenzierung nötig?`,
    fields: [{ l: "User-CALs", ans: office, type: "num" }, { l: "Device-CALs", ans: dev, type: "num" }, { l: "CALs insgesamt", ans: office + dev, type: "num" }],
    sol: `Büro: mehrere Geräte pro Person → je Person eine User-CAL: <b>${office}</b>\nSchicht: mehrere Personen pro Gerät → je Gerät eine Device-CAL: <b>${dev}</b>\nZusammen <b>${office + dev}</b>` };
}});

addTrainer({ id: "vlsm", cat: "Netzwerk", icon: "🧩", t: "VLSM", d: "Unterschiedlich große Subnetze nach Hostbedarf vergeben", gen() {
  const sz = h => Math.pow(2, Math.ceil(Math.log2(h + 2)));
  let need;
  do { need = [pick([50, 60, 100, 120]), pick([20, 25, 28, 30, 50, 60]), pick([5, 10, 12, 14])].sort((a, b) => b - a); } while (need.reduce((s, h) => s + sz(h), 0) > 256);
  const base = "192.168." + rnd(1, 250) + ".", names = ["A", "B", "C"]; let off = 0;
  const nets = need.map(h => { const s = sz(h), p = 32 - Math.log2(s), o = { h, net: base + off, p, bc: base + (off + s - 1) }; off += s; return o; });
  return { q: `Das Netz <b>${base}0/24</b> soll passend aufgeteilt werden. Vergib die Subnetze lückenlos hintereinander, beginnend mit dem größten Bedarf:\n${nets.map((x, i) => `Abteilung ${names[i]}: <b>${x.h} Hosts</b>`).join("\n")}`,
    fields: nets.flatMap((x, i) => [{ l: `${names[i]}: Netzadresse`, ans: x.net }, { l: `${names[i]}: Präfix (Zahl)`, ans: x.p, type: "num" }]),
    sol: `Je Bedarf das kleinste Netz mit 2ⁿ − 2 ≥ Hosts wählen:\n${nets.map((x, i) => `${names[i]}: ${x.h} Hosts → ${Math.pow(2, 32 - x.p)} Adressen → <b>${x.net}/${x.p}</b> (Broadcast ${x.bc})`).join("\n")}` };
}});

addTrainer({ id: "einheit", cat: "Zahlen", icon: "📏", t: "Datenmengen umrechnen", d: "GB ↔ GiB, Mbit/s ↔ MB/s", gen() {
  const kind = rnd(0, 2);
  if (kind === 0) { const tb = pick([1, 2, 4, 8]), v = tb * 1e12 / Math.pow(2, 40);
    return { q: `Eine Festplatte wird mit <b>${tb} TB</b> verkauft (dezimal). Wie viele TiB zeigt ein Betriebssystem an, das binär rechnet?`, fields: [{ l: "TiB (2 Nachkommastellen)", ans: r2(v), type: "num", tol: 0.006 }], sol: `${tb} TB = ${tb} × 10¹² Byte\n÷ 2⁴⁰ = <b>${fmt(v, 2)} TiB</b>` }; }
  if (kind === 1) { const gb = pick([250, 500, 512, 1000]), v = gb * 1e9 / Math.pow(2, 30);
    return { q: `Eine SSD hat laut Hersteller <b>${gb} GB</b>. Wie viele GiB sind das?`, fields: [{ l: "GiB (1 Nachkommastelle)", ans: r1(v), type: "num", tol: 0.06 }], sol: `${gb} × 10⁹ Byte ÷ 2³⁰ = <b>${fmt(v, 1)} GiB</b>` }; }
  const mb = pick([16, 50, 100, 250, 1000]);
  return { q: `Ein Internetanschluss bietet <b>${fmt(mb, 0)} Mbit/s</b>. Wie viele MB pro Sekunde lassen sich damit höchstens herunterladen?`, fields: [{ l: "MB/s", ans: mb / 8, type: "num", tol: 0.01 }], sol: `1 Byte = 8 Bit → ${fmt(mb, 0)} ÷ 8 = <b>${fmt(mb / 8)} MB/s</b>` };
}});

/* ---------- Neue Rechner ---------- */
CALCS.push(
{ id: "vk", cat: "Wirtschaft", icon: "🏷️", t: "Verkaufskalkulation", d: "Bezugspreis → Selbstkosten → Listenverkaufspreis",
  ui: () => `<div class="tr-fields"><div><label>Bezugspreis €</label><input id="c_vb" value="800" oninput="runCalc()"></div><div><label>Handlungskosten %</label><input id="c_vh" value="25" oninput="runCalc()"></div><div><label>Gewinn %</label><input id="c_vg" value="10" oninput="runCalc()"></div><div><label>Kundenskonto %</label><input id="c_vs" value="2" oninput="runCalc()"></div><div><label>Kundenrabatt %</label><input id="c_vr" value="10" oninput="runCalc()"></div><div><label>USt %</label><input id="c_vu" value="19" oninput="runCalc()"></div></div>`,
  run() {
    const bp = num("c_vb"), hk = num("c_vh") || 0, gw = num("c_vg") || 0, sk = num("c_vs") || 0, rb = num("c_vr") || 0, us = num("c_vu") || 0; if (!ok(bp) || sk >= 100 || rb >= 100) return "";
    const sko = bp * (1 + hk / 100), bvp = sko * (1 + gw / 100), zvp = bvp / (1 - sk / 100), lvp = zvp / (1 - rb / 100), P = x => fmt(x).padStart(12);
    return `<pre class="code">  Bezugspreis           ${P(bp)} €\n+ Handlungskosten ${String(hk).padEnd(4)}% ${P(sko - bp)} €\n= Selbstkosten          ${P(sko)} €\n+ Gewinn ${String(gw).padEnd(4)}%          ${P(bvp - sko)} €\n= Barverkaufspreis      ${P(bvp)} €\n+ Kundenskonto ${String(sk).padEnd(4)}%    ${P(zvp - bvp)} €   (im Hundert)\n= Zielverkaufspreis     ${P(zvp)} €\n+ Kundenrabatt ${String(rb).padEnd(4)}%    ${P(lvp - zvp)} €   (im Hundert)\n= Listenverkaufspreis   ${P(lvp)} €\n+ USt ${String(us).padEnd(4)}%             ${P(lvp * us / 100)} €\n= Brutto                ${P(lvp * (1 + us / 100))} €</pre><div class="small muted">Im Hundert: Zielverkaufspreis = Barverkaufspreis ÷ (1 − Skonto). Kalkulationszuschlag auf den Bezugspreis: ${fmt((lvp - bp) / bp * 100, 1)} % · Handelsspanne: ${fmt((lvp - bp) / lvp * 100, 1)} %</div>`;
  }},
{ id: "zins", cat: "Wirtschaft", icon: "🏦", t: "Zinsen & Skonto", d: "Zinsformel und Effektivzins des Skontos",
  ui: () => `<div class="tr-fields"><div><label>Kapital / Rechnungsbetrag €</label><input id="c_zk" value="12000" oninput="runCalc()"></div><div><label>Zinssatz % pro Jahr</label><input id="c_zp" value="8" oninput="runCalc()"></div><div><label>Tage</label><input id="c_zt" value="45" oninput="runCalc()"></div><div><label>Skonto %</label><input id="c_zs" value="2" oninput="runCalc()"></div><div><label>Skontofrist (Tage)</label><input id="c_zf" value="10" oninput="runCalc()"></div><div><label>Zahlungsziel (Tage)</label><input id="c_zz" value="30" oninput="runCalc()"></div></div>`,
  run() {
    const k = num("c_zk"), p = num("c_zp"), t = num("c_zt"), s = num("c_zs"), f = num("c_zf"), z = num("c_zz"); let out = "";
    if (ok(k) && ok(p) && ok(t)) out += `<table class="info-tbl">${row("Zinsen", `${fmt(k)} × ${fmt(p)} × ${fmt(t)} ÷ 36.000 = <b>${fmt(k * p * t / 36000)} €</b>`)}</table>`;
    if (ok(k) && ok(s)) out += `<table class="info-tbl">${row("Skontobetrag", fmt(k * s / 100) + " €")}${row("Zahlbetrag mit Skonto", fmt(k * (1 - s / 100)) + " €")}${ok(f) && ok(z) && z > f ? row("Effektivzins des Skontos", `${fmt(s)} ÷ (${fmt(z)} − ${fmt(f)}) × 360 = <b>${fmt(s / (z - f) * 360, 1)} %</b> pro Jahr`) : ""}</table>`;
    return out + `<div class="small muted">Zinsformel für Tage: Z = K × p × t ÷ (100 × 360). Für Monate: ÷ 1.200.</div>`;
  }},
{ id: "druck", cat: "Wirtschaft", icon: "🖨️", t: "Seitenkosten", d: "Kosten pro Seite und Gesamtkosten zweier Drucker",
  ui: () => `<div class="tr-fields"><div><label>Seiten pro Monat</label><input id="c_dv" value="3000" oninput="runCalc()"></div><div><label>Nutzungsdauer (Jahre)</label><input id="c_dj" value="3" oninput="runCalc()"></div><div><label>A: Anschaffung €</label><input id="c_da" value="299" oninput="runCalc()"></div><div><label>A: Patrone/Toner €</label><input id="c_dp" value="39" oninput="runCalc()"></div><div><label>A: Reichweite Seiten</label><input id="c_dr" value="1300" oninput="runCalc()"></div><div><label>B: Anschaffung €</label><input id="c_db" value="749" oninput="runCalc()"></div><div><label>B: Patrone/Toner €</label><input id="c_dq" value="89" oninput="runCalc()"></div><div><label>B: Reichweite Seiten</label><input id="c_ds" value="6000" oninput="runCalc()"></div></div>`,
  run() {
    const v = num("c_dv"), j = num("c_dj"), A = { an: num("c_da"), pr: num("c_dp"), rw: num("c_dr") }, B = { an: num("c_db"), pr: num("c_dq"), rw: num("c_ds") }; if (![v, j, A.an, A.pr, A.rw].every(ok) || !A.rw) return "";
    const n = v * 12 * j, line = (nm, x) => ok(x.an) && ok(x.pr) && x.rw ? row(nm, `${fmt(x.pr / x.rw * 100, 2)} Cent/Seite · gesamt ${fmt(x.an)} + ${fmt(n, 0)} × ${fmt(x.pr / x.rw, 4)} = <b>${fmt(x.an + n * x.pr / x.rw)} €</b>`) : "";
    const ka = A.an + n * A.pr / A.rw, kb = ok(B.an) && B.rw ? B.an + n * B.pr / B.rw : NaN;
    return `<table class="info-tbl">${row("Seiten gesamt", fmt(n, 0))}${line("Drucker A", A)}${line("Drucker B", B)}${ok(kb) ? row("Günstiger", ka < kb ? `A (um ${fmt(kb - ka)} €)` : `B (um ${fmt(ka - kb)} €)`) : ""}</table><div class="small muted">Seitenkosten = Preis des Verbrauchsmaterials ÷ Reichweite.</div>`;
  }});

route();
