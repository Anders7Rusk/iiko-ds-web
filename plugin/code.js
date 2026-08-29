// iiko DS — простановка описаний сетов и вариантов.
// Данные приходят из ui.html (офлайн, вшиты в ui.html) через postMessage.
// Важно: в manifest НЕТ documentAccess: "dynamic-page" -> доступен весь документ,
// поиск синхронный, без loadAllPagesAsync (иначе тормоза/висит).

figma.showUI(__html__, { width: 420, height: 320 });

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

var allSetsCache = null;
function findSetById(id) {
  var node = null;
  try { node = figma.getNodeById(id); } catch (e) { node = null; }
  if (node && node.type === "COMPONENT_SET") return node;
  if (allSetsCache === null) {
    try {
      allSetsCache = figma.root.findAll(function (n) { return n.type === "COMPONENT_SET"; });
    } catch (e) {
      allSetsCache = [];
    }
  }
  for (var i = 0; i < allSetsCache.length; i++) {
    if (allSetsCache[i].id === id) return allSetsCache[i];
  }
  return null;
}

figma.ui.onmessage = function (msg) {
  if (!msg || msg.type !== "apply") return;

  var data = msg.data || {};
  var setDesc = data.set_desc || {};
  var variants = data.variants || {};

  var ids = {};
  Object.keys(setDesc).forEach(function (id) { ids[id] = true; });
  Object.keys(variants).forEach(function (id) { ids[id] = true; });
  var idList = Object.keys(ids);

  var setsFound = 0;
  var setsWritten = 0;
  var varsWritten = 0;
  var notFoundSets = [];
  var notFoundVariants = [];

  for (var i = 0; i < idList.length; i++) {
    var id = idList[i];
    var set = findSetById(id);
    if (!set) { notFoundSets.push(id); continue; }
    setsFound++;

    if (setDesc[id]) {
      try { set.description = setDesc[id]; setsWritten++; } catch (e) {}
    }

    var vmap = variants[id] || {};
    var byName = {};
    var bySorted = {};
    Object.keys(vmap).forEach(function (vn) {
      byName[normName(vn)] = vmap[vn];
      bySorted[sortedKey(vn)] = vmap[vn];
    });

    var used = {};
    var children = set.children || [];
    for (var c = 0; c < children.length; c++) {
      var child = children[c];
      if (child.type !== "COMPONENT") continue;
      var n1 = normName(child.name);
      var text = byName[n1];
      var matchedKey = n1;
      if (!text) {
        var n2 = sortedKey(child.name);
        text = bySorted[n2];
        matchedKey = n2;
      }
      if (!text) continue;
      try {
        child.description = text;
        varsWritten++;
        used[matchedKey] = true;
      } catch (e) {}
    }

    Object.keys(vmap).forEach(function (vn) {
      if (!used[normName(vn)] && !used[sortedKey(vn)]) {
        notFoundVariants.push(set.name + " / " + vn);
      }
    });
  }

  figma.ui.postMessage({
    type: "done",
    setsFound: setsFound,
    setsTotal: idList.length,
    setsWritten: setsWritten,
    varsWritten: varsWritten,
    notFoundSets: notFoundSets,
    notFoundVariants: notFoundVariants.slice(0, 40),
    notFoundVariantsCount: notFoundVariants.length
  });
};
