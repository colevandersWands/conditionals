console.log('# Examples');

{ console.log('### Example 1');
const exp = (a,b) =>    a || (!b && !a) ;
const exp_cases = gen_cases_from_exp(exp);
console.log.raw(`exp: ${exp}`);
truth_table(exp_cases);  };



{ console.log('### Example 2');
const exp = (a,b,c) =>    !(c && a) || (!b && !a) ;
const exp_cases = gen_cases_from_exp(exp);
console.log.raw(`exp: ${exp}`);
truth_table(exp_cases);  };



{ console.log('### Example 3');
const exp = (a,b) =>    a || (!b && !a) ;
const exp_cases = gen_cases_from_exp(exp);
console.log.raw(`exp: ${exp}`);
truth_table(exp_cases);  };



{ console.log('### Example 4');
const exp = (a,b) =>    !b || a ;
const exp_cases = gen_cases_from_exp(exp);
console.log.raw(`exp: ${exp}`);
truth_table(exp_cases);  };



{ console.log('### Example 5');
const exp = (a) =>    !a || (a && !a) ;
const exp_cases = gen_cases_from_exp(exp);
console.log.raw(`exp: ${exp}`);
truth_table(exp_cases);  };