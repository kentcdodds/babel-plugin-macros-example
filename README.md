# babel-macros-example

This is a simple example of a [`babel-macros`][babel-macros] macro.

You'll notice that the `input.js` file is importing the `./greeting.macro.js` file
Then the imported identifiers are used throughout the code. The macro itself
is about as simple as you can get with a `babel-macros` macro. It accepts the
references to those imports and replaces the references with string literals.
Take a look at the `output.js` file to see what the result is. Now mess around
with it a bit to see what you can do with this thing!

Hopefully this helps you get started trying out writing a macro!

[babel-macros]: https://github.com/kentcdodds/babel-macros
