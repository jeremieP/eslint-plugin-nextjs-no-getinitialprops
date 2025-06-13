import { defineConfig } from 'vitest/config'

const config = defineConfig({
  test: {
    globals: true,
    exclude: ['node_modules'],
  },
})

export default config