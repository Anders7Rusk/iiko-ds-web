// iiko DS — описания компонентов. Применение ПО ОДНОМУ компоненту.
// Данные приходят из ui.html (он качает index.json и файл конкретного компонента).
// Никаких findAll/loadAllPagesAsync — только точечный getNodeById + паузы, чтобы Figma не висла.

figma.showUI(__html__, { width: 460, height: 560 });

function normName(name) {
  return String(name)
    .split(",")
    .map(function (p) { return p.trim().replace(/\s+/g, " "); })
    .filter(function (p) { return p.length > 0; })
    .join(", ");
}

function sortedKey(name) {
  return normName(name).split(", ").sort().join(", ");
}

function pause() {
  return new Promise(function (resolve) { setTimeout(resolve, 0); });
}

function findSet(id) {
  var node = null;
  try { node = figma.getNodeById(id); } catch (e) { node = null; }
  if (node && node.type === "COMPONENT_SET") return node;
  return null;
}

async function applyOne(item) {
  var res = { id: item.id, name: item.name, page: item.page || "", found: false, setWritten: false,
              md: false, vars: 0, linkCleared: false, notFound: [], error: "" };

  var set = findSet(item.id);
  if (!set) { res.error = "компонент не найден в этом файле"; return res; }
  res.found = true;

  if (item.set_md) {
    try { set.descriptionMarkdown = item.set_md; res.setWritten = true; res.md = true; }
    catch (e) {
      try { set.description = item.set_desc || ""; res.setWritten = true; }
      catch (e2) { res.error = "описание сета: " + (e2 && e2.message ? e2.message : String(e2)); }
    }
  } else if (item.set_desc) {
    try { set.description = item.set_desc; res.setWritten = true; } catch (e) {}
  }

  try {
    if (set.documentationLinks && set.documentationLinks.length) {
      set.documentationLinks = [];
      res.linkCleared = true;
    }
  } catch (e) {}

  var vmap = (item.variants_md && Object.keys(item.variants_md).length)
    ? item.variants_md : (item.variants || {});
  var byName = {}, bySorted = {};
  Object.keys(vmap).forEach(function (vn) {
    byName[normName(vn)] = vmap[vn];
    bySorted[sortedKey(vn)] = vmap[vn];
  });

  var used = {};
  var children = set.children || [];
  for (var c = 0; c < children.length; c++) {
    var child = children[c];
    if (child.type !== "COMPONENT") continue;
    var k1 = normName(child.name);
    var text = byName[k1];
    var key = k1;
    if (!text) { var k2 = sortedKey(child.name); text = bySorted[k2]; key = k2; }
    if (!text) continue;
    try { child.descriptionMarkdown = text; res.vars++; used[key] = true; }
    catch (e) {
      try { child.description = text.replace(/\*\*/g, ""); res.vars++; used[key] = true; } catch (e2) {}
    }
    if (res.vars % 20 === 0) await pause();   // даём Figma дышать
  }

  Object.keys(vmap).forEach(function (vn) {
    if (!used[normName(vn)] && !used[sortedKey(vn)]) res.notFound.push(vn);
  });

  return res;
}

figma.ui.onmessage = async function (msg) {
  if (!msg) return;

  if (msg.type === "apply") {
    var items = msg.items || [];
    var results = [];
    for (var i = 0; i < items.length; i++) {
      figma.ui.postMessage({ type: "progress", index: i, total: items.length, name: items[i].name });
      await pause();
      var r = await applyOne(items[i]);
      results.push(r);
      await pause();
    }
    figma.ui.postMessage({ type: "done", results: results });
  }
};
