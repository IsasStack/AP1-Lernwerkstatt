T.push({
id:"hardware", title:"Hardware & Peripherie", icon:"🖥️", area:"Technik", weight:3,
summary:"CPU, RAM, Speicher, Schnittstellen, Monitore, Docking, Geräteklassen, Energie & Strom.",
lesson:`
<h3>Kernkomponenten</h3>
<ul><li><b>CPU</b>: Kerne (parallele Aufgaben), Threads, Takt (GHz), Cache (L1–L3, schneller Zwischenspeicher), TDP (Wärmeabgabe/Leistung). Integrierte Grafik (iGPU) reicht für Office.</li>
<li><b>RAM</b>: flüchtiger Arbeitsspeicher. Kenngrößen: Kapazität (GB), Typ (DDR4/DDR5), Takt (MT/s), Latenz (CL). <b>Dual Channel</b> = zwei gleiche Module für doppelte Bandbreite. ECC-RAM erkennt/korrigiert Fehler (Server).</li>
<li><b>Mainboard</b>: Sockel, Chipsatz, RAM-Slots, PCIe-Slots, M.2-Slots, Formfaktor (ATX, mATX, ITX), Firmware BIOS/UEFI.</li>
<li><b>Grafikkarte (GPU)</b>: dediziert für CAD, Videoschnitt, KI; VRAM; Anschluss über PCIe x16.</li>
<li><b>Netzteil</b>: Leistung (W), Wirkungsgrad (80 PLUS Bronze … Titanium), Wirkungsgrad η = P<sub>ab</sub> / P<sub>zu</sub>.</li></ul>
<h3>Massenspeicher: SSD vs. HDD</h3>
<table><tr><th></th><th>SSD (Flash)</th><th>HDD (magnetisch)</th></tr>
<tr><td>Technik</td><td>NAND-Flash, keine beweglichen Teile</td><td>rotierende Magnetscheiben, Schreib-/Lesekopf</td></tr>
<tr><td>Zugriffszeit</td><td>&lt; 0,1 ms</td><td>5–10 ms</td></tr>
<tr><td>Datenrate</td><td>SATA ~550 MB/s, NVMe PCIe 4.0 ~7.000 MB/s</td><td>~150–250 MB/s</td></tr>
<tr><td>Robustheit</td><td>stoßfest, leise, sparsam</td><td>stoßempfindlich, laut, mehr Strom</td></tr>
<tr><td>Preis/GB</td><td>höher</td><td>günstig – Archiv, große Datenmengen</td></tr>
<tr><td>Lebensdauer</td><td>begrenzte Schreibzyklen (TBW)</td><td>mechanischer Verschleiß</td></tr></table>
<p><b>Bauformen/Schnittstellen</b>: 2,5″ SATA, M.2 SATA, <b>M.2 NVMe</b> (über PCIe – am schnellsten). NVMe ist ein Protokoll, M.2 ein Formfaktor! <b>Sicheres Löschen</b>: SSD nicht per Überschreiben, sondern Secure Erase/Hersteller-Tool bzw. verschlüsselt + Schlüssel löschen.</p>
<h3>Schnittstellen</h3>
<table><tr><th>Schnittstelle</th><th>Datenrate (max.)</th><th>Hinweis</th></tr>
<tr><td>USB 2.0</td><td>480 Mbit/s</td><td>Maus, Tastatur</td></tr>
<tr><td>USB 3.2 Gen 1 (früher 3.0)</td><td>5 Gbit/s</td><td></td></tr>
<tr><td>USB 3.2 Gen 2</td><td>10 Gbit/s</td><td></td></tr>
<tr><td>USB 3.2 Gen 2x2</td><td>20 Gbit/s</td><td>nur USB-C</td></tr>
<tr><td>USB4 / Thunderbolt 4</td><td>40 Gbit/s</td><td>USB-C, Video + Daten + Strom</td></tr>
<tr><td>USB4 v2 / Thunderbolt 5</td><td>80 Gbit/s (bis 120 asymm.)</td><td>neu</td></tr>
<tr><td>HDMI 2.1</td><td>48 Gbit/s</td><td>4K@120 Hz, 8K@60 Hz, Audio</td></tr>
<tr><td>DisplayPort 1.4 / 2.1</td><td>32,4 / bis 80 Gbit/s</td><td>Daisy-Chain (MST) möglich</td></tr></table>
<div class="merke"><b>USB-C ist nur der Stecker!</b> Was er kann (Daten, Video per <b>DisplayPort Alternate Mode</b>, Laden per <b>USB Power Delivery</b> bis 100 W bzw. 240 W mit PD 3.1), hängt vom Port und Kabel ab.</div>
<p><b>Dockingstation</b>: ein Kabel (USB-C/Thunderbolt) zum Notebook → Monitore, LAN, Tastatur, Maus, Laden. Vorteile: schneller Wechsel zwischen mobil und Schreibtisch, Desk-Sharing/Clean Desk, weniger Kabelsalat, ergonomischer Arbeitsplatz mit großen Monitoren.</p>
<h3>Monitore</h3>
<p>Auflösungen: Full HD 1920×1080, WQHD 2560×1440, 4K UHD 3840×2160. Seitenverhältnis 16:9 (16:10 mehr Höhe für Office). Panel: IPS (Farbtreue, Blickwinkel – Grafik), VA (Kontrast), TN (schnell, günstig), OLED. Bildwiederholrate (Hz), Reaktionszeit (ms), Helligkeit (cd/m²), ergonomisch: höhenverstellbar, Pivot, entspiegelt, Flicker-free. Pixeldichte (ppi) = Diagonale in Pixeln ÷ Diagonale in Zoll.</p>
<h3>Geräteklassen</h3>
<ul><li><b>Desktop-PC/Workstation</b>: leistungsstark, erweiterbar, günstig je Leistung – stationär.</li>
<li><b>Notebook</b>: mobil, Akku; Business-Geräte mit Docking, TPM, Smartcard.</li>
<li><b>Thin Client</b>: minimale lokale Hardware, Anwendungen laufen zentral (Terminalserver/VDI) – sparsam, zentral administriert, sicher, aber netzabhängig.</li>
<li><b>Tablet/Smartphone</b>: mobil, Touch, MDM-Verwaltung nötig.</li>
<li><b>Mini-PC</b>: platzsparend hinter dem Monitor.</li></ul>
<h3>Strom, Leistung, Energie</h3>
<div class="merke">P = U × I (Leistung in Watt = Spannung in Volt × Strom in Ampere)<br>W = P × t (Energie in kWh = Leistung in kW × Zeit in h)<br>Kosten = Energie (kWh) × Preis (€/kWh)</div>
<p>Beispiel: PC mit 120 W, 8 h/Tag, 220 Arbeitstage, 0,35 €/kWh → 0,12 kW × 8 h × 220 = 211,2 kWh → <b>73,92 €/Jahr</b>.</p>
<p><b>USV</b> (unterbrechungsfreie Stromversorgung): überbrückt Stromausfälle (Akku), schützt vor Spannungsspitzen, ermöglicht kontrolliertes Herunterfahren. Typen: Offline (VFD), Line-Interactive (VI), Online/Doppelwandler (VFI – höchster Schutz). Dimensionierung in VA: S = P / cos φ.</p>
<h3>Kennzeichnungen & Normen</h3>
<p><b>CE</b> (Hersteller erklärt EU-Konformität), <b>Energy Star</b>, <b>EU-Energielabel</b> (Monitore A–G), <b>TCO Certified</b> (Ergonomie, Umwelt, Sozialstandards), <b>Blauer Engel</b>, <b>80 PLUS</b> (Netzteil-Effizienz), <b>GS</b> (geprüfte Sicherheit), <b>WEEE-Symbol</b> (durchgestrichene Mülltonne: nicht in den Hausmüll).</p>`,
cards:[
["SSD – drei Vorteile gegenüber HDD","Schneller (Zugriffszeit/Datenrate), stoßfest (keine Mechanik), leise und stromsparend."],
["HDD – Vorteil","Günstiger Preis pro GB – sinnvoll für große Archiv-/Backupmengen."],
["M.2 vs. NVMe","M.2 ist ein Formfaktor/Steckplatz. NVMe ist das Protokoll über PCIe (schneller als SATA)."],
["Dual Channel","Zwei (gleiche) RAM-Module parallel → doppelte Speicherbandbreite."],
["ECC-RAM","Erkennt und korrigiert Speicherfehler; typisch in Servern."],
["USB 3.2 Gen 2 – Datenrate","10 Gbit/s."],
["USB4 / Thunderbolt 4 – Datenrate","40 Gbit/s über USB-C."],
["DisplayPort Alt Mode","Überträgt ein DisplayPort-Videosignal über einen USB-C-Anschluss."],
["USB Power Delivery","Ladestandard über USB-C, bis 100 W (PD 3.1: 240 W)."],
["Vorteile Dockingstation","Ein Kabel für Monitor, LAN, Peripherie und Strom; schneller Arbeitsplatzwechsel, Desk-Sharing, Ordnung."],
["Thin Client","Endgerät mit minimaler Hardware; Anwendungen laufen zentral auf Server/VDI. + sparsam, zentral verwaltet. − netzabhängig."],
["P = ?","P = U × I (Watt = Volt × Ampere)."],
["Energie W = ?","W = P × t (kWh = kW × h)."],
["Wirkungsgrad","η = abgegebene Leistung ÷ zugeführte Leistung (z. B. Netzteil 90 %)."],
["USV – Aufgaben","Stromausfall überbrücken, Spannungsschwankungen filtern, kontrolliertes Herunterfahren."],
["USV-Typ mit höchstem Schutz","Online-USV (Doppelwandler, VFI)."],
["4K UHD Auflösung","3840 × 2160 Pixel."],
["IPS-Panel","Hohe Farbtreue und Blickwinkelstabilität – gut für Grafik/Foto."],
["CE-Kennzeichen","Hersteller erklärt die Konformität mit EU-Richtlinien (kein Prüfsiegel)."],
["TCO Certified","Siegel für Ergonomie, Umweltverträglichkeit und soziale Verantwortung bei IT-Geräten."]
],
qs:[
{t:"num",q:"Ein PC nimmt 150 W auf und läuft 8 h an 250 Tagen. Strompreis 0,30 €/kWh. Stromkosten pro Jahr?",a:90,unit:"€",e:"0,15 kW × 8 h × 250 = 300 kWh × 0,30 € = 90 €."},
{t:"num",q:"Ein Netzteil nimmt 500 W auf und gibt 450 W ab. Wirkungsgrad in Prozent?",a:90,unit:"%",e:"η = 450 / 500 = 0,9 = 90 %."},
{t:"num",q:"Ein Gerät arbeitet an 230 V mit 0,5 A. Welche Leistung nimmt es auf?",a:115,unit:"W",e:"P = U × I = 230 × 0,5 = 115 W."},
{t:"sc",q:"Welcher Massenspeicher eignet sich am besten für das Notebook eines Außendienstmitarbeiters?",o:["3,5″ HDD","M.2-NVMe-SSD","Bandlaufwerk","Externe HDD"],a:1,e:"Stoßfest, schnell, sparsam, kompakt."},
{t:"sc",q:"Welche Aussage zu USB-C ist richtig?",o:["USB-C garantiert immer 40 Gbit/s.","USB-C ist ein Steckerformat; die Funktionen hängen von Port und Kabel ab.","USB-C kann keine Videosignale übertragen.","USB-C ist identisch mit Thunderbolt."],a:1,e:"USB-C ist nur der Stecker; Protokolle wie USB 2.0 bis USB4/TB werden darüber geführt."},
{t:"sc",q:"Ein Monitor soll über das USB-C-Kabel des Notebooks ein Bild erhalten und gleichzeitig das Notebook laden. Welche Funktionen braucht der Anschluss?",o:["DP Alt Mode und Power Delivery","HDMI-CEC und PoE","MST und ECC","SATA und NVMe"],a:0,e:"DisplayPort Alternate Mode für Video, USB PD zum Laden."},
{t:"sc",q:"Welche Datenrate hat USB 3.2 Gen 1?",o:["480 Mbit/s","5 Gbit/s","10 Gbit/s","20 Gbit/s"],a:1,e:"Gen 1 = 5 Gbit/s (ehemals USB 3.0)."},
{t:"sc",q:"Welche Komponente ist flüchtig, d. h. verliert ihren Inhalt ohne Strom?",o:["SSD","RAM","HDD","UEFI-Flash"],a:1,e:"Arbeitsspeicher ist flüchtig."},
{t:"sc",q:"Welche USV-Bauart trennt den Verbraucher dauerhaft vom Netz und bietet den besten Schutz?",o:["Offline (VFD)","Line-Interactive (VI)","Online/Doppelwandler (VFI)","Standby-USV"],a:2,e:"VFI = Voltage and Frequency Independent."},
{t:"mc",q:"Welche Vorteile bietet ein Thin Client gegenüber einem Desktop-PC? (mehrere)",o:["Geringer Stromverbrauch","Zentrale Administration","Volle Funktion ohne Netzwerk","Geringeres Risiko lokaler Datenverluste"],a:[0,1,3],e:"Ohne Netzwerk ist ein Thin Client praktisch nicht nutzbar."},
{t:"sc",q:"Wofür steht die Angabe „80 PLUS Gold“?",o:["Lautstärke des Lüfters","Wirkungsgrad eines Netzteils","Helligkeit eines Monitors","Lebensdauer einer SSD"],a:1,e:"80 PLUS zertifiziert die Effizienz von Netzteilen."},
{t:"num",q:"Ein Mitarbeiter-PC braucht im Betrieb 60 W, im Standby 2 W. Er wird 10 h/Tag genutzt und bleibt 14 h im Standby. Wie viel Wh verbraucht er pro Tag?",a:628,unit:"Wh",e:"60 × 10 = 600 Wh; 2 × 14 = 28 Wh; Summe 628 Wh."},
{t:"open",q:"Ein Grafiker benötigt einen neuen Arbeitsplatz für Bildbearbeitung. Nennen und begründen Sie zwei Anforderungen an den Monitor. (4 Punkte)",p:4,a:"Je Anforderung 1 + Begründung 1, z. B.: IPS-Panel/hohe Farbraumabdeckung (sRGB/Adobe RGB), weil Farben verbindlich dargestellt werden müssen; hohe Auflösung (WQHD/4K), damit Details und Werkzeugleisten Platz haben; Kalibrierbarkeit/Hardwarekalibrierung für farbverbindliches Arbeiten; ergonomisch höhenverstellbar/entspiegelt für langes Arbeiten."},
{t:"open",q:"Ihre Abteilung führt Desk-Sharing ein. Erläutern Sie zwei Vorteile von USB-C-Dockingstationen in diesem Szenario. (4 Punkte)",p:4,a:"Z. B.: Mitarbeitende schließen ihr Notebook mit einem einzigen Kabel an und haben sofort Monitor, Tastatur, Maus, LAN (2); das Notebook wird gleichzeitig per Power Delivery geladen, kein separates Netzteil nötig (2); der Arbeitsplatz bleibt aufgeräumt (Clean Desk) und standardisiert, Wechsel ohne Umbauen (2)."}
]
});
