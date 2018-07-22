'use strict'

const parseCssUrls = require('css-url-parser')
const getHTML = require('html-get')
const { URL } = require('url')
const aigle = require('aigle')
const path = require('path')

const { getUrl } = require('@metascraper/helpers')

const REGEX_URL_CSS = /^\.css$/i

const isCss = str => REGEX_URL_CSS.test(path.extname(str) || str)

const fromHTML = (url, html) => {
  const { origin: baseUrl } = new URL(url)
  const originalUrls = parseCssUrls(html)
  const urls = originalUrls.map(url => getUrl(baseUrl, url))
  return { originalUrls, urls }
}

const cssUrls = async (url, opts) => {
  const { html } = await getHTML(url, opts)
  return fromHTML(url, html)
}

module.exports = async (urls, opts) => {
  const collection = [].concat(urls)

  const iterator = async (acc, url) => {
    if (!isCss(url)) return acc
    const { urls, originalUrls } = await cssUrls(url, opts)
    acc.urls = new Set(...acc.urls, urls)
    if (urls.length > 0) {
      acc.meta[url] = urls.map((url, index) => ({
        url,
        originalUrl: originalUrls[index]
      }))
    }
    return acc
  }

  const data = await aigle.reduce(collection, iterator, {
    urls: new Set(),
    meta: {}
  })
  return { urls: Array.from(data.urls), meta: data.meta }
}

module.exports.isCss = isCss

module.exports.html = (url, html) => {
  const { urls, originalUrls } = fromHTML(url, html)
  let buffer = html
  urls.forEach((url, index) => {
    const regex = new RegExp(originalUrls[index], 'gi')
    buffer = buffer.replace(regex, url)
  })
  return { html: buffer, urls, originalUrls }
}
