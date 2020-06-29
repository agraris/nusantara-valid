import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/ts/nusantara-valid.ts',
    output: [
        {
            file: 'dist/cjs/nusantara-valid.js',
            format: 'cjs',
            name: 'NusantaraValid'
        }, {
            file: 'dist/esm/nusantara-valid.mjs',
            format: 'es',
            name: 'NusantaraValid'
        }, {
            file: 'dist/umd/nusantara-valid.js',
            format: 'umd',
            name: 'NusantaraValid'
        }, {
            file: 'dist/cjs/nusantara-valid.min.js',
            format: 'cjs',
            name: 'NusantaraValid',
            plugins: [terser()]
        }, {
            file: 'dist/esm/nusantara-valid.min.mjs',
            format: 'esm',
            name: 'NusantaraValid',
            plugins: [terser()]
        }, {
            file: 'dist/umd/nusantara-valid.min.js',
            format: 'umd',
            name: 'NusantaraValid',
            plugins: [terser()]
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