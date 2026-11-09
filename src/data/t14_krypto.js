T.push({
id:"krypto", title:"Kryptografie & Hashverfahren", icon:"🔐", area:"Sicherheit", weight:3,
summary:"Symmetrisch, asymmetrisch, hybrid, Hash, Salt, digitale Signatur, Zertifikate/PKI, TLS/HTTPS.",
lesson:`
<h3>Symmetrische Verschlüsselung</h3>
<p>Ein <b>gemeinsamer geheimer Schlüssel</b> zum Ver- und Entschlüsseln. Verfahren: <b>AES</b> (128/192/256 Bit – Standard), ChaCha20; veraltet: DES, 3DES, RC4.</p>
<ul><li>+ sehr schnell, geeignet für große Datenmengen (Festplatten, Datenströme).</li>
<li>− <b>Schlüsselaustauschproblem</b>: Der Schlüssel muss sicher übertragen werden. − Viele Schlüssel nötig: n·(n−1)/2 bei n Teilnehmern.</li></ul>
<h3>Asymmetrische Verschlüsselung (Public-Key)</h3>
<p>Jeder Teilnehmer hat ein <b>Schlüsselpaar</b>: <b>öffentlicher Schlüssel</b> (darf jeder kennen) und <b>privater Schlüssel</b> (bleibt geheim). Verfahren: <b>RSA</b>, ECC (elliptische Kurven), Diffie-Hellman (Schlüsselaustausch).</p>
<div class="merke"><b>Verschlüsseln</b>: Absender nimmt den <b>öffentlichen Schlüssel des Empfängers</b> → nur der Empfänger entschlüsselt mit seinem <b>privaten</b> Schlüssel.<br><b>Signieren</b>: Absender signiert mit seinem <b>privaten Schlüssel</b> → jeder prüft mit dem <b>öffentlichen Schlüssel des Absenders</b>.</div>
<ul><li>+ kein geheimer Schlüsselaustausch nötig, nur 2n Schlüssel, ermöglicht Signaturen.</li>
<li>− langsam (ca. 1000× langsamer als symmetrisch), Echtheit des öffentlichen Schlüssels muss sichergestellt sein (→ Zertifikate).</li></ul>
<h3>Hybride Verschlüsselung</h3>
<p>Kombiniert beide Vorteile: Ein zufälliger <b>symmetrischer Sitzungsschlüssel</b> verschlüsselt die Daten (schnell); dieser Sitzungsschlüssel wird <b>asymmetrisch</b> mit dem öffentlichen Schlüssel des Empfängers übertragen (sicherer Austausch). Einsatz: <b>TLS/HTTPS</b>, S/MIME, PGP, VPN.</p>
<h3>Hashfunktionen</h3>
<p>Berechnen aus beliebig langen Daten einen <b>Hashwert fester Länge</b> (Fingerabdruck). Eigenschaften: <b>Einwegfunktion</b> (nicht umkehrbar), deterministisch, kleine Änderung → völlig anderer Hash (Lawineneffekt), <b>kollisionsresistent</b>.</p>
<table><tr><th>Verfahren</th><th>Länge</th><th>Status</th></tr>
<tr><td>MD5</td><td>128 Bit</td><td>gebrochen – nicht für Sicherheit</td></tr>
<tr><td>SHA-1</td><td>160 Bit</td><td>gebrochen (Kollisionen)</td></tr>
<tr><td>SHA-256 / SHA-512 (SHA-2)</td><td>256 / 512 Bit</td><td>sicher, Standard</td></tr>
<tr><td>SHA-3</td><td>variabel</td><td>sicher</td></tr>
<tr><td>bcrypt, scrypt, Argon2, PBKDF2</td><td>–</td><td>speziell für Passwörter (absichtlich langsam)</td></tr></table>
<p><b>Einsatz</b>: Integritätsprüfung von Downloads (Prüfsumme vergleichen), Passwortspeicherung, digitale Signaturen, Blockchain.<br><b>Passwörter</b> werden nie im Klartext und nicht verschlüsselt, sondern als <b>gesalzener Hash</b> gespeichert. <b>Salt</b> = zufälliger Wert pro Benutzer, der vor dem Hashen angehängt wird → gleiche Passwörter ergeben unterschiedliche Hashes, <b>Rainbow Tables</b> werden nutzlos. Pepper = zusätzlicher geheimer Wert (serverweit).</p>
<div class="warn">Hashing ≠ Verschlüsselung! Verschlüsselung ist mit dem Schlüssel umkehrbar, ein Hash nicht.</div>
<h3>Digitale Signatur</h3>
<ol><li>Absender bildet den Hashwert des Dokuments.</li>
<li>Er verschlüsselt diesen Hash mit seinem <b>privaten Schlüssel</b> → Signatur.</li>
<li>Empfänger entschlüsselt die Signatur mit dem <b>öffentlichen Schlüssel</b> des Absenders und erhält den Hash.</li>
<li>Empfänger bildet selbst den Hash des Dokuments und vergleicht – stimmen beide überein, sind <b>Integrität</b> und <b>Authentizität</b> (und Nichtabstreitbarkeit) bestätigt.</li></ol>
<p>Eine Signatur sorgt <b>nicht</b> für Vertraulichkeit – das Dokument bleibt lesbar. eIDAS: einfache, fortgeschrittene, <b>qualifizierte</b> elektronische Signatur (ersetzt Schriftform).</p>
<h3>Zertifikate & PKI</h3>
<p>Ein <b>digitales Zertifikat</b> (Standard <b>X.509</b>) bestätigt, dass ein öffentlicher Schlüssel zu einer bestimmten Person/Domain gehört. Inhalt: Inhaber, öffentlicher Schlüssel, Aussteller (CA), Gültigkeitszeitraum, Seriennummer, Verwendungszweck, <b>Signatur der CA</b>.</p>
<ul><li><b>CA</b> (Certificate Authority): vertrauenswürdige Zertifizierungsstelle, signiert Zertifikate. <b>Root-CA</b> → Intermediate-CA → Endzertifikat = <b>Vertrauenskette</b>. Root-Zertifikate sind im Browser/OS hinterlegt.</li>
<li><b>RA</b> (Registration Authority): prüft die Identität des Antragstellers.</li>
<li>Sperrung: <b>CRL</b> (Sperrliste), <b>OCSP</b> (Online-Statusabfrage).</li>
<li><b>PKI</b> (Public Key Infrastructure): Gesamtsystem aus CA, RA, Verzeichnisdienst, Sperrdiensten, Richtlinien.</li>
<li>Selbstsigniertes Zertifikat: Browserwarnung, nur intern/Test.</li></ul>
<h3>TLS / HTTPS (vereinfacht)</h3>
<ol><li>Client verbindet sich, Server sendet sein <b>Zertifikat</b>.</li>
<li>Client prüft Zertifikat (gültig, vertrauenswürdige CA, Domain passt).</li>
<li>Schlüsselaustausch (asymmetrisch, heute meist ECDHE) → gemeinsamer <b>symmetrischer Sitzungsschlüssel</b>.</li>
<li>Datenübertragung symmetrisch verschlüsselt (AES-GCM, ChaCha20) mit Integritätsschutz.</li></ol>
<p>Aktuell: <b>TLS 1.3</b> (1.2 noch akzeptiert; SSL, TLS 1.0/1.1 veraltet). Schützt Vertraulichkeit, Integrität und Server-Authentizität. Weitere Einsatzorte: SMTPS/IMAPS, LDAPS, VPN (SSL-VPN).</p>
<h3>Verschlüsselung am Arbeitsplatz</h3>
<p><b>Festplatte</b>: BitLocker (Windows, mit TPM), FileVault (macOS), LUKS (Linux). <b>E-Mail</b>: S/MIME (Zertifikate), PGP/GPG (Web of Trust); Transportverschlüsselung (TLS) vs. Ende-zu-Ende-Verschlüsselung (nur Sender/Empfänger können lesen).</p>`,
cards:[
["Symmetrische Verschlüsselung","Ein gemeinsamer Schlüssel; schnell; Problem: sicherer Schlüsselaustausch. Beispiel AES."],
["Asymmetrische Verschlüsselung","Schlüsselpaar (öffentlich/privat); kein geheimer Austausch nötig; langsam. Beispiel RSA, ECC."],
["Mit welchem Schlüssel verschlüsselt man eine Nachricht an Bob?","Mit Bobs öffentlichem Schlüssel."],
["Mit welchem Schlüssel wird signiert?","Mit dem eigenen privaten Schlüssel; geprüft wird mit dem öffentlichen."],
["Hybride Verschlüsselung","Daten symmetrisch (schnell), Sitzungsschlüssel asymmetrisch übertragen (sicherer Austausch). Z. B. TLS."],
["Anzahl Schlüssel symmetrisch bei n Teilnehmern","n · (n − 1) / 2."],
["Anzahl Schlüssel asymmetrisch bei n Teilnehmern","2n (je ein Schlüsselpaar)."],
["Eigenschaften einer Hashfunktion","Feste Ausgabelänge, Einwegfunktion, deterministisch, Lawineneffekt, kollisionsresistent."],
["Unsichere Hashverfahren","MD5 und SHA-1."],
["Salt","Zufallswert pro Passwort vor dem Hashen → gleiche Passwörter, verschiedene Hashes; macht Rainbow Tables nutzlos."],
["Rainbow Table","Vorberechnete Tabelle von Hashwerten zum schnellen Knacken ungesalzener Passwort-Hashes."],
["Wie werden Passwörter sicher gespeichert?","Als gesalzener Hash mit langsamem Verfahren (bcrypt, Argon2, PBKDF2)."],
["Ablauf digitale Signatur","Hash bilden → mit privatem Schlüssel signieren → Empfänger prüft mit öffentlichem Schlüssel und vergleicht Hashes."],
["Was garantiert eine digitale Signatur?","Integrität, Authentizität, Nichtabstreitbarkeit – aber keine Vertraulichkeit."],
["Inhalt eines X.509-Zertifikats","Inhaber, öffentlicher Schlüssel, Aussteller, Gültigkeit, Seriennummer, Signatur der CA."],
["CA","Certificate Authority – vertrauenswürdige Stelle, die Zertifikate ausstellt und signiert."],
["CRL / OCSP","Sperrliste / Online-Abfrage des Zertifikatsstatus."],
["PKI","Public Key Infrastructure: CA, RA, Verzeichnisse, Sperrdienste, Richtlinien."],
["Aktuelle TLS-Version","TLS 1.3 (1.2 noch zulässig)."],
["Transport- vs. Ende-zu-Ende-Verschlüsselung","Transport: nur zwischen Servern/Hops verschlüsselt. E2E: nur Sender und Empfänger können lesen."],
["BitLocker","Windows-Festplattenverschlüsselung, Schlüssel im TPM; schützt bei Diebstahl."]
],
qs:[
{t:"sc",q:"Alice möchte Bob eine vertrauliche Datei asymmetrisch verschlüsselt senden. Welchen Schlüssel verwendet sie?",o:["Ihren privaten","Ihren öffentlichen","Bobs öffentlichen","Bobs privaten"],a:2,e:"Nur Bob kann dann mit seinem privaten Schlüssel entschlüsseln."},
{t:"sc",q:"Mit welchem Schlüssel prüft Bob die digitale Signatur von Alice?",o:["Alices öffentlichem Schlüssel","Alices privatem Schlüssel","Bobs privatem Schlüssel","Einem Sitzungsschlüssel"],a:0,e:""},
{t:"sc",q:"Welches Verfahren ist symmetrisch?",o:["RSA","AES","ECC","Diffie-Hellman"],a:1,e:""},
{t:"num",q:"Wie viele Schlüssel braucht man, wenn 10 Personen paarweise symmetrisch verschlüsselt kommunizieren wollen?",a:45,unit:"",e:"10 × 9 / 2 = 45."},
{t:"num",q:"Wie viele Schlüssel braucht man bei 10 Personen mit asymmetrischer Verschlüsselung?",a:20,unit:"",e:"2 × 10 = 20 (10 Schlüsselpaare)."},
{t:"sc",q:"Warum nutzt TLS ein hybrides Verfahren?",o:["Weil symmetrische Verfahren unsicher sind","Um die Geschwindigkeit symmetrischer und den sicheren Schlüsselaustausch asymmetrischer Verfahren zu kombinieren","Weil asymmetrische Verfahren schneller sind","Wegen der Kompatibilität mit FTP"],a:1,e:""},
{t:"sc",q:"Welche Hashfunktion gilt als sicher?",o:["MD5","SHA-1","SHA-256","CRC32"],a:2,e:"MD5/SHA-1 sind gebrochen, CRC ist nur eine Prüfsumme."},
{t:"sc",q:"Wozu dient ein Salt bei der Passwortspeicherung?",o:["Verschlüsselt das Passwort","Gleiche Passwörter ergeben unterschiedliche Hashes, Rainbow Tables werden nutzlos","Verkürzt den Hash","Macht Hashes umkehrbar"],a:1,e:""},
{t:"sc",q:"Welche Eigenschaft hat eine kryptografische Hashfunktion NICHT?",o:["Feste Ausgabelänge","Umkehrbarkeit mit Schlüssel","Lawineneffekt","Kollisionsresistenz"],a:1,e:"Hashes sind Einwegfunktionen."},
{t:"mc",q:"Welche Schutzziele erfüllt eine digitale Signatur? (mehrere)",o:["Integrität","Vertraulichkeit","Authentizität","Nichtabstreitbarkeit"],a:[0,2,3],e:"Der Inhalt bleibt lesbar – keine Vertraulichkeit."},
{t:"sc",q:"Wer bestätigt in einer PKI, dass ein öffentlicher Schlüssel zu einer Domain gehört?",o:["Der Browser","Die Certificate Authority (CA)","Der DNS-Server","Der Router"],a:1,e:""},
{t:"sc",q:"Ein Download wird mit einer veröffentlichten SHA-256-Prüfsumme verglichen. Welches Schutzziel wird geprüft?",o:["Verfügbarkeit","Integrität","Vertraulichkeit","Anonymität"],a:1,e:""},
{t:"sc",q:"Welche TLS-Version sollte heute bevorzugt eingesetzt werden?",o:["SSL 3.0","TLS 1.0","TLS 1.1","TLS 1.3"],a:3,e:""},
{t:"open",q:"Erläutern Sie das Prinzip der hybriden Verschlüsselung und nennen Sie ein Einsatzbeispiel. (4 Punkte)",p:4,a:"Die Nutzdaten werden mit einem zufällig erzeugten symmetrischen Sitzungsschlüssel verschlüsselt, weil dies schnell ist (1). Der Sitzungsschlüssel wird mit dem öffentlichen Schlüssel des Empfängers asymmetrisch verschlüsselt übertragen; nur der Empfänger kann ihn mit seinem privaten Schlüssel entschlüsseln (1). So werden Geschwindigkeit und sicherer Schlüsselaustausch kombiniert (1). Beispiel: TLS/HTTPS, S/MIME, PGP (1)."},
{t:"open",q:"Beschreiben Sie, wie eine digitale Signatur erstellt und geprüft wird. (4 Punkte)",p:4,a:"Erstellen: Der Absender bildet den Hashwert des Dokuments (1) und verschlüsselt diesen mit seinem privaten Schlüssel → Signatur (1). Prüfen: Der Empfänger entschlüsselt die Signatur mit dem öffentlichen Schlüssel des Absenders (1), bildet selbst den Hash des empfangenen Dokuments und vergleicht beide Werte – Gleichheit bestätigt Integrität und Authentizität (1)."},
{t:"open",q:"Ein Entwickler speichert Benutzerpasswörter mit MD5 ohne Salt. Bewerten Sie dies und schlagen Sie eine bessere Lösung vor. (4 Punkte)",p:4,a:"MD5 ist veraltet/gebrochen und sehr schnell berechenbar → Brute-Force möglich (1). Ohne Salt erzeugen gleiche Passwörter gleiche Hashes und Rainbow Tables können eingesetzt werden (1). Besser: Passwort-Hashverfahren wie Argon2, bcrypt oder PBKDF2 (1) mit individuellem zufälligem Salt pro Benutzer (ggf. Pepper) (1)."}
]
});
