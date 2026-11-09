T.push({
id:"zahlen", title:"Zahlensysteme & Datenmengen", icon:"🧮", area:"Software", weight:3,
summary:"Binär, Hex, Dezimal, Bit/Byte, SI vs. IEC, Speicherbedarf, Übertragungszeit, Bild & Video.",
lesson:`
<h3>Zahlensysteme</h3>
<table><tr><th>System</th><th>Basis</th><th>Ziffern</th><th>Kennzeichnung</th></tr>
<tr><td>Dezimal</td><td>10</td><td>0–9</td><td>–</td></tr>
<tr><td>Binär (Dual)</td><td>2</td><td>0, 1</td><td>0b1010, 1010₂</td></tr>
<tr><td>Oktal</td><td>8</td><td>0–7</td><td>0o12</td></tr>
<tr><td>Hexadezimal</td><td>16</td><td>0–9, A–F</td><td>0x1F, 1F₁₆</td></tr></table>
<p><b>Binär → Dezimal</b>: Stellenwerte 128 64 32 16 8 4 2 1 addieren. 1011 0110 = 128+32+16+4+2 = <b>182</b>.<br>
<b>Dezimal → Binär</b>: größte passende Zweierpotenz abziehen (oder fortgesetzt durch 2 teilen, Reste von unten lesen). 200 = 128+64+8 = 1100 1000.<br>
<b>Binär ↔ Hex</b>: je 4 Bit (Nibble) = 1 Hex-Ziffer. 1011 0110 = B6. 0x3F = 0011 1111 = 63.</p>
<table><tr><th>Dez</th><th>Bin</th><th>Hex</th><th>Dez</th><th>Bin</th><th>Hex</th></tr>
<tr><td>0</td><td>0000</td><td>0</td><td>8</td><td>1000</td><td>8</td></tr>
<tr><td>1</td><td>0001</td><td>1</td><td>9</td><td>1001</td><td>9</td></tr>
<tr><td>2</td><td>0010</td><td>2</td><td>10</td><td>1010</td><td>A</td></tr>
<tr><td>3</td><td>0011</td><td>3</td><td>11</td><td>1011</td><td>B</td></tr>
<tr><td>4</td><td>0100</td><td>4</td><td>12</td><td>1100</td><td>C</td></tr>
<tr><td>5</td><td>0101</td><td>5</td><td>13</td><td>1101</td><td>D</td></tr>
<tr><td>6</td><td>0110</td><td>6</td><td>14</td><td>1110</td><td>E</td></tr>
<tr><td>7</td><td>0111</td><td>7</td><td>15</td><td>1111</td><td>F</td></tr></table>
<p>Mit n Bit lassen sich <b>2ⁿ</b> Werte darstellen (0 bis 2ⁿ − 1): 8 Bit → 256, 16 Bit → 65.536, 32 Bit → 4.294.967.296. MAC-Adresse: 48 Bit = 6 Byte hex (z. B. 00:1A:2B:3C:4D:5E). Farben: #RRGGBB, je 8 Bit (#FF0000 = Rot).</p>
<h3>Bit, Byte & Präfixe</h3>
<p>1 Byte = 8 Bit. Datenraten meist in <b>Bit/s</b> (Mbit/s), Dateigrößen in <b>Byte</b> (MB).</p>
<table><tr><th>Dezimal (SI)</th><th>Faktor</th><th>Binär (IEC)</th><th>Faktor</th></tr>
<tr><td>Kilobyte kB</td><td>10³ = 1.000</td><td>Kibibyte KiB</td><td>2¹⁰ = 1.024</td></tr>
<tr><td>Megabyte MB</td><td>10⁶</td><td>Mebibyte MiB</td><td>2²⁰ = 1.048.576</td></tr>
<tr><td>Gigabyte GB</td><td>10⁹</td><td>Gibibyte GiB</td><td>2³⁰</td></tr>
<tr><td>Terabyte TB</td><td>10¹²</td><td>Tebibyte TiB</td><td>2⁴⁰</td></tr></table>
<div class="merke">Warum zeigt Windows bei einer „1-TB-Festplatte“ nur ca. 931 GB an? Hersteller rechnen dezimal (10¹² Byte), Windows rechnet binär, zeigt aber „GB“ an: 10¹² ÷ 2³⁰ ≈ <b>931,3 GiB</b>.</div>
<h3>Übertragungszeit</h3>
<div class="merke">t = Datenmenge (in Bit) ÷ Datenrate (in Bit/s)</div>
<p>Beispiel: 2,5 GB über 100 Mbit/s (dezimal): 2,5 × 10⁹ × 8 = 2 × 10¹⁰ Bit ÷ 10⁸ Bit/s = <b>200 s</b> = 3 min 20 s.<br>Achtung: immer zuerst <b>Byte → Bit (× 8)</b> und gleiche Präfixe! Bei binären Angaben (GiB) mit 2³⁰ rechnen. In der Praxis Protokoll-Overhead beachten (Nettodatenrate kleiner).</p>
<h3>Speicherbedarf Bilder</h3>
<div class="merke">Bildgröße (Byte) = Breite × Höhe × Farbtiefe (Bit) ÷ 8</div>
<p>Full-HD-Bild, 24 Bit Farbtiefe (True Color, 16,7 Mio. Farben): 1920 × 1080 × 24 ÷ 8 = 6.220.800 Byte ≈ <b>6,22 MB</b> (≈ 5,93 MiB). Farbtiefe: 1 Bit = 2 Farben (s/w), 8 Bit = 256 Farben, 24 Bit ≈ 16,7 Mio. Farben, 32 Bit = 24 Bit + 8 Bit Alpha (Transparenz).<br><b>Druck</b>: Pixel = Länge in Zoll × dpi (1 Zoll = 2,54 cm). 10 × 15 cm bei 300 dpi → 3,937 × 300 ≈ 1181 px × 5,906 × 300 ≈ 1772 px.</p>
<h3>Speicherbedarf Video & Audio</h3>
<p>Unkomprimiertes Video = Bildgröße × Bilder pro Sekunde (fps) × Sekunden. Full HD, 24 Bit, 25 fps: 6,22 MB × 25 = 155,5 MB pro Sekunde → deshalb Kompression (H.264, H.265/HEVC, AV1). Mit Bitrate: Größe = Bitrate × Dauer (z. B. 8 Mbit/s × 3600 s = 28.800 Mbit = 3.600 MB = 3,6 GB).<br><b>Audio</b> unkomprimiert (PCM): Abtastrate × Bittiefe × Kanäle × Dauer. CD: 44.100 Hz × 16 Bit × 2 = 1.411.200 Bit/s ≈ 176,4 kB/s ≈ 10,6 MB/Minute.</p>
<h3>Kompression</h3>
<p><b>Verlustfrei</b> (ZIP, PNG, FLAC – Original exakt wiederherstellbar) vs. <b>verlustbehaftet</b> (JPEG, MP3, H.264 – kleiner, aber Qualitätsverlust). Kompressionsrate = komprimierte Größe ÷ Originalgröße.</p>
<h3>Zeichenkodierung</h3>
<p><b>ASCII</b>: 7 Bit, 128 Zeichen (A = 65 = 0x41). <b>ISO 8859-1</b>: 8 Bit, westeuropäische Umlaute. <b>Unicode/UTF-8</b>: alle Schriftzeichen der Welt, 1–4 Byte pro Zeichen, ASCII-kompatibel – heute Standard (Web, Linux). UTF-16 (Windows intern): 2 oder 4 Byte.</p>`,
cards:[
["1011 0110₂ in Dezimal","182."],
["0xFF in Dezimal","255."],
["0x3F in Dezimal","63."],
["200 in Binär","1100 1000."],
["255 in Binär","1111 1111."],
["1010 1100₂ in Hex","AC."],
["Wie viele Werte mit 8 Bit?","256 (0–255)."],
["Wie viele Werte mit 16 Bit?","65.536."],
["1 KiB","1.024 Byte (2¹⁰)."],
["1 kB (SI)","1.000 Byte."],
["Warum 1 TB ≈ 931 GiB?","Hersteller rechnen dezimal (10¹²), das OS binär (2³⁰ pro GiB)."],
["Formel Übertragungszeit","t = Datenmenge in Bit ÷ Datenrate in Bit/s."],
["Byte → Bit","× 8."],
["Formel Bildgröße","Breite × Höhe × Farbtiefe ÷ 8 = Byte."],
["Full-HD-Bild 24 Bit unkomprimiert","≈ 6,22 MB (1920 × 1080 × 3 Byte)."],
["24 Bit Farbtiefe","≈ 16,7 Mio. Farben (True Color)."],
["Verlustfreie vs. verlustbehaftete Kompression","Verlustfrei: exakt wiederherstellbar (ZIP, PNG). Verlustbehaftet: kleiner, Qualitätsverlust (JPEG, MP3)."],
["UTF-8","Unicode-Kodierung mit 1–4 Byte pro Zeichen, ASCII-kompatibel, Webstandard."],
["ASCII","7-Bit-Code, 128 Zeichen."],
["Videogröße aus Bitrate","Größe = Bitrate × Dauer (Bit → durch 8 für Byte)."]
],
qs:[
{t:"num",q:"Wandle 1101 0011₂ in eine Dezimalzahl um.",a:211,unit:"",e:"128+64+16+2+1 = 211."},
{t:"num",q:"Wandle 0xA7 in eine Dezimalzahl um.",a:167,unit:"",e:"10·16 + 7 = 167."},
{t:"sc",q:"Wie lautet 0x2C binär?",o:["0010 1100","0010 1010","1100 0010","0011 1100"],a:0,e:"2 = 0010, C = 1100."},
{t:"sc",q:"Wie lautet 156 hexadezimal?",o:["9C","8C","9A","C9"],a:0,e:"156 = 9·16 + 12 → 9C."},
{t:"num",q:"Wie viele Sekunden dauert die Übertragung von 500 MB über eine 50-Mbit/s-Leitung (dezimal, ohne Overhead)?",a:80,unit:"s",e:"500 × 8 = 4000 Mbit ÷ 50 = 80 s."},
{t:"num",q:"Wie viele Byte belegt ein unkomprimiertes Bild mit 800 × 600 Pixeln bei 24 Bit Farbtiefe?",a:1440000,unit:"Byte",e:"800 × 600 × 3 = 1.440.000 Byte."},
{t:"num",q:"Wie viele verschiedene Werte lassen sich mit 12 Bit darstellen?",a:4096,unit:"",e:"2¹² = 4096."},
{t:"num",q:"Ein Video hat eine Bitrate von 6 Mbit/s und dauert 10 Minuten. Wie groß ist die Datei in MB (dezimal)?",a:450,unit:"MB",e:"6 × 600 = 3600 Mbit ÷ 8 = 450 MB."},
{t:"num",q:"Ein 2-TB-Laufwerk (Herstellerangabe) – wie viele GiB zeigt das Betriebssystem ungefähr an? (auf ganze Zahl gerundet)",a:1863,tol:1,unit:"GiB",e:"2 × 10¹² ÷ 2³⁰ ≈ 1862,6 GiB."},
{t:"sc",q:"Wie viele Byte hat 1 MiB?",o:["1.000.000","1.048.576","1.024.000","8.388.608"],a:1,e:"2²⁰."},
{t:"sc",q:"Welches Format komprimiert verlustfrei?",o:["JPEG","MP3","PNG","H.264"],a:2,e:""},
{t:"num",q:"Ein Backup von 120 GB soll über eine Leitung mit 400 Mbit/s übertragen werden. Wie viele Minuten dauert es (dezimal, ohne Overhead)?",a:40,unit:"min",e:"120 × 8 = 960 Gbit = 960.000 Mbit ÷ 400 = 2400 s = 40 min."},
{t:"num",q:"Wie viele Bit hat eine IPv6-Adresse geteilt durch die Bits einer IPv4-Adresse?",a:4,unit:"",e:"128 ÷ 32 = 4."},
{t:"open",q:"Ein Kunde wundert sich, dass seine neue 4-TB-Festplatte unter Windows nur ca. 3,64 TB anzeigt. Erklären Sie die Abweichung rechnerisch. (3 Punkte)",p:3,a:"Hersteller geben Kapazität dezimal an: 4 TB = 4 × 10¹² Byte (1). Windows rechnet binär mit 1 TiB = 2⁴⁰ Byte, zeigt die Einheit aber als „TB“ an (1). 4 × 10¹² ÷ 2⁴⁰ ≈ 3,64 TiB – es fehlt also kein Speicher, nur die Einheit unterscheidet sich (1)."},
{t:"open",q:"Berechnen Sie, wie lange die Übertragung einer 3-GiB-Datei über eine 100-Mbit/s-Verbindung dauert (100 Mbit/s = 100 × 10⁶ Bit/s). Geben Sie den Rechenweg an. (3 Punkte)",p:3,a:"3 GiB = 3 × 2³⁰ Byte = 3.221.225.472 Byte (1). × 8 = 25.769.803.776 Bit (1). ÷ 100.000.000 Bit/s ≈ 257,7 s ≈ 4 min 18 s (1)."}
]
});
