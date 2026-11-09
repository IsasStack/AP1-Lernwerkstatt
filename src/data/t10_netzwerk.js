T.push({
id:"netzwerk", title:"Netzwerk-Grundlagen", icon:"🌐", area:"Netzwerk", weight:3,
summary:"OSI & TCP/IP, Geräte, Topologien, Kabel & LWL, Ethernet, WLAN-Standards & -Sicherheit, PoE, VLAN.",
lesson:`
<h3>OSI-Modell und TCP/IP</h3>
<table><tr><th>Nr.</th><th>OSI-Schicht</th><th>TCP/IP</th><th>Einheit</th><th>Beispiele / Geräte</th></tr>
<tr><td>7</td><td>Anwendung (Application)</td><td rowspan="3">Anwendung</td><td rowspan="3">Daten</td><td>HTTP(S), DNS, SMTP, FTP, SSH, DHCP</td></tr>
<tr><td>6</td><td>Darstellung (Presentation)</td><td>Kodierung, Verschlüsselung (TLS), Kompression</td></tr>
<tr><td>5</td><td>Sitzung (Session)</td><td>Sitzungssteuerung</td></tr>
<tr><td>4</td><td>Transport</td><td>Transport</td><td>Segment</td><td>TCP, UDP, Ports</td></tr>
<tr><td>3</td><td>Vermittlung (Network)</td><td>Internet</td><td>Paket</td><td>IP, ICMP – <b>Router</b>, Layer-3-Switch</td></tr>
<tr><td>2</td><td>Sicherung (Data Link)</td><td rowspan="2">Netzzugang</td><td>Frame</td><td>Ethernet, MAC, ARP – <b>Switch</b>, Bridge, Access Point</td></tr>
<tr><td>1</td><td>Bitübertragung (Physical)</td><td>Bit</td><td>Kabel, Stecker, Funk – Hub, Repeater, Medienkonverter</td></tr></table>
<div class="tip">Eselsbrücke (7→1): „<b>A</b>lle <b>D</b>eutschen <b>S</b>chüler <b>T</b>rinken <b>V</b>erschiedene <b>S</b>orten <b>B</b>ier“.</div>
<h3>Netzwerkgeräte</h3>
<ul><li><b>Hub</b> (L1): sendet an alle Ports – veraltet, Kollisionen.</li>
<li><b>Switch</b> (L2): verbindet Geräte im selben Netz, leitet Frames anhand der <b>MAC-Adresstabelle</b> (SAT) gezielt weiter. Managed Switch: VLANs, Monitoring, PoE.</li>
<li><b>Router</b> (L3): verbindet <b>unterschiedliche Netze</b> (LAN ↔ Internet), entscheidet anhand der <b>IP-Adresse</b> und Routingtabelle; oft mit NAT, Firewall, DHCP.</li>
<li><b>Access Point</b>: bindet WLAN-Clients ins kabelgebundene Netz ein. <b>WLAN-Controller</b> verwaltet viele APs zentral.</li>
<li><b>Firewall</b>: filtert Datenverkehr nach Regeln. <b>Modem</b>: wandelt Signale (DSL, Kabel, Glasfaser-ONT).</li></ul>
<h3>Topologien</h3>
<table><tr><th>Topologie</th><th>Vorteil</th><th>Nachteil</th></tr>
<tr><td><b>Stern</b> (heute Standard)</td><td>Ausfall eines Endgeräts/Kabels betrifft nur dieses, leicht erweiterbar</td><td>zentraler Switch = Single Point of Failure, viel Kabel</td></tr>
<tr><td>Bus</td><td>wenig Kabel, günstig</td><td>Kabelbruch legt alles lahm, Kollisionen</td></tr>
<tr><td>Ring</td><td>gleichberechtigter Zugriff</td><td>Ausfall eines Knotens unterbricht Ring (außer Doppelring)</td></tr>
<tr><td>Baum (erweiterter Stern)</td><td>hierarchisch, gut strukturierbar</td><td>Ausfall eines Verteilers trennt Teilbaum</td></tr>
<tr><td>Vermascht (voll/teil)</td><td>hohe Ausfallsicherheit, redundante Wege</td><td>teuer, viel Kabel; voll: n·(n−1)/2 Verbindungen</td></tr></table>
<h3>Übertragungsmedien</h3>
<ul><li><b>Twisted Pair (Kupfer)</b>, RJ45, max. <b>100 m</b> pro Segment. Cat 5e: 1 Gbit/s; Cat 6: 1 Gbit/s (10 Gbit/s bis 55 m); <b>Cat 6A: 10 Gbit/s</b> bis 100 m; Cat 7/7A; Cat 8: 25/40 Gbit/s bis 30 m. Schirmung: U/UTP (ungeschirmt), F/UTP, S/FTP (Gesamt- + Paarschirm).</li>
<li><b>Lichtwellenleiter (LWL/Glasfaser)</b>: Multimode (OM3/OM4, kurze Strecken, Gebäude) und Singlemode (OS2, km-weit). Vorteile: hohe Reichweite & Bandbreite, unempfindlich gegen elektromagnetische Störungen, abhörsicherer, galvanische Trennung. Nachteile: teurer, empfindlich beim Verlegen (Biegeradius), Spleißen aufwendig.</li></ul>
<p><b>Ethernet-Standards</b> (IEEE 802.3): 100BASE-TX (100 Mbit/s), 1000BASE-T (1 Gbit/s), 2.5G/5GBASE-T (NBASE-T, für WLAN-APs), 10GBASE-T (10 Gbit/s, Cat 6A). Strukturierte Verkabelung: Primär (Gelände, LWL), Sekundär (Gebäude/Steigbereich, LWL), Tertiär (Etage, Kupfer zur Dose).</p>
<h3>PoE – Power over Ethernet</h3>
<p>Strom und Daten über ein Netzwerkkabel – für Access Points, IP-Telefone, Kameras. Kein Netzteil/Steckdose am Gerät nötig, zentrale USV-Absicherung möglich.</p>
<table><tr><th>Standard</th><th>Leistung am PSE (Switch)</th></tr>
<tr><td>802.3af (PoE)</td><td>15,4 W</td></tr><tr><td>802.3at (PoE+)</td><td>30 W</td></tr><tr><td>802.3bt Typ 3 / Typ 4 (PoE++)</td><td>60 W / 90–100 W</td></tr></table>
<h3>WLAN-Standards (IEEE 802.11)</h3>
<table><tr><th>Bezeichnung</th><th>Standard</th><th>Frequenz</th><th>max. brutto</th></tr>
<tr><td>Wi-Fi 4</td><td>802.11n</td><td>2,4 / 5 GHz</td><td>600 Mbit/s</td></tr>
<tr><td>Wi-Fi 5</td><td>802.11ac</td><td>5 GHz</td><td>6,9 Gbit/s</td></tr>
<tr><td>Wi-Fi 6 / 6E</td><td>802.11ax</td><td>2,4 / 5 (/ 6) GHz</td><td>9,6 Gbit/s</td></tr>
<tr><td>Wi-Fi 7</td><td>802.11be</td><td>2,4 / 5 / 6 GHz</td><td>~46 Gbit/s</td></tr></table>
<p>2,4 GHz: größere Reichweite, durchdringt Wände besser, aber nur 3 überlappungsfreie Kanäle (1, 6, 11) und viele Störquellen. 5/6 GHz: mehr Kanäle, höhere Datenraten, geringere Reichweite. WLAN ist <b>Halbduplex</b> – alle teilen sich das Medium; Nettodatenrate deutlich unter brutto.</p>
<h3>WLAN-Sicherheit</h3>
<ul><li>WEP und WPA (TKIP): unsicher – nicht mehr verwenden.</li>
<li><b>WPA2</b> (AES-CCMP) – Mindeststandard. <b>WPA3</b>: SAE statt PSK-Handshake (Schutz gegen Offline-Wörterbuchangriffe), Forward Secrecy, 192-Bit-Modus für Enterprise.</li>
<li><b>Personal (PSK)</b>: ein gemeinsames Passwort für alle – einfach, aber bei Ausscheiden eines Mitarbeiters muss es überall geändert werden.</li>
<li><b>Enterprise (IEEE 802.1X)</b>: individuelle Anmeldung (Benutzername/Passwort oder Zertifikat) über einen <b>RADIUS-Server</b> – Nutzer einzeln sperrbar, nachvollziehbar, ideal für Firmen.</li>
<li>Weitere Maßnahmen: Gast-WLAN in eigenem VLAN, starke Passphrase, Firmware-Updates, WPS deaktivieren. (SSID-Verstecken und MAC-Filter sind keine echte Sicherheit.)</li></ul>
<h3>VLAN</h3>
<p>Ein <b>Virtual LAN</b> teilt einen physischen Switch logisch in getrennte Netze (Broadcast-Domänen), z. B. Verwaltung, Produktion, Gäste, VoIP. Vorteile: Sicherheit durch Trennung, weniger Broadcast-Last, flexible Zuordnung unabhängig vom Standort. Kommunikation zwischen VLANs nur über Router/Layer-3-Switch. <b>IEEE 802.1Q</b>: Tagging auf Trunk-Ports.</p>
<h3>Übertragungsarten</h3>
<p><b>Simplex</b> (eine Richtung), <b>Halbduplex</b> (abwechselnd, z. B. WLAN, Funkgerät), <b>Vollduplex</b> (gleichzeitig beide Richtungen, z. B. Switch-Port). <b>Unicast</b> (1:1), <b>Multicast</b> (1:Gruppe), <b>Broadcast</b> (1:alle im Netz).</p>`,
cards:[
["OSI-Schichten 1–7","Bitübertragung, Sicherung, Vermittlung, Transport, Sitzung, Darstellung, Anwendung."],
["Auf welcher Schicht arbeitet ein Switch?","Schicht 2 – leitet Frames anhand von MAC-Adressen weiter."],
["Auf welcher Schicht arbeitet ein Router?","Schicht 3 – verbindet Netze, entscheidet anhand von IP-Adressen."],
["Switch vs. Router","Switch: verbindet Geräte innerhalb eines Netzes (MAC). Router: verbindet verschiedene Netze (IP)."],
["Sterntopologie – Vor-/Nachteil","+ Ausfall eines Endgeräts betrifft nur dieses, erweiterbar. − Zentraler Switch ist Single Point of Failure."],
["Max. Länge Twisted-Pair-Segment","100 Meter."],
["Kabel für 10 Gbit/s auf 100 m","Cat 6A (10GBASE-T)."],
["Vorteile Lichtwellenleiter","Große Reichweite, hohe Bandbreite, unempfindlich gegen EMV, abhörsicherer, galvanische Trennung."],
["Singlemode vs. Multimode","Singlemode: sehr dünner Kern, große Distanzen (km). Multimode: dickerer Kern, kurze Strecken."],
["PoE – Nutzen","Strom und Daten über ein Kabel (APs, IP-Telefone, Kameras) – keine Steckdose nötig, zentrale USV."],
["PoE / PoE+ / PoE++","802.3af 15,4 W / 802.3at 30 W / 802.3bt 60–100 W."],
["Wi-Fi 6","IEEE 802.11ax, 2,4 und 5 GHz (6E: zusätzlich 6 GHz)."],
["2,4 GHz vs. 5 GHz","2,4: mehr Reichweite, weniger Kanäle, mehr Störungen. 5: höhere Datenrate, mehr Kanäle, weniger Reichweite."],
["WPA2-Personal vs. WPA2-Enterprise","Personal: gemeinsamer Schlüssel (PSK). Enterprise: individuelle Anmeldung über 802.1X/RADIUS."],
["WPA3 – Verbesserung","SAE ersetzt PSK-Handshake → Schutz vor Offline-Wörterbuchangriffen, Forward Secrecy."],
["VLAN","Logische Trennung eines physischen Netzes in mehrere Broadcast-Domänen (IEEE 802.1Q)."],
["Vollduplex","Gleichzeitiges Senden und Empfangen in beide Richtungen."],
["Halbduplex – Beispiel","WLAN: Senden und Empfangen abwechselnd über ein geteiltes Medium."],
["Anzahl Verbindungen vollvermascht","n · (n − 1) / 2."],
["Broadcast","Nachricht an alle Teilnehmer eines Netzes (z. B. ARP-Request, DHCP-Discover)."]
],
qs:[
{t:"sc",q:"Auf welcher OSI-Schicht arbeitet ein klassischer Switch?",o:["1","2","3","4"],a:1,e:"Sicherungsschicht, MAC-Adressen."},
{t:"sc",q:"Welches Gerät verbindet das Firmen-LAN mit dem Internet?",o:["Hub","Switch","Router","Repeater"],a:2,e:"Verschiedene Netze → Router."},
{t:"sc",q:"Auf welcher OSI-Schicht ist TCP angesiedelt?",o:["2","3","4","7"],a:2,e:"Transportschicht."},
{t:"num",q:"Wie viele Verbindungen benötigt ein vollvermaschtes Netz mit 6 Knoten?",a:15,unit:"",e:"6 × 5 / 2 = 15."},
{t:"sc",q:"Welche Kategorie benötigen Sie mindestens für 10 Gbit/s über 90 m Kupferkabel?",o:["Cat 5e","Cat 6","Cat 6A","Cat 3"],a:2,e:"Cat 6 schafft 10G nur bis ca. 55 m."},
{t:"sc",q:"Warum wird zwischen zwei Gebäuden (300 m) häufig LWL verlegt?",o:["Es ist günstiger als Kupfer","Kupfer ist auf 100 m begrenzt und LWL ist unempfindlich gegen Störungen/Potenzialunterschiede","LWL braucht keinen Switch","LWL unterstützt PoE"],a:1,e:"Reichweite + EMV + galvanische Trennung."},
{t:"sc",q:"Ein WLAN-AP benötigt 25 W. Welcher PoE-Standard reicht mindestens?",o:["802.3af","802.3at (PoE+)","802.3ab","802.11ax"],a:1,e:"802.3af liefert nur 15,4 W, PoE+ 30 W."},
{t:"sc",q:"Welches WLAN-Verfahren erlaubt individuelle Anmeldung jedes Mitarbeiters über einen RADIUS-Server?",o:["WPA2-Personal","WEP","WPA2/WPA3-Enterprise (802.1X)","WPS"],a:2,e:""},
{t:"sc",q:"Welcher IEEE-Standard heißt Wi-Fi 6?",o:["802.11n","802.11ac","802.11ax","802.11be"],a:2,e:"n = Wi-Fi 4, ac = Wi-Fi 5, be = Wi-Fi 7."},
{t:"mc",q:"Welche Vorteile bieten VLANs? (mehrere)",o:["Trennung von Abteilungen/Gästen","Reduzierung der Broadcast-Last","Mehr Bandbreite pro Kabel","Flexible Zuordnung unabhängig vom Standort"],a:[0,1,3],e:"Die Bandbreite eines Kabels ändert sich nicht."},
{t:"sc",q:"Was ist ein Nachteil der Sterntopologie?",o:["Kabelbruch legt das ganze Netz lahm","Der zentrale Switch ist ein Single Point of Failure","Sie ist nicht erweiterbar","Es entstehen ständig Kollisionen"],a:1,e:""},
{t:"sc",q:"Welche Kanäle sind im 2,4-GHz-Band in Europa üblicherweise überlappungsfrei?",o:["1, 2, 3","1, 6, 11","36, 40, 44","1, 7, 13"],a:1,e:"Klassisch 1/6/11 (in EU auch 1/5/9/13 möglich)."},
{t:"sc",q:"Welche Übertragungsart nutzt WLAN?",o:["Simplex","Halbduplex","Vollduplex","Multiplex-Vollduplex"],a:1,e:"Geteiltes Medium, abwechselnd."},
{t:"open",q:"Ein Unternehmen nutzt WPA2-Personal mit einem gemeinsamen Passwort. Empfehlen Sie eine bessere Lösung und begründen Sie diese. (4 Punkte)",p:4,a:"Empfehlung: WPA2/WPA3-Enterprise mit IEEE 802.1X und RADIUS-Server (2). Begründung: Jeder Mitarbeiter meldet sich individuell (Benutzer/Zertifikat) an, Zugänge ausgeschiedener Mitarbeiter können einzeln gesperrt werden, kein gemeinsames Passwort muss verteilt/geändert werden, Anmeldungen sind nachvollziehbar (2)."},
{t:"open",q:"Erläutern Sie den Unterschied zwischen Switch und Router. (4 Punkte)",p:4,a:"Ein Switch arbeitet auf OSI-Schicht 2 und verbindet Endgeräte innerhalb desselben Netzes (2); er leitet Frames anhand der MAC-Adresstabelle gezielt an den Zielport. Ein Router arbeitet auf Schicht 3, verbindet unterschiedliche (Sub-)Netze, z. B. LAN und Internet, und leitet Pakete anhand der IP-Adresse und seiner Routingtabelle weiter (2)."},
{t:"open",q:"Nennen Sie drei Vorteile von Power over Ethernet beim Einsatz von Access Points an der Decke. (3 Punkte)",p:3,a:"Je 1: keine separate Steckdose/Stromleitung an der Decke nötig; nur ein Kabel für Strom und Daten; zentrale Absicherung über USV am Switch; APs können per Switch-Port neu gestartet werden; geringere Installationskosten, flexible Platzierung."}
]
});
