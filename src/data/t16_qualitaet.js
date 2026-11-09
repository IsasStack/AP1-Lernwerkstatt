T.push({
id:"qualitaet", title:"Qualitätssicherung & Test", icon:"✅", area:"Planung", weight:2,
summary:"QM nach ISO 9000/9001, PDCA, Softwarequalität ISO 25010, Testarten, Testprotokoll, Dokumentation.",
lesson:`
<h3>Qualität & Qualitätsmanagement</h3>
<p><b>Qualität</b> (ISO 9000): Grad, in dem inhärente Merkmale eines Objekts Anforderungen erfüllen. Kurz: Die Kundenanforderungen werden erfüllt.</p>
<ul><li><b>ISO 9000</b>: Grundlagen und Begriffe. <b>ISO 9001</b>: Anforderungen an ein QM-System – <b>zertifizierbar</b>. ISO 9004: Leitfaden zum nachhaltigen Erfolg.</li>
<li>Grundsätze: Kundenorientierung, Führung, Einbeziehung der Personen, prozessorientierter Ansatz, Verbesserung, faktengestützte Entscheidungen, Beziehungsmanagement.</li>
<li><b>Audit</b>: systematische, unabhängige Prüfung, ob Anforderungen erfüllt sind (intern = 1st Party, beim Lieferanten = 2nd Party, durch Zertifizierer = 3rd Party). <b>Zertifizierung</b>: Bestätigung durch eine akkreditierte Stelle nach erfolgreichem Audit (i. d. R. 3 Jahre gültig, jährliche Überwachungsaudits).</li>
<li>Weitere Normen/Modelle: <b>TQM</b> (Total Quality Management – ganzheitlich, alle Mitarbeitenden), <b>EFQM</b>, ITIL (IT-Service-Management), ISO/IEC 20000.</li>
<li>Phasen: Qualitätsplanung (Ziele, Kennzahlen) → Qualitätslenkung (Prozesse steuern) → Qualitätssicherung (Prüfen) → Qualitätsverbesserung.</li></ul>
<h3>PDCA-Zyklus (Deming-Kreis)</h3>
<table><tr><th>Phase</th><th>Inhalt</th><th>Beispiel Ticketsystem</th></tr>
<tr><td><b>Plan</b></td><td>Ist-Analyse, Ziele, Maßnahmen planen</td><td>Ziel: 80 % der Tickets in 4 h lösen</td></tr>
<tr><td><b>Do</b></td><td>Maßnahmen (testweise) umsetzen</td><td>Wissensdatenbank einführen</td></tr>
<tr><td><b>Check</b></td><td>Ergebnisse messen, Soll-Ist-Vergleich</td><td>Lösungszeiten auswerten</td></tr>
<tr><td><b>Act</b></td><td>Standardisieren oder anpassen, neuer Zyklus</td><td>Prozess verbindlich machen</td></tr></table>
<p>Prinzip der <b>kontinuierlichen Verbesserung</b> (KVP, Kaizen).</p>
<h3>Softwarequalität (ISO/IEC 25010)</h3>
<p>Qualitätsmerkmale (früher ISO 9126): <b>Funktionale Eignung</b> (Vollständigkeit, Korrektheit), <b>Zuverlässigkeit</b> (Verfügbarkeit, Fehlertoleranz, Wiederherstellbarkeit), <b>Benutzbarkeit/Usability</b> (Erlernbarkeit, Bedienbarkeit, Barrierefreiheit), <b>Leistungseffizienz</b> (Antwortzeit, Ressourcenverbrauch), <b>Wartbarkeit</b> (Änderbarkeit, Modularität, Testbarkeit), <b>Übertragbarkeit/Portabilität</b> (Installierbarkeit, Anpassbarkeit), <b>Kompatibilität</b> (Interoperabilität), <b>Sicherheit</b>.</p>
<h3>Testen</h3>
<ul><li><b>Black-Box-Test</b>: Funktion wird anhand der Spezifikation geprüft, ohne Kenntnis des Codes (Eingabe → erwartete Ausgabe). Methoden: Äquivalenzklassen, Grenzwertanalyse.</li>
<li><b>White-Box-Test</b>: mit Kenntnis des Codes; prüft Anweisungs-/Zweigabdeckung.</li>
<li><b>Grey-Box</b>: Mischform.</li></ul>
<table><tr><th>Teststufe</th><th>Was wird getestet?</th></tr>
<tr><td>Komponenten-/Unit-Test</td><td>einzelne Funktionen/Module (Entwickler)</td></tr>
<tr><td>Integrationstest</td><td>Zusammenspiel der Komponenten/Schnittstellen</td></tr>
<tr><td>Systemtest</td><td>Gesamtsystem gegen Anforderungen (Pflichtenheft)</td></tr>
<tr><td>Abnahmetest</td><td>durch den Kunden gegen das Lastenheft – Grundlage der Abnahme</td></tr></table>
<p>Weitere Testarten: <b>Funktionstest</b>, <b>Regressionstest</b> (nach Änderungen: funktioniert Altes noch?), <b>Lasttest/Performancetest</b>, <b>Usability-Test</b>, <b>Sicherheitstest/Penetrationstest</b>, Smoke-Test (grundlegende Funktionsfähigkeit). <b>Statische Tests</b> (Code-Review, Walkthrough, ohne Ausführung) vs. <b>dynamische Tests</b> (Programm wird ausgeführt).</p>
<div class="merke"><b>Grenzwertanalyse:</b> Feld erlaubt 1–100 → teste 0, 1, 100, 101 (und einen Wert mittendrin). <b>Äquivalenzklassen:</b> gültig (1–100), ungültig zu klein (&lt; 1), ungültig zu groß (&gt; 100), ungültiger Typ (Text).</div>
<h3>Testprotokoll / Testfall</h3>
<p>Testfall-ID, Beschreibung, Vorbedingungen, Testdaten/Eingabe, <b>erwartetes Ergebnis</b>, <b>tatsächliches Ergebnis</b>, Status (bestanden/fehlgeschlagen), Datum, Tester. Fehler → Fehlermeldung mit Reproduktionsschritten, Priorität.</p>
<h3>Qualitätssicherung beim Arbeitsplatz-Rollout</h3>
<ul><li>Funktionstests nach Einrichtung: Anmeldung (Domäne), Netzwerk & Internet, Drucker, Netzlaufwerke, Fachanwendungen, E-Mail, Peripherie, Verschlüsselung aktiv, Updates.</li>
<li>Checklisten, standardisierte Images, Pilotgruppe vor dem großen Rollout.</li>
<li><b>Dokumentation</b>: Inventarisierung (Hersteller, Modell, Seriennummer, Inventarnummer, Standort, Nutzer), Netzwerkplan, Konfiguration, Lizenzen, Übergabe-/Abnahmeprotokoll, Benutzerhandbuch.</li>
<li>Nach Abschluss: Soll-Ist-Vergleich, Kundenzufriedenheit, Lessons Learned.</li></ul>`,
cards:[
["Qualität nach ISO 9000","Grad, in dem Merkmale eines Produkts/einer Leistung die Anforderungen erfüllen."],
["ISO 9001","Norm mit Anforderungen an ein Qualitätsmanagementsystem – zertifizierbar."],
["Audit","Systematische, unabhängige Prüfung, ob Anforderungen/Prozesse eingehalten werden."],
["PDCA","Plan – Do – Check – Act: Zyklus der kontinuierlichen Verbesserung."],
["Check-Phase im PDCA","Ergebnisse messen und mit den Zielen vergleichen (Soll-Ist)."],
["Merkmale Softwarequalität (ISO 25010)","Funktionale Eignung, Zuverlässigkeit, Benutzbarkeit, Effizienz, Wartbarkeit, Übertragbarkeit, Kompatibilität, Sicherheit."],
["Black-Box-Test","Test ohne Codekenntnis, nur Ein-/Ausgabe gegen Spezifikation."],
["White-Box-Test","Test mit Codekenntnis, z. B. Zweigabdeckung."],
["Regressionstest","Erneuter Test nach Änderungen, um unbeabsichtigte Fehler in bestehenden Funktionen zu finden."],
["Grenzwertanalyse","Testfälle an und direkt neben den Grenzen gültiger Bereiche."],
["Teststufen","Komponententest, Integrationstest, Systemtest, Abnahmetest."],
["Abnahmetest","Test durch den Kunden gegen dessen Anforderungen (Lastenheft)."],
["Statischer vs. dynamischer Test","Statisch: ohne Ausführung (Review). Dynamisch: Programm wird ausgeführt."],
["Inhalte eines Testprotokolls","ID, Beschreibung, Vorbedingung, Eingabe, erwartetes & tatsächliches Ergebnis, Status, Datum, Tester."],
["TQM","Total Quality Management: ganzheitliches QM unter Einbeziehung aller Mitarbeitenden."]
],
qs:[
{t:"sc",q:"Welche Norm ist für Qualitätsmanagementsysteme zertifizierbar?",o:["ISO 9000","ISO 9001","ISO 9241","ISO 25010"],a:1,e:""},
{t:"sc",q:"In welcher PDCA-Phase werden die Ergebnisse gemessen und bewertet?",o:["Plan","Do","Check","Act"],a:2,e:""},
{t:"sc",q:"Ein Tester prüft eine Eingabemaske nur anhand der Spezifikation, ohne den Code zu kennen. Testart?",o:["White-Box","Black-Box","Code-Review","Unit-Test"],a:1,e:""},
{t:"sc",q:"Nach einem Update wird geprüft, ob bestehende Funktionen weiterhin korrekt laufen. Testart?",o:["Lasttest","Regressionstest","Abnahmetest","Smoke-Test"],a:1,e:""},
{t:"mc",q:"Ein Feld akzeptiert ganze Zahlen von 18 bis 67. Welche Werte gehören zu einer Grenzwertanalyse? (mehrere)",o:["17","18","40","67","68"],a:[0,1,3,4],e:"An und direkt neben den Grenzen; 40 ist ein Repräsentant der Äquivalenzklasse, kein Grenzwert."},
{t:"sc",q:"Welche Teststufe führt der Kunde gegen seine Anforderungen durch?",o:["Komponententest","Integrationstest","Systemtest","Abnahmetest"],a:3,e:""},
{t:"sc",q:"Welches Softwarequalitätsmerkmal beschreibt, wie leicht sich ein Programm ändern lässt?",o:["Benutzbarkeit","Wartbarkeit","Effizienz","Zuverlässigkeit"],a:1,e:""},
{t:"sc",q:"Was ist ein Code-Review?",o:["Dynamischer Test","Statischer Test","Lasttest","Abnahmetest"],a:1,e:"Kein Ausführen des Programms."},
{t:"open",q:"Erläutern Sie den PDCA-Zyklus am Beispiel der Verbesserung des IT-Supports. (4 Punkte)",p:4,a:"Plan: Ist-Zustand analysieren (z. B. lange Lösungszeiten), Ziel und Maßnahme festlegen (Wissensdatenbank) (1). Do: Maßnahme testweise umsetzen (1). Check: Ergebnisse messen, z. B. durchschnittliche Lösungszeit vor/nach (1). Act: Bei Erfolg standardisieren, sonst anpassen; neuer Zyklus beginnt (1)."},
{t:"open",q:"Nennen Sie vier Funktionstests, die Sie nach der Einrichtung eines neuen Arbeitsplatzes durchführen. (4 Punkte)",p:4,a:"Je 1: Anmeldung mit Domänenkonto; Netzwerk-/Internetzugang; Zugriff auf Netzlaufwerke/Freigaben; Drucken; Fachanwendungen und Office starten; E-Mail senden/empfangen; Monitor/Docking/Peripherie; BitLocker/Virenschutz aktiv; Updates installiert."},
{t:"open",q:"Nennen Sie sechs Angaben, die ein Testprotokoll enthalten sollte. (3 Punkte)",p:3,a:"Je 0,5: Testfall-ID; Beschreibung/Testziel; Vorbedingungen; Testdaten/Eingaben; erwartetes Ergebnis; tatsächliches Ergebnis; Status bestanden/nicht bestanden; Datum; Tester; Bemerkungen/Fehlerbeschreibung."}
]
});
