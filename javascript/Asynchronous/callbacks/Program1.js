function add(a, b, cb) {
  console.log("Add() called");
  setTimeout(() => {
    let r = a + b;
    cb(r);
  }, 2000);
}

function sub(addresult, c, cb) {
  console.log("sub() called");
  setTimeout(() => {
    let r = addresult - c;
    cb(r);
  }, 2000);
}

function multiply(subresult, d, cb) {
  console.log("multiply() called");
  setTimeout(() => {
    let r = subresult * d;
    cb(r);
  }, 2000);
}

// callback hell
add(10, 16, (addresult) => {
  sub(addresult, 3, (subresult) => {
    multiply(subresult, 2, (multiplyresult) => {
      console.log("Final result: ", multiplyresult);
    });
  });
});
