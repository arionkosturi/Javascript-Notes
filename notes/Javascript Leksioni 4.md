# Shenime dhe Ushtrime nga Javascript, Sesioni 24.

### Quiz me njohurite nga sessioni i meparshem.
#### Funksionet.
1. ##### Fusha e qasshmerise 
2. ##### Funksionet me sintakse shigjete.
3. ##### Funksionet anonime.
4. ##### Funksionet e rendit te larte.
5. ##### Funksionet rekursive.
6. ##### Parametrat e mbetur (Rest Params).

#### Sa eshte dalja?
```js
  const f = function(x) {
    return x++;
  }

  {
    let y = f(10);
  }

  console.log(y);
  
```
##### Dalja do jete si me poshte. Definimi i y eshte bere brenda nje blloku dhe nuk eshte e qasshme jashte bllokut.
```console
y is not defined
```
##### is not defined eshte error ndersa undefined eshte data type.
#### Po nese perdorim 'var' brenda bllokut?
```js
  const f = function(x) {
    return x++;
  }

  {
    var y = f(10);
  }

  console.log(y);  
```
##### Variabla eshte rritur por nuk kthehet.
```console
10
```
#### Quiz 2
```js
const f = (x, y) => x / y;
const g = (a, b) => f(a,b);
console.log(g(10,0)) // Infinit

```
###### Shprehur ndryshe
```js
// eshte duke kalkuluar pjestimin e dy numrave x dhe y
const f = (x, y) => x / y;
// eshte funksion i cili kthen referencen deri tek funksioni f
const g = () => f;
// g() kthen funksionin f - pastaj (10, 2) jane argumentet e funksionit f
console.log(g()(10,2)) // 5
```
#### Quiz me Funksion Rekursiv.
###### Funksioni sum pranon si parameter nje numer n dhe duhet te ktheje si rezultat shumen e shifrave te n-se. 
###### dmth: sum(9821) duhet te jape rezultatin 9+8+2+1 pra 20.
```js
// Funksion Rekursiv me while
function sum(n) {
  let s = 0;
  while (n > 0) {
    s += n % 10;
    n = parseInt(n / 10);
  }
  return s;
}

console.log(sum(9821)); // 20

```

```js
// Funksion Rekursiv me string.
function sum(n) {
  n = n.toString(); // e kthejme ne string.
  // stringu eshte array ['9', '8', '2', '1']
  for(i of n) {
    s += parseInt(i);
  }
  return s;
}
console.log(sum(9821)); // 20

```
```js
// Zgjidhje me reduce.
function sum(n) {
  return Array.from(n.toString()).reduce((s,d) => s + parseInt(d), 0);
}
console.log(sum(9821));
```

```js
// Zgjidhje me for loop.
function sum(n) {
  let s = 0;
  n = n.toString();
  for(d of n) {
    s += parseInt(d);
  }
  return s;
}
console.log(sum(9821)); // 20

```
#### Zgjidhe me funksion rekursiv.
```js
function sum(n) {
  n = n.toString;
  // base case
  if (n.length == 0) return 0;
  // recursion
  return parseInt(n[0]) + sum(n.slice(1));
}
// sum(['9','8','2','1'])
// 1) '9' + sum(['8','2','1'])
// 2) '17' + sum(['2','1'])
// 3) '19' + sum(['1'])
// 4) '20'

console.log(sum(9821)) // 20
```
---
# Temat e reja te sessionit.
1. ### Destrukturimi i vektoreve.
2. ### Trajtimi i perjashtimeve.
3. ### Template Literals.
---
## Destrukturimi i vektoreve.
```js
// Basic variable assignment.

const foo = ['one', 'two', 'three'];
// ketu ndodh destukturimi
const [red, yellow, green] = foo;

console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```
##### Shembull destrukturimi.
```js
const [x, y, z] = [1, 2, 3];
console.log(x, y, z); // 1 2 3
```
##### Shembull tjeter destrukturimi.
```js
// Assignment separate from declaration.
let a, b;
[a, b] = [1,2];
console.log(a); // 1
console.log(b); // 2
```
#### Varianti 2
```js
let name, surname;
[name, surname] = ['John', 'Smith'];
console.log(name,surname); // ['John', 'Smith']
```
#### Variant me Default Values.
```js
let a, b; // a dhe b jane undefined.

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```
#### Swapping Variables
###### Vlerat e variablave mund te nderrohen me njera tjetren me nje destrukturim.
```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
```
#### Shembull tjeter.
```js
const n = [10, 30, 21];
[n[0], n[2]] = [n[2], n[0]];
console.log(n); // 21, 30, 10 
```
#### Destrukturimi i nje array te kthyer nga nje funksion.
```js
function f() {
  return [1, 2];
}
let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```
#### Shembull
```js
function f() {
  return [false, '10', 100];
}
let b, s, n;
[b, s, n] = f();

console.log(b, s, n);
```
##### Dalja
```console
false '10' 100
```
#### Injorimi i vlerave ne destrukturim
```js
function f() {
  return [1, 2, 3];
}

const [a, ,b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```
##### Gjithashtu mund te injorojme te gjitha vlerat.
```js
[,,,] = f();
```
#### Shembull me destrukturim
```js
function student() {
  return ['John', '90/2023', [9,10,8,8]];
}

const [name, ,grades] = student();
console.log(name, grades); // John, [9, 10, 8, 8]
```
#### Destrukturim me elemenentet e mbetura.
```js
function f() {
  return [1, 2, 3];
}

const [x, ...y] = f();

console.log(x); // 1
console.log(y); // [2, 3]
```
---
## Ushtrime
### Ushtrimi 1.
###### Sa do jete dalja e programit?
```js
function f(a,b, ...args) {
  return [b, args, a];
}
const [x, ,y] = f(10, 20, 'a', 'b');

console.log(x, y); //???

```
```console
20 10
```
##### Shpjegimi i ushtrimit 1.
```js
function f(a, b, ...args) {
  //     f(10,20, 'a', 'b')
  // a: 10
  // b: 20
  // args: ['a', 'b']

  return [b, args, a];
         //     [20, ['a', 'b'], 10]
}
const [x, ,y] = f(10, 20, 'a', 'b');

console.log(x, y); // 20, 10

```
---
### Ushtrimi 2.
```js
function f(...args) {
  let x = [...args, 'b', 'c'];
  return [x [x.length-1], args, ...x];
}

const [ , , a, b] = f(1, 2, 3, 4, 5);

console.log(a, b); // ???
```
```console

```

#### Shpjegimi i ushtrimit 2.
```js
function f(...args) {
     // f(1,2,3,4,5)
     // args: [1,2,3,4,5]
  let x = [...args, 'b', 'c'];
   // x = [1,2,3,4,5,'b','c']
   //      0,1,2,3,4, 5 , 6
   // x.length --- 7
   // x.length-1 --- 6
  return [x [x.length-1], args, ...x];
      // ['c', [1,2,3,4,5], 1,2,3,4,5,'b','c']
}
              //['c', [1,2,3,4,5], 1,2,3,4,5,'b','c']
              //  x       x
const [ , , a, b] = f(1, 2, 3, 4, 5);

console.log(a, b); // a: 1, b: 2
```
---
### Ushtrimi 3.
```js
function f(x, y) {
  return [x, Array.from(y.toString())];
}

function g(a, b, ...args) {
  return [f(a, b), args[0], ...args];
}

const [ , a, , b, c ] = g(10, 9876, 'a', 'b');

console.log(a, b, c); // ???

```
##### Dalja
```console
a, b, undefined
```
#### Shpjegimi i ushtrimit 3.
```js
function f(x, y) {
  //  f(10, 9876)
        // '9876' -> ['9', '8', '7', '6']
  return [x, Array.from(y.toString())];
        // [10, ['9', '8', '7', '6']]
}

function g(a, b, ...args) {
  // g(10, 9876, 'a', 'b')
  // a: 10
  // b: 9876
  // args: ['a', 'b']
  return [f(a, b), args[0], ...args];
// [[10, ['9', '8', '7', '6']], 'a', 'a', 'b']
}

     // [[10, ['9', '8', '7', '6']], 'a', 'a', 'b']]
     //  <--kjo eshte nje----=-->,  'a', ----, 'b'
     //

const [ , a, , b, c ] = g(10, 9876, 'a', 'b');

console.log(a, b, c); // a, b, undefined
```
---
### Ushtrimi 4.
```js
function f(x, y, ...args) {
  return (function(a, ...nums) {
    return [...nums, a, x, y, args[0]];
  })(10, 'b', 'e', 'g');
}

const [, x, y, ,z] = f(10, 20, 1, 2, 3, 4, 5);
// x: ? y: ? z: ?

console.log(x, y, z); // ???
```
##### Dalja
```console
e g 10
```
#### Shpjegimi i ushtrimit 4.
```js
function f(x, y, ...args) {
  // f(10, 20, 1, 2, 3, 4, 5)
  // x: 10
  // y: 20
  // args: [1, 2, 3, 4, 5]

  return (function(a, ...nums) {
    return [...nums, a, x, y, args[0]];
          // ['b', 'e', 'g', 10, 10, 20, 1]
  })(10, 'b', 'e', 'g');
  
  // a(10, 'b', 'e', 'g')
  // a: 10
  // nums: ['b', 'e', 'g']
}
                   
                 //  ['b','e','g',10,10,20,1]
const [ , x, y, ,z] = f(10, 20, 1, 2, 3, 4, 5);
// x: e y: g z: 10

console.log(x, y, z); // e g 10
```
---
# Njohuri te reja
# Trajtimi i perjashtimeve
### Trajtimi i perjashtimeve behet permes kombinimit te celesfjaleve:
1. #### Throw
2. #### Try
3. #### Catch
4. #### Finally
---
### Shembull me Exception Handling:
```js
function divide(x, y) {
  if(y == 0) throw 'Nuk pjestohet me zero!'
  return x / y;
}
  try {
    console.log(divide(10,0));
  } catch(e) {
    console.log(e);
  } finally {
    console.log('Une jam blloku finally');
  }
```
###### Dalja
```console
Nuk pjestohet me zero!
Une jam blloku finally.
```
---
# Template Literals
### Template Literals mundesojne perdorimin e shprehjeve brenda thonjezave dhe mund te shkruhen ne me shume rreshta.
#### Per Template Literals perdoren backticks \` `
```js
let name = 'Arion';
// Shprehje e thjeshte
console.log('Hello there ' + name);
// Me template literals
console.log(`Hello there ${name}`);
```
---
```js
let name = 'Arion';
// Shprehje e thjeshte
console.log('Hello there ' + name + ' some other text.');
// Me template literals
console.log(`Hello there ${name} some other text.`);
```
#### Ushtrim Template Literals dhe destrukturim.
```js
function f(a, b, ...args) {
  return `${a+args[0]}${b}`;
}
  const [x, y, z] = Array.from(f('a', 10, 'ge', 's1', 'b'));
  // x
  // y
  // z 
```
###### Dalja
```console
age
```
#### Shpjegimi i ushtrimit:
```js
function f(a, b, ...args) {
  // f('a', 10, 'ge', 's1', 'b')
  // a: 'a'
  // b: 10
  // args: ['ge', 's1', 'b']
  return `${a+args[0]}${b}`;
          //age10
}                   // ['a', 'g', '1', '0']
  const [x, y, z] = Array.from(f('a', 10, 'ge', 's1', 'b'));
  // x: a
  // y: g
  // z: e 
```
---