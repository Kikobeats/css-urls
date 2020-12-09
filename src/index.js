'use strict'

const { normalizeUrl } = require('@metascraper/helpers')
const cssUrl = require('css-url-regex')
const execall = require('execall')
const { URL } = require('url')

module.exports = ({ text, url }) => {
  const { origin: baseUrl } = new URL(url)

  return Array.from(
    execall(cssUrl(), text).reduce((acc, match) => {
      match.subMatches.forEach(match => acc.add(match.replace(/['"]+/g, '')))
      return acc
    }, new Set())
  ).map(url => ({
    url,
    normalizedUrl: normalizeUrl(baseUrl, url)
  }))
}
