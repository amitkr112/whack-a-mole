// importing all html variables to javascript
const square=document.querySelectorAll('.square');
const mole=document.querySelectorAll('.mole');
const timeleft=document.querySelector('#time-left');
let score=document.querySelector('#score');

// initialising time and result
let result=0;
let currenttime=timeleft.textContent


function randomSquare()
{
    square.forEach(className=>{
        className.classList.remove('mole');
    })
    // removing all the moles
    let randomPosition=square[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole'); 
    // adding the mole to random
    hitPosition = randomPosition.id
}



square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
      hitPosition=null
    }
  })
})


function moveMole() {
  setInterval(randomSquare, 1000)
}

moveMole()


function countDown() {
  currenttime--
  timeleft.textContent = currenttime

  if(currenttime === 0 ) {
    clearInterval(timerid)
    alert('GAME OVER! Your final score is' + result)
  }
}

let timerid = setInterval(countDown, 1000)
// doubt mole kaha se aaya