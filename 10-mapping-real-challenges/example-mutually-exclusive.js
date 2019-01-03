console.log('# FizzBuzz')
console.log(`
Write a program that prints the numbers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number 
and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz".
    (http://wiki.c2.com/?FizzBuzzTest)
`);

console.log('## write test cases')
  const test_cases = [
      {name: '0', args: [0], expected: 'fizzbuzz'},
      {name: '1', args: [1], expected: 1},
      {name: '2', args: [2], expected: 2},
      {name: '3', args: [3], expected: 'fizz'},
      {name: '4', args: [4], expected: 4},
      {name: '5', args: [5], expected: 'buzz'},
      {name: '6', args: [6], expected: 'fizz'},
      {name: '7', args: [7], expected: 7},
      {name: '15', args: [15], expected: 'fizzbuzz'}
    ];
  console.log(test_cases);


console.log(`
## divide the problem space

this is a 4-body problem
the whole problem can be decomposed into 4 mutually exclusive cases
* one that prints the arg passed in (ie. the number)
* one that prints 'fizz'
* one that prints 'buzz'
* one that prints 'fizzbuzz'

(I am treating the fourth condition as a separate function, not a co-occurance of 2 & 3)
`)

console.log(`
## determine the relevant measurables

the problem space can be navigated by evaluating only 2 boolean variables

i will decide which function to call based on these 2 criteria:
* divisibility by 3
* divisibility by 5
`)

console.log(`
## build a truth-table

left var -> divisibity by 3

right var -> divisibity by 5
`)

  const fizzbuzz_table = [
      {name: 'true, true', args: [true,true], expected: 'fizzbuzz'},
      {name: 'true, false', args: [true,false], expected: 'fizz'},
      {name: 'false, true', args: [false,true], expected: 'buzz'},
      {name: 'false, false', args: [false,false], expected: 'number'}
    ]
  truth_table(fizzbuzz_table)

console.log('## solve the multi-body problem');
  
  // simplify if needed
  function multi_body(a,b) {
    let result;

    if (a) {
      if (b) {
        result = 'fizzbuzz';
      } else {
        result = 'fizz';
      }
    } else {
      if (b) {
        result = 'buzz';
      } else {
        result = 'number'
      }
    }

    return result;
  }
  run_tests(multi_body, fizzbuzz_table);
  

console.log('## develop maps from arg to conditions')

  console.log.raw('div_by_3');

    // test cases
    function div_by_3(num) {
      return num % 3 === 0;
    }
    // run tests

  console.log.raw('div_by_5');

    // test cases
    function div_by_5(num) {
      return num % 5 === 0;
    }
    // run tests

console.log('## factor in arg-maps');
  

  const mbm_tests = [
      {name: '0', args: [0], expected: 'fizzbuzz'},
      {name: '1', args: [1], expected: 'number'},
      {name: '2', args: [2], expected: 'number'},
      {name: '3', args: [3], expected: 'fizz'},
      {name: '4', args: [4], expected: 'number'},
      {name: '5', args: [5], expected: 'buzz'},
      {name: '6', args: [6], expected: 'fizz'},
      {name: '7', args: [7], expected: 'number'},
      {name: '15', args: [15], expected: 'fizzbuzz'}
    ]
  function multi_body_mapped(num) {
    let result;
    const a = div_by_3(num);
    const b = div_by_5(num);

    if (a) {
      if (b) {
        result = 'fizzbuzz';
      } else {
        result = 'fizz';
      }
    } else {
      if (b) {
        result = 'buzz';
      } else {
        result = 'number'
      }
    }

    return result;
  }
  run_tests(multi_body_mapped, mbm_tests);


console.log('## develop functions for the bodies')

  console.log('return_fizzbuzz');

    function return_fizzbuzz() {
      return 'fizzbuzz';
    }

  console.log('return_fizz')

    function return_fizz() {
      return 'fizz';
    }


  console.log('return_buzz')

    function return_buzz() {
      return 'buzz';
    }


  console.log('return_number')

    function return_number(num) {
      return num;
    }


console.log('## factor in body functions')


  function solution(num) {
    let result;
    const a = div_by_3(num);
    const b = div_by_5(num);

    if (a) {
      if (b) {
        result = return_fizzbuzz();
      } else {
        result = return_fizz();
      }
    } else {
      if (b) {
        result = return_buzz();
      } else {
        result = return_number(num);
      }
    }

    return result;
  }
  run_tests(solution, test_cases);


console.log('done')




