# Shenime dhe Ushtrime nga Javascript, Sesioni 23.

## Quiz 1
#### Nje Unaze/loop qe printon numrat cift nga 0 deri ne "n"
```js
const n=20;
for (let i=0; i<=n; i++)
  if (i % 2 ==0 ) {
    console.log(i); // 0,2,4,6,8,10,12,14,16,18,20
  }
```
## Quiz 2
### Te krijohet nje funksion qe pranon dy parametra, a dhe b.
#### Funksioni duhet te beje pjestimin e dy numrave, nese pjestuesi eshte 0, funksioni duhet te nxjerre daljen "Nuk lejohet pjestimi me zero!"
```js
function pjesto (a,b) {
  if (b==0) return 'Nuk lejohet pjestimi me zero!'
  return a/b
}
console.log(pjesto(3,0)); /* Nuk lejohet pjestimi me zero! */
console.log(pjesto(4,2)); /* 2 */
```
## Fusha e qasshmerise ne funksion.
##### Variablat dhe konstantet e definuara **BRENDA** funksionit **JANE** te qasshme vetem brenda tij. Variablat dhe konstantet e definuara **BRENDA** funksionit **NUK JANE** te qasshme vetem brenda tij. 
### Pra cdo gje qe definohet brenda funksionit mbetet e qasshme brenda funksionit por jo jashte tij!
```js
function f() {
  let x = 10;
  var y = 20;
  const z = 30;
  console.log(x,y,z); // 10 20 30

 }
 f();
 console.log(x); // x is not defined 
 console.log(y); // y is not defined
 console.log(z); // z is not defined
```
# Funksionet Anonime.
### Funksionet qe nuk kane emer, jane funksione anonime!

```js
  function() {
    // body
  }
```
#### Zakonisht funksionet anonime perdoren si argument brenda nje funksioni tjeter.
```js
function g(f) {
  f();
}

g( function() {
  console.log('Hi from f()')
  } ); // Hi from f()
```

#### Po ashtu i jepet si vlere nje variable ose konstante. Ne te tilla raste mund te marre edhe emrin "Function Expression".
```js
let funksioni = function(emri){
return "Pershendetje " + emri; }
```

### Shembull me funksion anonim.
```js
const zbritja = function(x,y) {
  console.log(x,y);
}
```
##### Aktivizimi i funksionit behet nepermjet emrit te konstantes.

```js
zbritja(10,4); //6
```
### Kur therrasim nje funksion anonim pa e lidhur me nje variabel ose konstante.
```js
function() {
  console.log('Hi from an. f.');
}
```
#### Do te ankohet interpretuesi, pasi nuk i kemi dhene emer funksionit.
```console
 Function statements require a function name
```

#### Qe nje funksion anonim te qendroje i pavarur e fusim ne kllapa (). Pra e bejme wrap
```js
(function() {
  console.log('Hi from an. f.')
});
```
#### Per ta aktivizuar funksionin shtojme () mbrapa
```js
(function() {
  console.log('Hi from an. f.')
})();
```
#### Nese e therrasim pa i dhene parameter.
```js
(function(name) {
  console.log('Hi from ' + name )
})();
```
#### Dalja do te jete Hi from undefined.
```console
 Hi from undefined
```

#### Shembull duke i dhene parametra funksionit.
```js
(function(name) {
  console.log('Hi from ' + name )
})('Arta');
```
#### Dalja
```console
 Hi from Arta
```

# Funksionet me sintakse shigjete / Arrow Functions.
##### Kur ka vetem nje parameter nuk vendosen kllapat. Dhe kur kodi ka vetem nje rresht, nuk ka nevoje per **return**.
```js
param => expression
```
#### Kur ka disa parametra, duhen kllapat. Parametrat ndahen me presje. Kur kodi ka vetem nje rresht, nuk ka nevoje per **return**.
```js
(param1, paramN) => expression
```

### Shembulli me funksion me sintakse shigjete.
```js
var power = (x,y) => {
  return Math.pow(x,y);
}
```
#### eshte i njejte me

```js
var power = (x,y) => Math.pow(x,y);
```
## Ushtime me funksionet me sintakse shigjete

### Funksion qe ben mbledhjen e dy parametrave

```js
const mbledhje = (x,y) => x + y;
console.log(mbledhje(10,12)); // 22
```

### Funksionin me sintakse shigjete mund t'ia japim si parameter nje funkioni tjeter:
```js
let mbledhje = (x,y) => x + y;

function pjesto (a,b) {
  console.log(a / b);
}

pjesto(mbledhje(10,2),6); // 2
pjesto(mbledhje(10,2),8); // 1.5
```
# Funksionet e Rendit te Larte
# Higher-Order Functions

### Merr si parameter nje funksion ose kthen nje funksion. Ose te kombinim i te dyjave.
#### Jane funksione qe bejne veprime brenda funksioneve te tjera.

### Funksioni g pranon si argument nje funksion tjeter
```js
function g(f) {
  f();
}
g(function() {
  console.log('Pershendetje')
})
```
### Shembull tjeter.
```js
function g(name) {
  return function () {
    console.log('Pershendetje' + name);
  }
}
g('Arta');
```
#### Dalja nuk kthen gje.
```console

```
#### Nese i shtojme console.log
```js
function g(name) {
  return function () {
    console.log('Pershendetje' + name);
  }
}
console.log(g('Arta'));
```
##### Dalja.
```console
[Function (anonymous)]
```
#### Per ta aktivizuar duhen shtuar kllapat ()
```js
console.log(g('Arta')());
```
##### Dalja
```console
Pershendetje Arta
undefined
```
#### Qe te jete dalja e sakte:
```js
g('Arta')();
```
##### Dalja
```console
Pershendetje Arta.
```
## Funksion qe e pranon nje funksion dhe e kthen nje funksion.


```js
function g(f) {
  return function() {
    f();
    }
  }

g(function(){ console.log('Hi') })();
```
##### Dalje
```console
Hi
```
### Shpjegim
#### Funksioni g(f) e pranon si argument nje funksion tjeter.
```js
function(){ console.log('Hi') }
```
#### Me kllapat () aktivizohet funksioni anonim qe po kthehet permes return.
```bash
g(function(){ console.log('Hi') })();
```

## Ushtrim me funksion te rendit te larte.
### Funksion g(f) qe pranon funksionin f si argument dhe kthen dyfishin e vleres qe kthehet nga funksioni f. 

```js
function g(f) {
    return 2 * f();
}

console.log(g(function() { return 20 })); //Kthen dyfishin e 20. Pra 40.
```
# Funksionet Rekursive
1. ### Funksionet rekursive jane funksione qe therrasin vetveten.
2. ### Kane te definuar piken ku duhet te perfundojne ekzekutimin, dhe menyren e thirrjes rekursive.

### Shembull
#### Nje rast ideal eshte perdorimi i funksionit rekursiv per llogaritjen e faktorialit te nje numri.

```js
  function factorial(n) {
      if (n<=1) return 1;
      else return n * factorial(n-1);
  } 
  console.log(factorial(5));
```
##### Dalja
```console
120
```
### Shembull me Vargun e Fibonaccit
#### Funksioni kthen vleren e elementit ne vargun e Fibonaccit ne pozicionin e "n".
##### 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

```js
function f(n) {
  if (n == 0) {
    return 0;
  }
  if (n < 2) return 1;
  return f(n-1) + f(n-2);

}
console.log(f(3)); // 2
console.log(f(7)); // 13
```
# Parametrat e mbetura
# Rest Parameters.
### "Rest Parameter" mundeson reprezantimin e nje numri te pakufishem te argumenteve te qasshme permes nje emri (parametri)

#### Sintaksa
```js
function f(a,b, ...theArgs) {
  // ...
}
```
### Shembull me Rest Parameters
#### Duhet mbajtur mend qe rezultati i rest params eshte nje __VEKTOR__ ose __ARRAY__.
```js
function sum(...args) {
  console.log(args)
}

sum(1) // [1]
sum(1,2,3) // [1, 2]
sum(1,2,3) // [1, 2, 3]
```
# VEKTORET
# ARRAYS
### Vektoret jane nje koleksion ose bashkesi vlerash nen nje emer te vetem.
```js
const vektori = [1, 3, 8, "abc", false];
```
## Informacion per VEKTORET
1. ### Vektoret jane tipe te perbera te te dhenave.
2. ### Ne vetvete mund te mbajne me shume vlera.
3. ### Elementet e vektorit mun te jene te tipeve te ndryshme.
4. ### Cdo element ka indeksin perkates.
5. ### Indeksi i elementit te pare eshte 0, ndersa i elementit te fundit eshte N-1, ku N eshte numri i elementeve te vektorit.

## Vektoret ne Javascript mund te definohen ne dy menyra.
### 1. Permes kllapave. __Kjo eshte menyra me e perdorur!__
```js
var students = [];
```
### 2. Si Objekt
```js
var students = new Array();
```
## Qasja ne elementet e vektorit
### Elementeve u qasemi permes indeksit perkates.
```js
var students = ["Arta", "Artani", "Drita", "Jetoni"];
    // indekset:  0        1         2        3
console.log(students[2]); // Drita
```
### Kur dalim jashte indekseve kemi __undefined__.
```js
  let nums = [9, 7, 3, 4, 12, 6];
// indekset   0  1  2  3  4   5
console.log(nums[6]); // undefined
```
### Per te marre numrin e elementeve te array perdorim .length
```js
  nums.length
```

### Ushtrim me vektoret
#### Te shkruhet nje unaze qe iteron mbi cdo element te vektorit.
```js
let nums = [9,7,3,4,12,6];
for (i=0; i<=nums.length; i++){
  console.log(nums[i]);
}
```
##### Dalja eshte si me poshte
```console
9
7
3
4
12
6
undefined
```
##### Sic e shohim ne dalje kemi edhe nje element undefined pasi kemi dale jashte indeksit te vektorit.
### Per ta rregulluar perdorim

```js
i<=nums.length-1
```
##### ose
```js
i<nums.length
```
#### Pra zgjidhja perfundimtare eshte
```js
let nums = [9,7,3,4,12,6];
for (i=0; i<nums.length; i++) {
  console.log(nums[i]);
}
```
#### Nje menyre tjeter iterimi eshte edhe kjo strukture qe perdoret eksluzivisht per vektoret.
```js
let nums = [9,7,3,4,12,6];
for (n of nums) {
  console.log(n);
}
```
## Shembull me Rest Args dhe iterimin me for te vektorit.
```js
function sum(...args) {
  shuma = 0;
  for(argumenti of args) {
    shuma += argumenti;
  }
  console.log(shuma)
}

sum(1) // 1
sum(1,2,3) // 3
sum(1,2,3) // 6
sum(1,12,3,7) // 23
```
##### Dalja
```console
1
3
6
23
```
#### Nese ne Rest Params fusim para dhe argumenta, atehere ato vendosen para vektorit.
```js
function sum(x, ...args) {
  
  console.log(x,args)
}

sum(1) // x: 1 args: nuk ka
sum(1,2) // x: 1 args: [2]
sum(1,2,3) // x: 1 args: [2,3]
sum(1,12,3,7) // x: 1 args: [12,3,7]
```
##### Dalja
```console
1 []
1 [2]
1 [2,3]
1 [12,3,7]
```
# Funksionet e Vektoreve
# Array Functions
### 1. Vektoret si edhe cdo tip tjeter te dhenash trajtohet si objekt.
### 2. Mbi vektoret mund te thirren funksione te ndryshme te paradefinuara nga vete JavaScript
### 3. Disa funksione qe perdoren shpesh: pop, push, forEach, filter, map, reduce.
```js
 nums.pop();
 nums.push();
 nums.forEach();
 nums.filter();
 nums.map();
 nums.reduce();
```
#### Funksioni qe thirret brenda nje klase quhet __method__ 
```js
 nums.forEach();
 // nums eshte objekt i klasese Array
 // forEach eshte funksion brenda klases Array
 // funksioni qe eshte brenda klases thirret me pike.
 // nums.funksioni();

```