const CASES = [
{id:"steuer", icon:"🧾", title:"Steuerkanzlei Brandt & Partner", tags:["Hardware","OS","Lizenz","Datenschutz"],
 sit:"Kanzlei mit 14 Mitarbeitenden in Hamburg. Alle arbeiten an festen Büroarbeitsplätzen mit DATEV (Windows-Fachsoftware), Office und E-Mail. Mandantendaten sind hochsensibel (Berufsgeheimnis). Es gibt einen lokalen Server mit Active Directory. Die alten PCs laufen noch mit Windows 10.",
 steps:[
 {t:"sc",q:"Welche Windows-Edition wählen Sie für die neuen Arbeitsplatz-PCs?",o:["Windows 11 Home","Windows 11 Pro","Windows 11 Enterprise LTSC","Linux Mint"],a:1,e:"Pro: Domänenbeitritt ins vorhandene AD, BitLocker, GPO – und DATEV verlangt Windows."},
 {t:"sc",q:"Warum ist der Weiterbetrieb der Windows-10-PCs problematisch?",o:["Windows 10 läuft nicht mit DATEV","Seit 14.10.2025 gibt es keine regulären Sicherheitsupdates mehr – Verstoß gegen „Stand der Technik“ (Art. 32 DSGVO)","Windows 10 kann kein Office","Kein Problem"],a:1,e:"Gerade bei Berufsgeheimnisträgern ist ein ungepatchtes OS nicht vertretbar."},
 {t:"sc",q:"Welche Hardware passt für die Sachbearbeitung?",o:["Gaming-PC mit RGB","Business-Desktop/Mini-PC: 16 GB RAM, SSD, TPM 2.0, zwei 24″-Monitore","Thin Client ohne Server","Rugged-Tablet"],a:1,e:"Zwei Monitore sind für Belege + Software sehr produktiv; TPM für BitLocker/Windows 11."},
 {t:"sc",q:"Die 14 Mitarbeitenden greifen nur von ihrem einen PC auf den Windows Server zu. Welche CALs?",o:["14 User- oder 14 Device-CALs (gleich viele) – User-CALs sind flexibler, falls später Notebooks dazukommen","28 Device-CALs","Keine, da AD kostenlos ist","Nur RDS-CALs"],a:0,e:"Je Person ein Gerät → Anzahl gleich; User-CAL zukunftssicherer."},
 {t:"open",q:"Nennen Sie drei technische Maßnahmen zum Schutz der Mandantendaten auf den Arbeitsplätzen. (3 Punkte)",p:3,a:"Je 1: BitLocker-Festplattenverschlüsselung mit TPM; keine lokalen Adminrechte; automatische Bildschirmsperre; MFA/Windows Hello for Business; aktueller Virenschutz/EDR und Updates; USB-Massenspeicher sperren; verschlüsselte Übertragung (TLS/VPN); Berechtigungskonzept auf Freigaben."}
 ]},
{id:"vertrieb", icon:"🚗", title:"Außendienst der Nordtech GmbH", tags:["Hardware","Cloud","Sicherheit"],
 sit:"20 Vertriebsmitarbeitende sind 4 Tage pro Woche bei Kunden unterwegs (Auto, Bahn, Hotel). Sie präsentieren beim Kunden, erfassen Aufträge im cloudbasierten CRM und arbeiten 1 Tag im Büro an wechselnden Plätzen (Desk-Sharing). Die Firma nutzt Microsoft 365 und Entra ID, aber kein lokales AD.",
 steps:[
 {t:"sc",q:"Welches Endgerät empfehlen Sie?",o:["Desktop-PC","Leichtes 14″-Business-Notebook mit SSD, langem Akku, LTE/5G-Modul und Windows Hello","17″-Gaming-Notebook","Thin Client"],a:1,e:"Mobil, robust, schnell online, sichere Anmeldung."},
 {t:"sc",q:"Wie werden die Geräte am besten verwaltet und ausgerollt?",o:["Manuell mit USB-Stick bei jedem Gerät","Entra ID Join + Intune, Bereitstellung per Windows Autopilot","Gruppenrichtlinien über lokalen Domänencontroller","Gar nicht"],a:1,e:"Kein lokales AD vorhanden → cloudbasierte Verwaltung, Geräte können direkt an Mitarbeitende geliefert werden."},
 {t:"sc",q:"Welcher Microsoft-365-Plan deckt Office-Apps UND die Geräteverwaltung ab?",o:["Business Basic","Business Standard","Business Premium","Office LTSC 2024"],a:2,e:"Premium enthält Intune, Entra ID P1 und Autopilot."},
 {t:"sc",q:"Was brauchen die Desk-Sharing-Plätze im Büro?",o:["Je einen eigenen Desktop-PC","USB-C/Thunderbolt-Dockingstation mit Monitor, Tastatur, Maus und LAN","Nur eine Steckdose","Einen Drucker pro Platz"],a:1,e:"Ein Kabel – sofort arbeitsfähig, Notebook lädt per Power Delivery."},
 {t:"open",q:"Ein Notebook wird im Zug gestohlen. Beschreiben Sie zwei Maßnahmen, die vorab dafür sorgen, dass keine Daten abfließen, und eine Maßnahme nach dem Diebstahl. (3 Punkte)",p:3,a:"Vorab (je 1): BitLocker-Verschlüsselung mit TPM (+ PIN); starke Anmeldung mit Windows Hello/MFA; keine lokale Datenhaltung (OneDrive/SharePoint); Bildschirmsperre. Danach (1): Gerät per Intune sperren/remote löschen, Benutzerkonto-Sitzungen widerrufen und Passwort zurücksetzen, Vorfall dokumentieren und ggf. Datenschutzpanne prüfen (72 h)."}
 ]},
{id:"agentur", icon:"🎬", title:"Kreativagentur Pixelwerk", tags:["Hardware","Lizenz","Ergonomie"],
 sit:"Agentur mit 6 Designer:innen (Bildbearbeitung, Layout, 4K-Videoschnitt), 2 Projektmanager:innen (Office, Kundenkontakt) und 1 Werkstudent. Große Projektdateien liegen auf einem NAS. Die Designer nutzen die Adobe Creative Cloud.",
 steps:[
 {t:"sc",q:"Welcher Monitor ist für die Designer:innen entscheidend?",o:["Günstiger TN-Monitor","Kalibrierbarer IPS-Monitor mit hoher Farbraumabdeckung, 27–32″, 4K","Monitor mit 240 Hz","Touchmonitor"],a:1,e:"Farbverbindliches Arbeiten und Detaildarstellung."},
 {t:"mc",q:"Welche Komponenten sind für den 4K-Videoschnitt besonders wichtig? (mehrere)",o:["Viel RAM (32–64 GB)","Dedizierte Grafikkarte","Schnelle NVMe-SSD","Diskettenlaufwerk"],a:[0,1,2],e:""},
 {t:"sc",q:"Die Adobe Creative Cloud wird pro Person im Abo lizenziert. Welches Modell ist das?",o:["OEM","Named-User-Subscription","Device-CAL","Freeware"],a:1,e:"Benannter Benutzer, monatliche/jährliche Abo-Gebühr."},
 {t:"sc",q:"Welche Netzwerkanbindung empfehlen Sie für die Arbeitsplätze, die große Videodateien vom NAS bearbeiten?",o:["WLAN 2,4 GHz","Kabelgebunden mit mindestens 2,5- oder 10-Gbit-Ethernet (Cat 6A) zum NAS","Powerline","Bluetooth"],a:1,e:"Hohe, konstante Datenrate, Vollduplex, störungsfrei."},
 {t:"open",q:"Für die Projektmanager:innen genügen Standard-Büro-PCs. Begründen Sie, warum keine Grafik-Workstations angeschafft werden sollten. (2 Punkte)",p:2,a:"Ihre Aufgaben (Office, Mail, Kundenkontakt) benötigen keine hohe Rechen-/Grafikleistung (1); Workstations wären unwirtschaftlich – höhere Anschaffungs- und Stromkosten ohne Nutzen (1)."}
 ]},
{id:"lager", icon:"📦", title:"Logistikzentrum Elbport", tags:["Hardware","Lizenz","Netzwerk"],
 sit:"Ein Lager arbeitet im 3-Schicht-Betrieb. Pro Schicht erfassen 20 Lagerarbeiter Wareneingänge und Kommissionierungen mit mobilen Geräten direkt im ERP-System. Im Lager ist es staubig, im Kühlbereich −20 °C. Zusätzlich gibt es 8 Leitstand-PCs, an denen pro Schicht wechselnde Personen arbeiten.",
 steps:[
 {t:"sc",q:"Welche mobilen Geräte sind geeignet?",o:["Consumer-Smartphones","Rugged-Handhelds mit integriertem Barcodescanner, IP65+, Kälteeignung und Wechselakku","Notebooks","Thin Clients"],a:1,e:"Robust, scannen direkt, Akku tauschbar für 24/7."},
 {t:"sc",q:"Wie viele Windows-Server-CALs braucht man für die 8 Leitstand-PCs am sinnvollsten?",o:["24 User-CALs","8 Device-CALs","1 CAL","48 User-CALs"],a:1,e:"Mehrere Personen pro Gerät → Device-CAL."},
 {t:"sc",q:"Welche Netzinfrastruktur braucht die Halle für die Handhelds?",o:["Ein einzelner WLAN-Router","Flächendeckende Ausleuchtung mit mehreren Access Points (zentral per Controller verwaltet), per PoE versorgt","Nur LAN-Dosen","Bluetooth-Mesh"],a:1,e:"Roaming zwischen APs, PoE spart Stromleitungen an der Decke."},
 {t:"sc",q:"Wie werden die WLAN-Zugänge der Handhelds am sichersten authentifiziert?",o:["Offenes WLAN","WPA2/WPA3-Enterprise mit 802.1X und Gerätezertifikaten","WEP","WPS-Knopf"],a:1,e:"Einzelne Geräte sperrbar, kein gemeinsames Passwort."},
 {t:"open",q:"Begründen Sie, warum für die Handhelds ein Wechselakku (Hot-Swap) wichtig ist. (2 Punkte)",p:2,a:"Im 3-Schicht-Betrieb laufen die Geräte nahezu rund um die Uhr (1); mit Wechselakku kann ohne Ausfallzeit/Neustart weitergearbeitet werden, statt das Gerät stundenlang zu laden (1)."}
 ]},
{id:"praxis", icon:"🩺", title:"Arztpraxis Dr. Yilmaz", tags:["Datenschutz","Hardware","Backup"],
 sit:"Hausarztpraxis mit 2 Ärztinnen und 5 MFA. Empfang mit Patientenkontakt, 3 Behandlungsräume, Praxisverwaltungssoftware auf einem lokalen Server. Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO. Die alte Server-Festplatte soll entsorgt werden.",
 steps:[
 {t:"sc",q:"Welcher Schutzbedarf (BSI) gilt für die Vertraulichkeit der Patientendaten?",o:["normal","hoch bis sehr hoch","keiner","nur Verfügbarkeit zählt"],a:1,e:"Gesundheitsdaten, Berufsgeheimnis – Offenlegung hätte erhebliche bis existenzielle Folgen."},
 {t:"sc",q:"Wie wird der Monitor am Empfang aufgestellt?",o:["Zum Wartebereich gedreht","So, dass Patient:innen ihn nicht einsehen können, ggf. mit Blickschutzfilter","Egal","Mit maximaler Helligkeit"],a:1,e:"Vertraulichkeit – keine Daten für Dritte sichtbar."},
 {t:"sc",q:"Wie wird die alte Server-HDD entsorgt?",o:["Formatieren und verkaufen","Physische Vernichtung nach DIN 66399, Schutzklasse 3, mind. Sicherheitsstufe H-5, mit Vernichtungsprotokoll","Restmüll","Werkseinstellungen"],a:1,e:"Sehr hoher Schutzbedarf → Schutzklasse 3."},
 {t:"sc",q:"Welche Backup-Strategie empfehlen Sie?",o:["Einmal im Jahr auf USB-Stick","Tägliche Sicherung nach 3-2-1-Regel, verschlüsselt, mit einer Offline-/Offsite-Kopie und regelmäßigem Restore-Test","Nur RAID-Spiegelung","Kein Backup, Daten liegen ja auf dem Server"],a:1,e:"Verfügbarkeit + Ransomware-Schutz; Spiegelung ersetzt kein Backup."},
 {t:"open",q:"Die Praxis möchte einen externen IT-Dienstleister mit Fernwartung beauftragen. Nennen Sie zwei datenschutzrechtliche Anforderungen. (2 Punkte)",p:2,a:"Je 1: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO (inkl. Verschwiegenheit/§ 203 StGB-Verpflichtung); Fernwartung nur nach Freigabe durch die Praxis, verschlüsselt und protokolliert; Zugriff auf das Nötigste beschränken; TOM des Dienstleisters prüfen."}
 ]},
{id:"schule", icon:"🏫", title:"Berufsschule – Computerraum", tags:["Lizenz","OS","Hardware"],
 sit:"Ein Computerraum mit 30 PCs wird von wechselnden Klassen genutzt (ca. 400 Schüler:innen pro Woche). Die Lehrkraft soll die Bildschirme der Schüler steuern können. Nach jeder Stunde sollen die PCs wieder im Ausgangszustand sein.",
 steps:[
 {t:"sc",q:"Welches Lizenzmodell ist für Software im Computerraum am günstigsten?",o:["User-basiert für 400 Schüler:innen","Gerätebasiert für 30 PCs","OEM pro Schüler","Einzelplatz pro Klasse"],a:1,e:"Viele Personen nutzen dieselben Geräte."},
 {t:"sc",q:"Welche Windows-Edition ist für Bildungseinrichtungen vorgesehen?",o:["Windows 11 Home","Windows 11 Education","Windows 11 IoT","Windows Server Essentials"],a:1,e:"Enterprise-Funktionen zu Bildungskonditionen."},
 {t:"sc",q:"Wie erreichen Sie den Ausgangszustand nach jeder Stunde?",o:["Manuell jeden PC aufräumen","Wächterkarte/Reset-Software bzw. nicht-persistente VDI-Desktops oder Re-Imaging","Neuinstallation von Hand","Gar nicht"],a:1,e:"Änderungen werden beim Neustart verworfen."},
 {t:"open",q:"Nennen Sie zwei Vorteile, wenn die 30 Arbeitsplätze als Thin Clients mit VDI realisiert werden. (2 Punkte)",p:2,a:"Je 1: zentrale Verwaltung/Updates an einer Stelle; einheitlicher, schnell zurücksetzbarer Desktop; günstige, langlebige und stromsparende Endgeräte; keine Daten lokal → mehr Sicherheit; einfacher Austausch defekter Geräte."}
 ]},
{id:"start", icon:"🚀", title:"Start-up „GreenRoute“", tags:["Cloud","Lizenz","Wirtschaft"],
 sit:"Ein Start-up mit 9 Mitarbeitenden (Entwicklung und Vertrieb) wächst schnell – in einem Jahr sollen es 40 sein. Keine eigene IT-Abteilung, keine eigenen Serverräume, geringe Startinvestitionen gewünscht. Viele arbeiten remote.",
 steps:[
 {t:"sc",q:"Welche Infrastruktur passt am besten?",o:["Eigenes Rechenzentrum","Cloud-first: SaaS für Office/Kommunikation, IaaS/PaaS für die eigene Anwendung","Server unter dem Schreibtisch","Großrechner"],a:1,e:"Skalierbar, keine Investitionen, kein eigener Betrieb nötig."},
 {t:"sc",q:"Wie sollten Lizenzen für Office/Kommunikation beschafft werden?",o:["Kauflizenzen für 40 Personen jetzt","Monatlich anpassbares Abo pro Benutzer","OEM","Floating-Lizenzen"],a:1,e:"Mitwachsen ohne Vorleistung."},
 {t:"sc",q:"Die Entwickler:innen brauchen Docker und lokale VMs. Welche Ausstattung?",o:["Windows 11 Home, 8 GB RAM","Windows 11 Pro oder Linux, 32 GB RAM, schnelle NVMe-SSD","Chromebook","Thin Client"],a:1,e:"Hyper-V/WSL2 bzw. native Container brauchen Pro/Linux und viel RAM."},
 {t:"open",q:"Nennen Sie zwei Risiken der Cloud-Strategie und je eine Gegenmaßnahme. (4 Punkte)",p:4,a:"Z. B.: Abhängigkeit vom Anbieter/Vendor-Lock-in (1) → offene Standards, Exportmöglichkeiten, Exit-Plan (1). Datenschutz/Drittlandtransfer (1) → EU-Rechenzentrum, AV-Vertrag, Verschlüsselung (1). Ausfall der Internetverbindung (1) → redundante Anbindung, Offline-Fähigkeit (1). Steigende laufende Kosten (1) → Kostenmonitoring/Budgets (1)."}
 ]},
{id:"homeoffice", icon:"🏠", title:"Versicherungsagentur – Homeoffice", tags:["Netzwerk","Sicherheit","Hardware"],
 sit:"8 Mitarbeitende einer Versicherungsagentur sollen dauerhaft zwei Tage pro Woche im Homeoffice arbeiten. Sie greifen auf ein Fachprogramm und Netzlaufwerke im Büro zu (Windows Server, lokales AD). Kundendaten sind vertraulich.",
 steps:[
 {t:"sc",q:"Wie erfolgt der Zugriff auf die Ressourcen im Büro sicher?",o:["RDP-Port 3389 im Router freigeben","Client-to-Site-VPN mit MFA","Netzlaufwerke per FTP freigeben","Daten per E-Mail schicken"],a:1,e:"Verschlüsselter Tunnel, RDP niemals direkt ins Internet."},
 {t:"mc",q:"Welche Ausstattung braucht ein ergonomischer Homeoffice-Arbeitsplatz? (mehrere)",o:["Notebook mit Docking oder externer Monitor","Headset für Telefonate","Separate Tastatur und Maus","Gaming-Stuhl ist Pflicht"],a:[0,1,2],e:""},
 {t:"sc",q:"Das private WLAN der Mitarbeitenden ist mit WEP gesichert. Was empfehlen Sie?",o:["Passt schon","Umstellung auf WPA2/WPA3 mit starker Passphrase; Firmennotebook zusätzlich nur per VPN","WLAN abschalten und Bluetooth nutzen","SSID verstecken reicht"],a:1,e:"WEP ist gebrochen."},
 {t:"open",q:"Nennen Sie zwei organisatorische Regelungen für das Homeoffice. (2 Punkte)",p:2,a:"Je 1: Homeoffice-/IT-Sicherheitsrichtlinie (z. B. keine Privatnutzung, Bildschirmsperre, keine Familienmitglieder am Gerät); Clean Desk/keine Ausdrucke offen liegen lassen; Vorgaben zur Vernichtung von Papier; Meldeweg bei Sicherheitsvorfällen; Arbeitszeit-/Erreichbarkeitsregelung; Datenschutzschulung."}
 ]},
{id:"server", icon:"🗄️", title:"Mittelständler Hansa Metall – Servererneuerung", tags:["Lizenz","Virtualisierung","Wirtschaft"],
 sit:"Ein Unternehmen mit 70 Mitarbeitenden (davon 45 Büro mit PC und Smartphone, 25 Produktion im 2-Schicht-Betrieb an 12 gemeinsamen Terminals) ersetzt seine Server. Geplant ist ein Hyper-V-Host mit 2 CPUs à 10 Kernen, auf dem 6 Windows-Server-VMs laufen (DC, Datei, ERP, Druck, Backup, Web).",
 steps:[
 {t:"num",q:"Wie viele Windows-Server-Kernlizenzen braucht der Host mindestens für EINE Lizenzierung?",a:20,unit:"Kerne",e:"2 × 10 = 20 physische Kerne (über Minimum 16)."},
 {t:"sc",q:"Mit Standard-Edition darf man pro vollständig lizenziertem Host 2 VMs betreiben. Wie oft müssen die 20 Kerne für 6 VMs lizenziert werden?",o:["1-mal","2-mal","3-mal","6-mal"],a:2,e:"6 VMs ÷ 2 = 3-mal alle Kerne (Stacking) → 60 Kernlizenzen Standard. Ab etwa 10–12 VMs wird Datacenter günstiger."},
 {t:"num",q:"Wie viele CALs braucht man bei optimaler Wahl (User-CALs fürs Büro, Device-CALs für die Terminals)?",a:57,unit:"CALs",e:"45 User-CALs + 12 Device-CALs = 57."},
 {t:"sc",q:"Warum werden für die Produktion Device-CALs gewählt?",o:["Sie sind immer billiger","25 Personen teilen sich 12 Terminals – pro Gerät lizenzieren spart Lizenzen","Produktion braucht keine Lizenzen","Wegen des Datenschutzes"],a:1,e:""},
 {t:"open",q:"Nennen Sie zwei Vorteile der Virtualisierung der 6 Server auf einem Host und ein Risiko mit Gegenmaßnahme. (3 Punkte)",p:3,a:"Vorteile (je 1): weniger Hardware, Platz und Strom; bessere Auslastung; Snapshots und schnelle Wiederherstellung; schnelle Bereitstellung neuer Server. Risiko + Maßnahme (1): Host ist Single Point of Failure → zweiter Host/Cluster, Replikation, Wartungsvertrag, USV und Backup der VMs."}
 ]},
{id:"empfang", icon:"🛎️", title:"Hotel „Alsterblick“ – Rezeption & Gäste-WLAN", tags:["Netzwerk","Hardware","Sicherheit"],
 sit:"Ein Hotel benötigt 2 Arbeitsplätze an der Rezeption (Hotelsoftware, Kartenterminal, wenig Platz), ein Selbstbedienungs-Terminal für den Check-in und ein Gäste-WLAN. Interne Systeme müssen vom Gästenetz strikt getrennt sein.",
 steps:[
 {t:"sc",q:"Welche Hardware ist an der Rezeption sinnvoll?",o:["Große Tower-PCs","Platzsparende Mini-PCs bzw. All-in-One mit Touch, VESA-Montage","Gaming-Notebooks","Server"],a:1,e:"Wenig Platz, Kundenkontakt, aufgeräumt."},
 {t:"sc",q:"Wie wird das Check-in-Terminal abgesichert?",o:["Normales Benutzerkonto mit Desktop","Kioskmodus (Assigned Access) – nur die Check-in-App, kein Zugriff auf das System","Admin-Konto für Gäste","Ohne Passwort am Domänenkonto"],a:1,e:""},
 {t:"sc",q:"Wie trennen Sie Gäste-WLAN und internes Netz?",o:["Unterschiedliche SSIDs reichen","Eigenes VLAN für Gäste mit Firewallregeln, die nur Internetzugang erlauben (Client-Isolation)","Gar nicht","Gleiches Netz, anderes Passwort"],a:1,e:"Logische Trennung + Filterung."},
 {t:"sc",q:"Das Selbstbedienungsterminal wird nach dem 28.06.2025 in Betrieb genommen. Welches Gesetz ist zu beachten?",o:["BFSG – Barrierefreiheitsstärkungsgesetz","ElektroG","ArbStättV","TKG"],a:0,e:"Selbstbedienungsterminals für Verbraucher fallen unter das BFSG."}
 ]},
{id:"verein", icon:"⚽", title:"Sportverein – kleines Budget", tags:["Lizenz","Open Source","Wirtschaft"],
 sit:"Ein gemeinnütziger Sportverein mit 3 ehrenamtlichen Vorstandsmitgliedern braucht 3 Notebooks für Mitgliederverwaltung, Schriftverkehr und Tabellen. Das Budget ist sehr knapp, IT-Kenntnisse sind gering.",
 steps:[
 {t:"sc",q:"Welche Office-Lösung ist am kostengünstigsten?",o:["Office LTSC für 3 Geräte","LibreOffice (Open Source) oder vergünstigte Nonprofit-Angebote","Microsoft 365 E5","Individualsoftware"],a:1,e:"Keine/geringe Lizenzkosten."},
 {t:"sc",q:"Welche Notebooks sind sinnvoll?",o:["High-End-Workstations","Generalüberholte (refurbished) Business-Notebooks mit SSD und Windows 11 Pro","Neue Gaming-Notebooks","Thin Clients"],a:1,e:"Günstig, robust, nachhaltig (Green IT)."},
 {t:"sc",q:"Die Mitgliederdaten sind personenbezogen. Was ist trotz knappen Budgets Pflicht?",o:["Nichts, Vereine sind ausgenommen","Angemessene TOM nach Art. 32 DSGVO, z. B. Verschlüsselung, Passwörter, Backup","Ein Rechenzentrum","Ein Datenschutzbeauftragter in jedem Fall"],a:1,e:"DSGVO gilt auch für Vereine; ein DSB ist erst ab 20 ständig Verarbeitenden Pflicht."},
 {t:"open",q:"Nennen Sie je einen Vor- und Nachteil von Open-Source-Software für den Verein. (2 Punkte)",p:2,a:"Vorteil (1): keine Lizenzkosten, offene Formate, keine Abo-Bindung. Nachteil (1): kein Herstellersupport/Hilfe von Community, Kompatibilitätsprobleme mit .docx/.xlsx, Einarbeitung nötig."}
 ]},
{id:"barriere", icon:"♿", title:"Inklusiver Arbeitsplatz bei der Stadtwerke AG", tags:["Barrierefreiheit","Hardware","Software"],
 sit:"Ein neuer Mitarbeiter in der Buchhaltung ist stark sehbehindert (Restsehvermögen ca. 10 %), eine Kollegin hat nach einem Unfall nur eine funktionsfähige Hand. Beide arbeiten mit ERP und Office.",
 steps:[
 {t:"mc",q:"Welche Hilfsmittel unterstützen den sehbehinderten Mitarbeiter? (mehrere)",o:["Großer Monitor bzw. zweiter Monitor","Vergrößerungssoftware/Bildschirmlupe","Hochkontrast-Einstellungen und Screenreader","Gaming-Maus"],a:[0,1,2],e:""},
 {t:"sc",q:"Was hilft der Kollegin mit einer funktionsfähigen Hand am meisten?",o:["Einhandtastatur und Spracheingabe (Mikrofon/Headset)","Größerer Monitor","Braillezeile","Zweiter Drucker"],a:0,e:""},
 {t:"sc",q:"Welche Anforderung muss die ERP-Software erfüllen?",o:["Möglichst bunte Oberfläche","Vollständige Tastaturbedienung und Kompatibilität mit Screenreadern (WCAG/EN 301 549)","Nur Mausbedienung","Animationen"],a:1,e:""},
 {t:"open",q:"Wer kann den Arbeitgeber bei der Finanzierung der Hilfsmittel unterstützen? Nennen Sie eine Stelle. (1 Punkt)",p:1,a:"Integrations-/Inklusionsamt, Agentur für Arbeit oder Rentenversicherung bzw. Berufsgenossenschaft (je nach Zuständigkeit)."}
 ]},
{id:"filiale", icon:"🏪", title:"Optiker Klarblick – neue Filiale anbinden", tags:["WAN","Netzwerk","Sicherheit"],
 sit:"Eine Optikerkette eröffnet in Lüneburg ihre dritte Filiale (5 Mitarbeitende). Kasse, Warenwirtschaft und Terminbuchung laufen über einen Server in der Hamburger Zentrale, Mails über Microsoft 365. In der Filiale gibt es 4 PCs, ein Kartenterminal, einen Drucker und ein Gäste-WLAN. Am Standort sind Glasfaser (FTTH) und LTE/5G verfügbar.",
 steps:[
 {t:"sc",q:"Welche Internetanbindung empfehlen Sie?",o:["Privater Kabelanschluss ohne Vertrag","Business-Glasfaseranschluss (FTTH) mit SLA plus 5G-Router als Backup mit Failover","Nur das Smartphone als Hotspot","Satellit"],a:1,e:"Ohne Verbindung zur Zentrale kann die Filiale nicht kassieren – Ausfallsicherheit und schnelle Entstörung sind entscheidend."},
 {t:"sc",q:"Wie wird die Filiale sicher mit dem Server der Zentrale verbunden?",o:["Portfreigabe für den Server im Internet","Site-to-Site-VPN (IPsec/WireGuard) zwischen den Firewalls","FTP","Gar nicht – Daten per USB-Stick"],a:1,e:""},
 {t:"sc",q:"Welches Netz liegt in der Filiale vor, welches zwischen Filiale und Zentrale?",o:["WAN / LAN","LAN / WAN (über das Internet)","PAN / MAN","MAN / PAN"],a:1,e:""},
 {t:"sc",q:"Wie trennen Sie Gäste-WLAN, Kassensystem und Büro-PCs in der Filiale?",o:["Gar nicht","Eigene VLANs mit Firewallregeln; Gäste nur ins Internet","Unterschiedliche WLAN-Passwörter im selben Netz","Separate Steckdosen"],a:1,e:""},
 {t:"open",q:"Begründen Sie, warum hier ein symmetrischer Anschluss bzw. ausreichender Upstream wichtig ist. (2 Punkte)",p:2,a:"Die Filiale sendet laufend Daten an die Zentrale (Kassenbuchungen, Warenwirtschaft, Terminbuchungen, ggf. Scans/Uploads) – das ist Upstream (1). Bei zu geringem Upload werden VPN-Verbindung und Anwendungen langsam; außerdem profitieren Videokonferenzen und Cloud-Dienste (M365) von hohem Upload (1)."}
 ]}
];
