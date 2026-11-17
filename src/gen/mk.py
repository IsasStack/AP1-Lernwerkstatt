"""gen/lNN_<id>.html (+ optionale svg_*.json) -> data/zzl_NN_<id>.js
Aufruf: python3 mk.py 02_projekt"""
import glob, json, os, re, sys

here = os.path.dirname(os.path.abspath(__file__))
svgs = {}
for f in glob.glob(os.path.join(here, "svg_*.json")):
    svgs.update(json.load(open(f, encoding="utf-8")))
for arg in sys.argv[1:]:
    nn, tid = arg.split("_", 1)
    html = open(os.path.join(here, f"l{arg}.html"), encoding="utf-8").read()
    def rep(m):
        k = m.group(1)
        if k not in svgs:
            sys.exit(f"SVG {k} fehlt")
        return f'<div class="uml">{svgs[k]}</div>'
    html = re.sub(r"(\d) (%|€|h\b|GB\b|MB\b|W\b|kWh\b|Min\.)", "\\1\u00a0\\2", html)
    html = re.sub(r"\{\{(\w+)\}\}", rep, html)
    out = os.path.join(here, "..", "data", f"zzl_{arg}.js")
    open(out, "w", encoding="utf-8").write(f"relesson({json.dumps(tid)}, {json.dumps(html, ensure_ascii=False)});\n")
    print(out, len(re.sub(r'<[^>]+>', ' ', html).split()), "Wörter (inkl. SVG-Text)")
