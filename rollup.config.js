import babel from 'rollup-plugin-babel'

export default {
    input: 'src/js/nusantara-valid.js',
    output: [
        {
            file: 'dist/nusantara-valid.cjs.js',
            format: 'cjs',
            name: 'NusantaraValid'
        }, {
            file: 'dist/nusantara-valid.es.mjs',
            format: 'es',
            name: 'NusantaraValid'
        }, {
            file: 'dist/nusantara-valid.umd.js',
            format: 'umd',
            name: 'NusantaraValid'
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}