const btns = document.querySelectorAll('.one');
const PRS = ['paper', 'fist', 'scissors'];
const title = document.querySelector('h1');
const playerPick = document.querySelector('.player-pick--btn');
const AIPick = document.querySelector('.AI-pick');
const result = document.querySelector('.result');
const secondScreen = document.querySelector('.second-screen');
const resultScore = document.querySelector('.score');
const playAgainBtn = document.querySelector('.play-again');
let score = 0;

const showResults = e => {
	btns.forEach(el => el.classList.add('hide'));
	title.classList.add('hide');
	secondScreen.classList.add('show');

	let playerPicked = e.target.closest('button').classList.value;
	let AIPicked = PRS[Math.floor(Math.random() * 3)];

	playerPick.innerHTML = `<i class="fa-solid fa-hand-${playerPicked}  show"></i>`;

	AIPick.innerHTML = `<h2>AI pick:</h2><button><i class="fa-solid fa-hand-${AIPicked}"></i></button>`;

	console.log(playerPicked);
	console.log(AIPicked);
	if (playerPicked.includes('paper') && AIPicked === 'fist') {
		result.textContent = 'You won';
		score++;
	} else if (playerPicked.includes('paper') && AIPicked === 'scissors') {
		result.textContent = 'AI wins';
		score--;
	} else if (playerPicked.includes('fist') && AIPicked === 'paper') {
		result.textContent = 'AI wins';
		score--;
	} else if (playerPicked.includes('fist') && AIPicked === 'scissors') {
		result.textContent = 'You won';
		score++;
	} else if (playerPicked.includes('scissors') && AIPicked === 'paper') {
		result.textContent = 'You won';
		score++;
	} else if (playerPicked.includes('scissors') && AIPicked === 'fist') {
		result.textContent = 'AI Wins';
		score--;
	} else {
		result.textContent = 'Its a Tie';
	}
	resultScore.textContent = score;
};

const replay = () => {
	btns.forEach(el => el.classList.remove('hide'));
	title.classList.remove('hide');
	secondScreen.classList.remove('show');
};

btns.forEach(e => e.addEventListener('click', showResults));
playAgainBtn.addEventListener('click', replay);
