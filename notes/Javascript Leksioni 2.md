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

#### Kushtet
+ Kushtet mundesojne degezimin e kodit
+ Gjithmone duhet te kemi te pakten nje kusht
+ JavaScript mundeson degezimin e kodit permes:
  + if
  + switch

#### Shembuj me `if`
```js
username = 'admin'
password = '12345'

// (nese kushti plotesohet) { kodi TRUE } ne te kunderten { kodi FALSE }
if(username == 'admin') {
    console.log('Dashboard') // Dashboard
} else {
    console.log('Login')
}
```
Shembull tjeter me `if`
```js
let x = 120
let y = 21
let z = 21.2

// me i madhi?

if((x > y) && (x > z)) {
    console.log(x, ' eshte me i madhi')
}
  else if((y > x) && (y > z)) {
    console.log(y, ' eshte me i madhi') // 21 eshte me i madhi
  }
   else {
      console.log(z, ' eshte me i madhi')
   }
```
#### Shembull me `switch`
```js
console.log("MENU\n1. Pije\n2. Ushqim\n3. Tjeter")
opcioni = 1

switch(opcioni) {
    case 1:
        console.log('Porositet pije') // Porositet pije
        y = 120
        if(y > 10 && y < 30) {
            console.log('Numer ndermjet 10 dhe 30')
        }
        break 
    case 2:
        console.log('Porositet ushqim')
        break
    case 3:
        console.log('Porositet tjeter')
        break
    default:
        console.log('GABIM')
        break
}
```
##### Duhet mbajtur mend qe `if` perdor kushte (shprehje) ndersa `switch` perdor vlera specifike.
---

## Unazat
+ for
+ while
+ do-while

Te printojme numrat nga 1 ne 10 me unazat `for`, `while` dhe `do-while`  
  
  Me `for`:

```js
// 1..10
for(i = 1; i <= 10; i++) {
    console.log(i) // 1 2 3 4 5 6 7 8 9 10
}

// infinite loop
// for(;;) {
//     code
// }

```
Me `while`:
```js
// 1..10
i = 1

while(i <= 10) {
    console.log(i) // 1 2 3 4 5 6 7 8 9 10
    i++
}

// infinite loop
// while(true) {
//     code
// }
```
Me `do-while`:
```js
// 1..10 
i = 11

do {
    console.log(i) // 11
    i++
}while(i <= 10);
```
###### Duhet mbajtur mend qe `do-while` e ekzekuton nje here programin pastaj kontrollon kushtin. Pra marxhi i gabimit eshte 1.

### `break` dhe `continue`
`break` ndalon ekszekutimin e e unazes.  
`continue` e kapercen nje hap ekzekutimi.
```js
for(i = 1; i <= 10; i++) {
    // if(i == 7) break
    
    if(i == 7) continue //1 2 3 4 5 6 8 9 10

    console.log(i)
}
```
### Quiz
#### Ushtrimi 1
Te shkruhet programi i cili permes perdorimit te unazes `for` llogarit shprehjen a^b.  
Shembull nese a=2 dhe b=3 atehere dalja e programit duhet te jete 8.
```js
        let a = 2
        let b = 3
        let r = 1

        for(i = 1; i <= b; i++) // kemi b perseritje te kodit ne block
        {
            r *= a
        }
        console.log(r); // 8

```
#### Ushtrimi 2
Te shkruhet programi i cili permes perdorimit te unazes `while` logarit x! (faktorialin e numrit x)  
Shembull:  
Nese x=5 atehere dalja duhet te jete 120. (dmth 5x4x3x2x1) 
```js
let x = 5;
let r = 1;

while(x >= 1) {
    r *= x
    x--
}

console.log(r); // 120
```

### Funksionet:
+ Funksionet ne JavaScript definohen permes celesfjales `function`, pas se ciles pasun emri i funksionit dhe kllapat - ne mes te kllapave mund te definohen parametrat sipas nevojes.
+ Funksionet mund te kene edhe parametra te paradefinuara.
+ Ekszistojne funksione boshe (void) te cilat nuk kthejne vlere
+ Si dhe funksione te cilat kthejne vlere.
+ Ne menyre qe te shohim daljen e funksionit ne duhet ta aktivizojme te njejtin.
+ Aktivizimi i funksionit behet permes emrit dhe kllapave `emriFunksionit();`
```js
function FUNCTION_NAME() {
    // CODE ...
}
```

```js
function FUNCTION_NAME() {
    return VALUE;
}
```

```js
function FUNCTION_NAME(ARG1, ARG2, ...ARGN) {
    // CODE
}
```
```js
function FUNCTION_NAME(ARG1, ARG2, ...ARGN) {
    return VALUE;
}
```
nje shembull:
```js
function hi(name) {
    console.log('Pershendetje' + name);
}
// aktivizimi
hi(); // Pershendetje undefined
hi('Arion'); // Pershendetje Arion
```
```js
function hi(name = 'mysafir') {
    console.log('Pershendetje' + name);
}
// aktivizimi
hi(); // Pershendetje mysafir
hi('Arion'); // Pershendetje Arion
```
