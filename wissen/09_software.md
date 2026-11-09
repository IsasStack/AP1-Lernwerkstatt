# 💿 Betriebssysteme & Software

*Bereich: Technik · Prüfungsrelevanz: ★★★*

> BIOS/UEFI, Partitionierung, Dateisysteme, OS-Installation, Softwarearten, Kommandozeile.

[⬅ Inhaltsverzeichnis](README.md)

---

## Firmware: BIOS vs. UEFI

<table><tr><th></th><th>BIOS (Legacy)</th><th>UEFI</th></tr>
<tr><td>Partitionsschema</td><td>MBR</td><td>GPT</td></tr>
<tr><td>Max. Bootlaufwerk</td><td>2 TiB</td><td>praktisch unbegrenzt (bis 9,4 ZB)</td></tr>
<tr><td>Partitionen</td><td>4 primäre (oder 3 + erweiterte)</td><td>128 (unter Windows)</td></tr>
<tr><td>Sicherheit</td><td>–</td><td><b>Secure Boot</b> (nur signierte Bootloader), TPM-Unterstützung</td></tr>
<tr><td>Bedienung</td><td>textbasiert</td><td>grafisch, Maus, Netzwerkfunktionen</td></tr></table>

**Windows 11** verlangt UEFI mit Secure Boot und **TPM 2.0** (Trusted Platform Module: Chip, der Schlüssel sicher speichert, z. B. für BitLocker und Windows Hello). POST = Power-On Self-Test beim Start.

## Partitionierung & Formatierung

**Partitionieren** = Datenträger in logische Bereiche aufteilen. **Formatieren** = Dateisystem anlegen. Schnellformatierung löscht nur die Verwaltungsstrukturen – Daten sind wiederherstellbar!

<table><tr><th>Dateisystem</th><th>Einsatz</th><th>Merkmale</th></tr>
<tr><td>FAT32</td><td>USB-Sticks, kompatibel überall</td><td>max. Dateigröße <b>4 GiB</b>, keine Rechte</td></tr>
<tr><td>exFAT</td><td>große USB-Sticks/SD-Karten</td><td>große Dateien, plattformübergreifend, keine Rechte/Journal</td></tr>
<tr><td>NTFS</td><td>Windows-Systempartition</td><td>Rechte (ACL), Journaling, Verschlüsselung (EFS), Kompression, Quotas</td></tr>
<tr><td>ReFS</td><td>Windows Server</td><td>Integritätsprüfung, große Volumes</td></tr>
<tr><td>ext4 / Btrfs / XFS</td><td>Linux</td><td>Journaling, Unix-Rechte</td></tr>
<tr><td>APFS</td><td>macOS</td><td>Snapshots, Verschlüsselung</td></tr></table>

**Journaling**: Änderungen werden protokolliert, bevor sie ausgeführt werden → nach Absturz schnell konsistent.

## Betriebssystem einrichten (Ablauf)

1. Hardwareanforderungen prüfen, Firmware-Update, UEFI-Einstellungen (Secure Boot, TPM, Bootreihenfolge).
2. Installation: manuell vom USB-Stick, **Image** (geklontes Systemabbild), Netzwerkinstallation (PXE/WDS) oder **Windows Autopilot** (cloudbasiert über Intune).
3. Treiber, Updates, Anwendungen, Sprachpakete.
4. Netzwerk: IP per DHCP oder statisch, Domänenbeitritt / Entra Join.
5. Härtung: Admin-Rechte entziehen, Firewall, Virenschutz, BitLocker, unnötige Dienste deaktivieren.
6. Test & Dokumentation (Inventarnummer, Seriennummer, Konfiguration), Übergabe an Nutzer.

**Installationsarten**: Neuinstallation (clean), Upgrade (Daten bleiben), unbeaufsichtigte Installation (Antwortdatei unattend.xml), Imaging (identische Systeme schnell verteilen), Softwareverteilung (Intune, SCCM, winget).

## Softwarearten

- **Systemsoftware** (Betriebssystem, Treiber, Firmware) vs. **Anwendungssoftware** (Office, ERP, Browser).
- **Standardsoftware** (für viele Kunden, günstig, sofort verfügbar, getestet – aber evtl. nicht passgenau) vs. **Individualsoftware** (maßgeschneidert, passgenau, Wettbewerbsvorteil – aber teuer, lange Entwicklungszeit, Abhängigkeit vom Entwickler).
- **Branchensoftware**: für eine Branche angepasste Standardsoftware (z. B. Arztpraxis-, Kanzleisoftware).
- **Open Source vs. proprietär**: siehe Lizenzen. Open Source: keine Lizenzkosten, anpassbar, Community – aber Support evtl. kostenpflichtig, Know-how nötig.
- Auswahlkriterien: Funktionsumfang, Kompatibilität/**Interoperabilität**, Schnittstellen (API), Anpassbarkeit, Wartbarkeit, Ergonomie, Kosten/Lizenzmodell, Support, Datenschutz (Serverstandort).

## Kommandozeile – wichtige Befehle

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

## Linux-Rechte mit chmod

Drei Gruppen: **u**ser (Besitzer), **g**roup, **o**thers. Rechte: r = 4, w = 2, x = 1.

> [!IMPORTANT]
> `chmod 754 skript.sh` → Besitzer 7 = rwx, Gruppe 5 = r-x, Andere 4 = r--.  
> `ls -l` zeigt z. B. `-rwxr-x---` = 750.

## Client-Server-Systeme

**Client-Server**: Clients fordern Dienste an, ein zentraler Server stellt sie bereit (Datei-, Druck-, Mail-, Web-, Datenbank-, Anwendungsserver). Vorteile: zentrale Datenhaltung, Verwaltung, Datensicherung und Rechtevergabe. Nachteil: Server ist Single Point of Failure, Netzabhängigkeit. **Peer-to-Peer**: alle Rechner gleichberechtigt (Arbeitsgruppe) – günstig, aber unübersichtlich und unsicher bei vielen Geräten. **Fat Client** (Programme laufen lokal) vs. **Thin Client** (Programme laufen auf dem Server). **Mehrschichtige Architektur**: Präsentation (Client/Browser) – Logik (Anwendungsserver) – Daten (Datenbankserver).

## Grundlagen relationaler Datenbanken (AP1-Stoff!)

Ein **Datenbanksystem (DBS)** besteht aus der Datenbank (Daten) und dem **DBMS** (Datenbankmanagementsystem, z. B. MariaDB/MySQL, PostgreSQL, Microsoft SQL Server, Oracle). Vorteile gegenüber Excel-Listen/Dateien: Mehrbenutzerbetrieb, Datenintegrität, keine/geringe Redundanz, Zugriffsrechte, Datensicherung, Transaktionen.

<table><tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>Tabelle (Relation)</td><td>Sammlung gleichartiger Datensätze</td><td>Mitarbeiter</td></tr>
<tr><td>Datensatz (Tupel, Zeile)</td><td>ein Eintrag</td><td>Isa Muster, Abt. 3</td></tr>
<tr><td>Attribut (Feld, Spalte)</td><td>Eigenschaft mit Datentyp</td><td>Nachname (VARCHAR), Geburtsdatum (DATE)</td></tr>
<tr><td><b>Primärschlüssel (PK)</b></td><td>identifiziert jeden Datensatz eindeutig, nie leer</td><td>MitarbeiterNr</td></tr>
<tr><td><b>Fremdschlüssel (FK)</b></td><td>verweist auf den Primärschlüssel einer anderen Tabelle → Beziehung</td><td>Mitarbeiter.AbteilungsNr → Abteilung.AbteilungsNr</td></tr></table>

**Beziehungen (Kardinalitäten)**: **1:1** (Mitarbeiter – Firmenausweis), **1:n** (Abteilung – Mitarbeiter: eine Abteilung hat viele Mitarbeiter), **n:m** (Mitarbeiter – Projekt: wird in der Datenbank über eine **Zwischentabelle** mit zwei Fremdschlüsseln aufgelöst, z. B. Mitarbeiter\_Projekt).

**Einfaches ER-Modell** (Entity-Relationship): Entitäten (Rechteck, z. B. Kunde, Bestellung), Beziehungen (Raute bzw. Linie, z. B. „gibt auf“), Attribute; Kardinalitäten an den Linien (1, n bzw. Krähenfuß-Notation). Daraus entstehen die Tabellen.

**Redundanz** (dieselben Daten mehrfach gespeichert) führt zu **Anomalien**: Ändert man die Adresse eines Kunden nur in einer von drei Zeilen, ist die Datenbank inkonsistent. Lösung: Daten auf mehrere Tabellen aufteilen und über Schlüssel verknüpfen (Normalisierung – Details AP2).

> [!WARNING]
> SQL-Abfragen (SELECT …) und NoSQL sind seit 2025 nicht mehr AP1, sondern AP2.

---

## 🃏 Karteikarten (30)

| Frage | Antwort |
|---|---|
| UEFI – Vorteile gegenüber BIOS | GPT (große Platten, viele Partitionen), Secure Boot, grafische Oberfläche, schnellerer Start. |
| Secure Boot | UEFI-Funktion, die nur signierte Bootloader/Betriebssysteme startet – schützt vor Bootkits. |
| TPM 2.0 | Sicherheitschip zur geschützten Speicherung von Schlüsseln; Voraussetzung für Windows 11, genutzt von BitLocker und Windows Hello. |
| MBR – Grenzen | Max. 2 TiB Bootlaufwerk, max. 4 primäre Partitionen. |
| FAT32 – Einschränkung | Maximale Dateigröße 4 GiB, keine Zugriffsrechte. |
| NTFS – Merkmale | Zugriffsrechte (ACL), Journaling, EFS-Verschlüsselung, Kompression, Quotas. |
| exFAT – Einsatz | Große USB-Sticks/SD-Karten, Dateien > 4 GiB, Windows/macOS-kompatibel. |
| Journaling | Änderungen werden vor Ausführung protokolliert → schnelle Wiederherstellung der Konsistenz nach Absturz. |
| Partitionieren vs. Formatieren | Partitionieren: Bereiche anlegen. Formatieren: Dateisystem einrichten. |
| Imaging | Verteilung eines vorkonfigurierten Systemabbilds auf viele gleiche Rechner. |
| Windows Autopilot | Cloudbasierte Bereitstellung neuer Geräte über Microsoft Intune/Entra ID – ohne Imaging. |
| Standard- vs. Individualsoftware | Standard: günstig, sofort verfügbar, getestet, aber nicht passgenau. Individual: passgenau, aber teuer und zeitaufwendig. |
| Interoperabilität | Fähigkeit unterschiedlicher Systeme, über Schnittstellen zusammenzuarbeiten und Daten auszutauschen. |
| chmod 640 | Besitzer rw-, Gruppe r--, Andere ---. |
| Linux-Rechtewerte | r = 4, w = 2, x = 1; Reihenfolge Besitzer, Gruppe, Andere. |
| ipconfig /all | Zeigt komplette IP-Konfiguration inkl. MAC, DHCP-Server, DNS-Server, Lease. |
| tracert / traceroute | Zeigt alle Router (Hops) auf dem Weg zum Ziel. |
| nslookup | Fragt einen DNS-Server nach der Auflösung von Namen/IP ab. |
| gpupdate /force | Erzwingt sofortige Aktualisierung der Gruppenrichtlinien auf einem Windows-Client. |
| Linux: aktuelle IP-Adressen anzeigen | ip a (Paket iproute2), veraltet ifconfig. |
| Client-Server-Prinzip | Clients fordern Dienste an, ein zentraler Server stellt sie bereit. |
| Peer-to-Peer | Alle Rechner gleichberechtigt, keine zentrale Verwaltung. |
| Fat Client vs. Thin Client | Fat: Programme lokal. Thin: Programme laufen auf dem Server. |
| DBMS | Datenbankmanagementsystem – Software, die die Datenbank verwaltet (z. B. MariaDB, SQL Server). |
| Primärschlüssel | Attribut, das jeden Datensatz eindeutig identifiziert. |
| Fremdschlüssel | Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist. |
| Kardinalitäten | 1:1, 1:n, n:m. |
| n:m-Beziehung in Tabellen | Wird über eine Zwischentabelle mit zwei Fremdschlüsseln aufgelöst. |
| Redundanz – Problem | Doppelt gespeicherte Daten führen zu Anomalien/Inkonsistenzen. |
| Datensatz / Attribut | Datensatz = Zeile, Attribut = Spalte. |

## ✍️ Übungsfragen (21)

**1.** Ein 4-TB-Laufwerk soll als Bootlaufwerk komplett nutzbar sein. Welches Partitionsschema?
- A) MBR
- B) GPT
- C) FAT32
- D) NTFS

<details><summary>Lösung</summary>

**B) GPT**<br>MBR ist auf 2 TiB begrenzt; GPT (mit UEFI) nicht.

</details>

**2.** Eine 6-GB-Videodatei lässt sich nicht auf einen USB-Stick kopieren, obwohl 30 GB frei sind. Wahrscheinlichste Ursache?
- A) Stick ist mit FAT32 formatiert
- B) Stick ist mit NTFS formatiert
- C) USB 2.0
- D) Secure Boot aktiv

<details><summary>Lösung</summary>

**A) Stick ist mit FAT32 formatiert**<br>FAT32 erlaubt max. 4 GiB pro Datei → exFAT/NTFS verwenden.

</details>

**3.** Welche Voraussetzung gilt für Windows 11?
- A) BIOS mit MBR
- B) TPM 2.0 und Secure Boot
- C) Mindestens 64 GB RAM
- D) FAT32-Systempartition

<details><summary>Lösung</summary>

**B) TPM 2.0 und Secure Boot**<br>Windows 11 verlangt UEFI, Secure Boot und TPM 2.0.

</details>

**4.** Welcher Befehl zeigt unter Windows die vollständige IP-Konfiguration inkl. DNS-Server an?
- A) ping
- B) ipconfig /all
- C) tracert
- D) arp -a

<details><summary>Lösung</summary>

**B) ipconfig /all**

</details>

**5.** Welche Rechte ergeben sich aus chmod 750?
- A) rwxr-x---
- B) rwxrwx---
- C) rw-r-x---
- D) rwxr--r--

<details><summary>Lösung</summary>

**A) rwxr-x---**<br>7 = rwx, 5 = r-x, 0 = ---.

</details>

**6.** Welcher Zahlenwert in chmod entspricht rw-r--r--? (dreistellig)

<details><summary>Lösung</summary>

**644**<br>rw- = 6, r-- = 4, r-- = 4.

</details>

**7.** Welcher Linux-Befehl ersetzt das veraltete ifconfig?
- A) ip a
- B) netsh
- C) ipconfig
- D) route print

<details><summary>Lösung</summary>

**A) ip a**<br>ip aus dem Paket iproute2.

</details>

**8.** Welches Dateisystem bietet unter Windows Zugriffsrechte und Journaling?
- A) FAT32
- B) exFAT
- C) NTFS
- D) FAT16

<details><summary>Lösung</summary>

**C) NTFS**

</details>

**9.** Welche Nachteile hat Individualsoftware gegenüber Standardsoftware? (mehrere)
- A) Hohe Entwicklungskosten
- B) Lange Entwicklungszeit
- C) Exakt an Prozesse angepasst
- D) Abhängigkeit vom Entwickler

<details><summary>Lösung</summary>

**A) Hohe Entwicklungskosten, B) Lange Entwicklungszeit, D) Abhängigkeit vom Entwickler**<br>Passgenauigkeit ist ein Vorteil.

</details>

**10.** Mit welchem Verfahren werden 50 identische PCs am schnellsten mit vorkonfiguriertem System versehen?
- A) Manuelle Installation vom USB-Stick
- B) Imaging/Softwareverteilung
- C) Upgrade-Installation
- D) Neuinstallation mit Assistent

<details><summary>Lösung</summary>

**B) Imaging/Softwareverteilung**<br>Ein Image wird einmal erstellt und verteilt.

</details>

**11.** Welcher Befehl leert unter Windows den DNS-Cache?
- A) ipconfig /renew
- B) ipconfig /flushdns
- C) nslookup /clear
- D) netstat -r

<details><summary>Lösung</summary>

**B) ipconfig /flushdns**

</details>

**12.** Was bewirkt eine Schnellformatierung?
- A) Daten werden sicher überschrieben
- B) Nur Verwaltungsstrukturen werden neu angelegt – Daten sind wiederherstellbar
- C) Die Festplatte wird partitioniert
- D) Die SSD wird per Secure Erase gelöscht

<details><summary>Lösung</summary>

**B) Nur Verwaltungsstrukturen werden neu angelegt – Daten sind wiederherstellbar**<br>Für sichere Löschung reicht Formatieren nicht.

</details>

**13.** Erläutern Sie zwei Vorteile von UEFI gegenüber dem klassischen BIOS. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Z. B.: UEFI unterstützt GPT, dadurch Bootlaufwerke > 2 TiB und bis zu 128 Partitionen (2); Secure Boot startet nur signierte Bootloader und schützt so vor Bootkits/Rootkits (2); grafische Oberfläche mit Mausbedienung und Netzwerkfunktionen (2); schnellerer Systemstart (2).

</details>

**14.** Nennen Sie vier Arbeitsschritte bei der Einrichtung eines neuen Windows-Arbeitsplatzes nach der OS-Installation. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: Treiber und Updates installieren; Anwendungssoftware installieren; Netzwerk konfigurieren und in Domäne/Entra ID einbinden; Benutzerkonto und Rechte einrichten (keine Adminrechte); Sicherheit: Virenschutz, Firewall, BitLocker; Drucker/Netzlaufwerke verbinden; Funktionstest und Dokumentation/Inventarisierung; Einweisung des Nutzers.

</details>

**15.** Welches Attribut eignet sich als Primärschlüssel einer Tabelle „Mitarbeiter“?
- A) Nachname
- B) Personalnummer
- C) Abteilung
- D) Geburtsdatum

<details><summary>Lösung</summary>

**B) Personalnummer**<br>Eindeutig und nie leer – Namen und Geburtsdaten können doppelt vorkommen.

</details>

**16.** Eine Abteilung hat viele Mitarbeitende, jede Person gehört zu genau einer Abteilung. Welche Kardinalität?
- A) 1:1
- B) 1:n
- C) n:m
- D) 0:0

<details><summary>Lösung</summary>

**B) 1:n**

</details>

**17.** Mitarbeitende arbeiten in mehreren Projekten, Projekte haben mehrere Mitarbeitende. Wie wird das in Tabellen umgesetzt?
- A) Ein Feld mit allen Projektnamen
- B) Zwischentabelle mit den Fremdschlüsseln MitarbeiterNr und ProjektNr
- C) Alle Daten in eine Tabelle
- D) Gar nicht möglich

<details><summary>Lösung</summary>

**B) Zwischentabelle mit den Fremdschlüsseln MitarbeiterNr und ProjektNr**<br>n:m wird über eine Zwischentabelle aufgelöst.

</details>

**18.** Was ist ein Fremdschlüssel?
- A) Ein verschlüsseltes Passwort
- B) Ein Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist
- C) Ein Schlüssel für den Serverraum
- D) Eine Tabelle

<details><summary>Lösung</summary>

**B) Ein Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist**

</details>

**19.** Welche Vorteile bietet eine relationale Datenbank gegenüber mehreren Excel-Listen? (mehrere)
- A) Mehrbenutzerbetrieb
- B) Weniger Redundanz
- C) Zugriffsrechte und Datensicherung
- D) Keine Struktur nötig

<details><summary>Lösung</summary>

**A) Mehrbenutzerbetrieb, B) Weniger Redundanz, C) Zugriffsrechte und Datensicherung**

</details>

**20.** Welche Aussage zum Client-Server-Modell ist richtig?
- A) Alle Rechner sind gleichberechtigt
- B) Ein Server stellt zentral Dienste bereit, die Clients nutzen
- C) Es gibt keinen Single Point of Failure
- D) Es funktioniert nur im WLAN

<details><summary>Lösung</summary>

**B) Ein Server stellt zentral Dienste bereit, die Clients nutzen**

</details>

**21.** In einer Excel-Liste sind zu jeder Bestellung Name und Adresse des Kunden gespeichert. Erläutern Sie das Problem und eine Lösung mit einer relationalen Datenbank. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Problem: Kundendaten sind redundant mehrfach gespeichert (1); bei Änderungen (z. B. neue Adresse) entstehen Inkonsistenzen/Änderungsanomalien (1). Lösung: zwei Tabellen Kunde (Primärschlüssel KundenNr) und Bestellung (1), Bestellung erhält den Fremdschlüssel KundenNr → 1:n-Beziehung, Kundendaten nur einmal gespeichert (1).

</details>


[⬅ Inhaltsverzeichnis](README.md)
