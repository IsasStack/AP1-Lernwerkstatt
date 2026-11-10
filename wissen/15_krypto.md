# 🔐 Kryptografie & Hashverfahren

*Bereich: Sicherheit · Prüfungsrelevanz: ★★★*

> Symmetrisch, asymmetrisch, hybrid, Hash, Salt, digitale Signatur, Zertifikate/PKI, TLS/HTTPS.

[⬅ Inhaltsverzeichnis](README.md)

---

## Symmetrische Verschlüsselung

Ein **gemeinsamer geheimer Schlüssel** zum Ver- und Entschlüsseln. Verfahren: **AES** (128/192/256 Bit – Standard), ChaCha20; veraltet: DES, 3DES, RC4.

- + sehr schnell, geeignet für große Datenmengen (Festplatten, Datenströme).
- − **Schlüsselaustauschproblem**: Der Schlüssel muss sicher übertragen werden. − Viele Schlüssel nötig: n·(n−1)/2 bei n Teilnehmern.

## Asymmetrische Verschlüsselung (Public-Key)

Jeder Teilnehmer hat ein **Schlüsselpaar**: **öffentlicher Schlüssel** (darf jeder kennen) und **privater Schlüssel** (bleibt geheim). Verfahren: **RSA**, ECC (elliptische Kurven), Diffie-Hellman (Schlüsselaustausch).

> [!IMPORTANT]
> **Verschlüsseln**: Absender nimmt den **öffentlichen Schlüssel des Empfängers** → nur der Empfänger entschlüsselt mit seinem **privaten** Schlüssel.  
> **Signieren**: Absender signiert mit seinem **privaten Schlüssel** → jeder prüft mit dem **öffentlichen Schlüssel des Absenders**.

- + kein geheimer Schlüsselaustausch nötig, nur 2n Schlüssel, ermöglicht Signaturen.
- − langsam (ca. 1000× langsamer als symmetrisch), Echtheit des öffentlichen Schlüssels muss sichergestellt sein (→ Zertifikate).

## Hybride Verschlüsselung

Kombiniert beide Vorteile: Ein zufälliger **symmetrischer Sitzungsschlüssel** verschlüsselt die Daten (schnell); dieser Sitzungsschlüssel wird **asymmetrisch** mit dem öffentlichen Schlüssel des Empfängers übertragen (sicherer Austausch). Einsatz: **TLS/HTTPS**, S/MIME, PGP, VPN.

## Hashfunktionen

Berechnen aus beliebig langen Daten einen **Hashwert fester Länge** (Fingerabdruck). Eigenschaften: **Einwegfunktion** (nicht umkehrbar), deterministisch, kleine Änderung → völlig anderer Hash (Lawineneffekt), **kollisionsresistent**.

<table><tr><th>Verfahren</th><th>Länge</th><th>Status</th></tr>
<tr><td>MD5</td><td>128 Bit</td><td>gebrochen – nicht für Sicherheit</td></tr>
<tr><td>SHA-1</td><td>160 Bit</td><td>gebrochen (Kollisionen)</td></tr>
<tr><td>SHA-256 / SHA-512 (SHA-2)</td><td>256 / 512 Bit</td><td>sicher, Standard</td></tr>
<tr><td>SHA-3</td><td>variabel</td><td>sicher</td></tr>
<tr><td>bcrypt, scrypt, Argon2, PBKDF2</td><td>–</td><td>speziell für Passwörter (absichtlich langsam)</td></tr></table>

**Einsatz**: Integritätsprüfung von Downloads (Prüfsumme vergleichen), Passwortspeicherung, digitale Signaturen, Blockchain.  
**Passwörter** werden nie im Klartext und nicht verschlüsselt, sondern als **gesalzener Hash** gespeichert. **Salt** = zufälliger Wert pro Benutzer, der vor dem Hashen angehängt wird → gleiche Passwörter ergeben unterschiedliche Hashes, **Rainbow Tables** werden nutzlos. Pepper = zusätzlicher geheimer Wert (serverweit).

> [!WARNING]
> Hashing ≠ Verschlüsselung! Verschlüsselung ist mit dem Schlüssel umkehrbar, ein Hash nicht.

## Digitale Signatur

1. Absender bildet den Hashwert des Dokuments.
2. Er verschlüsselt diesen Hash mit seinem **privaten Schlüssel** → Signatur.
3. Empfänger entschlüsselt die Signatur mit dem **öffentlichen Schlüssel** des Absenders und erhält den Hash.
4. Empfänger bildet selbst den Hash des Dokuments und vergleicht – stimmen beide überein, sind **Integrität** und **Authentizität** (und Nichtabstreitbarkeit) bestätigt.

Eine Signatur sorgt **nicht** für Vertraulichkeit – das Dokument bleibt lesbar. eIDAS: einfache, fortgeschrittene, **qualifizierte** elektronische Signatur (ersetzt Schriftform).

## Zertifikate & PKI

Ein **digitales Zertifikat** (Standard **X.509**) bestätigt, dass ein öffentlicher Schlüssel zu einer bestimmten Person/Domain gehört. Inhalt: Inhaber, öffentlicher Schlüssel, Aussteller (CA), Gültigkeitszeitraum, Seriennummer, Verwendungszweck, **Signatur der CA**.

- **CA** (Certificate Authority): vertrauenswürdige Zertifizierungsstelle, signiert Zertifikate. **Root-CA** → Intermediate-CA → Endzertifikat = **Vertrauenskette**. Root-Zertifikate sind im Browser/OS hinterlegt.
- **RA** (Registration Authority): prüft die Identität des Antragstellers.
- Sperrung: **CRL** (Sperrliste), **OCSP** (Online-Statusabfrage).
- **PKI** (Public Key Infrastructure): Gesamtsystem aus CA, RA, Verzeichnisdienst, Sperrdiensten, Richtlinien.
- Selbstsigniertes Zertifikat: Browserwarnung, nur intern/Test.

## TLS / HTTPS (vereinfacht)

1. Client verbindet sich, Server sendet sein **Zertifikat**.
2. Client prüft Zertifikat (gültig, vertrauenswürdige CA, Domain passt).
3. Schlüsselaustausch (asymmetrisch, heute meist ECDHE) → gemeinsamer **symmetrischer Sitzungsschlüssel**.
4. Datenübertragung symmetrisch verschlüsselt (AES-GCM, ChaCha20) mit Integritätsschutz.

Aktuell: **TLS 1.3** (1.2 noch akzeptiert; SSL, TLS 1.0/1.1 veraltet). Schützt Vertraulichkeit, Integrität und Server-Authentizität. Weitere Einsatzorte: SMTPS/IMAPS, LDAPS, VPN (SSL-VPN).

## Verschlüsselung am Arbeitsplatz

**Festplatte**: BitLocker (Windows, mit TPM), FileVault (macOS), LUKS (Linux). **E-Mail**: S/MIME (Zertifikate), PGP/GPG (Web of Trust); Transportverschlüsselung (TLS) vs. Ende-zu-Ende-Verschlüsselung (nur Sender/Empfänger können lesen).

---

## 🃏 Karteikarten (21)

| Frage | Antwort |
|---|---|
| Symmetrische Verschlüsselung | Ein gemeinsamer Schlüssel; schnell; Problem: sicherer Schlüsselaustausch. Beispiel AES. |
| Asymmetrische Verschlüsselung | Schlüsselpaar (öffentlich/privat); kein geheimer Austausch nötig; langsam. Beispiel RSA, ECC. |
| Mit welchem Schlüssel verschlüsselt man eine Nachricht an Bob? | Mit Bobs öffentlichem Schlüssel. |
| Mit welchem Schlüssel wird signiert? | Mit dem eigenen privaten Schlüssel; geprüft wird mit dem öffentlichen. |
| Hybride Verschlüsselung | Daten symmetrisch (schnell), Sitzungsschlüssel asymmetrisch übertragen (sicherer Austausch). Z. B. TLS. |
| Anzahl Schlüssel symmetrisch bei n Teilnehmern | n · (n − 1) / 2. |
| Anzahl Schlüssel asymmetrisch bei n Teilnehmern | 2n (je ein Schlüsselpaar). |
| Eigenschaften einer Hashfunktion | Feste Ausgabelänge, Einwegfunktion, deterministisch, Lawineneffekt, kollisionsresistent. |
| Unsichere Hashverfahren | MD5 und SHA-1. |
| Salt | Zufallswert pro Passwort vor dem Hashen → gleiche Passwörter, verschiedene Hashes; macht Rainbow Tables nutzlos. |
| Rainbow Table | Vorberechnete Tabelle von Hashwerten zum schnellen Knacken ungesalzener Passwort-Hashes. |
| Wie werden Passwörter sicher gespeichert? | Als gesalzener Hash mit langsamem Verfahren (bcrypt, Argon2, PBKDF2). |
| Ablauf digitale Signatur | Hash bilden → mit privatem Schlüssel signieren → Empfänger prüft mit öffentlichem Schlüssel und vergleicht Hashes. |
| Was garantiert eine digitale Signatur? | Integrität, Authentizität, Nichtabstreitbarkeit – aber keine Vertraulichkeit. |
| Inhalt eines X.509-Zertifikats | Inhaber, öffentlicher Schlüssel, Aussteller, Gültigkeit, Seriennummer, Signatur der CA. |
| CA | Certificate Authority – vertrauenswürdige Stelle, die Zertifikate ausstellt und signiert. |
| CRL / OCSP | Sperrliste / Online-Abfrage des Zertifikatsstatus. |
| PKI | Public Key Infrastructure: CA, RA, Verzeichnisse, Sperrdienste, Richtlinien. |
| Aktuelle TLS-Version | TLS 1.3 (1.2 noch zulässig). |
| Transport- vs. Ende-zu-Ende-Verschlüsselung | Transport: nur zwischen Servern/Hops verschlüsselt. E2E: nur Sender und Empfänger können lesen. |
| BitLocker | Windows-Festplattenverschlüsselung, Schlüssel im TPM; schützt bei Diebstahl. |

## ✍️ Übungsfragen (16)

**1.** Alice möchte Bob eine vertrauliche Datei asymmetrisch verschlüsselt senden. Welchen Schlüssel verwendet sie?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Bobs öffentlichen<br>Nur Bob kann dann mit seinem privaten Schlüssel entschlüsseln.

</details>

**2.** Mit welchem Schlüssel prüft Bob die digitale Signatur von Alice?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Alices öffentlichem Schlüssel

</details>

**3.** Nennen Sie ein symmetrisches Verschlüsselungsverfahren.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** AES (Advanced Encryption Standard)

</details>

**4.** Wie viele Schlüssel braucht man, wenn 10 Personen paarweise symmetrisch verschlüsselt kommunizieren wollen?

<details><summary>Lösung</summary>

**45**<br>10 × 9 / 2 = 45.

</details>

**5.** Wie viele Schlüssel braucht man bei 10 Personen mit asymmetrischer Verschlüsselung?

<details><summary>Lösung</summary>

**20**<br>2 × 10 = 20 (10 Schlüsselpaare).

</details>

**6.** Warum nutzt TLS ein hybrides Verfahren?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Um die Geschwindigkeit symmetrischer und den sicheren Schlüsselaustausch asymmetrischer Verfahren zu kombinieren

</details>

**7.** Nennen Sie eine Hashfunktion, die heute als sicher gilt.

<details><summary>Lösung</summary>

**Musterlösung (2 P):** SHA-256 (SHA-2-Familie) oder SHA-3<br>MD5/SHA-1 sind gebrochen, CRC ist nur eine Prüfsumme.

</details>

**8.** Wozu dient ein Salt bei der Passwortspeicherung?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Gleiche Passwörter ergeben unterschiedliche Hashes, Rainbow Tables werden nutzlos

</details>

**9.** Nennen Sie drei Eigenschaften einer kryptografischen Hashfunktion.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1: feste Ausgabelänge unabhängig von der Eingabe; Einwegfunktion (nicht umkehrbar); deterministisch (gleiche Eingabe → gleicher Hash); Lawineneffekt (kleine Änderung → völlig anderer Hash); kollisionsresistent.<br>Hashes sind Einwegfunktionen.

</details>

**10.** Welche Schutzziele erfüllt eine digitale Signatur? Nennen Sie drei.

<details><summary>Lösung</summary>

**Musterlösung (3 P):** Je 1 Punkt (max. 3): Integrität; Authentizität; Nichtabstreitbarkeit. Der Inhalt bleibt lesbar – keine Vertraulichkeit.

</details>

**11.** Wer bestätigt in einer PKI, dass ein öffentlicher Schlüssel zu einer Domain gehört?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Die Certificate Authority (CA)

</details>

**12.** Ein Download wird mit einer veröffentlichten SHA-256-Prüfsumme verglichen. Welches Schutzziel wird geprüft?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** Integrität

</details>

**13.** Welche TLS-Version sollte heute bevorzugt eingesetzt werden?

<details><summary>Lösung</summary>

**Musterlösung (2 P):** TLS 1.3

</details>

**14.** Erläutern Sie das Prinzip der hybriden Verschlüsselung und nennen Sie ein Einsatzbeispiel. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Die Nutzdaten werden mit einem zufällig erzeugten symmetrischen Sitzungsschlüssel verschlüsselt, weil dies schnell ist (1). Der Sitzungsschlüssel wird mit dem öffentlichen Schlüssel des Empfängers asymmetrisch verschlüsselt übertragen; nur der Empfänger kann ihn mit seinem privaten Schlüssel entschlüsseln (1). So werden Geschwindigkeit und sicherer Schlüsselaustausch kombiniert (1). Beispiel: TLS/HTTPS, S/MIME, PGP (1).

</details>

**15.** Beschreiben Sie, wie eine digitale Signatur erstellt und geprüft wird. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** Erstellen: Der Absender bildet den Hashwert des Dokuments (1) und verschlüsselt diesen mit seinem privaten Schlüssel → Signatur (1). Prüfen: Der Empfänger entschlüsselt die Signatur mit dem öffentlichen Schlüssel des Absenders (1), bildet selbst den Hash des empfangenen Dokuments und vergleicht beide Werte – Gleichheit bestätigt Integrität und Authentizität (1).

</details>

**16.** Ein Entwickler speichert Benutzerpasswörter mit MD5 ohne Salt. Bewerten Sie dies und schlagen Sie eine bessere Lösung vor. (4 Punkte)

<details><summary>Lösung</summary>

**Musterlösung (4 P):** MD5 ist veraltet/gebrochen und sehr schnell berechenbar → Brute-Force möglich (1). Ohne Salt erzeugen gleiche Passwörter gleiche Hashes und Rainbow Tables können eingesetzt werden (1). Besser: Passwort-Hashverfahren wie Argon2, bcrypt oder PBKDF2 (1) mit individuellem zufälligem Salt pro Benutzer (ggf. Pepper) (1).

</details>


[⬅ Inhaltsverzeichnis](README.md)
