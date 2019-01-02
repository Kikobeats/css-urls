'use strict'

const { normalizeUrl } = require('@metascraper/helpers')
const parseCssUrls = require('css-url-parser')
const { URL } = require('url')

module.exports = ({ text, url }) => {
  const { origin: baseUrl } = new URL(url)
  const urls = parseCssUrls(text)
  const normalizedUrl = urls.map(url => normalizeUrl(baseUrl, url))
  return { urls, normalizedUrl }
}
