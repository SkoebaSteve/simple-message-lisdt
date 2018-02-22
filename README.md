# ZenHeads FrontEnd code of conduct

This is a try to standardize the way we work at ZenHeads in the frontend domain, with the wonderful world of NPM, React, Redux, Webpack, (insert latest flashy tool)

As always, this is a live repo, so any changes, discussions can be done in the repo itself, preferably through merge requests.


## Code style

To have a uniform code style, we use ESLint(https://eslint.org/) to ensure everyone will adopt a similar way of writing our code. We currently extend the highly opinionated AirBnB javascript rules, you can find the rules here: https://github.com/airbnb/javascript.

All rules can be found in `.eslintrc.` Currently we have the following extra rules in place:

 - No semi colons at the end of every line. You don't need them, except where you actually need them. http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
 - We're using the compat plugin to hint when a polyfill is needed, based on browserlist (eg fetch). If you added a polyfill, please update the array in the .eslintrc

For CSS, we use StyleLint, where the rules can be found in the `.stylelintrc` file.

For both ESLint and StyleLint we recommend installing a IDE extension to show if your code conflicts with or predefined styles.

- ESLint - https://eslint.org/docs/user-guide/integrations
- StyleLint - just google

## Configuration

Any package that needs configuration setup should be configured in it's own file when possible. Please avoid pasting large configurations inside the package.json, since it will reduce visibility. You will find pre-configured setups for the following:

 - Babel (.babelrc)
 - Eslint (.eslintrc)
 - Jest (jestSetup.js)
 - Style lint (.stylelintrc)

## Babel

We currently use Babel for transpiling. To stay up to date with the available modern ES implementations, we extend the default `env` preset(https://github.com/babel/babel/tree/master/packages/babel-preset-env)

For compatibility, we let it sort through our browserlist settings, which can be found in `.browserslistrc`

## NPM and it's packages

## Webpack

## Redux and middleware

## Testing

We rely on Jest as a test runner an assertion library. Everything is pre-configured in the jest setup. Every test should be in the same folder as the component/action/reducer/etc you want to test, and should have the same name and extension as the folder/filename. For example, a message component should have a test called `message.test.jsx`

If a test doesn't include jsx, please don't use `.jsx`as the extension.

For testing React components, you can use the Enzyme library(http://airbnb.io/enzyme/docs/api/).  

A couple of simple tips:

- Assertions are done with jest assertions, which sometimes are a bit less friendly to the eye than for example chai assertions. For more info check https://facebook.github.io/jest/docs/en/expect.html
- Test components in isolation. Parent components shouldn't have to test if the children render well again with the props passed. Test actions and reducers separate from the components. If you feel like your tests are becoming too complicated, they probably are.
- Please stick with enzyme shallow rendering as much as you can. Enzyme 3 shallow rendering supports lifecycle methods too, but since it's not a full dom rendering it's a lot faster.
- If you have a simple component and you want to test that it 'simply renders correctly', you can choose to use snapshot testing.

Last but not least, you can check the code coverage of testing by running `npm run test:coverage`. Coverage folders are predefined and the coverage output will both be displayed in your terminal as in the folder `/coverage/lcov-report/index.html`. Coverage is done through Istanbul, which comes with jest(https://github.com/dwyl/learn-istanbul)

## Commit hooks

We use a pre-commit hook which lints with eslint and stylelint. Committing will be blocked if not all linting errors are solved.
