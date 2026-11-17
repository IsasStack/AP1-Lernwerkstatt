# 🧮 Zahlensysteme & Datenmengen

*Bereich: Software · Prüfungsrelevanz: ★★★*

> Binär, Hex, Dezimal, Bit/Byte, SI vs. IEC, Speicherbedarf, Übertragungszeit, Bild & Video.

[⬅ Inhaltsverzeichnis](README.md)

---

Computer rechnen mit Nullen und Einsen. Daraus ergeben sich die Rechenaufgaben, die in der AP1 regelmäßig vorkommen: Zahlen zwischen Dezimal, Binär und Hexadezimal umrechnen, Speicherbedarf von Bildern und Videos bestimmen, Übertragungszeiten ausrechnen und Einheiten richtig umwandeln. „Übertragungsraten und Datenmengen“ ist im Katalog 2025 ausdrücklich betont. Mit dem Rechentrainer der App kannst du jede Aufgabenart beliebig oft üben.

## Zahlensysteme

Ein Zahlensystem legt fest, wie viele Ziffern es gibt (**Basis**) und welchen Wert jede Stelle hat. Im Dezimalsystem hat jede Stelle den zehnfachen Wert der rechten Nachbarstelle (1, 10, 100 …). Im Binärsystem den doppelten (1, 2, 4, 8 …).

<table><tr><th>System</th><th>Basis</th><th>Ziffern</th><th>Schreibweise</th></tr>
<tr><td>Dezimal</td><td>10</td><td>0–9</td><td>182</td></tr>
<tr><td>Binär (Dual)</td><td>2</td><td>0, 1</td><td>1011 0110₂, 0b10110110</td></tr>
<tr><td>Oktal</td><td>8</td><td>0–7</td><td>266₈</td></tr>
<tr><td>Hexadezimal</td><td>16</td><td>0–9, A–F (A = 10 … F = 15)</td><td>B6₁₆, 0xB6</td></tr></table>

**Warum binär?** Elektronische Schaltungen kennen zuverlässig zwei Zustände: Strom an oder aus. **Warum hexadezimal?** Lange Binärzahlen sind unübersichtlich. Je **4 Bit** entsprechen genau einer Hex-Ziffer – so wird aus 1011 0110 einfach B6. Deshalb sieht man Hex bei MAC-Adressen, IPv6, Farbcodes und Speicheradressen.

#### Binär → Dezimal

Schreibe die Stellenwerte über die Bits und addiere die Werte, wo eine 1 steht.

> [!NOTE]
> **Beispiel**
>
> |  |  |  |  |  |  |  |  |  |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | Stellenwert | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
> | Bit | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |
>
> 1011 0110₂ = 128 + 32 + 16 + 4 + 2 = **182**

#### Dezimal → Binär

**Methode 1 – Zweierpotenzen abziehen:** Von links beginnend: Passt der Stellenwert noch hinein? Dann 1 schreiben und abziehen, sonst 0.

> [!NOTE]
> **Beispiel**
>
> 200: 128 passt → 1, Rest 72 · 64 passt → 1, Rest 8 · 32 nein → 0 · 16 nein → 0 · 8 passt → 1, Rest 0 · 4, 2, 1 → 0 0 0  
> 200 = **1100 1000₂**

**Methode 2 – fortgesetzt durch 2 teilen:** Die Reste von unten nach oben gelesen ergeben die Binärzahl.

> [!NOTE]
> **Beispiel**
>
> | Rechnung | Ergebnis | Rest |
> | --- | --- | --- |
> | 200 ÷ 2 | 100 | 0 |
> | 100 ÷ 2 | 50 | 0 |
> | 50 ÷ 2 | 25 | 0 |
> | 25 ÷ 2 | 12 | 1 |
> | 12 ÷ 2 | 6 | 0 |
> | 6 ÷ 2 | 3 | 0 |
> | 3 ÷ 2 | 1 | 1 |
> | 1 ÷ 2 | 0 | 1 |
>
> Von unten gelesen: **1100 1000** ✓

#### Binär ↔ Hexadezimal

<table><tr><th>Dez</th><th>Bin</th><th>Hex</th><th>Dez</th><th>Bin</th><th>Hex</th></tr>
<tr><td>0</td><td>0000</td><td>0</td><td>8</td><td>1000</td><td>8</td></tr>
<tr><td>1</td><td>0001</td><td>1</td><td>9</td><td>1001</td><td>9</td></tr>
<tr><td>2</td><td>0010</td><td>2</td><td>10</td><td>1010</td><td>A</td></tr>
<tr><td>3</td><td>0011</td><td>3</td><td>11</td><td>1011</td><td>B</td></tr>
<tr><td>4</td><td>0100</td><td>4</td><td>12</td><td>1100</td><td>C</td></tr>
<tr><td>5</td><td>0101</td><td>5</td><td>13</td><td>1101</td><td>D</td></tr>
<tr><td>6</td><td>0110</td><td>6</td><td>14</td><td>1110</td><td>E</td></tr>
<tr><td>7</td><td>0111</td><td>7</td><td>15</td><td>1111</td><td>F</td></tr></table>

> [!NOTE]
> **Beispiel**
>
> Binär → Hex: 1011 0110 → 1011 = B, 0110 = 6 → **B6**  
> Hex → Binär: 0x3F → 3 = 0011, F = 1111 → **0011 1111** = 63  
> Hex → Dezimal: 0x2A = 2 × 16 + 10 = **42**  
> Dezimal → Hex: 250 ÷ 16 = 15 Rest 10 → 15 = F, 10 = A → **FA**

#### Wie viele Werte passen in n Bit?

Mit n Bit lassen sich **2n** verschiedene Werte darstellen, von 0 bis 2n − 1: 8 Bit → 256, 16 Bit → 65.536, 32 Bit → rund 4,3 Milliarden (deshalb die Knappheit bei IPv4).

> [!NOTE]
> **Beispiel**
>
> Ein Lager hat 300 Lagerplätze, die binär nummeriert werden sollen. Wie viele Bit braucht man?  
> 28 = 256 reicht nicht, 29 = 512 ≥ 300 → **9 Bit**.

Weitere Beispiele aus der Praxis: Eine **MAC-Adresse** hat 48 Bit, geschrieben als 6 Hex-Paare (00:1A:2B:3C:4D:5E). Webfarben werden als **#RRGGBB** geschrieben, je 8 Bit pro Farbe: #FF0000 ist reines Rot (255, 0, 0).

## Bit, Byte und Präfixe

**1 Byte = 8 Bit.** Datenraten werden meist in **Bit** pro Sekunde angegeben (Mbit/s), Dateigrößen in **Byte** (MB, GB). Wer das verwechselt, liegt um den Faktor 8 daneben.

<table><tr><th>dezimal (SI)</th><th>Faktor</th><th>binär (IEC)</th><th>Faktor</th></tr>
<tr><td>Kilobyte kB</td><td>10³ = 1.000</td><td>Kibibyte KiB</td><td>2¹⁰ = 1.024</td></tr>
<tr><td>Megabyte MB</td><td>10⁶</td><td>Mebibyte MiB</td><td>2²⁰ = 1.048.576</td></tr>
<tr><td>Gigabyte GB</td><td>10⁹</td><td>Gibibyte GiB</td><td>2³⁰</td></tr>
<tr><td>Terabyte TB</td><td>10¹²</td><td>Tebibyte TiB</td><td>2⁴⁰</td></tr></table>

> [!NOTE]
> **Beispiel**
>
> **Warum zeigt Windows bei einer 1-TB-Festplatte nur 931 GB an?**  
> Der Hersteller rechnet dezimal: 1 TB = 10¹² Byte. Windows rechnet binär, schreibt aber „GB“: 10¹² ÷ 2³⁰ ≈ **931,3 GiB**. Es fehlt also nichts – nur die Einheit ist eine andere.

> [!TIP]
> In Prüfungsaufgaben steht meist, ob dezimal oder binär gerechnet werden soll. Wenn nicht: Bei Datenraten immer dezimal rechnen; bei Dateigrößen die Annahme kurz dazuschreiben („gerechnet mit 1 GB = 10⁹ Byte“).

## Übertragungszeit und Datenrate

> [!IMPORTANT]
> **Übertragungszeit = Datenmenge ÷ Datenrate**  
> Vorher beide in dieselbe Einheit bringen: Byte × 8 = Bit, gleiche Präfixe (alles in Bit oder alles in Mbit).

> [!NOTE]
> **Beispiel**
>
> **Beispiel 1 (dezimal):** 2,5 GB über eine Leitung mit 100 Mbit/s.  
> Datenmenge in Bit: 2,5 × 10⁹ Byte × 8 = 2 × 10¹⁰ Bit  
> Datenrate: 100 Mbit/s = 10⁸ Bit/s  
> Zeit: 2 × 10¹⁰ ÷ 10⁸ = **200 s** = 3 min 20 s  
>
> **Beispiel 2 (binär):** Ein Image mit 4 GiB wird über 50 Mbit/s verteilt.  
> 4 × 2³⁰ Byte × 8 = 34.359.738.368 Bit  
> 34.359.738.368 ÷ 50.000.000 Bit/s ≈ **687 s** ≈ 11 min 27 s  
>
> **Beispiel 3 (Datenrate gesucht):** Ein Backup von 300 GB soll nachts in 2 Stunden über das Netz laufen. Welche Datenrate ist nötig?  
> 300 × 10⁹ × 8 = 2,4 × 10¹² Bit ÷ 7.200 s ≈ 333 × 10⁶ Bit/s = **333 Mbit/s** → eine Gigabit-Verbindung reicht, 100 Mbit/s nicht.

In der Praxis ist die tatsächliche Übertragung langsamer: Protokolle brauchen eigene Steuerdaten (Overhead), und die Leitung wird geteilt. Rechne in der Prüfung mit den angegebenen Werten und erwähne den Overhead, wenn nach einer realistischen Einschätzung gefragt ist.

## Speicherbedarf von Bildern

Ein unkomprimiertes Rasterbild besteht aus Pixeln; jedes Pixel braucht so viele Bit, wie die **Farbtiefe** angibt.

> [!IMPORTANT]
> **Bildgröße in Byte = Breite × Höhe × Farbtiefe in Bit ÷ 8**

<table><tr><th>Farbtiefe</th><th>Farben</th></tr>
<tr><td>1 Bit</td><td>2 (schwarz/weiß)</td></tr>
<tr><td>8 Bit</td><td>256</td></tr>
<tr><td>24 Bit (True Color, je 8 Bit Rot, Grün, Blau)</td><td>ca. 16,7 Millionen</td></tr>
<tr><td>32 Bit</td><td>24 Bit Farbe + 8 Bit Transparenz (Alpha-Kanal)</td></tr></table>

> [!NOTE]
> **Beispiel**
>
> Full-HD-Bild, 24 Bit: 1920 × 1080 × 24 ÷ 8 = **6.220.800 Byte** ≈ 6,22 MB (≈ 5,93 MiB)  
> 4K-Bild, 24 Bit: 3840 × 2160 × 3 Byte = 24.883.200 Byte ≈ **24,9 MB** – viermal so viel, weil doppelte Breite und doppelte Höhe.

**Für den Druck** wird die Auflösung in dpi (Punkte pro Zoll) angegeben; 1 Zoll = 2,54 cm. Pixel = Länge in Zoll × dpi.

> [!NOTE]
> **Beispiel**
>
> Foto 10 × 15 cm mit 300 dpi: 10 cm ÷ 2,54 ≈ 3,937 Zoll × 300 ≈ **1.181 Pixel**; 15 cm ÷ 2,54 ≈ 5,906 Zoll × 300 ≈ **1.772 Pixel**.

## Speicherbedarf von Video und Audio

**Unkomprimiertes Video** = Bildgröße × Bilder pro Sekunde × Dauer. Full HD mit 24 Bit und 25 Bildern pro Sekunde: 6,22 MB × 25 ≈ 155,5 MB – **pro Sekunde**. Deshalb wird Video immer komprimiert (z. B. H.264, H.265, AV1). Für komprimierte Videos rechnet man mit der **Bitrate**:

> [!IMPORTANT]
> **Dateigröße = Bitrate × Dauer**

> [!NOTE]
> **Beispiel**
>
> Ein Video mit 8 Mbit/s und 1 Stunde Länge: 8 Mbit/s × 3.600 s = 28.800 Mbit ÷ 8 = 3.600 MB = **3,6 GB**.  
>
> **Überwachungskamera:** 4 Mbit/s, Aufzeichnung rund um die Uhr, 30 Tage aufbewahren.  
> 4 Mbit/s × 86.400 s/Tag × 30 Tage = 10.368.000 Mbit ÷ 8 = 1.296.000 MB ≈ **1,3 TB** pro Kamera. Bei 6 Kameras braucht der Rekorder also knapp 8 TB.

**Audio unkomprimiert** (PCM) = Abtastrate × Bittiefe × Kanäle × Dauer. Audio-CD: 44.100 Hz × 16 Bit × 2 Kanäle = 1.411.200 Bit/s = 176.400 Byte/s ≈ **10,6 MB pro Minute**.

## Kompression

<table><tr><th></th><th>verlustfrei</th><th>verlustbehaftet</th></tr>
<tr><td>Prinzip</td><td>Wiederholungen werden geschickt kürzer gespeichert; das Original lässt sich exakt wiederherstellen</td><td>Details, die Menschen kaum wahrnehmen, werden weggelassen</td></tr>
<tr><td>Beispiele</td><td>ZIP, 7z, PNG, FLAC</td><td>JPEG, MP3, AAC, H.264</td></tr>
<tr><td>Einsatz</td><td>Programme, Dokumente, Datenbanken, Grafiken mit Text</td><td>Fotos, Musik, Video</td></tr></table>

**Warum nie ein Programm verlustbehaftet komprimieren?** Fehlt auch nur ein Bit, läuft es nicht mehr. Bei einem Foto fällt ein fehlendes Detail dagegen kaum auf.

> [!NOTE]
> **Beispiel**
>
> Eine Datei von 50 MB wird auf 12 MB komprimiert.  
> Kompressionsrate = 12 ÷ 50 = 0,24 = **24 %** der Originalgröße – es werden **76 %** Speicher gespart.

## Zeichenkodierung

Auch Text wird als Zahlen gespeichert. Die Kodierung legt fest, welche Zahl für welches Zeichen steht.

<table><tr><th>Kodierung</th><th>Umfang</th><th>Hinweis</th></tr>
<tr><td>ASCII</td><td>7 Bit, 128 Zeichen</td><td>englische Buchstaben, Ziffern, Satzzeichen; A = 65 = 0x41, a = 97 = 0x61</td></tr>
<tr><td>ISO 8859-1 (Latin-1)</td><td>8 Bit, 256 Zeichen</td><td>zusätzlich westeuropäische Umlaute</td></tr>
<tr><td><b>UTF-8</b> (Unicode)</td><td>1–4 Byte pro Zeichen</td><td>alle Schriftzeichen der Welt und Emojis, ASCII-kompatibel – heute Standard im Web</td></tr>
<tr><td>UTF-16</td><td>2 oder 4 Byte pro Zeichen</td><td>intern in Windows und Java</td></tr></table>

**Warum erscheinen manchmal Zeichen wie „Ã¤“ statt „ä“?** Der Text wurde in UTF-8 gespeichert, aber als Latin-1 gelesen. Das „ä“ besteht in UTF-8 aus zwei Byte, die Latin-1 als zwei einzelne Zeichen anzeigt.

> [!CAUTION]
> **Typische Fehler**
>
> - Bit und Byte verwechseln – den Faktor 8 vergessen.
> - Dezimale und binäre Präfixe mischen (GB und GiB).
> - Bei der Bildgröße die Farbtiefe nicht durch 8 teilen.
> - Die Reste beim Teilen durch 2 von oben statt von unten lesen.
> - Beim Umrechnen nach Hex nicht in Vierergruppen von rechts einteilen (z. B. 10110 → 0001 0110 = 0x16, nicht 1011 0 …).
> - Ergebnis ohne Einheit oder ohne sinnvolle Umrechnung (Sekunden in Minuten) angeben.

**📝 Prüfungsaufgabe:** **Wandeln Sie 173 in eine Binär- und eine Hexadezimalzahl um. (2 Punkte)**

<details><summary>Lösung anzeigen</summary>

173 = 128 + 32 + 8 + 4 + 1 = **1010 1101₂** (1). 1010 = A, 1101 = D → **AD₁₆** (1).

</details>

**📝 Prüfungsaufgabe:** **Ein Video von 1,8 GB soll über eine Leitung mit 40 Mbit/s hochgeladen werden. Wie lange dauert das in Minuten (dezimal rechnen)? (3 Punkte)**

<details><summary>Lösung anzeigen</summary>

1,8 × 10⁹ Byte × 8 = 1,44 × 10¹⁰ Bit (1). 1,44 × 10¹⁰ ÷ 4 × 10⁷ Bit/s = 360 s (1) = **6 Minuten** (1).

</details>

**📝 Prüfungsaufgabe:** **Berechnen Sie den Speicherbedarf eines unkomprimierten Bildes mit 2560 × 1440 Pixeln und 24 Bit Farbtiefe in MB (1 MB = 10⁶ Byte). (2 Punkte)**

<details><summary>Lösung anzeigen</summary>

2560 × 1440 × 24 ÷ 8 = 11.059.200 Byte (1) ≈ **11,06 MB** (1).

</details>

**📝 Prüfungsaufgabe:** **Eine neue Festplatte hat laut Hersteller 2 TB. Windows zeigt etwa 1,82 TB an. Erklären Sie den Unterschied. (2 Punkte)**

<details><summary>Lösung anzeigen</summary>

Der Hersteller rechnet dezimal (2 × 10¹² Byte), Windows rechnet binär mit 2⁴⁰ Byte pro „TB“ (eigentlich TiB) (1): 2 × 10¹² ÷ 2⁴⁰ ≈ 1,82 TiB – es fehlt kein Speicher, nur die Einheit unterscheidet sich (1).

</details>

---

## 🃏 Karteikarten (20)

| Frage | Antwort |
|---|---|
| 1011 0110₂ in Dezimal | 182. |
| 0xFF in Dezimal | 255. |
| 0x3F in Dezimal | 63. |
| 200 in Binär | 1100 1000. |
| 255 in Binär | 1111 1111. |
| 1010 1100₂ in Hex | AC. |
| Wie viele Werte mit 8 Bit? | 256 (0–255). |
| Wie viele Werte mit 16 Bit? | 65.536. |
| 1 KiB | 1.024 Byte (2¹⁰). |
| 1 kB (SI) | 1.000 Byte. |
| Warum 1 TB ≈ 931 GiB? | Hersteller rechnen dezimal (10¹²), das OS binär (2³⁰ pro GiB). |
| Formel Übertragungszeit | t = Datenmenge in Bit ÷ Datenrate in Bit/s. |
| Byte → Bit | × 8. |
| Formel Bildgröße | Breite × Höhe × Farbtiefe ÷ 8 = Byte. |
| Full-HD-Bild 24 Bit unkomprimiert | ≈ 6,22 MB (1920 × 1080 × 3 Byte). |
| 24 Bit Farbtiefe | ≈ 16,7 Mio. Farben (True Color). |
| Verlustfreie vs. verlustbehaftete Kompression | Verlustfrei: exakt wiederherstellbar (ZIP, PNG). Verlustbehaftet: kleiner, Qualitätsverlust (JPEG, MP3). |
| UTF-8 | Unicode-Kodierung mit 1–4 Byte pro Zeichen, ASCII-kompatibel, Webstandard. |
| ASCII | 7-Bit-Code, 128 Zeichen. |
| Videogröße aus Bitrate | Größe = Bitrate × Dauer (Bit → durch 8 für Byte). |

## ✍️ Übungsfragen (15)

**1.** Wandle 1101 0011₂ in eine Dezimalzahl um.

<details><summary>Lösung</summary>

**211**<br>128+64+16+2+1 = 211.

</details>

**2.** Wandle 0xA7 in eine Dezimalzahl um.

<details><summary>Lösung</summary>

**167**<br>10·16 + 7 = 167.

</details>

**3.** Wie lautet 0x2C binär?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 0010 1100<br>2 = 0010, C = 1100.

</details>

**4.** Wie lautet 156 hexadezimal?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 9C<br>156 = 9·16 + 12 → 9C.

</details>

**5.** Wie viele Sekunden dauert die Übertragung von 500 MB über eine 50-Mbit/s-Leitung (dezimal, ohne Overhead)?

<details><summary>Lösung</summary>

**80 s**<br>500 × 8 = 4000 Mbit ÷ 50 = 80 s.

</details>

**6.** Wie viele Byte belegt ein unkomprimiertes Bild mit 800 × 600 Pixeln bei 24 Bit Farbtiefe?

<details><summary>Lösung</summary>

**1440000 Byte**<br>800 × 600 × 3 = 1.440.000 Byte.

</details>

**7.** Wie viele verschiedene Werte lassen sich mit 12 Bit darstellen?

<details><summary>Lösung</summary>

**4096**<br>2¹² = 4096.

</details>

**8.** Ein Video hat eine Bitrate von 6 Mbit/s und dauert 10 Minuten. Wie groß ist die Datei in MB (dezimal)?

<details><summary>Lösung</summary>

**450 MB**<br>6 × 600 = 3600 Mbit ÷ 8 = 450 MB.

</details>

**9.** Ein 2-TB-Laufwerk (Herstellerangabe) – wie viele GiB zeigt das Betriebssystem ungefähr an? (auf ganze Zahl gerundet)

<details><summary>Lösung</summary>

**1863 GiB**<br>2 × 10¹² ÷ 2³⁰ ≈ 1862,6 GiB.

</details>

**10.** Wie viele Byte hat 1 MiB?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 1.048.576<br>2²⁰.

</details>

**11.** Nennen Sie ein Dateiformat, das verlustfrei komprimiert.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Z. B. PNG (Bild), ZIP (Archiv) oder FLAC (Audio)

</details>

**12.** Ein Backup von 120 GB soll über eine Leitung mit 400 Mbit/s übertragen werden. Wie viele Minuten dauert es (dezimal, ohne Overhead)?

<details><summary>Lösung</summary>

**40 min**<br>120 × 8 = 960 Gbit = 960.000 Mbit ÷ 400 = 2400 s = 40 min.

</details>

**13.** Wie viele Bit hat eine IPv6-Adresse geteilt durch die Bits einer IPv4-Adresse?

<details><summary>Lösung</summary>

**4**<br>128 ÷ 32 = 4.

</details>

**14.** Ein Kunde wundert sich, dass seine neue 4-TB-Festplatte unter Windows nur ca. 3,64 TB anzeigt. Erklären Sie die Abweichung rechnerisch. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Hersteller geben Kapazität dezimal an: 4 TB = 4 × 10¹² Byte (1). Windows rechnet binär mit 1 TiB = 2⁴⁰ Byte, zeigt die Einheit aber als „TB“ an (1). 4 × 10¹² ÷ 2⁴⁰ ≈ 3,64 TiB – es fehlt also kein Speicher, nur die Einheit unterscheidet sich (1).

</details>

**15.** Berechnen Sie, wie lange die Übertragung einer 3-GiB-Datei über eine 100-Mbit/s-Verbindung dauert (100 Mbit/s = 100 × 10⁶ Bit/s). Geben Sie den Rechenweg an. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (3 P):** 3 GiB = 3 × 2³⁰ Byte = 3.221.225.472 Byte (1). × 8 = 25.769.803.776 Bit (1). ÷ 100.000.000 Bit/s ≈ 257,7 s ≈ 4 min 18 s (1).

</details>


[⬅ Inhaltsverzeichnis](README.md)
