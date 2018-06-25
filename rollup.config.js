const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const { uglify, } = require('rollup-plugin-uglify')
const { plugin: analyze, } = require('rollup-plugin-analyzer')

const opts = { limit: 5, filter: [], root: __dirname, }

const env = process.env.NODE_ENV

const config = {
  input: 'src/index.js',
  output: {
    globals: {
      react: 'React',
    },
    format: 'umd',
    name: 'flowr',
    sourcemap: true,
  },
  plugins: [
    babel({
      include: '**/src/**',
      plugins: [ 'external-helpers', ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs(),
    analyze(opts),
  ],
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  )
}

export default config
