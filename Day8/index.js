//closure

function outer() {
  // lexical environment
  let a = 12;
  let b = 18;

  function inner() {
    console.log(a + b);
  }
  a = 10;
  b = 15;

  return inner;
}

const innerFun = outer();

innerFun();
