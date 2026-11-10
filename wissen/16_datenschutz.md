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

## Technische und organisatorische Maßnahmen nach Kontrollarten

<table><tr><th>Kontrolle</th><th>Ziel</th><th>Beispiele</th></tr>
<tr><td>Zutrittskontrolle</td><td>Unbefugte kommen nicht in die Räume</td><td>Schließanlage, Chipkarte, Besucherregelung</td></tr>
<tr><td>Zugangskontrolle</td><td>Unbefugte können Systeme nicht nutzen</td><td>Passwort, MFA, Bildschirmsperre</td></tr>
<tr><td>Zugriffskontrolle</td><td>Jeder sieht nur die Daten, die er braucht</td><td>Berechtigungskonzept, Rollen</td></tr>
<tr><td>Weitergabekontrolle</td><td>Daten sind bei Transport und Übertragung geschützt</td><td>VPN, TLS, verschlüsselte Datenträger</td></tr>
<tr><td>Eingabekontrolle</td><td>Nachvollziehbar, wer Daten wann eingegeben oder geändert hat</td><td>Protokollierung, persönliche Konten</td></tr>
<tr><td>Auftragskontrolle</td><td>Dienstleister verarbeiten nur nach Weisung</td><td>AV-Vertrag, Kontrolle des Dienstleisters</td></tr>
<tr><td>Verfügbarkeitskontrolle</td><td>Daten gehen nicht verloren</td><td>Backup, USV, Virenschutz</td></tr>
<tr><td>Trennungsgebot</td><td>Daten für verschiedene Zwecke werden getrennt verarbeitet</td><td>getrennte Datenbanken, Mandantentrennung, Test- und Echtsystem</td></tr></table>

## Dokumentationspflichten

- **Verzeichnis von Verarbeitungstätigkeiten** (Art. 30 DSGVO): Liste aller Verarbeitungen mit Zweck, Datenkategorien, Empfängern, Löschfristen und Schutzmaßnahmen.
- **Datenschutz-Folgenabschätzung** (Art. 35 DSGVO): vorab nötig, wenn eine Verarbeitung voraussichtlich ein hohes Risiko für Betroffene bringt, z. B. umfangreiche Videoüberwachung oder Verarbeitung vieler Gesundheitsdaten.
- **Löschkonzept:** legt fest, welche Daten wann und wie gelöscht werden. Grundsatz: löschen, sobald der Zweck entfällt – außer gesetzliche Aufbewahrungsfristen verlangen eine längere Speicherung. Bis dahin werden die Daten gesperrt.

---

## 🃏 Karteikarten (38)

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
| Weitergabekontrolle | Schutz personenbezogener Daten bei Übertragung und Transport, z. B. durch VPN, TLS oder verschlüsselte Datenträger. |
| Eingabekontrolle | Es muss nachvollziehbar sein, wer wann welche Daten eingegeben oder geändert hat – durch Protokollierung. |
| Auftragskontrolle | Dienstleister verarbeiten Daten nur nach Weisung des Auftraggebers – geregelt im AV-Vertrag. |
| Trennungsgebot | Daten, die zu unterschiedlichen Zwecken erhoben wurden, werden getrennt verarbeitet. |
| Verzeichnis von Verarbeitungstätigkeiten | Art. 30 DSGVO: Übersicht aller Verarbeitungen mit Zweck, Datenkategorien, Empfängern, Löschfristen und Maßnahmen. |
| Datenschutz-Folgenabschätzung | Art. 35 DSGVO: Risikoprüfung vor einer Verarbeitung, die voraussichtlich ein hohes Risiko für Betroffene bringt. |
| Löschkonzept | Regelt, welche Daten wann und wie gelöscht werden; Aufbewahrungsfristen gehen vor, bis dahin Sperrung. |

## ✍️ Übungsfragen (26)

**1.** Nennen Sie drei Beispiele für personenbezogene Daten und ein Beispiel für Daten ohne Personenbezug.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Personenbezogen (je 1): Name; private oder dienstliche E-Mail-Adresse; IP-Adresse eines Kunden; Personalnummer; Geburtsdatum; Foto; Standortdaten. Ohne Personenbezug (1): aggregierte bzw. anonymisierte Werte, z. B. der Durchschnittsumsatz aller Filialen.<br>Aggregierte Unternehmenszahl ohne Personenbezug.

</details>

**2.** Ein Onlineshop fragt bei der Bestellung nach dem Geburtsdatum, obwohl es nicht benötigt wird. Welcher Grundsatz ist verletzt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Datenminimierung

</details>

**3.** Ein Kunde will wissen, welche Daten über ihn gespeichert sind. Welcher Artikel?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Art. 15<br>Auskunftsrecht.

</details>

**4.** Ein ehemaliger Kunde verlangt, dass seine Daten gelöscht werden. Welches Recht?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Art. 17 Löschung

</details>

**5.** Innerhalb welcher Frist muss eine Datenpanne der Aufsichtsbehörde gemeldet werden?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 72 Stunden<br>Art. 33.

</details>

**6.** Ein Unternehmen nutzt einen externen Cloud-Dienst für Personaldaten. Was ist zwingend abzuschließen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Auftragsverarbeitungsvertrag<br>Art. 28 DSGVO.

</details>

**7.** Eine Chipkarte für die Tür zum Serverraum ist eine Maßnahme der …

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Zutrittskontrolle<br>Räume = Zutritt.

</details>

**8.** Ein Berechtigungskonzept, das nur der Personalabteilung Lesezugriff auf Gehaltsdaten gibt, ist …

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Zugriffskontrolle

</details>

**9.** Welche Materialklasse nach DIN 66399 gilt für SSDs und USB-Sticks?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** E<br>E = elektronische Datenträger.

</details>

**10.** Festplatten mit Personaldaten sollen vernichtet werden. Welche Schutzklasse ist angemessen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Schutzklasse 2<br>Personenbezogene/vertrauliche Daten = hoher Schutzbedarf.

</details>

**11.** Wie müssen alte Monitore entsorgt werden?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Über zertifizierte Rücknahme/Wertstoffhof nach ElektroG

</details>

**12.** Welche Maßnahmen nennt Art. 32 DSGVO ausdrücklich? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Pseudonymisierung und Verschlüsselung; Rasche Wiederherstellbarkeit nach Zwischenfällen; Regelmäßige Überprüfung der Wirksamkeit.

</details>

**13.** Ab wie vielen Personen, die ständig automatisiert personenbezogene Daten verarbeiten, ist in Deutschland i. d. R. ein Datenschutzbeauftragter Pflicht?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 20<br>§ 38 BDSG.

</details>

**14.** Was unterscheidet Anonymisierung von Pseudonymisierung?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Bei Anonymisierung ist der Personenbezug dauerhaft entfernt

</details>

**15.** Ein Mitarbeiter fragt, warum das bloße Formatieren alter Festplatten vor dem Verkauf nicht ausreicht. Erklären Sie und nennen Sie zwei geeignete Verfahren. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Beim Formatieren werden nur die Verwaltungsstrukturen des Dateisystems neu angelegt, die Daten bleiben physisch erhalten und können mit Wiederherstellungssoftware rekonstruiert werden (2). Verfahren (je 1): mehrfaches Überschreiben mit zertifizierter Löschsoftware (HDD); Secure Erase/Crypto-Erase (SSD); Degaussing (magnetisch); physische Vernichtung nach DIN 66399 (z. B. H-4/E-4) durch zertifizierten Dienstleister mit Protokoll.

</details>

**16.** Nennen Sie vier Grundsätze der Datenverarbeitung nach Art. 5 DSGVO. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je 1: Rechtmäßigkeit, Treu und Glauben, Transparenz; Zweckbindung; Datenminimierung; Richtigkeit; Speicherbegrenzung; Integrität und Vertraulichkeit; Rechenschaftspflicht.

</details>

**17.** Ordnen Sie folgende Maßnahmen den Kategorien technisch bzw. organisatorisch zu: Festplattenverschlüsselung, Datenschutzschulung, Berechtigungskonzept, automatische Bildschirmsperre. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Festplattenverschlüsselung – technisch (1); Datenschutzschulung – organisatorisch (1); Berechtigungskonzept – organisatorisch (als Regelwerk; die Umsetzung über Rechte ist technisch) (1); automatische Bildschirmsperre – technisch (1).

</details>

**18.** Ein Newsletter-Formular hat ein bereits angekreuztes Kästchen „Ich willige ein“. Ist das zulässig?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Nein – eine Einwilligung erfordert eine aktive, eindeutige Handlung

</details>

**19.** Eine Kundin widerruft ihre Einwilligung zum Newsletter. Was gilt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Ab sofort keine Verarbeitung mehr auf dieser Grundlage; bisherige Verarbeitung bleibt rechtmäßig

</details>

**20.** Wer berät und überwacht im Unternehmen die Einhaltung der DSGVO?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Datenschutzbeauftragte(r)

</details>

**21.** Welches Gesetz regelt seit 2024 die Impressumspflicht für Webseiten?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** DDG<br>Das Digitale-Dienste-Gesetz hat das Telemediengesetz abgelöst.

</details>

**22.** Erläutern Sie zwei Unterschiede zwischen Datenschutzbeauftragtem und IT-Sicherheitsbeauftragtem. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je Unterschied 2: Schutzobjekt – DSB schützt Personen bzw. personenbezogene Daten, ISB alle Informationen und IT-Systeme (Vertraulichkeit, Integrität, Verfügbarkeit). Rechtsgrundlage – DSB ist nach DSGVO/BDSG (ab 20 Personen) gesetzlich vorgeschrieben, ISB meist freiwillig im Rahmen eines ISMS/BSI-Grundschutz. Stellung – DSB weisungsfrei mit Kündigungsschutz, auch extern möglich.

</details>

**23.** Ordnen Sie die Maßnahmen den Kontrollarten zu: (1) VPN für den Außendienst, (2) Protokoll, wer Kundendaten ändert, (3) AV-Vertrag mit dem Cloud-Anbieter, (4) getrennte Datenbanken für Test und Echtbetrieb.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** (1) Weitergabekontrolle (1). (2) Eingabekontrolle (1). (3) Auftragskontrolle (1). (4) Trennungsgebot (1).

</details>

**24.** Wie heißt das Dokument nach Art. 30 DSGVO, das alle Verarbeitungen personenbezogener Daten eines Unternehmens auflistet?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Verzeichnis von Verarbeitungstätigkeiten

</details>

**25.** Wann muss ein Unternehmen eine Datenschutz-Folgenabschätzung durchführen? Nennen Sie auch ein Beispiel.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Vor einer Verarbeitung, die voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen mit sich bringt (1). Beispiel (1): umfangreiche Videoüberwachung, Verarbeitung vieler Gesundheitsdaten, systematische Auswertung des Verhaltens von Beschäftigten.

</details>

**26.** Ein ehemaliger Kunde verlangt die Löschung seiner Daten. Im System liegen noch Rechnungen aus dem Vorjahr. Erläutern Sie, wie das Unternehmen vorgehen muss.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Daten, für die kein Zweck mehr besteht, müssen gelöscht werden, z. B. Newsletter-Anmeldung oder Kundenprofil (1). Rechnungen unterliegen gesetzlichen Aufbewahrungsfristen und dürfen noch nicht gelöscht werden (1). Sie werden bis zum Fristende gesperrt, also nur noch für diesen Zweck aufbewahrt, und danach gelöscht; der Kunde wird darüber informiert (1).

</details>


[⬅ Inhaltsverzeichnis](README.md)
