export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Block use of getInitialProps function on your Next.js App',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      noGetInitialProps: 'Unexpected use of getInitialProps method or function',
    },
    fixable: "code",
    schema: [],
  },

  create(context) {
    return {
      // Class Method definition case
      MethodDefinition(node) {
        if (node.static && node.key.name === 'getInitialProps') {
          context.report({
            node,
            messageId: 'noGetInitialProps',
          })
        }
      },
      // Property case
      Property(node) {
        if (node.key.name === 'getInitialProps') {
          context.report({
            node,
            messageId: 'noGetInitialProps',
          })
        }
      },
      // Page.getInitialProps case
      AssignmentExpression(node) {
        const { left } = node;
        if (
          left.type === 'MemberExpression' &&
          left.property.name === 'getInitialProps'
        ) {
          context.report({
            node,
            messageId: 'noGetInitialProps',
          })
        }
      },
    }
  }
}
