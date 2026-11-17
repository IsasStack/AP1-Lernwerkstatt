/* Ab hier: überarbeitete, ausführliche Lerntexte. relesson ersetzt den bisherigen Lerntext eines Themas komplett. */
function relesson(id, html) { const t = T.find(x => x.id === id); if (t) t.lesson = html; }
