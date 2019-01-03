console.log('--- -- 3, 75 -- ---')

const cases = gen_bool_cases_from_seed(3, 75);
truth_table(cases)

/* 
  los
    trusting the manipulations, not trying to understand
  stopping at long un-pretty, will learn to simplify it later
*/


console.log('--- naive solution ---')

  function naive(a,b,c) {
    let result;

    if (a) {
      if (b) {
        if (c) {
          result = false;
        } else {
          result = true;
        }
      } else {
        if (c) {
          result = false;
        } else {
          result = false;
        }
      }
    } else {
      if (b) {
        if (c) {
          result = true;
        } else {
          result = false;
        }
      } else {
        if (c) {
          result = true;
        } else {
          result = true;
        }
      }
    }

    return result
  }
  run_tests(naive, cases)



console.log('--- collapse tautologies  ---')

  function colltaut(a,b,c) {
    let result;

    if (a) {
      if (b) {
        if (c) {
          result = false;
        } else {
          result = true;
        }
      } else {
        result = false;
      }
    } else {
      if (b) {
        if (c) {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = true;
      }
    }

    return result;
  }
  run_tests(colltaut, cases)


console.log('--- insert negations ---')

  function negate(a,b,c) {
    let result;

    if (a) {
      if (b) {
        if (!c) {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    } else {
      if (!b) {
        result = true;
      } else {
        if (c) {
          result = true;
        } else {
          result = false;
        }
      }
    }


    return result;
  }
  run_tests(negate, cases)


console.log('--- collapse inner nested conditions ---')

  function collinnernest(a,b,c) {
    let result;

    if (a) {
      if (b && !c) {
        result = true;
      } else {
        result = false;
      }
    } else {
      if (!b || c) {
        result = true;
      } else {
        result = false;
      }
    }

    return result;
  }
  run_tests(collinnernest, cases)


console.log('--- collapse top nested conditions ---')

  function colltopnest(a,b,c) {
    let result;

    if ((a && (b && !c)) || (!a && (!b || c))) {
      result = true;
    } else {
      result = false;
    }

    return result;
  }
  run_tests(colltopnest, cases)


console.log('--- expressed ---');

  const exp = (a,b,c) =>    (a && (b && !c)) || (!a && (!b || c))  ;
  console.log(exp);
  run_tests(exp, cases)
  const exp_cases = gen_cases_from_exp(exp);
  truth_table(exp_cases);

