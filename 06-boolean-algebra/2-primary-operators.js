
console.log('\n# primary operators ');

console.log(`
  in boolean algebra there are 3 primary operations,
  they can be understood by studying their args & return values (truth tables)
`);

  console.log('### not:  !a ')
    console.table({
      ['true']:    !true,
      ['false']:   !false
    })


  console.log('### and:  a && b  ')
    console.log('native implementation ')
    console.table({ 
      ['true, true']:    true && true,
      ['true, false']:   true && false,
      ['false, true']:   false && true,
      ['false, false']:  false && false
    })
    console.log('replication using ||, !')
    console.table({
      ['true, true']:    !(!true || !true),
      ['true, false']:   !(!true || !false),
      ['false, true']:   !(!false || !true),
      ['false, false']:  !(!false || !false)
    })

  console.log('### or:  a || b  ')
    console.log('native implementation ')
    console.table({
      ['true, true']:    true || true,
      ['true, false']:   true || false,
      ['false, true']:   false || true,
      ['false, false']:  false || false
    })
    console.log('replication using &&, !')
    console.table({ 
      ['true, true']:    !(!true && !true),
      ['true, false']:   !(!true && !false),
      ['false, true']:   !(!false && !true),
      ['false, false']:  !(!false && !false)
    })

