T.push({
id:"ip", title:"IP-Adressierung & Netzdienste", icon:"🔢", area:"Netzwerk", weight:3,
summary:"IPv4, Subnetting, private Adressen, NAT, IPv6, DHCP, DNS, ARP, Ports & Protokolle.",
lesson:`
<h3>IPv4-Grundlagen</h3>
<p>32 Bit, vier Oktette dezimal (z. B. 192.168.10.25). Die <b>Subnetzmaske</b> trennt Netz- und Hostanteil. CIDR-Notation: /24 = 24 Netzbits = 255.255.255.0.</p>
<table><tr><th>CIDR</th><th>Maske</th><th>Adressen</th><th>nutzbare Hosts</th></tr>
<tr><td>/24</td><td>255.255.255.0</td><td>256</td><td>254</td></tr>
<tr><td>/25</td><td>255.255.255.128</td><td>128</td><td>126</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>64</td><td>62</td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>32</td><td>30</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td></tr>
<tr><td>/29</td><td>255.255.255.248</td><td>8</td><td>6</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>4</td><td>2</td></tr>
<tr><td>/23</td><td>255.255.254.0</td><td>512</td><td>510</td></tr>
<tr><td>/22</td><td>255.255.252.0</td><td>1024</td><td>1022</td></tr>
<tr><td>/16</td><td>255.255.0.0</td><td>65.536</td><td>65.534</td></tr></table>
<div class="merke">Nutzbare Hosts = 2<sup>Hostbits</sup> − 2 (Netzadresse + Broadcast). Hostbits = 32 − Präfix.</div>
<h3>Subnetting – Rezept</h3>
<ol><li><b>Blockgröße</b> im „interessanten“ Oktett = 256 − Maskenwert (z. B. /26 → 256 − 192 = 64).</li>
<li><b>Netzadresse</b> = größtes Vielfaches der Blockgröße ≤ IP-Wert im Oktett.</li>
<li><b>Broadcast</b> = nächste Netzadresse − 1.</li>
<li><b>Erster Host</b> = Netz + 1, <b>letzter Host</b> = Broadcast − 1.</li></ol>
<p>Beispiel <b>172.16.5.77/27</b>: Block 32 → Netze 0, 32, 64, 96 … → 77 liegt in 64–95. Netz 172.16.5.64, Broadcast 172.16.5.95, Hosts .65–.94 (30 Hosts).</p>
<p><b>Aufteilen</b>: Ein /24 in 4 gleiche Subnetze → 2 Bits leihen (2² = 4) → /26. Allgemein: Anzahl Subnetze = 2<sup>geliehene Bits</sup>. Für Hosts: kleinstes n mit 2ⁿ − 2 ≥ benötigte Hosts → Präfix = 32 − n.</p>
<p><b>Gleiches Netz?</b> IP AND Maske für beide Adressen berechnen – nur wenn das Ergebnis gleich ist, kommunizieren sie direkt; sonst über das <b>Standardgateway</b> (Router).</p>
<h3>Besondere Adressen</h3>
<ul><li><b>Private Adressen (RFC 1918)</b>: 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0–172.31.255.255), 192.168.0.0/16 – im Internet nicht geroutet.</li>
<li><b>Loopback</b> 127.0.0.0/8 (127.0.0.1 = localhost). <b>APIPA</b> 169.254.0.0/16 – vergibt sich der Client selbst, wenn <b>kein DHCP-Server</b> antwortet → typisches Fehlerbild!</li>
<li><b>NAT/PAT</b>: Router übersetzt private in eine öffentliche Adresse (mit Ports) → spart öffentliche IPv4-Adressen, verbirgt interne Struktur.</li></ul>
<h3>IPv6</h3>
<p>128 Bit, 8 Blöcke à 16 Bit, hexadezimal, durch Doppelpunkte getrennt. Grund: IPv4-Adressknappheit (≈ 4,3 Mrd.); IPv6 ≈ 3,4 × 10³⁸ Adressen.</p>
<div class="merke"><b>Kürzungsregeln:</b> 1. Führende Nullen je Block weglassen (0db8 → db8, 0000 → 0). 2. <b>Eine</b> zusammenhängende Folge von Null-Blöcken darf durch <b>::</b> ersetzt werden – nur <b>einmal</b> pro Adresse (bei mehreren Folgen die längste).<br>2001:0db8:0000:0000:0000:ff00:0042:8329 → <b>2001:db8::ff00:42:8329</b></div>
<table><tr><th>Typ/Präfix</th><th>Bedeutung</th></tr>
<tr><td>2000::/3</td><td>Global Unicast (öffentlich, weltweit routbar)</td></tr>
<tr><td>fe80::/10</td><td>Link-Local – jedes Interface hat eine, nur im lokalen Segment</td></tr>
<tr><td>fc00::/7 (fd00::/8)</td><td>Unique Local (ähnlich privat)</td></tr>
<tr><td>ff00::/8</td><td>Multicast (IPv6 kennt <b>keinen Broadcast</b>)</td></tr>
<tr><td>::1</td><td>Loopback</td></tr>
<tr><td>2001:db8::/32</td><td>Dokumentationszwecke</td></tr></table>
<p>Aufbau Global Unicast: meist 64 Bit Präfix (Netz) + 64 Bit <b>Interface Identifier</b>. Typische Zuteilung an Kunden: /48 oder /56; Subnetz immer /64. Adresskonfiguration: <b>SLAAC</b> (automatisch über Router Advertisements), DHCPv6 oder statisch. <b>Anycast</b>: gleiche Adresse auf mehreren Geräten, nächstes antwortet. Vorteile: riesiger Adressraum, kein NAT nötig, einfacherer Header, Autokonfiguration, IPsec integriert. <b>Dual Stack</b> = IPv4 und IPv6 parallel.</p>
<h3>Wichtige Dienste</h3>
<ul><li><b>DHCP</b> (UDP 67/68): automatische Vergabe von IP, Maske, Gateway, DNS. Ablauf <b>DORA</b>: Discover (Broadcast) → Offer → Request → Acknowledge. Lease-Zeit, Reservierung per MAC-Adresse.</li>
<li><b>DNS</b> (Port 53): löst Namen in IP-Adressen auf. Einträge: <b>A</b> (Name → IPv4), <b>AAAA</b> (→ IPv6), <b>CNAME</b> (Alias), <b>MX</b> (Mailserver), <b>PTR</b> (Reverse: IP → Name), <b>NS</b>, <b>SRV</b> (Dienste, z. B. Domänencontroller), TXT. Auflösung: Cache → hosts-Datei → DNS-Server (rekursiv/iterativ, Root → TLD → autoritativ).</li>
<li><b>ARP</b>: ermittelt zur bekannten IPv4-Adresse die MAC-Adresse (Broadcast-Anfrage). IPv6 nutzt stattdessen NDP.</li>
<li><b>ICMP</b>: Steuer-/Fehlermeldungen, genutzt von ping und traceroute.</li></ul>
<h3>TCP vs. UDP</h3>
<table><tr><th>TCP</th><th>UDP</th></tr>
<tr><td>verbindungsorientiert (3-Way-Handshake SYN, SYN-ACK, ACK)</td><td>verbindungslos</td></tr>
<tr><td>zuverlässig: Bestätigungen, Reihenfolge, Neuübertragung</td><td>keine Garantie, dafür schnell & wenig Overhead</td></tr>
<tr><td>HTTP(S), SSH, SMTP, FTP</td><td>DNS-Abfragen, DHCP, VoIP, Streaming, Online-Games</td></tr></table>
<h3>Ports – auswendig lernen</h3>
<table><tr><th>Port</th><th>Dienst</th><th>Port</th><th>Dienst</th></tr>
<tr><td>20/21</td><td>FTP</td><td>143 / 993</td><td>IMAP / IMAPS</td></tr>
<tr><td>22</td><td>SSH, SFTP</td><td>110 / 995</td><td>POP3 / POP3S</td></tr>
<tr><td>23</td><td>Telnet (unverschlüsselt!)</td><td>389 / 636</td><td>LDAP / LDAPS</td></tr>
<tr><td>25 / 587 / 465</td><td>SMTP / Submission / SMTPS</td><td>445</td><td>SMB (Dateifreigaben)</td></tr>
<tr><td>53</td><td>DNS</td><td>3389</td><td>RDP (Remotedesktop)</td></tr>
<tr><td>67/68</td><td>DHCP</td><td>88</td><td>Kerberos</td></tr>
<tr><td>80 / 443</td><td>HTTP / HTTPS</td><td>123</td><td>NTP (Zeit)</td></tr></table>
<p><b>Protokolle</b>: SMB (Windows-Dateifreigaben), NFS (Unix-Dateifreigaben), SMTP (Mails senden), IMAP (Mails auf Server synchron verwalten), POP3 (Mails herunterladen), IPsec (Verschlüsselung auf Schicht 3, VPN), TLS (Verschlüsselung für HTTPS & Co.), SSH (sichere Fernwartung statt Telnet).</p>`,
cards:[
["Nutzbare Hosts in /26","62 (2⁶ − 2)."],
["Nutzbare Hosts in /27","30."],
["Nutzbare Hosts in /28","14."],
["Maske zu /27","255.255.255.224."],
["Maske zu /22","255.255.252.0."],
["Private IPv4-Bereiche (RFC 1918)","10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."],
["APIPA-Adresse 169.254.x.x bedeutet …","Der Client hat keinen DHCP-Server erreicht und sich selbst eine Link-Local-Adresse gegeben."],
["NAT","Router übersetzt private in öffentliche IP-Adressen – spart IPv4-Adressen, verbirgt interne Struktur."],
["IPv6 – Länge und Darstellung","128 Bit, 8 Blöcke à 4 Hex-Ziffern, getrennt durch Doppelpunkte."],
["IPv6-Kürzungsregeln","Führende Nullen pro Block weglassen; eine zusammenhängende Nullfolge einmal durch :: ersetzen."],
["fe80::/10","IPv6 Link-Local-Adresse – nur im lokalen Segment gültig."],
["ff00::/8","IPv6-Multicast (IPv6 hat keinen Broadcast)."],
["::1","IPv6-Loopback (entspricht 127.0.0.1)."],
["SLAAC","Stateless Address Autoconfiguration: IPv6-Host bildet Adresse aus Router-Präfix + Interface-ID."],
["DHCP-Ablauf (DORA)","Discover, Offer, Request, Acknowledge."],
["DNS-Eintrag A / AAAA","A: Name → IPv4. AAAA: Name → IPv6."],
["DNS-Eintrag MX","Verweist auf den Mailserver einer Domain."],
["DNS-Eintrag PTR","Reverse Lookup: IP-Adresse → Name."],
["ARP","Ermittelt zur IPv4-Adresse die MAC-Adresse im lokalen Netz."],
["TCP vs. UDP","TCP: verbindungsorientiert, zuverlässig. UDP: verbindungslos, schnell, ohne Garantie."],
["Port 22 / 23","SSH (verschlüsselt) / Telnet (unverschlüsselt)."],
["Port 443 / 3389","HTTPS / RDP."],
["Port 445","SMB – Windows-Dateifreigaben."],
["Port 53","DNS."],
["IMAP vs. POP3","IMAP: Mails bleiben auf dem Server, geräteübergreifend synchron. POP3: Mails werden heruntergeladen (meist gelöscht)."]
],
qs:[
{t:"num",q:"Wie viele Hosts sind in einem /25-Netz nutzbar?",a:126,unit:"",e:"2⁷ − 2 = 126."},
{t:"sc",q:"Wie lautet die Netzadresse von 192.168.1.130/26?",o:["192.168.1.0","192.168.1.64","192.168.1.128","192.168.1.192"],a:2,e:"Block 64: 0, 64, 128, 192 → 130 liegt in 128–191."},
{t:"sc",q:"Wie lautet die Broadcastadresse von 10.0.0.37/28?",o:["10.0.0.47","10.0.0.39","10.0.0.63","10.0.0.255"],a:0,e:"Block 16: 32–47 → Broadcast .47."},
{t:"sc",q:"Welche Adresse ist privat (RFC 1918)?",o:["172.32.1.1","172.20.5.10","192.169.0.1","11.0.0.1"],a:1,e:"172.16.0.0–172.31.255.255."},
{t:"sc",q:"Ein Client hat die IP 169.254.12.4. Was ist die wahrscheinlichste Ursache?",o:["DNS-Server falsch","DHCP-Server nicht erreichbar","Gateway falsch","IPv6 aktiv"],a:1,e:"APIPA wird vergeben, wenn kein DHCP antwortet."},
{t:"sc",q:"Welche Schreibweise ist eine korrekt gekürzte Form von 2001:0db8:0000:0000:0001:0000:0000:0001?",o:["2001:db8::1::1","2001:db8::1:0:0:1","2001:db8:0:0:1::1 und 2001:db8::1:0:0:1 sind beide gültig","2001:db8:1:1"],a:2,e:":: darf nur einmal vorkommen; beide Varianten sind gültig (empfohlen nach RFC 5952: die erste längste Folge, hier gleich lang → die erste: 2001:db8::1:0:0:1)."},
{t:"sc",q:"Womit beginnt eine IPv6-Link-Local-Adresse?",o:["2001:","fe80:","ff02:","fd00:"],a:1,e:"fe80::/10."},
{t:"sc",q:"Was kennt IPv6 im Gegensatz zu IPv4 NICHT?",o:["Multicast","Unicast","Broadcast","Anycast"],a:2,e:"Broadcast wird durch Multicast ersetzt."},
{t:"num",q:"Ein Netz benötigt 50 Hosts. Welches Präfix (Zahl hinter /) ist das kleinstmögliche Netz?",a:26,unit:"",e:"2⁶ − 2 = 62 ≥ 50 → 6 Hostbits → /26."},
{t:"num",q:"Ein /24-Netz soll in 8 gleich große Subnetze geteilt werden. Welches Präfix ergibt sich?",a:27,unit:"",e:"8 = 2³ → 3 Bits leihen → /27."},
{t:"sc",q:"Welcher DNS-Eintrag verweist auf den Mailserver einer Domain?",o:["A","CNAME","MX","PTR"],a:2,e:""},
{t:"sc",q:"Welche Nachricht sendet ein Client zuerst, um eine IP per DHCP zu erhalten?",o:["DHCP Request","DHCP Offer","DHCP Discover","DHCP Ack"],a:2,e:"DORA beginnt mit Discover (Broadcast)."},
{t:"sc",q:"Welches Protokoll ermittelt zu einer IPv4-Adresse die MAC-Adresse?",o:["DNS","ARP","ICMP","NTP"],a:1,e:""},
{t:"sc",q:"Welcher Port wird für RDP genutzt?",o:["22","443","3389","445"],a:2,e:""},
{t:"sc",q:"Welches Transportprotokoll nutzt VoIP typischerweise für die Sprachdaten?",o:["TCP","UDP","ICMP","ARP"],a:1,e:"Geringe Latenz wichtiger als Neuübertragung."},
{t:"mc",q:"Liegen 192.168.10.70/26 und 192.168.10.120/26 im selben Netz? Wähle alle richtigen Aussagen.",o:["Ja, beide im Netz 192.168.10.64","Nein, verschiedene Netze","Broadcast ist 192.168.10.127","Die Kommunikation braucht einen Router"],a:[0,2],e:"Block 64: 64–127 → beide im selben Netz, kein Router nötig."},
{t:"sc",q:"Was ist ein Vorteil von IPv6?",o:["Kürzere Adressen","Riesiger Adressraum, NAT nicht mehr nötig","Broadcast-Unterstützung","Nur 32 Bit"],a:1,e:""},
{t:"sc",q:"Welches Protokoll ersetzt Telnet für die sichere Fernwartung?",o:["FTP","SSH","SMTP","SNMP"],a:1,e:"SSH verschlüsselt, Port 22."},
{t:"open",q:"Ein Rechner erhält die Adresse 169.254.33.7 und kann nicht ins Internet. Erklären Sie die Ursache und nennen Sie zwei Prüfschritte. (4 Punkte)",p:4,a:"Ursache: Der Client hat keine Antwort von einem DHCP-Server erhalten und sich per APIPA selbst eine Link-Local-Adresse zugewiesen; damit fehlen Gateway und DNS (2). Prüfschritte (je 1): Netzwerkkabel/WLAN-Verbindung und Link-LED prüfen; ipconfig /release und /renew; Erreichbarkeit/Status des DHCP-Servers bzw. freie Adressen im Pool prüfen; VLAN-Zuordnung des Switchports prüfen."},
{t:"open",q:"Kürzen Sie die IPv6-Adresse 2001:0db8:00a0:0000:0000:0000:0000:0c01 maximal und erläutern Sie die angewandten Regeln. (3 Punkte)",p:3,a:"Ergebnis: 2001:db8:a0::c01 (1). Regel 1: Führende Nullen in jedem Block entfallen (0db8 → db8, 00a0 → a0, 0c01 → c01) (1). Regel 2: Die zusammenhängende Folge von Null-Blöcken wird einmalig durch :: ersetzt (1)."},
{t:"open",q:"Erläutern Sie den Ablauf einer DHCP-Adressvergabe. (4 Punkte)",p:4,a:"1. DHCP Discover: Der Client sucht per Broadcast einen DHCP-Server (1). 2. DHCP Offer: Ein Server bietet eine IP-Konfiguration an (1). 3. DHCP Request: Der Client fordert die angebotene Adresse an (Broadcast, damit andere Server Bescheid wissen) (1). 4. DHCP Acknowledge: Der Server bestätigt und vergibt die Adresse inkl. Lease-Zeit, Gateway, DNS (1)."}
]
});
