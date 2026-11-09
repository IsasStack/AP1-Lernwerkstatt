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

---

## 🃏 Karteikarten (39)

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

## ✍️ Übungsfragen (26)

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
- A) 3,5″ HDD
- B) M.2-NVMe-SSD
- C) Bandlaufwerk
- D) Externe HDD

<details><summary>Lösung</summary>

**B) M.2-NVMe-SSD**<br>Stoßfest, schnell, sparsam, kompakt.

</details>

**5.** Welche Aussage zu USB-C ist richtig?
- A) USB-C garantiert immer 40 Gbit/s.
- B) USB-C ist ein Steckerformat; die Funktionen hängen von Port und Kabel ab.
- C) USB-C kann keine Videosignale übertragen.
- D) USB-C ist identisch mit Thunderbolt.

<details><summary>Lösung</summary>

**B) USB-C ist ein Steckerformat; die Funktionen hängen von Port und Kabel ab.**<br>USB-C ist nur der Stecker; Protokolle wie USB 2.0 bis USB4/TB werden darüber geführt.

</details>

**6.** Ein Monitor soll über das USB-C-Kabel des Notebooks ein Bild erhalten und gleichzeitig das Notebook laden. Welche Funktionen braucht der Anschluss?
- A) DP Alt Mode und Power Delivery
- B) HDMI-CEC und PoE
- C) MST und ECC
- D) SATA und NVMe

<details><summary>Lösung</summary>

**A) DP Alt Mode und Power Delivery**<br>DisplayPort Alternate Mode für Video, USB PD zum Laden.

</details>

**7.** Welche Datenrate hat USB 3.2 Gen 1?
- A) 480 Mbit/s
- B) 5 Gbit/s
- C) 10 Gbit/s
- D) 20 Gbit/s

<details><summary>Lösung</summary>

**B) 5 Gbit/s**<br>Gen 1 = 5 Gbit/s (ehemals USB 3.0).

</details>

**8.** Welche Komponente ist flüchtig, d. h. verliert ihren Inhalt ohne Strom?
- A) SSD
- B) RAM
- C) HDD
- D) UEFI-Flash

<details><summary>Lösung</summary>

**B) RAM**<br>Arbeitsspeicher ist flüchtig.

</details>

**9.** Welche USV-Bauart trennt den Verbraucher dauerhaft vom Netz und bietet den besten Schutz?
- A) Offline (VFD)
- B) Line-Interactive (VI)
- C) Online/Doppelwandler (VFI)
- D) Standby-USV

<details><summary>Lösung</summary>

**C) Online/Doppelwandler (VFI)**<br>VFI = Voltage and Frequency Independent.

</details>

**10.** Welche Vorteile bietet ein Thin Client gegenüber einem Desktop-PC? (mehrere)
- A) Geringer Stromverbrauch
- B) Zentrale Administration
- C) Volle Funktion ohne Netzwerk
- D) Geringeres Risiko lokaler Datenverluste

<details><summary>Lösung</summary>

**A) Geringer Stromverbrauch, B) Zentrale Administration, D) Geringeres Risiko lokaler Datenverluste**<br>Ohne Netzwerk ist ein Thin Client praktisch nicht nutzbar.

</details>

**11.** Wofür steht die Angabe „80 PLUS Gold“?
- A) Lautstärke des Lüfters
- B) Wirkungsgrad eines Netzteils
- C) Helligkeit eines Monitors
- D) Lebensdauer einer SSD

<details><summary>Lösung</summary>

**B) Wirkungsgrad eines Netzteils**<br>80 PLUS zertifiziert die Effizienz von Netzteilen.

</details>

**12.** Ein Mitarbeiter-PC braucht im Betrieb 60 W, im Standby 2 W. Er wird 10 h/Tag genutzt und bleibt 14 h im Standby. Wie viel Wh verbraucht er pro Tag?

<details><summary>Lösung</summary>

**628 Wh**<br>60 × 10 = 600 Wh; 2 × 14 = 28 Wh; Summe 628 Wh.

</details>

**13.** Ein Grafiker benötigt einen neuen Arbeitsplatz für Bildbearbeitung. Nennen und begründen Sie zwei Anforderungen an den Monitor. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je Anforderung 1 + Begründung 1, z. B.: IPS-Panel/hohe Farbraumabdeckung (sRGB/Adobe RGB), weil Farben verbindlich dargestellt werden müssen; hohe Auflösung (WQHD/4K), damit Details und Werkzeugleisten Platz haben; Kalibrierbarkeit/Hardwarekalibrierung für farbverbindliches Arbeiten; ergonomisch höhenverstellbar/entspiegelt für langes Arbeiten.

</details>

**14.** Ihre Abteilung führt Desk-Sharing ein. Erläutern Sie zwei Vorteile von USB-C-Dockingstationen in diesem Szenario. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Z. B.: Mitarbeitende schließen ihr Notebook mit einem einzigen Kabel an und haben sofort Monitor, Tastatur, Maus, LAN (2); das Notebook wird gleichzeitig per Power Delivery geladen, kein separates Netzteil nötig (2); der Arbeitsplatz bleibt aufgeräumt (Clean Desk) und standardisiert, Wechsel ohne Umbauen (2).

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
- A) Tintenstrahldrucker
- B) Monochrom-Laserdrucker
- C) Thermodrucker
- D) Fotodrucker

<details><summary>Lösung</summary>

**B) Monochrom-Laserdrucker**<br>Hohes Volumen + Text → niedrige Seitenkosten und hohe Geschwindigkeit des Lasers.

</details>

**18.** Wofür steht OCR beim Scannen?
- A) Optische Texterkennung
- B) Offline Color Rendering
- C) Open Copy Routine
- D) Output Compression Rate

<details><summary>Lösung</summary>

**A) Optische Texterkennung**

</details>

**19.** In der Personalabteilung liegen vertrauliche Ausdrucke im Ausgabefach des Etagendruckers. Welche Funktion hilft?
- A) Duplexdruck
- B) Follow-Me-/PIN-Druck
- C) Tonersparmodus
- D) AirPrint

<details><summary>Lösung</summary>

**B) Follow-Me-/PIN-Druck**

</details>

**20.** Ihre Firma will alte Einzelplatzdrucker durch ein Multifunktionsgerät pro Etage ersetzen. Nennen Sie zwei Vorteile und einen Nachteil. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Vorteile (je 1): weniger Geräte, geringere Anschaffungs-/Wartungs- und Energiekosten; zentrale Verwaltung und Abrechnung; zusätzliche Scan-/Kopierfunktion (Digitalisierung); geringere Seitenkosten; Follow-Me-Druck möglich. Nachteil (1): Ausfall betrifft alle Nutzer und Funktionen; Wege zum Drucker; Wartezeiten; Datenschutz bei offen liegenden Ausdrucken (ohne PIN-Druck).

</details>

**21.** Welcher Sensor sorgt dafür, dass sich die Bildschirmhelligkeit eines Notebooks automatisch anpasst?
- A) Beschleunigungssensor
- B) Umgebungslichtsensor
- C) Temperatursensor
- D) GPS

<details><summary>Lösung</summary>

**B) Umgebungslichtsensor**

</details>

**22.** Ein Serverraum soll bei Überhitzung automatisch Alarm schlagen. Was wird benötigt?
- A) Helligkeitssensor
- B) Temperatursensor mit Monitoring/Alarmierung
- C) Fingerabdrucksensor
- D) Mikrofon

<details><summary>Lösung</summary>

**B) Temperatursensor mit Monitoring/Alarmierung**

</details>

**23.** Ein Notebook-Netzteil trägt das Symbol „Quadrat im Quadrat“. Welche Schutzklasse?
- A) I
- B) II
- C) III
- D) 0

<details><summary>Lösung</summary>

**B) II**<br>Schutzisolierung.

</details>

**24.** Welche UEFI-Einstellung muss für WSL2/Docker/Hyper-V aktiviert sein?
- A) Wake-on-LAN
- B) Hardware-Virtualisierung (VT-x/AMD-V)
- C) Legacy-Boot
- D) Num-Lock

<details><summary>Lösung</summary>

**B) Hardware-Virtualisierung (VT-x/AMD-V)**

</details>

**25.** Wofür eignet sich ein All-in-One-PC besonders?
- A) CAD-Workstation mit Aufrüstbedarf
- B) Empfang oder Kundenbereich mit wenig Platz
- C) Serverraum
- D) Lager

<details><summary>Lösung</summary>

**B) Empfang oder Kundenbereich mit wenig Platz**

</details>

**26.** Ihre Firma will IoT-Sensoren (Temperatur, Tür) im Gebäude einsetzen. Nennen Sie zwei Sicherheitsmaßnahmen. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: Standardpasswörter ändern; eigenes VLAN/Netzsegment für IoT; Firmware regelmäßig aktualisieren; nicht benötigte Dienste/Fernzugriff deaktivieren; verschlüsselte Kommunikation; nur Geräte mit Herstellersupport.

</details>


[⬅ Inhaltsverzeichnis](README.md)
