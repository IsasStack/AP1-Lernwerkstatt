# 🛒 Produktauswahl & Lizenzierung

*Bereich: Planung · Prüfungsrelevanz: ★★★*

> Welche Hardware, welches Betriebssystem, welche Software und Lizenz passt zu welcher Firma – mit Begründung.

[⬅ Inhaltsverzeichnis](README.md)

---

## So gehst du jede Auswahlaufgabe an

1. **Situation lesen und markieren:** Wie viele Nutzer? Was machen sie (Office, Grafik, CAD, Entwicklung, Kasse, Lager)? Mobil oder stationär? Domäne/Cloud vorhanden? Budget? Datenschutz? Besondere Bedürfnisse (Barrierefreiheit, Schichtbetrieb, Kundenkontakt)?
2. **Anforderungen ableiten:** funktional (was muss es können) und nicht-funktional (Leistung, Sicherheit, Ergonomie, Kosten, Wartbarkeit, Nachhaltigkeit).
3. **Entscheiden und begründen:** Produkt/Variante + „weil“ + Bezug zur Situation. Immer den *Grund aus dem Text* nennen.

> [!TIP]
> Die IHK will kein Markenwissen, sondern passende Klassen und Eigenschaften: „Business-Notebook mit SSD, 16 GB RAM, TPM 2.0 und USB-C-Docking“ – nicht „Lenovo T14 Gen 5“.

## Hardware nach Arbeitsplatztyp

<table><tr><th>Arbeitsplatz</th><th>Empfehlung</th><th>Begründung</th></tr>
<tr><td>Büro/Verwaltung (Office, ERP, Mail)</td><td>Desktop oder Mini-PC bzw. Business-Notebook mit Docking; i5/Ryzen 5, 16 GB RAM, 512 GB SSD, 2 × 24″ Full HD/WQHD</td><td>ausreichend Leistung, günstig, zwei Monitore steigern Produktivität, ergonomisch</td></tr>
<tr><td>Außendienst/Vertrieb</td><td>leichtes Business-Notebook (13–14″), SSD, lange Akkulaufzeit, ggf. LTE/5G-Modem, TPM, Fingerabdruck/IR-Kamera, Docking im Büro</td><td>mobil, stoßfest, offline arbeitsfähig, Diebstahlschutz durch BitLocker, Windows Hello</td></tr>
<tr><td>Grafik/Foto/Video</td><td>Workstation mit starker CPU, 32–64 GB RAM, dedizierte GPU, schnelle NVMe-SSD, farbkalibrierbarer IPS-Monitor (hoher Farbraum, 4K)</td><td>rechenintensive Programme, große Dateien, farbverbindliches Arbeiten</td></tr>
<tr><td>CAD/Konstruktion</td><td>Workstation mit zertifizierter Profi-GPU, viel RAM (ggf. ECC), großer Monitor</td><td>Herstellerzertifizierung der CAD-Software, Stabilität</td></tr>
<tr><td>Softwareentwicklung</td><td>Notebook/Desktop mit 32 GB RAM, schneller SSD, Windows Pro (Hyper-V/WSL) oder Linux, 2 Monitore</td><td>VMs/Container, Compiler, IDE brauchen RAM und schnelle Datenträger</td></tr>
<tr><td>Callcenter/Sachbearbeitung mit Standardaufgaben</td><td>Thin Client + Terminalserver/VDI, Headset</td><td>zentral verwaltet, günstig, sparsam, sicher (keine lokalen Daten), schnell austauschbar</td></tr>
<tr><td>Lager/Produktion</td><td>robustes (rugged) Tablet/Handheld mit Barcodescanner, IP-Schutzklasse, Hot-Swap-Akku; Industrie-PC</td><td>Staub, Stöße, Kälte; mobile Datenerfassung im ERP</td></tr>
<tr><td>Empfang/Kasse/Kiosk</td><td>Mini-PC oder All-in-One, Touch, ggf. Kioskmodus (Assigned Access)</td><td>platzsparend, nur eine Anwendung, Kundenkontakt</td></tr>
<tr><td>Homeoffice</td><td>Notebook + Docking + externer Monitor + Headset, VPN, MFA</td><td>flexibel, sichere Anbindung, ergonomischer Heimarbeitsplatz</td></tr>
<tr><td>Barrierefreier Arbeitsplatz</td><td>je nach Einschränkung: großer Monitor, Screenreader, Braillezeile, Spracheingabe, Spezialtastatur</td><td>Teilhabe, gesetzliche Pflicht zur Anpassung</td></tr>
<tr><td>Kleiner Server (KMU)</td><td>Server mit ECC-RAM, redundanten Netzteilen, Hot-Swap, Wartungsvertrag, USV, Backup auf NAS + Offsite/Cloud</td><td>Verfügbarkeit, Datensicherheit</td></tr></table>

## Betriebssystem auswählen

<table><tr><th>Edition</th><th>Wann?</th><th>Wichtig</th></tr>
<tr><td>Windows 11 Home</td><td>Privatgeräte</td><td><b>kein</b> Domänenbeitritt, kein Entra Join, keine Gruppenrichtlinien, kein BitLocker (nur vereinfachte Geräteverschlüsselung), kein RDP-Host → <b>nicht für Firmen</b></td></tr>
<tr><td>Windows 11 Pro</td><td>Standard für KMU-Arbeitsplätze</td><td>Domäne &amp; Entra ID Join, GPO, BitLocker, Hyper-V, Remotedesktop-Host, Intune-Verwaltung</td></tr>
<tr><td>Windows 11 Enterprise</td><td>größere Unternehmen (Volumenlizenz, z. B. in Microsoft 365 E3/E5)</td><td>zusätzlich Credential Guard, AppLocker/App Control, erweiterte Verwaltung &amp; Sicherheit</td></tr>
<tr><td>Windows 11 Education</td><td>Schulen/Hochschulen</td><td>Enterprise-Funktionen zu Bildungspreisen</td></tr>
<tr><td>Windows 11 Enterprise LTSC / IoT</td><td>Kassen, Produktionsanlagen, medizinische Geräte</td><td>lange Supportzeit ohne Funktionsupdates, stabil</td></tr>
<tr><td>macOS</td><td>Grafik/Medien, Apple-Ökosystem</td><td>nur auf Apple-Hardware, Verwaltung per MDM</td></tr>
<tr><td>Linux (Ubuntu LTS, Debian, Fedora, RHEL)</td><td>Server, Entwickler, kostensensible oder datenschutzbewusste Umgebungen</td><td>lizenzkostenfrei (RHEL/Ubuntu Pro: Support-Abo), sicher, anpassbar; Kompatibilität mit Fachsoftware prüfen</td></tr>
<tr><td>ChromeOS / Android / iOS</td><td>einfache Web-Arbeitsplätze, Tablets, Smartphones</td><td>MDM-Verwaltung nötig</td></tr></table>

> [!WARNING]
> **Windows 10**: Support endete am **14.10.2025**. Ohne Sicherheitsupdates ist der Betrieb ein Sicherheitsrisiko (und datenschutzrechtlich kritisch, Art. 32 DSGVO „Stand der Technik“). Lösung: Upgrade auf Windows 11 (TPM 2.0/Secure Boot prüfen), Hardware tauschen oder befristet kostenpflichtige Extended Security Updates (ESU).

**Server-Betriebssysteme**: Windows Server **Essentials** (Kleinunternehmen, max. 25 Benutzer/50 Geräte, keine CALs nötig), **Standard** (2 VMs pro voll lizenziertem Host), **Datacenter** (unbegrenzt VMs – lohnt bei vielen VMs). Linux-Server (Ubuntu Server, Debian, RHEL) für Web, Datenbanken, Container.

## Microsoft-Lizenzierung – das Wichtigste

**Windows Server Standard/Datacenter: Core + CAL**

- Lizenziert werden **alle physischen Kerne**: mindestens **8 Kerne pro Prozessor** und **16 Kerne pro Server**; verkauft in 2er- und 16er-Paketen.
- Zusätzlich braucht jeder Zugreifende eine **CAL** (Client Access License): **User-CAL** (pro Person, egal wie viele Geräte – ideal für Mitarbeitende mit PC + Notebook + Smartphone) oder **Device-CAL** (pro Gerät, egal wie viele Personen – ideal für Schichtbetrieb/geteilte PCs). Mischen ist erlaubt.
- Für Remotedesktop-Dienste (Terminalserver) zusätzlich **RDS-CALs**.

> [!IMPORTANT]
> Server mit 2 CPUs à 6 Kernen = 12 Kerne → trotzdem **16 Kern-Lizenzen** (Minimum). 2 CPUs à 12 Kernen = 24 Kerne → **24 Kern-Lizenzen**.  
> 40 Mitarbeitende im Einschichtbetrieb mit je PC und Notebook → **40 User-CALs** (statt 80 Device-CALs). 3 Schichten × 10 Personen an 10 PCs → **10 Device-CALs** (statt 30 User-CALs).

**Microsoft 365 / Office**

<table><tr><th>Plan</th><th>Inhalt (vereinfacht)</th><th>Für</th></tr>
<tr><td>Business Basic</td><td>Office im <b>Browser</b>/mobil, Exchange-Mail, Teams, OneDrive, SharePoint</td><td>Kleine Firmen, Mitarbeitende ohne Desktop-Office</td></tr>
<tr><td>Business Standard</td><td>+ <b>Desktop-Office</b>-Apps (Word, Excel, Outlook …)</td><td>Typischer Büroarbeitsplatz</td></tr>
<tr><td>Business Premium</td><td>+ <b>Intune</b> (Geräteverwaltung), <b>Entra ID P1</b> (bedingter Zugriff/MFA-Richtlinien), Defender for Business, Autopilot</td><td>KMU mit Sicherheits-/Verwaltungsanspruch</td></tr>
<tr><td>Microsoft 365 E3 / E5</td><td>Enterprise-Funktionen inkl. Windows Enterprise; E5 + erweiterte Sicherheit/Compliance</td><td>Unternehmen über 300 Nutzer</td></tr>
<tr><td>Office LTSC 2024 (Kauf)</td><td>einmalige Lizenz, Desktop-Office ohne Cloud-Dienste und ohne neue Funktionen</td><td>Offline-/Spezialumgebungen</td></tr></table>

Die **Business-Pläne sind auf 300 Nutzer begrenzt**, darüber Enterprise-Pläne (E3/E5). Abrechnung pro Benutzer und Monat (Abo); ein Benutzer darf die Desktop-Apps auf bis zu 5 PCs/Macs, 5 Tablets und 5 Smartphones installieren.

## Lizenzmodell wählen – Entscheidungshilfe

<table><tr><th>Situation</th><th>Passendes Modell</th></tr>
<tr><td>Viele Geräte pro Person</td><td>User-basiert (User-CAL, M365 pro Benutzer)</td></tr>
<tr><td>Viele Personen pro Gerät (Schicht, Schulungsraum)</td><td>Device-basiert</td></tr>
<tr><td>Nur wenige gleichzeitig nutzen teure Spezialsoftware</td><td>Concurrent/Floating-Lizenz mit Lizenzserver</td></tr>
<tr><td>Stark schwankender Bedarf, Projekte</td><td>Abo/Pay-per-Use (monatlich kündbar)</td></tr>
<tr><td>Lange Nutzung, keine Cloud gewünscht</td><td>Kauflizenz (perpetual), ggf. mit Wartungsvertrag</td></tr>
<tr><td>Neuer PC mit vorinstalliertem OS</td><td>OEM (an Gerät gebunden)</td></tr>
<tr><td>Viele gleiche Lizenzen</td><td>Volumenlizenz/Rahmenvertrag (CSP, Enterprise Agreement)</td></tr>
<tr><td>Budget knapp, Standardaufgaben</td><td>Open Source (LibreOffice, Linux, Thunderbird, Nextcloud) – Schulungs- und Kompatibilitätsaufwand einplanen</td></tr></table>

## Kauf vs. Abo (Software)

**Kauf (perpetual)**: einmalige Kosten, unbefristete Nutzung der Version, langfristig ggf. günstiger – aber keine neuen Funktionen, Upgrade kostet erneut, Support endet. **Abo/Subscription**: laufende planbare Kosten (OPEX), immer aktuell, Cloud-Dienste inklusive, flexibel skalierbar – aber bei Kündigung keine Nutzung mehr, langfristig oft teurer, Abhängigkeit vom Anbieter.

## Cloud oder On-Premises?

<table><tr><th>Kriterium</th><th>Spricht für Cloud (SaaS/IaaS)</th><th>Spricht für On-Premises</th></tr>
<tr><td>Kosten</td><td>keine Anfangsinvestition, nutzungsabhängig</td><td>langfristig planbar, keine Abo-Kosten</td></tr>
<tr><td>Personal/Know-how</td><td>wenig eigene IT</td><td>eigene IT-Abteilung vorhanden</td></tr>
<tr><td>Skalierung</td><td>schnell wachsend/schwankend</td><td>stabile Nutzerzahl</td></tr>
<tr><td>Datenschutz</td><td>EU-Rechenzentrum, AV-Vertrag</td><td>sehr sensible Daten, Berufsgeheimnis, volle Kontrolle</td></tr>
<tr><td>Internet</td><td>gute, redundante Anbindung</td><td>schlechte/unsichere Internetverbindung</td></tr></table>

## Lizenzmanagement (Software Asset Management)

Inventar aller Lizenzen und Installationen, regelmäßiger Abgleich. **Unterlizenzierung** = Urheberrechtsverletzung (Schadensersatz, Nachlizenzierung, Imageschaden; Hersteller dürfen Audits durchführen). **Überlizenzierung** = unnötige Kosten. Lizenznachweise aufbewahren, ausgeschiedene Nutzer zeitnah entlizenzieren.

## Begründungsbausteine (zum Auswendiglernen)

- SSD: „… da sie stoßunempfindlich und schneller ist und weniger Energie verbraucht.“
- Windows Pro: „… da nur ab der Pro-Edition der Beitritt zur Domäne/zu Entra ID sowie BitLocker möglich sind.“
- Thin Client: „… da Anwendungen zentral laufen, die Geräte günstig, sparsam und zentral administrierbar sind und keine Daten lokal gespeichert werden.“
- User-CAL: „… da jede Person mehrere Geräte nutzt und so weniger Lizenzen benötigt werden.“
- Device-CAL: „… da im Schichtbetrieb mehrere Personen dasselbe Gerät nutzen.“
- M365 Business Premium: „… da neben den Office-Apps Intune zur Geräteverwaltung und Entra ID P1 für bedingten Zugriff/MFA enthalten sind.“
- Docking: „… da das Notebook mit einem Kabel an Monitor, Netzwerk und Peripherie angeschlossen und gleichzeitig geladen wird.“

---

## 🃏 Karteikarten (24)

| Frage | Antwort |
|---|---|
| Warum Windows 11 Home nicht für Firmen? | Kein Domänen-/Entra-ID-Beitritt, keine Gruppenrichtlinien, kein BitLocker, kein Remotedesktop-Host. |
| Windows 11 Pro – Business-Funktionen | Domäne & Entra Join, GPO, BitLocker, Hyper-V, RDP-Host, Intune-Verwaltung. |
| Windows 11 Enterprise – zusätzlich | Credential Guard, AppLocker/App Control, erweiterte Sicherheit und Verwaltung; nur per Volumenlizenz (z. B. M365 E3/E5). |
| Windows Enterprise LTSC – Einsatz | Geräte, die lange unverändert laufen sollen: Kassen, Produktionsanlagen, Medizintechnik. |
| Support-Ende Windows 10 | 14. Oktober 2025 – danach nur noch kostenpflichtige ESU. |
| Windows Server Kern-Lizenzierung – Minimum | Alle physischen Kerne, mind. 8 pro Prozessor und 16 pro Server. |
| Windows Server Standard vs. Datacenter | Standard: 2 VMs pro voll lizenziertem Host. Datacenter: unbegrenzt VMs. |
| Windows Server Essentials | Für Kleinunternehmen bis 25 Benutzer/50 Geräte, keine CALs nötig. |
| CAL | Client Access License – Zugriffslizenz für jeden Benutzer (User-CAL) oder jedes Gerät (Device-CAL), das auf den Server zugreift. |
| User-CAL – wann? | Wenn Personen mehrere Geräte nutzen (PC, Notebook, Smartphone). |
| Device-CAL – wann? | Wenn mehrere Personen ein Gerät teilen (Schichtbetrieb, Schulungsraum). |
| RDS-CAL | Zusätzliche Lizenz für den Zugriff auf Remotedesktop-Dienste (Terminalserver). |
| M365 Business Basic | Office nur im Browser/mobil + Exchange, Teams, OneDrive, SharePoint. |
| M365 Business Standard | Business Basic + Desktop-Office-Apps. |
| M365 Business Premium | Business Standard + Intune, Entra ID P1, Defender for Business, Autopilot. |
| Grenze der M365-Business-Pläne | Maximal 300 Benutzer – darüber Enterprise-Pläne (E3/E5). |
| Office LTSC 2024 | Kauflizenz für Desktop-Office ohne Cloud-Dienste und ohne Funktionsupdates. |
| Concurrent/Floating-Lizenz – wann? | Teure Spezialsoftware, die nur wenige gleichzeitig nutzen. |
| Kauf vs. Abo – Hauptunterschied | Kauf: einmalig zahlen, Version unbefristet. Abo: laufend zahlen, immer aktuell, endet mit Kündigung. |
| Risiko Unterlizenzierung | Urheberrechtsverletzung: Schadensersatz, Nachlizenzierung, Audit-Folgen, Imageschaden. |
| Hardware Außendienst | Leichtes Business-Notebook, SSD, langer Akku, ggf. LTE/5G, TPM/BitLocker, Windows Hello, Docking. |
| Hardware Grafik/Video | Workstation: starke CPU, 32–64 GB RAM, dedizierte GPU, NVMe-SSD, kalibrierbarer IPS-Monitor. |
| Hardware Lager | Robustes Tablet/Handheld mit Barcodescanner, IP-Schutzklasse, Wechselakku. |
| Hardware Callcenter | Thin Client + Terminalserver/VDI, Headset. |

## ✍️ Übungsfragen (21)

**1.** Ein Steuerbüro mit 12 Mitarbeitenden will alle PCs in eine Active-Directory-Domäne einbinden. Welche Windows-Edition ist mindestens nötig?
- A) Windows 11 Home
- B) Windows 11 Pro
- C) Windows 11 Enterprise LTSC
- D) Windows Server Essentials

<details><summary>Lösung</summary>

**B) Windows 11 Pro**<br>Home kann keiner Domäne beitreten; Pro ist die günstigste Edition mit Domänenbeitritt.

</details>

**2.** Ein Callcenter mit 60 identischen Arbeitsplätzen nutzt nur eine webbasierte CRM-Anwendung und Telefonie. Welche Hardware ist am sinnvollsten?
- A) Grafik-Workstations
- B) Thin Clients mit Terminalserver/VDI und Headsets
- C) Gaming-PCs
- D) Rugged-Tablets

<details><summary>Lösung</summary>

**B) Thin Clients mit Terminalserver/VDI und Headsets**<br>Zentral verwaltbar, günstig, stromsparend, keine Daten lokal.

</details>

**3.** Ein Pflegedienst-Mitarbeiter arbeitet mit PC im Büro, Notebook unterwegs und Smartphone. Welche CAL-Art ist für ihn günstiger?
- A) Device-CAL
- B) User-CAL
- C) RDS-Device-CAL
- D) Keine CAL

<details><summary>Lösung</summary>

**B) User-CAL**<br>1 User-CAL statt 3 Device-CALs.

</details>

**4.** Eine Produktion arbeitet in 3 Schichten mit je 15 Personen an denselben 15 PCs. Welche CAL-Art ist günstiger?
- A) 45 User-CALs
- B) 15 Device-CALs
- C) 30 User-CALs
- D) 1 Server-CAL

<details><summary>Lösung</summary>

**B) 15 Device-CALs**<br>Mehrere Personen pro Gerät → Device-CAL.

</details>

**5.** Ein Server hat 2 Prozessoren mit je 6 Kernen. Wie viele Windows-Server-Kernlizenzen werden benötigt?

<details><summary>Lösung</summary>

**16 Kerne**<br>12 physische Kerne, aber Minimum 16 pro Server.

</details>

**6.** Ein Server hat 2 Prozessoren mit je 12 Kernen. Wie viele Kernlizenzen werden benötigt?

<details><summary>Lösung</summary>

**24 Kerne**<br>Alle 24 physischen Kerne (über dem Minimum von 16).

</details>

**7.** Ein Server hat 1 Prozessor mit 20 Kernen. Wie viele 2-Kern-Pakete braucht man, wenn man nur 2er-Pakete kauft?

<details><summary>Lösung</summary>

**10 Pakete**<br>20 Kerne ÷ 2 = 10 Pakete.

</details>

**8.** Ein Unternehmen will 10 virtuelle Windows-Server auf einem Host betreiben. Welche Edition ist in der Regel wirtschaftlicher?
- A) Standard
- B) Datacenter
- C) Essentials
- D) Home

<details><summary>Lösung</summary>

**B) Datacenter**<br>Standard deckt nur 2 VMs pro Lizenzierung ab; Datacenter erlaubt unbegrenzt viele VMs.

</details>

**9.** Ein Handwerksbetrieb mit 8 Mitarbeitenden möchte Mail, Teams und Office auf dem PC, aber keine Geräteverwaltung. Welcher Plan passt?
- A) Business Basic
- B) Business Standard
- C) Business Premium
- D) Microsoft 365 E5

<details><summary>Lösung</summary>

**B) Business Standard**<br>Desktop-Apps sind ab Standard enthalten; Premium wäre nur für Intune/Entra P1 nötig.

</details>

**10.** Ein Unternehmen mit 450 Mitarbeitenden sucht eine Microsoft-365-Lizenz. Was gilt?
- A) Business Premium für alle
- B) Enterprise-Pläne (z. B. E3), da Business-Pläne auf 300 Nutzer begrenzt sind
- C) Business Basic ohne Grenze
- D) Office LTSC ist Pflicht

<details><summary>Lösung</summary>

**B) Enterprise-Pläne (z. B. E3), da Business-Pläne auf 300 Nutzer begrenzt sind**

</details>

**11.** Welcher Plan enthält Intune und Entra ID P1 für bedingten Zugriff?
- A) Business Basic
- B) Business Standard
- C) Business Premium
- D) Office LTSC 2024

<details><summary>Lösung</summary>

**C) Business Premium**

</details>

**12.** Ein Architekturbüro nutzt eine teure CAD-Software, die 15 Mitarbeitende gelegentlich, aber nie mehr als 4 gleichzeitig nutzen. Welches Lizenzmodell?
- A) 15 Named-User-Lizenzen
- B) 4 Concurrent/Floating-Lizenzen
- C) OEM-Lizenzen
- D) Freeware

<details><summary>Lösung</summary>

**B) 4 Concurrent/Floating-Lizenzen**<br>Lizenzserver vergibt bis zu 4 gleichzeitige Nutzungen.

</details>

**13.** Ein Lagerarbeiter erfasst Wareneingänge im Kühlhaus. Welches Gerät ist geeignet?
- A) Consumer-Tablet
- B) Rugged-Handheld mit Barcodescanner und hoher IP-Schutzklasse
- C) Desktop-PC
- D) Thin Client

<details><summary>Lösung</summary>

**B) Rugged-Handheld mit Barcodescanner und hoher IP-Schutzklasse**

</details>

**14.** Was passiert seit dem 14.10.2025 mit Windows 10?
- A) Es wird kostenlos auf Windows 12 aktualisiert
- B) Es erhält keine regulären Sicherheitsupdates mehr
- C) Es kann nicht mehr gestartet werden
- D) Nichts

<details><summary>Lösung</summary>

**B) Es erhält keine regulären Sicherheitsupdates mehr**<br>Nur noch kostenpflichtige Extended Security Updates.

</details>

**15.** Welche Funktionen fehlen Windows 11 Home im Vergleich zu Pro? (mehrere)
- A) Domänenbeitritt
- B) BitLocker-Verwaltung
- C) Microsoft Store
- D) Remotedesktop-Host

<details><summary>Lösung</summary>

**A) Domänenbeitritt, B) BitLocker-Verwaltung, D) Remotedesktop-Host**<br>Den Store haben beide.

</details>

**16.** Welche Gründe sprechen für ein Software-Abo statt Kauf? (mehrere)
- A) Immer aktuelle Version
- B) Planbare laufende Kosten
- C) Nutzung auch nach Kündigung
- D) Flexible Anpassung der Nutzerzahl

<details><summary>Lösung</summary>

**A) Immer aktuelle Version, B) Planbare laufende Kosten, D) Flexible Anpassung der Nutzerzahl**<br>Nach Kündigung endet die Nutzung.

</details>

**17.** Eine Firma hat 35 Mitarbeitende, alle mit PC und Notebook, Einschichtbetrieb. Wie viele CALs braucht sie mindestens?

<details><summary>Lösung</summary>

**35 CALs**<br>35 User-CALs (statt 70 Device-CALs).

</details>

**18.** Eine Werbeagentur stellt eine Videografin ein. Beschreiben Sie eine geeignete Hardwareausstattung mit drei Komponenten und begründen Sie diese. (6 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je Komponente 1 + Begründung 1, z. B.: leistungsstarke Mehrkern-CPU (Rendering/Encoding ist rechenintensiv); 32–64 GB RAM (große Projekte/Timeline im Speicher); dedizierte GPU (Hardwarebeschleunigung bei Schnitt/Effekten); schnelle NVMe-SSD mit großer Kapazität (große Videodateien, hohe Datenraten); farbkalibrierbarer 4K-IPS-Monitor (farbverbindliches Arbeiten, Detaildarstellung).

</details>

**19.** Ein Kunde mit 25 Notebooks im Außendienst nutzt Windows 11 Home. Erläutern Sie zwei Probleme und empfehlen Sie eine Lösung. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Probleme (je 1): Home kann keiner Domäne/Entra ID beitreten → keine zentrale Verwaltung/GPO/Intune; kein BitLocker → bei Diebstahl/Verlust sind Daten ungeschützt (DSGVO-Risiko); kein RDP-Host für Fernwartung. Lösung (2): Upgrade auf Windows 11 Pro (bzw. Business), Einbindung in Entra ID/Intune, BitLocker mit TPM aktivieren.

</details>

**20.** Erläutern Sie den Unterschied zwischen User-CAL und Device-CAL und nennen Sie je ein passendes Szenario. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** User-CAL: lizenziert eine Person für den Serverzugriff von beliebig vielen Geräten (1) – z. B. Außendienstmitarbeitende mit Notebook, Smartphone und Büro-PC (1). Device-CAL: lizenziert ein Gerät, von dem beliebig viele Personen zugreifen dürfen (1) – z. B. Schichtbetrieb, in dem mehrere Mitarbeitende denselben PC nutzen (1).

</details>

**21.** Ein kleines Unternehmen (15 Mitarbeitende, keine eigene IT) überlegt, Mail- und Dateiserver in die Cloud (SaaS) zu verlagern. Nennen Sie zwei Vorteile und zwei Punkte, die vorher geklärt werden müssen. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Vorteile (je 1): keine eigene Serverhardware/Wartung nötig; Anbieter kümmert sich um Updates, Verfügbarkeit, Backup der Infrastruktur; ortsunabhängiger Zugriff; skalierbar, planbare monatliche Kosten. Zu klären (je 1): Datenschutz – Serverstandort EU, AV-Vertrag nach Art. 28 DSGVO; ausreichende und ausfallsichere Internetanbindung; Migrationsaufwand/Schulung; Kosten über die Laufzeit; Exit-Strategie/Vendor-Lock-in; eigenes Backup der Daten.

</details>


[⬅ Inhaltsverzeichnis](README.md)
