---
## Shenime dhe Ushtrime nga Javascript, Leksioni 5 Sesioni 25.
---

## Ushtrime
1. Sa do te jete dalja?
```js
function f(x, y, ...args) {
    // f(10, 20)
    // x: 10
    // y: 20
    // args: []
    return [1, [...args], args]
    //     [1, [], []]
}

//               [1, [], []]
const [ , , x] = f(10, 20)

console.log(x); // []
```

2.  Nje funksion i cili fshin vlerat duplikate nga lista (array)
```js
nums = [9, 4, 5, 6, 12, 34, 7, 8, 9, 11, 4, 9]

// nje funksion i cili fshin vlerat duplikate nga lista (array)

function f(list) {
    ulist = [] // [] eshte empty array
    // for(item of list)
    for(i = 0; i < list.length; i++) {
        if(!ulist.includes(list[i])) ulist.push(list[i])
    }
    return ulist
}

console.log(f(nums))
```
3. Sa do te jete dalja?
```js
function f(x, y, ...args) {
    // f(10, 'a', 1, 2, 3)
    // x: 10
    // y: 'a'
    // args: [1, 2, 3]
    return `${args}-${x}-${y}`
    //     `1,2,3-10-a`
}

function g() {
    //                  1,2,3-10-a
    return Array.from(f(10, 'a', 1, 2, 3))
    //     ['1', ',', '2', ',', '3', '-', '1', '0', '-', 'a']
}

//                 ['1', ',', '2', ',', '3', '-', '1', '0', '-', 'a']
const [x, ,y, z] = g()

//          1 2 ,
console.log(x, y, z); // 1 2 ,
```

4. Sa eshte dalja?
```js
nums = [9, 4, 5, 6, 12, 34, 7, 8, 9, 11, 4, 9]
//      0  1  2  3   4   5  6  7  8   9  10 11


console.log(`${[...nums.slice(4)]}`)


s = `${nums[4]}...${[...nums.slice(4)]}abc`


//          12...12,34,7,8,9,11,4,9abc
console.log(s) 
```
5. Sa eshte dalja?
```js
nums = [9, 4, 5, 6, 12, 34, 7, 8, 9, 11, 4, 9]

//        x('abc')
//        y: 'abc'
//             [34, 7, 8, 9, 11, 4, 9, ['abc']]
const x = y => [...nums.slice(5), [y]]

//           [34, 7, 8, 9, 11, 4, 9, ['abc']]
//           34,7,8,9,11,4,9,abc
console.log(`${x('abc')}`) // ?
```
6. Sa eshte dalja?
```js
nums = [9, 4, 5, 6, 12, 34, 7, 8, 9, 11, 4, 9]

// x(a) a: 'a'  OK   ['a']
// [34, 7, 8, 9, 11, 4, 9, ['a']]
// x(b) b: 20        ['2', '0']
// [34, 7, 8, 9, 11, 4, 9, ['2', '0']]
const x = y => [...nums.slice(5), [...y]]

// x(a)
// [34, 7, 8, 9, 11, 4, 9, ['a']]
// x(b)
// [34, 7, 8, 9, 11, 4, 9, ['2', '0']]

//                  a: 'a' b: 20 c: [1, 2, 3, 4, 5]
const y = (function(a, b, ...c) { 
  return [x(a), c, x(b.toString())] })('a', 20, 1, 2, 3, 4, 5)
//                                 [
//                                  [34, 7, 8, 9, 11, 4, 9, ['a']],
//                                     [1, 2, 3, 4, 5],
//                               [34, 7, 8, 9, 11, 4, 9, ['2', '0']]
//                                      ]

//                                  [
//                               [34, 7, 8, 9, 11, 4, 9, ['a']],
//                                          [1, 2, 3, 4, 5],
//                               [34, 7, 8, 9, 11, 4, 9, ['2', '0']]
//                                   ]
const [a, b, ,c] = y

// a=[34, 7, 8, 9, 11, 4, 9, ['a']]
// b=[1, 2, 3, 4, 5]
// c=undefined
console.log(a, b, c)
```
### TEMAT E REJA:
+ Programimi i orientuar ne objekte (OOP).
+ Object Literal.
+ Destrukturimi i objekteve.
+ Atributet e kalkuara.

#### Klasat
+ Klasat ne JavaScript definohen permes celesfjales `class`, pason emri i klases, kllapat gjarperuese dhe brenda tyre trupi i klases.
```js
class Person {
  //  class body
}
```
+ Klasa ka nje metode speciale e cila njihet si konstruktor dhe definohet me constructor() - shkrepet sa  here qe krijohet nje objekt i ri nga ajo klase.
```js
class Person {
    // properties / veti te klases
    emri = "John"
    mbiemri = "Smith"
    mosha = 24
    
    // funksione brenda klases quhen metoda (methods)
    te_dhenat() {
        // this.   i referesohet klases aktuale - ne kete rast Person
        return `${this.emri} ${this.mbiemri} mosha: ${this.mosha}`
    }
}

obj = new Person()    // kemi krijuar nje objekt nga klasa person


// nese deshirojme me ju qase nje vetie te caktuar perdorim
// emrin e objektit pike (.) emri i vetise
console.log(obj.te_dhenat())

```
Duke perdorur konstruktoret:
```js
class Person {
    constructor(n, s, a) {
        this.name = n
        this.surname = s
        this.age = a
    }
    
    get_person() {
        // this.   i referesohet klases aktuale - ne kete rast Person
        return `${this.name} ${this.surname} mosha: ${this.age}`
    }
}

arti = new Person("Arti", "Abazi", 15)  
arta = new Person("Arta", "Krasniqi", 25)    


console.log(arti.get_person())
console.log(arta.get_person())

```
+ Nje klase gjithashtu mund te kete edhe metoda statike - qe dmth se munt e ekzekutohen pa krijuar instance te klases ku eshte definuar:
```js
static address() {
  console.log('PO Box 100');
}
// Thirrja (ekzekutimi) i metodes statike:
Person.address();
```
Shembull me metoden statike:

```js
class Matematika {
    static fuqia(x, y) {
        let r = 1
        for(let i = 0; i < y; i++) {
            r *= x
        }
        return r
    }
}

console.log(Matematika.fuqia(2, 4))
```
### Object Literal
+ JavaScript object literal eshte liste e cifteve emer-vlere te mbeshtjella me kllapa gjarperore.
+ Object Literal enkapsulon te dhenat ne nje pakete.
+ Na mundeson qe te minimizojme numrin e variablave globale te cilat shpesh dine te krijojne probleme kur jane te shumta ne numer.

#### Object Literal Syntax
Object Literals definohen duke perdorur keto rregulla sintaksore:
+  Dy pikat `:` ndan emrin e vetise nga vlera.
+  Nje presje `,` ndan cdo cift emer-vlere.
+  Nuk duhet presje `,` ne fund te ciftit te fundit.

Ushtrim me Object Literal"
```js
x = 'abc' + undefined

// name, age, get_data
let arti = {
    name: 'Arti',
    age: 15,
    get_data: function() {
        return `${this.name} ka moshen: ${this.age}`
    },
    // props te re e cila vleren e ka daljen e shprehjes x
    [x]: "Vlera e comp. prop.",
    o: {
        x: 100,
        y: 200
    }
}

// name, age, get_data, abcundefined

// console.log(arti.name)
// console.log(arti.age)
// console.log(arti.get_data) 
// console.log(arti.abcundefined)
console.log(arti.o)
```
### Destrukturimi i Objekteve
Basic assgnment:
```js
const user = {
    id: 42,
    is_verified: true
}
const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true
```
Shembull me destrukturimi i objekteve.  
Siperfaqja e rrethit:
```js
const PI = 3.14;
const circle = {
    r: 10,
    d: 20,
    area: function() {
        return PI * r * r;
    }
}

const {r, d, area} = circle
console.log(r,d,area());
```
Assignment without declaration:
```js
let a, b;

({a, b} = {a: 1, b: 2});
```
Shembull:
```js
let x, y;
const o = {x: 100, y: 200};

({x: a, y: b} = o)

console.log(a, b); // [100, 200]
```
Destrukturimi me vlera paraprake:
```js
const {a=10, b=5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```
```js
const {a: x = 100, b: y = 20} = {b: 200}

console.log(x, y) // 100 200
```
## Q/A
# Ushtrime
Ushtrimi 1:
```js
const o = {
    x: 'a',
    r: 'a' + null,
    z: this.r + undefined
}

// a: a, r: anull z: nan
// console.log(o)

// const s   - e cila e merr vleren e celesit s    / celes s nuk kemi   ----> undefined
const {x: a, z: b} = o

console.log(a, b); // a, Nan
```
Ushtrimi 2
```js
function f(x, z, ...y) {
    // f('a', 'c', 'g', 'i', 'b')
    // x: 'a'
    // z: 'c'
    // y: ['g', 'i', 'b']
    //      0    1    2
    return {
        x,                   // x: 'a'
        a: z,                // a: 'c'
        [y[0]]: [...y]       // g: ['g', 'i', 'b']
    }
}

/*
    {
        x: 'a'
        a: 'c'
        g: ['g', 'i', 'b']
    }
*/

// deshifru cilat jane celesat e objektit qe kthehet nga funksioni
// me argumentet ne vijim f('a', 'c', 'g', 'i', 'b')

const {x, a, g} = f('a', 'c', 'g', 'i', 'b')

// // x, a, ? - celesit te trete

console.log(x, a, g)
```
Ushtrim 3:
```js
function f(x, a, ...c) {
    // f(10, 'te', 'a', 'g', 'j')
    // x: 10
    // a: 'te'
    // c: ['a', 'g', 'j']
    return function() {
        return {
            d: c,
            g: a
        }
    }
}

function g() {
    //     [{d: ['a', 'g', 'j'], g: 'te'}]
    return [f(10, 'te', 'a', 'g', 'j')()]
}


//            [{d: ['a', 'g', 'j'], g: 'te'}]
const [ ,x] = g()

console.log(x) // ?
```
Ushtrim 4:
```js
function f(x, a, ...c) {
    // f(10, 'te', 'a', 'g', 'j')
    // x: 10
    // a: 'te'
    // c: ['a', 'g', 'j']
    return function() {
        return {
            d: c,
            g: a
        }
    }
    // {d: ['a', 'g', 'j'], g: 'te'}
}

function ga() {
    return {
        // {d: ['a', 'g', 'j'], g: 'te'}
        ...f(10, 'te', 'a', 'g', 'j')(),
        d: 'a',
        g: [1,2]
    }
    /*      
        {
            d: ['a', 'g', 'j'],
            g: 'te',
            d: 'a',
            g: [1, 2]
        }

        {
            d: 'a',
            g: [1, 2]
        }
    */
}


const {d: x, g} = ga()

console.log(x, g); // a [1, 2]
```