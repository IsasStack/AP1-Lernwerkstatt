T.push({
id:"projekt", title:"Projektmanagement", icon:"📋", area:"Planung", weight:3,
summary:"Projektmerkmale, Phasen, SMART, Wasserfall vs. Scrum, Gantt, Netzplan.",
lesson:`
<h3>Was ist ein Projekt?</h3>
<p>Ein Vorhaben, das im Wesentlichen durch <b>Einmaligkeit</b> der Bedingungen gekennzeichnet ist (DIN 69901): klares <b>Ziel</b>, <b>zeitliche Begrenzung</b> (Start/Ende), begrenzte <b>Ressourcen</b> (Budget, Personal), eigene <b>Projektorganisation</b>, Komplexität/Risiko, oft interdisziplinär.</p>
<div class="merke"><b>Magisches Dreieck:</b> Leistung/Qualität – Zeit – Kosten. Änderst du eine Ecke, wirkt sich das auf die anderen aus (mehr Leistung ⇒ mehr Zeit oder Kosten).</div>
<h3>Projektphasen (klassisch)</h3>
<p>Initialisierung → Definition/Planung → Durchführung → Abschluss (begleitend: Controlling). Phasen enden mit <b>Meilensteinen</b> = Ereignisse ohne Dauer, an denen ein Ergebnis überprüft wird.</p>
<h3>Vorbereitung: Machbarkeit & Umfeld</h3>
<ul><li><b>Machbarkeitsanalyse</b>: technisch, wirtschaftlich, rechtlich (DSGVO!), terminlich, personell.</li>
<li><b>Stakeholderanalyse</b>: Wer ist betroffen/beteiligt? Einfluss & Einstellung (Promotoren, Kritiker).</li>
<li><b>Risikoanalyse</b>: Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe; Maßnahmen vermeiden, vermindern, übertragen, akzeptieren.</li>
<li><b>Lastenheft</b> (Auftraggeber: WAS & WOFÜR) → <b>Pflichtenheft</b> (Auftragnehmer: WIE & WOMIT).</li></ul>
<h3>SMART-Ziele</h3>
<table><tr><th>Buchstabe</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>S</td><td>Spezifisch – eindeutig</td><td>„Alle 25 Arbeitsplätze der Buchhaltung …“</td></tr>
<tr><td>M</td><td>Messbar</td><td>„… mit Windows 11 und BitLocker …“</td></tr>
<tr><td>A</td><td>Attraktiv/akzeptiert (achievable)</td><td>vom Team getragen</td></tr>
<tr><td>R</td><td>Realistisch</td><td>mit vorhandenen Ressourcen erreichbar</td></tr>
<tr><td>T</td><td>Terminiert</td><td>„… bis 31.03. ausgestattet.“</td></tr></table>
<h3>Vorgehensmodelle: Wasserfall vs. Scrum</h3>
<table><tr><th></th><th>Wasserfall</th><th>Scrum (agil)</th></tr>
<tr><td>Ablauf</td><td>sequenzielle Phasen: Analyse → Entwurf → Implementierung → Test → Einsatz/Wartung</td><td>iterativ in Sprints (1–4 Wochen), am Ende jeweils ein nutzbares Inkrement</td></tr>
<tr><td>Anforderungen</td><td>vollständig zu Beginn festgelegt</td><td>im Product Backlog, laufend priorisiert & änderbar</td></tr>
<tr><td>Stärken</td><td>Planungssicherheit, klare Dokumentation, gut bei stabilen Anforderungen</td><td>Flexibilität, frühes Kundenfeedback, Transparenz</td></tr>
<tr><td>Schwächen</td><td>Änderungen teuer, Fehler spät entdeckt, Kunde sieht Ergebnis spät</td><td>Gesamtkosten/-termin schwer planbar, hohe Kundenbeteiligung nötig</td></tr></table>
<p><b>Scrum-Rollen:</b> Product Owner (Wert, Backlog, Prioritäten), Scrum Master (Prozess, Hindernisse beseitigen), Developers (selbstorganisiert, liefern Inkrement).<br>
<b>Events:</b> Sprint, Sprint Planning, Daily Scrum (15 Min.), Sprint Review (Ergebnis mit Stakeholdern), Sprint Retrospektive (Zusammenarbeit verbessern).<br>
<b>Artefakte:</b> Product Backlog, Sprint Backlog, Increment (+ Definition of Done).</p>
<h3>Planungswerkzeuge</h3>
<ul><li><b>Projektstrukturplan (PSP)</b>: hierarchische Zerlegung in Teilaufgaben und Arbeitspakete – <i>was</i> ist zu tun (ohne Zeit).</li>
<li><b>Gantt-Diagramm</b> (Balkenplan): Vorgänge als Balken auf Zeitachse – anschaulich, Abhängigkeiten nur begrenzt sichtbar.</li>
<li><b>Netzplan</b>: Vorgänge mit Abhängigkeiten, Puffern, kritischem Pfad.</li></ul>
<h3>Netzplantechnik (Vorgangsknoten)</h3>
<pre>┌─────┬─────┬─────┐
│ FAZ │  D  │ FEZ │
├─────┴─────┴─────┤
│  Nr / Vorgang   │
├─────┬─────┬─────┤
│ SAZ │ GP  │ SEZ │
└─────┴─────┴─────┘</pre>
<ol><li><b>Vorwärtsrechnung:</b> FEZ = FAZ + D. FAZ eines Nachfolgers = <b>größter</b> FEZ aller Vorgänger.</li>
<li><b>Rückwärtsrechnung:</b> Am Ende SEZ = FEZ. SAZ = SEZ − D. SEZ eines Vorgängers = <b>kleinster</b> SAZ aller Nachfolger.</li>
<li><b>Gesamtpuffer</b> GP = SAZ − FAZ (= SEZ − FEZ): so viel darf sich der Vorgang verzögern, ohne das Projektende zu verschieben.</li>
<li><b>Freier Puffer</b> FP = kleinster FAZ der Nachfolger − FEZ: Verzögerung ohne Auswirkung auf Nachfolger.</li>
<li><b>Kritischer Pfad</b>: lückenlose Kette mit GP = 0 – jede Verzögerung verschiebt das Projektende.</li></ol>
<div class="tip">Start-Konvention: Meist beginnt der erste Vorgang bei FAZ = 0. Manche Aufgaben starten mit 1 – dann gilt FEZ = FAZ + D − 1. Lies die Vorgabe genau!</div>
<p><b>Terminprobleme lösen:</b> Vorgänge parallelisieren, Ressourcen auf dem kritischen Pfad erhöhen, Umfang reduzieren, Puffer nutzen, Überstunden/externe Kräfte.</p>
<h3>Abschluss</h3>
<p>Abnahme (Abnahmeprotokoll), Soll-Ist-Vergleich, Abweichungsanalyse, <b>Lessons Learned</b>, Projektdokumentation, Auflösung des Teams. <b>Teamentwicklung nach Tuckman:</b> Forming → Storming → Norming → Performing (→ Adjourning).</p>`,
cards:[
["Merkmale eines Projekts","Einmaligkeit, klares Ziel, zeitlich begrenzt, begrenzte Ressourcen, eigene Organisation, Komplexität/Risiko."],
["Magisches Dreieck","Leistung/Qualität, Zeit, Kosten – beeinflussen sich gegenseitig."],
["Meilenstein","Ereignis ohne Dauer, an dem ein definiertes (Teil-)Ergebnis überprüft wird."],
["Lastenheft vs. Pflichtenheft","Lastenheft: Auftraggeber, WAS/WOFÜR. Pflichtenheft: Auftragnehmer, WIE/WOMIT – Grundlage für die Umsetzung."],
["SMART","Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch, Terminiert."],
["Wasserfallmodell – Vor- und Nachteil","+ Planbarkeit, klare Phasen/Dokumentation; − Änderungen spät & teuer, Kunde sieht Ergebnis erst am Ende."],
["Scrum-Rollen","Product Owner, Scrum Master, Developers."],
["Scrum-Events","Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospektive."],
["Scrum-Artefakte","Product Backlog, Sprint Backlog, Increment."],
["Sprint Review vs. Retrospektive","Review: WAS wurde geliefert (mit Stakeholdern). Retro: WIE haben wir gearbeitet (Team, Prozessverbesserung)."],
["FAZ eines Vorgangs mit mehreren Vorgängern","Der größte FEZ der Vorgänger."],
["SEZ eines Vorgangs mit mehreren Nachfolgern","Der kleinste SAZ der Nachfolger."],
["Gesamtpuffer","GP = SAZ − FAZ = SEZ − FEZ."],
["Freier Puffer","FP = min(FAZ der Nachfolger) − FEZ."],
["Kritischer Pfad","Kette von Vorgängen mit Gesamtpuffer 0; bestimmt die Projektdauer."],
["PSP","Projektstrukturplan: hierarchische Zerlegung des Projekts in Teilaufgaben und Arbeitspakete, ohne Zeitbezug."],
["Gantt-Diagramm","Balkendiagramm: Vorgänge auf einer Zeitachse, gut für Überblick und Fortschritt."],
["Risiko berechnen","Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe."],
["Phasen der Teamentwicklung (Tuckman)","Forming, Storming, Norming, Performing (Adjourning)."],
["Lessons Learned","Systematische Sammlung von Erfahrungen am Projektende für künftige Projekte."]
],
qs:[
{t:"sc",q:"Welches Merkmal trifft auf ein Projekt NICHT zu?",o:["Einmaligkeit","Zeitliche Begrenzung","Dauerhafte Routinetätigkeit","Begrenzte Ressourcen"],a:2,e:"Routine ist Linienarbeit, kein Projekt."},
{t:"sc",q:"Wer erstellt das Pflichtenheft?",o:["Auftraggeber","Auftragnehmer","Betriebsrat","Endanwender"],a:1,e:"Der Auftragnehmer beschreibt im Pflichtenheft, WIE er die Anforderungen des Lastenhefts umsetzt."},
{t:"sc",q:"Vorgang C hat die Vorgänger A (FEZ 5) und B (FEZ 8). Wie groß ist FAZ von C?",o:["5","8","13","6,5"],a:1,e:"Bei Zusammenführung zählt der größte FEZ der Vorgänger."},
{t:"num",q:"Ein Vorgang hat FAZ = 4, Dauer = 3, SAZ = 6. Wie groß ist der Gesamtpuffer?",a:2,unit:"Tage",e:"GP = SAZ − FAZ = 6 − 4 = 2."},
{t:"sc",q:"Welche Aussage zum kritischen Pfad ist richtig?",o:["Er enthält die Vorgänge mit dem größten Puffer.","Jede Verzögerung auf ihm verschiebt das Projektende.","Er ist immer der kürzeste Weg durch den Netzplan.","Er kann nur einen Vorgang enthalten."],a:1,e:"Kritischer Pfad: GP = 0 und längster Weg durch den Netzplan."},
{t:"sc",q:"Welche Scrum-Rolle priorisiert das Product Backlog?",o:["Scrum Master","Product Owner","Developers","Stakeholder"],a:1,e:"Der Product Owner verantwortet Wert und Reihenfolge des Backlogs."},
{t:"sc",q:"In welchem Scrum-Event wird die Zusammenarbeit des Teams reflektiert?",o:["Sprint Review","Daily Scrum","Sprint Retrospektive","Sprint Planning"],a:2,e:"Die Retrospektive verbessert den Prozess, das Review betrachtet das Produkt."},
{t:"mc",q:"Welche Aussagen treffen auf das Wasserfallmodell zu? (mehrere)",o:["Phasen laufen nacheinander ab","Anforderungen werden in jedem Sprint neu priorisiert","Änderungen in späten Phasen sind aufwendig","Gute Planbarkeit bei stabilen Anforderungen"],a:[0,2,3],e:"Sprints und laufende Priorisierung gehören zu Scrum."},
{t:"sc",q:"Welches Ziel ist SMART formuliert?",o:["Wir verbessern die IT.","Bis 30.04. werden alle 12 Vertriebsnotebooks mit BitLocker verschlüsselt.","Die Mitarbeiter sollen zufriedener sein.","Möglichst bald neue Drucker anschaffen."],a:1,e:"Spezifisch (Vertriebsnotebooks), messbar (12, BitLocker), terminiert (30.04.)."},
{t:"sc",q:"Wofür steht das „T“ in SMART?",o:["Transparent","Technisch","Terminiert","Teamorientiert"],a:2,e:"T = terminiert (time-bound)."},
{t:"num",q:"Vorgang X: FEZ = 10. Nachfolger Y hat FAZ 12, Nachfolger Z hat FAZ 10. Wie groß ist der freie Puffer von X?",a:0,unit:"Tage",e:"FP = min(FAZ Nachfolger) − FEZ = 10 − 10 = 0."},
{t:"sc",q:"Was zeigt ein Projektstrukturplan?",o:["Zeitliche Abfolge mit Puffern","Hierarchische Zerlegung in Arbeitspakete","Kosten pro Monat","Kommunikationswege"],a:1,e:"Der PSP beantwortet WAS zu tun ist, nicht WANN."},
{t:"open",q:"Das Projekt „Rollout 40 neue Arbeitsplätze“ droht den Endtermin zu verfehlen, weil ein Vorgang auf dem kritischen Pfad verzögert ist. Nennen Sie drei Maßnahmen. (3 Punkte)",p:3,a:"Je 1 Punkt, z. B.: zusätzliche Ressourcen/Personal auf dem kritischen Vorgang einsetzen; Vorgänge parallelisieren statt nacheinander; Leistungsumfang reduzieren (z. B. Teilrollout); Überstunden/externe Dienstleister; Puffer anderer Vorgänge nutzen und Ressourcen umschichten."},
{t:"open",q:"Vergleichen Sie Wasserfallmodell und Scrum anhand der Kriterien „Umgang mit Anforderungsänderungen“ und „Kundeneinbindung“. (4 Punkte)",p:4,a:"Änderungen: Im Wasserfall werden Anforderungen zu Beginn fixiert; spätere Änderungen sind aufwendig/teuer (1). In Scrum werden Anforderungen im Product Backlog laufend angepasst und je Sprint neu priorisiert (1). Kunde: Im Wasserfall v. a. am Anfang (Anforderungen) und am Ende (Abnahme) eingebunden (1). In Scrum regelmäßig über Product Owner und Sprint Reviews mit Feedback nach jedem Inkrement (1)."},
{t:"open",q:"Erläutern Sie den Begriff „Gesamtpuffer“ und wie er berechnet wird. (2 Punkte)",p:2,a:"Der Gesamtpuffer gibt an, um wie viele Zeiteinheiten ein Vorgang verschoben/verlängert werden kann, ohne dass sich das Projektende verzögert (1). Berechnung: GP = SAZ − FAZ bzw. SEZ − FEZ (1)."}
]
});
