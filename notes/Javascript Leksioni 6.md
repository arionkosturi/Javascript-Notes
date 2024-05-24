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
Ushtrim 4 me Regular Expressions - regex
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
# Progress: 0h:00m:00s/2h:17m:59s
