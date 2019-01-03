{console.log('# 3, 3, 905');

console.log('test cases');

  const test_cases = gen_num_cases_from_seed(3, 3, 905);
  truth_table(test_cases);

console.log('naive solution');

  function naive(a, b, c) {
    let result;

    if (a) {
      if (b) {
        if (c) {
          result = 0;
        }  else {
          result = 1;
        }
      }  else {
        if (c) {
          result = 0;
        }  else {
          result = 2;
        }
      }
    } else {
      if (b) {
        if (c) {
          result = 0;
        }  else {
          result = 1;
        }
      }  else {
        if (c) {
          result = 1;
        }  else {
          result = 2;
        }
      }
    }

    return result
  }
  run_tests(naive, test_cases);



console.log('group by result');

  function grouped(a, b, c) {
    let result;

    if ((a && b && c) || (a && !b && c) || (!a && b && c)) {
      result = 0;
    } 

    if ((a && b && !c) || (!a && b && !c) || (!a && !b && c)) {
      result = 1;
    }

    if ((a && !b && !c) || (!a && !b && !c)) {
      result = 2;
    }

    return result
  }
  run_tests(grouped, test_cases);



console.log('simplify expressions');

  function simplified(a, b, c) {
    let result;


    if ((a || b) && c) {
      result = 0;
    } 

    if ((!a && !b && c) || (b && !c)) {
      result = 1;
    }

    if (!b && !c) {
      result = 2;
    }

    return result
  }
  run_tests(simplified, test_cases);



console.log('else/if-ied')

  // throw out the most complex condition
  function else_ifed(a, b, c) {
    let result;

    if ((a || b) && c) {
      result = 0;
    } else if (!b && !c) {
      result = 2;
    } else  {
      result = 1;
    }

    return result
  }
  run_tests(else_ifed, test_cases);


}