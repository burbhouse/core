import './src/styles/theme.scss'

try {
  var foo = require('./site/browser.js');
}
catch (e) {
  if (e.code === 'MODULE_NOT_FOUND')
    console.log('Site browser.js not found.');
  else
    throw e;
}
