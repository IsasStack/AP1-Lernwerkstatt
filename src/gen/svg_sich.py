import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def backup():
    o=[]; days=["Mo","Di","Mi","Do","Fr"]; x0=150; dw=100
    for i,d in enumerate(days): o.append(txt(x0+i*dw+45,20,d,weight=700))
    rows=[("Vollsicherung",[500,500,500,500,500],CY),("Differenziell",[500,20,40,60,80],AM),("Inkrementell",[500,20,20,20,20],GR)]
    for r,(name,vals,c) in enumerate(rows):
        y=40+r*70
        o.append(txt(10,y+28,name,weight=700,anchor="start"))
        for i,v in enumerate(vals):
            full=(i==0 or name=="Vollsicherung")
            h=46 if full else max(8,v/80*40)
            col=CY if full else c
            o.append(f'<rect x="{x0+i*dw}" y="{y+46-h}" width="90" height="{h}" rx="3" fill="{col}" fill-opacity=".3" stroke="{col}"/>')
            o.append(txt(x0+i*dw+45,y+60,f"{v} GB",size=10.5,fill=TX2))
    o.append(txt(10,262,"Annahme: Vollsicherung 500 GB, jeden Tag ändern sich 20 GB andere Daten.",size=11,fill=TX2,anchor="start"))
    return svg_wrap(660,272,o,"Vollsicherung, differenzielle und inkrementelle Sicherung im Vergleich",520)
json.dump({"BACKUP":backup()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_sich.json"),"w"),ensure_ascii=False)
