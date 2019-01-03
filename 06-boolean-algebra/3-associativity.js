console.log(`
### Associativity

"associative" means that if all operators are the same, 
it does not matter where the parenthesis go
`)

{ console.log('\n || is **associative** ');

  const a = (a,b,c) =>       (a || b) || c    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>       a || (b || c)    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};

{ console.log('\n && is **associative** ');

  const a = (a,b,c) =>       (a && b) && c    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a,b,c) =>       a && (b && c)    ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};