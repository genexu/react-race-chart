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
  }]
};
