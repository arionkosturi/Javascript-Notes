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