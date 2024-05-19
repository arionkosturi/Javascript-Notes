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
# Temat e reja te sessionit.
1. ### Destrukturimi i vektoreve.
2. ### Trajtimi i perjashtimeve.
3. ### Template Literals.

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
```js
const [x, y, z] = [1, 2, 3];
console.log(x, y, z); // 1 2 3
```
```js
// Assignment separate from declaration.
let a, b;
[a, b] = [1,2];
console.log(a); // 1
console.log(b); // 2
```