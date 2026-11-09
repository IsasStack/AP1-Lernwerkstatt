T.push({
id:"wirtschaft", title:"Wirtschaftlichkeit & Kalkulation", icon:"💶", area:"Planung", weight:3,
summary:"Kostenarten, TCO, Kauf/Miete/Leasing, Amortisation, Nutzwertanalyse, Angebotsvergleich.",
lesson:`
<h3>Kostenarten</h3>
<ul><li><b>Fixkosten</b>: unabhängig von der Menge/Nutzung (Miete, Leasingrate, Wartungspauschale, Abschreibung).</li>
<li><b>Variable Kosten</b>: abhängig von der Nutzung (Strom, Toner pro Seite, Pay-per-Use).</li>
<li><b>Einmalige Kosten</b>: Anschaffung, Installation, Einrichtung, Schulung. <b>Laufende Kosten</b>: Strom, Lizenzen (Abo), Support, Wartung.</li>
<li><b>TCO (Total Cost of Ownership)</b>: alle Kosten über die gesamte Nutzungsdauer – Anschaffung + Betrieb + Wartung + Entsorgung.</li></ul>
<div class="merke">Gesamtkosten K = Kfix + kvar × Menge. Stückkosten = K / Menge.</div>
<h3>Kostenvergleich & Break-even</h3>
<p>Zwei Alternativen: A hat Fixkosten 1.000 € und 0,05 €/Seite, B hat 400 € und 0,08 €/Seite. Gleichsetzen: 1000 + 0,05x = 400 + 0,08x → 600 = 0,03x → <b>x = 20.000 Seiten</b>. Darunter ist B günstiger, darüber A.</p>
<h3>Amortisationsrechnung</h3>
<p>Wann hat sich eine Investition durch Einsparungen „bezahlt gemacht“?</p>
<div class="merke"><b>Amortisationszeit = Anschaffungskosten ÷ jährliche (bzw. monatliche) Einsparung</b><br>Beispiel: Neue Server kosten 12.000 €, sparen 400 €/Monat an Strom und Wartung → 12.000 / 400 = <b>30 Monate</b>.</div>
<p>Bei laufenden Mehrkosten der neuen Lösung: Einsparung = alte laufende Kosten − neue laufende Kosten.</p>
<h3>Kauf, Miete, Leasing, Pay-per-Use</h3>
<table><tr><th>Form</th><th>Vorteile</th><th>Nachteile</th></tr>
<tr><td>Kauf</td><td>Eigentum, langfristig oft günstigste Variante, freie Verfügung</td><td>hohe Kapitalbindung, Risiko der Veralterung, Wartung selbst</td></tr>
<tr><td>Miete</td><td>flexibel, kurze Laufzeiten, keine Kapitalbindung</td><td>teuer bei langer Nutzung, kein Eigentum</td></tr>
<tr><td>Leasing</td><td>Liquidität bleibt erhalten, planbare Raten, regelmäßige Erneuerung, oft steuerlich als Aufwand</td><td>insgesamt teurer als Kauf, Vertragsbindung, kein Eigentum</td></tr>
<tr><td>Pay-per-Use</td><td>nur tatsächliche Nutzung zahlen, skalierbar (Cloud)</td><td>Kosten schwer planbar bei schwankender Nutzung</td></tr></table>
<h3>Nutzwertanalyse (Scoring-Modell)</h3>
<ol><li>Kriterien festlegen (Preis, Leistung, Ergonomie, Energie, Service …).</li>
<li>Kriterien gewichten (Summe 100 % bzw. 1,0).</li>
<li>Jede Alternative je Kriterium bewerten (z. B. 1–10 Punkte).</li>
<li>Teilnutzen = Gewichtung × Punkte.</li>
<li>Gesamtnutzwert = Summe der Teilnutzen → höchster Wert gewinnt.</li></ol>
<table><tr><th>Kriterium</th><th>Gewicht</th><th>A (Pkt)</th><th>A (TN)</th><th>B (Pkt)</th><th>B (TN)</th></tr>
<tr><td>Preis</td><td>40 %</td><td>8</td><td>3,2</td><td>6</td><td>2,4</td></tr>
<tr><td>Leistung</td><td>35 %</td><td>5</td><td>1,75</td><td>9</td><td>3,15</td></tr>
<tr><td>Service</td><td>25 %</td><td>7</td><td>1,75</td><td>6</td><td>1,5</td></tr>
<tr><td><b>Summe</b></td><td>100 %</td><td></td><td><b>6,7</b></td><td></td><td><b>7,05</b></td></tr></table>
<p>→ B gewinnt. Vorteil: qualitative und quantitative Kriterien vergleichbar. Nachteil: Gewichtung/Punkte sind subjektiv.</p>
<h3>Angebotsvergleich (quantitativ)</h3>
<pre>  Listenpreis
− Rabatt (%)
= Zieleinkaufspreis
− Skonto (%)  (bei Zahlung innerhalb der Frist)
= Bareinkaufspreis
+ Bezugskosten (Versand, Verpackung, Installation)
= Bezugspreis (Einstandspreis)</pre>
<p>Netto/Brutto: Brutto = Netto × 1,19 (USt 19 %); Netto = Brutto ÷ 1,19. <b>Qualitativ</b>: Lieferzeit, Service, Garantie, Zuverlässigkeit, Nachhaltigkeit des Lieferanten.</p>
<h3>Kennzahlen</h3>
<p>Umsatz = Preis × Menge. Gewinn = Umsatz − Kosten. <b>Deckungsbeitrag</b> = Umsatz − variable Kosten (deckt die Fixkosten). Break-even-Menge = Fixkosten ÷ Stückdeckungsbeitrag. Abschreibung linear = Anschaffungskosten ÷ Nutzungsdauer (PCs i. d. R. 3 Jahre, digitale WG seit 2021 auch sofort möglich).</p>
<h3>Prozentrechnung – Kurzform</h3>
<p>Prozentwert = Grundwert × p / 100. Erhöhung um p %: × (1 + p/100). Rückwärts von brutto auf netto: ÷ 1,19, nicht × 0,81!</p>`,
cards:[
["Fixe vs. variable Kosten","Fix: unabhängig von der Nutzung (Miete, Leasingrate). Variabel: abhängig von der Nutzung (Strom, Toner)."],
["TCO","Total Cost of Ownership – alle Kosten über die Nutzungsdauer: Anschaffung, Betrieb, Wartung, Schulung, Entsorgung."],
["Amortisationszeit – Formel","Anschaffungskosten ÷ Einsparung pro Periode."],
["Break-even zweier Kostenmodelle","Kostenfunktionen gleichsetzen: Kfix1 + k1·x = Kfix2 + k2·x → x berechnen."],
["Leasing – Vorteile","Liquidität bleibt erhalten, planbare Raten, regelmäßige Hardwareerneuerung, Raten als Betriebsausgabe."],
["Leasing – Nachteile","Insgesamt teurer als Kauf, Vertragsbindung, kein Eigentum."],
["Kauf – Vorteile/Nachteile","+ Eigentum, langfristig günstig. − Kapitalbindung, Veralterungsrisiko."],
["Schritte der Nutzwertanalyse","Kriterien → Gewichtung (100 %) → Punkte vergeben → Teilnutzen (G × P) → Summe → Entscheidung."],
["Nachteil der Nutzwertanalyse","Gewichtung und Punktevergabe sind subjektiv."],
["Schema Bezugspreis","Listenpreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis."],
["Rabatt vs. Skonto","Rabatt: Preisnachlass (Menge, Treue). Skonto: Nachlass für Zahlung innerhalb einer Frist."],
["Brutto aus Netto","Netto × 1,19 (bei 19 % USt)."],
["Deckungsbeitrag","Umsatz − variable Kosten; trägt zur Deckung der Fixkosten bei."],
["Lineare Abschreibung","Anschaffungskosten ÷ Nutzungsdauer = jährlicher Abschreibungsbetrag."],
["Qualitative Kriterien Angebotsvergleich","Lieferzeit, Service, Garantie, Zuverlässigkeit, Erreichbarkeit, Nachhaltigkeit."]
],
qs:[
{t:"num",q:"Eine Investition kostet 9.000 € und spart monatlich 250 € ein. Nach wie vielen Monaten hat sie sich amortisiert?",a:36,unit:"Monate",e:"9.000 ÷ 250 = 36 Monate."},
{t:"num",q:"Drucker A: 800 € + 0,04 €/Seite. Drucker B: 200 € + 0,07 €/Seite. Ab wie vielen Seiten ist A günstiger? (Break-even-Menge)",a:20000,unit:"Seiten",e:"800 + 0,04x = 200 + 0,07x → 600 = 0,03x → x = 20.000. Ab mehr als 20.000 Seiten ist A günstiger."},
{t:"num",q:"Listenpreis 2.000 €, 10 % Rabatt, 2 % Skonto, 30 € Versand. Wie hoch ist der Bezugspreis?",a:1794,unit:"€",e:"2000 − 200 = 1800; − 2 % (36) = 1764; + 30 = 1794 €."},
{t:"num",q:"Ein Monitor kostet brutto 357 €. Wie hoch ist der Nettopreis (19 % USt)?",a:300,unit:"€",e:"357 ÷ 1,19 = 300 €."},
{t:"sc",q:"Welche Kosten sind fix?",o:["Stromkosten nach Verbrauch","Monatliche Leasingrate","Tonerkosten pro Seite","Cloud-Kosten pro Rechenstunde"],a:1,e:"Die Leasingrate fällt unabhängig von der Nutzung an."},
{t:"sc",q:"Wofür steht TCO?",o:["Total Cost of Ownership","Technical Cost Overview","Total Calculation Of Operations","Time Cost Optimization"],a:0,e:"Gesamtkosten über den Lebenszyklus."},
{t:"num",q:"Nutzwertanalyse: Kriterium Preis 40 %, Bewertung 7 Punkte. Wie hoch ist der Teilnutzen?",a:2.8,tol:0.01,unit:"",e:"0,40 × 7 = 2,8."},
{t:"sc",q:"Welcher Vorteil spricht für Leasing statt Kauf?",o:["Geringere Gesamtkosten","Eigentum am Gerät","Schonung der Liquidität","Keine Vertragsbindung"],a:2,e:"Leasing bindet kein Kapital; insgesamt ist es meist teurer."},
{t:"num",q:"Neue Rechner kosten 18.000 €. Alte Kosten pro Jahr: 7.000 €, neue Kosten pro Jahr: 1.000 €. Amortisationszeit in Jahren?",a:3,unit:"Jahre",e:"Einsparung = 7.000 − 1.000 = 6.000 €/Jahr; 18.000 ÷ 6.000 = 3 Jahre."},
{t:"num",q:"Ein Server kostet 6.000 € und wird linear über 3 Jahre abgeschrieben. Jährliche Abschreibung?",a:2000,unit:"€",e:"6.000 ÷ 3 = 2.000 € pro Jahr."},
{t:"mc",q:"Welche sind qualitative Kriterien eines Angebotsvergleichs? (mehrere)",o:["Lieferzeit","Bezugspreis","Kundenservice","Garantiebedingungen"],a:[0,2,3],e:"Der Bezugspreis ist quantitativ."},
{t:"open",q:"Ihr Betrieb überlegt, 30 Notebooks zu leasen statt zu kaufen. Nennen Sie je zwei Vor- und Nachteile des Leasings. (4 Punkte)",p:4,a:"Vorteile (je 1): keine hohe Kapitalbindung/Liquidität bleibt; planbare monatliche Raten; regelmäßiger Austausch → aktuelle Technik; Leasingraten als Betriebsausgabe; ggf. Service inklusive. Nachteile (je 1): insgesamt höhere Kosten als Kauf; kein Eigentum; Vertragsbindung/Laufzeit; Auflagen zum Zustand bei Rückgabe."},
{t:"open",q:"Beschreiben Sie das Vorgehen bei einer Nutzwertanalyse in vier Schritten. (4 Punkte)",p:4,a:"1. Bewertungskriterien festlegen (1). 2. Kriterien gewichten, Summe 100 % (1). 3. Alternativen je Kriterium mit Punkten bewerten und Teilnutzen = Gewicht × Punkte berechnen (1). 4. Teilnutzen addieren und die Alternative mit dem höchsten Gesamtnutzwert wählen (1)."}
]
});
