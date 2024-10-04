import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/phase-1.ts'],
  target: 'esnext',
  format: ['esm'],
});
