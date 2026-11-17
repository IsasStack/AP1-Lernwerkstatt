import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def matrix():
    layers=["Anwendung","Daten","Laufzeitumgebung","Middleware","Betriebssystem","Virtualisierung","Server","Speicher","Netzwerk"]
    cols=[("On-Premises",9),("IaaS",5),("PaaS",2),("SaaS",0)]
    o=[]; x0,y0,cw,rh=20,40,140,26
    for j,(c,k) in enumerate(cols):
        x=x0+j*(cw+12)
        o.append(txt(x+cw/2,y0-12,c,weight=700))
        for i,l in enumerate(layers):
            kunde=i<k
            col = CY if kunde else AM
            if c=="SaaS" and l=="Daten": col=CY; kunde=True
            o.append(f'<rect x="{x}" y="{y0+i*(rh+4)}" width="{cw}" height="{rh}" rx="4" fill="{col}" fill-opacity="{.22 if kunde else .14}" stroke="{col}" stroke-opacity=".7"/>')
            o.append(txt(x+cw/2,y0+i*(rh+4)+17,l,size=11))
    yb=y0+9*(rh+4)+18
    o.append(f'<rect x="{x0}" y="{yb-11}" width="14" height="12" fill="{CY}" fill-opacity=".5"/>'+txt(x0+20,yb,"verwaltet der Kunde",size=11,anchor="start"))
    o.append(f'<rect x="{x0+180}" y="{yb-11}" width="14" height="12" fill="{AM}" fill-opacity=".5"/>'+txt(x0+200,yb,"verwaltet der Anbieter",size=11,anchor="start"))
    o.append(txt(x0,yb+20,"Für Daten und Zugänge bleibt der Kunde immer verantwortlich – auch bei SaaS.",size=11,anchor="start",fill=TX2))
    return svg_wrap(x0+4*(cw+12)+10,yb+30,o,"Verantwortung bei On-Premises, IaaS, PaaS und SaaS",560)
def hyper():
    o=[]
    def stack(x,title,rows):
        o.append(txt(x+85,20,title,weight=700))
        y=34
        for (t,c,h) in rows:
            if isinstance(t,list):
                n=len(t); w=(170-(n-1)*6)/n
                for k,tt in enumerate(t):
                    o.append(f'<rect x="{x+k*(w+6)}" y="{y}" width="{w}" height="{h}" rx="4" fill="{c}" fill-opacity=".18" stroke="{c}"/>')
                    for m,line in enumerate(tt.split("|")): o.append(txt(x+k*(w+6)+w/2,y+16+m*14,line,size=10.5))
            else:
                o.append(f'<rect x="{x}" y="{y}" width="170" height="{h}" rx="4" fill="{c}" fill-opacity=".18" stroke="{c}"/>')
                o.append(txt(x+85,y+h/2+4,t,size=11))
            y+=h+5
    stack(10,"Typ 1 (Bare Metal)",[(["App|Gast-OS","App|Gast-OS"],CY,46),("Hypervisor",AM,28),("Hardware",TX2,28)])
    stack(210,"Typ 2 (Hosted)",[(["App|Gast-OS","App|Gast-OS"],CY,46),("Hypervisor-Programm",AM,28),("Host-Betriebssystem",VI,28),("Hardware",TX2,28)])
    stack(410,"Container",[(["App|Bibl.","App|Bibl.","App|Bibl."],GR,46),("Container-Engine",AM,28),("Host-Betriebssystem",VI,28),("Hardware",TX2,28)])
    return svg_wrap(590,190,o,"Hypervisor Typ 1, Typ 2 und Container im Vergleich",480)
json.dump({"MATRIX":matrix(),"HYPER":hyper()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_cloud.json"),"w"),ensure_ascii=False)
