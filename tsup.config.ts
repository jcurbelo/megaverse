import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/generateMap.ts'],
  target: 'esnext',
  format: ['esm'],
});
