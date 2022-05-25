<!-- @format -->

# Transpiling and Polyfills and in JavaScript.

As JavaScript developers we may try new syntax and API methods in the language
without needing the Browser's to implement the features in the Browser
environment. The solution to this problem is transpling and polyfilling

## Transpiling

Transpiling(also know as source-source compiling) - syntax from one programming
language of is converted to a another language or the same language at the same
level of abstraction.

If JavaScript engine encounters a language syntax it does not recognize. The
program will fail to parse and execute, thus throwing a syntax error.

### An example of transpilation

```js
const logDay = day => {
	console.log(day);
};

//The code above during transpilation is converted to an older syntax in the language, an anonymous function from a newer syntax arrow function
var logDay = function(day) {
    console.log(day);
}
```
## Polyfilling
It is only possible to transpile code syntax but not API methods such as Array.prototype.groupBy which is currently in stage 3 proposal. If an API method is missing we have to provide a definition for that missing API method that stands in and acts as if the older environment had already had it natively defined. This pattern is called a polyfill (aka “shim”).

For the Array.prototype.groupBy to work in any environment we have to provide the method.