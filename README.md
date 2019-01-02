# css-urls

![Last version](https://img.shields.io/github/tag/Kikobeats/css-urls.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/css-urls/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/css-urls)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/css-urls.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/css-urls)
[![Dependency status](https://img.shields.io/david/Kikobeats/css-urls.svg?style=flat-square)](https://david-dm.org/Kikobeats/css-urls)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/css-urls.svg?style=flat-square)](https://david-dm.org/Kikobeats/css-urls#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/css-urls.svg?style=flat-square)](https://www.npmjs.org/package/css-urls)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Get all URLs referenced from stylesheet files

## Install

```bash
$ npm install css-urls --save
```

## Usage

### From single URL

```js
(async () => {
  const { urls, meta } = await cssUrls('https://kikobeats.com/styles.css')
})()
```

### From a collection of URLs

```js
(async () => {
  const { urls, meta } = await cssUrls([
    'https://elenatorro.github.io/build/assets/style.css',
    'https://kikobeats.com/styles.css'
  ])
})()
```

## API

### cssUrls(url, [options])

#### url

*Required*<br>
Type: `string`|`array`

The target URL(s) for extracting urls referenced

#### options

Type: `object`

Use it for providing [html-get#options](https://github.com/Kikobeats/html-get#options).

## Related

- [html-urls](https://github.com/Kikobeats/html-urls) – Get all urls from a HTML markup.
- [xml-urls](https://github.com/Kikobeats/xml-urls) – Get all urls from a Feed/Atom/RSS/Sitemap xml markup.

## License

**css-urls** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/css-urls/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/css-urls/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
