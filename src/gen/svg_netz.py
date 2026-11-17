import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def kapsel():
    o=[]
    rows=[("Anwendung","Daten (z. B. HTTP-Anfrage)",[("Daten",CY,280)]),
          ("Transport","Segment",[("TCP-Header",AM,90),("Daten",CY,280)]),
          ("Internet","Paket",[("IP-Header",GR,90),("TCP-Header",AM,90),("Daten",CY,280)]),
          ("Netzzugang","Frame",[("Ethernet-Header",VI,110),("IP-Header",GR,90),("TCP-Header",AM,90),("Daten",CY,280),("Prüfsumme",VI,74)])]
    for i,(l,e,parts) in enumerate(rows):
        y=20+i*46
        o.append(txt(10,y+20,l,weight=700,anchor="start")); o.append(txt(10,y+35,e,size=10.5,fill=TX2,anchor="start"))
        x=780
        for (t,c,w) in reversed(parts):
            x-=w
            o.append(f'<rect x="{x}" y="{y+2}" width="{w-3}" height="32" rx="4" fill="{c}" fill-opacity=".2" stroke="{c}"/>')
            o.append(txt(x+(w-3)/2,y+23,t,size=11))
    o.append(txt(400,212,"Beim Senden fügt jede Schicht ihre Steuerinformationen hinzu (Kapselung), der Empfänger entfernt sie in umgekehrter Reihenfolge.",size=11,fill=TX2))
    return svg_wrap(790,222,o,"Kapselung der Daten durch die Schichten",620)
def plan():
    o=[]
    def dev(x,y,t1,t2,c,w=130):
        o.append(f'<rect x="{x}" y="{y}" width="{w}" height="46" rx="7" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>'); o.append(txt(x+w/2,y+20,t1,weight=700,size=11.5)); o.append(txt(x+w/2,y+36,t2,size=10,fill=TX2))
    def l(x1,y1,x2,y2,c=TX2,d=""):
        o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="2" {d}/>')
    o.append(f'<ellipse cx="85" cy="40" rx="70" ry="26" fill="{BOX}" stroke="{TX2}"/>'); o.append(txt(85,44,"Internet",weight=700))
    dev(230,17,"Router / Firewall","NAT, VPN, DHCP",RD,150)
    l(155,40,230,40)
    dev(470,17,"Core-Switch","Layer 3, VLAN-Routing",AM,150)
    l(380,40,470,40)
    dev(20,140,"Server","VLAN 10 · statisch",CY)
    dev(170,140,"Switch Büro","PoE, VLAN 10/30",AM)
    dev(320,140,"Switch Lager","VLAN 20",AM)
    dev(470,140,"Access Point","VLAN 10 + 99 (Gäste)",GR)
    dev(620,140,"Drucker","VLAN 10 · statisch",CY)
    for x in (85,235,385,535,685): l(545,63,x,140)
    dev(120,240,"8 PCs","VLAN 10 · DHCP",CY,110); dev(240,240,"IP-Telefone","VLAN 30 · PoE",VI,110)
    dev(370,240,"Scanner-PCs","VLAN 20",CY,110)
    l(235,186,175,240); l(235,186,295,240); l(385,186,425,240)
    o.append(f'<path d="M535,186 Q 560,215 585,230" stroke="{GR}" stroke-dasharray="3 3" fill="none"/>')
    o.append(txt(560,252,"WLAN-Clients",size=10.5,fill=GR,anchor="start"))
    o.append(txt(400,306,"Logischer Netzplan: Geräte, Verbindungen, VLANs und Adressvergabe",size=11,fill=TX2))
    return svg_wrap(770,316,o,"Beispiel Netzplan eines kleinen Unternehmens",620)
json.dump({"KAPSEL":kapsel(),"PLAN":plan()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_netz.json"),"w"),ensure_ascii=False)
