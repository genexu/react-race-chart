import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

module.exports = {
  input: 'src/index.js',
  output: [{
    file: pkg.esm,
    format: 'esm'
  }, {
    file: pkg.cjs,
    format: 'cjs',
  }, {
    file: pkg.umd,
    format: 'umd',
    name: 'ReactRaceChart',
    sourcemap: true
  }],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    babel({ 
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs()
  ],
  external: [
    'react',
  ],
};
