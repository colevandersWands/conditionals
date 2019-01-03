console.log('# Truth Tables');

console.log(`
So far you have learned that a function can be defined by its test cases,
and that any functions that pass the same tests are interchangeable.
This is still true for Boolean expressions.

The difference between boolean expressions and other functions we have seen
is that boolean expressions have a well-known number of possible args:
* every combination of true or false for each variable in the expression
* or: 2^n where n === args.length
`);


/*
  to cover
    an expression of n arguments can only have 2^n args
      so these things can be exhaustively studied
    a truth table defines & classifies expressions
      any expressions with the same truth table can be interchanged
    generate some test cases & truth tables by hand
    (so learn how to manipulate booleans)
      for understanding code 
      for simplifying
      for generating
      but that's in the next step
    tools of convenience to use later
      the function that generates all test cases for a given expression
      the function that prints truth tables

*/
























