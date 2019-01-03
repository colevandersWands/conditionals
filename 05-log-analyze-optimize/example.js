{ console.log('## Example 1');


  const x = (a,b) =>  (!a && b) || !(b && a)
  console.log(x)
  const x_cases = gen_cases_from_exp(x);
  truth_table(x_cases, x)


console.log('spandlog')
  
  function spandlog(a,b) {              const log = [{a,b}];
    let result;                       
    const step_1 = !a;                  log.push({['!a']: step_1})
    const step_2 = step_1 && b;         log.push({['st_1 && b']: step_2})
    const step_3 = b && a;              log.push({['b && a']: step_3})
    const step_4 = !step_3;             log.push({['!st_3']: step_4})
    const step_5 = step_2 || step_4;    log.push({['st_2 || st_4']: step_5})
    result = step_5;                    log.push({result})
    return log
  }
  log_reports(spandlog, x_cases)



console.log('statemented')

  function stated(a,b) {
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
  run_tests(stated, x_cases)



console.log('analyze')

  function analyze(a,b) {      let body;
    let result;

    if (a) {
      if (b) {
        if (a) {
          result = false;       body = 1; // keep
        } else {
          result = true;        body = 2;
        }
      } else {
        result = true;          body = 3; // keep
      }
    } else {
      if (b) {
        result = true;          body = 4; // keep
      } else {
        if (b) {
          if (a) {
            result = false;     body = 5;
          } else {
            result = true;      body = 6;
          }
        } else {
          result = true;        body = 7; // keep
        }
      }
    }
    return {a,b,body,result}
  }
  log_reports(analyze, x_cases)

console.log('remove extra bodies')
  
  // if an else is removed, leave the if as is
  // if an if is removed, not it and move the else up
  function removing(a,b) {      let body;
    let result;

    if (a) {
      if (b) {
        if (a) {
          result = false;       body = 1; // keep
        }
      } else {
        result = true;          body = 3; // keep
      }
    } else {
      if (b) {
        result = true;          body = 4; // keep
      } else {
        if (!b) {
          result = true;        body = 7; // keep
        }
      }
    }
    return result
  }
  run_tests(removing, x_cases)


console.log('simplify')
  
  function simpling(a,b) {      let body;
    let result;

    if (a) {
      if (b) {
        result = false;         body = 1; // keep
      } else {
        result = true;          body = 3; // keep
      }
    } else {
      result = true;            body = 4; // keep
    }
    return result
  }
  run_tests(simpling, x_cases)


console.log('finalog')
  
  // compare to spandlog, see the ops are fewer?
  //  spandlog is constant at 5 ops
  //  this one is max 2 operations
  function finalog(a,b) {       let body;
    let result;                 let path = '';

    if (a) {                    path += 'a-if ';
      if (b) {                  path += 'b-if ';
        result = false;         body = 1;
      } else {                  path += 'b-else ';
        result = true;          body = 2;
      }
    } else {                    path += 'a-else ';
      result = true;            body = 3;
    }
    return {a,b,body,result,path}
  }
  log_reports(finalog, x_cases)


console.log('destructuring')
  
  // start at the bottom, and move up
  // negations then and/ors
  // don't matter which fork you start on
  function destruct(a,b) {       
    let result;                 
    if (!a || !b) {   
      result = true;            
    } else {                   
      result = false;                
    }
    return result
  }
  run_tests(destruct, x_cases)

console.log('rexpressioning')

  const rexpress = (a,b) => !a || !b;
  const newcases = gen_cases_from_exp(rexpress)
  console.log(rexpress);
  run_tests(rexpress, x_cases);
  truth_table(newcases)










}