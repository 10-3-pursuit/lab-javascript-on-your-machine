# JavaScript on Your Machine Lab

In this lab, you'll be building a small calculator function. Don't worry, your calculator will only need to add up numbers or subtract numbers. But, it will be doing it all from the command line!

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

Complete the `calculator()` function in the `index.js` file. This function will have no parameters -- instead, make use of `process.argv` to take in arguments from the command line. Use the tests, the JSDoc syntax, and the examples below to learn more about how the function should work.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

#### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node run.js
```

Add any arguments you want to test after the filename. For example:

```
node run.js plus 10 9 8
```

The output will be printed to your terminal.

#### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

#### Testing syntax

In order to simulate the command line, you'll see the following lines in the tests:

```js
const command = "plus";
const numbers = ["5", "10"];
process.argv.push(command, ...numbers);
```

This is similar to running the following on the command line.

```
node index.js plus 5 10
```

### Examples

The following are examples of what should happen when running the code from the command line.

#### Example 1

**Command line**

```
node index.js plus 1 2 3 4 5
```

**Result**

```js
15;
```

#### Example 2

**Command line**

```
node index.js minus 10 5 1
```

**Result**

```js
4;
```

#### Example 3

**Command line**

```
node index.js divide 10 2
```

**Result**

```js
"Invalid operation: divide";
```

#### Example 4

**Command line**

```
node index.js minus
```

**Result**

```js
"No numbers provided...";
```

#### Example 5

**Command line**

```
node index.js
```

**Result**

```js
"No operation provided...";
```

## Tips

- Remember that the first and second elements of `process.argv` are always the path to the `node` program and the filepath.
- Remember that each argument from the command line will be read in as a string. You will need some way to convert the inputs from strings to numbers.
- Because you don't know how many numbers will be passed in, you may need to _iterate_ over the numbers.
