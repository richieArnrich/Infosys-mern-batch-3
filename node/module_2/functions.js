export function add(a, b) {
  console.log(a + b);
}

export function sub(a, b) {
  //namespace export
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}
export default multiply;
