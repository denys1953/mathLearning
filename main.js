let question = document.getElementById('question')
let counter = document.getElementById('counter')
let input = document.getElementById('input')
let arr = ['+', '-', '*']
let count = 0
let trueCount = 0
document.addEventListener('keypress', (e) => {
   if (e.code == 'Enter' || e.keyCode == 13) start()
})


function start() {
   if (input.value !== '') {
      let quest = randomQuestion()
      
      if (parseInt(input.value) == eval(question.innerHTML)) {
         count++
         trueCount++
         counter.innerHTML = count + ' з ' + trueCount
         styleTrue()
      } else {
         trueCount++
         counter.innerHTML = count + ' з ' + trueCount
         styleFalse()
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
   } else {
      return getRundomNumber(0, 21) + " " + randOp + " " + getRundomNumber(0, 21)
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