import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def defs(m,c): return f'<marker id="{m}" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{c}"/></marker>'
def seq(title_l,title_r,rows,label,w=600):
    o=[f'<defs>{defs("sq-a",TX2)}</defs>']
    L,R=110,w-110
    o.append(txt(L,20,title_l,weight=700,fill=CY)); o.append(txt(R,20,title_r,weight=700,fill=AM))
    h=40+len(rows)*48
    o.append(f'<line x1="{L}" y1="30" x2="{L}" y2="{h}" stroke="{LINE}" stroke-width="2"/><line x1="{R}" y1="30" x2="{R}" y2="{h}" stroke="{LINE}" stroke-width="2"/>')
    for i,(d,a,b,c) in enumerate(rows):
        y=60+i*48
        x1,x2=(L+3,R-3) if d=="r" else (R-3,L+3)
        o.append(f'<line x1="{x1}" y1="{y}" x2="{x2}" y2="{y}" stroke="{c}" stroke-width="1.8" marker-end="url(#sq-a)"/>')
        o.append(txt(w/2,y-7,a,weight=700,fill=c,size=11.5)); o.append(txt(w/2,y+15,b,size=10.5,fill=TX2))
    return svg_wrap(w,h+6,o,label,460)
dora=seq("Client","DHCP-Server",[("r","1. Discover","Broadcast: „Gibt es einen DHCP-Server?“",CY),("l","2. Offer","„Du kannst 192.168.10.123 haben.“",AM),("r","3. Request","„Ich nehme 192.168.10.123.“",CY),("l","4. Acknowledge","Bestätigung + Maske, Gateway, DNS, Lease-Dauer",GR)],"DHCP-Ablauf DORA")
hs=seq("Client","Server",[("r","SYN","„Ich möchte eine Verbindung aufbauen.“",CY),("l","SYN-ACK","„Einverstanden, ich auch.“",AM),("r","ACK","„Bestätigt – Verbindung steht.“",GR)],"TCP-Drei-Wege-Handshake")
json.dump({"DORA":dora,"HANDSHAKE":hs},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_ip.json"),"w"),ensure_ascii=False)
