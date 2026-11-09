/* Ergänzungen zu bestehenden Themen */
function ext(id, add) {
  const t = T.find(x => x.id === id); if (!t) return;
  if (add.lesson) t.lesson += add.lesson;
  if (add.cards) t.cards = t.cards.concat(add.cards);
  if (add.qs) t.qs = t.qs.concat(add.qs);
}

ext("hardware", {
lesson: `
<h3>Drucker, Scanner & weitere Peripherie</h3>
<table><tr><th></th><th>Laserdrucker</th><th>Tintenstrahldrucker</th><th>Thermodrucker</th></tr>
<tr><td>Prinzip</td><td>Toner wird elektrostatisch auf Trommel übertragen und eingebrannt (Fixiereinheit)</td><td>Tintentröpfchen werden aufgesprüht (Piezo/Bubblejet)</td><td>Wärme schwärzt Spezialpapier (Etiketten, Kassenbons)</td></tr>
<tr><td>Stärken</td><td>schnell (ppm), geringe Seitenkosten bei Text, wischfest, hohe Druckvolumen</td><td>günstige Anschaffung, guter Fotodruck, wenig Energie</td><td>leise, schnell, wartungsarm, kein Verbrauchsmaterial außer Papier</td></tr>
<tr><td>Schwächen</td><td>Feinstaub/Ozon (Aufstellort!), Aufwärmzeit, teurer Farblaser</td><td>höhere Seitenkosten, Tinte trocknet ein, langsamer</td><td>Ausdrucke verblassen, nur s/w, Spezialpapier</td></tr>
<tr><td>Einsatz</td><td>Büro, Abteilungsdrucker</td><td>Homeoffice, Fotos, geringe Mengen</td><td>Kasse, Lager-Etiketten, Versand</td></tr></table>
<p><b>Kenngrößen</b>: Druckgeschwindigkeit (ppm = pages per minute), Auflösung (dpi), Duplexdruck, monatliches Druckvolumen (Duty Cycle), Papierfächer, Schnittstellen (LAN, WLAN, USB), Sicherheitsfunktionen (Follow-Me-/PIN-Druck – Ausdrucke erst nach Anmeldung am Gerät freigeben, damit vertrauliche Dokumente nicht im Ausgabefach liegen).</p>
<div class="merke"><b>Seitenkosten</b> = Preis Verbrauchsmaterial ÷ Reichweite (Seiten). Toner 90 € für 3.000 Seiten → 0,03 €/Seite. Bei Farbe: Kosten aller beteiligten Patronen addieren, ggf. Trommel/Wartungskit (Preis ÷ Lebensdauer) und Papier dazurechnen.</div>
<p><b>Multifunktionsgerät (MFP)</b>: Drucken, Scannen, Kopieren, Faxen in einem Gerät – platz- und kostensparend, zentral verwaltbar; aber Ausfall betrifft alle Funktionen. Oft als <b>Managed Print Service</b> (Leasing mit Klickpreis pro Seite inkl. Toner und Wartung).<br>
<b>Scanner</b>: Flachbett (Bücher, Fotos), Einzugsscanner mit ADF (automatischer Dokumenteneinzug, Duplex – Digitalisierung von Akten), Auflösung (300 dpi für Dokumente, höher für Fotos), <b>OCR</b> (Texterkennung → durchsuchbare PDFs), Scan-to-Mail/Ordner.<br>
<b>Weitere Peripherie</b>: Headset (USB/Bluetooth, Noise Cancelling, Teams-zertifiziert), Webcam, Dokumentenkamera, Kartenleser/Smartcard-Reader, Barcodescanner, Unterschriftenpad, KVM-Switch (eine Tastatur/Maus/Monitor für mehrere Rechner), Presenter, Grafiktablett, USV.</p>`,
cards: [
["Laser- vs. Tintenstrahldrucker","Laser: schnell, günstige Seitenkosten, hohe Volumen, Feinstaub. Tinte: günstig in der Anschaffung, gut für Fotos, höhere Seitenkosten."],
["Thermodrucker – Einsatz","Kassenbons, Etiketten, Versandlabel – leise, schnell, kein Toner."],
["Formel Seitenkosten","Preis des Verbrauchsmaterials ÷ Reichweite in Seiten."],
["ppm / dpi","ppm: Seiten pro Minute (Geschwindigkeit). dpi: Punkte pro Zoll (Auflösung)."],
["Follow-Me-Printing","Druckauftrag wird erst nach Anmeldung (PIN/Karte) am Gerät ausgegeben – Vertraulichkeit."],
["Multifunktionsgerät","Drucker, Scanner, Kopierer (Fax) in einem Gerät."],
["ADF","Automatic Document Feeder – automatischer Dokumenteneinzug beim Scanner."],
["OCR","Optical Character Recognition – Texterkennung, macht Scans durchsuchbar."],
["KVM-Switch","Bedient mehrere Rechner mit einer Tastatur, einem Monitor und einer Maus."],
["Managed Print Service","Drucker inkl. Toner, Wartung, Service gegen Klickpreis/Rate."]
],
qs: [
{t:"num",q:"Eine Tonerkassette kostet 84 € und reicht für 2.800 Seiten. Wie hoch sind die Tonerkosten pro Seite in Cent?",a:3,unit:"Cent",e:"84 € ÷ 2.800 = 0,03 € = 3 Cent."},
{t:"num",q:"Ein Farbdrucker braucht je eine Schwarzpatrone (30 €, 600 Seiten) und eine Farbpatrone (45 €, 300 Seiten). Wie hoch sind die Patronenkosten pro Farbseite in Cent?",a:20,unit:"Cent",e:"30/600 = 0,05 € + 45/300 = 0,15 € = 0,20 € = 20 Cent."},
{t:"sc",q:"Eine Abteilung druckt 4.000 Textseiten pro Monat. Welcher Druckertyp ist am wirtschaftlichsten?",o:["Tintenstrahldrucker","Monochrom-Laserdrucker","Thermodrucker","Fotodrucker"],a:1,e:"Hohes Volumen + Text → niedrige Seitenkosten und hohe Geschwindigkeit des Lasers."},
{t:"sc",q:"Wofür steht OCR beim Scannen?",o:["Optische Texterkennung","Offline Color Rendering","Open Copy Routine","Output Compression Rate"],a:0,e:""},
{t:"sc",q:"In der Personalabteilung liegen vertrauliche Ausdrucke im Ausgabefach des Etagendruckers. Welche Funktion hilft?",o:["Duplexdruck","Follow-Me-/PIN-Druck","Tonersparmodus","AirPrint"],a:1,e:""},
{t:"open",q:"Ihre Firma will alte Einzelplatzdrucker durch ein Multifunktionsgerät pro Etage ersetzen. Nennen Sie zwei Vorteile und einen Nachteil. (3 Punkte)",p:3,a:"Vorteile (je 1): weniger Geräte, geringere Anschaffungs-/Wartungs- und Energiekosten; zentrale Verwaltung und Abrechnung; zusätzliche Scan-/Kopierfunktion (Digitalisierung); geringere Seitenkosten; Follow-Me-Druck möglich. Nachteil (1): Ausfall betrifft alle Nutzer und Funktionen; Wege zum Drucker; Wartezeiten; Datenschutz bei offen liegenden Ausdrucken (ohne PIN-Druck)."}
]});

ext("wirtschaft", {
lesson: `
<h3>Verkaufskalkulation – Angebotspreis für den Kunden</h3>
<p>Wenn <b>du</b> als IT-Dienstleister einem Kunden ein Angebot machst (Hardware + Dienstleistung), rechnest du vom Einkauf zum Verkaufspreis:</p>
<pre>  Bezugspreis (Einstandspreis)
+ Handlungskosten / Gemeinkostenzuschlag (%)
= Selbstkosten
+ Gewinnzuschlag (%)
= Barverkaufspreis
+ Kundenskonto (% im Hundert!)
= Zielverkaufspreis
+ Kundenrabatt (% im Hundert!)
= Listenverkaufspreis netto
+ Umsatzsteuer 19 %
= Listenverkaufspreis brutto</pre>
<div class="merke"><b>Im Hundert</b>: Skonto und Rabatt werden später vom höheren Preis abgezogen – deshalb rechnet man rückwärts: Zielverkaufspreis = Barverkaufspreis ÷ (1 − Skonto%/100). <br>Beispiel: Barverkaufspreis 980 €, 2 % Skonto → 980 ÷ 0,98 = <b>1.000 €</b> (nicht 980 × 1,02 = 999,60 €).</div>
<p><b>Dienstleistungen</b> kalkulierst du über Stundensätze: Stunden × Stundensatz (+ Anfahrt/Pauschalen). Beispiel: Einrichtung 6 h × 85 € = 510 €. <b>Handelsspanne</b> = (Verkaufspreis − Einkaufspreis) ÷ Verkaufspreis × 100. <b>Kalkulationszuschlag</b> = (Verkaufspreis − Einkaufspreis) ÷ Einkaufspreis × 100.</p>`,
cards: [
["Schema Verkaufskalkulation","Bezugspreis + Handlungskosten = Selbstkosten + Gewinn = Barverkaufspreis + Skonto (i. H.) = Zielverkaufspreis + Rabatt (i. H.) = Listenverkaufspreis."],
["Warum Skonto/Rabatt „im Hundert“?","Weil sie später vom höheren Preis abgezogen werden: Zielpreis = Barpreis ÷ (1 − p/100)."],
["Selbstkosten","Bezugspreis + Handlungskosten (Gemeinkosten)."],
["Kalkulationszuschlag","(Verkaufspreis − Einkaufspreis) ÷ Einkaufspreis × 100."],
["Handelsspanne","(Verkaufspreis − Einkaufspreis) ÷ Verkaufspreis × 100."]
],
qs: [
{t:"num",q:"Bezugspreis 800 €, Handlungskosten 25 %, Gewinn 10 %. Wie hoch ist der Barverkaufspreis?",a:1100,unit:"€",e:"800 × 1,25 = 1.000 (Selbstkosten) × 1,10 = 1.100 €."},
{t:"num",q:"Barverkaufspreis 1.176 €, der Kunde darf 2 % Skonto abziehen. Wie hoch ist der Zielverkaufspreis?",a:1200,unit:"€",e:"1.176 ÷ 0,98 = 1.200 € (im Hundert)."},
{t:"num",q:"Zielverkaufspreis 1.800 €, Kundenrabatt 10 %. Wie hoch ist der Listenverkaufspreis netto?",a:2000,unit:"€",e:"1.800 ÷ 0,90 = 2.000 €."},
{t:"num",q:"Ein Angebot umfasst 3 Notebooks à 950 € netto und 5 Stunden Einrichtung à 80 €. Wie hoch ist der Bruttobetrag (19 % USt)?",a:3867.5,tol:0.01,unit:"€",e:"2.850 + 400 = 3.250 € netto × 1,19 = 3.867,50 €."},
{t:"sc",q:"Warum wird bei der Verkaufskalkulation der Kundenskonto „im Hundert“ aufgeschlagen?",o:["Weil das Finanzamt es verlangt","Weil der Kunde den Skonto vom höheren Zielverkaufspreis abzieht und danach genau der Barverkaufspreis übrig bleiben soll","Weil es einfacher ist","Weil Skonto immer 3 % beträgt"],a:1,e:""}
]});

ext("kunde", {
lesson: `
<h3>Informationen beschaffen: Recherche & Suchoperatoren</h3>
<table><tr><th>Operator</th><th>Wirkung</th><th>Beispiel</th></tr>
<tr><td>"…"</td><td>exakte Wortfolge</td><td>"Windows 11 Pro" BitLocker</td></tr>
<tr><td>- (Minus)</td><td>Begriff ausschließen</td><td>Drucker Laser -Farbe</td></tr>
<tr><td>OR</td><td>einer der Begriffe</td><td>Docking USB-C OR Thunderbolt</td></tr>
<tr><td>site:</td><td>nur eine Website/Domain</td><td>site:bsi.bund.de Passwort</td></tr>
<tr><td>filetype:</td><td>nur ein Dateityp</td><td>Datenblatt filetype:pdf</td></tr>
<tr><td>intitle:</td><td>Begriff im Seitentitel</td><td>intitle:Datenschutzerklärung</td></tr>
<tr><td>*</td><td>Platzhalter für ein Wort</td><td>"Recht auf * Vergessenwerden"</td></tr>
<tr><td>AND / Leerzeichen</td><td>alle Begriffe müssen vorkommen</td><td>IPv6 Subnetting</td></tr></table>
<p><b>Quellen bewerten</b>: Wer ist Autor/Herausgeber (Hersteller, Behörde, Forum)? Aktualität (Datum, Version)? Objektivität (Werbung, Interessen)? Belege/Quellenangaben? Primärquelle bevorzugen (Hersteller-Datenblatt, Gesetzestext, BSI, Microsoft Learn) statt Foren/KI-Zusammenfassungen. <b>Urheberrecht</b>: Zitate kennzeichnen, Bilder nur mit Lizenz verwenden.</p>
<h3>Englische Fachtexte auswerten</h3>
<p>In der AP1 kann eine Anlage auf Englisch sein (Datenblatt, Handbuch, Sicherheitswarnung, Lizenzbedingung). Vorgehen: erst die Frage lesen, dann gezielt nach Schlüsselwörtern scannen, Antwort <b>auf Deutsch</b> formulieren.</p>
<table><tr><th>Englisch</th><th>Deutsch</th><th>Englisch</th><th>Deutsch</th></tr>
<tr><td>requirements</td><td>Anforderungen</td><td>warranty</td><td>Garantie/Gewährleistung</td></tr>
<tr><td>power consumption</td><td>Leistungsaufnahme</td><td>supported / not supported</td><td>unterstützt / nicht unterstützt</td></tr>
<tr><td>vulnerability</td><td>Schwachstelle</td><td>affected versions</td><td>betroffene Versionen</td></tr>
<tr><td>patch / update / firmware</td><td>Korrektur / Aktualisierung / Gerätesoftware</td><td>workaround / mitigation</td><td>Behelfslösung / Abschwächung</td></tr>
<tr><td>license / licensee</td><td>Lizenz / Lizenznehmer</td><td>transfer</td><td>übertragen</td></tr>
<tr><td>device / seat</td><td>Gerät / Arbeitsplatz-Lizenz</td><td>subscription</td><td>Abonnement</td></tr>
<tr><td>backward compatible</td><td>abwärtskompatibel</td><td>end of life (EOL)</td><td>Ende des Produktlebenszyklus/Supports</td></tr>
<tr><td>throughput</td><td>Datendurchsatz</td><td>height-adjustable / tilt / swivel / pivot</td><td>höhenverstellbar / neigen / drehen / hochkant</td></tr>
<tr><td>color gamut</td><td>Farbraum</td><td>refresh rate</td><td>Bildwiederholrate</td></tr>
<tr><td>shall / must / may</td><td>muss / muss / darf</td><td>prior written consent</td><td>vorherige schriftliche Zustimmung</td></tr></table>`,
cards: [
["Suchoperator für exakte Wortfolge","Anführungszeichen \"…\"."],
["site:","Begrenzt die Suche auf eine Website/Domain, z. B. site:bsi.bund.de."],
["filetype:","Findet nur einen Dateityp, z. B. filetype:pdf."],
["Minus-Operator","Schließt einen Begriff aus: Drucker -Tinte."],
["Kriterien für vertrauenswürdige Quellen","Autor/Herausgeber, Aktualität, Objektivität, Belege, Primärquelle."],
["vulnerability / mitigation","Schwachstelle / Maßnahme zur Abschwächung."],
["end of life (EOL)","Produkt wird nicht mehr unterstützt – keine Updates mehr."],
["pivot / swivel / tilt","Hochkant drehen / seitlich drehen / neigen (Monitor-Ergonomie)."]
],
qs: [
{t:"sc",q:"Sie suchen nur PDF-Datenblätter eines Monitors auf der Herstellerseite example.com. Welche Suchanfrage passt?",o:["Monitor Datenblatt pdf example","site:example.com Datenblatt filetype:pdf","\"example.com\" OR pdf","-pdf site:example.com"],a:1,e:""},
{t:"sc",q:"Welche Quelle ist für die Frage „Unterstützt Gerät X DisplayPort Alt Mode?“ am verlässlichsten?",o:["Ein Forenbeitrag von 2019","Das aktuelle Datenblatt des Herstellers","Eine Werbeanzeige","Ein Video ohne Quellenangabe"],a:1,e:"Primärquelle, aktuell."},
{t:"sc",q:"In einer Sicherheitsmeldung steht „Affected versions: 2.1.0 – 2.3.4. Fixed in 2.3.5“. Ihre Firmware ist 2.3.4. Was tun?",o:["Nichts – nicht betroffen","Auf 2.3.5 oder neuer aktualisieren","Auf 2.1.0 zurückgehen","Gerät entsorgen"],a:1,e:"2.3.4 ist betroffen; die Korrektur ist in 2.3.5."},
{t:"sc",q:"Was bedeutet „The licensee may not transfer the software without prior written consent“?",o:["Die Software darf frei weitergegeben werden","Der Lizenznehmer darf die Software nur mit vorheriger schriftlicher Zustimmung übertragen","Die Software ist kostenlos","Die Lizenz ist zeitlich unbegrenzt"],a:1,e:""}
]});

ext("netzwerk", {
lesson: `
<h3>Netzwerkdokumentation</h3>
<ul><li><b>Physischer Netzplan</b>: wo stehen Geräte, Racks, Dosen, wie laufen die Kabel (Gebäude-/Etagenplan, Patchplan: welche Dose an welchem Switchport).</li>
<li><b>Logischer Netzplan</b>: Netze/Subnetze, VLANs, IP-Bereiche, Router/Firewalls, Verbindungen zwischen Netzen – unabhängig vom Standort.</li>
<li><b>IP-Adresskonzept</b> (Tabelle): Netz/VLAN, Netzadresse/Präfix, Gateway, DHCP-Bereich, statische Adressen (Server, Drucker, Switches), DNS.</li>
<li><b>Inventar/Geräteliste</b>: Gerät, Hersteller/Modell, Seriennummer, Standort, IP/MAC, Firmware, Zuständigkeit.</li>
<li>Konfigurationssicherungen, Zugangsdaten (im Passwortmanager!), Änderungsprotokoll.</li></ul>
<table><tr><th>Netz</th><th>VLAN</th><th>Netzadresse</th><th>Gateway</th><th>DHCP-Bereich</th><th>Statisch</th></tr>
<tr><td>Verwaltung</td><td>10</td><td>192.168.10.0/24</td><td>192.168.10.1</td><td>.100–.200</td><td>.2–.20 (Server, Drucker)</td></tr>
<tr><td>Produktion</td><td>20</td><td>192.168.20.0/24</td><td>192.168.20.1</td><td>.100–.200</td><td>.2–.20</td></tr>
<tr><td>Gäste</td><td>99</td><td>10.99.0.0/24</td><td>10.99.0.1</td><td>.10–.250</td><td>–</td></tr></table>
<p><b>Typische Fehler in Netzplan-Aufgaben</b>: Host liegt nicht im Subnetz seines Gateways; Gateway-Adresse falsch; doppelte IP-Adresse; falsche Subnetzmaske; statische IP liegt im DHCP-Bereich; DNS zeigt bei Domänenclients nicht auf den DC; Netz- oder Broadcastadresse an Host vergeben.</p>
<p><b>Symbole</b> (Cisco-Stil, in Prüfungen oft vereinfacht): Router = Kreis mit Pfeilen, Switch = Quader mit Pfeilen, Firewall = Mauer, Access Point = Antenne/Funkwellen, Wolke = Internet/WAN, Server = Tower/Rack.</p>`,
cards: [
["Physischer vs. logischer Netzplan","Physisch: Standorte, Kabelwege, Dosen, Racks. Logisch: Subnetze, VLANs, IP-Bereiche, Router."],
["Inhalt IP-Adresskonzept","Netze/VLANs, Netzadresse/Präfix, Gateway, DHCP-Bereich, statische Adressen, DNS."],
["Typischer Konfigurationsfehler im Netzplan","Host und Gateway liegen nicht im selben Subnetz; doppelte IP; falsche Maske; statische IP im DHCP-Pool."],
["Patchplan","Dokumentiert, welche Netzwerkdose mit welchem Switchport verbunden ist."]
],
qs: [
{t:"sc",q:"Ein PC hat 192.168.10.57/24 und Gateway 192.168.1.1. Was ist falsch?",o:["Nichts","Das Gateway liegt nicht im Subnetz des PCs","Die Maske ist zu groß","Die IP ist öffentlich"],a:1,e:"Das Gateway muss im eigenen Subnetz liegen (z. B. 192.168.10.1)."},
{t:"sc",q:"Der DHCP-Bereich ist .100–.200, der Drucker hat statisch .150. Welches Problem droht?",o:["Keines","IP-Adresskonflikt, wenn DHCP .150 vergibt","Der Drucker ist zu langsam","DNS funktioniert nicht"],a:1,e:"Statische Adressen außerhalb des Pools vergeben oder reservieren."},
{t:"sc",q:"Welche Dokumentation zeigt, an welchem Switchport die Dose 2.14 angeschlossen ist?",o:["Logischer Netzplan","Patchplan","IP-Adresskonzept","Lizenzliste"],a:1,e:""},
{t:"open",q:"Nennen Sie vier Angaben, die in ein IP-Adresskonzept gehören. (2 Punkte)",p:2,a:"Je 0,5: Netz-/VLAN-Bezeichnung; Netzadresse und Präfix/Maske; Standardgateway; DHCP-Bereich; statische Adressen (Server, Drucker, Netzwerkgeräte); DNS-Server; Broadcastadresse; Verantwortlicher."}
]});

ext("programmierung", {
lesson: `
<h3>Pseudocode in der AP1 – Konventionen</h3>
<p>Es gibt keine verbindliche Norm. In IHK-Aufgaben siehst du deutsche oder englische Schlüsselwörter. Wichtig: eindeutig, eingerückt, jede Kontrollstruktur sauber beendet.</p>
<table><tr><th>Deutsch</th><th>Englisch</th><th>Bedeutung</th></tr>
<tr><td>x ← 5 / x := 5</td><td>x = 5</td><td>Zuweisung</td></tr>
<tr><td>WENN … DANN … SONST … ENDE WENN</td><td>IF … THEN … ELSE … END IF</td><td>Verzweigung</td></tr>
<tr><td>SOLANGE … ENDE SOLANGE</td><td>WHILE … END WHILE</td><td>kopfgesteuerte Schleife</td></tr>
<tr><td>WIEDERHOLE … BIS …</td><td>REPEAT … UNTIL …</td><td>fußgesteuert (läuft, bis Bedingung wahr)</td></tr>
<tr><td>FÜR i ← 1 BIS n</td><td>FOR i = 1 TO n</td><td>Zählschleife</td></tr>
<tr><td>FUNKTION name(p): Typ … RÜCKGABE</td><td>FUNCTION … RETURN</td><td>Funktion</td></tr>
<tr><td>AUSGABE / EINGABE</td><td>OUTPUT / INPUT</td><td>Ein-/Ausgabe</td></tr>
<tr><td>MOD, DIV</td><td>%, //</td><td>Rest, ganzzahlige Division</td></tr></table>
<div class="tip">Typische AP1-Aufgaben: (1) Schreibtischtest mit Wertetabelle, (2) Lücken im Algorithmus ergänzen, (3) fehlerhafte Zeile finden und korrigieren, (4) Ablauf als UML-Aktivitätsdiagramm darstellen. Große Programme selbst schreiben ist AP2.</div>
<div class="warn">WIEDERHOLE … BIS <i>Bedingung</i> läuft, <b>bis</b> die Bedingung wahr ist – das Gegenteil von SOLANGE. „SOLANGE x &lt; 10“ entspricht „BIS x &gt;= 10“.</div>`,
cards: [
["WIEDERHOLE … BIS","Fußgesteuerte Schleife, läuft mindestens einmal und so lange, BIS die Bedingung wahr ist."],
["DIV","Ganzzahlige Division: 17 DIV 5 = 3."],
["Typische AP1-Pseudocode-Aufgaben","Schreibtischtest, Lücken ergänzen, Fehler finden, als Aktivitätsdiagramm darstellen."]
],
qs: [
{t:"num",q:"Wie lautet 17 DIV 5?",a:3,unit:"",e:"Ganzzahlige Division ohne Rest."},
{t:"sc",q:"Welche Bedingung entspricht „SOLANGE zahl < 100“ in einer WIEDERHOLE-BIS-Schleife?",o:["BIS zahl < 100","BIS zahl >= 100","BIS zahl > 100","BIS zahl = 0"],a:1,e:"BIS = Abbruchbedingung = Negation der SOLANGE-Bedingung."}
]});

ext("wirtschaft", {
lesson: `
<h3>Finanzierungskosten & Zinsrechnung</h3>
<p>Wird eine Investition per Kredit finanziert, kommen <b>Zinsen</b> zu den Anschaffungskosten (Finanzierungskosten). Grundformel (einfache Zinsen):</p>
<div class="merke">Zinsen Z = Kapital K × Zinssatz p × Zeit t / 100 &nbsp;(t in Jahren)<br>Monate: Z = K × p × m / (100 × 12) &nbsp;·&nbsp; Tage (kaufmännisch, 360 Tage): Z = K × p × d / (100 × 360)</div>
<p>Beispiel: 20.000 € Kredit, 6 % p. a., 9 Monate → 20.000 × 6 × 9 / 1.200 = <b>900 € Zinsen</b>.<br>
<b>Skonto vs. Kredit</b>: Lohnt es sich, einen Kontokorrentkredit aufzunehmen, um Skonto zu ziehen? Skonto 2 % bei Zahlung in 10 statt 30 Tagen → Effektivzins ≈ 2 / (30 − 10) × 360 = <b>36 % p. a.</b> – fast immer günstiger als der Kreditzins, also Skonto nutzen.<br>
<b>Ratenkauf/Leasing</b>: Gesamtkosten = Anzahlung + Raten × Anzahl (+ Restwert) – mit dem Barpreis vergleichen.</p>
<h3>Ökonomische, ökologische und soziale Kriterien</h3>
<p>Viele Unternehmen formulieren im <b>Leitbild</b> Ziele in drei Dimensionen (Nachhaltigkeit):</p>
<table><tr><th>Dimension</th><th>Beispiele bei IT-Beschaffung</th></tr>
<tr><td>Ökonomisch</td><td>Preis, TCO, Wirtschaftlichkeit, Gewinn, Liquidität</td></tr>
<tr><td>Ökologisch</td><td>Energieverbrauch, Energieeffizienz-Label, reparierbar/aufrüstbar, lange Nutzung, Refurbished, Rücknahme/Recycling, Verpackung, Siegel (Blauer Engel, TCO Certified, EPEAT)</td></tr>
<tr><td>Sozial</td><td>faire Arbeitsbedingungen in der Lieferkette (Lieferkettensorgfaltspflichtengesetz), Ergonomie, Barrierefreiheit, Gesundheitsschutz der Mitarbeitenden</td></tr></table>
<p><b>Zielkonflikt</b>: z. B. ökonomisch (billigstes Gerät) vs. ökologisch (energieeffizientes, langlebiges Gerät) – in der Prüfung abwägen und begründen. <b>Zielharmonie</b>: Energiesparende Geräte senken auch Kosten.<br>
<b>Zukunftssicherheit/Skalierbarkeit</b>: Erweiterbarkeit (RAM-Slots, Anschlüsse), Leistungsreserven, Herstellersupport-Dauer, Kompatibilität mit kommenden Standards (z. B. Windows-11-Anforderungen, Wi-Fi 6/7).<br>
<b>Benchmarking</b>: systematischer Vergleich eigener Produkte, Prozesse oder Kennzahlen mit dem besten Wettbewerber („Best Practice“), um Verbesserungen abzuleiten. In der Hardware auch: Leistungsvergleich per Benchmark-Software (z. B. CPU-Punkte).</p>`,
cards: [
["Zinsformel (Jahre)","Z = K × p × t / 100."],
["Zinsformel (Monate)","Z = K × p × m / 1.200."],
["Skonto-Effektivzins (Faustformel)","Skontosatz ÷ (Zahlungsziel − Skontofrist) × 360."],
["Drei Nachhaltigkeitsdimensionen","Ökonomisch, ökologisch, sozial."],
["Ökologische Kriterien IT-Beschaffung","Energieeffizienz, Langlebigkeit/Reparierbarkeit, Recycling, Umweltsiegel, Refurbished."],
["Soziale Kriterien IT-Beschaffung","Faire Arbeitsbedingungen in der Lieferkette, Ergonomie, Barrierefreiheit, Gesundheitsschutz."],
["Zielkonflikt – Beispiel","Billigstes Gerät (ökonomisch) vs. energieeffizientes, langlebiges Gerät (ökologisch)."],
["Benchmarking","Vergleich mit dem Besten (Best Practice) bzw. Leistungsvergleich per Benchmark-Test."]
],
qs: [
{t:"num",q:"Ein Kredit über 15.000 € wird zu 8 % p. a. für 6 Monate aufgenommen. Wie hoch sind die Zinsen?",a:600,unit:"€",e:"15.000 × 8 × 6 / 1.200 = 600 €."},
{t:"num",q:"Ein Lieferant gewährt 3 % Skonto bei Zahlung innerhalb von 10 Tagen, sonst 40 Tage Zahlungsziel. Wie hoch ist der Effektivzins p. a. (Faustformel, 360 Tage)?",a:36,unit:"%",e:"3 ÷ (40 − 10) × 360 = 36 %."},
{t:"sc",q:"Welches Kriterium gehört zur ökologischen Dimension?",o:["Anschaffungspreis","Energieverbrauch und Recyclingfähigkeit","Faire Löhne in der Fertigung","Liquidität"],a:1,e:"Preis/Liquidität = ökonomisch, faire Löhne = sozial."},
{t:"sc",q:"Eine Firma kauft das günstigste Notebook, obwohl ein teureres Modell 40 % weniger Strom braucht und doppelt so lange Support erhält. Das ist ein Beispiel für …",o:["Zielharmonie","Zielkonflikt zwischen ökonomischen und ökologischen Zielen","Benchmarking","Upselling"],a:1,e:""},
{t:"open",q:"Ihr Unternehmen hat sich im Leitbild zu Nachhaltigkeit verpflichtet. Nennen Sie je ein ökologisches und ein soziales Kriterium für die Beschaffung von 50 Monitoren. (2 Punkte)",p:2,a:"Ökologisch (1): geringe Leistungsaufnahme/gute Energieeffizienzklasse, Umweltsiegel (Blauer Engel, TCO Certified, EPEAT), langlebig/reparierbar, Rücknahme durch Hersteller, wenig Verpackung. Sozial (1): faire Arbeitsbedingungen in der Lieferkette (z. B. TCO Certified), ergonomische Eigenschaften (höhenverstellbar, flimmerfrei), Barrierefreiheit."}
]});

ext("kunde", {
lesson: `
<h3>Feedback geben und nehmen</h3>
<ul><li><b>Feedbackregeln (geben)</b>: Ich-Botschaften („Ich habe beobachtet …“), konkret und beschreibend statt bewertend, zeitnah, konstruktiv mit Verbesserungsvorschlag, positive Punkte nennen (Sandwich-Methode: positiv – Kritik – positiv), auf veränderbares Verhalten beziehen, nicht vor Publikum.</li>
<li><b>Feedback nehmen</b>: zuhören, nicht rechtfertigen, nachfragen, bedanken, selbst entscheiden, was man umsetzt.</li>
<li><b>Reflexionsmethoden</b> im Team: Retrospektive (Was lief gut? Was verbessern? Was probieren wir?), Lessons Learned, Blitzlicht, Start-Stop-Continue.</li></ul>
<h3>Kommunikationssysteme im Unternehmen</h3>
<table><tr><th>System</th><th>Zweck / Beispiele</th></tr>
<tr><td>E-Mail & Groupware</td><td>Mail, Kalender, Kontakte, Aufgaben – Exchange/Outlook, Microsoft 365</td></tr>
<tr><td>Unified Communications & Collaboration</td><td>Chat, Video-/Telefonkonferenz, Dateiablage, gemeinsames Bearbeiten in einer Plattform – Teams, Zoom, Slack</td></tr>
<tr><td>VoIP-Telefonie</td><td>Telefonie über IP-Netz (SIP), IP-Telefone mit PoE, Softphones, Cloud-Telefonanlage; QoS/VLAN für Sprachqualität</td></tr>
<tr><td>Intranet / Wiki</td><td>interne Informationen, Wissensdatenbank – SharePoint, Confluence</td></tr>
<tr><td>Ticketsystem</td><td>Support-Anfragen strukturiert bearbeiten</td></tr></table>
<p><b>Benutzeroberflächen</b>: <b>GUI</b> (grafisch, intuitiv, für Endanwender) vs. <b>CLI</b> (Kommandozeile, schnell, skriptbar/automatisierbar, für Admins) vs. <b>Web-UI</b> (im Browser, plattformunabhängig) vs. <b>Touch/Sprache</b>.</p>`,
cards: [
["Feedbackregeln","Ich-Botschaften, konkret/beschreibend, zeitnah, konstruktiv, Positives nennen, veränderbares Verhalten, unter vier Augen."],
["Sandwich-Methode","Positiv – Kritik/Verbesserung – positiv."],
["Retrospektive – Leitfragen","Was lief gut? Was lief schlecht? Was verbessern wir?"],
["Groupware","Software für Mail, Kalender, Kontakte, Aufgaben im Team (z. B. Exchange/Outlook)."],
["Unified Communications","Chat, Telefonie, Video, Dateien in einer Plattform (z. B. Teams)."],
["VoIP – Voraussetzungen im Netz","PoE für IP-Telefone, QoS/VLAN für Sprachqualität, ausreichende Bandbreite, geringe Latenz."],
["GUI vs. CLI","GUI: grafisch, intuitiv. CLI: Kommandozeile, schnell, automatisierbar per Skript."]
],
qs: [
{t:"sc",q:"Welche Formulierung entspricht den Feedbackregeln?",o:["„Du bist immer unpünktlich.“","„Mir ist aufgefallen, dass du diese Woche zweimal zu spät zum Daily kamst. Können wir das ändern?“","„Alle finden dich nervig.“","„Das war schlecht.“"],a:1,e:"Ich-Botschaft, konkret, beschreibend, lösungsorientiert."},
{t:"sc",q:"Ein Unternehmen stellt auf IP-Telefonie um. Was ist im Netzwerk besonders wichtig?",o:["Nur WLAN 2,4 GHz","PoE für die Telefone und QoS/VLAN zur Priorisierung der Sprachdaten","FAT32-Dateisystem","Ein zweiter Drucker"],a:1,e:""},
{t:"sc",q:"Ein Admin will 200 Benutzerkonten automatisiert anlegen. Welche Oberfläche ist am besten geeignet?",o:["GUI mit Mausklicks","CLI/Skript (z. B. PowerShell)","Touchscreen","Sprachsteuerung"],a:1,e:"Automatisierbar und schnell."}
]});

ext("programmierung", {
lesson: `
<h3>Grundbegriffe Objektorientierung (nur Überblick für die AP1)</h3>
<ul><li><b>Klasse</b>: Bauplan/Vorlage mit Attributen (Eigenschaften) und Methoden (Funktionen), z. B. Klasse <code>Notebook</code> mit Attributen <code>seriennummer</code>, <code>ram</code> und Methode <code>starten()</code>.</li>
<li><b>Objekt</b> (Instanz): konkretes Exemplar einer Klasse, z. B. das Notebook mit Seriennummer 4711.</li>
<li><b>Kapselung</b>: Attribute sind nach außen geschützt (private) und nur über Methoden zugänglich (Getter/Setter).</li>
<li>Vererbung und Polymorphie werden seit 2025 erst in der AP2 geprüft.</li></ul>`,
cards: [
["Klasse","Bauplan mit Attributen und Methoden."],
["Objekt / Instanz","Konkretes Exemplar einer Klasse."],
["Attribut vs. Methode","Attribut: Eigenschaft/Datenfeld. Methode: Funktion des Objekts."],
["Kapselung","Daten werden geschützt (private) und nur über Methoden verändert."]
],
qs: [
{t:"sc",q:"Was ist ein Objekt in der objektorientierten Programmierung?",o:["Ein Bauplan","Eine konkrete Instanz einer Klasse","Eine Schleife","Ein Datentyp für Zahlen"],a:1,e:""}
]});

ext("netzwerk", {
lesson: `
<h3>Netzarten nach Ausdehnung</h3>
<table><tr><th>Netz</th><th>Ausdehnung</th><th>Beispiele / Technik</th></tr>
<tr><td><b>PAN</b> – Personal Area Network</td><td>wenige Meter</td><td>Bluetooth (Headset, Maus), NFC (kontaktlos, wenige cm), USB</td></tr>
<tr><td><b>LAN</b> – Local Area Network</td><td>Gebäude/Gelände</td><td>Ethernet, WLAN; im Besitz des Unternehmens</td></tr>
<tr><td><b>MAN</b> – Metropolitan Area Network</td><td>Stadt/Region</td><td>Glasfaserring eines Stadtnetzbetreibers, Campus mehrerer Standorte</td></tr>
<tr><td><b>WAN</b> – Wide Area Network</td><td>Länder/weltweit</td><td>Internet, Netze von Providern; Leitungen werden gemietet</td></tr>
<tr><td><b>GAN</b> – Global Area Network</td><td>weltweit</td><td>Satellitennetze, das Internet als Ganzes</td></tr></table>
<h3>WAN-Anbindung: Internetanschlüsse</h3>
<table><tr><th>Anschluss</th><th>Technik</th><th>Typisch</th><th>Bewertung</th></tr>
<tr><td>DSL / VDSL (Vectoring, Supervectoring)</td><td>Kupfer-Telefonleitung, Modem/Router</td><td>bis ca. 250 Mbit/s down, asymmetrisch</td><td>weit verbreitet, Rate sinkt mit Entfernung zum Verteiler</td></tr>
<tr><td>Kabel (DOCSIS)</td><td>TV-Koaxialnetz, Kabelmodem</td><td>bis 1 Gbit/s down, Upload deutlich geringer</td><td>hohe Raten, aber geteiltes Medium – abends schwankend</td></tr>
<tr><td>Glasfaser FTTH/FTTB</td><td>LWL bis ins Haus (FTTH) bzw. ins Gebäude (FTTB), ONT/Glasfasermodem</td><td>1–10 Gbit/s, oft symmetrisch möglich</td><td>schnellste, zukunftssicherste Lösung, geringe Latenz</td></tr>
<tr><td>FTTC</td><td>Glasfaser bis zum Verteilerkasten, letzte Meter Kupfer (VDSL)</td><td>bis ca. 250 Mbit/s</td><td>Kompromiss</td></tr>
<tr><td>Mobilfunk (LTE/5G-Router)</td><td>Funk, SIM</td><td>stark standortabhängig</td><td>schnell verfügbar, gut als <b>Backup-Leitung</b> oder Baustelle</td></tr>
<tr><td>Satellit (z. B. LEO-Satelliten)</td><td>Satellitenschüssel</td><td>bis einige 100 Mbit/s</td><td>für abgelegene Standorte, wetterabhängig</td></tr>
<tr><td>Business-Anschluss / Standleitung</td><td>dedizierte Leitung, meist Glasfaser</td><td>garantierte, symmetrische Bandbreite</td><td><b>SLA</b> (Entstörzeit), feste öffentliche IP-Adressen – teurer</td></tr></table>
<ul><li><b>Downstream</b> (Download, Internet → Firma) vs. <b>Upstream</b> (Upload, Firma → Internet). <b>Asymmetrisch</b>: Download viel größer als Upload (DSL, Kabel). <b>Symmetrisch</b>: gleich schnell – wichtig bei Cloud-Backups, Videokonferenzen, eigenen Servern, vielen Homeoffice-VPNs.</li>
<li><b>Kenngrößen</b>: Bandbreite/Datenrate (Mbit/s), <b>Latenz</b> (Verzögerung in ms, wichtig für VoIP/Video), <b>Jitter</b> (Schwankung der Latenz), Paketverlust, Verfügbarkeit (SLA).</li>
<li><b>Feste vs. dynamische öffentliche IP</b>: feste IP nötig für eigene, von außen erreichbare Dienste (VPN-Gateway, Mailserver); Privatanschlüsse bekommen meist wechselnde IPs, oft nur noch über <b>CGNAT</b> (geteilte IPv4) bzw. IPv6.</li>
<li><b>Ausfallsicherheit</b>: zweite Leitung eines anderen Providers/anderer Technik (z. B. Glasfaser + 5G-Backup), Router mit <b>Failover</b>/Load Balancing.</li></ul>
<h3>Standorte vernetzen</h3>
<p><b>Site-to-Site-VPN</b> über das Internet (IPsec/WireGuard zwischen den Firewalls – günstig, verschlüsselt). Alternativen: angemietete Standleitung bzw. MPLS-Netz des Providers (garantierte Qualität, teuer) oder <b>SD-WAN</b> (softwaregesteuerte Nutzung mehrerer Leitungen, zentral verwaltet). Für einzelne Mitarbeitende: Client-to-Site-VPN.</p>
<div class="merke">Prüfungslogik: Filiale mit 5 Personen, Cloud-Software → normaler Business-Glasfaser- oder VDSL-Anschluss + 5G-Backup + Site-to-Site-VPN zur Zentrale. Zentrale mit eigenem Server, vielen Homeoffice-VPNs und Cloud-Backup → symmetrischer Glasfaseranschluss mit fester IP und SLA.</div>`,
cards: [
["PAN / LAN / MAN / WAN","Persönlich (Bluetooth) / lokal (Gebäude) / Stadt / weltweit (Internet)."],
["NFC","Near Field Communication – Funk über wenige Zentimeter (kontaktloses Bezahlen, Zutrittskarten)."],
["FTTH vs. FTTC","FTTH: Glasfaser bis in die Wohnung/das Haus. FTTC: Glasfaser bis zum Verteilerkasten, Rest Kupfer (VDSL)."],
["Upstream vs. Downstream","Upload (Firma → Internet) vs. Download (Internet → Firma)."],
["Symmetrischer Anschluss – wann wichtig?","Cloud-Backups, Videokonferenzen, eigene Server, viele VPN-Nutzer im Homeoffice."],
["Latenz / Jitter","Latenz: Verzögerung in ms. Jitter: Schwankung der Latenz – beides kritisch für VoIP/Video."],
["Feste öffentliche IP – wofür?","Für von außen erreichbare Dienste wie VPN-Gateway oder Mailserver."],
["Business-Anschluss – Merkmale","Garantierte Bandbreite, SLA mit Entstörzeit, feste IP-Adressen, oft symmetrisch."],
["WAN-Ausfallsicherheit","Zweite Leitung (anderer Provider/andere Technik, z. B. 5G) mit Failover."],
["Site-to-Site-VPN","Verschlüsselter Tunnel zwischen zwei Standort-Firewalls über das Internet."],
["Kabelinternet – Nachteil","Geteiltes Medium: Bandbreite schwankt mit der Auslastung im Segment."]
],
qs: [
{t:"sc",q:"Ein Bluetooth-Headset ist mit dem Notebook verbunden. Welche Netzart liegt vor?",o:["LAN","PAN","MAN","WAN"],a:1,e:""},
{t:"sc",q:"Welche Anschlussart bietet in der Regel die höchsten und zukunftssichersten Datenraten?",o:["VDSL","Glasfaser FTTH","Kabel","Satellit"],a:1,e:""},
{t:"sc",q:"Eine Firma sichert jede Nacht 500 GB in die Cloud. Worauf ist beim Internetanschluss besonders zu achten?",o:["Hoher Download","Hoher Upload – möglichst symmetrischer Anschluss","Niedriger Preis","WLAN-Standard"],a:1,e:"Backups gehen von der Firma ins Internet = Upstream."},
{t:"num",q:"Wie viele Stunden dauert der Upload von 500 GB bei 100 Mbit/s Upstream (dezimal, ohne Overhead)? (1 Nachkommastelle)",a:11.1,tol:0.06,unit:"h",e:"500 × 8 = 4.000 Gbit = 4.000.000 Mbit ÷ 100 = 40.000 s ≈ 11,1 h."},
{t:"sc",q:"Welche Maßnahme erhöht die Verfügbarkeit der Internetanbindung?",o:["Schnelleres WLAN","Zweite Leitung über anderen Provider oder 5G mit automatischem Failover","Größerer Switch","Neuer Router desselben Anschlusses"],a:1,e:""},
{t:"sc",q:"Wofür braucht ein Unternehmen eine feste öffentliche IP-Adresse?",o:["Für das WLAN der Gäste","Damit eigene Dienste wie das VPN-Gateway zuverlässig von außen erreichbar sind","Für DHCP im LAN","Für Bluetooth"],a:1,e:""},
{t:"sc",q:"Wie werden Zentrale und Filiale kostengünstig und sicher über das Internet verbunden?",o:["Offene Portfreigaben","Site-to-Site-VPN zwischen den Firewalls","Telnet","Gemeinsames WLAN-Passwort"],a:1,e:""},
{t:"open",q:"Eine neue Filiale (6 Mitarbeitende, Kasse und Warenwirtschaft in der Cloud) soll ans Internet angebunden werden. Empfehlen Sie eine Anbindung und begründen Sie zwei Aspekte. (4 Punkte)",p:4,a:"Empfehlung (2): Business-Glasfaser- (oder VDSL-)Anschluss mit SLA plus LTE/5G-Backup-Router mit Failover, Anbindung an die Zentrale per Site-to-Site-VPN. Begründungen (je 1): Kasse/Warenwirtschaft laufen in der Cloud – ohne Internet kein Verkauf, daher Ausfallsicherheit durch Zweitleitung; SLA sichert schnelle Entstörung; VPN verschlüsselt den Datenverkehr zur Zentrale; ausreichende Bandbreite/geringe Latenz für Cloud-Anwendungen."}
]});

ext("netzwerk", {
lesson: `
<h3>Verkabelung im Serverraum, WLAN-Ausleuchtung & Monitoring</h3>
<ul><li><b>Netzwerkschrank/Rack</b> (19″, Höheneinheiten HE): Switches, Router, Firewall, Server, USV. <b>Patchpanel</b>: Endpunkt der fest verlegten Kabel aus den Räumen; mit kurzen <b>Patchkabeln</b> wird jeder Port flexibel mit dem Switch verbunden. Beschriftung + Patchplan = schnelle Fehlersuche.</li>
<li><b>WLAN-Ausleuchtung</b>: mehrere Access Points mit überlappenden Funkzellen und nicht überlappenden Kanälen; <b>Roaming</b> = Client wechselt unterbrechungsfrei zum stärkeren AP. <b>Mesh-WLAN</b>: APs verbinden sich untereinander per Funk – einfach nachrüstbar, aber geringerer Durchsatz als per Kabel angebundene APs. Vor der Installation <b>Ausleuchtungsmessung</b> (Site Survey).</li>
<li><b>Proxy-Server</b>: Stellvertreter für Webzugriffe der Clients – Filtern von Inhalten, Caching, Protokollierung, Verbergen der internen Adressen. <b>Reverse Proxy</b>: steht vor internen Webservern (Lastverteilung, TLS-Terminierung, Schutz).</li>
<li><b>Monitoring</b>: <b>SNMP</b> (Simple Network Management Protocol, UDP 161/162) fragt Zustände von Netzwerkgeräten ab (Auslastung, Fehler, Traps bei Störungen); <b>Syslog</b> (UDP 514) sammelt Protokollmeldungen zentral; Monitoring-Tools (z. B. Zabbix, PRTG, Checkmk) alarmieren bei Ausfällen.</li></ul>`,
cards: [
["Patchpanel","Anschlussfeld im Rack, an dem die fest verlegten Kabel enden; Verbindung zum Switch über Patchkabel."],
["Roaming (WLAN)","Unterbrechungsfreier Wechsel eines Clients zum Access Point mit dem besseren Signal."],
["Mesh-WLAN","Access Points verbinden sich per Funk untereinander – flexibel, aber weniger Durchsatz als per Kabel."],
["Proxy-Server","Stellvertreter für Webzugriffe: Filter, Cache, Protokollierung, verbirgt interne Clients."],
["SNMP","Protokoll zur Überwachung/Verwaltung von Netzwerkgeräten (UDP 161/162)."],
["Syslog","Standard zum zentralen Sammeln von Protokollmeldungen (UDP 514)."]
],
qs: [
{t:"sc",q:"Wo enden in einem strukturiert verkabelten Gebäude die fest verlegten Kabel aus den Büros?",o:["Direkt im Router","Auf dem Patchpanel im Netzwerkschrank","Im Access Point","In der Steckdose"],a:1,e:""},
{t:"sc",q:"Mit welchem Protokoll überwacht ein Monitoring-System die Portauslastung eines Switches?",o:["SMTP","SNMP","SSH","FTP"],a:1,e:""},
{t:"sc",q:"Ein Lager wird mit WLAN ausgeleuchtet. Mitarbeitende laufen mit Scannern durch die Halle. Was muss das WLAN unterstützen?",o:["Nur ein AP mit maximaler Sendeleistung","Mehrere APs mit überlappenden Zellen und Roaming","Bluetooth","Ad-hoc-Modus"],a:1,e:""}
]});

ext("sicherheit", {
lesson: `
<h3>Sichere Protokolle statt unsicherer Klassiker</h3>
<table><tr><th>Unsicher (Klartext)</th><th>Sicher</th></tr>
<tr><td>Telnet (23)</td><td>SSH (22)</td></tr>
<tr><td>FTP (20/21)</td><td>SFTP (über SSH, 22) oder FTPS (FTP mit TLS)</td></tr>
<tr><td>HTTP (80)</td><td>HTTPS (443)</td></tr>
<tr><td>POP3/IMAP/SMTP ohne TLS</td><td>POP3S (995), IMAPS (993), SMTP mit STARTTLS/SMTPS (587/465)</td></tr>
<tr><td>LDAP (389)</td><td>LDAPS (636)</td></tr>
<tr><td>SNMPv1/v2c (Community-String im Klartext)</td><td>SNMPv3 (Authentifizierung + Verschlüsselung)</td></tr></table>`,
cards: [
["SFTP vs. FTPS","SFTP: Dateiübertragung über SSH (Port 22). FTPS: klassisches FTP mit TLS-Verschlüsselung."],
["Sichere Alternative zu SNMPv1/v2c","SNMPv3 mit Authentifizierung und Verschlüsselung."]
],
qs: [
{t:"sc",q:"Ein Dienstleister soll Dateien sicher auf einen Linux-Server übertragen. Welches Protokoll?",o:["FTP","Telnet","SFTP","TFTP"],a:2,e:"SFTP nutzt SSH-Verschlüsselung."}
]});

/* ===== Abgleich mit Katalogvergleich 2025 (IT-Berufe-Podcast #190) und Europa-Lehrmittel 2025 ===== */
function flag(id, text) { const t = T.find(x => x.id === id); if (t) t.lesson = `<div class="warn"><b>Katalog 2025:</b> ${text}</div>` + t.lesson; }
flag("kunde", "Gestrichen bzw. nicht mehr ausdrücklich genannt: Fragetechniken, aktives Zuhören, Eisbergmodell, Cross-/Upselling, Suchoperatoren, Benchmarking, SWOT. Weiterhin wichtig: Sender-Empfänger- und Vier-Seiten-Modell, situationsgerechte Kundenkommunikation, Support-Level/Ticketsystem, quantitative und qualitative Angebotsbewertung, technische und kaufmännische Texte auf Deutsch und Englisch, Präsentation und Medienkompetenz. Gestrichenes nur als Hintergrund lernen.");
flag("qualitaet", "Gestrichen: Qualitätsbegriff nach ISO 9000, Audit, Kriterien der Softwarequalität, Testprotokoll für den Arbeitsplatz, Maßnahmen zur Prozess-/Produktqualität. Dieses Thema hat in der AP1 jetzt geringe Priorität – PDCA und QM-Grundidee reichen. Test-Grundbegriffe brauchst du für die AP2.");
flag("recht", "Gestrichen: Grundlagen des Urheberrechts, Rollout-Prozesse, Inhalt des Abnahmeprotokolls, Arten der Dokumentation, Stilllegung von Altsystemen/Archivdaten. Weiterhin wichtig: Vertragsarten, Vertragsbestandteile inkl. Sanktionen/Konventionalstrafen, Vertragsstörungen, Lizenzmodelle, SLA.");
flag("wirtschaft", "Gestrichen: Deckungsbeitrag, Vor- und Nachkalkulation, Stamm- und Bewegungsdaten. Weiterhin wichtig: Kosten (fix/variabel), Kauf/Miete/Leasing, Amortisation, Nutzwertanalyse, quantitativer/qualitativer Angebotsvergleich, Umsatz und Gewinn, ökonomische/ökologische/soziale Ziele. Die Verkaufskalkulation ist Bonus.");
flag("sicherheit", "Gestrichen: ISO-2700x-Details, Risikomatrix, Anti-Spam als eigener Punkt, „SSH vs. Telnet“. Neu/betont: Schutzziele, Hashwerte, 2FA, Härtung, Personal Firewall anpassen, Passwort-Policy bewerten, Schutzbedarf ableiten und begründen, ISMS, NAS für Verfügbarkeit, Auszüge aus dem IT-Grundschutz-Kompendium.");
(function(){ const t = T.find(x => x.id === "qualitaet"); if (t) t.weight = 1; })();
(function(){ const t = T.find(x => x.id === "pruefung"); if (t) t.lesson = t.lesson.replace("<b>Gestrichen</b> (nicht mehr AP1): SQL & Datenbanken,", "<b>Gestrichen</b> (nicht mehr AP1): SQL-Abfragen und NoSQL (die <b>Grundlagen relationaler Datenbanken bleiben aber AP1-Stoff!</b>),").replace("<b>Neu bzw. betont:</b> KI-Software am Arbeitsplatz,", "<b>Neu bzw. betont:</b> Merkmale eines Projekts, KI-Software am Arbeitsplatz und im Projekt, Sensoren, Client-Server-Systeme, Desktop as a Service, Social-Media-Systeme, Klassenattribute/Objekte/Sichtbarkeit, Corporate Identity bei Bildschirmmasken, nslookup/ip, All-in-One und Thin Clients, Übertragungsraten und Datenmengen, HDD/SSD, Dateisysteme (FAT32, NTFS, APFS, ext4), Anonymisierung/Pseudonymisierung, Konsequenzen der Einwilligung,"); })();

ext("software", {
lesson: `
<h3>Client-Server-Systeme</h3>
<p><b>Client-Server</b>: Clients fordern Dienste an, ein zentraler Server stellt sie bereit (Datei-, Druck-, Mail-, Web-, Datenbank-, Anwendungsserver). Vorteile: zentrale Datenhaltung, Verwaltung, Datensicherung und Rechtevergabe. Nachteil: Server ist Single Point of Failure, Netzabhängigkeit. <b>Peer-to-Peer</b>: alle Rechner gleichberechtigt (Arbeitsgruppe) – günstig, aber unübersichtlich und unsicher bei vielen Geräten. <b>Fat Client</b> (Programme laufen lokal) vs. <b>Thin Client</b> (Programme laufen auf dem Server). <b>Mehrschichtige Architektur</b>: Präsentation (Client/Browser) – Logik (Anwendungsserver) – Daten (Datenbankserver).</p>
<h3>Grundlagen relationaler Datenbanken (AP1-Stoff!)</h3>
<p>Ein <b>Datenbanksystem (DBS)</b> besteht aus der Datenbank (Daten) und dem <b>DBMS</b> (Datenbankmanagementsystem, z. B. MariaDB/MySQL, PostgreSQL, Microsoft SQL Server, Oracle). Vorteile gegenüber Excel-Listen/Dateien: Mehrbenutzerbetrieb, Datenintegrität, keine/geringe Redundanz, Zugriffsrechte, Datensicherung, Transaktionen.</p>
<table><tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>Tabelle (Relation)</td><td>Sammlung gleichartiger Datensätze</td><td>Mitarbeiter</td></tr>
<tr><td>Datensatz (Tupel, Zeile)</td><td>ein Eintrag</td><td>Isa Muster, Abt. 3</td></tr>
<tr><td>Attribut (Feld, Spalte)</td><td>Eigenschaft mit Datentyp</td><td>Nachname (VARCHAR), Geburtsdatum (DATE)</td></tr>
<tr><td><b>Primärschlüssel (PK)</b></td><td>identifiziert jeden Datensatz eindeutig, nie leer</td><td>MitarbeiterNr</td></tr>
<tr><td><b>Fremdschlüssel (FK)</b></td><td>verweist auf den Primärschlüssel einer anderen Tabelle → Beziehung</td><td>Mitarbeiter.AbteilungsNr → Abteilung.AbteilungsNr</td></tr></table>
<p><b>Beziehungen (Kardinalitäten)</b>: <b>1:1</b> (Mitarbeiter – Firmenausweis), <b>1:n</b> (Abteilung – Mitarbeiter: eine Abteilung hat viele Mitarbeiter), <b>n:m</b> (Mitarbeiter – Projekt: wird in der Datenbank über eine <b>Zwischentabelle</b> mit zwei Fremdschlüsseln aufgelöst, z. B. Mitarbeiter_Projekt).</p>
<p><b>Einfaches ER-Modell</b> (Entity-Relationship): Entitäten (Rechteck, z. B. Kunde, Bestellung), Beziehungen (Raute bzw. Linie, z. B. „gibt auf“), Attribute; Kardinalitäten an den Linien (1, n bzw. Krähenfuß-Notation). Daraus entstehen die Tabellen.</p>
<p><b>Redundanz</b> (dieselben Daten mehrfach gespeichert) führt zu <b>Anomalien</b>: Ändert man die Adresse eines Kunden nur in einer von drei Zeilen, ist die Datenbank inkonsistent. Lösung: Daten auf mehrere Tabellen aufteilen und über Schlüssel verknüpfen (Normalisierung – Details AP2).</p>
<div class="warn">SQL-Abfragen (SELECT …) und NoSQL sind seit 2025 nicht mehr AP1, sondern AP2.</div>`,
cards: [
["Client-Server-Prinzip","Clients fordern Dienste an, ein zentraler Server stellt sie bereit."],
["Peer-to-Peer","Alle Rechner gleichberechtigt, keine zentrale Verwaltung."],
["Fat Client vs. Thin Client","Fat: Programme lokal. Thin: Programme laufen auf dem Server."],
["DBMS","Datenbankmanagementsystem – Software, die die Datenbank verwaltet (z. B. MariaDB, SQL Server)."],
["Primärschlüssel","Attribut, das jeden Datensatz eindeutig identifiziert."],
["Fremdschlüssel","Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist."],
["Kardinalitäten","1:1, 1:n, n:m."],
["n:m-Beziehung in Tabellen","Wird über eine Zwischentabelle mit zwei Fremdschlüsseln aufgelöst."],
["Redundanz – Problem","Doppelt gespeicherte Daten führen zu Anomalien/Inkonsistenzen."],
["Datensatz / Attribut","Datensatz = Zeile, Attribut = Spalte."]
],
qs: [
{t:"sc",q:"Welches Attribut eignet sich als Primärschlüssel einer Tabelle „Mitarbeiter“?",o:["Nachname","Personalnummer","Abteilung","Geburtsdatum"],a:1,e:"Eindeutig und nie leer – Namen und Geburtsdaten können doppelt vorkommen."},
{t:"sc",q:"Eine Abteilung hat viele Mitarbeitende, jede Person gehört zu genau einer Abteilung. Welche Kardinalität?",o:["1:1","1:n","n:m","0:0"],a:1,e:""},
{t:"sc",q:"Mitarbeitende arbeiten in mehreren Projekten, Projekte haben mehrere Mitarbeitende. Wie wird das in Tabellen umgesetzt?",o:["Ein Feld mit allen Projektnamen","Zwischentabelle mit den Fremdschlüsseln MitarbeiterNr und ProjektNr","Alle Daten in eine Tabelle","Gar nicht möglich"],a:1,e:"n:m wird über eine Zwischentabelle aufgelöst."},
{t:"sc",q:"Was ist ein Fremdschlüssel?",o:["Ein verschlüsseltes Passwort","Ein Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist","Ein Schlüssel für den Serverraum","Eine Tabelle"],a:1,e:""},
{t:"mc",q:"Welche Vorteile bietet eine relationale Datenbank gegenüber mehreren Excel-Listen? (mehrere)",o:["Mehrbenutzerbetrieb","Weniger Redundanz","Zugriffsrechte und Datensicherung","Keine Struktur nötig"],a:[0,1,2],e:""},
{t:"sc",q:"Welche Aussage zum Client-Server-Modell ist richtig?",o:["Alle Rechner sind gleichberechtigt","Ein Server stellt zentral Dienste bereit, die Clients nutzen","Es gibt keinen Single Point of Failure","Es funktioniert nur im WLAN"],a:1,e:""},
{t:"open",q:"In einer Excel-Liste sind zu jeder Bestellung Name und Adresse des Kunden gespeichert. Erläutern Sie das Problem und eine Lösung mit einer relationalen Datenbank. (4 Punkte)",p:4,a:"Problem: Kundendaten sind redundant mehrfach gespeichert (1); bei Änderungen (z. B. neue Adresse) entstehen Inkonsistenzen/Änderungsanomalien (1). Lösung: zwei Tabellen Kunde (Primärschlüssel KundenNr) und Bestellung (1), Bestellung erhält den Fremdschlüssel KundenNr → 1:n-Beziehung, Kundendaten nur einmal gespeichert (1)."}
]});

ext("hardware", {
lesson: `
<h3>Sensoren, IoT und Industrie 4.0</h3>
<p><b>Sensoren</b> erfassen physikalische Größen und wandeln sie in elektrische Signale: Temperatur (Serverraum, CPU), Feuchtigkeit, Bewegung/Präsenz (Licht, Alarm), Helligkeit (automatische Displayhelligkeit), Beschleunigung/Lage (Smartphone dreht Bild, Festplatten-Fallschutz), Näherung, Fingerabdruck/IR-Kamera (biometrische Anmeldung), Rauch, Tür-/Fensterkontakt, GPS. <b>Aktoren</b> setzen Signale in Aktionen um (Lüfter, Motor, Ventil, Relais).<br>
<b>IoT</b> (Internet of Things): vernetzte Geräte mit Sensoren/Aktoren (Smart Building, Umgebungsüberwachung im Serverraum). <b>Industrie 4.0</b>: Vernetzung von Maschinen, Produkten und IT (cyber-physische Systeme, Smart Factory, vorausschauende Wartung/Predictive Maintenance, digitaler Zwilling). Risiken: unsichere Standardpasswörter, fehlende Updates → IoT-Geräte in eigenes VLAN, Firmware aktuell halten.</p>
<h3>Weitere Geräteklassen</h3>
<p><b>All-in-One-PC</b>: Rechner im Monitorgehäuse – platzsparend, wenig Kabel, schick für Empfang/Kundenbereich; aber schlecht aufrüstbar, bei Defekt fällt alles aus. <b>Mini-PC</b>, <b>Thin Client</b>, <b>Workstation</b>, <b>Convertible/2-in-1</b> (Notebook mit Touch, umklappbar).</p>
<h3>Wichtige BIOS/UEFI-Einstellungen</h3>
<p>Bootreihenfolge (USB/Netzwerk-PXE für Installation), Secure Boot an/aus, TPM aktivieren, Virtualisierung (Intel VT-x / AMD-V) für Hyper-V/WSL/Docker, Administrator-/Setup-Passwort, Wake-on-LAN, SATA-Modus (AHCI), Datum/Uhrzeit, Firmware-Update.</p>
<h3>Elektrische Sicherheit (Schutzmaßnahmen nach DIN VDE 0100-410)</h3>
<table><tr><th>Schutzklasse</th><th>Prinzip</th><th>Beispiel</th></tr>
<tr><td>I</td><td>Schutzleiter (PE, grün-gelb) am Metallgehäuse</td><td>Desktop-PC, Server, Drucker</td></tr>
<tr><td>II</td><td>Schutzisolierung (doppelte/verstärkte Isolierung), kein Schutzleiter, Symbol: zwei ineinanderliegende Quadrate</td><td>Notebook-Netzteil, Monitor</td></tr>
<tr><td>III</td><td>Schutzkleinspannung (SELV, max. 50 V AC / 120 V DC)</td><td>USB-Geräte, Telefone, PoE</td></tr></table>
<p><b>Fehlerstrom-Schutzschalter (RCD/FI)</b> schaltet ab, wenn Strom über einen falschen Weg (z. B. den Menschen) fließt. Elektrische Geräte im Betrieb werden regelmäßig nach <b>DGUV Vorschrift 3</b> geprüft (Prüfsiegel). Arbeiten an elektrischen Anlagen nur durch Elektrofachkräfte.</p>`,
cards: [
["Sensor vs. Aktor","Sensor erfasst Größen (Temperatur, Bewegung) → Signal. Aktor führt aus (Lüfter, Motor)."],
["Beispiele für Sensoren am Arbeitsplatz","Helligkeits-, Lage-/Beschleunigungs-, Fingerabdruck-, Temperatur-, Präsenzsensor."],
["IoT","Internet of Things – vernetzte Geräte mit Sensoren/Aktoren."],
["Industrie 4.0","Vernetzung von Produktion, Maschinen und IT (Smart Factory, Predictive Maintenance)."],
["All-in-One-PC – Vor-/Nachteil","+ platzsparend, wenig Kabel. − schlecht aufrüstbar, Defekt betrifft alles."],
["UEFI-Einstellung für Hyper-V/Docker","Virtualisierung aktivieren (Intel VT-x / AMD-V)."],
["Schutzklasse I / II / III","I: Schutzleiter. II: Schutzisolierung. III: Schutzkleinspannung."],
["RCD / FI-Schalter","Fehlerstrom-Schutzschalter – schaltet bei Fehlerstrom (z. B. durch den Körper) ab."],
["DGUV Vorschrift 3","Regelmäßige Prüfung elektrischer Betriebsmittel."]
],
qs: [
{t:"sc",q:"Welcher Sensor sorgt dafür, dass sich die Bildschirmhelligkeit eines Notebooks automatisch anpasst?",o:["Beschleunigungssensor","Umgebungslichtsensor","Temperatursensor","GPS"],a:1,e:""},
{t:"sc",q:"Ein Serverraum soll bei Überhitzung automatisch Alarm schlagen. Was wird benötigt?",o:["Helligkeitssensor","Temperatursensor mit Monitoring/Alarmierung","Fingerabdrucksensor","Mikrofon"],a:1,e:""},
{t:"sc",q:"Ein Notebook-Netzteil trägt das Symbol „Quadrat im Quadrat“. Welche Schutzklasse?",o:["I","II","III","0"],a:1,e:"Schutzisolierung."},
{t:"sc",q:"Welche UEFI-Einstellung muss für WSL2/Docker/Hyper-V aktiviert sein?",o:["Wake-on-LAN","Hardware-Virtualisierung (VT-x/AMD-V)","Legacy-Boot","Num-Lock"],a:1,e:""},
{t:"sc",q:"Wofür eignet sich ein All-in-One-PC besonders?",o:["CAD-Workstation mit Aufrüstbedarf","Empfang oder Kundenbereich mit wenig Platz","Serverraum","Lager"],a:1,e:""},
{t:"open",q:"Ihre Firma will IoT-Sensoren (Temperatur, Tür) im Gebäude einsetzen. Nennen Sie zwei Sicherheitsmaßnahmen. (2 Punkte)",p:2,a:"Je 1: Standardpasswörter ändern; eigenes VLAN/Netzsegment für IoT; Firmware regelmäßig aktualisieren; nicht benötigte Dienste/Fernzugriff deaktivieren; verschlüsselte Kommunikation; nur Geräte mit Herstellersupport."}
]});

ext("cloud", {
lesson: `
<h3>Desktop as a Service & weitere Cloud-Begriffe</h3>
<p><b>DaaS</b> (Desktop as a Service): kompletter virtueller Windows-Desktop aus der Cloud, monatlich pro Benutzer bezahlt (z. B. Windows 365, Azure Virtual Desktop). Zugriff von jedem Gerät (auch Thin Client, privates Tablet), Daten bleiben im Rechenzentrum, schnelle Bereitstellung für neue oder befristete Mitarbeitende – aber internetabhängig und laufende Kosten.</p>
<h3>Social-Media- und Kommunikationssysteme im Unternehmen</h3>
<p>Externe Social Media (LinkedIn, Instagram, YouTube) für Marketing, Recruiting, Kundenservice; interne Enterprise Social Networks (Viva Engage, Teams-Communities, Intranet) für Austausch. Wichtig: <b>Social-Media-Richtlinie</b> (wer darf was posten), Datenschutz (keine Kundendaten, Einwilligung bei Fotos), Urheberrecht bei Bildern, Impressumspflicht, Schutz vor Social Engineering (öffentlich geteilte Infos nutzen Angreifer).</p>
<h3>KI-Software einrichten und im Projekt nutzen</h3>
<ul><li><b>Einrichten</b>: Lizenzen zuweisen (z. B. Copilot pro Benutzer), Datenschutz-/Mandanteneinstellungen prüfen (Daten nicht zum Training, Speicherort EU), Zugriffsrechte beachten (KI sieht, was der Nutzer sehen darf → Berechtigungen vorher aufräumen), Richtlinie und Schulung (KI-Kompetenz), ggf. lokale KI-Modelle für sensible Daten.</li>
<li><b>Im Projekt</b>: Protokolle zusammenfassen, Aufgaben/Risiken sammeln, Texte und Präsentationen entwerfen, Code-Assistenten (z. B. GitHub Copilot) für Entwicklung, Tests und Dokumentation – Ergebnisse immer fachlich prüfen.</li></ul>`,
cards: [
["DaaS","Desktop as a Service – virtueller Desktop aus der Cloud pro Benutzer/Monat (z. B. Windows 365)."],
["Social-Media-Richtlinie","Regelt, wer was im Namen des Unternehmens veröffentlichen darf (Datenschutz, Urheberrecht, Ton)."],
["KI-Software einrichten – Punkte","Lizenzen, Datenschutzeinstellungen, Berechtigungen prüfen, Richtlinie, Schulung."],
["KI-Codeassistent","Werkzeug, das beim Programmieren Code vorschlägt (z. B. GitHub Copilot) – Ergebnis prüfen."]
],
qs: [
{t:"sc",q:"Ein Unternehmen stellt 10 befristete Projektmitarbeitende ein, die von eigenen Geräten auf einen Firmen-Windows-Desktop zugreifen sollen. Was passt?",o:["Desktop as a Service","On-Premises-Mailserver","Floppy-Disk","Peer-to-Peer"],a:0,e:"Schnell bereitgestellt, Daten bleiben zentral, monatlich kündbar."},
{t:"sc",q:"Warum sollten vor der Einführung eines KI-Assistenten mit Zugriff auf Unternehmensdaten die Berechtigungen geprüft werden?",o:["Damit die KI schneller ist","Weil die KI alles findet, was der Nutzer sehen darf – zu weit gefasste Rechte werden sonst sichtbar","Wegen der Lizenzkosten","Gar nicht nötig"],a:1,e:""}
]});

ext("datenschutz", {
lesson: `
<h3>Einwilligung und ihre Konsequenzen</h3>
<ul><li>Muss <b>freiwillig</b>, <b>informiert</b>, für einen <b>bestimmten Zweck</b> und <b>eindeutig</b> (aktive Handlung, kein vorangekreuztes Kästchen) erfolgen (Art. 4 Nr. 11, Art. 7).</li>
<li>Der Verantwortliche muss sie <b>nachweisen</b> können (Dokumentation).</li>
<li><b>Jederzeit widerrufbar</b> – so einfach wie erteilt; ab dem Widerruf dürfen die Daten nicht mehr auf dieser Grundlage verarbeitet werden (bisherige Verarbeitung bleibt rechtmäßig), ggf. Löschung.</li>
<li><b>Kopplungsverbot</b>: Ein Vertrag darf nicht von einer Einwilligung abhängig gemacht werden, die dafür nicht nötig ist.</li>
<li>Im Arbeitsverhältnis wegen Abhängigkeit nur eingeschränkt freiwillig. Für Minderjährige unter 16 Jahren bei Online-Diensten Zustimmung der Eltern.</li></ul>
<h3>Datenschutzbeauftragter vs. IT-Sicherheitsbeauftragter</h3>
<table><tr><th></th><th>Datenschutzbeauftragte(r) (DSB)</th><th>IT-Sicherheitsbeauftragte(r) (ISB)</th></tr>
<tr><td>Schützt</td><td>Personen und ihre personenbezogenen Daten</td><td>alle Informationen und IT-Systeme (V, I, V)</td></tr>
<tr><td>Grundlage</td><td>DSGVO/BDSG – gesetzlich vorgeschrieben ab i. d. R. 20 Personen</td><td>BSI-Grundschutz/ISMS – meist freiwillig (Pflicht z. B. bei KRITIS/Behörden)</td></tr>
<tr><td>Aufgaben</td><td>beraten, überwachen, schulen, Ansprechpartner für Betroffene und Aufsichtsbehörde</td><td>Sicherheitskonzept, Richtlinien, Vorfallbearbeitung, Awareness</td></tr>
<tr><td>Stellung</td><td>weisungsfrei, Kündigungsschutz, kann extern sein</td><td>berichtet an die Leitung</td></tr></table>
<p>Beide Rollen sollten wegen möglicher Interessenkonflikte nicht von der IT-Leitung selbst übernommen werden.</p>
<h3>Webseiten & Kontaktformulare</h3>
<ul><li><b>Kontaktformular</b>: nur nötige Pflichtfelder (Datenminimierung), Übertragung per HTTPS, Hinweis auf Datenschutzerklärung, Zweckbindung (nur zur Beantwortung), Löschfrist.</li>
<li><b>Impressumspflicht</b> nach dem <b>Digitale-Dienste-Gesetz (DDG)</b> (seit 2024, ersetzt das TMG): Name, Anschrift, Kontakt, Register, USt-IdNr.</li>
<li><b>Cookies</b> (TDDDG): technisch notwendige Cookies erlaubt; Tracking/Marketing nur nach Einwilligung (Cookie-Banner mit gleichwertiger Ablehnen-Option).</li>
<li><b>Standard-Datenschutzmodell (SDM)</b>: Methode der Datenschutzbehörden, um DSGVO-Anforderungen in TOM zu übersetzen (Gewährleistungsziele wie Datenminimierung, Verfügbarkeit, Integrität, Vertraulichkeit, Nichtverkettung, Transparenz, Intervenierbarkeit).</li></ul>`,
cards: [
["Anforderungen an eine Einwilligung","Freiwillig, informiert, zweckgebunden, eindeutig (aktive Handlung), nachweisbar."],
["Widerruf der Einwilligung","Jederzeit möglich, so einfach wie die Erteilung; wirkt für die Zukunft."],
["Kopplungsverbot","Vertrag darf nicht von einer dafür unnötigen Einwilligung abhängig gemacht werden."],
["DSB vs. ISB","DSB: schützt personenbezogene Daten, gesetzlich (DSGVO/BDSG). ISB: schützt alle Informationen/Systeme (Grundschutz/ISMS)."],
["DDG","Digitale-Dienste-Gesetz (seit 2024) – u. a. Impressumspflicht, ersetzt das TMG."],
["Cookies – Regel","Notwendige Cookies erlaubt, Tracking nur mit Einwilligung (TDDDG)."],
["Kontaktformular datenschutzkonform","Wenige Pflichtfelder, HTTPS, Datenschutzhinweis, Zweckbindung, Löschfrist."]
],
qs: [
{t:"sc",q:"Ein Newsletter-Formular hat ein bereits angekreuztes Kästchen „Ich willige ein“. Ist das zulässig?",o:["Ja","Nein – eine Einwilligung erfordert eine aktive, eindeutige Handlung","Nur bei Firmenkunden","Nur mit Impressum"],a:1,e:""},
{t:"sc",q:"Eine Kundin widerruft ihre Einwilligung zum Newsletter. Was gilt?",o:["Der Widerruf gilt erst nach einem Jahr","Ab sofort keine Verarbeitung mehr auf dieser Grundlage; bisherige Verarbeitung bleibt rechtmäßig","Alle Rechnungen müssen gelöscht werden","Der Widerruf ist nur schriftlich per Post möglich"],a:1,e:""},
{t:"sc",q:"Wer berät und überwacht im Unternehmen die Einhaltung der DSGVO?",o:["IT-Sicherheitsbeauftragte(r)","Datenschutzbeauftragte(r)","Betriebsrat","Systemadministrator"],a:1,e:""},
{t:"sc",q:"Welches Gesetz regelt seit 2024 die Impressumspflicht für Webseiten?",o:["TMG","DDG","BGB","ElektroG"],a:1,e:"Das Digitale-Dienste-Gesetz hat das Telemediengesetz abgelöst."},
{t:"open",q:"Erläutern Sie zwei Unterschiede zwischen Datenschutzbeauftragtem und IT-Sicherheitsbeauftragtem. (4 Punkte)",p:4,a:"Je Unterschied 2: Schutzobjekt – DSB schützt Personen bzw. personenbezogene Daten, ISB alle Informationen und IT-Systeme (Vertraulichkeit, Integrität, Verfügbarkeit). Rechtsgrundlage – DSB ist nach DSGVO/BDSG (ab 20 Personen) gesetzlich vorgeschrieben, ISB meist freiwillig im Rahmen eines ISMS/BSI-Grundschutz. Stellung – DSB weisungsfrei mit Kündigungsschutz, auch extern möglich."}
]});

ext("sicherheit", {
lesson: `
<h3>Personal Firewall anpassen (Windows Defender Firewall)</h3>
<ul><li><b>Netzwerkprofile</b>: Domäne (Firmennetz), Privat (vertrauenswürdig), Öffentlich (Hotel, Bahn – am restriktivsten). Unterwegs immer „Öffentlich“.</li>
<li><b>Regeln</b> für eingehenden und ausgehenden Verkehr: nach Programm, Port/Protokoll (z. B. TCP 3389 nur aus dem Firmennetz), Remote-IP-Bereich; Standard: eingehend blockieren, ausgehend erlauben.</li>
<li>Zentrale Verteilung per <b>GPO oder Intune</b>, Nutzer dürfen Regeln nicht selbst ändern; Protokollierung blockierter Verbindungen.</li></ul>
<h3>ISMS & Verfügbarkeit</h3>
<p><b>ISMS</b> (Informationssicherheits-Managementsystem): Regeln, Verfahren und Verantwortlichkeiten, um Informationssicherheit dauerhaft zu planen, umzusetzen, zu prüfen und zu verbessern (PDCA). Du unterstützt es, indem du Richtlinien einhältst, Vorfälle meldest und Maßnahmen dokumentierst.<br>
<b>NAS</b> (Network Attached Storage): Netzwerkspeicher für Freigaben und Backups – mit mehreren Platten gespiegelt für Verfügbarkeit, mit Snapshots gegen versehentliches Löschen; ersetzt aber kein externes/offline Backup.<br>
<b>Gesetzlicher Rahmen</b>: IT-Sicherheitsgesetz/BSI-Gesetz und die EU-<b>NIS-2</b>-Richtlinie verpflichten Betreiber kritischer Infrastrukturen (KRITIS) und viele mittlere/große Unternehmen zu Risikomanagement, Meldung erheblicher Sicherheitsvorfälle und Mindestmaßnahmen.</p>`,
cards: [
["Firewall-Profile Windows","Domäne, Privat, Öffentlich (am restriktivsten)."],
["Personal Firewall – Standardregel","Eingehend blockieren, ausgehend erlauben; Ausnahmen gezielt nach Programm/Port/IP."],
["ISMS","Managementsystem, um Informationssicherheit dauerhaft zu planen, umzusetzen, zu prüfen und zu verbessern."],
["NAS – Einsatz","Netzwerkspeicher für Freigaben/Backups, mit Spiegelung und Snapshots – ersetzt kein Offline-Backup."],
["NIS-2","EU-Richtlinie: Pflichten zu Risikomanagement und Meldung von Sicherheitsvorfällen für viele Unternehmen."]
],
qs: [
{t:"sc",q:"Ein Notebook verbindet sich mit dem WLAN eines Hotels. Welches Firewall-Profil sollte aktiv sein?",o:["Domäne","Privat","Öffentlich","Keines"],a:2,e:"Das restriktivste Profil für fremde Netze."},
{t:"sc",q:"Remotedesktop soll nur aus dem Firmennetz 10.0.0.0/16 möglich sein. Wie wird die Personal Firewall angepasst?",o:["Port 3389 eingehend für alle freigeben","Eingehende Regel für TCP 3389 nur mit Remote-IP-Bereich 10.0.0.0/16","Firewall abschalten","Ausgehend 3389 blockieren"],a:1,e:""},
{t:"sc",q:"Was ist ein ISMS?",o:["Ein Virenscanner","Ein Managementsystem, das Informationssicherheit dauerhaft steuert und verbessert","Ein E-Mail-Programm","Eine Firewall"],a:1,e:""}
]});

ext("programmierung", {
lesson: `
<h3>Sichtbarkeit & Klassendiagramm (Grundlagen)</h3>
<table><tr><th>UML</th><th>Sichtbarkeit</th><th>Zugriff</th></tr>
<tr><td>+</td><td>public</td><td>von überall</td></tr>
<tr><td>−</td><td>private</td><td>nur innerhalb der Klasse</td></tr>
<tr><td>#</td><td>protected</td><td>Klasse und abgeleitete Klassen</td></tr></table>
<pre>┌──────────────────────────┐
│        Notebook          │  ← Klassenname
├──────────────────────────┤
│ - seriennummer: String   │  ← Attribute (privat)
│ - ramGB: int             │
├──────────────────────────┤
│ + starten(): void        │  ← Methoden (öffentlich)
│ + getRamGB(): int        │
└──────────────────────────┘</pre>
<p>Ein <b>Objekt</b> ist eine konkrete Instanz, z. B. <code>nb1 : Notebook</code> mit seriennummer = "4711". Über <b>Getter/Setter</b> wird kontrolliert auf private Attribute zugegriffen (Kapselung).</p>
<h3>Use-Case-Diagramm (Überblick)</h3>
<p>Zeigt <b>Akteure</b> (Strichmännchen, z. B. Mitarbeiter, Admin) und die <b>Anwendungsfälle</b> (Ellipsen, z. B. „Ticket erstellen“) innerhalb der <b>Systemgrenze</b> (Rechteck) – also <i>was</i> ein System für wen leistet, nicht wie.</p>
<h3>Bildschirmmasken & Corporate Identity</h3>
<p><b>Corporate Identity (CI)</b> bzw. <b>Corporate Design (CD)</b>: einheitliches Erscheinungsbild des Unternehmens – Logo, Farben, Schriftarten, Bildsprache, Tonalität. Eingabemasken und Software sollten das CD übernehmen (Wiedererkennung, Professionalität). Gute <b>Maskengestaltung</b>: logische Gruppierung und Reihenfolge (Tab-Reihenfolge), Pflichtfelder kennzeichnen, sinnvolle Vorbelegungen, Eingabeprüfung mit verständlichen Fehlermeldungen, ausreichender Kontrast und Schriftgröße (Barrierefreiheit), konsistente Bedienelemente (ISO 9241-110).</p>
<h3>HTML, XML, JSON & Dateiformate</h3>
<p><b>HTML</b>: Auszeichnungssprache für Webseiten (<code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;img alt="…"&gt;</code> – Alternativtext für Barrierefreiheit). <b>XML</b>: strukturierte Daten mit eigenen Tags, muss wohlgeformt sein (jedes Tag geschlossen, korrekt verschachtelt). <b>JSON</b>: leichtgewichtiges Datenformat für APIs (<code>{"name": "Isa", "ram": 16}</code>). <b>CSV</b>: Tabellendaten als Text.</p>
<table><tr><th>Format</th><th>Einsatz</th></tr>
<tr><td>PDF / PDF/A</td><td>Dokumente plattformunabhängig; PDF/A für Langzeitarchivierung</td></tr>
<tr><td>DOCX / XLSX / ODT</td><td>Office-Dokumente (ODT = offenes Format)</td></tr>
<tr><td>JPEG / PNG / SVG / WebP</td><td>Foto (verlustbehaftet) / Grafik mit Transparenz (verlustfrei) / Vektorgrafik (skalierbar) / Web</td></tr>
<tr><td>MP4 (H.264/H.265) / MP3</td><td>Video / Audio (komprimiert)</td></tr>
<tr><td>ZIP / 7z</td><td>Archive, verlustfrei komprimiert</td></tr></table>`,
cards: [
["UML-Sichtbarkeit + / − / #","public / private / protected."],
["private","Zugriff nur innerhalb der eigenen Klasse."],
["Getter/Setter","Methoden für kontrollierten Lese-/Schreibzugriff auf private Attribute."],
["Use-Case-Diagramm","Akteure + Anwendungsfälle innerhalb der Systemgrenze – zeigt WAS das System leistet."],
["Corporate Identity / Corporate Design","Einheitliches Erscheinungsbild (Logo, Farben, Schrift) – auch in Bildschirmmasken."],
["Gute Bildschirmmaske","Logische Gruppierung, Tab-Reihenfolge, Pflichtfelder markiert, Eingabeprüfung, Kontrast, CD."],
["XML wohlgeformt","Jedes Tag geschlossen, korrekt verschachtelt, ein Wurzelelement."],
["JSON","Leichtgewichtiges Datenformat {\"schlüssel\": wert}, typisch für APIs."],
["PDF/A","PDF-Variante für die Langzeitarchivierung."],
["PNG vs. JPEG vs. SVG","PNG: verlustfrei, Transparenz. JPEG: Fotos, verlustbehaftet. SVG: Vektor, beliebig skalierbar."]
],
qs: [
{t:"sc",q:"Was bedeutet das „−“ vor einem Attribut im UML-Klassendiagramm?",o:["public","private","protected","static"],a:1,e:""},
{t:"sc",q:"Warum werden Attribute meist private deklariert?",o:["Damit sie schneller sind","Kapselung – Zugriff nur kontrolliert über Methoden","Weil UML es verlangt","Damit sie öffentlich sind"],a:1,e:""},
{t:"sc",q:"Welches Diagramm zeigt Akteure und Anwendungsfälle eines Systems?",o:["Aktivitätsdiagramm","Use-Case-Diagramm","Klassendiagramm","Gantt-Diagramm"],a:1,e:""},
{t:"mc",q:"Welche Punkte gehören zu einer guten, CI-konformen Eingabemaske? (mehrere)",o:["Firmenfarben und -logo","Pflichtfelder kennzeichnen","Zufällige Tab-Reihenfolge","Verständliche Fehlermeldungen"],a:[0,1,3],e:""},
{t:"sc",q:"Welches Format eignet sich für ein Logo, das auf Visitenkarte und Plakat gleich scharf sein soll?",o:["JPEG","SVG","BMP","GIF"],a:1,e:"Vektorgrafik, verlustfrei skalierbar."},
{t:"sc",q:"Welches Dateiformat ist für die Langzeitarchivierung von Rechnungen vorgesehen?",o:["DOCX","PDF/A","TXT","PNG"],a:1,e:""}
]});
