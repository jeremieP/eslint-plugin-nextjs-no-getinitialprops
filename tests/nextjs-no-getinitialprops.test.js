import { RuleTester } from 'eslint'
import rule from '../lib/rules/nextjs-no-getinitialprops.js'

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2020 },
})

ruleTester.run('nextjs-no-getinitialprops', rule, {
  valid: [
    {
      code: `export async function getServerSideProps() {}`,
    },
    {
      code: `class Page extends React.Component {
        static anotherMethod() {}
      }`,
    },
  ],
  invalid: [
    {
      code: `class Page extends React.Component {
        static getInitialProps() {}
      }`,
      errors: [{ messageId: 'noGetInitialProps' }],
    },
    {
      code: `Page.getInitialProps = () => {};`,
      errors: [{ messageId: 'noGetInitialProps' }],
    },
  ],
})
