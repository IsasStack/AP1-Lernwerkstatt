import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM
VI="#a78bfa"
def box(o,x,y,w,h,t1,t2,c):
    o.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="7" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>')
    o.append(txt(x+w/2,y+h/2-(3 if t2 else -4),t1,weight=700))
    if t2: o.append(txt(x+w/2,y+h/2+14,t2,size=10.5,fill=TX2))
def ln(o,x1,y1,x2,y2,lab="",c=TX2,lx=None,ly=None,anchor="middle"):
    o.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{c}" stroke-width="2.5"/>')
    if lab: o.append(txt(lx if lx is not None else (x1+x2)/2+6, ly if ly is not None else (y1+y2)/2+4, lab, size=10.5, fill=c, anchor=anchor))
def pc():
    o=[]
    o.append(f'<rect x="150" y="10" width="440" height="330" rx="12" fill="none" stroke="{LINE}" stroke-dasharray="6 4"/>')
    o.append(txt(160,28,"Mainboard",fill=TX2,size=11,anchor="start"))
    box(o,300,40,140,58,"CPU","Kerne, Takt, Cache",CY)
    box(o,470,40,110,58,"RAM","DDR4 / DDR5",GR)
    box(o,10,40,120,58,"Grafikkarte","PCIe x16",VI)
    box(o,300,170,140,70,"Chipsatz","verteilt Ein-/Ausgaben",AM)
    box(o,10,175,120,58,"NVMe-SSD","M.2-Steckplatz",GR)
    box(o,470,140,110,50,"Netzwerk","LAN, WLAN",CY)
    box(o,470,220,110,50,"USB, Audio","SATA-Laufwerke",TX2)
    box(o,300,275,140,50,"UEFI-Firmware","TPM 2.0",AM)
    ln(o,440,69,470,69,c=GR); o.append(txt(455,60,"Kanal",size=10.5,fill=GR))
    ln(o,130,69,300,69,c=VI); o.append(txt(215,60,"PCIe-Lanes",size=10.5,fill=VI))
    o.append(txt(70,118,"→ Monitor (HDMI, DP)",size=10.5,fill=TX2))
    ln(o,370,98,370,170,c=AM)
    ln(o,130,204,300,204,c=GR); o.append(txt(215,195,"PCIe (NVMe)",size=10.5,fill=GR))
    ln(o,440,180,470,165); ln(o,440,230,470,245)
    ln(o,370,240,370,275)
    return svg_wrap(600,348,o,"Aufbau eines PCs als Blockschaltbild",480)
json.dump({"PC":pc()},open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_hardware.json"),"w"),ensure_ascii=False)
