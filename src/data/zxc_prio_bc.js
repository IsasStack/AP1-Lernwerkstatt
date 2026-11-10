/* ===== Ergänzungen Priorität B und C ===== */

/* ---------- B: Authentifizierung vs. Autorisierung, Backup-Generationen, Archivierung ---------- */
ext("sicherheit", {
lesson: `
<h3>Identifizieren, authentifizieren, autorisieren</h3>
<table><tr><th>Schritt</th><th>Frage</th><th>Beispiel</th></tr>
<tr><td><b>Identifikation</b></td><td>Wer behauptest du zu sein?</td><td>Benutzername eingeben</td></tr>
<tr><td><b>Authentifizierung</b></td><td>Bist du es wirklich?</td><td>Passwort, Smartcard, Fingerabdruck prüfen</td></tr>
<tr><td><b>Autorisierung</b></td><td>Was darfst du?</td><td>Rechte auf Ordner, Programme, Funktionen zuweisen</td></tr></table>
<p>Erst wird die Identität bewiesen, danach werden Rechte vergeben. Ein angemeldeter Benutzer ist also authentifiziert – ob er die Gehaltsliste öffnen darf, entscheidet die Autorisierung (Berechtigungskonzept, Least Privilege).</p>
<p><b>Biometrie</b> (Fingerabdruck, Gesicht, Iris) gehört zum Faktor <i>Inhärenz</i>. Vorteil: bequem, nicht vergessbar. Nachteil: nicht änderbar, wenn das Merkmal einmal kompromittiert ist, und datenschutzrechtlich besonders schützenswert.</p>
<h3>Backup-Generationen und Archivierung</h3>
<p>Beim <b>Generationenprinzip</b> (Großvater-Vater-Sohn) werden mehrere Sicherungsstände aufbewahrt: tägliche Sicherungen (Sohn), wöchentliche (Vater) und monatliche (Großvater). So kann man auch auf einen Stand von vor mehreren Wochen zurückgehen – wichtig, wenn ein Fehler oder Schadsoftware erst spät bemerkt wird.</p>
<table><tr><th></th><th>Backup</th><th>Archivierung</th></tr>
<tr><td>Zweck</td><td>Wiederherstellung nach Verlust oder Defekt</td><td>langfristige, unveränderbare Aufbewahrung</td></tr>
<tr><td>Daten</td><td>Kopie der aktuellen Arbeitsdaten</td><td>abgeschlossene Vorgänge, die nicht mehr geändert werden</td></tr>
<tr><td>Dauer</td><td>Tage bis Monate, wird überschrieben</td><td>Jahre, nach gesetzlichen Aufbewahrungsfristen</td></tr></table>`,
cards: [
["Authentifizierung vs. Autorisierung","Authentifizierung: Identität wird geprüft (Wer bist du?). Autorisierung: Rechte werden zugewiesen (Was darfst du?)."],
["Reihenfolge beim Zugriff","Identifikation → Authentifizierung → Autorisierung."],
["Biometrie – Vor- und Nachteil","+ bequem, nicht vergessbar oder weitergebbar. − nicht änderbar, wenn kompromittiert; besonders schützenswerte Daten."],
["Generationenprinzip","Großvater-Vater-Sohn: tägliche, wöchentliche und monatliche Sicherungen werden parallel aufbewahrt."],
["Wozu mehrere Backup-Generationen?","Um auf ältere Stände zurückgehen zu können, wenn ein Fehler oder Schadsoftware erst spät bemerkt wird."],
["Backup vs. Archivierung","Backup: Kopie zur Wiederherstellung, wird überschrieben. Archivierung: langfristige, unveränderbare Aufbewahrung abgeschlossener Daten."]
],
qs: [
{t:"open",p:3,q:"Eine Mitarbeiterin meldet sich mit Benutzername und Passwort an und darf danach den Ordner „Personal“ nur lesen. Ordnen Sie die Begriffe Authentifizierung und Autorisierung zu und erläutern Sie den Unterschied.",a:"Authentifizierung: die Prüfung von Benutzername und Passwort – die Identität wird nachgewiesen (1). Autorisierung: die Zuweisung des Leserechts auf den Ordner – es wird festgelegt, was die Person darf (1). Die Authentifizierung kommt immer zuerst; ohne geprüfte Identität können keine Rechte vergeben werden (1)."},
{t:"open",short:true,p:2,q:"Wie heißt der Vorgang, bei dem einem angemeldeten Benutzer Rechte auf Ressourcen zugewiesen werden?",a:"Autorisierung",keys:["Autorisierung","Autorisation","Berechtigung","Authorization"],not:["Authentifizierung","Authentisierung"]},
{t:"open",p:3,q:"Ein Unternehmen sichert täglich und überschreibt dabei immer die Sicherung vom Vortag. Nach zehn Tagen wird bemerkt, dass eine Datei seit einer Woche beschädigt ist. Erläutern Sie das Problem und schlagen Sie eine Lösung vor.",a:"Es gibt nur einen einzigen Sicherungsstand – und der enthält die beschädigte Datei bereits (1). Ein unversehrter älterer Stand existiert nicht mehr (1). Lösung: Generationenprinzip (Großvater-Vater-Sohn) mit täglichen, wöchentlichen und monatlichen Sicherungen, die getrennt aufbewahrt werden (1)."},
{t:"open",p:2,q:"Erläutern Sie den Unterschied zwischen Backup und Archivierung.",a:"Ein Backup ist eine Kopie der aktuellen Daten für die Wiederherstellung nach Verlust; es wird regelmäßig überschrieben (1). Die Archivierung bewahrt abgeschlossene Daten langfristig und unveränderbar auf, z. B. Rechnungen für die gesetzliche Aufbewahrungsfrist (1)."}
]});

/* ---------- B: TCP/IP-Modell ---------- */
ext("netzwerk", {
lesson: `
<h3>TCP/IP-Modell im Vergleich zum OSI-Modell</h3>
<p>In der Praxis wird meist das TCP/IP-Modell mit vier Schichten verwendet. Es fasst mehrere OSI-Schichten zusammen.</p>
<table><tr><th>TCP/IP-Schicht</th><th>entspricht OSI</th><th>Aufgabe</th><th>Beispiele</th></tr>
<tr><td>4 Anwendung</td><td>5–7</td><td>Dienste für Programme</td><td>HTTP/HTTPS, DNS, DHCP, SMTP, SSH</td></tr>
<tr><td>3 Transport</td><td>4</td><td>Ende-zu-Ende-Verbindung, Ports</td><td>TCP, UDP</td></tr>
<tr><td>2 Internet</td><td>3</td><td>Adressierung und Wegewahl zwischen Netzen</td><td>IPv4, IPv6, ICMP</td></tr>
<tr><td>1 Netzzugang</td><td>1–2</td><td>Übertragung im lokalen Netz</td><td>Ethernet, WLAN</td></tr></table>
<div class="merke"><b>Merke:</b> Adressen je Schicht: Netzzugang = MAC-Adresse, Internet = IP-Adresse, Transport = Portnummer.</div>`,
cards: [
["Schichten des TCP/IP-Modells","Netzzugang, Internet, Transport, Anwendung (4 Schichten)."],
["Welche OSI-Schichten fasst die TCP/IP-Anwendungsschicht zusammen?","Die Schichten 5 bis 7 (Sitzung, Darstellung, Anwendung)."],
["Adressen je Schicht","Netzzugang: MAC-Adresse. Internet: IP-Adresse. Transport: Portnummer."],
["Auf welcher TCP/IP-Schicht arbeitet IP?","Auf der Internetschicht (entspricht OSI-Schicht 3)."]
],
qs: [
{t:"open",short:true,p:2,q:"Wie viele Schichten hat das TCP/IP-Modell?",a:"4",keys:["4","vier"]},
{t:"open",p:4,q:"Ordnen Sie Ethernet, IP, TCP und HTTPS jeweils der passenden Schicht des TCP/IP-Modells zu.",a:"Ethernet – Netzzugangsschicht (1). IP – Internetschicht (1). TCP – Transportschicht (1). HTTPS – Anwendungsschicht (1)."},
{t:"open",p:3,q:"Welche Adresse wird auf der Netzzugangs-, der Internet- und der Transportschicht jeweils verwendet?",a:"Netzzugang: MAC-Adresse (1). Internet: IP-Adresse (1). Transport: Portnummer (1)."}
]});

/* ---------- B: Monitor-Kenngrößen ---------- */
ext("hardware", {
lesson: `
<h3>Monitor-Kenngrößen</h3>
<table><tr><th>Angabe</th><th>Bedeutung</th><th>worauf achten?</th></tr>
<tr><td>Diagonale (Zoll)</td><td>Bildgröße, 1 Zoll = 2,54 cm</td><td>Büro 24–27″</td></tr>
<tr><td>Auflösung</td><td>Pixel in Breite × Höhe</td><td>Full HD 1920 × 1080, WQHD 2560 × 1440, 4K UHD 3840 × 2160</td></tr>
<tr><td>Pixeldichte (ppi)</td><td>Pixel pro Zoll – je höher, desto schärfer</td><td>ergibt sich aus Auflösung und Diagonale</td></tr>
<tr><td>Bildwiederholrate (Hz)</td><td>Bilder pro Sekunde</td><td>60 Hz reichen fürs Büro</td></tr>
<tr><td>Reaktionszeit (ms)</td><td>Zeit für einen Farbwechsel</td><td>wichtig bei schnellen Bewegungen</td></tr>
<tr><td>Helligkeit (cd/m²) und Kontrast</td><td>Leuchtstärke und Verhältnis von Hell zu Dunkel</td><td>helle Räume brauchen mehr Helligkeit</td></tr>
<tr><td>Paneltyp</td><td>IPS: farbtreu, blickwinkelstabil · VA: hoher Kontrast · TN: schnell und günstig, schwache Farben · OLED: perfektes Schwarz, teuer</td><td>Grafik → IPS</td></tr></table>`,
cards: [
["Pixeldichte (ppi)","Pixel pro Zoll – je höher, desto schärfer das Bild. Ergibt sich aus Auflösung und Diagonale."],
["Bildwiederholrate","Anzahl der Bilder pro Sekunde in Hertz (Hz); 60 Hz reichen für Büroarbeit."],
["WQHD-Auflösung","2560 × 1440 Pixel."],
["Full-HD-Auflösung","1920 × 1080 Pixel."],
["Paneltypen im Vergleich","IPS: farbtreu, blickwinkelstabil. VA: hoher Kontrast. TN: schnell, günstig, schwache Farben. OLED: perfektes Schwarz, teuer."],
["Einheit der Monitorhelligkeit","Candela pro Quadratmeter (cd/m²)."]
],
qs: [
{t:"open",short:true,p:2,q:"In welcher Einheit wird die Bildwiederholrate eines Monitors angegeben?",a:"Hertz (Hz)",keys:["Hertz","Hz"]},
{t:"open",p:3,q:"Zwei 27-Zoll-Monitore stehen zur Wahl: Modell A mit Full HD und TN-Panel, Modell B mit WQHD und IPS-Panel. Begründen Sie Ihre Empfehlung für einen Arbeitsplatz in der Bildbearbeitung.",a:"Empfehlung: Modell B (1). Das IPS-Panel stellt Farben genauer und blickwinkelstabil dar – entscheidend für farbverbindliches Arbeiten (1). WQHD bietet auf 27 Zoll eine höhere Pixeldichte, also ein schärferes Bild und mehr Arbeitsfläche als Full HD (1)."},
{t:"num",q:"Ein 4K-UHD-Monitor hat 3840 × 2160 Pixel. Wie viele Megapixel sind das? (1 Nachkommastelle)",a:8.3,tol:0.06,e:"3840 × 2160 = 8.294.400 Pixel ≈ 8,3 Megapixel – viermal so viele wie Full HD."}
]});

/* ---------- B: Datenschutz – Kontrollarten, VVT, DSFA, Löschkonzept ---------- */
ext("datenschutz", {
lesson: `
<h3>Technische und organisatorische Maßnahmen nach Kontrollarten</h3>
<table><tr><th>Kontrolle</th><th>Ziel</th><th>Beispiele</th></tr>
<tr><td>Zutrittskontrolle</td><td>Unbefugte kommen nicht in die Räume</td><td>Schließanlage, Chipkarte, Besucherregelung</td></tr>
<tr><td>Zugangskontrolle</td><td>Unbefugte können Systeme nicht nutzen</td><td>Passwort, MFA, Bildschirmsperre</td></tr>
<tr><td>Zugriffskontrolle</td><td>Jeder sieht nur die Daten, die er braucht</td><td>Berechtigungskonzept, Rollen</td></tr>
<tr><td>Weitergabekontrolle</td><td>Daten sind bei Transport und Übertragung geschützt</td><td>VPN, TLS, verschlüsselte Datenträger</td></tr>
<tr><td>Eingabekontrolle</td><td>Nachvollziehbar, wer Daten wann eingegeben oder geändert hat</td><td>Protokollierung, persönliche Konten</td></tr>
<tr><td>Auftragskontrolle</td><td>Dienstleister verarbeiten nur nach Weisung</td><td>AV-Vertrag, Kontrolle des Dienstleisters</td></tr>
<tr><td>Verfügbarkeitskontrolle</td><td>Daten gehen nicht verloren</td><td>Backup, USV, Virenschutz</td></tr>
<tr><td>Trennungsgebot</td><td>Daten für verschiedene Zwecke werden getrennt verarbeitet</td><td>getrennte Datenbanken, Mandantentrennung, Test- und Echtsystem</td></tr></table>
<h3>Dokumentationspflichten</h3>
<ul><li><b>Verzeichnis von Verarbeitungstätigkeiten</b> (Art. 30 DSGVO): Liste aller Verarbeitungen mit Zweck, Datenkategorien, Empfängern, Löschfristen und Schutzmaßnahmen.</li>
<li><b>Datenschutz-Folgenabschätzung</b> (Art. 35 DSGVO): vorab nötig, wenn eine Verarbeitung voraussichtlich ein hohes Risiko für Betroffene bringt, z. B. umfangreiche Videoüberwachung oder Verarbeitung vieler Gesundheitsdaten.</li>
<li><b>Löschkonzept:</b> legt fest, welche Daten wann und wie gelöscht werden. Grundsatz: löschen, sobald der Zweck entfällt – außer gesetzliche Aufbewahrungsfristen verlangen eine längere Speicherung. Bis dahin werden die Daten gesperrt.</li></ul>`,
cards: [
["Weitergabekontrolle","Schutz personenbezogener Daten bei Übertragung und Transport, z. B. durch VPN, TLS oder verschlüsselte Datenträger."],
["Eingabekontrolle","Es muss nachvollziehbar sein, wer wann welche Daten eingegeben oder geändert hat – durch Protokollierung."],
["Auftragskontrolle","Dienstleister verarbeiten Daten nur nach Weisung des Auftraggebers – geregelt im AV-Vertrag."],
["Trennungsgebot","Daten, die zu unterschiedlichen Zwecken erhoben wurden, werden getrennt verarbeitet."],
["Verzeichnis von Verarbeitungstätigkeiten","Art. 30 DSGVO: Übersicht aller Verarbeitungen mit Zweck, Datenkategorien, Empfängern, Löschfristen und Maßnahmen."],
["Datenschutz-Folgenabschätzung","Art. 35 DSGVO: Risikoprüfung vor einer Verarbeitung, die voraussichtlich ein hohes Risiko für Betroffene bringt."],
["Löschkonzept","Regelt, welche Daten wann und wie gelöscht werden; Aufbewahrungsfristen gehen vor, bis dahin Sperrung."]
],
qs: [
{t:"open",p:4,q:"Ordnen Sie die Maßnahmen den Kontrollarten zu: (1) VPN für den Außendienst, (2) Protokoll, wer Kundendaten ändert, (3) AV-Vertrag mit dem Cloud-Anbieter, (4) getrennte Datenbanken für Test und Echtbetrieb.",a:"(1) Weitergabekontrolle (1). (2) Eingabekontrolle (1). (3) Auftragskontrolle (1). (4) Trennungsgebot (1)."},
{t:"open",short:true,p:2,q:"Wie heißt das Dokument nach Art. 30 DSGVO, das alle Verarbeitungen personenbezogener Daten eines Unternehmens auflistet?",a:"Verzeichnis von Verarbeitungstätigkeiten",keys:["Verzeichnis von Verarbeitungstätigkeiten","Verarbeitungsverzeichnis","Verzeichnis der Verarbeitungstätigkeiten","VVT","Verfahrensverzeichnis"]},
{t:"open",p:2,q:"Wann muss ein Unternehmen eine Datenschutz-Folgenabschätzung durchführen? Nennen Sie auch ein Beispiel.",a:"Vor einer Verarbeitung, die voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen mit sich bringt (1). Beispiel (1): umfangreiche Videoüberwachung, Verarbeitung vieler Gesundheitsdaten, systematische Auswertung des Verhaltens von Beschäftigten."},
{t:"open",p:3,q:"Ein ehemaliger Kunde verlangt die Löschung seiner Daten. Im System liegen noch Rechnungen aus dem Vorjahr. Erläutern Sie, wie das Unternehmen vorgehen muss.",a:"Daten, für die kein Zweck mehr besteht, müssen gelöscht werden, z. B. Newsletter-Anmeldung oder Kundenprofil (1). Rechnungen unterliegen gesetzlichen Aufbewahrungsfristen und dürfen noch nicht gelöscht werden (1). Sie werden bis zum Fristende gesperrt, also nur noch für diesen Zweck aufbewahrt, und danach gelöscht; der Kunde wird darüber informiert (1)."}
]});

/* ---------- C: Präsentieren, Kreativtechniken, Markt, Prozesse ---------- */
ext("kunde", {
lesson: `
<h3>Präsentieren und moderieren</h3>
<ul><li><b>Vorbereitung:</b> Ziel klären, Zielgruppe einschätzen (Vorwissen, Interesse), Zeit und Medien festlegen.</li>
<li><b>Aufbau:</b> Einleitung (Thema, Ablauf, Nutzen) – Hauptteil (wenige Kernaussagen, roter Faden) – Schluss (Zusammenfassung, Empfehlung, Fragen).</li>
<li><b>Folien:</b> wenig Text, eine Aussage pro Folie, gut lesbare Schrift, Zahlen als Diagramm, einheitliches Design.</li>
<li><b>Vor Fachfremden:</b> Fachbegriffe erklären, Nutzen statt Technik betonen.</li>
<li><b>Moderation:</b> Der Moderator leitet das Gespräch neutral, achtet auf Zeit und Ziel und hält Ergebnisse fest.</li></ul>
<p><b>Kreativitätstechniken:</b> Beim <b>Brainstorming</b> werden Ideen gesammelt, ohne sie zu bewerten – Menge vor Qualität, Kritik erst danach. Eine <b>Mindmap</b> ordnet Gedanken ausgehend von einem zentralen Begriff in Ästen.</p>
<h3>Markt und Preis (Hintergrund)</h3>
<p>Ist das Angebot größer als die Nachfrage, sinken die Preise und Käufer können wählen (<b>Käufermarkt</b>). Ist die Nachfrage größer als das Angebot, steigen die Preise (<b>Verkäufermarkt</b>). Beim Gleichgewichtspreis sind angebotene und nachgefragte Menge gleich.</p>
<h3>Geschäftsprozesse (Hintergrund)</h3>
<p><b>Kernprozesse</b> schaffen den Wert für den Kunden (z. B. Beratung, Installation, Support). <b>Unterstützungsprozesse</b> halten den Betrieb am Laufen (Personal, Buchhaltung, interne IT). <b>Managementprozesse</b> steuern das Unternehmen (Strategie, Controlling).</p>`,
cards: [
["Aufbau einer Präsentation","Einleitung (Thema, Ablauf) – Hauptteil (Kernaussagen) – Schluss (Zusammenfassung, Empfehlung, Fragen)."],
["Regeln für gute Folien","Wenig Text, eine Aussage pro Folie, lesbare Schrift, Zahlen als Diagramm, einheitliches Design."],
["Präsentation vor Fachfremden","Fachbegriffe erklären, Beispiele nutzen, den Nutzen statt der Technik betonen."],
["Aufgabe des Moderators","Leitet das Gespräch neutral, achtet auf Zeit und Ziel, hält Ergebnisse fest."],
["Brainstorming – Regeln","Ideen frei sammeln, keine Bewertung oder Kritik währenddessen, Menge vor Qualität, Ideen anderer aufgreifen."],
["Mindmap","Gedanken werden um einen zentralen Begriff in Haupt- und Nebenästen geordnet."],
["Käufermarkt vs. Verkäufermarkt","Käufermarkt: Angebot > Nachfrage, Preise sinken. Verkäufermarkt: Nachfrage > Angebot, Preise steigen."],
["Kern- vs. Unterstützungsprozess","Kernprozess schafft Wert für den Kunden (Beratung, Support). Unterstützungsprozess hält den Betrieb am Laufen (Personal, Buchhaltung)."]
],
qs: [
{t:"open",p:4,q:"Sie sollen der Geschäftsführung in zehn Minuten Ihr Konzept für neue Arbeitsplätze vorstellen. Nennen Sie vier Punkte, die Sie bei Vorbereitung und Gestaltung beachten.",a:"Je 1: Ziel und Kernaussage festlegen; Zielgruppe berücksichtigen – Nutzen und Kosten statt technischer Details; klarer Aufbau aus Einleitung, Hauptteil, Schluss; wenig Text und Diagramme auf den Folien; Fachbegriffe erklären; Zeit einhalten und Probedurchlauf; mit einer klaren Empfehlung enden und Fragen zulassen."},
{t:"open",p:2,q:"Nennen Sie zwei Regeln für ein Brainstorming.",a:"Je 1: Ideen werden während der Sammlung nicht bewertet oder kritisiert; Menge geht vor Qualität; freies Assoziieren ist erwünscht; Ideen anderer dürfen aufgegriffen werden; alle Ideen werden sichtbar festgehalten."},
{t:"open",short:true,p:2,q:"Wie heißt die Marktsituation, in der das Angebot größer ist als die Nachfrage?",a:"Käufermarkt",keys:["Käufermarkt"],not:["Verkäufermarkt"]}
]});

/* ---------- C: Lizenzbegriffe und Rechnung ---------- */
ext("recht", {
lesson: `
<h3>Weitere Lizenzbegriffe (Hintergrund)</h3>
<table><tr><th>Begriff</th><th>Bedeutung</th></tr>
<tr><td>Proprietäre Software</td><td>Quellcode nicht offen, Nutzung nur nach den Bedingungen des Herstellers</td></tr>
<tr><td>Freeware</td><td>kostenlos nutzbar, Quellcode aber nicht offen</td></tr>
<tr><td>Shareware</td><td>darf kostenlos getestet werden, danach kostenpflichtig</td></tr>
<tr><td>Public Domain</td><td>gemeinfrei – ohne urheberrechtliche Einschränkungen</td></tr>
<tr><td>Open Source</td><td>Quellcode offen, darf genutzt, geändert und weitergegeben werden – nach den Regeln der jeweiligen Lizenz</td></tr></table>
<h3>Pflichtangaben einer Rechnung (Hintergrund)</h3>
<p>Name und Anschrift von Lieferant und Kunde · Steuernummer oder USt-IdNr. des Lieferanten · Rechnungsdatum · fortlaufende Rechnungsnummer · Menge und Bezeichnung der Leistung · Liefer- bzw. Leistungsdatum · Nettobetrag, Steuersatz, Steuerbetrag und Bruttobetrag.</p>`,
cards: [
["Freeware vs. Open Source","Freeware: kostenlos, Quellcode nicht offen. Open Source: Quellcode offen, darf geändert und weitergegeben werden."],
["Shareware","Software, die kostenlos getestet werden darf und danach bezahlt werden muss."],
["Proprietäre Software","Quellcode nicht offen; Nutzung nur nach den Lizenzbedingungen des Herstellers."],
["Public Domain","Gemeinfreie Software ohne urheberrechtliche Einschränkungen."],
["Pflichtangaben einer Rechnung","Namen und Anschriften, Steuernummer/USt-IdNr., Datum, Rechnungsnummer, Menge und Art der Leistung, Leistungsdatum, Netto, Steuersatz und -betrag, Brutto."]
],
qs: [
{t:"open",p:2,q:"Erläutern Sie den Unterschied zwischen Freeware und Open-Source-Software.",a:"Freeware darf kostenlos genutzt werden, der Quellcode ist aber nicht einsehbar und darf nicht verändert werden (1). Bei Open-Source-Software ist der Quellcode offen und darf nach den Regeln der Lizenz geändert und weitergegeben werden (1)."}
]});

/* ---------- C: BPMN (Hinweis) ---------- */
ext("programmierung", {
lesson: `
<h3>BPMN – nur zum Wiedererkennen</h3>
<div class="tip"><b>Einordnung:</b> Der neue Katalog nennt neben UML auch BPMN als neuere Darstellungsform. Für die AP1 ist das UML-Aktivitätsdiagramm der sichere Schwerpunkt. Bei BPMN reicht es, die Grundsymbole wiederzuerkennen – frag in der Schule nach, ob es dort behandelt wird.</div>
<table><tr><th>BPMN-Symbol</th><th>Bedeutung</th><th>entspricht im Aktivitätsdiagramm</th></tr>
<tr><td>Kreis (dünner Rand)</td><td>Startereignis</td><td>Startknoten</td></tr>
<tr><td>Kreis (dicker Rand)</td><td>Endereignis</td><td>Endknoten</td></tr>
<tr><td>abgerundetes Rechteck</td><td>Aufgabe (Task)</td><td>Aktion</td></tr>
<tr><td>Raute mit X</td><td>exklusives Gateway: genau ein Weg</td><td>Verzweigung</td></tr>
<tr><td>Raute mit +</td><td>paralleles Gateway: alle Wege gleichzeitig</td><td>Gabelung/Vereinigung</td></tr>
<tr><td>Pool und Lane</td><td>Beteiligte und ihre Zuständigkeiten</td><td>Swimlane</td></tr></table>`,
cards: [
["BPMN","Business Process Model and Notation – grafische Sprache zur Darstellung von Geschäftsprozessen."],
["BPMN: Raute mit X bzw. mit +","X = exklusives Gateway (genau ein Weg). + = paralleles Gateway (alle Wege gleichzeitig)."]
]});

/* ---------- Belegsatz und gestrichene Dokumentationsarten ---------- */
ext("pruefung", {
lesson: `
<h3>Belegsatz</h3>
<p>Seit 2025 gehört zu den Aufgabensätzen ein einheitlicher <b>Belegsatz</b>: ein Beiblatt mit Unterlagen und Hilfen, auf die sich die Aufgaben beziehen, zum Beispiel Datenblätter, Angebote, Tabellen oder die Schreibweise von Diagrammen und Pseudocode. Du musst darin nichts ausfüllen, aber du musst die nötigen Informationen schnell finden.</p>
<div class="tip"><b>To-do:</b> Lass dir in der Prüfungsvorbereitung den Belegsatz der letzten AP1 zeigen. Wenn dort Schreibweisen vorgegeben sind (UML-Symbole, Pseudocode), übe genau mit diesen. Die Aufgaben mit Anlagen und die Prüfungssätze in dieser App trainieren das Heraussuchen von Informationen aus Unterlagen.</div>`,
cards: [
["Was ist der Belegsatz?","Ein Beiblatt zum Aufgabensatz mit Unterlagen und Hilfen (Datenblätter, Angebote, Notationen), auf die sich die Aufgaben beziehen."]
]});

/* ---------- Glossar: neue Abkürzungen ---------- */
ABK.push(
["ATX","Advanced Technology Extended","Standard-Formfaktor für Mainboards und Netzteile (kleiner: Micro-ATX, Mini-ITX)."],
["BPMN","Business Process Model and Notation","Grafische Sprache zur Darstellung von Geschäftsprozessen."],
["DDR","Double Data Rate","Arbeitsspeicher-Standard; DDR4 und DDR5 sind nicht miteinander kompatibel."],
["DIMM","Dual Inline Memory Module","Bauform von Arbeitsspeicher für Desktop-PCs; im Notebook SO-DIMM."],
["FK","Foreign Key","Fremdschlüssel: verweist auf den Primärschlüssel einer anderen Tabelle."],
["HGB","Handelsgesetzbuch","Regelt u. a. die Prüf- und Rügepflicht unter Kaufleuten."],
["IPS","In-Plane Switching","Paneltyp mit hoher Farbtreue und stabilen Blickwinkeln."],
["OLED","Organic Light Emitting Diode","Selbstleuchtende Pixel: perfektes Schwarz, hoher Kontrast."],
["PK","Primary Key","Primärschlüssel: identifiziert jeden Datensatz eindeutig."],
["PPI","Pixels per Inch","Pixeldichte eines Bildschirms – je höher, desto schärfer."],
["SMT","Simultaneous Multithreading","Ein CPU-Kern bearbeitet zwei Threads gleichzeitig (bei Intel: Hyper-Threading)."],
["TDP","Thermal Design Power","Wärmeleistung in Watt, auf die die Kühlung einer CPU ausgelegt sein muss."],
["UHD","Ultra High Definition","Auflösung 3840 × 2160 Pixel (4K)."],
["VRAM","Video Random Access Memory","Eigener Speicher der Grafikkarte."],
["VVT","Verzeichnis von Verarbeitungstätigkeiten","Pflichtdokument nach Art. 30 DSGVO."],
["WQHD","Wide Quad High Definition","Auflösung 2560 × 1440 Pixel."]
);
ABK.sort((a, b) => a[0].localeCompare(b[0], "de", { numeric: true, sensitivity: "base" }));
