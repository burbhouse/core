import './src/browser.js'

try {
  require(`./site/browser.js`)
} catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    console.log('Site browser scripts not found.')
  }
}
