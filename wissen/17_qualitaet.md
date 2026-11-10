# ✅ Qualitätssicherung & Test

*Bereich: Planung · Prüfungsrelevanz: ★☆☆*

> QM nach ISO 9000/9001, PDCA, Softwarequalität ISO 25010, Testarten, Testprotokoll, Dokumentation.

[⬅ Inhaltsverzeichnis](README.md)

---

> [!WARNING]
> **Katalog 2025:** Gestrichen: Qualitätsbegriff nach ISO 9000, Audit, Kriterien der Softwarequalität, Testprotokoll für den Arbeitsplatz, Maßnahmen zur Prozess-/Produktqualität. Dieses Thema hat in der AP1 jetzt geringe Priorität – PDCA und QM-Grundidee reichen. Test-Grundbegriffe brauchst du für die AP2.

## Qualität & Qualitätsmanagement

**Qualität** (ISO 9000): Grad, in dem inhärente Merkmale eines Objekts Anforderungen erfüllen. Kurz: Die Kundenanforderungen werden erfüllt.

- **ISO 9000**: Grundlagen und Begriffe. **ISO 9001**: Anforderungen an ein QM-System – **zertifizierbar**. ISO 9004: Leitfaden zum nachhaltigen Erfolg.
- Grundsätze: Kundenorientierung, Führung, Einbeziehung der Personen, prozessorientierter Ansatz, Verbesserung, faktengestützte Entscheidungen, Beziehungsmanagement.
- **Audit**: systematische, unabhängige Prüfung, ob Anforderungen erfüllt sind (intern = 1st Party, beim Lieferanten = 2nd Party, durch Zertifizierer = 3rd Party). **Zertifizierung**: Bestätigung durch eine akkreditierte Stelle nach erfolgreichem Audit (i. d. R. 3 Jahre gültig, jährliche Überwachungsaudits).
- Weitere Normen/Modelle: **TQM** (Total Quality Management – ganzheitlich, alle Mitarbeitenden), **EFQM**, ITIL (IT-Service-Management), ISO/IEC 20000.
- Phasen: Qualitätsplanung (Ziele, Kennzahlen) → Qualitätslenkung (Prozesse steuern) → Qualitätssicherung (Prüfen) → Qualitätsverbesserung.

## PDCA-Zyklus (Deming-Kreis)

<table><tr><th>Phase</th><th>Inhalt</th><th>Beispiel Ticketsystem</th></tr>
<tr><td><b>Plan</b></td><td>Ist-Analyse, Ziele, Maßnahmen planen</td><td>Ziel: 80 % der Tickets in 4 h lösen</td></tr>
<tr><td><b>Do</b></td><td>Maßnahmen (testweise) umsetzen</td><td>Wissensdatenbank einführen</td></tr>
<tr><td><b>Check</b></td><td>Ergebnisse messen, Soll-Ist-Vergleich</td><td>Lösungszeiten auswerten</td></tr>
<tr><td><b>Act</b></td><td>Standardisieren oder anpassen, neuer Zyklus</td><td>Prozess verbindlich machen</td></tr></table>

Prinzip der **kontinuierlichen Verbesserung** (KVP, Kaizen).

## Softwarequalität (ISO/IEC 25010)

Qualitätsmerkmale (früher ISO 9126): **Funktionale Eignung** (Vollständigkeit, Korrektheit), **Zuverlässigkeit** (Verfügbarkeit, Fehlertoleranz, Wiederherstellbarkeit), **Benutzbarkeit/Usability** (Erlernbarkeit, Bedienbarkeit, Barrierefreiheit), **Leistungseffizienz** (Antwortzeit, Ressourcenverbrauch), **Wartbarkeit** (Änderbarkeit, Modularität, Testbarkeit), **Übertragbarkeit/Portabilität** (Installierbarkeit, Anpassbarkeit), **Kompatibilität** (Interoperabilität), **Sicherheit**.

## Testen

- **Black-Box-Test**: Funktion wird anhand der Spezifikation geprüft, ohne Kenntnis des Codes (Eingabe → erwartete Ausgabe). Methoden: Äquivalenzklassen, Grenzwertanalyse.
- **White-Box-Test**: mit Kenntnis des Codes; prüft Anweisungs-/Zweigabdeckung.
- **Grey-Box**: Mischform.

<table><tr><th>Teststufe</th><th>Was wird getestet?</th></tr>
<tr><td>Komponenten-/Unit-Test</td><td>einzelne Funktionen/Module (Entwickler)</td></tr>
<tr><td>Integrationstest</td><td>Zusammenspiel der Komponenten/Schnittstellen</td></tr>
<tr><td>Systemtest</td><td>Gesamtsystem gegen Anforderungen (Pflichtenheft)</td></tr>
<tr><td>Abnahmetest</td><td>durch den Kunden gegen das Lastenheft – Grundlage der Abnahme</td></tr></table>

Weitere Testarten: **Funktionstest**, **Regressionstest** (nach Änderungen: funktioniert Altes noch?), **Lasttest/Performancetest**, **Usability-Test**, **Sicherheitstest/Penetrationstest**, Smoke-Test (grundlegende Funktionsfähigkeit). **Statische Tests** (Code-Review, Walkthrough, ohne Ausführung) vs. **dynamische Tests** (Programm wird ausgeführt).

> [!IMPORTANT]
> **Grenzwertanalyse:** Feld erlaubt 1–100 → teste 0, 1, 100, 101 (und einen Wert mittendrin). **Äquivalenzklassen:** gültig (1–100), ungültig zu klein (< 1), ungültig zu groß (> 100), ungültiger Typ (Text).

## Testprotokoll / Testfall

Testfall-ID, Beschreibung, Vorbedingungen, Testdaten/Eingabe, **erwartetes Ergebnis**, **tatsächliches Ergebnis**, Status (bestanden/fehlgeschlagen), Datum, Tester. Fehler → Fehlermeldung mit Reproduktionsschritten, Priorität.

## Qualitätssicherung beim Arbeitsplatz-Rollout

- Funktionstests nach Einrichtung: Anmeldung (Domäne), Netzwerk & Internet, Drucker, Netzlaufwerke, Fachanwendungen, E-Mail, Peripherie, Verschlüsselung aktiv, Updates.
- Checklisten, standardisierte Images, Pilotgruppe vor dem großen Rollout.
- **Dokumentation**: Inventarisierung (Hersteller, Modell, Seriennummer, Inventarnummer, Standort, Nutzer), Netzwerkplan, Konfiguration, Lizenzen, Übergabe-/Abnahmeprotokoll, Benutzerhandbuch.
- Nach Abschluss: Soll-Ist-Vergleich, Kundenzufriedenheit, Lessons Learned.

---

## 🃏 Karteikarten (15)

| Frage | Antwort |
|---|---|
| Qualität nach ISO 9000 | Grad, in dem Merkmale eines Produkts/einer Leistung die Anforderungen erfüllen. |
| ISO 9001 | Norm mit Anforderungen an ein Qualitätsmanagementsystem – zertifizierbar. |
| Audit | Systematische, unabhängige Prüfung, ob Anforderungen/Prozesse eingehalten werden. |
| PDCA | Plan – Do – Check – Act: Zyklus der kontinuierlichen Verbesserung. |
| Check-Phase im PDCA | Ergebnisse messen und mit den Zielen vergleichen (Soll-Ist). |
| Merkmale Softwarequalität (ISO 25010) | Funktionale Eignung, Zuverlässigkeit, Benutzbarkeit, Effizienz, Wartbarkeit, Übertragbarkeit, Kompatibilität, Sicherheit. |
| Black-Box-Test | Test ohne Codekenntnis, nur Ein-/Ausgabe gegen Spezifikation. |
| White-Box-Test | Test mit Codekenntnis, z. B. Zweigabdeckung. |
| Regressionstest | Erneuter Test nach Änderungen, um unbeabsichtigte Fehler in bestehenden Funktionen zu finden. |
| Grenzwertanalyse | Testfälle an und direkt neben den Grenzen gültiger Bereiche. |
| Teststufen | Komponententest, Integrationstest, Systemtest, Abnahmetest. |
| Abnahmetest | Test durch den Kunden gegen dessen Anforderungen (Lastenheft). |
| Statischer vs. dynamischer Test | Statisch: ohne Ausführung (Review). Dynamisch: Programm wird ausgeführt. |
| Inhalte eines Testprotokolls | ID, Beschreibung, Vorbedingung, Eingabe, erwartetes & tatsächliches Ergebnis, Status, Datum, Tester. |
| TQM | Total Quality Management: ganzheitliches QM unter Einbeziehung aller Mitarbeitenden. |

## ✍️ Übungsfragen (11)

**1.** Welche Norm ist für Qualitätsmanagementsysteme zertifizierbar?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** ISO 9001

</details>

**2.** In welcher PDCA-Phase werden die Ergebnisse gemessen und bewertet?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Check

</details>

**3.** Ein Tester prüft eine Eingabemaske nur anhand der Spezifikation, ohne den Code zu kennen. Testart?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Black-Box

</details>

**4.** Nach einem Update wird geprüft, ob bestehende Funktionen weiterhin korrekt laufen. Testart?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Regressionstest

</details>

**5.** Ein Feld akzeptiert ganze Zahlen von 18 bis 67. Welche Werte gehören zu einer Grenzwertanalyse? Nennen Sie vier.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je 1 Punkt (max. 4): 17; 18; 67; 68. An und direkt neben den Grenzen; 40 ist ein Repräsentant der Äquivalenzklasse, kein Grenzwert.

</details>

**6.** Welche Teststufe führt der Kunde gegen seine Anforderungen durch?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Abnahmetest

</details>

**7.** Welches Softwarequalitätsmerkmal beschreibt, wie leicht sich ein Programm ändern lässt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Wartbarkeit

</details>

**8.** Was ist ein Code-Review?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Statischer Test<br>Kein Ausführen des Programms.

</details>

**9.** Erläutern Sie den PDCA-Zyklus am Beispiel der Verbesserung des IT-Supports. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Plan: Ist-Zustand analysieren (z. B. lange Lösungszeiten), Ziel und Maßnahme festlegen (Wissensdatenbank) (1). Do: Maßnahme testweise umsetzen (1). Check: Ergebnisse messen, z. B. durchschnittliche Lösungszeit vor/nach (1). Act: Bei Erfolg standardisieren, sonst anpassen; neuer Zyklus beginnt (1).

</details>

**10.** Nennen Sie vier Funktionstests, die Sie nach der Einrichtung eines neuen Arbeitsplatzes durchführen. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je 1: Anmeldung mit Domänenkonto; Netzwerk-/Internetzugang; Zugriff auf Netzlaufwerke/Freigaben; Drucken; Fachanwendungen und Office starten; E-Mail senden/empfangen; Monitor/Docking/Peripherie; BitLocker/Virenschutz aktiv; Updates installiert.

</details>

**11.** Nennen Sie sechs Angaben, die ein Testprotokoll enthalten sollte. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 0,5: Testfall-ID; Beschreibung/Testziel; Vorbedingungen; Testdaten/Eingaben; erwartetes Ergebnis; tatsächliches Ergebnis; Status bestanden/nicht bestanden; Datum; Tester; Bemerkungen/Fehlerbeschreibung.

</details>


[⬅ Inhaltsverzeichnis](README.md)
