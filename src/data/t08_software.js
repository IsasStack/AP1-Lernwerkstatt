T.push({
id:"software", title:"Betriebssysteme & Software", icon:"💿", area:"Technik", weight:3,
summary:"BIOS/UEFI, Partitionierung, Dateisysteme, OS-Installation, Softwarearten, Kommandozeile.",
lesson:`
<h3>Firmware: BIOS vs. UEFI</h3>
<table><tr><th></th><th>BIOS (Legacy)</th><th>UEFI</th></tr>
<tr><td>Partitionsschema</td><td>MBR</td><td>GPT</td></tr>
<tr><td>Max. Bootlaufwerk</td><td>2 TiB</td><td>praktisch unbegrenzt (bis 9,4 ZB)</td></tr>
<tr><td>Partitionen</td><td>4 primäre (oder 3 + erweiterte)</td><td>128 (unter Windows)</td></tr>
<tr><td>Sicherheit</td><td>–</td><td><b>Secure Boot</b> (nur signierte Bootloader), TPM-Unterstützung</td></tr>
<tr><td>Bedienung</td><td>textbasiert</td><td>grafisch, Maus, Netzwerkfunktionen</td></tr></table>
<p><b>Windows 11</b> verlangt UEFI mit Secure Boot und <b>TPM 2.0</b> (Trusted Platform Module: Chip, der Schlüssel sicher speichert, z. B. für BitLocker und Windows Hello). POST = Power-On Self-Test beim Start.</p>
<h3>Partitionierung & Formatierung</h3>
<p><b>Partitionieren</b> = Datenträger in logische Bereiche aufteilen. <b>Formatieren</b> = Dateisystem anlegen. Schnellformatierung löscht nur die Verwaltungsstrukturen – Daten sind wiederherstellbar!</p>
<table><tr><th>Dateisystem</th><th>Einsatz</th><th>Merkmale</th></tr>
<tr><td>FAT32</td><td>USB-Sticks, kompatibel überall</td><td>max. Dateigröße <b>4 GiB</b>, keine Rechte</td></tr>
<tr><td>exFAT</td><td>große USB-Sticks/SD-Karten</td><td>große Dateien, plattformübergreifend, keine Rechte/Journal</td></tr>
<tr><td>NTFS</td><td>Windows-Systempartition</td><td>Rechte (ACL), Journaling, Verschlüsselung (EFS), Kompression, Quotas</td></tr>
<tr><td>ReFS</td><td>Windows Server</td><td>Integritätsprüfung, große Volumes</td></tr>
<tr><td>ext4 / Btrfs / XFS</td><td>Linux</td><td>Journaling, Unix-Rechte</td></tr>
<tr><td>APFS</td><td>macOS</td><td>Snapshots, Verschlüsselung</td></tr></table>
<p><b>Journaling</b>: Änderungen werden protokolliert, bevor sie ausgeführt werden → nach Absturz schnell konsistent.</p>
<h3>Betriebssystem einrichten (Ablauf)</h3>
<ol><li>Hardwareanforderungen prüfen, Firmware-Update, UEFI-Einstellungen (Secure Boot, TPM, Bootreihenfolge).</li>
<li>Installation: manuell vom USB-Stick, <b>Image</b> (geklontes Systemabbild), Netzwerkinstallation (PXE/WDS) oder <b>Windows Autopilot</b> (cloudbasiert über Intune).</li>
<li>Treiber, Updates, Anwendungen, Sprachpakete.</li>
<li>Netzwerk: IP per DHCP oder statisch, Domänenbeitritt / Entra Join.</li>
<li>Härtung: Admin-Rechte entziehen, Firewall, Virenschutz, BitLocker, unnötige Dienste deaktivieren.</li>
<li>Test & Dokumentation (Inventarnummer, Seriennummer, Konfiguration), Übergabe an Nutzer.</li></ol>
<p><b>Installationsarten</b>: Neuinstallation (clean), Upgrade (Daten bleiben), unbeaufsichtigte Installation (Antwortdatei unattend.xml), Imaging (identische Systeme schnell verteilen), Softwareverteilung (Intune, SCCM, winget).</p>
<h3>Softwarearten</h3>
<ul><li><b>Systemsoftware</b> (Betriebssystem, Treiber, Firmware) vs. <b>Anwendungssoftware</b> (Office, ERP, Browser).</li>
<li><b>Standardsoftware</b> (für viele Kunden, günstig, sofort verfügbar, getestet – aber evtl. nicht passgenau) vs. <b>Individualsoftware</b> (maßgeschneidert, passgenau, Wettbewerbsvorteil – aber teuer, lange Entwicklungszeit, Abhängigkeit vom Entwickler).</li>
<li><b>Branchensoftware</b>: für eine Branche angepasste Standardsoftware (z. B. Arztpraxis-, Kanzleisoftware).</li>
<li><b>Open Source vs. proprietär</b>: siehe Lizenzen. Open Source: keine Lizenzkosten, anpassbar, Community – aber Support evtl. kostenpflichtig, Know-how nötig.</li>
<li>Auswahlkriterien: Funktionsumfang, Kompatibilität/<b>Interoperabilität</b>, Schnittstellen (API), Anpassbarkeit, Wartbarkeit, Ergonomie, Kosten/Lizenzmodell, Support, Datenschutz (Serverstandort).</li></ul>
<h3>Kommandozeile – wichtige Befehle</h3>
<table><tr><th>Zweck</th><th>Windows (CMD/PowerShell)</th><th>Linux</th></tr>
<tr><td>Verzeichnis anzeigen</td><td>dir / Get-ChildItem</td><td>ls -l</td></tr>
<tr><td>Verzeichnis wechseln / erstellen</td><td>cd / mkdir</td><td>cd / mkdir</td></tr>
<tr><td>Datei kopieren / verschieben / löschen</td><td>copy / move / del</td><td>cp / mv / rm</td></tr>
<tr><td>IP-Konfiguration</td><td>ipconfig /all</td><td>ip a (iproute2), alt: ifconfig</td></tr>
<tr><td>Erreichbarkeit</td><td>ping</td><td>ping</td></tr>
<tr><td>Route verfolgen</td><td>tracert</td><td>traceroute</td></tr>
<tr><td>DNS abfragen</td><td>nslookup</td><td>nslookup, dig</td></tr>
<tr><td>ARP-Tabelle</td><td>arp -a</td><td>ip neigh / arp</td></tr>
<tr><td>Offene Verbindungen</td><td>netstat -an</td><td>ss -tulpn</td></tr>
<tr><td>DHCP erneuern</td><td>ipconfig /release, /renew</td><td>dhclient</td></tr>
<tr><td>DNS-Cache leeren</td><td>ipconfig /flushdns</td><td>resolvectl flush-caches</td></tr>
<tr><td>Rechte ändern</td><td>icacls</td><td>chmod, chown</td></tr>
<tr><td>Gruppenrichtlinien anwenden</td><td>gpupdate /force</td><td>–</td></tr>
<tr><td>Aliasse</td><td>Set-Alias</td><td>alias ll='ls -l'</td></tr></table>
<h3>Linux-Rechte mit chmod</h3>
<p>Drei Gruppen: <b>u</b>ser (Besitzer), <b>g</b>roup, <b>o</b>thers. Rechte: r = 4, w = 2, x = 1.</p>
<div class="merke"><code>chmod 754 skript.sh</code> → Besitzer 7 = rwx, Gruppe 5 = r-x, Andere 4 = r--.<br><code>ls -l</code> zeigt z. B. <code>-rwxr-x---</code> = 750.</div>`,
cards:[
["UEFI – Vorteile gegenüber BIOS","GPT (große Platten, viele Partitionen), Secure Boot, grafische Oberfläche, schnellerer Start."],
["Secure Boot","UEFI-Funktion, die nur signierte Bootloader/Betriebssysteme startet – schützt vor Bootkits."],
["TPM 2.0","Sicherheitschip zur geschützten Speicherung von Schlüsseln; Voraussetzung für Windows 11, genutzt von BitLocker und Windows Hello."],
["MBR – Grenzen","Max. 2 TiB Bootlaufwerk, max. 4 primäre Partitionen."],
["FAT32 – Einschränkung","Maximale Dateigröße 4 GiB, keine Zugriffsrechte."],
["NTFS – Merkmale","Zugriffsrechte (ACL), Journaling, EFS-Verschlüsselung, Kompression, Quotas."],
["exFAT – Einsatz","Große USB-Sticks/SD-Karten, Dateien > 4 GiB, Windows/macOS-kompatibel."],
["Journaling","Änderungen werden vor Ausführung protokolliert → schnelle Wiederherstellung der Konsistenz nach Absturz."],
["Partitionieren vs. Formatieren","Partitionieren: Bereiche anlegen. Formatieren: Dateisystem einrichten."],
["Imaging","Verteilung eines vorkonfigurierten Systemabbilds auf viele gleiche Rechner."],
["Windows Autopilot","Cloudbasierte Bereitstellung neuer Geräte über Microsoft Intune/Entra ID – ohne Imaging."],
["Standard- vs. Individualsoftware","Standard: günstig, sofort verfügbar, getestet, aber nicht passgenau. Individual: passgenau, aber teuer und zeitaufwendig."],
["Interoperabilität","Fähigkeit unterschiedlicher Systeme, über Schnittstellen zusammenzuarbeiten und Daten auszutauschen."],
["chmod 640","Besitzer rw-, Gruppe r--, Andere ---."],
["Linux-Rechtewerte","r = 4, w = 2, x = 1; Reihenfolge Besitzer, Gruppe, Andere."],
["ipconfig /all","Zeigt komplette IP-Konfiguration inkl. MAC, DHCP-Server, DNS-Server, Lease."],
["tracert / traceroute","Zeigt alle Router (Hops) auf dem Weg zum Ziel."],
["nslookup","Fragt einen DNS-Server nach der Auflösung von Namen/IP ab."],
["gpupdate /force","Erzwingt sofortige Aktualisierung der Gruppenrichtlinien auf einem Windows-Client."],
["Linux: aktuelle IP-Adressen anzeigen","ip a (Paket iproute2), veraltet ifconfig."]
],
qs:[
{t:"sc",q:"Ein 4-TB-Laufwerk soll als Bootlaufwerk komplett nutzbar sein. Welches Partitionsschema?",o:["MBR","GPT","FAT32","NTFS"],a:1,e:"MBR ist auf 2 TiB begrenzt; GPT (mit UEFI) nicht."},
{t:"sc",q:"Eine 6-GB-Videodatei lässt sich nicht auf einen USB-Stick kopieren, obwohl 30 GB frei sind. Wahrscheinlichste Ursache?",o:["Stick ist mit FAT32 formatiert","Stick ist mit NTFS formatiert","USB 2.0","Secure Boot aktiv"],a:0,e:"FAT32 erlaubt max. 4 GiB pro Datei → exFAT/NTFS verwenden."},
{t:"sc",q:"Welche Voraussetzung gilt für Windows 11?",o:["BIOS mit MBR","TPM 2.0 und Secure Boot","Mindestens 64 GB RAM","FAT32-Systempartition"],a:1,e:"Windows 11 verlangt UEFI, Secure Boot und TPM 2.0."},
{t:"sc",q:"Welcher Befehl zeigt unter Windows die vollständige IP-Konfiguration inkl. DNS-Server an?",o:["ping","ipconfig /all","tracert","arp -a"],a:1,e:""},
{t:"sc",q:"Welche Rechte ergeben sich aus chmod 750?",o:["rwxr-x---","rwxrwx---","rw-r-x---","rwxr--r--"],a:0,e:"7 = rwx, 5 = r-x, 0 = ---."},
{t:"num",q:"Welcher Zahlenwert in chmod entspricht rw-r--r--? (dreistellig)",a:644,unit:"",e:"rw- = 6, r-- = 4, r-- = 4."},
{t:"sc",q:"Welcher Linux-Befehl ersetzt das veraltete ifconfig?",o:["ip a","netsh","ipconfig","route print"],a:0,e:"ip aus dem Paket iproute2."},
{t:"sc",q:"Welches Dateisystem bietet unter Windows Zugriffsrechte und Journaling?",o:["FAT32","exFAT","NTFS","FAT16"],a:2,e:""},
{t:"mc",q:"Welche Nachteile hat Individualsoftware gegenüber Standardsoftware? (mehrere)",o:["Hohe Entwicklungskosten","Lange Entwicklungszeit","Exakt an Prozesse angepasst","Abhängigkeit vom Entwickler"],a:[0,1,3],e:"Passgenauigkeit ist ein Vorteil."},
{t:"sc",q:"Mit welchem Verfahren werden 50 identische PCs am schnellsten mit vorkonfiguriertem System versehen?",o:["Manuelle Installation vom USB-Stick","Imaging/Softwareverteilung","Upgrade-Installation","Neuinstallation mit Assistent"],a:1,e:"Ein Image wird einmal erstellt und verteilt."},
{t:"sc",q:"Welcher Befehl leert unter Windows den DNS-Cache?",o:["ipconfig /renew","ipconfig /flushdns","nslookup /clear","netstat -r"],a:1,e:""},
{t:"sc",q:"Was bewirkt eine Schnellformatierung?",o:["Daten werden sicher überschrieben","Nur Verwaltungsstrukturen werden neu angelegt – Daten sind wiederherstellbar","Die Festplatte wird partitioniert","Die SSD wird per Secure Erase gelöscht"],a:1,e:"Für sichere Löschung reicht Formatieren nicht."},
{t:"open",q:"Erläutern Sie zwei Vorteile von UEFI gegenüber dem klassischen BIOS. (4 Punkte)",p:4,a:"Z. B.: UEFI unterstützt GPT, dadurch Bootlaufwerke > 2 TiB und bis zu 128 Partitionen (2); Secure Boot startet nur signierte Bootloader und schützt so vor Bootkits/Rootkits (2); grafische Oberfläche mit Mausbedienung und Netzwerkfunktionen (2); schnellerer Systemstart (2)."},
{t:"open",q:"Nennen Sie vier Arbeitsschritte bei der Einrichtung eines neuen Windows-Arbeitsplatzes nach der OS-Installation. (4 Punkte)",p:4,a:"Je 1: Treiber und Updates installieren; Anwendungssoftware installieren; Netzwerk konfigurieren und in Domäne/Entra ID einbinden; Benutzerkonto und Rechte einrichten (keine Adminrechte); Sicherheit: Virenschutz, Firewall, BitLocker; Drucker/Netzlaufwerke verbinden; Funktionstest und Dokumentation/Inventarisierung; Einweisung des Nutzers."}
]
});
