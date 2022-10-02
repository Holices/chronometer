const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let timer
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function countdown() {
  setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0") //preencher no começo com um "0"

    if (minutes <= 0) {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
      buttonStop.classList.add('hide')
      buttonSet.classList.remove('hide')

      return
    }

    if(seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
    }

    countdown()

  }, 1000)
}

//EVENT-DRIVEN
//PROGRAMAÇÃO IMPERATIVA
//CALLBACK
buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  timer = prompt('Quantos minutos?')
  minutesDisplay.textContent = String(timer).padStart(2, "0")
})