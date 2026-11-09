# 🌐 Netzwerk-Grundlagen

*Bereich: Netzwerk · Prüfungsrelevanz: ★★★*

> OSI & TCP/IP, Geräte, Topologien, Kabel & LWL, Ethernet, WLAN-Standards & -Sicherheit, PoE, VLAN.

[⬅ Inhaltsverzeichnis](README.md)

---

## OSI-Modell und TCP/IP

<table><tr><th>Nr.</th><th>OSI-Schicht</th><th>TCP/IP</th><th>Einheit</th><th>Beispiele / Geräte</th></tr>
<tr><td>7</td><td>Anwendung (Application)</td><td rowspan="3">Anwendung</td><td rowspan="3">Daten</td><td>HTTP(S), DNS, SMTP, FTP, SSH, DHCP</td></tr>
<tr><td>6</td><td>Darstellung (Presentation)</td><td>Kodierung, Verschlüsselung (TLS), Kompression</td></tr>
<tr><td>5</td><td>Sitzung (Session)</td><td>Sitzungssteuerung</td></tr>
<tr><td>4</td><td>Transport</td><td>Transport</td><td>Segment</td><td>TCP, UDP, Ports</td></tr>
<tr><td>3</td><td>Vermittlung (Network)</td><td>Internet</td><td>Paket</td><td>IP, ICMP – <b>Router</b>, Layer-3-Switch</td></tr>
<tr><td>2</td><td>Sicherung (Data Link)</td><td rowspan="2">Netzzugang</td><td>Frame</td><td>Ethernet, MAC, ARP – <b>Switch</b>, Bridge, Access Point</td></tr>
<tr><td>1</td><td>Bitübertragung (Physical)</td><td>Bit</td><td>Kabel, Stecker, Funk – Hub, Repeater, Medienkonverter</td></tr></table>

> [!TIP]
> Eselsbrücke (7→1): „**A**lle **D**eutschen **S**chüler **T**rinken **V**erschiedene **S**orten **B**ier“.

## Netzwerkgeräte

- **Hub** (L1): sendet an alle Ports – veraltet, Kollisionen.
- **Switch** (L2): verbindet Geräte im selben Netz, leitet Frames anhand der **MAC-Adresstabelle** (SAT) gezielt weiter. Managed Switch: VLANs, Monitoring, PoE.
- **Router** (L3): verbindet **unterschiedliche Netze** (LAN ↔ Internet), entscheidet anhand der **IP-Adresse** und Routingtabelle; oft mit NAT, Firewall, DHCP.
- **Access Point**: bindet WLAN-Clients ins kabelgebundene Netz ein. **WLAN-Controller** verwaltet viele APs zentral.
- **Firewall**: filtert Datenverkehr nach Regeln. **Modem**: wandelt Signale (DSL, Kabel, Glasfaser-ONT).

## Topologien

<table><tr><th>Topologie</th><th>Vorteil</th><th>Nachteil</th></tr>
<tr><td><b>Stern</b> (heute Standard)</td><td>Ausfall eines Endgeräts/Kabels betrifft nur dieses, leicht erweiterbar</td><td>zentraler Switch = Single Point of Failure, viel Kabel</td></tr>
<tr><td>Bus</td><td>wenig Kabel, günstig</td><td>Kabelbruch legt alles lahm, Kollisionen</td></tr>
<tr><td>Ring</td><td>gleichberechtigter Zugriff</td><td>Ausfall eines Knotens unterbricht Ring (außer Doppelring)</td></tr>
<tr><td>Baum (erweiterter Stern)</td><td>hierarchisch, gut strukturierbar</td><td>Ausfall eines Verteilers trennt Teilbaum</td></tr>
<tr><td>Vermascht (voll/teil)</td><td>hohe Ausfallsicherheit, redundante Wege</td><td>teuer, viel Kabel; voll: n·(n−1)/2 Verbindungen</td></tr></table>

## Übertragungsmedien

- **Twisted Pair (Kupfer)**, RJ45, max. **100 m** pro Segment. Cat 5e: 1 Gbit/s; Cat 6: 1 Gbit/s (10 Gbit/s bis 55 m); **Cat 6A: 10 Gbit/s** bis 100 m; Cat 7/7A; Cat 8: 25/40 Gbit/s bis 30 m. Schirmung: U/UTP (ungeschirmt), F/UTP, S/FTP (Gesamt- + Paarschirm).
- **Lichtwellenleiter (LWL/Glasfaser)**: Multimode (OM3/OM4, kurze Strecken, Gebäude) und Singlemode (OS2, km-weit). Vorteile: hohe Reichweite & Bandbreite, unempfindlich gegen elektromagnetische Störungen, abhörsicherer, galvanische Trennung. Nachteile: teurer, empfindlich beim Verlegen (Biegeradius), Spleißen aufwendig.

**Ethernet-Standards** (IEEE 802.3): 100BASE-TX (100 Mbit/s), 1000BASE-T (1 Gbit/s), 2.5G/5GBASE-T (NBASE-T, für WLAN-APs), 10GBASE-T (10 Gbit/s, Cat 6A). Strukturierte Verkabelung: Primär (Gelände, LWL), Sekundär (Gebäude/Steigbereich, LWL), Tertiär (Etage, Kupfer zur Dose).

## PoE – Power over Ethernet

Strom und Daten über ein Netzwerkkabel – für Access Points, IP-Telefone, Kameras. Kein Netzteil/Steckdose am Gerät nötig, zentrale USV-Absicherung möglich.

<table><tr><th>Standard</th><th>Leistung am PSE (Switch)</th></tr>
<tr><td>802.3af (PoE)</td><td>15,4 W</td></tr><tr><td>802.3at (PoE+)</td><td>30 W</td></tr><tr><td>802.3bt Typ 3 / Typ 4 (PoE++)</td><td>60 W / 90–100 W</td></tr></table>

## WLAN-Standards (IEEE 802.11)

<table><tr><th>Bezeichnung</th><th>Standard</th><th>Frequenz</th><th>max. brutto</th></tr>
<tr><td>Wi-Fi 4</td><td>802.11n</td><td>2,4 / 5 GHz</td><td>600 Mbit/s</td></tr>
<tr><td>Wi-Fi 5</td><td>802.11ac</td><td>5 GHz</td><td>6,9 Gbit/s</td></tr>
<tr><td>Wi-Fi 6 / 6E</td><td>802.11ax</td><td>2,4 / 5 (/ 6) GHz</td><td>9,6 Gbit/s</td></tr>
<tr><td>Wi-Fi 7</td><td>802.11be</td><td>2,4 / 5 / 6 GHz</td><td>~46 Gbit/s</td></tr></table>

2,4 GHz: größere Reichweite, durchdringt Wände besser, aber nur 3 überlappungsfreie Kanäle (1, 6, 11) und viele Störquellen. 5/6 GHz: mehr Kanäle, höhere Datenraten, geringere Reichweite. WLAN ist **Halbduplex** – alle teilen sich das Medium; Nettodatenrate deutlich unter brutto.

## WLAN-Sicherheit

- WEP und WPA (TKIP): unsicher – nicht mehr verwenden.
- **WPA2** (AES-CCMP) – Mindeststandard. **WPA3**: SAE statt PSK-Handshake (Schutz gegen Offline-Wörterbuchangriffe), Forward Secrecy, 192-Bit-Modus für Enterprise.
- **Personal (PSK)**: ein gemeinsames Passwort für alle – einfach, aber bei Ausscheiden eines Mitarbeiters muss es überall geändert werden.
- **Enterprise (IEEE 802.1X)**: individuelle Anmeldung (Benutzername/Passwort oder Zertifikat) über einen **RADIUS-Server** – Nutzer einzeln sperrbar, nachvollziehbar, ideal für Firmen.
- Weitere Maßnahmen: Gast-WLAN in eigenem VLAN, starke Passphrase, Firmware-Updates, WPS deaktivieren. (SSID-Verstecken und MAC-Filter sind keine echte Sicherheit.)

## VLAN

Ein **Virtual LAN** teilt einen physischen Switch logisch in getrennte Netze (Broadcast-Domänen), z. B. Verwaltung, Produktion, Gäste, VoIP. Vorteile: Sicherheit durch Trennung, weniger Broadcast-Last, flexible Zuordnung unabhängig vom Standort. Kommunikation zwischen VLANs nur über Router/Layer-3-Switch. **IEEE 802.1Q**: Tagging auf Trunk-Ports.

## Übertragungsarten

**Simplex** (eine Richtung), **Halbduplex** (abwechselnd, z. B. WLAN, Funkgerät), **Vollduplex** (gleichzeitig beide Richtungen, z. B. Switch-Port). **Unicast** (1:1), **Multicast** (1:Gruppe), **Broadcast** (1:alle im Netz).

## Netzwerkdokumentation

- **Physischer Netzplan**: wo stehen Geräte, Racks, Dosen, wie laufen die Kabel (Gebäude-/Etagenplan, Patchplan: welche Dose an welchem Switchport).
- **Logischer Netzplan**: Netze/Subnetze, VLANs, IP-Bereiche, Router/Firewalls, Verbindungen zwischen Netzen – unabhängig vom Standort.
- **IP-Adresskonzept** (Tabelle): Netz/VLAN, Netzadresse/Präfix, Gateway, DHCP-Bereich, statische Adressen (Server, Drucker, Switches), DNS.
- **Inventar/Geräteliste**: Gerät, Hersteller/Modell, Seriennummer, Standort, IP/MAC, Firmware, Zuständigkeit.
- Konfigurationssicherungen, Zugangsdaten (im Passwortmanager!), Änderungsprotokoll.

<table><tr><th>Netz</th><th>VLAN</th><th>Netzadresse</th><th>Gateway</th><th>DHCP-Bereich</th><th>Statisch</th></tr>
<tr><td>Verwaltung</td><td>10</td><td>192.168.10.0/24</td><td>192.168.10.1</td><td>.100–.200</td><td>.2–.20 (Server, Drucker)</td></tr>
<tr><td>Produktion</td><td>20</td><td>192.168.20.0/24</td><td>192.168.20.1</td><td>.100–.200</td><td>.2–.20</td></tr>
<tr><td>Gäste</td><td>99</td><td>10.99.0.0/24</td><td>10.99.0.1</td><td>.10–.250</td><td>–</td></tr></table>

**Typische Fehler in Netzplan-Aufgaben**: Host liegt nicht im Subnetz seines Gateways; Gateway-Adresse falsch; doppelte IP-Adresse; falsche Subnetzmaske; statische IP liegt im DHCP-Bereich; DNS zeigt bei Domänenclients nicht auf den DC; Netz- oder Broadcastadresse an Host vergeben.

**Symbole** (Cisco-Stil, in Prüfungen oft vereinfacht): Router = Kreis mit Pfeilen, Switch = Quader mit Pfeilen, Firewall = Mauer, Access Point = Antenne/Funkwellen, Wolke = Internet/WAN, Server = Tower/Rack.

## Netzarten nach Ausdehnung

<table><tr><th>Netz</th><th>Ausdehnung</th><th>Beispiele / Technik</th></tr>
<tr><td><b>PAN</b> – Personal Area Network</td><td>wenige Meter</td><td>Bluetooth (Headset, Maus), NFC (kontaktlos, wenige cm), USB</td></tr>
<tr><td><b>LAN</b> – Local Area Network</td><td>Gebäude/Gelände</td><td>Ethernet, WLAN; im Besitz des Unternehmens</td></tr>
<tr><td><b>MAN</b> – Metropolitan Area Network</td><td>Stadt/Region</td><td>Glasfaserring eines Stadtnetzbetreibers, Campus mehrerer Standorte</td></tr>
<tr><td><b>WAN</b> – Wide Area Network</td><td>Länder/weltweit</td><td>Internet, Netze von Providern; Leitungen werden gemietet</td></tr>
<tr><td><b>GAN</b> – Global Area Network</td><td>weltweit</td><td>Satellitennetze, das Internet als Ganzes</td></tr></table>

## WAN-Anbindung: Internetanschlüsse

<table><tr><th>Anschluss</th><th>Technik</th><th>Typisch</th><th>Bewertung</th></tr>
<tr><td>DSL / VDSL (Vectoring, Supervectoring)</td><td>Kupfer-Telefonleitung, Modem/Router</td><td>bis ca. 250 Mbit/s down, asymmetrisch</td><td>weit verbreitet, Rate sinkt mit Entfernung zum Verteiler</td></tr>
<tr><td>Kabel (DOCSIS)</td><td>TV-Koaxialnetz, Kabelmodem</td><td>bis 1 Gbit/s down, Upload deutlich geringer</td><td>hohe Raten, aber geteiltes Medium – abends schwankend</td></tr>
<tr><td>Glasfaser FTTH/FTTB</td><td>LWL bis ins Haus (FTTH) bzw. ins Gebäude (FTTB), ONT/Glasfasermodem</td><td>1–10 Gbit/s, oft symmetrisch möglich</td><td>schnellste, zukunftssicherste Lösung, geringe Latenz</td></tr>
<tr><td>FTTC</td><td>Glasfaser bis zum Verteilerkasten, letzte Meter Kupfer (VDSL)</td><td>bis ca. 250 Mbit/s</td><td>Kompromiss</td></tr>
<tr><td>Mobilfunk (LTE/5G-Router)</td><td>Funk, SIM</td><td>stark standortabhängig</td><td>schnell verfügbar, gut als <b>Backup-Leitung</b> oder Baustelle</td></tr>
<tr><td>Satellit (z. B. LEO-Satelliten)</td><td>Satellitenschüssel</td><td>bis einige 100 Mbit/s</td><td>für abgelegene Standorte, wetterabhängig</td></tr>
<tr><td>Business-Anschluss / Standleitung</td><td>dedizierte Leitung, meist Glasfaser</td><td>garantierte, symmetrische Bandbreite</td><td><b>SLA</b> (Entstörzeit), feste öffentliche IP-Adressen – teurer</td></tr></table>

- **Downstream** (Download, Internet → Firma) vs. **Upstream** (Upload, Firma → Internet). **Asymmetrisch**: Download viel größer als Upload (DSL, Kabel). **Symmetrisch**: gleich schnell – wichtig bei Cloud-Backups, Videokonferenzen, eigenen Servern, vielen Homeoffice-VPNs.
- **Kenngrößen**: Bandbreite/Datenrate (Mbit/s), **Latenz** (Verzögerung in ms, wichtig für VoIP/Video), **Jitter** (Schwankung der Latenz), Paketverlust, Verfügbarkeit (SLA).
- **Feste vs. dynamische öffentliche IP**: feste IP nötig für eigene, von außen erreichbare Dienste (VPN-Gateway, Mailserver); Privatanschlüsse bekommen meist wechselnde IPs, oft nur noch über **CGNAT** (geteilte IPv4) bzw. IPv6.
- **Ausfallsicherheit**: zweite Leitung eines anderen Providers/anderer Technik (z. B. Glasfaser + 5G-Backup), Router mit **Failover**/Load Balancing.

## Standorte vernetzen

**Site-to-Site-VPN** über das Internet (IPsec/WireGuard zwischen den Firewalls – günstig, verschlüsselt). Alternativen: angemietete Standleitung bzw. MPLS-Netz des Providers (garantierte Qualität, teuer) oder **SD-WAN** (softwaregesteuerte Nutzung mehrerer Leitungen, zentral verwaltet). Für einzelne Mitarbeitende: Client-to-Site-VPN.

> [!IMPORTANT]
> Prüfungslogik: Filiale mit 5 Personen, Cloud-Software → normaler Business-Glasfaser- oder VDSL-Anschluss + 5G-Backup + Site-to-Site-VPN zur Zentrale. Zentrale mit eigenem Server, vielen Homeoffice-VPNs und Cloud-Backup → symmetrischer Glasfaseranschluss mit fester IP und SLA.

## Verkabelung im Serverraum, WLAN-Ausleuchtung & Monitoring

- **Netzwerkschrank/Rack** (19″, Höheneinheiten HE): Switches, Router, Firewall, Server, USV. **Patchpanel**: Endpunkt der fest verlegten Kabel aus den Räumen; mit kurzen **Patchkabeln** wird jeder Port flexibel mit dem Switch verbunden. Beschriftung + Patchplan = schnelle Fehlersuche.
- **WLAN-Ausleuchtung**: mehrere Access Points mit überlappenden Funkzellen und nicht überlappenden Kanälen; **Roaming** = Client wechselt unterbrechungsfrei zum stärkeren AP. **Mesh-WLAN**: APs verbinden sich untereinander per Funk – einfach nachrüstbar, aber geringerer Durchsatz als per Kabel angebundene APs. Vor der Installation **Ausleuchtungsmessung** (Site Survey).
- **Proxy-Server**: Stellvertreter für Webzugriffe der Clients – Filtern von Inhalten, Caching, Protokollierung, Verbergen der internen Adressen. **Reverse Proxy**: steht vor internen Webservern (Lastverteilung, TLS-Terminierung, Schutz).
- **Monitoring**: **SNMP** (Simple Network Management Protocol, UDP 161/162) fragt Zustände von Netzwerkgeräten ab (Auslastung, Fehler, Traps bei Störungen); **Syslog** (UDP 514) sammelt Protokollmeldungen zentral; Monitoring-Tools (z. B. Zabbix, PRTG, Checkmk) alarmieren bei Ausfällen.

---

## 🃏 Karteikarten (41)

| Frage | Antwort |
|---|---|
| OSI-Schichten 1–7 | Bitübertragung, Sicherung, Vermittlung, Transport, Sitzung, Darstellung, Anwendung. |
| Auf welcher Schicht arbeitet ein Switch? | Schicht 2 – leitet Frames anhand von MAC-Adressen weiter. |
| Auf welcher Schicht arbeitet ein Router? | Schicht 3 – verbindet Netze, entscheidet anhand von IP-Adressen. |
| Switch vs. Router | Switch: verbindet Geräte innerhalb eines Netzes (MAC). Router: verbindet verschiedene Netze (IP). |
| Sterntopologie – Vor-/Nachteil | + Ausfall eines Endgeräts betrifft nur dieses, erweiterbar. − Zentraler Switch ist Single Point of Failure. |
| Max. Länge Twisted-Pair-Segment | 100 Meter. |
| Kabel für 10 Gbit/s auf 100 m | Cat 6A (10GBASE-T). |
| Vorteile Lichtwellenleiter | Große Reichweite, hohe Bandbreite, unempfindlich gegen EMV, abhörsicherer, galvanische Trennung. |
| Singlemode vs. Multimode | Singlemode: sehr dünner Kern, große Distanzen (km). Multimode: dickerer Kern, kurze Strecken. |
| PoE – Nutzen | Strom und Daten über ein Kabel (APs, IP-Telefone, Kameras) – keine Steckdose nötig, zentrale USV. |
| PoE / PoE+ / PoE++ | 802.3af 15,4 W / 802.3at 30 W / 802.3bt 60–100 W. |
| Wi-Fi 6 | IEEE 802.11ax, 2,4 und 5 GHz (6E: zusätzlich 6 GHz). |
| 2,4 GHz vs. 5 GHz | 2,4: mehr Reichweite, weniger Kanäle, mehr Störungen. 5: höhere Datenrate, mehr Kanäle, weniger Reichweite. |
| WPA2-Personal vs. WPA2-Enterprise | Personal: gemeinsamer Schlüssel (PSK). Enterprise: individuelle Anmeldung über 802.1X/RADIUS. |
| WPA3 – Verbesserung | SAE ersetzt PSK-Handshake → Schutz vor Offline-Wörterbuchangriffen, Forward Secrecy. |
| VLAN | Logische Trennung eines physischen Netzes in mehrere Broadcast-Domänen (IEEE 802.1Q). |
| Vollduplex | Gleichzeitiges Senden und Empfangen in beide Richtungen. |
| Halbduplex – Beispiel | WLAN: Senden und Empfangen abwechselnd über ein geteiltes Medium. |
| Anzahl Verbindungen vollvermascht | n · (n − 1) / 2. |
| Broadcast | Nachricht an alle Teilnehmer eines Netzes (z. B. ARP-Request, DHCP-Discover). |
| Physischer vs. logischer Netzplan | Physisch: Standorte, Kabelwege, Dosen, Racks. Logisch: Subnetze, VLANs, IP-Bereiche, Router. |
| Inhalt IP-Adresskonzept | Netze/VLANs, Netzadresse/Präfix, Gateway, DHCP-Bereich, statische Adressen, DNS. |
| Typischer Konfigurationsfehler im Netzplan | Host und Gateway liegen nicht im selben Subnetz; doppelte IP; falsche Maske; statische IP im DHCP-Pool. |
| Patchplan | Dokumentiert, welche Netzwerkdose mit welchem Switchport verbunden ist. |
| PAN / LAN / MAN / WAN | Persönlich (Bluetooth) / lokal (Gebäude) / Stadt / weltweit (Internet). |
| NFC | Near Field Communication – Funk über wenige Zentimeter (kontaktloses Bezahlen, Zutrittskarten). |
| FTTH vs. FTTC | FTTH: Glasfaser bis in die Wohnung/das Haus. FTTC: Glasfaser bis zum Verteilerkasten, Rest Kupfer (VDSL). |
| Upstream vs. Downstream | Upload (Firma → Internet) vs. Download (Internet → Firma). |
| Symmetrischer Anschluss – wann wichtig? | Cloud-Backups, Videokonferenzen, eigene Server, viele VPN-Nutzer im Homeoffice. |
| Latenz / Jitter | Latenz: Verzögerung in ms. Jitter: Schwankung der Latenz – beides kritisch für VoIP/Video. |
| Feste öffentliche IP – wofür? | Für von außen erreichbare Dienste wie VPN-Gateway oder Mailserver. |
| Business-Anschluss – Merkmale | Garantierte Bandbreite, SLA mit Entstörzeit, feste IP-Adressen, oft symmetrisch. |
| WAN-Ausfallsicherheit | Zweite Leitung (anderer Provider/andere Technik, z. B. 5G) mit Failover. |
| Site-to-Site-VPN | Verschlüsselter Tunnel zwischen zwei Standort-Firewalls über das Internet. |
| Kabelinternet – Nachteil | Geteiltes Medium: Bandbreite schwankt mit der Auslastung im Segment. |
| Patchpanel | Anschlussfeld im Rack, an dem die fest verlegten Kabel enden; Verbindung zum Switch über Patchkabel. |
| Roaming (WLAN) | Unterbrechungsfreier Wechsel eines Clients zum Access Point mit dem besseren Signal. |
| Mesh-WLAN | Access Points verbinden sich per Funk untereinander – flexibel, aber weniger Durchsatz als per Kabel. |
| Proxy-Server | Stellvertreter für Webzugriffe: Filter, Cache, Protokollierung, verbirgt interne Clients. |
| SNMP | Protokoll zur Überwachung/Verwaltung von Netzwerkgeräten (UDP 161/162). |
| Syslog | Standard zum zentralen Sammeln von Protokollmeldungen (UDP 514). |

## ✍️ Übungsfragen (31)

**1.** Auf welcher OSI-Schicht arbeitet ein klassischer Switch?
- A) 1
- B) 2
- C) 3
- D) 4

<details><summary>Lösung</summary>

**B) 2**<br>Sicherungsschicht, MAC-Adressen.

</details>

**2.** Welches Gerät verbindet das Firmen-LAN mit dem Internet?
- A) Hub
- B) Switch
- C) Router
- D) Repeater

<details><summary>Lösung</summary>

**C) Router**<br>Verschiedene Netze → Router.

</details>

**3.** Auf welcher OSI-Schicht ist TCP angesiedelt?
- A) 2
- B) 3
- C) 4
- D) 7

<details><summary>Lösung</summary>

**C) 4**<br>Transportschicht.

</details>

**4.** Wie viele Verbindungen benötigt ein vollvermaschtes Netz mit 6 Knoten?

<details><summary>Lösung</summary>

**15**<br>6 × 5 / 2 = 15.

</details>

**5.** Welche Kategorie benötigen Sie mindestens für 10 Gbit/s über 90 m Kupferkabel?
- A) Cat 5e
- B) Cat 6
- C) Cat 6A
- D) Cat 3

<details><summary>Lösung</summary>

**C) Cat 6A**<br>Cat 6 schafft 10G nur bis ca. 55 m.

</details>

**6.** Warum wird zwischen zwei Gebäuden (300 m) häufig LWL verlegt?
- A) Es ist günstiger als Kupfer
- B) Kupfer ist auf 100 m begrenzt und LWL ist unempfindlich gegen Störungen/Potenzialunterschiede
- C) LWL braucht keinen Switch
- D) LWL unterstützt PoE

<details><summary>Lösung</summary>

**B) Kupfer ist auf 100 m begrenzt und LWL ist unempfindlich gegen Störungen/Potenzialunterschiede**<br>Reichweite + EMV + galvanische Trennung.

</details>

**7.** Ein WLAN-AP benötigt 25 W. Welcher PoE-Standard reicht mindestens?
- A) 802.3af
- B) 802.3at (PoE+)
- C) 802.3ab
- D) 802.11ax

<details><summary>Lösung</summary>

**B) 802.3at (PoE+)**<br>802.3af liefert nur 15,4 W, PoE+ 30 W.

</details>

**8.** Welches WLAN-Verfahren erlaubt individuelle Anmeldung jedes Mitarbeiters über einen RADIUS-Server?
- A) WPA2-Personal
- B) WEP
- C) WPA2/WPA3-Enterprise (802.1X)
- D) WPS

<details><summary>Lösung</summary>

**C) WPA2/WPA3-Enterprise (802.1X)**

</details>

**9.** Welcher IEEE-Standard heißt Wi-Fi 6?
- A) 802.11n
- B) 802.11ac
- C) 802.11ax
- D) 802.11be

<details><summary>Lösung</summary>

**C) 802.11ax**<br>n = Wi-Fi 4, ac = Wi-Fi 5, be = Wi-Fi 7.

</details>

**10.** Welche Vorteile bieten VLANs? (mehrere)
- A) Trennung von Abteilungen/Gästen
- B) Reduzierung der Broadcast-Last
- C) Mehr Bandbreite pro Kabel
- D) Flexible Zuordnung unabhängig vom Standort

<details><summary>Lösung</summary>

**A) Trennung von Abteilungen/Gästen, B) Reduzierung der Broadcast-Last, D) Flexible Zuordnung unabhängig vom Standort**<br>Die Bandbreite eines Kabels ändert sich nicht.

</details>

**11.** Was ist ein Nachteil der Sterntopologie?
- A) Kabelbruch legt das ganze Netz lahm
- B) Der zentrale Switch ist ein Single Point of Failure
- C) Sie ist nicht erweiterbar
- D) Es entstehen ständig Kollisionen

<details><summary>Lösung</summary>

**B) Der zentrale Switch ist ein Single Point of Failure**

</details>

**12.** Welche Kanäle sind im 2,4-GHz-Band in Europa üblicherweise überlappungsfrei?
- A) 1, 2, 3
- B) 1, 6, 11
- C) 36, 40, 44
- D) 1, 7, 13

<details><summary>Lösung</summary>

**B) 1, 6, 11**<br>Klassisch 1/6/11 (in EU auch 1/5/9/13 möglich).

</details>

**13.** Welche Übertragungsart nutzt WLAN?
- A) Simplex
- B) Halbduplex
- C) Vollduplex
- D) Multiplex-Vollduplex

<details><summary>Lösung</summary>

**B) Halbduplex**<br>Geteiltes Medium, abwechselnd.

</details>

**14.** Ein Unternehmen nutzt WPA2-Personal mit einem gemeinsamen Passwort. Empfehlen Sie eine bessere Lösung und begründen Sie diese. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Empfehlung: WPA2/WPA3-Enterprise mit IEEE 802.1X und RADIUS-Server (2). Begründung: Jeder Mitarbeiter meldet sich individuell (Benutzer/Zertifikat) an, Zugänge ausgeschiedener Mitarbeiter können einzeln gesperrt werden, kein gemeinsames Passwort muss verteilt/geändert werden, Anmeldungen sind nachvollziehbar (2).

</details>

**15.** Erläutern Sie den Unterschied zwischen Switch und Router. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Ein Switch arbeitet auf OSI-Schicht 2 und verbindet Endgeräte innerhalb desselben Netzes (2); er leitet Frames anhand der MAC-Adresstabelle gezielt an den Zielport. Ein Router arbeitet auf Schicht 3, verbindet unterschiedliche (Sub-)Netze, z. B. LAN und Internet, und leitet Pakete anhand der IP-Adresse und seiner Routingtabelle weiter (2).

</details>

**16.** Nennen Sie drei Vorteile von Power over Ethernet beim Einsatz von Access Points an der Decke. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 1: keine separate Steckdose/Stromleitung an der Decke nötig; nur ein Kabel für Strom und Daten; zentrale Absicherung über USV am Switch; APs können per Switch-Port neu gestartet werden; geringere Installationskosten, flexible Platzierung.

</details>

**17.** Ein PC hat 192.168.10.57/24 und Gateway 192.168.1.1. Was ist falsch?
- A) Nichts
- B) Das Gateway liegt nicht im Subnetz des PCs
- C) Die Maske ist zu groß
- D) Die IP ist öffentlich

<details><summary>Lösung</summary>

**B) Das Gateway liegt nicht im Subnetz des PCs**<br>Das Gateway muss im eigenen Subnetz liegen (z. B. 192.168.10.1).

</details>

**18.** Der DHCP-Bereich ist .100–.200, der Drucker hat statisch .150. Welches Problem droht?
- A) Keines
- B) IP-Adresskonflikt, wenn DHCP .150 vergibt
- C) Der Drucker ist zu langsam
- D) DNS funktioniert nicht

<details><summary>Lösung</summary>

**B) IP-Adresskonflikt, wenn DHCP .150 vergibt**<br>Statische Adressen außerhalb des Pools vergeben oder reservieren.

</details>

**19.** Welche Dokumentation zeigt, an welchem Switchport die Dose 2.14 angeschlossen ist?
- A) Logischer Netzplan
- B) Patchplan
- C) IP-Adresskonzept
- D) Lizenzliste

<details><summary>Lösung</summary>

**B) Patchplan**

</details>

**20.** Nennen Sie vier Angaben, die in ein IP-Adresskonzept gehören. (2 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Je 0,5: Netz-/VLAN-Bezeichnung; Netzadresse und Präfix/Maske; Standardgateway; DHCP-Bereich; statische Adressen (Server, Drucker, Netzwerkgeräte); DNS-Server; Broadcastadresse; Verantwortlicher.

</details>

**21.** Ein Bluetooth-Headset ist mit dem Notebook verbunden. Welche Netzart liegt vor?
- A) LAN
- B) PAN
- C) MAN
- D) WAN

<details><summary>Lösung</summary>

**B) PAN**

</details>

**22.** Welche Anschlussart bietet in der Regel die höchsten und zukunftssichersten Datenraten?
- A) VDSL
- B) Glasfaser FTTH
- C) Kabel
- D) Satellit

<details><summary>Lösung</summary>

**B) Glasfaser FTTH**

</details>

**23.** Eine Firma sichert jede Nacht 500 GB in die Cloud. Worauf ist beim Internetanschluss besonders zu achten?
- A) Hoher Download
- B) Hoher Upload – möglichst symmetrischer Anschluss
- C) Niedriger Preis
- D) WLAN-Standard

<details><summary>Lösung</summary>

**B) Hoher Upload – möglichst symmetrischer Anschluss**<br>Backups gehen von der Firma ins Internet = Upstream.

</details>

**24.** Wie viele Stunden dauert der Upload von 500 GB bei 100 Mbit/s Upstream (dezimal, ohne Overhead)? (1 Nachkommastelle)

<details><summary>Lösung</summary>

**11.1 h**<br>500 × 8 = 4.000 Gbit = 4.000.000 Mbit ÷ 100 = 40.000 s ≈ 11,1 h.

</details>

**25.** Welche Maßnahme erhöht die Verfügbarkeit der Internetanbindung?
- A) Schnelleres WLAN
- B) Zweite Leitung über anderen Provider oder 5G mit automatischem Failover
- C) Größerer Switch
- D) Neuer Router desselben Anschlusses

<details><summary>Lösung</summary>

**B) Zweite Leitung über anderen Provider oder 5G mit automatischem Failover**

</details>

**26.** Wofür braucht ein Unternehmen eine feste öffentliche IP-Adresse?
- A) Für das WLAN der Gäste
- B) Damit eigene Dienste wie das VPN-Gateway zuverlässig von außen erreichbar sind
- C) Für DHCP im LAN
- D) Für Bluetooth

<details><summary>Lösung</summary>

**B) Damit eigene Dienste wie das VPN-Gateway zuverlässig von außen erreichbar sind**

</details>

**27.** Wie werden Zentrale und Filiale kostengünstig und sicher über das Internet verbunden?
- A) Offene Portfreigaben
- B) Site-to-Site-VPN zwischen den Firewalls
- C) Telnet
- D) Gemeinsames WLAN-Passwort

<details><summary>Lösung</summary>

**B) Site-to-Site-VPN zwischen den Firewalls**

</details>

**28.** Eine neue Filiale (6 Mitarbeitende, Kasse und Warenwirtschaft in der Cloud) soll ans Internet angebunden werden. Empfehlen Sie eine Anbindung und begründen Sie zwei Aspekte. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung:** Empfehlung (2): Business-Glasfaser- (oder VDSL-)Anschluss mit SLA plus LTE/5G-Backup-Router mit Failover, Anbindung an die Zentrale per Site-to-Site-VPN. Begründungen (je 1): Kasse/Warenwirtschaft laufen in der Cloud – ohne Internet kein Verkauf, daher Ausfallsicherheit durch Zweitleitung; SLA sichert schnelle Entstörung; VPN verschlüsselt den Datenverkehr zur Zentrale; ausreichende Bandbreite/geringe Latenz für Cloud-Anwendungen.

</details>

**29.** Wo enden in einem strukturiert verkabelten Gebäude die fest verlegten Kabel aus den Büros?
- A) Direkt im Router
- B) Auf dem Patchpanel im Netzwerkschrank
- C) Im Access Point
- D) In der Steckdose

<details><summary>Lösung</summary>

**B) Auf dem Patchpanel im Netzwerkschrank**

</details>

**30.** Mit welchem Protokoll überwacht ein Monitoring-System die Portauslastung eines Switches?
- A) SMTP
- B) SNMP
- C) SSH
- D) FTP

<details><summary>Lösung</summary>

**B) SNMP**

</details>

**31.** Ein Lager wird mit WLAN ausgeleuchtet. Mitarbeitende laufen mit Scannern durch die Halle. Was muss das WLAN unterstützen?
- A) Nur ein AP mit maximaler Sendeleistung
- B) Mehrere APs mit überlappenden Zellen und Roaming
- C) Bluetooth
- D) Ad-hoc-Modus

<details><summary>Lösung</summary>

**B) Mehrere APs mit überlappenden Zellen und Roaming**

</details>


[⬅ Inhaltsverzeichnis](README.md)
