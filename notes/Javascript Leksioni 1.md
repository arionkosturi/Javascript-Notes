---
## Shenime dhe Ushtrime nga Javascript, Leksioni 1 Sesioni 20.
---
# Temat
1. #### Hyrje ne Javascript
2. #### Komentet
3. #### Shprehjet
4. #### Tipet e te dhenave
5. #### Variablat
6. #### Konstantet
7. #### Blloqet
8. #### Fusha e qasshmerise
9. #### Dallimi ndermjet var, let dhe const
10. #### Operatoret
---
### Hyrje ne JavaScript
##### JavaScript eshte gjuhe programuese e nivelit te larte.
##### Eshte gjuhe qe interpretohet gjate ekzekutimit.
##### Perkrah disa paradigma: Procedurial, Object Oriented dhe Functional.
##### E krijuar nga Brendan Eich ne vitin 1995.
##### Specifikimet jane nga ECMAScript.
---
### Alternativat per shkrimin e tekstit ne:
1. ###### Dokument
```js
document.write('Hello, world!');
```
2. ###### Console
```js
console.log('Hello, world!');
```
3. ###### Popup
```js
alert('Hello, world!');
```
---
### Komentet.
1. #### Koment ne nje rresht:
```js
// Ky eshte koment ne nje rresht
```
2. #### Koment ne disa rreshta:
```js
/*
Ky eshte nje
koment ne
disa rreshta
*/
```
---
### Kodi / Deklarata / Shprehja
1. #### Kodi - eshte set i instruksioneve te posatshme te cilat perdoren per t'i treguar kompjuterit si duhet te kryej nje detyre te caktuar.
2. #### Deklarate - nje grup i fjaleve, numrave dhe operatoreve.
```js
a = 5;
```
3. #### Shprehje - perbehen prej disa deklaratave.
```js
a = b * 5;
```
###### Pikepresja eshte opsionale por shume e rekomanduar.
---
## Tipet e te dhenave
1. #### String - text.
```js
'hello'
"hello world"
```
2. #### Number - Numra te plote ose me presje.
3. #### BigInt
4. #### Boolean - true ose false, 1 ose 0, e vertete ose e gabuar.
5. #### undefined - nje tip i te dhene kur variabla nuk eshte inicializuar:
```js
let a; // undefined
```
6. #### null - vlere boshe.
7. #### Symbol - Tip i te dhenave instanca e te ciles eshte unike dhe e pandryshueshme.
```js
let value = Symbol('Hello');
```
8. #### Object - Cift celes-vlere i nje koleksioni te te dhenash.
```js
let student = { };
```
---
#### Shembull:
```js
x = 10;
console.log(x);

x = 'abc';
console.log(x);

x = false;
console.log(x);
```
##### Dalja:
```console
10
abc
false
```
---
## Variablat dhe Konstantet
#### Variablat deklarohen permes celesfjales `let` ose `var`. Mund ta ndryshojne vleren pergjate rrjedhes se programit.
#### Konstantet deklarohen permes celesfjales `const`
#### Kur tentojme ti ndryshojme vleren konstantes interpretuesi na jep `error`
```bash
Uncaught TypeError: Assignment to constant variable.
```
---
#### Blloqet
##### Bllok i kodit llogaritet kodi qe gjendet brenda kllapave gjarperuese.
```js
  // Blloku 1
 {
    let x = 100;
    console.log(x);
 }
 // Blloku 2
  {
    let x = 200;
    console.log(x);
 }
 // Kodet jane te izoluar ne blloqet e tyre.
```
### Fusha e qasshmerise
1. #### Globale - e qasshme ne te gjithe scriptin.
2. #### Brenda Bllokut - e qasshme vetem brenda bllokut.

```js
{
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x, y, z); // 10 20 30
}
  console.log(x); // 10 - var ka qasshmeri globale.
  console.log(y); // y is not defined
  console.log(z); // z is not defined
```
---
## Operatoret
1. #### Operatoret aritmetik: `+`, `-`, `*`, `/`, `%`, `++`, `--` 
2. #### Operatoret per ndarje te vleres: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
3. #### Operatoret per krahasim: `<`, `>`, `<=`, `>=`, `==`, `!=`
4. #### Operatoret logjike: `&&`, `||`, `!`
5. #### Operatoret per bita: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
6. #### Operatori kusht `? :`
7. #### Operatori `typeof`

##### Shembull me operatore te ndarjes se vleres
```js
x = 10;
y = 3;
// x=10 y=3
x += y; // 10 += 3 x: 13
y /= 2; // 3 / 2 = 1.5 
x %= 2; // 13 %2 6 mbetja 1

console.log(x); // 1
console.log(y); // 1.5
```
##### Shembull me operatoret per krahasim:
```js
// >, <, >=, <=, ==, !=
  console.log(10 > 11); // False
  console.log(10 < 11); // True
  console.log(10 >= 11); // False
  console.log(10 <= 10); // True
  console.log(10 == '10'); //
  console.log(10 != '10'); //

```

# Progress: 2h03m21s