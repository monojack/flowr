'use strict';

var marble = require('marble');

module.exports = {
  basePath: '/flowr',
  deployOptions: {
    branch: 'gh-pages',
  },
  envOptions: {
    dev: {
      basePath: '',
    },
  },
  metalComponents: ['electric-marble-components', 'marble-topbar'],
  sassOptions: {
    includePaths: ['node_modules', marble.src],
  },
  vendorSrc: ['node_modules/marble/build/fonts/**'],
  codeMirrorLanguages: ['css', 'xml', 'soy', 'javascript', 'jsx', 'shell'],
};
