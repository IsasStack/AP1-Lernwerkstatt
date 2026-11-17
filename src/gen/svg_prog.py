import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def defs(m,c=TX2): return f'<marker id="{m}" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{c}"/></marker>'
def act(o,x,y,w,t,c=CY):
    o.append(f'<rect x="{x-w/2}" y="{y}" width="{w}" height="34" rx="14" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>'); o.append(txt(x,y+21,t,size=11.5))
def dia(o,x,y,c=AM):
    o.append(f'<polygon points="{x},{y} {x+16},{y+16} {x},{y+32} {x-16},{y+16}" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>')
def ar(o,pts,c=TX2):
    d="M"+" L".join(f"{a},{b}" for a,b in pts)
    o.append(f'<path d="{d}" fill="none" stroke="{c}" stroke-width="1.5" marker-end="url(#pg-a)"/>')
def login():
    o=[f'<defs>{defs("pg-a")}</defs>']
    X=230
    o.append(f'<circle cx="{X}" cy="18" r="9" fill="{TX}"/>')
    ar(o,[(X,27),(X,46)])
    act(o,X,48,180,"versuche ← 0")
    ar(o,[(X,82),(X,98)])
    dia(o,X,100,TX2); o.append(txt(X+24,112,"Merge",size=10,fill=TX2,anchor="start"))
    ar(o,[(X,132),(X,148)])
    act(o,X,150,200,"Passwort eingeben")
    ar(o,[(X,184),(X,198)])
    act(o,X,200,200,"versuche ← versuche + 1")
    ar(o,[(X,234),(X,248)])
    dia(o,X,250)
    ar(o,[(X+16,266),(420,266),(420,288)]); o.append(txt(318,259,"[Passwort korrekt]",size=10.5,fill=GR))
    act(o,420,290,150,"Anmelden",GR)
    ar(o,[(420,324),(420,346)]); o.append(f'<circle cx="420" cy="356" r="10" fill="none" stroke="{TX}" stroke-width="2"/><circle cx="420" cy="356" r="6" fill="{TX}"/>')
    ar(o,[(X,282),(X,300)]); o.append(txt(X-8,295,"[falsch]",size=10.5,fill=RD,anchor="end"))
    dia(o,X,302)
    ar(o,[(X-16,318),(60,318),(60,116),(X-18,116)]); o.append(txt(70,311,"[versuche &lt; 3]",size=10.5,fill=AM,anchor="start"))
    ar(o,[(X,334),(X,350)]); o.append(txt(X+8,345,"[versuche = 3]",size=10.5,fill=RD,anchor="start"))
    act(o,X,352,160,"Konto sperren",RD)
    ar(o,[(X,386),(X,398)]); o.append(f'<circle cx="{X}" cy="408" r="10" fill="none" stroke="{TX}" stroke-width="2"/><circle cx="{X}" cy="408" r="6" fill="{TX}"/>')
    return svg_wrap(520,424,o,"UML-Aktivitätsdiagramm Anmeldung mit höchstens drei Versuchen",420,520)
def klasse():
    o=[]
    x,y,w=30,10,250
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="150" rx="3" fill="{BOX}" stroke="{CY}" stroke-width="1.6"/>')
    o.append(txt(x+w/2,y+22,"Notebook",weight=700))
    o.append(f'<line x1="{x}" y1="{y+32}" x2="{x+w}" y2="{y+32}" stroke="{CY}"/><line x1="{x}" y1="{y+92}" x2="{x+w}" y2="{y+92}" stroke="{CY}"/>')
    for i,t in enumerate(["- seriennummer: String","- ramGB: Integer","- eingeschaltet: Boolean"]):
        o.append(f'<text x="{x+10}" y="{y+50+i*18}" fill="{TX}" font-size="11.5" font-family="monospace">{t}</text>')
    for i,t in enumerate(["+ starten(): void","+ getRamGB(): Integer","+ setRamGB(gb: Integer): void"]):
        o.append(f'<text x="{x+10}" y="{y+110+i*18}" fill="{TX}" font-size="11.5" font-family="monospace">{t}</text>')
    notes=[(y+22,"Klassenname"),(y+68,"Attribute: Sichtbarkeit Name: Datentyp"),(y+128,"Methoden: Sichtbarkeit Name(Parameter): Rückgabetyp")]
    for yy,t in notes:
        o.append(f'<line x1="{x+w+6}" y1="{yy-4}" x2="{x+w+30}" y2="{yy-4}" stroke="{TX2}"/>'); o.append(txt(x+w+36,yy,t,size=11,fill=TX2,anchor="start"))
    o.append(txt(30,182,"- private (nur in der Klasse)   + public (von überall)   # protected (Klasse und Unterklassen)",size=11,fill=AM,anchor="start"))
    return svg_wrap(640,192,o,"UML-Klassendiagramm der Klasse Notebook",500)
d=json.load(open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_prog_old.json")))
d.update({"LOGIN":login(),"KLASSE":klasse()})
json.dump(d,open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_prog.json"),"w"),ensure_ascii=False)
