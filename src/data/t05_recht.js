T.push({
id:"recht", title:"Verträge, Lizenzen & Abnahme", icon:"⚖️", area:"Planung", weight:2,
summary:"Vertragsarten, SLA, Mängel & Verzug, Lizenzmodelle, Abnahme und Dokumentation.",
lesson:`
<h3>Vertragsarten (BGB)</h3>
<table><tr><th>Vertrag</th><th>Geschuldet wird</th><th>IT-Beispiel</th></tr>
<tr><td>Kaufvertrag (§ 433)</td><td>Übergabe & Eigentum an einer Sache gegen Kaufpreis</td><td>Kauf von 20 Monitoren</td></tr>
<tr><td>Werkvertrag (§ 631)</td><td>ein <b>Erfolg</b> (fertiges Werk), Abnahme nötig</td><td>Individualsoftware erstellen, Netzwerk installieren</td></tr>
<tr><td>Dienstvertrag (§ 611)</td><td>eine <b>Tätigkeit</b>, kein Erfolg</td><td>Beratung, Schulung, Support nach Stunden</td></tr>
<tr><td>Mietvertrag (§ 535)</td><td>Gebrauchsüberlassung gegen Miete</td><td>Server für 6 Monate mieten</td></tr>
<tr><td>Leasingvertrag</td><td>Nutzung gegen Raten, Sonderform der Miete</td><td>Notebook-Flotte leasen</td></tr>
<tr><td>Lizenzvertrag</td><td>Nutzungsrecht an Software</td><td>Microsoft-365-Abo</td></tr>
<tr><td>Werklieferungsvertrag (§ 650)</td><td>Herstellung beweglicher Sachen (Kaufrecht gilt)</td><td>speziell konfigurierte PCs bauen</td></tr></table>
<p><b>Zustandekommen:</b> Antrag + Annahme (zwei übereinstimmende Willenserklärungen). Ein Angebot an die Allgemeinheit (Onlineshop, Katalog) ist nur eine Aufforderung zur Abgabe eines Angebots.</p>
<h3>SLA – Service Level Agreement</h3>
<p>Vereinbarung über messbare Leistungsqualität: <b>Verfügbarkeit</b> (z. B. 99,9 %), <b>Reaktionszeit</b>, <b>Wiederherstellungszeit</b>, Servicezeiten (z. B. Mo–Fr 8–18 Uhr), Eskalation, Berichte, Vertragsstrafen.</p>
<div class="merke">Verfügbarkeit 99,9 % pro Jahr ⇒ erlaubte Ausfallzeit = 0,1 % × 8.760 h = <b>8,76 Stunden</b>. 99 % ⇒ 87,6 h.</div>
<h3>Vertragsstörungen</h3>
<ul><li><b>Mangelhafte Lieferung</b> (Schlechtleistung): Sachmangel (Ware defekt, falsche Beschaffenheit), Falschlieferung, Minderlieferung (zu wenig), Montagemangel, Rechtsmangel.</li>
<li><b>Rechte des Käufers</b>: zuerst <b>Nacherfüllung</b> (Nachbesserung oder Ersatzlieferung), danach Rücktritt, Minderung, Schadensersatz.</li>
<li>Gewährleistung: gesetzlich 2 Jahre. <b>Garantie</b>: freiwillige Zusage des Herstellers/Händlers.</li>
<li>Mängelarten nach Erkennbarkeit: offen, versteckt, arglistig verschwiegen. Beim zweiseitigen Handelskauf: unverzügliche Prüf- und Rügepflicht (§ 377 HGB).</li>
<li><b>Lieferungsverzug</b>: Lieferung fällig, schuldhaft nicht erfolgt (ggf. Mahnung nötig, entbehrlich bei kalendermäßig bestimmtem Termin). <b>Zahlungsverzug</b>: spätestens 30 Tage nach Fälligkeit und Rechnungszugang.</li>
<li><b>Konventionalstrafe</b>: vereinbarte Vertragsstrafe bei Nichteinhaltung (z. B. pro Tag Verzug).</li></ul>
<h3>Urheberrecht & Lizenzen</h3>
<p>Software ist durch das <b>Urheberrechtsgesetz (UrhG)</b> geschützt; der Nutzer erwirbt nur ein Nutzungsrecht (Lizenz).</p>
<table><tr><th>Modell</th><th>Merkmal</th></tr>
<tr><td>EULA</td><td>Endbenutzer-Lizenzvertrag, regelt Nutzungsbedingungen</td></tr>
<tr><td>OEM</td><td>an Hardware gebunden, günstig, i. d. R. nicht übertragbar</td></tr>
<tr><td>Einzelplatz / Volumen</td><td>ein Gerät bzw. viele Lizenzen mit Mengenrabatt</td></tr>
<tr><td>Named User / Concurrent User</td><td>pro benannter Person / pro gleichzeitig angemeldeter Nutzer</td></tr>
<tr><td>Subscription (Abo)</td><td>zeitlich begrenzt, laufende Updates, z. B. SaaS</td></tr>
<tr><td>Pay-per-Use</td><td>Abrechnung nach tatsächlicher Nutzung</td></tr>
<tr><td>Freeware / Shareware</td><td>kostenlos (Quellcode meist geschlossen) / kostenlos testen, dann zahlen</td></tr>
<tr><td>Open Source – GPL</td><td><b>Copyleft</b>: Quellcode offen, Änderungen müssen unter GPL weitergegeben werden</td></tr>
<tr><td>Open Source – MIT/BSD/Apache</td><td>permissiv: auch in proprietärer Software nutzbar, Lizenzhinweis beibehalten</td></tr></table>
<p><b>Proprietär</b> = Quellcode geschlossen, Hersteller bestimmt Nutzung. <b>Open Source</b> = Quellcode einsehbar, ändern & weitergeben erlaubt (Lizenzbedingungen beachten).</p>
<h3>Leistungserbringung & Abnahme</h3>
<ul><li><b>Rollout</b>: Vorbereitung (Scope, Inventar, Images), Kunden-Onboarding, Formalitäten, Umsetzung, Nachbetreuung. Vor Ort vs. remote.</li>
<li><b>Abnahmeprotokoll</b>: Gegenstand der Abnahme, beteiligte Personen, Ort, Datum/Uhrzeit, geprüfte Funktionen, festgestellte Mängel und Fristen, Unterschriften.</li>
<li><b>Dokumentation</b>: Benutzerhandbuch, Administrations-/Netzwerkdokumentation, Programmdokumentation/Quellcode, Schnittstellen, Testprotokolle, Konfigurationen.</li>
<li>Stilllegung von Altsystemen: Daten migrieren, gesetzliche <b>Aufbewahrungsfristen</b> beachten (Handelsbriefe 6 Jahre, Buchungsbelege/Rechnungen 8 Jahre seit 2025, Bücher/Jahresabschlüsse 10 Jahre), Datenträger sicher löschen.</li></ul>`,
cards:[
["Werkvertrag vs. Dienstvertrag","Werkvertrag: Erfolg geschuldet, Abnahme. Dienstvertrag: nur Tätigkeit geschuldet."],
["Beispiel Werkvertrag in der IT","Erstellung einer Individualsoftware oder Installation eines funktionierenden Netzwerks."],
["Beispiel Dienstvertrag in der IT","Schulung, Beratung, Support auf Stundenbasis."],
["Inhalte eines SLA","Verfügbarkeit, Reaktionszeit, Wiederherstellungszeit, Servicezeiten, Eskalation, Reporting, Vertragsstrafen."],
["Ausfallzeit bei 99,9 % Verfügbarkeit/Jahr","8,76 Stunden (0,1 % von 8.760 h)."],
["Erstes Recht des Käufers bei Mangel","Nacherfüllung: Nachbesserung oder Ersatzlieferung."],
["Gewährleistung vs. Garantie","Gewährleistung: gesetzlich, 2 Jahre, Verkäufer haftet. Garantie: freiwillige Zusage, Bedingungen frei gestaltbar."],
["Mangelarten (Art)","Sachmangel, Falschlieferung, Minderlieferung, Montagemangel, Rechtsmangel."],
["OEM-Lizenz","An Hardware gebunden, günstig, meist nicht übertragbar."],
["GPL","Copyleft-Open-Source-Lizenz: abgeleitete Werke müssen ebenfalls unter GPL mit Quellcode weitergegeben werden."],
["Named User vs. Concurrent User","Named: pro benannter Person. Concurrent: pro gleichzeitig aktivem Nutzer."],
["EULA","End User License Agreement – Lizenzbedingungen für den Endnutzer."],
["Inhalt Abnahmeprotokoll","Gegenstand, Beteiligte, Ort, Datum/Uhrzeit, geprüfte Funktionen, Mängel, Unterschriften."],
["Konventionalstrafe","Vertraglich vereinbarte Strafzahlung bei Pflichtverletzung, z. B. Verzug."],
["Wie kommt ein Vertrag zustande?","Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme."]
],
qs:[
{t:"sc",q:"Ein Systemhaus verpflichtet sich, ein funktionsfähiges WLAN im Gebäude zu installieren. Welcher Vertrag liegt vor?",o:["Dienstvertrag","Werkvertrag","Mietvertrag","Kaufvertrag"],a:1,e:"Erfolg (funktionierendes WLAN) ist geschuldet."},
{t:"sc",q:"Eine Schulung über 8 Stunden zu Microsoft 365 wird gebucht. Vertragsart?",o:["Werkvertrag","Dienstvertrag","Leasingvertrag","Lizenzvertrag"],a:1,e:"Geschuldet ist die Tätigkeit, nicht ein Lernerfolg."},
{t:"num",q:"Ein SLA garantiert 99,5 % Verfügbarkeit pro Jahr (365 Tage). Wie viele Stunden Ausfall sind maximal erlaubt?",a:43.8,tol:0.05,unit:"h",e:"0,5 % × 8.760 h = 43,8 h."},
{t:"sc",q:"Welches Recht muss der Käufer bei einem Mangel in der Regel zuerst geltend machen?",o:["Rücktritt","Minderung","Nacherfüllung","Schadensersatz"],a:2,e:"Vorrang der Nacherfüllung."},
{t:"sc",q:"Statt 20 Monitoren werden 18 geliefert. Welcher Mangel?",o:["Falschlieferung","Minderlieferung","Rechtsmangel","Montagemangel"],a:1,e:"Zu geringe Menge = Minderlieferung."},
{t:"sc",q:"Welche Lizenz verlangt, dass Änderungen am Code wieder unter derselben Lizenz veröffentlicht werden?",o:["MIT","GPL","Freeware","OEM"],a:1,e:"GPL = Copyleft."},
{t:"sc",q:"Eine Windows-Lizenz wird mit einem neuen PC ausgeliefert und ist an diesen gebunden. Das ist eine …",o:["Volumenlizenz","OEM-Lizenz","Concurrent-User-Lizenz","Open-Source-Lizenz"],a:1,e:"OEM = Original Equipment Manufacturer."},
{t:"mc",q:"Welche Angaben gehören in ein Abnahmeprotokoll? (mehrere)",o:["Gegenstand der Abnahme","Beteiligte Personen","Datum und Ort","Gehalt des Technikers"],a:[0,1,2],e:"Dazu kommen Mängel und Unterschriften."},
{t:"sc",q:"Wie lange beträgt die gesetzliche Gewährleistungsfrist bei neuen Waren?",o:["6 Monate","1 Jahr","2 Jahre","5 Jahre"],a:2,e:"2 Jahre (§ 438 BGB)."},
{t:"open",q:"Erläutern Sie den Unterschied zwischen Werk- und Dienstvertrag an je einem IT-Beispiel. (4 Punkte)",p:4,a:"Beim Werkvertrag schuldet der Auftragnehmer einen konkreten Erfolg, der abgenommen wird (1), z. B. die Programmierung einer lauffähigen Webanwendung (1). Beim Dienstvertrag schuldet er nur die Tätigkeit, nicht den Erfolg (1), z. B. IT-Beratung oder Support nach Stunden (1)."},
{t:"open",q:"Nennen Sie vier Inhalte, die in einem SLA für den Support Ihrer Arbeitsplätze geregelt sein sollten. (4 Punkte)",p:4,a:"Je 1: Verfügbarkeit in %; Reaktionszeit; Lösungs-/Wiederherstellungszeit; Servicezeiten; Ansprechpartner/Eskalationswege; Prioritätsstufen; Reporting/Messung; Vertragsstrafen bei Nichteinhaltung; Kosten."}
]
});
