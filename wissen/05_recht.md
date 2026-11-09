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

---

## 🃏 Karteikarten (15)

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

## ✍️ Übungsfragen (11)

**1.** Ein Systemhaus verpflichtet sich, ein funktionsfähiges WLAN im Gebäude zu installieren. Welcher Vertrag liegt vor?
- A) Dienstvertrag
- B) Werkvertrag
- C) Mietvertrag
- D) Kaufvertrag

<details><summary>Lösung</summary>

**B) Werkvertrag**<br>Erfolg (funktionierendes WLAN) ist geschuldet.

</details>

**2.** Eine Schulung über 8 Stunden zu Microsoft 365 wird gebucht. Vertragsart?
- A) Werkvertrag
- B) Dienstvertrag
- C) Leasingvertrag
- D) Lizenzvertrag

<details><summary>Lösung</summary>

**B) Dienstvertrag**<br>Geschuldet ist die Tätigkeit, nicht ein Lernerfolg.

</details>

**3.** Ein SLA garantiert 99,5 % Verfügbarkeit pro Jahr (365 Tage). Wie viele Stunden Ausfall sind maximal erlaubt?

<details><summary>Lösung</summary>

**43.8 h**<br>0,5 % × 8.760 h = 43,8 h.

</details>

**4.** Welches Recht muss der Käufer bei einem Mangel in der Regel zuerst geltend machen?
- A) Rücktritt
- B) Minderung
- C) Nacherfüllung
- D) Schadensersatz

<details><summary>Lösung</summary>

**C) Nacherfüllung**<br>Vorrang der Nacherfüllung.

</details>

**5.** Statt 20 Monitoren werden 18 geliefert. Welcher Mangel?
- A) Falschlieferung
- B) Minderlieferung
- C) Rechtsmangel
- D) Montagemangel

<details><summary>Lösung</summary>

**B) Minderlieferung**<br>Zu geringe Menge = Minderlieferung.

</details>

**6.** Welche Lizenz verlangt, dass Änderungen am Code wieder unter derselben Lizenz veröffentlicht werden?
- A) MIT
- B) GPL
- C) Freeware
- D) OEM

<details><summary>Lösung</summary>

**B) GPL**<br>GPL = Copyleft.

</details>

**7.** Eine Windows-Lizenz wird mit einem neuen PC ausgeliefert und ist an diesen gebunden. Das ist eine …
- A) Volumenlizenz
- B) OEM-Lizenz
- C) Concurrent-User-Lizenz
- D) Open-Source-Lizenz

<details><summary>Lösung</summary>

**B) OEM-Lizenz**<br>OEM = Original Equipment Manufacturer.

</details>

**8.** Welche Angaben gehören in ein Abnahmeprotokoll? (mehrere)
- A) Gegenstand der Abnahme
- B) Beteiligte Personen
- C) Datum und Ort
- D) Gehalt des Technikers

<details><summary>Lösung</summary>

**A) Gegenstand der Abnahme, B) Beteiligte Personen, C) Datum und Ort**<br>Dazu kommen Mängel und Unterschriften.

</details>

**9.** Wie lange beträgt die gesetzliche Gewährleistungsfrist bei neuen Waren?
- A) 6 Monate
- B) 1 Jahr
- C) 2 Jahre
- D) 5 Jahre

<details><summary>Lösung</summary>

**C) 2 Jahre**<br>2 Jahre (§ 438 BGB).

</details>

**10.** Erläutern Sie den Unterschied zwischen Werk- und Dienstvertrag an je einem IT-Beispiel. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Beim Werkvertrag schuldet der Auftragnehmer einen konkreten Erfolg, der abgenommen wird (1), z. B. die Programmierung einer lauffähigen Webanwendung (1). Beim Dienstvertrag schuldet er nur die Tätigkeit, nicht den Erfolg (1), z. B. IT-Beratung oder Support nach Stunden (1).

</details>

**11.** Nennen Sie vier Inhalte, die in einem SLA für den Support Ihrer Arbeitsplätze geregelt sein sollten. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: Verfügbarkeit in %; Reaktionszeit; Lösungs-/Wiederherstellungszeit; Servicezeiten; Ansprechpartner/Eskalationswege; Prioritätsstufen; Reporting/Messung; Vertragsstrafen bei Nichteinhaltung; Kosten.

</details>


[⬅ Inhaltsverzeichnis](README.md)
