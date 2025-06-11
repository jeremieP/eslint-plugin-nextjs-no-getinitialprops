import noGetInitialProps from './lib/rules/nextjs-no-getinitialprops.js'

const rules = {
  'nextjs-no-getinitialprops': noGetInitialProps,
}

const plugin = {
  rules,
  flat: {
    plugins: {
      'nextjs-no-getinitialprops': {
        rules,
      },
    },
    rules: {
      'nextjs-no-getinitialprops/nextjs-no-getinitialprops': 'error',
    },
  },
};

export default plugin