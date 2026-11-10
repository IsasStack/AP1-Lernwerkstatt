/* Prüfungsnahe Aufgabenformate
   Die AP1 besteht aus offenen Aufgaben – ohne Ankreuzen. Deshalb werden hier alle Auswahlfragen,
   deren Fragestellung auch ohne Antwortoptionen funktioniert, in Freitext-Aufgaben umgewandelt:
   - Quiz: Single Choice  -> Kurzantwort (2 P), kurze Lösungen werden automatisch erkannt
   - Quiz: Multiple Choice -> „Nennen Sie …“ (1 P je richtiger Nennung)
   - Fallstudien/Anlagen: Auswahl -> „Auswählen und begründen“
   Fragen, die nur mit vorgegebenen Kandidaten Sinn ergeben, bleiben Auswahlfragen. */
const KEEP_CHOICE = [
  "Welches Merkmal trifft auf ein Projekt NICHT zu?",
  "Welche Aussage zum kritischen Pfad ist richtig?",
  "Welches Ziel ist SMART formuliert?",
  "Welche Frage eignet sich am besten, um im Erstgespräch den Bedarf zu ermitteln?",
  "Welche Formulierung entspricht den Feedbackregeln?",
  "Welche Kosten sind fix?",
  "Welches Kriterium gehört zur ökologischen Dimension?",
  "Welche Aussage zu USB-C ist richtig?",
  "Welche Aussage zum Client-Server-Modell ist richtig?",
  "Welcher Hypervisor gehört zu Typ 2?",
  "Welche Adresse ist privat (RFC 1918)?",
  "Welche Kombination ist eine echte Zwei-Faktor-Authentifizierung?",
  "Welche ist eine organisatorische Maßnahme?",
  "Welches Verfahren ist symmetrisch?",
  "Welche Hashfunktion gilt als sicher?",
  "Welche Eigenschaft hat eine kryptografische Hashfunktion NICHT?",
  "Welche Information ist KEIN personenbezogenes Datum?",
  "Welche Sprache wird typischerweise interpretiert?",
  "Welches Format komprimiert verlustfrei?",
  "Welche Inhalte sind seit 2025 ausdrücklich im AP1-Katalog? (mehrere)",
  "Welche Aussagen treffen auf das Wasserfallmodell zu? (mehrere)",
  "Liegen 192.168.10.70/26 und 192.168.10.120/26 im selben Netz? Wähle alle richtigen Aussagen.",
  "Welche Aussagen zum Compiler sind richtig? (mehrere)"
];
/* Akzeptierte Kurzantworten, wo die Musterlösung zu lang oder mehrdeutig für die automatische Erkennung ist.
   [Frageanfang, akzeptierte Antworten, (optional) Ausschlüsse]; null = immer selbst bewerten */
const KEY_OVR = [
  ["Auf einem Server laufen drei Anwendungen", ["hoch"], ["sehr hoch"]],
  ["Welcher Linux-Befehl ersetzt das veraltete ifconfig", ["ip a", "ip addr", "ip address"]],
  ["Alice möchte Bob eine vertrauliche Datei", ["Bobs öffentlichen", "Bobs öffentlichem", "öffentlichen Schlüssel von Bob", "öffentlichem Schlüssel von Bob", "Public Key von Bob", "Bobs Public Key"], ["privat"]],
  ["Mit welchem Schlüssel prüft Bob die digitale Signatur", ["Alices öffentlichem", "Alices öffentlichen", "öffentlichen Schlüssel von Alice", "öffentlichem Schlüssel von Alice", "Public Key von Alice", "Alices Public Key"], ["privat"]],
  ["Ein ehemaliger Kunde verlangt, dass seine Daten gelöscht", ["Art. 17", "Artikel 17", "Löschung", "Vergessenwerden"]],
  ["Ein Kunde will wissen, welche Daten über ihn gespeichert", ["Art. 15", "Artikel 15", "15"]],
  ["Eine 6-GB-Videodatei lässt sich nicht", ["FAT32"]],
  ["Ein Client hat die IP 169.254.12.4", ["DHCP"]],
  ["Wie werden Bedingungen an den Ausgängen einer Verzweigung", ["eckigen Klammern", "eckige Klammern", "Guard"]],
  ["Eine Schleife soll 10-mal laufen", ["Off-by-one", "11 Durchläufe", "11-mal", "einmal zu oft", "elfmal"]],
  ["Für welche Stellen gilt die BITV", ["öffentliche Stellen", "Behörden", "Bund"]],
  ["Welches Hilfsmittel unterstützt einen blinden Mitarbeiter", ["Braillezeile", "Screenreader"]],
  ["Eine Aufgabe sagt: „Nennen Sie zwei Vorteile", ["Stichwort", "Stichpunkt"]],
  ["Wo werden öffentlich erreichbare Webserver", ["DMZ"]],
  ["Wofür steht die Angabe „80 PLUS Gold“", ["Wirkungsgrad", "Effizienz"]],
  ["Welcher Vorteil spricht für Leasing statt Kauf", ["Liquidität", "Kapitalbindung"]],
  ["Wer bestätigt in einer PKI", ["Certificate Authority", "CA", "Zertifizierungsstelle"]],
  ["Wofür steht OCR beim Scannen", ["Optische Texterkennung", "Optical Character Recognition", "Texterkennung"]],
  ["Welche USV-Bauart trennt den Verbraucher", ["Online", "Doppelwandler", "VFI"]],
  ["Welche Schleife wird mindestens einmal durchlaufen", ["do-while", "do while", "fußgesteuert", "wiederhole", "repeat"]],
  ["Welche Anschlussart bietet in der Regel die höchsten", ["Glasfaser", "FTTH"]],
  ["Eine Abteilung druckt 4.000 Textseiten pro Monat", ["Laserdrucker", "Laser"]],
  ["Welcher Massenspeicher eignet sich am besten für das Notebook", ["SSD"]],
  ["Mit welchem Verfahren werden 50 identische PCs", ["Imaging", "Image", "Softwareverteilung", "Klonen"]],
  ["Ein Admin will 200 Benutzerkonten automatisiert anlegen", ["CLI", "Skript", "Script", "PowerShell", "Kommandozeile"]],
  ["In der Personalabteilung liegen vertrauliche Ausdrucke", ["Follow-Me", "PIN", "Secure Print", "vertraulicher Druck"]],
  ["In welchem Scrum-Event wird die Zusammenarbeit", ["Retrospektive", "Retro"]],
  ["Wofür steht das „T“ in SMART", ["Terminiert", "time-bound", "Termin"]],
  ["Welche Support-Ebene nimmt Störungsmeldungen an", ["1st Level", "First Level", "1. Level", "Service Desk", "Helpdesk"]],
  ["Ein Steuerbüro mit 12 Mitarbeitenden will alle PCs", ["Pro"], ["Home"]],
  ["Eine Produktion arbeitet in 3 Schichten", ["Device-CAL", "Geräte-CAL", "Gerätelizenz"]],
  ["Ein Architekturbüro nutzt eine teure CAD-Software", ["Concurrent", "Floating", "gleichzeitig"]],
  ["Wofür steht das „D“ und „L“ in AGDLP", ["Domänenlokale", "Domain Local", "domänenlokal"]],
  ["Ein privates Smartphone soll auf Firmenmails zugreifen", ["registered", "registriert"]],
  ["Ein Unternehmen hat ein lokales AD und möchte Geräte zusätzlich", ["hybrid"]],
  ["Welches Tool wendet Gruppenrichtlinien sofort an", ["gpupdate"]],
  ["Was ist ein Code-Review", ["Statischer Test", "statisch"]],
  ["Welche Bedingung entspricht „SOLANGE zahl < 100“", null],
  ["Seit wann gilt das Barrierefreiheitsstärkungsgesetz", ["28.06.2025", "28. Juni 2025", "Juni 2025"]],
  ["Innerhalb welcher Frist muss eine Datenpanne", ["72 Stunden", "72 h", "72"]],
  ["Wie lange beträgt die gesetzliche Gewährleistungsfrist", ["2 Jahre", "zwei Jahre", "24 Monate"]],
  ["Eine Teilaufgabe ist mit 8 Punkten bewertet", ["8 Minuten", "8", "acht"]],
  ["Ein Notebook-Netzteil trägt das Symbol", ["II", "2", "Schutzklasse 2", "Schutzisolierung"]],
  ["Festplatten mit Personaldaten sollen vernichtet werden", ["Schutzklasse 2", "2"]],
  ["Wer berät und überwacht im Unternehmen die Einhaltung der DSGVO", ["Datenschutzbeauftragte", "DSB"]],
  ["Ein Unternehmen nutzt einen externen Cloud-Dienst für Personaldaten", ["Auftragsverarbeitungsvertrag", "AV-Vertrag", "AVV", "Auftragsverarbeitung"]],
  ["Welche Norm ist für Qualitätsmanagementsysteme zertifizierbar", ["ISO 9001", "9001"]],
  ["Welches Thema wurde mit dem Prüfungskatalog 2025", ["SQL"]],
  ["Welches Bereitstellungsmodell kombiniert eigene Infrastruktur", ["Hybrid"]],
  ["Ein Unternehmen stellt 10 befristete Projektmitarbeitende ein", ["Desktop as a Service", "DaaS"]],
  ["Welche Kategorie benötigen Sie mindestens für 10 Gbit/s", ["Cat 6A", "Cat6A", "Kategorie 6A", "6A"]],
  ["Was bedeutet das „−“ vor einem Attribut", ["private", "privat"]],
  ["Welches Diagramm zeigt Akteure und Anwendungsfälle", ["Use-Case", "Use Case", "Anwendungsfalldiagramm"]],
  ["Eine E-Mail fordert scheinbar vom Chef", ["CEO-Fraud", "CEO Fraud", "Fake President", "Chef-Betrug", "Chefbetrug"]],
  ["Eine Firewall erlaubt nur ausdrücklich freigegebene", ["Default Deny", "Whitelist", "Deny all"]],
  ["Ein Notebook verbindet sich mit dem WLAN eines Hotels", ["Öffentlich", "Public"]],
  ["Welche TLS-Version sollte heute bevorzugt", ["TLS 1.3", "1.3"]],
  ["Montag Vollsicherung, Di–Fr inkrementell", null],
  ["Montag Vollsicherung, Di–Fr differenziell", null],
  ["Welcher IEEE-Standard heißt Wi-Fi 6", ["802.11ax", "ax"]],
  ["Ein WLAN-AP benötigt 25 W", ["802.3at", "PoE+", "PoE Plus"]],
  ["Welches WLAN-Verfahren erlaubt individuelle Anmeldung", ["Enterprise", "802.1X"]],
  ["Womit beginnt eine IPv6-Link-Local-Adresse", ["fe80"]],
  ["Ein Bluetooth-Headset ist mit dem Notebook verbunden", ["PAN", "Personal Area Network"]]
];
/* Auswahlfragen, die ohne vorgegebene Antworten keinen Sinn ergeben, sind als offene Aufgaben neu formuliert. */
const REWORD = {
  "Welches Merkmal trifft auf ein Projekt NICHT zu?": { p: 4, q: "Nennen Sie vier Merkmale eines Projekts.", a: "Je 1 Punkt (max. 4): Einmaligkeit; klare Zielvorgabe; zeitliche Begrenzung (Anfang und Ende); begrenzte Ressourcen (Budget, Personal); eigene Projektorganisation; Neuartigkeit/Komplexität/Risiko. Kein Merkmal: dauerhafte Routinetätigkeit – das ist Linienarbeit." },
  "Welche Aussage zum kritischen Pfad ist richtig?": { p: 2, q: "Erläutern Sie, was der kritische Pfad eines Netzplans ist und was eine Verzögerung auf ihm bewirkt.", a: "Der kritische Pfad ist die Kette der Vorgänge ohne Puffer (Gesamtpuffer 0) und damit der längste Weg durch den Netzplan (1). Jede Verzögerung eines Vorgangs auf ihm verschiebt das Projektende (1)." },
  "Welches Ziel ist SMART formuliert?": { p: 3, q: "Das Ziel „Wir wollen die Vertriebsnotebooks besser absichern“ ist nicht SMART. Formulieren Sie es SMART und nennen Sie zwei Kriterien, die Ihre Formulierung erfüllt.", a: "Z. B.: „Bis zum 30.04. sind alle 12 Vertriebsnotebooks mit BitLocker verschlüsselt.“ (1) Kriterien (je 1): spezifisch (Vertriebsnotebooks, BitLocker); messbar (12 Geräte); terminiert (30.04.); realistisch/akzeptiert." },
  "Welche Frage eignet sich am besten, um im Erstgespräch den Bedarf zu ermitteln?": { p: 2, q: "Formulieren Sie eine Frage, mit der Sie im Erstgespräch den Bedarf einer Kundin für einen neuen Arbeitsplatz-PC ermitteln, und begründen Sie die Frageform.", a: "Z. B. „Welche Anwendungen nutzen Sie im Arbeitsalltag?“ (1) – eine offene W-Frage: Die Kundin erzählt frei und liefert viele Informationen. Geschlossene oder Suggestivfragen („Sie möchten doch sicher 32 GB RAM?“) schränken die Antwort ein (1)." },
  "Welche Formulierung entspricht den Feedbackregeln?": { p: 3, q: "Ein Kollege kam diese Woche zweimal zu spät zum Daily. Formulieren Sie ein Feedback nach den Feedbackregeln und nennen Sie zwei Regeln, die Sie dabei beachtet haben.", a: "Z. B.: „Mir ist aufgefallen, dass du diese Woche zweimal zu spät zum Daily kamst. Dadurch mussten wir Themen wiederholen. Können wir das ändern?“ (1) Regeln (je 1): Ich-Botschaft; konkret und beschreibend statt verallgemeinernd („immer“); zeitnah; auf veränderbares Verhalten bezogen; lösungsorientiert; unter vier Augen." },
  "Welche Kosten sind fix?": { p: 4, q: "Nennen Sie je zwei Beispiele für fixe und variable Kosten eines IT-Arbeitsplatzes.", a: "Fix (je 1): monatliche Leasingrate; Miete; Lizenz-Abo pro Monat; Wartungsvertrag; Abschreibung. Variabel (je 1): Strom nach Verbrauch; Toner/Papier pro Seite; Cloud-Kosten pro Rechenstunde bzw. nach Nutzung." },
  "Welches Kriterium gehört zur ökologischen Dimension?": { p: 2, q: "Nennen Sie zwei ökologische Kriterien für die Beschaffung von IT-Geräten.", a: "Je 1: geringer Energieverbrauch/gute Energieeffizienz; Recyclingfähigkeit; Langlebigkeit und Reparierbarkeit; Umweltsiegel (Blauer Engel, EPEAT, TCO Certified); generalüberholte Geräte; wenig Verpackung." },
  "Welche Aussage zu USB-C ist richtig?": { p: 3, q: "Ein Kollege sagt: „Das Notebook hat USB-C, also kann ich daran auf jeden Fall einen Monitor anschließen und es darüber laden.“ Beurteilen Sie diese Aussage.", a: "Die Aussage stimmt so nicht (1). USB-C beschreibt nur die Steckerform; welche Funktionen der Anschluss bietet, hängt vom Port und vom Kabel ab (1). Für das Bild braucht der Port DisplayPort Alt Mode (bzw. Thunderbolt/USB4), zum Laden USB Power Delivery – das steht im Datenblatt (1)." },
  "Welche Aussage zum Client-Server-Modell ist richtig?": { p: 3, q: "Beschreiben Sie das Client-Server-Modell und nennen Sie einen Nachteil.", a: "Ein Server stellt zentral Dienste oder Ressourcen bereit, z. B. Dateien, Anmeldung, Datenbank (1). Die Clients fordern diese über das Netz an und nutzen sie (1). Nachteil (1): Der Server ist ein Single Point of Failure; höhere Kosten und mehr Administrationsaufwand als bei Peer-to-Peer." },
  "Welcher Hypervisor gehört zu Typ 2?": { short: true, p: 2, q: "Nennen Sie einen Typ-2-Hypervisor.", a: "Z. B. Oracle VirtualBox oder VMware Workstation", keys: ["VirtualBox", "VMware Workstation", "Workstation", "VMware Player", "VMware Fusion", "Parallels"] },
  "Welche Adresse ist privat (RFC 1918)?": { p: 3, q: "Nennen Sie die drei privaten IPv4-Adressbereiche nach RFC 1918.", a: "Je 1 Punkt: 10.0.0.0/8 (10.0.0.0–10.255.255.255); 172.16.0.0/12 (172.16.0.0–172.31.255.255); 192.168.0.0/16 (192.168.0.0–192.168.255.255)." },
  "Welche Kombination ist eine echte Zwei-Faktor-Authentifizierung?": { p: 3, q: "Ein Dienst verlangt ein Passwort und zusätzlich eine PIN. Beurteilen Sie, ob das eine echte Zwei-Faktor-Authentifizierung ist, und nennen Sie eine echte Kombination.", a: "Nein – Passwort und PIN gehören beide zum Faktor Wissen (1). Eine echte 2FA kombiniert zwei verschiedene Faktorkategorien: Wissen, Besitz, Inhärenz/Biometrie (1). Beispiel: Passwort + TOTP-Code aus einer Authenticator-App, Passwort + FIDO2-Stick oder Smartcard + PIN (1)." },
  "Welche ist eine organisatorische Maßnahme?": { p: 4, q: "Nennen Sie je zwei technische und zwei organisatorische Maßnahmen der IT-Sicherheit.", a: "Technisch (je 1): Firewall; Festplattenverschlüsselung (BitLocker); Virenschutz; automatische Updates; Backup; MFA. Organisatorisch (je 1): Passwortrichtlinie; Berechtigungskonzept; Schulungen/Awareness; Notfallplan; Vier-Augen-Prinzip; Besucherregelung." },
  "Welches Verfahren ist symmetrisch?": { short: true, p: 2, q: "Nennen Sie ein symmetrisches Verschlüsselungsverfahren.", a: "AES (Advanced Encryption Standard)", keys: ["AES", "AES-256", "AES-128", "AES256", "3DES", "DES", "ChaCha20", "Twofish", "Blowfish"], not: ["RSA", "ECC", "Diffie"] },
  "Welche Hashfunktion gilt als sicher?": { short: true, p: 2, q: "Nennen Sie eine Hashfunktion, die heute als sicher gilt.", a: "SHA-256 (SHA-2-Familie) oder SHA-3", keys: ["SHA-256", "SHA256", "SHA-2", "SHA2", "SHA-3", "SHA3", "SHA-512", "SHA512", "SHA-384", "SHA384", "BLAKE2"], not: ["MD5", "CRC"] },
  "Welche Eigenschaft hat eine kryptografische Hashfunktion NICHT?": { p: 3, q: "Nennen Sie drei Eigenschaften einer kryptografischen Hashfunktion.", a: "Je 1: feste Ausgabelänge unabhängig von der Eingabe; Einwegfunktion (nicht umkehrbar); deterministisch (gleiche Eingabe → gleicher Hash); Lawineneffekt (kleine Änderung → völlig anderer Hash); kollisionsresistent." },
  "Welche Information ist KEIN personenbezogenes Datum?": { p: 4, q: "Nennen Sie drei Beispiele für personenbezogene Daten und ein Beispiel für Daten ohne Personenbezug.", a: "Personenbezogen (je 1): Name; private oder dienstliche E-Mail-Adresse; IP-Adresse eines Kunden; Personalnummer; Geburtsdatum; Foto; Standortdaten. Ohne Personenbezug (1): aggregierte bzw. anonymisierte Werte, z. B. der Durchschnittsumsatz aller Filialen." },
  "Welche Sprache wird typischerweise interpretiert?": { short: true, p: 2, q: "Nennen Sie eine Programmiersprache, die typischerweise interpretiert wird.", a: "Z. B. Python, JavaScript oder PHP", keys: ["Python", "JavaScript", "PHP", "Ruby", "Perl", "Bash", "PowerShell", "Lua"] },
  "Welches Format komprimiert verlustfrei?": { short: true, p: 2, q: "Nennen Sie ein Dateiformat, das verlustfrei komprimiert.", a: "Z. B. PNG (Bild), ZIP (Archiv) oder FLAC (Audio)", keys: ["PNG", "GIF", "TIFF", "ZIP", "FLAC", "7z", "GZIP"], not: ["JPEG", "JPG", "MP3", "H.264"] },
  "Welche Inhalte sind seit 2025 ausdrücklich im AP1-Katalog? (mehrere)": { p: 3, q: "Nennen Sie drei Inhalte, die seit dem Prüfungskatalog 2025 neu oder ausdrücklich betont in der AP1 stehen.", a: "Je 1: KI-Software am Arbeitsplatz; Einbindung von Clients in Domänen; Barrierefreiheit (Websites und Hardware); UML-Aktivitätsdiagramm und Schreibtischtest; Merkmale eines Projekts/SMART; Sensoren; Desktop as a Service; IPv4 vs. IPv6; Härtung, Hashverfahren, 2FA; Amortisationszeit. Gestrichen wurden dagegen z. B. Struktogramme." },
  "Welche Aussagen treffen auf das Wasserfallmodell zu? (mehrere)": { p: 3, q: "Nennen Sie drei Merkmale des Wasserfallmodells.", a: "Je 1: Phasen laufen streng nacheinander ab; Anforderungen werden zu Beginn festgelegt; gute Planbarkeit bei stabilen Anforderungen; umfangreiche Dokumentation je Phase; Änderungen in späten Phasen sind aufwendig und teuer; der Kunde sieht das Ergebnis erst am Ende." },
  "Liegen 192.168.10.70/26 und 192.168.10.120/26 im selben Netz? Wähle alle richtigen Aussagen.": { p: 3, q: "Prüfen Sie, ob die Hosts 192.168.10.70/26 und 192.168.10.120/26 im selben Subnetz liegen. Geben Sie Netz- und Broadcastadresse an und sagen Sie, ob für die Kommunikation ein Router nötig ist.", a: "/26 → Blockgröße 64, also Netz 192.168.10.64 (1) mit Broadcast 192.168.10.127 (1). Beide Hosts (.70 und .120) liegen darin – sie kommunizieren direkt, ein Router ist nicht nötig (1)." },
  "Welche Aussagen zum Compiler sind richtig? (mehrere)": { p: 3, q: "Nennen Sie drei Merkmale eines Compilers.", a: "Je 1: übersetzt den gesamten Quellcode vor der Ausführung in Maschinencode; das Programm läuft danach meist schneller als interpretiert; Syntaxfehler werden schon beim Übersetzen erkannt; zum Ausführen ist der Compiler nicht mehr nötig; nach jeder Änderung muss neu übersetzt werden." }
};
const KEY_HIT = new Set();
function fmtKeys(txt) {
  const plain = String(txt).replace(/[„“"]/g, "").trim();
  if (plain.length > 30 || /[,;]| und | oder /.test(plain)) return null;
  const k = [plain], np = plain.replace(/\s*\([^)]*\)/g, "").trim();
  if (np && np !== plain) k.push(np);
  const inPar = plain.match(/\(([^)]+)\)/); if (inPar && inPar[1].length > 2 && !/^z\. B\./.test(inPar[1])) k.push(inPar[1]);
  return k;
}
function toShort(q) {
  const right = q.o[q.a], ov = KEY_OVR.find(o => q.q.startsWith(o[0]));
  if (ov) KEY_HIT.add(ov[0]);
  const out = { t: "open", short: true, p: 2, q: q.q, a: right, e: q.e || "", keys: ov ? ov[1] : fmtKeys(right), was: "sc" };
  if (ov && ov[2]) out.not = ov[2];
  return out;
}
function toList(q) {
  const right = q.a.map(i => q.o[i]), n = right.length;
  return { t: "open", p: n, q: q.q.replace(/\s*\(mehrere\)/, "").replace(/\?$/, "?") + ` Nennen Sie ${["", "eine", "zwei", "drei", "vier", "fünf"][n] || n}.`, a: `Je 1 Punkt (max. ${n}): ${right.join("; ")}.` + (q.e ? " " + q.e : ""), was: "mc" };
}
T.forEach(t => { t.qs = t.qs.map(q => {
  if (REWORD[q.q]) return Object.assign({ t: "open", e: q.e || "", was: q.t }, REWORD[q.q]);
  if (KEEP_CHOICE.includes(q.q)) return q;
  if (q.t === "sc") return toShort(q);
  if (q.t === "mc") return toList(q);
  return q;
}); });

/* Fallstudien und Anlagen: selbst entscheiden und begründen */
function toDecide(s) {
  if (s.t === "sc") {
    const right = s.o[s.a], just = !!s.e || right.length > 60, why = /^(Warum|Weshalb|Wieso)/.test(s.q) || /Begründen|Erläutern|Erklären/.test(s.q);
    return { t: "open", p: just ? 3 : 2, q: s.q + (just && !why ? " Begründen Sie Ihre Antwort." : ""), a: right + (s.e ? " – " + s.e : ""), was: "sc" };
  }
  if (s.t === "mc") {
    const right = s.a.map(i => s.o[i]), n = right.length;
    return { t: "open", p: n, q: s.q.replace(/\s*\(mehrere\)/, "") + ` Nennen Sie ${["", "eine", "zwei", "drei", "vier", "fünf"][n] || n}.`, a: `Je 1 Punkt (max. ${n}): ${right.join("; ")}.` + (s.e ? " " + s.e : ""), was: "mc" };
  }
  return s;
}
CASES.forEach(c => { c.steps = c.steps.map(toDecide); });
ANL.forEach(c => { c.steps = c.steps.map(toDecide); });
