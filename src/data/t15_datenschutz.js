T.push({
id:"datenschutz", title:"Datenschutz & Entsorgung", icon:"📜", area:"Sicherheit", weight:3,
summary:"DSGVO-Grundsätze, Rechtsgrundlagen, Betroffenenrechte, TOM, AV-Vertrag, Meldepflicht, DIN 66399, ElektroG.",
lesson:`
<h3>Grundbegriffe</h3>
<ul><li><b>Personenbezogene Daten</b> (Art. 4 DSGVO): alle Informationen über eine identifizierte oder identifizierbare natürliche Person – Name, Adresse, E-Mail, IP-Adresse, Personalnummer, Standortdaten, Fotos.</li>
<li><b>Besondere Kategorien</b> (Art. 9): Gesundheit, ethnische Herkunft, politische Meinung, Religion, Gewerkschaftszugehörigkeit, genetische/biometrische Daten, Sexualleben – besonders geschützt.</li>
<li><b>Verarbeitung</b>: jeder Vorgang – Erheben, Speichern, Ändern, Abfragen, Übermitteln, Löschen.</li>
<li><b>Verantwortlicher</b> (entscheidet über Zweck und Mittel) vs. <b>Auftragsverarbeiter</b> (verarbeitet im Auftrag, z. B. Cloud-Anbieter).</li>
<li><b>Datenschutz ≠ Datensicherheit</b>: Datenschutz schützt die <i>Person</i> (informationelle Selbstbestimmung); Datensicherheit schützt <i>alle Daten</i> vor Verlust/Manipulation (Mittel zum Zweck).</li>
<li><b>Pseudonymisierung</b>: Personenbezug nur mit Zusatzwissen herstellbar (bleibt personenbezogen). <b>Anonymisierung</b>: Personenbezug dauerhaft entfernt → DSGVO gilt nicht mehr.</li></ul>
<h3>Grundsätze (Art. 5 DSGVO)</h3>
<ol><li><b>Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz</b></li>
<li><b>Zweckbindung</b> – nur für festgelegte, eindeutige Zwecke</li>
<li><b>Datenminimierung</b> – nur so viel wie nötig</li>
<li><b>Richtigkeit</b> – sachlich richtig und aktuell</li>
<li><b>Speicherbegrenzung</b> – nur so lange wie nötig</li>
<li><b>Integrität und Vertraulichkeit</b> – angemessene Sicherheit</li>
<li><b>Rechenschaftspflicht</b> – Verantwortlicher muss Einhaltung nachweisen</li></ol>
<h3>Rechtsgrundlagen (Art. 6) – Verbot mit Erlaubnisvorbehalt</h3>
<p>Verarbeitung ist nur erlaubt mit: a) <b>Einwilligung</b> (freiwillig, informiert, widerrufbar), b) <b>Vertragserfüllung</b>, c) <b>rechtlicher Verpflichtung</b> (z. B. Steuerrecht), d) lebenswichtigen Interessen, e) öffentlicher Aufgabe, f) <b>berechtigtem Interesse</b> (mit Interessenabwägung). Im Beschäftigtenkontext zusätzlich § 26 BDSG.</p>
<h3>Betroffenenrechte</h3>
<table><tr><th>Artikel</th><th>Recht</th></tr>
<tr><td>Art. 13/14</td><td>Informationspflicht bei Erhebung</td></tr>
<tr><td><b>Art. 15</b></td><td><b>Auskunft</b> – welche Daten, Zweck, Empfänger, Dauer, Herkunft; Kopie der Daten</td></tr>
<tr><td><b>Art. 16</b></td><td><b>Berichtigung</b> unrichtiger Daten</td></tr>
<tr><td><b>Art. 17</b></td><td><b>Löschung</b> („Recht auf Vergessenwerden“)</td></tr>
<tr><td>Art. 18</td><td>Einschränkung der Verarbeitung</td></tr>
<tr><td>Art. 20</td><td>Datenübertragbarkeit (strukturiert, maschinenlesbar)</td></tr>
<tr><td>Art. 21</td><td>Widerspruch</td></tr>
<tr><td>Art. 22</td><td>keine ausschließlich automatisierte Entscheidung (inkl. Profiling)</td></tr>
<tr><td>Art. 7 Abs. 3</td><td>Widerruf der Einwilligung jederzeit</td></tr>
<tr><td>Art. 77</td><td>Beschwerde bei der Aufsichtsbehörde</td></tr></table>
<p>Frist zur Beantwortung: <b>unverzüglich, spätestens innerhalb eines Monats</b> (verlängerbar um 2 Monate). Auskunft i. d. R. kostenlos. Löschung kann durch gesetzliche Aufbewahrungspflichten eingeschränkt sein (dann sperren/einschränken).</p>
<h3>Technische und organisatorische Maßnahmen (Art. 32)</h3>
<p>Der Verantwortliche muss ein dem Risiko angemessenes Schutzniveau sicherstellen – unter Berücksichtigung von Stand der Technik, Kosten, Art/Umfang der Verarbeitung und Risiko. Genannt werden u. a.: <b>Pseudonymisierung und Verschlüsselung</b>; Sicherstellung von <b>Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit</b>; rasche <b>Wiederherstellbarkeit</b> nach Zwischenfällen; Verfahren zur <b>regelmäßigen Überprüfung</b> der Wirksamkeit.</p>
<table><tr><th>Kontrollziel (klassisch, BDSG alt – oft noch abgefragt)</th><th>Beispiel</th></tr>
<tr><td>Zutrittskontrolle (Räume)</td><td>Chipkarte, Schließanlage, Serverraum abschließen</td></tr>
<tr><td>Zugangskontrolle (Systeme)</td><td>Passwort, MFA, Bildschirmsperre</td></tr>
<tr><td>Zugriffskontrolle (Daten)</td><td>Berechtigungskonzept, Need-to-know, Rollen</td></tr>
<tr><td>Weitergabekontrolle</td><td>Verschlüsselung (TLS, VPN), verschlüsselte Datenträger</td></tr>
<tr><td>Eingabekontrolle</td><td>Protokollierung, wer wann was geändert hat</td></tr>
<tr><td>Auftragskontrolle</td><td>AV-Vertrag, Kontrolle des Dienstleisters</td></tr>
<tr><td>Verfügbarkeitskontrolle</td><td>Backup, USV, Virenschutz, Brandschutz</td></tr>
<tr><td>Trennungsgebot</td><td>getrennte Verarbeitung für verschiedene Zwecke/Mandanten</td></tr></table>
<h3>Weitere Pflichten</h3>
<ul><li><b>Datenschutzbeauftragter</b> (§ 38 BDSG): Pflicht, wenn i. d. R. mindestens <b>20 Personen</b> ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind (oder bei Kerntätigkeit mit sensiblen Daten). Berät, überwacht, schult; weisungsfrei, Kündigungsschutz.</li>
<li><b>Verzeichnis von Verarbeitungstätigkeiten</b> (Art. 30).</li>
<li><b>Auftragsverarbeitungsvertrag (AVV)</b> (Art. 28) mit Dienstleistern (Cloud, Fernwartung, Aktenvernichter).</li>
<li><b>Datenschutz-Folgenabschätzung</b> (Art. 35) bei hohem Risiko (z. B. Videoüberwachung, umfangreiche Gesundheitsdaten).</li>
<li><b>Meldepflicht</b> (Art. 33): Datenpanne an die Aufsichtsbehörde <b>binnen 72 Stunden</b>; bei hohem Risiko auch Betroffene informieren (Art. 34).</li>
<li><b>Privacy by Design / by Default</b> (Art. 25): Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen.</li>
<li><b>Drittlandübermittlung</b> (außerhalb EU/EWR) nur mit Angemessenheitsbeschluss (z. B. EU-US Data Privacy Framework), Standardvertragsklauseln o. Ä.</li>
<li><b>Bußgelder</b>: bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes (höherer Wert).</li></ul>
<h3>Sichere Datenträgervernichtung – DIN 66399</h3>
<p>Formatieren oder „Zurücksetzen“ reicht nicht – Daten sind wiederherstellbar. Möglichkeiten: zertifiziertes <b>Überschreiben/Löschsoftware</b> (HDD), <b>Secure Erase</b>/Crypto-Erase (SSD), <b>Degaussen</b> (Entmagnetisieren, nur magnetische Medien), <b>physische Zerstörung</b> (Schreddern). Externe Dienstleister: AV-Vertrag + Vernichtungsprotokoll/Zertifikat.</p>
<table><tr><th>Schutzklasse</th><th>Schutzbedarf</th><th>Beispiel</th></tr>
<tr><td>1</td><td>normal (interne Daten)</td><td>Rundschreiben, Werbung</td></tr>
<tr><td>2</td><td>hoch (vertrauliche Daten)</td><td>personenbezogene Daten, Kundendaten, Personalakten</td></tr>
<tr><td>3</td><td>sehr hoch (geheime Daten)</td><td>Patientendaten, Forschung, Berufsgeheimnisträger</td></tr></table>
<p>7 <b>Sicherheitsstufen</b> (1–7): je höher, desto kleiner die Partikel. Personenbezogene Daten: mind. Stufe 3, besonders schützenswerte: Stufe 4+. Materialklassen: <b>P</b> Papier, <b>F</b> Film/Mikrofilm, <b>O</b> optisch (CD/DVD), <b>T</b> magnetisch (Disketten, Magnetkarten, Bänder), <b>H</b> Festplatten (magnetisch), <b>E</b> elektronische Datenträger (SSD, USB-Stick, Speicherkarten). Bezeichnung z. B. <b>H-4</b>, <b>E-4</b>, <b>P-4</b>.</p>
<h3>Entsorgung: ElektroG & Nachhaltigkeit</h3>
<p>Das <b>Elektro- und Elektronikgerätegesetz (ElektroG)</b> setzt die EU-WEEE-Richtlinie um: Altgeräte dürfen nicht in den Hausmüll (Symbol: durchgestrichene Mülltonne), Hersteller sind zur Rücknahme verpflichtet, Händler mit ≥ 400 m² Elektro-Verkaufsfläche (Lebensmittelhandel ≥ 800 m² Gesamtfläche, die Elektro anbieten) müssen Kleingeräte zurücknehmen. Ziel: Schadstoffe (Blei, Quecksilber) fachgerecht entsorgen, Rohstoffe (Gold, Kupfer, seltene Erden) zurückgewinnen. Batterien: <b>BattG</b>. <b>Green IT</b>: energieeffiziente Geräte, lange Nutzung, Refurbished, Virtualisierung, Recycling.</p>`,
cards:[
["Personenbezogene Daten","Alle Infos über eine identifizierte oder identifizierbare natürliche Person (Name, E-Mail, IP, Foto …)."],
["Datenschutz vs. Datensicherheit","Datenschutz schützt Personen/Persönlichkeitsrechte. Datensicherheit schützt Daten technisch vor Verlust/Manipulation."],
["Grundsätze Art. 5 DSGVO","Rechtmäßigkeit/Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität & Vertraulichkeit, Rechenschaftspflicht."],
["Datenminimierung","Nur die Daten verarbeiten, die für den Zweck wirklich nötig sind."],
["Verbot mit Erlaubnisvorbehalt","Verarbeitung ist verboten, außer eine Rechtsgrundlage (Art. 6) erlaubt sie."],
["Rechtsgrundlagen Art. 6","Einwilligung, Vertrag, rechtliche Pflicht, lebenswichtige Interessen, öffentliche Aufgabe, berechtigtes Interesse."],
["Art. 15 DSGVO","Recht auf Auskunft."],
["Art. 16 DSGVO","Recht auf Berichtigung."],
["Art. 17 DSGVO","Recht auf Löschung („Vergessenwerden“)."],
["Art. 20 DSGVO","Recht auf Datenübertragbarkeit."],
["Frist für Antwort auf Betroffenenanfragen","Unverzüglich, spätestens 1 Monat (Verlängerung um 2 Monate möglich)."],
["Art. 32 DSGVO","Sicherheit der Verarbeitung: geeignete technische und organisatorische Maßnahmen (TOM)."],
["Zutritts- vs. Zugangs- vs. Zugriffskontrolle","Zutritt: Räume. Zugang: Systeme/Anmeldung. Zugriff: Daten/Berechtigungen."],
["Meldefrist Datenpanne","72 Stunden an die Aufsichtsbehörde (Art. 33)."],
["Pflicht zum Datenschutzbeauftragten","Ab i. d. R. 20 Personen, die ständig automatisiert personenbezogene Daten verarbeiten (§ 38 BDSG)."],
["AV-Vertrag","Vertrag mit Auftragsverarbeitern (z. B. Cloud) nach Art. 28 DSGVO."],
["Pseudonymisierung vs. Anonymisierung","Pseudonym: Personenbezug mit Zusatzwissen wiederherstellbar. Anonym: Personenbezug dauerhaft entfernt."],
["Bußgeldrahmen DSGVO","Bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes."],
["DIN 66399 – Schutzklassen","1 normal, 2 hoch, 3 sehr hoch."],
["DIN 66399 – Materialklasse H und E","H: magnetische Festplatten. E: elektronische Datenträger (SSD, USB-Stick)."],
["Mindest-Sicherheitsstufe personenbezogene Daten","Stufe 3 (sensible personenbezogene Daten: 4)."],
["Warum reicht Formatieren nicht?","Daten bleiben physisch erhalten und lassen sich mit Tools wiederherstellen."],
["ElektroG","Regelt Rücknahme und umweltgerechte Entsorgung von Elektroaltgeräten (WEEE); nicht in den Hausmüll."],
["Privacy by Default","Datenschutzfreundliche Voreinstellungen – standardmäßig nur nötige Daten."]
],
qs:[
{t:"sc",q:"Welche Information ist KEIN personenbezogenes Datum?",o:["Private E-Mail-Adresse","IP-Adresse eines Kunden","Durchschnittsumsatz aller Filialen","Personalnummer"],a:2,e:"Aggregierte Unternehmenszahl ohne Personenbezug."},
{t:"sc",q:"Ein Onlineshop fragt bei der Bestellung nach dem Geburtsdatum, obwohl es nicht benötigt wird. Welcher Grundsatz ist verletzt?",o:["Richtigkeit","Datenminimierung","Speicherbegrenzung","Transparenz"],a:1,e:""},
{t:"sc",q:"Ein Kunde will wissen, welche Daten über ihn gespeichert sind. Welcher Artikel?",o:["Art. 15","Art. 16","Art. 17","Art. 32"],a:0,e:"Auskunftsrecht."},
{t:"sc",q:"Ein ehemaliger Kunde verlangt, dass seine Daten gelöscht werden. Welches Recht?",o:["Art. 15 Auskunft","Art. 16 Berichtigung","Art. 17 Löschung","Art. 20 Übertragbarkeit"],a:2,e:""},
{t:"sc",q:"Innerhalb welcher Frist muss eine Datenpanne der Aufsichtsbehörde gemeldet werden?",o:["24 Stunden","72 Stunden","1 Woche","1 Monat"],a:1,e:"Art. 33."},
{t:"sc",q:"Ein Unternehmen nutzt einen externen Cloud-Dienst für Personaldaten. Was ist zwingend abzuschließen?",o:["Leasingvertrag","Auftragsverarbeitungsvertrag","Werkvertrag","SLA"],a:1,e:"Art. 28 DSGVO."},
{t:"sc",q:"Eine Chipkarte für die Tür zum Serverraum ist eine Maßnahme der …",o:["Zugangskontrolle","Zutrittskontrolle","Zugriffskontrolle","Eingabekontrolle"],a:1,e:"Räume = Zutritt."},
{t:"sc",q:"Ein Berechtigungskonzept, das nur der Personalabteilung Lesezugriff auf Gehaltsdaten gibt, ist …",o:["Zutrittskontrolle","Zugangskontrolle","Zugriffskontrolle","Verfügbarkeitskontrolle"],a:2,e:""},
{t:"sc",q:"Welche Materialklasse nach DIN 66399 gilt für SSDs und USB-Sticks?",o:["H","E","O","T"],a:1,e:"E = elektronische Datenträger."},
{t:"sc",q:"Festplatten mit Personaldaten sollen vernichtet werden. Welche Schutzklasse ist angemessen?",o:["Schutzklasse 1","Schutzklasse 2","Keine – Formatieren reicht","Schutzklasse 0"],a:1,e:"Personenbezogene/vertrauliche Daten = hoher Schutzbedarf."},
{t:"sc",q:"Wie müssen alte Monitore entsorgt werden?",o:["Restmüll","Über zertifizierte Rücknahme/Wertstoffhof nach ElektroG","Sperrmüll","Gelber Sack"],a:1,e:""},
{t:"mc",q:"Welche Maßnahmen nennt Art. 32 DSGVO ausdrücklich? (mehrere)",o:["Pseudonymisierung und Verschlüsselung","Rasche Wiederherstellbarkeit nach Zwischenfällen","Regelmäßige Überprüfung der Wirksamkeit","Jährliche Neuinstallation aller PCs"],a:[0,1,2],e:""},
{t:"sc",q:"Ab wie vielen Personen, die ständig automatisiert personenbezogene Daten verarbeiten, ist in Deutschland i. d. R. ein Datenschutzbeauftragter Pflicht?",o:["10","20","50","250"],a:1,e:"§ 38 BDSG."},
{t:"sc",q:"Was unterscheidet Anonymisierung von Pseudonymisierung?",o:["Nichts","Bei Anonymisierung ist der Personenbezug dauerhaft entfernt","Pseudonymisierte Daten fallen nicht unter die DSGVO","Anonymisierung ist umkehrbar"],a:1,e:""},
{t:"open",q:"Ein Mitarbeiter fragt, warum das bloße Formatieren alter Festplatten vor dem Verkauf nicht ausreicht. Erklären Sie und nennen Sie zwei geeignete Verfahren. (4 Punkte)",p:4,a:"Beim Formatieren werden nur die Verwaltungsstrukturen des Dateisystems neu angelegt, die Daten bleiben physisch erhalten und können mit Wiederherstellungssoftware rekonstruiert werden (2). Verfahren (je 1): mehrfaches Überschreiben mit zertifizierter Löschsoftware (HDD); Secure Erase/Crypto-Erase (SSD); Degaussing (magnetisch); physische Vernichtung nach DIN 66399 (z. B. H-4/E-4) durch zertifizierten Dienstleister mit Protokoll."},
{t:"open",q:"Nennen Sie vier Grundsätze der Datenverarbeitung nach Art. 5 DSGVO. (4 Punkte)",p:4,a:"Je 1: Rechtmäßigkeit, Treu und Glauben, Transparenz; Zweckbindung; Datenminimierung; Richtigkeit; Speicherbegrenzung; Integrität und Vertraulichkeit; Rechenschaftspflicht."},
{t:"open",q:"Ordnen Sie folgende Maßnahmen den Kategorien technisch bzw. organisatorisch zu: Festplattenverschlüsselung, Datenschutzschulung, Berechtigungskonzept, automatische Bildschirmsperre. (4 Punkte)",p:4,a:"Festplattenverschlüsselung – technisch (1); Datenschutzschulung – organisatorisch (1); Berechtigungskonzept – organisatorisch (als Regelwerk; die Umsetzung über Rechte ist technisch) (1); automatische Bildschirmsperre – technisch (1)."}
]
});
