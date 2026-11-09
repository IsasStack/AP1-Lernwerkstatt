T.push({
id:"cloud", title:"Cloud, Virtualisierung, ERP & KI", icon:"☁️", area:"Technik", weight:3,
summary:"IaaS/PaaS/SaaS, Bereitstellungsmodelle, Hypervisor, Container, ERP/CRM/SCM, KI am Arbeitsplatz.",
lesson:`
<h3>Cloud Computing – Servicemodelle</h3>
<table><tr><th>Modell</th><th>Anbieter stellt</th><th>Kunde verwaltet</th><th>Beispiele</th></tr>
<tr><td><b>IaaS</b></td><td>Server, Speicher, Netzwerk (virtuell)</td><td>Betriebssystem, Middleware, Apps, Daten</td><td>Azure VMs, AWS EC2</td></tr>
<tr><td><b>PaaS</b></td><td>+ Betriebssystem, Laufzeitumgebung, Datenbank</td><td>Anwendungen & Daten</td><td>Azure App Service, Heroku</td></tr>
<tr><td><b>SaaS</b></td><td>komplette Anwendung</td><td>nur Nutzung/Daten, Konfiguration</td><td>Microsoft 365, Salesforce, Teams</td></tr></table>
<div class="merke"><b>Shared Responsibility:</b> Je weiter Richtung SaaS, desto mehr Verantwortung trägt der Anbieter. Für Daten, Identitäten und Zugriffe bleibt immer der Kunde verantwortlich.</div>
<h3>Bereitstellungsmodelle</h3>
<ul><li><b>Public Cloud</b>: Ressourcen vieler Kunden auf Infrastruktur eines Anbieters – günstig, skalierbar.</li>
<li><b>Private Cloud</b>: exklusiv für eine Organisation (eigenes RZ oder gehostet) – Kontrolle, Datenschutz, teurer.</li>
<li><b>Hybrid Cloud</b>: Kombination – z. B. sensible Daten privat, Lastspitzen public.</li>
<li><b>Community Cloud</b>: mehrere Organisationen mit gleichen Anforderungen (z. B. Behörden).</li></ul>
<p><b>Merkmale (NIST)</b>: On-Demand-Self-Service, breiter Netzwerkzugriff, Ressourcen-Pooling, schnelle Elastizität, messbare Nutzung (Pay-per-Use).<br>
<b>Vorteile</b>: keine Investitionskosten (OPEX statt CAPEX), Skalierbarkeit, ortsunabhängig, hohe Verfügbarkeit, Updates durch Anbieter. <b>Nachteile/Risiken</b>: Internetabhängigkeit, Datenschutz (Serverstandort, <b>Drittland</b>-Übermittlung, AV-Vertrag nach Art. 28 DSGVO), Vendor-Lock-in, laufende Kosten, weniger Kontrolle.</p>
<h3>Virtualisierung</h3>
<ul><li><b>Hypervisor Typ 1 (Bare Metal)</b>: läuft direkt auf der Hardware – Hyper-V, VMware ESXi, Proxmox/KVM. Server/Rechenzentrum, performant.</li>
<li><b>Hypervisor Typ 2 (Hosted)</b>: läuft als Anwendung auf einem Host-OS – VirtualBox, VMware Workstation. Test/Entwicklung.</li>
<li><b>Vorteile</b>: bessere Auslastung, weniger Hardware/Strom/Platz (Green IT), Snapshots, schnelle Bereitstellung, Isolation, Live-Migration, einfache Testumgebungen.</li>
<li><b>Nachteile</b>: Host als Single Point of Failure, Overhead, Lizenzkosten, Know-how.</li></ul>
<p><b>Container</b> (Docker): teilen sich den Kernel des Host-OS, enthalten nur App + Abhängigkeiten → leichtgewichtig, starten in Sekunden, portabel. VMs enthalten ein vollständiges Gast-OS → stärkere Isolation.</p>
<p><b>Desktop-Virtualisierung (VDI)</b>: Desktops laufen zentral im Rechenzentrum, Zugriff über Thin Client oder beliebige Geräte (z. B. Azure Virtual Desktop, Windows 365).</p>
<h3>Unternehmenssoftware</h3>
<table><tr><th>System</th><th>Zweck</th><th>Typische Funktionen</th></tr>
<tr><td><b>ERP</b> – Enterprise Resource Planning</td><td>integrierte Steuerung aller Unternehmensressourcen mit zentraler Datenbank</td><td>Finanzbuchhaltung, Einkauf, Lager/Materialwirtschaft, Produktion, Vertrieb, Personal (z. B. SAP S/4HANA, Microsoft Dynamics 365)</td></tr>
<tr><td><b>CRM</b> – Customer Relationship Management</td><td>Kundenbeziehungen pflegen</td><td>Kontakthistorie, Leads, Angebote, Kampagnen, Service-Tickets (z. B. Salesforce, HubSpot)</td></tr>
<tr><td><b>SCM</b> – Supply Chain Management</td><td>Lieferkette steuern</td><td>Beschaffung, Lieferanten, Logistik, Bestandsoptimierung, Just-in-Time</td></tr></table>
<p>Weitere: DMS (Dokumentenmanagement), HR-Software, BI (Business Intelligence), Groupware (E-Mail, Kalender – Exchange/Outlook), Kollaboration (Teams, SharePoint).<br><b>Stammdaten</b> (selten geändert: Kunden, Artikel) vs. <b>Bewegungsdaten</b> (laufend: Bestellungen, Rechnungen).</p>
<h3>KI-Software am Arbeitsplatz</h3>
<ul><li><b>Einsatz</b>: Texte entwerfen/zusammenfassen, Übersetzen, Programmieren (Code-Assistenten), Meeting-Protokolle, Datenanalyse, Chatbots im Support, Bilderkennung. Beispiele: Microsoft 365 Copilot, ChatGPT, Claude, GitHub Copilot.</li>
<li><b>Generative KI / LLM</b> (Large Language Model): erzeugt Inhalte auf Basis statistischer Muster aus Trainingsdaten; <b>Prompt</b> = Eingabe/Anweisung.</li>
<li><b>Risiken</b>: <b>Halluzinationen</b> (plausibel klingende Falschaussagen) → Ergebnisse immer prüfen; Datenschutz/Geschäftsgeheimnisse (keine personenbezogenen oder vertraulichen Daten in öffentliche KI-Dienste); Urheberrecht; Bias (Verzerrungen); Abhängigkeit.</li>
<li><b>Maßnahmen</b>: KI-Richtlinie im Unternehmen, freigegebene Tools mit Enterprise-Datenschutz (keine Nutzung der Daten zum Training), Schulung, menschliche Kontrolle („Human in the Loop“), Kennzeichnung KI-generierter Inhalte.</li>
<li><b>EU AI Act (KI-Verordnung)</b>: risikobasiert (unannehmbar = verboten, hoch, begrenzt/Transparenzpflicht, minimal). Seit 02.02.2025 gelten Verbote bestimmter Praktiken und Art. 4 <b>KI-Kompetenz</b>: Unternehmen müssen Maßnahmen ergreifen, damit Beschäftigte, die KI nutzen, ausreichend geschult sind.</li></ul>`,
cards:[
["IaaS","Infrastructure as a Service: virtuelle Server/Speicher/Netz; Kunde verwaltet OS, Apps, Daten."],
["PaaS","Platform as a Service: Laufzeitumgebung/Entwicklungsplattform; Kunde verwaltet nur Anwendung und Daten."],
["SaaS","Software as a Service: fertige Anwendung über das Internet, z. B. Microsoft 365."],
["Public vs. Private Cloud","Public: geteilte Infrastruktur eines Anbieters, günstig/skalierbar. Private: exklusiv für eine Organisation, mehr Kontrolle."],
["Hybrid Cloud","Kombination aus Private und Public Cloud."],
["Cloud-Risiken","Internetabhängigkeit, Datenschutz/Serverstandort, Vendor-Lock-in, laufende Kosten, Kontrollverlust."],
["Hypervisor Typ 1","Bare Metal, direkt auf Hardware: Hyper-V, ESXi, Proxmox."],
["Hypervisor Typ 2","Läuft auf einem Host-Betriebssystem: VirtualBox, VMware Workstation."],
["Container vs. VM","Container teilen den Host-Kernel (leicht, schnell); VMs haben ein eigenes Gast-OS (stärkere Isolation)."],
["Vorteile Virtualisierung","Bessere Auslastung, weniger Hardware & Strom, Snapshots, schnelle Bereitstellung, Isolation."],
["ERP","Enterprise Resource Planning: integrierte Software für Finanzen, Einkauf, Lager, Produktion, Vertrieb, Personal."],
["CRM","Customer Relationship Management: Verwaltung von Kundenkontakten, Vertrieb, Service."],
["SCM","Supply Chain Management: Planung und Steuerung der Lieferkette."],
["Stamm- vs. Bewegungsdaten","Stammdaten: langfristig, selten geändert (Kunde). Bewegungsdaten: laufend neu (Auftrag, Rechnung)."],
["KI-Halluzination","Plausibel klingende, aber falsche Ausgabe eines KI-Modells."],
["KI am Arbeitsplatz – Regeln","Keine personenbezogenen/vertraulichen Daten in öffentliche Tools, Ergebnisse prüfen, freigegebene Tools, Richtlinie & Schulung."],
["EU AI Act – Art. 4","Pflicht zur Förderung von KI-Kompetenz bei Beschäftigten, die KI nutzen (seit 02.02.2025)."],
["VDI","Virtual Desktop Infrastructure: Desktops laufen zentral, Zugriff von Thin Clients/beliebigen Geräten."]
],
qs:[
{t:"sc",q:"Ein Unternehmen nutzt Microsoft 365 im Browser. Welches Cloud-Modell?",o:["IaaS","PaaS","SaaS","On-Premises"],a:2,e:"Fertige Anwendung = SaaS."},
{t:"sc",q:"Ein Entwicklerteam mietet virtuelle Maschinen und installiert eigenes Linux darauf. Welches Modell?",o:["IaaS","PaaS","SaaS","FaaS"],a:0,e:"Infrastruktur gemietet, OS selbst verwaltet."},
{t:"sc",q:"Welcher Hypervisor gehört zu Typ 2?",o:["VMware ESXi","Microsoft Hyper-V Server","Oracle VirtualBox","Proxmox VE"],a:2,e:"VirtualBox läuft als Anwendung auf einem Host-OS."},
{t:"sc",q:"Welche Software verwaltet Kundenkontakte, Angebote und Verkaufschancen?",o:["ERP","CRM","SCM","DMS"],a:1,e:"CRM = Customer Relationship Management."},
{t:"sc",q:"Welches System integriert Buchhaltung, Lager, Einkauf und Personal in einer zentralen Datenbank?",o:["CRM","ERP","CMS","SIEM"],a:1,e:"ERP."},
{t:"mc",q:"Welche Risiken bestehen beim Einsatz öffentlicher KI-Chatbots im Unternehmen? (mehrere)",o:["Halluzinationen","Abfluss vertraulicher Daten","Garantiert fehlerfreie Ergebnisse","Datenschutzverstöße"],a:[0,1,3],e:"KI-Ergebnisse sind nicht garantiert korrekt."},
{t:"sc",q:"Was ist ein wesentlicher Unterschied zwischen Container und virtueller Maschine?",o:["Container enthalten ein vollständiges Gast-Betriebssystem","Container teilen sich den Kernel des Hosts","VMs starten schneller als Container","Container benötigen einen Typ-2-Hypervisor"],a:1,e:"Darum sind Container leichtgewichtig."},
{t:"sc",q:"Welches Bereitstellungsmodell kombiniert eigene Infrastruktur mit Ressourcen eines öffentlichen Anbieters?",o:["Public Cloud","Private Cloud","Hybrid Cloud","Community Cloud"],a:2,e:""},
{t:"sc",q:"Eine Rechnung im ERP-System ist ein Beispiel für …",o:["Stammdaten","Bewegungsdaten","Metadaten","Konfigurationsdaten"],a:1,e:"Rechnungen entstehen laufend = Bewegungsdaten."},
{t:"sc",q:"Welche Pflicht aus dem EU AI Act gilt seit Februar 2025 für Unternehmen, die KI einsetzen?",o:["Jede KI muss zertifiziert sein","Förderung der KI-Kompetenz der Beschäftigten","KI darf nicht für Texte genutzt werden","Meldung jedes Prompts an die Behörde"],a:1,e:"Art. 4 – KI-Kompetenz."},
{t:"open",q:"Ihre Geschäftsführung möchte einen generativen KI-Assistenten für alle Mitarbeitenden einführen. Nennen Sie zwei Risiken und je eine Gegenmaßnahme. (4 Punkte)",p:4,a:"Z. B.: Halluzinationen/falsche Ergebnisse (1) → Ergebnisse prüfen, Human in the Loop, Schulung (1). Abfluss vertraulicher oder personenbezogener Daten (1) → nur freigegebene Enterprise-Tools ohne Trainingsnutzung, KI-Richtlinie, AV-Vertrag (1). Urheberrechtsverletzungen (1) → Quellen prüfen, Kennzeichnung (1)."},
{t:"open",q:"Erläutern Sie zwei Vorteile der Servervirtualisierung. (4 Punkte)",p:4,a:"Z. B.: Mehrere virtuelle Server teilen sich eine physische Hardware → bessere Auslastung, weniger Anschaffungs-, Strom- und Platzkosten (2). Snapshots/Backups ganzer VMs und schnelle Wiederherstellung (2). Neue Server lassen sich in Minuten bereitstellen (2). Isolation: Fehler in einer VM betreffen andere nicht (2)."},
{t:"open",q:"Nennen Sie je ein Beispiel für IaaS, PaaS und SaaS und erklären Sie, wer jeweils das Betriebssystem verwaltet. (3 Punkte)",p:3,a:"IaaS: z. B. Azure VM – Kunde verwaltet das Betriebssystem (1). PaaS: z. B. Azure App Service – Anbieter verwaltet das OS, Kunde nur die Anwendung (1). SaaS: z. B. Microsoft 365 – Anbieter verwaltet alles bis zur Anwendung (1)."}
]
});
