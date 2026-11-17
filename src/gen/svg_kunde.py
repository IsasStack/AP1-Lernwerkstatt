import json
from svg_projekt import txt, svg_wrap, TX, TX2, LINE, BOX, CY, RD, GR, AM

VI = "#a78bfa"


def arrowdefs(mid, c=TX2):
    return (f'<defs><marker id="{mid}" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">'
            f'<path d="M0,0 L9,4.5 L0,9 z" fill="{c}"/></marker></defs>')


def sender():
    o = [arrowdefs("se-ar")]
    def box(x, w, t1, t2, c):
        o.append(f'<rect x="{x}" y="30" width="{w}" height="62" rx="8" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>')
        o.append(txt(x + w / 2, 56, t1, weight=700))
        o.append(txt(x + w / 2, 76, t2, fill=TX2, size=11))
    box(10, 150, "Sender", "codiert die Nachricht", CY)
    box(250, 170, "Kanal", "Gespräch, Mail, Telefon", TX2)
    box(510, 150, "Empfänger", "decodiert die Nachricht", GR)
    o.append(f'<line x1="160" y1="61" x2="246" y2="61" stroke="{TX2}" stroke-width="1.5" marker-end="url(#se-ar)"/>')
    o.append(f'<line x1="420" y1="61" x2="506" y2="61" stroke="{TX2}" stroke-width="1.5" marker-end="url(#se-ar)"/>')
    o.append(f'<path d="M585,92 C585,140 85,140 85,96" fill="none" stroke="{TX2}" stroke-dasharray="5 4" marker-end="url(#se-ar)"/>')
    o.append(txt(335, 152, "Rückmeldung (Feedback)", fill=TX2, size=11))
    o.append(f'<path d="M335,4 L335,26" stroke="{RD}" stroke-width="1.5" marker-end="url(#se-ar)"/>')
    o.append(txt(345, 14, "Störungen: Lärm, Fachjargon, schlechte Verbindung", fill=RD, size=11, anchor="start"))
    return svg_wrap(670, 162, o, "Sender-Empfänger-Modell", 520)


def vierseiten():
    o = []
    cx, cy, s = 330, 132, 92
    o.append(f'<polygon points="{cx},{cy-s} {cx+s},{cy} {cx},{cy+s} {cx-s},{cy}" fill="{BOX}" stroke="{CY}" stroke-width="1.5"/>')
    o.append(txt(cx, cy - 4, "Nachricht", weight=700))
    o.append(txt(cx, cy + 14, "„Der Drucker geht", fill=TX2, size=11))
    o.append(txt(cx, cy + 28, "schon wieder nicht!“", fill=TX2, size=11))
    items = [(cx, cy - s - 30, "Sachinhalt", "Der Drucker ist defekt.", "middle", CY),
             (cx + s + 18, cy - 6, "Appell", "Repariert ihn endlich", "start", AM),
             (cx, cy + s + 22, "Beziehung", "Ihr kriegt das nicht hin.", "middle", RD),
             (cx - s - 18, cy - 6, "Selbstoffenbarung", "Ich bin genervt.", "end", VI)]
    for x, y, h, t, a, c in items:
        o.append(txt(x, y, h, weight=700, fill=c, anchor=a))
        o.append(txt(x, y + 16, t, size=11.5, anchor=a))
    o.append(txt(cx + s + 18, cy + 26, "– und zwar dauerhaft!", size=11.5, anchor="start"))
    return svg_wrap(660, 290, o, "Vier-Seiten-Modell nach Schulz von Thun mit Beispiel", 520, 660)


def ticket():
    o = [arrowdefs("tk-ar")]
    st = [("Neu", CY), ("Zugewiesen", CY), ("In Bearbeitung", AM), ("Gelöst", GR), ("Geschlossen", GR)]
    w, gap = 112, 22
    for i, (s, c) in enumerate(st):
        x = 10 + i * (w + gap)
        o.append(f'<rect x="{x}" y="30" width="{w}" height="38" rx="19" fill="{BOX}" stroke="{c}" stroke-width="1.5"/>')
        o.append(txt(x + w / 2, 54, s, weight=600))
        if i:
            o.append(f'<line x1="{x-gap}" y1="49" x2="{x-3}" y2="49" stroke="{TX2}" stroke-width="1.5" marker-end="url(#tk-ar)"/>')
    xb = 10 + 2 * (w + gap)
    o.append(f'<rect x="{xb}" y="110" width="{w}" height="38" rx="19" fill="{BOX}" stroke="{TX2}" stroke-dasharray="4 3"/>')
    o.append(txt(xb + w / 2, 134, "Wartend", weight=600, fill=TX2))
    o.append(f'<path d="M{xb+30},68 L{xb+30},106" stroke="{TX2}" marker-end="url(#tk-ar)"/>')
    o.append(f'<path d="M{xb+82},110 L{xb+82},72" stroke="{TX2}" marker-end="url(#tk-ar)"/>')
    o.append(txt(xb + w + 8, 125, "z. B. Rückfrage beim Kunden,", fill=TX2, size=11, anchor="start"))
    o.append(txt(xb + w + 8, 140, "Ersatzteil bestellt", fill=TX2, size=11, anchor="start"))
    xg = 10 + 3 * (w + gap)
    o.append(f'<path d="M{xg+w/2},30 C{xg+w/2},6 {xb+w/2+20},6 {xb+w/2+20},28" fill="none" stroke="{RD}" stroke-dasharray="4 3" marker-end="url(#tk-ar)"/>')
    o.append(txt(xg + w / 2 + 8, 16, "Problem besteht weiter → wieder öffnen", fill=RD, size=11, anchor="start"))
    return svg_wrap(800, 158, o, "Statusmodell eines Tickets", 560)


if __name__ == "__main__":
    json.dump({"SENDER": sender(), "VIERSEITEN": vierseiten(), "TICKET": ticket()},
              open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_kunde.json"), "w"), ensure_ascii=False)
