import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'lib/cloneDeep.js',
  output: {
    file: 'dist/cloneDeep.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    terser(),
    resolve(),
    commonjs()
  ],
};
