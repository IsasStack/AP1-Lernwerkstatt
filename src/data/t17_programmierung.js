T.push({
id:"programmierung", title:"Programmierung & Algorithmen", icon:"💻", area:"Software", weight:3,
summary:"Compiler/Interpreter, Datentypen, Kontrollstrukturen, Pseudocode, Schreibtischtest, UML-Aktivitätsdiagramm.",
lesson:`
<h3>Übersetzung von Programmen</h3>
<table><tr><th></th><th>Compiler</th><th>Interpreter</th></tr>
<tr><td>Arbeitsweise</td><td>übersetzt den gesamten Quellcode vorab in Maschinencode</td><td>führt den Code zur Laufzeit Zeile für Zeile aus</td></tr>
<tr><td>Vorteile</td><td>schnelle Ausführung, Fehler vor dem Start erkannt, Quellcode bleibt geschützt</td><td>plattformunabhängig, schnelles Testen ohne Übersetzen</td></tr>
<tr><td>Nachteile</td><td>Übersetzung für jede Plattform, Wartezeit beim Kompilieren</td><td>langsamer, Interpreter muss installiert sein</td></tr>
<tr><td>Beispiele</td><td>C, C++, Go, Rust</td><td>Python, PHP, JavaScript, Bash</td></tr></table>
<p><b>Linker</b>: verbindet kompilierte Objektdateien und Bibliotheken zu einem ausführbaren Programm. <b>Mischform</b>: Java/C# werden in <b>Bytecode</b> kompiliert, der von einer virtuellen Maschine (JVM/.NET CLR) mit JIT-Compiler ausgeführt wird. <b>Skriptsprachen</b> (Python, PowerShell, Bash) automatisieren Aufgaben, meist interpretiert. <b>Bibliothek</b> = Sammlung wiederverwendbarer Funktionen, die man aufruft; <b>Framework</b> = Grundgerüst, das den Ablauf vorgibt und eigenen Code aufruft (Inversion of Control), z. B. Laravel, Spring, Angular.</p>
<h3>Programmierparadigmen</h3>
<p><b>Prozedural</b>: Ablauf als Folge von Anweisungen und Prozeduren/Funktionen (C). <b>Objektorientiert</b>: Daten und Methoden in Objekten/Klassen gekapselt (Java, C#, Python). (Vererbung/Polymorphie im Detail: AP2.)</p>
<h3>Datentypen & Variablen</h3>
<table><tr><th>Typ</th><th>Beispiel</th><th>Hinweis</th></tr>
<tr><td>Integer (int)</td><td>42, −7</td><td>Ganzzahl</td></tr>
<tr><td>Float/Double</td><td>3.14</td><td>Gleitkommazahl</td></tr>
<tr><td>Boolean</td><td>true / false</td><td>Wahrheitswert</td></tr>
<tr><td>Char</td><td>'A'</td><td>einzelnes Zeichen</td></tr>
<tr><td>String</td><td>"Hallo"</td><td>Zeichenkette</td></tr>
<tr><td>Array/Liste</td><td>[3, 7, 1]</td><td>mehrere Werte, Index meist ab <b>0</b></td></tr></table>
<p>Eine <b>Variable</b> ist ein benannter Speicherplatz mit Datentyp; eine <b>Konstante</b> ist nach Zuweisung nicht änderbar. Operatoren: arithmetisch (+ − * / %), Vergleich (== != &lt; &gt; &lt;= &gt;=), logisch (UND/AND/&amp;&amp;, ODER/OR/||, NICHT/NOT/!). <b>Modulo %</b> = Rest der ganzzahligen Division (17 % 5 = 2) – z. B. für „gerade Zahl?“ (x % 2 == 0).</p>
<h3>Kontrollstrukturen</h3>
<ul><li><b>Sequenz</b>: Anweisungen nacheinander.</li>
<li><b>Verzweigung/Selektion</b>: WENN … DANN … SONST (if/else); Mehrfachauswahl (switch/case).</li>
<li><b>Schleife/Iteration</b>: <b>kopfgesteuert</b> (while – Bedingung vorher, evtl. 0 Durchläufe), <b>fußgesteuert</b> (do-while – mindestens 1 Durchlauf), <b>Zählschleife</b> (for – feste Anzahl).</li></ul>
<h3>Pseudocode (Beispiel)</h3>
<pre>FUNKTION summeGerade(zahlen: Array von Ganzzahl): Ganzzahl
    summe ← 0
    FÜR i ← 0 BIS länge(zahlen) − 1
        WENN zahlen[i] MOD 2 = 0 DANN
            summe ← summe + zahlen[i]
        ENDE WENN
    ENDE FÜR
    RÜCKGABE summe
ENDE FUNKTION</pre>
<p>Funktion = benannter, wiederverwendbarer Codeblock mit Parametern und ggf. Rückgabewert (Prozedur: ohne Rückgabewert).</p>
<h3>Schreibtischtest (Trace-Tabelle)</h3>
<p>Algorithmus Schritt für Schritt „auf Papier“ ausführen und den Wert jeder Variablen nach jedem Schritt in eine Tabelle eintragen. Ziel: Ergebnis vorhersagen, logische Fehler finden.</p>
<pre>x ← 1
s ← 0
SOLANGE x &lt;= 4
    s ← s + x * 2
    x ← x + 1
ENDE SOLANGE
AUSGABE s</pre>
<table><tr><th>Durchlauf</th><th>x (vorher)</th><th>s</th><th>x (nachher)</th></tr>
<tr><td>1</td><td>1</td><td>2</td><td>2</td></tr><tr><td>2</td><td>2</td><td>6</td><td>3</td></tr>
<tr><td>3</td><td>3</td><td>12</td><td>4</td></tr><tr><td>4</td><td>4</td><td>20</td><td>5</td></tr></table>
<p>Ausgabe: <b>20</b>. Typische Fehler: <b>Off-by-one</b> (&lt; statt &lt;=, Index bis länge statt länge−1), Endlosschleife (Zähler wird nicht verändert), falsche Initialisierung, falscher Vergleichsoperator, Variable im falschen Gültigkeitsbereich.</p>
<p><b>Fehlerarten</b>: <b>Syntaxfehler</b> (formal: Tippfehler, fehlende Klammer – Compiler meldet ihn), <b>Laufzeitfehler</b> (Division durch 0, Datei fehlt), <b>logischer/semantischer Fehler</b> (Programm läuft, Ergebnis falsch – nur durch Tests/Debugging zu finden). <b>Debugging</b>: Haltepunkte (Breakpoints), Einzelschritt, Variablen beobachten.</p>
<h3>UML-Aktivitätsdiagramm</h3>
<p>Modelliert Abläufe (Geschäftsprozesse, Algorithmen). <b>Die einzige Ablaufdiagramm-Notation der AP1</b> (Struktogramm und PAP sind gestrichen).</p>
<table><tr><th>Element</th><th>Symbol</th><th>Bedeutung</th></tr>
<tr><td>Startknoten</td><td>● ausgefüllter Kreis</td><td>Beginn</td></tr>
<tr><td>Endknoten</td><td>◉ Kreis mit Punkt</td><td>Ende der gesamten Aktivität</td></tr>
<tr><td>Ablaufende</td><td>⊗ Kreis mit Kreuz</td><td>Ende eines Zweiges (Rest läuft weiter)</td></tr>
<tr><td>Aktion</td><td>▭ abgerundetes Rechteck</td><td>Tätigkeit, z. B. „Benutzer anlegen“</td></tr>
<tr><td>Kontrollfluss</td><td>→ Pfeil</td><td>Reihenfolge</td></tr>
<tr><td>Verzweigung (Decision)</td><td>◇ Raute mit 1 Ein-, mehreren Ausgängen</td><td>Bedingungen in <b>Guards</b> [eckige Klammern], z. B. [Passwort korrekt] / [sonst]</td></tr>
<tr><td>Zusammenführung (Merge)</td><td>◇ Raute mit mehreren Ein-, 1 Ausgang</td><td>Zweige laufen wieder zusammen</td></tr>
<tr><td>Gabelung (Fork)</td><td>▬ Balken, 1 Ein-, mehrere Ausgänge</td><td>Parallele Abläufe starten</td></tr>
<tr><td>Vereinigung (Join)</td><td>▬ Balken, mehrere Ein-, 1 Ausgang</td><td>Wartet, bis alle parallelen Zweige fertig sind</td></tr>
<tr><td>Swimlane / Partition</td><td>Bahnen</td><td>Wer ist verantwortlich (Kunde, Service Desk, System)?</td></tr>
<tr><td>Objektknoten</td><td>▭ Rechteck</td><td>Daten/Dokumente, z. B. „Ticket“</td></tr></table>
<div class="uml"><svg viewBox="0 0 760 330" width="100%" style="min-width:560px;font-family:Inter,sans-serif;font-size:12px" role="img" aria-label="Beispiel UML-Aktivitätsdiagramm Passwort-Reset"><defs><marker id="ar" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#93a1b3"/></marker></defs><rect x="10" y="10" width="740" height="310" rx="8" fill="none" stroke="#334255"/><line x1="380" y1="10" x2="380" y2="320" stroke="#334255"/><text x="195" y="30" fill="#93a1b3" text-anchor="middle" font-weight="700">Swimlane: Mitarbeiter</text><text x="565" y="30" fill="#93a1b3" text-anchor="middle" font-weight="700">Swimlane: Service Desk</text><circle cx="195" cy="58" r="9" fill="#d7dee8"/><text x="212" y="62" fill="#64748b">Startknoten</text><line x1="195" y1="67" x2="195" y2="88" stroke="#93a1b3" marker-end="url(#ar)"/><rect x="115" y="90" width="160" height="34" rx="14" fill="#1b2430" stroke="#38bdf8"/><text x="195" y="111" fill="#d7dee8" text-anchor="middle">Reset-Ticket erstellen</text><path d="M275,107 H565 V128" fill="none" stroke="#93a1b3" marker-end="url(#ar)"/><rect x="490" y="130" width="150" height="34" rx="14" fill="#1b2430" stroke="#38bdf8"/><text x="565" y="151" fill="#d7dee8" text-anchor="middle">Identität prüfen</text><path d="M565,164 V180" stroke="#93a1b3" marker-end="url(#ar)"/><polygon points="565,182 585,200 565,218 545,200" fill="#1b2430" stroke="#fbbf24"/><text x="595" y="196" fill="#64748b">Verzweigung</text><path d="M565,218 V238" stroke="#93a1b3" marker-end="url(#ar)"/><text x="572" y="232" fill="#34d399">[bestätigt]</text><rect x="502" y="240" width="126" height="10" fill="#d7dee8"/><text x="636" y="250" fill="#64748b">Fork (parallel)</text><path d="M530,250 V268" stroke="#93a1b3" marker-end="url(#ar)"/><path d="M600,250 V268" stroke="#93a1b3" marker-end="url(#ar)"/><rect x="455" y="270" width="110" height="30" rx="12" fill="#1b2430" stroke="#38bdf8"/><text x="510" y="289" fill="#d7dee8" text-anchor="middle">PW zurücksetzen</text><rect x="575" y="270" width="110" height="30" rx="12" fill="#1b2430" stroke="#38bdf8"/><text x="630" y="289" fill="#d7dee8" text-anchor="middle">Ticket dokument.</text><path d="M545,200 H420 V160 H300" fill="none" stroke="#93a1b3" marker-end="url(#ar)"/><text x="430" y="194" fill="#f87171">[nicht bestätigt]</text><rect x="140" y="146" width="160" height="30" rx="12" fill="#1b2430" stroke="#38bdf8"/><text x="220" y="165" fill="#d7dee8" text-anchor="middle">Ablehnung erhalten</text><path d="M220,176 V200" stroke="#93a1b3" marker-end="url(#ar)"/><circle cx="220" cy="212" r="10" fill="none" stroke="#d7dee8" stroke-width="2"/><circle cx="220" cy="212" r="6" fill="#d7dee8"/><text x="238" y="216" fill="#64748b">Endknoten</text><text x="40" y="270" fill="#64748b">Aktion = abgerundetes Rechteck · Guard = [Bedingung]</text><text x="40" y="288" fill="#64748b">Join (Balken) führt parallele Zweige wieder zusammen</text></svg></div>
<p>Schleifen werden über eine Verzweigung mit Rückpfeil zu einem Merge-Knoten dargestellt. Guards müssen sich gegenseitig ausschließen und vollständig sein.</p>
<p>Weitere UML-Diagramme (Überblick): Anwendungsfalldiagramm (Use Case – Akteure & Funktionen), Klassendiagramm, Sequenzdiagramm (Nachrichtenaustausch über Zeit).</p>`,
cards:[
["Compiler vs. Interpreter","Compiler: übersetzt vorab komplett, schnelle Ausführung. Interpreter: führt zur Laufzeit zeilenweise aus, plattformunabhängig."],
["Linker","Verbindet Objektdateien und Bibliotheken zu einem ausführbaren Programm."],
["Bytecode","Plattformunabhängiger Zwischencode (Java, C#), ausgeführt von einer virtuellen Maschine."],
["Bibliothek vs. Framework","Bibliothek: eigener Code ruft Funktionen auf. Framework: gibt Struktur vor und ruft eigenen Code auf."],
["Kopf- vs. fußgesteuerte Schleife","Kopf (while): Prüfung vorher, evtl. 0 Durchläufe. Fuß (do-while): mindestens 1 Durchlauf."],
["Zählschleife","for-Schleife mit fester Anzahl Durchläufe."],
["Modulo","Rest der ganzzahligen Division: 17 % 5 = 2."],
["Gerade Zahl prüfen","x % 2 == 0."],
["Array-Index","Beginnt in den meisten Sprachen bei 0; letzter Index = Länge − 1."],
["Schreibtischtest","Manuelles Durchlaufen eines Algorithmus mit Notieren aller Variablenwerte in einer Tabelle."],
["Off-by-one-Fehler","Schleife läuft einmal zu oft oder zu wenig (z. B. <= statt <)."],
["Syntax- vs. Logikfehler","Syntax: formaler Fehler, Compiler meldet ihn. Logik: Programm läuft, liefert aber falsches Ergebnis."],
["UML-Aktivitätsdiagramm: Startknoten","Ausgefüllter schwarzer Kreis."],
["UML-Aktivitätsdiagramm: Endknoten","Kreis mit ausgefülltem Punkt (Bullseye)."],
["UML: Raute","Verzweigung (Decision) oder Zusammenführung (Merge); Bedingungen als Guards in [ ]."],
["UML: Balken (Fork/Join)","Fork: startet parallele Abläufe. Join: wartet auf alle parallelen Zweige."],
["Guard","Bedingung in eckigen Klammern an einem Kontrollfluss nach einer Verzweigung, z. B. [x > 10]."],
["Swimlane","Partition im Aktivitätsdiagramm, zeigt Verantwortlichkeit (Akteur/System)."],
["Aktion im Aktivitätsdiagramm","Rechteck mit abgerundeten Ecken."],
["Debugging-Werkzeuge","Breakpoints, Einzelschrittausführung, Variablenüberwachung."]
],
qs:[
{t:"num",q:"Schreibtischtest: x ← 10; y ← 0; SOLANGE x > 0: y ← y + x; x ← x − 3. Welchen Wert hat y am Ende?",a:22,unit:"",e:"x: 10,7,4,1 → y = 10+7+4+1 = 22; danach x = −2."},
{t:"num",q:"a ← 5; b ← 3; WENN a > b DANN a ← a * 2 SONST b ← b * 2; c ← a − b. Wert von c?",a:7,unit:"",e:"a = 10, c = 10 − 3 = 7."},
{t:"num",q:"FÜR i ← 1 BIS 5: s ← s + i (s startet bei 0). Wert von s am Ende?",a:15,unit:"",e:"1+2+3+4+5 = 15."},
{t:"num",q:"Wie lautet das Ergebnis von 23 MOD 4?",a:3,unit:"",e:"23 = 5·4 + 3."},
{t:"sc",q:"Welche Schleife wird mindestens einmal durchlaufen?",o:["while","for","do-while (fußgesteuert)","Keine"],a:2,e:""},
{t:"sc",q:"Welches Element stellt im UML-Aktivitätsdiagramm eine Verzweigung dar?",o:["Abgerundetes Rechteck","Raute","Dicker Balken","Ausgefüllter Kreis"],a:1,e:""},
{t:"sc",q:"Wie werden Bedingungen an den Ausgängen einer Verzweigung notiert?",o:["In runden Klammern","Als Guards in eckigen Klammern","In geschweiften Klammern","Gar nicht"],a:1,e:"z. B. [Betrag > 1000]."},
{t:"sc",q:"Welches Symbol modelliert parallele Abläufe?",o:["Raute","Gabelung (Fork) als dicker Balken","Kreis mit Kreuz","Swimlane"],a:1,e:""},
{t:"sc",q:"Welche Sprache wird typischerweise interpretiert?",o:["C","C++","Python","Rust"],a:2,e:""},
{t:"sc",q:"Ein Array hat 8 Elemente. Welcher ist der letzte gültige Index (bei Start 0)?",o:["8","7","9","1"],a:1,e:""},
{t:"sc",q:"Eine Schleife soll 10-mal laufen: FÜR i ← 0 SOLANGE i <= 10. Welcher Fehler liegt vor?",o:["Syntaxfehler","Off-by-one – 11 Durchläufe","Endlosschleife","Kein Fehler"],a:1,e:"0 bis 10 = 11 Durchläufe; richtig: i < 10."},
{t:"sc",q:"Ein Programm stürzt bei Division durch 0 ab. Welche Fehlerart?",o:["Syntaxfehler","Laufzeitfehler","Logikfehler","Linkerfehler"],a:1,e:""},
{t:"sc",q:"Was bedeutet der Knoten „Kreis mit Kreuz“ im Aktivitätsdiagramm?",o:["Ende der gesamten Aktivität","Ende eines einzelnen Ablaufzweigs","Start","Fehler"],a:1,e:"Ablaufende (Flow Final)."},
{t:"mc",q:"Welche Aussagen zum Compiler sind richtig? (mehrere)",o:["Übersetzt den gesamten Quellcode vor der Ausführung","Programm läuft meist schneller als interpretiert","Muss bei jeder Ausführung neu übersetzen","Syntaxfehler werden vor dem Start erkannt"],a:[0,1,3],e:""},
{t:"open",q:"Erstellen Sie eine Trace-Tabelle für: n ← 4; f ← 1; SOLANGE n > 1: f ← f * n; n ← n − 1. Geben Sie das Ergebnis f an. (4 Punkte)",p:4,a:"Start: n=4, f=1. 1. Durchlauf: f=4, n=3. 2.: f=12, n=2. 3.: f=24, n=1. Bedingung n>1 falsch → Ende. Ergebnis f = 24 (Fakultät 4!). (je Zeile 1 Punkt, Ergebnis 1 – max. 4)"},
{t:"open",q:"Beschreiben Sie, wie ein Login-Vorgang mit maximal drei Versuchen im UML-Aktivitätsdiagramm modelliert wird (Elemente nennen). (4 Punkte)",p:4,a:"Startknoten → Aktion „Zugangsdaten eingeben“ (1) → Verzweigung (Raute) mit Guards [korrekt] → Aktion „Anmelden“ → Endknoten (1); [falsch und Versuche < 3] → Aktion „Fehlversuch zählen“ → Rückführung über Merge-Knoten zur Eingabe (Schleife) (1); [falsch und Versuche = 3] → Aktion „Konto sperren“ → Endknoten (1)."},
{t:"open",q:"Erläutern Sie den Unterschied zwischen Compiler und Interpreter und nennen Sie je eine Sprache. (4 Punkte)",p:4,a:"Ein Compiler übersetzt den gesamten Quellcode vor der Ausführung in Maschinencode; das Programm läuft danach schnell und ohne Compiler (1), z. B. C/C++ (1). Ein Interpreter liest und führt den Quellcode zur Laufzeit Anweisung für Anweisung aus; langsamer, aber plattformunabhängig und ohne Übersetzungsschritt (1), z. B. Python/PHP (1)."}
]
});
