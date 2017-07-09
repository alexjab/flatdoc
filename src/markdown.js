import marked from 'marked'
import hljs from 'highlight.js'
import $ from "jquery"

import * as utils from './utils'

marked.setOptions({
  highlight: (code, lang) => {
    if (!lang) return code

    return hljs.highlight(lang, code).value
  }
});

const LINK_BUTTON_REGEXP = /^(.*) >$/

/**
 * Adds IDs to headings.
 */
function addIDs(content) {
  let slugs = ['', '', '']

  content.find('h1, h2, h3').each((i, elem) => {
    const heading = $(elem)
    const num = parseInt(elem.nodeName[1])

    let slug = utils.slugify(heading.text())

    if (num > 1) slug = slugs[num - 2] + '_' + slug
    slugs.length = num - 1
    slugs = slugs.concat([slug, slug])

    heading.attr('id', slug)
  });
};

function buttonize(content) {
  content.find('a').each((i, elem) => {
    const a = $(elem);

    const match = LINK_BUTTON_REGEXP.test(a.text())
    if (!match) return

    a.text(match[1]).addClass('button')
  });
};

function getMenuStruct(content) {
  const root = { items: [], id: '', level: 0 }
  const cache = [root]

  content.find('h1, h2, h3').each((i, elem) => {
    const heading = $(elem);
    const level = parseInt(elem.nodeName.substr(1))

    const parent = utils.mkdirP(root, cache, level-1);

    const obj = { section: heading.text(), items: [], level: level, id: heading.attr('id') };
    parent.items.push(obj);
    cache[level] = obj;
  });

  return root;
};

function getMenuElements(menu) {
  var $el = $("<ul>");

  function process(node, $parent) {
    var id = node.id || 'root';

    var $li = $('<li>')
      .attr('id', id + '-item')
      .addClass('level-' + node.level)
      .appendTo($parent);

    if (node.section) {
      var $a = $('<a>')
        .html(node.section)
        .attr('id', id + '-link')
        .attr('href', '#' + node.id)
        .addClass('level-' + node.level)
        .appendTo($li);
    }

    if (node.items.length > 0) {
      var $ul = $('<ul>')
        .addClass('level-' + (node.level+1))
        .attr('id', id + '-list')
        .appendTo($li);

      node.items.forEach(function(item) {
        process(item, $ul);
      });
    }
  }

  process(menu, $el);
  return $el;
};

function getTitle (content) {
  return content.find('h1').eq(0).text()
}

export const parseMarkdown = (source) => {
  const content = $("<div>" + marked(source))
  addIDs(content)
  buttonize(content)

  const title = getTitle(content)
  const menu = getMenuStruct(content)

  return { title, content, menu: getMenuElements(menu) }
}
