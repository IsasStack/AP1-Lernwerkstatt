# 🛒 Produktauswahl & Lizenzierung

*Bereich: Planung · Prüfungsrelevanz: ★★★*

> Welche Hardware, welches Betriebssystem, welche Software und Lizenz passt zu welcher Firma – mit Begründung.

[⬅ Inhaltsverzeichnis](README.md)

---

„Empfehlen Sie eine geeignete Ausstattung und begründen Sie Ihre Wahl“ – so oder ähnlich beginnt in fast jeder AP1 eine Teilaufgabe. Bewertet wird nicht, ob du das neueste Modell kennst, sondern ob deine Empfehlung zur Situation passt und ob du sie mit den Angaben aus der Aufgabe begründest. Dieses Thema bündelt, was du dafür brauchst: ein festes Vorgehen, passende Hardware je Arbeitsplatz, Betriebssysteme und Lizenzmodelle.

## So gehst du jede Auswahlaufgabe an

1. **Situation lesen und markieren.** Wie viele Personen? Was tun sie (Büro, Grafik, CAD, Entwicklung, Kasse, Lager)? Arbeiten sie mobil oder stationär? Gibt es eine Domäne oder Microsoft 365? Wie hoch ist das Budget? Werden besonders schützenswerte Daten verarbeitet? Gibt es besondere Bedürfnisse wie Barrierefreiheit oder Schichtbetrieb?
2. **Anforderungen ableiten.** Was muss das System können (funktional) und wie gut, sicher, ergonomisch, günstig und nachhaltig muss es sein (nicht-funktional)?
3. **Entscheiden und begründen.** Empfehlung + „weil“ + fachliches Argument + Bezug zur Situation.

> [!IMPORTANT]
> Die IHK will keine Markennamen, sondern Geräteklassen und Eigenschaften: „Business-Notebook mit SSD, 16 GB RAM, TPM 2.0 und USB-C-Docking“ statt „Modell XY von Hersteller Z“.

> [!NOTE]
> **Beispiel**
>
> **Vom Text zur Empfehlung**  
> *Situation:* „Die sechs Mitarbeitenden des Vertriebs sind drei Tage pro Woche bei Kunden. Dort präsentieren sie Angebote und erfassen Aufträge, auch ohne Internetverbindung. Kundendaten dürfen bei Verlust des Geräts nicht in falsche Hände geraten.“  
>
> *Markierte Anforderungen:* mobil → leicht, lange Akkulaufzeit; Präsentation → HDMI oder USB-C für Beamer; offline → lokale Installation und Datenhaltung; Verlust → Verschlüsselung, sichere Anmeldung.  
>
> *Empfehlung mit Begründung:* „Ich empfehle leichte 14-Zoll-Business-Notebooks mit SSD, langer Akkulaufzeit und HDMI-Anschluss, weil die Mitarbeitenden viel unterwegs sind und beim Kunden präsentieren. Als Betriebssystem Windows 11 Pro, weil nur damit BitLocker zur Verfügung steht: Geht ein Notebook verloren, sind die Kundendaten durch die Verschlüsselung geschützt.“

## Hardware nach Arbeitsplatztyp

Die Leistung soll zur Aufgabe passen. **Warum nicht einfach überall das stärkste Gerät?** Weil es mehr kostet, mehr Strom verbraucht und bei Büroarbeit keinen spürbaren Vorteil bringt. Umgekehrt kostet ein zu schwaches Gerät jeden Tag Arbeitszeit – und die ist teurer als die Hardware.

<table><tr><th>Arbeitsplatz</th><th>Empfehlung</th><th>Begründung</th></tr>
<tr><td>Büro, Verwaltung (Office, ERP, Mail)</td><td>Desktop, Mini-PC oder Business-Notebook mit Docking; Mittelklasse-CPU, 16 GB RAM, 512 GB SSD, zwei 24-Zoll-Monitore</td><td>ausreichende Leistung zu moderatem Preis; zwei Monitore steigern die Produktivität</td></tr>
<tr><td>Außendienst, Vertrieb</td><td>leichtes Business-Notebook (13–14 Zoll), SSD, lange Akkulaufzeit, ggf. LTE/5G, TPM, Fingerabdruck oder IR-Kamera, Docking im Büro</td><td>mobil, offline arbeitsfähig, bei Verlust durch Verschlüsselung geschützt, schnelle sichere Anmeldung</td></tr>
<tr><td>Grafik, Foto, Video</td><td>Workstation mit starker CPU, 32–64 GB RAM, dedizierter Grafikkarte, schneller NVMe-SSD; farbkalibrierbarer IPS-Monitor mit großem Farbraum</td><td>rechenintensive Programme, große Dateien, farbverbindliches Arbeiten</td></tr>
<tr><td>CAD, Konstruktion</td><td>Workstation mit vom Softwarehersteller zertifizierter Profi-Grafikkarte, viel RAM (ggf. ECC), großer Monitor</td><td>Herstellerzertifizierung sichert stabilen Betrieb und Support</td></tr>
<tr><td>Softwareentwicklung</td><td>32 GB RAM, schnelle SSD, Windows Pro (Hyper-V, WSL) oder Linux, zwei Monitore</td><td>virtuelle Maschinen, Container, Compiler und IDE brauchen viel RAM und schnelle Datenträger</td></tr>
<tr><td>Callcenter, Sachbearbeitung mit Standardaufgaben</td><td>Thin Client mit Terminalserver oder virtuellem Desktop, Headset</td><td>zentral verwaltet, günstig, sparsam, keine Daten lokal, im Defekt schnell getauscht</td></tr>
<tr><td>Lager, Produktion</td><td>robustes (rugged) Tablet oder Handheld mit Barcodescanner, hohe IP-Schutzart, wechselbarer Akku; Industrie-PC</td><td>Staub, Stöße, Kälte und Feuchtigkeit; mobile Datenerfassung direkt im ERP</td></tr>
<tr><td>Empfang, Kasse, Infoterminal</td><td>Mini-PC oder All-in-One, Touchscreen, ggf. Kioskmodus</td><td>platzsparend, nur eine Anwendung, Kundenkontakt</td></tr>
<tr><td>Homeoffice</td><td>Notebook mit Docking, externer Monitor, Headset, VPN und Mehr-Faktor-Anmeldung</td><td>flexibel, sichere Anbindung, ergonomischer Heimarbeitsplatz</td></tr>
<tr><td>barrierefreier Arbeitsplatz</td><td>je nach Einschränkung: großer Monitor und Vergrößerung, Screenreader, Braillezeile, Spracheingabe, Spezialtastatur</td><td>Teilhabe am Arbeitsleben; der Arbeitgeber muss den Arbeitsplatz angemessen anpassen</td></tr>
<tr><td>kleiner Server im KMU</td><td>Server mit ECC-RAM, redundanten Netzteilen, Hot-Swap-Laufwerken, Wartungsvertrag, USV; Backup auf NAS und außer Haus bzw. in der Cloud</td><td>Ausfallsicherheit und Datensicherheit für alle Arbeitsplätze</td></tr></table>

> [!TIP]
> Warum ein **Thin Client**? Programme und Daten liegen zentral auf dem Server. Das Gerät am Platz zeigt nur das Bild an. Es ist günstig, verbraucht wenig Strom, braucht kaum Pflege, und wird es gestohlen, sind keine Daten darauf. Der Nachteil: Ohne Netzwerk und Server kann niemand arbeiten.

## Betriebssystem auswählen

<table><tr><th>Edition</th><th>wann?</th><th>wichtig</th></tr>
<tr><td>Windows 11 Home</td><td>Privatgeräte</td><td>kein Domänenbeitritt, kein Beitritt zu Entra ID, keine Gruppenrichtlinien, kein BitLocker (nur vereinfachte Geräteverschlüsselung), kein Remotedesktop-Host → <b>nicht für Firmen</b></td></tr>
<tr><td>Windows 11 Pro</td><td>Standard für Arbeitsplätze im KMU</td><td>Domänen- und Entra-ID-Beitritt, Gruppenrichtlinien, BitLocker, Hyper-V, Remotedesktop-Host, Verwaltung mit Intune</td></tr>
<tr><td>Windows 11 Enterprise</td><td>größere Unternehmen, über Volumenlizenz bzw. Microsoft 365 E3/E5</td><td>zusätzliche Sicherheits- und Verwaltungsfunktionen, z. B. Credential Guard, Anwendungssteuerung</td></tr>
<tr><td>Windows 11 Education</td><td>Schulen, Hochschulen</td><td>Enterprise-Funktionen zu Bildungspreisen</td></tr>
<tr><td>Windows 11 Enterprise LTSC / IoT</td><td>Kassen, Produktionsanlagen, Medizingeräte</td><td>lange Supportzeit ohne Funktionsupdates – stabil, nichts ändert sich unerwartet</td></tr>
<tr><td>macOS</td><td>Grafik, Medien, Apple-Umgebung</td><td>nur auf Apple-Hardware, Verwaltung per MDM</td></tr>
<tr><td>Linux (z. B. Ubuntu LTS, Debian, RHEL)</td><td>Server, Entwicklung, kostensensible Umgebungen</td><td>ohne Lizenzkosten (Support-Abos optional), anpassbar; prüfen, ob die Fachsoftware läuft</td></tr>
<tr><td>ChromeOS, Android, iOS</td><td>einfache Web-Arbeitsplätze, Tablets, Smartphones</td><td>Verwaltung per MDM nötig</td></tr></table>

> [!WARNING]
> **Windows 10:** Der Support endete am 14.10.2025. Ohne Sicherheitsupdates ist der Betrieb ein Sicherheitsrisiko und widerspricht der DSGVO-Pflicht, Daten nach dem Stand der Technik zu schützen (Art. 32). Lösungen: Upgrade auf Windows 11 (Voraussetzungen wie TPM 2.0 und Secure Boot prüfen), Hardware ersetzen oder übergangsweise kostenpflichtige Extended Security Updates (ESU).

**Server-Betriebssysteme:** Windows Server Essentials für Kleinunternehmen (höchstens 25 Benutzer und 50 Geräte, keine CALs nötig), Standard (enthält das Recht auf 2 virtuelle Maschinen je vollständig lizenziertem Host), Datacenter (unbegrenzt viele VMs – lohnt sich bei vielen VMs). Linux-Server (Ubuntu Server, Debian, RHEL) sind verbreitet für Webserver, Datenbanken und Container.

## Windows Server lizenzieren: Kerne und CALs

Windows Server Standard und Datacenter werden in zwei Teilen lizenziert:

1. **Kernlizenzen für den Server:** Alle physischen Prozessorkerne müssen lizenziert werden, mindestens aber **8 Kerne pro Prozessor** und **16 Kerne pro Server**. Verkauft wird in 2er- und 16er-Paketen.
2. **Zugriffslizenzen (CALs)** für alle, die auf den Server zugreifen:
   - **User-CAL**: pro Person, egal mit wie vielen Geräten
   - **Device-CAL**: pro Gerät, egal wie viele Personen es benutzenMischen ist erlaubt. Für Terminalserver (Remotedesktopdienste) braucht man zusätzlich **RDS-CALs**.

**Warum diese Regeln?** Das Mindestmaß verhindert, dass kleine Server fast nichts kosten. Bei den CALs zählt, was weniger Lizenzen ergibt: Nutzt jede Person mehrere Geräte, sind User-CALs günstiger; teilen sich viele Personen wenige Geräte, sind Device-CALs günstiger.

> [!NOTE]
> **Beispiel**
>
> **Kernlizenzen Schritt für Schritt**  
> **Server 1:** 2 Prozessoren mit je 6 Kernen.  
> Je Prozessor mindestens 8 → 2 × 8 = 16. Pro Server mindestens 16 → **16 Kernlizenzen** (obwohl nur 12 Kerne vorhanden sind).  
>
> **Server 2:** 2 Prozessoren mit je 12 Kernen.  
> Je Prozessor 12 (mehr als 8) → 24. Mehr als 16 → **24 Kernlizenzen**, z. B. ein 16er-Paket und vier 2er-Pakete.  
>
> **Server 3:** 1 Prozessor mit 4 Kernen.  
> Mindestens 8 je Prozessor, mindestens 16 je Server → **16 Kernlizenzen**.

> [!NOTE]
> **Beispiel**
>
> **User- oder Device-CAL?**  
> 40 Mitarbeitende im Einschichtbetrieb, jede Person mit PC und Notebook (80 Geräte) → **40 User-CALs** statt 80 Device-CALs.  
> 3 Schichten mit je 10 Personen an denselben 10 PCs (30 Personen) → **10 Device-CALs** statt 30 User-CALs.

## Microsoft 365

<table><tr><th>Plan</th><th>Inhalt (vereinfacht)</th><th>für</th></tr>
<tr><td>Business Basic</td><td>Office im Browser und mobil, Exchange-Mail, Teams, OneDrive, SharePoint</td><td>Mitarbeitende ohne Desktop-Office</td></tr>
<tr><td>Business Standard</td><td>zusätzlich die Desktop-Programme (Word, Excel, Outlook …)</td><td>typischer Büroarbeitsplatz</td></tr>
<tr><td>Business Premium</td><td>zusätzlich Intune (Geräteverwaltung), Entra ID P1 (bedingter Zugriff, MFA-Richtlinien), Defender for Business</td><td>KMU, die Geräte zentral verwalten und absichern wollen</td></tr>
<tr><td>E3 / E5</td><td>Enterprise-Funktionen einschließlich Windows Enterprise; E5 mit erweiterter Sicherheit und Compliance</td><td>Unternehmen mit mehr als 300 Nutzern</td></tr>
<tr><td>Office LTSC 2024 (Kauf)</td><td>einmalige Lizenz für Desktop-Office, ohne Cloud-Dienste und ohne neue Funktionen</td><td>Offline- oder Spezialumgebungen</td></tr></table>

Die Business-Pläne sind auf **300 Nutzer** begrenzt. Abgerechnet wird pro Benutzer und Monat. Ein Benutzer darf die Desktop-Programme auf bis zu **5 PCs oder Macs, 5 Tablets und 5 Smartphones** installieren.

## Lizenzmodell wählen

<table><tr><th>Situation</th><th>passendes Modell</th></tr>
<tr><td>viele Geräte pro Person</td><td>benutzerbasiert (User-CAL, Microsoft 365 pro Benutzer)</td></tr>
<tr><td>viele Personen pro Gerät (Schicht, Schulungsraum)</td><td>gerätebasiert (Device-CAL)</td></tr>
<tr><td>nur wenige nutzen teure Spezialsoftware gleichzeitig</td><td>Concurrent- bzw. Floating-Lizenz mit Lizenzserver</td></tr>
<tr><td>stark schwankender Bedarf, Projekte</td><td>Abo oder Pay-per-Use, monatlich kündbar</td></tr>
<tr><td>lange Nutzung, keine Cloud gewünscht</td><td>Kauflizenz, ggf. mit Wartungsvertrag</td></tr>
<tr><td>neuer PC mit vorinstalliertem Betriebssystem</td><td>OEM-Lizenz (an das Gerät gebunden)</td></tr>
<tr><td>viele gleiche Lizenzen</td><td>Volumenlizenz bzw. Rahmenvertrag</td></tr>
<tr><td>knappes Budget, Standardaufgaben</td><td>Open Source (LibreOffice, Linux, Thunderbird, Nextcloud) – Schulungs- und Umstellungsaufwand einplanen</td></tr></table>

**Kauf oder Abo?** Die Kauflizenz kostet einmal und darf unbefristet genutzt werden. Das ist langfristig oft günstiger, aber es gibt keine neuen Funktionen, ein Upgrade kostet erneut, und irgendwann endet der Support. Das Abo verursacht laufende, planbare Kosten, ist immer aktuell, enthält meist Cloud-Dienste und lässt sich an die Zahl der Mitarbeitenden anpassen. Dafür ist es langfristig oft teurer, man ist vom Anbieter abhängig, und nach der Kündigung darf man die Software nicht mehr nutzen.

## Cloud oder eigener Server?

<table><tr><th>Kriterium</th><th>spricht für Cloud (SaaS, IaaS)</th><th>spricht für eigenen Server (On-Premises)</th></tr>
<tr><td>Kosten</td><td>keine Anfangsinvestition, Bezahlung nach Nutzung</td><td>langfristig planbar, keine laufenden Abo-Kosten</td></tr>
<tr><td>Personal</td><td>wenig eigene IT-Kenntnisse</td><td>eigene IT-Abteilung vorhanden</td></tr>
<tr><td>Skalierung</td><td>schnell wachsend oder schwankend</td><td>stabile Nutzerzahl</td></tr>
<tr><td>Datenschutz</td><td>Rechenzentrum in der EU, Auftragsverarbeitungsvertrag</td><td>sehr sensible Daten, Berufsgeheimnisse, volle Kontrolle gewünscht</td></tr>
<tr><td>Internet</td><td>schnelle, ausfallsichere Anbindung</td><td>langsame oder unzuverlässige Verbindung</td></tr></table>

Mehr zu Cloud-Modellen steht im Thema „Cloud und Virtualisierung“.

## Lizenzmanagement

Ein Unternehmen muss wissen, welche Software auf welchen Geräten installiert ist und welche Lizenzen es besitzt (Software Asset Management). **Warum?** **Unterlizenzierung** – mehr Installationen als Lizenzen – ist eine Urheberrechtsverletzung: Es drohen Schadensersatz, teure Nachlizenzierung und ein Imageschaden; Hersteller dürfen die Lizenzen prüfen (Audit). **Überlizenzierung** kostet unnötig Geld. Deshalb: Inventar aller Lizenzen und Installationen führen, regelmäßig abgleichen, Nachweise aufbewahren und Lizenzen ausgeschiedener Mitarbeitender zeitnah freigeben.

## Begründungsbausteine

Diese Formulierungen kannst du in vielen Aufgaben verwenden – ergänze sie immer um den Bezug zur Situation:

- **SSD:** „… weil sie ohne bewegliche Teile auskommt, dadurch stoßunempfindlich und deutlich schneller ist und weniger Energie verbraucht.“
- **Windows 11 Pro:** „… weil erst ab der Pro-Edition der Beitritt zur Domäne bzw. zu Entra ID und die Verschlüsselung mit BitLocker möglich sind.“
- **Thin Client:** „… weil die Anwendungen zentral laufen, die Geräte günstig, sparsam und zentral verwaltbar sind und keine Daten lokal gespeichert werden.“
- **User-CAL:** „… weil jede Person mehrere Geräte nutzt und so weniger Lizenzen nötig sind.“
- **Device-CAL:** „… weil im Schichtbetrieb mehrere Personen dasselbe Gerät nutzen.“
- **Microsoft 365 Business Premium:** „… weil neben den Office-Programmen Intune zur Geräteverwaltung und Entra ID P1 für bedingten Zugriff und MFA enthalten sind.“
- **Docking-Station:** „… weil das Notebook mit einem einzigen Kabel an Monitore, Netzwerk und Peripherie angeschlossen und gleichzeitig geladen wird.“
- **ECC-RAM im Server:** „… weil er Speicherfehler erkennt und korrigiert und so Abstürze und Datenfehler auf dem zentralen System verhindert.“

> [!CAUTION]
> **Typische Fehler**
>
> - Markennamen oder konkrete Modelle nennen statt Geräteklasse und Eigenschaften.
> - Eine Empfehlung ohne Begründung oder mit einer Begründung ohne Bezug zur Situation („weil es schneller ist“).
> - Windows 11 Home für Firmengeräte empfehlen.
> - Bei Kernlizenzen nur die vorhandenen Kerne zählen und das Minimum von 16 pro Server vergessen.
> - User- und Device-CAL verwechseln.
> - Für Büroarbeitsplätze überdimensionierte Workstations empfehlen.

**📝 Prüfungsaufgabe:** **Ein Steuerbüro mit 12 Mitarbeitenden will alle PCs in die Active-Directory-Domäne einbinden und die Festplatten der Notebooks verschlüsseln. Auf den vorhandenen Geräten läuft Windows 11 Home. Erläutern Sie das Problem und empfehlen Sie eine Lösung. (4 Punkte)**

<details><summary>Lösung anzeigen</summary>

Windows 11 Home kann keiner Domäne beitreten und bietet kein BitLocker (2). Die Geräte sollten auf Windows 11 Pro aktualisiert werden (Upgrade-Lizenz); damit sind Domänenbeitritt, Gruppenrichtlinien und BitLocker-Verschlüsselung möglich (2).

</details>

**📝 Prüfungsaufgabe:** **Ein Server hat einen Prozessor mit 20 Kernen. Wie viele Kernlizenzen werden für Windows Server Standard benötigt, und wie viele 2er-Pakete wären das? (2 Punkte)**

<details><summary>Lösung anzeigen</summary>

20 Kerne liegen über den Mindestwerten, also **20 Kernlizenzen** (1) = **10 Zweierpakete** (oder ein 16er- und zwei 2er-Pakete) (1).

</details>

**📝 Prüfungsaufgabe:** **Eine Pflegedienstleitung arbeitet mit einem PC im Büro, einem Notebook unterwegs und einem Smartphone. In der Pflege teilen sich 30 Pflegekräfte in drei Schichten 10 Tablets. Welche CAL-Art empfehlen Sie jeweils? (4 Punkte)**

<details><summary>Lösung anzeigen</summary>

Pflegedienstleitung: User-CAL (1), weil eine Person drei Geräte nutzt – eine Lizenz statt drei (1). Pflegekräfte: Device-CAL für die 10 Tablets (1), weil 30 Personen dieselben 10 Geräte nutzen – 10 Lizenzen statt 30 (1).

</details>

**📝 Prüfungsaufgabe:** **Eine Werbeagentur stellt eine Videografin ein. Beschreiben Sie eine geeignete Hardwareausstattung mit drei Komponenten und begründen Sie diese. (6 Punkte)**

<details><summary>Lösung anzeigen</summary>

Je Komponente 1 Punkt für die Nennung, 1 für die Begründung, z. B.: leistungsstarke Workstation mit Mehrkern-CPU und 32–64 GB RAM, weil Videoschnitt und Rendering sehr rechenintensiv sind; dedizierte Grafikkarte, weil Effekte und Export von der GPU beschleunigt werden; große, schnelle NVMe-SSD, weil Videodateien sehr groß sind und flüssig abgespielt werden müssen; farbkalibrierbarer 4K-IPS-Monitor mit großem Farbraum, weil Farben verbindlich beurteilt werden müssen.

</details>

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

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Windows 11 Pro<br>Home kann keiner Domäne beitreten; Pro ist die günstigste Edition mit Domänenbeitritt.

</details>

**2.** Ein Callcenter mit 60 identischen Arbeitsplätzen nutzt nur eine webbasierte CRM-Anwendung und Telefonie. Welche Hardware ist am sinnvollsten?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Thin Clients mit Terminalserver/VDI und Headsets<br>Zentral verwaltbar, günstig, stromsparend, keine Daten lokal.

</details>

**3.** Ein Pflegedienst-Mitarbeiter arbeitet mit PC im Büro, Notebook unterwegs und Smartphone. Welche CAL-Art ist für ihn günstiger?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** User-CAL<br>1 User-CAL statt 3 Device-CALs.

</details>

**4.** Eine Produktion arbeitet in 3 Schichten mit je 15 Personen an denselben 15 PCs. Welche CAL-Art ist günstiger?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 15 Device-CALs<br>Mehrere Personen pro Gerät → Device-CAL.

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

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Datacenter<br>Standard deckt nur 2 VMs pro Lizenzierung ab; Datacenter erlaubt unbegrenzt viele VMs.

</details>

**9.** Ein Handwerksbetrieb mit 8 Mitarbeitenden möchte Mail, Teams und Office auf dem PC, aber keine Geräteverwaltung. Welcher Plan passt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Business Standard<br>Desktop-Apps sind ab Standard enthalten; Premium wäre nur für Intune/Entra P1 nötig.

</details>

**10.** Ein Unternehmen mit 450 Mitarbeitenden sucht eine Microsoft-365-Lizenz. Was gilt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Enterprise-Pläne (z. B. E3), da Business-Pläne auf 300 Nutzer begrenzt sind

</details>

**11.** Welcher Plan enthält Intune und Entra ID P1 für bedingten Zugriff?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Business Premium

</details>

**12.** Ein Architekturbüro nutzt eine teure CAD-Software, die 15 Mitarbeitende gelegentlich, aber nie mehr als 4 gleichzeitig nutzen. Welches Lizenzmodell?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 4 Concurrent/Floating-Lizenzen<br>Lizenzserver vergibt bis zu 4 gleichzeitige Nutzungen.

</details>

**13.** Ein Lagerarbeiter erfasst Wareneingänge im Kühlhaus. Welches Gerät ist geeignet?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Rugged-Handheld mit Barcodescanner und hoher IP-Schutzklasse

</details>

**14.** Was passiert seit dem 14.10.2025 mit Windows 10?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Es erhält keine regulären Sicherheitsupdates mehr<br>Nur noch kostenpflichtige Extended Security Updates.

</details>

**15.** Welche Funktionen fehlen Windows 11 Home im Vergleich zu Pro? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Domänenbeitritt; BitLocker-Verwaltung; Remotedesktop-Host. Den Store haben beide.

</details>

**16.** Welche Gründe sprechen für ein Software-Abo statt Kauf? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Immer aktuelle Version; Planbare laufende Kosten; Flexible Anpassung der Nutzerzahl. Nach Kündigung endet die Nutzung.

</details>

**17.** Eine Firma hat 35 Mitarbeitende, alle mit PC und Notebook, Einschichtbetrieb. Wie viele CALs braucht sie mindestens?

<details><summary>Lösung</summary>

**35 CALs**<br>35 User-CALs (statt 70 Device-CALs).

</details>

**18.** Eine Werbeagentur stellt eine Videografin ein. Beschreiben Sie eine geeignete Hardwareausstattung mit drei Komponenten und begründen Sie diese. (6 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (6 P):** Je Komponente 1 + Begründung 1, z. B.: leistungsstarke Mehrkern-CPU (Rendering/Encoding ist rechenintensiv); 32–64 GB RAM (große Projekte/Timeline im Speicher); dedizierte GPU (Hardwarebeschleunigung bei Schnitt/Effekten); schnelle NVMe-SSD mit großer Kapazität (große Videodateien, hohe Datenraten); farbkalibrierbarer 4K-IPS-Monitor (farbverbindliches Arbeiten, Detaildarstellung).

</details>

**19.** Ein Kunde mit 25 Notebooks im Außendienst nutzt Windows 11 Home. Erläutern Sie zwei Probleme und empfehlen Sie eine Lösung. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Probleme (je 1): Home kann keiner Domäne/Entra ID beitreten → keine zentrale Verwaltung/GPO/Intune; kein BitLocker → bei Diebstahl/Verlust sind Daten ungeschützt (DSGVO-Risiko); kein RDP-Host für Fernwartung. Lösung (2): Upgrade auf Windows 11 Pro (bzw. Business), Einbindung in Entra ID/Intune, BitLocker mit TPM aktivieren.

</details>

**20.** Erläutern Sie den Unterschied zwischen User-CAL und Device-CAL und nennen Sie je ein passendes Szenario. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** User-CAL: lizenziert eine Person für den Serverzugriff von beliebig vielen Geräten (1) – z. B. Außendienstmitarbeitende mit Notebook, Smartphone und Büro-PC (1). Device-CAL: lizenziert ein Gerät, von dem beliebig viele Personen zugreifen dürfen (1) – z. B. Schichtbetrieb, in dem mehrere Mitarbeitende denselben PC nutzen (1).

</details>

**21.** Ein kleines Unternehmen (15 Mitarbeitende, keine eigene IT) überlegt, Mail- und Dateiserver in die Cloud (SaaS) zu verlagern. Nennen Sie zwei Vorteile und zwei Punkte, die vorher geklärt werden müssen. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Vorteile (je 1): keine eigene Serverhardware/Wartung nötig; Anbieter kümmert sich um Updates, Verfügbarkeit, Backup der Infrastruktur; ortsunabhängiger Zugriff; skalierbar, planbare monatliche Kosten. Zu klären (je 1): Datenschutz – Serverstandort EU, AV-Vertrag nach Art. 28 DSGVO; ausreichende und ausfallsichere Internetanbindung; Migrationsaufwand/Schulung; Kosten über die Laufzeit; Exit-Strategie/Vendor-Lock-in; eigenes Backup der Daten.

</details>


[⬅ Inhaltsverzeichnis](README.md)
