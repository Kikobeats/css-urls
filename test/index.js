'use strict'

const test = require('ava')
const cssUrls = require('..')

test('follow stylesshet urls', async t => {
  const { urls, meta } = await cssUrls(
    'https://elenatorro.github.io/build/assets/style.css',
    { prerender: false }
  )
  t.snapshot(urls)
  t.snapshot(meta)
})

test("don't follow non stylesheet urls", async t => {
  const { urls, meta } = await cssUrls('https://google.com', {
    prerender: false
  })
  t.snapshot(urls)
  t.snapshot(meta)
})

test('from a mixed array of urls', async t => {
  const { urls, meta } = await cssUrls(
    [
      'https://elenatorro.github.io/build/assets/style.css',
      'https://google.com'
    ],
    { prerender: false }
  )
  t.snapshot(urls)
  t.snapshot(meta)
})
