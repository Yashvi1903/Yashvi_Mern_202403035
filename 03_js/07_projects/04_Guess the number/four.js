let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1) {
        alert('please enter a number more than 1')
    } else if (guess > 100) {
        alert('please enter a number less than 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endgame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right`)
        endgame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`)
    }

}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(Message) {
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}
function newgame() {
const  newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e)
{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML='';
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;
})
}
function endgame() {
    console.log(randomNumber)
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newgame()
}