import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'

const path = require('path')
const pkg = require(path.resolve(__dirname, 'package.json'))
const format = process.env.FORMAT ? process.env.FORMAT : 'umd'
const extended = process.env.EXTENDED
const copyleft = `/*!
  * Nusantara Valid v${pkg.version}
  * Copyright 2020 - ${pkg.author.name} (${pkg.author.url})
  * Contributors (https://github.com/magicjar/nusantara-valid/graphs/contributors)
  * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
  */`
let inName = "index"
let outName = "nusantara-valid"

if (extended) {
    inName = "index.extended"
    outName = "nusantara-valid.extended"
}

export default {
    input: path.resolve(__dirname, `src/ts/${inName}.ts`),
    output: [
        {
            file: `dist/${format}/${outName}.js`,
            format: format,
            banner: copyleft,
            name: 'NusantaraValid',
            sourcemap: true
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