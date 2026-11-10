# ☁️ Cloud, Virtualisierung, ERP & KI

*Bereich: Technik · Prüfungsrelevanz: ★★★*

> IaaS/PaaS/SaaS, Bereitstellungsmodelle, Hypervisor, Container, ERP/CRM/SCM, KI am Arbeitsplatz.

[⬅ Inhaltsverzeichnis](README.md)

---

## Cloud Computing – Servicemodelle

<table><tr><th>Modell</th><th>Anbieter stellt</th><th>Kunde verwaltet</th><th>Beispiele</th></tr>
<tr><td><b>IaaS</b></td><td>Server, Speicher, Netzwerk (virtuell)</td><td>Betriebssystem, Middleware, Apps, Daten</td><td>Azure VMs, AWS EC2</td></tr>
<tr><td><b>PaaS</b></td><td>+ Betriebssystem, Laufzeitumgebung, Datenbank</td><td>Anwendungen &amp; Daten</td><td>Azure App Service, Heroku</td></tr>
<tr><td><b>SaaS</b></td><td>komplette Anwendung</td><td>nur Nutzung/Daten, Konfiguration</td><td>Microsoft 365, Salesforce, Teams</td></tr></table>

> [!IMPORTANT]
> **Shared Responsibility:** Je weiter Richtung SaaS, desto mehr Verantwortung trägt der Anbieter. Für Daten, Identitäten und Zugriffe bleibt immer der Kunde verantwortlich.

## Bereitstellungsmodelle

- **Public Cloud**: Ressourcen vieler Kunden auf Infrastruktur eines Anbieters – günstig, skalierbar.
- **Private Cloud**: exklusiv für eine Organisation (eigenes RZ oder gehostet) – Kontrolle, Datenschutz, teurer.
- **Hybrid Cloud**: Kombination – z. B. sensible Daten privat, Lastspitzen public.
- **Community Cloud**: mehrere Organisationen mit gleichen Anforderungen (z. B. Behörden).

**Merkmale (NIST)**: On-Demand-Self-Service, breiter Netzwerkzugriff, Ressourcen-Pooling, schnelle Elastizität, messbare Nutzung (Pay-per-Use).  
**Vorteile**: keine Investitionskosten (OPEX statt CAPEX), Skalierbarkeit, ortsunabhängig, hohe Verfügbarkeit, Updates durch Anbieter. **Nachteile/Risiken**: Internetabhängigkeit, Datenschutz (Serverstandort, **Drittland**-Übermittlung, AV-Vertrag nach Art. 28 DSGVO), Vendor-Lock-in, laufende Kosten, weniger Kontrolle.

## Virtualisierung

- **Hypervisor Typ 1 (Bare Metal)**: läuft direkt auf der Hardware – Hyper-V, VMware ESXi, Proxmox/KVM. Server/Rechenzentrum, performant.
- **Hypervisor Typ 2 (Hosted)**: läuft als Anwendung auf einem Host-OS – VirtualBox, VMware Workstation. Test/Entwicklung.
- **Vorteile**: bessere Auslastung, weniger Hardware/Strom/Platz (Green IT), Snapshots, schnelle Bereitstellung, Isolation, Live-Migration, einfache Testumgebungen.
- **Nachteile**: Host als Single Point of Failure, Overhead, Lizenzkosten, Know-how.

**Container** (Docker): teilen sich den Kernel des Host-OS, enthalten nur App + Abhängigkeiten → leichtgewichtig, starten in Sekunden, portabel. VMs enthalten ein vollständiges Gast-OS → stärkere Isolation.

**Desktop-Virtualisierung (VDI)**: Desktops laufen zentral im Rechenzentrum, Zugriff über Thin Client oder beliebige Geräte (z. B. Azure Virtual Desktop, Windows 365).

## Unternehmenssoftware

<table><tr><th>System</th><th>Zweck</th><th>Typische Funktionen</th></tr>
<tr><td><b>ERP</b> – Enterprise Resource Planning</td><td>integrierte Steuerung aller Unternehmensressourcen mit zentraler Datenbank</td><td>Finanzbuchhaltung, Einkauf, Lager/Materialwirtschaft, Produktion, Vertrieb, Personal (z. B. SAP S/4HANA, Microsoft Dynamics 365)</td></tr>
<tr><td><b>CRM</b> – Customer Relationship Management</td><td>Kundenbeziehungen pflegen</td><td>Kontakthistorie, Leads, Angebote, Kampagnen, Service-Tickets (z. B. Salesforce, HubSpot)</td></tr>
<tr><td><b>SCM</b> – Supply Chain Management</td><td>Lieferkette steuern</td><td>Beschaffung, Lieferanten, Logistik, Bestandsoptimierung, Just-in-Time</td></tr></table>

Weitere: DMS (Dokumentenmanagement), HR-Software, BI (Business Intelligence), Groupware (E-Mail, Kalender – Exchange/Outlook), Kollaboration (Teams, SharePoint).  
**Stammdaten** (selten geändert: Kunden, Artikel) vs. **Bewegungsdaten** (laufend: Bestellungen, Rechnungen).

## KI-Software am Arbeitsplatz

- **Einsatz**: Texte entwerfen/zusammenfassen, Übersetzen, Programmieren (Code-Assistenten), Meeting-Protokolle, Datenanalyse, Chatbots im Support, Bilderkennung. Beispiele: Microsoft 365 Copilot, ChatGPT, Claude, GitHub Copilot.
- **Generative KI / LLM** (Large Language Model): erzeugt Inhalte auf Basis statistischer Muster aus Trainingsdaten; **Prompt** = Eingabe/Anweisung.
- **Risiken**: **Halluzinationen** (plausibel klingende Falschaussagen) → Ergebnisse immer prüfen; Datenschutz/Geschäftsgeheimnisse (keine personenbezogenen oder vertraulichen Daten in öffentliche KI-Dienste); Urheberrecht; Bias (Verzerrungen); Abhängigkeit.
- **Maßnahmen**: KI-Richtlinie im Unternehmen, freigegebene Tools mit Enterprise-Datenschutz (keine Nutzung der Daten zum Training), Schulung, menschliche Kontrolle („Human in the Loop“), Kennzeichnung KI-generierter Inhalte.
- **EU AI Act (KI-Verordnung)**: risikobasiert (unannehmbar = verboten, hoch, begrenzt/Transparenzpflicht, minimal). Seit 02.02.2025 gelten Verbote bestimmter Praktiken und Art. 4 **KI-Kompetenz**: Unternehmen müssen Maßnahmen ergreifen, damit Beschäftigte, die KI nutzen, ausreichend geschult sind.

## Desktop as a Service & weitere Cloud-Begriffe

**DaaS** (Desktop as a Service): kompletter virtueller Windows-Desktop aus der Cloud, monatlich pro Benutzer bezahlt (z. B. Windows 365, Azure Virtual Desktop). Zugriff von jedem Gerät (auch Thin Client, privates Tablet), Daten bleiben im Rechenzentrum, schnelle Bereitstellung für neue oder befristete Mitarbeitende – aber internetabhängig und laufende Kosten.

## Social-Media- und Kommunikationssysteme im Unternehmen

Externe Social Media (LinkedIn, Instagram, YouTube) für Marketing, Recruiting, Kundenservice; interne Enterprise Social Networks (Viva Engage, Teams-Communities, Intranet) für Austausch. Wichtig: **Social-Media-Richtlinie** (wer darf was posten), Datenschutz (keine Kundendaten, Einwilligung bei Fotos), Urheberrecht bei Bildern, Impressumspflicht, Schutz vor Social Engineering (öffentlich geteilte Infos nutzen Angreifer).

## KI-Software einrichten und im Projekt nutzen

- **Einrichten**: Lizenzen zuweisen (z. B. Copilot pro Benutzer), Datenschutz-/Mandanteneinstellungen prüfen (Daten nicht zum Training, Speicherort EU), Zugriffsrechte beachten (KI sieht, was der Nutzer sehen darf → Berechtigungen vorher aufräumen), Richtlinie und Schulung (KI-Kompetenz), ggf. lokale KI-Modelle für sensible Daten.
- **Im Projekt**: Protokolle zusammenfassen, Aufgaben/Risiken sammeln, Texte und Präsentationen entwerfen, Code-Assistenten (z. B. GitHub Copilot) für Entwicklung, Tests und Dokumentation – Ergebnisse immer fachlich prüfen.

---

## 🃏 Karteikarten (22)

| Frage | Antwort |
|---|---|
| IaaS | Infrastructure as a Service: virtuelle Server/Speicher/Netz; Kunde verwaltet OS, Apps, Daten. |
| PaaS | Platform as a Service: Laufzeitumgebung/Entwicklungsplattform; Kunde verwaltet nur Anwendung und Daten. |
| SaaS | Software as a Service: fertige Anwendung über das Internet, z. B. Microsoft 365. |
| Public vs. Private Cloud | Public: geteilte Infrastruktur eines Anbieters, günstig/skalierbar. Private: exklusiv für eine Organisation, mehr Kontrolle. |
| Hybrid Cloud | Kombination aus Private und Public Cloud. |
| Cloud-Risiken | Internetabhängigkeit, Datenschutz/Serverstandort, Vendor-Lock-in, laufende Kosten, Kontrollverlust. |
| Hypervisor Typ 1 | Bare Metal, direkt auf Hardware: Hyper-V, ESXi, Proxmox. |
| Hypervisor Typ 2 | Läuft auf einem Host-Betriebssystem: VirtualBox, VMware Workstation. |
| Container vs. VM | Container teilen den Host-Kernel (leicht, schnell); VMs haben ein eigenes Gast-OS (stärkere Isolation). |
| Vorteile Virtualisierung | Bessere Auslastung, weniger Hardware & Strom, Snapshots, schnelle Bereitstellung, Isolation. |
| ERP | Enterprise Resource Planning: integrierte Software für Finanzen, Einkauf, Lager, Produktion, Vertrieb, Personal. |
| CRM | Customer Relationship Management: Verwaltung von Kundenkontakten, Vertrieb, Service. |
| SCM | Supply Chain Management: Planung und Steuerung der Lieferkette. |
| Stamm- vs. Bewegungsdaten | Stammdaten: langfristig, selten geändert (Kunde). Bewegungsdaten: laufend neu (Auftrag, Rechnung). |
| KI-Halluzination | Plausibel klingende, aber falsche Ausgabe eines KI-Modells. |
| KI am Arbeitsplatz – Regeln | Keine personenbezogenen/vertraulichen Daten in öffentliche Tools, Ergebnisse prüfen, freigegebene Tools, Richtlinie & Schulung. |
| EU AI Act – Art. 4 | Pflicht zur Förderung von KI-Kompetenz bei Beschäftigten, die KI nutzen (seit 02.02.2025). |
| VDI | Virtual Desktop Infrastructure: Desktops laufen zentral, Zugriff von Thin Clients/beliebigen Geräten. |
| DaaS | Desktop as a Service – virtueller Desktop aus der Cloud pro Benutzer/Monat (z. B. Windows 365). |
| Social-Media-Richtlinie | Regelt, wer was im Namen des Unternehmens veröffentlichen darf (Datenschutz, Urheberrecht, Ton). |
| KI-Software einrichten – Punkte | Lizenzen, Datenschutzeinstellungen, Berechtigungen prüfen, Richtlinie, Schulung. |
| KI-Codeassistent | Werkzeug, das beim Programmieren Code vorschlägt (z. B. GitHub Copilot) – Ergebnis prüfen. |

## ✍️ Übungsfragen (15)

**1.** Ein Unternehmen nutzt Microsoft 365 im Browser. Welches Cloud-Modell?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** SaaS<br>Fertige Anwendung = SaaS.

</details>

**2.** Ein Entwicklerteam mietet virtuelle Maschinen und installiert eigenes Linux darauf. Welches Modell?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** IaaS<br>Infrastruktur gemietet, OS selbst verwaltet.

</details>

**3.** Nennen Sie einen Typ-2-Hypervisor.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Z. B. Oracle VirtualBox oder VMware Workstation<br>VirtualBox läuft als Anwendung auf einem Host-OS.

</details>

**4.** Welche Software verwaltet Kundenkontakte, Angebote und Verkaufschancen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** CRM<br>CRM = Customer Relationship Management.

</details>

**5.** Welches System integriert Buchhaltung, Lager, Einkauf und Personal in einer zentralen Datenbank?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** ERP<br>ERP.

</details>

**6.** Welche Risiken bestehen beim Einsatz öffentlicher KI-Chatbots im Unternehmen? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Halluzinationen; Abfluss vertraulicher Daten; Datenschutzverstöße. KI-Ergebnisse sind nicht garantiert korrekt.

</details>

**7.** Was ist ein wesentlicher Unterschied zwischen Container und virtueller Maschine?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Container teilen sich den Kernel des Hosts<br>Darum sind Container leichtgewichtig.

</details>

**8.** Welches Bereitstellungsmodell kombiniert eigene Infrastruktur mit Ressourcen eines öffentlichen Anbieters?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Hybrid Cloud

</details>

**9.** Eine Rechnung im ERP-System ist ein Beispiel für …

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Bewegungsdaten<br>Rechnungen entstehen laufend = Bewegungsdaten.

</details>

**10.** Welche Pflicht aus dem EU AI Act gilt seit Februar 2025 für Unternehmen, die KI einsetzen?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Förderung der KI-Kompetenz der Beschäftigten<br>Art. 4 – KI-Kompetenz.

</details>

**11.** Ihre Geschäftsführung möchte einen generativen KI-Assistenten für alle Mitarbeitenden einführen. Nennen Sie zwei Risiken und je eine Gegenmaßnahme. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Z. B.: Halluzinationen/falsche Ergebnisse (1) → Ergebnisse prüfen, Human in the Loop, Schulung (1). Abfluss vertraulicher oder personenbezogener Daten (1) → nur freigegebene Enterprise-Tools ohne Trainingsnutzung, KI-Richtlinie, AV-Vertrag (1). Urheberrechtsverletzungen (1) → Quellen prüfen, Kennzeichnung (1).

</details>

**12.** Erläutern Sie zwei Vorteile der Servervirtualisierung. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Z. B.: Mehrere virtuelle Server teilen sich eine physische Hardware → bessere Auslastung, weniger Anschaffungs-, Strom- und Platzkosten (2). Snapshots/Backups ganzer VMs und schnelle Wiederherstellung (2). Neue Server lassen sich in Minuten bereitstellen (2). Isolation: Fehler in einer VM betreffen andere nicht (2).

</details>

**13.** Nennen Sie je ein Beispiel für IaaS, PaaS und SaaS und erklären Sie, wer jeweils das Betriebssystem verwaltet. (3 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (3 P):** IaaS: z. B. Azure VM – Kunde verwaltet das Betriebssystem (1). PaaS: z. B. Azure App Service – Anbieter verwaltet das OS, Kunde nur die Anwendung (1). SaaS: z. B. Microsoft 365 – Anbieter verwaltet alles bis zur Anwendung (1).

</details>

**14.** Ein Unternehmen stellt 10 befristete Projektmitarbeitende ein, die von eigenen Geräten auf einen Firmen-Windows-Desktop zugreifen sollen. Was passt?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Desktop as a Service<br>Schnell bereitgestellt, Daten bleiben zentral, monatlich kündbar.

</details>

**15.** Warum sollten vor der Einführung eines KI-Assistenten mit Zugriff auf Unternehmensdaten die Berechtigungen geprüft werden?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Weil die KI alles findet, was der Nutzer sehen darf – zu weit gefasste Rechte werden sonst sichtbar

</details>


[⬅ Inhaltsverzeichnis](README.md)
