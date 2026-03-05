'use strict'

const { normalizeUrl } = require('@metascraper/helpers')
const execall = require('execall')
const stableRegex = require('stable-regex')
const urlRegex = require('url-regex-safe')
const { URL } = require('url')

const CSS_URL_FUNCTION_PATTERN = /url\((.*?)\)/gi
const ABSOLUTE_URL_PATTERN = urlRegex({ exact: true, strict: false })
const normalizeMatch = input => input.replace(/['"]+/g, '').trim()
const toCssUrlValue = input => {
  const value = normalizeMatch(input)
  if (!stableRegex(ABSOLUTE_URL_PATTERN, value)) return value
  return value
}

module.exports = ({ text, url }) => {
  const { origin: baseUrl } = new URL(url)
  if (!stableRegex(CSS_URL_FUNCTION_PATTERN, text)) return []
  CSS_URL_FUNCTION_PATTERN.lastIndex = 0

  return Array.from(
    execall(CSS_URL_FUNCTION_PATTERN, text).reduce((acc, match) => {
      match.subMatches.forEach(match => acc.add(toCssUrlValue(match)))
      return acc
    }, new Set())
  ).map(url => ({
    url,
    normalizedUrl: normalizeUrl(baseUrl, url)
  }))
}
