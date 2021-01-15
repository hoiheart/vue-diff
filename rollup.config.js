import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import css from 'rollup-plugin-css-only'
import babel from '@rollup/plugin-babel'

const options = {
  input: 'src/index.ts',
  external: ['vue'],
  plugins: [
    vue({
      preprocessStyles: true,
      postcssPlugins: [
        autoprefixer()
      ]
    }),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.build.json')
    }),
    resolve(),
    commonjs(),
    scss({
      processor: css => postcss([autoprefixer()])
    }),
    css({ output: 'dist/index.css' })
  ]
}

const babelOptions = {
  babelHelpers: 'runtime',
  exclude: /node_modules/,
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
}

export default [
  // esm
  {
    ...options,
    output: {
      file: 'dist/index.js',
      format: 'esm'
    }
  },
  // es5 build
  {
    ...options,
    output: {
      file: 'dist/index.es5.js',
      format: 'esm'
    },
    plugins: [
      ...options.plugins,
      babel({
        ...babelOptions,
        plugins: [
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ],
        presets: [
          ['@babel/preset-env', {
            corejs: 3,
            modules: false,
            useBuiltIns: 'usage'
          }]
        ]
      })
    ]
  },
  {
    ...options,
    input: 'src/index.runtime.ts',
    output: {
      file: 'dist/index.runtime.js',
      format: 'umd',
      esModule: false,
      globals: {
        vue: 'Vue'
      },
      name: 'VueUniversalModal',
      exports: 'default'
    },
    plugins: [
      ...options.plugins,
      babel({
        ...babelOptions,
        plugins: [
          '@babel/plugin-transform-runtime'
        ],
        presets: [
          ['@babel/preset-env', {
            corejs: 3,
            useBuiltIns: 'usage'
          }]
        ]
      })
    ]
  }
]
