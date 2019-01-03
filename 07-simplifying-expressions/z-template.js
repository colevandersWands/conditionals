{

console.log('_the challenge_');
const exp = (a,b) =>      /* paste challenge here */ ;
const exp_cases = gen_cases_from_exp(exp);
console.log.raw(`exp: ${exp}`);
// truth_table(exp_cases);

// copy & modify this for each step of your simplification
{ console.log('* the law you used')
const exp = (a,b) =>      /* write new expression here */ ;
console.log.raw(`exp: ${exp}`);
run_tests(exp, exp_cases);    }







// ---------- test utils ----------

  function run_tests(_target, _cases) {
    for (let t_case of _cases) {
      const expected = t_case.expected;
      const actual = _target(... t_case.args, false);

      let pass;
      if (typeof expected === 'object') {
        const _actual = JSON.stringify(actual);
        const _expected = JSON.stringify(expected);
        pass = _actual === _expected;
      } else {
        pass = actual === expected;
      };

      if (!pass) {
        console.log(`${t_case.name}: \n`);
        console.log(`   actual: ${typeof actual},`, actual);
        console.log(`   expected: ${typeof expected},`, expected);
      };
    };
  };
  function truth_table(_cases, _expression) {
    const report = {}
    if (_expression) {
      for (let t_case of _cases) {
        report[t_case.name] = _expression(...t_case.args);
      };
    } else {
      for (let t_case of _cases) {
        report[t_case.name] = t_case.expected;
      };
    }
    console.table(report);
  };

  function gen_cases_from_exp(f) {

    const num_args = f.length;

    // generate an array of all binary strings of size num_args
    const all_binary_strings = [];
    const max_binary = parseInt("1".repeat(num_args),2);
    for(let n = 0; n <= max_binary; n++){
      const bin_str = n.toString(2);
      const padded_str = bin_str.padStart(num_args,'0');
      all_binary_strings.push(padded_str);
    }

    // map each binary string to an array of booleans
    const to_boolean = (x) => Boolean(Number(x));
    const to_arr_o_bools = (str) => { return str.split('').map(to_boolean) };
    const arr_o_cases = all_binary_strings.map(to_arr_o_bools);

    
    // build a test_cases object around each array of booleans
    const cases = [];
    for (let args of arr_o_cases) {
      const _case = {};
      _case.name = String(args);
      _case.args = args;
      _case.expected = f(...args);
      cases.push(_case);
    };

    return cases

  }
}
