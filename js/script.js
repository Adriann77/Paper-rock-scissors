const btns = document.querySelectorAll('.one')
const PRS = ['paper', 'rock', 'scissors']
const title = document.querySelector('h1')
const playerPick = document.querySelector('.player-pick--btn')
const AIPick = document.querySelector('.AI-pick')
const result = document.querySelector('.result')
const secondScreen = document.querySelector('.second-screen')
const resultScore = document.querySelector('.score')
const playAgainBtn = document.querySelector('.play-again')
let score = 0

const showResults = e => {
	btns.forEach(el => el.classList.add('hide'))
	title.classList.add('hide')
	secondScreen.classList.add('show')

	let playerPicked = e.target.closest('button').classList.value
	let AIPicked = PRS[Math.floor(Math.random() * 3)]

	console.log(playerPicked)
	console.log(AIPicked)

	if (playerPicked.includes('paper') && AIPicked === 'paper') {
		result.textContent = 'Its a Tie'
		playerPick.innerHTML = '<i class="fa-regular fa-hand"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-regular fa-hand"></i></button>'
	} else if (playerPicked.includes('paper') && AIPicked === 'rock') {
		result.textContent = 'You won'
		score++
        resultScore.textContent = score

		playerPick.innerHTML = '<i class="fa-regular fa-hand"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-regular fa-hand"></i></button>'
	} else if (playerPicked.includes('paper') && AIPicked === 'scissors') {
		result.textContent = 'AI wins'
		score--
        resultScore.textContent = score

		playerPick.innerHTML = '<i class="fa-regular fa-hand"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-regular fa-hand-scissors"></i></button>'
	} else if (playerPicked.includes('rock') && AIPicked === 'paper') {
		result.textContent = 'AI wins'
		score--
		resultScore.textContent = score

		playerPick.innerHTML = '<i class="fa-solid fa-hand-fist"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-regular fa-hand"></i></button>'
	} else if (playerPicked.includes('rock') && AIPicked === 'rock') {
		result.textContent = 'Its a Tie'
		playerPick.innerHTML = '<i class="fa-solid fa-hand-fist"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-solid fa-hand-fist"></i></button>'
	} else if (playerPicked.includes('rock') && AIPicked === 'scissors') {
		result.textContent = 'You won'
		score++
		resultScore.textContent = score

		playerPick.innerHTML = '<i class="fa-solid fa-hand-fist"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-regular fa-hand-scissors"></i></button>'
	} else if (playerPicked.includes('scissors') && AIPicked === 'paper') {
		result.textContent = 'You won'
		score++
		resultScore.textContent = score

		playerPick.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-regular fa-hand"></i></button>'
	} else if (playerPicked.includes('scissors') && AIPicked === 'rock') {
		result.textContent = 'AI Wins'
		score--
		resultScore.textContent = score
		playerPick.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-solid fa-hand-fist"></i></button>'
	} else if (playerPicked.includes('scissors') && AIPicked === 'scissors') {
		result.textContent = 'Its a Tie'
		playerPick.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>'
		AIPick.innerHTML = '<h2>AI pick:</h2><button><i class="fa-regular fa-hand-scissors"></i></button>'
	}
}

const replay = () =>{
    btns.forEach(el => el.classList.remove('hide'))
	title.classList.remove('hide')
	secondScreen.classList.remove('show')
}

btns.forEach(e => e.addEventListener('click', showResults))
playAgainBtn.addEventListener('click', replay)
