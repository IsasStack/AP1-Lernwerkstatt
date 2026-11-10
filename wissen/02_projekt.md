# 📋 Projektmanagement

*Bereich: Planung · Prüfungsrelevanz: ★★★*

> Projektmerkmale, Phasen, SMART, Wasserfall vs. Scrum, Gantt, Netzplan.

[⬅ Inhaltsverzeichnis](README.md)

---

## Was ist ein Projekt?

Ein Vorhaben, das im Wesentlichen durch **Einmaligkeit** der Bedingungen gekennzeichnet ist (DIN 69901): klares **Ziel**, **zeitliche Begrenzung** (Start/Ende), begrenzte **Ressourcen** (Budget, Personal), eigene **Projektorganisation**, Komplexität/Risiko, oft interdisziplinär.

> [!IMPORTANT]
> **Magisches Dreieck:** Leistung/Qualität – Zeit – Kosten. Änderst du eine Ecke, wirkt sich das auf die anderen aus (mehr Leistung ⇒ mehr Zeit oder Kosten).

## Projektphasen (klassisch)

Initialisierung → Definition/Planung → Durchführung → Abschluss (begleitend: Controlling). Phasen enden mit **Meilensteinen** = Ereignisse ohne Dauer, an denen ein Ergebnis überprüft wird.

## Vorbereitung: Machbarkeit & Umfeld

- **Machbarkeitsanalyse**: technisch, wirtschaftlich, rechtlich (DSGVO!), terminlich, personell.
- **Stakeholderanalyse**: Wer ist betroffen/beteiligt? Einfluss & Einstellung (Promotoren, Kritiker).
- **Risikoanalyse**: Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe; Maßnahmen vermeiden, vermindern, übertragen, akzeptieren.
- **Lastenheft** (Auftraggeber: WAS & WOFÜR) → **Pflichtenheft** (Auftragnehmer: WIE & WOMIT).

## SMART-Ziele

<table><tr><th>Buchstabe</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>S</td><td>Spezifisch – eindeutig</td><td>„Alle 25 Arbeitsplätze der Buchhaltung …“</td></tr>
<tr><td>M</td><td>Messbar</td><td>„… mit Windows 11 und BitLocker …“</td></tr>
<tr><td>A</td><td>Attraktiv/akzeptiert (achievable)</td><td>vom Team getragen</td></tr>
<tr><td>R</td><td>Realistisch</td><td>mit vorhandenen Ressourcen erreichbar</td></tr>
<tr><td>T</td><td>Terminiert</td><td>„… bis 31.03. ausgestattet.“</td></tr></table>

## Vorgehensmodelle: Wasserfall vs. Scrum

<table><tr><th></th><th>Wasserfall</th><th>Scrum (agil)</th></tr>
<tr><td>Ablauf</td><td>sequenzielle Phasen: Analyse → Entwurf → Implementierung → Test → Einsatz/Wartung</td><td>iterativ in Sprints (1–4 Wochen), am Ende jeweils ein nutzbares Inkrement</td></tr>
<tr><td>Anforderungen</td><td>vollständig zu Beginn festgelegt</td><td>im Product Backlog, laufend priorisiert &amp; änderbar</td></tr>
<tr><td>Stärken</td><td>Planungssicherheit, klare Dokumentation, gut bei stabilen Anforderungen</td><td>Flexibilität, frühes Kundenfeedback, Transparenz</td></tr>
<tr><td>Schwächen</td><td>Änderungen teuer, Fehler spät entdeckt, Kunde sieht Ergebnis spät</td><td>Gesamtkosten/-termin schwer planbar, hohe Kundenbeteiligung nötig</td></tr></table>

**Scrum-Rollen:** Product Owner (Wert, Backlog, Prioritäten), Scrum Master (Prozess, Hindernisse beseitigen), Developers (selbstorganisiert, liefern Inkrement).  
**Events:** Sprint, Sprint Planning, Daily Scrum (15 Min.), Sprint Review (Ergebnis mit Stakeholdern), Sprint Retrospektive (Zusammenarbeit verbessern).  
**Artefakte:** Product Backlog, Sprint Backlog, Increment (+ Definition of Done).

## Planungswerkzeuge

- **Projektstrukturplan (PSP)**: hierarchische Zerlegung in Teilaufgaben und Arbeitspakete – *was* ist zu tun (ohne Zeit).
- **Gantt-Diagramm** (Balkenplan): Vorgänge als Balken auf Zeitachse – anschaulich, Abhängigkeiten nur begrenzt sichtbar.
- **Netzplan**: Vorgänge mit Abhängigkeiten, Puffern, kritischem Pfad.

## Netzplantechnik (Vorgangsknoten)

```
┌─────┬─────┬─────┐
│ FAZ │  D  │ FEZ │
├─────┴─────┴─────┤
│  Nr / Vorgang   │
├─────┬─────┬─────┤
│ SAZ │ GP  │ SEZ │
└─────┴─────┴─────┘
```

1. **Vorwärtsrechnung:** FEZ = FAZ + D. FAZ eines Nachfolgers = **größter** FEZ aller Vorgänger.
2. **Rückwärtsrechnung:** Am Ende SEZ = FEZ. SAZ = SEZ − D. SEZ eines Vorgängers = **kleinster** SAZ aller Nachfolger.
3. **Gesamtpuffer** GP = SAZ − FAZ (= SEZ − FEZ): so viel darf sich der Vorgang verzögern, ohne das Projektende zu verschieben.
4. **Freier Puffer** FP = kleinster FAZ der Nachfolger − FEZ: Verzögerung ohne Auswirkung auf Nachfolger.
5. **Kritischer Pfad**: lückenlose Kette mit GP = 0 – jede Verzögerung verschiebt das Projektende.

> [!TIP]
> Start-Konvention: Meist beginnt der erste Vorgang bei FAZ = 0. Manche Aufgaben starten mit 1 – dann gilt FEZ = FAZ + D − 1. Lies die Vorgabe genau!

**Terminprobleme lösen:** Vorgänge parallelisieren, Ressourcen auf dem kritischen Pfad erhöhen, Umfang reduzieren, Puffer nutzen, Überstunden/externe Kräfte.

## Abschluss

Abnahme (Abnahmeprotokoll), Soll-Ist-Vergleich, Abweichungsanalyse, **Lessons Learned**, Projektdokumentation, Auflösung des Teams. **Teamentwicklung nach Tuckman:** Forming → Storming → Norming → Performing (→ Adjourning).

---

## 🃏 Karteikarten (20)

| Frage | Antwort |
|---|---|
| Merkmale eines Projekts | Einmaligkeit, klares Ziel, zeitlich begrenzt, begrenzte Ressourcen, eigene Organisation, Komplexität/Risiko. |
| Magisches Dreieck | Leistung/Qualität, Zeit, Kosten – beeinflussen sich gegenseitig. |
| Meilenstein | Ereignis ohne Dauer, an dem ein definiertes (Teil-)Ergebnis überprüft wird. |
| Lastenheft vs. Pflichtenheft | Lastenheft: Auftraggeber, WAS/WOFÜR. Pflichtenheft: Auftragnehmer, WIE/WOMIT – Grundlage für die Umsetzung. |
| SMART | Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch, Terminiert. |
| Wasserfallmodell – Vor- und Nachteil | + Planbarkeit, klare Phasen/Dokumentation; − Änderungen spät & teuer, Kunde sieht Ergebnis erst am Ende. |
| Scrum-Rollen | Product Owner, Scrum Master, Developers. |
| Scrum-Events | Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospektive. |
| Scrum-Artefakte | Product Backlog, Sprint Backlog, Increment. |
| Sprint Review vs. Retrospektive | Review: WAS wurde geliefert (mit Stakeholdern). Retro: WIE haben wir gearbeitet (Team, Prozessverbesserung). |
| FAZ eines Vorgangs mit mehreren Vorgängern | Der größte FEZ der Vorgänger. |
| SEZ eines Vorgangs mit mehreren Nachfolgern | Der kleinste SAZ der Nachfolger. |
| Gesamtpuffer | GP = SAZ − FAZ = SEZ − FEZ. |
| Freier Puffer | FP = min(FAZ der Nachfolger) − FEZ. |
| Kritischer Pfad | Kette von Vorgängen mit Gesamtpuffer 0; bestimmt die Projektdauer. |
| PSP | Projektstrukturplan: hierarchische Zerlegung des Projekts in Teilaufgaben und Arbeitspakete, ohne Zeitbezug. |
| Gantt-Diagramm | Balkendiagramm: Vorgänge auf einer Zeitachse, gut für Überblick und Fortschritt. |
| Risiko berechnen | Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe. |
| Phasen der Teamentwicklung (Tuckman) | Forming, Storming, Norming, Performing (Adjourning). |
| Lessons Learned | Systematische Sammlung von Erfahrungen am Projektende für künftige Projekte. |

## ✍️ Übungsfragen (15)

**1.** Nennen Sie vier Merkmale eines Projekts.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je 1 Punkt (max. 4): Einmaligkeit; klare Zielvorgabe; zeitliche Begrenzung (Anfang und Ende); begrenzte Ressourcen (Budget, Personal); eigene Projektorganisation; Neuartigkeit/Komplexität/Risiko. Kein Merkmal: dauerhafte Routinetätigkeit – das ist Linienarbeit.<br>Routine ist Linienarbeit, kein Projekt.

</details>

**2.** Wer erstellt das Pflichtenheft?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Auftragnehmer<br>Der Auftragnehmer beschreibt im Pflichtenheft, WIE er die Anforderungen des Lastenhefts umsetzt.

</details>

**3.** Vorgang C hat die Vorgänger A (FEZ 5) und B (FEZ 8). Wie groß ist FAZ von C?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 8<br>Bei Zusammenführung zählt der größte FEZ der Vorgänger.

</details>

**4.** Ein Vorgang hat FAZ = 4, Dauer = 3, SAZ = 6. Wie groß ist der Gesamtpuffer?

<details><summary>Lösung</summary>

**2 Tage**<br>GP = SAZ − FAZ = 6 − 4 = 2.

</details>

**5.** Erläutern Sie, was der kritische Pfad eines Netzplans ist und was eine Verzögerung auf ihm bewirkt.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Der kritische Pfad ist die Kette der Vorgänge ohne Puffer (Gesamtpuffer 0) und damit der längste Weg durch den Netzplan (1). Jede Verzögerung eines Vorgangs auf ihm verschiebt das Projektende (1).<br>Kritischer Pfad: GP = 0 und längster Weg durch den Netzplan.

</details>

**6.** Welche Scrum-Rolle priorisiert das Product Backlog?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Product Owner<br>Der Product Owner verantwortet Wert und Reihenfolge des Backlogs.

</details>

**7.** In welchem Scrum-Event wird die Zusammenarbeit des Teams reflektiert?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Sprint Retrospektive<br>Die Retrospektive verbessert den Prozess, das Review betrachtet das Produkt.

</details>

**8.** Nennen Sie drei Merkmale des Wasserfallmodells.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1: Phasen laufen streng nacheinander ab; Anforderungen werden zu Beginn festgelegt; gute Planbarkeit bei stabilen Anforderungen; umfangreiche Dokumentation je Phase; Änderungen in späten Phasen sind aufwendig und teuer; der Kunde sieht das Ergebnis erst am Ende.<br>Sprints und laufende Priorisierung gehören zu Scrum.

</details>

**9.** Das Ziel „Wir wollen die Vertriebsnotebooks besser absichern“ ist nicht SMART. Formulieren Sie es SMART und nennen Sie zwei Kriterien, die Ihre Formulierung erfüllt.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Z. B.: „Bis zum 30.04. sind alle 12 Vertriebsnotebooks mit BitLocker verschlüsselt.“ (1) Kriterien (je 1): spezifisch (Vertriebsnotebooks, BitLocker); messbar (12 Geräte); terminiert (30.04.); realistisch/akzeptiert.<br>Spezifisch (Vertriebsnotebooks), messbar (12, BitLocker), terminiert (30.04.).

</details>

**10.** Wofür steht das „T“ in SMART?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Terminiert<br>T = terminiert (time-bound).

</details>

**11.** Vorgang X: FEZ = 10. Nachfolger Y hat FAZ 12, Nachfolger Z hat FAZ 10. Wie groß ist der freie Puffer von X?

<details><summary>Lösung</summary>

**0 Tage**<br>FP = min(FAZ Nachfolger) − FEZ = 10 − 10 = 0.

</details>

**12.** Was zeigt ein Projektstrukturplan?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Hierarchische Zerlegung in Arbeitspakete<br>Der PSP beantwortet WAS zu tun ist, nicht WANN.

</details>

**13.** Das Projekt „Rollout 40 neue Arbeitsplätze“ droht den Endtermin zu verfehlen, weil ein Vorgang auf dem kritischen Pfad verzögert ist. Nennen Sie drei Maßnahmen. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt, z. B.: zusätzliche Ressourcen/Personal auf dem kritischen Vorgang einsetzen; Vorgänge parallelisieren statt nacheinander; Leistungsumfang reduzieren (z. B. Teilrollout); Überstunden/externe Dienstleister; Puffer anderer Vorgänge nutzen und Ressourcen umschichten.

</details>

**14.** Vergleichen Sie Wasserfallmodell und Scrum anhand der Kriterien „Umgang mit Anforderungsänderungen“ und „Kundeneinbindung“. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Änderungen: Im Wasserfall werden Anforderungen zu Beginn fixiert; spätere Änderungen sind aufwendig/teuer (1). In Scrum werden Anforderungen im Product Backlog laufend angepasst und je Sprint neu priorisiert (1). Kunde: Im Wasserfall v. a. am Anfang (Anforderungen) und am Ende (Abnahme) eingebunden (1). In Scrum regelmäßig über Product Owner und Sprint Reviews mit Feedback nach jedem Inkrement (1).

</details>

**15.** Erläutern Sie den Begriff „Gesamtpuffer“ und wie er berechnet wird. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Der Gesamtpuffer gibt an, um wie viele Zeiteinheiten ein Vorgang verschoben/verlängert werden kann, ohne dass sich das Projektende verzögert (1). Berechnung: GP = SAZ − FAZ bzw. SEZ − FEZ (1).

</details>


[⬅ Inhaltsverzeichnis](README.md)
