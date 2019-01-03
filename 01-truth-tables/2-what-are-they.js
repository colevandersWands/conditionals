console.log(`
## What are they?

Truth Tables are a visual explanation of a boolean expressions behavior.
On the left are every possible argument, on the right is the expressions output:
`)

const exp = (a, b) =>     a || (!b && !a)   ;
const exp_cases = gen_cases_from_exp(exp);
console.log('exp: ', exp);
console.log('test cases: ', exp_cases);
console.log('truth table:');
truth_table(exp_cases, exp);

console.log(`
  
Any expression that has the same truth table (ie. passes the same tests)
can be considered interchangeable anywhere in your code:

`)

const exp_2 = (a, b) =>     !(b || a) || a   ;
run_tests(exp_2, exp_cases);
console.log('exp 2: ', exp_2);
console.log('test cases: ', exp_cases);
console.log('truth table:');
truth_table(exp_cases, exp_2);