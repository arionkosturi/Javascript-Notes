let list = [
  'Milk',
  'Eggs',
  'Butter',
  'Bread',
  'Bacon'
];
let html = '';

for (let index = 0; index < list.length; index++) {
  html += `<li>${list[index]}</li>`

}

document.getElementById('list').innerHTML = html;
