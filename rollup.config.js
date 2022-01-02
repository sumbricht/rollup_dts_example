import ts from 'rollup-plugin-ts'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import polyfill from 'rollup-plugin-polyfill-node'

const config = [
    {
        input: "./src/entrypoint.ts",
        output: [{ file: "./dist/entrypoint.js", format: "es" }],
        plugins: [
            polyfill(),
            commonjs(),
            nodeResolve(),
            
            ts({
                tsconfig: './tsconfig.json',
                exclude: [],
            })
        ],
    },
];

export default config;