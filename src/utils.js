import deburr from 'lodash/deburr'
import kebabCase from 'lodash/kebabCase'

export const slugify = text => kebabCase(deburr(text))


export const mkdirP = (root, cache, level) => {
  function walk (level) {
    cache.length = level + 1;
    var obj = cache[level];
    if (!obj) {
      var parent = (level > 1) ? walk(level-1) : root;
      obj = { items: [], level: level };
      cache = cache.concat([obj, obj]);
      parent.items.push(obj);
    }
    return obj;
  }

  return walk(level)
}
