/* ===== Ergänzungen Priorität A: häufige Prüfungsthemen, die bisher zu dünn waren ===== */

/* ---------- Programmierung: Datentypen, Operatoren, Funktionen, mehr Schreibtischtests ---------- */
ext("programmierung", {
lesson: `
<h3>Variablen, Konstanten und Datentypen</h3>
<p>Eine <b>Variable</b> ist ein benannter Speicherplatz, dessen Wert sich ändern kann. Eine <b>Konstante</b> bekommt ihren Wert einmal und behält ihn (z. B. <code>UST ← 19</code>). Der <b>Datentyp</b> legt fest, welche Werte erlaubt sind und was man damit tun kann.</p>
<table><tr><th>Datentyp</th><th>Inhalt</th><th>Beispiel</th><th>typisch für</th></tr>
<tr><td>Ganzzahl (Integer)</td><td>Zahlen ohne Komma</td><td>42, −7</td><td>Anzahl, Alter, Zähler</td></tr>
<tr><td>Gleitkommazahl (Float/Double)</td><td>Zahlen mit Komma</td><td>19,99</td><td>Preis, Messwert, Durchschnitt</td></tr>
<tr><td>Zeichenkette (String)</td><td>Text</td><td>"Hamburg"</td><td>Name, PLZ, Telefonnummer, IP-Adresse</td></tr>
<tr><td>Wahrheitswert (Boolean)</td><td>wahr oder falsch</td><td>wahr</td><td>„ist aktiv?“, „Newsletter?“</td></tr>
<tr><td>Zeichen (Char)</td><td>ein einzelnes Zeichen</td><td>'A'</td><td>Kennbuchstabe</td></tr>
<tr><td>Array / Liste</td><td>mehrere Werte desselben Typs</td><td>[4, 9, 2]</td><td>Messreihe, Namensliste</td></tr></table>
<div class="merke"><b>Merke:</b> PLZ und Telefonnummer sind <b>Zeichenketten</b>, keine Zahlen – man rechnet nicht mit ihnen, und führende Nullen (01067) würden als Zahl verloren gehen.</div>
<h3>Operatoren</h3>
<table><tr><th>Art</th><th>Operatoren</th><th>Ergebnis</th></tr>
<tr><td>Arithmetisch</td><td>+ &nbsp;− &nbsp;* &nbsp;/ &nbsp;DIV &nbsp;MOD</td><td>Zahl (17 DIV 5 = 3, 17 MOD 5 = 2)</td></tr>
<tr><td>Vergleich</td><td>= &nbsp;&lt;&gt; &nbsp;&lt; &nbsp;&gt; &nbsp;&lt;= &nbsp;&gt;=</td><td>Wahrheitswert</td></tr>
<tr><td>Logisch</td><td>UND &nbsp;ODER &nbsp;NICHT</td><td>Wahrheitswert</td></tr></table>
<p><b>Wahrheitstabelle</b> – die musst du auswendig hinschreiben können:</p>
<table><tr><th>A</th><th>B</th><th>A UND B</th><th>A ODER B</th><th>NICHT A</th></tr>
<tr><td>falsch</td><td>falsch</td><td>falsch</td><td>falsch</td><td>wahr</td></tr>
<tr><td>falsch</td><td>wahr</td><td>falsch</td><td>wahr</td><td>wahr</td></tr>
<tr><td>wahr</td><td>falsch</td><td>falsch</td><td>wahr</td><td>falsch</td></tr>
<tr><td>wahr</td><td>wahr</td><td>wahr</td><td>wahr</td><td>falsch</td></tr></table>
<p><b>UND</b> ist nur wahr, wenn beide Seiten wahr sind. <b>ODER</b> ist wahr, sobald mindestens eine Seite wahr ist. Rangfolge: erst NICHT, dann UND, dann ODER – im Zweifel Klammern setzen.</p>
<h3>Funktionen</h3>
<p>Eine <b>Funktion</b> ist ein benannter Programmteil, der eine Aufgabe erledigt. Sie bekommt Werte über <b>Parameter</b> und liefert ein Ergebnis über den <b>Rückgabewert</b>. Eine <b>Prozedur</b> gibt nichts zurück.</p>
<pre class="code">FUNKTION brutto(netto, ust): Kommazahl
    RÜCKGABE netto * (1 + ust / 100)
ENDE FUNKTION

preis ← brutto(200, 19)      // preis = 238</pre>
<p>Vorteile: Code wird <b>wiederverwendbar</b>, <b>übersichtlicher</b>, leichter zu <b>testen</b> und Änderungen sind nur an einer Stelle nötig.</p>
<div class="tip"><b>Schreibtischtest – so gehst du vor:</b> Lege eine Tabelle an, eine Spalte pro Variable plus eine für die Bedingung. Jede Zeile ist ein Schritt. Schreibe jeden neuen Wert hin, auch wenn er dir klar erscheint – die meisten Fehler passieren beim Kopfrechnen über mehrere Schleifendurchläufe.</div>`,
cards: [
["Variable vs. Konstante","Variable: Wert kann sich ändern. Konstante: Wert wird einmal festgelegt und bleibt gleich."],
["Datentyp für eine Postleitzahl","Zeichenkette (String) – es wird nicht gerechnet, führende Nullen müssen erhalten bleiben."],
["Datentyp für einen Preis (19,99 €)","Gleitkommazahl (Float/Double) bzw. Dezimalzahl."],
["Datentyp für „Benutzer ist aktiv“","Wahrheitswert (Boolean): wahr oder falsch."],
["Datentyp für die Anzahl der Arbeitsplätze","Ganzzahl (Integer)."],
["Vergleichsoperatoren","= gleich, <> ungleich, < kleiner, > größer, <= kleiner gleich, >= größer gleich. Ergebnis ist immer wahr oder falsch."],
["Wann ist A UND B wahr?","Nur wenn A und B beide wahr sind."],
["Wann ist A ODER B wahr?","Sobald mindestens eines von beiden wahr ist (auch wenn beide wahr sind)."],
["Rangfolge der logischen Operatoren","NICHT vor UND vor ODER – Klammern machen es eindeutig."],
["Parameter","Wert, der einer Funktion beim Aufruf übergeben wird."],
["Rückgabewert","Ergebnis, das eine Funktion an die aufrufende Stelle zurückliefert."],
["Funktion vs. Prozedur","Funktion liefert einen Rückgabewert, Prozedur führt nur Anweisungen aus."],
["Zwei Vorteile von Funktionen","Wiederverwendbarkeit und Übersichtlichkeit; außerdem leichter testbar und Änderungen nur an einer Stelle."],
["Vorgehen beim Schreibtischtest","Tabelle mit einer Spalte je Variable, Zeile für Zeile den Code durchgehen und jeden neuen Wert notieren."]
],
qs: [
{t:"open",short:true,p:2,q:"Welchen Datentyp wählen Sie für eine Postleitzahl?",a:"Zeichenkette (String)",keys:["Zeichenkette","String","Text","varchar"],e:"Mit einer PLZ wird nicht gerechnet, und führende Nullen (z. B. 01067) gingen als Zahl verloren."},
{t:"open",short:true,p:2,q:"Welchen Datentyp wählen Sie für das Merkmal „Newsletter abonniert (ja/nein)“?",a:"Wahrheitswert (Boolean)",keys:["Wahrheitswert","Boolean","bool","boolesch"],e:"Es gibt nur zwei Zustände: wahr oder falsch."},
{t:"open",short:true,p:2,q:"Welchen Datentyp wählen Sie für einen Preis wie 19,99 €?",a:"Gleitkommazahl (Float/Double) bzw. Dezimalzahl",keys:["Gleitkommazahl","Gleitkomma","Float","Double","Dezimal","Decimal","Kommazahl","Fließkomma"],e:"Der Wert hat Nachkommastellen."},
{t:"num",q:"a ← 7; b ← 2; c ← a DIV b + a MOD b. Welchen Wert hat c?",a:4,e:"7 DIV 2 = 3, 7 MOD 2 = 1, 3 + 1 = 4."},
{t:"open",short:true,p:2,q:"Welchen Wahrheitswert hat der Ausdruck (5 > 3) UND NICHT (2 = 2)?",a:"falsch",keys:["falsch","false"],e:"5 > 3 ist wahr, 2 = 2 ist wahr, NICHT wahr = falsch, wahr UND falsch = falsch."},
{t:"open",short:true,p:2,q:"Welchen Wahrheitswert hat der Ausdruck wahr ODER falsch UND falsch?",a:"wahr",keys:["wahr","true"],e:"UND bindet stärker als ODER: falsch UND falsch = falsch, wahr ODER falsch = wahr."},
{t:"open",p:4,q:"Vervollständigen Sie die Wahrheitstabelle für A UND B sowie A ODER B für alle vier Kombinationen von A und B.",a:"A falsch, B falsch → UND falsch, ODER falsch (1). A falsch, B wahr → UND falsch, ODER wahr (1). A wahr, B falsch → UND falsch, ODER wahr (1). A wahr, B wahr → UND wahr, ODER wahr (1)."},
{t:"num",q:"FUNKTION f(x, y): RÜCKGABE x * 2 + y. Anschließend: z ← f(3, 4) + f(1, 1). Welchen Wert hat z?",a:13,e:"f(3, 4) = 10, f(1, 1) = 3, zusammen 13."},
{t:"num",q:"summe ← 0; FÜR i ← 1 BIS 3: FÜR j ← 1 BIS 2: summe ← summe + i * j. Welchen Wert hat summe am Ende?",a:18,e:"i = 1: 1 + 2 = 3; i = 2: 2 + 4 = 6; i = 3: 3 + 6 = 9; Summe 18."},
{t:"num",q:"n ← 37; z ← 0; SOLANGE n > 0: n ← n DIV 2; z ← z + 1. Welchen Wert hat z am Ende?",a:6,e:"n: 37 → 18 → 9 → 4 → 2 → 1 → 0, das sind 6 Durchläufe."},
{t:"num",q:"werte ← [4, 9, 2, 7]; m ← werte[0]; FÜR i ← 1 BIS 3: WENN werte[i] < m DANN m ← werte[i]. Welchen Wert hat m am Ende?",a:2,e:"Der Algorithmus sucht das Minimum: 4 → (9 nein) → 2 → (7 nein)."},
{t:"num",q:"x ← 5; WIEDERHOLE: x ← x − 2 BIS x < 0. Wie oft wird der Schleifenkörper ausgeführt?",a:3,e:"x: 5 → 3 → 1 → −1. Erst nach dem dritten Durchlauf ist x < 0."},
{t:"num",q:"text ← \"Server\"; n ← 0; FÜR i ← 0 BIS länge(text) − 1: WENN text[i] = \"e\" DANN n ← n + 1. Welchen Wert hat n?",a:2,e:"S-e-r-v-e-r enthält zweimal „e“ (Index 1 und 4)."},
{t:"open",p:4,q:"Führen Sie einen Schreibtischtest durch: a ← 12; b ← 18; SOLANGE a <> b: WENN a > b DANN a ← a − b SONST b ← b − a. Notieren Sie die Werte von a und b nach jedem Durchlauf und nennen Sie das Ergebnis.",a:"Start: a = 12, b = 18 (1). 1. Durchlauf: a > b ist falsch → b = 6 (1). 2. Durchlauf: a > b ist wahr → a = 6 (1). Jetzt gilt a = b, die Schleife endet. Ergebnis: 6 – der größte gemeinsame Teiler von 12 und 18 (1)."},
{t:"open",p:4,q:"Schreiben Sie in Pseudocode eine Funktion istGerade(zahl), die wahr zurückgibt, wenn die übergebene Zahl gerade ist, und sonst falsch.",a:"FUNKTION istGerade(zahl): Wahrheitswert (1)\n    WENN zahl MOD 2 = 0 DANN (1)\n        RÜCKGABE wahr (1)\n    SONST\n        RÜCKGABE falsch (1)\n    ENDE WENN\nENDE FUNKTION\nKürzer und ebenfalls richtig: RÜCKGABE zahl MOD 2 = 0."},
{t:"open",p:5,q:"Schreiben Sie in Pseudocode einen Algorithmus, der den Durchschnitt aller Werte im Array messwerte berechnet und ausgibt.",a:"summe ← 0 (1)\nFÜR i ← 0 BIS länge(messwerte) − 1 (1)\n    summe ← summe + messwerte[i] (1)\nENDE FÜR\ndurchschnitt ← summe / länge(messwerte) (1)\nAUSGABE durchschnitt (1)\nAuch richtig: FÜR JEDEN wert IN messwerte. Wichtig: Summe vor der Schleife auf 0 setzen und erst nach der Schleife teilen."},
{t:"open",p:3,q:"Erläutern Sie den Unterschied zwischen Parameter und Rückgabewert einer Funktion und nennen Sie einen Vorteil von Funktionen.",a:"Parameter: Werte, die der Funktion beim Aufruf übergeben werden (1). Rückgabewert: Ergebnis, das die Funktion an die aufrufende Stelle zurückliefert (1). Vorteil (1): Wiederverwendbarkeit, bessere Übersicht, leichteres Testen, Änderungen nur an einer Stelle."},
{t:"open",p:3,q:"Ein Programm soll nur dann Zugriff gewähren, wenn der Benutzer angemeldet ist und zusätzlich entweder Administrator ist oder die Datei ihm gehört. Formulieren Sie die Bedingung in Pseudocode.",a:"WENN angemeldet UND (istAdmin ODER istBesitzer) DANN … (2). Die Klammern sind nötig, weil UND stärker bindet als ODER – ohne Klammern bekäme jeder Besitzer auch unangemeldet Zugriff (1)."}
]});

/* ---------- Verträge: Zustandekommen, Bestandteile, AGB, Eigentumsvorbehalt, Vertragsstörungen ---------- */
ext("recht", {
lesson: `
<h3>Vom Angebot zum Vertrag</h3>
<p>Ein Vertrag entsteht durch zwei übereinstimmende Willenserklärungen: <b>Antrag</b> und <b>Annahme</b>. Wer welche Erklärung abgibt, hängt vom Ablauf ab:</p>
<table><tr><th>Schritt</th><th>Rechtliche Bedeutung</th></tr>
<tr><td>Anfrage des Kunden</td><td>unverbindlich – nur Bitte um ein Angebot</td></tr>
<tr><td>Angebot des Lieferanten</td><td><b>verbindlicher Antrag</b> – außer es enthält eine Freizeichnungsklausel („freibleibend“, „unverbindlich“, „solange der Vorrat reicht“)</td></tr>
<tr><td>Bestellung des Kunden</td><td>Annahme, wenn sie rechtzeitig und ohne Änderungen erfolgt → Vertrag</td></tr>
<tr><td>Auftragsbestätigung</td><td>nur nötig, wenn noch kein Vertrag besteht: bei freibleibendem Angebot, bei verspäteter oder geänderter Bestellung, bei Bestellung ohne vorheriges Angebot</td></tr></table>
<div class="merke"><b>Merke:</b> Eine Bestellung, die vom Angebot abweicht (anderer Preis, andere Menge, zu spät), ist ein <b>neuer Antrag</b>. Der Vertrag kommt dann erst durch die Auftragsbestätigung oder die Lieferung zustande.</div>
<h3>Pflichten und Bestandteile beim Kaufvertrag</h3>
<ul><li><b>Verkäufer:</b> Ware mangelfrei und rechtzeitig übergeben, Eigentum verschaffen.</li>
<li><b>Käufer:</b> Ware annehmen und den Kaufpreis rechtzeitig zahlen.</li></ul>
<p><b>Typische Vertragsbestandteile:</b> Art, Güte und Menge der Ware · Preis und Rabatte · Lieferzeit · Liefer- und Zahlungsbedingungen (z. B. „frei Haus“, „30 Tage netto, 2 % Skonto bei 10 Tagen“) · Gewährleistung/Garantie · Erfüllungsort und Gerichtsstand · Vertragsstrafen.</p>
<p><b>AGB</b> (Allgemeine Geschäftsbedingungen) sind vorformulierte Bedingungen für viele Verträge. Sie gelten nur, wenn vor Vertragsschluss auf sie hingewiesen wurde und der Kunde sie zur Kenntnis nehmen konnte. Individuelle Absprachen gehen vor, überraschende Klauseln sind unwirksam.</p>
<p><b>Eigentumsvorbehalt:</b> Die Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers. Zahlt der Kunde nicht, kann der Verkäufer sie zurückverlangen.</p>
<h3>Vertragsstörungen im Überblick</h3>
<table><tr><th>Störung</th><th>Wer verletzt die Pflicht?</th><th>Voraussetzungen</th><th>Rechte der Gegenseite</th></tr>
<tr><td><b>Mangelhafte Lieferung</b> (Schlechtleistung)</td><td>Verkäufer</td><td>Mangel bei Übergabe; unter Kaufleuten unverzüglich prüfen und rügen</td><td>zuerst Nacherfüllung (Nachbesserung oder Ersatzlieferung); nach erfolgloser Frist Minderung, Rücktritt, Schadensersatz</td></tr>
<tr><td><b>Lieferungsverzug</b> (Nicht-rechtzeitig-Lieferung)</td><td>Verkäufer</td><td>Fälligkeit + Mahnung + Verschulden; Mahnung entfällt bei fest vereinbartem Kalendertermin</td><td>Lieferung verlangen und Verzugsschaden ersetzen lassen; nach erfolgloser Nachfrist Rücktritt und/oder Schadensersatz statt der Leistung</td></tr>
<tr><td><b>Zahlungsverzug</b> (Nicht-rechtzeitig-Zahlung)</td><td>Käufer</td><td>Fälligkeit + Mahnung; ohne Mahnung spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung</td><td>Verzugszinsen, Mahnkosten, nach Fristsetzung Rücktritt und Schadensersatz; Ware bei Eigentumsvorbehalt zurückholen</td></tr>
<tr><td><b>Annahmeverzug</b></td><td>Käufer</td><td>Ware wurde ordnungsgemäß angeboten und nicht angenommen</td><td>auf Abnahme bestehen, Ware auf Kosten des Käufers einlagern, Selbsthilfeverkauf, Rücktritt</td></tr></table>
<div class="tip"><b>Prüfungstipp:</b> Schreibe bei Vertragsstörungen immer drei Dinge: <b>welche Störung</b> vorliegt, <b>warum</b> (Voraussetzungen am Fall prüfen) und <b>welche Rechte</b> daraus folgen – das Recht mit dem Vorrang zuerst.</div>`,
cards: [
["Ist eine Anfrage rechtlich bindend?","Nein – sie ist nur die unverbindliche Bitte um ein Angebot."],
["Ist ein Angebot bindend?","Ja, es ist ein verbindlicher Antrag – außer mit Freizeichnungsklausel wie „freibleibend“ oder „unverbindlich“."],
["Freizeichnungsklauseln – Beispiele","„freibleibend“, „unverbindlich“, „solange der Vorrat reicht“, „Preis freibleibend“."],
["Wann ist eine Auftragsbestätigung nötig?","Wenn noch kein Vertrag besteht: freibleibendes Angebot, verspätete oder geänderte Bestellung, Bestellung ohne Angebot."],
["Bestellung weicht vom Angebot ab – Folge?","Sie gilt als neuer Antrag; Vertrag erst durch Auftragsbestätigung oder Lieferung."],
["Pflichten des Verkäufers","Ware mangelfrei und rechtzeitig übergeben, Eigentum verschaffen."],
["Pflichten des Käufers","Ware annehmen und Kaufpreis rechtzeitig zahlen."],
["AGB","Vorformulierte Vertragsbedingungen für viele Verträge; gelten nur bei Hinweis und Möglichkeit zur Kenntnisnahme vor Vertragsschluss."],
["Eigentumsvorbehalt","Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers."],
["Vier Vertragsstörungen beim Kaufvertrag","Mangelhafte Lieferung, Lieferungsverzug, Zahlungsverzug, Annahmeverzug."],
["Voraussetzungen Lieferungsverzug","Fälligkeit, Mahnung (entfällt bei festem Kalendertermin) und Verschulden des Lieferanten."],
["Rechte bei Lieferungsverzug","Lieferung + Ersatz des Verzugsschadens; nach erfolgloser Nachfrist Rücktritt und/oder Schadensersatz statt der Leistung."],
["Wann tritt Zahlungsverzug ohne Mahnung ein?","Spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung."],
["Rechte bei Zahlungsverzug","Verzugszinsen und Mahnkosten verlangen; nach Fristsetzung Rücktritt/Schadensersatz; bei Eigentumsvorbehalt Ware zurückfordern."],
["Annahmeverzug – Rechte des Verkäufers","Auf Abnahme bestehen, Ware auf Kosten des Käufers einlagern, Selbsthilfeverkauf, Rücktritt."],
["Rügepflicht unter Kaufleuten","Ware unverzüglich nach Lieferung prüfen und Mängel sofort rügen – sonst gilt sie als genehmigt."]
],
qs: [
{t:"open",short:true,p:2,q:"Ein Systemhaus gibt ein verbindliches Angebot ab. Der Kunde bestellt drei Tage später genau zu diesen Bedingungen. Wodurch kommt der Kaufvertrag zustande?",a:"Durch die Bestellung (sie ist die Annahme des Angebots)",keys:["Bestellung","Annahme"],e:"Angebot = Antrag, rechtzeitige und unveränderte Bestellung = Annahme. Eine Auftragsbestätigung ist nicht nötig."},
{t:"open",p:3,q:"Ein Angebot über 15 Notebooks trägt den Vermerk „freibleibend“. Der Kunde bestellt daraufhin. Beurteilen Sie, ob damit ein Kaufvertrag zustande gekommen ist.",a:"Nein (1). Durch die Freizeichnungsklausel ist das Angebot unverbindlich, die Bestellung ist daher erst der Antrag (1). Der Vertrag kommt erst zustande, wenn der Lieferant annimmt – durch Auftragsbestätigung oder Lieferung (1)."},
{t:"open",p:3,q:"Ein Lieferant bietet 20 Monitore zu je 180 € an. Der Kunde bestellt 20 Monitore „zu je 170 €“. Erläutern Sie die rechtliche Lage.",a:"Die Bestellung weicht vom Angebot ab und ist deshalb keine Annahme, sondern ein neuer Antrag (2). Ein Vertrag entsteht erst, wenn der Lieferant diesen Antrag annimmt, z. B. durch Auftragsbestätigung oder Lieferung zu 170 € (1)."},
{t:"open",p:4,q:"Die Lieferung von 20 Notebooks war fest für den 01.03. vereinbart. Am 10.03. ist noch nichts geliefert, der Lieferant hat schlicht zu spät bestellt. Prüfen Sie, ob Lieferungsverzug vorliegt, und nennen Sie zwei Rechte des Käufers.",a:"Ja, Lieferungsverzug liegt vor (1): Die Lieferung ist fällig, eine Mahnung ist wegen des kalendermäßig festen Termins nicht nötig, und der Lieferant hat die Verspätung verschuldet (1). Rechte (je 1): auf Lieferung bestehen und Ersatz des Verzugsschadens verlangen; nach erfolgloser Nachfrist vom Vertrag zurücktreten; Schadensersatz statt der Leistung verlangen (z. B. Mehrkosten eines Deckungskaufs)."},
{t:"open",p:3,q:"Eine Rechnung über 4.800 € geht dem Kunden am 2. Mai zu und ist sofort fällig. Der Kunde zahlt nicht, gemahnt wird nicht. Ab wann befindet sich der Kunde im Zahlungsverzug und was kann der Lieferant dann verlangen?",a:"Ohne Mahnung tritt der Verzug spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung ein, hier also Anfang Juni (1). Der Lieferant kann Verzugszinsen und Mahnkosten verlangen (1) und nach Fristsetzung zurücktreten bzw. Schadensersatz fordern; bei Eigentumsvorbehalt kann er die Ware zurückholen (1)."},
{t:"open",p:3,q:"Ein Kunde verweigert ohne Grund die Annahme von ordnungsgemäß und pünktlich gelieferten Servern. Benennen Sie die Vertragsstörung und nennen Sie zwei Rechte des Lieferanten.",a:"Annahmeverzug (1). Rechte (je 1): auf Abnahme bestehen bzw. klagen; die Ware auf Kosten und Gefahr des Kunden einlagern; Selbsthilfeverkauf nach Androhung; vom Vertrag zurücktreten."},
{t:"open",short:true,p:2,q:"Wie heißt die Vereinbarung, nach der gelieferte Ware bis zur vollständigen Bezahlung dem Verkäufer gehört?",a:"Eigentumsvorbehalt",keys:["Eigentumsvorbehalt"]},
{t:"open",short:true,p:2,q:"Ein Kunde zahlt eine fällige Rechnung trotz Mahnung nicht. Welche Vertragsstörung liegt vor?",a:"Zahlungsverzug (Nicht-rechtzeitig-Zahlung)",keys:["Zahlungsverzug","Nicht-rechtzeitig-Zahlung","Nicht rechtzeitig Zahlung"]},
{t:"open",p:2,q:"Erläutern Sie, was AGB sind und unter welcher Voraussetzung sie Vertragsbestandteil werden.",a:"AGB sind vorformulierte Vertragsbedingungen, die ein Unternehmen für eine Vielzahl von Verträgen verwendet (1). Sie werden nur Vertragsbestandteil, wenn vor Vertragsschluss auf sie hingewiesen wurde und der Kunde sie in zumutbarer Weise zur Kenntnis nehmen konnte und einverstanden ist (1)."},
{t:"open",p:3,q:"Ein IT-Händler erhält 50 Monitore von seinem Großhändler und lagert sie drei Wochen ungeprüft ein. Dann stellt er fest, dass zehn Geräte defekt sind. Erläutern Sie das Problem.",a:"Unter Kaufleuten gilt die unverzügliche Prüf- und Rügepflicht (1). Der Händler hätte die Ware gleich nach der Lieferung prüfen und erkennbare Mängel sofort melden müssen (1). Durch die verspätete Rüge gilt die Ware als genehmigt – er verliert seine Gewährleistungsrechte für diese Mängel (1)."},
{t:"open",p:4,q:"Nennen Sie vier Punkte, die in einem Kaufvertrag über 30 Arbeitsplatz-PCs geregelt sein sollten.",a:"Je 1: Art, Ausstattung und Menge der Geräte; Preis, Rabatt und Skonto; Liefertermin; Lieferbedingungen (z. B. frei Haus, Aufstellung); Zahlungsbedingungen; Gewährleistung/Garantie und Service; Eigentumsvorbehalt; Vertragsstrafe bei Verzug; Erfüllungsort und Gerichtsstand."},
{t:"num",q:"Ein Kunde ist mit 12.000 € seit 45 Tagen in Verzug. Der Verzugszinssatz beträgt 11 % pro Jahr (360 Zinstage). Wie hoch sind die Verzugszinsen?",a:165,unit:"€",e:"12.000 × 11 × 45 ÷ (100 × 360) = 165 €."}
]});

/* ---------- Hardware: Kenngrößen lesen und bewerten ---------- */
ext("hardware", {
lesson: `
<h3>Kenngrößen im Datenblatt lesen</h3>
<p>In der Prüfung bekommst du oft Datenblätter oder Angebote und sollst begründen, welches Gerät zur Anforderung passt. Dafür musst du die wichtigsten Angaben einordnen können.</p>
<table><tr><th>Bauteil</th><th>Angabe</th><th>Bedeutung</th></tr>
<tr><td rowspan="5"><b>Prozessor (CPU)</b></td><td>Kerne / Threads (z. B. 8C/16T)</td><td>Kerne = eigenständige Recheneinheiten. Threads = gleichzeitig bearbeitbare Aufgaben (mit SMT/Hyper-Threading zwei pro Kern). Wichtig für Rendering, Virtualisierung, viele Programme parallel.</td></tr>
<tr><td>Taktfrequenz (GHz)</td><td>Arbeitsschritte pro Sekunde je Kern. Wichtig für Programme, die nur einen Kern nutzen. Nur innerhalb einer CPU-Generation direkt vergleichbar.</td></tr>
<tr><td>Cache (L1–L3, MB)</td><td>sehr schneller Zwischenspeicher in der CPU</td></tr>
<tr><td>TDP (Watt)</td><td>Thermal Design Power: Wärme, die die Kühlung abführen muss – Anhaltspunkt für Stromverbrauch und Lautstärke</td></tr>
<tr><td>integrierte Grafik</td><td>Grafikeinheit in der CPU – reicht für Büroarbeit</td></tr>
<tr><td rowspan="3"><b>Arbeitsspeicher (RAM)</b></td><td>Kapazität (GB)</td><td>Büro 16 GB, Entwicklung/VMs/Video 32 GB und mehr</td></tr>
<tr><td>Typ (DDR4 / DDR5)</td><td>nicht untereinander kompatibel – das Mainboard gibt den Typ vor</td></tr>
<tr><td>Bauform</td><td>DIMM im Desktop, SO-DIMM im Notebook; im Notebook oft verlötet (nicht aufrüstbar)</td></tr>
<tr><td rowspan="3"><b>Mainboard</b></td><td>Sockel und Chipsatz</td><td>bestimmen, welche CPUs passen und welche Funktionen es gibt</td></tr>
<tr><td>Formfaktor</td><td>ATX, Micro-ATX, Mini-ITX – muss ins Gehäuse passen</td></tr>
<tr><td>Steckplätze</td><td>RAM-Bänke, M.2, PCIe – entscheiden über die Aufrüstbarkeit</td></tr>
<tr><td rowspan="2"><b>Grafik (GPU)</b></td><td>integriert / dediziert</td><td>dedizierte Karte für CAD, Videoschnitt, KI, 3D</td></tr>
<tr><td>Grafikspeicher (VRAM)</td><td>wichtig bei hohen Auflösungen und großen Projekten</td></tr>
<tr><td><b>Netzteil</b></td><td>Leistung (W), 80 PLUS</td><td>muss den Bedarf aller Komponenten mit Reserve decken; 80 PLUS bescheinigt den Wirkungsgrad</td></tr></table>
<div class="merke"><b>Merke:</b> „Besser“ gibt es nicht ohne Einsatzzweck. Viele Kerne helfen beim Rendern, bringen im Büro aber nichts und kosten Strom. Begründe immer mit der Anforderung aus der Ausgangssituation.</div>
<p>Ein <b>Benchmark</b> ist ein standardisierter Leistungstest. Er macht Geräte vergleichbar, sagt aber nur etwas für die getestete Art von Aufgabe aus.</p>`,
cards: [
["Kerne vs. Threads","Kern: eigenständige Recheneinheit. Thread: gleichzeitig bearbeitbare Aufgabe; mit SMT/Hyper-Threading zwei Threads pro Kern."],
["Wofür sind viele CPU-Kerne wichtig?","Für parallele Lasten: Rendering, Videoschnitt, Virtualisierung, Kompilieren, viele Programme gleichzeitig."],
["Taktfrequenz","Arbeitsschritte pro Sekunde je Kern in GHz – wichtig für Programme, die nur einen Kern nutzen."],
["TDP","Thermal Design Power in Watt: Wärme, die die Kühlung abführen muss; Anhaltspunkt für Leistungsaufnahme."],
["CPU-Cache","Sehr schneller Zwischenspeicher in der CPU (L1, L2, L3) für häufig benötigte Daten."],
["DDR4 und DDR5","Arbeitsspeicher-Generationen; nicht kompatibel – das Mainboard legt den Typ fest."],
["DIMM vs. SO-DIMM","DIMM: Speichermodul für Desktop-PCs. SO-DIMM: kleinere Bauform für Notebooks und Mini-PCs."],
["Was legt das Mainboard fest?","Passende CPUs (Sockel/Chipsatz), RAM-Typ, Anzahl der Steckplätze und Anschlüsse, Formfaktor."],
["Formfaktoren Mainboard","ATX, Micro-ATX, Mini-ITX (von groß nach klein)."],
["Integrierte vs. dedizierte Grafik","Integriert: in der CPU, sparsam, reicht fürs Büro. Dediziert: eigene Karte mit eigenem Speicher für CAD, Video, 3D, KI."],
["Benchmark","Standardisierter Leistungstest, der Geräte vergleichbar macht – aussagekräftig nur für die getestete Aufgabenart."],
["Nachteil von verlötetem RAM","Nicht aufrüstbar und nicht austauschbar – die Kapazität muss beim Kauf für die ganze Nutzungsdauer reichen."]
],
qs: [
{t:"open",p:4,q:"CPU A: 6 Kerne/12 Threads, 4,6 GHz, 65 W TDP. CPU B: 16 Kerne/32 Threads, 4,2 GHz, 125 W TDP. Empfehlen Sie je eine CPU für einen Büro-PC und für eine Workstation zum Videorendering und begründen Sie.",a:"Büro-PC: CPU A (1) – Office-Anwendungen nutzen wenige Kerne, der hohe Takt reicht aus, die niedrige TDP bedeutet weniger Strom, Abwärme und Lärm sowie geringere Kosten (1). Videorendering: CPU B (1) – Rendering verteilt sich auf alle Kerne, 16 Kerne/32 Threads verkürzen die Rechenzeit deutlich; die höhere Leistungsaufnahme ist dafür gerechtfertigt (1)."},
{t:"open",p:3,q:"In einem Datenblatt steht: „8C/16T, 3,4 GHz, 65 W TDP“. Erläutern Sie die drei Angaben.",a:"8C/16T: 8 Kerne, die 16 Threads gleichzeitig bearbeiten (1). 3,4 GHz: Taktfrequenz, also Arbeitsschritte pro Sekunde je Kern (1). 65 W TDP: Wärmeleistung, auf die die Kühlung ausgelegt sein muss – Anhaltspunkt für die Leistungsaufnahme (1)."},
{t:"open",short:true,p:2,q:"Welche Bauform hat Arbeitsspeicher für Notebooks?",a:"SO-DIMM",keys:["SO-DIMM","SODIMM","SO DIMM"]},
{t:"open",p:3,q:"Ein Kollege möchte einen älteren PC mit DDR4-Mainboard durch neue DDR5-Riegel beschleunigen. Beurteilen Sie das Vorhaben.",a:"Das funktioniert nicht (1): DDR4 und DDR5 sind mechanisch und elektrisch nicht kompatibel, der Speichertyp wird vom Mainboard vorgegeben (1). Möglich ist nur mehr DDR4-RAM – oder ein Tausch von Mainboard (und meist CPU) (1)."},
{t:"open",p:2,q:"Erläutern Sie den Unterschied zwischen integrierter und dedizierter Grafik und nennen Sie je einen passenden Einsatz.",a:"Integrierte Grafik sitzt in der CPU und nutzt den Arbeitsspeicher mit – sparsam und günstig, passend für Büroarbeit (1). Eine dedizierte Grafikkarte hat einen eigenen Grafikprozessor und eigenen Speicher – nötig für CAD, Videoschnitt, 3D oder KI (1)."},
{t:"num",q:"Die Komponenten eines PCs benötigen zusammen 425 W. Das Netzteil soll höchstens zu 70 % ausgelastet werden. Wie viel Watt muss es mindestens liefern? (auf ganze Watt gerundet)",a:607,unit:"W",tol:1,e:"425 ÷ 0,7 ≈ 607 W – in der Praxis wählt man die nächste Größe, z. B. 650 W."},
{t:"open",short:true,p:2,q:"Welche CPU-Angabe sagt aus, wie viele Aufgaben gleichzeitig bearbeitet werden können?",a:"Die Anzahl der Threads (bzw. Kerne)",keys:["Threads","Thread","Kerne","Kernanzahl","Cores"]},
{t:"open",p:3,q:"Für zehn Außendienst-Notebooks stehen zwei Modelle zur Wahl: Modell A mit 8 GB verlötetem RAM, Modell B mit 16 GB in einem Steckplatz und einem freien Steckplatz. Begründen Sie Ihre Empfehlung.",a:"Empfehlung: Modell B (1). 16 GB reichen für Office, Browser, Videokonferenz und CRM gleichzeitig, 8 GB sind heute knapp (1). Durch den freien Steckplatz lässt sich das Gerät später aufrüsten und länger nutzen – wirtschaftlicher und nachhaltiger als verlöteter Speicher (1)."}
]});

/* ---------- Datenbanken: ER-Modell ---------- */
ext("software", {
lesson: `
<h3>ER-Modell: Daten vor dem Bau der Tabellen planen</h3>
<p>Das <b>Entity-Relationship-Modell</b> beschreibt, welche Dinge gespeichert werden und wie sie zusammenhängen – noch ohne Technik.</p>
<table><tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>Entitätstyp</td><td>Art von Objekten, über die Daten gespeichert werden (im Diagramm ein Rechteck)</td><td>Kunde, Gerät</td></tr>
<tr><td>Attribut</td><td>Eigenschaft eines Entitätstyps</td><td>Name, Seriennummer</td></tr>
<tr><td>Schlüsselattribut</td><td>identifiziert jede Entität eindeutig (unterstrichen)</td><td>KundenNr</td></tr>
<tr><td>Beziehung</td><td>Zusammenhang zwischen Entitätstypen (Raute oder Linie mit Verb)</td><td>Kunde <i>besitzt</i> Gerät</td></tr>
<tr><td>Kardinalität</td><td>wie viele Entitäten auf jeder Seite beteiligt sind</td><td>1:1, 1:n, n:m</td></tr></table>
<h3>Vom ER-Modell zur Tabelle</h3>
<ul><li>Jeder Entitätstyp wird eine <b>Tabelle</b>, jedes Attribut eine <b>Spalte</b>, das Schlüsselattribut der <b>Primärschlüssel</b>.</li>
<li><b>1:n</b> – der Fremdschlüssel kommt in die Tabelle auf der <b>n-Seite</b>. Beispiel: Ein Kunde hat viele Geräte → Tabelle Gerät bekommt die Spalte KundenNr.</li>
<li><b>n:m</b> – eine <b>Zwischentabelle</b> mit den Primärschlüsseln beider Seiten als Fremdschlüssel.</li>
<li><b>1:1</b> – Fremdschlüssel in einer der beiden Tabellen, oder beide zu einer Tabelle zusammenfassen.</li></ul>
<pre class="code">Kunde (<u>KundenNr</u>, Name, Ort)
Gerät (<u>SerienNr</u>, Typ, Kaufdatum, KundenNr)      ← KundenNr ist Fremdschlüssel</pre>
<p><b>Datentypen der Spalten:</b> Ganzzahl für Nummern und Mengen, Text für Namen, Datum für Termine, Dezimalzahl für Geldbeträge, Wahrheitswert für Ja/Nein.</p>`,
cards: [
["ER-Modell","Entity-Relationship-Modell: beschreibt Entitätstypen, ihre Attribute und Beziehungen – Planung vor dem Anlegen der Tabellen."],
["Entitätstyp","Art von Objekten, über die Daten gespeichert werden, z. B. Kunde. Wird zur Tabelle."],
["Attribut im ER-Modell","Eigenschaft eines Entitätstyps, z. B. Name. Wird zur Spalte."],
["Wo steht der Fremdschlüssel bei 1:n?","In der Tabelle auf der n-Seite."],
["Datentypen für Tabellenspalten","Ganzzahl, Dezimalzahl, Text, Datum, Wahrheitswert."],
["ER-Diagramm: Symbole","Entitätstyp = Rechteck, Beziehung = Raute bzw. Linie, Attribut = Oval; Schlüsselattribut unterstrichen."]
],
qs: [
{t:"open",p:4,q:"Ein Systemhaus will Kunden und deren Geräte speichern. Ein Kunde kann mehrere Geräte haben, jedes Gerät gehört genau einem Kunden. Geben Sie die beiden Tabellen mit sinnvollen Spalten an und kennzeichnen Sie Primär- und Fremdschlüssel.",a:"Kunde (KundenNr als Primärschlüssel, Name, Ort …) (1,5). Gerät (SerienNr oder GeräteNr als Primärschlüssel, Typ, Kaufdatum …) (1,5), dazu KundenNr als Fremdschlüssel in der Tabelle Gerät (1) – denn bei 1:n steht der Fremdschlüssel auf der n-Seite."},
{t:"open",short:true,p:2,q:"Eine Abteilung hat viele Mitarbeitende, jede Person gehört zu genau einer Abteilung. In welcher Tabelle steht der Fremdschlüssel?",a:"In der Tabelle Mitarbeiter (n-Seite) – sie erhält die AbteilungsNr",keys:["Mitarbeiter","Mitarbeitende","n-Seite"],not:["in der Abteilung","Tabelle Abteilung"]},
{t:"open",short:true,p:2,q:"Mit welchem Symbol wird ein Entitätstyp im ER-Diagramm dargestellt?",a:"Rechteck",keys:["Rechteck","Kasten"]},
{t:"open",p:3,q:"Nennen Sie für die Spalten Name, Geburtsdatum und Monatsgehalt jeweils einen geeigneten Datentyp.",a:"Name: Text/Zeichenkette (1). Geburtsdatum: Datum (1). Monatsgehalt: Dezimalzahl (1)."},
{t:"open",p:4,q:"Mitarbeitende besuchen mehrere Schulungen, an einer Schulung nehmen mehrere Mitarbeitende teil. Beschreiben Sie, wie diese Beziehung in Tabellen umgesetzt wird.",a:"Es ist eine n:m-Beziehung (1). Sie wird über eine Zwischentabelle aufgelöst, z. B. Teilnahme (1). Diese enthält die Primärschlüssel beider Tabellen als Fremdschlüssel: MitarbeiterNr und SchulungsNr (1); zusammen bilden sie den Primärschlüssel, weitere Spalten wie das Datum sind möglich (1)."}
]});
