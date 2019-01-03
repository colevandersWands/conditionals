{ console.log('## Example 1');


  const x = (a,b) =>  (!a && b) || !(b && a)
  console.log(x)
  const x_cases = gen_cases_from_exp(x);
  truth_table(x_cases, x)

console.log('naive');

  function naive(a,b) {
    let result;
    if ((!a && b) || !(b && a)) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  run_tests(naive, x_cases)


console.log('outer or');

  function outeror(a,b) {
    let result;
    if ((!a && b)) {
      result = true;
    } else {
      if (!(b && a)) {
        result = true;
      } else {
        result = false;
      }
    }
    return result;
  }
  run_tests(outeror, x_cases)



console.log('else negation');

  function elseneg(a,b) {
    let result;
    if (!a && b) {
      result = true;
    } else {
      if (b && a) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  }
  run_tests(elseneg, x_cases)



console.log('elses and');

  function elseand(a,b) {
    let result;
    if (!a && b) {
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
    return result;
  }
  run_tests(elseand, x_cases)





console.log('top && b');
  
  function andb(a,b) {
    let result;
    if (!a) {
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
    return result;
  }
  run_tests(andb, x_cases)




console.log('denegate a');
  
  function andb(a,b) {
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
    return result;
  }
  run_tests(andb, x_cases)











}