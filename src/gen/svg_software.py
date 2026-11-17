import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def ent(o,x,y,name,attrs,c=CY,w=130):
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="40" rx="3" fill="{BOX}" stroke="{c}" stroke-width="1.6"/>')
    o.append(txt(x+w/2,y+25,name,weight=700))
    for i,(a,key) in enumerate(attrs):
        ax=x+w/2+(i-(len(attrs)-1)/2)*72; ay=y-48 if i%2==0 else y+88
        o.append(f'<line x1="{x+w/2}" y1="{y+(0 if ay<y else 40)}" x2="{ax}" y2="{ay+(14 if ay<y else -14)}" stroke="{LINE}"/>')
        o.append(f'<ellipse cx="{ax}" cy="{ay}" rx="44" ry="14" fill="{BOX}" stroke="{TX2}"/>')
        o.append(txt(ax,ay+4,a,size=10.5)+ (f'<line x1="{ax-len(a)*3}" y1="{ay+7}" x2="{ax+len(a)*3}" y2="{ay+7}" stroke="{TX}"/>' if key else ""))
def rel(o,x,y,name,c=AM):
    o.append(f'<polygon points="{x},{y-24} {x+60},{y} {x},{y+24} {x-60},{y}" fill="{BOX}" stroke="{c}" stroke-width="1.6"/>')
    o.append(txt(x,y+4,name,size=11,weight=600))
def er():
    o=[]
    ent(o,70,90,"Kunde",[("KundenNr",1),("Name",0),("Ort",0)])
    rel(o,300,110,"besitzt")
    ent(o,400,90,"Gerät",[("SerienNr",1),("Typ",0),("Kaufdatum",0)],GR)
    o.append(f'<line x1="200" y1="110" x2="240" y2="110" stroke="{TX2}" stroke-width="1.5"/>')
    o.append(f'<line x1="360" y1="110" x2="400" y2="110" stroke="{TX2}" stroke-width="1.5"/>')
    o.append(txt(215,102,"1",weight=700,fill=AM)); o.append(txt(385,102,"n",weight=700,fill=AM))
    o.append(txt(300,228,"Ein Kunde besitzt viele (n) Geräte – ein Gerät gehört genau einem (1) Kunden.",size=11,fill=TX2))
    o.append(txt(300,244,"Unterstrichen = Schlüsselattribut",size=11,fill=TX2))
    return svg_wrap(600,254,o,"ER-Diagramm Kunde besitzt Gerät mit Kardinalität 1 zu n",480)
def nm():
    o=[]
    def b(x,name,c): 
        o.append(f'<rect x="{x}" y="30" width="130" height="40" rx="3" fill="{BOX}" stroke="{c}" stroke-width="1.6"/>'); o.append(txt(x+65,55,name,weight=700))
    b(20,"Mitarbeiter",CY); b(450,"Projekt",GR); rel(o,305,50,"arbeitet in")
    o.append(f'<line x1="150" y1="50" x2="245" y2="50" stroke="{TX2}" stroke-width="1.5"/><line x1="365" y1="50" x2="450" y2="50" stroke="{TX2}" stroke-width="1.5"/>')
    o.append(txt(170,42,"n",weight=700,fill=AM)); o.append(txt(430,42,"m",weight=700,fill=AM))
    o.append(txt(300,104,"wird in der Datenbank zu",fill=TX2,size=11))
    def t(x,y,name,cols,c,w=150):
        o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{24+len(cols)*20}" rx="3" fill="{BOX}" stroke="{c}" stroke-width="1.4"/>')
        o.append(f'<rect x="{x}" y="{y}" width="{w}" height="24" rx="3" fill="{c}" fill-opacity=".18"/>')
        o.append(txt(x+w/2,y+17,name,weight=700))
        for i,(cn,k) in enumerate(cols):
            col= AM if "PK" in k else (VI if k=="FK" else TX)
            o.append(txt(x+10,y+40+i*20,cn,anchor="start",size=11.5,fill=col))
            if k: o.append(txt(x+w-10,y+40+i*20,k,anchor="end",size=10,fill=col,weight=700))
    t(10,120,"Mitarbeiter",[("MitarbeiterNr","PK"),("Name",""),("Abteilung","")],CY)
    t(215,120,"Mitarbeiter_Projekt",[("MitarbeiterNr","PK, FK"),("ProjektNr","PK, FK"),("Stunden","")],AM,170)
    t(440,120,"Projekt",[("ProjektNr","PK"),("Bezeichnung",""),("Start","")],GR)
    o.append(f'<line x1="160" y1="164" x2="215" y2="164" stroke="{VI}" stroke-width="1.5"/><line x1="385" y1="184" x2="440" y2="164" stroke="{VI}" stroke-width="1.5"/>')
    return svg_wrap(600,214,o,"n zu m Beziehung wird über eine Zwischentabelle aufgelöst",480)
def cs():
    o=[]
    def b(x,y,w,t1,t2,c):
        o.append(f'<rect x="{x}" y="{y}" width="{w}" height="54" rx="8" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>'); o.append(txt(x+w/2,y+23,t1,weight=700)); o.append(txt(x+w/2,y+41,t2,size=10.5,fill=TX2))
    b(10,20,170,"Präsentation","Browser, App am Client",CY)
    b(215,20,170,"Logik","Anwendungsserver",AM)
    b(420,20,170,"Daten","Datenbankserver",GR)
    for x in (180,385):
        o.append(f'<line x1="{x}" y1="47" x2="{x+35}" y2="47" stroke="{TX2}" stroke-width="2"/>')
    o.append(txt(300,100,"Jede Schicht kann getrennt geändert, abgesichert und skaliert werden.",size=11,fill=TX2))
    return svg_wrap(600,112,o,"Drei-Schichten-Architektur",460)
json.dump({"ER":er(),"NM":nm(),"CS":cs()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_software.json"),"w"),ensure_ascii=False)
