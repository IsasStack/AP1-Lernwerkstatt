# Quellen der Lerntexte

- `lNN_<thema>.html` – Lerntext eines Themas (HTML mit Platzhaltern `{{NAME}}` für Diagramme)
- `svg_*.py` – erzeugen die Diagramme als `svg_*.json`
- `mk.py` – baut daraus `../data/zzl_NN_<thema>.js`

```
cd src/gen
python3 svg_projekt.py          # nur nach Änderung eines Diagramms
python3 mk.py 02_projekt        # Lerntext neu bauen
cd .. && python3 build.py
```
