T.push({
id:"auswahl", title:"Produktauswahl & Lizenzierung", icon:"🛒", area:"Planung", weight:3,
summary:"Welche Hardware, welches Betriebssystem, welche Software und Lizenz passt zu welcher Firma – mit Begründung.",
lesson:`
<h3>So gehst du jede Auswahlaufgabe an</h3>
<ol><li><b>Situation lesen und markieren:</b> Wie viele Nutzer? Was machen sie (Office, Grafik, CAD, Entwicklung, Kasse, Lager)? Mobil oder stationär? Domäne/Cloud vorhanden? Budget? Datenschutz? Besondere Bedürfnisse (Barrierefreiheit, Schichtbetrieb, Kundenkontakt)?</li>
<li><b>Anforderungen ableiten:</b> funktional (was muss es können) und nicht-funktional (Leistung, Sicherheit, Ergonomie, Kosten, Wartbarkeit, Nachhaltigkeit).</li>
<li><b>Entscheiden und begründen:</b> Produkt/Variante + „weil“ + Bezug zur Situation. Immer den <i>Grund aus dem Text</i> nennen.</li></ol>
<div class="tip">Die IHK will kein Markenwissen, sondern passende Klassen und Eigenschaften: „Business-Notebook mit SSD, 16 GB RAM, TPM 2.0 und USB-C-Docking“ – nicht „Lenovo T14 Gen 5“.</div>
<h3>Hardware nach Arbeitsplatztyp</h3>
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
<h3>Betriebssystem auswählen</h3>
<table><tr><th>Edition</th><th>Wann?</th><th>Wichtig</th></tr>
<tr><td>Windows 11 Home</td><td>Privatgeräte</td><td><b>kein</b> Domänenbeitritt, kein Entra Join, keine Gruppenrichtlinien, kein BitLocker (nur vereinfachte Geräteverschlüsselung), kein RDP-Host → <b>nicht für Firmen</b></td></tr>
<tr><td>Windows 11 Pro</td><td>Standard für KMU-Arbeitsplätze</td><td>Domäne & Entra ID Join, GPO, BitLocker, Hyper-V, Remotedesktop-Host, Intune-Verwaltung</td></tr>
<tr><td>Windows 11 Enterprise</td><td>größere Unternehmen (Volumenlizenz, z. B. in Microsoft 365 E3/E5)</td><td>zusätzlich Credential Guard, AppLocker/App Control, erweiterte Verwaltung & Sicherheit</td></tr>
<tr><td>Windows 11 Education</td><td>Schulen/Hochschulen</td><td>Enterprise-Funktionen zu Bildungspreisen</td></tr>
<tr><td>Windows 11 Enterprise LTSC / IoT</td><td>Kassen, Produktionsanlagen, medizinische Geräte</td><td>lange Supportzeit ohne Funktionsupdates, stabil</td></tr>
<tr><td>macOS</td><td>Grafik/Medien, Apple-Ökosystem</td><td>nur auf Apple-Hardware, Verwaltung per MDM</td></tr>
<tr><td>Linux (Ubuntu LTS, Debian, Fedora, RHEL)</td><td>Server, Entwickler, kostensensible oder datenschutzbewusste Umgebungen</td><td>lizenzkostenfrei (RHEL/Ubuntu Pro: Support-Abo), sicher, anpassbar; Kompatibilität mit Fachsoftware prüfen</td></tr>
<tr><td>ChromeOS / Android / iOS</td><td>einfache Web-Arbeitsplätze, Tablets, Smartphones</td><td>MDM-Verwaltung nötig</td></tr></table>
<div class="warn"><b>Windows 10</b>: Support endete am <b>14.10.2025</b>. Ohne Sicherheitsupdates ist der Betrieb ein Sicherheitsrisiko (und datenschutzrechtlich kritisch, Art. 32 DSGVO „Stand der Technik“). Lösung: Upgrade auf Windows 11 (TPM 2.0/Secure Boot prüfen), Hardware tauschen oder befristet kostenpflichtige Extended Security Updates (ESU).</div>
<p><b>Server-Betriebssysteme</b>: Windows Server <b>Essentials</b> (Kleinunternehmen, max. 25 Benutzer/50 Geräte, keine CALs nötig), <b>Standard</b> (2 VMs pro voll lizenziertem Host), <b>Datacenter</b> (unbegrenzt VMs – lohnt bei vielen VMs). Linux-Server (Ubuntu Server, Debian, RHEL) für Web, Datenbanken, Container.</p>
<h3>Microsoft-Lizenzierung – das Wichtigste</h3>
<p><b>Windows Server Standard/Datacenter: Core + CAL</b></p>
<ul><li>Lizenziert werden <b>alle physischen Kerne</b>: mindestens <b>8 Kerne pro Prozessor</b> und <b>16 Kerne pro Server</b>; verkauft in 2er- und 16er-Paketen.</li>
<li>Zusätzlich braucht jeder Zugreifende eine <b>CAL</b> (Client Access License): <b>User-CAL</b> (pro Person, egal wie viele Geräte – ideal für Mitarbeitende mit PC + Notebook + Smartphone) oder <b>Device-CAL</b> (pro Gerät, egal wie viele Personen – ideal für Schichtbetrieb/geteilte PCs). Mischen ist erlaubt.</li>
<li>Für Remotedesktop-Dienste (Terminalserver) zusätzlich <b>RDS-CALs</b>.</li></ul>
<div class="merke">Server mit 2 CPUs à 6 Kernen = 12 Kerne → trotzdem <b>16 Kern-Lizenzen</b> (Minimum). 2 CPUs à 12 Kernen = 24 Kerne → <b>24 Kern-Lizenzen</b>.<br>40 Mitarbeitende im Einschichtbetrieb mit je PC und Notebook → <b>40 User-CALs</b> (statt 80 Device-CALs). 3 Schichten × 10 Personen an 10 PCs → <b>10 Device-CALs</b> (statt 30 User-CALs).</div>
<p><b>Microsoft 365 / Office</b></p>
<table><tr><th>Plan</th><th>Inhalt (vereinfacht)</th><th>Für</th></tr>
<tr><td>Business Basic</td><td>Office im <b>Browser</b>/mobil, Exchange-Mail, Teams, OneDrive, SharePoint</td><td>Kleine Firmen, Mitarbeitende ohne Desktop-Office</td></tr>
<tr><td>Business Standard</td><td>+ <b>Desktop-Office</b>-Apps (Word, Excel, Outlook …)</td><td>Typischer Büroarbeitsplatz</td></tr>
<tr><td>Business Premium</td><td>+ <b>Intune</b> (Geräteverwaltung), <b>Entra ID P1</b> (bedingter Zugriff/MFA-Richtlinien), Defender for Business, Autopilot</td><td>KMU mit Sicherheits-/Verwaltungsanspruch</td></tr>
<tr><td>Microsoft 365 E3 / E5</td><td>Enterprise-Funktionen inkl. Windows Enterprise; E5 + erweiterte Sicherheit/Compliance</td><td>Unternehmen über 300 Nutzer</td></tr>
<tr><td>Office LTSC 2024 (Kauf)</td><td>einmalige Lizenz, Desktop-Office ohne Cloud-Dienste und ohne neue Funktionen</td><td>Offline-/Spezialumgebungen</td></tr></table>
<p>Die <b>Business-Pläne sind auf 300 Nutzer begrenzt</b>, darüber Enterprise-Pläne (E3/E5). Abrechnung pro Benutzer und Monat (Abo); ein Benutzer darf die Desktop-Apps auf bis zu 5 PCs/Macs, 5 Tablets und 5 Smartphones installieren.</p>
<h3>Lizenzmodell wählen – Entscheidungshilfe</h3>
<table><tr><th>Situation</th><th>Passendes Modell</th></tr>
<tr><td>Viele Geräte pro Person</td><td>User-basiert (User-CAL, M365 pro Benutzer)</td></tr>
<tr><td>Viele Personen pro Gerät (Schicht, Schulungsraum)</td><td>Device-basiert</td></tr>
<tr><td>Nur wenige gleichzeitig nutzen teure Spezialsoftware</td><td>Concurrent/Floating-Lizenz mit Lizenzserver</td></tr>
<tr><td>Stark schwankender Bedarf, Projekte</td><td>Abo/Pay-per-Use (monatlich kündbar)</td></tr>
<tr><td>Lange Nutzung, keine Cloud gewünscht</td><td>Kauflizenz (perpetual), ggf. mit Wartungsvertrag</td></tr>
<tr><td>Neuer PC mit vorinstalliertem OS</td><td>OEM (an Gerät gebunden)</td></tr>
<tr><td>Viele gleiche Lizenzen</td><td>Volumenlizenz/Rahmenvertrag (CSP, Enterprise Agreement)</td></tr>
<tr><td>Budget knapp, Standardaufgaben</td><td>Open Source (LibreOffice, Linux, Thunderbird, Nextcloud) – Schulungs- und Kompatibilitätsaufwand einplanen</td></tr></table>
<h3>Kauf vs. Abo (Software)</h3>
<p><b>Kauf (perpetual)</b>: einmalige Kosten, unbefristete Nutzung der Version, langfristig ggf. günstiger – aber keine neuen Funktionen, Upgrade kostet erneut, Support endet. <b>Abo/Subscription</b>: laufende planbare Kosten (OPEX), immer aktuell, Cloud-Dienste inklusive, flexibel skalierbar – aber bei Kündigung keine Nutzung mehr, langfristig oft teurer, Abhängigkeit vom Anbieter.</p>
<h3>Cloud oder On-Premises?</h3>
<table><tr><th>Kriterium</th><th>Spricht für Cloud (SaaS/IaaS)</th><th>Spricht für On-Premises</th></tr>
<tr><td>Kosten</td><td>keine Anfangsinvestition, nutzungsabhängig</td><td>langfristig planbar, keine Abo-Kosten</td></tr>
<tr><td>Personal/Know-how</td><td>wenig eigene IT</td><td>eigene IT-Abteilung vorhanden</td></tr>
<tr><td>Skalierung</td><td>schnell wachsend/schwankend</td><td>stabile Nutzerzahl</td></tr>
<tr><td>Datenschutz</td><td>EU-Rechenzentrum, AV-Vertrag</td><td>sehr sensible Daten, Berufsgeheimnis, volle Kontrolle</td></tr>
<tr><td>Internet</td><td>gute, redundante Anbindung</td><td>schlechte/unsichere Internetverbindung</td></tr></table>
<h3>Lizenzmanagement (Software Asset Management)</h3>
<p>Inventar aller Lizenzen und Installationen, regelmäßiger Abgleich. <b>Unterlizenzierung</b> = Urheberrechtsverletzung (Schadensersatz, Nachlizenzierung, Imageschaden; Hersteller dürfen Audits durchführen). <b>Überlizenzierung</b> = unnötige Kosten. Lizenznachweise aufbewahren, ausgeschiedene Nutzer zeitnah entlizenzieren.</p>
<h3>Begründungsbausteine (zum Auswendiglernen)</h3>
<ul><li>SSD: „… da sie stoßunempfindlich und schneller ist und weniger Energie verbraucht.“</li>
<li>Windows Pro: „… da nur ab der Pro-Edition der Beitritt zur Domäne/zu Entra ID sowie BitLocker möglich sind.“</li>
<li>Thin Client: „… da Anwendungen zentral laufen, die Geräte günstig, sparsam und zentral administrierbar sind und keine Daten lokal gespeichert werden.“</li>
<li>User-CAL: „… da jede Person mehrere Geräte nutzt und so weniger Lizenzen benötigt werden.“</li>
<li>Device-CAL: „… da im Schichtbetrieb mehrere Personen dasselbe Gerät nutzen.“</li>
<li>M365 Business Premium: „… da neben den Office-Apps Intune zur Geräteverwaltung und Entra ID P1 für bedingten Zugriff/MFA enthalten sind.“</li>
<li>Docking: „… da das Notebook mit einem Kabel an Monitor, Netzwerk und Peripherie angeschlossen und gleichzeitig geladen wird.“</li></ul>`,
cards:[
["Warum Windows 11 Home nicht für Firmen?","Kein Domänen-/Entra-ID-Beitritt, keine Gruppenrichtlinien, kein BitLocker, kein Remotedesktop-Host."],
["Windows 11 Pro – Business-Funktionen","Domäne & Entra Join, GPO, BitLocker, Hyper-V, RDP-Host, Intune-Verwaltung."],
["Windows 11 Enterprise – zusätzlich","Credential Guard, AppLocker/App Control, erweiterte Sicherheit und Verwaltung; nur per Volumenlizenz (z. B. M365 E3/E5)."],
["Windows Enterprise LTSC – Einsatz","Geräte, die lange unverändert laufen sollen: Kassen, Produktionsanlagen, Medizintechnik."],
["Support-Ende Windows 10","14. Oktober 2025 – danach nur noch kostenpflichtige ESU."],
["Windows Server Kern-Lizenzierung – Minimum","Alle physischen Kerne, mind. 8 pro Prozessor und 16 pro Server."],
["Windows Server Standard vs. Datacenter","Standard: 2 VMs pro voll lizenziertem Host. Datacenter: unbegrenzt VMs."],
["Windows Server Essentials","Für Kleinunternehmen bis 25 Benutzer/50 Geräte, keine CALs nötig."],
["CAL","Client Access License – Zugriffslizenz für jeden Benutzer (User-CAL) oder jedes Gerät (Device-CAL), das auf den Server zugreift."],
["User-CAL – wann?","Wenn Personen mehrere Geräte nutzen (PC, Notebook, Smartphone)."],
["Device-CAL – wann?","Wenn mehrere Personen ein Gerät teilen (Schichtbetrieb, Schulungsraum)."],
["RDS-CAL","Zusätzliche Lizenz für den Zugriff auf Remotedesktop-Dienste (Terminalserver)."],
["M365 Business Basic","Office nur im Browser/mobil + Exchange, Teams, OneDrive, SharePoint."],
["M365 Business Standard","Business Basic + Desktop-Office-Apps."],
["M365 Business Premium","Business Standard + Intune, Entra ID P1, Defender for Business, Autopilot."],
["Grenze der M365-Business-Pläne","Maximal 300 Benutzer – darüber Enterprise-Pläne (E3/E5)."],
["Office LTSC 2024","Kauflizenz für Desktop-Office ohne Cloud-Dienste und ohne Funktionsupdates."],
["Concurrent/Floating-Lizenz – wann?","Teure Spezialsoftware, die nur wenige gleichzeitig nutzen."],
["Kauf vs. Abo – Hauptunterschied","Kauf: einmalig zahlen, Version unbefristet. Abo: laufend zahlen, immer aktuell, endet mit Kündigung."],
["Risiko Unterlizenzierung","Urheberrechtsverletzung: Schadensersatz, Nachlizenzierung, Audit-Folgen, Imageschaden."],
["Hardware Außendienst","Leichtes Business-Notebook, SSD, langer Akku, ggf. LTE/5G, TPM/BitLocker, Windows Hello, Docking."],
["Hardware Grafik/Video","Workstation: starke CPU, 32–64 GB RAM, dedizierte GPU, NVMe-SSD, kalibrierbarer IPS-Monitor."],
["Hardware Lager","Robustes Tablet/Handheld mit Barcodescanner, IP-Schutzklasse, Wechselakku."],
["Hardware Callcenter","Thin Client + Terminalserver/VDI, Headset."]
],
qs:[
{t:"sc",q:"Ein Steuerbüro mit 12 Mitarbeitenden will alle PCs in eine Active-Directory-Domäne einbinden. Welche Windows-Edition ist mindestens nötig?",o:["Windows 11 Home","Windows 11 Pro","Windows 11 Enterprise LTSC","Windows Server Essentials"],a:1,e:"Home kann keiner Domäne beitreten; Pro ist die günstigste Edition mit Domänenbeitritt."},
{t:"sc",q:"Ein Callcenter mit 60 identischen Arbeitsplätzen nutzt nur eine webbasierte CRM-Anwendung und Telefonie. Welche Hardware ist am sinnvollsten?",o:["Grafik-Workstations","Thin Clients mit Terminalserver/VDI und Headsets","Gaming-PCs","Rugged-Tablets"],a:1,e:"Zentral verwaltbar, günstig, stromsparend, keine Daten lokal."},
{t:"sc",q:"Ein Pflegedienst-Mitarbeiter arbeitet mit PC im Büro, Notebook unterwegs und Smartphone. Welche CAL-Art ist für ihn günstiger?",o:["Device-CAL","User-CAL","RDS-Device-CAL","Keine CAL"],a:1,e:"1 User-CAL statt 3 Device-CALs."},
{t:"sc",q:"Eine Produktion arbeitet in 3 Schichten mit je 15 Personen an denselben 15 PCs. Welche CAL-Art ist günstiger?",o:["45 User-CALs","15 Device-CALs","30 User-CALs","1 Server-CAL"],a:1,e:"Mehrere Personen pro Gerät → Device-CAL."},
{t:"num",q:"Ein Server hat 2 Prozessoren mit je 6 Kernen. Wie viele Windows-Server-Kernlizenzen werden benötigt?",a:16,unit:"Kerne",e:"12 physische Kerne, aber Minimum 16 pro Server."},
{t:"num",q:"Ein Server hat 2 Prozessoren mit je 12 Kernen. Wie viele Kernlizenzen werden benötigt?",a:24,unit:"Kerne",e:"Alle 24 physischen Kerne (über dem Minimum von 16)."},
{t:"num",q:"Ein Server hat 1 Prozessor mit 20 Kernen. Wie viele 2-Kern-Pakete braucht man, wenn man nur 2er-Pakete kauft?",a:10,unit:"Pakete",e:"20 Kerne ÷ 2 = 10 Pakete."},
{t:"sc",q:"Ein Unternehmen will 10 virtuelle Windows-Server auf einem Host betreiben. Welche Edition ist in der Regel wirtschaftlicher?",o:["Standard","Datacenter","Essentials","Home"],a:1,e:"Standard deckt nur 2 VMs pro Lizenzierung ab; Datacenter erlaubt unbegrenzt viele VMs."},
{t:"sc",q:"Ein Handwerksbetrieb mit 8 Mitarbeitenden möchte Mail, Teams und Office auf dem PC, aber keine Geräteverwaltung. Welcher Plan passt?",o:["Business Basic","Business Standard","Business Premium","Microsoft 365 E5"],a:1,e:"Desktop-Apps sind ab Standard enthalten; Premium wäre nur für Intune/Entra P1 nötig."},
{t:"sc",q:"Ein Unternehmen mit 450 Mitarbeitenden sucht eine Microsoft-365-Lizenz. Was gilt?",o:["Business Premium für alle","Enterprise-Pläne (z. B. E3), da Business-Pläne auf 300 Nutzer begrenzt sind","Business Basic ohne Grenze","Office LTSC ist Pflicht"],a:1,e:""},
{t:"sc",q:"Welcher Plan enthält Intune und Entra ID P1 für bedingten Zugriff?",o:["Business Basic","Business Standard","Business Premium","Office LTSC 2024"],a:2,e:""},
{t:"sc",q:"Ein Architekturbüro nutzt eine teure CAD-Software, die 15 Mitarbeitende gelegentlich, aber nie mehr als 4 gleichzeitig nutzen. Welches Lizenzmodell?",o:["15 Named-User-Lizenzen","4 Concurrent/Floating-Lizenzen","OEM-Lizenzen","Freeware"],a:1,e:"Lizenzserver vergibt bis zu 4 gleichzeitige Nutzungen."},
{t:"sc",q:"Ein Lagerarbeiter erfasst Wareneingänge im Kühlhaus. Welches Gerät ist geeignet?",o:["Consumer-Tablet","Rugged-Handheld mit Barcodescanner und hoher IP-Schutzklasse","Desktop-PC","Thin Client"],a:1,e:""},
{t:"sc",q:"Was passiert seit dem 14.10.2025 mit Windows 10?",o:["Es wird kostenlos auf Windows 12 aktualisiert","Es erhält keine regulären Sicherheitsupdates mehr","Es kann nicht mehr gestartet werden","Nichts"],a:1,e:"Nur noch kostenpflichtige Extended Security Updates."},
{t:"mc",q:"Welche Funktionen fehlen Windows 11 Home im Vergleich zu Pro? (mehrere)",o:["Domänenbeitritt","BitLocker-Verwaltung","Microsoft Store","Remotedesktop-Host"],a:[0,1,3],e:"Den Store haben beide."},
{t:"mc",q:"Welche Gründe sprechen für ein Software-Abo statt Kauf? (mehrere)",o:["Immer aktuelle Version","Planbare laufende Kosten","Nutzung auch nach Kündigung","Flexible Anpassung der Nutzerzahl"],a:[0,1,3],e:"Nach Kündigung endet die Nutzung."},
{t:"num",q:"Eine Firma hat 35 Mitarbeitende, alle mit PC und Notebook, Einschichtbetrieb. Wie viele CALs braucht sie mindestens?",a:35,unit:"CALs",e:"35 User-CALs (statt 70 Device-CALs)."},
{t:"open",q:"Eine Werbeagentur stellt eine Videografin ein. Beschreiben Sie eine geeignete Hardwareausstattung mit drei Komponenten und begründen Sie diese. (6 Punkte)",p:6,a:"Je Komponente 1 + Begründung 1, z. B.: leistungsstarke Mehrkern-CPU (Rendering/Encoding ist rechenintensiv); 32–64 GB RAM (große Projekte/Timeline im Speicher); dedizierte GPU (Hardwarebeschleunigung bei Schnitt/Effekten); schnelle NVMe-SSD mit großer Kapazität (große Videodateien, hohe Datenraten); farbkalibrierbarer 4K-IPS-Monitor (farbverbindliches Arbeiten, Detaildarstellung)."},
{t:"open",q:"Ein Kunde mit 25 Notebooks im Außendienst nutzt Windows 11 Home. Erläutern Sie zwei Probleme und empfehlen Sie eine Lösung. (4 Punkte)",p:4,a:"Probleme (je 1): Home kann keiner Domäne/Entra ID beitreten → keine zentrale Verwaltung/GPO/Intune; kein BitLocker → bei Diebstahl/Verlust sind Daten ungeschützt (DSGVO-Risiko); kein RDP-Host für Fernwartung. Lösung (2): Upgrade auf Windows 11 Pro (bzw. Business), Einbindung in Entra ID/Intune, BitLocker mit TPM aktivieren."},
{t:"open",q:"Erläutern Sie den Unterschied zwischen User-CAL und Device-CAL und nennen Sie je ein passendes Szenario. (4 Punkte)",p:4,a:"User-CAL: lizenziert eine Person für den Serverzugriff von beliebig vielen Geräten (1) – z. B. Außendienstmitarbeitende mit Notebook, Smartphone und Büro-PC (1). Device-CAL: lizenziert ein Gerät, von dem beliebig viele Personen zugreifen dürfen (1) – z. B. Schichtbetrieb, in dem mehrere Mitarbeitende denselben PC nutzen (1)."},
{t:"open",q:"Ein kleines Unternehmen (15 Mitarbeitende, keine eigene IT) überlegt, Mail- und Dateiserver in die Cloud (SaaS) zu verlagern. Nennen Sie zwei Vorteile und zwei Punkte, die vorher geklärt werden müssen. (4 Punkte)",p:4,a:"Vorteile (je 1): keine eigene Serverhardware/Wartung nötig; Anbieter kümmert sich um Updates, Verfügbarkeit, Backup der Infrastruktur; ortsunabhängiger Zugriff; skalierbar, planbare monatliche Kosten. Zu klären (je 1): Datenschutz – Serverstandort EU, AV-Vertrag nach Art. 28 DSGVO; ausreichende und ausfallsichere Internetanbindung; Migrationsaufwand/Schulung; Kosten über die Laufzeit; Exit-Strategie/Vendor-Lock-in; eigenes Backup der Daten."}
]
});
