const PI = 3.14;
const circle = {
    r: 10,
    d: 20,
    
    area: function() {
        return PI * r * r;
    }
}

const {r, d, area} = circle
console.log(r,d,area());