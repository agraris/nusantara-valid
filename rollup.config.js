import babel from '@rollup/plugin-babel'

export default {
    input: 'src/js/nusantara-valid.js',
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
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        })
    ]
}