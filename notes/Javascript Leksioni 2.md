---
## Shenime dhe Ushtrime nga Javascript, Leksioni 2 Sesioni 22.
---
### Quiz
##### Quiz 1
###### Qasshmeria e variablave
```js
const x = 100;

{
//  let y = 1.2;
    var y = 1.2; // ishte let e kthyem var
    var z = 'abc';
}

// y eshte definuar me let - nuk eshte e qasshme jashte bllokut
// nese nga let kthehet ne var - gjithcka do te jete ne rregull
console.log(x + y, z); // ???
```

##### Quiz 2
###### Me operatoret llogjike
```js
x = 100;             // x: 100
let y = 23;          // y: 24

x++                 // x: 101
++y                 // y: 24
x -= y;              // 101 - 24 = x: 77
y %= 6;             // 24 / 6     y: 0 

// x: 77, y: 0
console.log(x, y); // x: 77, y: 0
```
##### Quiz 3.a
```js
let y;               
var x = y + 1;       

 y = 'test';
 x = 100;


console.log(x + y); // 100test
```
##### Quiz 3.b
```js
let y;               
var x = y + 1;       

// y = 'test'
// x = 100
console.log(x + typeof(y)); // NaN undefined
```
##### Quiz 4
###### Me operatoret per krahasim:
 vlerat | 4 | 2 | 1
--- | --- | --- | ---
x=7 | 1 | 1 | 1
y=2 | 0 | 1 | 0
(x & y) | 0 | 1 | 0
```js
let x = 7; // 1 1 1
let y = 2; // 0 1 0
    //(x & y) 0 1 0  

             // 2  >  2  -> FALSE
console.log( (x & y) > y ); // FALSE
```

## Temat e reja
+ Kushtet
  + if-else
  + switch
+ Unazat (Loops)
  + for
  + while
  + do-while
+ Komandat `break` dhe `continue`
+ Funksionet  

# Progres: 0h:30m:00s