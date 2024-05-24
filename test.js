const o = {
    x: 'a',
    r: 'a' + null,
    z: this.r + undefined
}

// a: a, r: anull z: NaN
// console.log(o)

// const s   - e cila e merr vleren e celesit s    / celes s nuk kemi   ----> undefined
const {x: a, z: b} = o

console.log(a, b); 