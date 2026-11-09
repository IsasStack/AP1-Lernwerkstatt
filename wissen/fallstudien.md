# 🏢 Fallstudien

Typische AP1-Situationen: Hardware, Betriebssystem, Software und Lizenzen für ein Unternehmen auswählen und begründen.

[⬅ Inhaltsverzeichnis](README.md)

## 🧾 Steuerkanzlei Brandt & Partner

*Hardware · OS · Lizenz · Datenschutz*

**Situation:** Kanzlei mit 14 Mitarbeitenden in Hamburg. Alle arbeiten an festen Büroarbeitsplätzen mit DATEV (Windows-Fachsoftware), Office und E-Mail. Mandantendaten sind hochsensibel (Berufsgeheimnis). Es gibt einen lokalen Server mit Active Directory. Die alten PCs laufen noch mit Windows 10.

**1.** Welche Windows-Edition wählen Sie für die neuen Arbeitsplatz-PCs?
- A) Windows 11 Home
- B) Windows 11 Pro
- C) Windows 11 Enterprise LTSC
- D) Linux Mint

<details><summary>Lösung</summary>

**B) Windows 11 Pro**<br>Pro: Domänenbeitritt ins vorhandene AD, BitLocker, GPO – und DATEV verlangt Windows.

</details>


**2.** Warum ist der Weiterbetrieb der Windows-10-PCs problematisch?
- A) Windows 10 läuft nicht mit DATEV
- B) Seit 14.10.2025 gibt es keine regulären Sicherheitsupdates mehr – Verstoß gegen „Stand der Technik“ (Art. 32 DSGVO)
- C) Windows 10 kann kein Office
- D) Kein Problem

<details><summary>Lösung</summary>

**B) Seit 14.10.2025 gibt es keine regulären Sicherheitsupdates mehr – Verstoß gegen „Stand der Technik“ (Art. 32 DSGVO)**<br>Gerade bei Berufsgeheimnisträgern ist ein ungepatchtes OS nicht vertretbar.

</details>


**3.** Welche Hardware passt für die Sachbearbeitung?
- A) Gaming-PC mit RGB
- B) Business-Desktop/Mini-PC: 16 GB RAM, SSD, TPM 2.0, zwei 24″-Monitore
- C) Thin Client ohne Server
- D) Rugged-Tablet

<details><summary>Lösung</summary>

**B) Business-Desktop/Mini-PC: 16 GB RAM, SSD, TPM 2.0, zwei 24″-Monitore**<br>Zwei Monitore sind für Belege + Software sehr produktiv; TPM für BitLocker/Windows 11.

</details>


**4.** Die 14 Mitarbeitenden greifen nur von ihrem einen PC auf den Windows Server zu. Welche CALs?
- A) 14 User- oder 14 Device-CALs (gleich viele) – User-CALs sind flexibler, falls später Notebooks dazukommen
- B) 28 Device-CALs
- C) Keine, da AD kostenlos ist
- D) Nur RDS-CALs

<details><summary>Lösung</summary>

**A) 14 User- oder 14 Device-CALs (gleich viele) – User-CALs sind flexibler, falls später Notebooks dazukommen**<br>Je Person ein Gerät → Anzahl gleich; User-CAL zukunftssicherer.

</details>


**5.** Nennen Sie drei technische Maßnahmen zum Schutz der Mandantendaten auf den Arbeitsplätzen. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: BitLocker-Festplattenverschlüsselung mit TPM; keine lokalen Adminrechte; automatische Bildschirmsperre; MFA/Windows Hello for Business; aktueller Virenschutz/EDR und Updates; USB-Massenspeicher sperren; verschlüsselte Übertragung (TLS/VPN); Berechtigungskonzept auf Freigaben.

</details>


---

## 🚗 Außendienst der Nordtech GmbH

*Hardware · Cloud · Sicherheit*

**Situation:** 20 Vertriebsmitarbeitende sind 4 Tage pro Woche bei Kunden unterwegs (Auto, Bahn, Hotel). Sie präsentieren beim Kunden, erfassen Aufträge im cloudbasierten CRM und arbeiten 1 Tag im Büro an wechselnden Plätzen (Desk-Sharing). Die Firma nutzt Microsoft 365 und Entra ID, aber kein lokales AD.

**1.** Welches Endgerät empfehlen Sie?
- A) Desktop-PC
- B) Leichtes 14″-Business-Notebook mit SSD, langem Akku, LTE/5G-Modul und Windows Hello
- C) 17″-Gaming-Notebook
- D) Thin Client

<details><summary>Lösung</summary>

**B) Leichtes 14″-Business-Notebook mit SSD, langem Akku, LTE/5G-Modul und Windows Hello**<br>Mobil, robust, schnell online, sichere Anmeldung.

</details>


**2.** Wie werden die Geräte am besten verwaltet und ausgerollt?
- A) Manuell mit USB-Stick bei jedem Gerät
- B) Entra ID Join + Intune, Bereitstellung per Windows Autopilot
- C) Gruppenrichtlinien über lokalen Domänencontroller
- D) Gar nicht

<details><summary>Lösung</summary>

**B) Entra ID Join + Intune, Bereitstellung per Windows Autopilot**<br>Kein lokales AD vorhanden → cloudbasierte Verwaltung, Geräte können direkt an Mitarbeitende geliefert werden.

</details>


**3.** Welcher Microsoft-365-Plan deckt Office-Apps UND die Geräteverwaltung ab?
- A) Business Basic
- B) Business Standard
- C) Business Premium
- D) Office LTSC 2024

<details><summary>Lösung</summary>

**C) Business Premium**<br>Premium enthält Intune, Entra ID P1 und Autopilot.

</details>


**4.** Was brauchen die Desk-Sharing-Plätze im Büro?
- A) Je einen eigenen Desktop-PC
- B) USB-C/Thunderbolt-Dockingstation mit Monitor, Tastatur, Maus und LAN
- C) Nur eine Steckdose
- D) Einen Drucker pro Platz

<details><summary>Lösung</summary>

**B) USB-C/Thunderbolt-Dockingstation mit Monitor, Tastatur, Maus und LAN**<br>Ein Kabel – sofort arbeitsfähig, Notebook lädt per Power Delivery.

</details>


**5.** Ein Notebook wird im Zug gestohlen. Beschreiben Sie zwei Maßnahmen, die vorab dafür sorgen, dass keine Daten abfließen, und eine Maßnahme nach dem Diebstahl. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Vorab (je 1): BitLocker-Verschlüsselung mit TPM (+ PIN); starke Anmeldung mit Windows Hello/MFA; keine lokale Datenhaltung (OneDrive/SharePoint); Bildschirmsperre. Danach (1): Gerät per Intune sperren/remote löschen, Benutzerkonto-Sitzungen widerrufen und Passwort zurücksetzen, Vorfall dokumentieren und ggf. Datenschutzpanne prüfen (72 h).

</details>


---

## 🎬 Kreativagentur Pixelwerk

*Hardware · Lizenz · Ergonomie*

**Situation:** Agentur mit 6 Designer:innen (Bildbearbeitung, Layout, 4K-Videoschnitt), 2 Projektmanager:innen (Office, Kundenkontakt) und 1 Werkstudent. Große Projektdateien liegen auf einem NAS. Die Designer nutzen die Adobe Creative Cloud.

**1.** Welcher Monitor ist für die Designer:innen entscheidend?
- A) Günstiger TN-Monitor
- B) Kalibrierbarer IPS-Monitor mit hoher Farbraumabdeckung, 27–32″, 4K
- C) Monitor mit 240 Hz
- D) Touchmonitor

<details><summary>Lösung</summary>

**B) Kalibrierbarer IPS-Monitor mit hoher Farbraumabdeckung, 27–32″, 4K**<br>Farbverbindliches Arbeiten und Detaildarstellung.

</details>


**2.** Welche Komponenten sind für den 4K-Videoschnitt besonders wichtig? (mehrere)
- A) Viel RAM (32–64 GB)
- B) Dedizierte Grafikkarte
- C) Schnelle NVMe-SSD
- D) Diskettenlaufwerk

<details><summary>Lösung</summary>

**A) Viel RAM (32–64 GB), B) Dedizierte Grafikkarte, C) Schnelle NVMe-SSD**

</details>


**3.** Die Adobe Creative Cloud wird pro Person im Abo lizenziert. Welches Modell ist das?
- A) OEM
- B) Named-User-Subscription
- C) Device-CAL
- D) Freeware

<details><summary>Lösung</summary>

**B) Named-User-Subscription**<br>Benannter Benutzer, monatliche/jährliche Abo-Gebühr.

</details>


**4.** Welche Netzwerkanbindung empfehlen Sie für die Arbeitsplätze, die große Videodateien vom NAS bearbeiten?
- A) WLAN 2,4 GHz
- B) Kabelgebunden mit mindestens 2,5- oder 10-Gbit-Ethernet (Cat 6A) zum NAS
- C) Powerline
- D) Bluetooth

<details><summary>Lösung</summary>

**B) Kabelgebunden mit mindestens 2,5- oder 10-Gbit-Ethernet (Cat 6A) zum NAS**<br>Hohe, konstante Datenrate, Vollduplex, störungsfrei.

</details>


**5.** Für die Projektmanager:innen genügen Standard-Büro-PCs. Begründen Sie, warum keine Grafik-Workstations angeschafft werden sollten. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Ihre Aufgaben (Office, Mail, Kundenkontakt) benötigen keine hohe Rechen-/Grafikleistung (1); Workstations wären unwirtschaftlich – höhere Anschaffungs- und Stromkosten ohne Nutzen (1).

</details>


---

## 📦 Logistikzentrum Elbport

*Hardware · Lizenz · Netzwerk*

**Situation:** Ein Lager arbeitet im 3-Schicht-Betrieb. Pro Schicht erfassen 20 Lagerarbeiter Wareneingänge und Kommissionierungen mit mobilen Geräten direkt im ERP-System. Im Lager ist es staubig, im Kühlbereich −20 °C. Zusätzlich gibt es 8 Leitstand-PCs, an denen pro Schicht wechselnde Personen arbeiten.

**1.** Welche mobilen Geräte sind geeignet?
- A) Consumer-Smartphones
- B) Rugged-Handhelds mit integriertem Barcodescanner, IP65+, Kälteeignung und Wechselakku
- C) Notebooks
- D) Thin Clients

<details><summary>Lösung</summary>

**B) Rugged-Handhelds mit integriertem Barcodescanner, IP65+, Kälteeignung und Wechselakku**<br>Robust, scannen direkt, Akku tauschbar für 24/7.

</details>


**2.** Wie viele Windows-Server-CALs braucht man für die 8 Leitstand-PCs am sinnvollsten?
- A) 24 User-CALs
- B) 8 Device-CALs
- C) 1 CAL
- D) 48 User-CALs

<details><summary>Lösung</summary>

**B) 8 Device-CALs**<br>Mehrere Personen pro Gerät → Device-CAL.

</details>


**3.** Welche Netzinfrastruktur braucht die Halle für die Handhelds?
- A) Ein einzelner WLAN-Router
- B) Flächendeckende Ausleuchtung mit mehreren Access Points (zentral per Controller verwaltet), per PoE versorgt
- C) Nur LAN-Dosen
- D) Bluetooth-Mesh

<details><summary>Lösung</summary>

**B) Flächendeckende Ausleuchtung mit mehreren Access Points (zentral per Controller verwaltet), per PoE versorgt**<br>Roaming zwischen APs, PoE spart Stromleitungen an der Decke.

</details>


**4.** Wie werden die WLAN-Zugänge der Handhelds am sichersten authentifiziert?
- A) Offenes WLAN
- B) WPA2/WPA3-Enterprise mit 802.1X und Gerätezertifikaten
- C) WEP
- D) WPS-Knopf

<details><summary>Lösung</summary>

**B) WPA2/WPA3-Enterprise mit 802.1X und Gerätezertifikaten**<br>Einzelne Geräte sperrbar, kein gemeinsames Passwort.

</details>


**5.** Begründen Sie, warum für die Handhelds ein Wechselakku (Hot-Swap) wichtig ist. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Im 3-Schicht-Betrieb laufen die Geräte nahezu rund um die Uhr (1); mit Wechselakku kann ohne Ausfallzeit/Neustart weitergearbeitet werden, statt das Gerät stundenlang zu laden (1).

</details>


---

## 🩺 Arztpraxis Dr. Yilmaz

*Datenschutz · Hardware · Backup*

**Situation:** Hausarztpraxis mit 2 Ärztinnen und 5 MFA. Empfang mit Patientenkontakt, 3 Behandlungsräume, Praxisverwaltungssoftware auf einem lokalen Server. Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO. Die alte Server-Festplatte soll entsorgt werden.

**1.** Welcher Schutzbedarf (BSI) gilt für die Vertraulichkeit der Patientendaten?
- A) normal
- B) hoch bis sehr hoch
- C) keiner
- D) nur Verfügbarkeit zählt

<details><summary>Lösung</summary>

**B) hoch bis sehr hoch**<br>Gesundheitsdaten, Berufsgeheimnis – Offenlegung hätte erhebliche bis existenzielle Folgen.

</details>


**2.** Wie wird der Monitor am Empfang aufgestellt?
- A) Zum Wartebereich gedreht
- B) So, dass Patient:innen ihn nicht einsehen können, ggf. mit Blickschutzfilter
- C) Egal
- D) Mit maximaler Helligkeit

<details><summary>Lösung</summary>

**B) So, dass Patient:innen ihn nicht einsehen können, ggf. mit Blickschutzfilter**<br>Vertraulichkeit – keine Daten für Dritte sichtbar.

</details>


**3.** Wie wird die alte Server-HDD entsorgt?
- A) Formatieren und verkaufen
- B) Physische Vernichtung nach DIN 66399, Schutzklasse 3, mind. Sicherheitsstufe H-5, mit Vernichtungsprotokoll
- C) Restmüll
- D) Werkseinstellungen

<details><summary>Lösung</summary>

**B) Physische Vernichtung nach DIN 66399, Schutzklasse 3, mind. Sicherheitsstufe H-5, mit Vernichtungsprotokoll**<br>Sehr hoher Schutzbedarf → Schutzklasse 3.

</details>


**4.** Welche Backup-Strategie empfehlen Sie?
- A) Einmal im Jahr auf USB-Stick
- B) Tägliche Sicherung nach 3-2-1-Regel, verschlüsselt, mit einer Offline-/Offsite-Kopie und regelmäßigem Restore-Test
- C) Nur RAID-Spiegelung
- D) Kein Backup, Daten liegen ja auf dem Server

<details><summary>Lösung</summary>

**B) Tägliche Sicherung nach 3-2-1-Regel, verschlüsselt, mit einer Offline-/Offsite-Kopie und regelmäßigem Restore-Test**<br>Verfügbarkeit + Ransomware-Schutz; Spiegelung ersetzt kein Backup.

</details>


**5.** Die Praxis möchte einen externen IT-Dienstleister mit Fernwartung beauftragen. Nennen Sie zwei datenschutzrechtliche Anforderungen. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO (inkl. Verschwiegenheit/§ 203 StGB-Verpflichtung); Fernwartung nur nach Freigabe durch die Praxis, verschlüsselt und protokolliert; Zugriff auf das Nötigste beschränken; TOM des Dienstleisters prüfen.

</details>


---

## 🏫 Berufsschule – Computerraum

*Lizenz · OS · Hardware*

**Situation:** Ein Computerraum mit 30 PCs wird von wechselnden Klassen genutzt (ca. 400 Schüler:innen pro Woche). Die Lehrkraft soll die Bildschirme der Schüler steuern können. Nach jeder Stunde sollen die PCs wieder im Ausgangszustand sein.

**1.** Welches Lizenzmodell ist für Software im Computerraum am günstigsten?
- A) User-basiert für 400 Schüler:innen
- B) Gerätebasiert für 30 PCs
- C) OEM pro Schüler
- D) Einzelplatz pro Klasse

<details><summary>Lösung</summary>

**B) Gerätebasiert für 30 PCs**<br>Viele Personen nutzen dieselben Geräte.

</details>


**2.** Welche Windows-Edition ist für Bildungseinrichtungen vorgesehen?
- A) Windows 11 Home
- B) Windows 11 Education
- C) Windows 11 IoT
- D) Windows Server Essentials

<details><summary>Lösung</summary>

**B) Windows 11 Education**<br>Enterprise-Funktionen zu Bildungskonditionen.

</details>


**3.** Wie erreichen Sie den Ausgangszustand nach jeder Stunde?
- A) Manuell jeden PC aufräumen
- B) Wächterkarte/Reset-Software bzw. nicht-persistente VDI-Desktops oder Re-Imaging
- C) Neuinstallation von Hand
- D) Gar nicht

<details><summary>Lösung</summary>

**B) Wächterkarte/Reset-Software bzw. nicht-persistente VDI-Desktops oder Re-Imaging**<br>Änderungen werden beim Neustart verworfen.

</details>


**4.** Nennen Sie zwei Vorteile, wenn die 30 Arbeitsplätze als Thin Clients mit VDI realisiert werden. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: zentrale Verwaltung/Updates an einer Stelle; einheitlicher, schnell zurücksetzbarer Desktop; günstige, langlebige und stromsparende Endgeräte; keine Daten lokal → mehr Sicherheit; einfacher Austausch defekter Geräte.

</details>


---

## 🚀 Start-up „GreenRoute“

*Cloud · Lizenz · Wirtschaft*

**Situation:** Ein Start-up mit 9 Mitarbeitenden (Entwicklung und Vertrieb) wächst schnell – in einem Jahr sollen es 40 sein. Keine eigene IT-Abteilung, keine eigenen Serverräume, geringe Startinvestitionen gewünscht. Viele arbeiten remote.

**1.** Welche Infrastruktur passt am besten?
- A) Eigenes Rechenzentrum
- B) Cloud-first: SaaS für Office/Kommunikation, IaaS/PaaS für die eigene Anwendung
- C) Server unter dem Schreibtisch
- D) Großrechner

<details><summary>Lösung</summary>

**B) Cloud-first: SaaS für Office/Kommunikation, IaaS/PaaS für die eigene Anwendung**<br>Skalierbar, keine Investitionen, kein eigener Betrieb nötig.

</details>


**2.** Wie sollten Lizenzen für Office/Kommunikation beschafft werden?
- A) Kauflizenzen für 40 Personen jetzt
- B) Monatlich anpassbares Abo pro Benutzer
- C) OEM
- D) Floating-Lizenzen

<details><summary>Lösung</summary>

**B) Monatlich anpassbares Abo pro Benutzer**<br>Mitwachsen ohne Vorleistung.

</details>


**3.** Die Entwickler:innen brauchen Docker und lokale VMs. Welche Ausstattung?
- A) Windows 11 Home, 8 GB RAM
- B) Windows 11 Pro oder Linux, 32 GB RAM, schnelle NVMe-SSD
- C) Chromebook
- D) Thin Client

<details><summary>Lösung</summary>

**B) Windows 11 Pro oder Linux, 32 GB RAM, schnelle NVMe-SSD**<br>Hyper-V/WSL2 bzw. native Container brauchen Pro/Linux und viel RAM.

</details>


**4.** Nennen Sie zwei Risiken der Cloud-Strategie und je eine Gegenmaßnahme. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Z. B.: Abhängigkeit vom Anbieter/Vendor-Lock-in (1) → offene Standards, Exportmöglichkeiten, Exit-Plan (1). Datenschutz/Drittlandtransfer (1) → EU-Rechenzentrum, AV-Vertrag, Verschlüsselung (1). Ausfall der Internetverbindung (1) → redundante Anbindung, Offline-Fähigkeit (1). Steigende laufende Kosten (1) → Kostenmonitoring/Budgets (1).

</details>


---

## 🏠 Versicherungsagentur – Homeoffice

*Netzwerk · Sicherheit · Hardware*

**Situation:** 8 Mitarbeitende einer Versicherungsagentur sollen dauerhaft zwei Tage pro Woche im Homeoffice arbeiten. Sie greifen auf ein Fachprogramm und Netzlaufwerke im Büro zu (Windows Server, lokales AD). Kundendaten sind vertraulich.

**1.** Wie erfolgt der Zugriff auf die Ressourcen im Büro sicher?
- A) RDP-Port 3389 im Router freigeben
- B) Client-to-Site-VPN mit MFA
- C) Netzlaufwerke per FTP freigeben
- D) Daten per E-Mail schicken

<details><summary>Lösung</summary>

**B) Client-to-Site-VPN mit MFA**<br>Verschlüsselter Tunnel, RDP niemals direkt ins Internet.

</details>


**2.** Welche Ausstattung braucht ein ergonomischer Homeoffice-Arbeitsplatz? (mehrere)
- A) Notebook mit Docking oder externer Monitor
- B) Headset für Telefonate
- C) Separate Tastatur und Maus
- D) Gaming-Stuhl ist Pflicht

<details><summary>Lösung</summary>

**A) Notebook mit Docking oder externer Monitor, B) Headset für Telefonate, C) Separate Tastatur und Maus**

</details>


**3.** Das private WLAN der Mitarbeitenden ist mit WEP gesichert. Was empfehlen Sie?
- A) Passt schon
- B) Umstellung auf WPA2/WPA3 mit starker Passphrase; Firmennotebook zusätzlich nur per VPN
- C) WLAN abschalten und Bluetooth nutzen
- D) SSID verstecken reicht

<details><summary>Lösung</summary>

**B) Umstellung auf WPA2/WPA3 mit starker Passphrase; Firmennotebook zusätzlich nur per VPN**<br>WEP ist gebrochen.

</details>


**4.** Nennen Sie zwei organisatorische Regelungen für das Homeoffice. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: Homeoffice-/IT-Sicherheitsrichtlinie (z. B. keine Privatnutzung, Bildschirmsperre, keine Familienmitglieder am Gerät); Clean Desk/keine Ausdrucke offen liegen lassen; Vorgaben zur Vernichtung von Papier; Meldeweg bei Sicherheitsvorfällen; Arbeitszeit-/Erreichbarkeitsregelung; Datenschutzschulung.

</details>


---

## 🗄️ Mittelständler Hansa Metall – Servererneuerung

*Lizenz · Virtualisierung · Wirtschaft*

**Situation:** Ein Unternehmen mit 70 Mitarbeitenden (davon 45 Büro mit PC und Smartphone, 25 Produktion im 2-Schicht-Betrieb an 12 gemeinsamen Terminals) ersetzt seine Server. Geplant ist ein Hyper-V-Host mit 2 CPUs à 10 Kernen, auf dem 6 Windows-Server-VMs laufen (DC, Datei, ERP, Druck, Backup, Web).

**1.** Wie viele Windows-Server-Kernlizenzen braucht der Host mindestens für EINE Lizenzierung?

<details><summary>Lösung</summary>

**20 Kerne**<br>2 × 10 = 20 physische Kerne (über Minimum 16).

</details>


**2.** Mit Standard-Edition darf man pro vollständig lizenziertem Host 2 VMs betreiben. Wie oft müssen die 20 Kerne für 6 VMs lizenziert werden?
- A) 1-mal
- B) 2-mal
- C) 3-mal
- D) 6-mal

<details><summary>Lösung</summary>

**C) 3-mal**<br>6 VMs ÷ 2 = 3-mal alle Kerne (Stacking) → 60 Kernlizenzen Standard. Ab etwa 10–12 VMs wird Datacenter günstiger.

</details>


**3.** Wie viele CALs braucht man bei optimaler Wahl (User-CALs fürs Büro, Device-CALs für die Terminals)?

<details><summary>Lösung</summary>

**57 CALs**<br>45 User-CALs + 12 Device-CALs = 57.

</details>


**4.** Warum werden für die Produktion Device-CALs gewählt?
- A) Sie sind immer billiger
- B) 25 Personen teilen sich 12 Terminals – pro Gerät lizenzieren spart Lizenzen
- C) Produktion braucht keine Lizenzen
- D) Wegen des Datenschutzes

<details><summary>Lösung</summary>

**B) 25 Personen teilen sich 12 Terminals – pro Gerät lizenzieren spart Lizenzen**

</details>


**5.** Nennen Sie zwei Vorteile der Virtualisierung der 6 Server auf einem Host und ein Risiko mit Gegenmaßnahme. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Vorteile (je 1): weniger Hardware, Platz und Strom; bessere Auslastung; Snapshots und schnelle Wiederherstellung; schnelle Bereitstellung neuer Server. Risiko + Maßnahme (1): Host ist Single Point of Failure → zweiter Host/Cluster, Replikation, Wartungsvertrag, USV und Backup der VMs.

</details>


---

## 🛎️ Hotel „Alsterblick“ – Rezeption & Gäste-WLAN

*Netzwerk · Hardware · Sicherheit*

**Situation:** Ein Hotel benötigt 2 Arbeitsplätze an der Rezeption (Hotelsoftware, Kartenterminal, wenig Platz), ein Selbstbedienungs-Terminal für den Check-in und ein Gäste-WLAN. Interne Systeme müssen vom Gästenetz strikt getrennt sein.

**1.** Welche Hardware ist an der Rezeption sinnvoll?
- A) Große Tower-PCs
- B) Platzsparende Mini-PCs bzw. All-in-One mit Touch, VESA-Montage
- C) Gaming-Notebooks
- D) Server

<details><summary>Lösung</summary>

**B) Platzsparende Mini-PCs bzw. All-in-One mit Touch, VESA-Montage**<br>Wenig Platz, Kundenkontakt, aufgeräumt.

</details>


**2.** Wie wird das Check-in-Terminal abgesichert?
- A) Normales Benutzerkonto mit Desktop
- B) Kioskmodus (Assigned Access) – nur die Check-in-App, kein Zugriff auf das System
- C) Admin-Konto für Gäste
- D) Ohne Passwort am Domänenkonto

<details><summary>Lösung</summary>

**B) Kioskmodus (Assigned Access) – nur die Check-in-App, kein Zugriff auf das System**

</details>


**3.** Wie trennen Sie Gäste-WLAN und internes Netz?
- A) Unterschiedliche SSIDs reichen
- B) Eigenes VLAN für Gäste mit Firewallregeln, die nur Internetzugang erlauben (Client-Isolation)
- C) Gar nicht
- D) Gleiches Netz, anderes Passwort

<details><summary>Lösung</summary>

**B) Eigenes VLAN für Gäste mit Firewallregeln, die nur Internetzugang erlauben (Client-Isolation)**<br>Logische Trennung + Filterung.

</details>


**4.** Das Selbstbedienungsterminal wird nach dem 28.06.2025 in Betrieb genommen. Welches Gesetz ist zu beachten?
- A) BFSG – Barrierefreiheitsstärkungsgesetz
- B) ElektroG
- C) ArbStättV
- D) TKG

<details><summary>Lösung</summary>

**A) BFSG – Barrierefreiheitsstärkungsgesetz**<br>Selbstbedienungsterminals für Verbraucher fallen unter das BFSG.

</details>


---

## ⚽ Sportverein – kleines Budget

*Lizenz · Open Source · Wirtschaft*

**Situation:** Ein gemeinnütziger Sportverein mit 3 ehrenamtlichen Vorstandsmitgliedern braucht 3 Notebooks für Mitgliederverwaltung, Schriftverkehr und Tabellen. Das Budget ist sehr knapp, IT-Kenntnisse sind gering.

**1.** Welche Office-Lösung ist am kostengünstigsten?
- A) Office LTSC für 3 Geräte
- B) LibreOffice (Open Source) oder vergünstigte Nonprofit-Angebote
- C) Microsoft 365 E5
- D) Individualsoftware

<details><summary>Lösung</summary>

**B) LibreOffice (Open Source) oder vergünstigte Nonprofit-Angebote**<br>Keine/geringe Lizenzkosten.

</details>


**2.** Welche Notebooks sind sinnvoll?
- A) High-End-Workstations
- B) Generalüberholte (refurbished) Business-Notebooks mit SSD und Windows 11 Pro
- C) Neue Gaming-Notebooks
- D) Thin Clients

<details><summary>Lösung</summary>

**B) Generalüberholte (refurbished) Business-Notebooks mit SSD und Windows 11 Pro**<br>Günstig, robust, nachhaltig (Green IT).

</details>


**3.** Die Mitgliederdaten sind personenbezogen. Was ist trotz knappen Budgets Pflicht?
- A) Nichts, Vereine sind ausgenommen
- B) Angemessene TOM nach Art. 32 DSGVO, z. B. Verschlüsselung, Passwörter, Backup
- C) Ein Rechenzentrum
- D) Ein Datenschutzbeauftragter in jedem Fall

<details><summary>Lösung</summary>

**B) Angemessene TOM nach Art. 32 DSGVO, z. B. Verschlüsselung, Passwörter, Backup**<br>DSGVO gilt auch für Vereine; ein DSB ist erst ab 20 ständig Verarbeitenden Pflicht.

</details>


**4.** Nennen Sie je einen Vor- und Nachteil von Open-Source-Software für den Verein. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Vorteil (1): keine Lizenzkosten, offene Formate, keine Abo-Bindung. Nachteil (1): kein Herstellersupport/Hilfe von Community, Kompatibilitätsprobleme mit .docx/.xlsx, Einarbeitung nötig.

</details>


---

## ♿ Inklusiver Arbeitsplatz bei der Stadtwerke AG

*Barrierefreiheit · Hardware · Software*

**Situation:** Ein neuer Mitarbeiter in der Buchhaltung ist stark sehbehindert (Restsehvermögen ca. 10 %), eine Kollegin hat nach einem Unfall nur eine funktionsfähige Hand. Beide arbeiten mit ERP und Office.

**1.** Welche Hilfsmittel unterstützen den sehbehinderten Mitarbeiter? (mehrere)
- A) Großer Monitor bzw. zweiter Monitor
- B) Vergrößerungssoftware/Bildschirmlupe
- C) Hochkontrast-Einstellungen und Screenreader
- D) Gaming-Maus

<details><summary>Lösung</summary>

**A) Großer Monitor bzw. zweiter Monitor, B) Vergrößerungssoftware/Bildschirmlupe, C) Hochkontrast-Einstellungen und Screenreader**

</details>


**2.** Was hilft der Kollegin mit einer funktionsfähigen Hand am meisten?
- A) Einhandtastatur und Spracheingabe (Mikrofon/Headset)
- B) Größerer Monitor
- C) Braillezeile
- D) Zweiter Drucker

<details><summary>Lösung</summary>

**A) Einhandtastatur und Spracheingabe (Mikrofon/Headset)**

</details>


**3.** Welche Anforderung muss die ERP-Software erfüllen?
- A) Möglichst bunte Oberfläche
- B) Vollständige Tastaturbedienung und Kompatibilität mit Screenreadern (WCAG/EN 301 549)
- C) Nur Mausbedienung
- D) Animationen

<details><summary>Lösung</summary>

**B) Vollständige Tastaturbedienung und Kompatibilität mit Screenreadern (WCAG/EN 301 549)**

</details>


**4.** Wer kann den Arbeitgeber bei der Finanzierung der Hilfsmittel unterstützen? Nennen Sie eine Stelle. (1 Punkt)

<details><summary>Lösung</summary>

**Musterlösung:** Integrations-/Inklusionsamt, Agentur für Arbeit oder Rentenversicherung bzw. Berufsgenossenschaft (je nach Zuständigkeit).

</details>


---

## 🏪 Optiker Klarblick – neue Filiale anbinden

*WAN · Netzwerk · Sicherheit*

**Situation:** Eine Optikerkette eröffnet in Lüneburg ihre dritte Filiale (5 Mitarbeitende). Kasse, Warenwirtschaft und Terminbuchung laufen über einen Server in der Hamburger Zentrale, Mails über Microsoft 365. In der Filiale gibt es 4 PCs, ein Kartenterminal, einen Drucker und ein Gäste-WLAN. Am Standort sind Glasfaser (FTTH) und LTE/5G verfügbar.

**1.** Welche Internetanbindung empfehlen Sie?
- A) Privater Kabelanschluss ohne Vertrag
- B) Business-Glasfaseranschluss (FTTH) mit SLA plus 5G-Router als Backup mit Failover
- C) Nur das Smartphone als Hotspot
- D) Satellit

<details><summary>Lösung</summary>

**B) Business-Glasfaseranschluss (FTTH) mit SLA plus 5G-Router als Backup mit Failover**<br>Ohne Verbindung zur Zentrale kann die Filiale nicht kassieren – Ausfallsicherheit und schnelle Entstörung sind entscheidend.

</details>


**2.** Wie wird die Filiale sicher mit dem Server der Zentrale verbunden?
- A) Portfreigabe für den Server im Internet
- B) Site-to-Site-VPN (IPsec/WireGuard) zwischen den Firewalls
- C) FTP
- D) Gar nicht – Daten per USB-Stick

<details><summary>Lösung</summary>

**B) Site-to-Site-VPN (IPsec/WireGuard) zwischen den Firewalls**

</details>


**3.** Welches Netz liegt in der Filiale vor, welches zwischen Filiale und Zentrale?
- A) WAN / LAN
- B) LAN / WAN (über das Internet)
- C) PAN / MAN
- D) MAN / PAN

<details><summary>Lösung</summary>

**B) LAN / WAN (über das Internet)**

</details>


**4.** Wie trennen Sie Gäste-WLAN, Kassensystem und Büro-PCs in der Filiale?
- A) Gar nicht
- B) Eigene VLANs mit Firewallregeln; Gäste nur ins Internet
- C) Unterschiedliche WLAN-Passwörter im selben Netz
- D) Separate Steckdosen

<details><summary>Lösung</summary>

**B) Eigene VLANs mit Firewallregeln; Gäste nur ins Internet**

</details>


**5.** Begründen Sie, warum hier ein symmetrischer Anschluss bzw. ausreichender Upstream wichtig ist. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Die Filiale sendet laufend Daten an die Zentrale (Kassenbuchungen, Warenwirtschaft, Terminbuchungen, ggf. Scans/Uploads) – das ist Upstream (1). Bei zu geringem Upload werden VPN-Verbindung und Anwendungen langsam; außerdem profitieren Videokonferenzen und Cloud-Dienste (M365) von hohem Upload (1).

</details>

