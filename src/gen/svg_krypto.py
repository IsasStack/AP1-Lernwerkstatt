import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def defs(m,c=TX2): return f'<marker id="{m}" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{c}"/></marker>'
def b(o,x,y,w,t1,t2,c,h=46):
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="7" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>'); o.append(txt(x+w/2,y+19,t1,weight=700,size=11.5)); 
    if t2: o.append(txt(x+w/2,y+35,t2,size=10,fill=TX2))
def a(o,x1,y1,x2,y2,lab="",c=TX2,m="kr-a"):
    o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="1.6" marker-end="url(#{m})"/>')
    if lab: o.append(txt((x1+x2)/2,(y1+y2)/2-7,lab,size=10.5,fill=c))
def sym_asym():
    o=[f'<defs>{defs("kr-a")}</defs>']
    o.append(txt(10,18,"Symmetrisch – ein gemeinsamer Schlüssel",weight=700,anchor="start",fill=CY))
    b(o,10,30,120,"Klartext","",TX2,34); b(o,200,30,130,"verschlüsseln","🔑 Schlüssel K",CY); b(o,400,30,110,"Geheimtext","",TX2,34); b(o,580,30,130,"entschlüsseln","🔑 derselbe K",CY)
    a(o,130,47,198,47); a(o,330,53,398,47); a(o,510,47,578,53)
    o.append(txt(360,98,"Problem: Wie bekommt der Empfänger den Schlüssel K sicher?",size=11,fill=RD))
    o.append(txt(10,138,"Asymmetrisch – Schlüsselpaar des Empfängers",weight=700,anchor="start",fill=AM))
    b(o,10,150,120,"Klartext","",TX2,34); b(o,200,150,130,"verschlüsseln","öffentl. Schlüssel B",AM); b(o,400,150,110,"Geheimtext","",TX2,34); b(o,580,150,130,"entschlüsseln","privater Schlüssel B",GR)
    a(o,130,167,198,167); a(o,330,173,398,167); a(o,510,167,578,173)
    o.append(txt(360,218,"Den öffentlichen Schlüssel darf jeder kennen – entschlüsseln kann nur, wer den privaten hat.",size=11,fill=GR))
    return svg_wrap(720,228,o,"Symmetrische und asymmetrische Verschlüsselung im Vergleich",560)
def signatur():
    o=[f'<defs>{defs("kr-a")}</defs>']
    o.append(txt(170,18,"Absender A",weight=700,fill=CY)); o.append(txt(550,18,"Empfänger B",weight=700,fill=AM))
    b(o,90,30,160,"Dokument","",TX2,34); b(o,90,100,160,"Hashwert bilden","z. B. SHA-256",CY); b(o,90,180,160,"Hash verschlüsseln","privater Schlüssel A",CY)
    a(o,170,64,170,98); a(o,170,146,170,178)
    o.append(txt(170,252,"= Signatur, wird mit dem Dokument gesendet",size=10.5,fill=TX2))
    b(o,440,30,220,"erhält Dokument + Signatur","",AM,34)
    b(o,395,100,150,"Hash selbst bilden","aus dem Dokument",AM); b(o,555,100,150,"Signatur entschlüsseln","öffentl. Schlüssel A",AM)
    b(o,470,190,160,"Hashwerte gleich?","",GR,34)
    a(o,250,47,438,47,"senden"); a(o,500,64,470,98); a(o,600,64,630,98); a(o,470,146,520,188); a(o,630,146,580,188)
    o.append(txt(550,248,"ja → unverändert (Integrität)",size=10.5,fill=GR)); o.append(txt(550,263,"und wirklich von A (Authentizität)",size=10.5,fill=GR))
    return svg_wrap(720,272,o,"Ablauf der digitalen Signatur",540)
json.dump({"SYMASYM":sym_asym(),"SIGNATUR":signatur()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_krypto.json"),"w"),ensure_ascii=False)
