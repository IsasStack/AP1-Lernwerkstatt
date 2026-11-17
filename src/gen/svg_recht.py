import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def defs(m): return f'<defs><marker id="{m}" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{TX2}"/></marker></defs>'
def vertrag():
    o=[defs("vt-ar")]
    o.append(txt(110,20,"Kunde",weight=700,fill=CY)); o.append(txt(530,20,"Lieferant",weight=700,fill=AM))
    o.append(f'<line x1="110" y1="30" x2="110" y2="290" stroke="{LINE}" stroke-width="2"/>')
    o.append(f'<line x1="530" y1="30" x2="530" y2="290" stroke="{LINE}" stroke-width="2"/>')
    rows=[(60,"r","Anfrage","unverbindlich",TX2),(110,"l","Angebot","Antrag (bindend, wenn nicht „freibleibend“)",AM),
          (160,"r","Bestellung","Annahme → Vertrag geschlossen",GR),(210,"l","Auftragsbestätigung","nur nötig, wenn noch kein Vertrag besteht",TX2),
          (260,"l","Lieferung + Rechnung","Erfüllung des Vertrags",CY)]
    for y,d,a,b,c in rows:
        x1,x2=(114,524) if d=="r" else (526,116)
        o.append(f'<line x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="{c}" stroke-width="1.8" marker-end="url(#vt-ar)"/>')
        o.append(txt(320,y-8,a,weight=700,fill=c)); o.append(txt(320,y+16,b,size=11,fill=TX2))
    return svg_wrap(640,296,o,"Ablauf vom Angebot zum Vertrag",480)
json.dump({"VERTRAG":vertrag()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_recht.json"),"w"),ensure_ascii=False)
