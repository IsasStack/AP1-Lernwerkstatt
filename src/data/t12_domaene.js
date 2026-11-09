T.push({
id:"domaene", title:"Domäne, Benutzer & Administration", icon:"🏢", area:"Netzwerk", weight:3,
summary:"Arbeitsgruppe vs. Domäne, AD DS, Entra ID, Domänenbeitritt, GPO, Rechte, Freigaben, Remote, Troubleshooting.",
lesson:`
<h3>Arbeitsgruppe vs. Domäne</h3>
<table><tr><th></th><th>Arbeitsgruppe (Workgroup)</th><th>Domäne</th></tr>
<tr><td>Verwaltung</td><td>dezentral, jeder PC verwaltet eigene lokale Konten</td><td>zentral über Domänencontroller (DC)</td></tr>
<tr><td>Anmeldung</td><td>lokal an jedem Gerät</td><td>ein Konto für alle Geräte (Single Sign-On)</td></tr>
<tr><td>Richtlinien</td><td>manuell je Gerät</td><td>Gruppenrichtlinien (GPO) zentral</td></tr>
<tr><td>Eignung</td><td>sehr kleine Umgebungen (&lt; 10 PCs)</td><td>Unternehmen</td></tr></table>
<h3>Active Directory Domain Services (AD DS)</h3>
<p>Verzeichnisdienst von Microsoft: speichert <b>Objekte</b> (Benutzer, Gruppen, Computer, Drucker) hierarchisch. Struktur: Gesamtstruktur (Forest) → Strukturen (Trees) → <b>Domänen</b> → <b>Organisationseinheiten (OU)</b>. Protokolle: <b>LDAP</b> (Verzeichniszugriff, 389), <b>Kerberos</b> (Authentifizierung mit Tickets, 88), DNS.</p>
<ul><li><b>Domänencontroller</b>: Server mit AD DS, authentifiziert Benutzer/Computer, repliziert das Verzeichnis mit anderen DCs (Redundanz: mind. 2 DCs).</li>
<li><b>Gruppenrichtlinien (GPO)</b>: zentral Einstellungen erzwingen – Passwortrichtlinie, Bildschirmsperre, Laufwerkszuordnungen, Softwareverteilung, USB-Sperre, Firewall, Hintergrundbild. Wirken auf OUs; Reihenfolge LSDOU (Lokal, Site, Domäne, OU). Sofort anwenden: <code>gpupdate /force</code>, prüfen: <code>gpresult /r</code>.</li>
<li><b>AGDLP-Prinzip</b>: <b>A</b>ccounts in <b>G</b>lobale Gruppen, diese in <b>D</b>omänen<b>l</b>okale Gruppen, diesen werden <b>P</b>ermissions (Rechte) erteilt → übersichtliche Rechtevergabe.</li></ul>
<h3>Client in die Domäne aufnehmen</h3>
<ol><li><b>Netzwerk</b>: Client hat IP im richtigen Netz (DHCP), Domänencontroller ist erreichbar (ping).</li>
<li><b>DNS</b>: Als DNS-Server muss der <b>DNS des Domänencontrollers</b> eingetragen sein – nicht 8.8.8.8 o. Ä.! Der Client findet den DC über DNS-SRV-Einträge. DNS ist der häufigste Fehler beim Domänenbeitritt.</li>
<li><b>Zeit</b>: Uhrzeit synchron (NTP) – Kerberos toleriert standardmäßig max. <b>5 Minuten</b> Abweichung.</li>
<li><b>Edition</b>: Windows Pro/Enterprise/Education (Home kann keiner Domäne beitreten).</li>
<li><b>Berechtigung</b>: lokale Adminrechte am Client + Konto mit Recht, Computer zur Domäne hinzuzufügen.</li>
<li>Beitritt: Einstellungen → System → Info → „Domäne oder Arbeitsgruppe“ bzw. <code>Add-Computer -DomainName firma.local</code> → Neustart.</li>
<li>Computerobjekt in die richtige OU verschieben, GPOs prüfen, Anmeldung mit Domänenkonto testen.</li></ol>
<p>Benötigte Ports zum DC u. a.: DNS 53, Kerberos 88, LDAP 389, SMB 445, RPC 135 (+ dynamische Ports).</p>
<h3>Microsoft Entra ID (früher Azure AD)</h3>
<p>Cloudbasierter Identitätsdienst für Microsoft 365, Azure und SaaS-Apps (SSO, MFA, bedingter Zugriff). Geräteszenarien laut Microsoft:</p>
<table><tr><th>Status</th><th>Für</th><th>Anmeldung</th></tr>
<tr><td><b>Entra registered</b></td><td>private Geräte (BYOD), Smartphones</td><td>lokales/privates Konto + Arbeitskonto hinzugefügt</td></tr>
<tr><td><b>Entra joined</b></td><td>firmeneigene, cloudbasierte Geräte (auch Homeoffice)</td><td>Entra-ID-Konto; Bereitstellung oft via Autopilot, Verwaltung mit Intune</td></tr>
<tr><td><b>Entra hybrid joined</b></td><td>bestehende AD-Umgebungen</td><td>Gerät ist im lokalen AD <i>und</i> in Entra ID registriert (Sync über Entra Connect)</td></tr></table>
<p><b>Intune</b> = Mobile Device Management (MDM)/Endpoint-Management aus der Cloud: Richtlinien, Apps, Compliance, Fernlöschung.</p>
<h3>Benutzer, Gruppen & Rechte</h3>
<ul><li><b>Prinzip der minimalen Rechte (Least Privilege)</b>: Benutzer arbeiten ohne Adminrechte; Admins nutzen getrennte Admin-Konten.</li>
<li><b>NTFS-Rechte</b>: Vollzugriff, Ändern, Lesen & Ausführen, Lesen, Schreiben. Vererbung von Ordnern auf Unterordner.</li>
<li><b>Freigaberechte</b> (über Netzwerk, SMB): Lesen, Ändern, Vollzugriff. Effektiv gilt bei Zugriff übers Netz die <b>restriktivere</b> Kombination aus Freigabe- und NTFS-Rechten. „Verweigern“ schlägt „Zulassen“.</li>
<li><b>Netzlaufwerk</b> verbinden: <code>net use H: \\\\server\\freigabe</code> oder per GPO. UNC-Pfad: \\\\Server\\Freigabe.</li>
<li><b>Benutzerprofile</b>: lokal, servergespeichert (Roaming), Ordnerumleitung (Dokumente auf Server), OneDrive-Known-Folder-Move.</li></ul>
<h3>Fernzugriff</h3>
<p><b>RDP</b> (Remotedesktop, Port 3389 – nie direkt ins Internet, nur über VPN/Gateway), Remoteunterstützung (Quick Assist), <b>SSH</b> für Linux/Netzwerkgeräte, Fernwartungstools (TeamViewer, AnyDesk) – nur mit Zustimmung des Nutzers und protokolliert. Homeoffice: <b>VPN</b> ins Firmennetz.</p>
<h3>Strukturiertes Troubleshooting</h3>
<ol><li>Problem aufnehmen (Was? Seit wann? Wer betroffen? Was wurde geändert?).</li>
<li>Hypothese bilden – systematisch nach OSI-Modell (bottom-up: Kabel/Link → IP → Gateway → DNS → Anwendung).</li>
<li>Testen: <code>ipconfig</code> → <code>ping 127.0.0.1</code> (TCP/IP-Stack) → ping eigene IP → ping Gateway → ping externe IP (8.8.8.8) → ping Name (DNS) → <code>nslookup</code> → <code>tracert</code>.</li>
<li>Lösung umsetzen, testen, <b>dokumentieren</b> (Ticket, Wissensdatenbank).</li></ol>
<div class="merke">ping 8.8.8.8 klappt, ping www.example.com nicht → <b>DNS-Problem</b>.<br>Ping auf Geräte im LAN klappt, ins Internet nicht → <b>Gateway/Router</b> prüfen.</div>`,
cards:[
["Arbeitsgruppe vs. Domäne","Arbeitsgruppe: dezentral, lokale Konten pro PC. Domäne: zentrale Verwaltung über Domänencontroller, ein Konto für alle Geräte."],
["Häufigster Fehler beim Domänenbeitritt","Falscher DNS-Server – der Client muss den DNS des Domänencontrollers nutzen."],
["Warum Zeitsynchronisation in der Domäne?","Kerberos-Tickets sind zeitbasiert; mehr als 5 Minuten Abweichung → Anmeldung scheitert."],
["Welche Windows-Edition kann keiner Domäne beitreten?","Windows Home."],
["Organisationseinheit (OU)","Container im AD zur Strukturierung von Objekten und zum Verknüpfen von GPOs."],
["Gruppenrichtlinie (GPO)","Zentral definierte Einstellungen für Benutzer/Computer, z. B. Passwortrichtlinie, Laufwerke, USB-Sperre."],
["AGDLP","Accounts → Globale Gruppen → Domänenlokale Gruppen → Permissions."],
["Kerberos","Ticketbasiertes Authentifizierungsprotokoll im AD (Port 88)."],
["LDAP","Protokoll für den Zugriff auf Verzeichnisdienste (Port 389, LDAPS 636)."],
["Entra registered","Private Geräte (BYOD) mit hinzugefügtem Arbeitskonto."],
["Entra joined","Firmengeräte, direkt an Entra ID angemeldet, cloudverwaltet (Intune/Autopilot)."],
["Entra hybrid joined","Gerät ist im lokalen AD Mitglied und zusätzlich in Entra ID registriert."],
["Intune","Cloudbasiertes Endpoint-/Mobile-Device-Management von Microsoft."],
["Least Privilege","Jeder erhält nur die Rechte, die er für seine Aufgabe braucht."],
["Freigabe- + NTFS-Rechte","Übers Netzwerk gilt die restriktivere Kombination; Verweigern schlägt Zulassen."],
["UNC-Pfad","\\\\Server\\Freigabe – Pfad zu einer Netzwerkfreigabe."],
["ping 8.8.8.8 ok, Name nicht auflösbar","DNS-Problem."],
["gpresult /r","Zeigt, welche Gruppenrichtlinien auf Benutzer/Computer angewendet wurden."],
["Warum RDP nie direkt ins Internet?","Port 3389 wird massiv angegriffen (Brute Force, Exploits) – nur über VPN/RD-Gateway mit MFA."]
],
qs:[
{t:"sc",q:"Ein Client kann der Domäne firma.local nicht beitreten. Als DNS ist 8.8.8.8 eingetragen. Was ist zu tun?",o:["Gateway ändern","DNS-Server des Domänencontrollers eintragen","Firewall deaktivieren","IPv6 abschalten"],a:1,e:"Öffentliche DNS-Server kennen die interne Domäne nicht; der Client findet den DC über DNS."},
{t:"sc",q:"Warum muss die Uhrzeit zwischen Client und DC synchron sein?",o:["Wegen DHCP-Leases","Weil Kerberos zeitbasierte Tickets nutzt","Für die Druckerwarteschlange","Weil NTFS es verlangt"],a:1,e:"Standardtoleranz 5 Minuten."},
{t:"sc",q:"Welches Tool wendet Gruppenrichtlinien sofort an?",o:["gpresult /r","gpupdate /force","ipconfig /renew","netstat -a"],a:1,e:""},
{t:"sc",q:"Welche Windows-Edition kann einer AD-Domäne NICHT beitreten?",o:["Pro","Enterprise","Education","Home"],a:3,e:""},
{t:"sc",q:"Ein privates Smartphone soll auf Firmenmails zugreifen. Welcher Entra-Status passt?",o:["Entra joined","Entra registered","Entra hybrid joined","Arbeitsgruppe"],a:1,e:"BYOD → registered."},
{t:"sc",q:"Ein Unternehmen hat ein lokales AD und möchte Geräte zusätzlich für Cloud-Dienste in Entra ID bekannt machen. Welches Szenario?",o:["Entra registered","Entra joined","Entra hybrid joined","Workgroup"],a:2,e:""},
{t:"sc",q:"Freigaberecht „Lesen“, NTFS-Recht „Ändern“. Welches Recht hat ein Benutzer beim Zugriff übers Netzwerk?",o:["Ändern","Lesen","Vollzugriff","Kein Zugriff"],a:1,e:"Die restriktivere Kombination gilt."},
{t:"sc",q:"Ping auf 8.8.8.8 funktioniert, ping www.ihk.de liefert „Host nicht gefunden“. Wo liegt der Fehler?",o:["Kabel","DNS","Gateway","Switch"],a:1,e:"IP-Konnektivität ist da, Namensauflösung fehlt."},
{t:"sc",q:"Wofür steht das „D“ und „L“ in AGDLP?",o:["Domänenlokale Gruppe","Domain Login","Data Link","Directory LDAP"],a:0,e:""},
{t:"mc",q:"Welche Voraussetzungen braucht ein Windows-Client für den Domänenbeitritt? (mehrere)",o:["DNS zeigt auf Domänencontroller","Synchronisierte Uhrzeit","Windows Home Edition","Konto mit Berechtigung zum Hinzufügen von Computern"],a:[0,1,3],e:"Home kann nicht beitreten."},
{t:"sc",q:"Welches Protokoll nutzt AD zur Authentifizierung per Tickets?",o:["LDAP","Kerberos","RADIUS","SMB"],a:1,e:""},
{t:"sc",q:"In welcher Reihenfolge testen Sie bei „kein Internet“ sinnvoll?",o:["DNS → Gateway → Kabel","Kabel/Link → eigene IP → Gateway → externe IP → DNS","Neustart → Neuinstallation","Router tauschen → Switch tauschen"],a:1,e:"Bottom-up nach OSI."},
{t:"open",q:"Beschreiben Sie vier Schritte bzw. Voraussetzungen, um einen neuen Windows-11-Client in die Domäne firma.local aufzunehmen. (4 Punkte)",p:4,a:"Je 1: Windows Pro/Enterprise verwenden; Netzwerkverbindung und IP-Konfiguration im richtigen Netz; DNS-Server des Domänencontrollers eintragen (Namensauflösung firma.local testen); Uhrzeit synchronisieren; mit berechtigtem Domänenkonto beitreten (Systemeinstellungen bzw. Add-Computer) und neu starten; Computerobjekt in passende OU verschieben und Anmeldung mit Domänenkonto testen."},
{t:"open",q:"Nennen Sie drei Vorteile einer Domäne gegenüber einer Arbeitsgruppe. (3 Punkte)",p:3,a:"Je 1: zentrale Benutzerverwaltung (ein Konto für alle Geräte/SSO); zentrale Richtlinien per GPO; zentrale Rechtevergabe auf Ressourcen; einfache Sperrung ausgeschiedener Mitarbeiter; Softwareverteilung; bessere Skalierbarkeit und Sicherheit."},
{t:"open",q:"Ein Benutzer meldet: „Ich komme nicht ins Internet.“ Beschreiben Sie ein systematisches Vorgehen mit drei konkreten Befehlen. (4 Punkte)",p:4,a:"Vorgehen bottom-up nach OSI (1). Befehle mit Zweck (je 1): ipconfig /all – IP, Gateway, DNS prüfen (APIPA?); ping Gateway bzw. ping 8.8.8.8 – Erreichbarkeit lokal/Internet; nslookup www.beispiel.de – DNS-Auflösung prüfen; tracert – Route verfolgen. Abschließend Lösung testen und dokumentieren."}
]
});
