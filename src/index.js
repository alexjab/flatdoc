/*!
 * Flatdoc - (c) 2013, 2014 Rico Sta. Cruz
 * http://ricostacruz.com/flatdoc
 * @license MIT
 */

import $ from "jquery"

import 'highlight.js/styles/atom-one-dark.css'

import './style.css'
import './script'
import * as remote from './remote'
import * as markdown from './markdown'

class Flatdoc {
  preRender () {
    $('.flatdoc').trigger('flatdoc:loading');
  }

  postRender () {
    $('.flatdoc').trigger('flatdoc:ready');
  }

  getFile (urls, callback) {
    const fileUrl = urls instanceof Array ? urls : [urls]

    remote.loadData(fileUrl, '', callback)
  }

  renderElements({ title, content, menu}) {
    $('title').html(title)
    $('.content').html(content.find('>*'))
    $('.menu').html(menu)
  }

  scrollToSection () {
    const sectionId = location.hash.substr(1);
    if (!sectionId) return

    const el = document.getElementById(sectionId);
    if (!el) return

    el.scrollIntoView(true);
  }

  run (url) {
    this.preRender()

    this.getFile(url, (err, text) => {
      if (err) {
        console.error('[Flatdoc] fetching Markdown data failed.', err);
        return;
      }

      const { title, content, menu } = markdown.parseMarkdown(text)

      this.renderElements({ title, content, menu })
      this.scrollToSection()

      this.postRender()
    });
  }
}

export const run = (filePath) => new Flatdoc().run(filePath)
