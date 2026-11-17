import json, math
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def pdca():
    o=[]; cx,cy,r=170,150,110
    parts=[("Plan","planen",CY,-90),("Do","umsetzen",AM,0),("Check","prüfen",GR,90),("Act","handeln",VI,180)]
    for i,(t,d,c,ang) in enumerate(parts):
        a0=math.radians(ang-45+3); a1=math.radians(ang+45-3)
        x0,y0=cx+r*math.cos(a0),cy+r*math.sin(a0); x1,y1=cx+r*math.cos(a1),cy+r*math.sin(a1)
        xi0,yi0=cx+55*math.cos(a0),cy+55*math.sin(a0); xi1,yi1=cx+55*math.cos(a1),cy+55*math.sin(a1)
        o.append(f'<path d="M{xi0:.1f},{yi0:.1f} L{x0:.1f},{y0:.1f} A{r},{r} 0 0 1 {x1:.1f},{y1:.1f} L{xi1:.1f},{yi1:.1f} A55,55 0 0 0 {xi0:.1f},{yi0:.1f} Z" fill="{c}" fill-opacity=".2" stroke="{c}" stroke-width="1.6"/>')
        am=math.radians(ang); tx,ty=cx+84*math.cos(am),cy+84*math.sin(am)
        o.append(txt(tx,ty-2,t,weight=700,size=13)); o.append(txt(tx,ty+14,d,size=10.5,fill=TX2))
    o.append(txt(cx,cy+4,"KVP",weight=700,fill=TX))
    notes=[("Plan","Ist-Zustand analysieren, Ziel und Maßnahme festlegen",CY),("Do","Maßnahme im Kleinen umsetzen (Pilot)",AM),("Check","Ergebnis messen, mit dem Ziel vergleichen",GR),("Act","bewährt → Standard; sonst anpassen und neu planen",VI)]
    for i,(t,n,c) in enumerate(notes):
        o.append(txt(320,70+i*48,t,weight=700,fill=c,anchor="start")); o.append(txt(375,70+i*48,n,size=11.5,anchor="start"))
    return svg_wrap(700,300,o,"PDCA-Zyklus zur kontinuierlichen Verbesserung",520)
json.dump({"PDCA":pdca()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_qual.json"),"w"),ensure_ascii=False)
