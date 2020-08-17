# Chapter 10 of Learning React by Eve Porcello & Alex Banks

## React Testing

### ESLint

ESLint is a linter (Checks your javascript code for bad coding styles). ESLint helps you avoid falling into bad coding habits.
ESLint is customizable with a .eslintrc file. You can add rules that are supplied by ESLint to check your code and make sure you do not do certain things. For example, no unused varaiables, or no anonymous functions.
ESLint also has many plugins for things like react hooks, jsx-a11y, and much more, which will again enforce good coding habits. You can copy some companies .eslintrc settings as a place to start like airbnb. Although people do find those to be a little too opinionated.

### Prettier

Kind of like a companion to ESLint is Prettier. Which is a code formatter. With Prettier you define how your files should always look. For example, semi-colon at end of line, trailing Commas, tab space, print width, and many many more.
The key thing to remember is the separation of concerns. ESLint handles how you should be coding. While Prettier how the code should be formatted.
They can be integrated really well with an eslint-prettier plugin (Or something like that google it lol). This will make sure Prettier is also ran whenever ESLint is ran.
You can set up VSCode or most text editors/IDE's to format on save. So Prettier will run on save rather than like at the end of your day coding.

### Type Checking

Type Checking in React Applications can be done by various ways.
React provides PropTypes, which lets you declare what props you are expecting.
Flow and TypeScript work in similar ways. But they are different.
I prefer TypeScript.
The idea being you want your code to be predictable and tell you when something is wrong rather than it crashing or breaking unexpectidly when wrong data is passed to a component or props are missing.

### Test Driven Development

Test Driven development is the idea of writing tests first describing how the function should work. Stub it out see it fail, and then implement the most basic version to get the test to pass. When the test passes you continue to iterate on the function till it is as robust as necessary and does exactly what it is supposed to be.
One popular idiom for test driven development is _Red, Green, Gold_ where you write the test first, then stub the function. See it fail (Red). Write the function just so it passes (Green). Then refactor the test and function (Gold). And you can continue to do this till you arrive at a good test and implemented function.

#### Incorporating Jest

Jest is a popular testing library that I believe is also recommended by the React team. So much so, it comes with the Create React App. You can follow the Red, Green, Gold rule, and follow the syntax provided by Jest to make some elegant tests.

Jest provides a _test_ function which lets you pass a string and function. String is to describe the test, and the function will execute it. You use the _expect_ method, which takes the function you are testing as a parameter (Already called though) and then you chain the type of test. So like expect(add(1, 2)).ToBe(3).
For the test to pass the result of the expect() function should match what was passed to ToBe. That are many other types of testing you can do with Jest ToBe is just one matcher, Jest provides many custom matchers and can be found in the documentation. Very customizable. Check out the docs for much more on it.

#### Testing React

React components provide instructions for React to follow when creating and managing updates to the DOM. We can test these components by rendering them and checking the resulting DOM.

We're not running our tests in a browser. We are running them in the terminal with Node.js. Node.js does not have the DOM API that comes standard with each browswer. Jest incorporates an npm package called jsdom that's used to simulate a browser environment in Node.js, which is essential for testing React components.
