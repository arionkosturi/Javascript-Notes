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
##### setInterval dhe setTimeout
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
##### Premtimet (Promises)
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


```


# Progres 0h33m00s/2h16m24s