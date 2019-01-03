console.log(`
### Idempotence

"Idempotence" allows you to remove operators if they have the same variable on each side

this is useful when simplifying & refactoring boolean expressions
`)

{ console.log('\n **idempotence** of && ');

  const a = (a) =>       a && a    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a) =>         a       ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};

{ console.log('\n **idempotence** of || ');

  const a = (a) =>       a || a    ;
  const a_cases = gen_cases_from_exp(a);
  console.log(`a: ${a}`);
  // truth_table(a, a_cases)

  const b = (a) =>         a       ;
  console.log(`b: ${b}`);
  run_tests(b, a_cases);

};