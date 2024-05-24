---
## Shenime dhe Ushtrime nga Javascript, Leksioni 6 Sesioni 26.
---
### Quiz
Ushtrime me njohurite nga leksionet e kaluara.  
Ushtrimi 1:
```js
const atm = {
    amount: 500,
    deposit: function(a) {
        this.amount += a
    },
    withdraw: function(a) {
        this.amount -= a
    }
}

// shuma
// metodat: deponim te mjeteve, terhjekje te mjeteve
//             +                        -

// amount: 500
atm.deposit(100) // 600
atm.withdraw(200) // 400

console.log(atm.amount) // 400
```
Ushtrimi 2:
```js
function f(x, y, ...args) {
    // f('a', 'b', 'c', 'd')
    // x: a, y: b args: [c, d]
    //     ['a', 'b', 'c', 'd']
    return [x, y, ...args]
    // ['a', 'b', 'c', 'd']
}

function g() {
    return {
         // ['a', 'b', 'c', 'd']
         /*
            {0: a, 1: b, 2: c, 3: d}
         */
        ...f('a', 'b', 'c', 'd')
    }
}


//                   {0: a, 1: b, 2: c, 3: d}
const {0: x, 1: y} = g()

console.log(x, y)
```
Ushtrimi 3:
```js
function c(a, x, ...g) {
    // c('t', 'e', 'g', 'p')
    // a: t
    // x: e
    // g: [g, p]
    return {
        x: [g],
        a: g[0]
    }
    /*
        {
            x: [[g, p]],
            a: g
        }
    */
}

function f(o) {
    return c('t', o, 'g', 'p')
}

// dest.       { x: [[g, p]], a: g }
const {x, a} = f('e')

console.log(x[0][1]) // x[0][1]   p
console.log(a)
```
## Temat e reja:
- Regular Expressions
- Document Object Model (DOM)
- Manipulimi i DOM-it
- Events
- Modulet (Krijimi, eksportimi dhe importimi)

### Regular Expressions 

```js
sentence = "Regular 122 expressions are 2347689 patterns used to match character combinations in strings. In 146 JavaScript, regular 2342 expressions 121382 are also 164 objects."

// si e shkruajme nje funksion i cili i gjene te gjitha numrat?

function nums(s) {
   words = s.split(" ")
   ns = []
     for(w of words) {
        if(w >= 10 && w <= 99) {
             ns.push(w)
         }
     }
     return ns
 }

 console.log(nums(sentence))
```
Per ta zgjidhur me lehte, ne perdorim regular expressions:
```js
sentence = "Regular 122 expressions are 2347689 patterns used to match character combinations in strings. In 146 JavaScript, regular 2342 expressions 121382 are also 164 objects."


 const regexp = /\d{1,}/g;

 console.log(
     sentence.match(regexp)
 )
```
Shembull tjeter me regex
```js
sentence = "Regular 12.05.2021 expressions are 24.07.1990 patterns used to match character combinations in strings. In 146 JavaScript, regular 2342 expressions 121382 are also 16.09.1921 objects."


console.log(
    sentence.replace(/\d{2}\.\d{2}\.\d{4}/g, '....')
)

```
### Document Object Model - DOM
#### Cfare eshte HTML DOM?
- DOM eshte akronim per Document Object Model
- DOM paraqet nje nderfaqe (interface) e cila mundeson qasje dhe manipulim te elementeve.
- Definon:
  - Te gjitha elementet e HTML si objekte.
  - Karakteristikat e elementeve (attributes).
  - Sjelljet e elementeve (methods).
  - Ngjarjet (events) qe mund te ndodhin
  
  
  
Ushtrim me regex:
```js
// kur thirret f - s eshte stringu, p paterna e cila nese gjindet ne s atehere zevendesohet me r

function f(s, p, r) {
    return s.replace(p, r)
}

console.log(
    f('Une jam Arti jam 22 vjec', /\d{1,}/g, 'x') 
)
// 'Une jam Arti jam x vjec'
```
### DOM
#### Qasja ne elementet HTML

```html
<div>
```
# Progress: 1h:10m:00Ss/2h:17m:59s
