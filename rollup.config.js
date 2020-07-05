import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const path = require('path')
const pkg = require(path.resolve(__dirname, 'package.json'))
const copyleft = `/*!
  * Nusantara Valid v${pkg.version}
  * Copyright 2020 - ${pkg.author.name} (${pkg.author.url})
  * Contributors (https://github.com/magicjar/nusantara-valid/graphs/contributors)
  * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
  */`

export default {
    input: path.resolve(__dirname, 'src/ts/index.ts'),
    output: [
        {
            file: 'dist/cjs/nusantara-valid.js',
            format: 'cjs',
            banner: copyleft,
            name: 'NusantaraValid'
        }, {
            file: 'dist/esm/nusantara-valid.mjs',
            format: 'esm',
            banner: copyleft,
            name: 'NusantaraValid'
        }, {
            file: 'dist/umd/nusantara-valid.js',
            format: 'umd',
            banner: copyleft,
            name: 'NusantaraValid'
        }, {
            file: 'dist/cjs/nusantara-valid.min.js',
            format: 'cjs',
            banner: copyleft,
            name: 'NusantaraValid',
            plugins: terser()
        }, {
            file: 'dist/esm/nusantara-valid.min.mjs',
            format: 'esm',
            banner: copyleft,
            name: 'NusantaraValid',
            plugins: terser()
        }, {
            file: 'dist/umd/nusantara-valid.min.js',
            format: 'umd',
            banner: copyleft,
            name: 'NusantaraValid',
            plugins: terser()
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        typescript({
            typescript: require('typescript')
        })
    ]
}