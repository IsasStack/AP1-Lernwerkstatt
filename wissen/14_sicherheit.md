# 🛡️ IT-Sicherheit

*Bereich: Sicherheit · Prüfungsrelevanz: ★★★*

> Schutzziele, BSI-Grundschutz, Schutzbedarf, Bedrohungen, Maßnahmen, Härtung, 2FA, Firewall, VPN, Backup.

[⬅ Inhaltsverzeichnis](README.md)

---

> [!WARNING]
> **Katalog 2025:** Gestrichen: ISO-2700x-Details, Risikomatrix, Anti-Spam als eigener Punkt, „SSH vs. Telnet“. Neu/betont: Schutzziele, Hashwerte, 2FA, Härtung, Personal Firewall anpassen, Passwort-Policy bewerten, Schutzbedarf ableiten und begründen, ISMS, NAS für Verfügbarkeit, Auszüge aus dem IT-Grundschutz-Kompendium.

## Schutzziele (Grundwerte)

<table><tr><th>Schutzziel</th><th>Bedeutung</th><th>Maßnahmen</th></tr>
<tr><td><b>Vertraulichkeit</b></td><td>nur Befugte haben Zugriff</td><td>Verschlüsselung, Zugriffsrechte, Authentifizierung</td></tr>
<tr><td><b>Integrität</b></td><td>Daten sind korrekt und unverändert; Änderungen erkennbar</td><td>Hashwerte, digitale Signaturen, Protokollierung, Rechte</td></tr>
<tr><td><b>Verfügbarkeit</b></td><td>Systeme/Daten stehen bei Bedarf zur Verfügung</td><td>Backups, USV, Redundanz, DDoS-Schutz, Wartung</td></tr></table>

Erweitert: **Authentizität** (Echtheit des Kommunikationspartners/der Daten), **Verbindlichkeit/Nichtabstreitbarkeit**, Zurechenbarkeit.

## BSI IT-Grundschutz

Methodik des Bundesamts für Sicherheit in der Informationstechnik: BSI-Standards **200-1** (ISMS), **200-2** (Vorgehensweise), **200-3** (Risikoanalyse), **200-4** (Notfallmanagement/BCM) + **IT-Grundschutz-Kompendium** mit Bausteinen (z. B. SYS.2.2.3 Clients unter Windows, NET.2.2 WLAN-Nutzung, CON.3 Datensicherungskonzept, ORP.4 Identitäts- und Berechtigungsmanagement).

**Vorgehen (200-2)**: Strukturanalyse → **Schutzbedarfsfeststellung** → Modellierung (Bausteine zuordnen) → IT-Grundschutz-Check (Soll-Ist) → ggf. Risikoanalyse → Umsetzung.

<table><tr><th>Schutzbedarfskategorie</th><th>Schadensauswirkung</th></tr>
<tr><td>normal</td><td>begrenzt und überschaubar</td></tr>
<tr><td>hoch</td><td>beträchtlich</td></tr>
<tr><td>sehr hoch</td><td>existenziell bedrohlich, katastrophal</td></tr></table>

Bewertet wird je Grundwert (V, I, V). **Maximumprinzip**: Ein IT-System erbt den höchsten Schutzbedarf der darauf laufenden Anwendungen. Kumulationseffekt (viele kleine Schäden ergeben höheren Bedarf), Verteilungseffekt (Redundanz senkt Bedarf). Bei „hoch“/„sehr hoch“ ist eine Risikoanalyse nach 200-3 nötig. Schutzbedarf wird festgestellt für Anwendungen, IT-Systeme, Räume, Kommunikationsverbindungen.

## Bedrohungen

- **Malware**: Virus (hängt sich an Dateien, braucht Wirt), Wurm (verbreitet sich selbstständig über Netz), Trojaner (getarnt als nützliches Programm), **Ransomware** (verschlüsselt Daten, Lösegeld), Spyware, Keylogger, Rootkit, Botnetz.
- **Social Engineering**: Manipulation von Menschen – **Phishing** (gefälschte Mails/Seiten), Spear-Phishing (gezielt), Vishing (Telefon), Smishing (SMS), CEO-Fraud, Quishing (QR-Code), Tailgating (hinterherlaufen).
- Angriffe: Brute Force, Wörterbuchangriff, Credential Stuffing, Man-in-the-Middle, DoS/DDoS, SQL-Injection, XSS, Zero-Day-Exploit.
- Höhere Gewalt/Technik: Brand, Wasser, Stromausfall, Hardwaredefekt, menschliches Versagen.

## Maßnahmen-Kategorien (TOP)

- **Technisch**: Firewall, Virenschutz/EDR, Updates/Patchmanagement, Verschlüsselung, MFA, Backup, Spamfilter, VPN.
- **Organisatorisch**: Sicherheitsrichtlinie, Passwort-Policy, Berechtigungskonzept, Notfallplan, IT-Sicherheitsbeauftragter, Clean-Desk-Policy, Vier-Augen-Prinzip.
- **Personell**: Schulungen/Awareness, Verpflichtung auf Vertraulichkeit, geregelter Ein-/Austritt.
- **Infrastrukturell**: Zutrittskontrolle, abschließbarer Serverraum, Brandschutz, Klimatisierung, USV.

**Security by Design**: Sicherheit von Anfang an in Entwicklung/Planung berücksichtigen. **Security by Default**: sichere Grundeinstellungen ab Werk (z. B. kein Standardpasswort, Dienste aus).

## Härtung eines Arbeitsplatzes

- Aktuelles, unterstütztes OS; automatische Updates; Firmware/UEFI aktuell, Secure Boot an, UEFI-Passwort.
- Keine lokalen Adminrechte für Nutzer; Standardkonten deaktivieren/umbenennen.
- Nicht benötigte Dienste, Programme, Ports deaktivieren; USB-Massenspeicher per GPO sperren.
- Festplattenverschlüsselung (**BitLocker** mit TPM), Virenschutz (Defender), Host-Firewall aktiv.
- Bildschirmsperre nach kurzer Inaktivität, Windows Hello/MFA, Application Control (AppLocker), Makros aus dem Internet blockieren.
- Protokollierung aktivieren, Konfiguration dokumentieren (Baseline, z. B. Microsoft Security Baselines/CIS).

## Authentifizierung

Faktoren: **Wissen** (Passwort, PIN), **Besitz** (Smartphone-App, Hardware-Token, Smartcard), **Inhärenz/Sein** (Fingerabdruck, Gesicht). **2FA/MFA** = mindestens zwei **verschiedene** Kategorien (Passwort + PIN ist keine 2FA!). Einmalpasswörter: TOTP (zeitbasiert, 30 s), HOTP. Phishing-resistent: **FIDO2/Passkeys**, Windows Hello for Business.

**Passwortrichtlinie** (nach BSI/NIST heute): lieber **lang** (≥ 12–14 Zeichen, Passphrase) als komplex; kein regelmäßiger Zwangswechsel, sondern bei Verdacht auf Kompromittierung; keine Wiederverwendung; Passwortmanager; Kontosperre nach Fehlversuchen; Abgleich mit Leak-Listen.

## Firewall & VPN

- **Paketfilter** (L3/L4): erlaubt/verbietet nach IP, Port, Protokoll. **Stateful Inspection**: merkt sich Verbindungszustände. **Application-Level-Gateway/Proxy** (L7): prüft Inhalte. **Next-Generation Firewall**: + IPS, App-Erkennung. **WAF**: schützt Webanwendungen. Personal/Host-Firewall auf dem Client.
- Grundregel: **Default Deny** – alles verboten, was nicht explizit erlaubt ist.
- **DMZ**: eigenes Netzsegment für öffentlich erreichbare Server zwischen zwei Firewalls.
- **VPN**: verschlüsselter Tunnel über unsichere Netze. Site-to-Site (Standorte) / Client-to-Site/Remote Access (Homeoffice). Protokolle: IPsec, OpenVPN, WireGuard, SSL-VPN.

## Datensicherung (Backup)

<table><tr><th>Art</th><th>Sichert</th><th>Wiederherstellung</th></tr>
<tr><td><b>Vollsicherung</b></td><td>alle Daten</td><td>schnell – nur eine Sicherung nötig; braucht viel Platz/Zeit</td></tr>
<tr><td><b>Differenziell</b></td><td>alle Änderungen seit der letzten <b>Vollsicherung</b></td><td>Vollsicherung + letzte differenzielle</td></tr>
<tr><td><b>Inkrementell</b></td><td>Änderungen seit der letzten Sicherung (egal welcher Art)</td><td>Vollsicherung + <b>alle</b> Inkremente der Reihe nach – am aufwendigsten; Sicherung selbst am schnellsten</td></tr></table>

> [!IMPORTANT]
> **3-2-1-Regel:** 3 Kopien der Daten, auf 2 verschiedenen Medien, davon 1 außer Haus (offsite). Erweitert 3-2-1-1-0: + 1 offline/unveränderbar (Schutz vor Ransomware) + 0 Fehler bei Restore-Tests.

Weitere Begriffe: **Generationenprinzip** (Großvater-Vater-Sohn), Backup ≠ Archivierung, **RPO** (max. tolerierter Datenverlust in Zeit), **RTO** (max. Wiederherstellungsdauer). **Restore regelmäßig testen!** Redundanz (z. B. gespiegelte Platten) ersetzt kein Backup – gelöschte oder verschlüsselte Daten werden mitgespiegelt.

## Sichere Protokolle statt unsicherer Klassiker

<table><tr><th>Unsicher (Klartext)</th><th>Sicher</th></tr>
<tr><td>Telnet (23)</td><td>SSH (22)</td></tr>
<tr><td>FTP (20/21)</td><td>SFTP (über SSH, 22) oder FTPS (FTP mit TLS)</td></tr>
<tr><td>HTTP (80)</td><td>HTTPS (443)</td></tr>
<tr><td>POP3/IMAP/SMTP ohne TLS</td><td>POP3S (995), IMAPS (993), SMTP mit STARTTLS/SMTPS (587/465)</td></tr>
<tr><td>LDAP (389)</td><td>LDAPS (636)</td></tr>
<tr><td>SNMPv1/v2c (Community-String im Klartext)</td><td>SNMPv3 (Authentifizierung + Verschlüsselung)</td></tr></table>

## Personal Firewall anpassen (Windows Defender Firewall)

- **Netzwerkprofile**: Domäne (Firmennetz), Privat (vertrauenswürdig), Öffentlich (Hotel, Bahn – am restriktivsten). Unterwegs immer „Öffentlich“.
- **Regeln** für eingehenden und ausgehenden Verkehr: nach Programm, Port/Protokoll (z. B. TCP 3389 nur aus dem Firmennetz), Remote-IP-Bereich; Standard: eingehend blockieren, ausgehend erlauben.
- Zentrale Verteilung per **GPO oder Intune**, Nutzer dürfen Regeln nicht selbst ändern; Protokollierung blockierter Verbindungen.

## ISMS & Verfügbarkeit

**ISMS** (Informationssicherheits-Managementsystem): Regeln, Verfahren und Verantwortlichkeiten, um Informationssicherheit dauerhaft zu planen, umzusetzen, zu prüfen und zu verbessern (PDCA). Du unterstützt es, indem du Richtlinien einhältst, Vorfälle meldest und Maßnahmen dokumentierst.  
**NAS** (Network Attached Storage): Netzwerkspeicher für Freigaben und Backups – mit mehreren Platten gespiegelt für Verfügbarkeit, mit Snapshots gegen versehentliches Löschen; ersetzt aber kein externes/offline Backup.  
**Gesetzlicher Rahmen**: IT-Sicherheitsgesetz/BSI-Gesetz und die EU-**NIS-2**-Richtlinie verpflichten Betreiber kritischer Infrastrukturen (KRITIS) und viele mittlere/große Unternehmen zu Risikomanagement, Meldung erheblicher Sicherheitsvorfälle und Mindestmaßnahmen.

## Identifizieren, authentifizieren, autorisieren

<table><tr><th>Schritt</th><th>Frage</th><th>Beispiel</th></tr>
<tr><td><b>Identifikation</b></td><td>Wer behauptest du zu sein?</td><td>Benutzername eingeben</td></tr>
<tr><td><b>Authentifizierung</b></td><td>Bist du es wirklich?</td><td>Passwort, Smartcard, Fingerabdruck prüfen</td></tr>
<tr><td><b>Autorisierung</b></td><td>Was darfst du?</td><td>Rechte auf Ordner, Programme, Funktionen zuweisen</td></tr></table>

Erst wird die Identität bewiesen, danach werden Rechte vergeben. Ein angemeldeter Benutzer ist also authentifiziert – ob er die Gehaltsliste öffnen darf, entscheidet die Autorisierung (Berechtigungskonzept, Least Privilege).

**Biometrie** (Fingerabdruck, Gesicht, Iris) gehört zum Faktor *Inhärenz*. Vorteil: bequem, nicht vergessbar. Nachteil: nicht änderbar, wenn das Merkmal einmal kompromittiert ist, und datenschutzrechtlich besonders schützenswert.

## Backup-Generationen und Archivierung

Beim **Generationenprinzip** (Großvater-Vater-Sohn) werden mehrere Sicherungsstände aufbewahrt: tägliche Sicherungen (Sohn), wöchentliche (Vater) und monatliche (Großvater). So kann man auch auf einen Stand von vor mehreren Wochen zurückgehen – wichtig, wenn ein Fehler oder Schadsoftware erst spät bemerkt wird.

<table><tr><th></th><th>Backup</th><th>Archivierung</th></tr>
<tr><td>Zweck</td><td>Wiederherstellung nach Verlust oder Defekt</td><td>langfristige, unveränderbare Aufbewahrung</td></tr>
<tr><td>Daten</td><td>Kopie der aktuellen Arbeitsdaten</td><td>abgeschlossene Vorgänge, die nicht mehr geändert werden</td></tr>
<tr><td>Dauer</td><td>Tage bis Monate, wird überschrieben</td><td>Jahre, nach gesetzlichen Aufbewahrungsfristen</td></tr></table>

---

## 🃏 Karteikarten (38)

| Frage | Antwort |
|---|---|
| Drei Schutzziele | Vertraulichkeit, Integrität, Verfügbarkeit. |
| Integrität – Maßnahmen | Hashwerte, digitale Signaturen, Zugriffsrechte, Protokollierung. |
| Verfügbarkeit – Maßnahmen | Backup, USV, Redundanz, Wartung, DDoS-Schutz. |
| BSI-Schutzbedarfskategorien | normal (begrenzt), hoch (beträchtlich), sehr hoch (existenzbedrohend). |
| Maximumprinzip | Ein IT-System übernimmt den höchsten Schutzbedarf der darauf laufenden Anwendungen. |
| BSI-Standard 200-2 | IT-Grundschutz-Methodik: Strukturanalyse, Schutzbedarf, Modellierung, Grundschutz-Check. |
| Virus vs. Wurm | Virus braucht Wirtsdatei und Nutzeraktion; Wurm verbreitet sich selbstständig übers Netz. |
| Trojaner | Schadprogramm, das sich als nützliche Software tarnt. |
| Ransomware | Verschlüsselt Daten und fordert Lösegeld. |
| Phishing | Gefälschte Mails/Webseiten, um Zugangsdaten oder Zahlungen zu erschleichen. |
| Social Engineering | Manipulation von Menschen, um an Informationen/Zugang zu gelangen. |
| Technische vs. organisatorische Maßnahme | Technisch: Firewall, Verschlüsselung. Organisatorisch: Richtlinien, Berechtigungskonzept, Notfallplan. |
| Security by Default | Produkte werden mit sicheren Voreinstellungen ausgeliefert. |
| Härtung – vier Maßnahmen | Updates, keine Adminrechte, unnötige Dienste aus, BitLocker, Firewall, USB sperren, Bildschirmsperre. |
| Drei Authentifizierungsfaktoren | Wissen, Besitz, Inhärenz (biometrisch). |
| Ist Passwort + PIN eine 2FA? | Nein – beides ist Wissen. 2FA braucht zwei verschiedene Faktorkategorien. |
| Default Deny | Firewall-Grundregel: Alles ist verboten, was nicht ausdrücklich erlaubt ist. |
| DMZ | Demilitarisierte Zone: eigenes Netzsegment für öffentlich erreichbare Server. |
| VPN | Verschlüsselter Tunnel über ein unsicheres Netz (z. B. Homeoffice ↔ Firma). |
| Differenzielle Sicherung | Alle Änderungen seit der letzten Vollsicherung. |
| Inkrementelle Sicherung | Änderungen seit der letzten Sicherung (egal welcher Art). |
| Restore bei inkrementeller Sicherung | Letzte Vollsicherung + alle folgenden Inkremente in Reihenfolge. |
| 3-2-1-Regel | 3 Kopien, 2 verschiedene Medien, 1 Kopie außer Haus. |
| RPO / RTO | RPO: maximal tolerierter Datenverlust (Zeit). RTO: maximal tolerierte Wiederherstellungsdauer. |
| Warum ersetzt Spiegelung kein Backup? | Löschung, Verschlüsselung (Ransomware) oder Fehler werden sofort mitgespiegelt. |
| SFTP vs. FTPS | SFTP: Dateiübertragung über SSH (Port 22). FTPS: klassisches FTP mit TLS-Verschlüsselung. |
| Sichere Alternative zu SNMPv1/v2c | SNMPv3 mit Authentifizierung und Verschlüsselung. |
| Firewall-Profile Windows | Domäne, Privat, Öffentlich (am restriktivsten). |
| Personal Firewall – Standardregel | Eingehend blockieren, ausgehend erlauben; Ausnahmen gezielt nach Programm/Port/IP. |
| ISMS | Managementsystem, um Informationssicherheit dauerhaft zu planen, umzusetzen, zu prüfen und zu verbessern. |
| NAS – Einsatz | Netzwerkspeicher für Freigaben/Backups, mit Spiegelung und Snapshots – ersetzt kein Offline-Backup. |
| NIS-2 | EU-Richtlinie: Pflichten zu Risikomanagement und Meldung von Sicherheitsvorfällen für viele Unternehmen. |
| Authentifizierung vs. Autorisierung | Authentifizierung: Identität wird geprüft (Wer bist du?). Autorisierung: Rechte werden zugewiesen (Was darfst du?). |
| Reihenfolge beim Zugriff | Identifikation → Authentifizierung → Autorisierung. |
| Biometrie – Vor- und Nachteil | + bequem, nicht vergessbar oder weitergebbar. − nicht änderbar, wenn kompromittiert; besonders schützenswerte Daten. |
| Generationenprinzip | Großvater-Vater-Sohn: tägliche, wöchentliche und monatliche Sicherungen werden parallel aufbewahrt. |
| Wozu mehrere Backup-Generationen? | Um auf ältere Stände zurückgehen zu können, wenn ein Fehler oder Schadsoftware erst spät bemerkt wird. |
| Backup vs. Archivierung | Backup: Kopie zur Wiederherstellung, wird überschrieben. Archivierung: langfristige, unveränderbare Aufbewahrung abgeschlossener Daten. |

## ✍️ Übungsfragen (27)

**1.** Ein Angreifer verändert unbemerkt Überweisungsdaten. Welches Schutzziel ist verletzt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Integrität<br>Unerlaubte Veränderung = Integrität.

</details>

**2.** Ein Server fällt durch einen Stromausfall aus. Welches Schutzziel ist betroffen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Verfügbarkeit

</details>

**3.** Welche Schutzbedarfskategorie nach BSI gilt bei „existenzbedrohenden“ Schäden?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** sehr hoch

</details>

**4.** Auf einem Server laufen drei Anwendungen mit Schutzbedarf normal, hoch, normal. Welcher Schutzbedarf gilt für den Server (ohne Sondereffekte)?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** hoch<br>Maximumprinzip.

</details>

**5.** Welche Schadsoftware verbreitet sich selbstständig über das Netzwerk?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Wurm

</details>

**6.** Ein Dienst verlangt ein Passwort und zusätzlich eine PIN. Beurteilen Sie, ob das eine echte Zwei-Faktor-Authentifizierung ist, und nennen Sie eine echte Kombination.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Nein – Passwort und PIN gehören beide zum Faktor Wissen (1). Eine echte 2FA kombiniert zwei verschiedene Faktorkategorien: Wissen, Besitz, Inhärenz/Biometrie (1). Beispiel: Passwort + TOTP-Code aus einer Authenticator-App, Passwort + FIDO2-Stick oder Smartcard + PIN (1).<br>Wissen + Besitz.

</details>

**7.** Montag Vollsicherung, Di–Fr inkrementell. Am Freitag nach der Sicherung fällt die Platte aus. Welche Sicherungen braucht man?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Montag + Di + Mi + Do + Fr<br>Vollsicherung + alle Inkremente.

</details>

**8.** Montag Vollsicherung, Di–Fr differenziell. Wiederherstellung am Freitagabend?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Montag + Freitag<br>Vollsicherung + letzte differenzielle.

</details>

**9.** Was besagt die 3-2-1-Regel?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** 3 Kopien, 2 Medien, 1 außer Haus

</details>

**10.** Nennen Sie je zwei technische und zwei organisatorische Maßnahmen der IT-Sicherheit.

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Technisch (je 1): Firewall; Festplattenverschlüsselung (BitLocker); Virenschutz; automatische Updates; Backup; MFA. Organisatorisch (je 1): Passwortrichtlinie; Berechtigungskonzept; Schulungen/Awareness; Notfallplan; Vier-Augen-Prinzip; Besucherregelung.

</details>

**11.** Welche Maßnahmen gehören zur Härtung eines Windows-Clients? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Lokale Adminrechte entziehen; Unnötige Dienste deaktivieren; BitLocker aktivieren. Updates gehören zur Härtung dazu.

</details>

**12.** Eine Firewall erlaubt nur ausdrücklich freigegebene Verbindungen. Wie heißt das Prinzip?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Default Deny

</details>

**13.** Wo werden öffentlich erreichbare Webserver idealerweise platziert?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** In der DMZ

</details>

**14.** Eine E-Mail fordert scheinbar vom Chef eine dringende Überweisung. Wie heißt der Angriff?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** CEO-Fraud<br>Form von Social Engineering/Spear-Phishing.

</details>

**15.** Welche Aussage zu Passwortrichtlinien entspricht der aktuellen BSI-Empfehlung?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Lange Passphrasen statt kurzer komplexer Passwörter; Wechsel bei Verdacht

</details>

**16.** Nennen Sie je eine technische, organisatorische und personelle Maßnahme gegen Phishing. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Technisch (1): Spamfilter/Mail-Gateway, MFA/FIDO2, Linkprüfung, Makros blockieren. Organisatorisch (1): Meldeprozess für verdächtige Mails, Richtlinie (z. B. Rückruf bei Zahlungsanweisungen, Vier-Augen-Prinzip). Personell (1): Awareness-Schulungen, Phishing-Simulationen.

</details>

**17.** Erläutern Sie den Unterschied zwischen inkrementeller und differenzieller Datensicherung, auch im Hinblick auf die Wiederherstellung. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Inkrementell: sichert nur Änderungen seit der letzten Sicherung jeglicher Art → schnell und platzsparend (1); Wiederherstellung braucht die Vollsicherung und alle Inkremente in Reihenfolge → aufwendig/fehleranfällig (1). Differenziell: sichert alle Änderungen seit der letzten Vollsicherung → wächst täglich (1); Wiederherstellung nur mit Vollsicherung + letzter differenzieller → schneller (1).

</details>

**18.** Beschreiben Sie vier Maßnahmen zur Härtung eines neuen Notebooks für den Außendienst. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Je 1: BitLocker-Festplattenverschlüsselung mit TPM (Diebstahlschutz); keine lokalen Adminrechte; aktuelle Updates und Virenschutz; Host-Firewall aktiv; VPN-Pflicht für Firmenzugriff; MFA/Windows Hello; USB-Massenspeicher sperren; Bildschirmsperre und UEFI-Passwort; unnötige Dienste/Software entfernen.

</details>

**19.** Erläutern Sie die drei Schutzziele der Informationssicherheit mit je einer Maßnahme. (6 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (6 P):** Vertraulichkeit: Nur Berechtigte dürfen Informationen einsehen (1) – z. B. Verschlüsselung, Zugriffsrechte (1). Integrität: Daten müssen vollständig und unverfälscht sein bzw. Änderungen erkennbar (1) – z. B. Hashwerte, digitale Signatur (1). Verfügbarkeit: Systeme und Daten müssen bei Bedarf nutzbar sein (1) – z. B. Backup, USV, Redundanz (1).

</details>

**20.** Ein Dienstleister soll Dateien sicher auf einen Linux-Server übertragen. Welches Protokoll?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** SFTP<br>SFTP nutzt SSH-Verschlüsselung.

</details>

**21.** Ein Notebook verbindet sich mit dem WLAN eines Hotels. Welches Firewall-Profil sollte aktiv sein?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Öffentlich<br>Das restriktivste Profil für fremde Netze.

</details>

**22.** Remotedesktop soll nur aus dem Firmennetz 10.0.0.0/16 möglich sein. Wie wird die Personal Firewall angepasst?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Eingehende Regel für TCP 3389 nur mit Remote-IP-Bereich 10.0.0.0/16

</details>

**23.** Was ist ein ISMS?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Ein Managementsystem, das Informationssicherheit dauerhaft steuert und verbessert

</details>

**24.** Eine Mitarbeiterin meldet sich mit Benutzername und Passwort an und darf danach den Ordner „Personal“ nur lesen. Ordnen Sie die Begriffe Authentifizierung und Autorisierung zu und erläutern Sie den Unterschied.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Authentifizierung: die Prüfung von Benutzername und Passwort – die Identität wird nachgewiesen (1). Autorisierung: die Zuweisung des Leserechts auf den Ordner – es wird festgelegt, was die Person darf (1). Die Authentifizierung kommt immer zuerst; ohne geprüfte Identität können keine Rechte vergeben werden (1).

</details>

**25.** Wie heißt der Vorgang, bei dem einem angemeldeten Benutzer Rechte auf Ressourcen zugewiesen werden?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Autorisierung

</details>

**26.** Ein Unternehmen sichert täglich und überschreibt dabei immer die Sicherung vom Vortag. Nach zehn Tagen wird bemerkt, dass eine Datei seit einer Woche beschädigt ist. Erläutern Sie das Problem und schlagen Sie eine Lösung vor.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Es gibt nur einen einzigen Sicherungsstand – und der enthält die beschädigte Datei bereits (1). Ein unversehrter älterer Stand existiert nicht mehr (1). Lösung: Generationenprinzip (Großvater-Vater-Sohn) mit täglichen, wöchentlichen und monatlichen Sicherungen, die getrennt aufbewahrt werden (1).

</details>

**27.** Erläutern Sie den Unterschied zwischen Backup und Archivierung.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Ein Backup ist eine Kopie der aktuellen Daten für die Wiederherstellung nach Verlust; es wird regelmäßig überschrieben (1). Die Archivierung bewahrt abgeschlossene Daten langfristig und unveränderbar auf, z. B. Rechnungen für die gesetzliche Aufbewahrungsfrist (1).

</details>


[⬅ Inhaltsverzeichnis](README.md)
