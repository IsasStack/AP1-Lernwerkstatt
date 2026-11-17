import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
def defs(m,c=TX2): return f'<marker id="{m}" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{c}"/></marker>'
def flow():
    o=[f'<defs>{defs("ds-a")}</defs>']
    qs=[("Sind es personenbezogene Daten?","nein → DSGVO gilt nicht (z. B. anonyme Statistik)"),
        ("Gibt es eine Rechtsgrundlage (Art. 6)?","nein → Verarbeitung verboten"),
        ("Werden die Grundsätze eingehalten (Art. 5)?","nein → anpassen: Zweck festlegen, weniger Daten, Löschfrist"),
        ("Sind TOM umgesetzt (Art. 32)?","nein → Schutzmaßnahmen ergänzen")]
    for i,(q,n) in enumerate(qs):
        y=10+i*66
        o.append(f'<rect x="10" y="{y}" width="300" height="42" rx="21" fill="{BOX}" stroke="{CY}" stroke-width="1.5"/>'); o.append(txt(160,y+26,q,size=11.5,weight=600))
        o.append(f'<line x1="310" y1="{y+21}" x2="348" y2="{y+21}" stroke="{RD}" stroke-width="1.6" marker-end="url(#ds-a)"/>'); o.append(txt(355,y+25,n,size=11,fill=RD,anchor="start"))
        o.append(f'<line x1="160" y1="{y+42}" x2="160" y2="{y+64}" stroke="{GR}" stroke-width="1.6" marker-end="url(#ds-a)"/>'); o.append(txt(168,y+57,"ja",size=10.5,fill=GR,anchor="start"))
    y=10+4*66
    o.append(f'<rect x="10" y="{y}" width="300" height="42" rx="8" fill="{BOX}" stroke="{GR}" stroke-width="1.8"/>'); o.append(txt(160,y+26,"Verarbeitung zulässig – dokumentieren (Art. 30)",size=11.5,weight=700,fill=GR))
    return svg_wrap(720,y+50,o,"Prüfschema: Darf ich diese Daten verarbeiten?",560)
json.dump({"FLOW":flow()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_ds.json"),"w"),ensure_ascii=False)
