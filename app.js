const correctAnswers = ['B', 'B', 'A', 'C', 'D', 'B', 'B', 'A', 'A', 'A']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
  e.preventDefault()
  
  score = 0

  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q8.value, form.q10.value]
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score ++
    }
  })
  const scorePercent = (score/correctAnswers.length * 100)
  
  result.classList.remove('d-none')
  result.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

  let output = 0
  const timer = setInterval(()=> {
  result.querySelector('span').innerText = `${output}%` 
  if (output === scorePercent) {
    clearInterval(timer)
  } else{
    output++
  }
  },10)

})


























