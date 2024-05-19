# Shenime dhe Ushtrime nga Javascript, Sesioni 24.

### Quiz me njohurite nga sessioni i meparshem.
#### Funksionet.
1. ##### Fusha e qasshmerise 
2. ##### Funksionet me sintakse shigjete.
3. ##### Funksionet anonime.
4. ##### Funksionet e rendit te larte.
5. ##### Funksionet rekursive.
6. ##### Parametrat e mbetur (Rest Params).

#### Sa eshte dalja?
```js
  const f = function(x) {
    return x++;
  }

  {
    let y = f(10);
  }

  console.log(y);
  
```
##### Dalja do jete si me poshte. Definimi i y eshte bere brenda nje blloku dhe nuk eshte e qasshme jashte bllokut.
```console
y is not defined
```
##### is not defined eshte error ndersa undefined eshte data type,
#### Po nese perdorim 'var' brenda bllokut?
```js
  const f = function(x) {
    return x++;
  }

  {
    var y = f(10);
  }

  console.log(y);  
```
