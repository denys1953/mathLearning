let question = document.getElementById('question')
let counter = document.getElementById('counter')
let input = document.getElementById('input')
let checkbox = document.querySelectorAll('.form-check-input')
const modal = new bootstrap.Modal(document.querySelector('#myModal'))
let arr = []
let count = 0
let trueCount = 0
document.addEventListener('keypress', (e) => {
   if (e.code == 'Enter' || e.keyCode == 13) start()
})

for (let i = 0; i < checkbox.length; i++) {
   if (checkbox[i].checked) {
      arr.push(checkbox[i].value)
   }
   checkbox[i].addEventListener('click', check)
}

function check() {
   if (!this.checked) {
      arr.splice(arr.indexOf(this.value), 1)
   } else {
      arr.push(this.value)
   }
}

function rangePlus1(val) {
   console.log(val)
}
function rangePlus2(val) {
   console.log(val)
}

function rangeMinus1(val) {
   console.log(val)
}
function rangeMinus2(val) {
   console.log(val)
}

function rangeMultiply1(val) {
   console.log(val)
}
function rangeMultiply2(val) {
   console.log(val)
}

function rangeSplit1(val) {
   console.log(val)
}
function rangeSplit2(val) {
   console.log(val)
}

function rangePercent1(val) {
   console.log(val)
}
function rangePercent2(val) {
   console.log(val)
}


function start() {
   if (input.value !== '') {
      let quest = randomQuestion()
      if (input.value == '03072005') {
         modal.show()
      } else if (question.innerHTML.toString().includes('%')) {
         let index = question.innerHTML.toString().indexOf('%')
         let num = question.innerHTML.toString().slice(index+3)
         let percent = question.innerHTML.toString().slice(0, index)
         if (parseInt(input.value) === (num*percent)/100) {
            trueSolution()
         } else {
            falseSolution()
         }
      } else if (parseInt(input.value) == eval(question.innerHTML)) {
         trueSolution()
      } else {
         falseSolution()
      }
      input.value = ''
      question.innerHTML = quest
   }
}

function randomQuestion() {
   let randOp = randomOperation()
   let randNum = getRundomNumber(-200, 200)
   if (randOp == '+' || randOp == '-') {
      if (randNum < 0) {
         return getRundomNumber(-200, 200) + " " + randOp + " " + '(' + randNum + ')'
      } else {
         return getRundomNumber(-200, 200) + " " + randOp + " " + randNum
      }
   } else if(randOp == '/') {
      let randSecond = getRundomNumber(1, 300)
      let rand = getRundomNumber(1, 300) + " " + randOp + " " + randSecond
      while(eval(rand) % 1 !== 0) {
         if (randSecond !== 0) {
            randSecond = getRundomNumber(1, 300)
            rand = getRundomNumber(1, 300) + " " + randOp + " " + randSecond
         } else {
            continue
         }
      }
      return rand
   } else if (randOp === '%') {
      let parsentage = getRundomNumber(1, 99)
      let randNum = getRundomNumber(1, 300)
      let randSolve = (parsentage * randNum)/100
      while (randSolve % 1 !== 0) {
         parsentage = getRundomNumber(1, 99)
         randNum = getRundomNumber(1, 300)
         randSolve = (parsentage * randNum)/100
      }
      return parsentage + "% з " + randNum
   } else {
      return getRundomNumber(0, 100) + " " + randOp + " " + getRundomNumber(0, 21)
   }
}

function getRundomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}
function randomOperation() {
   return arr[Math.floor(Math.random()*arr.length)]
}
function styleTrue() {
   input.style.border = '2px solid lime'
   setTimeout(() => {
      input.style.transition = 'all ease 0.5s'
      input.style.border = '1px solid #ced4da'
   }, 1000)
   input.style.transition = 'none'
}
function styleFalse() {
   input.style.border = '2px solid red'
   setTimeout(() => {
      input.style.transition = 'all ease 0.5s'
      input.style.border = '1px solid #ced4da'
   }, 1000)
   input.style.transition = 'none'
}
question.innerHTML = randomQuestion()

function trueSolution() {
   count++
   trueCount++
   counter.innerHTML = count + ' / ' + trueCount
   styleTrue()
}
function falseSolution() {
   trueCount++
   counter.innerHTML = count + ' / ' + trueCount
   styleFalse()
}