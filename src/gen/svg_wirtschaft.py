import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM

def breakeven():
    W,H,x0,y0,pw,ph=640,300,70,20,520,230
    X=lambda v:x0+v/40000*pw
    Y=lambda v:y0+ph-v/4000*ph
    o=[]
    for v in range(0,4001,1000):
        o.append(f'<line x1="{x0}" y1="{Y(v)}" x2="{x0+pw}" y2="{Y(v)}" stroke="{LINE}"/>')
        o.append(txt(x0-8,Y(v)+4,f"{v:,} €".replace(",","."),fill=TX2,size=11,anchor="end"))
    for v in range(0,40001,10000):
        o.append(txt(X(v),y0+ph+18,f"{v:,}".replace(",","."),fill=TX2,size=11))
    o.append(txt(x0+pw/2,y0+ph+36,"gedruckte Seiten pro Jahr",fill=TX2,size=11))
    o.append(f'<line x1="{X(0)}" y1="{Y(1000)}" x2="{X(40000)}" y2="{Y(3000)}" stroke="{CY}" stroke-width="2.5"/>')
    o.append(f'<line x1="{X(0)}" y1="{Y(400)}" x2="{X(40000)}" y2="{Y(3600)}" stroke="{AM}" stroke-width="2.5"/>')
    o.append(txt(X(40000)+6,Y(3000)+4,"A",fill=CY,weight=700,anchor="start"))
    o.append(txt(X(40000)+6,Y(3600)+4,"B",fill=AM,weight=700,anchor="start"))
    o.append(f'<line x1="{X(20000)}" y1="{Y(2000)}" x2="{X(20000)}" y2="{Y(0)}" stroke="{RD}" stroke-dasharray="4 3"/>')
    o.append(f'<circle cx="{X(20000)}" cy="{Y(2000)}" r="5" fill="{RD}"/>')
    o.append(txt(X(20000)-10,Y(2000)-14,"Break-even: 20.000 Seiten, je 2.000 €",fill=RD,size=11.5,weight=600,anchor="end"))
    o.append(txt(X(9000),Y(250),"B günstiger",fill=AM,size=11.5,weight=600))
    o.append(txt(X(31000),Y(1500),"A günstiger",fill=CY,size=11.5,weight=600))
    o.append(txt(x0+6,y0+12,"Kosten pro Jahr",fill=TX2,size=11,anchor="start"))
    return svg_wrap(W,H+16,o,"Break-even-Diagramm Kostenvergleich zweier Drucker",460)

json.dump({"BREAKEVEN":breakeven()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_wirtschaft.json"),"w"),ensure_ascii=False)
