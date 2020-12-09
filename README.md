# css-urls

![Last version](https://img.shields.io/github/tag/Kikobeats/css-urls.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/css-urls/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/css-urls)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/css-urls.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/css-urls)
[![Dependency status](https://img.shields.io/david/Kikobeats/css-urls.svg?style=flat-square)](https://david-dm.org/Kikobeats/css-urls)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/css-urls.svg?style=flat-square)](https://david-dm.org/Kikobeats/css-urls#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/css-urls.svg?style=flat-square)](https://www.npmjs.org/package/css-urls)

> Get all URLs inside stylesheets

## Install

```bash
$ npm install css-urls --save
```

## Usage

```js
const got = require('got')
const cssUrls = require('css-urls')

;(async () => {
  const url = process.argv[2]
  if (!url) throw new TypeError('Need to provide an url as first argument.')
  const text = await got(url, { resolveBodyOnly: true })
  const links = cssUrls({ text, url })
  links.forEach(({ url, normalizedUrl }) => console.log(normalizedUrl))
})()
```

## API

### cssUrls({url, text})

#### url

*Required*<br>
Type: `string`

The target URL(s) for extracting URLs referenced.

#### text

*Required*<br>
Type: `string`

The

The target URL(s) for extracting URLs referenced.

## Related

- [html-urls](https://github.com/Kikobeats/html-urls) – Get all urls from a HTML markup.
- [xml-urls](https://github.com/Kikobeats/xml-urls) – Get all urls from a Feed/Atom/RSS/Sitemap xml markup.

## License

**css-urls** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/css-urls/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/css-urls/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
