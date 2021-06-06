
const delBtn = document.querySelector('#del');
const equalsBtn = document.querySelector('#equals');
const plusBtn = document.querySelector('#plus');
const divideBtn = document.querySelector('#divide');
const numBtn = document.querySelectorAll('#num');
const curText = document.querySelector('#cur-input');
const prevText = document.querySelector('#prev-input');
const operationsBtn = document.querySelectorAll('#func')

let curAnswer = '';
let prevAnswer = '';
let lastOperation = '';
let haveDot = false;


numBtn.forEach(number => {
  number.addEventListener('click', (e) => {
    if(e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    }
    else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    curAnswer += e.target.innerText;
    curText.innerText = curAnswer;
  })
  
})

operationsBtn.forEach (operation => {
  operation.addEventListener('click', (e) => {
    if(!curAnswer) return;
    haveDot = false;
  })
})
