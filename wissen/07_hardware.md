# 🖥️ Hardware & Peripherie

*Bereich: Technik · Prüfungsrelevanz: ★★★*

> CPU, RAM, Speicher, Schnittstellen, Monitore, Docking, Geräteklassen, Energie & Strom.

[⬅ Inhaltsverzeichnis](README.md)

---

## Kernkomponenten

- **CPU**: Kerne (parallele Aufgaben), Threads, Takt (GHz), Cache (L1–L3, schneller Zwischenspeicher), TDP (Wärmeabgabe/Leistung). Integrierte Grafik (iGPU) reicht für Office.
- **RAM**: flüchtiger Arbeitsspeicher. Kenngrößen: Kapazität (GB), Typ (DDR4/DDR5), Takt (MT/s), Latenz (CL). **Dual Channel** = zwei gleiche Module für doppelte Bandbreite. ECC-RAM erkennt/korrigiert Fehler (Server).
- **Mainboard**: Sockel, Chipsatz, RAM-Slots, PCIe-Slots, M.2-Slots, Formfaktor (ATX, mATX, ITX), Firmware BIOS/UEFI.
- **Grafikkarte (GPU)**: dediziert für CAD, Videoschnitt, KI; VRAM; Anschluss über PCIe x16.
- **Netzteil**: Leistung (W), Wirkungsgrad (80 PLUS Bronze … Titanium), Wirkungsgrad η = Pab / Pzu.

## Massenspeicher: SSD vs. HDD

<table><tr><th></th><th>SSD (Flash)</th><th>HDD (magnetisch)</th></tr>
<tr><td>Technik</td><td>NAND-Flash, keine beweglichen Teile</td><td>rotierende Magnetscheiben, Schreib-/Lesekopf</td></tr>
<tr><td>Zugriffszeit</td><td>&lt; 0,1 ms</td><td>5–10 ms</td></tr>
<tr><td>Datenrate</td><td>SATA ~550 MB/s, NVMe PCIe 4.0 ~7.000 MB/s</td><td>~150–250 MB/s</td></tr>
<tr><td>Robustheit</td><td>stoßfest, leise, sparsam</td><td>stoßempfindlich, laut, mehr Strom</td></tr>
<tr><td>Preis/GB</td><td>höher</td><td>günstig – Archiv, große Datenmengen</td></tr>
<tr><td>Lebensdauer</td><td>begrenzte Schreibzyklen (TBW)</td><td>mechanischer Verschleiß</td></tr></table>

**Bauformen/Schnittstellen**: 2,5″ SATA, M.2 SATA, **M.2 NVMe** (über PCIe – am schnellsten). NVMe ist ein Protokoll, M.2 ein Formfaktor! **Sicheres Löschen**: SSD nicht per Überschreiben, sondern Secure Erase/Hersteller-Tool bzw. verschlüsselt + Schlüssel löschen.

## Schnittstellen

<table><tr><th>Schnittstelle</th><th>Datenrate (max.)</th><th>Hinweis</th></tr>
<tr><td>USB 2.0</td><td>480 Mbit/s</td><td>Maus, Tastatur</td></tr>
<tr><td>USB 3.2 Gen 1 (früher 3.0)</td><td>5 Gbit/s</td><td></td></tr>
<tr><td>USB 3.2 Gen 2</td><td>10 Gbit/s</td><td></td></tr>
<tr><td>USB 3.2 Gen 2x2</td><td>20 Gbit/s</td><td>nur USB-C</td></tr>
<tr><td>USB4 / Thunderbolt 4</td><td>40 Gbit/s</td><td>USB-C, Video + Daten + Strom</td></tr>
<tr><td>USB4 v2 / Thunderbolt 5</td><td>80 Gbit/s (bis 120 asymm.)</td><td>neu</td></tr>
<tr><td>HDMI 2.1</td><td>48 Gbit/s</td><td>4K@120 Hz, 8K@60 Hz, Audio</td></tr>
<tr><td>DisplayPort 1.4 / 2.1</td><td>32,4 / bis 80 Gbit/s</td><td>Daisy-Chain (MST) möglich</td></tr></table>

> [!IMPORTANT]
> **USB-C ist nur der Stecker!** Was er kann (Daten, Video per **DisplayPort Alternate Mode**, Laden per **USB Power Delivery** bis 100 W bzw. 240 W mit PD 3.1), hängt vom Port und Kabel ab.

**Dockingstation**: ein Kabel (USB-C/Thunderbolt) zum Notebook → Monitore, LAN, Tastatur, Maus, Laden. Vorteile: schneller Wechsel zwischen mobil und Schreibtisch, Desk-Sharing/Clean Desk, weniger Kabelsalat, ergonomischer Arbeitsplatz mit großen Monitoren.

## Monitore

Auflösungen: Full HD 1920×1080, WQHD 2560×1440, 4K UHD 3840×2160. Seitenverhältnis 16:9 (16:10 mehr Höhe für Office). Panel: IPS (Farbtreue, Blickwinkel – Grafik), VA (Kontrast), TN (schnell, günstig), OLED. Bildwiederholrate (Hz), Reaktionszeit (ms), Helligkeit (cd/m²), ergonomisch: höhenverstellbar, Pivot, entspiegelt, Flicker-free. Pixeldichte (ppi) = Diagonale in Pixeln ÷ Diagonale in Zoll.

## Geräteklassen

- **Desktop-PC/Workstation**: leistungsstark, erweiterbar, günstig je Leistung – stationär.
- **Notebook**: mobil, Akku; Business-Geräte mit Docking, TPM, Smartcard.
- **Thin Client**: minimale lokale Hardware, Anwendungen laufen zentral (Terminalserver/VDI) – sparsam, zentral administriert, sicher, aber netzabhängig.
- **Tablet/Smartphone**: mobil, Touch, MDM-Verwaltung nötig.
- **Mini-PC**: platzsparend hinter dem Monitor.

## Strom, Leistung, Energie

> [!IMPORTANT]
> P = U × I (Leistung in Watt = Spannung in Volt × Strom in Ampere)  
> W = P × t (Energie in kWh = Leistung in kW × Zeit in h)  
> Kosten = Energie (kWh) × Preis (€/kWh)

Beispiel: PC mit 120 W, 8 h/Tag, 220 Arbeitstage, 0,35 €/kWh → 0,12 kW × 8 h × 220 = 211,2 kWh → **73,92 €/Jahr**.

**USV** (unterbrechungsfreie Stromversorgung): überbrückt Stromausfälle (Akku), schützt vor Spannungsspitzen, ermöglicht kontrolliertes Herunterfahren. Typen: Offline (VFD), Line-Interactive (VI), Online/Doppelwandler (VFI – höchster Schutz). Dimensionierung in VA: S = P / cos φ.

## Kennzeichnungen & Normen

**CE** (Hersteller erklärt EU-Konformität), **Energy Star**, **EU-Energielabel** (Monitore A–G), **TCO Certified** (Ergonomie, Umwelt, Sozialstandards), **Blauer Engel**, **80 PLUS** (Netzteil-Effizienz), **GS** (geprüfte Sicherheit), **WEEE-Symbol** (durchgestrichene Mülltonne: nicht in den Hausmüll).

## Drucker, Scanner & weitere Peripherie

<table><tr><th></th><th>Laserdrucker</th><th>Tintenstrahldrucker</th><th>Thermodrucker</th></tr>
<tr><td>Prinzip</td><td>Toner wird elektrostatisch auf Trommel übertragen und eingebrannt (Fixiereinheit)</td><td>Tintentröpfchen werden aufgesprüht (Piezo/Bubblejet)</td><td>Wärme schwärzt Spezialpapier (Etiketten, Kassenbons)</td></tr>
<tr><td>Stärken</td><td>schnell (ppm), geringe Seitenkosten bei Text, wischfest, hohe Druckvolumen</td><td>günstige Anschaffung, guter Fotodruck, wenig Energie</td><td>leise, schnell, wartungsarm, kein Verbrauchsmaterial außer Papier</td></tr>
<tr><td>Schwächen</td><td>Feinstaub/Ozon (Aufstellort!), Aufwärmzeit, teurer Farblaser</td><td>höhere Seitenkosten, Tinte trocknet ein, langsamer</td><td>Ausdrucke verblassen, nur s/w, Spezialpapier</td></tr>
<tr><td>Einsatz</td><td>Büro, Abteilungsdrucker</td><td>Homeoffice, Fotos, geringe Mengen</td><td>Kasse, Lager-Etiketten, Versand</td></tr></table>

**Kenngrößen**: Druckgeschwindigkeit (ppm = pages per minute), Auflösung (dpi), Duplexdruck, monatliches Druckvolumen (Duty Cycle), Papierfächer, Schnittstellen (LAN, WLAN, USB), Sicherheitsfunktionen (Follow-Me-/PIN-Druck – Ausdrucke erst nach Anmeldung am Gerät freigeben, damit vertrauliche Dokumente nicht im Ausgabefach liegen).

> [!IMPORTANT]
> **Seitenkosten** = Preis Verbrauchsmaterial ÷ Reichweite (Seiten). Toner 90 € für 3.000 Seiten → 0,03 €/Seite. Bei Farbe: Kosten aller beteiligten Patronen addieren, ggf. Trommel/Wartungskit (Preis ÷ Lebensdauer) und Papier dazurechnen.

**Multifunktionsgerät (MFP)**: Drucken, Scannen, Kopieren, Faxen in einem Gerät – platz- und kostensparend, zentral verwaltbar; aber Ausfall betrifft alle Funktionen. Oft als **Managed Print Service** (Leasing mit Klickpreis pro Seite inkl. Toner und Wartung).  
**Scanner**: Flachbett (Bücher, Fotos), Einzugsscanner mit ADF (automatischer Dokumenteneinzug, Duplex – Digitalisierung von Akten), Auflösung (300 dpi für Dokumente, höher für Fotos), **OCR** (Texterkennung → durchsuchbare PDFs), Scan-to-Mail/Ordner.  
**Weitere Peripherie**: Headset (USB/Bluetooth, Noise Cancelling, Teams-zertifiziert), Webcam, Dokumentenkamera, Kartenleser/Smartcard-Reader, Barcodescanner, Unterschriftenpad, KVM-Switch (eine Tastatur/Maus/Monitor für mehrere Rechner), Presenter, Grafiktablett, USV.

## Sensoren, IoT und Industrie 4.0

**Sensoren** erfassen physikalische Größen und wandeln sie in elektrische Signale: Temperatur (Serverraum, CPU), Feuchtigkeit, Bewegung/Präsenz (Licht, Alarm), Helligkeit (automatische Displayhelligkeit), Beschleunigung/Lage (Smartphone dreht Bild, Festplatten-Fallschutz), Näherung, Fingerabdruck/IR-Kamera (biometrische Anmeldung), Rauch, Tür-/Fensterkontakt, GPS. **Aktoren** setzen Signale in Aktionen um (Lüfter, Motor, Ventil, Relais).  
**IoT** (Internet of Things): vernetzte Geräte mit Sensoren/Aktoren (Smart Building, Umgebungsüberwachung im Serverraum). **Industrie 4.0**: Vernetzung von Maschinen, Produkten und IT (cyber-physische Systeme, Smart Factory, vorausschauende Wartung/Predictive Maintenance, digitaler Zwilling). Risiken: unsichere Standardpasswörter, fehlende Updates → IoT-Geräte in eigenes VLAN, Firmware aktuell halten.

## Weitere Geräteklassen

**All-in-One-PC**: Rechner im Monitorgehäuse – platzsparend, wenig Kabel, schick für Empfang/Kundenbereich; aber schlecht aufrüstbar, bei Defekt fällt alles aus. **Mini-PC**, **Thin Client**, **Workstation**, **Convertible/2-in-1** (Notebook mit Touch, umklappbar).

## Wichtige BIOS/UEFI-Einstellungen

Bootreihenfolge (USB/Netzwerk-PXE für Installation), Secure Boot an/aus, TPM aktivieren, Virtualisierung (Intel VT-x / AMD-V) für Hyper-V/WSL/Docker, Administrator-/Setup-Passwort, Wake-on-LAN, SATA-Modus (AHCI), Datum/Uhrzeit, Firmware-Update.

## Elektrische Sicherheit (Schutzmaßnahmen nach DIN VDE 0100-410)

<table><tr><th>Schutzklasse</th><th>Prinzip</th><th>Beispiel</th></tr>
<tr><td>I</td><td>Schutzleiter (PE, grün-gelb) am Metallgehäuse</td><td>Desktop-PC, Server, Drucker</td></tr>
<tr><td>II</td><td>Schutzisolierung (doppelte/verstärkte Isolierung), kein Schutzleiter, Symbol: zwei ineinanderliegende Quadrate</td><td>Notebook-Netzteil, Monitor</td></tr>
<tr><td>III</td><td>Schutzkleinspannung (SELV, max. 50 V AC / 120 V DC)</td><td>USB-Geräte, Telefone, PoE</td></tr></table>

**Fehlerstrom-Schutzschalter (RCD/FI)** schaltet ab, wenn Strom über einen falschen Weg (z. B. den Menschen) fließt. Elektrische Geräte im Betrieb werden regelmäßig nach **DGUV Vorschrift 3** geprüft (Prüfsiegel). Arbeiten an elektrischen Anlagen nur durch Elektrofachkräfte.

## Kenngrößen im Datenblatt lesen

In der Prüfung bekommst du oft Datenblätter oder Angebote und sollst begründen, welches Gerät zur Anforderung passt. Dafür musst du die wichtigsten Angaben einordnen können.

<table><tr><th>Bauteil</th><th>Angabe</th><th>Bedeutung</th></tr>
<tr><td rowspan="5"><b>Prozessor (CPU)</b></td><td>Kerne / Threads (z. B. 8C/16T)</td><td>Kerne = eigenständige Recheneinheiten. Threads = gleichzeitig bearbeitbare Aufgaben (mit SMT/Hyper-Threading zwei pro Kern). Wichtig für Rendering, Virtualisierung, viele Programme parallel.</td></tr>
<tr><td>Taktfrequenz (GHz)</td><td>Arbeitsschritte pro Sekunde je Kern. Wichtig für Programme, die nur einen Kern nutzen. Nur innerhalb einer CPU-Generation direkt vergleichbar.</td></tr>
<tr><td>Cache (L1–L3, MB)</td><td>sehr schneller Zwischenspeicher in der CPU</td></tr>
<tr><td>TDP (Watt)</td><td>Thermal Design Power: Wärme, die die Kühlung abführen muss – Anhaltspunkt für Stromverbrauch und Lautstärke</td></tr>
<tr><td>integrierte Grafik</td><td>Grafikeinheit in der CPU – reicht für Büroarbeit</td></tr>
<tr><td rowspan="3"><b>Arbeitsspeicher (RAM)</b></td><td>Kapazität (GB)</td><td>Büro 16 GB, Entwicklung/VMs/Video 32 GB und mehr</td></tr>
<tr><td>Typ (DDR4 / DDR5)</td><td>nicht untereinander kompatibel – das Mainboard gibt den Typ vor</td></tr>
<tr><td>Bauform</td><td>DIMM im Desktop, SO-DIMM im Notebook; im Notebook oft verlötet (nicht aufrüstbar)</td></tr>
<tr><td rowspan="3"><b>Mainboard</b></td><td>Sockel und Chipsatz</td><td>bestimmen, welche CPUs passen und welche Funktionen es gibt</td></tr>
<tr><td>Formfaktor</td><td>ATX, Micro-ATX, Mini-ITX – muss ins Gehäuse passen</td></tr>
<tr><td>Steckplätze</td><td>RAM-Bänke, M.2, PCIe – entscheiden über die Aufrüstbarkeit</td></tr>
<tr><td rowspan="2"><b>Grafik (GPU)</b></td><td>integriert / dediziert</td><td>dedizierte Karte für CAD, Videoschnitt, KI, 3D</td></tr>
<tr><td>Grafikspeicher (VRAM)</td><td>wichtig bei hohen Auflösungen und großen Projekten</td></tr>
<tr><td><b>Netzteil</b></td><td>Leistung (W), 80 PLUS</td><td>muss den Bedarf aller Komponenten mit Reserve decken; 80 PLUS bescheinigt den Wirkungsgrad</td></tr></table>

> [!IMPORTANT]
> **Merke:** „Besser“ gibt es nicht ohne Einsatzzweck. Viele Kerne helfen beim Rendern, bringen im Büro aber nichts und kosten Strom. Begründe immer mit der Anforderung aus der Ausgangssituation.

Ein **Benchmark** ist ein standardisierter Leistungstest. Er macht Geräte vergleichbar, sagt aber nur etwas für die getestete Art von Aufgabe aus.

## Monitor-Kenngrößen

<table><tr><th>Angabe</th><th>Bedeutung</th><th>worauf achten?</th></tr>
<tr><td>Diagonale (Zoll)</td><td>Bildgröße, 1 Zoll = 2,54 cm</td><td>Büro 24–27″</td></tr>
<tr><td>Auflösung</td><td>Pixel in Breite × Höhe</td><td>Full HD 1920 × 1080, WQHD 2560 × 1440, 4K UHD 3840 × 2160</td></tr>
<tr><td>Pixeldichte (ppi)</td><td>Pixel pro Zoll – je höher, desto schärfer</td><td>ergibt sich aus Auflösung und Diagonale</td></tr>
<tr><td>Bildwiederholrate (Hz)</td><td>Bilder pro Sekunde</td><td>60 Hz reichen fürs Büro</td></tr>
<tr><td>Reaktionszeit (ms)</td><td>Zeit für einen Farbwechsel</td><td>wichtig bei schnellen Bewegungen</td></tr>
<tr><td>Helligkeit (cd/m²) und Kontrast</td><td>Leuchtstärke und Verhältnis von Hell zu Dunkel</td><td>helle Räume brauchen mehr Helligkeit</td></tr>
<tr><td>Paneltyp</td><td>IPS: farbtreu, blickwinkelstabil · VA: hoher Kontrast · TN: schnell und günstig, schwache Farben · OLED: perfektes Schwarz, teuer</td><td>Grafik → IPS</td></tr></table>

---

## 🃏 Karteikarten (57)

| Frage | Antwort |
|---|---|
| SSD – drei Vorteile gegenüber HDD | Schneller (Zugriffszeit/Datenrate), stoßfest (keine Mechanik), leise und stromsparend. |
| HDD – Vorteil | Günstiger Preis pro GB – sinnvoll für große Archiv-/Backupmengen. |
| M.2 vs. NVMe | M.2 ist ein Formfaktor/Steckplatz. NVMe ist das Protokoll über PCIe (schneller als SATA). |
| Dual Channel | Zwei (gleiche) RAM-Module parallel → doppelte Speicherbandbreite. |
| ECC-RAM | Erkennt und korrigiert Speicherfehler; typisch in Servern. |
| USB 3.2 Gen 2 – Datenrate | 10 Gbit/s. |
| USB4 / Thunderbolt 4 – Datenrate | 40 Gbit/s über USB-C. |
| DisplayPort Alt Mode | Überträgt ein DisplayPort-Videosignal über einen USB-C-Anschluss. |
| USB Power Delivery | Ladestandard über USB-C, bis 100 W (PD 3.1: 240 W). |
| Vorteile Dockingstation | Ein Kabel für Monitor, LAN, Peripherie und Strom; schneller Arbeitsplatzwechsel, Desk-Sharing, Ordnung. |
| Thin Client | Endgerät mit minimaler Hardware; Anwendungen laufen zentral auf Server/VDI. + sparsam, zentral verwaltet. − netzabhängig. |
| P = ? | P = U × I (Watt = Volt × Ampere). |
| Energie W = ? | W = P × t (kWh = kW × h). |
| Wirkungsgrad | η = abgegebene Leistung ÷ zugeführte Leistung (z. B. Netzteil 90 %). |
| USV – Aufgaben | Stromausfall überbrücken, Spannungsschwankungen filtern, kontrolliertes Herunterfahren. |
| USV-Typ mit höchstem Schutz | Online-USV (Doppelwandler, VFI). |
| 4K UHD Auflösung | 3840 × 2160 Pixel. |
| IPS-Panel | Hohe Farbtreue und Blickwinkelstabilität – gut für Grafik/Foto. |
| CE-Kennzeichen | Hersteller erklärt die Konformität mit EU-Richtlinien (kein Prüfsiegel). |
| TCO Certified | Siegel für Ergonomie, Umweltverträglichkeit und soziale Verantwortung bei IT-Geräten. |
| Laser- vs. Tintenstrahldrucker | Laser: schnell, günstige Seitenkosten, hohe Volumen, Feinstaub. Tinte: günstig in der Anschaffung, gut für Fotos, höhere Seitenkosten. |
| Thermodrucker – Einsatz | Kassenbons, Etiketten, Versandlabel – leise, schnell, kein Toner. |
| Formel Seitenkosten | Preis des Verbrauchsmaterials ÷ Reichweite in Seiten. |
| ppm / dpi | ppm: Seiten pro Minute (Geschwindigkeit). dpi: Punkte pro Zoll (Auflösung). |
| Follow-Me-Printing | Druckauftrag wird erst nach Anmeldung (PIN/Karte) am Gerät ausgegeben – Vertraulichkeit. |
| Multifunktionsgerät | Drucker, Scanner, Kopierer (Fax) in einem Gerät. |
| ADF | Automatic Document Feeder – automatischer Dokumenteneinzug beim Scanner. |
| OCR | Optical Character Recognition – Texterkennung, macht Scans durchsuchbar. |
| KVM-Switch | Bedient mehrere Rechner mit einer Tastatur, einem Monitor und einer Maus. |
| Managed Print Service | Drucker inkl. Toner, Wartung, Service gegen Klickpreis/Rate. |
| Sensor vs. Aktor | Sensor erfasst Größen (Temperatur, Bewegung) → Signal. Aktor führt aus (Lüfter, Motor). |
| Beispiele für Sensoren am Arbeitsplatz | Helligkeits-, Lage-/Beschleunigungs-, Fingerabdruck-, Temperatur-, Präsenzsensor. |
| IoT | Internet of Things – vernetzte Geräte mit Sensoren/Aktoren. |
| Industrie 4.0 | Vernetzung von Produktion, Maschinen und IT (Smart Factory, Predictive Maintenance). |
| All-in-One-PC – Vor-/Nachteil | + platzsparend, wenig Kabel. − schlecht aufrüstbar, Defekt betrifft alles. |
| UEFI-Einstellung für Hyper-V/Docker | Virtualisierung aktivieren (Intel VT-x / AMD-V). |
| Schutzklasse I / II / III | I: Schutzleiter. II: Schutzisolierung. III: Schutzkleinspannung. |
| RCD / FI-Schalter | Fehlerstrom-Schutzschalter – schaltet bei Fehlerstrom (z. B. durch den Körper) ab. |
| DGUV Vorschrift 3 | Regelmäßige Prüfung elektrischer Betriebsmittel. |
| Kerne vs. Threads | Kern: eigenständige Recheneinheit. Thread: gleichzeitig bearbeitbare Aufgabe; mit SMT/Hyper-Threading zwei Threads pro Kern. |
| Wofür sind viele CPU-Kerne wichtig? | Für parallele Lasten: Rendering, Videoschnitt, Virtualisierung, Kompilieren, viele Programme gleichzeitig. |
| Taktfrequenz | Arbeitsschritte pro Sekunde je Kern in GHz – wichtig für Programme, die nur einen Kern nutzen. |
| TDP | Thermal Design Power in Watt: Wärme, die die Kühlung abführen muss; Anhaltspunkt für Leistungsaufnahme. |
| CPU-Cache | Sehr schneller Zwischenspeicher in der CPU (L1, L2, L3) für häufig benötigte Daten. |
| DDR4 und DDR5 | Arbeitsspeicher-Generationen; nicht kompatibel – das Mainboard legt den Typ fest. |
| DIMM vs. SO-DIMM | DIMM: Speichermodul für Desktop-PCs. SO-DIMM: kleinere Bauform für Notebooks und Mini-PCs. |
| Was legt das Mainboard fest? | Passende CPUs (Sockel/Chipsatz), RAM-Typ, Anzahl der Steckplätze und Anschlüsse, Formfaktor. |
| Formfaktoren Mainboard | ATX, Micro-ATX, Mini-ITX (von groß nach klein). |
| Integrierte vs. dedizierte Grafik | Integriert: in der CPU, sparsam, reicht fürs Büro. Dediziert: eigene Karte mit eigenem Speicher für CAD, Video, 3D, KI. |
| Benchmark | Standardisierter Leistungstest, der Geräte vergleichbar macht – aussagekräftig nur für die getestete Aufgabenart. |
| Nachteil von verlötetem RAM | Nicht aufrüstbar und nicht austauschbar – die Kapazität muss beim Kauf für die ganze Nutzungsdauer reichen. |
| Pixeldichte (ppi) | Pixel pro Zoll – je höher, desto schärfer das Bild. Ergibt sich aus Auflösung und Diagonale. |
| Bildwiederholrate | Anzahl der Bilder pro Sekunde in Hertz (Hz); 60 Hz reichen für Büroarbeit. |
| WQHD-Auflösung | 2560 × 1440 Pixel. |
| Full-HD-Auflösung | 1920 × 1080 Pixel. |
| Paneltypen im Vergleich | IPS: farbtreu, blickwinkelstabil. VA: hoher Kontrast. TN: schnell, günstig, schwache Farben. OLED: perfektes Schwarz, teuer. |
| Einheit der Monitorhelligkeit | Candela pro Quadratmeter (cd/m²). |

## ✍️ Übungsfragen (37)

**1.** Ein PC nimmt 150 W auf und läuft 8 h an 250 Tagen. Strompreis 0,30 €/kWh. Stromkosten pro Jahr?

<details><summary>Lösung</summary>

**90 €**<br>0,15 kW × 8 h × 250 = 300 kWh × 0,30 € = 90 €.

</details>

**2.** Ein Netzteil nimmt 500 W auf und gibt 450 W ab. Wirkungsgrad in Prozent?

<details><summary>Lösung</summary>

**90 %**<br>η = 450 / 500 = 0,9 = 90 %.

</details>

**3.** Ein Gerät arbeitet an 230 V mit 0,5 A. Welche Leistung nimmt es auf?

<details><summary>Lösung</summary>

**115 W**<br>P = U × I = 230 × 0,5 = 115 W.

</details>

**4.** Welcher Massenspeicher eignet sich am besten für das Notebook eines Außendienstmitarbeiters?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** M.2-NVMe-SSD<br>Stoßfest, schnell, sparsam, kompakt.

</details>

**5.** Ein Kollege sagt: „Das Notebook hat USB-C, also kann ich daran auf jeden Fall einen Monitor anschließen und es darüber laden.“ Beurteilen Sie diese Aussage.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Die Aussage stimmt so nicht (1). USB-C beschreibt nur die Steckerform; welche Funktionen der Anschluss bietet, hängt vom Port und vom Kabel ab (1). Für das Bild braucht der Port DisplayPort Alt Mode (bzw. Thunderbolt/USB4), zum Laden USB Power Delivery – das steht im Datenblatt (1).<br>USB-C ist nur der Stecker; Protokolle wie USB 2.0 bis USB4/TB werden darüber geführt.

</details>

**6.** Ein Monitor soll über das USB-C-Kabel des Notebooks ein Bild erhalten und gleichzeitig das Notebook laden. Welche Funktionen braucht der Anschluss?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** DP Alt Mode und Power Delivery<br>DisplayPort Alternate Mode für Video, USB PD zum Laden.

</details>

**7.** Welche Datenrate hat USB 3.2 Gen 1?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 5 Gbit/s<br>Gen 1 = 5 Gbit/s (ehemals USB 3.0).

</details>

**8.** Welche Komponente ist flüchtig, d. h. verliert ihren Inhalt ohne Strom?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** RAM<br>Arbeitsspeicher ist flüchtig.

</details>

**9.** Welche USV-Bauart trennt den Verbraucher dauerhaft vom Netz und bietet den besten Schutz?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Online/Doppelwandler (VFI)<br>VFI = Voltage and Frequency Independent.

</details>

**10.** Welche Vorteile bietet ein Thin Client gegenüber einem Desktop-PC? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Geringer Stromverbrauch; Zentrale Administration; Geringeres Risiko lokaler Datenverluste. Ohne Netzwerk ist ein Thin Client praktisch nicht nutzbar.

</details>

**11.** Wofür steht die Angabe „80 PLUS Gold“?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Wirkungsgrad eines Netzteils<br>80 PLUS zertifiziert die Effizienz von Netzteilen.

</details>

**12.** Ein Mitarbeiter-PC braucht im Betrieb 60 W, im Standby 2 W. Er wird 10 h/Tag genutzt und bleibt 14 h im Standby. Wie viel Wh verbraucht er pro Tag?

<details><summary>Lösung</summary>

**628 Wh**<br>60 × 10 = 600 Wh; 2 × 14 = 28 Wh; Summe 628 Wh.

</details>

**13.** Ein Grafiker benötigt einen neuen Arbeitsplatz für Bildbearbeitung. Nennen und begründen Sie zwei Anforderungen an den Monitor. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je Anforderung 1 + Begründung 1, z. B.: IPS-Panel/hohe Farbraumabdeckung (sRGB/Adobe RGB), weil Farben verbindlich dargestellt werden müssen; hohe Auflösung (WQHD/4K), damit Details und Werkzeugleisten Platz haben; Kalibrierbarkeit/Hardwarekalibrierung für farbverbindliches Arbeiten; ergonomisch höhenverstellbar/entspiegelt für langes Arbeiten.

</details>

**14.** Ihre Abteilung führt Desk-Sharing ein. Erläutern Sie zwei Vorteile von USB-C-Dockingstationen in diesem Szenario. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Z. B.: Mitarbeitende schließen ihr Notebook mit einem einzigen Kabel an und haben sofort Monitor, Tastatur, Maus, LAN (2); das Notebook wird gleichzeitig per Power Delivery geladen, kein separates Netzteil nötig (2); der Arbeitsplatz bleibt aufgeräumt (Clean Desk) und standardisiert, Wechsel ohne Umbauen (2).

</details>

**15.** Eine Tonerkassette kostet 84 € und reicht für 2.800 Seiten. Wie hoch sind die Tonerkosten pro Seite in Cent?

<details><summary>Lösung</summary>

**3 Cent**<br>84 € ÷ 2.800 = 0,03 € = 3 Cent.

</details>

**16.** Ein Farbdrucker braucht je eine Schwarzpatrone (30 €, 600 Seiten) und eine Farbpatrone (45 €, 300 Seiten). Wie hoch sind die Patronenkosten pro Farbseite in Cent?

<details><summary>Lösung</summary>

**20 Cent**<br>30/600 = 0,05 € + 45/300 = 0,15 € = 0,20 € = 20 Cent.

</details>

**17.** Eine Abteilung druckt 4.000 Textseiten pro Monat. Welcher Druckertyp ist am wirtschaftlichsten?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Monochrom-Laserdrucker<br>Hohes Volumen + Text → niedrige Seitenkosten und hohe Geschwindigkeit des Lasers.

</details>

**18.** Wofür steht OCR beim Scannen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Optische Texterkennung

</details>

**19.** In der Personalabteilung liegen vertrauliche Ausdrucke im Ausgabefach des Etagendruckers. Welche Funktion hilft?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Follow-Me-/PIN-Druck

</details>

**20.** Ihre Firma will alte Einzelplatzdrucker durch ein Multifunktionsgerät pro Etage ersetzen. Nennen Sie zwei Vorteile und einen Nachteil. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Vorteile (je 1): weniger Geräte, geringere Anschaffungs-/Wartungs- und Energiekosten; zentrale Verwaltung und Abrechnung; zusätzliche Scan-/Kopierfunktion (Digitalisierung); geringere Seitenkosten; Follow-Me-Druck möglich. Nachteil (1): Ausfall betrifft alle Nutzer und Funktionen; Wege zum Drucker; Wartezeiten; Datenschutz bei offen liegenden Ausdrucken (ohne PIN-Druck).

</details>

**21.** Welcher Sensor sorgt dafür, dass sich die Bildschirmhelligkeit eines Notebooks automatisch anpasst?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Umgebungslichtsensor

</details>

**22.** Ein Serverraum soll bei Überhitzung automatisch Alarm schlagen. Was wird benötigt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Temperatursensor mit Monitoring/Alarmierung

</details>

**23.** Ein Notebook-Netzteil trägt das Symbol „Quadrat im Quadrat“. Welche Schutzklasse?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** II<br>Schutzisolierung.

</details>

**24.** Welche UEFI-Einstellung muss für WSL2/Docker/Hyper-V aktiviert sein?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Hardware-Virtualisierung (VT-x/AMD-V)

</details>

**25.** Wofür eignet sich ein All-in-One-PC besonders?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Empfang oder Kundenbereich mit wenig Platz

</details>

**26.** Ihre Firma will IoT-Sensoren (Temperatur, Tür) im Gebäude einsetzen. Nennen Sie zwei Sicherheitsmaßnahmen. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Je 1: Standardpasswörter ändern; eigenes VLAN/Netzsegment für IoT; Firmware regelmäßig aktualisieren; nicht benötigte Dienste/Fernzugriff deaktivieren; verschlüsselte Kommunikation; nur Geräte mit Herstellersupport.

</details>

**27.** CPU A: 6 Kerne/12 Threads, 4,6 GHz, 65 W TDP. CPU B: 16 Kerne/32 Threads, 4,2 GHz, 125 W TDP. Empfehlen Sie je eine CPU für einen Büro-PC und für eine Workstation zum Videorendering und begründen Sie.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Büro-PC: CPU A (1) – Office-Anwendungen nutzen wenige Kerne, der hohe Takt reicht aus, die niedrige TDP bedeutet weniger Strom, Abwärme und Lärm sowie geringere Kosten (1). Videorendering: CPU B (1) – Rendering verteilt sich auf alle Kerne, 16 Kerne/32 Threads verkürzen die Rechenzeit deutlich; die höhere Leistungsaufnahme ist dafür gerechtfertigt (1).

</details>

**28.** In einem Datenblatt steht: „8C/16T, 3,4 GHz, 65 W TDP“. Erläutern Sie die drei Angaben.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** 8C/16T: 8 Kerne, die 16 Threads gleichzeitig bearbeiten (1). 3,4 GHz: Taktfrequenz, also Arbeitsschritte pro Sekunde je Kern (1). 65 W TDP: Wärmeleistung, auf die die Kühlung ausgelegt sein muss – Anhaltspunkt für die Leistungsaufnahme (1).

</details>

**29.** Welche Bauform hat Arbeitsspeicher für Notebooks?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** SO-DIMM

</details>

**30.** Ein Kollege möchte einen älteren PC mit DDR4-Mainboard durch neue DDR5-Riegel beschleunigen. Beurteilen Sie das Vorhaben.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Das funktioniert nicht (1): DDR4 und DDR5 sind mechanisch und elektrisch nicht kompatibel, der Speichertyp wird vom Mainboard vorgegeben (1). Möglich ist nur mehr DDR4-RAM – oder ein Tausch von Mainboard (und meist CPU) (1).

</details>

**31.** Erläutern Sie den Unterschied zwischen integrierter und dedizierter Grafik und nennen Sie je einen passenden Einsatz.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Integrierte Grafik sitzt in der CPU und nutzt den Arbeitsspeicher mit – sparsam und günstig, passend für Büroarbeit (1). Eine dedizierte Grafikkarte hat einen eigenen Grafikprozessor und eigenen Speicher – nötig für CAD, Videoschnitt, 3D oder KI (1).

</details>

**32.** Die Komponenten eines PCs benötigen zusammen 425 W. Das Netzteil soll höchstens zu 70 % ausgelastet werden. Wie viel Watt muss es mindestens liefern? (auf ganze Watt gerundet)

<details><summary>Lösung</summary>

**607 W**<br>425 ÷ 0,7 ≈ 607 W – in der Praxis wählt man die nächste Größe, z. B. 650 W.

</details>

**33.** Welche CPU-Angabe sagt aus, wie viele Aufgaben gleichzeitig bearbeitet werden können?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Die Anzahl der Threads (bzw. Kerne)

</details>

**34.** Für zehn Außendienst-Notebooks stehen zwei Modelle zur Wahl: Modell A mit 8 GB verlötetem RAM, Modell B mit 16 GB in einem Steckplatz und einem freien Steckplatz. Begründen Sie Ihre Empfehlung.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Empfehlung: Modell B (1). 16 GB reichen für Office, Browser, Videokonferenz und CRM gleichzeitig, 8 GB sind heute knapp (1). Durch den freien Steckplatz lässt sich das Gerät später aufrüsten und länger nutzen – wirtschaftlicher und nachhaltiger als verlöteter Speicher (1).

</details>

**35.** In welcher Einheit wird die Bildwiederholrate eines Monitors angegeben?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Hertz (Hz)

</details>

**36.** Zwei 27-Zoll-Monitore stehen zur Wahl: Modell A mit Full HD und TN-Panel, Modell B mit WQHD und IPS-Panel. Begründen Sie Ihre Empfehlung für einen Arbeitsplatz in der Bildbearbeitung.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Empfehlung: Modell B (1). Das IPS-Panel stellt Farben genauer und blickwinkelstabil dar – entscheidend für farbverbindliches Arbeiten (1). WQHD bietet auf 27 Zoll eine höhere Pixeldichte, also ein schärferes Bild und mehr Arbeitsfläche als Full HD (1).

</details>

**37.** Ein 4K-UHD-Monitor hat 3840 × 2160 Pixel. Wie viele Megapixel sind das? (1 Nachkommastelle)

<details><summary>Lösung</summary>

**8.3**<br>3840 × 2160 = 8.294.400 Pixel ≈ 8,3 Megapixel – viermal so viele wie Full HD.

</details>


[⬅ Inhaltsverzeichnis](README.md)
