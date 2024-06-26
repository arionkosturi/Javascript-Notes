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
## Temat e reja:
- Regular Expressions
- Document Object Model (DOM)
- Manipulimi i DOM-it
- Events
- Modulet (Krijimi, eksportimi dhe importimi)

### Regular Expressions 

```js
sentence = "Regular 122 expressions are 2347689 patterns used to match character combinations in strings. In 146 JavaScript, regular 2342 expressions 121382 are also 164 objects."

// si e shkruajme nje funksion i cili i gjene te gjitha numrat?

function nums(s) {
   words = s.split(" ")
   ns = []
     for(w of words) {
        if(w >= 10 && w <= 99) {
             ns.push(w)
         }
     }
     return ns
 }

 console.log(nums(sentence))
```
Per ta zgjidhur me lehte, ne perdorim regular expressions:
```js
sentence = "Regular 122 expressions are 2347689 patterns used to match character combinations in strings. In 146 JavaScript, regular 2342 expressions 121382 are also 164 objects."


 const regexp = /\d{1,}/g;

 console.log(
     sentence.match(regexp)
 )
```
Shembull tjeter me regex
```js
sentence = "Regular 12.05.2021 expressions are 24.07.1990 patterns used to match character combinations in strings. In 146 JavaScript, regular 2342 expressions 121382 are also 16.09.1921 objects."


console.log(
    sentence.replace(/\d{2}\.\d{2}\.\d{4}/g, '....')
)

```
### Document Object Model - DOM
#### Cfare eshte HTML DOM?
- DOM eshte akronim per Document Object Model
- DOM paraqet nje nderfaqe (interface) e cila mundeson qasje dhe manipulim te elementeve.
- Definon:
  - Te gjitha elementet e HTML si objekte.
  - Karakteristikat e elementeve (attributes).
  - Sjelljet e elementeve (methods).
  - Ngjarjet (events) qe mund te ndodhin
  
  
  
Ushtrim me regex:
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
### DOM
#### Qasja ne elementet HTML
Per tu qasur ne elementet e HTML perdorim:
- Permes ID - getElementById.
- Permes emrit te Tagut - getElementsByTagName. 
- Permes klases - getElementsByClassName. 
- Permes selektorit - querySelector.
- querySelectorAll
```html
<body>
  <h1>Welcome</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci doloribus obcaecati aut numquam voluptate, <a href="#" class="btn">repellat</a> at quibusdam, laboriosam assumenda aspernatur consequuntur vitae dignissimos! Aspernatur, explicabo. Consectetur sit nesciunt accusantium dolorum.</p>
<a href="/read-more-text" class="btn">Read more<a>
<a href="/close-window" id="close-btn" class="btn">Close</a>
    <script>
        // permes id-se
        // const close_btn = document.getElementById('close-btn')
        // console.log(close_btn)

        // permes emrit te tagut
        // const links = document.getElementsByTagName('a')
        // console.log(links)
        // for(link of links) {
        //     console.log(link.getAttribute('href'))
        // }

        // permes klases
        // const btns = document.getElementsByClassName('btn')
        // for(btn of btns) {
        //     console.log(btn.innerHTML)
        // }

        // permes selektorit (ngjajshem si ne css)
        // const btn = document.querySelector('.btn')
        // console.log(btn)
        const btns = document.querySelectorAll('.btn')
        console.log(btns)
    </script>
</body>
```


Nje shembull me CRUD (Create, Read, Update, Delete):
```html
<body>
    <ul class="menu">
        <li>Lorem ipsum dolor sit. 1</li>
        <li class="second">Lorem ipsum dolor sit. 2</li>
        <li>111 Lorem ipsum dolor sit.</li>
        <li id="last">Lorem ipsum dolor sit.</li>
    </ul>

    <script>
        // Create: shto nje li element te ri ne liste
        const ul = document.querySelector('ul.menu')
        const li_element = document.createElement('li')
        const li_text = document.createTextNode('Une jam elementi i fundit ne liste')
        li_element.append(li_text)
        ul.append(li_element)

        // Read 
        // getElementById, getElementsByTagName, getElementsByClassName, querySelector, querySelectorAll

        // Update
        const third_li = document.querySelector('li:nth-child(3)')
        third_li.innerHTML = "Permbajtja e re e elementit"
        third_li.style.color = 'red'
        third_li.style.border = '1px solid green'

        // Delete
        const first_elem = document.querySelector('li:nth-child(1)')
        first_elem.remove()
    </script>
</body>
```
### Eventet / Ngjarjet (Events)
- Eventet ne JavaScript shkrepen kur ndodh ndonje interaksion ne HTML dokument.
- Shembullin me te zakonshem e kemi psh. klikojme ne nje button apo kur shtypim tastin `Enter`pasi kemi shkruar nodnje tekst ne fushen per kerkim.
- Eventet duhen te definohen dhe percaktohen se ne cilin element dhe pas ciles ngjarje do te shkrepen.
- Eventet ne JavaScript definohen permes metodes `addEventListener` ose direkt ne element si atribut.

- Struktura eshte:
  - Parametri i pare eshte tipi i eventit, si `click`, `mousedown` ose cdo event tjeter ne HTML DOM.
  - Parametri i dyte eshte funksioni qe duam te therrasim kur ndodh eventi.
  - Parametri i trete eshte nje vlere `Boolean` nese do perdorim `bubbling` apo `capturing`. (Kjo eshte opsionale) 
```js
element.addEventListener(event, function, useCapture);
```
Shembull 1 me eventet:
- Perzgjedhim elementin mbi te cilin ndodh eventi.
- Cili eshte eventi? Ne rastin tone `click` dhe cfare ndodh mbas eventit?
 
```html
<body>
    <h1>Welcome</h1>
    <button>Click me!</button>
    <script>
        // perzgjedhim elementin mbi te cilin ndodhe eventi
        const btn = document.querySelector('button')

        // cili eshte eventi? ne rastin tone 'click'
        btn.addEventListener('click', function() { 
            const h1 = document.querySelector('h1')
            h1.innerHTML = 'Buttoni u klikua'
            h1.style.color = 'red'
        })
    </script>
</body>
```
Shembulli 2 me eventet:
```html
<body>
    <h1>Welcome</h1>
    <button>Click me!</button>
    <script>
        // perzgjedhim elementin mbi te cilin ndodhe eventi
        const btn = document.querySelector('button')

        // cili eshte evnti? ne rastin tone 'click'
        btn.addEventListener('click', event => { 
            // console.log(event.target)
            event.target.innerHTML = 'Butoni u klikua'
            event.target.style.color = 'blue'
        })
    </script>
</body>
```

Shembull 3 me eventet - useCapture ose Bubbling:
```html
<body>
    <div>
        <button>Click me!</button>
    </div>
    <script>
        const div = document.querySelector('div')
        const btn = document.querySelector('button')
        div.addEventListener('click', e => console.log('eventi i div-it'), true)
        btn.addEventListener('click', e => console.log('eventi i btn-se'), true)
    </script>
</body>
```
---
## Modulet
- Modulet reprezantojne skeda te posatshme ne te cilat shkruhet kod qe kryen nje funksionalitet te caktuar.
- Perdoren per te izoluar dhe modelizuar kodin.
- Mund te perdoren ne vende dhe raste te ndryshme, pasi te jene definuar.
- Modulet mund te importohen dhe eksportohen permes celesfjaleve.
  - Per importim perdoret celesfjala `import`.
  - Per exportim perdoret celesfjala `export`.
---
Shembull i thjeshte me modulet.  
1. Krijojme nje dokument me emrin `Math.js` ne folderin `modules`:
```js 
//eksportojme funksionet add dhe sub.
export function add(x, y) {
    return x + y
}

export function sub(x, y) {
    return x - y
}
```
2. Importojme modulin ne dokumentin HTML:
```html
<body>
    <script type="module">
        // importojme modulin
        import {sub} from "./modules/Math.js"

        const x = parseInt(prompt('Jepe nr. x: '))
        const y = parseInt(prompt('Jepe nr. y: '))
        // perdorim funksionin e importuar nga moduli.
        alert(sub(x, y))
    </script>
</body>
```
---
Nje shembull tjeter me modulet.
1. Krijojme nje dokument `Gallery.js` ne folderin `modules`.
```js
const images = [
'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg',
'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg',
'https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg'
]

function scaleImage(event) { event.target.style.scale = 2.5 }

export function create_gallery(parent) {

    let html = ''
    for(let img of images) {
        html += `<img src="${img}" style="height: 120px" onclick="scaleImage(event)" />`
    }
    parent.innerHTML = html
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <style>
        body {
            margin: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            gap: 10px;
        }

        img:hover {
            z-index: 99999;
        }
    </style>
</head>
<body>
    <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg" style="height: 120px" onclick="scaleImage(event)"><img src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg" style="height: 120px" onclick="scaleImage(event)"><img src="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg" style="height: 120px" onclick="scaleImage(event)"><img src="https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg" style="height: 120px" onclick="scaleImage(event)">
</body>
    <script type="module">
        // import {create_gallery} from "./modules/Gallery.js"

        // create_gallery(document.body)
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('mouseover', e => e.target.style.scale = 1.5)
            img.addEventListener('mouseout', e => e.target.style.scale = 1)
        })
    </script>
</body>
</html>
```