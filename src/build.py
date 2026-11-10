"""Baut die App aus den Quelldateien zu ../index.html zusammen.
Aufruf (im Ordner src):  python build.py
Danach optional die Markdown-Wissensseiten neu erzeugen:
  node dump.js && python export_md.py .."""
import glob, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
shell = open("shell.html", encoding="utf-8").read()
data = "\n".join(open(f, encoding="utf-8").read() for f in sorted(glob.glob("data/*.js")))
app = "\n".join(open(f, encoding="utf-8").read() for f in ("app.js", "app2.js", "app3.js", "app4.js"))
out = shell.replace("/*DATA*/", data).replace("/*APP*/", app)
open("../index.html", "w", encoding="utf-8").write(out)
print("index.html gebaut:", len(out) // 1024, "KB")
