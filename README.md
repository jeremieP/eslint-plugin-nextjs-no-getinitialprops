#eslint-plugin-nextjs-no-getinitialprops

[![npm version](https://img.shields.io/npm/v/eslint-plugin-no-getinitialprops.svg)](https://www.npmjs.com/package/eslint-plugin-no-getinitialprops)

> ESLint plugin to disallow usage of `getInitialProps` in Next.js applications.

---

## ❌ Why?

`getInitialProps` is considered legacy in Next.js and is discouraged in favor of `getStaticProps`, `getServerSideProps`, or newer data fetching methods in the App Router.

This plugin enforces that `getInitialProps` is not used anywhere in your codebase.

---

## 📦 Installation

```bash
npm install --save-deveslint-plugin-nextjs-no-getinitialprops
```

or with yarn:

```bash
yarn add --deveslint-plugin-nextjs-no-getinitialprops
```

---

## 🛠 Usage

Add the plugin and rule to your ESLint config:

```json
{
  "plugins": ["nextjs-no-getinitialprops"],
  "rules": {
    "nextjs-no-getinitialprops/nextjs-no-getinitialprops": "error"
  }
}
```

---

## ✅ Rule: `nextjs-no-getinitialprops`

This rule disallows using or assigning `getInitialProps` on Page components.

### ❌ Incorrect Examples

```js
// Static method in a React class component
class Page extends React.Component {
  static getInitialProps() {
    return {};
  }
}

// Direct assignment
Page.getInitialProps = () => {
  return {};
};

// Object literal assignment
const Page = {};
Page.getInitialProps = function () {
  return {};
};
```

### ✅ Correct Examples

```js
// Preferred Next.js data fetching method
export async function getServerSideProps() {
  return { props: {} };
}

// Safe static method
class Page extends React.Component {
  static someOtherMethod() {
    return {};
  }
}

// Valid assignment
const Page = {};
Page.render = () => <div>Hello</div>;
```

---

## 📚 Examples of Detected Patterns

The plugin will detect and report:

| Pattern Type             | Code Snippet                                       |
|--------------------------|----------------------------------------------------|
| Static class method      | `static getInitialProps() {}`                      |
| Assignment expression    | `Page.getInitialProps = () => {}`                 |
| Property inside object   | `Page = {}; Page.getInitialProps = function () {}`|

All of these will trigger a linting error with the message:

> "Unexpected use of getInitialProps method or function"

---

## 🧪 Running Tests

To run the tests:

```bash
npm install
npm test
```

---

## 📄 License

MIT © 2025
