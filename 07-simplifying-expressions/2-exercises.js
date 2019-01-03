console.log(`
# The Exercises

(exercise template is included in this folder)

There are 4 types of exercises:
* _single rule_: practice applying a given rule
* _start -> end_: derive the end expression from the starting expression
* _form-based_: convert expressions to a given form (ie. only && and !)
* _minimize_: get the expression as short as you can

### single rule challenges

* absorbion:        \`a || ((a || b) && a && b)\`
* absorbion:        \`a && ((a && b) || a || b)\`
* demorgans law:    \`!(a && (!a && !b)\`
* demorgans law:    \`!a && !(!a || !b)\`
* ...


### start -> end

* \`!(!(a || b || b) && a)\`  -->  \`(a || !b)\`
* ...
* (and some in cnf to prepare for mult-body)

### form-based

convert to all &&s and !s
* \`!(a || b) || (!b || !c)\`
* ...

convert to all ||s and !s
* \`!(a && b) && (!b && !c)\`
* ...

### minimze 
* \`!(a || !c) && (!c && (b || c))\`
* ... (random long things)

`);