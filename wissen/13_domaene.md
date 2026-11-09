# 🏢 Domäne, Benutzer & Administration

*Bereich: Netzwerk · Prüfungsrelevanz: ★★★*

> Arbeitsgruppe vs. Domäne, AD DS, Entra ID, Domänenbeitritt, GPO, Rechte, Freigaben, Remote, Troubleshooting.

[⬅ Inhaltsverzeichnis](README.md)

---

## Arbeitsgruppe vs. Domäne

<table><tr><th></th><th>Arbeitsgruppe (Workgroup)</th><th>Domäne</th></tr>
<tr><td>Verwaltung</td><td>dezentral, jeder PC verwaltet eigene lokale Konten</td><td>zentral über Domänencontroller (DC)</td></tr>
<tr><td>Anmeldung</td><td>lokal an jedem Gerät</td><td>ein Konto für alle Geräte (Single Sign-On)</td></tr>
<tr><td>Richtlinien</td><td>manuell je Gerät</td><td>Gruppenrichtlinien (GPO) zentral</td></tr>
<tr><td>Eignung</td><td>sehr kleine Umgebungen (&lt; 10 PCs)</td><td>Unternehmen</td></tr></table>

## Active Directory Domain Services (AD DS)

Verzeichnisdienst von Microsoft: speichert **Objekte** (Benutzer, Gruppen, Computer, Drucker) hierarchisch. Struktur: Gesamtstruktur (Forest) → Strukturen (Trees) → **Domänen** → **Organisationseinheiten (OU)**. Protokolle: **LDAP** (Verzeichniszugriff, 389), **Kerberos** (Authentifizierung mit Tickets, 88), DNS.

- **Domänencontroller**: Server mit AD DS, authentifiziert Benutzer/Computer, repliziert das Verzeichnis mit anderen DCs (Redundanz: mind. 2 DCs).
- **Gruppenrichtlinien (GPO)**: zentral Einstellungen erzwingen – Passwortrichtlinie, Bildschirmsperre, Laufwerkszuordnungen, Softwareverteilung, USB-Sperre, Firewall, Hintergrundbild. Wirken auf OUs; Reihenfolge LSDOU (Lokal, Site, Domäne, OU). Sofort anwenden: `gpupdate /force`, prüfen: `gpresult /r`.
- **AGDLP-Prinzip**: **A**ccounts in **G**lobale Gruppen, diese in **D**omänen**l**okale Gruppen, diesen werden **P**ermissions (Rechte) erteilt → übersichtliche Rechtevergabe.

## Client in die Domäne aufnehmen

1. **Netzwerk**: Client hat IP im richtigen Netz (DHCP), Domänencontroller ist erreichbar (ping).
2. **DNS**: Als DNS-Server muss der **DNS des Domänencontrollers** eingetragen sein – nicht 8.8.8.8 o. Ä.! Der Client findet den DC über DNS-SRV-Einträge. DNS ist der häufigste Fehler beim Domänenbeitritt.
3. **Zeit**: Uhrzeit synchron (NTP) – Kerberos toleriert standardmäßig max. **5 Minuten** Abweichung.
4. **Edition**: Windows Pro/Enterprise/Education (Home kann keiner Domäne beitreten).
5. **Berechtigung**: lokale Adminrechte am Client + Konto mit Recht, Computer zur Domäne hinzuzufügen.
6. Beitritt: Einstellungen → System → Info → „Domäne oder Arbeitsgruppe“ bzw. `Add-Computer -DomainName firma.local` → Neustart.
7. Computerobjekt in die richtige OU verschieben, GPOs prüfen, Anmeldung mit Domänenkonto testen.

Benötigte Ports zum DC u. a.: DNS 53, Kerberos 88, LDAP 389, SMB 445, RPC 135 (+ dynamische Ports).

## Microsoft Entra ID (früher Azure AD)

Cloudbasierter Identitätsdienst für Microsoft 365, Azure und SaaS-Apps (SSO, MFA, bedingter Zugriff). Geräteszenarien laut Microsoft:

<table><tr><th>Status</th><th>Für</th><th>Anmeldung</th></tr>
<tr><td><b>Entra registered</b></td><td>private Geräte (BYOD), Smartphones</td><td>lokales/privates Konto + Arbeitskonto hinzugefügt</td></tr>
<tr><td><b>Entra joined</b></td><td>firmeneigene, cloudbasierte Geräte (auch Homeoffice)</td><td>Entra-ID-Konto; Bereitstellung oft via Autopilot, Verwaltung mit Intune</td></tr>
<tr><td><b>Entra hybrid joined</b></td><td>bestehende AD-Umgebungen</td><td>Gerät ist im lokalen AD <i>und</i> in Entra ID registriert (Sync über Entra Connect)</td></tr></table>

**Intune** = Mobile Device Management (MDM)/Endpoint-Management aus der Cloud: Richtlinien, Apps, Compliance, Fernlöschung.

## Benutzer, Gruppen & Rechte

- **Prinzip der minimalen Rechte (Least Privilege)**: Benutzer arbeiten ohne Adminrechte; Admins nutzen getrennte Admin-Konten.
- **NTFS-Rechte**: Vollzugriff, Ändern, Lesen & Ausführen, Lesen, Schreiben. Vererbung von Ordnern auf Unterordner.
- **Freigaberechte** (über Netzwerk, SMB): Lesen, Ändern, Vollzugriff. Effektiv gilt bei Zugriff übers Netz die **restriktivere** Kombination aus Freigabe- und NTFS-Rechten. „Verweigern“ schlägt „Zulassen“.
- **Netzlaufwerk** verbinden: `net use H: \\server\freigabe` oder per GPO. UNC-Pfad: \\Server\Freigabe.
- **Benutzerprofile**: lokal, servergespeichert (Roaming), Ordnerumleitung (Dokumente auf Server), OneDrive-Known-Folder-Move.

## Fernzugriff

**RDP** (Remotedesktop, Port 3389 – nie direkt ins Internet, nur über VPN/Gateway), Remoteunterstützung (Quick Assist), **SSH** für Linux/Netzwerkgeräte, Fernwartungstools (TeamViewer, AnyDesk) – nur mit Zustimmung des Nutzers und protokolliert. Homeoffice: **VPN** ins Firmennetz.

## Strukturiertes Troubleshooting

1. Problem aufnehmen (Was? Seit wann? Wer betroffen? Was wurde geändert?).
2. Hypothese bilden – systematisch nach OSI-Modell (bottom-up: Kabel/Link → IP → Gateway → DNS → Anwendung).
3. Testen: `ipconfig` → `ping 127.0.0.1` (TCP/IP-Stack) → ping eigene IP → ping Gateway → ping externe IP (8.8.8.8) → ping Name (DNS) → `nslookup` → `tracert`.
4. Lösung umsetzen, testen, **dokumentieren** (Ticket, Wissensdatenbank).

> [!IMPORTANT]
> ping 8.8.8.8 klappt, ping www.example.com nicht → **DNS-Problem**.  
> Ping auf Geräte im LAN klappt, ins Internet nicht → **Gateway/Router** prüfen.

---

## 🃏 Karteikarten (19)

| Frage | Antwort |
|---|---|
| Arbeitsgruppe vs. Domäne | Arbeitsgruppe: dezentral, lokale Konten pro PC. Domäne: zentrale Verwaltung über Domänencontroller, ein Konto für alle Geräte. |
| Häufigster Fehler beim Domänenbeitritt | Falscher DNS-Server – der Client muss den DNS des Domänencontrollers nutzen. |
| Warum Zeitsynchronisation in der Domäne? | Kerberos-Tickets sind zeitbasiert; mehr als 5 Minuten Abweichung → Anmeldung scheitert. |
| Welche Windows-Edition kann keiner Domäne beitreten? | Windows Home. |
| Organisationseinheit (OU) | Container im AD zur Strukturierung von Objekten und zum Verknüpfen von GPOs. |
| Gruppenrichtlinie (GPO) | Zentral definierte Einstellungen für Benutzer/Computer, z. B. Passwortrichtlinie, Laufwerke, USB-Sperre. |
| AGDLP | Accounts → Globale Gruppen → Domänenlokale Gruppen → Permissions. |
| Kerberos | Ticketbasiertes Authentifizierungsprotokoll im AD (Port 88). |
| LDAP | Protokoll für den Zugriff auf Verzeichnisdienste (Port 389, LDAPS 636). |
| Entra registered | Private Geräte (BYOD) mit hinzugefügtem Arbeitskonto. |
| Entra joined | Firmengeräte, direkt an Entra ID angemeldet, cloudverwaltet (Intune/Autopilot). |
| Entra hybrid joined | Gerät ist im lokalen AD Mitglied und zusätzlich in Entra ID registriert. |
| Intune | Cloudbasiertes Endpoint-/Mobile-Device-Management von Microsoft. |
| Least Privilege | Jeder erhält nur die Rechte, die er für seine Aufgabe braucht. |
| Freigabe- + NTFS-Rechte | Übers Netzwerk gilt die restriktivere Kombination; Verweigern schlägt Zulassen. |
| UNC-Pfad | \\Server\Freigabe – Pfad zu einer Netzwerkfreigabe. |
| ping 8.8.8.8 ok, Name nicht auflösbar | DNS-Problem. |
| gpresult /r | Zeigt, welche Gruppenrichtlinien auf Benutzer/Computer angewendet wurden. |
| Warum RDP nie direkt ins Internet? | Port 3389 wird massiv angegriffen (Brute Force, Exploits) – nur über VPN/RD-Gateway mit MFA. |

## ✍️ Übungsfragen (15)

**1.** Ein Client kann der Domäne firma.local nicht beitreten. Als DNS ist 8.8.8.8 eingetragen. Was ist zu tun?
- A) Gateway ändern
- B) DNS-Server des Domänencontrollers eintragen
- C) Firewall deaktivieren
- D) IPv6 abschalten

<details><summary>Lösung</summary>

**B) DNS-Server des Domänencontrollers eintragen**<br>Öffentliche DNS-Server kennen die interne Domäne nicht; der Client findet den DC über DNS.

</details>

**2.** Warum muss die Uhrzeit zwischen Client und DC synchron sein?
- A) Wegen DHCP-Leases
- B) Weil Kerberos zeitbasierte Tickets nutzt
- C) Für die Druckerwarteschlange
- D) Weil NTFS es verlangt

<details><summary>Lösung</summary>

**B) Weil Kerberos zeitbasierte Tickets nutzt**<br>Standardtoleranz 5 Minuten.

</details>

**3.** Welches Tool wendet Gruppenrichtlinien sofort an?
- A) gpresult /r
- B) gpupdate /force
- C) ipconfig /renew
- D) netstat -a

<details><summary>Lösung</summary>

**B) gpupdate /force**

</details>

**4.** Welche Windows-Edition kann einer AD-Domäne NICHT beitreten?
- A) Pro
- B) Enterprise
- C) Education
- D) Home

<details><summary>Lösung</summary>

**D) Home**

</details>

**5.** Ein privates Smartphone soll auf Firmenmails zugreifen. Welcher Entra-Status passt?
- A) Entra joined
- B) Entra registered
- C) Entra hybrid joined
- D) Arbeitsgruppe

<details><summary>Lösung</summary>

**B) Entra registered**<br>BYOD → registered.

</details>

**6.** Ein Unternehmen hat ein lokales AD und möchte Geräte zusätzlich für Cloud-Dienste in Entra ID bekannt machen. Welches Szenario?
- A) Entra registered
- B) Entra joined
- C) Entra hybrid joined
- D) Workgroup

<details><summary>Lösung</summary>

**C) Entra hybrid joined**

</details>

**7.** Freigaberecht „Lesen“, NTFS-Recht „Ändern“. Welches Recht hat ein Benutzer beim Zugriff übers Netzwerk?
- A) Ändern
- B) Lesen
- C) Vollzugriff
- D) Kein Zugriff

<details><summary>Lösung</summary>

**B) Lesen**<br>Die restriktivere Kombination gilt.

</details>

**8.** Ping auf 8.8.8.8 funktioniert, ping www.ihk.de liefert „Host nicht gefunden“. Wo liegt der Fehler?
- A) Kabel
- B) DNS
- C) Gateway
- D) Switch

<details><summary>Lösung</summary>

**B) DNS**<br>IP-Konnektivität ist da, Namensauflösung fehlt.

</details>

**9.** Wofür steht das „D“ und „L“ in AGDLP?
- A) Domänenlokale Gruppe
- B) Domain Login
- C) Data Link
- D) Directory LDAP

<details><summary>Lösung</summary>

**A) Domänenlokale Gruppe**

</details>

**10.** Welche Voraussetzungen braucht ein Windows-Client für den Domänenbeitritt? (mehrere)
- A) DNS zeigt auf Domänencontroller
- B) Synchronisierte Uhrzeit
- C) Windows Home Edition
- D) Konto mit Berechtigung zum Hinzufügen von Computern

<details><summary>Lösung</summary>

**A) DNS zeigt auf Domänencontroller, B) Synchronisierte Uhrzeit, D) Konto mit Berechtigung zum Hinzufügen von Computern**<br>Home kann nicht beitreten.

</details>

**11.** Welches Protokoll nutzt AD zur Authentifizierung per Tickets?
- A) LDAP
- B) Kerberos
- C) RADIUS
- D) SMB

<details><summary>Lösung</summary>

**B) Kerberos**

</details>

**12.** In welcher Reihenfolge testen Sie bei „kein Internet“ sinnvoll?
- A) DNS → Gateway → Kabel
- B) Kabel/Link → eigene IP → Gateway → externe IP → DNS
- C) Neustart → Neuinstallation
- D) Router tauschen → Switch tauschen

<details><summary>Lösung</summary>

**B) Kabel/Link → eigene IP → Gateway → externe IP → DNS**<br>Bottom-up nach OSI.

</details>

**13.** Beschreiben Sie vier Schritte bzw. Voraussetzungen, um einen neuen Windows-11-Client in die Domäne firma.local aufzunehmen. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: Windows Pro/Enterprise verwenden; Netzwerkverbindung und IP-Konfiguration im richtigen Netz; DNS-Server des Domänencontrollers eintragen (Namensauflösung firma.local testen); Uhrzeit synchronisieren; mit berechtigtem Domänenkonto beitreten (Systemeinstellungen bzw. Add-Computer) und neu starten; Computerobjekt in passende OU verschieben und Anmeldung mit Domänenkonto testen.

</details>

**14.** Nennen Sie drei Vorteile einer Domäne gegenüber einer Arbeitsgruppe. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: zentrale Benutzerverwaltung (ein Konto für alle Geräte/SSO); zentrale Richtlinien per GPO; zentrale Rechtevergabe auf Ressourcen; einfache Sperrung ausgeschiedener Mitarbeiter; Softwareverteilung; bessere Skalierbarkeit und Sicherheit.

</details>

**15.** Ein Benutzer meldet: „Ich komme nicht ins Internet.“ Beschreiben Sie ein systematisches Vorgehen mit drei konkreten Befehlen. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Vorgehen bottom-up nach OSI (1). Befehle mit Zweck (je 1): ipconfig /all – IP, Gateway, DNS prüfen (APIPA?); ping Gateway bzw. ping 8.8.8.8 – Erreichbarkeit lokal/Internet; nslookup www.beispiel.de – DNS-Auflösung prüfen; tracert – Route verfolgen. Abschließend Lösung testen und dokumentieren.

</details>


[⬅ Inhaltsverzeichnis](README.md)
