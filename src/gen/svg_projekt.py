"""Erzeugt die SVG-Diagramme für Thema 2 (Netzplan, Gantt, PSP) als JS-Konstanten."""
import json

TX, TX2, LINE, BOX, CY, RD, GR, AM = "#d7dee8", "#93a1b3", "#334255", "#1b2430", "#38bdf8", "#f87171", "#34d399", "#fbbf24"

V = {  # id: (name, D, preds)
    "A": ("Bedarf analysieren", 2, []),
    "B": ("Angebote einholen", 3, ["A"]),
    "C": ("Netzwerk planen", 4, ["A"]),
    "D": ("Hardware liefern", 5, ["B"]),
    "E": ("Verkabelung", 3, ["C"]),
    "F": ("Geräte installieren", 2, ["D", "E"]),
    "G": ("Test und Abnahme", 1, ["F"]),
}
order = list(V)
FAZ, FEZ, SAZ, SEZ = {}, {}, {}, {}
for k in order:
    FAZ[k] = max([FEZ[p] for p in V[k][2]], default=0)
    FEZ[k] = FAZ[k] + V[k][1]
end = max(FEZ.values())
succ = {k: [s for s in order if k in V[s][2]] for k in order}
for k in reversed(order):
    SEZ[k] = min([SAZ[s] for s in succ[k]], default=end)
    SAZ[k] = SEZ[k] - V[k][1]
GP = {k: SAZ[k] - FAZ[k] for k in order}
FP = {k: (min(FAZ[s] for s in succ[k]) if succ[k] else end) - FEZ[k] for k in order}


def node(x, y, k, w=150, h=90, show=True, crit=False):
    n, d, _ = V[k] if k in V else ("", "", [])
    c = RD if crit else CY
    cw = w / 3
    o = [f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="4" fill="{BOX}" stroke="{c}" stroke-width="{2 if crit else 1.2}"/>',
         f'<line x1="{x}" y1="{y+28}" x2="{x+w}" y2="{y+28}" stroke="{LINE}"/>',
         f'<line x1="{x}" y1="{y+h-28}" x2="{x+w}" y2="{y+h-28}" stroke="{LINE}"/>']
    for i in (1, 2):
        o.append(f'<line x1="{x+cw*i}" y1="{y}" x2="{x+cw*i}" y2="{y+28}" stroke="{LINE}"/>')
        o.append(f'<line x1="{x+cw*i}" y1="{y+h-28}" x2="{x+cw*i}" y2="{y+h}" stroke="{LINE}"/>')
    return o, (cw, c)


def txt(x, y, s, fill=TX, size=12, weight=400, anchor="middle"):
    return f'<text x="{x}" y="{y}" fill="{fill}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}">{s}</text>'


def netz_node(x, y, k, crit):
    w, h = 150, 90
    o, (cw, c) = node(x, y, k, crit=crit)
    top = [FAZ[k], V[k][1], FEZ[k]]
    bot = [SAZ[k], GP[k], SEZ[k]]
    for i in range(3):
        o.append(txt(x + cw * i + cw / 2, y + 19, top[i], weight=700 if i != 1 else 400, fill=TX if i != 1 else TX2))
        o.append(txt(x + cw * i + cw / 2, y + h - 9, bot[i], weight=700 if i != 1 else 400,
                     fill=(RD if (i == 1 and GP[k] == 0) else (AM if i == 1 else TX))))
    o.append(txt(x + w / 2, y + 50, f"{k}: {V[k][0]}", size=12, weight=600))
    return o


def arrow(x1, y1, x2, y2, c=TX2, mid="np"):
    return f'<path d="M{x1},{y1} C{(x1+x2)/2},{y1} {(x1+x2)/2},{y2} {x2},{y2}" fill="none" stroke="{c}" stroke-width="1.5" marker-end="url(#{mid}-ar)"/>'


def defs(mid):
    return (f'<defs><marker id="{mid}-ar" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">'
            f'<path d="M0,0 L9,4.5 L0,9 z" fill="{TX2}"/></marker>'
            f'<marker id="{mid}-arr" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">'
            f'<path d="M0,0 L9,4.5 L0,9 z" fill="{RD}"/></marker></defs>')


def svg_wrap(w, h, inner, label, minw, maxw=None):
    mx = f"max-width:{maxw}px;display:block;margin:0 auto;" if maxw else ""
    return (f'<svg viewBox="0 0 {w} {h}" width="100%" style="min-width:{minw}px;{mx}font-family:Inter,sans-serif;font-size:12px" '
            f'role="img" aria-label="{label}">' + "".join(inner) + "</svg>")


# ---------- Legende Knoten ----------
def legende():
    o = [defs("lg")]
    x, y, w, h = 20, 14, 210, 96
    cw = w / 3
    o += [f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="4" fill="{BOX}" stroke="{CY}"/>',
          f'<line x1="{x}" y1="{y+30}" x2="{x+w}" y2="{y+30}" stroke="{LINE}"/>',
          f'<line x1="{x}" y1="{y+h-30}" x2="{x+w}" y2="{y+h-30}" stroke="{LINE}"/>']
    for i in (1, 2):
        o += [f'<line x1="{x+cw*i}" y1="{y}" x2="{x+cw*i}" y2="{y+30}" stroke="{LINE}"/>',
              f'<line x1="{x+cw*i}" y1="{y+h-30}" x2="{x+cw*i}" y2="{y+h}" stroke="{LINE}"/>']
    for i, s in enumerate(["FAZ", "D", "FEZ"]):
        o.append(txt(x + cw * i + cw / 2, y + 20, s, weight=700))
    for i, s in enumerate(["SAZ", "GP", "SEZ"]):
        o.append(txt(x + cw * i + cw / 2, y + h - 10, s, weight=700))
    o.append(txt(x + w / 2, y + 53, "Nr.: Vorgangsname", fill=TX2))
    lines = [("FAZ", "frühester Anfangszeitpunkt"), ("D", "Dauer"), ("FEZ", "frühester Endzeitpunkt = FAZ + D"),
             ("SAZ", "spätester Anfangszeitpunkt = SEZ − D"), ("GP", "Gesamtpuffer = SAZ − FAZ"), ("SEZ", "spätester Endzeitpunkt")]
    for i, (a, b) in enumerate(lines):
        o.append(txt(260, 26 + i * 17, a, weight=700, anchor="start", fill=CY))
        o.append(txt(300, 26 + i * 17, b, anchor="start"))
    return svg_wrap(560, 124, o, "Aufbau eines Vorgangsknotens im Netzplan", 460)


# ---------- Netzplan ----------
POS = {"A": (20, 110), "B": (215, 20), "C": (215, 200), "D": (410, 20), "E": (410, 200), "F": (605, 110), "G": (800, 110)}
crit = {k for k in order if GP[k] == 0}


def netzplan(filled=True):
    o = [defs("np")]
    w, h = 90, 90
    for k in order:
        for s in succ[k]:
            x1, y1 = POS[k][0] + 150, POS[k][1] + 45
            x2, y2 = POS[s][0], POS[s][1] + 45
            cr = k in crit and s in crit
            o.append(arrow(x1, y1, x2 - 2, y2, RD if cr else TX2, "np").replace("np-ar", "np-arr") if cr else arrow(x1, y1, x2 - 2, y2))
    for k in order:
        x, y = POS[k]
        if filled:
            o += netz_node(x, y, k, k in crit)
        else:
            oo, (cw, c) = node(x, y, k)
            o += oo
            o.append(txt(x + cw + cw / 2, y + 19, V[k][1], fill=TX2))
            o.append(txt(x + 75, y + 50, f"{k}: {V[k][0]}", weight=600))
    if filled:
        o.append(txt(20, 312, "Rot = kritischer Pfad A → B → D → F → G (Gesamtpuffer 0). Projektdauer: 13 Tage.", fill=RD, anchor="start", weight=600))
    return svg_wrap(970, 322 if filled else 300, o,
                    "Netzplan Beispiel Arbeitsplatz-Einrichtung" + (" mit allen Werten" if filled else " leer"), 700)


# ---------- Gantt ----------
def gantt():
    o = []
    x0, y0, dx, rh = 170, 30, 52, 30
    for t in range(end + 1):
        o.append(f'<line x1="{x0+t*dx}" y1="{y0-6}" x2="{x0+t*dx}" y2="{y0+len(order)*rh}" stroke="{LINE}" stroke-width="{1 if t%1==0 else 0}"/>')
        o.append(txt(x0 + t * dx, y0 - 12, t, fill=TX2, size=11))
    for i, k in enumerate(order):
        y = y0 + i * rh
        o.append(txt(160, y + 19, f"{k}: {V[k][0]}", anchor="end", size=12))
        c = RD if k in crit else CY
        o.append(f'<rect x="{x0+FAZ[k]*dx+1}" y="{y+6}" width="{V[k][1]*dx-2}" height="18" rx="3" fill="{c}" fill-opacity=".85"/>')
        if GP[k]:
            o.append(f'<rect x="{x0+FEZ[k]*dx+1}" y="{y+11}" width="{GP[k]*dx-2}" height="8" rx="2" fill="none" stroke="{AM}" stroke-dasharray="4 3"/>')
    yb = y0 + len(order) * rh + 22
    o.append(f'<rect x="{x0}" y="{yb-10}" width="14" height="10" fill="{RD}"/>' + txt(x0 + 20, yb, "kritischer Vorgang", anchor="start", size=11))
    o.append(f'<rect x="{x0+150}" y="{yb-10}" width="14" height="10" fill="{CY}"/>' + txt(x0 + 170, yb, "Vorgang mit Puffer", anchor="start", size=11))
    o.append(f'<rect x="{x0+310}" y="{yb-9}" width="22" height="8" fill="none" stroke="{AM}" stroke-dasharray="4 3"/>' + txt(x0 + 338, yb, "Gesamtpuffer", anchor="start", size=11))
    o.append(txt(160, y0 - 12, "Tag →", fill=TX2, size=11, anchor="end"))
    return svg_wrap(x0 + end * dx + 20, yb + 12, o, "Gantt-Diagramm des Beispielprojekts", 640)


# ---------- PSP ----------
def psp():
    o = []
    root = ("Arbeitsplätze einrichten", 330, 14)
    teil = [("1 Planung", 20, ["1.1 Bedarf analysieren", "1.2 Netzwerk planen"]),
            ("2 Beschaffung", 230, ["2.1 Angebote einholen", "2.2 Bestellen", "2.3 Lieferung prüfen"]),
            ("3 Umsetzung", 440, ["3.1 Verkabelung", "3.2 Geräte installieren", "3.3 Software einrichten"]),
            ("4 Abschluss", 650, ["4.1 Test", "4.2 Abnahme", "4.3 Einweisung"])]
    bw = 190
    o.append(f'<rect x="{root[1]}" y="{root[2]}" width="{bw+20}" height="34" rx="6" fill="{BOX}" stroke="{CY}" stroke-width="1.6"/>')
    o.append(txt(root[1] + (bw + 20) / 2, root[2] + 22, root[0], weight=700))
    cx = root[1] + (bw + 20) / 2
    o.append(f'<line x1="{cx}" y1="48" x2="{cx}" y2="64" stroke="{TX2}"/>')
    o.append(f'<line x1="{teil[0][1]+bw/2}" y1="64" x2="{teil[-1][1]+bw/2}" y2="64" stroke="{TX2}"/>')
    for name, x, aps in teil:
        o.append(f'<line x1="{x+bw/2}" y1="64" x2="{x+bw/2}" y2="78" stroke="{TX2}"/>')
        o.append(f'<rect x="{x}" y="78" width="{bw}" height="30" rx="5" fill="{BOX}" stroke="{AM}"/>')
        o.append(txt(x + bw / 2, 98, name, weight=600))
        o.append(f'<line x1="{x+12}" y1="108" x2="{x+12}" y2="{108+len(aps)*36-14}" stroke="{TX2}"/>')
        for j, a in enumerate(aps):
            y = 120 + j * 36
            o.append(f'<line x1="{x+12}" y1="{y+13}" x2="{x+24}" y2="{y+13}" stroke="{TX2}"/>')
            o.append(f'<rect x="{x+24}" y="{y}" width="{bw-24}" height="26" rx="4" fill="{BOX}" stroke="{LINE}"/>')
            o.append(txt(x + 32, y + 17, a, anchor="start", size=11.5))
    o.append(txt(20, 248, "Ebene 0: Projekt   ·   Ebene 1: Teilprojekte / Phasen   ·   unterste Ebene: Arbeitspakete", fill=TX2, size=11, anchor="start"))
    return svg_wrap(860, 258, o, "Projektstrukturplan des Beispielprojekts", 640)


# ---------- magisches Dreieck ----------
def dreieck():
    o = [f'<polygon points="210,20 50,190 370,190" fill="#38bdf810" stroke="{CY}" stroke-width="1.6"/>',
         txt(210, 14, "Leistung / Qualität", weight=700, anchor="middle"),
         txt(40, 210, "Zeit", weight=700), txt(375, 210, "Kosten", weight=700),
         txt(210, 140, "Projekt-", fill=TX2), txt(210, 156, "erfolg", fill=TX2)]
    return svg_wrap(420, 222, o, "Magisches Dreieck des Projektmanagements", 300, 420)


if __name__ == "__main__":
    print({k: (FAZ[k], FEZ[k], SAZ[k], SEZ[k], GP[k], FP[k]) for k in order}, end)
    out = {"NP_LEG": legende(), "NP_LEER": netzplan(False), "NP_FULL": netzplan(True), "GANTT": gantt(), "PSP": psp(), "DREIECK": dreieck()}
    json.dump(out, open(__import__("os").path.join(__import__("os").path.dirname(__import__("os").path.abspath(__file__)),"svg_projekt.json"), "w"), ensure_ascii=False)
