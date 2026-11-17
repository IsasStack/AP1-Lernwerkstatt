/* Inhaltliche Durchsicht nach der Neufassung der Lerntexte (17.11.2026):
   Korrekturen, Kennzeichnung gestrichener Inhalte, neue Fragen. Läuft nach zz_format und zzl_*. */
(function () {
  const top = id => T.find(x => x.id === id);
  const cardsOf = id => top(id).cards;
  const findCard = (id, f) => cardsOf(id).find(c => c[0].startsWith(f));
  const findQ = (id, q) => top(id).qs.find(x => x.q.startsWith(q));
  const setBack = (id, f, back) => { const c = findCard(id, f); if (c) c[1] = back; };
  const bg = (id, fronts) => fronts.forEach(f => { const c = findCard(id, f); if (c && !c[1].startsWith("[Hintergrund")) c[1] = "[Hintergrund – nicht mehr AP1-Stoff] " + c[1]; });
  const delQ = (id, starts) => { const t = top(id); t.qs = t.qs.filter(x => !starts.some(s => x.q.startsWith(s))); };
  const addQ = (id, list) => top(id).qs.push(...list);
  const patchQ = (id, q, obj) => { const x = findQ(id, q); if (x) Object.assign(x, obj); };

  /* Thema 1 */
  setBack("pruefung", "Wann ist die AP1 Frühjahr 2027?", "Mittwoch, 24.02.2027 – bundeseinheitlich; Uhrzeit und Raum stehen in der Einladung der IHK.");

  /* Thema 3: gestrichene Inhalte kennzeichnen bzw. aus dem Quiz nehmen, neue Fragen zu Katalog-Inhalten */
  bg("kunde", ["Eisbergmodell", "Offene Frage", "Geschlossene Frage", "Aktives Zuhören", "Upselling", "Suchoperator", "site:", "filetype:", "Minus-Operator"]);
  delQ("kunde", ["Eine Kundin kauft ein Notebook. Der Verkäufer", "Welche Merkmale gehören zum aktiven Zuhören", "Was liegt laut Eisbergmodell", "Sie suchen nur PDF-Datenblätter"]);
  addQ("kunde", [
    { t: "open", p: 3, q: "Ordnen Sie zu, ob es sich um funktionale oder nicht-funktionale Anforderungen handelt: a) Mitarbeitende können Urlaubsanträge online stellen. b) Die Anwendung antwortet in höchstens 2 Sekunden. c) Die Oberfläche ist mit Screenreadern bedienbar.", a: "a) funktional – beschreibt, WAS das System tun soll (1). b) nicht-funktional – Leistung/Antwortzeit (1). c) nicht-funktional – Bedienbarkeit/Barrierefreiheit (1)." },
    { t: "open", p: 2, q: "Wovon hängt die Priorität eines Tickets ab? Nennen Sie die beiden Kriterien.", a: "Auswirkung – wie viele bzw. wie wichtige Bereiche betroffen sind (1) – und Dringlichkeit – wie schnell es gelöst sein muss (1).", e: "Priorität = Auswirkung × Dringlichkeit – z. B. ausgefallener Kassenserver: hoch × hoch = Priorität 1." },
    { t: "num", q: "Ein SLA sichert 99,5 % Verfügbarkeit pro Monat (30 Tage, rund um die Uhr) zu. Wie viele Stunden darf der Dienst im Monat höchstens ausfallen?", a: 3.6, tol: 0.01, unit: "h", e: "30 × 24 h = 720 h; 720 h × 0,005 = 3,6 h." },
    { t: "open", p: 2, q: "Ein Kunde sagt: „Ich bin völlig im Stress, mein Drucker geht schon wieder nicht.“ Welche Seite der Nachricht ist „Ich bin völlig im Stress“ – Selbstoffenbarung oder Beziehung? Begründen Sie.", a: "Selbstoffenbarung (1), weil der Kunde etwas über sich selbst mitteilt – über seine Gefühle und seine Lage. Die Beziehungsseite würde ausdrücken, was er vom Gegenüber hält (1)." }
  ]);

  /* Thema 4 */
  bg("wirtschaft", ["Deckungsbeitrag", "Benchmarking"]);
  patchQ("wirtschaft", "Drucker A: 800 €", { q: "Drucker A: 800 € + 0,04 €/Seite. Drucker B: 200 € + 0,07 €/Seite. Bei welcher Seitenzahl sind beide gleich teuer (Break-even-Menge)?", e: "800 + 0,04x = 200 + 0,07x → 600 = 0,03x → x = 20.000. Darüber ist A günstiger, darunter B." });
  patchQ("wirtschaft", "Welche sind qualitative Kriterien", { a: "Je 1 Punkt (max. 3): Lieferzeit; Service/Support; Garantie; Zuverlässigkeit des Lieferanten; Erreichbarkeit; Nachhaltigkeit. Preis, Rabatt und Bezugspreis sind quantitative Kriterien." });

  /* Thema 10 */
  bg("cloud", ["Stamm- vs. Bewegungsdaten"]);
  delQ("cloud", ["Eine Rechnung im ERP-System ist ein Beispiel für"]);
  addQ("cloud", [
    { t: "open", p: 2, q: "Ein Kollege meint: „Wir machen vor jedem Update einen Snapshot der VM, ein Backup brauchen wir nicht.“ Beurteilen Sie die Aussage.", a: "Die Aussage ist falsch (1). Ein Snapshot liegt auf demselben Speicher wie die VM – fällt dieser aus oder wird er verschlüsselt, sind VM und Snapshot gleichzeitig verloren. Ein Backup muss getrennt, möglichst auch außer Haus bzw. offline, gespeichert werden (1)." }
  ]);

  /* Thema 11 */
  patchQ("netzwerk", "Welche Kanäle sind im 2,4-GHz-Band", { q: "Welche drei Kanäle im 2,4-GHz-Band werden klassisch überlappungsfrei genutzt?", e: "Klassisch 1, 6 und 11; in Europa sind bei 20 MHz Kanalbreite auch 1, 5, 9 und 13 möglich." });

  /* Thema 17: gestrichene Inhalte */
  bg("qualitaet", ["Qualität nach ISO 9000", "ISO 9001", "Audit", "Merkmale Softwarequalität", "Black-Box-Test", "White-Box-Test", "Regressionstest", "Grenzwertanalyse", "Teststufen", "Abnahmetest", "Statischer vs. dynamischer Test", "Inhalte eines Testprotokolls", "TQM"]);
  delQ("qualitaet", ["Welche Norm ist für Qualitätsmanagementsysteme", "Welches Softwarequalitätsmerkmal", "Was ist ein Code-Review", "Nennen Sie sechs Angaben, die ein Testprotokoll"]);
  top("qualitaet").qs.forEach(x => { if (/^(Ein Tester prüft|Nach einem Update wird|Ein Feld akzeptiert|Welche Teststufe führt)/.test(x.q)) x.q = "Hintergrund (AP2): " + x.q; });
  addQ("qualitaet", [
    { t: "open", p: 2, q: "Wofür stehen die vier Buchstaben des PDCA-Zyklus?", a: "Plan, Do, Check, Act (je 0,5) – planen, umsetzen, prüfen, handeln.", e: "Planen – Umsetzen – Prüfen – Handeln (standardisieren oder anpassen)." },
    { t: "open", p: 2, q: "Erläutern Sie, warum eine Maßnahme im PDCA-Zyklus zunächst im Kleinen erprobt wird.", a: "So lässt sich messen, ob die Maßnahme wirkt, bevor sie überall eingeführt wird (1). Fehler oder Nebenwirkungen betreffen dann nur einen kleinen Bereich statt das ganze Unternehmen (1)." }
  ]);

  /* Fallstudie Arztpraxis: Sicherheitsstufe nach DIN 66399 */
  const praxis = (typeof CASES !== "undefined") && CASES.find(c => c.id === "praxis");
  if (praxis) praxis.steps.forEach(s => { if (/alte Server-HDD/.test(s.q)) s.a = "Physische Vernichtung nach DIN 66399, Schutzklasse 3, mindestens Sicherheitsstufe H-4 (besser H-5), durch einen zertifizierten Dienstleister mit Vernichtungsprotokoll und AV-Vertrag – Gesundheitsdaten haben sehr hohen Schutzbedarf → Schutzklasse 3."; });

  /* Glossar */
  if (typeof ABK !== "undefined") {
    const fix = (k, long, txt) => { const a = ABK.find(x => x[0] === k); if (a) { if (long) a[1] = long; if (txt) a[2] = txt; } };
    fix("IT", null, "Sammelbegriff für Hard- und Software zur Verarbeitung, Speicherung und Übertragung von Informationen.");
    fix("KMU", null, "Unternehmen mit weniger als 250 Beschäftigten und höchstens 50 Mio. € Umsatz (EU-Definition).");
    fix("MFP", "Multifunction Printer", "Multifunktionsgerät: Drucker, Scanner und Kopierer in einem.");
    const have = new Set(ABK.map(x => x[0]));
    [
      ["DaaS", "Desktop as a Service", "Virtueller Desktop aus der Cloud, pro Benutzer und Monat bezahlt (z. B. Windows 365)."],
      ["NPU", "Neural Processing Unit", "Recheneinheit im Prozessor für KI-Aufgaben, stromsparend und lokal."],
      ["DDG", "Digitale-Dienste-Gesetz", "Seit 2024, ersetzt das TMG – regelt u. a. die Impressumspflicht."],
      ["TDDDG", "Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz", "Regelt u. a. Cookies: Tracking nur mit Einwilligung."],
      ["NIS-2", "Network and Information Security Directive 2", "EU-Richtlinie: Risikomanagement und Meldepflichten für viele Unternehmen."],
      ["eIDAS", "electronic IDentification, Authentication and trust Services", "EU-Verordnung zu elektronischen Signaturen; die qualifizierte Signatur ersetzt die Schriftform."],
      ["NDP", "Neighbor Discovery Protocol", "Ersetzt bei IPv6 unter anderem ARP."],
      ["SAE", "Simultaneous Authentication of Equals", "Anmeldeverfahren von WPA3, schützt vor Offline-Rateangriffen."]
    ].forEach(a => { if (!have.has(a[0])) ABK.push(a); });
    ABK.sort((x, y) => x[0].localeCompare(y[0], "de", { sensitivity: "base" }));
  }
})();
