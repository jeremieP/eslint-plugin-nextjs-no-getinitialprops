import noGetInitialProps from './lib/rules/nextjs-no-getinitialprops.js'
import fs from 'fs'


const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const rules = {
  'nextjs-no-getinitialprops': noGetInitialProps,
}

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules,
  configs: {
    recommended: [
      {
        plugins: { [pkg.name]: plugin },
        rules: {
          [`${pkg.name}/nextjs-no-getinitialprops`]: 'error',
        },
      }
    ],
  },
}

export default plugin