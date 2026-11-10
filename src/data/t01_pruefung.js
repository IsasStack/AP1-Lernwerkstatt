T.push({
id:"pruefung", title:"Prüfung & Strategie", icon:"🎯", area:"Basis", weight:2,
summary:"Ablauf, Gewichtung, Operatoren, Zeitmanagement – wie du Punkte holst.",
lesson:`
<h3>Rahmen der AP1</h3>
<table><tr><th>Merkmal</th><th>AP1 „Einrichten eines IT-gestützten Arbeitsplatzes“</th></tr>
<tr><td>Termin</td><td>Mittwoch, <b>24.02.2027</b> (bundeseinheitlich, AkA), Beginn i. d. R. 8 Uhr</td></tr>
<tr><td>Dauer</td><td>90 Minuten, schriftlich, offene Aufgaben (+ teils gebundene)</td></tr>
<tr><td>Gewichtung</td><td>20 % der Gesamtnote – identisch für alle IT-Berufe</td></tr>
<tr><td>Grundlage</td><td>Ausbildungsrahmenplan Monate 1–18 (§ 4 FIAusbV) + AkA-Prüfungskatalog, 2. Auflage (gilt seit Frühjahr 2025)</td></tr>
<tr><td>Hilfsmittel</td><td>Nicht programmierbarer, netzunabhängiger Taschenrechner, Schreibzeug, Lineal – Einladung prüfen!</td></tr></table>
<div class="merke"><b>Bestehen:</b> AP1 hat keine eigene Sperrnote. Gesamtergebnis (AP1 20 % + AP2 80 %) muss ≥ 50 Punkte sein, und die AP2-Bereiche haben eigene Mindestanforderungen. Eine schwache AP1 erhöht nur den Druck auf die AP2.</div>
<h3>Was der neue Katalog (ab 2025) bedeutet</h3>
<p><b>Gestrichen</b> (nicht mehr AP1): SQL & Datenbanken, RAID/SAN, Struktogramm & PAP, Vererbung/Polymorphie, Vorgehensmodelle außer Wasserfall & Scrum (z. B. Kanban, XP), SWOT, Mobilfunkstandards im Detail, ISO-2700x-Details.</p>
<p><b>Neu bzw. betont:</b> KI-Software am Arbeitsplatz, ERP/CRM/SCM, Clients in Domänen einbinden, IPv4 vs. IPv6, DSGVO-Betroffenenrechte, Barrierefreiheit (Websites & Hardware), Härtung, Hashverfahren, 2FA, Amortisationszeit, SMART-Ziele, UML-Aktivitätsdiagramm, Schreibtischtest.</p>
<h3>Operatoren – was die Aufgabe wirklich verlangt</h3>
<table><tr><th>Operator</th><th>Erwartung</th></tr>
<tr><td>Nennen</td><td>Stichwort reicht, keine Erklärung</td></tr>
<tr><td>Beschreiben</td><td>Sachverhalt in eigenen Worten, zusammenhängend</td></tr>
<tr><td>Erläutern / Erklären</td><td>Beschreiben + Zusammenhänge/Gründe („weil …“), ggf. Beispiel</td></tr>
<tr><td>Begründen</td><td>Entscheidung + fachliches Argument mit Bezug zur Situation</td></tr>
<tr><td>Berechnen</td><td>Rechenweg + Ergebnis + Einheit</td></tr>
<tr><td>Vergleichen / Unterscheiden</td><td>Gemeinsamkeiten und Unterschiede je Kriterium gegenüberstellen</td></tr>
<tr><td>Beurteilen / Bewerten</td><td>Kriteriengestütztes eigenes Urteil</td></tr>
<tr><td>Ergänzen / Vervollständigen</td><td>Tabelle, Diagramm oder Code direkt ausfüllen</td></tr></table>
<h3>Zeitmanagement</h3>
<ul><li>Faustregel: <b>1 Punkt ≈ 1 Minute</b> (100 Punkte, 90 Min. → etwas Puffer einplanen).</li>
<li>Erst die Ausgangssituation lesen: Firma, Abteilung, Nutzer, Anforderungen markieren.</li>
<li>Hängst du bei einer Rechnung (Subnetting, Netzplan) fest: markieren, weiter, später zurück.</li>
<li>Bei „Nennen Sie drei …“ werden nur die ersten drei gewertet – nicht fünf hinschreiben.</li></ul>
<h3>Die Begründungsformel</h3>
<div class="tip"><b>Entscheidung + weil + Fachargument + Bezug zur Situation.</b><br>Schwach: „LAN, weil besser.“<br>Stark: „Für den festen Videoschnittplatz empfehle ich eine kabelgebundene Gigabit-Ethernet-Verbindung, da sie Vollduplex bietet, nicht durch Funkstörungen beeinträchtigt wird und so die konstante Bandbreite für große Videodateien garantiert.“</div>
<div class="warn">Abkürzungen (DHCP, PoE, ERP …) nur verwenden, wenn du ihre Funktion in einem Satz erklären kannst – die Prüfer werten die Erklärung, nicht das Kürzel.</div>`,
cards:[
["Wann ist die AP1 Frühjahr 2027?","Mittwoch, 24.02.2027 – bundeseinheitlich (AkA), Beginn in der Regel 8 Uhr."],
["Wie stark zählt die AP1?","20 % der Gesamtnote, 90 Minuten schriftlich, für alle IT-Berufe identisch."],
["Kann man in der AP1 „durchfallen“?","Nicht isoliert – es gibt keine Sperrnote. Aber ein schwaches Ergebnis muss in der AP2 (80 %) ausgeglichen werden."],
["Operator „Nennen“","Stichworte genügen, keine Erklärung nötig."],
["Operator „Erläutern“","Beschreiben + Zusammenhänge/Ursachen erklären, gern mit Beispiel."],
["Operator „Begründen“","Entscheidung + fachliches Argument + Bezug zur Ausgangssituation."],
["Zeitregel in der Prüfung","1 Punkt ≈ 1 Minute. Blockaden überspringen und später zurückkehren."],
["Welche Themen sind seit 2025 aus der AP1 raus?","SQL-Abfragen und NoSQL (relationale DB-Grundlagen bleiben!), RAID/SAN, Struktogramm/PAP, Vererbung, Kanban/XP/SWOT, LTE/5G, ISO 2700x, Eisbergmodell, Fragetechniken, Cross-/Upselling, Suchoperatoren, Audit, Abnahmeprotokoll, Deckungsbeitrag."],
["Welche Themen sind seit 2025 neu/betont?","Projektmerkmale, SMART, KI, Sensoren, Client-Server, DaaS, Domäne, IPv4/IPv6, HDD/SSD, Datenmengen, Klassen/Sichtbarkeit, Aktivitätsdiagramm, Schreibtischtest, Corporate Identity, Schutzziele, Hash, 2FA, Härtung, Anonymisierung, Betroffenenrechte/Einwilligung, Barrierefreiheit."],
["Wie heißt der Prüfungsbereich der AP1?","„Einrichten eines IT-gestützten Arbeitsplatzes“."]
],
qs:[
{t:"sc",q:"Mit welchem Anteil fließt die AP1 in die Gesamtnote ein?",o:["10 %","20 %","25 %","50 %"],a:1,e:"AP1 = 20 %, AP2 = 80 % (verteilt auf Projekt, zwei schriftliche Bereiche und WiSo)."},
{t:"sc",q:"Welches Thema wurde mit dem Prüfungskatalog 2025 aus der AP1 gestrichen?",o:["IPv6","SQL-Abfragen","Zwei-Faktor-Authentifizierung","Amortisationsrechnung"],a:1,e:"SQL-Abfragen (und RAID) kommen nur noch in der AP2 vor – die Grundlagen relationaler Datenbanken bleiben in der AP1. IPv6, 2FA und Amortisation sind neu bzw. betont."},
{t:"sc",q:"Eine Aufgabe sagt: „Nennen Sie zwei Vorteile einer SSD.“ Was wird erwartet?",o:["Zwei Stichworte","Ein ausführlicher Vergleich mit HDD","Eine Berechnung","Eine Skizze"],a:0,e:"„Nennen“ = Stichworte. Mehr schreiben kostet Zeit und bringt keine Extrapunkte."},
{t:"mc",q:"Welche Inhalte sind seit 2025 ausdrücklich im AP1-Katalog? (mehrere)",o:["Nutzung von KI-Software am Arbeitsplatz","Struktogramme nach Nassi-Shneiderman","Einbindung von Clients in Domänen","Barrierefreie Websites"],a:[0,2,3],e:"Struktogramme wurden gestrichen; KI, Domäne und Barrierefreiheit sind neu."},
{t:"sc",q:"Eine Teilaufgabe ist mit 8 Punkten bewertet. Wie viel Zeit solltest du ungefähr investieren?",o:["2 Minuten","8 Minuten","15 Minuten","20 Minuten"],a:1,e:"Faustregel 1 Punkt ≈ 1 Minute."},
{t:"open",q:"Ein Außendienstmitarbeiter erhält ein neues Notebook. Begründen Sie, warum Sie eine SSD statt einer HDD empfehlen. (3 Punkte)",p:3,a:"Eine SSD hat keine beweglichen Teile und ist daher unempfindlich gegen Stöße/Erschütterungen beim mobilen Einsatz (1). Sie bietet deutlich kürzere Zugriffszeiten und höhere Datenraten, wodurch System und Anwendungen schneller starten (1). Zusätzlich ist sie leiser und verbraucht weniger Strom, was die Akkulaufzeit unterwegs verlängert (1)."},
{t:"open",q:"Erläutern Sie den Unterschied zwischen den Operatoren „Nennen“ und „Begründen“. (2 Punkte)",p:2,a:"Bei „Nennen“ genügt die stichwortartige Aufzählung ohne Erklärung (1). Bei „Begründen“ muss eine Entscheidung mit einem fachlichen Argument und Bezug zur Situation gestützt werden („…, weil …“) (1)."}
]
});
