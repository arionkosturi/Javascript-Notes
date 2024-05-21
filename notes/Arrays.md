---
# Arrays
---

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
### Ushtrime me arrays
```js
  // indekset  0  1  2  3
let numbers = [1, 2, 4, 8];
            
console.log(numbers); // [1, 2, 4, 8]

// Per te shtuar nje element ne nje indeks te caktuar:
numbers[4] = 16;
console.log(numbers); // [1, 2, 4, 8, 16]

// Zakonisht ne nuk e dime sa elemente ka nje array por duam te shtojme nje element ne fund te tij. Per kete perdorim metoden `push`.
numbers.push(32);
console.log(numbers); // [1, 2, 4, 8, 16, 32]

// Per te futur nje element ne fillim te nje array perdorim metoden `unshift`
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 4, 8, 16, 32]

// Ashtu sic shtuam elemente, edhe mund te heqim elemente nga array.
// Per kete perdoret `pop`.

let lastNumber = numbers.pop();
console.log(numbers); // [0, 1, 2, 4, 8, 16]
console.log(lastNumber); // 32

// Per te hequr elementin e pare te array perdorim `shift`

let firstNumber = numbers.shift();
console.log(numbers); // [1, 2, 4, 8, 16]
console.log(firstNumber); // 0

// Per te hequr element ne indeks specifik perdorim `splice`
// 4 tregon ku fillon heqja, dhe 1 tregon sa elemente do te hiqen.
numbers.splice(4,1);
console.log(numbers); // [1, 2, 4, 8]
```

## Array Loops
```js
let list = [
  'Milk',
  'Eggs',
  'Butter',
  'Bread',
  'Bacon'
];

for (let index = 0; i < list.length; index++) {
  html += `<li>${list[index]}</li>`

}

document.getElementById('list').innerHTML = html;
```