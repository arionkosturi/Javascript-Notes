function f(a,b, ...args) {
  return [b, args, a];
}
const [x, ,y] = f(10, 20, 'a', 'b');

console.log(x, y); //???