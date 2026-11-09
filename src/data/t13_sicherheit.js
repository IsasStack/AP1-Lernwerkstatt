T.push({
id:"sicherheit", title:"IT-Sicherheit", icon:"🛡️", area:"Sicherheit", weight:3,
summary:"Schutzziele, BSI-Grundschutz, Schutzbedarf, Bedrohungen, Maßnahmen, Härtung, 2FA, Firewall, VPN, Backup.",
lesson:`
<h3>Schutzziele (Grundwerte)</h3>
<table><tr><th>Schutzziel</th><th>Bedeutung</th><th>Maßnahmen</th></tr>
<tr><td><b>Vertraulichkeit</b></td><td>nur Befugte haben Zugriff</td><td>Verschlüsselung, Zugriffsrechte, Authentifizierung</td></tr>
<tr><td><b>Integrität</b></td><td>Daten sind korrekt und unverändert; Änderungen erkennbar</td><td>Hashwerte, digitale Signaturen, Protokollierung, Rechte</td></tr>
<tr><td><b>Verfügbarkeit</b></td><td>Systeme/Daten stehen bei Bedarf zur Verfügung</td><td>Backups, USV, Redundanz, DDoS-Schutz, Wartung</td></tr></table>
<p>Erweitert: <b>Authentizität</b> (Echtheit des Kommunikationspartners/der Daten), <b>Verbindlichkeit/Nichtabstreitbarkeit</b>, Zurechenbarkeit.</p>
<h3>BSI IT-Grundschutz</h3>
<p>Methodik des Bundesamts für Sicherheit in der Informationstechnik: BSI-Standards <b>200-1</b> (ISMS), <b>200-2</b> (Vorgehensweise), <b>200-3</b> (Risikoanalyse), <b>200-4</b> (Notfallmanagement/BCM) + <b>IT-Grundschutz-Kompendium</b> mit Bausteinen (z. B. SYS.2.2.3 Clients unter Windows, NET.2.2 WLAN-Nutzung, CON.3 Datensicherungskonzept, ORP.4 Identitäts- und Berechtigungsmanagement).</p>
<p><b>Vorgehen (200-2)</b>: Strukturanalyse → <b>Schutzbedarfsfeststellung</b> → Modellierung (Bausteine zuordnen) → IT-Grundschutz-Check (Soll-Ist) → ggf. Risikoanalyse → Umsetzung.</p>
<table><tr><th>Schutzbedarfskategorie</th><th>Schadensauswirkung</th></tr>
<tr><td>normal</td><td>begrenzt und überschaubar</td></tr>
<tr><td>hoch</td><td>beträchtlich</td></tr>
<tr><td>sehr hoch</td><td>existenziell bedrohlich, katastrophal</td></tr></table>
<p>Bewertet wird je Grundwert (V, I, V). <b>Maximumprinzip</b>: Ein IT-System erbt den höchsten Schutzbedarf der darauf laufenden Anwendungen. Kumulationseffekt (viele kleine Schäden ergeben höheren Bedarf), Verteilungseffekt (Redundanz senkt Bedarf). Bei „hoch“/„sehr hoch“ ist eine Risikoanalyse nach 200-3 nötig. Schutzbedarf wird festgestellt für Anwendungen, IT-Systeme, Räume, Kommunikationsverbindungen.</p>
<h3>Bedrohungen</h3>
<ul><li><b>Malware</b>: Virus (hängt sich an Dateien, braucht Wirt), Wurm (verbreitet sich selbstständig über Netz), Trojaner (getarnt als nützliches Programm), <b>Ransomware</b> (verschlüsselt Daten, Lösegeld), Spyware, Keylogger, Rootkit, Botnetz.</li>
<li><b>Social Engineering</b>: Manipulation von Menschen – <b>Phishing</b> (gefälschte Mails/Seiten), Spear-Phishing (gezielt), Vishing (Telefon), Smishing (SMS), CEO-Fraud, Quishing (QR-Code), Tailgating (hinterherlaufen).</li>
<li>Angriffe: Brute Force, Wörterbuchangriff, Credential Stuffing, Man-in-the-Middle, DoS/DDoS, SQL-Injection, XSS, Zero-Day-Exploit.</li>
<li>Höhere Gewalt/Technik: Brand, Wasser, Stromausfall, Hardwaredefekt, menschliches Versagen.</li></ul>
<h3>Maßnahmen-Kategorien (TOP)</h3>
<ul><li><b>Technisch</b>: Firewall, Virenschutz/EDR, Updates/Patchmanagement, Verschlüsselung, MFA, Backup, Spamfilter, VPN.</li>
<li><b>Organisatorisch</b>: Sicherheitsrichtlinie, Passwort-Policy, Berechtigungskonzept, Notfallplan, IT-Sicherheitsbeauftragter, Clean-Desk-Policy, Vier-Augen-Prinzip.</li>
<li><b>Personell</b>: Schulungen/Awareness, Verpflichtung auf Vertraulichkeit, geregelter Ein-/Austritt.</li>
<li><b>Infrastrukturell</b>: Zutrittskontrolle, abschließbarer Serverraum, Brandschutz, Klimatisierung, USV.</li></ul>
<p><b>Security by Design</b>: Sicherheit von Anfang an in Entwicklung/Planung berücksichtigen. <b>Security by Default</b>: sichere Grundeinstellungen ab Werk (z. B. kein Standardpasswort, Dienste aus).</p>
<h3>Härtung eines Arbeitsplatzes</h3>
<ul><li>Aktuelles, unterstütztes OS; automatische Updates; Firmware/UEFI aktuell, Secure Boot an, UEFI-Passwort.</li>
<li>Keine lokalen Adminrechte für Nutzer; Standardkonten deaktivieren/umbenennen.</li>
<li>Nicht benötigte Dienste, Programme, Ports deaktivieren; USB-Massenspeicher per GPO sperren.</li>
<li>Festplattenverschlüsselung (<b>BitLocker</b> mit TPM), Virenschutz (Defender), Host-Firewall aktiv.</li>
<li>Bildschirmsperre nach kurzer Inaktivität, Windows Hello/MFA, Application Control (AppLocker), Makros aus dem Internet blockieren.</li>
<li>Protokollierung aktivieren, Konfiguration dokumentieren (Baseline, z. B. Microsoft Security Baselines/CIS).</li></ul>
<h3>Authentifizierung</h3>
<p>Faktoren: <b>Wissen</b> (Passwort, PIN), <b>Besitz</b> (Smartphone-App, Hardware-Token, Smartcard), <b>Inhärenz/Sein</b> (Fingerabdruck, Gesicht). <b>2FA/MFA</b> = mindestens zwei <b>verschiedene</b> Kategorien (Passwort + PIN ist keine 2FA!). Einmalpasswörter: TOTP (zeitbasiert, 30 s), HOTP. Phishing-resistent: <b>FIDO2/Passkeys</b>, Windows Hello for Business.</p>
<p><b>Passwortrichtlinie</b> (nach BSI/NIST heute): lieber <b>lang</b> (≥ 12–14 Zeichen, Passphrase) als komplex; kein regelmäßiger Zwangswechsel, sondern bei Verdacht auf Kompromittierung; keine Wiederverwendung; Passwortmanager; Kontosperre nach Fehlversuchen; Abgleich mit Leak-Listen.</p>
<h3>Firewall & VPN</h3>
<ul><li><b>Paketfilter</b> (L3/L4): erlaubt/verbietet nach IP, Port, Protokoll. <b>Stateful Inspection</b>: merkt sich Verbindungszustände. <b>Application-Level-Gateway/Proxy</b> (L7): prüft Inhalte. <b>Next-Generation Firewall</b>: + IPS, App-Erkennung. <b>WAF</b>: schützt Webanwendungen. Personal/Host-Firewall auf dem Client.</li>
<li>Grundregel: <b>Default Deny</b> – alles verboten, was nicht explizit erlaubt ist.</li>
<li><b>DMZ</b>: eigenes Netzsegment für öffentlich erreichbare Server zwischen zwei Firewalls.</li>
<li><b>VPN</b>: verschlüsselter Tunnel über unsichere Netze. Site-to-Site (Standorte) / Client-to-Site/Remote Access (Homeoffice). Protokolle: IPsec, OpenVPN, WireGuard, SSL-VPN.</li></ul>
<h3>Datensicherung (Backup)</h3>
<table><tr><th>Art</th><th>Sichert</th><th>Wiederherstellung</th></tr>
<tr><td><b>Vollsicherung</b></td><td>alle Daten</td><td>schnell – nur eine Sicherung nötig; braucht viel Platz/Zeit</td></tr>
<tr><td><b>Differenziell</b></td><td>alle Änderungen seit der letzten <b>Vollsicherung</b></td><td>Vollsicherung + letzte differenzielle</td></tr>
<tr><td><b>Inkrementell</b></td><td>Änderungen seit der letzten Sicherung (egal welcher Art)</td><td>Vollsicherung + <b>alle</b> Inkremente der Reihe nach – am aufwendigsten; Sicherung selbst am schnellsten</td></tr></table>
<div class="merke"><b>3-2-1-Regel:</b> 3 Kopien der Daten, auf 2 verschiedenen Medien, davon 1 außer Haus (offsite). Erweitert 3-2-1-1-0: + 1 offline/unveränderbar (Schutz vor Ransomware) + 0 Fehler bei Restore-Tests.</div>
<p>Weitere Begriffe: <b>Generationenprinzip</b> (Großvater-Vater-Sohn), Backup ≠ Archivierung, <b>RPO</b> (max. tolerierter Datenverlust in Zeit), <b>RTO</b> (max. Wiederherstellungsdauer). <b>Restore regelmäßig testen!</b> Redundanz (z. B. gespiegelte Platten) ersetzt kein Backup – gelöschte oder verschlüsselte Daten werden mitgespiegelt.</p>`,
cards:[
["Drei Schutzziele","Vertraulichkeit, Integrität, Verfügbarkeit."],
["Integrität – Maßnahmen","Hashwerte, digitale Signaturen, Zugriffsrechte, Protokollierung."],
["Verfügbarkeit – Maßnahmen","Backup, USV, Redundanz, Wartung, DDoS-Schutz."],
["BSI-Schutzbedarfskategorien","normal (begrenzt), hoch (beträchtlich), sehr hoch (existenzbedrohend)."],
["Maximumprinzip","Ein IT-System übernimmt den höchsten Schutzbedarf der darauf laufenden Anwendungen."],
["BSI-Standard 200-2","IT-Grundschutz-Methodik: Strukturanalyse, Schutzbedarf, Modellierung, Grundschutz-Check."],
["Virus vs. Wurm","Virus braucht Wirtsdatei und Nutzeraktion; Wurm verbreitet sich selbstständig übers Netz."],
["Trojaner","Schadprogramm, das sich als nützliche Software tarnt."],
["Ransomware","Verschlüsselt Daten und fordert Lösegeld."],
["Phishing","Gefälschte Mails/Webseiten, um Zugangsdaten oder Zahlungen zu erschleichen."],
["Social Engineering","Manipulation von Menschen, um an Informationen/Zugang zu gelangen."],
["Technische vs. organisatorische Maßnahme","Technisch: Firewall, Verschlüsselung. Organisatorisch: Richtlinien, Berechtigungskonzept, Notfallplan."],
["Security by Default","Produkte werden mit sicheren Voreinstellungen ausgeliefert."],
["Härtung – vier Maßnahmen","Updates, keine Adminrechte, unnötige Dienste aus, BitLocker, Firewall, USB sperren, Bildschirmsperre."],
["Drei Authentifizierungsfaktoren","Wissen, Besitz, Inhärenz (biometrisch)."],
["Ist Passwort + PIN eine 2FA?","Nein – beides ist Wissen. 2FA braucht zwei verschiedene Faktorkategorien."],
["Default Deny","Firewall-Grundregel: Alles ist verboten, was nicht ausdrücklich erlaubt ist."],
["DMZ","Demilitarisierte Zone: eigenes Netzsegment für öffentlich erreichbare Server."],
["VPN","Verschlüsselter Tunnel über ein unsicheres Netz (z. B. Homeoffice ↔ Firma)."],
["Differenzielle Sicherung","Alle Änderungen seit der letzten Vollsicherung."],
["Inkrementelle Sicherung","Änderungen seit der letzten Sicherung (egal welcher Art)."],
["Restore bei inkrementeller Sicherung","Letzte Vollsicherung + alle folgenden Inkremente in Reihenfolge."],
["3-2-1-Regel","3 Kopien, 2 verschiedene Medien, 1 Kopie außer Haus."],
["RPO / RTO","RPO: maximal tolerierter Datenverlust (Zeit). RTO: maximal tolerierte Wiederherstellungsdauer."],
["Warum ersetzt Spiegelung kein Backup?","Löschung, Verschlüsselung (Ransomware) oder Fehler werden sofort mitgespiegelt."]
],
qs:[
{t:"sc",q:"Ein Angreifer verändert unbemerkt Überweisungsdaten. Welches Schutzziel ist verletzt?",o:["Vertraulichkeit","Integrität","Verfügbarkeit","Anonymität"],a:1,e:"Unerlaubte Veränderung = Integrität."},
{t:"sc",q:"Ein Server fällt durch einen Stromausfall aus. Welches Schutzziel ist betroffen?",o:["Vertraulichkeit","Integrität","Verfügbarkeit","Authentizität"],a:2,e:""},
{t:"sc",q:"Welche Schutzbedarfskategorie nach BSI gilt bei „existenzbedrohenden“ Schäden?",o:["normal","hoch","sehr hoch","kritisch"],a:2,e:""},
{t:"sc",q:"Auf einem Server laufen drei Anwendungen mit Schutzbedarf normal, hoch, normal. Welcher Schutzbedarf gilt für den Server (ohne Sondereffekte)?",o:["normal","hoch","sehr hoch","Durchschnitt"],a:1,e:"Maximumprinzip."},
{t:"sc",q:"Welche Schadsoftware verbreitet sich selbstständig über das Netzwerk?",o:["Virus","Wurm","Trojaner","Adware"],a:1,e:""},
{t:"sc",q:"Welche Kombination ist eine echte Zwei-Faktor-Authentifizierung?",o:["Passwort + Sicherheitsfrage","Passwort + TOTP-Code aus Authenticator-App","PIN + Passwort","Benutzername + Passwort"],a:1,e:"Wissen + Besitz."},
{t:"sc",q:"Montag Vollsicherung, Di–Fr inkrementell. Am Freitag nach der Sicherung fällt die Platte aus. Welche Sicherungen braucht man?",o:["Nur Freitag","Montag + Freitag","Montag + Di + Mi + Do + Fr","Nur Montag"],a:2,e:"Vollsicherung + alle Inkremente."},
{t:"sc",q:"Montag Vollsicherung, Di–Fr differenziell. Wiederherstellung am Freitagabend?",o:["Montag + Freitag","Alle Sicherungen","Nur Freitag","Montag + Donnerstag + Freitag"],a:0,e:"Vollsicherung + letzte differenzielle."},
{t:"sc",q:"Was besagt die 3-2-1-Regel?",o:["3 Admins, 2 Server, 1 Firewall","3 Kopien, 2 Medien, 1 außer Haus","3 Backups pro Tag","3 Monate Aufbewahrung"],a:1,e:""},
{t:"sc",q:"Welche ist eine organisatorische Maßnahme?",o:["Firewall","Passwortrichtlinie","BitLocker","Virenscanner"],a:1,e:""},
{t:"mc",q:"Welche Maßnahmen gehören zur Härtung eines Windows-Clients? (mehrere)",o:["Lokale Adminrechte entziehen","Unnötige Dienste deaktivieren","Automatische Updates abschalten","BitLocker aktivieren"],a:[0,1,3],e:"Updates gehören zur Härtung dazu."},
{t:"sc",q:"Eine Firewall erlaubt nur ausdrücklich freigegebene Verbindungen. Wie heißt das Prinzip?",o:["Default Allow","Default Deny","Least Effort","Fail Open"],a:1,e:""},
{t:"sc",q:"Wo werden öffentlich erreichbare Webserver idealerweise platziert?",o:["Im internen LAN","In der DMZ","Im Gast-WLAN","Am Arbeitsplatz"],a:1,e:""},
{t:"sc",q:"Eine E-Mail fordert scheinbar vom Chef eine dringende Überweisung. Wie heißt der Angriff?",o:["CEO-Fraud","DDoS","SQL-Injection","Tailgating"],a:0,e:"Form von Social Engineering/Spear-Phishing."},
{t:"sc",q:"Welche Aussage zu Passwortrichtlinien entspricht der aktuellen BSI-Empfehlung?",o:["Monatlicher Zwangswechsel","Lange Passphrasen statt kurzer komplexer Passwörter; Wechsel bei Verdacht","Max. 8 Zeichen","Gleiches Passwort für alle Dienste"],a:1,e:""},
{t:"open",q:"Nennen Sie je eine technische, organisatorische und personelle Maßnahme gegen Phishing. (3 Punkte)",p:3,a:"Technisch (1): Spamfilter/Mail-Gateway, MFA/FIDO2, Linkprüfung, Makros blockieren. Organisatorisch (1): Meldeprozess für verdächtige Mails, Richtlinie (z. B. Rückruf bei Zahlungsanweisungen, Vier-Augen-Prinzip). Personell (1): Awareness-Schulungen, Phishing-Simulationen."},
{t:"open",q:"Erläutern Sie den Unterschied zwischen inkrementeller und differenzieller Datensicherung, auch im Hinblick auf die Wiederherstellung. (4 Punkte)",p:4,a:"Inkrementell: sichert nur Änderungen seit der letzten Sicherung jeglicher Art → schnell und platzsparend (1); Wiederherstellung braucht die Vollsicherung und alle Inkremente in Reihenfolge → aufwendig/fehleranfällig (1). Differenziell: sichert alle Änderungen seit der letzten Vollsicherung → wächst täglich (1); Wiederherstellung nur mit Vollsicherung + letzter differenzieller → schneller (1)."},
{t:"open",q:"Beschreiben Sie vier Maßnahmen zur Härtung eines neuen Notebooks für den Außendienst. (4 Punkte)",p:4,a:"Je 1: BitLocker-Festplattenverschlüsselung mit TPM (Diebstahlschutz); keine lokalen Adminrechte; aktuelle Updates und Virenschutz; Host-Firewall aktiv; VPN-Pflicht für Firmenzugriff; MFA/Windows Hello; USB-Massenspeicher sperren; Bildschirmsperre und UEFI-Passwort; unnötige Dienste/Software entfernen."},
{t:"open",q:"Erläutern Sie die drei Schutzziele der Informationssicherheit mit je einer Maßnahme. (6 Punkte)",p:6,a:"Vertraulichkeit: Nur Berechtigte dürfen Informationen einsehen (1) – z. B. Verschlüsselung, Zugriffsrechte (1). Integrität: Daten müssen vollständig und unverfälscht sein bzw. Änderungen erkennbar (1) – z. B. Hashwerte, digitale Signatur (1). Verfügbarkeit: Systeme und Daten müssen bei Bedarf nutzbar sein (1) – z. B. Backup, USV, Redundanz (1)."}
]
});
