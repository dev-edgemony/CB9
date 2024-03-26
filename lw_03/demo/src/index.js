const $counterDisplay = document.querySelector('.counter_display')
const $plusOne = document.querySelector('.plus_one')
const $minusOne = document.querySelector('.minus_one')

let counter = 0

const updateCounter = (value = 0) => {
  counter = value
  $counterDisplay.textContent = counter > 0 ? counter : 0
}

$plusOne.addEventListener('click', () => updateCounter(counter + 1))
$minusOne.addEventListener('click', () => updateCounter(counter - 1))

updateCounter()
