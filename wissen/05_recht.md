# ⚖️ Verträge, Lizenzen & Abnahme

*Bereich: Planung · Prüfungsrelevanz: ★★☆*

> Vertragsarten, SLA, Mängel & Verzug, Lizenzmodelle, Abnahme und Dokumentation.

[⬅ Inhaltsverzeichnis](README.md)

---

> [!WARNING]
> **Katalog 2025:** Gestrichen: Grundlagen des Urheberrechts, Rollout-Prozesse, Inhalt des Abnahmeprotokolls, Arten der Dokumentation, Stilllegung von Altsystemen/Archivdaten. Weiterhin wichtig: Vertragsarten, Vertragsbestandteile inkl. Sanktionen/Konventionalstrafen, Vertragsstörungen, Lizenzmodelle, SLA.

## Vertragsarten (BGB)

<table><tr><th>Vertrag</th><th>Geschuldet wird</th><th>IT-Beispiel</th></tr>
<tr><td>Kaufvertrag (§ 433)</td><td>Übergabe &amp; Eigentum an einer Sache gegen Kaufpreis</td><td>Kauf von 20 Monitoren</td></tr>
<tr><td>Werkvertrag (§ 631)</td><td>ein <b>Erfolg</b> (fertiges Werk), Abnahme nötig</td><td>Individualsoftware erstellen, Netzwerk installieren</td></tr>
<tr><td>Dienstvertrag (§ 611)</td><td>eine <b>Tätigkeit</b>, kein Erfolg</td><td>Beratung, Schulung, Support nach Stunden</td></tr>
<tr><td>Mietvertrag (§ 535)</td><td>Gebrauchsüberlassung gegen Miete</td><td>Server für 6 Monate mieten</td></tr>
<tr><td>Leasingvertrag</td><td>Nutzung gegen Raten, Sonderform der Miete</td><td>Notebook-Flotte leasen</td></tr>
<tr><td>Lizenzvertrag</td><td>Nutzungsrecht an Software</td><td>Microsoft-365-Abo</td></tr>
<tr><td>Werklieferungsvertrag (§ 650)</td><td>Herstellung beweglicher Sachen (Kaufrecht gilt)</td><td>speziell konfigurierte PCs bauen</td></tr></table>

**Zustandekommen:** Antrag + Annahme (zwei übereinstimmende Willenserklärungen). Ein Angebot an die Allgemeinheit (Onlineshop, Katalog) ist nur eine Aufforderung zur Abgabe eines Angebots.

## SLA – Service Level Agreement

Vereinbarung über messbare Leistungsqualität: **Verfügbarkeit** (z. B. 99,9 %), **Reaktionszeit**, **Wiederherstellungszeit**, Servicezeiten (z. B. Mo–Fr 8–18 Uhr), Eskalation, Berichte, Vertragsstrafen.

> [!IMPORTANT]
> Verfügbarkeit 99,9 % pro Jahr ⇒ erlaubte Ausfallzeit = 0,1 % × 8.760 h = **8,76 Stunden**. 99 % ⇒ 87,6 h.

## Vertragsstörungen

- **Mangelhafte Lieferung** (Schlechtleistung): Sachmangel (Ware defekt, falsche Beschaffenheit), Falschlieferung, Minderlieferung (zu wenig), Montagemangel, Rechtsmangel.
- **Rechte des Käufers**: zuerst **Nacherfüllung** (Nachbesserung oder Ersatzlieferung), danach Rücktritt, Minderung, Schadensersatz.
- Gewährleistung: gesetzlich 2 Jahre. **Garantie**: freiwillige Zusage des Herstellers/Händlers.
- Mängelarten nach Erkennbarkeit: offen, versteckt, arglistig verschwiegen. Beim zweiseitigen Handelskauf: unverzügliche Prüf- und Rügepflicht (§ 377 HGB).
- **Lieferungsverzug**: Lieferung fällig, schuldhaft nicht erfolgt (ggf. Mahnung nötig, entbehrlich bei kalendermäßig bestimmtem Termin). **Zahlungsverzug**: spätestens 30 Tage nach Fälligkeit und Rechnungszugang.
- **Konventionalstrafe**: vereinbarte Vertragsstrafe bei Nichteinhaltung (z. B. pro Tag Verzug).

## Urheberrecht & Lizenzen

Software ist durch das **Urheberrechtsgesetz (UrhG)** geschützt; der Nutzer erwirbt nur ein Nutzungsrecht (Lizenz).

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

**Proprietär** = Quellcode geschlossen, Hersteller bestimmt Nutzung. **Open Source** = Quellcode einsehbar, ändern & weitergeben erlaubt (Lizenzbedingungen beachten).

## Leistungserbringung & Abnahme

- **Rollout**: Vorbereitung (Scope, Inventar, Images), Kunden-Onboarding, Formalitäten, Umsetzung, Nachbetreuung. Vor Ort vs. remote.
- **Abnahmeprotokoll**: Gegenstand der Abnahme, beteiligte Personen, Ort, Datum/Uhrzeit, geprüfte Funktionen, festgestellte Mängel und Fristen, Unterschriften.
- **Dokumentation**: Benutzerhandbuch, Administrations-/Netzwerkdokumentation, Programmdokumentation/Quellcode, Schnittstellen, Testprotokolle, Konfigurationen.
- Stilllegung von Altsystemen: Daten migrieren, gesetzliche **Aufbewahrungsfristen** beachten (Handelsbriefe 6 Jahre, Buchungsbelege/Rechnungen 8 Jahre seit 2025, Bücher/Jahresabschlüsse 10 Jahre), Datenträger sicher löschen.

## Vom Angebot zum Vertrag

Ein Vertrag entsteht durch zwei übereinstimmende Willenserklärungen: **Antrag** und **Annahme**. Wer welche Erklärung abgibt, hängt vom Ablauf ab:

<table><tr><th>Schritt</th><th>Rechtliche Bedeutung</th></tr>
<tr><td>Anfrage des Kunden</td><td>unverbindlich – nur Bitte um ein Angebot</td></tr>
<tr><td>Angebot des Lieferanten</td><td><b>verbindlicher Antrag</b> – außer es enthält eine Freizeichnungsklausel („freibleibend“, „unverbindlich“, „solange der Vorrat reicht“)</td></tr>
<tr><td>Bestellung des Kunden</td><td>Annahme, wenn sie rechtzeitig und ohne Änderungen erfolgt → Vertrag</td></tr>
<tr><td>Auftragsbestätigung</td><td>nur nötig, wenn noch kein Vertrag besteht: bei freibleibendem Angebot, bei verspäteter oder geänderter Bestellung, bei Bestellung ohne vorheriges Angebot</td></tr></table>

> [!IMPORTANT]
> **Merke:** Eine Bestellung, die vom Angebot abweicht (anderer Preis, andere Menge, zu spät), ist ein **neuer Antrag**. Der Vertrag kommt dann erst durch die Auftragsbestätigung oder die Lieferung zustande.

## Pflichten und Bestandteile beim Kaufvertrag

- **Verkäufer:** Ware mangelfrei und rechtzeitig übergeben, Eigentum verschaffen.
- **Käufer:** Ware annehmen und den Kaufpreis rechtzeitig zahlen.

**Typische Vertragsbestandteile:** Art, Güte und Menge der Ware · Preis und Rabatte · Lieferzeit · Liefer- und Zahlungsbedingungen (z. B. „frei Haus“, „30 Tage netto, 2 % Skonto bei 10 Tagen“) · Gewährleistung/Garantie · Erfüllungsort und Gerichtsstand · Vertragsstrafen.

**AGB** (Allgemeine Geschäftsbedingungen) sind vorformulierte Bedingungen für viele Verträge. Sie gelten nur, wenn vor Vertragsschluss auf sie hingewiesen wurde und der Kunde sie zur Kenntnis nehmen konnte. Individuelle Absprachen gehen vor, überraschende Klauseln sind unwirksam.

**Eigentumsvorbehalt:** Die Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers. Zahlt der Kunde nicht, kann der Verkäufer sie zurückverlangen.

## Vertragsstörungen im Überblick

<table><tr><th>Störung</th><th>Wer verletzt die Pflicht?</th><th>Voraussetzungen</th><th>Rechte der Gegenseite</th></tr>
<tr><td><b>Mangelhafte Lieferung</b> (Schlechtleistung)</td><td>Verkäufer</td><td>Mangel bei Übergabe; unter Kaufleuten unverzüglich prüfen und rügen</td><td>zuerst Nacherfüllung (Nachbesserung oder Ersatzlieferung); nach erfolgloser Frist Minderung, Rücktritt, Schadensersatz</td></tr>
<tr><td><b>Lieferungsverzug</b> (Nicht-rechtzeitig-Lieferung)</td><td>Verkäufer</td><td>Fälligkeit + Mahnung + Verschulden; Mahnung entfällt bei fest vereinbartem Kalendertermin</td><td>Lieferung verlangen und Verzugsschaden ersetzen lassen; nach erfolgloser Nachfrist Rücktritt und/oder Schadensersatz statt der Leistung</td></tr>
<tr><td><b>Zahlungsverzug</b> (Nicht-rechtzeitig-Zahlung)</td><td>Käufer</td><td>Fälligkeit + Mahnung; ohne Mahnung spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung</td><td>Verzugszinsen, Mahnkosten, nach Fristsetzung Rücktritt und Schadensersatz; Ware bei Eigentumsvorbehalt zurückholen</td></tr>
<tr><td><b>Annahmeverzug</b></td><td>Käufer</td><td>Ware wurde ordnungsgemäß angeboten und nicht angenommen</td><td>auf Abnahme bestehen, Ware auf Kosten des Käufers einlagern, Selbsthilfeverkauf, Rücktritt</td></tr></table>

> [!TIP]
> **Prüfungstipp:** Schreibe bei Vertragsstörungen immer drei Dinge: **welche Störung** vorliegt, **warum** (Voraussetzungen am Fall prüfen) und **welche Rechte** daraus folgen – das Recht mit dem Vorrang zuerst.

## Weitere Lizenzbegriffe (Hintergrund)

<table><tr><th>Begriff</th><th>Bedeutung</th></tr>
<tr><td>Proprietäre Software</td><td>Quellcode nicht offen, Nutzung nur nach den Bedingungen des Herstellers</td></tr>
<tr><td>Freeware</td><td>kostenlos nutzbar, Quellcode aber nicht offen</td></tr>
<tr><td>Shareware</td><td>darf kostenlos getestet werden, danach kostenpflichtig</td></tr>
<tr><td>Public Domain</td><td>gemeinfrei – ohne urheberrechtliche Einschränkungen</td></tr>
<tr><td>Open Source</td><td>Quellcode offen, darf genutzt, geändert und weitergegeben werden – nach den Regeln der jeweiligen Lizenz</td></tr></table>

## Pflichtangaben einer Rechnung (Hintergrund)

Name und Anschrift von Lieferant und Kunde · Steuernummer oder USt-IdNr. des Lieferanten · Rechnungsdatum · fortlaufende Rechnungsnummer · Menge und Bezeichnung der Leistung · Liefer- bzw. Leistungsdatum · Nettobetrag, Steuersatz, Steuerbetrag und Bruttobetrag.

---

## 🃏 Karteikarten (36)

| Frage | Antwort |
|---|---|
| Werkvertrag vs. Dienstvertrag | Werkvertrag: Erfolg geschuldet, Abnahme. Dienstvertrag: nur Tätigkeit geschuldet. |
| Beispiel Werkvertrag in der IT | Erstellung einer Individualsoftware oder Installation eines funktionierenden Netzwerks. |
| Beispiel Dienstvertrag in der IT | Schulung, Beratung, Support auf Stundenbasis. |
| Inhalte eines SLA | Verfügbarkeit, Reaktionszeit, Wiederherstellungszeit, Servicezeiten, Eskalation, Reporting, Vertragsstrafen. |
| Ausfallzeit bei 99,9 % Verfügbarkeit/Jahr | 8,76 Stunden (0,1 % von 8.760 h). |
| Erstes Recht des Käufers bei Mangel | Nacherfüllung: Nachbesserung oder Ersatzlieferung. |
| Gewährleistung vs. Garantie | Gewährleistung: gesetzlich, 2 Jahre, Verkäufer haftet. Garantie: freiwillige Zusage, Bedingungen frei gestaltbar. |
| Mangelarten (Art) | Sachmangel, Falschlieferung, Minderlieferung, Montagemangel, Rechtsmangel. |
| OEM-Lizenz | An Hardware gebunden, günstig, meist nicht übertragbar. |
| GPL | Copyleft-Open-Source-Lizenz: abgeleitete Werke müssen ebenfalls unter GPL mit Quellcode weitergegeben werden. |
| Named User vs. Concurrent User | Named: pro benannter Person. Concurrent: pro gleichzeitig aktivem Nutzer. |
| EULA | End User License Agreement – Lizenzbedingungen für den Endnutzer. |
| Inhalt Abnahmeprotokoll | Gegenstand, Beteiligte, Ort, Datum/Uhrzeit, geprüfte Funktionen, Mängel, Unterschriften. |
| Konventionalstrafe | Vertraglich vereinbarte Strafzahlung bei Pflichtverletzung, z. B. Verzug. |
| Wie kommt ein Vertrag zustande? | Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme. |
| Ist eine Anfrage rechtlich bindend? | Nein – sie ist nur die unverbindliche Bitte um ein Angebot. |
| Ist ein Angebot bindend? | Ja, es ist ein verbindlicher Antrag – außer mit Freizeichnungsklausel wie „freibleibend“ oder „unverbindlich“. |
| Freizeichnungsklauseln – Beispiele | „freibleibend“, „unverbindlich“, „solange der Vorrat reicht“, „Preis freibleibend“. |
| Wann ist eine Auftragsbestätigung nötig? | Wenn noch kein Vertrag besteht: freibleibendes Angebot, verspätete oder geänderte Bestellung, Bestellung ohne Angebot. |
| Bestellung weicht vom Angebot ab – Folge? | Sie gilt als neuer Antrag; Vertrag erst durch Auftragsbestätigung oder Lieferung. |
| Pflichten des Verkäufers | Ware mangelfrei und rechtzeitig übergeben, Eigentum verschaffen. |
| Pflichten des Käufers | Ware annehmen und Kaufpreis rechtzeitig zahlen. |
| AGB | Vorformulierte Vertragsbedingungen für viele Verträge; gelten nur bei Hinweis und Möglichkeit zur Kenntnisnahme vor Vertragsschluss. |
| Eigentumsvorbehalt | Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers. |
| Vier Vertragsstörungen beim Kaufvertrag | Mangelhafte Lieferung, Lieferungsverzug, Zahlungsverzug, Annahmeverzug. |
| Voraussetzungen Lieferungsverzug | Fälligkeit, Mahnung (entfällt bei festem Kalendertermin) und Verschulden des Lieferanten. |
| Rechte bei Lieferungsverzug | Lieferung + Ersatz des Verzugsschadens; nach erfolgloser Nachfrist Rücktritt und/oder Schadensersatz statt der Leistung. |
| Wann tritt Zahlungsverzug ohne Mahnung ein? | Spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung. |
| Rechte bei Zahlungsverzug | Verzugszinsen und Mahnkosten verlangen; nach Fristsetzung Rücktritt/Schadensersatz; bei Eigentumsvorbehalt Ware zurückfordern. |
| Annahmeverzug – Rechte des Verkäufers | Auf Abnahme bestehen, Ware auf Kosten des Käufers einlagern, Selbsthilfeverkauf, Rücktritt. |
| Rügepflicht unter Kaufleuten | Ware unverzüglich nach Lieferung prüfen und Mängel sofort rügen – sonst gilt sie als genehmigt. |
| Freeware vs. Open Source | Freeware: kostenlos, Quellcode nicht offen. Open Source: Quellcode offen, darf geändert und weitergegeben werden. |
| Shareware | Software, die kostenlos getestet werden darf und danach bezahlt werden muss. |
| Proprietäre Software | Quellcode nicht offen; Nutzung nur nach den Lizenzbedingungen des Herstellers. |
| Public Domain | Gemeinfreie Software ohne urheberrechtliche Einschränkungen. |
| Pflichtangaben einer Rechnung | Namen und Anschriften, Steuernummer/USt-IdNr., Datum, Rechnungsnummer, Menge und Art der Leistung, Leistungsdatum, Netto, Steuersatz und -betrag, Brutto. |

## ✍️ Übungsfragen (24)

**1.** Ein Systemhaus verpflichtet sich, ein funktionsfähiges WLAN im Gebäude zu installieren. Welcher Vertrag liegt vor?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Werkvertrag<br>Erfolg (funktionierendes WLAN) ist geschuldet.

</details>

**2.** Eine Schulung über 8 Stunden zu Microsoft 365 wird gebucht. Vertragsart?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Dienstvertrag<br>Geschuldet ist die Tätigkeit, nicht ein Lernerfolg.

</details>

**3.** Ein SLA garantiert 99,5 % Verfügbarkeit pro Jahr (365 Tage). Wie viele Stunden Ausfall sind maximal erlaubt?

<details><summary>Lösung</summary>

**43.8 h**<br>0,5 % × 8.760 h = 43,8 h.

</details>

**4.** Welches Recht muss der Käufer bei einem Mangel in der Regel zuerst geltend machen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Nacherfüllung<br>Vorrang der Nacherfüllung.

</details>

**5.** Statt 20 Monitoren werden 18 geliefert. Welcher Mangel?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Minderlieferung<br>Zu geringe Menge = Minderlieferung.

</details>

**6.** Welche Lizenz verlangt, dass Änderungen am Code wieder unter derselben Lizenz veröffentlicht werden?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** GPL<br>GPL = Copyleft.

</details>

**7.** Eine Windows-Lizenz wird mit einem neuen PC ausgeliefert und ist an diesen gebunden. Das ist eine …

<details><summary>Lösung</summary>

**Musterlösung (2 P):** OEM-Lizenz<br>OEM = Original Equipment Manufacturer.

</details>

**8.** Welche Angaben gehören in ein Abnahmeprotokoll? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Gegenstand der Abnahme; Beteiligte Personen; Datum und Ort. Dazu kommen Mängel und Unterschriften.

</details>

**9.** Wie lange beträgt die gesetzliche Gewährleistungsfrist bei neuen Waren?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 2 Jahre<br>2 Jahre (§ 438 BGB).

</details>

**10.** Erläutern Sie den Unterschied zwischen Werk- und Dienstvertrag an je einem IT-Beispiel. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Beim Werkvertrag schuldet der Auftragnehmer einen konkreten Erfolg, der abgenommen wird (1), z. B. die Programmierung einer lauffähigen Webanwendung (1). Beim Dienstvertrag schuldet er nur die Tätigkeit, nicht den Erfolg (1), z. B. IT-Beratung oder Support nach Stunden (1).

</details>

**11.** Nennen Sie vier Inhalte, die in einem SLA für den Support Ihrer Arbeitsplätze geregelt sein sollten. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je 1: Verfügbarkeit in %; Reaktionszeit; Lösungs-/Wiederherstellungszeit; Servicezeiten; Ansprechpartner/Eskalationswege; Prioritätsstufen; Reporting/Messung; Vertragsstrafen bei Nichteinhaltung; Kosten.

</details>

**12.** Ein Systemhaus gibt ein verbindliches Angebot ab. Der Kunde bestellt drei Tage später genau zu diesen Bedingungen. Wodurch kommt der Kaufvertrag zustande?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Durch die Bestellung (sie ist die Annahme des Angebots)<br>Angebot = Antrag, rechtzeitige und unveränderte Bestellung = Annahme. Eine Auftragsbestätigung ist nicht nötig.

</details>

**13.** Ein Angebot über 15 Notebooks trägt den Vermerk „freibleibend“. Der Kunde bestellt daraufhin. Beurteilen Sie, ob damit ein Kaufvertrag zustande gekommen ist.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Nein (1). Durch die Freizeichnungsklausel ist das Angebot unverbindlich, die Bestellung ist daher erst der Antrag (1). Der Vertrag kommt erst zustande, wenn der Lieferant annimmt – durch Auftragsbestätigung oder Lieferung (1).

</details>

**14.** Ein Lieferant bietet 20 Monitore zu je 180 € an. Der Kunde bestellt 20 Monitore „zu je 170 €“. Erläutern Sie die rechtliche Lage.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Die Bestellung weicht vom Angebot ab und ist deshalb keine Annahme, sondern ein neuer Antrag (2). Ein Vertrag entsteht erst, wenn der Lieferant diesen Antrag annimmt, z. B. durch Auftragsbestätigung oder Lieferung zu 170 € (1).

</details>

**15.** Die Lieferung von 20 Notebooks war fest für den 01.03. vereinbart. Am 10.03. ist noch nichts geliefert, der Lieferant hat schlicht zu spät bestellt. Prüfen Sie, ob Lieferungsverzug vorliegt, und nennen Sie zwei Rechte des Käufers.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Ja, Lieferungsverzug liegt vor (1): Die Lieferung ist fällig, eine Mahnung ist wegen des kalendermäßig festen Termins nicht nötig, und der Lieferant hat die Verspätung verschuldet (1). Rechte (je 1): auf Lieferung bestehen und Ersatz des Verzugsschadens verlangen; nach erfolgloser Nachfrist vom Vertrag zurücktreten; Schadensersatz statt der Leistung verlangen (z. B. Mehrkosten eines Deckungskaufs).

</details>

**16.** Eine Rechnung über 4.800 € geht dem Kunden am 2. Mai zu und ist sofort fällig. Der Kunde zahlt nicht, gemahnt wird nicht. Ab wann befindet sich der Kunde im Zahlungsverzug und was kann der Lieferant dann verlangen?

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Ohne Mahnung tritt der Verzug spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung ein, hier also Anfang Juni (1). Der Lieferant kann Verzugszinsen und Mahnkosten verlangen (1) und nach Fristsetzung zurücktreten bzw. Schadensersatz fordern; bei Eigentumsvorbehalt kann er die Ware zurückholen (1).

</details>

**17.** Ein Kunde verweigert ohne Grund die Annahme von ordnungsgemäß und pünktlich gelieferten Servern. Benennen Sie die Vertragsstörung und nennen Sie zwei Rechte des Lieferanten.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Annahmeverzug (1). Rechte (je 1): auf Abnahme bestehen bzw. klagen; die Ware auf Kosten und Gefahr des Kunden einlagern; Selbsthilfeverkauf nach Androhung; vom Vertrag zurücktreten.

</details>

**18.** Wie heißt die Vereinbarung, nach der gelieferte Ware bis zur vollständigen Bezahlung dem Verkäufer gehört?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Eigentumsvorbehalt

</details>

**19.** Ein Kunde zahlt eine fällige Rechnung trotz Mahnung nicht. Welche Vertragsstörung liegt vor?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Zahlungsverzug (Nicht-rechtzeitig-Zahlung)

</details>

**20.** Erläutern Sie, was AGB sind und unter welcher Voraussetzung sie Vertragsbestandteil werden.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** AGB sind vorformulierte Vertragsbedingungen, die ein Unternehmen für eine Vielzahl von Verträgen verwendet (1). Sie werden nur Vertragsbestandteil, wenn vor Vertragsschluss auf sie hingewiesen wurde und der Kunde sie in zumutbarer Weise zur Kenntnis nehmen konnte und einverstanden ist (1).

</details>

**21.** Ein IT-Händler erhält 50 Monitore von seinem Großhändler und lagert sie drei Wochen ungeprüft ein. Dann stellt er fest, dass zehn Geräte defekt sind. Erläutern Sie das Problem.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Unter Kaufleuten gilt die unverzügliche Prüf- und Rügepflicht (1). Der Händler hätte die Ware gleich nach der Lieferung prüfen und erkennbare Mängel sofort melden müssen (1). Durch die verspätete Rüge gilt die Ware als genehmigt – er verliert seine Gewährleistungsrechte für diese Mängel (1).

</details>

**22.** Nennen Sie vier Punkte, die in einem Kaufvertrag über 30 Arbeitsplatz-PCs geregelt sein sollten.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je 1: Art, Ausstattung und Menge der Geräte; Preis, Rabatt und Skonto; Liefertermin; Lieferbedingungen (z. B. frei Haus, Aufstellung); Zahlungsbedingungen; Gewährleistung/Garantie und Service; Eigentumsvorbehalt; Vertragsstrafe bei Verzug; Erfüllungsort und Gerichtsstand.

</details>

**23.** Ein Kunde ist mit 12.000 € seit 45 Tagen in Verzug. Der Verzugszinssatz beträgt 11 % pro Jahr (360 Zinstage). Wie hoch sind die Verzugszinsen?

<details><summary>Lösung</summary>

**165 €**<br>12.000 × 11 × 45 ÷ (100 × 360) = 165 €.

</details>

**24.** Erläutern Sie den Unterschied zwischen Freeware und Open-Source-Software.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Freeware darf kostenlos genutzt werden, der Quellcode ist aber nicht einsehbar und darf nicht verändert werden (1). Bei Open-Source-Software ist der Quellcode offen und darf nach den Regeln der Lizenz geändert und weitergegeben werden (1).

</details>


[⬅ Inhaltsverzeichnis](README.md)
