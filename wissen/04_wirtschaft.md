# 💶 Wirtschaftlichkeit & Kalkulation

*Bereich: Planung · Prüfungsrelevanz: ★★★*

> Kostenarten, TCO, Kauf/Miete/Leasing, Amortisation, Nutzwertanalyse, Angebotsvergleich.

[⬅ Inhaltsverzeichnis](README.md)

---

> [!WARNING]
> **Katalog 2025:** Gestrichen: Deckungsbeitrag, Vor- und Nachkalkulation, Stamm- und Bewegungsdaten. Weiterhin wichtig: Kosten (fix/variabel), Kauf/Miete/Leasing, Amortisation, Nutzwertanalyse, quantitativer/qualitativer Angebotsvergleich, Umsatz und Gewinn, ökonomische/ökologische/soziale Ziele. Die Verkaufskalkulation ist Bonus.

## Kostenarten

- **Fixkosten**: unabhängig von der Menge/Nutzung (Miete, Leasingrate, Wartungspauschale, Abschreibung).
- **Variable Kosten**: abhängig von der Nutzung (Strom, Toner pro Seite, Pay-per-Use).
- **Einmalige Kosten**: Anschaffung, Installation, Einrichtung, Schulung. **Laufende Kosten**: Strom, Lizenzen (Abo), Support, Wartung.
- **TCO (Total Cost of Ownership)**: alle Kosten über die gesamte Nutzungsdauer – Anschaffung + Betrieb + Wartung + Entsorgung.

> [!IMPORTANT]
> Gesamtkosten K = Kfix + kvar × Menge. Stückkosten = K / Menge.

## Kostenvergleich & Break-even

Zwei Alternativen: A hat Fixkosten 1.000 € und 0,05 €/Seite, B hat 400 € und 0,08 €/Seite. Gleichsetzen: 1000 + 0,05x = 400 + 0,08x → 600 = 0,03x → **x = 20.000 Seiten**. Darunter ist B günstiger, darüber A.

## Amortisationsrechnung

Wann hat sich eine Investition durch Einsparungen „bezahlt gemacht“?

> [!IMPORTANT]
> **Amortisationszeit = Anschaffungskosten ÷ jährliche (bzw. monatliche) Einsparung**  
> Beispiel: Neue Server kosten 12.000 €, sparen 400 €/Monat an Strom und Wartung → 12.000 / 400 = **30 Monate**.

Bei laufenden Mehrkosten der neuen Lösung: Einsparung = alte laufende Kosten − neue laufende Kosten.

## Kauf, Miete, Leasing, Pay-per-Use

<table><tr><th>Form</th><th>Vorteile</th><th>Nachteile</th></tr>
<tr><td>Kauf</td><td>Eigentum, langfristig oft günstigste Variante, freie Verfügung</td><td>hohe Kapitalbindung, Risiko der Veralterung, Wartung selbst</td></tr>
<tr><td>Miete</td><td>flexibel, kurze Laufzeiten, keine Kapitalbindung</td><td>teuer bei langer Nutzung, kein Eigentum</td></tr>
<tr><td>Leasing</td><td>Liquidität bleibt erhalten, planbare Raten, regelmäßige Erneuerung, oft steuerlich als Aufwand</td><td>insgesamt teurer als Kauf, Vertragsbindung, kein Eigentum</td></tr>
<tr><td>Pay-per-Use</td><td>nur tatsächliche Nutzung zahlen, skalierbar (Cloud)</td><td>Kosten schwer planbar bei schwankender Nutzung</td></tr></table>

## Nutzwertanalyse (Scoring-Modell)

1. Kriterien festlegen (Preis, Leistung, Ergonomie, Energie, Service …).
2. Kriterien gewichten (Summe 100 % bzw. 1,0).
3. Jede Alternative je Kriterium bewerten (z. B. 1–10 Punkte).
4. Teilnutzen = Gewichtung × Punkte.
5. Gesamtnutzwert = Summe der Teilnutzen → höchster Wert gewinnt.

<table><tr><th>Kriterium</th><th>Gewicht</th><th>A (Pkt)</th><th>A (TN)</th><th>B (Pkt)</th><th>B (TN)</th></tr>
<tr><td>Preis</td><td>40 %</td><td>8</td><td>3,2</td><td>6</td><td>2,4</td></tr>
<tr><td>Leistung</td><td>35 %</td><td>5</td><td>1,75</td><td>9</td><td>3,15</td></tr>
<tr><td>Service</td><td>25 %</td><td>7</td><td>1,75</td><td>6</td><td>1,5</td></tr>
<tr><td><b>Summe</b></td><td>100 %</td><td></td><td><b>6,7</b></td><td></td><td><b>7,05</b></td></tr></table>

→ B gewinnt. Vorteil: qualitative und quantitative Kriterien vergleichbar. Nachteil: Gewichtung/Punkte sind subjektiv.

## Angebotsvergleich (quantitativ)

```
  Listenpreis
− Rabatt (%)
= Zieleinkaufspreis
− Skonto (%)  (bei Zahlung innerhalb der Frist)
= Bareinkaufspreis
+ Bezugskosten (Versand, Verpackung, Installation)
= Bezugspreis (Einstandspreis)
```

Netto/Brutto: Brutto = Netto × 1,19 (USt 19 %); Netto = Brutto ÷ 1,19. **Qualitativ**: Lieferzeit, Service, Garantie, Zuverlässigkeit, Nachhaltigkeit des Lieferanten.

## Kennzahlen

Umsatz = Preis × Menge. Gewinn = Umsatz − Kosten. **Deckungsbeitrag** = Umsatz − variable Kosten (deckt die Fixkosten). Break-even-Menge = Fixkosten ÷ Stückdeckungsbeitrag. Abschreibung linear = Anschaffungskosten ÷ Nutzungsdauer (PCs i. d. R. 3 Jahre, digitale WG seit 2021 auch sofort möglich).

## Prozentrechnung – Kurzform

Prozentwert = Grundwert × p / 100. Erhöhung um p %: × (1 + p/100). Rückwärts von brutto auf netto: ÷ 1,19, nicht × 0,81!

## Verkaufskalkulation – Angebotspreis für den Kunden

Wenn **du** als IT-Dienstleister einem Kunden ein Angebot machst (Hardware + Dienstleistung), rechnest du vom Einkauf zum Verkaufspreis:

```
  Bezugspreis (Einstandspreis)
+ Handlungskosten / Gemeinkostenzuschlag (%)
= Selbstkosten
+ Gewinnzuschlag (%)
= Barverkaufspreis
+ Kundenskonto (% im Hundert!)
= Zielverkaufspreis
+ Kundenrabatt (% im Hundert!)
= Listenverkaufspreis netto
+ Umsatzsteuer 19 %
= Listenverkaufspreis brutto
```

> [!IMPORTANT]
> **Im Hundert**: Skonto und Rabatt werden später vom höheren Preis abgezogen – deshalb rechnet man rückwärts: Zielverkaufspreis = Barverkaufspreis ÷ (1 − Skonto%/100).   
> Beispiel: Barverkaufspreis 980 €, 2 % Skonto → 980 ÷ 0,98 = **1.000 €** (nicht 980 × 1,02 = 999,60 €).

**Dienstleistungen** kalkulierst du über Stundensätze: Stunden × Stundensatz (+ Anfahrt/Pauschalen). Beispiel: Einrichtung 6 h × 85 € = 510 €. **Handelsspanne** = (Verkaufspreis − Einkaufspreis) ÷ Verkaufspreis × 100. **Kalkulationszuschlag** = (Verkaufspreis − Einkaufspreis) ÷ Einkaufspreis × 100.

## Finanzierungskosten & Zinsrechnung

Wird eine Investition per Kredit finanziert, kommen **Zinsen** zu den Anschaffungskosten (Finanzierungskosten). Grundformel (einfache Zinsen):

> [!IMPORTANT]
> Zinsen Z = Kapital K × Zinssatz p × Zeit t / 100  (t in Jahren)  
> Monate: Z = K × p × m / (100 × 12)  ·  Tage (kaufmännisch, 360 Tage): Z = K × p × d / (100 × 360)

Beispiel: 20.000 € Kredit, 6 % p. a., 9 Monate → 20.000 × 6 × 9 / 1.200 = **900 € Zinsen**.  
**Skonto vs. Kredit**: Lohnt es sich, einen Kontokorrentkredit aufzunehmen, um Skonto zu ziehen? Skonto 2 % bei Zahlung in 10 statt 30 Tagen → Effektivzins ≈ 2 / (30 − 10) × 360 = **36 % p. a.** – fast immer günstiger als der Kreditzins, also Skonto nutzen.  
**Ratenkauf/Leasing**: Gesamtkosten = Anzahlung + Raten × Anzahl (+ Restwert) – mit dem Barpreis vergleichen.

## Ökonomische, ökologische und soziale Kriterien

Viele Unternehmen formulieren im **Leitbild** Ziele in drei Dimensionen (Nachhaltigkeit):

<table><tr><th>Dimension</th><th>Beispiele bei IT-Beschaffung</th></tr>
<tr><td>Ökonomisch</td><td>Preis, TCO, Wirtschaftlichkeit, Gewinn, Liquidität</td></tr>
<tr><td>Ökologisch</td><td>Energieverbrauch, Energieeffizienz-Label, reparierbar/aufrüstbar, lange Nutzung, Refurbished, Rücknahme/Recycling, Verpackung, Siegel (Blauer Engel, TCO Certified, EPEAT)</td></tr>
<tr><td>Sozial</td><td>faire Arbeitsbedingungen in der Lieferkette (Lieferkettensorgfaltspflichtengesetz), Ergonomie, Barrierefreiheit, Gesundheitsschutz der Mitarbeitenden</td></tr></table>

**Zielkonflikt**: z. B. ökonomisch (billigstes Gerät) vs. ökologisch (energieeffizientes, langlebiges Gerät) – in der Prüfung abwägen und begründen. **Zielharmonie**: Energiesparende Geräte senken auch Kosten.  
**Zukunftssicherheit/Skalierbarkeit**: Erweiterbarkeit (RAM-Slots, Anschlüsse), Leistungsreserven, Herstellersupport-Dauer, Kompatibilität mit kommenden Standards (z. B. Windows-11-Anforderungen, Wi-Fi 6/7).  
**Benchmarking**: systematischer Vergleich eigener Produkte, Prozesse oder Kennzahlen mit dem besten Wettbewerber („Best Practice“), um Verbesserungen abzuleiten. In der Hardware auch: Leistungsvergleich per Benchmark-Software (z. B. CPU-Punkte).

---

## 🃏 Karteikarten (28)

| Frage | Antwort |
|---|---|
| Fixe vs. variable Kosten | Fix: unabhängig von der Nutzung (Miete, Leasingrate). Variabel: abhängig von der Nutzung (Strom, Toner). |
| TCO | Total Cost of Ownership – alle Kosten über die Nutzungsdauer: Anschaffung, Betrieb, Wartung, Schulung, Entsorgung. |
| Amortisationszeit – Formel | Anschaffungskosten ÷ Einsparung pro Periode. |
| Break-even zweier Kostenmodelle | Kostenfunktionen gleichsetzen: Kfix1 + k1·x = Kfix2 + k2·x → x berechnen. |
| Leasing – Vorteile | Liquidität bleibt erhalten, planbare Raten, regelmäßige Hardwareerneuerung, Raten als Betriebsausgabe. |
| Leasing – Nachteile | Insgesamt teurer als Kauf, Vertragsbindung, kein Eigentum. |
| Kauf – Vorteile/Nachteile | + Eigentum, langfristig günstig. − Kapitalbindung, Veralterungsrisiko. |
| Schritte der Nutzwertanalyse | Kriterien → Gewichtung (100 %) → Punkte vergeben → Teilnutzen (G × P) → Summe → Entscheidung. |
| Nachteil der Nutzwertanalyse | Gewichtung und Punktevergabe sind subjektiv. |
| Schema Bezugspreis | Listenpreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis. |
| Rabatt vs. Skonto | Rabatt: Preisnachlass (Menge, Treue). Skonto: Nachlass für Zahlung innerhalb einer Frist. |
| Brutto aus Netto | Netto × 1,19 (bei 19 % USt). |
| Deckungsbeitrag | Umsatz − variable Kosten; trägt zur Deckung der Fixkosten bei. |
| Lineare Abschreibung | Anschaffungskosten ÷ Nutzungsdauer = jährlicher Abschreibungsbetrag. |
| Qualitative Kriterien Angebotsvergleich | Lieferzeit, Service, Garantie, Zuverlässigkeit, Erreichbarkeit, Nachhaltigkeit. |
| Schema Verkaufskalkulation | Bezugspreis + Handlungskosten = Selbstkosten + Gewinn = Barverkaufspreis + Skonto (i. H.) = Zielverkaufspreis + Rabatt (i. H.) = Listenverkaufspreis. |
| Warum Skonto/Rabatt „im Hundert“? | Weil sie später vom höheren Preis abgezogen werden: Zielpreis = Barpreis ÷ (1 − p/100). |
| Selbstkosten | Bezugspreis + Handlungskosten (Gemeinkosten). |
| Kalkulationszuschlag | (Verkaufspreis − Einkaufspreis) ÷ Einkaufspreis × 100. |
| Handelsspanne | (Verkaufspreis − Einkaufspreis) ÷ Verkaufspreis × 100. |
| Zinsformel (Jahre) | Z = K × p × t / 100. |
| Zinsformel (Monate) | Z = K × p × m / 1.200. |
| Skonto-Effektivzins (Faustformel) | Skontosatz ÷ (Zahlungsziel − Skontofrist) × 360. |
| Drei Nachhaltigkeitsdimensionen | Ökonomisch, ökologisch, sozial. |
| Ökologische Kriterien IT-Beschaffung | Energieeffizienz, Langlebigkeit/Reparierbarkeit, Recycling, Umweltsiegel, Refurbished. |
| Soziale Kriterien IT-Beschaffung | Faire Arbeitsbedingungen in der Lieferkette, Ergonomie, Barrierefreiheit, Gesundheitsschutz. |
| Zielkonflikt – Beispiel | Billigstes Gerät (ökonomisch) vs. energieeffizientes, langlebiges Gerät (ökologisch). |
| Benchmarking | Vergleich mit dem Besten (Best Practice) bzw. Leistungsvergleich per Benchmark-Test. |

## ✍️ Übungsfragen (23)

**1.** Eine Investition kostet 9.000 € und spart monatlich 250 € ein. Nach wie vielen Monaten hat sie sich amortisiert?

<details><summary>Lösung</summary>

**36 Monate**<br>9.000 ÷ 250 = 36 Monate.

</details>

**2.** Drucker A: 800 € + 0,04 €/Seite. Drucker B: 200 € + 0,07 €/Seite. Ab wie vielen Seiten ist A günstiger? (Break-even-Menge)

<details><summary>Lösung</summary>

**20000 Seiten**<br>800 + 0,04x = 200 + 0,07x → 600 = 0,03x → x = 20.000. Ab mehr als 20.000 Seiten ist A günstiger.

</details>

**3.** Listenpreis 2.000 €, 10 % Rabatt, 2 % Skonto, 30 € Versand. Wie hoch ist der Bezugspreis?

<details><summary>Lösung</summary>

**1794 €**<br>2000 − 200 = 1800; − 2 % (36) = 1764; + 30 = 1794 €.

</details>

**4.** Ein Monitor kostet brutto 357 €. Wie hoch ist der Nettopreis (19 % USt)?

<details><summary>Lösung</summary>

**300 €**<br>357 ÷ 1,19 = 300 €.

</details>

**5.** Nennen Sie je zwei Beispiele für fixe und variable Kosten eines IT-Arbeitsplatzes.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Fix (je 1): monatliche Leasingrate; Miete; Lizenz-Abo pro Monat; Wartungsvertrag; Abschreibung. Variabel (je 1): Strom nach Verbrauch; Toner/Papier pro Seite; Cloud-Kosten pro Rechenstunde bzw. nach Nutzung.<br>Die Leasingrate fällt unabhängig von der Nutzung an.

</details>

**6.** Wofür steht TCO?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Total Cost of Ownership<br>Gesamtkosten über den Lebenszyklus.

</details>

**7.** Nutzwertanalyse: Kriterium Preis 40 %, Bewertung 7 Punkte. Wie hoch ist der Teilnutzen?

<details><summary>Lösung</summary>

**2.8**<br>0,40 × 7 = 2,8.

</details>

**8.** Welcher Vorteil spricht für Leasing statt Kauf?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Schonung der Liquidität<br>Leasing bindet kein Kapital; insgesamt ist es meist teurer.

</details>

**9.** Neue Rechner kosten 18.000 €. Alte Kosten pro Jahr: 7.000 €, neue Kosten pro Jahr: 1.000 €. Amortisationszeit in Jahren?

<details><summary>Lösung</summary>

**3 Jahre**<br>Einsparung = 7.000 − 1.000 = 6.000 €/Jahr; 18.000 ÷ 6.000 = 3 Jahre.

</details>

**10.** Ein Server kostet 6.000 € und wird linear über 3 Jahre abgeschrieben. Jährliche Abschreibung?

<details><summary>Lösung</summary>

**2000 €**<br>6.000 ÷ 3 = 2.000 € pro Jahr.

</details>

**11.** Welche sind qualitative Kriterien eines Angebotsvergleichs? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Lieferzeit; Kundenservice; Garantiebedingungen. Der Bezugspreis ist quantitativ.

</details>

**12.** Ihr Betrieb überlegt, 30 Notebooks zu leasen statt zu kaufen. Nennen Sie je zwei Vor- und Nachteile des Leasings. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Vorteile (je 1): keine hohe Kapitalbindung/Liquidität bleibt; planbare monatliche Raten; regelmäßiger Austausch → aktuelle Technik; Leasingraten als Betriebsausgabe; ggf. Service inklusive. Nachteile (je 1): insgesamt höhere Kosten als Kauf; kein Eigentum; Vertragsbindung/Laufzeit; Auflagen zum Zustand bei Rückgabe.

</details>

**13.** Beschreiben Sie das Vorgehen bei einer Nutzwertanalyse in vier Schritten. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** 1. Bewertungskriterien festlegen (1). 2. Kriterien gewichten, Summe 100 % (1). 3. Alternativen je Kriterium mit Punkten bewerten und Teilnutzen = Gewicht × Punkte berechnen (1). 4. Teilnutzen addieren und die Alternative mit dem höchsten Gesamtnutzwert wählen (1).

</details>

**14.** Bezugspreis 800 €, Handlungskosten 25 %, Gewinn 10 %. Wie hoch ist der Barverkaufspreis?

<details><summary>Lösung</summary>

**1100 €**<br>800 × 1,25 = 1.000 (Selbstkosten) × 1,10 = 1.100 €.

</details>

**15.** Barverkaufspreis 1.176 €, der Kunde darf 2 % Skonto abziehen. Wie hoch ist der Zielverkaufspreis?

<details><summary>Lösung</summary>

**1200 €**<br>1.176 ÷ 0,98 = 1.200 € (im Hundert).

</details>

**16.** Zielverkaufspreis 1.800 €, Kundenrabatt 10 %. Wie hoch ist der Listenverkaufspreis netto?

<details><summary>Lösung</summary>

**2000 €**<br>1.800 ÷ 0,90 = 2.000 €.

</details>

**17.** Ein Angebot umfasst 3 Notebooks à 950 € netto und 5 Stunden Einrichtung à 80 €. Wie hoch ist der Bruttobetrag (19 % USt)?

<details><summary>Lösung</summary>

**3867.5 €**<br>2.850 + 400 = 3.250 € netto × 1,19 = 3.867,50 €.

</details>

**18.** Warum wird bei der Verkaufskalkulation der Kundenskonto „im Hundert“ aufgeschlagen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Weil der Kunde den Skonto vom höheren Zielverkaufspreis abzieht und danach genau der Barverkaufspreis übrig bleiben soll

</details>

**19.** Ein Kredit über 15.000 € wird zu 8 % p. a. für 6 Monate aufgenommen. Wie hoch sind die Zinsen?

<details><summary>Lösung</summary>

**600 €**<br>15.000 × 8 × 6 / 1.200 = 600 €.

</details>

**20.** Ein Lieferant gewährt 3 % Skonto bei Zahlung innerhalb von 10 Tagen, sonst 40 Tage Zahlungsziel. Wie hoch ist der Effektivzins p. a. (Faustformel, 360 Tage)?

<details><summary>Lösung</summary>

**36 %**<br>3 ÷ (40 − 10) × 360 = 36 %.

</details>

**21.** Nennen Sie zwei ökologische Kriterien für die Beschaffung von IT-Geräten.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Je 1: geringer Energieverbrauch/gute Energieeffizienz; Recyclingfähigkeit; Langlebigkeit und Reparierbarkeit; Umweltsiegel (Blauer Engel, EPEAT, TCO Certified); generalüberholte Geräte; wenig Verpackung.<br>Preis/Liquidität = ökonomisch, faire Löhne = sozial.

</details>

**22.** Eine Firma kauft das günstigste Notebook, obwohl ein teureres Modell 40 % weniger Strom braucht und doppelt so lange Support erhält. Das ist ein Beispiel für …

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Zielkonflikt zwischen ökonomischen und ökologischen Zielen

</details>

**23.** Ihr Unternehmen hat sich im Leitbild zu Nachhaltigkeit verpflichtet. Nennen Sie je ein ökologisches und ein soziales Kriterium für die Beschaffung von 50 Monitoren. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Ökologisch (1): geringe Leistungsaufnahme/gute Energieeffizienzklasse, Umweltsiegel (Blauer Engel, TCO Certified, EPEAT), langlebig/reparierbar, Rücknahme durch Hersteller, wenig Verpackung. Sozial (1): faire Arbeitsbedingungen in der Lieferkette (z. B. TCO Certified), ergonomische Eigenschaften (höhenverstellbar, flimmerfrei), Barrierefreiheit.

</details>


[⬅ Inhaltsverzeichnis](README.md)
