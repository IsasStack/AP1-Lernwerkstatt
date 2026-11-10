# 📘 AP1 – Lernwerkstatt

Lern-App und Wissenssammlung für die **IHK-Abschlussprüfung Teil 1** der IT-Berufe:
**„Einrichten eines IT-gestützten Arbeitsplatzes“**. Sie gilt für alle Fachinformatiker-Fachrichtungen und die anderen IT-Berufe, weil die AP1 für alle gleich ist.

Inhaltlich richtet sie sich nach dem **Prüfungskatalog ab 2025**. Gestrichene Inhalte sind in den Themen als solche markiert.

### 👉 [App öffnen: isasstack.github.io/AP1-Lernwerkstatt](https://isasstack.github.io/AP1-Lernwerkstatt/)

### 📚 [Wissen zum Nachschlagen](wissen/README.md)

---

## Was drin ist

| | |
|---|---|
| 📖 **19 Themen** | Lerntexte von Prüfung & Projekt über Hardware, Netzwerk, IP/Subnetting, Sicherheit und Datenschutz bis zu Programmierung/UML |
| 🃏 **561 Karteikarten** | Leitner-System mit Wiederholungsintervallen |
| ✍️ **410 Übungsaufgaben** | Wie in der Prüfung ohne Ankreuzen: Kurzantworten (werden automatisch erkannt), Rechenaufgaben und ausführliche Aufgaben mit Musterlösung und Punkten |
| ⏱️ **3 Prüfungssätze im AP1-Format** | Eine Firma als Ausgangssituation, vier Aufgaben zu je 25 Punkten mit Teilaufgaben und Anlagen, 90 Minuten Timer, Note nach IHK-Schlüssel |
| 🏢 **13 Fallstudien** | Hardware, Betriebssystem, Software und Lizenzen für konkrete Firmen selbst auswählen und begründen |
| 📎 **9 Aufgaben mit Anlagen** | Datenblätter (auch auf Englisch), EULA, Security Advisory, ipconfig, Netzplan, Gantt, Firewall-Log |
| 🧮 **24 Rechner** | Subnetting, VLSM, IPv6, Zahlensysteme, Einheiten, Übertragungszeit, chmod, Strom/USV, SLA, Lizenzen, Kosten, Amortisation, Break-even, Bezugs- und Verkaufskalkulation, Zinsen/Skonto, Seitenkosten, Kauf/Leasing, Nutzwertanalyse, Netzplan u. a. |
| 🎯 **27 Trainer** | Unbegrenzt neue Aufgaben mit freier Eingabe: Subnetting, VLSM, Umrechnen, Netzplan mit Puffern, Nutzwertanalyse, Kalkulation, Lizenzen, UML-Aktivitätsdiagramm, Pseudocode (Lücken, Fehler, Schreibtischtest), Abkürzungen … |
| 📖 **Glossar** | 190 Abkürzungen und Begriffe |
| 🗓️ **Lernplan** | Countdown bis zur Prüfung am **24.02.2027** |

## So benutzt du die App

- **Im Browser** über den Link oben. Das funktioniert auch am Handy: Über das Teilen- bzw. Menü-Symbol und „Zum Startbildschirm hinzufügen“ bekommst du sie wie eine App.
- **Offline:** Lade die [`index.html`](index.html) herunter (Button „Download raw file“) und öffne sie per Doppelklick.
- **Dein Lernstand** wird automatisch in deinem Browser gespeichert, also auf jedem Gerät getrennt.
  Unter **🗓️ Lernplan → 💾 Backup als Datei speichern** sicherst du ihn als Datei. Mit **📂 Backup-Datei laden** überträgst du ihn auf ein anderes Gerät.
  ⚠️ Wenn du die Browserdaten löschst, ist auch der Lernstand weg, also mach regelmäßig ein Backup.

## Ordner

```
index.html     die komplette App (eine Datei, läuft ohne Server)
wissen/        alle Lerninhalte als Markdown – direkt auf GitHub lesbar
src/           Quellcode: Inhalte (data/*.js), Programmlogik, Build-Skripte
```

### Inhalte ändern oder ergänzen

Die Inhalte liegen in `src/data/*.js`. Jedes Thema enthält Lerntext, Karteikarten und Fragen. Nach einer Änderung:

```bash
cd src
python build.py                               # baut ../index.html neu
node dump.js && python export_md.py ..        # erzeugt ../wissen/ neu (braucht: pip install beautifulsoup4 markdownify)
```

## Hinweise

- Inoffizielles Lernmaterial, nicht von der IHK oder der AkA. Echte Prüfungsaufgaben sind hier nicht enthalten. Übe zusätzlich mit alten Prüfungen.
- Die Fakten sind nach bestem Wissen recherchiert (u. a. Microsoft Learn, BSI, DSGVO-Text, Herstellerangaben). Wenn du einen Fehler findest, leg gern ein Issue an.

Viel Erfolg in der Prüfung! 🍀
