'use strict'

const { normalizeUrl } = require('@metascraper/helpers')
const parseCssUrls = require('css-url-parser')
const { URL } = require('url')

module.exports = ({ text, url }) => {
  const { origin: baseUrl } = new URL(url)

  return parseCssUrls(text).map(url => ({
    url,
    normalizedUrl: normalizeUrl(baseUrl, url)
  }))
}
