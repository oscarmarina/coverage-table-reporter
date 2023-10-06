import { defineConfig } from 'vite';
import { resolve } from 'path';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/coverageTableReporter.js'),
      name: 'coverageTableReporter',
      formats: ['es', 'umd'],
      fileName: (format) =>
        format === 'umd'
          ? `${format}/coverage-table-reporter.${format}.cjs`
          : `coverage-table-reporter.module.js`,
    },
  },
  plugins: [externalizeDeps()],
});
