'use strict'

const path = require('path')
const test = require('ava')
const fs = require('fs')

const cssUrls = require('..')

test('inline css', t => {
  const url = 'https://kikobeats.com'
  const text =
    '<div class="db w-100 h0 pb50 bg-center cover mb2" style="background-image: url("/images/windtoday.png"); will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);" data-tilt="" data-tilt-max="10" data-tilt-glare="" data-tilt-max-glare="0.8" data-tilt-reverse="true"><div class="js-tilt-glare" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden;"><div class="js-tilt-glare-inner" style="position: absolute; top: 50%; left: 50%; pointer-events: none; background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%); width: 1104px; height: 1104px; transform: rotate(180deg) translate(-50%, -50%); transform-origin: 0% 0% 0px; opacity: 0;"></div></div></div>'
  t.snapshot(cssUrls({ url, text }))
})

test('from stylesheet', async t => {
  const url = 'https://elenatorro.github.io'

  const text = fs.readFileSync(
    path.resolve(__dirname, 'fixtures/style.css'),
    'utf8'
  )

  t.snapshot(cssUrls({ url, text }))
})
