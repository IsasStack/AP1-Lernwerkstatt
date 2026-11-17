import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def ad():
    o=[]
    def b(x,y,w,t1,t2,c):
        o.append(f'<rect x="{x}" y="{y}" width="{w}" height="44" rx="7" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>'); o.append(txt(x+w/2,y+19,t1,weight=700,size=11.5)); o.append(txt(x+w/2,y+35,t2,size=10,fill=TX2))
    def l(x1,y1,x2,y2): o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{TX2}" stroke-width="1.5"/>')
    b(250,10,190,"Domäne firma.local","DCs: DC01, DC02",CY)
    for x,t in ((40,"OU Verwaltung"),(255,"OU Lager"),(470,"OU Server")): b(x,100,170,t,"Gruppenrichtlinien wirken hier",AM); l(345,54,x+85,100)
    b(10,190,110,"Benutzer","Anna, Ben",GR); b(130,190,110,"Computer","PC-V01 … V12",GR)
    l(125,144,65,190); l(125,144,185,190)
    b(255,190,170,"Benutzer + Computer","Lagerteam",GR); l(340,144,340,190)
    b(470,190,170,"Computer","Fileserver, Druckserver",GR); l(555,144,555,190)
    o.append(txt(345,258,"Organisationseinheiten (OUs) bilden die Firmenstruktur ab – Richtlinien und Rechte lassen sich je OU zuweisen.",size=11,fill=TX2))
    return svg_wrap(690,268,o,"Aufbau einer Active-Directory-Domäne mit Organisationseinheiten",540)
def trouble():
    o=[]
    steps=[("ipconfig /all","Hat der PC eine gültige Adresse, Maske, Gateway, DNS?","169.254.x.x → DHCP/Kabel/VLAN prüfen"),
           ("ping 127.0.0.1","Funktioniert der TCP/IP-Stack?","nein → Netzwerkkarte, Treiber"),
           ("ping Gateway","Ist das eigene Netz erreichbar?","nein → Kabel, Switchport, VLAN, IP/Maske"),
           ("ping 8.8.8.8 (externe IP)","Kommt man ins Internet?","nein → Router, Firewall, Provider"),
           ("ping www.beispiel.de","Funktioniert die Namensauflösung?","nein, aber IP geht → DNS (nslookup)")]
    for i,(c,q,f) in enumerate(steps):
        y=10+i*58
        o.append(f'<rect x="10" y="{y}" width="190" height="44" rx="7" fill="{BOX}" stroke="{CY}" stroke-width="1.5"/>'); o.append(f'<text x="105" y="{y+27}" fill="{TX}" font-size="11" font-family="monospace" text-anchor="middle">{c}</text>')
        o.append(txt(215,y+19,q,anchor="start",size=11.5)); o.append(txt(215,y+36,f,anchor="start",size=11,fill=RD))
        if i<4: o.append(f'<line x1="105" y1="{y+44}" x2="105" y2="{y+58}" stroke="{GR}" stroke-width="2"/>')
    o.append(txt(10,312,"Von unten nach oben prüfen: Jeder erfolgreiche Schritt schließt die Ebenen darunter als Ursache aus.",size=11,fill=GR,anchor="start"))
    return svg_wrap(620,322,o,"Strukturierte Fehlersuche im Netzwerk von unten nach oben",500)
json.dump({"AD":ad(),"TROUBLE":trouble()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_dom.json"),"w"),ensure_ascii=False)
