# 📜 Datenschutz & Entsorgung

*Bereich: Sicherheit · Prüfungsrelevanz: ★★★*

> DSGVO-Grundsätze, Rechtsgrundlagen, Betroffenenrechte, TOM, AV-Vertrag, Meldepflicht, DIN 66399, ElektroG.

[⬅ Inhaltsverzeichnis](README.md)

---

## Grundbegriffe

- **Personenbezogene Daten** (Art. 4 DSGVO): alle Informationen über eine identifizierte oder identifizierbare natürliche Person – Name, Adresse, E-Mail, IP-Adresse, Personalnummer, Standortdaten, Fotos.
- **Besondere Kategorien** (Art. 9): Gesundheit, ethnische Herkunft, politische Meinung, Religion, Gewerkschaftszugehörigkeit, genetische/biometrische Daten, Sexualleben – besonders geschützt.
- **Verarbeitung**: jeder Vorgang – Erheben, Speichern, Ändern, Abfragen, Übermitteln, Löschen.
- **Verantwortlicher** (entscheidet über Zweck und Mittel) vs. **Auftragsverarbeiter** (verarbeitet im Auftrag, z. B. Cloud-Anbieter).
- **Datenschutz ≠ Datensicherheit**: Datenschutz schützt die *Person* (informationelle Selbstbestimmung); Datensicherheit schützt *alle Daten* vor Verlust/Manipulation (Mittel zum Zweck).
- **Pseudonymisierung**: Personenbezug nur mit Zusatzwissen herstellbar (bleibt personenbezogen). **Anonymisierung**: Personenbezug dauerhaft entfernt → DSGVO gilt nicht mehr.

## Grundsätze (Art. 5 DSGVO)

1. **Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz**
2. **Zweckbindung** – nur für festgelegte, eindeutige Zwecke
3. **Datenminimierung** – nur so viel wie nötig
4. **Richtigkeit** – sachlich richtig und aktuell
5. **Speicherbegrenzung** – nur so lange wie nötig
6. **Integrität und Vertraulichkeit** – angemessene Sicherheit
7. **Rechenschaftspflicht** – Verantwortlicher muss Einhaltung nachweisen

## Rechtsgrundlagen (Art. 6) – Verbot mit Erlaubnisvorbehalt

Verarbeitung ist nur erlaubt mit: a) **Einwilligung** (freiwillig, informiert, widerrufbar), b) **Vertragserfüllung**, c) **rechtlicher Verpflichtung** (z. B. Steuerrecht), d) lebenswichtigen Interessen, e) öffentlicher Aufgabe, f) **berechtigtem Interesse** (mit Interessenabwägung). Im Beschäftigtenkontext zusätzlich § 26 BDSG.

## Betroffenenrechte

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

Frist zur Beantwortung: **unverzüglich, spätestens innerhalb eines Monats** (verlängerbar um 2 Monate). Auskunft i. d. R. kostenlos. Löschung kann durch gesetzliche Aufbewahrungspflichten eingeschränkt sein (dann sperren/einschränken).

## Technische und organisatorische Maßnahmen (Art. 32)

Der Verantwortliche muss ein dem Risiko angemessenes Schutzniveau sicherstellen – unter Berücksichtigung von Stand der Technik, Kosten, Art/Umfang der Verarbeitung und Risiko. Genannt werden u. a.: **Pseudonymisierung und Verschlüsselung**; Sicherstellung von **Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit**; rasche **Wiederherstellbarkeit** nach Zwischenfällen; Verfahren zur **regelmäßigen Überprüfung** der Wirksamkeit.

<table><tr><th>Kontrollziel (klassisch, BDSG alt – oft noch abgefragt)</th><th>Beispiel</th></tr>
<tr><td>Zutrittskontrolle (Räume)</td><td>Chipkarte, Schließanlage, Serverraum abschließen</td></tr>
<tr><td>Zugangskontrolle (Systeme)</td><td>Passwort, MFA, Bildschirmsperre</td></tr>
<tr><td>Zugriffskontrolle (Daten)</td><td>Berechtigungskonzept, Need-to-know, Rollen</td></tr>
<tr><td>Weitergabekontrolle</td><td>Verschlüsselung (TLS, VPN), verschlüsselte Datenträger</td></tr>
<tr><td>Eingabekontrolle</td><td>Protokollierung, wer wann was geändert hat</td></tr>
<tr><td>Auftragskontrolle</td><td>AV-Vertrag, Kontrolle des Dienstleisters</td></tr>
<tr><td>Verfügbarkeitskontrolle</td><td>Backup, USV, Virenschutz, Brandschutz</td></tr>
<tr><td>Trennungsgebot</td><td>getrennte Verarbeitung für verschiedene Zwecke/Mandanten</td></tr></table>

## Weitere Pflichten

- **Datenschutzbeauftragter** (§ 38 BDSG): Pflicht, wenn i. d. R. mindestens **20 Personen** ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind (oder bei Kerntätigkeit mit sensiblen Daten). Berät, überwacht, schult; weisungsfrei, Kündigungsschutz.
- **Verzeichnis von Verarbeitungstätigkeiten** (Art. 30).
- **Auftragsverarbeitungsvertrag (AVV)** (Art. 28) mit Dienstleistern (Cloud, Fernwartung, Aktenvernichter).
- **Datenschutz-Folgenabschätzung** (Art. 35) bei hohem Risiko (z. B. Videoüberwachung, umfangreiche Gesundheitsdaten).
- **Meldepflicht** (Art. 33): Datenpanne an die Aufsichtsbehörde **binnen 72 Stunden**; bei hohem Risiko auch Betroffene informieren (Art. 34).
- **Privacy by Design / by Default** (Art. 25): Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen.
- **Drittlandübermittlung** (außerhalb EU/EWR) nur mit Angemessenheitsbeschluss (z. B. EU-US Data Privacy Framework), Standardvertragsklauseln o. Ä.
- **Bußgelder**: bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes (höherer Wert).

## Sichere Datenträgervernichtung – DIN 66399

Formatieren oder „Zurücksetzen“ reicht nicht – Daten sind wiederherstellbar. Möglichkeiten: zertifiziertes **Überschreiben/Löschsoftware** (HDD), **Secure Erase**/Crypto-Erase (SSD), **Degaussen** (Entmagnetisieren, nur magnetische Medien), **physische Zerstörung** (Schreddern). Externe Dienstleister: AV-Vertrag + Vernichtungsprotokoll/Zertifikat.

<table><tr><th>Schutzklasse</th><th>Schutzbedarf</th><th>Beispiel</th></tr>
<tr><td>1</td><td>normal (interne Daten)</td><td>Rundschreiben, Werbung</td></tr>
<tr><td>2</td><td>hoch (vertrauliche Daten)</td><td>personenbezogene Daten, Kundendaten, Personalakten</td></tr>
<tr><td>3</td><td>sehr hoch (geheime Daten)</td><td>Patientendaten, Forschung, Berufsgeheimnisträger</td></tr></table>

7 **Sicherheitsstufen** (1–7): je höher, desto kleiner die Partikel. Personenbezogene Daten: mind. Stufe 3, besonders schützenswerte: Stufe 4+. Materialklassen: **P** Papier, **F** Film/Mikrofilm, **O** optisch (CD/DVD), **T** magnetisch (Disketten, Magnetkarten, Bänder), **H** Festplatten (magnetisch), **E** elektronische Datenträger (SSD, USB-Stick, Speicherkarten). Bezeichnung z. B. **H-4**, **E-4**, **P-4**.

## Entsorgung: ElektroG & Nachhaltigkeit

Das **Elektro- und Elektronikgerätegesetz (ElektroG)** setzt die EU-WEEE-Richtlinie um: Altgeräte dürfen nicht in den Hausmüll (Symbol: durchgestrichene Mülltonne), Hersteller sind zur Rücknahme verpflichtet, Händler mit ≥ 400 m² Elektro-Verkaufsfläche (Lebensmittelhandel ≥ 800 m² Gesamtfläche, die Elektro anbieten) müssen Kleingeräte zurücknehmen. Ziel: Schadstoffe (Blei, Quecksilber) fachgerecht entsorgen, Rohstoffe (Gold, Kupfer, seltene Erden) zurückgewinnen. Batterien: **BattG**. **Green IT**: energieeffiziente Geräte, lange Nutzung, Refurbished, Virtualisierung, Recycling.

## Einwilligung und ihre Konsequenzen

- Muss **freiwillig**, **informiert**, für einen **bestimmten Zweck** und **eindeutig** (aktive Handlung, kein vorangekreuztes Kästchen) erfolgen (Art. 4 Nr. 11, Art. 7).
- Der Verantwortliche muss sie **nachweisen** können (Dokumentation).
- **Jederzeit widerrufbar** – so einfach wie erteilt; ab dem Widerruf dürfen die Daten nicht mehr auf dieser Grundlage verarbeitet werden (bisherige Verarbeitung bleibt rechtmäßig), ggf. Löschung.
- **Kopplungsverbot**: Ein Vertrag darf nicht von einer Einwilligung abhängig gemacht werden, die dafür nicht nötig ist.
- Im Arbeitsverhältnis wegen Abhängigkeit nur eingeschränkt freiwillig. Für Minderjährige unter 16 Jahren bei Online-Diensten Zustimmung der Eltern.

## Datenschutzbeauftragter vs. IT-Sicherheitsbeauftragter

<table><tr><th></th><th>Datenschutzbeauftragte(r) (DSB)</th><th>IT-Sicherheitsbeauftragte(r) (ISB)</th></tr>
<tr><td>Schützt</td><td>Personen und ihre personenbezogenen Daten</td><td>alle Informationen und IT-Systeme (V, I, V)</td></tr>
<tr><td>Grundlage</td><td>DSGVO/BDSG – gesetzlich vorgeschrieben ab i. d. R. 20 Personen</td><td>BSI-Grundschutz/ISMS – meist freiwillig (Pflicht z. B. bei KRITIS/Behörden)</td></tr>
<tr><td>Aufgaben</td><td>beraten, überwachen, schulen, Ansprechpartner für Betroffene und Aufsichtsbehörde</td><td>Sicherheitskonzept, Richtlinien, Vorfallbearbeitung, Awareness</td></tr>
<tr><td>Stellung</td><td>weisungsfrei, Kündigungsschutz, kann extern sein</td><td>berichtet an die Leitung</td></tr></table>

Beide Rollen sollten wegen möglicher Interessenkonflikte nicht von der IT-Leitung selbst übernommen werden.

## Webseiten & Kontaktformulare

- **Kontaktformular**: nur nötige Pflichtfelder (Datenminimierung), Übertragung per HTTPS, Hinweis auf Datenschutzerklärung, Zweckbindung (nur zur Beantwortung), Löschfrist.
- **Impressumspflicht** nach dem **Digitale-Dienste-Gesetz (DDG)** (seit 2024, ersetzt das TMG): Name, Anschrift, Kontakt, Register, USt-IdNr.
- **Cookies** (TDDDG): technisch notwendige Cookies erlaubt; Tracking/Marketing nur nach Einwilligung (Cookie-Banner mit gleichwertiger Ablehnen-Option).
- **Standard-Datenschutzmodell (SDM)**: Methode der Datenschutzbehörden, um DSGVO-Anforderungen in TOM zu übersetzen (Gewährleistungsziele wie Datenminimierung, Verfügbarkeit, Integrität, Vertraulichkeit, Nichtverkettung, Transparenz, Intervenierbarkeit).

---

## 🃏 Karteikarten (31)

| Frage | Antwort |
|---|---|
| Personenbezogene Daten | Alle Infos über eine identifizierte oder identifizierbare natürliche Person (Name, E-Mail, IP, Foto …). |
| Datenschutz vs. Datensicherheit | Datenschutz schützt Personen/Persönlichkeitsrechte. Datensicherheit schützt Daten technisch vor Verlust/Manipulation. |
| Grundsätze Art. 5 DSGVO | Rechtmäßigkeit/Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität & Vertraulichkeit, Rechenschaftspflicht. |
| Datenminimierung | Nur die Daten verarbeiten, die für den Zweck wirklich nötig sind. |
| Verbot mit Erlaubnisvorbehalt | Verarbeitung ist verboten, außer eine Rechtsgrundlage (Art. 6) erlaubt sie. |
| Rechtsgrundlagen Art. 6 | Einwilligung, Vertrag, rechtliche Pflicht, lebenswichtige Interessen, öffentliche Aufgabe, berechtigtes Interesse. |
| Art. 15 DSGVO | Recht auf Auskunft. |
| Art. 16 DSGVO | Recht auf Berichtigung. |
| Art. 17 DSGVO | Recht auf Löschung („Vergessenwerden“). |
| Art. 20 DSGVO | Recht auf Datenübertragbarkeit. |
| Frist für Antwort auf Betroffenenanfragen | Unverzüglich, spätestens 1 Monat (Verlängerung um 2 Monate möglich). |
| Art. 32 DSGVO | Sicherheit der Verarbeitung: geeignete technische und organisatorische Maßnahmen (TOM). |
| Zutritts- vs. Zugangs- vs. Zugriffskontrolle | Zutritt: Räume. Zugang: Systeme/Anmeldung. Zugriff: Daten/Berechtigungen. |
| Meldefrist Datenpanne | 72 Stunden an die Aufsichtsbehörde (Art. 33). |
| Pflicht zum Datenschutzbeauftragten | Ab i. d. R. 20 Personen, die ständig automatisiert personenbezogene Daten verarbeiten (§ 38 BDSG). |
| AV-Vertrag | Vertrag mit Auftragsverarbeitern (z. B. Cloud) nach Art. 28 DSGVO. |
| Pseudonymisierung vs. Anonymisierung | Pseudonym: Personenbezug mit Zusatzwissen wiederherstellbar. Anonym: Personenbezug dauerhaft entfernt. |
| Bußgeldrahmen DSGVO | Bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes. |
| DIN 66399 – Schutzklassen | 1 normal, 2 hoch, 3 sehr hoch. |
| DIN 66399 – Materialklasse H und E | H: magnetische Festplatten. E: elektronische Datenträger (SSD, USB-Stick). |
| Mindest-Sicherheitsstufe personenbezogene Daten | Stufe 3 (sensible personenbezogene Daten: 4). |
| Warum reicht Formatieren nicht? | Daten bleiben physisch erhalten und lassen sich mit Tools wiederherstellen. |
| ElektroG | Regelt Rücknahme und umweltgerechte Entsorgung von Elektroaltgeräten (WEEE); nicht in den Hausmüll. |
| Privacy by Default | Datenschutzfreundliche Voreinstellungen – standardmäßig nur nötige Daten. |
| Anforderungen an eine Einwilligung | Freiwillig, informiert, zweckgebunden, eindeutig (aktive Handlung), nachweisbar. |
| Widerruf der Einwilligung | Jederzeit möglich, so einfach wie die Erteilung; wirkt für die Zukunft. |
| Kopplungsverbot | Vertrag darf nicht von einer dafür unnötigen Einwilligung abhängig gemacht werden. |
| DSB vs. ISB | DSB: schützt personenbezogene Daten, gesetzlich (DSGVO/BDSG). ISB: schützt alle Informationen/Systeme (Grundschutz/ISMS). |
| DDG | Digitale-Dienste-Gesetz (seit 2024) – u. a. Impressumspflicht, ersetzt das TMG. |
| Cookies – Regel | Notwendige Cookies erlaubt, Tracking nur mit Einwilligung (TDDDG). |
| Kontaktformular datenschutzkonform | Wenige Pflichtfelder, HTTPS, Datenschutzhinweis, Zweckbindung, Löschfrist. |

## ✍️ Übungsfragen (22)

**1.** Welche Information ist KEIN personenbezogenes Datum?
- A) Private E-Mail-Adresse
- B) IP-Adresse eines Kunden
- C) Durchschnittsumsatz aller Filialen
- D) Personalnummer

<details><summary>Lösung</summary>

**C) Durchschnittsumsatz aller Filialen**<br>Aggregierte Unternehmenszahl ohne Personenbezug.

</details>

**2.** Ein Onlineshop fragt bei der Bestellung nach dem Geburtsdatum, obwohl es nicht benötigt wird. Welcher Grundsatz ist verletzt?
- A) Richtigkeit
- B) Datenminimierung
- C) Speicherbegrenzung
- D) Transparenz

<details><summary>Lösung</summary>

**B) Datenminimierung**

</details>

**3.** Ein Kunde will wissen, welche Daten über ihn gespeichert sind. Welcher Artikel?
- A) Art. 15
- B) Art. 16
- C) Art. 17
- D) Art. 32

<details><summary>Lösung</summary>

**A) Art. 15**<br>Auskunftsrecht.

</details>

**4.** Ein ehemaliger Kunde verlangt, dass seine Daten gelöscht werden. Welches Recht?
- A) Art. 15 Auskunft
- B) Art. 16 Berichtigung
- C) Art. 17 Löschung
- D) Art. 20 Übertragbarkeit

<details><summary>Lösung</summary>

**C) Art. 17 Löschung**

</details>

**5.** Innerhalb welcher Frist muss eine Datenpanne der Aufsichtsbehörde gemeldet werden?
- A) 24 Stunden
- B) 72 Stunden
- C) 1 Woche
- D) 1 Monat

<details><summary>Lösung</summary>

**B) 72 Stunden**<br>Art. 33.

</details>

**6.** Ein Unternehmen nutzt einen externen Cloud-Dienst für Personaldaten. Was ist zwingend abzuschließen?
- A) Leasingvertrag
- B) Auftragsverarbeitungsvertrag
- C) Werkvertrag
- D) SLA

<details><summary>Lösung</summary>

**B) Auftragsverarbeitungsvertrag**<br>Art. 28 DSGVO.

</details>

**7.** Eine Chipkarte für die Tür zum Serverraum ist eine Maßnahme der …
- A) Zugangskontrolle
- B) Zutrittskontrolle
- C) Zugriffskontrolle
- D) Eingabekontrolle

<details><summary>Lösung</summary>

**B) Zutrittskontrolle**<br>Räume = Zutritt.

</details>

**8.** Ein Berechtigungskonzept, das nur der Personalabteilung Lesezugriff auf Gehaltsdaten gibt, ist …
- A) Zutrittskontrolle
- B) Zugangskontrolle
- C) Zugriffskontrolle
- D) Verfügbarkeitskontrolle

<details><summary>Lösung</summary>

**C) Zugriffskontrolle**

</details>

**9.** Welche Materialklasse nach DIN 66399 gilt für SSDs und USB-Sticks?
- A) H
- B) E
- C) O
- D) T

<details><summary>Lösung</summary>

**B) E**<br>E = elektronische Datenträger.

</details>

**10.** Festplatten mit Personaldaten sollen vernichtet werden. Welche Schutzklasse ist angemessen?
- A) Schutzklasse 1
- B) Schutzklasse 2
- C) Keine – Formatieren reicht
- D) Schutzklasse 0

<details><summary>Lösung</summary>

**B) Schutzklasse 2**<br>Personenbezogene/vertrauliche Daten = hoher Schutzbedarf.

</details>

**11.** Wie müssen alte Monitore entsorgt werden?
- A) Restmüll
- B) Über zertifizierte Rücknahme/Wertstoffhof nach ElektroG
- C) Sperrmüll
- D) Gelber Sack

<details><summary>Lösung</summary>

**B) Über zertifizierte Rücknahme/Wertstoffhof nach ElektroG**

</details>

**12.** Welche Maßnahmen nennt Art. 32 DSGVO ausdrücklich? (mehrere)
- A) Pseudonymisierung und Verschlüsselung
- B) Rasche Wiederherstellbarkeit nach Zwischenfällen
- C) Regelmäßige Überprüfung der Wirksamkeit
- D) Jährliche Neuinstallation aller PCs

<details><summary>Lösung</summary>

**A) Pseudonymisierung und Verschlüsselung, B) Rasche Wiederherstellbarkeit nach Zwischenfällen, C) Regelmäßige Überprüfung der Wirksamkeit**

</details>

**13.** Ab wie vielen Personen, die ständig automatisiert personenbezogene Daten verarbeiten, ist in Deutschland i. d. R. ein Datenschutzbeauftragter Pflicht?
- A) 10
- B) 20
- C) 50
- D) 250

<details><summary>Lösung</summary>

**B) 20**<br>§ 38 BDSG.

</details>

**14.** Was unterscheidet Anonymisierung von Pseudonymisierung?
- A) Nichts
- B) Bei Anonymisierung ist der Personenbezug dauerhaft entfernt
- C) Pseudonymisierte Daten fallen nicht unter die DSGVO
- D) Anonymisierung ist umkehrbar

<details><summary>Lösung</summary>

**B) Bei Anonymisierung ist der Personenbezug dauerhaft entfernt**

</details>

**15.** Ein Mitarbeiter fragt, warum das bloße Formatieren alter Festplatten vor dem Verkauf nicht ausreicht. Erklären Sie und nennen Sie zwei geeignete Verfahren. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Beim Formatieren werden nur die Verwaltungsstrukturen des Dateisystems neu angelegt, die Daten bleiben physisch erhalten und können mit Wiederherstellungssoftware rekonstruiert werden (2). Verfahren (je 1): mehrfaches Überschreiben mit zertifizierter Löschsoftware (HDD); Secure Erase/Crypto-Erase (SSD); Degaussing (magnetisch); physische Vernichtung nach DIN 66399 (z. B. H-4/E-4) durch zertifizierten Dienstleister mit Protokoll.

</details>

**16.** Nennen Sie vier Grundsätze der Datenverarbeitung nach Art. 5 DSGVO. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: Rechtmäßigkeit, Treu und Glauben, Transparenz; Zweckbindung; Datenminimierung; Richtigkeit; Speicherbegrenzung; Integrität und Vertraulichkeit; Rechenschaftspflicht.

</details>

**17.** Ordnen Sie folgende Maßnahmen den Kategorien technisch bzw. organisatorisch zu: Festplattenverschlüsselung, Datenschutzschulung, Berechtigungskonzept, automatische Bildschirmsperre. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Festplattenverschlüsselung – technisch (1); Datenschutzschulung – organisatorisch (1); Berechtigungskonzept – organisatorisch (als Regelwerk; die Umsetzung über Rechte ist technisch) (1); automatische Bildschirmsperre – technisch (1).

</details>

**18.** Ein Newsletter-Formular hat ein bereits angekreuztes Kästchen „Ich willige ein“. Ist das zulässig?
- A) Ja
- B) Nein – eine Einwilligung erfordert eine aktive, eindeutige Handlung
- C) Nur bei Firmenkunden
- D) Nur mit Impressum

<details><summary>Lösung</summary>

**B) Nein – eine Einwilligung erfordert eine aktive, eindeutige Handlung**

</details>

**19.** Eine Kundin widerruft ihre Einwilligung zum Newsletter. Was gilt?
- A) Der Widerruf gilt erst nach einem Jahr
- B) Ab sofort keine Verarbeitung mehr auf dieser Grundlage; bisherige Verarbeitung bleibt rechtmäßig
- C) Alle Rechnungen müssen gelöscht werden
- D) Der Widerruf ist nur schriftlich per Post möglich

<details><summary>Lösung</summary>

**B) Ab sofort keine Verarbeitung mehr auf dieser Grundlage; bisherige Verarbeitung bleibt rechtmäßig**

</details>

**20.** Wer berät und überwacht im Unternehmen die Einhaltung der DSGVO?
- A) IT-Sicherheitsbeauftragte(r)
- B) Datenschutzbeauftragte(r)
- C) Betriebsrat
- D) Systemadministrator

<details><summary>Lösung</summary>

**B) Datenschutzbeauftragte(r)**

</details>

**21.** Welches Gesetz regelt seit 2024 die Impressumspflicht für Webseiten?
- A) TMG
- B) DDG
- C) BGB
- D) ElektroG

<details><summary>Lösung</summary>

**B) DDG**<br>Das Digitale-Dienste-Gesetz hat das Telemediengesetz abgelöst.

</details>

**22.** Erläutern Sie zwei Unterschiede zwischen Datenschutzbeauftragtem und IT-Sicherheitsbeauftragtem. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je Unterschied 2: Schutzobjekt – DSB schützt Personen bzw. personenbezogene Daten, ISB alle Informationen und IT-Systeme (Vertraulichkeit, Integrität, Verfügbarkeit). Rechtsgrundlage – DSB ist nach DSGVO/BDSG (ab 20 Personen) gesetzlich vorgeschrieben, ISB meist freiwillig im Rahmen eines ISMS/BSI-Grundschutz. Stellung – DSB weisungsfrei mit Kündigungsschutz, auch extern möglich.

</details>


[⬅ Inhaltsverzeichnis](README.md)
