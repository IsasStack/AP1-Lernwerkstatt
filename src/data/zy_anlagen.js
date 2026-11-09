const ANL = [
{id:"a_monitor", icon:"🖥️", title:"Datenblatt: Monitor für die Grafikabteilung", tags:["Datenblatt","Englisch","Hardware"],
 sit:"Eine Grafikerin arbeitet mit einem Business-Notebook (USB-C, benötigt 65 W zum Laden) und braucht einen Monitor für farbverbindliche Bildbearbeitung. Am Arbeitsplatz soll möglichst nur ein Kabel angeschlossen werden. Werten Sie das englische Datenblatt (Anlage) aus.",
 att:`<table class="info-tbl"><tr><th colspan="2">VISTA ProColor 27U – Specifications</th></tr>
<tr><td>Panel type</td><td>IPS, 27″, anti-glare</td></tr><tr><td>Resolution</td><td>3840 × 2160 @ 60 Hz</td></tr>
<tr><td>Color gamut</td><td>100 % sRGB, 98 % DCI-P3, 99 % Adobe RGB; factory calibrated (ΔE &lt; 2), hardware calibration supported</td></tr>
<tr><td>Brightness / Contrast</td><td>400 cd/m² / 1300:1</td></tr>
<tr><td>Inputs</td><td>2 × HDMI 2.0, 1 × DisplayPort 1.4, 1 × USB-C (DP Alt Mode, Power Delivery up to 90 W)</td></tr>
<tr><td>USB hub</td><td>4 × USB-A 3.2 Gen 1, RJ45 (1 GbE) via USB-C</td></tr>
<tr><td>Ergonomics</td><td>height-adjustable 130 mm, tilt −5°/+21°, swivel ±45°, pivot 90°</td></tr>
<tr><td>Power consumption</td><td>typical 32 W, max. 180 W (with USB load), standby 0.3 W</td></tr>
<tr><td>Certifications</td><td>TCO Certified, EPEAT, TÜV Flicker Free, EU energy class F</td></tr>
<tr><td>Warranty</td><td>3 years advanced exchange</td></tr></table>`,
 steps:[
 {t:"sc",q:"Ist der Monitor für farbverbindliches Arbeiten geeignet?",o:["Nein, TN-Panel","Ja: IPS-Panel, 99 % Adobe RGB, werkskalibriert, Hardwarekalibrierung möglich","Nein, nur Full HD","Nur mit Zusatzgrafikkarte"],a:1,e:""},
 {t:"sc",q:"Reicht ein einzelnes USB-C-Kabel, um Bild zu übertragen UND das Notebook zu laden?",o:["Nein, Power Delivery fehlt","Ja – DP Alt Mode für das Bild und Power Delivery bis 90 W (Notebook braucht 65 W)","Nur über HDMI","Nein, 90 W sind zu wenig"],a:1,e:""},
 {t:"mc",q:"Welche ergonomischen Funktionen bietet der Monitor laut Datenblatt? (mehrere)",o:["Höhenverstellung","Neigen","Hochkant-Drehung (Pivot)","Integrierte Webcam"],a:[0,1,2],e:"Webcam ist nicht aufgeführt."},
 {t:"num",q:"Der Monitor läuft typisch 8 h an 220 Tagen. Wie viele kWh verbraucht er pro Jahr (typische Leistung)?",a:56.32,tol:0.01,unit:"kWh",e:"0,032 kW × 8 h × 220 = 56,32 kWh."},
 {t:"open",q:"Nennen Sie zwei weitere Vorteile, die sich aus dem USB-Hub mit RJ45 für den Arbeitsplatz ergeben. (2 Punkte)",p:2,a:"Je 1: Netzwerk (LAN) läuft über dasselbe USB-C-Kabel – keine separate Dockingstation nötig; Tastatur/Maus/Peripherie am Monitor angeschlossen; weniger Kabel (Clean Desk); schneller Wechsel des Notebooks (Desk-Sharing)."}
 ]},
{id:"a_notebook", icon:"💻", title:"Angebotsvergleich: Notebooks für den Außendienst", tags:["Datenblatt","Wirtschaft","OS"],
 sit:"Für 10 Außendienstmitarbeitende sollen Notebooks beschafft werden. Anforderungen: Einbindung in Microsoft Entra ID, Festplattenverschlüsselung, mindestens 16 GB RAM, Gewicht unter 1,5 kg, Akkulaufzeit mind. 10 h, mobiles Internet ohne Hotspot.",
 att:`<table class="info-tbl"><tr><th>Merkmal</th><th>Angebot A „Travel 14“</th><th>Angebot B „Office 15“</th><th>Angebot C „Business 14 LTE“</th></tr>
<tr><td>CPU</td><td>Core Ultra 5</td><td>Core i5 (Vorjahr)</td><td>Core Ultra 5</td></tr>
<tr><td>RAM</td><td>16 GB (verlötet)</td><td>8 GB (aufrüstbar)</td><td>16 GB</td></tr>
<tr><td>SSD</td><td>512 GB NVMe</td><td>256 GB SATA</td><td>512 GB NVMe</td></tr>
<tr><td>Betriebssystem</td><td>Windows 11 Home</td><td>Windows 11 Pro</td><td>Windows 11 Pro</td></tr>
<tr><td>TPM 2.0</td><td>ja</td><td>ja</td><td>ja</td></tr>
<tr><td>Gewicht</td><td>1,25 kg</td><td>1,85 kg</td><td>1,38 kg</td></tr>
<tr><td>Akkulaufzeit</td><td>14 h</td><td>7 h</td><td>12 h</td></tr>
<tr><td>Mobilfunk</td><td>–</td><td>–</td><td>LTE/5G-Modul, eSIM</td></tr>
<tr><td>Listenpreis netto</td><td>1.090 €</td><td>890 €</td><td>1.390 €</td></tr>
<tr><td>Rabatt / Skonto</td><td>5 % / 2 %</td><td>– / 3 %</td><td>10 % / 2 %</td></tr></table>`,
 steps:[
 {t:"sc",q:"Welches Angebot erfüllt ALLE Anforderungen?",o:["A","B","C","keines"],a:2,e:"A hat Windows Home (kein Entra Join/BitLocker) und kein LTE; B hat nur 8 GB, ist zu schwer, Akku zu kurz, kein LTE."},
 {t:"sc",q:"Warum scheidet Angebot A trotz guter Hardware aus?",o:["Zu teuer","Windows 11 Home kann nicht in Entra ID eingebunden werden und bietet kein BitLocker; zudem kein Mobilfunk","Kein TPM","Zu schwer"],a:1,e:""},
 {t:"num",q:"Berechnen Sie den Bareinkaufspreis pro Gerät für Angebot C.",a:1225.98,tol:0.01,unit:"€",e:"1.390 − 10 % = 1.251; − 2 % Skonto = 1.225,98 €."},
 {t:"num",q:"Wie hoch ist der Bareinkaufspreis für alle 10 Geräte (Angebot C)?",a:12259.8,tol:0.05,unit:"€",e:"10 × 1.225,98 = 12.259,80 €."},
 {t:"open",q:"Begründen Sie, warum das Mobilfunkmodul für diese Zielgruppe sinnvoll ist. (2 Punkte)",p:2,a:"Die Mitarbeitenden sind unterwegs (Kunde, Bahn, Auto) und brauchen jederzeit Zugriff auf CRM/Mail (1); ein integriertes Modul ist sicherer und bequemer als Smartphone-Hotspot oder öffentliche WLANs und schont den Smartphone-Akku (1)."}
 ]},
{id:"a_advisory", icon:"🚨", title:"Englische Sicherheitswarnung (Security Advisory)", tags:["Englisch","Sicherheit"],
 sit:"Ihr Unternehmen setzt an zwei Standorten die Firewall „NetBridge 3000“ mit Firmware 4.2.7 ein. Die Fernverwaltung (Web-Admin) ist aus dem Internet erreichbar. Ihr Vorgesetzter bittet Sie, die folgende Meldung des Herstellers auszuwerten.",
 att:`<pre class="code" style="white-space:pre-wrap">SECURITY ADVISORY NB-2026-014          Severity: CRITICAL (CVSS 9.8)

Summary: A vulnerability in the web management interface of NetBridge 3000
firewalls allows an unauthenticated remote attacker to execute arbitrary
code with root privileges.

Affected versions: Firmware 4.0.0 through 4.2.8
Fixed versions:    Firmware 4.2.9 and later

Workaround: If you cannot update immediately, disable remote management
on the WAN interface or restrict access to trusted IP addresses.

There is evidence that this vulnerability is being actively exploited.
Customers are strongly advised to update as soon as possible.</pre>`,
 steps:[
 {t:"sc",q:"Ist Ihre Firewall betroffen?",o:["Nein, 4.2.7 ist neuer als 4.0.0","Ja – 4.2.7 liegt im betroffenen Bereich 4.0.0 bis 4.2.8","Nur wenn sie neu ist","Nein, nur 4.2.9 ist betroffen"],a:1,e:""},
 {t:"sc",q:"Was bedeutet „unauthenticated remote attacker“?",o:["Ein Mitarbeiter mit Admin-Konto","Ein Angreifer ohne Anmeldung, der aus der Ferne (z. B. Internet) angreift","Ein Virus auf einem USB-Stick","Ein Hardwaredefekt"],a:1,e:""},
 {t:"sc",q:"Welches Schutzziel ist bei „execute arbitrary code with root privileges“ gefährdet?",o:["Nur Verfügbarkeit","Alle drei: Vertraulichkeit, Integrität und Verfügbarkeit","Keines","Nur Authentizität"],a:1,e:"Volle Kontrolle über das Gerät."},
 {t:"open",q:"Beschreiben Sie die Sofortmaßnahme (Workaround) und die dauerhafte Lösung auf Deutsch. (3 Punkte)",p:3,a:"Sofort: Fernverwaltung auf der WAN-Schnittstelle deaktivieren bzw. nur von vertrauenswürdigen IP-Adressen zulassen (1). Dauerhaft: Firmware auf 4.2.9 oder neuer aktualisieren (1). Zusätzlich: wegen aktiver Ausnutzung Logs auf Kompromittierung prüfen, Zugangsdaten ändern, Vorfall dokumentieren (1)."}
 ]},
{id:"a_eula", icon:"📄", title:"Englischer Lizenzvertrag (EULA-Auszug)", tags:["Englisch","Lizenz","Recht"],
 sit:"Ein Kollege möchte eine gekaufte Lizenz der Software „DiagramPro 8“ auf seinem Büro-PC, seinem Firmen-Notebook und zu Hause auf seinem privaten PC installieren. Außerdem soll die Lizenz nach seinem Ausscheiden an eine Nachfolgerin gehen.",
 att:`<pre class="code" style="white-space:pre-wrap">DiagramPro 8 – End User License Agreement (excerpt)

2.1 Grant. The licensee may install and use one copy of the Software on one
    primary device. The licensee may also install a second copy on one
    portable device, provided that both copies are used exclusively by the
    same named user and not at the same time.
2.2 Restrictions. The Software may not be used on private devices for
    commercial purposes. Reverse engineering is not permitted.
2.3 Transfer. The licensee may transfer the license to another user within
    the same organization once, provided that all copies are removed from
    the original user's devices.
2.4 Term. This license is perpetual. Updates are provided for 12 months
    from the date of purchase.</pre>`,
 steps:[
 {t:"sc",q:"Darf der Kollege die Software auf Büro-PC UND Firmen-Notebook installieren?",o:["Nein, nur ein Gerät","Ja – ein Hauptgerät plus ein tragbares Gerät, wenn nur er sie nutzt und nicht gleichzeitig","Ja, auf beliebig vielen Geräten","Nur mit Zusatzlizenz"],a:1,e:"Ziffer 2.1."},
 {t:"sc",q:"Darf er sie zusätzlich auf seinem privaten PC für die Arbeit nutzen?",o:["Ja","Nein – kommerzielle Nutzung auf privaten Geräten ist ausgeschlossen (2.2)","Nur am Wochenende","Ja, wenn er sie selbst bezahlt"],a:1,e:""},
 {t:"sc",q:"Kann die Lizenz an die Nachfolgerin übertragen werden?",o:["Nein, niemals","Ja, einmalig innerhalb der Organisation, wenn alle Kopien beim Kollegen entfernt werden (2.3)","Ja, beliebig oft auch an andere Firmen","Nur gegen Gebühr"],a:1,e:""},
 {t:"sc",q:"Welches Lizenzmodell beschreibt Ziffer 2.4?",o:["Abonnement","Kauflizenz (unbefristet) mit 12 Monaten Updates","Pay-per-Use","Freeware"],a:1,e:"perpetual = unbefristet."}
 ]},
{id:"a_netzplan", icon:"🗺️", title:"Netzwerkplan mit Konfigurationsfehlern", tags:["Netzwerk","Subnetting","Troubleshooting"],
 sit:"Im Netzwerk der Abteilung Vertrieb (Netz 192.168.40.0/26, Router 192.168.40.1, DHCP-Bereich .20–.50, DNS = Domänencontroller 192.168.40.5) melden einige Nutzer Probleme. Prüfen Sie die Konfiguration in der Anlage.",
 att:`<div style="overflow-x:auto"><svg viewBox="0 0 640 210" width="100%" style="min-width:520px;background:#0f141b;border:1px solid var(--line);border-radius:12px;font-family:Inter,sans-serif;font-size:12px">
<rect x="270" y="14" width="100" height="34" rx="16" fill="#1b2430" stroke="#a78bfa"/><text x="320" y="36" fill="#d7dee8" text-anchor="middle">Router .1</text>
<line x1="320" y1="48" x2="320" y2="80" stroke="#93a1b3"/>
<rect x="250" y="80" width="140" height="30" rx="6" fill="#1b2430" stroke="#38bdf8"/><text x="320" y="100" fill="#d7dee8" text-anchor="middle">Switch</text>
${[["PC-1",60],["PC-2",170],["Drucker",280],["DC/DNS",390],["PC-3",500]].map(([n,x])=>`<line x1="320" y1="110" x2="${x+40}" y2="150" stroke="#93a1b3"/><rect x="${x}" y="150" width="80" height="34" rx="6" fill="#1b2430" stroke="#34d399"/><text x="${x+40}" y="171" fill="#d7dee8" text-anchor="middle">${n}</text>`).join("")}
</svg></div>
<table class="info-tbl"><tr><th>Gerät</th><th>IP-Adresse</th><th>Maske</th><th>Gateway</th><th>DNS</th></tr>
<tr><td>PC-1</td><td>192.168.40.23</td><td>255.255.255.192</td><td>192.168.40.1</td><td>192.168.40.5</td></tr>
<tr><td>PC-2</td><td>192.168.40.70</td><td>255.255.255.192</td><td>192.168.40.1</td><td>192.168.40.5</td></tr>
<tr><td>Drucker</td><td>192.168.40.30 (statisch)</td><td>255.255.255.192</td><td>192.168.40.1</td><td>192.168.40.5</td></tr>
<tr><td>DC/DNS</td><td>192.168.40.5 (statisch)</td><td>255.255.255.192</td><td>192.168.40.1</td><td>127.0.0.1</td></tr>
<tr><td>PC-3</td><td>192.168.40.44</td><td>255.255.255.0</td><td>192.168.40.1</td><td>8.8.8.8</td></tr></table>`,
 steps:[
 {t:"num",q:"Wie lautet die Broadcastadresse des Netzes 192.168.40.0/26? (nur letztes Oktett)",a:63,unit:"",e:"/26 → Block 64 → 0–63, Broadcast .63."},
 {t:"sc",q:"Welches Problem hat PC-2?",o:["Kein Problem","192.168.40.70 liegt außerhalb des Netzes .0–.63 – PC-2 erreicht weder Gateway noch Server","Falscher DNS","Doppelte IP"],a:1,e:""},
 {t:"sc",q:"Welches Problem verursacht der Drucker?",o:["Keines","Seine statische IP .30 liegt im DHCP-Bereich .20–.50 → möglicher IP-Konflikt","Falsches Gateway","Falsche Maske"],a:1,e:""},
 {t:"mc",q:"Was ist bei PC-3 falsch konfiguriert? (mehrere)",o:["Subnetzmaske /24 statt /26","DNS 8.8.8.8 statt Domänencontroller – Domänenanmeldung/Namensauflösung intern scheitert","IP-Adresse außerhalb des Netzes","Gateway"],a:[0,1],e:".44 liegt im Netz; das Gateway ist korrekt."},
 {t:"open",q:"Schlagen Sie für PC-2 und den Drucker je eine korrigierte Konfiguration vor. (2 Punkte)",p:2,a:"PC-2: IP per DHCP beziehen oder eine freie Adresse im Bereich .2–.62 außerhalb des DHCP-Pools, z. B. 192.168.40.55/26 (1). Drucker: statische IP außerhalb des DHCP-Bereichs, z. B. 192.168.40.10, oder DHCP-Reservierung über die MAC-Adresse (1)."}
 ]},
{id:"a_ipconfig", icon:"⌨️", title:"Ausgabe von ipconfig /all auswerten", tags:["Netzwerk","Troubleshooting","Kommandozeile"],
 sit:"Eine Mitarbeiterin meldet: „Ich komme weder ins Internet noch auf die Netzlaufwerke.“ Sie lassen sich die folgende Ausgabe zeigen.",
 att:`<pre class="code">Ethernet-Adapter Ethernet:

   Verbindungsspezifisches DNS-Suffix:
   Beschreibung. . . . . . . . . . . : Intel(R) Ethernet Connection I219-LM
   Physische Adresse . . . . . . . . : 8C-16-45-3A-9F-21
   DHCP aktiviert. . . . . . . . . . : Ja
   Autokonfiguration aktiviert . . . : Ja
   Verbindungslokale IPv6-Adresse  . : fe80::b1c2:4d1e:77a0:3f12%12
   Autokonfiguration IPv4-Adresse  . : 169.254.112.45
   Subnetzmaske  . . . . . . . . . . : 255.255.0.0
   Standardgateway . . . . . . . . . :
   DNS-Server  . . . . . . . . . . . : fec0:0:0:ffff::1%1</pre>`,
 steps:[
 {t:"sc",q:"Was bedeutet die Adresse 169.254.112.45?",o:["Gültige Adresse vom DHCP-Server","APIPA – der Client hat keinen DHCP-Server erreicht und sich selbst eine Adresse gegeben","Öffentliche IP","Loopback"],a:1,e:""},
 {t:"sc",q:"Warum fehlt ein Standardgateway?",o:["Weil IPv6 aktiv ist","Weil keine DHCP-Antwort kam – das Gateway wird sonst per DHCP mitgeteilt","Weil der PC zu alt ist","Das ist normal"],a:1,e:""},
 {t:"sc",q:"Was zeigt „fe80::…“?",o:["Globale IPv6-Adresse","Automatisch erzeugte IPv6-Link-Local-Adresse, nur im lokalen Segment gültig","Fehlerhafte Adresse","Multicast"],a:1,e:""},
 {t:"open",q:"Nennen Sie drei konkrete Prüfschritte in sinnvoller Reihenfolge. (3 Punkte)",p:3,a:"Z. B. (je 1): 1. Physische Verbindung prüfen – Kabel steckt, Link-LED an Netzwerkkarte/Switchport, Dose/Patchkabel. 2. ipconfig /release und ipconfig /renew ausführen. 3. DHCP-Server prüfen (läuft der Dienst, sind Adressen im Pool frei, richtiges VLAN am Switchport). Danach ping Gateway, nslookup testen und Lösung dokumentieren."}
 ]},
{id:"a_gantt", icon:"📊", title:"Gantt-Diagramm eines Rollout-Projekts", tags:["Projektmanagement","Planung"],
 sit:"Für den Rollout von 30 neuen Arbeitsplätzen liegt der folgende Balkenplan vor (Angaben in Arbeitstagen, Projektstart Tag 1).",
 att:`<div style="overflow-x:auto"><svg viewBox="0 0 640 230" width="100%" style="min-width:520px;background:#0f141b;border:1px solid var(--line);border-radius:12px;font-family:Inter,sans-serif;font-size:12px">
${Array.from({length:15},(_,i)=>`<line x1="${170+i*30}" y1="20" x2="${170+i*30}" y2="215" stroke="#263241"/><text x="${185+i*30}" y="15" fill="#64748b" text-anchor="middle">${i+1}</text>`).join("")}
${[["A Bedarfsanalyse",1,2],["B Hardware bestellen",3,5],["C Image erstellen",3,4],["D Lieferzeit",8,3],["E Geräte einrichten",11,3],["F Schulung vorbereiten",7,2],["G Übergabe & Abnahme",14,1]].map(([n,s,d],i)=>`<text x="10" y="${45+i*27}" fill="#d7dee8">${n}</text><rect x="${170+(s-1)*30+2}" y="${32+i*27}" width="${d*30-4}" height="18" rx="4" fill="${["#38bdf8","#a78bfa","#34d399","#64748b","#fbbf24","#f472b6","#f87171"][i]}"/>`).join("")}
</svg></div><div class="small muted">B dauert 5 Tage (Tag 3–7), D ist die Lieferzeit nach Bestellung, E kann erst nach D und C starten, F nach A, G nach E und F.</div>`,
 steps:[
 {t:"num",q:"Wie viele Arbeitstage dauert das Projekt insgesamt?",a:14,unit:"Tage",e:"G endet an Tag 14."},
 {t:"sc",q:"Welche Vorgänge laufen parallel zu B?",o:["Nur A","C und F","D und E","G"],a:1,e:"C (Tag 3–6) und F (Tag 7–8) überlappen mit B (Tag 3–7)."},
 {t:"sc",q:"Welche Vorgänge liegen auf dem kritischen Pfad?",o:["A – C – E – G","A – B – D – E – G","A – F – G","C – F – G"],a:1,e:"A(1–2) → B(3–7) → D(8–10) → E(11–13) → G(14) ohne Lücken."},
 {t:"num",q:"Wie viele Tage Puffer hat Vorgang C (endet Tag 6, E beginnt Tag 11)?",a:4,unit:"Tage",e:"Freier Puffer: Tage 7–10 = 4 Tage."},
 {t:"open",q:"Nennen Sie je einen Vor- und Nachteil eines Gantt-Diagramms gegenüber einem Netzplan. (2 Punkte)",p:2,a:"Vorteil (1): anschaulich, Zeitbezug und Dauer sofort sichtbar, leicht verständlich für Kunden/Management. Nachteil (1): Abhängigkeiten, Puffer und kritischer Pfad sind nicht oder nur schwer erkennbar."}
 ]},
{id:"a_angebote", icon:"🧾", title:"Zwei Angebote für Drucker vergleichen", tags:["Wirtschaft","Datenblatt","Peripherie"],
 sit:"Eine Abteilung druckt ca. 3.000 Seiten s/w pro Monat. Es liegen zwei Angebote vor. Die Nutzungsdauer beträgt 3 Jahre.",
 att:`<table class="info-tbl"><tr><th></th><th>Angebot 1: Tintenstrahl-MFP</th><th>Angebot 2: Laser-MFP</th></tr>
<tr><td>Anschaffung netto</td><td>299 €</td><td>749 €</td></tr>
<tr><td>Verbrauchsmaterial</td><td>Schwarzpatrone 39 € / 1.300 Seiten</td><td>Toner 89 € / 6.000 Seiten</td></tr>
<tr><td>Geschwindigkeit</td><td>20 ppm</td><td>40 ppm, Duplex</td></tr>
<tr><td>Max. Druckvolumen</td><td>1.500 Seiten/Monat empfohlen</td><td>6.000 Seiten/Monat empfohlen</td></tr>
<tr><td>Netzwerk / Sicherheit</td><td>WLAN</td><td>LAN, WLAN, PIN-Druck</td></tr></table>`,
 steps:[
 {t:"num",q:"Wie hoch sind die Kosten pro Seite bei Angebot 1 in Cent (2 Nachkommastellen)?",a:3,tol:0.01,unit:"Cent",e:"39 ÷ 1.300 = 0,03 € = 3,00 Cent."},
 {t:"num",q:"Wie hoch sind die Gesamtkosten von Angebot 2 über 3 Jahre (Anschaffung + Toner, ohne Papier) in €?",a:2351,tol:0.5,unit:"€",e:"3.000 × 36 = 108.000 Seiten × 89/6.000 = 1.602 € + 749 € = 2.351 €."},
 {t:"num",q:"Wie hoch sind die Gesamtkosten von Angebot 1 über 3 Jahre?",a:3539,tol:0.5,unit:"€",e:"108.000 × 0,03 = 3.240 € + 299 € = 3.539 €."},
 {t:"open",q:"Begründen Sie Ihre Empfehlung mit zwei Argumenten aus der Anlage. (3 Punkte)",p:3,a:"Empfehlung: Angebot 2 (Laser-MFP) (1). Argumente (je 1): über 3 Jahre ca. 1.188 € günstiger trotz höherer Anschaffung; empfohlenes Druckvolumen (6.000 Seiten/Monat) passt zum Bedarf von 3.000, das Tintengerät ist mit 1.500 Seiten überfordert; doppelte Geschwindigkeit und Duplex; LAN und PIN-Druck für Vertraulichkeit."}
 ]},
{id:"a_eventlog", icon:"📜", title:"Firewall-Log auswerten", tags:["Sicherheit","Englisch","Log"],
 sit:"Der Administrator zeigt Ihnen einen Auszug aus dem Log der Firewall vom Montagmorgen. Der Webserver hat die IP 203.0.113.10, der Mailserver 203.0.113.20.",
 att:`<pre class="code" style="white-space:pre-wrap">2027-01-18 03:12:01 DENY  TCP 198.51.100.77:51234 -> 203.0.113.10:22   (SSH)
2027-01-18 03:12:02 DENY  TCP 198.51.100.77:51236 -> 203.0.113.10:23   (TELNET)
2027-01-18 03:12:02 DENY  TCP 198.51.100.77:51240 -> 203.0.113.10:3389 (RDP)
2027-01-18 03:12:03 ALLOW TCP 198.51.100.77:51244 -> 203.0.113.10:443  (HTTPS)
2027-01-18 03:12:03 DENY  TCP 198.51.100.77:51250 -> 203.0.113.10:445  (SMB)
2027-01-18 07:45:10 ALLOW TCP 192.0.2.15:40112    -> 203.0.113.20:25   (SMTP)</pre>`,
 steps:[
 {t:"sc",q:"Was deuten die Einträge von 198.51.100.77 um 03:12 Uhr an?",o:["Normale Kundennutzung","Einen Portscan – ein Angreifer prüft nacheinander typische Dienste-Ports","Einen Stromausfall","Ein Update"],a:1,e:"Viele Ports in wenigen Sekunden von derselben Quelle."},
 {t:"sc",q:"Warum wurde Port 443 erlaubt?",o:["Fehler der Firewall","Der Webserver stellt HTTPS öffentlich bereit – die Regel ist gewollt","443 ist SMB","443 ist immer offen"],a:1,e:""},
 {t:"sc",q:"Welches Firewall-Prinzip zeigen die DENY-Einträge?",o:["Default Allow","Default Deny – nur freigegebene Dienste sind erreichbar","Fail Open","NAT"],a:1,e:""},
 {t:"open",q:"Nennen Sie zwei Maßnahmen, die Sie nach dieser Auswertung empfehlen. (2 Punkte)",p:2,a:"Je 1: Quell-IP beobachten/temporär sperren (IPS/Fail2ban/Geo-Blocking); Webserver härten und patchen, da Port 443 erreichbar ist; Alarmierung bei Portscans einrichten (IDS/SIEM); sicherstellen, dass RDP/SMB/Telnet nie aus dem Internet erreichbar sind; Logs regelmäßig auswerten."}
 ]}
];
