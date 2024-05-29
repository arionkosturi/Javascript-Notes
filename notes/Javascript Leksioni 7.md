---
## Shenime dhe Ushtrime nga Javascript, Leksioni 7 Sesioni 27.
---
### TEMAT
- `setInterval` dhe `setTimeout`
- Premtimet (Promises)
- Programimi asinkron (`Async` / `Await`)
- Ajax
- Konsumimi i API-ve përmes Axios
- Web Storage API
---
#### setInterval dhe setTimeout
- `setInterval` – përsëritje e një funksioni ne menyre ciklike gjate nje intervali te caktuar.
- `setTimeout` - ekzekutimi i një funksioni pas një intervali të
caktuar.
- Të dyja procedurat kryhen përmes funksioneve të integruara
- `setInterval` (function, interval).
- `setTimeout` (function, interval).

Shembull me `setInterval`:
```js
let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple']
let index = 0
      //        0       1       2       3           4       5
      // -> 6 ?! 5 -> 0 1 2 3 4 5 0 1 2 3 4 5 0

    setInterval(function() {
        if(index > 5) index = 0
           document.body.style.backgroundColor = colors[index]
           index++
        }, 5000)
```
Shembull me `setTimeout`:  
Mbas 5 sekondash shtohet nje element `p`:
```html
<body>
<h1>Welcome</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<script>
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'

        setTimeout(function() {
            const pn = document.createElement('p')
            const tn = document.createTextNode(text)
            pn.append(tn) 
            document.body.append(pn)
        }, 5000)
        // 5000 milisekonda = 5 sekonda
    </script>
</body>
```
#### Premtimet (Promises)
- Premtimi është një prokurë për një vlerë e cila jo detyrimisht është e njohur në momentin kur krijohet premtimi (promise).
- Krijohet përmes klasës Promise dhe pranon si argument një funksion
me dy parametra.
  - `Resolve`.
  - `Rejected`.
- Ka tre gjendje në të cilat mund të kalojë:
  - `pending`: gjendja fillestare, as i përmbushur e as i refuzuar. 
  - `fulfilled`: operacionet u përfunduan me sukses.
  - `rejected`: diçka shkoi keq përgjatë kryerjes së operacioneve.

Shembull me `Promise`:

```js
const divide = (x, y) => new Promis ((resolve, reject) => {
    if(y == 0) {
    reject('Nuk pjestohet me zero!')
    return;
    }
    resolve(x / y)
})
 
// jemi duke aktivizuar funksion i cili kthen promise
divide(10, 0)
// rezultati i resolve trajtohet ne then 
  .then(resp => console.log(resp))
// rezultati i reject trajtohet ne catch
  .catch(err => console.log(err))
```

#### Programimi asinkron (Async/Await)
- Në JavaScript ekziston sintaksë speciale për të punuar me promiset në
mënyrë më komode
- Çelësfjalët `async` dhe `await`
- Async – kur kjo çelësfjalë qëndron para emrit të funksionit tregon se
funksioni gjithmonë kthen një premtim (promise)
- Await - bën që JavaScript të presë deri sa premtimi (promise) të
zbatohet dhe të kthehet rezultati

Shembull me `async` dhe `await`:

```js
 console.log('hi')
        
        async function f(x, y) {
            const devide = new Promise(function(resolve, reject) {
                if(y == 0) {
                    reject('Nuk pjestohet me zero!')
                    return;
                }

                setTimeout(() => {
                    resolve(x / y)
                }, 5000)
            })

            document.write(await devide)
        }

        
        f(100, 20) // f per tu ekzekutuar nuk ka nevoje te pres oper. tjera

        setTimeout(() => {
            console.log('hi after 2 sec')
        }, 2000)
```

#### AJAX
- AJAX është akronim për Asynchronous Javascript And XML.
- Për herë të parë u prezantua në Mars të vitit 1999.
- Përmes AJAX ne mund të marrim të dhëna nga servuesi dhe përditësojmë pjesë të caktuara në ueb sajt pa pasur nevojë të rifresokojmë faqen.
- Në parim Ajax e përdorë klasën XMLHttpRequest (XHR) për të dërguar
dhe pranuar informacione nga ueb servuesi në mënyrë asinkrone pa e bllokuar faqen.


Shembull me AJAX:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, 
    initial-scale=1.0">
    <title>AJAX</title>
    <style>
        .box { 
        box-sizing: border-box; 
        width: 800px; 
        border: 1px solid #ccc; 
        padding: 10px; 
        margin: 40px auto; 
        display: grid; 
        justify-content: center; 
        grid-template-columns: 500px 250px; gap: 10px; 
        }
        #students { background-color: antiquewhite;}
    </style>
</head>
<body>
    <div class="box">
        <div>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button id="load-students">Get students</button>
        </div>
        <div id="students"></div>
    </div>

    <script>
        function getStudents(filepath, targetElement) {
            const xhttp = new XMLHttpRequest()
            xhttp.onload = function() {
                targetElement.innerHTML = this.responseText
            }
            xhttp.open('GET', filepath)
            xhttp.send()
        }

        const btn = document.querySelector('#load-students')
        const students_div = document.querySelector('#students')
        
        btn.addEventListener('click', () => getStudents('students.txt', students_div))
    </script>
</body>
</html>
```
#### Konsumimi i API-ve me Axios
- Axios është HTTP klient i bazuar në premtime (promise)
- Punon në ueb shfletues dhe node.js
- Instalohet përmes komandës npm install axios
- Dokumentimi i Axios https://github.com/axios/axios

Shembull me `axios`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
    content="width=device-width, 
    initial-scale=1.0">
    <title>Axios Todos</title>
</head>
<body>
    
<script type="module">
import axios from './node_modules/axios/dist/esm/axios.js';

function composeTable(data) {
let html = `
    <h1>Todos</h1>
    <table border="1">
    <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Completed</th>
    </tr>`
    
for(let item of data) {
    html += `
    <tr>
    <td>${item.id}</td>
    <td>${item.title}</td>
    <td>${item.completed ? 'Yes' : 'No'}</td>
    </tr>`
    }
    
    html += `
    </table>
    `
    return html
}
axios.get('https://jsonplaceholder.typicode.com/todos')
     .then(function (response) {
           const todos = response.data
         document.body.innerHTML = composeTable(todos)
       })
     .catch(function (error) {
         console.log(error);
        })
    </script>
</body>
</html>
```
#### Local Storage
- Hapërsira në të cilën ruhen të dhëna permanente
- Të dhënat ruhen në paisjen e përdoruesit
- Procedurat kryhen përmes funksioneve të integruara 

Per te ruajtur te dhenat ne Local Storage:
```js
localStorage.setItem(key,value);
```

Per te lexuar te dhenat nga Local Storage:
```js
let lastname = localStorage.getItem(key);
```

Per te hequr te dhenat nga Local Storage:
```js
localStorage.removeItem(key);
```

Per te fshire te githa te dhenat e ruajtura ne Local Storage:
```js
localStorage.clear();
```

Shembull me Local Storage:
```html


```
# Progres 1h55m00s/2h16m24s