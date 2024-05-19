function f(x, y) {
  return [x, Array.from(y.toString())];
}

function g(a, b, ...args) {
  return [f(a, b), args[0], ...args];
}

const [ , a, , b, c ] = g(10, 9876, 'a', 'b');

console.log(a, b, c); 