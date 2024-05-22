---
## Shenime dhe Ushtrime nga Javascript, Leksioni 2 Sesioni 22.
---
### Quiz

##### Qasshmeria e variablave
```js
const x = 100

{
//  let y = 1.2
    var y = 1.2 // ishte let e kthyem var
    var z = 'abc'
}

// y eshte definuar me let - nuk eshte e qasshme jashte bllokut
// nese nga let kthehet ne var - gjithcka do te jete ne rregull
console.log(x + y, z) // ???
```

##### Me operatoret llogjike
```js
x = 100             // x: 100
let y = 23          // y: 24

x++                 // x: 101
++y                 // y: 24
x -= y              // 101 - 24 = x: 77
y %= 6              // 24 / 6     y: 0 

// x: 77, y: 0
console.log(x, y) // x: 77, y: 0
```
