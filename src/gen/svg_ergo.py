import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def platz():
    o=[f'<defs><marker id="eg-a" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="{AM}"/></marker><marker id="eg-b" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="{AM}"/></marker></defs>']
    fl=330
    o.append(f'<line x1="20" y1="{fl}" x2="660" y2="{fl}" stroke="{LINE}" stroke-width="2"/>')
    # desk
    o.append(f'<rect x="300" y="200" width="300" height="10" fill="{TX2}"/>')
    o.append(f'<line x1="580" y1="210" x2="580" y2="{fl}" stroke="{TX2}" stroke-width="5"/>')
    # monitor
    o.append(f'<line x1="520" y1="200" x2="520" y2="170" stroke="{TX2}" stroke-width="5"/><rect x="495" y="196" width="50" height="5" fill="{TX2}"/>')
    o.append(f'<line x1="534" y1="80" x2="520" y2="172" stroke="{CY}" stroke-width="9" stroke-linecap="round"/>')
    # keyboard
    o.append(f'<rect x="340" y="194" width="60" height="6" rx="2" fill="{TX2}"/>')
    # chair
    o.append(f'<rect x="150" y="235" width="110" height="10" rx="4" fill="{TX2}"/><path d="M150,240 L130,120" stroke="{TX2}" stroke-width="8" stroke-linecap="round"/><line x1="205" y1="245" x2="205" y2="300" stroke="{TX2}" stroke-width="6"/><line x1="160" y1="{fl-8}" x2="250" y2="{fl-8}" stroke="{TX2}" stroke-width="5"/><circle cx="160" cy="{fl-4}" r="4" fill="{TX2}"/><circle cx="250" cy="{fl-4}" r="4" fill="{TX2}"/>')
    # person
    P=GR
    o.append(f'<circle cx="185" cy="78" r="20" fill="none" stroke="{P}" stroke-width="3"/>')
    o.append(f'<path d="M180,98 L170,228 L262,228 L262,{fl-6} L292,{fl-6}" fill="none" stroke="{P}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>')
    o.append(f'<path d="M176,130 L200,195 L345,195" fill="none" stroke="{P}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>')
    # eye line
    o.append(f'<line x1="200" y1="76" x2="534" y2="76" stroke="{AM}" stroke-dasharray="5 4"/>')
    o.append(txt(360,68,"Augenhöhe = Oberkante Monitor oder leicht darüber",fill=AM,size=11))
    # viewing distance
    o.append(f'<line x1="210" y1="112" x2="505" y2="112" stroke="{AM}" marker-start="url(#eg-b)" marker-end="url(#eg-a)"/>')
    o.append(txt(360,104,"Sehabstand ca. 50–70 cm",fill=AM,size=11,weight=600))
    # notes
    o.append(txt(275,262,"Oberschenkel waagerecht,",fill=TX,size=11,anchor="start"))
    o.append(txt(275,277,"Knie ca. 90°",fill=TX,size=11,anchor="start"))
    o.append(txt(300,316,"Füße flach auf dem Boden",fill=TX,size=11,anchor="start"))
    o.append(txt(355,228,"Unterarme waagerecht, Tisch auf Ellenbogenhöhe",fill=TX,size=11,anchor="start"))
    o.append(txt(560,120,"Monitor leicht",fill=CY,size=11,anchor="start")); o.append(txt(560,135,"nach hinten geneigt",fill=CY,size=11,anchor="start"))
    o.append(txt(40,140,"Rücken-",fill=TX2,size=11,anchor="start")); o.append(txt(40,155,"lehne mit",fill=TX2,size=11,anchor="start")); o.append(txt(40,170,"Lordosen-",fill=TX2,size=11,anchor="start")); o.append(txt(40,185,"stütze",fill=TX2,size=11,anchor="start"))
    o.append(txt(40,24,"Fenster seitlich – Blickrichtung parallel zum Fenster",fill=TX2,size=11,anchor="start"))
    return svg_wrap(680,340,o,"Richtig eingestellter Bildschirmarbeitsplatz in der Seitenansicht",520)
json.dump({"PLATZ":platz()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_ergo.json"),"w"),ensure_ascii=False)
