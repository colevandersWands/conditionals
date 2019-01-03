{ console.log('## Example 1');


  const x = (a,b) =>  (!a && b) || !(b && a)
  console.log(x)
  const x_cases = gen_cases_from_exp(x);
  truth_table(x_cases, x)

console.log('spand')

  function spand(a,b) {
    const step_1 = !a;
    const step_2 = step_1 && b;
    const step_3 = b && a;
    const step_4 = !step_3;
    const step_5 = step_2 || step_4;
    return step_5
  }
  run_tests(spand, x_cases)


console.log('five')

  function five(a,b) {
    let result;
    const step_1 = !a;
    const step_2 = step_1 && b;
    const step_3 = b && a;
    const step_4 = !step_3;

    if (step_2) {
      result = true;
    } else {
      if (step_4) {
        result = true;
      } else {
        result = false;
      }
    }
    return result
  }
  run_tests(five, x_cases)



console.log('four')

  function four(a,b) {
    let result;
    const step_1 = !a;
    const step_2 = step_1 && b;
    const step_3 = b && a;

    if (step_2) {
      result = true;
    } else {
      if (step_3) {
        result = false;
      } else {
        result = true;
      }
    }
    return result
  }
  run_tests(four, x_cases)



console.log('three')

  function three(a,b) {
    let result;
    const step_1 = !a;
    const step_2 = step_1 && b;

    if (step_2) {
      result = true;
    } else {
      if (b) {
        if (a) {
          result = false;
        } else {
          result = true;
        }
      } else {
        result = true;
      }
    }
    return result
  }
  run_tests(three, x_cases)


console.log('two')

  function two(a,b) {
    let result;
    const step_1 = !a;

    if (step_1) {
      if (b) {
        result = true;
      } else {
        if (b) {
          if (a) {
            result = false;
          } else {
            result = true;
          }
        } else {
          result = true;
        }
      }
    } else {
      if (b) {
        if (a) {
          result = false;
        } else {
          result = true;
        }
      } else {
        result = true;
      }
    }
    return result
  }
  run_tests(two, x_cases)


console.log('one')

  function one(a,b) {
    let result;

    if (a) {
      if (b) {
        if (a) {
          result = false;
        } else {
          result = true;
        }
      } else {
        result = true;
      }
    } else {
      if (b) {
        result = true;
      } else {
        if (b) {
          if (a) {
            result = false;
          } else {
            result = true;
          }
        } else {
          result = true;
        }
      }
    }
    return result
  }
  run_tests(one, x_cases)



}