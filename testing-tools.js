
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

  // reverse for top->bottom alignment with nested if/elses
  arr_o_cases.reverse();
  
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

function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  };
  console.log(report)
};

function gen_num_cases_from_seed(num_args, base, seed) {
  const num_tests = Math.pow(2, num_args);
  const possible_tables = Math.pow(base, num_tests);

  if (seed > possible_tables) {
    const msg = 'seed is larger than '+base+'^(2^'+num_args+') === '+possible_tables; 
    const err = new Error(msg);
    throw err;
  };

  const str_cases_arr = [];

  // generate an array of all binary strings of size num_args
  const max_bin = parseInt("1".repeat(num_args),2);
  for(let n = 0; n <= max_bin; n++){
    const bin_str = n.toString(2);
    const padded_str = bin_str.padStart(num_args,'0');
    str_cases_arr.push(padded_str);
  }

  // convert strings to arrays of booleans
  const to_boolean = (x) => Boolean(Number(x));
  const to_arr_o_bools = (str) => { return str.split('').map(to_boolean) };
  const arr_o_cases = str_cases_arr.map(to_arr_o_bools);

  // reverse for alignment with nested if/elses
  arr_o_cases.reverse();

  // generate expected values from seed                                                                        
  const based_str = seed.toString(base);                       
  const padded_str = based_str.padStart(num_tests,'0');     
  const expect_strs = padded_str.split('');                
  const expecteds = expect_strs.map(Number);

  const cases = [];

  for (let i = 0; i < num_tests; i++) {
    const _case = {};                       
    _case.name = String(arr_o_cases[i]);    
    _case.args = arr_o_cases[i];            
    _case.expected = expecteds[i];          
    cases.push(_case);                      
  };

  return cases

}

function gen_bool_cases_from_seed(num_args, seed) {
  const num_tests = Math.pow(2, num_args);
  const possible_tables = Math.pow(2, num_tests);

  if (seed > possible_tables) {
    const msg = 'seed is larger than 2^(2^'+num_args+') = '+possible_tables; 
    const err = new Error(msg);
    throw err;
  };

  const str_cases_arr = [];

  // generate an array of all binary strings of size num_args
  const max_bin = parseInt("1".repeat(num_args),2);
  for(let n = 0; n <= max_bin; n++){
    const bin_str = n.toString(2);
    const padded_str = bin_str.padStart(num_args,'0');
    str_cases_arr.push(padded_str);
  }

  // convert strings to arrays of booleans
  const to_boolean = (x) => Boolean(Number(x));
  const to_arr_o_bools = (str) => { return str.split('').map(to_boolean) };
  const arr_o_cases = str_cases_arr.map(to_arr_o_bools);

  // reverse for compatibility with nested if/elses
  arr_o_cases.reverse();

  // generate expected values from seed                                                                        
  const bin_str = seed.toString(2);                       
  const padded_str = bin_str.padStart(num_tests,'0');     
  const arr_o_strs = padded_str.split('');                
  const expecteds = arr_o_strs.map(to_boolean);   

  const cases = [];

  for (let i = 0; i < num_tests; i++) {
    const _case = {};                       
    _case.name = String(arr_o_cases[i]);    
    _case.args = arr_o_cases[i];            
    _case.expected = expecteds[i];          
    cases.push(_case);                      
  };

  return cases

}