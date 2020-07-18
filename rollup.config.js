import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'

const path = require('path')
const pkg = require(path.resolve(__dirname, 'package.json'))
const format = process.env.FORMAT ? process.env.FORMAT : 'umd'
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
            file: `dist/${format}/nusantara-valid.js`,
            format: format,
            banner: copyleft,
            name: 'NusantaraValid'
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