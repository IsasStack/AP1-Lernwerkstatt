"""Exportiert die Lerninhalte der AP1-Lernwerkstatt als Markdown für GitHub.
Aufruf (im Ordner src): node dump.js && python export_md.py .."""
import json, os, re, sys
from bs4 import BeautifulSoup
from markdownify import markdownify as mdify

OUT = sys.argv[1]
WD = os.path.join(OUT, "wissen")
os.makedirs(os.path.join(WD, "img"), exist_ok=True)
d = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.json"), encoding="utf-8"))

ALERT = {"tip": "TIP", "merke": "IMPORTANT", "warn": "WARNING"}



def write_svg(raw, fn):
    raw = re.sub(r'\sstyle="[^"]*"', "", raw, count=1)
    vb = re.search(r'viewBox="([^"]+)"', raw).group(1).split()
    raw = re.sub(r'\swidth="100%"', "", raw, count=1)
    head = f'<svg xmlns="http://www.w3.org/2000/svg" width="{vb[2]}" height="{vb[3]}" font-family="Inter,Arial,sans-serif" font-size="12"'
    raw = raw.replace("<svg", head, 1)
    raw = re.sub(r"(<svg[^>]*>)", r'\1<rect x="0" y="0" width="100%" height="100%" fill="#0f141b"/>', raw, count=1)
    raw = re.sub(r"&(?!#?\w+;)", "&amp;", raw).replace("&nbsp;", "&#160;")
    open(os.path.join(WD, "img", fn), "w", encoding="utf-8").write(raw)

def md_inline(html):
    return mdify(html, heading_style="ATX", bullets="-", strip=["span"]).strip()


def quote(text):
    return "\n".join("> " + l if l.strip() else ">" for l in text.splitlines())


def lesson_md(html, tid):
    soup = BeautifulSoup(html, "html.parser")
    blocks, n_svg = [], 0
    for el in list(soup.children):
        name = getattr(el, "name", None)
        if name is None:
            txt = str(el).strip()
            if txt:
                blocks.append(txt)
            continue
        cls = (el.get("class") or [""])[0]
        if name == "div" and cls == "uml":
            n_svg += 1
            fn = f"{tid}-{n_svg}.svg"
            raws = re.findall(r"<svg.*?</svg>", html, flags=re.S)
            write_svg(raws[n_svg - 1], fn)
            label = re.search(r'aria-label="([^"]*)"', raws[n_svg - 1])
            blocks.append(f"![{label.group(1) if label else 'Diagramm'}](img/{fn})")
        elif name == "div" and cls in ALERT:
            inner = el.decode_contents()
            inner = re.sub(r"<table.*?</table>", lambda m: "\n\n" + clean_table(m.group(0)) + "\n\n", inner, flags=re.S)
            blocks.append(quote(f"[!{ALERT[cls]}]\n" + md_inline(inner)))
        elif name == "table":
            blocks.append(clean_table(str(el)))
        else:
            blocks.append(md_inline(str(el)))
    md = "\n\n".join(b for b in blocks if b)
    md = re.sub(r"^### ", "## ", md, flags=re.M)
    return re.sub(r"\n{3,}", "\n\n", md)


def clean_table(html):
    t = BeautifulSoup(html, "html.parser")
    for tag in t.find_all(True):
        tag.attrs = {k: v for k, v in tag.attrs.items() if k in ("colspan", "rowspan")}
    return str(t)


def esc(s):
    return str(s).replace("|", "\\|").replace("\n", " ")


def q_md(i, q):
    out = [f"**{q.get('lbl') or str(i) + '.'}** {md_inline(q['q'])}" + (f" *({q['p']} Punkte)*" if q.get("lbl") and q.get("p") else "")]
    if q["t"] in ("sc", "mc"):
        out += [f"- {chr(65 + k)}) {md_inline(o)}" for k, o in enumerate(q["o"])]
    if q["t"] == "sc":
        sol = f"**{chr(65 + q['a'])}) {md_inline(q['o'][q['a']])}**"
    elif q["t"] == "mc":
        sol = "**" + ", ".join(f"{chr(65 + a)}) {md_inline(q['o'][a])}" for a in q["a"]) + "**"
    elif q["t"] == "num":
        sol = f"**{q['a']} {q.get('unit', '')}**".replace(" **", "**")
    else:
        a = str(q["a"])
        sol = "**Musterlösung" + (f" ({q['p']} P)" if q.get("p") else "") + ":** " + (md_inline(a) if "\n" not in a else "\n\n```text\n" + a + "\n```\n")
    if q.get("e"):
        sol += "<br>" + md_inline(q["e"])
    out.append(f"\n<details><summary>Lösung</summary>\n\n{sol}\n\n</details>\n")
    return "\n".join(out)


def stars(w):
    return "★" * w + "☆" * (3 - w)


index_rows = []
for n, t in enumerate(d["T"], 1):
    fn = f"{n:02d}_{t['id']}.md"
    index_rows.append((fn, t))
    parts = [
        f"# {t['icon']} {t['title']}",
        f"*Bereich: {t['area']} · Prüfungsrelevanz: {stars(t['weight'])}*",
        f"> {t['summary']}",
        "[⬅ Inhaltsverzeichnis](README.md)",
        "---",
        lesson_md(t["lesson"], t["id"]),
        "---",
        f"## 🃏 Karteikarten ({len(t['cards'])})",
        "| Frage | Antwort |\n|---|---|\n" + "\n".join(f"| {esc(md_inline(a))} | {esc(md_inline(b))} |" for a, b in t["cards"]),
        f"## ✍️ Übungsfragen ({len(t['qs'])})",
        "\n".join(q_md(i, q) for i, q in enumerate(t["qs"], 1)),
        "[⬅ Inhaltsverzeichnis](README.md)",
    ]
    open(os.path.join(WD, fn), "w", encoding="utf-8").write("\n\n".join(parts) + "\n")


def att_md(c):
    soup = BeautifulSoup(c["att"], "html.parser")
    out = []
    for el in soup.find_all(["table", "pre", "svg"]):
        if el.find_parent(["table", "pre", "svg"]):
            continue
        if el.name == "table":
            out.append(clean_table(str(el)))
        elif el.name == "pre":
            out.append("```text\n" + el.get_text().strip("\n") + "\n```")
        else:
            fn = f"{c['id']}.svg"
            write_svg(re.search(r"<svg.*?</svg>", c["att"], flags=re.S).group(0), fn)
            out.append(f"![Anlage {c['title']}](img/{fn})")
    return "\n\n".join(out)


def case_md(c, attachment=False):
    p = [f"## {c['icon']} {c['title']}", "*" + " · ".join(c["tags"]) + "*", f"**Situation:** {md_inline(c['sit'])}"]
    if attachment and c.get("att"):
        p += ["**Anlage:**", att_md(c)]
    p += [q_md(i, q) for i, q in enumerate(c["steps"], 1)]
    return "\n\n".join(p)


open(os.path.join(WD, "fallstudien.md"), "w", encoding="utf-8").write(
    "# 🏢 Fallstudien\n\nTypische AP1-Situationen: Hardware, Betriebssystem, Software und Lizenzen für ein Unternehmen auswählen und begründen.\n\n[⬅ Inhaltsverzeichnis](README.md)\n\n"
    + "\n\n---\n\n".join(case_md(c) for c in d["CASES"]) + "\n")
open(os.path.join(WD, "anlagen.md"), "w", encoding="utf-8").write(
    "# 📎 Aufgaben mit Anlagen\n\nWie in der echten Prüfung: Datenblätter, Verträge, Logs und Angebote auswerten.\n\n[⬅ Inhaltsverzeichnis](README.md)\n\n"
    + "\n\n---\n\n".join(case_md(c, True) for c in d["ANL"]) + "\n")

def exam_md(e):
    p = [f"## {e['icon']} {e['title']}", f"**Ausgangssituation:** {md_inline(e['sit'])}", "*90 Minuten · 100 Punkte · Lösungen zum Aufklappen*"]
    for i, s in enumerate(e["steps"], 1):
        if s.get("h"):
            p.append("### " + s["h"])
        if s.get("ctx"):
            p.append("> " + md_inline(s["ctx"]))
        if s.get("att"):
            p += ["**Anlage:**", att_md({"att": s["att"], "id": f"{e['id']}_{i}", "title": e["title"]})]
        p.append(q_md(i, s))
    return "\n\n".join(p)


if d.get("EXAMS"):
    open(os.path.join(WD, "pruefungssaetze.md"), "w", encoding="utf-8").write(
        "# ⏱️ Prüfungssätze im AP1-Format\n\nJe eine Firma als Ausgangssituation, vier Aufgaben zu je 25 Punkten, offene Teilaufgaben mit Anlagen. Inoffizielle Übungsaufgaben – am besten in der App mit Timer bearbeiten.\n\n[⬅ Inhaltsverzeichnis](README.md)\n\n"
        + "\n\n---\n\n".join(exam_md(e) for e in d["EXAMS"]) + "\n")

groups = {}
for a, full, expl in d["ABK"]:
    k = a[0].upper()
    groups.setdefault(k if k.isalpha() else "0–9", []).append((a, full, expl))
gl = ["# 📖 Glossar & Abkürzungen", f"{len(d['ABK'])} Begriffe, alphabetisch.", "[⬅ Inhaltsverzeichnis](README.md)",
      " · ".join(f"[{k}](#{k.lower() if k != '0–9' else '09'})" for k in groups)]
for k, rows in groups.items():
    gl.append(f"## {k}")
    gl.append("| Abkürzung | Ausgeschrieben | Bedeutung |\n|---|---|---|\n" + "\n".join(f"| **{esc(a)}** | {esc(f)} | {esc(e)} |" for a, f, e in rows))
open(os.path.join(WD, "glossar.md"), "w", encoding="utf-8").write("\n\n".join(gl) + "\n")

tot_c = sum(len(t["cards"]) for t in d["T"])
tot_q = sum(len(t["qs"]) for t in d["T"])
toc = ["# 📚 AP1 – Wissen zum Nachschlagen", "[⬅ zurück zum Repo](../README.md)", "## Themen",
       "| # | Thema | Bereich | Relevanz | Karten | Fragen |\n|---|---|---|---|---|---|\n" + "\n".join(
           f"| {n} | [{t['icon']} {t['title']}]({fn}) | {t['area']} | {stars(t['weight'])} | {len(t['cards'])} | {len(t['qs'])} |"
           for n, (fn, t) in enumerate(index_rows, 1)),
       "## Extras",
       f"- [⏱️ Prüfungssätze im AP1-Format](pruefungssaetze.md) – {len(d.get('EXAMS', []))} komplette Aufgabensätze mit je 100 Punkten",
       f"- [🏢 Fallstudien]({'fallstudien.md'}) – {len(d['CASES'])} Unternehmen, Auswahl & Begründung",
       f"- [📎 Aufgaben mit Anlagen](anlagen.md) – {len(d['ANL'])} Aufgaben",
       f"- [📖 Glossar & Abkürzungen](glossar.md) – {len(d['ABK'])} Begriffe"]
open(os.path.join(WD, "README.md"), "w", encoding="utf-8").write("\n\n".join(toc) + "\n")
print("ok", tot_c, tot_q)
